#!/usr/bin/env python3
"""Blockstrike rooms service: the handshake mailbox for peer-to-peer rooms.

Players connect straight to each other over WebRTC; to find each other they
leave a few small messages (host announcement, offer, answer) in a mailbox
named after the room code. One installation, HUB_HOST, keeps every mailbox,
so players on different Möbius installations meet in the same room (the same
shape as Möbius Town's hub).

- The app frame calls its own service (private lane). On the hub it answers
  from its own database; elsewhere it forwards to the hub's public lane.
- The hub's public lane answers other installations and the hub's own public
  web page (/blockstrike), so friends without Möbius can join too.

Mailboxes hold only short-lived handshake messages; game traffic never comes
here.
"""
from __future__ import annotations

MOBIUS_PRELOAD = True

import asyncio  # noqa: E402
import json  # noqa: E402
import os  # noqa: E402
import re  # noqa: E402
import sqlite3  # noqa: E402
import sys  # noqa: E402
import time  # noqa: E402
from pathlib import Path  # noqa: E402
from urllib.parse import urlsplit  # noqa: E402

import httpx  # noqa: E402

HUB_HOST = 'mobius-production-bbe5.up.railway.app'
SERVICE_PATH = '/api/app-services/blockstrike'
ROOM = re.compile(r'^[A-Za-z0-9_-]{1,48}$')
MAX_MESSAGE_BYTES = 12 * 1024
MAX_PER_ROOM = 300
KEEP_SECONDS = 45 * 60        # how long a handshake message lives
RECENT_SECONDS = 30 * 60      # what a first poll (no cursor) returns
MAX_RETURN = 100


class Problem(Exception):
  def __init__(self, message: str, status: int = 400):
    super().__init__(message)
    self.message = message
    self.status = status


def require(condition, message: str, status: int = 400):
  if not condition:
    raise Problem(message, status)


def is_hub() -> bool:
  return urlsplit(os.environ.get('INSTANCE_ORIGIN', '')).netloc.lower() == HUB_HOST


def mailbox() -> sqlite3.Connection:
  store = Path(os.environ['APP_STORAGE_DIR'])
  store.mkdir(parents=True, exist_ok=True)
  db = sqlite3.connect(str(store / 'rooms.sqlite3'), timeout=10, isolation_level=None)
  db.execute('PRAGMA journal_mode=WAL')
  db.execute('PRAGMA busy_timeout=10000')
  db.execute('CREATE TABLE IF NOT EXISTS mail (id INTEGER PRIMARY KEY AUTOINCREMENT, room TEXT NOT NULL, '
             'body TEXT NOT NULL, created REAL NOT NULL)')
  db.execute('CREATE INDEX IF NOT EXISTS mail_room ON mail(room, id)')
  return db


def clean(body) -> tuple[str, object]:
  require(isinstance(body, dict), 'Invalid request.')
  room = body.get('room')
  require(isinstance(room, str) and ROOM.match(room), 'Invalid room code.')
  return room, body


def send(body) -> dict:
  room, body = clean(body)
  message = body.get('message')
  require(isinstance(message, dict), 'Invalid message.')
  text = json.dumps(message, separators=(',', ':'))
  require(len(text) <= MAX_MESSAGE_BYTES, 'Message is too large.', 413)
  now = time.time()
  with mailbox() as db:
    db.execute('DELETE FROM mail WHERE created < ?', (now - KEEP_SECONDS,))
    count = db.execute('SELECT COUNT(*) FROM mail WHERE room = ?', (room,)).fetchone()[0]
    require(count < MAX_PER_ROOM, 'This room is too busy right now.', 429)
    cursor = db.execute('INSERT INTO mail (room, body, created) VALUES (?, ?, ?)', (room, text, now))
    return {'id': cursor.lastrowid}


def poll(body) -> dict:
  room, body = clean(body)
  since = body.get('since')
  with mailbox() as db:
    if isinstance(since, int) and not isinstance(since, bool) and since >= 0:
      rows = db.execute('SELECT id, body FROM mail WHERE room = ? AND id > ? ORDER BY id LIMIT ?',
                        (room, since, MAX_RETURN)).fetchall()
    else:
      rows = db.execute('SELECT id, body FROM mail WHERE room = ? AND created > ? ORDER BY id LIMIT ?',
                        (room, time.time() - RECENT_SECONDS, MAX_RETURN)).fetchall()
    last = db.execute('SELECT MAX(id) FROM mail').fetchone()[0] or 0
  messages = [{'id': row[0], 'body': json.loads(row[1])} for row in rows]
  # The cursor never goes backwards, and an empty room still gets one so the
  # next poll only sees what arrives after it.
  cursor = messages[-1]['id'] if messages else (since if isinstance(since, int) and since >= 0 else last)
  return {'messages': messages, 'cursor': cursor}


def local(path: str, body):
  if path == 'send':
    return send(body)
  if path == 'poll':
    return poll(body)
  raise Problem('Not found.', 404)


async def forward(path: str, body):
  url = 'https://' + HUB_HOST + SERVICE_PATH + '/' + path
  try:
    async with httpx.AsyncClient(timeout=9, follow_redirects=False, trust_env=False) as client:
      response = await client.post(url, json=body)
    data = response.json() if response.content else {}
  except Exception:
    raise Problem('The Blockstrike room server is unreachable right now.', 502)
  if response.status_code == 429:
    raise Problem('The room server is busy, retrying.', 429)
  if response.status_code >= 400:
    message = data.get('error') if isinstance(data, dict) else None
    raise Problem(message or 'The room server refused the request.',
                  response.status_code if response.status_code < 500 else 502)
  return data


async def main(req) -> dict:
  require(isinstance(req, dict) and req.get('schema') == 1, 'Invalid service request.')
  path, method, body = req.get('path') or '', req.get('method'), req.get('body')
  require(method == 'POST' and path in ('send', 'poll'), 'Not found.', 404)
  if req.get('public'):
    require(is_hub(), 'This installation does not host Blockstrike rooms.', 404)
    return local(path, body)
  scope = (req.get('actor') or {}).get('scope')
  require(scope in ('owner', 'app', 'agent'), 'Open Blockstrike from your signed-in Möbius.', 403)
  if is_hub():
    return local(path, body)
  clean(body)
  return await forward(path, body)


if __name__ == '__main__':
  try:
    print(json.dumps({'status': 200, 'body': asyncio.run(main(json.load(sys.stdin))),
                      'headers': {'Cache-Control': 'no-store'}}))
  except Problem as exc:
    print(json.dumps({'status': exc.status, 'body': {'error': exc.message}}))
  except Exception as exc:
    print(f'{type(exc).__name__}: {exc}', file=sys.stderr)
    print(json.dumps({'status': 500, 'body': {'error': 'Blockstrike rooms could not complete this request.'}}))
