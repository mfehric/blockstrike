export const CSS = `
.bs-root{position:fixed;inset:0;overflow:hidden;background:#9fc4e8;color:#fff;font-family:var(--font);user-select:none;-webkit-user-select:none}
.bs-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;outline:none}
.bs-cross{position:absolute;left:50%;top:50%;width:0;height:0;pointer-events:none}
.bs-cross i{position:absolute;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.55)}
.bs-cross i:nth-child(1){left:-1px;top:-11px;width:2px;height:7px}
.bs-cross i:nth-child(2){left:-1px;top:4px;width:2px;height:7px}
.bs-cross i:nth-child(3){left:-11px;top:-1px;width:7px;height:2px}
.bs-cross i:nth-child(4){left:4px;top:-1px;width:7px;height:2px}
.bs-speed{position:absolute;left:50%;bottom:max(28px,var(--mobius-safe-bottom,0px));transform:translateX(-50%);width:min(320px,70vw);text-align:center;pointer-events:none;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.bs-speed b{font-size:34px;font-weight:800;letter-spacing:.02em;font-variant-numeric:tabular-nums}
.bs-speed small{font-size:13px;opacity:.8;margin-left:4px}
.bs-bar{height:6px;background:rgba(0,0,0,.35);border-radius:3px;margin-top:6px;overflow:hidden}
.bs-bar div{height:100%;width:0;background:linear-gradient(90deg,#4bd3ff,#ffd84b,#ff5a4b);border-radius:3px}
.bs-chip{display:inline-block;margin-top:6px;padding:2px 10px;border-radius:99px;background:rgba(0,0,0,.4);font-size:12px;font-weight:700;letter-spacing:.12em}
.bs-fps{position:absolute;right:max(12px,var(--mobius-safe-right,0px));top:max(12px,var(--mobius-safe-top,0px));font-size:12px;opacity:.75;text-shadow:0 1px 3px #000;pointer-events:none;font-variant-numeric:tabular-nums}
.bs-menu{position:absolute;inset:0;display:grid;place-items:center;background:rgba(14,20,34,.62);backdrop-filter:blur(4px);padding:max(16px,var(--mobius-safe-top,0px)) 16px 16px}
.bs-card{width:min(440px,100%);max-height:100%;overflow:auto;background:#161d2e;border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,.5)}
.bs-title{font-size:34px;font-weight:900;letter-spacing:.06em;margin:0}
.bs-title span{color:#ff7a4b}
.bs-sub{opacity:.7;margin:2px 0 16px;font-size:14px}
.bs-play{width:100%;min-height:52px;border:0;border-radius:12px;background:#ff7a4b;color:#1a0e08;font-size:18px;font-weight:800;letter-spacing:.05em;cursor:pointer}
.bs-play:hover{background:#ff8f68}.bs-play:focus-visible,.bs-card input:focus-visible{outline:3px solid #fff;outline-offset:2px}
.bs-row{display:grid;grid-template-columns:96px 1fr 44px;align-items:center;gap:10px;margin:14px 0 0;font-size:14px}
.bs-row output{text-align:right;font-variant-numeric:tabular-nums;opacity:.85}
.bs-row input{width:100%;accent-color:#ff7a4b;min-height:28px}
.bs-keys{display:grid;grid-template-columns:auto 1fr;gap:6px 12px;margin:18px 0;font-size:13px;opacity:.85}
.bs-keys kbd{background:#2a3450;border-radius:5px;padding:1px 7px;font-family:inherit;font-weight:700;font-size:12px;text-align:center}
.bs-note{font-size:12px;opacity:.6;margin-top:12px}
@media (prefers-reduced-motion:reduce){.bs-menu{backdrop-filter:none}}
`
export const CSS2 = `
.bs-hm{position:absolute;left:50%;top:50%;width:0;height:0;pointer-events:none;opacity:0}
.bs-hm i{position:absolute;width:3px;height:11px;background:#fff;left:-1.5px;top:-1.5px;transform-origin:1.5px 1.5px}
.bs-hm i:nth-child(1){transform:rotate(45deg) translateY(7px)}.bs-hm i:nth-child(2){transform:rotate(135deg) translateY(7px)}
.bs-hm i:nth-child(3){transform:rotate(225deg) translateY(7px)}.bs-hm i:nth-child(4){transform:rotate(315deg) translateY(7px)}
.bs-hm.head i{background:#ff4b4b}.bs-hm.kill i{background:#ffd84b}
.bs-dn{position:absolute;left:0;top:0;font-weight:900;font-size:20px;pointer-events:none;text-shadow:0 2px 4px #000;white-space:nowrap;will-change:transform,opacity}
.bs-dn.head{color:#ff5a4b;font-size:26px}
.bs-hp{position:absolute;left:max(18px,var(--mobius-safe-left,0px));bottom:max(24px,var(--mobius-safe-bottom,0px));width:220px;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.bs-hp b{font-size:40px;font-weight:900;font-variant-numeric:tabular-nums}
.bs-hp .bs-bar div{background:linear-gradient(90deg,#ff5a4b,#5fe38a)}
.bs-ammo{position:absolute;right:max(18px,var(--mobius-safe-right,0px));bottom:max(24px,var(--mobius-safe-bottom,0px));text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)}
.bs-ammo b{font-size:46px;font-weight:900;font-variant-numeric:tabular-nums}
.bs-ammo span{font-size:20px;opacity:.7;margin-left:6px}
.bs-wname{font-size:13px;letter-spacing:.14em;font-weight:800;opacity:.9}
.bs-slots{display:flex;gap:6px;justify-content:flex-end;margin-top:6px}
.bs-slots i{font-style:normal;font-size:12px;font-weight:800;padding:3px 9px;border-radius:6px;background:rgba(0,0,0,.4);opacity:.7}
.bs-slots i.on{background:#ff7a4b;color:#1a0e08;opacity:1}
.bs-reload{font-size:13px;font-weight:800;letter-spacing:.12em;color:#ffd84b;height:16px}
.bs-top{position:absolute;left:50%;top:max(10px,var(--mobius-safe-top,0px));transform:translateX(-50%);text-align:center;text-shadow:0 2px 6px rgba(0,0,0,.6);pointer-events:none}
.bs-top b{font-size:30px;font-weight:900;font-variant-numeric:tabular-nums;letter-spacing:.05em}
.bs-top div{font-size:13px;font-weight:700;opacity:.9;letter-spacing:.08em}
.bs-feed{position:absolute;right:max(12px,var(--mobius-safe-right,0px));top:max(34px,calc(var(--mobius-safe-top,0px) + 22px));display:grid;gap:4px;justify-items:end;pointer-events:none}
.bs-feed div{background:rgba(0,0,0,.45);padding:3px 10px;border-radius:6px;font-size:13px;font-weight:700;animation:bsIn .2s ease-out}
.bs-feed div.mine{outline:2px solid #ffd84b}.bs-feed div.died{outline:2px solid #ff5a4b}
.bs-feed em{font-style:normal;opacity:.7;margin:0 6px;font-size:11px;letter-spacing:.08em}
@keyframes bsIn{from{transform:translateX(20px);opacity:0}}
.bs-scope{position:absolute;inset:0;display:none;pointer-events:none;background:radial-gradient(circle at 50% 50%,transparent 0,transparent min(36vh,36vw),rgba(0,0,0,.55) calc(min(36vh,36vw) + 1px),#000 calc(min(36vh,36vw) + 6px))}
.bs-scope.on{display:block}
.bs-scope:before,.bs-scope:after{content:"";position:absolute;left:50%;top:50%;background:linear-gradient(var(--d,90deg),#000 0 44%,rgba(0,0,0,.85) 44% 49.6%,transparent 49.6% 50.4%,rgba(0,0,0,.85) 50.4% 56%,#000 56%)}
.bs-scope:before{--d:180deg;width:1px;height:min(72vh,72vw);transform:translate(-50%,-50%)}.bs-scope:after{--d:90deg;height:1px;width:min(72vh,72vw);transform:translate(-50%,-50%)}
.bs-scope-dot{position:absolute;left:50%;top:50%;width:4px;height:4px;border-radius:50%;background:#ff3b30;transform:translate(-50%,-50%);box-shadow:0 0 4px #ff3b30}
.bs-scope-zl{position:absolute;left:50%;top:calc(50% + min(36vh,36vw) - 34px);transform:translateX(-50%);font:700 13px/1 system-ui,sans-serif;color:rgba(0,0,0,.7);letter-spacing:.06em}
.bs-choice{display:grid;grid-template-columns:96px 1fr;align-items:center;gap:4px 10px;margin:14px 0 0;font-size:14px}
.bs-choice .bs-seg{margin:0;grid-template-columns:repeat(auto-fit,minmax(0,1fr))}
.bs-choice .bs-seg button{min-height:36px}
.bs-choice small{grid-column:2;color:#ffb38f;font-size:12px}
.bs-hurt{position:absolute;inset:0;pointer-events:none;opacity:0;box-shadow:inset 0 0 140px 40px rgba(255,30,30,.85)}
.bs-hdir{position:absolute;left:50%;top:50%;width:0;height:0;pointer-events:none;opacity:0}
.bs-hdir i{position:absolute;left:-40px;top:-150px;width:80px;height:18px;border-radius:50% 50% 0 0/100% 100% 0 0;background:rgba(255,50,50,.9)}
.bs-dead{position:absolute;left:0;right:0;top:34%;text-align:center;pointer-events:none;text-shadow:0 2px 10px #000;display:none}
.bs-dead b{display:block;font-size:44px;font-weight:900;letter-spacing:.08em;color:#ff5a4b}
.bs-dead span{font-size:20px;font-weight:700}
.bs-sb{position:absolute;inset:0;display:none;place-items:center;background:rgba(10,14,24,.55);pointer-events:none}
.bs-sb.on{display:grid}
.bs-table{width:min(520px,92vw);background:#161d2e;border-radius:14px;padding:14px 18px;border:1px solid rgba(255,255,255,.12)}
.bs-table h3{margin:0 0 8px;font-size:15px;letter-spacing:.14em}
.bs-table table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.bs-table th{font-size:11px;letter-spacing:.12em;opacity:.6;text-align:right;padding:3px 6px}.bs-table th:first-child{text-align:left}
.bs-table td{padding:6px;text-align:right;font-weight:700;border-top:1px solid rgba(255,255,255,.08)}.bs-table td:first-child{text-align:left}
.bs-table tr.me td{color:#ffd84b}
.bs-dot{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:8px;vertical-align:-1px}
.bs-seg{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:14px}
.bs-seg button{min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.18);background:#222b42;color:#fff;font-weight:700;cursor:pointer;font-size:14px}
.bs-seg button.on{background:#ff7a4b;color:#1a0e08;border-color:#ff7a4b}
.bs-seg button:focus-visible{outline:3px solid #fff;outline-offset:2px}
.bs-ghost{width:100%;min-height:46px;margin-top:10px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:transparent;color:#fff;font-size:15px;font-weight:700;cursor:pointer}
.bs-win{font-size:15px;opacity:.85;margin:0 0 12px}
.bs-text{width:100%;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:#0f1524;color:#fff;font:inherit;font-size:16px;padding:0 12px}
.bs-code{text-transform:uppercase;letter-spacing:.3em;text-align:center;font-weight:800}
.bs-seg-btn{min-height:44px;border-radius:10px;border:0;background:#ff7a4b;color:#1a0e08;font-weight:800;cursor:pointer}
.bs-seg-btn:disabled,.bs-play:disabled{opacity:.45;cursor:not-allowed}
.bs-players{list-style:none;margin:14px 0;padding:0;display:grid;gap:8px}
.bs-players li{background:#222b42;border-radius:10px;padding:10px 12px;font-weight:700}
`
