var XE=Object.create;var Up=Object.defineProperty;var WE=Object.getOwnPropertyDescriptor;var qE=Object.getOwnPropertyNames;var YE=Object.getPrototypeOf,ZE=Object.prototype.hasOwnProperty;var Fe=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(i){throw n=[i],i}};var $i=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},KE=(e,t)=>{for(var n in t)Up(e,n,{get:t[n],enumerable:!0})},JE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of qE(t))!ZE.call(e,s)&&s!==n&&Up(e,s,{get:()=>t[s],enumerable:!(i=WE(t,s))||i.enumerable});return e};var ts=(e,t,n)=>(n=e!=null?XE(YE(e)):{},JE(t||!e||!e.__esModule?Up(n,"default",{value:e,enumerable:!0}):n,e));var zy=$i(Bt=>{"use strict";var Ip=Symbol.for("react.transitional.element"),QE=Symbol.for("react.portal"),jE=Symbol.for("react.fragment"),$E=Symbol.for("react.strict_mode"),tA=Symbol.for("react.profiler"),eA=Symbol.for("react.consumer"),nA=Symbol.for("react.context"),iA=Symbol.for("react.forward_ref"),sA=Symbol.for("react.suspense"),aA=Symbol.for("react.memo"),Ry=Symbol.for("react.lazy"),rA=Symbol.for("react.activity"),oA=Symbol.for("react.view_transition"),Ey=Symbol.iterator;function lA(e){return e===null||typeof e!="object"?null:(e=Ey&&e[Ey]||e["@@iterator"],typeof e=="function"?e:null)}var Ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dy=Object.assign,Uy={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Uy,this.updater=n||Ny}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ly(){}Ly.prototype=Kr.prototype;function Pp(e,t,n){this.props=e,this.context=t,this.refs=Uy,this.updater=n||Ny}var zp=Pp.prototype=new Ly;zp.constructor=Pp;Dy(zp,Kr.prototype);zp.isPureReactComponent=!0;var Ay=Array.isArray;function Op(){}var Ee={H:null,A:null,T:null,S:null},Oy=Object.prototype.hasOwnProperty;function Bp(e,t,n){var i=n.ref;return{$$typeof:Ip,type:e,key:t,ref:i!==void 0?i:null,props:n}}function cA(e,t){return Bp(e.type,t,e.props)}function Fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ip}function uA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wy=/\/+/g;function Lp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uA(""+e.key):t.toString(36)}function hA(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Op,Op):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Zr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Ip:case QE:r=!0;break;case Ry:return r=e._init,Zr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Lp(e,0):i,Ay(s)?(n="",r!=null&&(n=r.replace(wy,"$&/")+"/"),Zr(s,t,n,"",function(c){return c})):s!=null&&(Fp(s)&&(s=cA(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(wy,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Ay(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Lp(i,l),r+=Zr(i,t,n,a,s);else if(l=lA(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Lp(i,l++),r+=Zr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Zr(hA(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function wu(e,t,n){if(e==null)return e;var i=[],s=0;return Zr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function fA(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Cy=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Iy(e){var t=Ee.T,n={};n.types=t!==null?t.types:null,Ee.T=n;try{var i=e(),s=Ee.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Op,Cy)}catch(a){Cy(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ee.T=t}}function Py(e){var t=Ee.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Iy(Py.bind(null,e))}var dA={map:wu,forEach:function(e,t,n){wu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wu(e,function(){t++}),t},toArray:function(e){return wu(e,function(t){return t})||[]},only:function(e){if(!Fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Bt.Activity=rA;Bt.Children=dA;Bt.Component=Kr;Bt.Fragment=jE;Bt.Profiler=tA;Bt.PureComponent=Pp;Bt.StrictMode=$E;Bt.Suspense=sA;Bt.ViewTransition=oA;Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ee;Bt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ee.H.useMemoCache(e)}};Bt.addTransitionType=Py;Bt.cache=function(e){return function(){return e.apply(null,arguments)}};Bt.cacheSignal=function(){return null};Bt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Dy({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Oy.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Bp(e.type,s,i)};Bt.createContext=function(e){return e={$$typeof:nA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:eA,_context:e},e};Bt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Oy.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Bp(e,a,s)};Bt.createRef=function(){return{current:null}};Bt.forwardRef=function(e){return{$$typeof:iA,render:e}};Bt.isValidElement=Fp;Bt.lazy=function(e){return{$$typeof:Ry,_payload:{_status:-1,_result:e},_init:fA}};Bt.memo=function(e,t){return{$$typeof:aA,type:e,compare:t===void 0?null:t}};Bt.startTransition=Iy;Bt.unstable_useCacheRefresh=function(){return Ee.H.useCacheRefresh()};Bt.use=function(e){return Ee.H.use(e)};Bt.useActionState=function(e,t,n){return Ee.H.useActionState(e,t,n)};Bt.useCallback=function(e,t){return Ee.H.useCallback(e,t)};Bt.useContext=function(e){return Ee.H.useContext(e)};Bt.useDebugValue=function(){};Bt.useDeferredValue=function(e,t){return Ee.H.useDeferredValue(e,t)};Bt.useEffect=function(e,t){return Ee.H.useEffect(e,t)};Bt.useEffectEvent=function(e){return Ee.H.useEffectEvent(e)};Bt.useId=function(){return Ee.H.useId()};Bt.useImperativeHandle=function(e,t,n){return Ee.H.useImperativeHandle(e,t,n)};Bt.useInsertionEffect=function(e,t){return Ee.H.useInsertionEffect(e,t)};Bt.useLayoutEffect=function(e,t){return Ee.H.useLayoutEffect(e,t)};Bt.useMemo=function(e,t){return Ee.H.useMemo(e,t)};Bt.useOptimistic=function(e,t){return Ee.H.useOptimistic(e,t)};Bt.useReducer=function(e,t,n){return Ee.H.useReducer(e,t,n)};Bt.useRef=function(e){return Ee.H.useRef(e)};Bt.useState=function(e){return Ee.H.useState(e)};Bt.useSyncExternalStore=function(e,t,n){return Ee.H.useSyncExternalStore(e,t,n)};Bt.useTransition=function(){return Ee.H.useTransition()};Bt.version="19.3.0"});var Jr=$i((AL,By)=>{"use strict";By.exports=zy()});var Zy=$i(Ue=>{"use strict";function kp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Cu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function es(e){return e.length===0?null:e[0]}function Nu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Cu(o,n))l<s&&0>Cu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Cu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Cu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ue.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Fy=performance,Ue.unstable_now=function(){return Fy.now()}):(Hp=Date,Hy=Hp.now(),Ue.unstable_now=function(){return Hp.now()-Hy});var Fy,Hp,Hy,Rs=[],ia=[],pA=1,yi=null,wn=3,Xp=!1,Ll=!1,Ol=!1,Wp=!1,ky=typeof setTimeout=="function"?setTimeout:null,Xy=typeof clearTimeout=="function"?clearTimeout:null,Vy=typeof setImmediate<"u"?setImmediate:null;function Ru(e){for(var t=es(ia);t!==null;){if(t.callback===null)Nu(ia);else if(t.startTime<=e)Nu(ia),t.sortIndex=t.expirationTime,kp(Rs,t);else break;t=es(ia)}}function qp(e){if(Ol=!1,Ru(e),!Ll)if(es(Rs)!==null)Ll=!0,jr||(jr=!0,Qr());else{var t=es(ia);t!==null&&Yp(qp,t.startTime-e)}}var jr=!1,Il=-1,Wy=5,qy=-1;function Yy(){return Wp?!0:!(Ue.unstable_now()-qy<Wy)}function Vp(){if(Wp=!1,jr){var e=Ue.unstable_now();qy=e;var t=!0;try{t:{Ll=!1,Ol&&(Ol=!1,Xy(Il),Il=-1),Xp=!0;var n=wn;try{e:{for(Ru(e),yi=es(Rs);yi!==null&&!(yi.expirationTime>e&&Yy());){var i=yi.callback;if(typeof i=="function"){yi.callback=null,wn=yi.priorityLevel;var s=i(yi.expirationTime<=e);if(e=Ue.unstable_now(),typeof s=="function"){yi.callback=s,Ru(e),t=!0;break e}yi===es(Rs)&&Nu(Rs),Ru(e)}else Nu(Rs);yi=es(Rs)}if(yi!==null)t=!0;else{var a=es(ia);a!==null&&Yp(qp,a.startTime-e),t=!1}}break t}finally{yi=null,wn=n,Xp=!1}t=void 0}}finally{t?Qr():jr=!1}}}var Qr;typeof Vy=="function"?Qr=function(){Vy(Vp)}:typeof MessageChannel<"u"?(Gp=new MessageChannel,Gy=Gp.port2,Gp.port1.onmessage=Vp,Qr=function(){Gy.postMessage(null)}):Qr=function(){ky(Vp,0)};var Gp,Gy;function Yp(e,t){Il=ky(function(){e(Ue.unstable_now())},t)}Ue.unstable_IdlePriority=5;Ue.unstable_ImmediatePriority=1;Ue.unstable_LowPriority=4;Ue.unstable_NormalPriority=3;Ue.unstable_Profiling=null;Ue.unstable_UserBlockingPriority=2;Ue.unstable_cancelCallback=function(e){e.callback=null};Ue.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Wy=0<e?Math.floor(1e3/e):5};Ue.unstable_getCurrentPriorityLevel=function(){return wn};Ue.unstable_next=function(e){switch(wn){case 1:case 2:case 3:var t=3;break;default:t=wn}var n=wn;wn=t;try{return e()}finally{wn=n}};Ue.unstable_requestPaint=function(){Wp=!0};Ue.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=wn;wn=e;try{return t()}finally{wn=n}};Ue.unstable_scheduleCallback=function(e,t,n){var i=Ue.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:pA++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,kp(ia,e),es(Rs)===null&&e===es(ia)&&(Ol?(Xy(Il),Il=-1):Ol=!0,Yp(qp,n-i))):(e.sortIndex=s,kp(Rs,e),Ll||Xp||(Ll=!0,jr||(jr=!0,Qr()))),e};Ue.unstable_shouldYield=Yy;Ue.unstable_wrapCallback=function(e){var t=wn;return function(){var n=wn;wn=t;try{return e.apply(this,arguments)}finally{wn=n}}}});var Jy=$i((CL,Ky)=>{"use strict";Ky.exports=Zy()});var $y=$i(Cn=>{"use strict";var mA=Jr();function jy(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function sa(){}var On={d:{f:sa,r:function(){throw Error(jy(522))},D:sa,C:sa,L:sa,m:sa,X:sa,S:sa,M:sa},p:0,findDOMNode:null},gA=Symbol.for("react.portal"),vA=Symbol.for("react.recoverable"),Qy=Symbol.for("react.optimistic_key");function yA(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gA,key:i==null?null:i===Qy?Qy:""+i,children:e,containerInfo:t,implementation:n}}var Pl=mA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Du(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=On;Cn.browser=function(e){return{$$typeof:vA,_reason:e}};Cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(jy(299));return yA(e,t,null,n)};Cn.flushSync=function(e){var t=Pl.T,n=On.p;try{if(Pl.T=null,On.p=2,e)return e()}finally{Pl.T=t,On.p=n,On.d.f()}};Cn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,On.d.C(e,t))};Cn.prefetchDNS=function(e){typeof e=="string"&&On.d.D(e)};Cn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Du(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?On.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&On.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Cn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Du(t.as,t.crossOrigin);On.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&On.d.M(e)};Cn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Du(n,t.crossOrigin);On.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Cn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Du(t.as,t.crossOrigin);On.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else On.d.m(e)};Cn.requestFormReset=function(e){On.d.r(e)};Cn.unstable_batchedUpdates=function(e,t){return e(t)};Cn.useFormState=function(e,t,n){return Pl.H.useFormState(e,t,n)};Cn.useFormStatus=function(){return Pl.H.useHostTransitionStatus()};Cn.version="19.3.0"});var n_=$i((NL,e_)=>{"use strict";function t_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_)}catch(e){console.error(e)}}t_(),e_.exports=$y()});var GM=$i(df=>{"use strict";var $e=Jy(),Vx=Jr(),_A=n_();function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function kx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function i_(e){if(Mc(e)!==e)throw Error(et(188))}function xA(e){var t=e.alternate;if(!t){if(t=Mc(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return i_(s),e;if(a===i)return i_(s),t;a=a.sibling}throw Error(et(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function Wx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Wx(e),t!==null)return t;e=e.sibling}return null}function Yn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Yn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function br(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function s_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function qx(e){var t=[null,null],n=br(e);return n===null||Yx(t,e,n.child,{foundSelf:!1}),t}function Yx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Yx(e,t,n.child,i))return!0;n=n.sibling}return!1}function je(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(et(559))}}var ao=null,Em=null;function SA(e,t,n){return e===n?!0:e===t?(ao=e,!0):!1}function bA(e,t,n){return e===n?(Em=e,!1):e===t?(Em!==null&&(ao=e),!0):!1}function a_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Am(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Se=Object.assign,MA=Symbol.for("react.element"),Uu=Symbol.for("react.transitional.element"),kl=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),Zx=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),Kx=Symbol.for("react.consumer"),os=Symbol.for("react.context"),P0=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Rm=Symbol.for("react.suspense_list"),z0=Symbol.for("react.memo"),la=Symbol.for("react.lazy"),Nm=Symbol.for("react.activity"),TA=Symbol.for("react.legacy_hidden"),EA=Symbol.for("react.memo_cache_sentinel"),Dm=Symbol.for("react.view_transition"),AA=Symbol.for("react.recoverable"),r_=Symbol.iterator;function zl(e){return e===null||typeof e!="object"?null:(e=r_&&e[r_]||e["@@iterator"],typeof e=="function"?e:null)}var wA=Symbol.for("react.client.reference");function Um(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wA?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ro:return"Fragment";case wm:return"Profiler";case Zx:return"StrictMode";case Cm:return"Suspense";case Rm:return"SuspenseList";case Nm:return"Activity";case Dm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case kl:return"Portal";case os:return e.displayName||"Context";case Kx:return(e._context.displayName||"Context")+".Consumer";case P0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z0:return t=e.displayName||null,t!==null?t:Um(e.type)||"Memo";case la:t=e._payload,e=e._init;try{return Um(e(t))}catch{}}return null}var Xl=Array.isArray,It=Vx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=_A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cr={pending:!1,data:null,method:null,action:null},Lm=[],oo=-1;function ps(e){return{current:e}}function yn(e){0>oo||(e.current=Lm[oo],Lm[oo]=null,oo--)}function Ce(e,t){oo++,Lm[oo]=e.current,e.current=t}var hs=ps(null),oc=ps(null),va=ps(null),yh=ps(null);function _h(e,t){switch(Ce(va,t),Ce(oc,e),Ce(hs,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=xx(t),e=vM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yn(hs),Ce(hs,e)}function Co(){yn(hs),yn(oc),yn(va)}function Om(e){var t=e.memoizedState;t!==null&&(Bo._currentValue=t.memoizedState,Ce(yh,e)),t=hs.current;var n=vM(t,e.type);t!==n&&(Ce(oc,e),Ce(hs,n))}function xh(e){oc.current===e&&(yn(hs),yn(oc)),yh.current===e&&(yn(yh),Bo._currentValue=cr)}var Zp,o_;function ra(e){if(Zp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zp=t&&t[1]||"",o_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zp+e+o_}var Kp=!1;function Jp(e,t){if(!e||Kp)return"";Kp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Kp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ra(n):""}function CA(e,t){switch(e.tag){case 26:case 27:case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return e.child!==t&&t!==null?ra("Suspense Fallback"):ra("Suspense");case 19:return ra("SuspenseList");case 0:case 15:return Jp(e.type,!1);case 11:return Jp(e.type.render,!1);case 1:return Jp(e.type,!0);case 31:return ra("Activity");case 30:return ra("ViewTransition");default:return""}}function l_(e){try{var t="",n=null;do t+=CA(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Im=Object.prototype.hasOwnProperty,B0=$e.unstable_scheduleCallback,Qp=$e.unstable_cancelCallback,RA=$e.unstable_shouldYield,NA=$e.unstable_requestPaint,ai=$e.unstable_now,DA=$e.unstable_getCurrentPriorityLevel,Jx=$e.unstable_ImmediatePriority,Qx=$e.unstable_UserBlockingPriority,Sh=$e.unstable_NormalPriority,UA=$e.unstable_LowPriority,jx=$e.unstable_IdlePriority,LA=$e.log,OA=$e.unstable_setDisableYieldValue,Tc=null,ri=null;function ha(e){if(typeof LA=="function"&&OA(e),ri&&typeof ri.setStrictMode=="function")try{ri.setStrictMode(Tc,e)}catch{}}var oi=Math.clz32?Math.clz32:zA,IA=Math.log,PA=Math.LN2;function zA(e){return e>>>=0,e===0?32:31-(IA(e)/PA|0)|0}var Lu=256,Ou=262144,Iu=4194304;function sr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=sr(i):(r&=o,r!==0?s=sr(r):n||(n=o&~e,n!==0&&(s=sr(n))))):(o=i&~a,o!==0?s=sr(o):r!==0?s=sr(r):n||(n=i&~e,n!==0&&(s=sr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Ec(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $x(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-oi(n),s=1<<i;t|=e[i],n&=~s}return t}function BA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(){var e=Iu;return Iu<<=1,(Iu&62914560)===0&&(Iu=4194304),e}function jp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ac(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function FA(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-oi(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&eS(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function eS(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-oi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function nS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-oi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function iS(e,t){var n=t&-t;return n=(n&42)!==0?1:F0(n),(n&(e.suspendedLanes|t))!==0?0:n}function F0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function H0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sS(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:FM(e.type))}function c_(e,t){var n=oe.p;try{return oe.p=e,t()}finally{oe.p=n}}var Gs=Math.random().toString(36).slice(2),gn="__reactFiber$"+Gs,Zn="__reactProps$"+Gs,Vo="__reactContainer$"+Gs,u_="__reactEvents$"+Gs,HA="__reactListeners$"+Gs,VA="__reactHandles$"+Gs,h_="__reactResources$"+Gs,wc="__reactMarker$"+Gs,bh="__reactLoad$"+Gs;function Zh(e){delete e[gn],delete e[Zn],delete e[HA],delete e[VA]}function or(e){var t;if(t=e[gn])return t;for(var n=e.parentNode;n;){if(t=n[Vo]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cx(e);e!==null;){if(n=e[gn])return n;e=Cx(e)}return t}e=n,n=e.parentNode}return null}function Go(e){if(e=e[gn]||e[Vo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function yo(e){var t=e[h_];return t||(t=e[h_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function cn(e){e[wc]=!0}function aS(e){e[bh]=void 0}var rS=new Set,oS={};function Mr(e,t){Ro(e,t),Ro(e+"Capture",t)}function Ro(e,t){for(oS[e]=t,e=0;e<t.length;e++)rS.add(t[e])}var GA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),f_={},d_={};function kA(e){return Im.call(d_,e)?!0:Im.call(f_,e)?!1:GA.test(e)?d_[e]=!0:(f_[e]=!0,!1)}var ae=!1;function p_(){var e=ae;return ae=!1,e}function $u(e,t,n){if(kA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Pu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ns(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ei(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function XA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pm(e){if(!e._valueTracker){var t=lS(e)?"checked":"value";e._valueTracker=XA(e,t,""+e[t])}}function cS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=lS(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var WA=/[\n"\\]/g;function Mi(e){return e.replace(WA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ei(t)):e.value!==""+ei(t)&&(e.value=""+ei(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?$p(e,ei(e.value)):$p(e,ei(t)):n!=null?$p(e,ei(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ei(o):e.removeAttribute("name")}function uS(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Pm(e);return}n=n!=null?""+ei(n):"",t=t!=null?""+ei(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Pm(e)}function $p(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function _o(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ei(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hS(e,t,n){if(t!=null&&(t=""+ei(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ei(n):""}function fS(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(Xl(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ei(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Pm(e)}function No(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function m_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||qA.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function dS(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ae=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(m_(e,s,i),ae=!0)}else for(var a in t)t.hasOwnProperty(a)&&m_(e,a,t[a])}function V0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var YA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ZA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function th(e){return ZA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ls(){}var Bm=null;function G0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,xo=null;function g_(e){var t=Go(e);if(t&&(e=t.stateNode)){var n=e[Zn]||null;t:switch(e=t.stateNode,t.type){case"input":if(zm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Zn]||null;if(!s)throw Error(et(90));zm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&cS(i)}break t;case"textarea":hS(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&_o(e,!!n.multiple,t,!1)}}}var tm=!1;function pS(e,t,n){if(tm)return e(t,n);tm=!0;try{var i=e(t);return i}finally{if(tm=!1,(lo!==null||xo!==null)&&(cf(),lo&&(t=lo,e=xo,xo=lo=null,g_(t),e)))for(t=0;t<e.length;t++)g_(e[t])}}function lc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Zn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var Ps=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fm=!1;if(Ps)try{$r={},Object.defineProperty($r,"passive",{get:function(){Fm=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Fm=!1}var $r,fa=null,k0=null,eh=null;function mS(){if(eh)return eh;var e,t=k0,n=t.length,i,s="value"in fa?fa.value:fa.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return eh=s.slice(e,1<i?1-i:void 0)}function nh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zu(){return!0}function v_(){return!1}function Bn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zu:v_,this.isPropagationStopped=v_,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=Bn(Ua),Cc=Se({},Ua,{view:0,detail:0}),KA=Bn(Cc),em,nm,Bl,Jh=Se({},Cc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:X0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(em=e.screenX-Bl.screenX,nm=e.screenY-Bl.screenY):nm=em=0,Bl=e),em)},movementY:function(e){return"movementY"in e?e.movementY:nm}}),y_=Bn(Jh),JA=Se({},Jh,{dataTransfer:0}),QA=Bn(JA),jA=Se({},Cc,{relatedTarget:0}),im=Bn(jA),$A=Se({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),tw=Bn($A),ew=Se({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nw=Bn(ew),iw=Se({},Ua,{data:0}),__=Bn(iw),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ow(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rw[e])?!!t[e]:!1}function X0(){return ow}var lw=Se({},Cc,{key:function(e){if(e.key){var t=sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:X0,charCode:function(e){return e.type==="keypress"?nh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cw=Bn(lw),uw=Se({},Jh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x_=Bn(uw),hw=Se({},Ua,{submitter:0}),fw=Bn(hw),dw=Se({},Cc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:X0}),pw=Bn(dw),mw=Se({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),gw=Bn(mw),vw=Se({},Jh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yw=Bn(vw),_w=Se({},Ua,{newState:0,oldState:0,source:0}),xw=Bn(_w),Sw=[9,13,27,32],W0=Ps&&"CompositionEvent"in window,Zl=null;Ps&&"documentMode"in document&&(Zl=document.documentMode);var bw=Ps&&"TextEvent"in window&&!Zl,gS=Ps&&(!W0||Zl&&8<Zl&&11>=Zl),S_=" ",b_=!1;function vS(e,t){switch(e){case"keyup":return Sw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var co=!1;function Mw(e,t){switch(e){case"compositionend":return yS(t);case"keypress":return t.which!==32?null:(b_=!0,S_);case"textInput":return e=t.data,e===S_&&b_?null:e;default:return null}}function Tw(e,t){if(co)return e==="compositionend"||!W0&&vS(e,t)?(e=mS(),eh=k0=fa=null,co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gS&&t.locale!=="ko"?null:t.data;default:return null}}var Ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ew[e.type]:t==="textarea"}function _S(e,t,n,i){lo?xo?xo.push(i):xo=[i]:lo=i,t=Xh(t,"onChange"),0<t.length&&(n=new Kh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Kl=null,cc=null;function Aw(e){pM(e,0)}function Qh(e){var t=Wl(e);if(cS(t))return e}function T_(e,t){if(e==="change")return t}var xS=!1;Ps&&(Ps?(Fu="oninput"in document,Fu||(sm=document.createElement("div"),sm.setAttribute("oninput","return;"),Fu=typeof sm.oninput=="function"),Bu=Fu):Bu=!1,xS=Bu&&(!document.documentMode||9<document.documentMode));var Bu,Fu,sm;function E_(){Kl&&(Kl.detachEvent("onpropertychange",SS),cc=Kl=null)}function SS(e){if(e.propertyName==="value"&&Qh(cc)){var t=[];_S(t,cc,e,G0(e)),pS(Aw,t)}}function ww(e,t,n){e==="focusin"?(E_(),Kl=t,cc=n,Kl.attachEvent("onpropertychange",SS)):e==="focusout"&&E_()}function Cw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qh(cc)}function Rw(e,t){if(e==="click")return Qh(t)}function Nw(e,t){if(e==="input"||e==="change")return Qh(t)}function Dw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ci=typeof Object.is=="function"?Object.is:Dw;function uc(e,t){if(ci(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Im.call(t,s)||!ci(e[s],t[s]))return!1}return!0}function Hm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function A_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function w_(e,t){var n=A_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=A_(n)}}function bS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function MS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hm(e.document)}return t}function q0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uw=Ps&&"documentMode"in document&&11>=document.documentMode,uo=null,Vm=null,Jl=null,Gm=!1;function C_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gm||uo==null||uo!==Hm(i)||(i=uo,"selectionStart"in i&&q0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jl&&uc(Jl,i)||(Jl=i,i=Xh(Vm,"onSelect"),0<i.length&&(t=new Kh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=uo)))}function nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ho={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},am={},TS={};Ps&&(TS=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Tr(e){if(am[e])return am[e];if(!ho[e])return e;var t=ho[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in TS)return am[e]=t[n];return e}var ES=Tr("animationend"),AS=Tr("animationiteration"),wS=Tr("animationstart"),Lw=Tr("transitionrun"),Ow=Tr("transitionstart"),Iw=Tr("transitioncancel"),CS=Tr("transitionend"),RS=new Map,km="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");km.push("scrollEnd");function Hi(e,t){RS.set(e,t),Mr(t,[e])}var Pw=0;function zs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Fi.identifierPrefix;var n=Pw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function R_(e){if(e==null||typeof e=="string")return e;var t=null,n=wo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function ks(e,t){return e=R_(e),t=R_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Mh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],fo=0,Y0=0;function jh(){for(var e=fo,t=Y0=fo=0;t<e;){var n=xi[t];xi[t++]=null;var i=xi[t];xi[t++]=null;var s=xi[t];xi[t++]=null;var a=xi[t];if(xi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&NS(n,s,a)}}function $h(e,t,n,i){xi[fo++]=e,xi[fo++]=t,xi[fo++]=n,xi[fo++]=i,Y0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Z0(e,t,n,i){return $h(e,t,n,i),Th(e)}function Er(e,t){return $h(e,null,null,t),Th(e)}function NS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-oi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Th(e){if(50<rc)throw rc=0,fh=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var po={};function zw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,t,n,i){return new zw(e,t,n,i)}function K0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Os(e,t){var n=e.alternate;return n===null?(n=Wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function DS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ih(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")K0(i)&&(r=1);else if(typeof i=="string")r=cR(e,n,hs.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Nm:return e=Wn(31,n,t,s),e.elementType=Nm,e.lanes=a,e;case ro:return ur(n.children,s,a,t);case Zx:r=8,s|=24;break;case wm:return e=Wn(12,n,t,s|2),e.elementType=wm,e.lanes=a,e;case Cm:return e=Wn(13,n,t,s),e.elementType=Cm,e.lanes=a,e;case Rm:return e=Wn(19,n,t,s),e.elementType=Rm,e.lanes=a,e;case TA:case Dm:return e=s|32,e=Wn(30,n,t,e),e.elementType=Dm,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case os:r=10;break t;case Kx:r=9;break t;case P0:r=11;break t;case z0:r=14;break t;case la:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=Wn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function ur(e,t,n,i){return e=Wn(7,e,i,t),e.lanes=n,e}function rm(e,t,n){return e=Wn(6,e,null,t),e.lanes=n,e}function US(e){var t=Wn(18,null,null,0);return t.stateNode=e,t}function om(e,t,n){return t=Wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var N_=new WeakMap;function Ti(e,t){if(typeof e=="object"&&e!==null){var n=N_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:l_(t)},N_.set(e,t),t)}return{value:e,source:t,stack:l_(t)}}var mo=[],go=0,Eh=null,hc=0,Si=[],bi=0,wa=null,cs=1,us="";function Us(e,t){mo[go++]=hc,mo[go++]=Eh,Eh=e,hc=t}function LS(e,t,n){Si[bi++]=cs,Si[bi++]=us,Si[bi++]=wa,wa=e;var i=cs;e=us;var s=32-oi(i)-1;i&=~(1<<s),n+=1;var a=32-oi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,cs=1<<32-oi(t)+s|n<<s|i,us=a+e}else cs=1<<a|n<<s|i,us=e}function tf(e){e.return!==null&&(Us(e,1),LS(e,1,0))}function J0(e){for(;e===Eh;)Eh=mo[--go],mo[go]=null,hc=mo[--go],mo[go]=null;for(;e===wa;)wa=Si[--bi],Si[bi]=null,us=Si[--bi],Si[bi]=null,cs=Si[--bi],Si[bi]=null}function OS(e,t){Si[bi++]=cs,Si[bi++]=us,Si[bi++]=wa,cs=t.id,us=t.overflow,wa=e}var un=null,we=null,Wt=!1,ya=null,Ei=!1,Xm=Error(et(519));function Ca(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fc(Ti(t,e)),Xm}function D_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[gn]=e,t[Zn]=i,n){case"dialog":Kt("cancel",t),Kt("close",t);break;case"iframe":case"object":case"embed":Kt("load",t);break;case"video":case"audio":for(n=0;n<gc.length;n++)Kt(gc[n],t);break;case"source":Kt("error",t);break;case"img":case"image":case"link":Kt("error",t),Kt("load",t);break;case"details":Kt("toggle",t);break;case"input":Kt("invalid",t),uS(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Kt("invalid",t);break;case"textarea":Kt("invalid",t),fS(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||gM(t.textContent,n)?(i.popover!=null&&(Kt("beforetoggle",t),Kt("toggle",t)),i.onScroll!=null&&Kt("scroll",t),i.onScrollEnd!=null&&Kt("scrollend",t),i.onClick!=null&&(t.onclick=ls),t=!0):t=!1,t||Ca(e,!0)}function Ah(e){for(un=e.return;un;)switch(un.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:un=un.return}}function to(e){if(e!==un)return!1;if(!Wt)return Ah(e),Wt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||C0(e.type,e.memoizedProps)),n=!n),n&&we&&Ca(e),Ah(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));we=wx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));we=wx(e)}else t===27?(t=we,La(e.type)?(e=U0,U0=null,we=e):we=t):we=un?Ai(e.stateNode.nextSibling):null;return!0}function pr(){we=un=null,Wt=!1}function lm(){var e=ya;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),ya=null),e}function fc(e){ya===null?ya=[e]:ya.push(e)}var Wm=ps(null),Ar=null,Ls=null;function da(e,t,n){Ce(Wm,t._currentValue),t._currentValue=n}function Is(e){e._currentValue=Wm.current,yn(Wm)}function sh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function qm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),sh(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(et(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),sh(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),sh(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function mr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=s.type;ci(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===yh.current){if(r=s.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}s=s.return}return e!==null&&qm(t,e,n,i),t.flags|=262144,e!==null}function wh(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){Ar=e,Ls=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vn(e){return IS(Ar,e)}function Hu(e,t){return Ar===null&&gr(e),IS(e,t)}function IS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ls===null){if(e===null)throw Error(et(308));Ls=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ls=Ls.next=t;return n}var Bw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Fw=$e.unstable_scheduleCallback,Hw=$e.unstable_NormalPriority,Ye={$$typeof:os,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Q0(){return{controller:new Bw,data:new Map,refCount:0}}function Rc(e){e.refCount--,e.refCount===0&&Fw(Hw,function(){e.controller.abort()})}function U_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var ql=null;function Vw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ql=null,Ym=0,vr=0,So=null;function Gw(e,t){if(Ql===null){var n=Ql=[];Ym=0,vr=Eg(),So={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ym++,t.then(L_,L_),t}function L_(){if(--Ym===0&&(ql=null,Ql!==null)){So!==null&&(So.status="fulfilled");var e=Ql;Ql=null,vr=0,So=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var O_=It.S;It.S=function(e,t){if($b=ai(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gw(e,t),ql!==null)for(var n=Io;n!==null;)U_(n,ql),n=n.next;if(n=e.types,n!==null){for(var i=Io;i!==null;)U_(i,n),i=i.next;if(vr!==0){i=ql,i===null&&(i=ql=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}O_!==null&&O_(e,t)};var hr=ps(null);function j0(){var e=hr.current;return e!==null?e:xe.pooledCache}function ah(e,t){t===null?Ce(hr,hr.current):Ce(hr,t.pool)}function PS(){var e=j0();return e===null?null:{parent:Ye._currentValue,pool:e}}var ko=Error(et(460)),$0=Error(et(474)),ef=Error(et(542)),Ch={then:function(){}};function I_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ls,ls),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,z_(e),e===void 0&&!("reason"in t)?Error(et(600)):e;default:if(typeof t.status=="string")t.then(ls,ls);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,z_(e),e}throw fr=t,ko}}function ar(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fr=n,ko):n}}var fr=null;function P_(){if(fr===null)throw Error(et(459));var e=fr;return fr=null,e}function z_(e){if(e===ko||e===ef)throw Error(et(483))}var bo=null,dc=0;function Vu(e){var t=dc;return dc+=1,bo===null&&(bo=[]),zS(bo,e,t)}function aa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gu(e,t){throw t.$$typeof===MA?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function BS(e){function t(f,g){if(e){var b=f.deletions;b===null?(f.deletions=[g],f.flags|=16):b.push(g)}}function n(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function i(f){for(var g=new Map;f!==null;)f.key===null?g.set(f.index,f):g.set(f.key,f),f=f.sibling;return g}function s(f,g){return f=Os(f,g),f.index=0,f.sibling=null,f}function a(f,g,b){return f.index=b,e?(b=f.alternate,b!==null?(b=b.index,b<g?(f.flags|=2,g):b):(f.flags|=134217730,g)):(f.flags|=1048576,g)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,g,b,_){return g===null||g.tag!==6?(g=rm(b,f.mode,_),g.return=f,g):(g=s(g,b),g.return=f,g)}function l(f,g,b,_){var M=b.type;return M===ro?(f=h(f,g,b.props.children,_,b.key),aa(f,b),f):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===la&&ar(M)===g.type)?(g=s(g,b.props),aa(g,b),g.return=f,g):(g=ih(b.type,b.key,b.props,null,f.mode,_),aa(g,b),g.return=f,g)}function c(f,g,b,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=om(b,f.mode,_),g.return=f,g):(g=s(g,b.children||[]),g.return=f,g)}function h(f,g,b,_,M){return g===null||g.tag!==7?(g=ur(b,f.mode,_,M),g.return=f,g):(g=s(g,b),g.return=f,g)}function p(f,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=rm(""+g,f.mode,b),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Uu:return b=ih(g.type,g.key,g.props,null,f.mode,b),aa(b,g),b.return=f,b;case kl:return g=om(g,f.mode,b),g.return=f,g;case la:return g=ar(g),p(f,g,b)}if(Xl(g)||zl(g))return g=ur(g,f.mode,b,null),g.return=f,g;if(typeof g.then=="function")return p(f,Vu(g),b);if(g.$$typeof===os)return p(f,Hu(f,g),b);Gu(f,g)}return null}function u(f,g,b,_){var M=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return M!==null?null:o(f,g,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Uu:return b.key===M?l(f,g,b,_):null;case kl:return b.key===M?c(f,g,b,_):null;case la:return b=ar(b),u(f,g,b,_)}if(Xl(b)||zl(b))return M!==null?null:h(f,g,b,_,null);if(typeof b.then=="function")return u(f,g,Vu(b),_);if(b.$$typeof===os)return u(f,g,Hu(f,b),_);Gu(f,b)}return null}function d(f,g,b,_,M){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(b)||null,o(g,f,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Uu:return f=f.get(_.key===null?b:_.key)||null,l(g,f,_,M);case kl:return f=f.get(_.key===null?b:_.key)||null,c(g,f,_,M);case la:return _=ar(_),d(f,g,b,_,M)}if(Xl(_)||zl(_))return f=f.get(b)||null,h(g,f,_,M,null);if(typeof _.then=="function")return d(f,g,b,Vu(_),M);if(_.$$typeof===os)return d(f,g,b,Hu(g,_),M);Gu(g,_)}return null}function v(f,g,b,_){for(var M=null,T=null,A=g,y=g=0,w=null;A!==null&&y<b.length;y++){A.index>y?(w=A,A=null):w=A.sibling;var C=u(f,A,b[y],_);if(C===null){A===null&&(A=w);break}e&&A&&C.alternate===null&&t(f,A),g=a(C,g,y),T===null?M=C:T.sibling=C,T=C,A=w}if(y===b.length)return n(f,A),Wt&&Us(f,y),M;if(A===null){for(;y<b.length;y++)A=p(f,b[y],_),A!==null&&(g=a(A,g,y),T===null?M=A:T.sibling=A,T=A);return Wt&&Us(f,y),M}for(A=i(A);y<b.length;y++)w=d(A,f,y,b[y],_),w!==null&&(e&&(C=w.alternate,C!==null&&A.delete(C.key===null?y:C.key)),g=a(w,g,y),T===null?M=w:T.sibling=w,T=w);return e&&A.forEach(function(N){return t(f,N)}),Wt&&Us(f,y),M}function x(f,g,b,_){if(b==null)throw Error(et(151));for(var M=null,T=null,A=g,y=g=0,w=null,C=b.next();A!==null&&!C.done;y++,C=b.next()){A.index>y?(w=A,A=null):w=A.sibling;var N=u(f,A,C.value,_);if(N===null){A===null&&(A=w);break}e&&A&&N.alternate===null&&t(f,A),g=a(N,g,y),T===null?M=N:T.sibling=N,T=N,A=w}if(C.done)return n(f,A),Wt&&Us(f,y),M;if(A===null){for(;!C.done;y++,C=b.next())C=p(f,C.value,_),C!==null&&(g=a(C,g,y),T===null?M=C:T.sibling=C,T=C);return Wt&&Us(f,y),M}for(A=i(A);!C.done;y++,C=b.next())C=d(A,f,y,C.value,_),C!==null&&(e&&(w=C.alternate,w!==null&&A.delete(w.key===null?y:w.key)),g=a(C,g,y),T===null?M=C:T.sibling=C,T=C);return e&&A.forEach(function(U){return t(f,U)}),Wt&&Us(f,y),M}function m(f,g,b,_){if(typeof b=="object"&&b!==null&&b.type===ro&&b.key===null&&b.props.ref===void 0&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Uu:t:{for(var M=b.key;g!==null;){if(g.key===M){if(M=b.type,M===ro){if(g.tag===7){n(f,g.sibling),_=s(g,b.props.children),aa(_,b),_.return=f,f=_;break t}}else if(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===la&&ar(M)===g.type){n(f,g.sibling),_=s(g,b.props),aa(_,b),_.return=f,f=_;break t}n(f,g);break}else t(f,g);g=g.sibling}b.type===ro?(_=ur(b.props.children,f.mode,_,b.key),aa(_,b),_.return=f,f=_):(_=ih(b.type,b.key,b.props,null,f.mode,_),aa(_,b),_.return=f,f=_)}return r(f);case kl:t:{for(M=b.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(f,g.sibling),_=s(g,b.children||[]),_.return=f,f=_;break t}else{n(f,g);break}else t(f,g);g=g.sibling}_=om(b,f.mode,_),_.return=f,f=_}return r(f);case la:return b=ar(b),m(f,g,b,_)}if(Xl(b))return v(f,g,b,_);if(zl(b)){if(M=zl(b),typeof M!="function")throw Error(et(150));return b=M.call(b),x(f,g,b,_)}if(typeof b.then=="function")return m(f,g,Vu(b),_);if(b.$$typeof===os)return m(f,g,Hu(f,b),_);Gu(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,g!==null&&g.tag===6?(n(f,g.sibling),_=s(g,b),_.return=f,f=_):(n(f,g),_=rm(b,f.mode,_),_.return=f,f=_),r(f)):n(f,g)}return function(f,g,b,_){try{dc=0;var M=m(f,g,b,_);return bo=null,M}catch(A){if(A===ko||A===ef)throw A;var T=Wn(29,A,null,f.mode);return T.lanes=_,T.return=f,T}}}var yr=BS(!0),FS=BS(!1),ca=!1;function tg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(re&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Th(e),NS(e,null,n),t}return $h(e,i,t,n),Th(e)}function jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nS(e,n)}}function cm(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Km=!1;function $l(){if(Km){var e=So;if(e!==null)throw e}}function tc(e,t,n,i){Km=!1;var s=e.updateQueue;ca=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(jt&u)===u:(i&u)===u){u!==0&&u===vr&&(Km=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;u=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){p=v.call(m,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,u=typeof v=="function"?v.call(m,p,u):v,u==null)break t;p=Se({},p,u);break t;case 2:ca=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Da|=r,e.lanes=r,e.memoizedState=p}}function HS(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function VS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)HS(n[e],t)}var Ra=ps(null),Rh=ps(0);function B_(e,t){e=Vs,Ce(Rh,e),Ce(Ra,t),Vs=e|t.baseLanes}function Jm(){Ce(Rh,Vs),Ce(Ra,Ra.current)}function eg(){Vs=Rh.current,yn(Ra),yn(Rh)}var Sn=ps(null),Rn=null;function Sa(e){var t=e.alternate;Ce(_n,_n.current&1),Ce(Sn,e),Rn===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(Rn=e)}function Qm(e){Ce(_n,_n.current),Ce(Sn,e),Rn===null&&(Rn=e)}function GS(e){e.tag===22?(Ce(_n,_n.current),Ce(Sn,e),Rn===null&&(Rn=e)):ba()}function ba(){Ce(_n,_n.current),Ce(Sn,Sn.current)}function ni(e){yn(Sn),Rn===e&&(Rn=null),yn(_n)}var _n=ps(0);function pc(e,t){Ce(Sn,Sn.current),Ce(_n,t)}function ng(e){yn(_n),yn(Sn),Rn===e&&(Rn=null)}function Nh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||D0(n)||Rg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bs=0,Gt=null,ye=null,qe=null,Dh=!1,Mo=!1,_r=!1,Uh=0,mc=0,To=null,Xw=0;function He(){throw Error(et(321))}function ig(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ci(e[n],t[n]))return!1;return!0}function sg(e,t,n,i,s,a){return Bs=a,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?_b:xb,_r=!1,a=n(i,s),_r=!1,Mo&&(a=XS(t,n,i,s)),kS(e),a}function kS(e){It.H=Lh;var t=ye!==null&&ye.next!==null;if(Bs=0,qe=ye=Gt=null,Dh=!1,mc=0,To=null,t)throw Error(et(300));e===null||Ze||(e=e.dependencies,e!==null&&wh(e)&&(Ze=!0))}function XS(e,t,n,i){Gt=e;var s=0;do{if(Mo&&(To=null),mc=0,Mo=!1,25<=s)throw Error(et(301));if(s+=1,qe=ye=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}It.H=jw,a=t(n,i)}while(Mo);return a}function Ww(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?Nc(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(Gt.flags|=1024),t}function ag(){var e=Uh!==0;return Uh=0,e}function rg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function og(e){if(Dh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dh=!1}Bs=0,qe=ye=Gt=null,Mo=!1,mc=Uh=0,To=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Gt.memoizedState=qe=e:qe=qe.next=e,qe}function ke(){if(ye===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=qe===null?Gt.memoizedState:qe.next;if(t!==null)qe=t,ye=e;else{if(e===null)throw Gt.alternate===null?Error(et(467)):Error(et(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},qe===null?Gt.memoizedState=qe=e:qe=qe.next=e}return qe}function nf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nc(e){var t=mc;return mc+=1,To===null&&(To=[]),e=zS(To,e,t),t=Gt,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?_b:xb),e}function sf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Nc(e);if(e.$$typeof===AA)return;if(e.$$typeof===os)return vn(e)}throw Error(et(438,String(e)))}function lg(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=nf(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=EA;return t.index++,n}function Fs(e,t){return typeof t=="function"?t(e):t}function rh(e){var t=ke();return cg(t,ye,e)}function cg(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(jt&p)===p:(Bs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===vr&&(h=!0);else if((Bs&u)===u){c=c.next,u===vr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Gt.lanes|=u,Da|=u;p=c.action,_r&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Gt.lanes|=p,Da|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ci(a,e.memoizedState)&&(Ze=!0,h&&(n=So,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function um(e){var t=ke(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ci(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function WS(e,t,n){var i=Gt,s=ke(),a=Wt;if(a){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!ci((ye||s).memoizedState,n);if(r&&(s.memoizedState=n,Ze=!0),s=s.queue,ug(ZS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||qe!==null&&(qe.memoizedState.tag&1)!==0,Do(e?9:8,{destroy:void 0},YS.bind(null,i,s,n,t),null),e){if(i.flags|=2048,xe===null)throw Error(et(349));a||(Bs&127)!==0||qS(i,t,n)}return n}function qS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=nf(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function YS(e,t,n,i){t.value=n,t.getSnapshot=i,KS(t)&&JS(e)}function ZS(e,t,n){return n(function(){KS(t)&&JS(e)})}function KS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ci(e,n)}catch{return!0}}function JS(e){var t=Er(e,2);t!==null&&qn(t,e,2)}function jm(e){var t=zn();if(typeof e=="function"){var n=e;if(e=n(),_r){ha(!0);try{n()}finally{ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:e},t}function QS(e,t,n,i){return e.baseState=n,cg(e,ye,typeof i=="function"?i:Fs)}function qw(e,t,n,i,s){if(rf(e))throw Error(et(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};It.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,jS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function jS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=It.T,r={};r.types=a!==null?a.types:null,It.T=r;try{var o=n(s,i),l=It.S;l!==null&&l(r,o),F_(e,t,o)}catch(c){$m(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),It.T=a}}else try{a=n(s,i),F_(e,t,a)}catch(c){$m(e,t,c)}}function F_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){H_(e,t,i)},function(i){return $m(e,t,i)}):H_(e,t,n)}function H_(e,t,n){t.status="fulfilled",t.value=n,$S(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,jS(e,n)))}function $m(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,$S(t),t=t.next;while(t!==i)}e.action=null}function $S(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tb(e,t){return t}function V_(e,t){if(Wt){var n=xe.formState;if(n!==null){t:{var i=Gt;if(Wt){if(we){e:{for(var s=we,a=Ei;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ai(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){we=Ai(s.nextSibling),i=s.data==="F!";break t}}Ca(i)}i=!1}i&&(t=n[0])}}return n=zn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tb,lastRenderedState:t},n.queue=i,n=gb.bind(null,Gt,i),i.dispatch=n,i=jm(!1),a=pg.bind(null,Gt,!1,i.queue),i=zn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=qw.bind(null,Gt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function G_(e){var t=ke();return eb(t,ye,e)}function eb(e,t,n){if(t=cg(e,t,tb)[0],e=rh(Fs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Nc(t)}catch(r){throw r===ko?ef:r}else i=t;t=ke();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,Do(9,{destroy:void 0},Yw.bind(null,s,n),null)),[i,a,e]}function Yw(e,t){e.action=t}function k_(e){var t=ke(),n=ye;if(n!==null)return eb(t,n,e);ke(),t=t.memoizedState,n=ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Do(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=nf(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function nb(){return ke().memoizedState}function oh(e,t,n,i){var s=zn();Gt.flags|=e,s.memoizedState=Do(1|t,{destroy:void 0},n,i===void 0?null:i)}function af(e,t,n,i){var s=ke();i=i===void 0?null:i;var a=s.memoizedState.inst;ye!==null&&i!==null&&ig(i,ye.memoizedState.deps)?s.memoizedState=Do(t,a,n,i):(Gt.flags|=e,s.memoizedState=Do(1|t,a,n,i))}function X_(e,t){oh(8390656,8,e,t)}function ug(e,t){af(2048,8,e,t)}function Zw(e){Gt.flags|=4;var t=Gt.updateQueue;if(t===null)t=nf(),Gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ib(e){var t=ke().memoizedState;return Zw({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function sb(e,t){return af(4,2,e,t)}function ab(e,t){return af(4,4,e,t)}function rb(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ob(e,t,n){n=n!=null?n.concat([e]):null,af(4,4,rb.bind(null,t,e),n)}function hg(){}function lb(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ig(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function cb(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ig(t,i[1]))return i[0];if(i=e(),_r){ha(!0);try{e()}finally{ha(!1)}}return n.memoizedState=[i,t],i}function fg(e,t,n){return n===void 0||(Bs&1073741824)!==0&&(jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=eM(),Gt.lanes|=e,Da|=e,n)}function ub(e,t,n,i){return ci(n,t)?n:Ra.current!==null?(e=fg(e,n,i),ci(e,t)||(Ze=!0),e):(Bs&106)===0||(Bs&1073741824)!==0&&(jt&261930)===0?(Ze=!0,e.memoizedState=n):(e=eM(),Gt.lanes|=e,Da|=e,t)}function hb(e,t,n,i,s){var a=oe.p;oe.p=a!==0&&8>a?a:8;var r=It.T,o={};o.types=r!==null?r.types:null,It.T=o,pg(e,!1,t,n);try{var l=s(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=kw(l,i);ec(e,t,h,li(e))}else ec(e,t,i,li(e))}catch(p){ec(e,t,{then:function(){},status:"rejected",reason:p},li())}finally{oe.p=a,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function Kw(){}function t0(e,t,n,i){if(e.tag!==5)throw Error(et(476));var s=fb(e).queue;hb(e,s,t,cr,n===null?Kw:function(){return db(e),n(i)})}function fb(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:cr,baseState:cr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:cr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function db(e){var t=fb(e);t.next===null&&(t=e.alternate.memoizedState),ec(e,t.next.queue,{},li())}function dg(){return vn(Bo)}function pb(){return ke().memoizedState}function mb(){return ke().memoizedState}function Jw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=li();e=_a(n);var i=xa(t,e,n);i!==null&&(qn(i,t,n),jl(i,t,n)),t={cache:Q0()},e.payload=t;return}t=t.return}}function Qw(e,t,n){var i=li();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e)?vb(t,n):(n=Z0(e,t,n,i),n!==null&&(qn(n,e,i),yb(n,t,i)))}function gb(e,t,n){var i=li();ec(e,t,n,i)}function ec(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))vb(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ci(o,r))return $h(e,t,s,0),xe===null&&jh(),!1}catch{}if(n=Z0(e,t,s,i),n!==null)return qn(n,e,i),yb(n,t,i),!0}return!1}function pg(e,t,n,i){if(i={lane:2,revertLane:Eg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},rf(e)){if(t)throw Error(et(479))}else t=Z0(e,n,i,2),t!==null&&qn(t,e,2)}function rf(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function vb(e,t){Mo=Dh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yb(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nS(e,n)}}var Lh={readContext:vn,use:sf,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He,useEffectEvent:He},_b={readContext:vn,use:sf,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:vn,useEffect:X_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,oh(4194308,4,rb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oh(4194308,4,e,t)},useInsertionEffect:function(e,t){oh(4,2,e,t)},useMemo:function(e,t){var n=zn();t=t===void 0?null:t;var i=e();if(_r){ha(!0);try{e()}finally{ha(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=zn();if(n!==void 0){var s=n(t);if(_r){ha(!0);try{n(t)}finally{ha(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Qw.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:function(e){e=jm(e);var t=e.queue,n=gb.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hg,useDeferredValue:function(e,t){var n=zn();return fg(n,e,t)},useTransition:function(){var e=jm(!1);return e=hb.bind(null,Gt,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,s=zn();if(Wt){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),xe===null)throw Error(et(349));(jt&127)!==0||qS(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,X_(ZS.bind(null,i,a,e),[e]),i.flags|=2048,Do(9,{destroy:void 0},YS.bind(null,i,a,n,t),null),n},useId:function(){var e=zn(),t=xe.identifierPrefix;if(Wt){var n=us,i=cs;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Uh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Xw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:dg,useFormState:V_,useActionState:V_,useOptimistic:function(e){var t=zn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pg.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:lg,useCacheRefresh:function(){return zn().memoizedState=Jw.bind(null,Gt)},useEffectEvent:function(e){var t=zn(),n={impl:e};return t.memoizedState=n,function(){if((re&2)!==0)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},xb={readContext:vn,use:sf,useCallback:lb,useContext:vn,useEffect:ug,useImperativeHandle:ob,useInsertionEffect:sb,useLayoutEffect:ab,useMemo:cb,useReducer:rh,useRef:nb,useState:function(){return rh(Fs)},useDebugValue:hg,useDeferredValue:function(e,t){var n=ke();return ub(n,ye.memoizedState,e,t)},useTransition:function(){var e=rh(Fs)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:Nc(e),t]},useSyncExternalStore:WS,useId:pb,useHostTransitionStatus:dg,useFormState:G_,useActionState:G_,useOptimistic:function(e,t){var n=ke();return QS(n,ye,e,t)},useMemoCache:lg,useCacheRefresh:mb,useEffectEvent:ib},jw={readContext:vn,use:sf,useCallback:lb,useContext:vn,useEffect:ug,useImperativeHandle:ob,useInsertionEffect:sb,useLayoutEffect:ab,useMemo:cb,useReducer:um,useRef:nb,useState:function(){return um(Fs)},useDebugValue:hg,useDeferredValue:function(e,t){var n=ke();return ye===null?fg(n,e,t):ub(n,ye.memoizedState,e,t)},useTransition:function(){var e=um(Fs)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:Nc(e),t]},useSyncExternalStore:WS,useId:pb,useHostTransitionStatus:dg,useFormState:k_,useActionState:k_,useOptimistic:function(e,t){var n=ke();return ye!==null?QS(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lg,useCacheRefresh:mb,useEffectEvent:ib};function hm(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var e0={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=li(),s=_a(i);s.payload=t,n!=null&&(s.callback=n),t=xa(e,s,i),t!==null&&(qn(t,e,i),jl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=li(),s=_a(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xa(e,s,i),t!==null&&(qn(t,e,i),jl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=li(),i=_a(n);i.tag=2,t!=null&&(i.callback=t),t=xa(e,i,n),t!==null&&(qn(t,e,n),jl(t,e,n))}};function W_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!uc(n,i)||!uc(s,a):!0}function q_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&e0.enqueueReplaceState(t,t.state,null)}function xr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Se({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Sb(e){Mh(e)}function bb(e){console.error(e)}function Mb(e){Mh(e)}function Oh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Y_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function n0(e,t,n){return n=_a(n),n.tag=3,n.payload={element:null},n.callback=function(){Oh(e,t)},n}function Tb(e){return e=_a(e),e.tag=3,e}function Eb(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Y_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Y_(t,n,i),typeof s!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function $w(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&mr(t,n,s,!0),n=Sn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Rn===null?Gh():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Ch?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ym(e,i,s)),!1;case 22:return n.flags|=65536,i===Ch?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ym(e,i,s)),!1}throw Error(et(435,n.tag))}return ym(e,i,s),Gh(),!1}if(Wt)return t=Sn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Xm&&(e=Error(et(422),{cause:i}),fc(Ti(e,n)))):(i!==Xm&&(t=Error(et(423),{cause:i}),fc(Ti(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ti(i,n),s=n0(e.stateNode,i,s),cm(e,s),Ve!==4&&(Ve=2)),!1;var a=Error(et(520),{cause:i});if(a=Ti(a,n),ac===null?ac=[a]:ac.push(a),Ve!==4&&(Ve=2),t===null)return!0;i=Ti(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=n0(n.stateNode,i,e),cm(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ma===null||!Ma.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Tb(s),Eb(s,e,n,i),cm(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var mg=Error(et(461)),Ze=!1;function Qe(e,t,n,i){t.child=e===null?FS(t,null,n,i):yr(t,e.child,n,i)}function Z_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return gr(t),i=sg(e,t,n,r,a,s),o=ag(),e!==null&&!Ze?(rg(e,t,s),Hs(e,t,s)):(Wt&&o&&tf(t),t.flags|=1,Qe(e,t,i,s),t.child)}function K_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!K0(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ab(e,t,a,i,s)):(e=ih(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!vg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:uc,n(r,i)&&e.ref===t.ref)return Hs(e,t,s)}return t.flags|=1,e=Os(a,i),e.ref=t.ref,e.return=t,t.child=e}function Ab(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(uc(a,i)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=i=a,vg(e,s))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,Hs(e,t,s)}return i0(e,t,n,i,s)}function wb(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return J_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ah(t,a!==null?a.cachePool:null),a!==null?B_(t,a):Jm(),GS(t);else return i=t.lanes=536870912,J_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ah(t,a.cachePool),B_(t,a),ba(),t.memoizedState=null):(e!==null&&ah(t,null),Jm(),ba());return Qe(e,t,s,n),t.child}function nc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function J_(e,t,n,i,s){var a=j0();return a=a===null?null:{parent:Ye._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ah(t,null),Jm(),GS(t),e!==null&&mr(e,t,i,!0),t.childLanes=s,null}function lh(e,t){return t=of({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Q_(e,t,n){return yr(t,e.child,null,n),e=lh(t,t.pendingProps),e.flags|=2,ni(t),t.memoizedState=null,e}function tC(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Wt){if(i.mode==="hidden")return e=lh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},nc(null,e);if(Qm(t),(e=we)?(e=wM(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:cs,overflow:us}:null,retryLane:536870912,hydrationErrors:null},n=US(e),n.return=t,t.child=n,un=t,we=null)):e=null,e===null)throw Ca(t);return t.lanes=536870912,null}return lh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Qm(t),s)if(t.flags&256)t.flags&=-257,t=Q_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(Ze||mr(e,t,n,!1),s=(n&e.childLanes)!==0,Ze||s){if(Ra.current===null){if(i=xe,i!==null&&(r=iS(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Er(e,r),qn(i,e,r),mg;Gh()}t=Q_(e,t,n)}else e=a.treeContext,we=Ai(r.nextSibling),un=t,Wt=!0,ya=null,Ei=!1,e!==null&&OS(t,e),t=lh(t,i),t.flags|=134221824;return t}return e=Os(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function no(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function i0(e,t,n,i,s){return gr(t),n=sg(e,t,n,i,void 0,s),i=ag(),e!==null&&!Ze?(rg(e,t,s),Hs(e,t,s)):(Wt&&i&&tf(t),t.flags|=1,Qe(e,t,n,s),t.child)}function j_(e,t,n,i,s,a){return gr(t),t.updateQueue=null,n=XS(t,i,n,s),kS(e),i=ag(),e!==null&&!Ze?(rg(e,t,a),Hs(e,t,a)):(Wt&&i&&tf(t),t.flags|=1,Qe(e,t,n,a),t.child)}function $_(e,t,n,i,s){if(gr(t),t.stateNode===null){var a=po,r=n.contextType;typeof r=="object"&&r!==null&&(a=vn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=e0,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},tg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?vn(r):po,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(hm(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&e0.enqueueReplaceState(a,a.state,null),tc(t,i,a,s),$l(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=xr(n,o);a.props=l;var c=a.context,h=n.contextType;r=po,typeof h=="object"&&h!==null&&(r=vn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&q_(t,a,i,r),ca=!1;var u=t.memoizedState;a.state=u,tc(t,i,a,s),$l(),c=t.memoizedState,o||u!==c||ca?(typeof p=="function"&&(hm(t,n,p,i),c=t.memoizedState),(l=ca||W_(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Zm(e,t),r=t.memoizedProps,h=xr(n,r),a.props=h,p=t.pendingProps,u=a.context,c=n.contextType,l=po,typeof c=="object"&&c!==null&&(l=vn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&q_(t,a,i,l),ca=!1,u=t.memoizedState,a.state=u,tc(t,i,a,s),$l();var d=t.memoizedState;r!==p||u!==d||ca||e!==null&&e.dependencies!==null&&wh(e.dependencies)?(typeof o=="function"&&(hm(t,n,o,i),d=t.memoizedState),(h=ca||W_(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&wh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,no(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=yr(t,e.child,null,s),t.child=yr(t,null,n,s)):Qe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Hs(e,t,s),e}function tx(e,t,n,i){return pr(),t.flags|=256,Qe(e,t,n,i),t.child}var s0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function a0(e){return{baseLanes:e,cachePool:PS()}}function r0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=si),e}function Cb(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Wt){if(s?Sa(t):ba(),(e=we)?(e=wM(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wa!==null?{id:cs,overflow:us}:null,retryLane:536870912,hydrationErrors:null},n=US(e),n.return=t,t.child=n,un=t,we=null)):e=null,e===null)throw Ca(t);return Rg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ba(),s=t.mode,a=of({mode:"hidden",children:a},s),i=ur(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=a0(n),i.childLanes=r0(e,r,n),t.memoizedState=s0,nc(null,i)):(Sa(t),gg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return eC(e,t,a,r,i,l,o,n)}return s?(ba(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Os(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Os(l,s):(s=ur(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,nc(null,i),i=t.child,s=e.child.memoizedState,s===null?s=a0(n):(a=s.cachePool,a!==null?(o=Ye._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=PS(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=r0(e,r,n),t.memoizedState=s0,nc(e.child,i)):(Sa(t),n=e.child,e=n.sibling,n=Os(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function gg(e,t){return t=of({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function of(e,t){return e=Wn(22,e,null,t),e.lanes=0,e}function ku(e,t,n){return yr(t,e.child,null,n),e=gg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eC(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Sa(t),t.flags&=-257,ku(e,t,o)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,null):(ba(),a=s.fallback,r=t.mode,s=of({mode:"visible",children:s.children},r),a=ur(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,yr(t,e.child,null,o),s=t.child,s.memoizedState=a0(o),s.childLanes=r0(e,i,o),t.memoizedState=s0,nc(null,s));if(Sa(t),Rg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(et(419)),s.stack="",s.digest=i,fc({value:s,source:null,stack:null})),ku(e,t,o)}if(Ze||mr(e,t,o,!1),i=(o&e.childLanes)!==0,Ze||i){if(Ra.current!==null)return ku(e,t,o);if(i=xe,i!==null&&(s=iS(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Er(e,s),qn(i,e,s),mg;return D0(a)||Gh(),ku(e,t,o)}return D0(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,we=Ai(a.nextSibling),un=t,Wt=!0,ya=null,Ei=!1,e!==null&&OS(t,e),t=gg(t,s.children),t.flags|=134221824,t)}function ex(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sh(e.return,t,n)}function nx(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Nh(n)===null&&(t=e),e=e.sibling}return t}function Xu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function fm(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function o0(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=_n.current;if(t.flags&128)return pc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,pc(t,r),s==="backwards"&&e!==null?(fm(e),Qe(e,t,i,n),fm(e)):Qe(e,t,i,n),i=Wt?hc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ex(e,n,t);else if(e.tag===19)ex(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=nx(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,fm(t)),Xu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Nh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Xu(t,!0,n,null,a,i);break;case"together":Xu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=nx(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Xu(t,!1,s,n,a,i)}return t.child}function ix(e,t,n){var i=t.pendingProps;return da(t,t.type,i.value),Qe(e,t,i.children,n),t.child}function Hs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Da|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(mr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=Os(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Os(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wh(e)))}function nC(e,t,n){switch(t.tag){case 3:_h(t,t.stateNode.containerInfo),da(t,Ye,e.memoizedState.cache),pr();break;case 27:case 5:Om(t);break;case 4:_h(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Sa(t),t.flags|=128,null;i=mr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?Cb(e,t,n):(Sa(t),e=Hs(e,t,n),e!==null?e.sibling:null)}Sa(t);break;case 19:if(t.flags&128)return o0(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(mr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return o0(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pc(t,_n.current),i)break;return null;case 22:return t.lanes=0,wb(e,t,n,t.pendingProps);case 24:da(t,Ye,e.memoizedState.cache)}return Hs(e,t,n)}function Rb(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!vg(e,n)&&(t.flags&128)===0)return Ze=!1,nC(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,Wt&&(t.flags&1048576)!==0&&LS(t,hc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ar(t.elementType),t.type=e,typeof e=="function")K0(e)?(i=xr(e,i),t.tag=1,t=$_(null,t,e,i,n)):(t.tag=0,t=i0(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===P0){t.tag=11,t=Z_(null,t,e,i,n);break t}else if(s===z0){t.tag=14,t=K_(null,t,e,i,n);break t}else if(s===os){t.tag=10,t.type=e,t=ix(null,t,n);break t}}throw t=Um(e)||e,Error(et(306,t,""))}}return t;case 0:return i0(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=xr(i,t.pendingProps),$_(e,t,i,s,n);case 3:t:{if(_h(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Zm(e,t),tc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,da(t,Ye,i),i!==a.cache&&qm(t,[Ye],n,!0),$l(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=tx(e,t,i,n);break t}else if(i!==s){s=Ti(Error(et(424)),t),fc(s),t=tx(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=Ai(e.firstChild),un=t,Wt=!0,ya=null,Ei=!0,n=FS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(pr(),i===s){t=Hs(e,t,n);break t}Qe(e,t,i,n)}t=t.child}return t;case 26:return no(e,t),e===null?(n=Nx(t.type,null,t.pendingProps,null))?t.memoizedState=n:Wt||(t.stateNode=yM(t.type,t.pendingProps,va.current,t)):t.memoizedState=Nx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Om(t),e===null&&Wt&&(i=t.stateNode=CM(t.type,t.pendingProps,va.current),un=t,Ei=!0,s=we,La(t.type)?(U0=s,we=Ai(i.firstChild)):we=s),Qe(e,t,t.pendingProps.children,n),no(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Wt&&((s=i=we)&&(i=ZC(i,t.type,t.pendingProps,Ei),i!==null?(t.stateNode=i,un=t,we=Ai(i.firstChild),Ei=!1,s=!0):s=!1),s||Ca(t)),Om(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,C0(s,a)?i=null:r!==null&&C0(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=sg(e,t,Ww,null,null,n),Bo._currentValue=s),no(e,t),Qe(e,t,i,n),t.child;case 6:return e===null&&Wt&&((e=n=we)&&(n=KC(n,t.pendingProps,Ei),n!==null?(t.stateNode=n,un=t,we=null,e=!0):e=!1),e||Ca(t)),null;case 13:return Cb(e,t,n);case 4:return _h(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=yr(t,null,i,n):Qe(e,t,i,n),t.child;case 11:return Z_(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,no(e,t),Qe(e,t,i,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:return ix(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,gr(t),s=vn(s),i=i(s),t.flags|=1,Qe(e,t,i,n),t.child;case 14:return K_(e,t,t.type,t.pendingProps,n);case 15:return Ab(e,t,t.type,t.pendingProps,n);case 19:return o0(e,t,n);case 31:return tC(e,t,n);case 22:return wb(e,t,n,t.pendingProps);case 24:return gr(t),i=vn(Ye),e===null?(s=j0(),s===null&&(s=xe,a=Q0(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},tg(t),da(t,Ye,s)):((e.lanes&n)!==0&&(Zm(e,t),tc(t,null,null,n),$l()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),da(t,Ye,i)):(i=a.cache,da(t,Ye,i),i!==s.cache&&qm(t,[Ye],n,!0))),Qe(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Wt&&tf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:no(e,t),Qe(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function Ds(e){e.flags|=4}function dm(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Lx(t,i):Lx(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(sM())e.flags|=8192;else throw fr=Ch,$0}else e.flags&=-16777217}function sx(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!UM(t))if(sM())e.flags|=8192;else throw fr=Ch,$0}function Wu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tS():536870912,e.lanes|=t,Uo|=t)}function Fl(e,t){if(!Wt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function iC(e,t,n){var i=t.pendingProps;switch(J0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Is(Ye),Co(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(to(t)?Ds(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lm())),Ae(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ds(t),a!==null?(Ae(t),sx(t,a)):(Ae(t),dm(t,s,null,i,n))):a?a!==e.memoizedState?(Ds(t),Ae(t),sx(t,a)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ds(t),Ae(t),dm(t,s,e,i,n)),null;case 27:if(xh(t),n=va.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ds(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ae(t),t.subtreeFlags&=-33554433,null}e=hs.current,to(t)?D_(t,e):(e=CM(s,i,n),t.stateNode=e,Ds(t))}return Ae(t),t.subtreeFlags&=-33554433,null;case 5:if(xh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ds(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ae(t),t.subtreeFlags&=-33554433,null}if(a=hs.current,to(t))D_(t,a);else{var r=yc(va.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[gn]=t,a[Zn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(xn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ds(t)}}return Ae(t),t.subtreeFlags&=-33554433,dm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ds(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=va.current,to(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=un,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[gn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||gM(e.nodeValue,n)),e||Ca(t,!0)}else e=yc(e).createTextNode(i),e[gn]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=to(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[gn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=lm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ni(t),t):(ni(t),null);if((t.flags&128)!==0)throw Error(et(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=to(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(et(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(et(317));s[gn]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),s=!1}else s=lm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ni(t),t):(ni(t),null)}return ni(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wu(t,t.updateQueue),Ae(t),null);case 4:return Co(),e===null&&Ag(t.stateNode.containerInfo),t.flags|=67108864,Ae(t),null;case 10:return Is(t.type),Ae(t),null;case 19:if(ng(t),i=t.memoizedState,i===null)return Ae(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Fl(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Nh(e),a!==null){for(t.flags|=128,Fl(i,!1),e=a.updateQueue,t.updateQueue=e,Wu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)DS(n,e),n=n.sibling;return pc(t,_n.current&1|2),Wt&&Us(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ai()>Hh&&(t.flags|=128,s=!0,Fl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Nh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Wu(t,e),Fl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Wt)return Ae(t),null}else 2*ai()-i.renderingStartTime>Hh&&n!==536870912&&(t.flags|=128,s=!0,Fl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ai(),e.sibling=null,a=_n.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Wt?pc(t,a):(n=a,Ce(Sn,t),Ce(_n,n),Rn===null&&(Rn=t)),Wt&&Us(t,i.treeForkCount),e}return Ae(t),null;case 22:case 23:return ni(t),eg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&Wu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&yn(hr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Is(Ye),Ae(t),null;case 25:return null;case 30:return t.flags|=33554432,Ae(t),null}throw Error(et(156,t.tag))}function sC(e,t){switch(J0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Is(Ye),Co(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xh(t),null;case 31:if(t.memoizedState!==null){if(ni(t),t.alternate===null)throw Error(et(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ni(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ng(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Co(),null;case 10:return Is(t.type),null;case 22:case 23:return ni(t),eg(),e!==null&&yn(hr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Is(Ye),null;case 25:return null;default:return null}}function Nb(e,t){switch(J0(t),t.tag){case 3:Is(Ye),Co();break;case 26:case 27:case 5:xh(t);break;case 4:Co();break;case 31:t.memoizedState!==null&&ni(t);break;case 13:ni(t);break;case 19:ng(t);break;case 10:Is(t.type);break;case 22:case 23:ni(t),eg(),e!==null&&yn(hr);break;case 24:Is(Ye)}}function Dc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){me(t,t.return,o)}}function Na(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){me(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){me(t,t.return,h)}}function Db(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{VS(t,n)}catch(i){me(e,e.return,i)}}}function Ub(e,t,n){n.props=xr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){me(e,t,i)}}function as(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=zs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=bM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ui(e);Yn(e.child,!1,qC,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){me(e,t,o)}}function mn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){me(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){me(e,t,s)}else n.current=null}function Ih(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)AM(e.stateNode,t[n])}function ax(e){for(var t=e.return;t!==null&&(_g(t)&&AM(e.stateNode,t.stateNode),!yg(t));)t=t.return}function ic(e){for(var t=e.return;t!==null&&(_g(t)&&YC(e.stateNode,t.stateNode),!yg(t));)t=t.return}function yg(e){return e.tag===5||e.tag===3||e.tag===27}function _g(e){return e&&e.tag===7&&e.stateNode!==null}function l0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){me(e,e.return,s)}}function pm(e,t,n){try{var i=e.stateNode;CC(i,e.type,n,t),i[Zn]=t}catch(s){me(e,e.return,s)}}function Lb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function mm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function c0(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ls)),Ih(e,i),ae=!0;else if(s!==4&&(s===27&&(Ih(e,i),i=null,La(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(c0(e,t,n,i),e=e.sibling;e!==null;)c0(e,t,n,i),e=e.sibling}function Ph(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Ih(e,i),ae=!0;else if(s!==4&&(s===27&&(Ih(e,i),i=null,La(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ph(e,t,n,i),e=e.sibling;e!==null;)Ph(e,t,n,i),e=e.sibling}function Ob(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);xn(t,i,n),t[gn]=e,t[Zn]=n}catch(a){me(e,e.return,a)}}var zh=!1,ii=null;function rx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(zh=!0)}var rs=null;function ox(){var e=rs;return rs=null,e}var Xn=0;function Xo(e,t,n,i,s){return Xn=0,Ib(e.child,t,n,i,s)}function Ib(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=R0(r);i.push(o),o.view&&(a=!0)}else a||R0(r).view&&(a=!0);zh=!0,_M(r,Xn===0?t:t+"_"+Xn,n),Xn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||Ib(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ds(e,t){for(;e!==null;)e.tag===5?xM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ds(e.child,t)),e=e.sibling}function ch(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ch(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(et(544));var n=t.name;t=ks(t.default,t.share),t!=="none"&&(Xo(e,n,t,null,!1)||ds(e.child,!1))}e=e.sibling}}function u0(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=zs(i,n),a=ks(i.default,n.paired?i.share:i.enter);a!=="none"?Xo(e,s,a,null,!1)?(ch(e),n.paired||t||Lo(e,i.onEnter)):ds(e.child,!1):ch(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)u0(e,t),e=e.sibling;else ch(e)}function h0(e){if(ii!==null&&ii.size!==0){var t=ii;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=ks(n.default,n.share);if(a!=="none"&&(Xo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Lo(e,n.onShare)):ds(e.child,!1)),t.delete(i),t.size===0)break}}}h0(e)}e=e.sibling}}}function f0(e){if(e.tag===30){var t=e.memoizedProps,n=zs(t,e.stateNode),i=ii!==null?ii.get(n):void 0,s=ks(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Xo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,ii.delete(n),Lo(e,t.onShare)):Lo(e,t.onExit):ds(e.child,!1)),ii!==null&&h0(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)f0(e),e=e.sibling;else ii!==null&&h0(e)}function Pb(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=zs(t,e.stateNode);t=ks(t.default,t.update),e.flags&=-5,t!=="none"&&Xo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Pb(e);e=e.sibling}}function d0(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ds(e.child,!1))}d0(e)}e=e.sibling}}function uh(e){if(e.tag===30)e.stateNode.paired=null,ds(e.child,!1),d0(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)uh(e),e=e.sibling;else d0(e)}function zb(e){for(e=e.child;e!==null;)e.tag===30?ds(e.child,!1):(e.subtreeFlags&33554432)!==0&&zb(e),e=e.sibling}function xg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Xn<a.length){var c=a[Xn],h=R0(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&_M(l,Xn===0?n:n+"_"+Xn,s),o&&(e.flags&4)!==0||(rs===null&&(rs=[]),rs.push(l,Xn===0?i:i+"_"+Xn,t.memoizedProps)),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:xg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function Bb(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=zs(n,i),a=ks(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(OC)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Xn=0,s=xg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Lo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&Bb(e,t);e=e.sibling}}var on=!1,ue=!1,ns=!1,gm=!1,lx=typeof WeakSet=="function"?WeakSet:Set,ln=null,is=!1,Yl=!1,Bh=!1,p0=!1;function aC(e,t,n){if(e=e.containerInfo,A0=Fo,e=MS(e),q0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++h===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(w0={focusedElem:e,selectionRange:i},Fo=!1,n=(n&335544064)===n,ln=t,t=n?9270:1024;ln!==null;){if(e=ln,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&f0(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&rx(e),qu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&f0(i),qu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&rx(e),qu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,ln=i):(n&&Pb(e),qu(n))}}ii=null}function qu(e){for(;ln!==null;){var t=ln,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=xr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){me(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)N0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":N0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=zs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=ks(s.default,s.update),s!=="none"&&Xo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(et(163))}if(i=t.sibling,i!==null){i.return=t.return,ln=i;break}ln=t.return}}function Fb(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ss(e,n),i&4&&Dc(5,n);break;case 1:if(ss(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){me(n,n.return,r)}else{var s=xr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(n,n.return,r)}}i&64&&Db(n),i&512&&as(n,n.return);break;case 3:if(ss(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{VS(e,t)}catch(r){me(n,n.return,r)}}break;case 27:t===null&&i&4&&Ob(n);case 26:case 5:ss(e,n),t===null&&i&4&&l0(n),i&512&&as(n,n.return);break;case 12:ss(e,n);break;case 31:ss(e,n),i&4&&kb(e,n);break;case 13:ss(e,n),i&4&&Xb(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vC.bind(null,n),JC(e,n))));break;case 22:if(i=n.memoizedState!==null||on,!i){var a=t!==null&&t.memoizedState!==null||ue;t=on,s=ue,on=i,(ue=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Pi(e,n,i)):ss(e,n),on=t,ue=s}break;case 30:ss(e,n),i&512&&as(n,n.return);break;case 7:i&512&&as(n,n.return);default:ss(e,n)}}function m0(e,t){for(e=e.child;e!==null;)Hb(e,t),e=e.sibling}function Hb(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){me(e,e.return,l)}g0(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ae=!0}catch(l){me(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Tx(o,!0):Tx(e.stateNode,!1)}catch(l){me(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&m0(e,t);break;default:m0(e,t)}}function g0(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:Hb(n,i);break t;case 22:n.memoizedState===null&&g0(n,i);break t;default:g0(n,i)}}e=e.sibling}}function Vb(e){var t=e.alternate;t!==null&&(e.alternate=null,Vb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,Gn=!1;function Ii(e,t,n){for(n=n.child;n!==null;)Gb(e,t,n),n=n.sibling}function Gb(e,t,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 26:ue||mn(n,t),Ii(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ue&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ue||mn(n,t),ic(n);var i=Le,s=Gn;La(n.type)&&(Le=n.stateNode,Gn=!1),Ii(e,t,n),RM(n.stateNode,n.type,n.memoizedProps),Le=i,Gn=s;break;case 5:ue||mn(n,t),ic(n);case 6:if(n.tag===6&&ic(n),i=Le,s=Gn,Le=null,Ii(e,t,n),Le=i,Gn=s,Le!==null)if(Gn)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode),ae=!0}catch(a){me(n,t,a)}else try{Le.removeChild(n.stateNode),ae=!0}catch(a){me(n,t,a)}break;case 18:Le!==null&&(Gn?(e=Le,Mx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ho(e)):Mx(Le,n.stateNode));break;case 4:i=Le,s=Gn,Le=n.stateNode.containerInfo,Gn=!0,Ii(e,t,n),Le=i,Gn=s;break;case 0:case 11:case 14:case 15:Na(2,n,t),ue||Na(4,n,t),Ii(e,t,n);break;case 1:ue||(mn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ub(n,t,i)),Ii(e,t,n);break;case 21:Ii(e,t,n);break;case 22:ue=(i=ue)||n.memoizedState!==null,Ii(e,t,n),ue=i;break;case 30:mn(n,t),Ii(e,t,n);break;case 7:ue||mn(n,t),Ii(e,t,n);break;default:Ii(e,t,n)}}function kb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ho(e)}catch(n){me(t,t.return,n)}}}function Xb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ho(e)}catch(n){me(t,t.return,n)}}function rC(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lx),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lx),t;default:throw Error(et(435,e.tag))}}function Yu(e,t){var n=rC(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=yC.bind(null,e,i);i.then(s,s)}})}function In(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(La(l.type)){Le=l.stateNode,Gn=!1;break t}break;case 5:Le=l.stateNode,Gn=!1;break t;case 3:case 4:Le=l.stateNode.containerInfo,Gn=!0;break t}l=l.return}if(Le===null)throw Error(et(160));Gb(r,o,a),Le=null,Gn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wb(t,e,n),t=t.sibling}var zi=null;function Wb(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}In(t,e,n),Pn(e),s&4&&(Na(3,e,e.return),Dc(3,e),Na(5,e,e.return));break;case 1:In(t,e,n),Pn(e),s&512&&(ue||i===null||mn(i,i.return)),s&64&&on&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=zi,In(t,e,n),Pn(e),s&512&&(ue||i===null||mn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(on)e.stateNode=yM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[wc]||i[gn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),xn(i,t,n),i[gn]=e,cn(i),t=i;break t;case"link":if(a=Ux("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),xn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Ux("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),xn(i,t,n),s.head.appendChild(i);break;default:throw Error(et(468,t))}i[gn]=e,cn(i),t=i}e.stateNode=t}else on||L0(a,e.type,e.stateNode);else e.stateNode=Dx(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ue||t.parentNode.removeChild(t)):s.count--,n===null?on||L0(a,e.type,e.stateNode):Dx(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&pm(e,e.memoizedProps,i.memoizedProps);break;case 27:In(t,e,n),Pn(e),s&512&&(ue||i===null||mn(i,i.return)),i!==null&&s&4&&pm(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=ns,ns=!1,In(t,e,n),ns=a,Pn(e),s&512&&(ue||i===null||mn(i,i.return)),e.flags&32){t=e.stateNode;try{No(t,""),ae=!0}catch(h){me(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,pm(e,t,i!==null?i.memoizedProps:t)),s&1024&&(gm=!0);break;case 6:if(In(t,e,n),Pn(e),s&4){if(e.stateNode===null)throw Error(et(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ae=!0}catch(h){me(e,e.return,h)}}break;case 3:if(ae=!1,ph=null,a=zi,zi=_c(t.containerInfo),In(t,e,n),zi=a,Pn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(h){me(e,e.return,h)}gm&&(gm=!1,qb(e)),ae=!1;break;case 4:s=ns,ns=on,i=p_(),a=zi,zi=_c(e.stateNode.containerInfo),In(t,e,n),Pn(e),zi=a,ae&&Yl&&(Bh=!0),ae=i,ns=s;break;case 12:In(t,e,n),Pn(e);break;case 31:In(t,e,n),Pn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Yu(e,t)));break;case 13:In(t,e,n),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(lf=ai()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Yu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=on,l=ue,c=ns;on=o||a,ns=c||a,ue=l||r,In(t,e,n),ue=l,ns=c,on=o,Pn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||on||ue||(t=r||ue,n=on,i=ue,on=a||on,ue=t,oa(e,2),on=n,ue=i),!a&&ns||m0(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Yu(e,n))));break;case 19:In(t,e,n),Pn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Yu(e,t)));break;case 30:s&512&&(ue||i===null||mn(i,i.return)),s=p_(),a=Yl,r=(n&335544064)===n,o=e.memoizedProps,Yl=r&&ks(o.default,o.update)!=="none",In(t,e,n),Pn(e),r&&i!==null&&ae&&(e.flags|=4),Yl=a,ae=s;break;case 21:break;case 7:s&512&&(ue||i===null||mn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:In(t,e,n),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Lb(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(_g(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(yg(s))break;s=s.return}var r=i;if(n==null)throw Error(et(160));switch(n.tag){case 27:var o=n.stateNode,l=mm(e);Ph(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(No(c,""),n.flags&=-33);var h=mm(e);Ph(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=mm(e);c0(e,u,p,r);break;default:throw Error(et(161))}}catch(d){me(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qb(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Fo=!0,t.reset(),Fo=!1),e=e.sibling}}function eo(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Yb(t,e),t=t.sibling;else Bb(t,!1)}function Yb(e,t){var n=e.alternate;if(n===null)u0(e,!1);else switch(e.tag){case 3:if(p0=is=!1,ox(),eo(t,e),!is&&!Bh){if(e=rs,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];xM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),p0=!0}rs=null;break;case 5:eo(t,e);break;case 4:i=is,is=!1,eo(t,e),is&&(Bh=!0),is=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?u0(e,!1):eo(t,e));break;case 30:i=is,s=ox(),is=!1,eo(t,e),is&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=zs(a,r),r=zs(n.memoizedProps,r);var o=ks(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Xn=0,t=xg(e,n,t,r,o,a,!0),Xn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Lo(e,e.memoizedProps.onUpdate),rs=s):s!==null&&(s.push.apply(s,rs),rs=s),is=(e.flags&32)!==0?!0:i;break;default:eo(t,e)}}function ss(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fb(e,t.alternate,t),t=t.sibling}function oa(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),oa(n,i);break;case 1:mn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Ub(n,n.return,s),oa(n,i);break;case 27:(i&2)!==0&&RM(n.stateNode,n.type,n.memoizedProps);case 5:mn(n,n.return),n.tag!==5&&n.tag!==27||ic(n),oa(n,i);break;case 6:ic(n);break;case 26:mn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ue||s.parentNode.removeChild(s),oa(n,i);break;case 22:n.memoizedState===null&&oa(n,i);break;case 30:mn(n,n.return),oa(n,i);break;case 7:mn(n,n.return);default:oa(n,i)}e=e.sibling}}function Pi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Pi(s,a,n),Dc(4,a);break;case 1:if(Pi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){me(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)HS(c[s],l)}catch(h){me(i,i.return,h)}}o&&r&64&&Db(a),as(a,a.return);break;case 27:(n&2)!==0&&Ob(a);case 5:a.tag!==5&&a.tag!==27||ax(a),Pi(s,a,n),o&&i===null&&r&4&&l0(a),as(a,a.return);break;case 6:ax(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||on||L0(_c(l.ownerDocument),a.type,l),Pi(s,a,n),o&&i===null&&r&4&&l0(a),as(a,a.return);break;case 12:Pi(s,a,n);break;case 31:Pi(s,a,n),o&&r&4&&kb(s,a);break;case 13:Pi(s,a,n),o&&r&4&&Xb(s,a);break;case 22:a.memoizedState===null&&Pi(s,a,n),as(a,a.return);break;case 30:Pi(s,a,n),as(a,a.return);break;case 7:as(a,a.return);default:Pi(s,a,n)}t=t.sibling}}function Sg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Rc(n))}function bg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rc(e))}function _i(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)Zb(e,t,n,i),t=t.sibling;else s&&zb(t)}function Zb(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&uh(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:_i(e,t,n,i),a&2048&&Dc(9,t);break;case 1:_i(e,t,n,i);break;case 3:_i(e,t,n,i),s&&p0&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Rc(a)));break;case 12:if(a&2048){_i(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){me(t,t.return,c)}}else _i(e,t,n,i);break;case 31:_i(e,t,n,i);break;case 13:_i(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&uh(o),r._visibility&2?_i(e,t,n,i):sc(e,t)):(s&&o!==null&&o.memoizedState!==null&&uh(t),r._visibility&2?_i(e,t,n,i):(r._visibility|=2,io(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Sg(o,t);break;case 24:_i(e,t,n,i),a&2048&&bg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ds(a.child,!0),ds(t.child,!0))),_i(e,t,n,i);break;default:_i(e,t,n,i)}}function io(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:io(a,r,o,l,s),Dc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?io(a,r,o,l,s):sc(a,r):(h._visibility|=2,io(a,r,o,l,s)),s&&c&2048&&Sg(r.alternate,r);break;case 24:io(a,r,o,l,s),s&&c&2048&&bg(r.alternate,r);break;default:io(a,r,o,l,s)}t=t.sibling}}function sc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:sc(n,i),s&2048&&Sg(i.alternate,i);break;case 24:sc(n,i),s&2048&&bg(i.alternate,i);break;default:sc(n,i)}t=t.sibling}}var rr=8192;function ir(e,t,n){if(e.subtreeFlags&rr)for(e=e.child;e!==null;)Kb(e,t,n),e=e.sibling}function Kb(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&rr&&(e.memoizedState!==null?uR(n,zi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Ox(n,e)));break;case 5:ir(e,t,n),e.flags&rr&&(e=e.stateNode,(t&335544128)===t&&Ox(n,e));break;case 3:case 4:var i=zi;zi=_c(e.stateNode.containerInfo),ir(e,t,n),zi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rr,rr=16777216,ir(e,t,n),rr=i):ir(e,t,n));break;case 30:if((e.flags&rr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,ii===null&&(ii=new Map),ii.set(i,s)}ir(e,t,n);break;default:ir(e,t,n)}}function Jb(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,jb(i,e)}Jb(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qb(e),e=e.sibling}function Qb(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hh(e)):Hl(e);break;default:Hl(e)}}function hh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ln=i,jb(i,e)}Jb(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),hh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hh(t));break;default:hh(t)}e=e.sibling}}function jb(e,t){for(;ln!==null;){var n=ln;switch(n.tag){case 0:case 11:case 15:Na(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Rc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ln=i;else t:for(n=e;ln!==null;){i=ln;var s=i.sibling,a=i.return;if(Vb(i),i===n){ln=null;break t}if(s!==null){s.return=a,ln=s;break t}ln=a}}}var oC={getCacheForType:function(e){var t=vn(Ye),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return vn(Ye).controller.signal}},lC=typeof WeakMap=="function"?WeakMap:Map,re=0,xe=null,Jt=null,jt=0,de=0,ti=null,pa=!1,Wo=!1,Mg=!1,Vs=0,Ve=0,Da=0,dr=0,Fh=0,si=0,Uo=0,ac=null,kn=null,v0=!1,lf=0,$b=0,Hh=1/0,Vh=null,Ma=null,ze=0,Fi=null,Sr=null,fs=0,y0=0,_0=null,tM=null,Eo=null,Ao=null,wo=null,rc=0,fh=null;function li(){return(re&2)!==0&&jt!==0?jt&-jt:It.T!==null?Eg():sS()}function eM(){if(si===0)if((jt&536870912)===0||Wt){var e=Ou;Ou<<=1,(Ou&3932160)===0&&(Ou=262144),si=e}else si=536870912;return e=Sn.current,e!==null&&(e.flags|=32),si}function Lo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=bM(zs(e.memoizedProps,n))),Ao===null&&(Ao=[]),Ao.push(t.bind(null,i))}}function qn(e,t,n){(e===xe&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Oo(e,0),ma(e,jt,si,!1)),Ac(e,n),((re&2)===0||e!==xe)&&(e===xe&&((re&2)===0&&(dr|=n),Ve===4&&ma(e,jt,si,!1)),ms(e))}function nM(e,t,n){if((re&6)!==0)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ec(e,t),s=i?hC(e,t):vm(e,t,!0),a=i;do{if(s===0){Wo&&!i&&ma(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!cC(n)){s=vm(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=ac;var l=o.current.memoizedState.isDehydrated;if(l&&(Oo(o,r).flags|=256),r=vm(o,r,!1),r!==2&&r!==6){if(Mg&&!l){o.errorRecoveryDisabledLanes|=a,dr|=a,s=4;break t}a=kn,kn=s,a!==null&&(kn===null?kn=a:kn.push.apply(kn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Oo(e,0),ma(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ma(i,t,si,!pa);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(s=lf+300-ai(),10<s)){if(ma(i,t,si,!pa),Yh(i,0,!0)!==0)break t;fs=t,i.timeoutHandle=wg(cx.bind(null,i,n,kn,Vh,v0,t,si,dr,Uo,pa,a,"Throttled",-0,0),s);break t}cx(i,n,kn,Vh,v0,t,si,dr,Uo,pa,a,null,-0,0)}}break}while(!0);ms(e)}function cx(e,t,n,i,s,a,r,o,l,c,h,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,x=(a&335544064)===a;if(p=null,(x||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ls},ii=null,Kb(t,a,p),x&&(v=p,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(v.count++,v.waitingForViewTransition=!0,v=xc.bind(v),x.finished.then(v,v))),v=(a&62914560)===a?lf-ai():(a&4194048)===a?$b-ai():0,v=hR(p,v),v!==null)){fs=a,e.cancelPendingCommit=v(hx.bind(null,e,t,a,n,i,s,r,o,l,c,h,p,null,u,d)),ma(e,a,r,!c);return}hx(e,t,a,n,i,s,r,o,l,c,h,p)}function cC(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ci(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,n,i){t=$x(e,t),t&=~Fh,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-oi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&eS(e,n,t)}function cf(){return(re&6)===0?(Uc(0,!1),!1):!0}function Tg(){if(Jt!==null){if(de===0)var e=Jt.return;else e=Jt,Ls=Ar=null,og(e),bo=null,dc=0,e=Jt;for(;e!==null;)Nb(e.alternate,e),e=e.return;Jt=null}}function Oo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,DC(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),fs=0,Tg(),xe=e,Jt=n=Os(e.current,null),jt=t,de=0,ti=null,pa=!1,Wo=Ec(e,t),Mg=!1,Uo=si=Fh=dr=Da=Ve=0,kn=ac=null,v0=!1,Vs=$x(e,t),jh(),n}function iM(e,t){Gt=null,It.H=Lh,t===ko||t===ef?(t=P_(),de=3):t===$0?(t=P_(),de=4):de=t===mg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ti=t,Jt===null&&(Ve=1,Oh(e,Ti(t,e.current)))}function sM(){var e=Sn.current;return e===null?!0:(jt&4194048)===jt?Rn===null:(jt&62914560)===jt||(jt&536870912)!==0?e===Rn:!1}function aM(){var e=It.H;return It.H=Lh,e===null?Lh:e}function rM(){var e=It.A;return It.A=oC,e}function Gh(){Ve=4,pa||(jt&4194048)!==jt&&Sn.current!==null||(Wo=!0),(Da&134217727)===0&&(dr&134217727)===0||xe===null||ma(xe,jt,si,!1)}function vm(e,t,n){var i=re;re|=2;var s=aM(),a=rM();(xe!==e||jt!==t)&&(Vh=null,Oo(e,t)),t=!1;var r=Ve;t:do try{if(de!==0&&Jt!==null){var o=Jt,l=ti;switch(de){case 8:Tg(),r=6;break t;case 3:case 2:case 9:case 6:Sn.current===null&&(t=!0);var c=de;if(de=0,ti=null,vo(e,o,l,c),n&&Wo){r=0;break t}break;default:c=de,de=0,ti=null,vo(e,o,l,c)}}uC(),r=Ve;break}catch(h){iM(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ls=Ar=null,re=i,It.H=s,It.A=a,Jt===null&&(xe=null,jt=0,jh()),r}function uC(){for(;Jt!==null;)oM(Jt)}function hC(e,t){var n=re;re|=2;var i=aM(),s=rM();xe!==e||jt!==t?(Vh=null,Hh=ai()+500,Oo(e,t)):Wo=Ec(e,t);t:do try{if(de!==0&&Jt!==null){t=Jt;var a=ti;e:switch(de){case 1:de=0,ti=null,vo(e,t,a,1);break;case 2:case 9:if(I_(a)){de=0,ti=null,ux(t);break}t=function(){de!==2&&de!==9||xe!==e||(de=7),ms(e)},a.then(t,t);break t;case 3:de=7;break t;case 4:de=5;break t;case 7:I_(a)?(de=0,ti=null,ux(t)):(de=0,ti=null,vo(e,t,a,7));break;case 5:var r=null;switch(Jt.tag){case 26:r=Jt.memoizedState;case 5:case 27:var o=Jt;if(r?UM(r):o.stateNode.complete){de=0,ti=null;var l=o.sibling;if(l!==null)Jt=l;else{var c=o.return;c!==null?(Jt=c,uf(c)):Jt=null}break e}}de=0,ti=null,vo(e,t,a,5);break;case 6:de=0,ti=null,vo(e,t,a,6);break;case 8:Tg(),Ve=6;break t;default:throw Error(et(462))}}fC();break}catch(h){iM(e,h)}while(!0);return Ls=Ar=null,It.H=i,It.A=s,re=n,Jt!==null?0:(xe=null,jt=0,jh(),Ve)}function fC(){for(;Jt!==null&&!RA();)oM(Jt)}function oM(e){var t=Rb(e.alternate,e,Vs);e.memoizedProps=e.pendingProps,t===null?uf(e):Jt=t}function ux(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=j_(n,t,t.pendingProps,t.type,void 0,jt);break;case 11:t=j_(n,t,t.pendingProps,t.type.render,t.ref,jt);break;case 5:og(t);var i=t;i===un&&(Wt?(Ah(i),i.tag===5&&i.stateNode!=null&&(we=i.stateNode)):(Ah(i),Wt=!0));default:Nb(n,t),t=Jt=DS(t,Vs),t=Rb(n,t,Vs)}e.memoizedProps=e.pendingProps,t===null?uf(e):Jt=t}function vo(e,t,n,i){Ls=Ar=null,og(t),bo=null,dc=0;var s=t.return;try{if($w(e,s,t,n,jt)){Ve=1,Oh(e,Ti(n,e.current)),Jt=null;return}}catch(a){if(s!==null)throw Jt=s,a;Ve=1,Oh(e,Ti(n,e.current)),Jt=null;return}t.flags&32768?(Wt||i===1?e=!0:Wo||(jt&536870912)!==0?e=!1:(pa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Sn.current,i!==null&&i.tag===13&&(i.flags|=16384))),lM(t,e)):uf(t)}function uf(e){var t=e;do{if((t.flags&32768)!==0){lM(t,pa);return}e=t.return;var n=iC(t.alternate,t,Vs);if(n!==null){Jt=n;return}if(t=t.sibling,t!==null){Jt=t;return}Jt=t=e}while(t!==null);Ve===0&&(Ve=5)}function lM(e,t){do{var n=sC(e.alternate,e);if(n!==null){n.flags&=32767,Jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Jt=e;return}Jt=e=n}while(e!==null);Ve=6,Jt=null}function hx(e,t,n,i,s,a,r,o,l,c,h,p){e.cancelPendingCommit=null;do hf();while(ze!==0);if((re&6)!==0)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));e===xe&&(Jt=xe=null,jt=0),Sr=t,Fi=e,fs=n,_0=s,tM=i,dC(e,t,n,r,o,l,p)}}function dC(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(y0=o,o|=Y0,FA(e,n,o,i,s,a),Ao=null,(n&335544064)===n?(wo=Vw(e),i=10262):(wo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,_C(Sh,function(){return M0(),null})):(e.callbackNode=null,e.callbackPriority=0),zh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,s=oe.p,oe.p=2,a=re,re|=4;try{aC(e,t,n)}finally{re=a,oe.p=s,It.T=i}}ze=1,zh?Eo=zC(r,e.containerInfo,wo,x0,S0,mC,b0,M0,pC,null,null):(x0(),S0(),b0())}function pC(e){if(ze!==0){var t=Fi.onRecoverableError;t(e,{componentStack:null})}}function mC(){ze===3&&(ze=0,Yb(Sr,Fi),ze=4)}function x0(){if(ze===1){ze=0;var e=Fi,t=Sr,n=fs,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null;var s=oe.p;oe.p=2;var a=re;re|=4;try{Yl=Bh=!1,Wb(t,e,n),n=w0;var r=MS(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&bS(o.ownerDocument.documentElement,o)){if(l!==null&&q0(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,x=Math.min(l.start,v),m=l.end===void 0?x:Math.min(l.end,v);!d.extend&&x>m&&(r=m,m=x,x=r);var f=w_(o,x),g=w_(o,m);if(f&&g&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var b=p.createRange();b.setStart(f.node,f.offset),d.removeAllRanges(),x>m?(d.addRange(b),d.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),d.addRange(b))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Fo=!!A0,w0=A0=null}finally{re=a,oe.p=s,It.T=i}}e.current=t,ze=2}}function S0(){if(ze===2){ze=0;var e=Fi,t=Sr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=oe.p;oe.p=2;var s=re;re|=4;try{Fb(e,t.alternate,t)}finally{re=s,oe.p=i,It.T=n}}ze=3}}function b0(){if(ze===4||ze===3){ze=0;var e=Eo;Eo=null,NA();var t=Fi,n=Sr,i=fs,s=tM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?ze=5:(ze=0,Sr=Fi=null,cM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ma=null),H0(i),n=n.stateNode,ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Tc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=It.T,a=oe.p,oe.p=2,It.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{It.T=n,oe.p=a}}if(s=Ao,r=wo,wo=null,s!==null&&(Ao=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(fs&3)!==0&&hf(),ms(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===fh?rc++:(rc=0,fh=t):(rc=0,fh=null),Uc(0,!1)}}function cM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rc(t)))}function hf(){return Eo!==null&&(Eo.skipTransition(),Eo=null),x0(),S0(),b0(),M0()}function M0(){if(ze!==5)return!1;var e=Fi,t=y0;y0=0;var n=H0(fs),i=It.T,s=oe.p;try{oe.p=32>n?32:n,It.T=null,n=_0,_0=null;var a=Fi,r=fs;if(ze=0,Sr=Fi=null,fs=0,(re&6)!==0)throw Error(et(331));var o=re;if(re|=4,Qb(a.current),Zb(a,a.current,r,n),re=o,Uc(0,!1),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Tc,a)}catch{}return!0}finally{oe.p=s,It.T=i,cM(e,t)}}function fx(e,t,n){t=Ti(n,t),t=n0(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(Ac(e,2),ms(e))}function me(e,t,n){if(e.tag===3)fx(e,e,n);else for(;t!==null;){if(t.tag===3){fx(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ma===null||!Ma.has(i))){e=Ti(n,e),n=Tb(2),i=xa(t,n,2),i!==null&&(Eb(n,i,t,e),Ac(i,2),ms(i));break}}t=t.return}}function ym(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new lC;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Mg=!0,s.add(n),e=gC.bind(null,e,t,n),t.then(e,e))}function gC(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(jt&n)===n&&((Ve===4||Ve===3&&(jt&62914560)===jt&&300>ai()-lf)&&(re&2)===0?Oo(e,0):Fh|=n,Uo===jt&&(Uo=0)),ms(e)}function uM(e,t){t===0&&(t=tS()),e=Er(e,t),e!==null&&(Ac(e,t),ms(e))}function vC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uM(e,n)}function yC(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),uM(e,n)}function _C(e,t){return B0(e,t)}var Io=null,so=null,T0=!1,kh=!1,_m=!1,ga=0;function ms(e){e!==so&&e.next===null&&(so===null?Io=so=e:so=so.next=e),kh=!0,T0||(T0=!0,SC())}function Uc(e,t){if(!_m&&kh){_m=!0;do for(var n=!1,i=Io;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-oi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,dx(i,a))}else a=jt,a=Yh(i,i===xe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Ec(i,a)||(n=!0,dx(i,a));i=i.next}while(n);_m=!1}}function xC(){hM()}function hM(){kh=T0=!1;var e=0;ga!==0&&NC()&&(e=ga);for(var t=ai(),n=null,i=Io;i!==null;){var s=i.next,a=fM(i,t);a===0?(i.next=null,n===null?Io=s:n.next=s,s===null&&(so=n)):(n=i,(e!==0||(a&3)!==0)&&(kh=!0)),i=s}ze!==0&&ze!==5||Uc(e,!1),ga!==0&&(ga=0)}function fM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-oi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=BA(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=xe,n=jt,n=Yh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Qp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ec(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Qp(i),H0(n)){case 2:case 8:n=Qx;break;case 32:n=Sh;break;case 268435456:n=jx;break;default:n=Sh}return i=dM.bind(null,e),n=B0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Qp(i),e.callbackPriority=2,e.callbackNode=null,2}function dM(e,t){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hf()&&e.callbackNode!==n)return null;var i=jt;return i=Yh(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(nM(e,i,t),fM(e,ai()),e.callbackNode!=null&&e.callbackNode===n?dM.bind(null,e):null)}function dx(e,t){if(hf())return null;nM(e,t,!0)}function SC(){UC(function(){(re&6)!==0?B0(Jx,xC):hM()})}function Eg(){if(ga===0){var e=vr;e===0&&(e=Lu,Lu<<=1,(Lu&261888)===0&&(Lu=256)),ga=e}return ga}function px(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:th(e)}function bC(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=px((s[Zn]||null).action),r=i.submitter;r&&(t=(t=r[Zn]||null)?px(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Kh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ga!==0){var l=new FormData(s,r);t0(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),t0(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Zu=0;Zu<km.length;Zu++)Ku=km[Zu],mx=Ku.toLowerCase(),gx=Ku[0].toUpperCase()+Ku.slice(1),Hi(mx,"on"+gx);var Ku,mx,gx,Zu;Hi(ES,"onAnimationEnd");Hi(AS,"onAnimationIteration");Hi(wS,"onAnimationStart");Hi("dblclick","onDoubleClick");Hi("focusin","onFocus");Hi("focusout","onBlur");Hi(Lw,"onTransitionRun");Hi(Ow,"onTransitionStart");Hi(Iw,"onTransitionCancel");Hi(CS,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gc));function pM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Mh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Mh(h)}s.currentTarget=null,a=l}}}}function Kt(e,t){var n=t[u_];n===void 0&&(n=t[u_]=new Set);var i=e+"__bubble";n.has(i)||(mM(t,e,2,!1),n.add(i))}function xm(e,t,n){var i=0;t&&(i|=4),mM(n,e,i,t)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function Ag(e){if(!e[Ju]){e[Ju]=!0,rS.forEach(function(n){n!=="selectionchange"&&(MC.has(n)||xm(n,!1,e),xm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ju]||(t[Ju]=!0,xm("selectionchange",!1,t))}}function mM(e,t,n,i){switch(FM(t)){case 2:var s=mR;break;case 8:s=gR;break;default:s=Lg}n=s.bind(null,t,n,e),s=void 0,!Fm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Sm(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}pS(function(){var c=a,h=G0(n),p=[];t:{var u=RS.get(e);if(u!==void 0){var d=Kh,v=e;switch(e){case"keypress":if(nh(n)===0)break t;case"keydown":case"keyup":d=cw;break;case"focusin":v="focus",d=im;break;case"focusout":v="blur",d=im;break;case"beforeblur":case"afterblur":d=im;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=QA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=pw;break;case ES:case AS:case wS:d=tw;break;case CS:d=gw;break;case"scroll":case"scrollend":d=KA;break;case"wheel":d=yw;break;case"copy":case"cut":case"paste":d=nw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=x_;break;case"submit":d=fw;break;case"toggle":case"beforetoggle":d=xw}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),f=x?u!==null?u+"Capture":null:u;x=[];for(var g=c,b;g!==null;){var _=g;if(b=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||b===null||f===null||(_=lc(g,f),_!=null&&x.push(vc(g,_,b))),m)break;g=g.return}0<x.length&&(u=new d(u,v,null,n,h),p.push({event:u,listeners:x}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Bm&&(v=n.relatedTarget||n.fromElement)&&(or(v)||v[Vo]))break t;(u||d)&&(v=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?or(d):null,d!==null&&(m=Mc(d),x=d.tag,d!==m||x!==5&&x!==27&&x!==6)&&(d=null)):(u=null,d=c),u!==d&&(x=y_,_="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=x_,_="onPointerLeave",f="onPointerEnter",g="pointer"),m=u==null?v:Wl(u),b=d==null?v:Wl(d),v=new x(_,g+"leave",u,n,h),v.target=m,v.relatedTarget=b,_=null,or(h)===c&&(x=new x(f,g+"enter",d,n,h),x.target=b,x.relatedTarget=m,_=x),m=_,x=u&&d?Am(u,d,TC):null,u!==null&&vx(p,v,u,x,!1),d!==null&&m!==null&&vx(p,m,d,x,!0)))}t:{if(u=c?Wl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var M=T_;else if(M_(u))if(xS)M=Nw;else{M=Cw;var T=ww}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&V0(c.elementType)&&(M=T_):M=Rw;if(M&&(M=M(e,c))){_S(p,M,n,h);break t}T&&T(e,u,c)}switch(T=c?Wl(c):window,e){case"focusin":(M_(T)||T.contentEditable==="true")&&(uo=T,Vm=c,Jl=null);break;case"focusout":Jl=Vm=uo=null;break;case"mousedown":Gm=!0;break;case"contextmenu":case"mouseup":case"dragend":Gm=!1,C_(p,n,h);break;case"selectionchange":if(Uw)break;case"keydown":case"keyup":C_(p,n,h)}var A;if(W0)t:{switch(e){case"compositionstart":var y="onCompositionStart";break t;case"compositionend":y="onCompositionEnd";break t;case"compositionupdate":y="onCompositionUpdate";break t}y=void 0}else co?vS(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(gS&&n.locale!=="ko"&&(co||y!=="onCompositionStart"?y==="onCompositionEnd"&&co&&(A=mS()):(fa=h,k0="value"in fa?fa.value:fa.textContent,co=!0)),T=Xh(c,y),0<T.length&&(y=new __(y,e,null,n,h),p.push({event:y,listeners:T}),A?y.data=A:(A=yS(n),A!==null&&(y.data=A)))),(A=bw?Mw(e,n):Tw(e,n))&&(y=Xh(c,"onBeforeInput"),0<y.length&&(T=new __("onBeforeInput","beforeinput",null,n,h),p.push({event:T,listeners:y}),T.data=A)),bC(p,e,c,n,h)}pM(p,t)})}function vc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=lc(e,n),s!=null&&i.unshift(vc(e,s,a)),s=lc(e,t),s!=null&&i.push(vc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function TC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vx(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=lc(n,a),c!=null&&r.unshift(vc(n,c,l))):s||(c=lc(n,a),c!=null&&r.push(vc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var EC=/\r\n?/g,AC=/\u0000|\uFFFD/g;function yx(e){return(typeof e=="string"?e:""+e).replace(EC,`
`).replace(AC,"")}function gM(e,t){return t=yx(t),yx(e)===t}function pe(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||No(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&No(e,""+i);else return;break;case"className":Pu(e,"class",i);break;case"tabIndex":Pu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Pu(e,n,i);break;case"style":dS(e,i,a);return;case"data":if(t!=="object"){Pu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=th(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&pe(e,t,"name",s.name,s,null),pe(e,t,"formEncType",s.formEncType,s,null),pe(e,t,"formMethod",s.formMethod,s,null),pe(e,t,"formTarget",s.formTarget,s,null)):(pe(e,t,"encType",s.encType,s,null),pe(e,t,"method",s.method,s,null),pe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=th(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ls);return;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=th(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Kt("beforetoggle",e),Kt("toggle",e),$u(e,"popover",i);break;case"xlinkActuate":Ns(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ns(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ns(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ns(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ns(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ns(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ns(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$u(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=YA.get(n)||n,$u(e,n,i);else return}ae=!0}function E0(e,t,n,i,s,a){switch(n){case"style":dS(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")No(e,i);else if(typeof i=="number"||typeof i=="bigint")No(e,""+i);else return;break;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ls);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!oS.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Zn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ae=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):$u(e,n,i)}return}ae=!0}function xn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Kt("error",e),Kt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:pe(e,t,a,r,n,null)}}s&&pe(e,t,"srcSet",n.srcSet,n,null),i&&pe(e,t,"src",n.src,n,null);return;case"input":Kt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(et(137,t));break;default:pe(e,t,i,h,n,null)}}uS(e,a,o,l,c,r,s,!1);return;case"select":Kt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:pe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?_o(e,!!i,t,!1):n!=null&&_o(e,!!i,n,!0);return;case"textarea":Kt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:pe(e,t,r,o,n,null)}fS(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":pe(e,t,l,i,n,null));return;case"dialog":Kt("beforetoggle",e),Kt("toggle",e),Kt("cancel",e),Kt("close",e);break;case"iframe":case"object":Kt("load",e);break;case"video":case"audio":for(i=0;i<gc.length;i++)Kt(gc[i],e);break;case"image":Kt("error",e),Kt("load",e);break;case"details":Kt("toggle",e);break;case"embed":case"source":case"link":Kt("error",e),Kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:pe(e,t,c,i,n,null)}return;default:if(V0(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&E0(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&pe(e,t,o,i,n,null))}var wC={};function CC(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||pe(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(ae=!0),a=d;break;case"name":d!==p&&(ae=!0),s=d;break;case"checked":d!==p&&(ae=!0),c=d;break;case"defaultChecked":d!==p&&(ae=!0),h=d;break;case"value":d!==p&&(ae=!0),r=d;break;case"defaultValue":d!==p&&(ae=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(et(137,t));break;default:d!==p&&pe(e,t,u,d,i,p)}}zm(e,r,o,l,c,h,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||pe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ae=!0),u=a;break;case"defaultValue":a!==l&&(ae=!0),o=a;break;case"multiple":a!==l&&(ae=!0),r=a;default:a!==l&&pe(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?_o(e,!!n,u,!1):!!i!=!!n&&(t!=null?_o(e,!!n,t,!0):_o(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ae=!0),u=s;break;case"defaultValue":s!==a&&(ae=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(et(91));break;default:s!==a&&pe(e,t,r,s,i,a)}hS(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:pe(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(ae=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):pe(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)u=n[x],n.hasOwnProperty(x)&&u!=null&&!i.hasOwnProperty(x)&&pe(e,t,x,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:pe(e,t,c,u,i,d)}return;default:if(V0(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&E0(e,t,m,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||E0(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&pe(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||pe(e,t,p,u,i,d)}function _x(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&_x(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&_x(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var A0=null,w0=null;function yc(e){return e.nodeType===9?e:e.ownerDocument}function xx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yM(e,t,n,i){return n=yc(n).createElement(e),n[gn]=i,n[Zn]=t,xn(n,e,t),cn(n),n}function C0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bm=null;function NC(){var e=window.event;return e&&e.type==="popstate"?e===bm?!1:(bm=e,!0):(bm=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,DC=typeof clearTimeout=="function"?clearTimeout:void 0,Sx=typeof Promise=="function"?Promise:void 0,bx=typeof requestAnimationFrame=="function"?requestAnimationFrame:wg,UC=typeof queueMicrotask=="function"?queueMicrotask:typeof Sx<"u"?function(e){return Sx.resolve(null).then(e).catch(LC)}:wg;function LC(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function Mx(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Ho(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Tm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Tm(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[wc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Tm(e.ownerDocument.body);n=s}while(n);Ho(t)}function Tx(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function _M(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function xM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function SM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function R0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return SM(t,n,e)}function OC(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return SM(t,n,e)}function IC(e){return e.documentElement.clientHeight}function PC(e){this.addEventListener("load",e),this.addEventListener("error",e)}function zC(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var x=[];if(v==="loaded"&&(IC(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),v=x.length,e!==null)for(var m=e.suspenseyImages,f=0,g=0;g<m.length;g++){var b=m[g];if(!b.complete){var _=b.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<u.innerHeight&&_.left<u.innerWidth){if(f+=LM(b),f>mh){x.length=v;break}b=new Promise(PC.bind(b)),x.push(b)}}}if(0<x.length)return u=Promise.race([Promise.all(x),new Promise(function(M){return setTimeout(M,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],x=v.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(v),v=x.getKeyframes();for(var f=m=void 0,g=!0,b=0;b<v.length;b++){var _=v[b],M=_.width;if(m===void 0)m=M;else if(m!==M){g=!1;break}if(M=_.height,f===void 0)f=M;else if(f!==M){g=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}g&&m!==void 0&&f!==void 0&&(x.setKeyframes(v),g=getComputedStyle(x.target,x.pseudoElement),g.width!==m||g.height!==f)&&(g=v[0],g.width=m,g.height=f,g=v[v.length-1],g.width=m,g.height=f,x.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function lr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}lr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Se({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};lr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function bM(e){return{name:e,group:new lr("group",e),imagePair:new lr("image-pair",e),old:new lr("old",e),new:new lr("new",e)}}function ui(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(MM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Po(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Yn(this._fragmentFiber.child,!1,BC,e,o,i)}this._eventListeners=a}};function BC(e,t,n,i){return je(e).addEventListener(t,n,i),!1}ui.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=MM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Po(s.optionsOrUseCapture),Yn(this._fragmentFiber.child,!1,FC,e,n,s),i.splice(t,1),a!==null&&a()}};function FC(e,t,n,i){return je(e).removeEventListener(t,n,i),!1}function Po(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ex(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function MM(e,t,n,i){if(e.length===0)return-1;i=Ex(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Ex(a.optionsOrUseCapture)===i)return s}return-1}ui.prototype.dispatchEvent=function(e){var t=br(this._fragmentFiber);if(t===null)return!0;t=je(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Po(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Po(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ui.prototype.focus=function(e){Yn(this._fragmentFiber.child,!0,TM,e,void 0,void 0)};function TM(e,t){return e.tag===6?!1:(e=je(e),QC(e,t))}ui.prototype.focusLast=function(e){var t=[];Yn(this._fragmentFiber.child,!0,Cg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!TM(t[n],e);n--);};function Cg(e,t){return t.push(e),!1}ui.prototype.blur=function(){var e=br(this._fragmentFiber);e!==null&&(e=je(e),e=yc(e).activeElement,e!==null&&Yn(this._fragmentFiber.child,!1,HC,e,void 0,void 0))};function HC(e,t){return e.tag===6?!1:(e=je(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ui.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Yn(this._fragmentFiber.child,!1,VC,e,void 0,void 0)};function VC(e,t){return e.tag===6||(e=je(e),t.observe(e)),!1}ui.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Yn(this._fragmentFiber.child,!1,GC,e,void 0,void 0);for(var n=t=0;n<Bi.length;n++){var i=Bi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Bi[t++]=i}Bi.length=t}};function GC(e,t){return e.tag===6||(e=je(e),t.unobserve(e)),!1}var Bi=[],Mm=!1;function kC(e,t,n){Bi.push({fragmentInstance:e,observer:t,instance:n}),Mm||(Mm=!0,jC(function(){Mm=!1;var i=Bi;Bi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ui.prototype.getClientRects=function(){var e=[];return Yn(this._fragmentFiber.child,!1,XC,e,void 0,void 0),e};function XC(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=je(e),t.push.apply(t,e.getClientRects());return!1}ui.prototype.getRootNode=function(e){var t=br(this._fragmentFiber);return t===null?this:je(t).getRootNode(e)};ui.prototype.compareDocumentPosition=function(e){var t=br(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Yn(this._fragmentFiber.child,!1,Cg,n,void 0,void 0);var i=je(t);if(n.length===0){if(n=i,s_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=qx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=je(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=je(n[0]),s=je(n[n.length-1]);var a=s_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||WC(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function WC(e,t,n,i,s){var a=or(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=br(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Am(n,a,a_),t===null?t=!1:(Yn(t,!0,SA,a,n),a=ao,ao=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Am(i,a,a_),t===null?t=!1:(Yn(t,!0,bA,a,i),a=ao,Em=ao=null,t=a!==null)),t):!1}function Ax(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(et(566));var t=[];Yn(this._fragmentFiber.child,!1,Cg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=qx(this._fragmentFiber);if(i=n?i[1]||i[0]||br(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=je(i),Ax(e,n);return}if(i=je(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=je(s),Ax(s,n)):je(s).scrollIntoView(e),i+=n?-1:1}};function qC(e,t){return e=je(e),EM(e,t),!1}function EM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function AM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Po(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Bi.length;o++){var l=Bi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Bi[r++]=l)}Bi.length=r,a.observe(e)}),EM(e,t))}function YC(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Po(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?kC(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function N0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":N0(n),Zh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ZC(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[wc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function KC(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function wM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ai(e.nextSibling),e===null))return null;return e}function D0(e){return e.data==="$?"||e.data==="$~"}function Rg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function JC(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ai(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var U0=null;function wx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ai(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Cx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function QC(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function jC(e){bx(function(){bx(function(t){return e(t)})})}function CM(e,t,n){switch(t=yc(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function RM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&pe(e,t,i,null,wC,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ls&&(e.onclick=null),Zh(e)}function Tm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zh(e)}var wi=new Map,Rx=new Set;function _c(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Xs=oe.d;oe.d={f:$C,r:tR,D:eR,C:nR,L:iR,m:sR,X:rR,S:aR,M:oR};function $C(){var e=Xs.f(),t=cf();return e||t}function tR(e){var t=Go(e);t!==null&&t.tag===5&&t.type==="form"?db(t):Xs.r(e)}var qo=typeof document>"u"?null:document;function NM(e,t,n){var i=qo;if(i&&typeof t=="string"&&t){var s=Mi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Rx.has(s)||(Rx.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),xn(t,"link",e),cn(t),i.head.appendChild(t)))}}function eR(e){Xs.D(e),NM("dns-prefetch",e,null)}function nR(e,t){Xs.C(e,t),NM("preconnect",e,t)}function iR(e,t,n){Xs.L(e,t,n);var i=qo;if(i&&e&&t){var s='link[rel="preload"][as="'+Mi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Mi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Mi(n.imageSizes)+'"]')):s+='[href="'+Mi(e)+'"]';var a=s;switch(t){case"style":a=zo(e);break;case"script":a=Yo(e)}if(!(wi.has(a)||(e=Se({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),wi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Lc(a))||t==="script"&&i.querySelector(Oc(a))))){var r=i.createElement("link");xn(r,"link",e),t==="style"&&(r[bh]=!0,r.onload=r.onerror=function(){aS(r)}),cn(r),i.head.appendChild(r)}}}function sR(e,t){Xs.m(e,t);var n=qo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Mi(i)+'"][href="'+Mi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Yo(e)}if(!wi.has(a)&&(e=Se({rel:"modulepreload",href:e},t),wi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oc(a)))return}i=n.createElement("link"),xn(i,"link",e),cn(i),n.head.appendChild(i)}}}function aR(e,t,n){Xs.S(e,t,n);var i=qo;if(i&&e){var s=yo(i).hoistableStyles,a=zo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Lc(a)))o.loading=5;else{e=Se({rel:"stylesheet",href:e,"data-precedence":t},n),(n=wi.get(a))&&Ng(e,n);var l=r=i.createElement("link");cn(l),xn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,dh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function rR(e,t){Xs.X(e,t);var n=qo;if(n&&e){var i=yo(n).hoistableScripts,s=Yo(e),a=i.get(s);a||(a=n.querySelector(Oc(s)),a||(e=Se({src:e,async:!0},t),(t=wi.get(s))&&Dg(e,t),a=n.createElement("script"),cn(a),xn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function oR(e,t){Xs.M(e,t);var n=qo;if(n&&e){var i=yo(n).hoistableScripts,s=Yo(e),a=i.get(s);a||(a=n.querySelector(Oc(s)),a||(e=Se({src:e,async:!0,type:"module"},t),(t=wi.get(s))&&Dg(e,t),a=n.createElement("script"),cn(a),xn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Nx(e,t,n,i){var s=(s=va.current)?_c(s):null;if(!s)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=zo(n.href),t=yo(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zo(n.href);var a=yo(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Lc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=wi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},wi.set(e,a)),lR(s,e,a,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Yo(n),t=yo(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function zo(e){return'href="'+Mi(e)+'"'}function Lc(e){return'link[rel="stylesheet"]['+e+"]"}function DM(e){return Se({},e,{"data-precedence":e.precedence,precedence:null})}function lR(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[bh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[bh]=!0,t.onload=t.onerror=aS.bind(null,t),xn(t,"link",n),cn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Yo(e){return'[src="'+Mi(e)+'"]'}function Oc(e){return"script[async]"+e}function Dx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Mi(n.href)+'"]');if(i)return t.instance=i,cn(i),i;var s=Se({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),cn(i),xn(i,"style",s),dh(i,n.precedence,e),t.instance=i;case"stylesheet":s=zo(n.href);var a=e.querySelector(Lc(s));if(a)return t.state.loading|=4,t.instance=a,cn(a),a;i=DM(n),(s=wi.get(s))&&Ng(i,s),a=(e.ownerDocument||e).createElement("link"),cn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),xn(a,"link",i),t.state.loading|=4,dh(a,n.precedence,e),t.instance=a;case"script":return a=Yo(n.src),(s=e.querySelector(Oc(a)))?(t.instance=s,cn(s),s):(i=n,(s=wi.get(a))&&(i=Se({},n),Dg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),cn(s),xn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,dh(i,n.precedence,e));return t.instance}function dh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ng(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ph=null;function Ux(e,t,n){if(ph===null){var i=new Map,s=ph=new Map;s.set(n,i)}else s=ph,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[wc]||a[gn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function L0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function cR(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Lx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function UM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function LM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ox(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=LM(t),e.suspenseyImages.push(t)),e=fR.bind(e),t.decode().then(e,e))}function uR(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zo(i.href),a=t.querySelector(Lc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,cn(a);return}a=t.ownerDocument||t,i=DM(i),(s=wi.get(s))&&Ng(i,s),a=a.createElement("link"),cn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),xn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=xc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mh=0;function hR(e,t){return e.stylesheets&&e.count===0&&gh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&mh===0&&(mh=62500*RC());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>mh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function OM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)gh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function xc(){this.count--,OM(this)}function fR(){this.imgCount--,OM(this)}var Wh=null;function gh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wh=new Map,t.forEach(dR,e),Wh=null,xc.call(e))}function dR(e,t){if(!(t.state.loading&4)){var n=Wh.get(e);if(n)var i=n.get(null);else{n=new Map,Wh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=xc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Bo={$$typeof:os,Provider:null,Consumer:null,_currentValue:cr,_currentValue2:cr,_threadCount:0};function pR(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jp(0),this.hiddenUpdates=jp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function IM(e,t,n,i,s,a,r,o,l,c,h,p){return e=new pR(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=Wn(3,null,null,t),e.current=a,a.stateNode=e,t=Q0(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},tg(a),e}function PM(e){return e?(e=po,e):po}function zM(e,t,n,i,s,a){s=PM(s),i.context===null?i.context=s:i.pendingContext=s,i=_a(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=xa(e,i,t),n!==null&&(qn(n,e,t),jl(n,e,t))}function Ix(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ug(e,t){Ix(e,t),(e=e.alternate)&&Ix(e,t)}function BM(e){if(e.tag===13||e.tag===31){var t=Er(e,67108864);t!==null&&qn(t,e,67108864),Ug(e,67108864)}}function Px(e){if(e.tag===13||e.tag===31){var t=li();t=F0(t);var n=Er(e,t);n!==null&&qn(n,e,t),Ug(e,t)}}var Fo=!0;function mR(e,t,n,i){var s=It.T;It.T=null;var a=oe.p;try{oe.p=2,Lg(e,t,n,i)}finally{oe.p=a,It.T=s}}function gR(e,t,n,i){var s=It.T;It.T=null;var a=oe.p;try{oe.p=8,Lg(e,t,n,i)}finally{oe.p=a,It.T=s}}function Lg(e,t,n,i){if(Fo){var s=O0(i);if(s===null)Sm(e,t,i,qh,n),zx(e,i);else if(yR(s,e,t,n,i))i.stopPropagation();else if(zx(e,i),t&4&&-1<vR.indexOf(e)){for(;s!==null;){var a=Go(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=sr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-oi(r);o.entanglements[1]|=l,r&=~l}ms(a),(re&6)===0&&(Hh=ai()+500,Uc(0,!1))}}break;case 31:case 13:o=Er(a,2),o!==null&&qn(o,a,2),cf(),Ug(a,2)}if(a=O0(i),a===null&&Sm(e,t,i,qh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Sm(e,t,i,null,n)}}function O0(e){return e=G0(e),Og(e)}var qh=null;function Og(e){if(qh=null,e=or(e),e!==null){var t=Mc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=kx(t),e!==null)return e;e=null}else if(n===31){if(e=Xx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qh=e,null}function FM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(DA()){case Jx:return 2;case Qx:return 8;case Sh:case UA:return 32;case jx:return 268435456;default:return 32}default:return 32}}var I0=!1,Ta=null,Ea=null,Aa=null,Sc=new Map,bc=new Map,ua=[],vR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zx(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Sc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bc.delete(t.pointerId)}}function Vl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Go(t),t!==null&&BM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function yR(e,t,n,i,s){switch(t){case"focusin":return Ta=Vl(Ta,e,t,n,i,s),!0;case"dragenter":return Ea=Vl(Ea,e,t,n,i,s),!0;case"mouseover":return Aa=Vl(Aa,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Sc.set(a,Vl(Sc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,bc.set(a,Vl(bc.get(a)||null,e,t,n,i,s)),!0}return!1}function HM(e){var t=or(e.target);if(t!==null){var n=Mc(t);if(n!==null){if(t=n.tag,t===13){if(t=kx(n),t!==null){e.blockedOn=t,c_(e.priority,function(){Px(n)});return}}else if(t===31){if(t=Xx(n),t!==null){e.blockedOn=t,c_(e.priority,function(){Px(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=O0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Bm=i,n.target.dispatchEvent(i),Bm=null}else return t=Go(n),t!==null&&BM(t),e.blockedOn=n,!1;t.shift()}return!0}function Bx(e,t,n){vh(e)&&n.delete(t)}function _R(){I0=!1,Ta!==null&&vh(Ta)&&(Ta=null),Ea!==null&&vh(Ea)&&(Ea=null),Aa!==null&&vh(Aa)&&(Aa=null),Sc.forEach(Bx),bc.forEach(Bx)}function Qu(e,t){e.blockedOn===t&&(e.blockedOn=null,I0||(I0=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,_R)))}var ju=null;function Fx(e){ju!==e&&(ju=e,$e.unstable_scheduleCallback($e.unstable_NormalPriority,function(){ju===e&&(ju=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Og(i||n)===null)continue;break}var a=Go(n);a!==null&&(e.splice(t,3),t-=3,t0(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Ho(e){function t(l){return Qu(l,e)}Ta!==null&&Qu(Ta,e),Ea!==null&&Qu(Ea,e),Aa!==null&&Qu(Aa,e),Sc.forEach(t),bc.forEach(t);for(var n=0;n<ua.length;n++){var i=ua[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ua.length&&(n=ua[0],n.blockedOn===null);)HM(n),n.blockedOn===null&&ua.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Zn]||null;if(typeof a=="function")r||Fx(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Zn]||null)o=r.formAction;else if(Og(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Fx(n)}}}function VM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Ig(e){this._internalRoot=e}ff.prototype.render=Ig.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=li();zM(n,i,e,t,null,null)};ff.prototype.unmount=Ig.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zM(e.current,2,null,e,null,null),cf(),t[Vo]=null}};function ff(e){this._internalRoot=e}ff.prototype.unstable_scheduleHydration=function(e){if(e){var t=sS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ua.length&&t!==0&&t<ua[n].priority;n++);ua.splice(n,0,e),n===0&&HM(e)}};var Hx=Vx.version;if(Hx!=="19.3.0")throw Error(et(527,Hx,"19.3.0"));oe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=xA(t),e=e!==null?Wx(e):null,e=e===null?null:e.stateNode,e};var xR={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Gl.isDisabled&&Gl.supportsFiber))try{Tc=Gl.inject(xR),ri=Gl}catch{}var Gl;df.createRoot=function(e,t){if(!Gx(e))throw Error(et(299));var n=!1,i="",s=Sb,a=bb,r=Mb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=IM(e,1,!1,null,null,n,i,null,s,a,r,VM),e[Vo]=t.current,Ag(e),new Ig(t)};df.hydrateRoot=function(e,t,n){if(!Gx(e))throw Error(et(299));var i=!1,s="",a=Sb,r=bb,o=Mb,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=IM(e,1,!0,t,n??null,i,s,l,a,r,o,VM),t.context=PM(null),n=t.current,i=li(),i=F0(i),s=_a(i),s.callback=null,xa(n,s,i),n=i,t.current.lanes=n,Ac(t,n),ms(t),e[Vo]=t.current,Ag(e),new ff(t)};df.version="19.3.0"});var WM=$i((UL,XM)=>{"use strict";function kM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kM)}catch(e){console.error(e)}}kM(),XM.exports=GM()});var YM=$i(pf=>{"use strict";var SR=Symbol.for("react.transitional.element"),bR=Symbol.for("react.fragment");function qM(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:SR,type:e,key:i,ref:t!==void 0?t:null,props:n}}pf.Fragment=bR;pf.jsx=qM;pf.jsxs=qM});var wr=$i((OL,ZM)=>{"use strict";ZM.exports=YM()});function MR(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function TR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Wc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function tT(){let e=Wc("canvas");return e.style.display="block",e}function Lv(...e){let t="THREE."+e.shift();hl?hl("log",t,...e):console.log(t,...e)}function eT(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ot(...e){e=eT(e);let t="THREE."+e.shift();if(hl)hl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=eT(e);let t="THREE."+e.shift();if(hl)hl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ur(...e){let t=e.join(" ");t in KM||(KM[t]=!0,Ot(...e))}function nT(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function gu(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[e&255]+Nn[e>>8&255]+Nn[e>>16&255]+Nn[e>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function te(e,t,n){return Math.max(t,Math.min(n,e))}function ER(e,t){return(e%t+t)%t}function zg(e,t,n){return(1-n)*e+n*t}function Ic(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function AR(){let e={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===he&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===he&&(s.r=ll(s.r),s.g=ll(s.g),s.b=ll(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===js?Xc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[kc]:{primaries:t,whitePoint:i,transfer:Xc,toXYZ:QM,fromXYZ:jM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:i,transfer:he,toXYZ:QM,fromXYZ:jM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),e}function Js(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ll(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Hg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Zf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}function kg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Qg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Rr.fromArray(e,a);let o=s.x*Math.abs(Rr.x)+s.y*Math.abs(Rr.y)+s.z*Math.abs(Rr.z),l=t.dot(Rr),c=n.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function GR(e,t,n,i,s,a,r,o){let l;if(t.side===Hn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===qa,o),l===null)return null;Rf.copy(o),Rf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Rf);return c<n.near||c>n.far?null:{distance:c,point:Rf.clone(),object:e}}function Nf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Ef),e.getVertexPosition(l,Af),e.getVertexPosition(c,wf);let h=GR(e,t,n,i,Ef,Af,wf,c1);if(h){let p=new F;Fa.getBarycoord(c1,Ef,Af,wf,p),s&&(h.uv=Fa.getInterpolatedAttribute(s,o,l,c,p,new ee)),a&&(h.uv1=Fa.getInterpolatedAttribute(a,o,l,c,p,new ee)),r&&(h.normal=Fa.getInterpolatedAttribute(r,o,l,c,p,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Fa.getNormal(Ef,Af,wf,u.normal),h.face=u,h.barycoord=p}return h}function Hr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(f1(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(f1(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Un(e){let t={};for(let n=0;n<e.length;n++){let i=Hr(e[n]);for(let s in i)t[s]=i[s]}return t}function f1(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function WR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ov(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}function al(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function iv(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function rT(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function ZR(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function KR(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=rT(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=ZR(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}function d1(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}function _1(e,t){return e.distance-t.distance}function hv(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)hv(a[r],t,n,!0)}}function zv(e,t,n,i){let s=s2(i);switch(n){case Nv:return e*t;case Sd:return e*t/s.components*s.byteLength;case bd:return e*t/s.components*s.byteLength;case Ja:return e*t*2/s.components*s.byteLength;case Md:return e*t*2/s.components*s.byteLength;case Dv:return e*t*3/s.components*s.byteLength;case Ui:return e*t*4/s.components*s.byteLength;case Td:return e*t*4/s.components*s.byteLength;case uu:case hu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fu:case du:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ad:case Cd:return Math.max(e,16)*Math.max(t,8)/4;case Ed:case wd:return Math.max(e,8)*Math.max(t,8)/2;case Rd:case Nd:case Ud:case Ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Dd:case pu:case Od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case kd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Kd:case Jd:case Qd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case jd:case $d:return Math.ceil(e/4)*Math.ceil(t/4)*8;case mu:case tp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function s2(e){switch(e){case $n:case Av:return{byteLength:1,components:1};case _l:case wv:case Zi:return{byteLength:2,components:1};case _d:case xd:return{byteLength:2,components:4};case Yi:case yd:case Di:return{byteLength:4,components:1};case Cv:case Rv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var x1,dv,S1,ru,b1,vl,qa,Hn,Ni,bs,yl,ou,pv,mv,M1,Br,T1,E1,A1,w1,C1,R1,N1,D1,gv,vv,U1,L1,O1,I1,P1,z1,B1,F1,H1,zf,Bf,Ff,cl,Hf,Vf,Gf,kf,pd,V1,G1,qi,yv,_v,xv,Sv,bv,Mv,Tv,Ev,Ya,Fr,md,gd,lu,Xf,vs,Wf,dn,k1,cu,Mn,vd,Za,$n,Av,wv,_l,yd,Yi,Di,Zi,_d,xd,xl,Cv,Rv,Nv,Dv,Ui,ys,Ka,Sd,bd,Ja,Md,Td,uu,hu,fu,du,Ed,Ad,wd,Cd,Rd,Nd,Dd,Ud,Ld,pu,Od,Id,Pd,zd,Bd,Fd,Hd,Vd,Gd,kd,Xd,Wd,qd,Yd,Zd,Kd,Jd,Qd,jd,$d,mu,tp,Gc,qf,If,av,rv,ov,lv,X1,ep,W1,js,di,kc,Xc,he,Pf,q1,Y1,Z1,K1,np,J1,Q1,ip,j1,$1,Uv,Wi,ul,KM,hl,iT,_s,Nn,Pg,Yf,ee,xs,F,Bg,JM,Ft,Fg,QM,jM,$t,Zo,Zf,wR,fl,CR,Vg,Jn,Oe,Kf,Qn,qc,Jf,ge,Ko,Vi,RR,NR,Oa,mf,hi,$M,t1,Qs,dl,DR,e1,Jo,Ws,gf,Pc,UR,LR,n1,i1,s1,a1,OR,Qo,Gg,tn,bn,IR,pl,sT,Ia,vf,Ht,Dn,Yc,Lr,Gi,qs,Xg,Ys,jo,$o,r1,Wg,qg,Yg,Zg,Kg,Jg,Fa,Ss,Zs,ki,yf,tl,el,nl,Pa,za,Cr,zc,_f,xf,Rr,Ke,Sf,PR,pi,Zc,Kc,Fn,zR,Bc,jg,Ha,BR,Ci,$g,il,fi,Fc,hn,Ri,tv,FR,HR,Xi,VR,Va,Ks,ev,bf,Mf,Jc,jn,o1,Nr,Tf,l1,Ef,Af,wf,nv,Cf,c1,Rf,Ie,Qc,jc,sl,u1,Df,h1,kR,Hc,Vc,Or,Dr,XR,Uf,ml,$c,Ga,Qf,tu,Tn,eu,aT,qR,YR,mi,jf,Ir,$f,td,ka,ed,nd,id,sd,gi,Xa,ad,rd,od,nu,Wa,ld,cd,oT,ud,iu,sv,p1,m1,hd,Lf,Of,gs,su,Ba,g1,v1,fn,gl,cv,Pr,zr,rl,ol,fd,dd,Iv,JR,Pv,QR,jR,$R,t2,e2,n2,i2,uv,Ne,IL,y1,au,fv,Bv=Fe(()=>{x1=0,dv=1,S1=2,ru=1,b1=2,vl=3,qa=0,Hn=1,Ni=2,bs=0,yl=1,ou=2,pv=3,mv=4,M1=5,Br=100,T1=101,E1=102,A1=103,w1=104,C1=200,R1=201,N1=202,D1=203,gv=204,vv=205,U1=206,L1=207,O1=208,I1=209,P1=210,z1=211,B1=212,F1=213,H1=214,zf=0,Bf=1,Ff=2,cl=3,Hf=4,Vf=5,Gf=6,kf=7,pd=0,V1=1,G1=2,qi=0,yv=1,_v=2,xv=3,Sv=4,bv=5,Mv=6,Tv=7,Ev=300,Ya=301,Fr=302,md=303,gd=304,lu=306,Xf=1e3,vs=1001,Wf=1002,dn=1003,k1=1004,cu=1005,Mn=1006,vd=1007,Za=1008,$n=1009,Av=1010,wv=1011,_l=1012,yd=1013,Yi=1014,Di=1015,Zi=1016,_d=1017,xd=1018,xl=1020,Cv=35902,Rv=35899,Nv=1021,Dv=1022,Ui=1023,ys=1026,Ka=1027,Sd=1028,bd=1029,Ja=1030,Md=1031,Td=1033,uu=33776,hu=33777,fu=33778,du=33779,Ed=35840,Ad=35841,wd=35842,Cd=35843,Rd=36196,Nd=37492,Dd=37496,Ud=37488,Ld=37489,pu=37490,Od=37491,Id=37808,Pd=37809,zd=37810,Bd=37811,Fd=37812,Hd=37813,Vd=37814,Gd=37815,kd=37816,Xd=37817,Wd=37818,qd=37819,Yd=37820,Zd=37821,Kd=36492,Jd=36494,Qd=36495,jd=36283,$d=36284,mu=36285,tp=36286,Gc=2300,qf=2301,If=2302,av=2303,rv=2400,ov=2401,lv=2402,X1=3200,ep=0,W1=1,js="",di="srgb",kc="srgb-linear",Xc="linear",he="srgb",Pf=7680,q1=519,Y1=512,Z1=513,K1=514,np=515,J1=516,Q1=517,ip=518,j1=519,$1=35044,Uv="300 es",Wi=2e3,ul=2001;KM={},hl=null;iT={[zf]:Bf,[Ff]:Gf,[Hf]:kf,[cl]:Vf,[Bf]:zf,[Gf]:Ff,[kf]:Hf,[Vf]:cl},_s=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pg=Math.PI/180,Yf=180/Math.PI;ee=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=te(this.x,t.x,n.x),this.y=te(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=te(this.x,t,n),this.y=te(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],x=a[r+3];if(p!==x||l!==u||c!==d||h!==v){let m=l*u+c*d+h*v+p*x;m<0&&(u=-u,d=-d,v=-v,x=-x,m=-m);let f=1-o;if(m<.9995){let g=Math.acos(m),b=Math.sin(g);f=Math.sin(f*g)/b,o=Math.sin(o*g)/b,l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+x*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+x*o;let g=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=g,c*=g,h*=g,p*=g}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+h*p+l*d-c*u,t[n+1]=l*v+h*u+c*p-o*d,t[n+2]=c*v+h*d+o*u-l*p,t[n+3]=h*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"YXZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"ZXY":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"ZYX":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"YZX":this._x=u*h*p+c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p-u*d*v;break;case"XZY":this._x=u*h*p-c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p+u*d*v;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(JM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(JM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=te(this.x,t.x,n.x),this.y=te(this.y,t.y,n.y),this.z=te(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=te(this.x,t,n),this.y=te(this.y,t,n),this.z=te(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bg.copy(this).projectOnVector(t),this.sub(Bg)}reflect(t){return this.sub(Bg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bg=new F,JM=new xs,Ft=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],v=i[8],x=s[0],m=s[3],f=s[6],g=s[1],b=s[4],_=s[7],M=s[2],T=s[5],A=s[8];return a[0]=r*x+o*g+l*M,a[3]=r*m+o*b+l*T,a[6]=r*f+o*_+l*A,a[1]=c*x+h*g+p*M,a[4]=c*m+h*b+p*T,a[7]=c*f+h*_+p*A,a[2]=u*x+d*g+v*M,a[5]=u*m+d*b+v*T,a[8]=u*f+d*_+v*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return t[0]=p*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=u*x,t[4]=(h*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=d*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fg.makeScale(t,n)),this}rotate(t){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fg.makeRotation(-t)),this}translate(t,n){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fg=new Ft,QM=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jM=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t=AR();Zf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zo===void 0&&(Zo=Wc("canvas")),Zo.width=t.width,Zo.height=t.height;let s=Zo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Wc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Js(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Js(n[i]/255)*255):n[i]=Js(n[i]);return{data:n,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wR=0,fl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=gu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Hg(s[r].image)):a.push(Hg(s[r]))}else a=Hg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};CR=0,Vg=new F,Jn=class e extends _s{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=vs,s=vs,a=Mn,r=Za,o=Ui,l=$n,c=e.DEFAULT_ANISOTROPY,h=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CR++}),this.uuid=gu(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vg).x}get height(){return this.source.getSize(Vg).y}get depth(){return this.source.getSize(Vg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ot(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ev)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xf:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case Wf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xf:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case Wf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Ev;Jn.DEFAULT_ANISOTROPY=1;Oe=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let b=(c+1)/2,_=(d+1)/2,M=(f+1)/2,T=(h+u)/4,A=(p+x)/4,y=(v+m)/4;return b>_&&b>M?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=T/i,a=A/i):_>M?_<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),i=T/s,a=y/s):M<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),i=A/a,s=y/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-v)*(m-v)+(p-x)*(p-x)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(p-x)/g,this.z=(u-h)/g,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=te(this.x,t.x,n.x),this.y=te(this.y,t.y,n.y),this.z=te(this.z,t.z,n.z),this.w=te(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=te(this.x,t,n),this.y=te(this.y,t,n),this.z=te(this.z,t,n),this.w=te(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kf=class extends _s{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Oe(0,0,t,n),this.scissorTest=!1,this.viewport=new Oe(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Jn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new fl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Kf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},qc=class extends Jn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Jf=class extends Jn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},ge=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,h,p,u,d,v,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,u,d,v,x,m)}set(t,n,i,s,a,r,o,l,c,h,p,u,d,v,x,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Ko.setFromMatrixColumn(t,0).length(),a=1/Ko.setFromMatrixColumn(t,1).length(),r=1/Ko.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*h,d=r*p,v=o*h,x=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-x*c,n[9]=-o*l,n[2]=x-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,v=c*h,x=c*p;n[0]=u+x*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-v,n[6]=x+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,v=c*h,x=c*p;n[0]=u-x*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*h,n[9]=x-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,d=r*p,v=o*h,x=o*p;n[0]=l*h,n[4]=v*c-d,n[8]=u*c+x,n[1]=l*p,n[5]=x*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,x=o*c;n[0]=l*h,n[4]=x-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+v,n[10]=u-x*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,x=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+x,n[5]=r*h,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*h,n[10]=x*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RR,t,NR)}lookAt(t,n,i){let s=this.elements;return hi.subVectors(t,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Oa.crossVectors(i,hi),Oa.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Oa.crossVectors(i,hi)),Oa.normalize(),mf.crossVectors(hi,Oa),s[0]=Oa.x,s[4]=mf.x,s[8]=hi.x,s[1]=Oa.y,s[5]=mf.y,s[9]=hi.y,s[2]=Oa.z,s[6]=mf.z,s[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],v=i[2],x=i[6],m=i[10],f=i[14],g=i[3],b=i[7],_=i[11],M=i[15],T=s[0],A=s[4],y=s[8],w=s[12],C=s[1],N=s[5],U=s[9],I=s[13],D=s[2],H=s[6],L=s[10],B=s[14],Y=s[3],W=s[7],K=s[11],$=s[15];return a[0]=r*T+o*C+l*D+c*Y,a[4]=r*A+o*N+l*H+c*W,a[8]=r*y+o*U+l*L+c*K,a[12]=r*w+o*I+l*B+c*$,a[1]=h*T+p*C+u*D+d*Y,a[5]=h*A+p*N+u*H+d*W,a[9]=h*y+p*U+u*L+d*K,a[13]=h*w+p*I+u*B+d*$,a[2]=v*T+x*C+m*D+f*Y,a[6]=v*A+x*N+m*H+f*W,a[10]=v*y+x*U+m*L+f*K,a[14]=v*w+x*I+m*B+f*$,a[3]=g*T+b*C+_*D+M*Y,a[7]=g*A+b*N+_*H+M*W,a[11]=g*y+b*U+_*L+M*K,a[15]=g*w+b*I+_*B+M*$,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],v=t[3],x=t[7],m=t[11],f=t[15],g=l*d-c*u,b=o*d-c*p,_=o*u-l*p,M=r*d-c*h,T=r*u-l*h,A=r*p-o*h;return n*(x*g-m*b+f*_)-i*(v*g-m*M+f*T)+s*(v*b-x*M+f*A)-a*(v*_-x*T+m*A)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],v=t[12],x=t[13],m=t[14],f=t[15],g=n*o-i*r,b=n*l-s*r,_=n*c-a*r,M=i*l-s*o,T=i*c-a*o,A=s*c-a*l,y=h*x-p*v,w=h*m-u*v,C=h*f-d*v,N=p*m-u*x,U=p*f-d*x,I=u*f-d*m,D=g*I-b*U+_*N+M*C-T*w+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return t[0]=(o*I-l*U+c*N)*H,t[1]=(s*U-i*I-a*N)*H,t[2]=(x*A-m*T+f*M)*H,t[3]=(u*T-p*A-d*M)*H,t[4]=(l*C-r*I-c*w)*H,t[5]=(n*I-s*C+a*w)*H,t[6]=(m*_-v*A-f*b)*H,t[7]=(h*A-u*_+d*b)*H,t[8]=(r*U-o*C+c*y)*H,t[9]=(i*C-n*U-a*y)*H,t[10]=(v*T-x*_+f*g)*H,t[11]=(p*_-h*T-d*g)*H,t[12]=(o*w-r*N-l*y)*H,t[13]=(n*N-i*w+s*y)*H,t[14]=(x*b-v*M-m*g)*H,t[15]=(h*M-p*b+u*g)*H,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,u=a*c,d=a*h,v=a*p,x=r*h,m=r*p,f=o*p,g=l*c,b=l*h,_=l*p,M=i.x,T=i.y,A=i.z;return s[0]=(1-(x+f))*M,s[1]=(d+_)*M,s[2]=(v-b)*M,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(u+f))*T,s[6]=(m+g)*T,s[7]=0,s[8]=(v+b)*A,s[9]=(m-g)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Ko.set(s[0],s[1],s[2]).length(),o=Ko.set(s[4],s[5],s[6]).length(),l=Ko.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Vi.copy(this);let c=1/r,h=1/o,p=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=p,Vi.elements[9]*=p,Vi.elements[10]*=p,n.setFromRotationMatrix(Vi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Wi,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,x;if(l)v=a/(r-a),x=r*a/(r-a);else if(o===Wi)v=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===ul)v=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Wi,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,x;if(l)v=1/(r-a),x=r/(r-a);else if(o===Wi)v=-2/(r-a),x=-(r+a)/(r-a);else if(o===ul)v=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ko=new F,Vi=new ge,RR=new F(0,0,0),NR=new F(1,1,1),Oa=new F,mf=new F,hi=new F,$M=new ge,t1=new xs,Qs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return $M.makeRotationFromQuaternion(t),this.setFromRotationMatrix($M,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return t1.setFromEuler(this),this.setFromQuaternion(t1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qs.DEFAULT_ORDER="XYZ";dl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},DR=0,e1=new F,Jo=new xs,Ws=new ge,gf=new F,Pc=new F,UR=new F,LR=new xs,n1=new F(1,0,0),i1=new F(0,1,0),s1=new F(0,0,1),a1={type:"added"},OR={type:"removed"},Qo={type:"childadded",child:null},Gg={type:"childremoved",child:null},tn=class e extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DR++}),this.uuid=gu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new F,n=new Qs,i=new xs,s=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ft}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jo.setFromAxisAngle(t,n),this.quaternion.multiply(Jo),this}rotateOnWorldAxis(t,n){return Jo.setFromAxisAngle(t,n),this.quaternion.premultiply(Jo),this}rotateX(t){return this.rotateOnAxis(n1,t)}rotateY(t){return this.rotateOnAxis(i1,t)}rotateZ(t){return this.rotateOnAxis(s1,t)}translateOnAxis(t,n){return e1.copy(t).applyQuaternion(this.quaternion),this.position.add(e1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(n1,t)}translateY(t){return this.translateOnAxis(i1,t)}translateZ(t){return this.translateOnAxis(s1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?gf.copy(t):gf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(Pc,gf,this.up):Ws.lookAt(gf,Pc,this.up),this.quaternion.setFromRotationMatrix(Ws),s&&(Ws.extractRotation(s.matrixWorld),Jo.setFromRotationMatrix(Ws),this.quaternion.premultiply(Jo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(a1),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(OR),Gg.child=t,this.dispatchEvent(Gg),Gg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ws.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ws),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(a1),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pc,t,UR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pc,LR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new F(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;bn=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},IR={type:"move"},pl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(IR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},sT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},vf={h:0,s:0,l:0};Ht=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=$t.workingColorSpace){return this.r=t,this.g=n,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=$t.workingColorSpace){if(t=ER(t,1),n=te(n,0,1),i=te(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=kg(r,a,t+1/3),this.g=kg(r,a,t),this.b=kg(r,a,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,n=di){function i(a){a!==void 0&&parseFloat(a)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=di){let i=sT[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}copyLinearToSRGB(t){return this.r=ll(t.r),this.g=ll(t.g),this.b=ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return $t.workingToColorSpace(Dn.copy(this),t),Math.round(te(Dn.r*255,0,255))*65536+Math.round(te(Dn.g*255,0,255))*256+Math.round(te(Dn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=$t.workingColorSpace){$t.workingToColorSpace(Dn.copy(this),n);let i=Dn.r,s=Dn.g,a=Dn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=$t.workingColorSpace){return $t.workingToColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=di){$t.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,s=Dn.b;return t!==di?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+n,Ia.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ia),t.getHSL(vf);let i=zg(Ia.h,vf.h,n),s=zg(Ia.s,vf.s,n),a=zg(Ia.l,vf.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Ht;Ht.NAMES=sT;Yc=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qs,this.environmentIntensity=1,this.environmentRotation=new Qs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Gi=new F,qs=new F,Xg=new F,Ys=new F,jo=new F,$o=new F,r1=new F,Wg=new F,qg=new F,Yg=new F,Zg=new Oe,Kg=new Oe,Jg=new Oe,Fa=class e{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Gi.subVectors(t,n),s.cross(Gi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Gi.subVectors(s,n),qs.subVectors(i,n),Xg.subVectors(t,n);let r=Gi.dot(Gi),o=Gi.dot(qs),l=Gi.dot(Xg),c=qs.dot(qs),h=qs.dot(Xg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,v=(r*h-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ys)===null?!1:Ys.x>=0&&Ys.y>=0&&Ys.x+Ys.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ys)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ys.x),l.addScaledVector(r,Ys.y),l.addScaledVector(o,Ys.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Zg.setScalar(0),Kg.setScalar(0),Jg.setScalar(0),Zg.fromBufferAttribute(t,n),Kg.fromBufferAttribute(t,i),Jg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Zg,a.x),r.addScaledVector(Kg,a.y),r.addScaledVector(Jg,a.z),r}static isFrontFacing(t,n,i,s){return Gi.subVectors(i,n),qs.subVectors(t,n),Gi.cross(qs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),qs.subVectors(this.a,this.b),Gi.cross(qs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;jo.subVectors(s,i),$o.subVectors(a,i),Wg.subVectors(t,i);let l=jo.dot(Wg),c=$o.dot(Wg);if(l<=0&&c<=0)return n.copy(i);qg.subVectors(t,s);let h=jo.dot(qg),p=$o.dot(qg);if(h>=0&&p<=h)return n.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(jo,r);Yg.subVectors(t,a);let d=jo.dot(Yg),v=$o.dot(Yg);if(v>=0&&d<=v)return n.copy(a);let x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector($o,o);let m=h*v-d*p;if(m<=0&&p-h>=0&&d-v>=0)return r1.subVectors(a,s),o=(p-h)/(p-h+(d-v)),n.copy(s).addScaledVector(r1,o);let f=1/(m+x+u);return r=x*f,o=u*f,n.copy(i).addScaledVector(jo,r).addScaledVector($o,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ss=class{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ki):ki.fromBufferAttribute(a,r),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yf.copy(i.boundingBox)),yf.applyMatrix4(t.matrixWorld),this.union(yf)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zc),_f.subVectors(this.max,zc),tl.subVectors(t.a,zc),el.subVectors(t.b,zc),nl.subVectors(t.c,zc),Pa.subVectors(el,tl),za.subVectors(nl,el),Cr.subVectors(tl,nl);let n=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-Cr.z,Cr.y,Pa.z,0,-Pa.x,za.z,0,-za.x,Cr.z,0,-Cr.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-Cr.y,Cr.x,0];return!Qg(n,tl,el,nl,_f)||(n=[1,0,0,0,1,0,0,0,1],!Qg(n,tl,el,nl,_f))?!1:(xf.crossVectors(Pa,za),n=[xf.x,xf.y,xf.z],Qg(n,tl,el,nl,_f))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zs=[new F,new F,new F,new F,new F,new F,new F,new F],ki=new F,yf=new Ss,tl=new F,el=new F,nl=new F,Pa=new F,za=new F,Cr=new F,zc=new F,_f=new F,xf=new F,Rr=new F;Ke=new F,Sf=new ee,PR=0,pi=class extends _s{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=$1,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sf.fromBufferAttribute(this,n),Sf.applyMatrix3(t),this.setXY(n,Sf.x,Sf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix3(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix4(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyNormalMatrix(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.transformDirection(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ic(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ic(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ic(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ic(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ic(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array),s=Kn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),i=Kn(i,this.array),s=Kn(s,this.array),a=Kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=class extends pi{constructor(t,n,i){super(new Uint16Array(t),n,i)}},Kc=class extends pi{constructor(t,n,i){super(new Uint32Array(t),n,i)}},Fn=class extends pi{constructor(t,n,i){super(new Float32Array(t),n,i)}},zR=new Ss,Bc=new F,jg=new F,Ha=class{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):zR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bc.subVectors(t,this.center);let n=Bc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Bc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bc.copy(t.center).add(jg)),this.expandByPoint(Bc.copy(t.center).sub(jg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},BR=0,Ci=new ge,$g=new tn,il=new F,fi=new Ss,Fc=new Ss,hn=new F,Ri=class e extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=gu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(MR(t)?Kc:Zc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ft().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,n,i){return Ci.makeTranslation(t,n,i),this.applyMatrix4(Ci),this}scale(t,n,i){return Ci.makeScale(t,n,i),this.applyMatrix4(Ci),this}lookAt(t){return $g.lookAt(t),$g.updateMatrix(),this.applyMatrix4($g.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(il).negate(),this.translate(il.x,il.y,il.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Fn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Fc.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(fi.min,Fc.min),fi.expandByPoint(hn),hn.addVectors(fi.max,Fc.max),fi.expandByPoint(hn)):(fi.expandByPoint(Fc.min),fi.expandByPoint(Fc.max))}fi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)hn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(hn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(il.fromBufferAttribute(t,c),hn.add(il)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new F,l[y]=new F;let c=new F,h=new F,p=new F,u=new ee,d=new ee,v=new ee,x=new F,m=new F;function f(y,w,C){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,C),u.fromBufferAttribute(a,y),d.fromBufferAttribute(a,w),v.fromBufferAttribute(a,C),h.sub(c),p.sub(c),d.sub(u),v.sub(u);let N=1/(d.x*v.y-v.x*d.y);isFinite(N)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(N),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(N),o[y].add(x),o[w].add(x),o[C].add(x),l[y].add(m),l[w].add(m),l[C].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let y=0,w=g.length;y<w;++y){let C=g[y],N=C.start,U=C.count;for(let I=N,D=N+U;I<D;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let b=new F,_=new F,M=new F,T=new F;function A(y){M.fromBufferAttribute(s,y),T.copy(M);let w=o[y];b.copy(w),b.sub(M.multiplyScalar(M.dot(w))).normalize(),_.crossVectors(T,w);let N=_.dot(l[y])<0?-1:1;r.setXYZW(y,b.x,b.y,b.z,N)}for(let y=0,w=g.length;y<w;++y){let C=g[y],N=C.start,U=C.count;for(let I=N,D=N+U;I<D;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,h=new F,p=new F;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)hn.fromBufferAttribute(t,n),hn.normalize(),t.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let f=0;f<h;f++)u[v++]=c[d++]}return new pi(u,h,p)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tv=new F,FR=new F,HR=new Ft,Xi=class{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=tv.subVectors(i,n).cross(FR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(tv),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||HR.getNormalMatrix(t),s=this.coplanarPoint(tv).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},VR=0,Va=class extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=gu(),this.name="",this.type="Material",this.blending=yl,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gv,this.blendDst=vv,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pf,this.stencilZFail=Pf,this.stencilZPass=Pf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ot(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Xi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ee().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ks=new F,ev=new F,bf=new F,Mf=new F,Jc=class{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ks)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ks.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ks.copy(this.origin).addScaledVector(this.direction,n),Ks.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){ev.copy(t).add(n).multiplyScalar(.5),bf.copy(n).sub(t).normalize(),Mf.copy(this.origin).sub(ev);let a=t.distanceTo(n)*.5,r=-this.direction.dot(bf),o=Mf.dot(this.direction),l=-Mf.dot(bf),c=Mf.lengthSq(),h=Math.abs(1-r*r),p,u,d,v;if(h>0)if(p=r*l-o,u=r*o-l,v=a*h,p>=0)if(u>=-v)if(u<=v){let x=1/h;p*=x,u*=x,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ev).addScaledVector(bf,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ks.subVectors(t.center,this.origin);let i=Ks.dot(this.direction),s=Ks.dot(Ks)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ks)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,x=n.y-r.y,m=n.z-r.z,f=i.x-r.x,g=i.y-r.y,b=i.z-r.z,_=Math.abs(l),M=Math.abs(c),T=Math.abs(h),A,y,w,C,N,U,I,D,H,L,B,Y;if(_>=M&&_>=T?(w=l,U=p,H=v,Y=f,l>=0?(A=c,y=h,C=u,N=d,I=x,D=m,L=g,B=b):(A=h,y=c,C=d,N=u,I=m,D=x,L=b,B=g)):M>=T?(w=c,U=u,H=x,Y=g,c>=0?(A=h,y=l,C=d,N=p,I=m,D=v,L=b,B=f):(A=l,y=h,C=p,N=d,I=v,D=m,L=f,B=b)):(w=h,U=d,H=m,Y=b,h>=0?(A=l,y=c,C=p,N=u,I=v,D=x,L=f,B=g):(A=c,y=l,C=u,N=p,I=x,D=v,L=g,B=f)),w===0)return null;let W=A/w,K=y/w,$=1/w,St=C-W*U,rt=N-K*U,Pt=I-W*H,Nt=D-K*H,zt=L-W*Y,J=B-K*Y,nt=zt*Nt-J*Pt,gt=St*J-rt*zt,Ut=Pt*rt-Nt*St;if(s){if(nt<0||gt<0||Ut<0)return null}else if((nt<0||gt<0||Ut<0)&&(nt>0||gt>0||Ut>0))return null;let _t=nt+gt+Ut;if(_t===0)return null;let qt=$*(nt*U+gt*H+Ut*Y);return(_t>0?qt<0:qt>0)?null:this.at(qt/_t,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jn=class extends Va{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qs,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},o1=new ge,Nr=new Jc,Tf=new Ha,l1=new F,Ef=new F,Af=new F,wf=new F,nv=new F,Cf=new F,c1=new F,Rf=new F,Ie=class extends tn{constructor(t=new Ri,n=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Cf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(nv.fromBufferAttribute(p,t),r?Cf.addScaledVector(nv,h):Cf.addScaledVector(nv.sub(n),h))}n.add(Cf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tf.copy(i.boundingSphere),Tf.applyMatrix4(a),Nr.copy(t.ray).recast(t.near),!(Tf.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Tf,l1)===null||Nr.origin.distanceToSquared(l1)>(t.far-t.near)**2))&&(o1.copy(a).invert(),Nr.copy(t.ray).applyMatrix4(o1),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Nr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=u.length;v<x;v++){let m=u[v],f=r[m.materialIndex],g=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=g,M=b;_<M;_+=3){let T=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=Nf(this,f,t,i,c,h,p,T,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=v,f=x;m<f;m+=3){let g=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=Nf(this,r,t,i,c,h,p,g,b,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=u.length;v<x;v++){let m=u[v],f=r[m.materialIndex],g=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=g,M=b;_<M;_+=3){let T=_,A=_+1,y=_+2;s=Nf(this,f,t,i,c,h,p,T,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=v,f=x;m<f;m+=3){let g=m,b=m+1,_=m+2;s=Nf(this,r,t,i,c,h,p,g,b,_),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};Qc=class extends Jn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=dn,h=dn,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jc=class extends pi{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sl=new ge,u1=new ge,Df=[],h1=new Ss,kR=new ge,Hc=new Ie,Vc=new Ha,Or=class extends Ie{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new jc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kR)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,sl),h1.copy(t.boundingBox).applyMatrix4(sl),this.boundingBox.union(h1)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ha),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,sl),Vc.copy(t.boundingSphere).applyMatrix4(sl),this.boundingSphere.union(Vc)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(Hc.geometry=this.geometry,Hc.material=this.material,Hc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(i),t.ray.intersectsSphere(Vc)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,sl),u1.multiplyMatrices(i,sl),Hc.matrixWorld=u1,Hc.raycast(t,Df);for(let r=0,o=Df.length;r<o;r++){let l=Df[r];l.instanceId=a,l.object=this,n.push(l)}Df.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qc(new Float32Array(s*this.count),s,this.count,Sd,Di));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dr=new Ha,XR=new ee(.5,.5),Uf=new F,ml=class{constructor(t=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi,r=new Xi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Wi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],d=a[7],v=a[8],x=a[9],m=a[10],f=a[11],g=a[12],b=a[13],_=a[14],M=a[15];if(s[0].setComponents(c-r,d-h,f-v,M-g).normalize(),s[1].setComponents(c+r,d+h,f+v,M+g).normalize(),s[2].setComponents(c+o,d+p,f+x,M+b).normalize(),s[3].setComponents(c-o,d-p,f-x,M-b).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,d-u,f-m,M-_).normalize();else if(s[4].setComponents(c-l,d-u,f-m,M-_).normalize(),n===Wi)s[5].setComponents(c+l,d+u,f+m,M+_).normalize();else if(n===ul)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);let n=XR.distanceTo(t.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Uf.x=s.normal.x>0?t.max.x:t.min.x,Uf.y=s.normal.y>0?t.max.y:t.min.y,Uf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$c=class extends Jn{constructor(t=[],n=Ya,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ga=class extends Jn{constructor(t,n,i=Yi,s,a,r,o=dn,l=dn,c,h=ys,p=1){if(h!==ys&&h!==Ka)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Qf=class extends Ga{constructor(t,n=Yi,i=Ya,s,a,r=dn,o=dn,l,c=ys){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},tu=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Tn=class e extends Ri{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(h,3)),this.setAttribute("uv",new Fn(p,2));function v(x,m,f,g,b,_,M,T,A,y,w){let C=_/A,N=M/y,U=_/2,I=M/2,D=T/2,H=A+1,L=y+1,B=0,Y=0,W=new F;for(let K=0;K<L;K++){let $=K*N-I;for(let St=0;St<H;St++){let rt=St*C-U;W[x]=rt*g,W[m]=$*b,W[f]=D,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[f]=T>0?1:-1,h.push(W.x,W.y,W.z),p.push(St/A),p.push(1-K/y),B+=1}}for(let K=0;K<y;K++)for(let $=0;$<A;$++){let St=u+$+H*K,rt=u+$+H*(K+1),Pt=u+($+1)+H*(K+1),Nt=u+($+1)+H*K;l.push(St,rt,Nt),l.push(rt,Pt,Nt),Y+=6}o.addGroup(d,Y,w),d+=Y,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},eu=class e extends Ri{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=n/l,d=[],v=[],x=[],m=[];for(let f=0;f<h;f++){let g=f*u-r;for(let b=0;b<c;b++){let _=b*p-a;v.push(_,-g,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){let b=g+c*f,_=g+c*(f+1),M=g+1+c*(f+1),T=g+1+c*f;d.push(b,_,T),d.push(_,M,T)}this.setIndex(d),this.setAttribute("position",new Fn(v,3)),this.setAttribute("normal",new Fn(x,3)),this.setAttribute("uv",new Fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};aT={clone:Hr,merge:Un},qR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends Va{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qR,this.fragmentShader=YR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hr(t.uniforms),this.uniformsGroups=WR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new ee().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jf=class extends mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ir=class extends Va{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qs,this.combine=pd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$f=class extends Va{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},td=class extends Va{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};ka=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ed=class extends ka{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rv,endingEnd:rv}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case ov:a=t,o=2*n-i;break;case lv:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ov:r=t,l=2*i-n;break;case lv:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),x=v*v,m=x*v,f=-u*m+2*u*x-u*v,g=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*v+1,b=(-1-d)*m+(1.5+d)*x+.5*v,_=d*m-d*x;for(let M=0;M!==o;++M)a[M]=f*r[h+M]+g*r[c+M]+b*r[l+M]+_*r[p+M];return a}},nd=class extends ka{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*h;return a}},id=class extends ka{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sd=class extends ka{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let v=(i-n)/(s-n),x=1-v;for(let m=0;m!==o;++m)a[m]=r[c+m]*x+r[l+m]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let x=r[c+v],m=r[l+v],f=d*u+v*2,g=p[f],b=p[f+1],_=t*u+v*2,M=h[_],T=h[_+1],A=KR(i,n,g,M,s);a[v]=rT(A,x,b,T,m)}return a}};gi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=al(n,this.TimeBufferType),this.values=al(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:al(t.times,Array),values:al(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),iv(t.settings)&&(i.settings={inTangents:al(t.settings.inTangents,Array),outTangents:al(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new id(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ed(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new sd(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Gc:n=this.InterpolantFactoryMethodDiscrete;break;case qf:n=this.InterpolantFactoryMethodLinear;break;case If:n=this.InterpolantFactoryMethodSmooth;break;case av:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ot("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gc;case this.InterpolantFactoryMethodLinear:return qf;case this.InterpolantFactoryMethodSmooth:return If;case this.InterpolantFactoryMethodBezier:return av}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;iv(this.settings)&&(d1(this.settings.inTangents,t),d1(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&TR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===If,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let x=n[p+v];if(x!==n[u+v]||x!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,iv(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};gi.prototype.ValueTypeName="";gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=qf;Xa=class extends gi{constructor(t,n,i){super(t,n,i)}};Xa.prototype.ValueTypeName="bool";Xa.prototype.ValueBufferType=Array;Xa.prototype.DefaultInterpolation=Gc;Xa.prototype.InterpolantFactoryMethodLinear=void 0;Xa.prototype.InterpolantFactoryMethodSmooth=void 0;ad=class extends gi{constructor(t,n,i,s){super(t,n,i,s)}};ad.prototype.ValueTypeName="color";rd=class extends gi{constructor(t,n,i,s){super(t,n,i,s)}};rd.prototype.ValueTypeName="number";od=class extends ka{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)xs.slerpFlat(a,0,r,c-o,r,c,l);return a}},nu=class extends gi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new od(this.times,this.values,this.getValueSize(),t)}};nu.prototype.ValueTypeName="quaternion";nu.prototype.InterpolantFactoryMethodSmooth=void 0;Wa=class extends gi{constructor(t,n,i){super(t,n,i)}};Wa.prototype.ValueTypeName="string";Wa.prototype.ValueBufferType=Array;Wa.prototype.DefaultInterpolation=Gc;Wa.prototype.InterpolantFactoryMethodLinear=void 0;Wa.prototype.InterpolantFactoryMethodSmooth=void 0;ld=class extends gi{constructor(t,n,i,s){super(t,n,i,s)}};ld.prototype.ValueTypeName="vector";cd=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},oT=new cd,ud=class{constructor(t){this.manager=t!==void 0?t:oT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ud.DEFAULT_MATERIAL_NAME="__DEFAULT";iu=class extends tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},sv=new ge,p1=new F,m1=new F,hd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;p1.setFromMatrixPosition(t.matrixWorld),n.position.copy(p1),m1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(m1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){sv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(sv,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===ul||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(sv)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lf=new F,Of=new xs,gs=new F,su=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lf,Of,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lf,Of,gs.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Lf,Of,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lf,Of,gs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ba=new F,g1=new ee,v1=new ee,fn=class extends su{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(Pg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,n){return this.getViewBounds(t,g1,v1),n.subVectors(v1,g1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Pg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},gl=class extends su{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},cv=class extends hd{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends iu{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new cv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},zr=class extends iu{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}},rl=-90,ol=1,fd=class extends tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(rl,ol,t,n);s.layers=this.layers,this.add(s);let a=new fn(rl,ol,t,n);a.layers=this.layers,this.add(a);let r=new fn(rl,ol,t,n);r.layers=this.layers,this.add(r);let o=new fn(rl,ol,t,n);o.layers=this.layers,this.add(o);let l=new fn(rl,ol,t,n);l.layers=this.layers,this.add(l);let c=new fn(rl,ol,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},dd=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Iv="\\[\\]\\.:\\/",JR=new RegExp("["+Iv+"]","g"),Pv="[^"+Iv+"]",QR="[^"+Iv.replace("\\.","")+"]",jR=/((?:WC+[\/:])*)/.source.replace("WC",Pv),$R=/(WCOD+)?/.source.replace("WCOD",QR),t2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pv),e2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pv),n2=new RegExp("^"+jR+$R+t2+e2+"$"),i2=["material","materials","bones","map"],uv=class{constructor(t,n,i){let s=i||Ne.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ne=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(JR,"")}static parseTrackName(t){let n=n2.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);i2.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=uv;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];IL=new Float32Array(1),y1=new ge,au=class{constructor(t,n,i=0,s=1/0){this.ray=new Jc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Lt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return y1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(y1),this}intersectObject(t,n=!0,i=[]){return hv(t,this,i,n),i.sort(_1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)hv(t[s],this,i,n);return i.sort(_1),i}};fv=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function RT(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function r2(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],x=p[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++u,p[u]=x)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let x=p[d];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}function GN(e,t,n,i,s,a){let r=new Ht(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(g){let b=g.isScene===!0?g.background:null;if(b&&b.isTexture){let _=g.backgroundBlurriness>0;b=t.get(b,_)}return b}function v(g){let b=!1,_=d(g);_===null?m(r,o):_&&_.isColor&&(m(_,1),b=!0);let M=e.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(g,b){let _=d(b);_&&(_.isCubeTexture||_.mapping===lu)?(c===void 0&&(c=new Ie(new Tn(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Hr(Ts.backgroundCube.uniforms),vertexShader:Ts.backgroundCube.vertexShader,fragmentShader:Ts.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(VN.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(NT),c.material.toneMapped=$t.getTransfer(_.colorSpace)!==he,(h!==_||p!==_.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ie(new eu(2,2),new mi({name:"BackgroundMaterial",uniforms:Hr(Ts.background.uniforms),vertexShader:Ts.background.vertexShader,fragmentShader:Ts.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=$t.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=_,p=_.version,u=e.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,b){g.getRGB(sp,Ov(e)),n.buffers.color.setClear(sp.r,sp.g,sp.b,b,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,b=1){r.set(g),o=b,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(r,o)},render:v,addToRenderList:x,dispose:f}}function kN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(N,U,I,D,H){let L=!1,B=p(N,D,I,U);a!==B&&(a=B,c(a.object)),L=d(N,D,I,H),L&&v(N,D,I,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(L||r)&&(r=!1,_(N,U,I,D),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function h(N){return e.deleteVertexArray(N)}function p(N,U,I,D){let H=D.wireframe===!0,L=i[U.id];L===void 0&&(L={},i[U.id]=L);let B=N.isInstancedMesh===!0?N.id:0,Y=L[B];Y===void 0&&(Y={},L[B]=Y);let W=Y[I.id];W===void 0&&(W={},Y[I.id]=W);let K=W[H];return K===void 0&&(K=u(l()),W[H]=K),K}function u(N){let U=[],I=[],D=[];for(let H=0;H<n;H++)U[H]=0,I[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:D,object:N,attributes:{},index:null}}function d(N,U,I,D){let H=a.attributes,L=U.attributes,B=0,Y=I.getAttributes();for(let W in Y)if(Y[W].location>=0){let $=H[W],St=L[W];if(St===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),$===void 0||$.attribute!==St||St&&$.data!==St.data)return!0;B++}return a.attributesNum!==B||a.index!==D}function v(N,U,I,D){let H={},L=U.attributes,B=0,Y=I.getAttributes();for(let W in Y)if(Y[W].location>=0){let $=L[W];$===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let St={};St.attribute=$,$&&$.data&&(St.data=$.data),H[W]=St,B++}a.attributes=H,a.attributesNum=B,a.index=D}function x(){let N=a.newAttributes;for(let U=0,I=N.length;U<I;U++)N[U]=0}function m(N){f(N,0)}function f(N,U){let I=a.newAttributes,D=a.enabledAttributes,H=a.attributeDivisors;I[N]=1,D[N]===0&&(e.enableVertexAttribArray(N),D[N]=1),H[N]!==U&&(e.vertexAttribDivisor(N,U),H[N]=U)}function g(){let N=a.newAttributes,U=a.enabledAttributes;for(let I=0,D=U.length;I<D;I++)U[I]!==N[I]&&(e.disableVertexAttribArray(I),U[I]=0)}function b(N,U,I,D,H,L,B){B===!0?e.vertexAttribIPointer(N,U,I,H,L):e.vertexAttribPointer(N,U,I,D,H,L)}function _(N,U,I,D){x();let H=D.attributes,L=I.getAttributes(),B=U.defaultAttributeValues;for(let Y in L){let W=L[Y];if(W.location>=0){let K=H[Y];if(K===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let $=K.normalized,St=K.itemSize,rt=t.get(K);if(rt===void 0)continue;let Pt=rt.buffer,Nt=rt.type,zt=rt.bytesPerElement,J=Nt===e.INT||Nt===e.UNSIGNED_INT||K.gpuType===yd;if(K.isInterleavedBufferAttribute){let nt=K.data,gt=nt.stride,Ut=K.offset;if(nt.isInstancedInterleavedBuffer){for(let _t=0;_t<W.locationSize;_t++)f(W.location+_t,nt.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let _t=0;_t<W.locationSize;_t++)m(W.location+_t);e.bindBuffer(e.ARRAY_BUFFER,Pt);for(let _t=0;_t<W.locationSize;_t++)b(W.location+_t,St/W.locationSize,Nt,$,gt*zt,(Ut+St/W.locationSize*_t)*zt,J)}else{if(K.isInstancedBufferAttribute){for(let nt=0;nt<W.locationSize;nt++)f(W.location+nt,K.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<W.locationSize;nt++)m(W.location+nt);e.bindBuffer(e.ARRAY_BUFFER,Pt);for(let nt=0;nt<W.locationSize;nt++)b(W.location+nt,St/W.locationSize,Nt,$,St*zt,St/W.locationSize*nt*zt,J)}}else if(B!==void 0){let $=B[Y];if($!==void 0)switch($.length){case 2:e.vertexAttrib2fv(W.location,$);break;case 3:e.vertexAttrib3fv(W.location,$);break;case 4:e.vertexAttrib4fv(W.location,$);break;default:e.vertexAttrib1fv(W.location,$)}}}}g()}function M(){w();for(let N in i){let U=i[N];for(let I in U){let D=U[I];for(let H in D){let L=D[H];for(let B in L)h(L[B].object),delete L[B];delete D[H]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let I in U){let D=U[I];for(let H in D){let L=D[H];for(let B in L)h(L[B].object),delete L[B];delete D[H]}}delete i[N.id]}function A(N){for(let U in i){let I=i[U];for(let D in I){let H=I[D];if(H[N.id]===void 0)continue;let L=H[N.id];for(let B in L)h(L[B].object),delete L[B];delete H[N.id]}}}function y(N){for(let U in i){let I=i[U],D=N.isInstancedMesh===!0?N.id:0,H=I[D];if(H!==void 0){for(let L in H){let B=H[L];for(let Y in B)h(B[Y].object),delete B[Y];delete H[L]}delete I[D],Object.keys(I).length===0&&delete i[U]}}}function w(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function XN(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function WN(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==Ui&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==$n&&A!==Di&&!y&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:_,maxSamples:M,samples:T}}function qN(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Xi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,f=e.get(p);if(!s||v===null||v.length===0||a&&!m)a?h(null):c();else{let g=a?0:i,b=g*4,_=f.clippingState||null;l.value=_,_=h(v,u,b,d);for(let M=0;M!==b;++M)_[M]=n[M];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,v){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=l.value,v!==!0||m===null){let f=d+x*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,_=d;b!==x;++b,_+=4)r.copy(p[b]).applyMatrix4(g,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function QN(e){let t=[],n=[],i=e,s=e-bl+1+YN;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,v=new Float32Array(d*u*p),x=new Float32Array(d*u*p);for(let f=0;f<p;f++){let g=f%3*2/3-1,b=f>2?0:-1,_=[g,b,0,g+2/3,b,0,g+2/3,b+1,0,g,b,0,g+2/3,b+1,0,g,b+1,0];v.set(_,d*u*f);for(let M=0;M<u;M++){let T=h[M*2]*2-1,A=h[M*2+1]*2-1;f===0?Vr.set(1,A,T):f===1?Vr.set(-T,1,-A):f===2?Vr.set(-T,A,1):f===3?Vr.set(-1,A,-T):f===4?Vr.set(-T,-1,A):Vr.set(T,A,-1),Vr.toArray(x,(f*u+M)*d)}}let m=new Ri;m.setAttribute("position",new pi(v,d)),m.setAttribute("outputDirection",new pi(x,d)),n.push(new Ie(m,null)),i>bl&&i--}return{lodMeshes:n,sizeLods:t}}function cT(e,t,n){let i=new Qn(e,t,n);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function jN(e,t,n){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function $N(e,t,n){return new mi({name:"SphericalGaussianBlur",defines:{SAMPLES:ZN,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function uT(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function hT(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function tD(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===md||d===gd)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let x=new op(v.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,v=d===md||d===gd,x=d===Ya||d===Fr;if(v||x){let m=n.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new rp(e)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let g=u.image;return v&&g&&g.height>0||x&&g&&l(g)?(i===null&&(i=new rp(e)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===md?u.mapping=Ya:d===gd&&(u.mapping=Fr),u}function l(u){let d=0,v=6;for(let x=0;x<v;x++)u[x]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function eD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ur("WebGLRenderer: "+i+" extension not supported."),s}}}function nD(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,v=p.attributes.position,x=0;if(v===void 0)return;if(d!==null){let g=d.array;x=d.version;for(let b=0,_=g.length;b<_;b+=3){let M=g[b+0],T=g[b+1],A=g[b+2];u.push(M,T,T,A,A,M)}}else{let g=v.array;x=v.version;for(let b=0,_=g.length/3-1;b<_;b+=3){let M=b+0,T=b+1,A=b+2;u.push(M,T,T,A,A,M)}}let m=new(v.count>=65535?Kc:Zc)(u,1);m.version=x;let f=a.get(p);f&&t.remove(f),a.set(p,m)}function h(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function iD(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];n.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function aD(e,t,n){let i=new WeakMap,s=new Oe;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],b=0;d===!0&&(b=1),v===!0&&(b=2),x===!0&&(b=3);let _=o.attributes.position.count*b,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*M*4*p),A=new qc(T,_,M,p);A.type=Di,A.needsUpdate=!0;let y=b*4;for(let C=0;C<p;C++){let N=m[C],U=f[C],I=g[C],D=_*M*4*C;for(let H=0;H<N.count;H++){let L=H*y;d===!0&&(s.fromBufferAttribute(N,H),T[D+L+0]=s.x,T[D+L+1]=s.y,T[D+L+2]=s.z,T[D+L+3]=0),v===!0&&(s.fromBufferAttribute(U,H),T[D+L+4]=s.x,T[D+L+5]=s.y,T[D+L+6]=s.z,T[D+L+7]=0),x===!0&&(s.fromBufferAttribute(I,H),T[D+L+8]=s.x,T[D+L+9]=s.y,T[D+L+10]=s.z,T[D+L+11]=I.itemSize===4?s.w:1)}}u={count:p,texture:A,size:new ee(_,M)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function rD(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}function lD(e,t,n,i,s,a){let r=new Qn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ri;c.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fn([0,2,0,0,2,0],2));let h=new jf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ie(c,h),u=new gl(-1,1,1,-1,0,1),d=null,v=null,x=!1,m,f=null,g=[],b=!1;this.setSize=function(_,M){r.setSize(_,M),o!==null&&o.setSize(_,M),l!==null&&l.setSize(_,M);for(let T=0;T<g.length;T++){let A=g[T];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){g=_,b=g.length>0&&g[0].isRenderPass===!0;let M=r.width,T=r.height;g.length>0&&o===null&&(o=new Qn(M,T,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(M,T,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<g.length;A++){let y=g[A];y.setSize&&y.setSize(M,T)}},this.begin=function(_,M){if(x||_.toneMapping===qi&&g.length===0)return!1;if(f=M,M!==null){let T=M.width,A=M.height;(r.width!==T||r.height!==A)&&this.setSize(T,A)}return b===!1&&_.setRenderTarget(r),m=_.toneMapping,_.toneMapping=qi,!0},this.hasRenderPass=function(){return b},this.end=function(_,M){_.toneMapping=m,x=!0;let T=r,A=o;for(let y=0;y<g.length;y++){let w=g[y];w.enabled!==!1&&(w.render(_,A,T,M),w.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(d!==_.outputColorSpace||v!==_.toneMapping){d=_.outputColorSpace,v=_.toneMapping,h.defines={},$t.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");let y=oD[v];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(f),_.render(p,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Tl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=fT[s];if(a===void 0&&(a=new Float32Array(s),fT[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function en(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function nn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function up(e,t){let n=dT[t];n===void 0&&(n=new Int32Array(t),dT[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function cD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function uD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2fv(this.addr,t),nn(n,t)}}function hD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(en(n,t))return;e.uniform3fv(this.addr,t),nn(n,t)}}function fD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4fv(this.addr,t),nn(n,t)}}function dD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(en(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),nn(n,t)}else{if(en(n,i))return;gT.set(i),e.uniformMatrix2fv(this.addr,!1,gT),nn(n,i)}}function pD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(en(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),nn(n,t)}else{if(en(n,i))return;mT.set(i),e.uniformMatrix3fv(this.addr,!1,mT),nn(n,i)}}function mD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(en(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),nn(n,t)}else{if(en(n,i))return;pT.set(i),e.uniformMatrix4fv(this.addr,!1,pT),nn(n,i)}}function gD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function vD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2iv(this.addr,t),nn(n,t)}}function yD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;e.uniform3iv(this.addr,t),nn(n,t)}}function _D(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4iv(this.addr,t),nn(n,t)}}function xD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function SD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2uiv(this.addr,t),nn(n,t)}}function bD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;e.uniform3uiv(this.addr,t),nn(n,t)}}function MD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4uiv(this.addr,t),nn(n,t)}}function TD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Wv.compareFunction=n.isReversedDepthBuffer()?ip:np,a=Wv):a=DT,n.setTexture2D(t||a,s)}function ED(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||LT,s)}function AD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||OT,s)}function wD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||UT,s)}function CD(e){switch(e){case 5126:return cD;case 35664:return uD;case 35665:return hD;case 35666:return fD;case 35674:return dD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return gD;case 35667:case 35671:return vD;case 35668:case 35672:return yD;case 35669:case 35673:return _D;case 5125:return xD;case 36294:return SD;case 36295:return bD;case 36296:return MD;case 35678:case 36198:case 36298:case 36306:case 35682:return TD;case 35679:case 36299:case 36307:return ED;case 35680:case 36300:case 36308:case 36293:return AD;case 36289:case 36303:case 36311:case 36292:return wD}}function RD(e,t){e.uniform1fv(this.addr,t)}function ND(e,t){let n=Tl(t,this.size,2);e.uniform2fv(this.addr,n)}function DD(e,t){let n=Tl(t,this.size,3);e.uniform3fv(this.addr,n)}function UD(e,t){let n=Tl(t,this.size,4);e.uniform4fv(this.addr,n)}function LD(e,t){let n=Tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function OD(e,t){let n=Tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ID(e,t){let n=Tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function PD(e,t){e.uniform1iv(this.addr,t)}function zD(e,t){e.uniform2iv(this.addr,t)}function BD(e,t){e.uniform3iv(this.addr,t)}function FD(e,t){e.uniform4iv(this.addr,t)}function HD(e,t){e.uniform1uiv(this.addr,t)}function VD(e,t){e.uniform2uiv(this.addr,t)}function GD(e,t){e.uniform3uiv(this.addr,t)}function kD(e,t){e.uniform4uiv(this.addr,t)}function XD(e,t,n){let i=this.cache,s=t.length,a=up(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Wv:r=DT;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function WD(e,t,n){let i=this.cache,s=t.length,a=up(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||LT,a[r])}function qD(e,t,n){let i=this.cache,s=t.length,a=up(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||OT,a[r])}function YD(e,t,n){let i=this.cache,s=t.length,a=up(n,s);en(i,a)||(e.uniform1iv(this.addr,a),nn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||UT,a[r])}function ZD(e){switch(e){case 5126:return RD;case 35664:return ND;case 35665:return DD;case 35666:return UD;case 35674:return LD;case 35675:return OD;case 35676:return ID;case 5124:case 35670:return PD;case 35667:case 35671:return zD;case 35668:case 35672:return BD;case 35669:case 35673:return FD;case 5125:return HD;case 36294:return VD;case 36295:return GD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return XD;case 35679:case 36299:case 36307:return WD;case 35680:case 36300:case 36308:case 36293:return qD;case 36289:case 36303:case 36311:case 36292:return YD}}function vT(e,t){e.seq.push(t),e.map[t.id]=t}function KD(e,t,n){let i=e.name,s=i.length;for(kv.lastIndex=0;;){let a=kv.exec(i),r=kv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){vT(n,c===void 0?new qv(o,e,t):new Yv(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Zv(o),vT(n,p)),n=p}}}function yT(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function jD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function $D(e){$t._getMatrix(_T,$t.workingColorSpace,e);let t=`mat3( ${_T.elements.map(n=>n.toFixed(4))} )`;switch($t.getTransfer(e)){case Xc:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function xT(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+jD(e.getShaderSource(t),o)}else return a}function tU(e,t){let n=$D(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nU(e,t){let n=eU[t];return n===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function iU(){$t.getLuminanceCoefficients(ap);let e=ap.x.toFixed(4),t=ap.y.toFixed(4),n=ap.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sU(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_u).join(`
`)}function aU(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function rU(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function _u(e){return e!==""}function ST(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bT(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Kv(e){return e.replace(oU,cU)}function cU(e,t){let n=Xt[t];if(n===void 0){let i=lU.get(t);if(i!==void 0)n=Xt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kv(n)}function MT(e){return e.replace(uU,hU)}function hU(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function TT(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dU(e){return fU[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function mU(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":pU[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function vU(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":gU[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function _U(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":yU[e.combine]||"ENVMAP_BLENDING_NONE"}function xU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function SU(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=dU(n),c=mU(n),h=vU(n),p=_U(n),u=xU(n),d=sU(n),v=aU(a),x=s.createProgram(),m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_u).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_u).join(`
`),f.length>0&&(f+=`
`)):(m=[TT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_u).join(`
`),f=[TT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Xt.tonemapping_pars_fragment:"",n.toneMapping!==qi?nU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,tU("linearToOutputTexel",n.outputColorSpace),iU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_u).join(`
`)),r=Kv(r),r=ST(r,n),r=bT(r,n),o=Kv(o),o=ST(o,n),o=bT(o,n),r=MT(r),o=MT(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=g+m+r,_=g+f+o,M=yT(s,s.VERTEX_SHADER,b),T=yT(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,T),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(N){if(e.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(T)||"",H=U.trim(),L=I.trim(),B=D.trim(),Y=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,M,T);else{let K=xT(s,M,"vertex"),$=xT(s,T,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+K+`
`+$)}else H!==""?Ot("WebGLProgram: Program Info Log:",H):(L===""||B==="")&&(W=!1);W&&(N.diagnostics={runnable:Y,programLog:H,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(M),s.deleteShader(T),y=new Ml(s,x),w=rU(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,JD)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}function MU(e){return e===Ja||e===pu||e===mu}function TU(e,t,n,i,s,a){let r=new dl,o=new Jv,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,C,N,U,I){let D=N.fog,H=U.geometry,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||L,B),W=Y&&Y.mapping===lu?Y.image.height:null,K=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Ot("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let $=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,St=$!==void 0?$.length:0,rt=0;H.morphAttributes.position!==void 0&&(rt=1),H.morphAttributes.normal!==void 0&&(rt=2),H.morphAttributes.color!==void 0&&(rt=3);let Pt,Nt,zt,J;if(K){let Me=Ts[K];Pt=Me.vertexShader,Nt=Me.fragmentShader}else{Pt=y.vertexShader,Nt=y.fragmentShader;let Me=o.getVertexShaderStage(y),le=o.getFragmentShaderStage(y);o.update(y,Me,le),zt=Me.id,J=le.id}let nt=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),Ut=U.isInstancedMesh===!0,_t=U.isBatchedMesh===!0,qt=!!y.map,Je=!!y.matcap,Yt=!!Y,se=!!y.aoMap,be=!!y.lightMap,Qt=!!y.bumpMap&&y.wireframe===!1,De=!!y.normalMap,rn=!!y.displacementMap,Vn=!!y.emissiveMap,Pe=!!y.metalnessMap,Xe=!!y.roughnessMap,z=y.anisotropy>0,En=y.clearcoat>0,fe=y.dispersion>0,R=y.retroreflectivity>0,S=y.iridescence>0,V=y.sheen>0,q=y.transmission>0,Q=z&&!!y.anisotropyMap,at=En&&!!y.clearcoatMap,ot=En&&!!y.clearcoatNormalMap,j=En&&!!y.clearcoatRoughnessMap,it=S&&!!y.iridescenceMap,lt=S&&!!y.iridescenceThicknessMap,wt=V&&!!y.sheenColorMap,ft=V&&!!y.sheenRoughnessMap,ct=!!y.specularMap,Ct=!!y.specularColorMap,Dt=!!y.specularIntensityMap,Vt=q&&!!y.transmissionMap,P=q&&!!y.thicknessMap,ut=!!y.gradientMap,tt=!!y.alphaMap,ht=y.alphaTest>0,vt=!!y.alphaHash,st=!!y.extensions,Rt=qi;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Rt=e.toneMapping);let Tt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Pt,fragmentShader:Nt,defines:y.defines,customVertexShaderID:zt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:_t,batchingColor:_t&&U._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&U.instanceColor!==null,instancingMorph:Ut&&U.morphTexture!==null,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qt,matcap:Je,envMap:Yt,envMapMode:Yt&&Y.mapping,envMapCubeUVHeight:W,aoMap:se,lightMap:be,bumpMap:Qt,normalMap:De,displacementMap:rn,emissiveMap:Vn,normalMapObjectSpace:De&&y.normalMapType===W1,normalMapTangentSpace:De&&y.normalMapType===ep,packedNormalMap:De&&y.normalMapType===ep&&MU(y.normalMap.format),metalnessMap:Pe,roughnessMap:Xe,anisotropy:z,anisotropyMap:Q,clearcoat:En,clearcoatMap:at,clearcoatNormalMap:ot,clearcoatRoughnessMap:j,dispersion:fe,retroreflection:R,iridescence:S,iridescenceMap:it,iridescenceThicknessMap:lt,sheen:V,sheenColorMap:wt,sheenRoughnessMap:ft,specularMap:ct,specularColorMap:Ct,specularIntensityMap:Dt,transmission:q,transmissionMap:Vt,thicknessMap:P,gradientMap:ut,opaque:y.transparent===!1&&y.blending===yl&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:ht,alphaHash:vt,combine:y.combine,mapUv:qt&&v(y.map.channel),aoMapUv:se&&v(y.aoMap.channel),lightMapUv:be&&v(y.lightMap.channel),bumpMapUv:Qt&&v(y.bumpMap.channel),normalMapUv:De&&v(y.normalMap.channel),displacementMapUv:rn&&v(y.displacementMap.channel),emissiveMapUv:Vn&&v(y.emissiveMap.channel),metalnessMapUv:Pe&&v(y.metalnessMap.channel),roughnessMapUv:Xe&&v(y.roughnessMap.channel),anisotropyMapUv:Q&&v(y.anisotropyMap.channel),clearcoatMapUv:at&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(y.sheenRoughnessMap.channel),specularMapUv:ct&&v(y.specularMap.channel),specularColorMapUv:Ct&&v(y.specularColorMap.channel),specularIntensityMapUv:Dt&&v(y.specularIntensityMap.channel),transmissionMapUv:Vt&&v(y.transmissionMap.channel),thicknessMapUv:P&&v(y.thicknessMap.channel),alphaMapUv:tt&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(De||z),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(qt||tt),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&De===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:gt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Rt,decodeVideoTexture:qt&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:Vn&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ni,flipSided:y.side===Hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)w.push(C),w.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(f(w,y),g(w,y),w.push(e.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function f(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function g(y,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function b(y){let w=d[y.type],C;if(w){let N=Ts[w];C=aT.clone(N.uniforms)}else C=y.uniforms;return C}function _(y,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new SU(e,w,y,s),c.push(C),h.set(w,C)),C}function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function EU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function AU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function ET(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function AT(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,x,m,f){let g=e[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},e[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=v,g.materialVariant=r(u),g.groupOrder=x,g.renderOrder=u.renderOrder,g.z=m,g.group=f),t++,g}function l(u,d,v,x,m,f,g){g.reversedDepth===!0&&(m=-m);let b=o(u,d,v,x,m,f);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):n.push(b)}function c(u,d,v,x,m,f){let g=o(u,d,v,x,m,f);v.transmission>0?i.unshift(g):v.transparent===!0?s.unshift(g):n.unshift(g)}function h(u,d){n.length>1&&n.sort(u||AU),i.length>1&&i.sort(d||ET),s.length>1&&s.sort(d||ET)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function wU(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new AT,e.set(i,[r])):s>=a.length?(r=new AT,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function CU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Ht};break;case"SpotLight":n={position:new F,direction:new F,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":n={color:new Ht,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function RU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function DU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function UU(e){let t=new CU,n=RU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,a=new ge,r=new ge;function o(c){let h=0,p=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,v=0,x=0,m=0,f=0,g=0,b=0,_=0,M=0,T=0,A=0,y=0,w=0,C=0;c.sort(DU);for(let U=0,I=c.length;U<I;U++){let D=c[U],H=D.color,L=D.intensity,B=D.distance,Y=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ja?Y=D.shadow.map.texture:Y=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*L,p+=H.g*L,u+=H.b*L;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],L);C++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,$=n.get(D);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[v]=$,i.sunShadowMap[v]=Y;let St=K.getViewportCount();for(let rt=0;rt<St;rt++)i.sunShadowMatrix[x+rt]=K.getMatrix(rt),i.sunShadowCascade[x+rt]=K._cascadeData[rt];x+=St,v++}i.sun[d]=W,d++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,$=n.get(D);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=D.shadow.matrix,M++}i.directional[m]=W,m++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(H).multiplyScalar(L),W.distance=B,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[g]=W;let K=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,K.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[g]=K.matrix,D.castShadow){let $=n.get(D);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.spotShadow[g]=$,i.spotShadowMap[g]=Y,A++}g++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(H).multiplyScalar(L),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=W,b++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let K=D.shadow,$=n.get(D);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,i.pointShadow[f]=$,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=D.shadow.matrix,T++}i.point[f]=W,f++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(L),W.groundColor.copy(D.groundColor).multiplyScalar(L),i.hemi[_]=W,_++}}b>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==g||N.rectAreaLength!==b||N.hemiLength!==_||N.numSunShadows!==v||N.numDirectionalShadows!==M||N.numPointShadows!==T||N.numSpotShadows!==A||N.numSpotMaps!==y||N.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=g,i.rectArea.length=b,i.point.length=f,i.hemi.length=_,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.sunLength=d,N.directionalLength=m,N.pointLength=f,N.spotLength=g,N.rectAreaLength=b,N.hemiLength=_,N.numSunShadows=v,N.numDirectionalShadows=M,N.numPointShadows=T,N.numSpotShadows=A,N.numSpotMaps=y,N.numLightProbes=C,i.version=NU++)}function l(c,h){let p=0,u=0,d=0,v=0,x=0,m=0,f=h.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let _=c[g];if(_.isSunLight){let M=i.sun[p];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),p++}else if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),u++}else if(_.isSpotLight){let M=i.spot[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),v++}else if(_.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),r.identity(),a.copy(_.matrixWorld),a.premultiply(f),r.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),x++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function wT(e){let t=new UU(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function LU(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new wT(e),t.set(s,[o])):a>=r.length?(o=new wT(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}function BU(e,t,n){let i=new ml,s=new ee,a=new ee,r=new Oe,o=new $f,l=new td,c={},h=n.maxTextureSize,p={[qa]:Hn,[Hn]:qa,[Ni]:Ni},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:OU,fragmentShader:IU}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Ri;v.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let f=this.type;this.render=function(T,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===b1&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ru);let w=e.getRenderTarget(),C=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),U=e.state;U.setBlending(bs),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let I=f!==this.type;I&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=T.length;D<H;D++){let L=T[D],B=L.shadow;if(B===void 0){Ot("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Y=B.getFrameExtents();s.multiply(Y),a.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/Y.x),s.x=a.x*Y.x,B.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/Y.y),s.y=a.y*Y.y,B.mapSize.y=a.y));let W=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===vl){if(L.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Qn(s.x,s.y,{format:Ja,type:Zi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new Ga(s.x,s.y,Di),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=ys,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn}else L.isPointLight?(B.map=new op(s.x),B.map.depthTexture=new Qf(s.x,Yi)):(B.map=new Qn(s.x,s.y),B.map.depthTexture=new Ga(s.x,s.y,Yi)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=ys,this.type===ru?(B.map.depthTexture.compareFunction=W?ip:np,B.map.depthTexture.minFilter=Mn,B.map.depthTexture.magFilter=Mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let K=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();L.isPointLight!==!0&&B.updateMatrices(L,y);for(let $=0;$<K;$++){let St=B.getCamera($);if(L.isPointLight){let rt=B.camera,Pt=B.matrix,Nt=L.distance||rt.far;Nt!==rt.far&&(rt.far=Nt,rt.updateProjectionMatrix()),yu.setFromMatrixPosition(L.matrixWorld),rt.position.copy(yu),Xv.copy(rt.position),Xv.add(PU[$]),rt.up.copy(zU[$]),rt.lookAt(Xv),rt.updateMatrixWorld(),Pt.makeTranslation(-yu.x,-yu.y,-yu.z),CT.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(CT,rt.coordinateSystem,rt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,$),e.clear();else{$===0&&(e.setRenderTarget(B.map),e.clear());let rt=B.getViewport($);r.set(a.x*rt.x,a.y*rt.y,a.x*rt.z,a.y*rt.w),U.viewport(r)}i=B.getFrustum($),_(A,y,St,L,this.type)}B.isPointLightShadow!==!0&&this.type===vl&&g(B,y),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(w,C,N)};function g(T,A){let y=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qn(s.x,s.y,{format:Ja,type:Zi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(A,null,y,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(A,null,y,d,x,null)}function b(T,A,y,w){let C=null,N=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=y.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=C.uuid,I=A.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let H=D[I];H===void 0&&(H=C.clone(),D[I]=H,A.addEventListener("dispose",M)),C=H}if(C.visible=A.visible,C.wireframe=A.wireframe,w===vl?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:p[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=e.properties.get(C);U.light=y}return C}function _(T,A,y,w,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===vl)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let I=t.update(T),D=T.material;if(Array.isArray(D)){let H=I.groups;for(let L=0,B=H.length;L<B;L++){let Y=H[L],W=D[Y.materialIndex];if(W&&W.visible){let K=b(T,W,w,C);T.onBeforeShadow(e,T,A,y,I,K,Y),e.renderBufferDirect(y,null,I,K,T,Y),T.onAfterShadow(e,T,A,y,I,K,Y)}}}else if(D.visible){let H=b(T,D,w,C);T.onBeforeShadow(e,T,A,y,I,H,null),e.renderBufferDirect(y,null,I,H,T,null),T.onAfterShadow(e,T,A,y,I,H,null)}}let U=T.children;for(let I=0,D=U.length;I<D;I++)_(U[I],A,y,w,C)}function M(T){T.target.removeEventListener("dispose",M);for(let y in c){let w=c[y],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function FU(e,t){function n(){let P=!1,ut=new Oe,tt=null,ht=new Oe(0,0,0,0);return{setMask:function(vt){tt!==vt&&!P&&(e.colorMask(vt,vt,vt,vt),tt=vt)},setLocked:function(vt){P=vt},setClear:function(vt,st,Rt,Tt,Me){Me===!0&&(vt*=Tt,st*=Tt,Rt*=Tt),ut.set(vt,st,Rt,Tt),ht.equals(ut)===!1&&(e.clearColor(vt,st,Rt,Tt),ht.copy(ut))},reset:function(){P=!1,tt=null,ht.set(-1,0,0,0)}}}function i(){let P=!1,ut=!1,tt=null,ht=null,vt=null;return{setReversed:function(st){if(ut!==st){let Rt=t.get("EXT_clip_control");st?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ut=st;let Tt=vt;vt=null,this.setClear(Tt)}},getReversed:function(){return ut},setTest:function(st){st?nt(e.DEPTH_TEST):gt(e.DEPTH_TEST)},setMask:function(st){tt!==st&&!P&&(e.depthMask(st),tt=st)},setFunc:function(st){if(ut&&(st=iT[st]),ht!==st){switch(st){case zf:e.depthFunc(e.NEVER);break;case Bf:e.depthFunc(e.ALWAYS);break;case Ff:e.depthFunc(e.LESS);break;case cl:e.depthFunc(e.LEQUAL);break;case Hf:e.depthFunc(e.EQUAL);break;case Vf:e.depthFunc(e.GEQUAL);break;case Gf:e.depthFunc(e.GREATER);break;case kf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=st}},setLocked:function(st){P=st},setClear:function(st){vt!==st&&(vt=st,ut&&(st=1-st),e.clearDepth(st))},reset:function(){P=!1,tt=null,ht=null,vt=null,ut=!1}}}function s(){let P=!1,ut=null,tt=null,ht=null,vt=null,st=null,Rt=null,Tt=null,Me=null;return{setTest:function(le){P||(le?nt(e.STENCIL_TEST):gt(e.STENCIL_TEST))},setMask:function(le){ut!==le&&!P&&(e.stencilMask(le),ut=le)},setFunc:function(le,Oi,Qi){(tt!==le||ht!==Oi||vt!==Qi)&&(e.stencilFunc(le,Oi,Qi),tt=le,ht=Oi,vt=Qi)},setOp:function(le,Oi,Qi){(st!==le||Rt!==Oi||Tt!==Qi)&&(e.stencilOp(le,Oi,Qi),st=le,Rt=Oi,Tt=Qi)},setLocked:function(le){P=le},setClear:function(le){Me!==le&&(e.clearStencil(le),Me=le)},reset:function(){P=!1,ut=null,tt=null,ht=null,vt=null,st=null,Rt=null,Tt=null,Me=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,v=[],x=null,m=!1,f=null,g=null,b=null,_=null,M=null,T=null,A=null,y=new Ht(0,0,0),w=0,C=!1,N=null,U=null,I=null,D=null,H=null,L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let K=null,$={},St=e.getParameter(e.SCISSOR_BOX),rt=e.getParameter(e.VIEWPORT),Pt=new Oe().fromArray(St),Nt=new Oe().fromArray(rt);function zt(P,ut,tt,ht){let vt=new Uint8Array(4),st=e.createTexture();e.bindTexture(P,st),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Rt=0;Rt<tt;Rt++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(ut+Rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return st}let J={};J[e.TEXTURE_2D]=zt(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=zt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=zt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=zt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),r.setFunc(cl),Qt(!1),De(dv),nt(e.CULL_FACE),se(bs);function nt(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function gt(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function Ut(P,ut){return u[P]!==ut?(e.bindFramebuffer(P,ut),u[P]=ut,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ut),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function _t(P,ut){let tt=v,ht=!1;if(P){tt=d.get(ut),tt===void 0&&(tt=[],d.set(ut,tt));let vt=P.textures;if(tt.length!==vt.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Rt=vt.length;st<Rt;st++)tt[st]=e.COLOR_ATTACHMENT0+st;tt.length=vt.length,ht=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,ht=!0);ht&&e.drawBuffers(tt)}function qt(P){return x!==P?(e.useProgram(P),x=P,!0):!1}let Je={[Br]:e.FUNC_ADD,[T1]:e.FUNC_SUBTRACT,[E1]:e.FUNC_REVERSE_SUBTRACT};Je[A1]=e.MIN,Je[w1]=e.MAX;let Yt={[C1]:e.ZERO,[R1]:e.ONE,[N1]:e.SRC_COLOR,[gv]:e.SRC_ALPHA,[P1]:e.SRC_ALPHA_SATURATE,[O1]:e.DST_COLOR,[U1]:e.DST_ALPHA,[D1]:e.ONE_MINUS_SRC_COLOR,[vv]:e.ONE_MINUS_SRC_ALPHA,[I1]:e.ONE_MINUS_DST_COLOR,[L1]:e.ONE_MINUS_DST_ALPHA,[z1]:e.CONSTANT_COLOR,[B1]:e.ONE_MINUS_CONSTANT_COLOR,[F1]:e.CONSTANT_ALPHA,[H1]:e.ONE_MINUS_CONSTANT_ALPHA};function se(P,ut,tt,ht,vt,st,Rt,Tt,Me,le){if(P===bs){m===!0&&(gt(e.BLEND),m=!1);return}if(m===!1&&(nt(e.BLEND),m=!0),P!==M1){if(P!==f||le!==C){if((g!==Br||M!==Br)&&(e.blendEquation(e.FUNC_ADD),g=Br,M=Br),le)switch(P){case yl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ou:e.blendFunc(e.ONE,e.ONE);break;case pv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",P);break}else switch(P){case yl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ou:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case pv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",P);break}b=null,_=null,T=null,A=null,y.set(0,0,0),w=0,f=P,C=le}return}vt=vt||ut,st=st||tt,Rt=Rt||ht,(ut!==g||vt!==M)&&(e.blendEquationSeparate(Je[ut],Je[vt]),g=ut,M=vt),(tt!==b||ht!==_||st!==T||Rt!==A)&&(e.blendFuncSeparate(Yt[tt],Yt[ht],Yt[st],Yt[Rt]),b=tt,_=ht,T=st,A=Rt),(Tt.equals(y)===!1||Me!==w)&&(e.blendColor(Tt.r,Tt.g,Tt.b,Me),y.copy(Tt),w=Me),f=P,C=!1}function be(P,ut){P.side===Ni?gt(e.CULL_FACE):nt(e.CULL_FACE);let tt=P.side===Hn;ut&&(tt=!tt),Qt(tt),P.blending===yl&&P.transparent===!1?se(bs):se(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);let ht=P.stencilWrite;o.setTest(ht),ht&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Vn(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):gt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(P){N!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),N=P)}function De(P){P!==x1?(nt(e.CULL_FACE),P!==U&&(P===dv?e.cullFace(e.BACK):P===S1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):gt(e.CULL_FACE),U=P}function rn(P){P!==I&&(B&&e.lineWidth(P),I=P)}function Vn(P,ut,tt){P?(nt(e.POLYGON_OFFSET_FILL),(D!==ut||H!==tt)&&(D=ut,H=tt,r.getReversed()&&(ut=-ut),e.polygonOffset(ut,tt))):gt(e.POLYGON_OFFSET_FILL)}function Pe(P){P?nt(e.SCISSOR_TEST):gt(e.SCISSOR_TEST)}function Xe(P){P===void 0&&(P=e.TEXTURE0+L-1),K!==P&&(e.activeTexture(P),K=P)}function z(P,ut,tt){tt===void 0&&(K===null?tt=e.TEXTURE0+L-1:tt=K);let ht=$[tt];ht===void 0&&(ht={type:void 0,texture:void 0},$[tt]=ht),(ht.type!==P||ht.texture!==ut)&&(K!==tt&&(e.activeTexture(tt),K=tt),e.bindTexture(P,ut||J[P]),ht.type=P,ht.texture=ut)}function En(){let P=$[K];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fe(){try{e.compressedTexImage2D(...arguments)}catch(P){Lt("WebGLState:",P)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(P){Lt("WebGLState:",P)}}function S(){try{e.texSubImage2D(...arguments)}catch(P){Lt("WebGLState:",P)}}function V(){try{e.texSubImage3D(...arguments)}catch(P){Lt("WebGLState:",P)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(P){Lt("WebGLState:",P)}}function Q(){try{e.compressedTexSubImage3D(...arguments)}catch(P){Lt("WebGLState:",P)}}function at(){try{e.texStorage2D(...arguments)}catch(P){Lt("WebGLState:",P)}}function ot(){try{e.texStorage3D(...arguments)}catch(P){Lt("WebGLState:",P)}}function j(){try{e.texImage2D(...arguments)}catch(P){Lt("WebGLState:",P)}}function it(){try{e.texImage3D(...arguments)}catch(P){Lt("WebGLState:",P)}}function lt(P){return p[P]!==void 0?p[P]:e.getParameter(P)}function wt(P,ut){p[P]!==ut&&(e.pixelStorei(P,ut),p[P]=ut)}function ft(P){Pt.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),Pt.copy(P))}function ct(P){Nt.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Nt.copy(P))}function Ct(P,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let ht=tt.get(P);ht===void 0&&(ht=e.getUniformBlockIndex(ut,P.name),tt.set(P,ht))}function Dt(P,ut){let ht=c.get(ut).get(P);l.get(ut)!==ht&&(e.uniformBlockBinding(ut,ht,P.__bindingPointIndex),l.set(ut,ht))}function Vt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},K=null,$={},u={},d=new WeakMap,v=[],x=null,m=!1,f=null,g=null,b=null,_=null,M=null,T=null,A=null,y=new Ht(0,0,0),w=0,C=!1,N=null,U=null,I=null,D=null,H=null,Pt.set(0,0,e.canvas.width,e.canvas.height),Nt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:nt,disable:gt,bindFramebuffer:Ut,drawBuffers:_t,useProgram:qt,setBlending:se,setMaterial:be,setFlipSided:Qt,setCullFace:De,setLineWidth:rn,setPolygonOffset:Vn,setScissorTest:Pe,activeTexture:Xe,bindTexture:z,unbindTexture:En,compressedTexImage2D:fe,compressedTexImage3D:R,texImage2D:j,texImage3D:it,pixelStorei:wt,getParameter:lt,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:at,texStorage3D:ot,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ft,viewport:ct,reset:Vt}}function HU(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,p=new Set,u,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return v?new OffscreenCanvas(R,S):Wc("canvas")}function m(R,S,V){let q=1,Q=fe(R);if((Q.width>V||Q.height>V)&&(q=V/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let at=Math.floor(q*Q.width),ot=Math.floor(q*Q.height);u===void 0&&(u=x(at,ot));let j=S?x(at,ot):u;return j.width=at,j.height=ot,j.getContext("2d").drawImage(R,0,0,at,ot),Ot("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+at+"x"+ot+")."),j}else return"data"in R&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function f(R){return R.generateMipmaps}function g(R){e.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(R,S,V,q,Q,at=!1){if(R!==null){if(e[R]!==void 0)return e[R];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot;q&&(ot=t.get("EXT_texture_norm16"),ot||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===e.RED&&(V===e.FLOAT&&(j=e.R32F),V===e.HALF_FLOAT&&(j=e.R16F),V===e.UNSIGNED_BYTE&&(j=e.R8),V===e.UNSIGNED_SHORT&&ot&&(j=ot.R16_EXT),V===e.SHORT&&ot&&(j=ot.R16_SNORM_EXT)),S===e.RED_INTEGER&&(V===e.UNSIGNED_BYTE&&(j=e.R8UI),V===e.UNSIGNED_SHORT&&(j=e.R16UI),V===e.UNSIGNED_INT&&(j=e.R32UI),V===e.BYTE&&(j=e.R8I),V===e.SHORT&&(j=e.R16I),V===e.INT&&(j=e.R32I)),S===e.RG&&(V===e.FLOAT&&(j=e.RG32F),V===e.HALF_FLOAT&&(j=e.RG16F),V===e.UNSIGNED_BYTE&&(j=e.RG8),V===e.UNSIGNED_SHORT&&ot&&(j=ot.RG16_EXT),V===e.SHORT&&ot&&(j=ot.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(V===e.UNSIGNED_BYTE&&(j=e.RG8UI),V===e.UNSIGNED_SHORT&&(j=e.RG16UI),V===e.UNSIGNED_INT&&(j=e.RG32UI),V===e.BYTE&&(j=e.RG8I),V===e.SHORT&&(j=e.RG16I),V===e.INT&&(j=e.RG32I)),S===e.RGB_INTEGER&&(V===e.UNSIGNED_BYTE&&(j=e.RGB8UI),V===e.UNSIGNED_SHORT&&(j=e.RGB16UI),V===e.UNSIGNED_INT&&(j=e.RGB32UI),V===e.BYTE&&(j=e.RGB8I),V===e.SHORT&&(j=e.RGB16I),V===e.INT&&(j=e.RGB32I)),S===e.RGBA_INTEGER&&(V===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),V===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),V===e.UNSIGNED_INT&&(j=e.RGBA32UI),V===e.BYTE&&(j=e.RGBA8I),V===e.SHORT&&(j=e.RGBA16I),V===e.INT&&(j=e.RGBA32I)),S===e.RGB&&(V===e.UNSIGNED_SHORT&&ot&&(j=ot.RGB16_EXT),V===e.SHORT&&ot&&(j=ot.RGB16_SNORM_EXT),V===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),V===e.UNSIGNED_INT_10F_11F_11F_REV&&(j=e.R11F_G11F_B10F)),S===e.RGBA){let it=at?Xc:$t.getTransfer(Q);V===e.FLOAT&&(j=e.RGBA32F),V===e.HALF_FLOAT&&(j=e.RGBA16F),V===e.UNSIGNED_BYTE&&(j=it===he?e.SRGB8_ALPHA8:e.RGBA8),V===e.UNSIGNED_SHORT&&ot&&(j=ot.RGBA16_EXT),V===e.SHORT&&ot&&(j=ot.RGBA16_SNORM_EXT),V===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),V===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(R,S){let V;return R?S===null||S===Yi||S===xl?V=e.DEPTH24_STENCIL8:S===Di?V=e.DEPTH32F_STENCIL8:S===_l&&(V=e.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===xl?V=e.DEPTH_COMPONENT24:S===Di?V=e.DEPTH_COMPONENT32F:S===_l&&(V=e.DEPTH_COMPONENT16),V}function T(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){let S=R.target;S.removeEventListener("dispose",A),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&p.delete(S)}function y(R){let S=R.target;S.removeEventListener("dispose",y),N(S)}function w(R){let S=i.get(R);if(S.__webglInit===void 0)return;let V=R.source,q=d.get(V);if(q){let Q=q[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(R),Object.keys(q).length===0&&d.delete(V)}i.remove(R)}function C(R){let S=i.get(R);e.deleteTexture(S.__webglTexture);let V=R.source,q=d.get(V);delete q[S.__cacheKey],r.memory.textures--}function N(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Q=0;Q<S.__webglFramebuffer[q].length;Q++)e.deleteFramebuffer(S.__webglFramebuffer[q][Q]);else e.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)e.deleteFramebuffer(S.__webglFramebuffer[q]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=R.textures;for(let q=0,Q=V.length;q<Q;q++){let at=i.get(V[q]);at.__webglTexture&&(e.deleteTexture(at.__webglTexture),r.memory.textures--),i.remove(V[q])}i.remove(R)}let U=0;function I(){U=0}function D(){return U}function H(R){U=R}function L(){let R=U;return R>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function B(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Y(R,S){let V=i.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let q=R.image;if(q===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(V,R,S);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+S)}function W(R,S){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){gt(V,R,S);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+S)}function K(R,S){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){gt(V,R,S);return}n.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+S)}function $(R,S){let V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Ut(V,R,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+S)}let St={[Xf]:e.REPEAT,[vs]:e.CLAMP_TO_EDGE,[Wf]:e.MIRRORED_REPEAT},rt={[dn]:e.NEAREST,[k1]:e.NEAREST_MIPMAP_NEAREST,[cu]:e.NEAREST_MIPMAP_LINEAR,[Mn]:e.LINEAR,[vd]:e.LINEAR_MIPMAP_NEAREST,[Za]:e.LINEAR_MIPMAP_LINEAR},Pt={[Y1]:e.NEVER,[j1]:e.ALWAYS,[Z1]:e.LESS,[np]:e.LEQUAL,[K1]:e.EQUAL,[ip]:e.GEQUAL,[J1]:e.GREATER,[Q1]:e.NOTEQUAL};function Nt(R,S){if(S.type===Di&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mn||S.magFilter===vd||S.magFilter===cu||S.magFilter===Za||S.minFilter===Mn||S.minFilter===vd||S.minFilter===cu||S.minFilter===Za)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,St[S.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,St[S.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,St[S.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,rt[S.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,Pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==cu&&S.minFilter!==Za||S.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function zt(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));let q=S.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let at=B(S);if(at!==R.__cacheKey){Q[at]===void 0&&(Q[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,V=!0),Q[at].usedTimes++;let ot=Q[R.__cacheKey];ot!==void 0&&(Q[R.__cacheKey].usedTimes--,ot.usedTimes===0&&C(S)),R.__cacheKey=at,R.__webglTexture=Q[at].texture}return V}function J(R,S,V){return Math.floor(Math.floor(R/V)/S)}function nt(R,S,V,q){let at=R.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,V,q,S.data);else{at.sort((wt,ft)=>wt.start-ft.start);let ot=0;for(let wt=1;wt<at.length;wt++){let ft=at[ot],ct=at[wt],Ct=ft.start+ft.count,Dt=J(ct.start,S.width,4),Vt=J(ft.start,S.width,4);ct.start<=Ct+1&&Dt===Vt&&J(ct.start+ct.count-1,S.width,4)===Dt?ft.count=Math.max(ft.count,ct.start+ct.count-ft.start):(++ot,at[ot]=ct)}at.length=ot+1;let j=n.getParameter(e.UNPACK_ROW_LENGTH),it=n.getParameter(e.UNPACK_SKIP_PIXELS),lt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let wt=0,ft=at.length;wt<ft;wt++){let ct=at[wt],Ct=Math.floor(ct.start/4),Dt=Math.ceil(ct.count/4),Vt=Ct%S.width,P=Math.floor(Ct/S.width),ut=Dt,tt=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(e.UNPACK_SKIP_ROWS,P),n.texSubImage2D(e.TEXTURE_2D,0,Vt,P,ut,tt,V,q,S.data)}R.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,j),n.pixelStorei(e.UNPACK_SKIP_PIXELS,it),n.pixelStorei(e.UNPACK_SKIP_ROWS,lt)}}function gt(R,S,V){let q=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=e.TEXTURE_3D);let Q=zt(R,S),at=S.source;n.bindTexture(q,R.__webglTexture,e.TEXTURE0+V);let ot=i.get(at);if(at.version!==ot.__version||Q===!0){if(n.activeTexture(e.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let tt=$t.getPrimaries($t.workingColorSpace),ht=S.colorSpace===js?null:$t.getPrimaries(S.colorSpace),vt=S.colorSpace===js||tt===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let it=m(S.image,!1,s.maxTextureSize);it=En(S,it);let lt=a.convert(S.format,S.colorSpace),wt=a.convert(S.type),ft=_(S.internalFormat,lt,wt,S.normalized,S.colorSpace,S.isVideoTexture);Nt(q,S);let ct,Ct=S.mipmaps,Dt=S.isVideoTexture!==!0,Vt=ot.__version===void 0||Q===!0,P=at.dataReady,ut=T(S,it);if(S.isDepthTexture)ft=M(S.format===Ka,S.type),Vt&&(Dt?n.texStorage2D(e.TEXTURE_2D,1,ft,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,ft,it.width,it.height,0,lt,wt,null));else if(S.isDataTexture)if(Ct.length>0){Dt&&Vt&&n.texStorage2D(e.TEXTURE_2D,ut,ft,Ct[0].width,Ct[0].height);for(let tt=0,ht=Ct.length;tt<ht;tt++)ct=Ct[tt],Dt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,wt,ct.data):n.texImage2D(e.TEXTURE_2D,tt,ft,ct.width,ct.height,0,lt,wt,ct.data);S.generateMipmaps=!1}else Dt?(Vt&&n.texStorage2D(e.TEXTURE_2D,ut,ft,it.width,it.height),P&&nt(S,it,lt,wt)):n.texImage2D(e.TEXTURE_2D,0,ft,it.width,it.height,0,lt,wt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Dt&&Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,ft,Ct[0].width,Ct[0].height,it.depth);for(let tt=0,ht=Ct.length;tt<ht;tt++)if(ct=Ct[tt],S.format!==Ui)if(lt!==null)if(Dt){if(P)if(S.layerUpdates.size>0){let vt=zv(ct.width,ct.height,S.format,S.type);for(let st of S.layerUpdates){let Rt=ct.data.subarray(st*vt/ct.data.BYTES_PER_ELEMENT,(st+1)*vt/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,st,ct.width,ct.height,1,lt,Rt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,it.depth,lt,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,ft,ct.width,ct.height,it.depth,0,ct.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?P&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,it.depth,lt,wt,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,ft,ct.width,ct.height,it.depth,0,lt,wt,ct.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Dt&&Vt&&n.texStorage2D(e.TEXTURE_2D,ut,ft,Ct[0].width,Ct[0].height);for(let tt=0,ht=Ct.length;tt<ht;tt++)ct=Ct[tt],S.format!==Ui?lt!==null?Dt?P&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,ft,ct.width,ct.height,0,ct.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,wt,ct.data):n.texImage2D(e.TEXTURE_2D,tt,ft,ct.width,ct.height,0,lt,wt,ct.data)}else if(S.isDataArrayTexture)if(Dt){if(Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,ft,it.width,it.height,it.depth),P)if(S.layerUpdates.size>0){let tt=zv(it.width,it.height,S.format,S.type);for(let ht of S.layerUpdates){let vt=it.data.subarray(ht*tt/it.data.BYTES_PER_ELEMENT,(ht+1)*tt/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ht,it.width,it.height,1,lt,wt,vt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,lt,wt,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ft,it.width,it.height,it.depth,0,lt,wt,it.data);else if(S.isData3DTexture)Dt?(Vt&&n.texStorage3D(e.TEXTURE_3D,ut,ft,it.width,it.height,it.depth),P&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,lt,wt,it.data)):n.texImage3D(e.TEXTURE_3D,0,ft,it.width,it.height,it.depth,0,lt,wt,it.data);else if(S.isFramebufferTexture){if(Vt)if(Dt)n.texStorage2D(e.TEXTURE_2D,ut,ft,it.width,it.height);else{let tt=it.width,ht=it.height;for(let vt=0;vt<ut;vt++)n.texImage2D(e.TEXTURE_2D,vt,ft,tt,ht,0,lt,wt,null),tt>>=1,ht>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let tt=e.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),it.parentNode!==tt){tt.appendChild(it),p.add(S),tt.onpaint=ht=>{let vt=ht.changedElements;for(let st of p)vt.includes(st.image)&&(st.needsUpdate=!0)},tt.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,it);else{let vt=e.RGBA,st=e.RGBA,Rt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,st,Rt,it)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Dt&&Vt){let tt=fe(Ct[0]);n.texStorage2D(e.TEXTURE_2D,ut,ft,tt.width,tt.height)}for(let tt=0,ht=Ct.length;tt<ht;tt++)ct=Ct[tt],Dt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,lt,wt,ct):n.texImage2D(e.TEXTURE_2D,tt,ft,lt,wt,ct);S.generateMipmaps=!1}else if(Dt){if(Vt){let tt=fe(it);n.texStorage2D(e.TEXTURE_2D,ut,ft,tt.width,tt.height)}P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,lt,wt,it)}else n.texImage2D(e.TEXTURE_2D,0,ft,lt,wt,it);f(S)&&g(q),ot.__version=at.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ut(R,S,V){if(S.image.length!==6)return;let q=zt(R,S),Q=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+V);let at=i.get(Q);if(Q.version!==at.__version||q===!0){n.activeTexture(e.TEXTURE0+V);let ot=$t.getPrimaries($t.workingColorSpace),j=S.colorSpace===js?null:$t.getPrimaries(S.colorSpace),it=S.colorSpace===js||ot===j?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let lt=S.isCompressedTexture||S.image[0].isCompressedTexture,wt=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let st=0;st<6;st++)!lt&&!wt?ft[st]=m(S.image[st],!0,s.maxCubemapSize):ft[st]=wt?S.image[st].image:S.image[st],ft[st]=En(S,ft[st]);let ct=ft[0],Ct=a.convert(S.format,S.colorSpace),Dt=a.convert(S.type),Vt=_(S.internalFormat,Ct,Dt,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,ut=at.__version===void 0||q===!0,tt=Q.dataReady,ht=T(S,ct);Nt(e.TEXTURE_CUBE_MAP,S);let vt;if(lt){P&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Vt,ct.width,ct.height);for(let st=0;st<6;st++){vt=ft[st].mipmaps;for(let Rt=0;Rt<vt.length;Rt++){let Tt=vt[Rt];S.format!==Ui?Ct!==null?P?tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,Tt.width,Tt.height,Ct,Tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,Vt,Tt.width,Tt.height,0,Tt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,Tt.width,Tt.height,Ct,Dt,Tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,Vt,Tt.width,Tt.height,0,Ct,Dt,Tt.data)}}}else{if(vt=S.mipmaps,P&&ut){vt.length>0&&ht++;let st=fe(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Vt,st.width,st.height)}for(let st=0;st<6;st++)if(wt){P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ft[st].width,ft[st].height,Ct,Dt,ft[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Vt,ft[st].width,ft[st].height,0,Ct,Dt,ft[st].data);for(let Rt=0;Rt<vt.length;Rt++){let Me=vt[Rt].image[st].image;P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,Me.width,Me.height,Ct,Dt,Me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,Vt,Me.width,Me.height,0,Ct,Dt,Me.data)}}else{P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ct,Dt,ft[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Vt,Ct,Dt,ft[st]);for(let Rt=0;Rt<vt.length;Rt++){let Tt=vt[Rt];P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,Ct,Dt,Tt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,Vt,Ct,Dt,Tt.image[st])}}}f(S)&&g(e.TEXTURE_CUBE_MAP),at.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _t(R,S,V,q,Q,at){let ot=a.convert(V.format,V.colorSpace),j=a.convert(V.type),it=_(V.internalFormat,ot,j,V.normalized,V.colorSpace),lt=i.get(S),wt=i.get(V);if(wt.__renderTarget=S,!lt.__hasExternalTextures){let ft=Math.max(1,S.width>>at),ct=Math.max(1,S.height>>at);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,at,it,ft,ct,S.depth,0,ot,j,null):n.texImage2D(Q,at,it,ft,ct,0,ot,j,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),Xe(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,Q,wt.__webglTexture,0,Pe(S)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,Q,wt.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function qt(R,S,V){if(e.bindRenderbuffer(e.RENDERBUFFER,R),S.depthBuffer){let q=S.depthTexture,Q=q&&q.isDepthTexture?q.type:null,at=M(S.stencilBuffer,Q),ot=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Xe(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(S),at,S.width,S.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(S),at,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,at,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ot,e.RENDERBUFFER,R)}else{let q=S.textures;for(let Q=0;Q<q.length;Q++){let at=q[Q],ot=a.convert(at.format,at.colorSpace),j=a.convert(at.type),it=_(at.internalFormat,ot,j,at.normalized,at.colorSpace);Xe(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(S),it,S.width,S.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(S),it,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,it,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Je(R,S,V){let q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,S.depthTexture);let lt=a.convert(S.depthTexture.format),wt=a.convert(S.depthTexture.type),ft;S.depthTexture.format===ys?ft=e.DEPTH_COMPONENT24:S.depthTexture.format===Ka&&(ft=e.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ft,S.width,S.height,0,lt,wt,null)}}else Y(S.depthTexture,0);let at=Q.__webglTexture,ot=Pe(S),j=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+V:e.TEXTURE_2D,it=S.depthTexture.format===Ka?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===ys)Xe(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,it,j,at,0,ot):e.framebufferTexture2D(e.FRAMEBUFFER,it,j,at,0);else if(S.depthTexture.format===Ka)Xe(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,it,j,at,0,ot):e.framebufferTexture2D(e.FRAMEBUFFER,it,j,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(R){let S=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)Je(S.__webglFramebuffer[q],R,q);else{let q=R.texture.mipmaps;q&&q.length>0?Je(S.__webglFramebuffer[0],R,0):Je(S.__webglFramebuffer,R,0)}else if(V){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=e.createRenderbuffer(),qt(S.__webglDepthbuffer[q],R,!1);else{let Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,at)}}else{let q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),qt(S.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,at)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(R,S,V){let q=i.get(R);S!==void 0&&_t(q.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),V!==void 0&&Yt(R)}function be(R){let S=R.texture,V=i.get(R),q=i.get(S);R.addEventListener("dispose",y);let Q=R.textures,at=R.isWebGLCubeRenderTarget===!0,ot=Q.length>1;if(ot||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=S.version,r.memory.textures++),at){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let it=0;it<S.mipmaps.length;it++)V.__webglFramebuffer[j][it]=e.createFramebuffer()}else V.__webglFramebuffer[j]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)V.__webglFramebuffer[j]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(ot)for(let j=0,it=Q.length;j<it;j++){let lt=i.get(Q[j]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),r.memory.textures++)}if(R.samples>0&&Xe(R)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){let it=Q[j];V.__webglColorRenderbuffer[j]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[j]);let lt=a.convert(it.format,it.colorSpace),wt=a.convert(it.type),ft=_(it.internalFormat,lt,wt,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),ct=Pe(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,ct,ft,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.RENDERBUFFER,V.__webglColorRenderbuffer[j])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=e.createRenderbuffer(),qt(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)_t(V.__webglFramebuffer[j][it],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,it);else _t(V.__webglFramebuffer[j],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(S)&&g(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ot){for(let j=0,it=Q.length;j<it;j++){let lt=Q[j],wt=i.get(lt),ft=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,wt.__webglTexture),Nt(ft,lt),_t(V.__webglFramebuffer,R,lt,e.COLOR_ATTACHMENT0+j,ft,0),f(lt)&&g(ft)}n.unbindTexture()}else{let j=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(j,q.__webglTexture),Nt(j,S),S.mipmaps&&S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)_t(V.__webglFramebuffer[it],R,S,e.COLOR_ATTACHMENT0,j,it);else _t(V.__webglFramebuffer,R,S,e.COLOR_ATTACHMENT0,j,0);f(S)&&g(j),n.unbindTexture()}R.depthBuffer&&Yt(R)}function Qt(R){let S=R.textures;for(let V=0,q=S.length;V<q;V++){let Q=S[V];if(f(Q)){let at=b(R),ot=i.get(Q).__webglTexture;n.bindTexture(at,ot),g(at),n.unbindTexture()}}}let De=[],rn=[];function Vn(R){if(R.samples>0){if(Xe(R)===!1){let S=R.textures,V=R.width,q=R.height,Q=e.COLOR_BUFFER_BIT,at=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=i.get(R),j=S.length>1;if(j)for(let lt=0;lt<S.length;lt++)n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let it=R.texture.mipmaps;it&&it.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),j){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let wt=i.get(S[lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,wt,0)}e.blitFramebuffer(0,0,V,q,0,0,V,q,Q,e.NEAREST),l===!0&&(De.length=0,rn.length=0,De.push(e.COLOR_ATTACHMENT0+lt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(De.push(at),rn.push(at),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,rn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),j)for(let lt=0;lt<S.length;lt++){n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let wt=i.get(S[lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,wt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Pe(R){return Math.min(s.maxSamples,R.samples)}function Xe(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(R){let S=r.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function En(R,S){let V=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==kc&&V!==js&&($t.getTransfer(V)===he?(q!==Ui||Q!==$n)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",V)),S}function fe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=se,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Vn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function VU(e,t){function n(i,s=js){let a,r=$t.getTransfer(s);if(i===$n)return e.UNSIGNED_BYTE;if(i===_d)return e.UNSIGNED_SHORT_4_4_4_4;if(i===xd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Cv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Rv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Av)return e.BYTE;if(i===wv)return e.SHORT;if(i===_l)return e.UNSIGNED_SHORT;if(i===yd)return e.INT;if(i===Yi)return e.UNSIGNED_INT;if(i===Di)return e.FLOAT;if(i===Zi)return e.HALF_FLOAT;if(i===Nv)return e.ALPHA;if(i===Dv)return e.RGB;if(i===Ui)return e.RGBA;if(i===ys)return e.DEPTH_COMPONENT;if(i===Ka)return e.DEPTH_STENCIL;if(i===Sd)return e.RED;if(i===bd)return e.RED_INTEGER;if(i===Ja)return e.RG;if(i===Md)return e.RG_INTEGER;if(i===Td)return e.RGBA_INTEGER;if(i===uu||i===hu||i===fu||i===du)if(r===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===uu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===uu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===du)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ed||i===Ad||i===wd||i===Cd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ed)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Nd||i===Dd||i===Ud||i===Ld||i===pu||i===Od)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Rd||i===Nd)return r===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Dd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ud)return a.COMPRESSED_R11_EAC;if(i===Ld)return a.COMPRESSED_SIGNED_R11_EAC;if(i===pu)return a.COMPRESSED_RG11_EAC;if(i===Od)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Id||i===Pd||i===zd||i===Bd||i===Fd||i===Hd||i===Vd||i===Gd||i===kd||i===Xd||i===Wd||i===qd||i===Yd||i===Zd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Id)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zd)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kd||i===Jd||i===Qd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Kd)return r===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jd||i===$d||i===mu||i===tp)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===jd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===$d)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}function WU(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ov(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,g,b,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),p(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),v(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let g=t.get(f),b=g.envMap,_=g.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(XU.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(IT),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=b*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let g=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qU(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let T=M.program;i.uniformBlockBinding(_,T)}function c(_,M){let T=s[_.id];T===void 0&&(m(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",g));let A=M.program;i.updateUBOMapping(_,A);let y=t.render.frame;a[_.id]!==y&&(u(_),a[_.id]=y)}function h(_){let M=p();_.__bindingPointIndex=M;let T=e.createBuffer(),A=_.__size,y=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,A,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,T),T}function p(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let M=s[_.id],T=_.uniforms,A=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let y=0,w=T.length;y<w;y++){let C=T[y];if(Array.isArray(C))for(let N=0,U=C.length;N<U;N++)d(C[N],y,N,A);else d(C,y,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(_,M,T,A){if(x(_,M,T,A)===!0){let y=_.__offset,w=_.value;if(Array.isArray(w)){let C=0;for(let N=0;N<w.length;N++){let U=w[N],I=f(U);v(U,_.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,_.__data)}}function v(_,M,T){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,T)}function x(_,M,T,A){let y=_.value,w=M+"_"+T;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let C=A[w];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(_){let M=_.uniforms,T=0,A=16;for(let w=0,C=M.length;w<C;w++){let N=Array.isArray(M[w])?M[w]:[M[w]];for(let U=0,I=N.length;U<I;U++){let D=N[U],H=Array.isArray(D.value)?D.value:[D.value];for(let L=0,B=H.length;L<B;L++){let Y=H[L],W=f(Y),K=T%A,$=K%W.boundary,St=K+$;T+=$,St!==0&&A-St<W.storage&&(T+=A-St),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=W.storage}}}let y=T%A;return y>0&&(T+=A-y),_.__size=T,_.__cache={},this}function f(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let T=r.indexOf(M.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function b(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:b}}function ZU(){return Ms===null&&(Ms=new Qc(YU,16,16,Ja,Zi),Ms.name="DFG_LUT",Ms.minFilter=Mn,Ms.magFilter=Mn,Ms.wrapS=vs,Ms.wrapT=vs,Ms.generateMipmaps=!1,Ms.needsUpdate=!0),Ms}var o2,l2,c2,u2,h2,f2,d2,p2,m2,g2,v2,y2,_2,x2,S2,b2,M2,T2,E2,A2,w2,C2,R2,N2,D2,U2,L2,O2,I2,P2,z2,B2,F2,H2,V2,G2,k2,X2,W2,q2,Y2,Z2,K2,J2,Q2,j2,$2,t3,e3,n3,i3,s3,a3,r3,o3,l3,c3,u3,h3,f3,d3,p3,m3,g3,v3,y3,_3,x3,S3,b3,M3,T3,E3,A3,w3,C3,R3,N3,D3,U3,L3,O3,I3,P3,z3,B3,F3,H3,V3,G3,k3,X3,W3,q3,Y3,Z3,K3,J3,Q3,j3,$3,tN,eN,nN,iN,sN,aN,rN,oN,lN,cN,uN,hN,fN,dN,pN,mN,gN,vN,yN,_N,xN,SN,bN,MN,TN,EN,AN,wN,CN,RN,NN,DN,UN,LN,ON,IN,PN,zN,BN,FN,HN,Xt,dt,Ts,sp,VN,NT,bl,YN,ZN,KN,vu,lT,Fv,Hv,Vv,Gv,JN,Vr,rp,op,oD,DT,Wv,UT,LT,OT,fT,dT,pT,mT,gT,qv,Yv,Zv,kv,Ml,JD,QD,_T,eU,ap,oU,lU,uU,fU,pU,gU,yU,bU,Jv,Qv,NU,OU,IU,PU,zU,CT,yu,Xv,GU,kU,jv,$v,XU,IT,YU,Ms,lp,Ki=Fe(()=>{Bv();Bv();o2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,R2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,N2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,L2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z2="gl_FragColor = linearToOutputTexel( gl_FragColor );",B2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,H2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,z3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,X3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_N=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ON=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:o2,alphahash_pars_fragment:l2,alphamap_fragment:c2,alphamap_pars_fragment:u2,alphatest_fragment:h2,alphatest_pars_fragment:f2,aomap_fragment:d2,aomap_pars_fragment:p2,batching_pars_vertex:m2,batching_vertex:g2,begin_vertex:v2,beginnormal_vertex:y2,bsdfs:_2,iridescence_fragment:x2,bumpmap_pars_fragment:S2,clipping_planes_fragment:b2,clipping_planes_pars_fragment:M2,clipping_planes_pars_vertex:T2,clipping_planes_vertex:E2,color_fragment:A2,color_pars_fragment:w2,color_pars_vertex:C2,color_vertex:R2,common:N2,cube_uv_reflection_fragment:D2,defaultnormal_vertex:U2,displacementmap_pars_vertex:L2,displacementmap_vertex:O2,emissivemap_fragment:I2,emissivemap_pars_fragment:P2,colorspace_fragment:z2,colorspace_pars_fragment:B2,envmap_fragment:F2,envmap_common_pars_fragment:H2,envmap_pars_fragment:V2,envmap_pars_vertex:G2,envmap_physical_pars_fragment:$2,envmap_vertex:k2,fog_vertex:X2,fog_pars_vertex:W2,fog_fragment:q2,fog_pars_fragment:Y2,gradientmap_pars_fragment:Z2,lightmap_pars_fragment:K2,lights_lambert_fragment:J2,lights_lambert_pars_fragment:Q2,lights_pars_begin:j2,lights_toon_fragment:t3,lights_toon_pars_fragment:e3,lights_phong_fragment:n3,lights_phong_pars_fragment:i3,lights_physical_fragment:s3,lights_physical_pars_fragment:a3,lights_fragment_begin:r3,lights_fragment_maps:o3,lights_fragment_end:l3,lightprobes_pars_fragment:c3,logdepthbuf_fragment:u3,logdepthbuf_pars_fragment:h3,logdepthbuf_pars_vertex:f3,logdepthbuf_vertex:d3,map_fragment:p3,map_pars_fragment:m3,map_particle_fragment:g3,map_particle_pars_fragment:v3,metalnessmap_fragment:y3,metalnessmap_pars_fragment:_3,morphinstance_vertex:x3,morphcolor_vertex:S3,morphnormal_vertex:b3,morphtarget_pars_vertex:M3,morphtarget_vertex:T3,normal_fragment_begin:E3,normal_fragment_maps:A3,normal_pars_fragment:w3,normal_pars_vertex:C3,normal_vertex:R3,normalmap_pars_fragment:N3,clearcoat_normal_fragment_begin:D3,clearcoat_normal_fragment_maps:U3,clearcoat_pars_fragment:L3,iridescence_pars_fragment:O3,opaque_fragment:I3,packing:P3,premultiplied_alpha_fragment:z3,project_vertex:B3,dithering_fragment:F3,dithering_pars_fragment:H3,roughnessmap_fragment:V3,roughnessmap_pars_fragment:G3,shadowmap_pars_fragment:k3,shadowmap_pars_vertex:X3,shadowmap_vertex:W3,shadowmask_pars_fragment:q3,skinbase_vertex:Y3,skinning_pars_vertex:Z3,skinning_vertex:K3,skinnormal_vertex:J3,specularmap_fragment:Q3,specularmap_pars_fragment:j3,tonemapping_fragment:$3,tonemapping_pars_fragment:tN,transmission_fragment:eN,transmission_pars_fragment:nN,uv_pars_fragment:iN,uv_pars_vertex:sN,uv_vertex:aN,worldpos_vertex:rN,background_vert:oN,background_frag:lN,backgroundCube_vert:cN,backgroundCube_frag:uN,cube_vert:hN,cube_frag:fN,depth_vert:dN,depth_frag:pN,distance_vert:mN,distance_frag:gN,equirect_vert:vN,equirect_frag:yN,linedashed_vert:_N,linedashed_frag:xN,meshbasic_vert:SN,meshbasic_frag:bN,meshlambert_vert:MN,meshlambert_frag:TN,meshmatcap_vert:EN,meshmatcap_frag:AN,meshnormal_vert:wN,meshnormal_frag:CN,meshphong_vert:RN,meshphong_frag:NN,meshphysical_vert:DN,meshphysical_frag:UN,meshtoon_vert:LN,meshtoon_frag:ON,points_vert:IN,points_frag:PN,shadow_vert:zN,shadow_frag:BN,sprite_vert:FN,sprite_frag:HN},dt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ts={basic:{uniforms:Un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Un([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Un([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Un([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Un([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Un([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Un([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Un([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Un([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Un([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Un([dt.common,dt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Un([dt.lights,dt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ts.physical={uniforms:Un([Ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};sp={r:0,b:0,g:0},VN=new ge,NT=new Ft;NT.set(-1,0,0,0,1,0,0,0,1);bl=4,YN=6,ZN=20,KN=256,vu=new gl,lT=new Ht,Fv=null,Hv=0,Vv=0,Gv=!1,JN=new F,Vr=new F,rp=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=JN}=a;Fv=this._renderer.getRenderTarget(),Hv=this._renderer.getActiveCubeFace(),Vv=this._renderer.getActiveMipmapLevel(),Gv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fv,Hv,Vv),this._renderer.xr.enabled=Gv,t.scissorTest=!1,Sl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ya||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fv=this._renderer.getRenderTarget(),Hv=this._renderer.getActiveCubeFace(),Vv=this._renderer.getActiveMipmapLevel(),Gv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Zi,format:Ui,colorSpace:kc,depthBuffer:!1},s=cT(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cT(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=QN(a)),this._blurMaterial=$N(a,t,n),this._ggxMaterial=jN(a,t,n)}return s}_compileMaterial(t){let n=new Ie(new Ri,t);this._renderer.compile(n,vu)}_sceneToCubeUV(t,n,i,s,a){let l=new fn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(lT),p.toneMapping=qi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new Tn,new jn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,f=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,f=!0):(m.color.copy(lT),f=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[b],a.y,a.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[b]));let M=this._cubeSize;Sl(s,_*M,b>2?M:0,M,M),p.setRenderTarget(s),f&&p.render(x,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ya||t.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hT()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uT());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,vu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:v}=this,x=this._sizeLods[i],m=3*x*(i>v-bl?i-v+bl:0),f=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,Sl(a,m,f,3*x,2*x),s.setRenderTarget(a),s.render(o,vu),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,Sl(t,m,f,3*x,2*x),s.setRenderTarget(t),s.render(o,vu)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-bl?s-this._lodMax+bl:0),u=4*(this._cubeSize-h);Sl(n,p,u,3*h,2*h),r.setRenderTarget(n),r.render(l,vu)}};op=class extends Qn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $c(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tn(5,5,5),a=new mi({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:bs});a.uniforms.tEquirect.value=n;let r=new Ie(s,a),o=n.minFilter;return n.minFilter===Za&&(n.minFilter=Mn),new fd(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};oD={[yv]:"LINEAR_TONE_MAPPING",[_v]:"REINHARD_TONE_MAPPING",[xv]:"CINEON_TONE_MAPPING",[Sv]:"ACES_FILMIC_TONE_MAPPING",[Mv]:"AGX_TONE_MAPPING",[Tv]:"NEUTRAL_TONE_MAPPING",[bv]:"CUSTOM_TONE_MAPPING"};DT=new Jn,Wv=new Ga(1,1),UT=new qc,LT=new Jf,OT=new $c,fT=[],dT=[],pT=new Float32Array(16),mT=new Float32Array(9),gT=new Float32Array(4);qv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=CD(n.type)}},Yv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZD(n.type)}},Zv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},kv=/(\w+)(\])?(\[|\.)?/g;Ml=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);KD(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};JD=37297,QD=0;_T=new Ft;eU={[yv]:"Linear",[_v]:"Reinhard",[xv]:"Cineon",[Sv]:"ACESFilmic",[Mv]:"AgX",[Tv]:"Neutral",[bv]:"Custom"};ap=new F;oU=/^[ \t]*#include +<([\w\d./]+)>/gm;lU=new Map;uU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;fU={[ru]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};pU={[Ya]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};gU={[Fr]:"ENVMAP_MODE_REFRACTION"};yU={[pd]:"ENVMAP_BLENDING_MULTIPLY",[V1]:"ENVMAP_BLENDING_MIX",[G1]:"ENVMAP_BLENDING_ADD"};bU=0,Jv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Qv(t),n.set(t,i)),i}},Qv=class{constructor(t){this.id=bU++,this.code=t,this.usedTimes=0}};NU=0;OU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PU=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],zU=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],CT=new ge,yu=new F,Xv=new F;GU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new tu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new mi({vertexShader:GU,fragmentShader:kU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ie(new eu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$v=class extends _s{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,v=null,x=typeof XRWebGLBinding<"u",m=new jv,f={},g=n.getContextAttributes(),b=null,_=null,M=[],T=[],A=new ee,y=null,w=null,C=new fn;C.viewport=new Oe;let N=new fn;N.viewport=new Oe;let U=[C,N],I=new dd,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=M[J];return nt===void 0&&(nt=new pl,M[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=M[J];return nt===void 0&&(nt=new pl,M[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=M[J];return nt===void 0&&(nt=new pl,M[J]=nt),nt.getHandSpace()};function L(J){let nt=T.indexOf(J.inputSource);if(nt===-1)return;let gt=M[nt];gt!==void 0&&(gt.update(J.inputSource,J.frame,c||r),gt.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<M.length;J++){let nt=T[J];nt!==null&&(T[J]=null,M[J].disconnect(nt))}D=null,H=null,m.reset();for(let J in f)delete f[J];if(t.setRenderTarget(b),d=null,u=null,p=null,s=null,_=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ut=null,_t=null;g.depth&&(_t=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,gt=g.stencil?Ka:ys,Ut=g.stencil?xl:Yi);let qt={colorFormat:n.RGBA8,depthFormat:_t,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Qn(u.textureWidth,u.textureHeight,{format:Ui,type:$n,depthTexture:new Ga(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Qn(d.framebufferWidth,d.framebufferHeight,{format:Ui,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(J){for(let nt=0;nt<J.removed.length;nt++){let gt=J.removed[nt],Ut=T.indexOf(gt);Ut>=0&&(T[Ut]=null,M[Ut].disconnect(gt))}for(let nt=0;nt<J.added.length;nt++){let gt=J.added[nt],Ut=T.indexOf(gt);if(Ut===-1){for(let qt=0;qt<M.length;qt++)if(qt>=T.length){T.push(gt),Ut=qt;break}else if(T[qt]===null){T[qt]=gt,Ut=qt;break}if(Ut===-1)break}let _t=M[Ut];_t&&_t.connect(gt)}}let W=new F,K=new F;function $(J,nt,gt){W.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);let Ut=W.distanceTo(K),_t=nt.projectionMatrix.elements,qt=gt.projectionMatrix.elements,Je=_t[14]/(_t[10]-1),Yt=_t[14]/(_t[10]+1),se=(_t[9]+1)/_t[5],be=(_t[9]-1)/_t[5],Qt=(_t[8]-1)/_t[0],De=(qt[8]+1)/qt[0],rn=Je*Qt,Vn=Je*De,Pe=Ut/(-Qt+De),Xe=Pe*-Qt;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xe),J.translateZ(Pe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_t[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let z=Je+Pe,En=Yt+Pe,fe=rn-Xe,R=Vn+(Ut-Xe),S=se*Yt/En*z,V=be*Yt/En*z;J.projectionMatrix.makePerspective(fe,R,S,V,z,En),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function St(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let nt=J.near,gt=J.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),I.near=N.near=C.near=nt,I.far=N.far=C.far=gt,(D!==I.near||H!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,H=I.far),I.layers.mask=J.layers.mask|6,C.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;let Ut=J.parent,_t=I.cameras;St(I,Ut);for(let qt=0;qt<_t.length;qt++)St(_t[qt],Ut);_t.length===2?$(I,C,N):I.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),rt(J,I,Ut)};function rt(J,nt,gt){gt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(gt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Yf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return f[J]};let Pt=null;function Nt(J,nt){if(h=nt.getViewerPose(c||r),v=nt,h!==null){let gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Ut=!1;gt.length!==I.cameras.length&&(I.cameras.length=0,Ut=!0);for(let Yt=0;Yt<gt.length;Yt++){let se=gt[Yt],be=null;if(d!==null)be=d.getViewport(se);else{let De=p.getViewSubImage(u,se);be=De.viewport,Yt===0&&(t.setRenderTargetTextures(_,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(_))}let Qt=U[Yt];Qt===void 0&&(Qt=new fn,Qt.layers.enable(Yt),Qt.viewport=new Oe,U[Yt]=Qt),Qt.matrix.fromArray(se.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(se.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(be.x,be.y,be.width,be.height),Yt===0&&(I.matrix.copy(Qt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ut===!0&&I.cameras.push(Qt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=i.getBinding();let Yt=p.getDepthInformation(gt[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),p=i.getBinding();for(let Yt=0;Yt<gt.length;Yt++){let se=gt[Yt].camera;if(se){let be=f[se];be||(be=new tu,f[se]=be);let Qt=p.getCameraImage(se);be.sourceTexture=Qt}}}}for(let gt=0;gt<M.length;gt++){let Ut=T[gt],_t=M[gt];Ut!==null&&_t!==void 0&&_t.update(Ut,nt,c||r)}Pt&&Pt(J,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),v=null}let zt=new RT;zt.setAnimationLoop(Nt),this.setAnimationLoop=function(J){Pt=J},this.dispose=function(){}}},XU=new ge,IT=new Ft;IT.set(-1,0,0,0,1,0,0,0,1);YU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ms=null;lp=class{constructor(t={}){let{canvas:n=tT(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=$n}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let x=d,m=new Set([Td,Md,bd]),f=new Set([$n,Yi,_l,xl,_d,xd]),g=new Uint32Array(4),b=new Int32Array(4),_=new F,M=null,T=null,A=[],y=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,U=null,I=null,D=null,H=null;this._outputColorSpace=di;let L=0,B=0,Y=null,W=-1,K=null,$=new Oe,St=new Oe,rt=null,Pt=new Ht(0),Nt=0,zt=n.width,J=n.height,nt=1,gt=null,Ut=null,_t=new Oe(0,0,zt,J),qt=new Oe(0,0,zt,J),Je=!1,Yt=new ml,se=!1,be=!1,Qt=new ge,De=new F,rn=new Oe,Vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Xe(){return Y===null?nt:1}let z=i;function En(E,O){return n.getContext(E,O)}let fe,R,S,V,q,Q,at,ot,j,it,lt,wt,ft,ct,Ct,Dt,Vt,P,ut,tt,ht,vt,st;try{let E={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",Oi,!1),z===null){let O="webgl2";if(z=En(O,E),z===null)throw En(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(E){throw n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",Oi,!1),Lt("WebGLRenderer: "+E.message),E}function Rt(){fe=new eD(z),fe.init(),ht=new VU(z,fe),R=new WN(z,fe,t,ht),S=new FU(z,fe),R.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),I=z.createFramebuffer(),D=z.createFramebuffer(),H=z.createFramebuffer(),V=new sD(z),q=new EU,Q=new HU(z,fe,S,q,R,ht,V),at=new tD(C),ot=new r2(z),vt=new kN(z,ot),j=new nD(z,ot,V,vt),it=new rD(z,j,ot,vt,V),P=new aD(z,R,Q),Ct=new qN(q),lt=new TU(C,at,fe,R,vt,Ct),wt=new WU(C,q),ft=new wU,ct=new LU(fe),Vt=new GN(C,at,S,it,v,l),Dt=new BU(C,it,R),st=new qU(z,V,R,S),ut=new XN(z,fe,V),tt=new iD(z,fe,V),V.programs=lt.programs,C.capabilities=R,C.extensions=fe,C.properties=q,C.renderLists=ft,C.shadowMap=Dt,C.state=S,C.info=V}x!==$n&&(w=new lD(x,n.width,n.height,o,s,a));let Tt=new $v(C,z);this.xr=Tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(zt,J,!1))},this.getSize=function(E){return E.set(zt,J)},this.setSize=function(E,O,Z=!0){if(Tt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=E,J=O,n.width=Math.floor(E*nt),n.height=Math.floor(O*nt),Z===!0&&(n.style.width=E+"px",n.style.height=O+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(zt*nt,J*nt).floor()},this.setDrawingBufferSize=function(E,O,Z){zt=E,J=O,nt=Z,n.width=Math.floor(E*Z),n.height=Math.floor(O*Z),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===$n){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,O,Z,G){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,O,Z,G),S.viewport($.copy(_t).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(qt)},this.setScissor=function(E,O,Z,G){E.isVector4?qt.set(E.x,E.y,E.z,E.w):qt.set(E,O,Z,G),S.scissor(St.copy(qt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){S.setScissorTest(Je=E)},this.setOpaqueSort=function(E){gt=E},this.setTransparentSort=function(E){Ut=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Z=!0){let G=0;if(E){let k=!1;if(Y!==null){let mt=Y.texture.format;k=m.has(mt)}if(k){let mt=Y.texture.type,xt=f.has(mt),pt=Vt.getClearColor(),bt=Vt.getClearAlpha(),Et=pt.r,kt=pt.g,Zt=pt.b;xt?(g[0]=Et,g[1]=kt,g[2]=Zt,g[3]=bt,z.clearBufferuiv(z.COLOR,0,g)):(b[0]=Et,b[1]=kt,b[2]=Zt,b[3]=bt,z.clearBufferiv(z.COLOR,0,b))}else G|=z.COLOR_BUFFER_BIT}O&&(G|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",Oi,!1),Vt.dispose(),ft.dispose(),ct.dispose(),q.dispose(),at.dispose(),it.dispose(),vt.dispose(),st.dispose(),lt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",gy),Tt.removeEventListener("sessionend",vy),er.stop()};function Me(E){E.preventDefault(),Lv("WebGLRenderer: Context Lost."),N=!0}function le(){Lv("WebGLRenderer: Context Restored."),N=!1;let E=V.autoReset,O=Dt.enabled,Z=Dt.autoUpdate,G=Dt.needsUpdate,k=Dt.type;Rt(),V.autoReset=E,Dt.enabled=O,Dt.autoUpdate=Z,Dt.needsUpdate=G,Dt.type=k}function Oi(E){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qi(E){let O=E.target;O.removeEventListener("dispose",Qi),zE(O)}function zE(E){BE(E),q.remove(E)}function BE(E){let O=q.get(E).programs;O!==void 0&&(O.forEach(function(Z){lt.releaseProgram(Z)}),E.isShaderMaterial&&lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Z,G,k,mt){O===null&&(O=Vn);let xt=k.isMesh&&k.matrixWorld.determinantAffine()<0,pt=VE(E,O,Z,G,k);S.setMaterial(G,xt);let bt=Z.index,Et=1;if(G.wireframe===!0){if(bt=j.getWireframeAttribute(Z),bt===void 0)return;Et=2}let kt=Z.drawRange,Zt=Z.attributes.position,Mt=kt.start*Et,ce=(kt.start+kt.count)*Et;mt!==null&&(Mt=Math.max(Mt,mt.start*Et),ce=Math.min(ce,(mt.start+mt.count)*Et)),bt!==null?(Mt=Math.max(Mt,0),ce=Math.min(ce,bt.count)):Zt!=null&&(Mt=Math.max(Mt,0),ce=Math.min(ce,Zt.count));let We=ce-Mt;if(We<0||We===1/0)return;vt.setup(k,G,pt,Z,bt);let Re,_e=ut;if(bt!==null&&(Re=ot.get(bt),_e=tt,_e.setIndex(Re)),k.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*Xe()),_e.setMode(z.LINES)):_e.setMode(z.TRIANGLES);else if(k.isLine){let An=G.linewidth;An===void 0&&(An=1),S.setLineWidth(An*Xe()),k.isLineSegments?_e.setMode(z.LINES):k.isLineLoop?_e.setMode(z.LINE_LOOP):_e.setMode(z.LINE_STRIP)}else k.isPoints?_e.setMode(z.POINTS):k.isSprite&&_e.setMode(z.TRIANGLES);if(k.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))_e.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let An=k._multiDrawStarts,yt=k._multiDrawCounts,Ln=k._multiDrawCount,ie=bt?ot.get(bt).bytesPerElement:1,vi=q.get(G).currentProgram.getUniforms();for(let ji=0;ji<Ln;ji++)vi.setValue(z,"_gl_DrawID",ji),_e.render(An[ji]/ie,yt[ji])}else if(k.isInstancedMesh)_e.renderInstances(Mt,We,k.count);else if(Z.isInstancedBufferGeometry){let An=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,yt=Math.min(Z.instanceCount,An);_e.renderInstances(Mt,We,yt)}else _e.render(Mt,We)};function my(E,O,Z,G){U!==null&&E.isNodeMaterial&&U.setObject(G,E),se===!0&&Ct.setState(E,Z,!1),E.transparent===!0&&E.side===Ni&&E.forceSinglePass===!1?(E.side=Hn,E.needsUpdate=!0,Au(E,O,G),E.side=qa,E.needsUpdate=!0,Au(E,O,G),E.side=Ni):Au(E,O,G)}this.compile=function(E,O,Z=null){Z===null&&(Z=E),U!==null&&U.renderStart(E,O,Z),T=ct.get(Z),T.init(O),y.push(T),Z.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),E!==Z&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),be=this.localClippingEnabled,se=Ct.init(this.clippingPlanes,be),se===!0&&Ct.setGlobalState(this.clippingPlanes,O),U!==null&&Dt.render(T.state.shadowsArray,Z,O);let G=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let mt=k.material;if(mt)if(Array.isArray(mt))for(let xt=0;xt<mt.length;xt++){let pt=mt[xt];my(pt,Z,O,k),G.add(pt)}else my(mt,Z,O,k),G.add(mt)}),T=y.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(E,O,Z=null){let G=this.compile(E,O,Z);return new Promise(k=>{function mt(){if(G.forEach(function(xt){let bt=q.get(xt).currentProgram;(bt===void 0||bt.isReady())&&G.delete(xt)}),G.size===0){k(E);return}setTimeout(mt,10)}fe.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Np=null;function FE(E){Np&&Np(E)}function gy(){er.stop()}function vy(){er.start()}let er=new RT;er.setAnimationLoop(FE),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(E){Np=E,Tt.setAnimationLoop(E),E===null?er.stop():er.start()},Tt.addEventListener("sessionstart",gy),Tt.addEventListener("sessionend",vy),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(E,O);let Z=Tt.enabled===!0&&Tt.isPresenting===!0,G=w!==null&&(Y===null||Z)&&w.begin(C,Y);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(O),O=Tt.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,O,Y),T=ct.get(E,y.length),T.init(O),T.state.textureUnits=Q.getTextureUnits(),y.push(T),Qt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Yt.setFromProjectionMatrix(Qt,Wi,O.reversedDepth),be=this.localClippingEnabled,se=Ct.init(this.clippingPlanes,be),M=ft.get(E,A.length),M.init(),A.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){let xt=C.xr.getDepthSensingMesh();xt!==null&&Dp(xt,O,-1/0,C.sortObjects)}Dp(E,O,0,C.sortObjects),M.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&M.sort(gt,Ut),Pe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Pe&&Vt.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ct.beginShadows();let k=T.state.shadowsArray;if(Dt.render(k,E,O),se===!0&&Ct.endShadows(),(G&&w.hasRenderPass())===!1){let xt=M.opaque,pt=M.transmissive;if(T.setupLights(),O.isArrayCamera){let bt=O.cameras;if(pt.length>0)for(let Et=0,kt=bt.length;Et<kt;Et++){let Zt=bt[Et];_y(xt,pt,E,Zt)}Pe&&Vt.render(E);for(let Et=0,kt=bt.length;Et<kt;Et++){let Zt=bt[Et];yy(M,E,Zt,Zt.viewport)}}else pt.length>0&&_y(xt,pt,E,O),Pe&&Vt.render(E),yy(M,E,O)}Y!==null&&B===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),G&&w.end(C),E.isScene===!0&&E.onAfterRender(C,E,O),vt.resetDefaultState(),W=-1,K=null,y.pop(),y.length>0?(T=y[y.length-1],Q.setTextureUnits(T.state.textureUnits),se===!0&&Ct.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,U!==null&&U.renderEnd()};function Dp(E,O,Z,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Yt)){G&&rn.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Qt);let xt=it.update(E),pt=E.material;pt.visible&&M.push(E,xt,pt,Z,rn.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Yt))){let xt=it.update(E),pt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),rn.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),rn.copy(xt.boundingSphere.center)),rn.applyMatrix4(E.matrixWorld).applyMatrix4(Qt)),Array.isArray(pt)){let bt=xt.groups;for(let Et=0,kt=bt.length;Et<kt;Et++){let Zt=bt[Et],Mt=pt[Zt.materialIndex];Mt&&Mt.visible&&M.push(E,xt,Mt,Z,rn.z,Zt,O)}}else pt.visible&&M.push(E,xt,pt,Z,rn.z,null,O)}}let mt=E.children;for(let xt=0,pt=mt.length;xt<pt;xt++)Dp(mt[xt],O,Z,G)}function yy(E,O,Z,G){let{opaque:k,transmissive:mt,transparent:xt}=E;T.setupLightsView(Z),se===!0&&Ct.setGlobalState(C.clippingPlanes,Z),G&&S.viewport($.copy(G)),k.length>0&&Eu(k,O,Z),mt.length>0&&Eu(mt,O,Z),xt.length>0&&Eu(xt,O,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function _y(E,O,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Mt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Qn(1,1,{generateMipmaps:!0,type:Mt?Zi:$n,minFilter:Za,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let mt=T.state.transmissionRenderTarget[G.id],xt=G.viewport||$;mt.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);let pt=C.getRenderTarget(),bt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(mt),C.getClearColor(Pt),Nt=C.getClearAlpha(),Nt<1&&C.setClearColor(16777215,.5),C.clear(),Pe&&Vt.render(Z);let kt=C.toneMapping;C.toneMapping=qi;let Zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),se===!0&&Ct.setGlobalState(C.clippingPlanes,G),Eu(E,Z,G),Q.updateMultisampleRenderTarget(mt),Q.updateRenderTargetMipmap(mt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let ce=0,We=O.length;ce<We;ce++){let Re=O[ce],{object:_e,geometry:An,material:yt,group:Ln}=Re;if(yt.side===Ni&&_e.layers.test(G.layers)){let ie=yt.side;yt.side=Hn,yt.needsUpdate=!0,xy(_e,Z,G,An,yt,Ln),yt.side=ie,yt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Q.updateMultisampleRenderTarget(mt),Q.updateRenderTargetMipmap(mt))}C.setRenderTarget(pt,bt,Et),C.setClearColor(Pt,Nt),Zt!==void 0&&(G.viewport=Zt),C.toneMapping=kt}function Eu(E,O,Z){let G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,mt=E.length;k<mt;k++){let xt=E[k],{object:pt,geometry:bt,group:Et}=xt,kt=xt.material;kt.allowOverride===!0&&G!==null&&(kt=G),pt.layers.test(Z.layers)&&xy(pt,O,Z,bt,kt,Et)}}function xy(E,O,Z,G,k,mt){U!==null&&k.isNodeMaterial&&U.setObject(E,k),E.onBeforeRender(C,O,Z,G,k,mt),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(C,O,Z,G,E,mt),k.transparent===!0&&k.side===Ni&&k.forceSinglePass===!1?(k.side=Hn,k.needsUpdate=!0,C.renderBufferDirect(Z,O,G,k,E,mt),k.side=qa,k.needsUpdate=!0,C.renderBufferDirect(Z,O,G,k,E,mt),k.side=Ni):C.renderBufferDirect(Z,O,G,k,E,mt),E.onAfterRender(C,O,Z,G,k,mt)}function Au(E,O,Z){O.isScene!==!0&&(O=Vn);let G=q.get(E),k=T.state.lights,mt=T.state.shadowsArray,xt=k.state.version,pt=lt.getParameters(E,k.state,mt,O,Z,T.state.lightProbeGridArray),bt=lt.getProgramCacheKey(pt),Et=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let kt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=at.get(E.envMap||G.environment,kt),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Qi),Et=new Map,G.programs=Et);let Zt=Et.get(bt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===xt)return by(E,pt),Zt}else pt.uniforms=lt.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,Z,pt),E.onBeforeCompile(pt,C),Zt=lt.acquireProgram(pt,bt),Et.set(bt,Zt),G.uniforms=pt.uniforms;let Mt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=Ct.uniform),by(E,pt),G.needsLights=kE(E),G.lightsStateVersion=xt,G.needsLights&&(Mt.ambientLightColor.value=k.state.ambient,Mt.lightProbe.value=k.state.probe,Mt.sunLights.value=k.state.sun,Mt.sunLightShadows.value=k.state.sunShadow,Mt.directionalLights.value=k.state.directional,Mt.directionalLightShadows.value=k.state.directionalShadow,Mt.spotLights.value=k.state.spot,Mt.spotLightShadows.value=k.state.spotShadow,Mt.rectAreaLights.value=k.state.rectArea,Mt.ltc_1.value=k.state.rectAreaLTC1,Mt.ltc_2.value=k.state.rectAreaLTC2,Mt.pointLights.value=k.state.point,Mt.pointLightShadows.value=k.state.pointShadow,Mt.hemisphereLights.value=k.state.hemi,Mt.sunShadowMatrix.value=k.state.sunShadowMatrix,Mt.sunShadowCascade.value=k.state.sunShadowCascade,Mt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Mt.spotLightMatrix.value=k.state.spotLightMatrix,Mt.spotLightMap.value=k.state.spotLightMap,Mt.pointShadowMatrix.value=k.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Zt,G.uniformsList=null,Zt}function Sy(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Ml.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function by(E,O){let Z=q.get(E);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function HE(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let Z=0,G=E.length;Z<G;Z++){let k=E[Z];if(k.texture!==null&&k.boundingBox.containsPoint(_))return k}return null}function VE(E,O,Z,G,k){O.isScene!==!0&&(O=Vn),Q.resetTextureUnits();let mt=O.fog,xt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,pt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:$t.workingColorSpace,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Et=at.get(G.envMap||xt,bt),kt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Zt=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Mt=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,We=!!Z.morphAttributes.color,Re=qi;G.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Re=C.toneMapping);let _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,An=_e!==void 0?_e.length:0,yt=q.get(G),Ln=T.state.lights;if(se===!0&&(be===!0||E!==K)){let Te=E===K&&G.id===W;Ct.setState(G,E,Te)}let ie=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Ln.state.version||yt.outputColorSpace!==pt||k.isBatchedMesh&&yt.batching===!1||!k.isBatchedMesh&&yt.batching===!0||k.isBatchedMesh&&yt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&yt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&yt.instancing===!1||!k.isInstancedMesh&&yt.instancing===!0||k.isSkinnedMesh&&yt.skinning===!1||!k.isSkinnedMesh&&yt.skinning===!0||k.isInstancedMesh&&yt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&yt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&yt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&yt.instancingMorph===!1&&k.morphTexture!==null||yt.envMap!==Et||G.fog===!0&&yt.fog!==mt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ct.numPlanes||yt.numIntersection!==Ct.numIntersection)||yt.vertexAlphas!==kt||yt.vertexTangents!==Zt||yt.morphTargets!==Mt||yt.morphNormals!==ce||yt.morphColors!==We||yt.toneMapping!==Re||yt.morphTargetsCount!==An||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,yt.__version=G.version);let vi=yt.currentProgram;ie===!0&&(vi=Au(G,O,k),U&&G.isNodeMaterial&&U.onUpdateProgram(G,vi,yt));let ji=!1,ta=!1,qr=!1,ve=vi.getUniforms(),Ge=yt.uniforms;if(S.useProgram(vi.program)&&(ji=!0,ta=!0,qr=!0),G.id!==W&&(W=G.id,ta=!0),yt.needsLights){let Te=HE(T.state.lightProbeGridArray,k);yt.lightProbeGrid!==Te&&(yt.lightProbeGrid=Te,ta=!0)}if(ji||K!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",E.projectionMatrix),ve.setValue(z,"viewMatrix",E.matrixWorldInverse);let na=ve.map.cameraPosition;na!==void 0&&na.setValue(z,De.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,ta=!0,qr=!0)}if(yt.needsLights&&(Ln.state.sunShadowMap.length>0&&ve.setValue(z,"sunShadowMap",Ln.state.sunShadowMap,Q),Ln.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",Ln.state.directionalShadowMap,Q),Ln.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",Ln.state.spotShadowMap,Q),Ln.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",Ln.state.pointShadowMap,Q)),k.isSkinnedMesh){ve.setOptional(z,k,"bindMatrix"),ve.setOptional(z,k,"bindMatrixInverse");let Te=k.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ve.setValue(z,"boneTexture",Te.boneTexture,Q))}k.isBatchedMesh&&(ve.setOptional(z,k,"batchingTexture"),ve.setValue(z,"batchingTexture",k._matricesTexture,Q),ve.setOptional(z,k,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",k._indirectTexture,Q),ve.setOptional(z,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",k._colorsTexture,Q));let ea=Z.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0)&&P.update(k,Z,vi),(ta||yt.receiveShadow!==k.receiveShadow)&&(yt.receiveShadow=k.receiveShadow,ve.setValue(z,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Ge.envMapIntensity.value=O.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=ZU()),ta){if(ve.setValue(z,"toneMappingExposure",C.toneMappingExposure),yt.needsLights&&GE(Ge,qr),mt&&G.fog===!0&&wt.refreshFogUniforms(Ge,mt),wt.refreshMaterialUniforms(Ge,G,nt,J,T.state.transmissionRenderTarget[E.id]),yt.needsLights&&yt.lightProbeGrid){let Te=yt.lightProbeGrid;Ge.probesSH.value=Te.texture,Ge.probesMin.value.copy(Te.boundingBox.min),Ge.probesMax.value.copy(Te.boundingBox.max),Ge.probesResolution.value.copy(Te.resolution)}Ml.upload(z,Sy(yt),Ge,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ml.upload(z,Sy(yt),Ge,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(z,"center",k.center),ve.setValue(z,"modelViewMatrix",k.modelViewMatrix),ve.setValue(z,"normalMatrix",k.normalMatrix),ve.setValue(z,"modelMatrix",k.matrixWorld),G.uniformsGroups!==void 0){let Te=G.uniformsGroups;for(let na=0,Yr=Te.length;na<Yr;na++){let Ty=Te[na];st.update(Ty,vi),st.bind(Ty,vi)}}return vi}function GE(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function kE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(E,O,Z){let G=q.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=O,q.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let Z=q.get(E);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Z=0){Y=E,L=O,B=Z;let G=null,k=!1,mt=!1;if(E){let pt=q.get(E);if(pt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,pt.__webglFramebuffer),$.copy(E.viewport),St.copy(E.scissor),rt=E.scissorTest,S.viewport($),S.scissor(St),S.setScissorTest(rt),W=-1;return}else if(pt.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(pt.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let kt=E.depthTexture;if(pt.__boundDepthTexture!==kt){if(kt!==null&&q.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let Et=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Et[O])?G=Et[O][Z]:G=Et[O],k=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?G=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Et)?G=Et[Z]:G=Et,$.copy(E.viewport),St.copy(E.scissor),rt=E.scissorTest}else $.copy(_t).multiplyScalar(nt).floor(),St.copy(qt).multiplyScalar(nt).floor(),rt=Je;if(Z!==0&&(G=I),S.bindFramebuffer(z.FRAMEBUFFER,G)&&S.drawBuffers(E,G),S.viewport($),S.scissor(St),S.setScissorTest(rt),k){let pt=q.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,pt.__webglTexture,Z)}else if(mt){let pt=O;for(let bt=0;bt<E.textures.length;bt++){let Et=q.get(E.textures[bt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+bt,Et.__webglTexture,Z,pt)}}else if(E!==null&&Z!==0){let pt=q.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pt.__webglTexture,Z)}W=-1};function My(E){let O=q.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=R.textureFormatReadable(E.format),O.__typeReadable=R.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Z,G,k,mt,xt,pt=0){if(!(E&&E.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){S.bindFramebuffer(z.FRAMEBUFFER,bt);try{let Et=E.textures[pt],kt=Et.format,Zt=Et.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+pt);let Mt=My(Et);if(Mt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&Z>=0&&Z<=E.height-k&&z.readPixels(O,Z,G,k,ht.convert(kt),ht.convert(Zt),mt)}finally{let Et=Y!==null?q.get(Y).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,O,Z,G,k,mt,xt,pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt)if(O>=0&&O<=E.width-G&&Z>=0&&Z<=E.height-k){S.bindFramebuffer(z.FRAMEBUFFER,bt);let Et=E.textures[pt],kt=Et.format,Zt=Et.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+pt);let Mt=My(Et);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,mt.byteLength,z.STREAM_READ),z.readPixels(O,Z,G,k,ht.convert(kt),ht.convert(Zt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let We=Y!==null?q.get(Y).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,We);let Re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await nT(z,Re,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,mt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ce),z.deleteSync(Re),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Z=0){let G=Math.pow(2,-Z),k=Math.floor(E.image.width*G),mt=Math.floor(E.image.height*G),xt=O!==null?O.x:0,pt=O!==null?O.y:0;Q.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,xt,pt,k,mt),S.unbindTexture()},this.copyTextureToTexture=function(E,O,Z=null,G=null,k=0,mt=0){let xt,pt,bt,Et,kt,Zt,Mt,ce,We,Re=E.isCompressedTexture?E.mipmaps[mt]:E.image;if(Z!==null)xt=Z.max.x-Z.min.x,pt=Z.max.y-Z.min.y,bt=Z.isBox3?Z.max.z-Z.min.z:1,Et=Z.min.x,kt=Z.min.y,Zt=Z.isBox3?Z.min.z:0;else{let Ge=Math.pow(2,-k);xt=Math.floor(Re.width*Ge),pt=Math.floor(Re.height*Ge),E.isDataArrayTexture?bt=Re.depth:E.isData3DTexture?bt=Math.floor(Re.depth*Ge):bt=1,Et=0,kt=0,Zt=0}G!==null?(Mt=G.x,ce=G.y,We=G.z):(Mt=0,ce=0,We=0);let _e=ht.convert(O.format),An=ht.convert(O.type),yt;O.isData3DTexture?(Q.setTexture3D(O,0),yt=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),yt=z.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),yt=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let Ln=S.getParameter(z.UNPACK_ROW_LENGTH),ie=S.getParameter(z.UNPACK_IMAGE_HEIGHT),vi=S.getParameter(z.UNPACK_SKIP_PIXELS),ji=S.getParameter(z.UNPACK_SKIP_ROWS),ta=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,Re.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Re.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Et),S.pixelStorei(z.UNPACK_SKIP_ROWS,kt),S.pixelStorei(z.UNPACK_SKIP_IMAGES,Zt);let qr=E.isDataArrayTexture||E.isData3DTexture,ve=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Ge=q.get(E),ea=q.get(O),Te=q.get(Ge.__renderTarget),na=q.get(ea.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,Te.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Yr=0;Yr<bt;Yr++)qr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(E).__webglTexture,k,Zt+Yr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(O).__webglTexture,mt,We+Yr)),z.blitFramebuffer(Et,kt,xt,pt,Mt,ce,xt,pt,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||q.has(E)){let Ge=q.get(E),ea=q.get(O);S.bindFramebuffer(z.READ_FRAMEBUFFER,D),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,H);for(let Te=0;Te<bt;Te++)qr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,k,Zt+Te):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ge.__webglTexture,k),ve?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ea.__webglTexture,mt,We+Te):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ea.__webglTexture,mt),k!==0?z.blitFramebuffer(Et,kt,xt,pt,Mt,ce,xt,pt,z.COLOR_BUFFER_BIT,z.NEAREST):ve?z.copyTexSubImage3D(yt,mt,Mt,ce,We+Te,Et,kt,xt,pt):z.copyTexSubImage2D(yt,mt,Mt,ce,Et,kt,xt,pt);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(yt,mt,Mt,ce,We,xt,pt,bt,_e,An,Re.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(yt,mt,Mt,ce,We,xt,pt,bt,_e,Re.data):z.texSubImage3D(yt,mt,Mt,ce,We,xt,pt,bt,_e,An,Re):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,mt,Mt,ce,xt,pt,_e,An,Re.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,mt,Mt,ce,Re.width,Re.height,_e,Re.data):z.texSubImage2D(z.TEXTURE_2D,mt,Mt,ce,xt,pt,_e,An,Re);S.pixelStorei(z.UNPACK_ROW_LENGTH,Ln),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ie),S.pixelStorei(z.UNPACK_SKIP_PIXELS,vi),S.pixelStorei(z.UNPACK_SKIP_ROWS,ji),S.pixelStorei(z.UNPACK_SKIP_IMAGES,ta),mt===0&&O.generateMipmaps&&z.generateMipmap(yt),S.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){L=0,B=0,Y=null,S.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),n.unpackColorSpace=$t._getUnpackColorSpace()}}});var At,Qa=Fe(()=>{At={tickRate:60,halfWidth:.35,standHeight:1.8,crouchHeight:1.1,standEye:1.62,crouchEye:.95,crouchLerp:14,maxSpeed:9,crouchSpeedScale:.5,groundAccel:11,friction:6,stopSpeed:2.5,airAccel:90,airWishCap:1.2,gravity:28,jumpSpeed:8.8,autoBhop:!0,maxFallSpeed:40,maxHSpeed:30,slideMinSpeed:7,slideEndSpeed:3.2,slideFriction:1.2,slideBoost:2.4,slideBoostCap:15,slideBoostCooldown:.5,slideSteer:2,stepClimb:.55,groundSnap:.6,baseFov:100,fovSpeedKick:7,sensitivity:1,landDip:.045}});function ty(e){let t=new Ht(e);return[t.r,t.g,t.b]}function PT(){let e=[],t=[],n=[],i=[],s=[],a=[],r=(C,N,U)=>{let I=e.length/3;for(let D=0;D<4;D++)e.push(...C[D]),t.push(...D<2?N:U);n.push(I,I+1,I+2,I,I+2,I+3)},o=(C,N)=>[C[0]*N,C[1]*N,C[2]*N];function l(C,N,U,I=!0,D=!1){let[H,L,B]=C,[Y,W,K]=N,$=ty(U),St=Math.max(.01,W-L),rt=zt=>o($,zt*(St>1.2?.72:.9)),Pt=zt=>o($,zt);r([[Y,L,K],[Y,L,B],[Y,W,B],[Y,W,K]],rt(As.x),Pt(As.x)),r([[H,L,B],[H,L,K],[H,W,K],[H,W,B]],rt(As.x),Pt(As.x)),r([[H,L,K],[Y,L,K],[Y,W,K],[H,W,K]],rt(As.z),Pt(As.z)),r([[Y,L,B],[H,L,B],[H,W,B],[Y,W,B]],rt(As.z),Pt(As.z));let Nt=Pt(As.top);if(r([[H,W,K],[Y,W,K],[Y,W,B],[H,W,B]],Nt,Nt),!D){let zt=Pt(As.bottom);r([[H,L,B],[Y,L,B],[Y,L,K],[H,L,K]],zt,zt)}I&&i.push({min:[H,L,B],max:[Y,W,K]})}let c=(C,N,U,I,D,H,L)=>l([C-U/2,D,N-I/2],[C+U/2,H,N+I/2],L);function h(C,N,U,I,D,H,L,B,Y){s.push({x0:C,x1:N,z0:U,z1:I,y0:D,y1:H,axis:L,dir:B});let W=ty(Y),K=(gt,Ut)=>Gr({x0:C,x1:N,z0:U,z1:I,y0:D,y1:H,axis:L,dir:B},gt,Ut),$=(gt,Ut)=>[gt,K(gt,Ut),Ut],St=$(C,U),rt=$(N,U),Pt=$(N,I),Nt=$(C,I),zt=gt=>[gt[0],0,gt[2]];r([Nt,Pt,rt,St],o(W,.95),o(W,1));let J=o(W,.7),nt=o(W,.5);r([zt(St),zt(rt),rt,St],nt,J),r([zt(rt),zt(Pt),Pt,rt],nt,J),r([zt(Pt),zt(Nt),Nt,Pt],nt,J),r([zt(Nt),zt(St),St,Nt],nt,J)}let p="#2b3548",u="#323d52",d=32;i.push({min:[-d-2,-2,-d-2],max:[d+2,0,d+2]});let v=4;for(let C=-d;C<d;C+=v)for(let N=-d;N<d;N+=v){let U=ty((C+N)/v%2===0?p:u);r([[C,0,N+v],[C+v,0,N+v],[C+v,0,N],[C,0,N]],U,U)}let x="#46526b";l([-d-1,0,-d-1],[d+1,9,-d],x),l([-d-1,0,d],[d+1,9,d+1],x),l([-d-1,0,-d],[-d,9,d],x),l([d,0,-d],[d+1,9,d],x);let m="#e0644a",f="#8c3b2e";l([-6,4,-6],[6,4.5,6],m);for(let[C,N]of[[-5.5,-5.5],[5.5,-5.5],[-5.5,5.5],[5.5,5.5]])c(C,N,1,1,0,4,f);c(-3,0,.6,5,4.5,5.5,"#f08a6a"),c(3,0,.6,5,4.5,5.5,"#f08a6a"),h(6,16,-3,3,0,4.5,"x",-1,"#f2b84b"),h(-16,-6,-3,3,0,4.5,"x",1,"#f2b84b");let g="#4b8bd9",b="#356bb0";l([-4,0,17],[4,3,24],b),l([-4,0,-24],[4,3,-17],b),h(-4,4,11,17,0,3,"z",1,g),h(-4,4,-17,-11,0,3,"z",-1,g);let _="#7e5bd6";l([-d,2.6,-14],[-d+4,3,14],_),l([d-4,2.6,-14],[d,3,14],_);for(let C of[-1,1])for(let N of[-13.5,-4.5,4.5,13.5])c(C*(d-3.5),N,.8,.8,0,2.6,"#4c3a8c");h(-d+4,-d+12,14,18,0,3,"x",-1,"#9b7be8"),l([-d,2.6,14],[-d+4,3,18],_),h(d-12,d-4,-18,-14,0,3,"x",1,"#9b7be8"),l([d-4,2.6,-18],[d,3,-14],_);let M=["#d9a441","#c98a2e","#5fb36b","#3f9a8b"];[[-12,-10,2,2,1.6],[-13.5,-9,1.2,1.2,1],[12,10,2,2,1.6],[13.5,9,1.2,1.2,1],[-10,12,3,1,1.4],[10,-12,3,1,1.4],[-22,0,2,4,1.4],[22,0,2,4,1.4],[7,14,1.4,1.4,1.4],[-7,-14,1.4,1.4,1.4],[-18,-22,4,1.2,2.2],[18,22,4,1.2,2.2],[-18,22,1.2,4,2.2],[18,-22,1.2,4,2.2],[-8,0,1.6,1.6,1],[8,0,1.6,1.6,1]].forEach(([C,N,U,I,D],H)=>c(C,N,U,I,0,D,M[H%M.length])),c(-9,-22,2,2,0,1,"#e8e1d0"),c(-6.5,-22,2,2,0,2,"#e8e1d0"),c(-4,-22,2,2,0,3,"#e8e1d0"),c(9,22,2,2,0,1,"#e8e1d0"),c(6.5,22,2,2,0,2,"#e8e1d0"),c(4,22,2,2,0,3,"#e8e1d0"),a.push([-26,0,-26],[26,0,26],[-26,0,26],[26,0,-26],[0,4.6,0],[0,3.1,20],[0,3.1,-20],[-29,3.1,0]);let A=new Ri;A.setAttribute("position",new Fn(e,3)),A.setAttribute("color",new Fn(t,3)),A.setIndex(n),A.computeBoundingSphere();let y=new jn({vertexColors:!0,side:Ni});return{mesh:new Ie(A,y),boxes:i,ramps:s,spawns:a,size:d}}function Gr(e,t,n){if(t<e.x0||t>e.x1||n<e.z0||n>e.z1)return-1/0;let i=e.axis==="x"?(t-e.x0)/(e.x1-e.x0):(n-e.z0)/(e.z1-e.z0),s=e.dir>0?i:1-i;return e.y0+(e.y1-e.y0)*s}function El(e,t,n){let i=-1/0;for(let s of e){let a=Gr(s,t,n);a>i&&(i=a)}return i}var As,hp=Fe(()=>{Ki();As={top:1,bottom:.45,x:.78,z:.62}});var Ji,Al,fp=Fe(()=>{Qa();hp();Ji=1e-4,Al=class{constructor(t){this.world=t,this.pos={x:0,y:0,z:0},this.prev={x:0,y:0,z:0,eye:At.standEye},this.vel={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.onGround=!1,this.crouched=!1,this.sliding=!1,this.slideCd=0,this.eye=At.standEye,this.prevCrouchKey=!1,this.events=[],this.airTime=0}get height(){return this.crouched?At.crouchHeight:At.standHeight}get hSpeed(){return Math.hypot(this.vel.x,this.vel.z)}teleport(t,n,i,s=this.yaw){this.pos.x=t,this.pos.y=n,this.pos.z=i,this.vel.x=this.vel.y=this.vel.z=0,this.yaw=s,this.pitch=0,this.onGround=!1,this.sliding=!1,this.crouched=!1,this.eye=At.standEye,this.snapshotPrev()}snapshotPrev(){let t=this.pos;this.prev.x=t.x,this.prev.y=t.y,this.prev.z=t.z,this.prev.eye=this.eye}_overlaps(t,n,i,s){let a=At.halfWidth;for(let r of this.world.boxes)if(t+a>r.min[0]+Ji&&t-a<r.max[0]-Ji&&n+s>r.min[1]+Ji&&n<r.max[1]-Ji&&i+a>r.min[2]+Ji&&i-a<r.max[2]-Ji)return r;return null}_rampUnder(t,n){let i=At.halfWidth,s=this.world.ramps;return Math.max(El(s,t,n),El(s,t-i,n-i),El(s,t+i,n-i),El(s,t-i,n+i),El(s,t+i,n+i))}_accel(t,n,i,s,a,r){let o=r===void 0?i:Math.min(i,r),l=this.vel.x*t+this.vel.z*n,c=o-l;if(c<=0)return;let h=Math.min(s*i*a,c);this.vel.x+=h*t,this.vel.z+=h*n}_boost(){let t=this.hSpeed;if(t<.1)return;let n=Math.min(At.slideBoost,At.slideBoostCap-t);n>0&&(this.vel.x+=this.vel.x/t*n,this.vel.z+=this.vel.z/t*n),this.slideCd=At.slideBoostCooldown,this.sliding=!0,this.events.push({type:"slide",v:t+Math.max(n,0)})}step(t,n){let i=this.pos,s=this.vel;this.snapshotPrev(),this.slideCd=Math.max(0,this.slideCd-t);let a=n.crouch&&!this.prevCrouchKey;this.prevCrouchKey=n.crouch,n.crouch?this.crouched=!0:this.crouched&&!this._overlaps(i.x,i.y,i.z,At.standHeight)&&(this.crouched=!1,this.sliding=!1);let r=Math.sin(this.yaw),o=Math.cos(this.yaw),l=-r*n.fwd+o*n.strafe,c=-o*n.fwd-r*n.strafe,h=Math.hypot(l,c);h>0&&(l/=h,c/=h);let p=At.maxSpeed*(this.crouched?At.crouchSpeedScale:1),u=h>0?p:0,d=this.onGround,v=!1;if(this.onGround)if(a&&!this.sliding&&this.slideCd<=0&&this.hSpeed>=At.slideMinSpeed&&this._boost(),n.jump&&(At.autoBhop||this._jumpReady))s.y=At.jumpSpeed,this.onGround=!1,this.sliding=!1,v=!0,this.events.push({type:"jump",v:this.hSpeed}),this._accel(l,c,u,At.airAccel,t,At.airWishCap);else{let y=this.hSpeed;if(y>0){let w;this.sliding?w=y*At.slideFriction*t:w=Math.max(y,At.stopSpeed)*At.friction*t;let C=Math.max(y-w,0)/y;s.x*=C,s.z*=C}if(this.sliding){if(!n.crouch||this.hSpeed<At.slideEndSpeed)this.sliding=!1;else if(h>0){let w=this.hSpeed,C=At.slideSteer*t;s.x+=l*w*C,s.z+=c*w*C;let N=Math.hypot(s.x,s.z);s.x*=w/N,s.z*=w/N}}else this._accel(l,c,u,At.groundAccel,t);s.y=0}else this.sliding=!1,this._accel(l,c,u,At.airAccel,t,At.airWishCap);this._jumpReady=!n.jump;let x=this.hSpeed;if(x>At.maxHSpeed){let y=At.maxHSpeed/x;s.x*=y,s.z*=y}s.y=Math.max(s.y-At.gravity*t,-At.maxFallSpeed);let m=this.height;i.x+=s.x*t;let f=this._overlaps(i.x,i.y,i.z,m);f&&(i.x=s.x>0?f.min[0]-At.halfWidth-Ji:f.max[0]+At.halfWidth+Ji,s.x=0),this._rampUnder(i.x,i.z)-i.y>At.stepClimb&&(i.x-=s.x*t,s.x=0),i.z+=s.z*t,f=this._overlaps(i.x,i.y,i.z,m),f&&(i.z=s.z>0?f.min[2]-At.halfWidth-Ji:f.max[2]+At.halfWidth+Ji,s.z=0),this._rampUnder(i.x,i.z)-i.y>At.stepClimb&&(i.z-=s.z*t,s.z=0);let g=-s.y,b=!1,_=s.y*t,M=Math.max(1,Math.ceil(Math.abs(_)/.2));for(let y=0;y<M;y++)if(i.y+=_/M,f=this._overlaps(i.x,i.y,i.z,m),f){s.y<=0?(i.y=f.max[1],b=!0):i.y=f.min[1]-m-Ji,s.y=0;break}let T=this._rampUnder(i.x,i.z);(T>-1/0&&!v&&s.y<=0&&i.y<=T+.001||T>-1/0&&d&&!v&&!b&&i.y-T<=At.groundSnap&&i.y>=T)&&(i.y=T,s.y=0,b=!0),this.onGround=b,b&&!d&&(this.events.push({type:"land",v:g}),n.crouch&&this.slideCd<=0&&this.hSpeed>=At.slideMinSpeed&&this._boost()),this.airTime=b?0:this.airTime+t;let A=this.sliding?At.crouchEye-.12:this.crouched?At.crouchEye:At.standEye;if(this.eye+=(A-this.eye)*Math.min(1,At.crouchLerp*t),i.y<-3||Math.abs(i.x)>40||Math.abs(i.z)>40){let y=this.world.spawns[0],w=1e9;for(let C of this.world.spawns){let N=Math.hypot(C[0]-i.x,C[2]-i.z);N<w&&(w=N,y=C)}this.teleport(y[0],y[1]+.05,y[2])}}}});var dp,zT=Fe(()=>{dp=class{constructor(t){this.keys=new Set,this.pressedEdge=new Set,this.mouseButtons=0,this.lookX=0,this.lookY=0,this.enabled=!1,this.onKey=null;let n=l=>{this.enabled&&(l.repeat||this.pressedEdge.add(l.code),this.keys.add(l.code),this.onKey&&this.onKey(l),(l.code==="Space"||l.code==="Tab"||l.code.startsWith("Arrow"))&&l.preventDefault())},i=l=>{this.keys.delete(l.code)},s=l=>{this.enabled&&(this.lookX+=l.movementX,this.lookY+=l.movementY)},a=l=>{this.enabled&&(this.mouseButtons|=1<<l.button)},r=l=>{this.mouseButtons&=~(1<<l.button)},o=()=>{this.keys.clear(),this.mouseButtons=0};window.addEventListener("keydown",n),window.addEventListener("keyup",i),window.addEventListener("mousemove",s),window.addEventListener("mousedown",a),window.addEventListener("mouseup",r),window.addEventListener("blur",o),this.dispose=()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",i),window.removeEventListener("mousemove",s),window.removeEventListener("mousedown",a),window.removeEventListener("mouseup",r),window.removeEventListener("blur",o)}}setEnabled(t){this.enabled=t,t||(this.keys.clear(),this.mouseButtons=0,this.lookX=this.lookY=0)}down(t){return this.keys.has(t)}consumeLook(){let t=[this.lookX,this.lookY];return this.lookX=this.lookY=0,t}consumeEdge(t){return this.pressedEdge.delete(t)}snapshot(){let t=this.keys;return{fwd:(t.has("KeyW")||t.has("ArrowUp")?1:0)-(t.has("KeyS")||t.has("ArrowDown")?1:0),strafe:(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0),jump:t.has("Space"),crouch:t.has("ShiftLeft")||t.has("ShiftRight")||t.has("KeyC")||t.has("ControlLeft")}}}});function ey(){if(ne){ne.state==="suspended"&&ne.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;ne=new e,$s=ne.createGain(),$s.gain.value=BT,$s.connect(ne.destination);let t=ne.sampleRate;xu=ne.createBuffer(1,t,ne.sampleRate);let n=xu.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1}function Su(e){BT=e,$s&&($s.gain.value=e)}function Xr(e,t,n,i,s,a=.8){if(!ne)return;let r=ne.currentTime,o=ne.createBufferSource();o.buffer=xu;let l=ne.createBiquadFilter();l.type=t,l.Q.value=a,l.frequency.setValueAtTime(n,r),l.frequency.exponentialRampToValueAtTime(Math.max(20,i),r+e);let c=ne.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(s,r+.008),c.gain.exponentialRampToValueAtTime(8e-4,r+e),o.connect(l).connect(c).connect($s),o.start(r,Math.random()*.5,e+.05)}function ja(e,t,n,i,s="sine"){if(!ne)return;let a=ne.currentTime,r=ne.createOscillator();r.type=s,r.frequency.setValueAtTime(e,a),r.frequency.exponentialRampToValueAtTime(Math.max(20,t),a+n);let o=ne.createGain();o.gain.setValueAtTime(i,a),o.gain.exponentialRampToValueAtTime(8e-4,a+n),r.connect(o).connect($s),r.start(a),r.stop(a+n+.02)}function KU(e,t){if(!ne||!ne.createStereoPanner)return t;let n=ne.createStereoPanner();return n.pan.value=e,n.connect(t),n}var ne,$s,xu,kr,BT,Be,bu=Fe(()=>{ne=null,$s=null,xu=null,kr=null,BT=.7;Be={shot(e,t=1,n=0){if(!ne)return;let i=ne.currentTime,s=ne.createGain();s.gain.value=t,s.connect($s);let a=KU(n,s),r=(l,c,h,p,u)=>{let d=ne.createBufferSource();d.buffer=xu;let v=ne.createBiquadFilter();v.type=c,v.frequency.setValueAtTime(h,i),v.frequency.exponentialRampToValueAtTime(Math.max(30,p),i+l);let x=ne.createGain();x.gain.setValueAtTime(u,i),x.gain.exponentialRampToValueAtTime(.001,i+l),d.connect(v).connect(x).connect(a),d.start(i,Math.random()*.5,l+.05)},o=(l,c,h,p)=>{let u=ne.createOscillator();u.type="sine",u.frequency.setValueAtTime(l,i),u.frequency.exponentialRampToValueAtTime(c,i+h);let d=ne.createGain();d.gain.setValueAtTime(p,i),d.gain.exponentialRampToValueAtTime(.001,i+h),u.connect(d).connect(a),u.start(i),u.stop(i+h+.02)};e==="ar"?(r(.09,"bandpass",3200,600,.55),o(190,60,.09,.5)):e==="sniper"?(r(.35,"lowpass",5e3,200,.9),r(.05,"highpass",2500,2500,.6),o(110,35,.4,.9)):(r(.22,"lowpass",3500,250,1),o(130,40,.2,.8))},hit(e){ja(e?1900:1100,e?1500:800,.07,e?.22:.15,"square")},kill(){ja(700,1400,.12,.2,"triangle"),setTimeout(()=>ja(1400,1900,.14,.18,"triangle"),70)},reload(){Xr(.05,"highpass",3e3,3e3,.15),setTimeout(()=>ja(260,180,.07,.2,"square"),450),setTimeout(()=>Xr(.06,"highpass",2500,2500,.2),900)},empty(){ja(300,250,.04,.12,"square")},hurt(){ja(160,80,.18,.4,"sawtooth")},die(){ja(220,40,.6,.4,"sawtooth")},switchGun(){Xr(.05,"bandpass",1800,900,.12)},jump(){Xr(.14,"bandpass",500,1500,.16)},land(e){let t=Math.min(1,e/18);ja(120,45,.16,.25+.5*t),Xr(.1,"lowpass",900,200,.12+.3*t)},step(){Xr(.05,"bandpass",220,120,.08,1.5)},slideStart(){Xr(.25,"bandpass",2500,700,.18,1.2)},slide(e,t=0){if(ne){if(e&&!kr){let n=ne.createBufferSource();n.buffer=xu,n.loop=!0;let i=ne.createBiquadFilter();i.type="bandpass",i.Q.value=.7,i.frequency.value=1200;let s=ne.createGain();s.gain.value=0,n.connect(i).connect(s).connect($s),n.start(),kr={src:n,f:i,g:s}}if(kr){let n=ne.currentTime;if(kr.g.gain.setTargetAtTime(e?.05+Math.min(.12,t*.008):0,n,.05),kr.f.frequency.setTargetAtTime(700+t*80,n,.05),!e){let i=kr;kr=null,setTimeout(()=>{try{i.src.stop()}catch{}},300)}}}}}});function QU(e,t,n,i,s){let a=0,r=s;for(let o=0;o<3;o++){let l=o===0?e.x:o===1?e.y:e.z,c=o===0?t.x:o===1?t.y:t.z;if(Math.abs(c)<1e-9){if(l<n[o]||l>i[o])return-1;continue}let h=(n[o]-l)/c,p=(i[o]-l)/c;if(h>p){let u=h;h=p,p=u}if(h>a&&(a=h),p<r&&(r=p),a>r)return-1}return a}var Mu,Tz,pp,JU,mp,FT=Fe(()=>{Ki();Mu=new au;Mu.firstHitOnly=!0;Tz=new F,pp=new F,JU=.32;mp=class{constructor(t){this.mesh=t}worldRay(t,n,i){Mu.set(t,n),Mu.near=0,Mu.far=i;let s=Mu.intersectObject(this.mesh,!1);return s.length?s[0]:null}los(t,n){pp.subVectors(n,t);let i=pp.length();return i<.01?!0:(pp.divideScalar(i),!this.worldRay(t,pp,i-.05))}trace(t,n,i,s,a,r){let o={dist:i,kind:null,fighter:null,head:!1,point:new F,normal:new F(0,1,0)},l=this.worldRay(t,n,i);l&&(o.dist=l.distance,o.kind="world",o.point.copy(l.point),l.face&&o.normal.copy(l.face.normal));for(let c of a){if(!c.alive||c===s)continue;let h=c.body.pos,p=c.body.height,u=[h.x-r,h.y,h.z-r],d=[h.x+r,h.y+p,h.z+r],v=QU(t,n,u,d,o.dist);v>=0&&v<o.dist&&(o.dist=v,o.kind="fighter",o.fighter=c,o.point.copy(n).multiplyScalar(v).add(t),o.head=o.point.y>=h.y+p-JU,o.normal.set(-n.x,-n.y,-n.z))}return o.kind!=="fighter"&&(o.fighter=null),o.kind?o:null}}});var gp,HT=Fe(()=>{Ki();gp=class{constructor(t){this.scene=t;let n=new Tn(1,1,1);this.tracers=[];for(let s=0;s<40;s++){let a=new Ie(n,new jn({color:"#fff",transparent:!0,opacity:1,depthWrite:!1,fog:!1}));a.visible=!1,a.userData={life:0,max:.1},t.add(a),this.tracers.push(a)}this.ti=0,this.N=320,this.pm=new Or(new Tn(1,1,1),new jn({color:"#fff"}),this.N),this.pm.frustumCulled=!1,this.px=new Float32Array(this.N*3),this.pv=new Float32Array(this.N*3),this.life=new Float32Array(this.N),this.size=new Float32Array(this.N),this.pi=0,this.dummy=new tn;let i=new ge().makeScale(0,0,0);for(let s=0;s<this.N;s++)this.pm.setMatrixAt(s,i),this.pm.setColorAt(s,new Ht("#fff"));t.add(this.pm),this._c=new Ht}tracer(t,n,i,s,a){let r=this.tracers[this.ti++%this.tracers.length],o=t.distanceTo(n);o<.2||(r.position.copy(t).add(n).multiplyScalar(.5),r.lookAt(n),r.scale.set(s,s,o),r.material.color.set(i),r.material.opacity=.9,r.userData.life=a,r.userData.max=a,r.visible=!0)}burst(t,n,i,s,a=4,r=.08){this._c.set(i);for(let o=0;o<s;o++){let l=this.pi++%this.N,c=l*3;this.px[c]=t.x,this.px[c+1]=t.y,this.px[c+2]=t.z,this.pv[c]=(n.x+(Math.random()-.5)*1.4)*a*(.4+Math.random()),this.pv[c+1]=(n.y+(Math.random()-.3)*1.4)*a*(.4+Math.random()),this.pv[c+2]=(n.z+(Math.random()-.5)*1.4)*a*(.4+Math.random()),this.life[l]=.35+Math.random()*.35,this.size[l]=r*(.6+Math.random()*.8),this.pm.setColorAt(l,this._c)}this.pm.instanceColor.needsUpdate=!0}update(t){for(let s of this.tracers)if(s.visible){if(s.userData.life-=t,s.userData.life<=0){s.visible=!1;continue}s.material.opacity=s.userData.life/s.userData.max}let n=this.dummy,i=!1;for(let s=0;s<this.N;s++){if(this.life[s]<=0)continue;i=!0;let a=s*3;if(this.life[s]-=t,this.life[s]<=0)n.scale.set(0,0,0);else{this.pv[a+1]-=14*t,this.px[a]+=this.pv[a]*t,this.px[a+1]+=this.pv[a+1]*t,this.px[a+2]+=this.pv[a+2]*t,n.position.set(this.px[a],this.px[a+1],this.px[a+2]);let r=this.size[s]*Math.min(1,this.life[s]*4);n.scale.set(r,r,r)}n.updateMatrix(),this.pm.setMatrixAt(s,n.matrix)}i&&(this.pm.instanceMatrix.needsUpdate=!0)}}});function $U(e){let t=new bn;return e==="ar"?(t.add(sn(.07,.1,.46,"#3a4252",0,0,-.1)),t.add(sn(.035,.035,.26,"#232833",0,.015,-.46)),t.add(sn(.06,.11,.2,"#2b3140",0,-.02,.2)),t.add(sn(.05,.15,.07,"#ff7a4b",0,-.12,-.02)),t.add(sn(.05,.05,.05,"#232833",0,.075,-.2)),t.add(sn(.07,.07,.07,wl,0,-.1,-.3)),t.add(sn(.07,.09,.07,wl,0,-.1,.1)),t.userData.muzzle=new F(0,.015,-.62)):e==="sniper"?(t.add(sn(.06,.09,.56,"#2f4a46",0,0,-.05)),t.add(sn(.032,.032,.62,"#1d2b29",0,.015,-.62)),t.add(sn(.06,.1,.24,"#243835",0,-.025,.28)),t.add(sn(.055,.055,.26,"#6fd0c4",0,.085,-.08)),t.add(sn(.07,.07,.07,wl,0,-.08,-.32)),t.add(sn(.07,.09,.07,wl,0,-.1,.12)),t.userData.muzzle=new F(0,.015,-.95)):(t.add(sn(.075,.095,.4,"#5a3d2b",0,0,.05)),t.add(sn(.045,.045,.6,"#2b2f38",0,.02,-.4)),t.add(sn(.06,.05,.2,"#2b2f38",0,-.035,-.32)),t.add(sn(.08,.06,.16,"#a06a3c",0,-.045,-.25)),t.add(sn(.07,.07,.07,wl,0,-.045,-.25)),t.add(sn(.07,.09,.07,wl,0,-.1,.15)),t.userData.muzzle=new F(0,.02,-.72)),t}var jU,sn,wl,tL,vp,VT=Fe(()=>{Ki();jU=e=>new Ir({color:e}),sn=(e,t,n,i,s=0,a=0,r=0)=>{let o=new Ie(new Tn(e,t,n),jU(i));return o.position.set(s,a,r),o},wl="#e8b48a";tL={ar:[.2,-.2,-.38],sniper:[.2,-.2,-.3],shotgun:[.2,-.2,-.36]},vp=class{constructor(){this.scene=new Lr,this.camera=new fn(65,1,.01,10),this.scene.add(new zr("#ffffff",1.6));let t=new Pr("#fff4e0",1.8);t.position.set(-1,2,1),this.scene.add(t),this.root=new bn,this.scene.add(this.root),this.guns={};for(let s of["ar","sniper","shotgun"]){let a=$U(s);a.visible=!1,this.root.add(a),this.guns[s]=a}this.flash=new bn;let n=new jn({color:"#ffd27a",transparent:!0,opacity:.95,blending:ou,depthWrite:!1});this.flash.add(new Ie(new Tn(.16,.16,.03),n));let i=new Ie(new Tn(.03,.03,.2),n);this.flash.add(i),this.flash.visible=!1,this.root.add(this.flash),this.id="ar",this.guns.ar.visible=!0,this.kickZ=0,this.kickV=0,this.kickRot=0,this.kickRotV=0,this.flashT=0,this.sx=0,this.sy=0,this.bob=0,this.drop=0,this.reloadAnim=0,this.hidden=!1}setWeapon(t){this.guns[this.id].visible=!1,this.id=t,this.guns[t].visible=!0,this.drop=1}fire(t=1,n=1){this.kickV+=1.6*t,this.kickRotV+=3.2*t,this.flashT=.045;let i=this.guns[this.id].userData.muzzle;this.flash.position.copy(i),this.flash.scale.setScalar(n*(.8+Math.random()*.5)),this.flash.rotation.z=Math.random()*3}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}update(t,n,i,s,a,r,o){this.kickV+=(-this.kickZ*220-this.kickV*22)*t,this.kickZ+=this.kickV*t,this.kickRotV+=(-this.kickRot*220-this.kickRotV*22)*t,this.kickRot+=this.kickRotV*t,this.flashT-=t,this.flash.visible=this.flashT>0,this.drop=Math.max(0,this.drop-t*4.5),this.sx+=(-n*9e-4-this.sx)*Math.min(1,t*10),this.sy+=(i*9e-4-this.sy)*Math.min(1,t*10),this.sx=Math.max(-.05,Math.min(.05,this.sx)),this.sy=Math.max(-.05,Math.min(.05,this.sy)),a&&!r&&(this.bob+=t*s*1.15);let l=a&&!r?Math.min(1,s/9):0,c=Math.sin(this.bob)*.008*l,h=Math.abs(Math.cos(this.bob))*.01*l,p=tL[this.id],u=o>0?Math.sin(Math.min(1,o)*Math.PI):0;this.root.position.set(p[0]+this.sx+c,p[1]+this.sy+h-this.drop*.35-u*.12,p[2]+this.kickZ*.045),this.root.rotation.set(this.kickRot*.035+u*.5+this.drop*.6,u*.25+this.sx*1.2,this.sx*2+(r?.12:0)),this.root.visible=!this.hidden}}});function GT(e,t){let n=[],a=(x,m,f)=>{for(let g of e.boxes)if(x+.8>g.min[0]&&x-.8<g.max[0]&&f+.8>g.min[2]&&f-.8<g.max[2]&&m+1.8>g.min[1]+.05&&m<g.max[1]-.05)return!0;return!1},r=(x,m)=>{for(let f of e.ramps){let g=Math.min(f.x1,Math.max(f.x0,x)),b=Math.min(f.z1,Math.max(f.z0,m));if(Math.hypot(g-x,b-m)<1&&Gr(f,g,b)>.3)return!0}return!1},o=(x,m,f,g=-1,b=0,_=!1)=>n.push({x,y:m,z:f,ramp:g,idx:b,end:_,edges:[]}),l=e.size;for(let x=-l+2;x<=l-2;x+=4)for(let m=-l+2;m<=l-2;m+=4)!a(x,0,m)&&!r(x,m)&&o(x,0,m);for(let x of e.boxes){let m=x.max[1];if(m<2.9||m>4.6||x.min[1]>.1&&m-x.min[1]<.3)continue;let f=x.max[0]-x.min[0],g=x.max[2]-x.min[2];if(f<3||g<3||x.min[1]<.2&&m-x.min[1]>5)continue;let b=Math.max(1,Math.round((f-1.6)/2.5)),_=Math.max(1,Math.round((g-1.6)/2.5));for(let M=0;M<=b;M++)for(let T=0;T<=_;T++){let A=b?x.min[0]+.8+(f-1.6)*(M/b):(x.min[0]+x.max[0])/2,y=_?x.min[2]+.8+(g-1.6)*(T/_):(x.min[2]+x.max[2])/2;a(A,m,y)||n.some(w=>Math.abs(w.y-m)<.1&&Math.hypot(w.x-A,w.z-y)<1.5)||o(A,m,y)}}e.ramps.forEach((x,m)=>{let f=x.axis==="x"?x.x1-x.x0:x.z1-x.z0,g=[];for(let T=.5;T<f-.5;T+=2.4)g.push(T);g.push(f-.5);let b=(x.x0+x.x1)/2,_=(x.z0+x.z1)/2,M=g.map(T=>{let A=x.dir>0?T:f-T,y=x.axis==="x"?x.x0+(x.dir>0?T:f-T):b,w=x.axis==="z"?x.z0+(x.dir>0?T:f-T):_;return{x:y,z:w,along:A}});M.sort((T,A)=>Gr(x,T.x,T.z)-Gr(x,A.x,A.z)),M.forEach((T,A)=>o(T.x,Gr(x,T.x,T.z),T.z,m,A,A===0||A===M.length-1))});let c=new F,h=new F,p=(x,m)=>{for(let f of[-.4,0,.4]){let g=m.x-x.x,b=m.z-x.z,_=Math.hypot(g,b)||1,M=-b/_*f,T=g/_*f;if(c.set(x.x+M,x.y+.6,x.z+T),h.set(m.x+M,m.y+.6,m.z+T),!t.los(c,h))return!1}return!0},u=(x,m,f,g)=>{x.edges.push({to:m,cost:f}),g||m.edges.push({to:x,cost:f})};for(let x=0;x<n.length;x++)for(let m=x+1;m<n.length;m++){let f=n[x],g=n[m],b=Math.hypot(f.x-g.x,f.z-g.z),_=g.y-f.y;if(!(b>6.5)){if(f.ramp>=0&&g.ramp>=0){f.ramp===g.ramp&&Math.abs(f.idx-g.idx)===1&&u(f,g,b+Math.abs(_));continue}if(f.ramp>=0||g.ramp>=0){if(!(f.ramp>=0?f:g).end||b>4.6||Math.abs(_)>1)continue;p(f,g)&&u(f,g,b+Math.abs(_));continue}if(Math.abs(_)<.5)p(f,g)&&u(f,g,b);else if(Math.abs(_)>=1&&b<=6){let M=_<0?f:g,T=_<0?g:f;p(M,T)&&u(M,T,b+3*Math.abs(_),!0)}}}function d(x,m,f){let g=null,b=1/0;for(let _ of n){let M=(_.x-x)**2+(_.z-f)**2+((_.y-m)*3)**2;M<b&&(b=M,g=_)}return g}function v(x,m){if(!x||!m)return null;if(x===m)return[m];let f=new Map([[x,0]]),g=new Map,b=[x],_=new Set,M=new Map([[x,Math.hypot(x.x-m.x,x.z-m.z)]]);for(;b.length;){let T=0;for(let y=1;y<b.length;y++)M.get(b[y])<M.get(b[T])&&(T=y);let A=b.splice(T,1)[0];if(A===m){let y=[A],w=A;for(;g.has(w);)w=g.get(w),y.push(w);return y.reverse()}_.add(A);for(let y of A.edges){if(_.has(y.to))continue;let w=f.get(A)+y.cost;(!f.has(y.to)||w<f.get(y.to))&&(f.set(y.to,w),g.set(y.to,A),M.set(y.to,w+Math.hypot(y.to.x-m.x,y.to.z-m.z)+Math.abs(y.to.y-m.y)),b.includes(y.to)||b.push(y.to))}}return null}return{nodes:n,nearest:d,path:v}}var kT=Fe(()=>{Ki();hp()});function eL(){let e=[];for(let t=0;t<40;t++){let n=.0085-Math.min(t,20)*17e-5,i=.0035*Math.sin(t*.55)*(t<6?.3:1)+(t>14?.0012*Math.sin(t*1.9):0);e.push([n,i])}return e}var pn,Cl,Rl=Fe(()=>{pn={ar:{id:"ar",name:"AR-9",slot:1,auto:!0,interval:.1,dmg:18,headMult:1.8,mag:30,reserve:120,reload:1.7,pellets:1,spread:.004,moveSpread:.014,range:150,recoil:eL(),tracer:"#ffe7a0",tracerWidth:.025,tracerLife:.07,flash:1},sniper:{id:"sniper",name:"LONGBOW",slot:2,auto:!1,interval:1.25,dmg:75,headMult:2.1,mag:5,reserve:15,reload:2.3,pellets:1,spread:.07,scopedSpread:3e-4,moveSpread:.02,range:300,scopeFov:22,scopeSens:.3,recoil:[[.035,.004]],tracer:"#9fe8ff",tracerWidth:.05,tracerLife:.18,flash:1.5},shotgun:{id:"shotgun",name:"BOOMSTICK",slot:3,auto:!1,interval:.8,dmg:12,headMult:1.5,mag:6,reserve:30,reload:2.1,pellets:9,spread:.05,moveSpread:.01,range:60,falloff:{start:7,end:24,min:.25},recoil:[[.03,.006]],tracer:"#ffd28a",tracerWidth:.018,tracerLife:.06,flash:1.6}},Cl=class{constructor(){this.reset()}reset(){this.ammo={},this.reserve={};for(let t in pn)this.ammo[t]=pn[t].mag,this.reserve[t]=pn[t].reserve;this.cur="ar",this.cd=0,this.reloadT=0,this.switchT=0,this.shot=0,this.idle=0}get w(){return pn[this.cur]}select(t){return t===this.cur?!1:(this.cur=t,this.switchT=.28,this.reloadT=0,this.shot=0,!0)}reload(){let t=this.w;return this.reloadT>0||this.ammo[t.id]>=t.mag||this.reserve[t.id]<=0?!1:(this.reloadT=t.reload,!0)}update(t){if(this.cd=Math.max(0,this.cd-t),this.switchT=Math.max(0,this.switchT-t),this.idle+=t,this.idle>.3&&(this.shot=0),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)){this.reloadT=0;let n=this.w,i=Math.min(n.mag-this.ammo[n.id],this.reserve[n.id]);return this.ammo[n.id]+=i,this.reserve[n.id]-=i,!0}return!1}canFire(){return this.cd<=0&&this.switchT<=0&&this.reloadT<=0&&this.ammo[this.cur]>0}consume(){return this.ammo[this.cur]--,this.cd=this.w.interval,this.idle=0,this.shot++}}});var xp,XT,WT,qT,ny,nL,iL,yp,_p,sL,Nl,iy=Fe(()=>{Ki();fp();Qa();Rl();xp={easy:{react:.7,aim:7,dmg:.55,fire:.6,turn:4.5},normal:{react:.42,aim:3.8,dmg:.75,fire:.8,turn:7},hard:{react:.2,aim:1.7,dmg:1,fire:1,turn:12}},XT=["Blaze","Pixel","Rook","Nova","Echo","Vex","Dash"],WT=["#e0644a","#4b8bd9","#5fb36b","#d9a441","#9b7be8","#3f9a8b","#e86fa8"],qT=e=>XT[e%XT.length],ny=e=>WT[e%WT.length],nL=Math.cos(1.2),iL=new F,yp=new F,_p=class{constructor(t,n){this.f=t,this.ctx=n,this.body=t.body,this.path=null,this.pi=0,this.target=null,this.lastKnown=null,this.lostT=99,this.seenT=0,this.react=0,this.thinkT=Math.random()*.15,this.fireCd=.3,this.burst=0,this.pause=0,this.strafeDir=Math.random()<.5?1:-1,this.strafeT=.5+Math.random(),this.errYaw=0,this.errPitch=0,this.errT=0,this.stuckT=0,this.stuckRef=null,this.stuckCheck=1,this.weapon="ar",this.hurtBy=null,this.hurtT=99,this.pathT=0,this.wantMove=!1,this.visible=!1,this.jumpHeld=!1}reset(){this.path=null,this.target=null,this.lastKnown=null,this.lostT=99,this.react=0,this.fireCd=.4,this.stuckT=0,this.hurtBy=null,this.hurtT=99}onHurt(t){this.hurtBy=t,this.hurtT=0,!this.target&&t&&t.alive&&(this.lastKnown={x:t.body.pos.x,y:t.body.pos.y,z:t.body.pos.z},this.lostT=0)}eye(){return iL.set(this.body.pos.x,this.body.pos.y+this.body.eye,this.body.pos.z)}pickTarget(t){let{combat:n}=this.ctx,i=this.body.pos,s=new F(i.x,i.y+this.body.eye,i.z),a=-Math.sin(this.body.yaw),r=-Math.cos(this.body.yaw),o=null,l=1e9;for(let c of t){if(c===this.f||!c.alive)continue;let h=c.body.pos,p=h.x-i.x,u=h.z-i.z,d=h.y-i.y,v=Math.hypot(p,u,d);v>75||v>=l||(p*a+u*r)/(Math.hypot(p,u)||1)<nL&&v>9||(yp.set(h.x,h.y+1.15,h.z),!(!n.los(s,yp)&&(yp.set(h.x,h.y+c.body.height-.15,h.z),!n.los(s,yp)))&&(o=c,l=v))}return o}chooseGoal(){let{nav:t}=this.ctx,n=this.body.pos,i;if(this.lastKnown&&this.lostT<6)i=t.nearest(this.lastKnown.x,this.lastKnown.y,this.lastKnown.z);else{let a=t.nodes.filter(r=>Math.hypot(r.x-n.x,r.z-n.z)>14);i=a[Math.random()*a.length|0]||t.nodes[0]}let s=t.nearest(n.x,n.y,n.z);this.path=t.path(s,i),this.pi=0,this.path&&this.path.length>1&&(this.pi=1)}update(t,n,i){let{combat:s,match:a}=this.ctx,r=this.body,o=r.pos;if(this.hurtT+=t,this.lostT+=t,this.fireCd-=t,this.pause-=t,this.strafeT-=t,this.pathT+=t,this.errT-=t,this.thinkT-=t,this.thinkT<=0){this.thinkT=.14;let M=this.pickTarget(n);M&&M!==this.target&&(this.react=i.react*(.8+Math.random()*.5),this.seenT=0),M?(this.target=M,this.lostT=0):this.target&&this.lostT>.4&&(this.target=null),this.visible=!!M}if(this.target&&!this.target.alive&&(this.target=null,this.visible=!1),this.target&&this.visible){let M=this.target.body.pos;this.lastKnown={x:M.x,y:M.y,z:M.z},this.react-=t,this.seenT+=t}let l=this.target,c=r.yaw,h=0,p=0;if(l&&this.visible){let M=l.body.pos,T=this.weapon==="sniper"?l.body.height-.15:l.body.height*.68,A=M.x-o.x,y=M.z-o.z,w=M.y+T-(o.y+r.eye),C=Math.hypot(A,y);if(p=Math.hypot(C,w),this.errT<=0){this.errT=.35;let N=Math.max(.55,1-this.seenT*.25),U=i.aim*Math.PI/180*N*(1+Math.min(1,r.hSpeed/9)*.5);this.errYaw=(Math.random()-.5)*2*U,this.errPitch=(Math.random()-.5)*2*U*.7}c=Math.atan2(-A,-y)+this.errYaw,h=Math.atan2(w,C)+this.errPitch}else if(this.path&&this.pi<this.path.length){let M=this.path[this.pi];c=Math.atan2(-(M.x-o.x),-(M.z-o.z)),h=0}else this.lastKnown&&this.lostT<3&&(c=Math.atan2(-(this.lastKnown.x-o.x),-(this.lastKnown.z-o.z)));let u=c-r.yaw;u=Math.atan2(Math.sin(u),Math.cos(u));let d=i.turn*t;r.yaw+=Math.max(-d,Math.min(d,u)),r.pitch+=Math.max(-d,Math.min(d,h-r.pitch));let v=0,x=0,m=!1,f=l&&this.visible;if(f){let M=l.body.pos.x-o.x,T=l.body.pos.z-o.z,A=Math.hypot(M,T)||1,y=M/A,w=T/A;this.strafeT<=0&&(this.strafeT=.5+Math.random()*1,Math.random()<.7&&(this.strafeDir*=-1));let C=0;p>26?C=1:p<6&&(C=-1),v=y*C+-w*this.strafeDir*.9,x=w*C+y*this.strafeDir*.9,p>40&&this.weapon==="sniper"&&(v=0,x=0),Math.random()<t*.35&&i.react<.3&&(m=!0),this.path=null}else if((!this.path||this.pi>=this.path.length||this.pathT>8)&&(this.chooseGoal(),this.pathT=0),this.path&&this.pi<this.path.length){let M=this.path[this.pi],T=M.x-o.x,A=M.z-o.z,y=Math.hypot(T,A);y<1.1&&Math.abs(M.y-o.y)<1.8?this.pi++:(v=T/(y||1),x=A/(y||1)),r.onGround&&Math.abs(M.y-o.y)>3&&M.y>o.y&&(this.path=null)}this.wantMove=v!==0||x!==0,this.stuckCheck-=t,this.stuckCheck<=0&&(this.stuckCheck=.5,this.wantMove&&this.stuckRef&&Math.hypot(o.x-this.stuckRef.x,o.z-this.stuckRef.z)<.7?(this.stuckT+=.5,this.stuckT>=.5&&(m=!0),this.stuckT>=1.5&&(this.stuckT=0,this.path=null,this.strafeDir*=-1,this.lastKnown=null)):this.stuckT=0,this.stuckRef={x:o.x,z:o.z});let g=Math.sin(r.yaw),b=Math.cos(r.yaw),_={fwd:0,strafe:0,jump:m,crouch:!1};if(this.wantMove){let M=Math.hypot(v,x)||1;v/=M,x/=M,_.fwd=-(v*g+x*b),_.strafe=v*b-x*g}if(r.step(t,_),r.events.length=0,f){let M=p<9?"shotgun":p>38?"sniper":"ar";if(M!==this.weapon&&(this.weapon=M,this.fireCd=Math.max(this.fireCd,.35)),this.react<=0&&this.fireCd<=0&&this.pause<=0){let T=pn[this.weapon];Math.abs(u)<.12&&(a.botShoot(this.f,this.weapon,i),this.fireCd=T.interval/i.fire*(T.auto?1:1.1),T.auto&&(this.burst++,this.burst>=3+(Math.random()*4|0)&&(this.burst=0,this.pause=.25+Math.random()*.4)))}}else this.burst=0}},sL={box:new Tn(1,1,1)},Nl=class{constructor(t){this.group=new bn,this.group.rotation.order="YXZ";let n=(a,r,o,l,c,h,p,u=0)=>{let d=new Ie(sL.box,new Ir({color:l}));return d.scale.set(a,r,o),d.position.set(c,h,p),d},i="#2a2f3d",s="#e8b48a";this.legL=new bn,this.legL.position.set(-.14,.8,0),this.legL.add(n(.22,.8,.24,i,0,-.4,0)),this.legR=new bn,this.legR.position.set(.14,.8,0),this.legR.add(n(.22,.8,.24,i,0,-.4,0)),this.torso=n(.62,.68,.34,t,0,1.12,0),this.head=new bn,this.head.position.set(0,1.62,0),this.head.add(n(.34,.34,.34,s,0,0,0)),this.head.add(n(.36,.1,.36,"#1b1f2a",0,.15,0)),this.armL=n(.16,.6,.18,t,-.4,1.12,0),this.armR=new bn,this.armR.position.set(.4,1.38,0),this.armR.add(n(.16,.18,.55,t,0,-.06,-.22)),this.armR.add(n(.08,.1,.5,"#1b1f2a",0,-.02,-.55)),this.group.add(this.legL,this.legR,this.torso,this.head,this.armL,this.armR),this.phase=0,this.fall=0,this.materials=[],this.group.traverse(a=>{a.material&&this.materials.push(a.material)})}update(t,n,i,s){let a=this.group;if(i){this.fall=Math.max(0,this.fall-t*3),this.phase+=t*s*1.1;let r=Math.min(1,s/6)*.9;this.legL.rotation.x=Math.sin(this.phase)*r,this.legR.rotation.x=-Math.sin(this.phase)*r,this.armL.rotation.x=-Math.sin(this.phase)*r*.7,this.head.rotation.x=n.pitch*.8,this.armR.rotation.x=n.pitch}else this.fall=Math.min(1,this.fall+t*2.5);a.rotation.set(-this.fall*1.45,n.yaw,0)}}});var $a,aL,rL,oL,Sp,sy,ay,YT,Gz,ry,Dl,bp=Fe(()=>{Ki();Qa();fp();Rl();iy();bu();$a=240,aL=2,rL=5,oL=At.halfWidth+.08,Sp=new F,sy=new F,ay=new F,YT=new F,Gz=new F,ry=new F(0,1,0),Dl=class{constructor({world:t,combat:n,nav:i,effects:s,scene:a,playerBody:r,events:o}){Object.assign(this,{world:t,combat:n,nav:i,effects:s,scene:a,events:o}),this.playerBody=r,this.fighters=[],this.state="idle",this.time=$a,this.clock=0,this.feed=[],this.diff=xp.normal,this.views=[],this.player=null}start(t){this.diff=xp[t]||xp.normal;for(let i of this.views)this.scene.remove(i.group);this.views=[],this.fighters=[],this.feed=[],this.time=$a,this.clock=0;let n=(i,s,a,r)=>({name:i,color:s,isPlayer:a,body:r,hp:100,alive:!1,kills:0,deaths:0,respawnAt:0,invuln:0,lastHurt:-99,loadout:new Cl,bot:null,view:null,id:this.fighters.length});this.player=n("You","#ffffff",!0,this.playerBody),this.fighters.push(this.player);for(let i=0;i<rL;i++){let s=new Al(this.world),a=n(qT(i),ny(i),!1,s);a.bot=new _p(a,{world:this.world,combat:this.combat,nav:this.nav,match:this}),a.view=new Nl(ny(i)),this.scene.add(a.view.group),this.views.push(a.view),this.fighters.push(a)}for(let i of this.fighters)this.spawn(i,!0);this.state="running"}stop(){for(let t of this.views)this.scene.remove(t.group);this.views=[],this.fighters=[],this.state="idle"}spawnPoint(t){let n=null,i=-1;for(let s of this.world.spawns){let a=1e9;for(let r of this.fighters){if(r===t||!r.alive)continue;let o=r.body.pos;a=Math.min(a,Math.hypot(o.x-s[0],o.z-s[2],(o.y-s[1])*2))}a+=Math.random()*.5,a>i&&(i=a,n=s)}return n}spawn(t,n=!1){let i=this.spawnPoint(t),s=Math.atan2(i[0],i[2]);t.body.teleport(i[0],i[1]+.05,i[2],s),t.hp=100,t.alive=!0,t.invuln=1.5,t.loadout.reset(),t.lastHurt=this.clock,t.bot&&t.bot.reset(),t.isPlayer&&this.events.onPlayerSpawn?.()}damage(t,n,i,s,a,r){return!t.alive||t.invuln>0||this.state!=="running"?!1:(t.hp-=n,t.lastHurt=this.clock,i&&i!==t&&(i.isPlayer&&this.events.onHit?.({head:a,kill:t.hp<=0,amount:n,point:r}),t.bot&&t.bot.onHurt(i)),t.isPlayer&&this.events.onPlayerHurt?.(i?i.body.pos:null,n),t.hp<=0?(this.kill(t,i,s,a),!0):!1)}kill(t,n,i,s){t.alive=!1,t.hp=0,t.deaths++,t.respawnAt=this.clock+aL,n&&n!==t&&n.kills++,this.feed.push({t:this.clock,killer:n?n.name:"",victim:t.name,weapon:i,head:s,mine:n?.isPlayer,died:t.isPlayer,color:n?.color,vcolor:t.color}),this.feed.length>6&&this.feed.shift(),this.events.onFeed?.(this.feed),t.isPlayer&&this.events.onPlayerDeath?.(n),n?.isPlayer&&Be.kill();let a=t.body.pos;this.effects.burst(Sp.set(a.x,a.y+1,a.z),ry,t.color,18,5,.14)}shoot(t,n,i,s,a,r,o){let l=pn[n];ay.crossVectors(s,ry).normalize(),YT.crossVectors(ay,s);let c=new Map,h=[];for(let p=0;p<l.pellets;p++){let u=Math.random()*Math.PI*2,d=a*Math.sqrt(Math.random());sy.copy(s).addScaledVector(ay,Math.cos(u)*d).addScaledVector(YT,Math.sin(u)*d).normalize();let v=this.combat.trace(i,sy,l.range,t,this.fighters,oL),x=v?v.point.clone():i.clone().addScaledVector(sy,90);if(this.effects.tracer(o,x,l.tracer,l.tracerWidth,l.tracerLife),h.push([Math.round(x.x*100)/100,Math.round(x.y*100)/100,Math.round(x.z*100)/100,v&&v.kind==="world"?1:0]),!!v)if(v.kind==="world")this.effects.burst(v.point,v.normal,"#cfd6e4",l.pellets>1?3:6,3.5,.07);else{let m=l.dmg*(v.head?l.headMult:1)*r;if(l.falloff){let g=l.falloff,b=Math.min(1,Math.max(0,(v.dist-g.start)/(g.end-g.start)));m*=1-b*(1-g.min)}this.effects.burst(v.point,v.normal,"#e23b3b",7,4,.08);let f=c.get(v.fighter)||{dmg:0,head:!1,point:v.point.clone()};f.dmg+=m,f.head=f.head||v.head,f.point.copy(v.point),c.set(v.fighter,f)}}for(let[p,u]of c)this.damage(p,u.dmg,t,n,u.head,u.point);return h}botShoot(t,n,i){let s=t.body,a=pn[n];Sp.set(s.pos.x,s.pos.y+s.eye,s.pos.z);let r=Math.cos(s.pitch),o=new F(-Math.sin(s.yaw)*r,Math.sin(s.pitch),-Math.cos(s.yaw)*r),l=(n==="sniper"?.004:a.spread)+s.hSpeed/9*a.moveSpread*.7,c=new F().crossVectors(o,ry).normalize(),h=Sp.clone().addScaledVector(o,.9).addScaledVector(c,.35);h.y-=.25,this.shoot(t,n,Sp.clone(),o,l,i.dmg,h);let p=this.playerBody.pos,u=s.pos.x-p.x,d=s.pos.z-p.z,v=Math.hypot(u,d,s.pos.y-p.y),x=Math.max(0,1-v/80);if(x>.02){let m=this.playerBody.yaw,f=(u*Math.cos(m)-d*Math.sin(m))/(v||1);Be.shot(n,x*x*.8,Math.max(-1,Math.min(1,f)))}}update(t){if(this.state==="running"){this.clock+=t,this.time-=t;for(let n of this.fighters)n.invuln=Math.max(0,n.invuln-t),n.alive?(n.hp<100&&this.clock-n.lastHurt>4&&(n.hp=Math.min(100,n.hp+18*t)),n.bot&&n.bot.update(t,this.fighters,this.diff)):(n.bot&&(n.body.step(t,{fwd:0,strafe:0,jump:!1,crouch:!1}),n.body.events.length=0),this.clock>=n.respawnAt&&this.time>0&&this.spawn(n));this.time<=0&&(this.time=0,this.state="ended",this.events.onEnd?.(this.ranking()))}}ranking(){return[...this.fighters].sort((t,n)=>n.kills-t.kills||t.deaths-n.deaths)}renderViews(t,n){for(let i of this.fighters){if(!i.view)continue;let s=i.body,a=s.prev,r=s.pos;i.view.group.position.set(a.x+(r.x-a.x)*n,a.y+(r.y-a.y)*n,a.z+(r.z-a.z)*n),i.view.update(t,s,i.alive,s.onGround?s.hSpeed:0),i.view.group.visible=i.alive||i.view.fall<1}}}});async function nE(e){let t=lL+e,n=fL?await fetch(t):await fetch("/api/proxy?url="+encodeURIComponent(t),{headers:ly?{Authorization:"Bearer "+ly}:{}});if(!n.ok)throw new Error("signal "+n.status);return n.text()}async function oy(e,t){let n=await nE(`${e}/json?poll=1&since=${t}`),i=[];for(let s of n.split(`
`))if(s.trim())try{let a=JSON.parse(s);if(a.event!=="message")continue;let r=JSON.parse(a.message);r&&typeof r=="object"&&i.push({id:a.id,time:a.time,body:r})}catch{}return i}async function QT(e){let t=e.sdp.split(`\r
`).filter(i=>!/^a=candidate:.* (\S+\.local) /.test(i)&&!/^a=candidate:.* tcp /.test(i)).join(`\r
`);if(typeof CompressionStream>"u")return{y:e.type,s:t};let n=await new Response(new Blob([t]).stream().pipeThrough(new CompressionStream("deflate-raw"))).arrayBuffer();return{y:e.type,z:dL(new Uint8Array(n))}}async function jT(e){if(e.s)return{type:e.y,sdp:e.s};let t=new Blob([pL(e.z)]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return{type:e.y,sdp:await new Response(t).text()}}function $T(e,t=4e3){return e.iceGatheringState==="complete"?Promise.resolve():new Promise(n=>{let i=setTimeout(n,t);e.addEventListener("icegatheringstatechange",()=>{e.iceGatheringState==="complete"&&(clearTimeout(i),n())})})}function tE(e,t){let n={onData:null,onClose:null,open:()=>t.readyState==="open"},i=!1,s=()=>{if(!i){i=!0;try{e.close()}catch{}n.onClose?.()}};return t.onmessage=a=>{let r;try{r=JSON.parse(a.data)}catch{return}n.onData?.(r)},t.onclose=s,e.addEventListener("connectionstatechange",()=>{["failed","closed"].includes(e.connectionState)&&s()}),n.send=a=>{t.readyState==="open"&&t.send(JSON.stringify(a))},n.close=s,n}function cy(){return typeof RTCPeerConnection<"u"}function iE(e,t={}){let n=Math.max(2,t.max|0||8),i=String(t.name||"Player").slice(0,24),s=cL+String(e).replace(/[^A-Za-z0-9_-]/g,""),a={message:new Set,presence:new Set,status:new Set},r={status:"connecting",you:null,members:[],error:null},o=!1,l=!1,c=null,h=new Map,p=0,u=null,d=mL(),v=(N,U)=>{for(let I of[...N])try{I(U)}catch{}},x=(N,U=null)=>{r.status===N&&r.error===U||(r.status=N,r.error=U,v(a.status,N))},m=N=>{r.members=N,v(a.presence,N)},f=N=>U=>typeof U!="function"?()=>{}:(N.add(U),()=>N.delete(U)),g=()=>{clearTimeout(c),c=null},b=N=>{if(!o){g();try{u?.close()}catch{}x("error",N)}},_=()=>{for(let N of h.values())N.send({t:"presence",members:r.members});v(a.presence,r.members)},M=(N,U,I)=>{let D=Array.isArray(I)&&I.length?I:null;for(let[H,L]of h)H!==N&&(!D||D.includes(H))&&L.send({t:"msg",from:N,data:U});N!==r.you.id&&(!D||D.includes(r.you.id))&&v(a.message,{from:N,data:U})},T=async N=>{if(r.members.length+p>=n){Tu(s,{k:"full",to:N.from}).catch(()=>{});return}p++;let U=new RTCPeerConnection({iceServers:ZT}),I=!1,D=()=>{I||(I=!0,p--)};setTimeout(D,KT),U.ondatachannel=H=>{let L=tE(U,H.channel),B=null;L.onData=Y=>{if(Y.t==="hello"&&!B){if(D(),r.members.length>=n){L.send({t:"full"}),setTimeout(L.close,300);return}B=N.from,h.set(B,L),r.members=[...r.members,{id:B,name:String(Y.name||"Player").slice(0,24)}],L.send({t:"welcome",you:r.members.at(-1),members:r.members}),_()}else Y.t==="send"&&B?M(B,Y.data,Y.to):Y.t==="sync"&&B&&L.send({t:"presence",members:r.members})},L.onClose=()=>{D(),!(!B||h.get(B)!==L)&&(h.delete(B),r.members=r.members.filter(Y=>Y.id!==B),o||_())}};try{await U.setRemoteDescription(await jT(N.sdp)),await U.setLocalDescription(await U.createAnswer()),await $T(U),await Tu(s,{k:"answer",to:N.from,sdp:await QT(U.localDescription)})}catch{D();try{U.close()}catch{}}},A=new Set,y=async N=>{if(o)return;let U=N;try{for(let I of await oy(s,N))U=I.id,!A.has(I.id)&&(A.add(I.id),I.body.k==="offer"&&I.body.host===d&&T(I.body))}catch{}c=setTimeout(()=>y(U),uL)},w=async N=>{l=!0,r.you={id:d,name:i};try{await Tu(s,{k:"host",peer:d,name:i})}catch{b("unavailable");return}o||(x("open"),m([r.you]),y(N))},C=async(N,U)=>{let I=new RTCPeerConnection({iceServers:ZT}),D=I.createDataChannel("room",{ordered:!0}),H=tE(I,D);u=H;let L=Date.now()+KT;H.onData=Y=>{Y.t==="welcome"?(g(),r.you=Y.you,x("open"),m(Y.members||[])):Y.t==="presence"?m(Y.members||[]):Y.t==="msg"?v(a.message,{from:Y.from,data:Y.data}):Y.t==="full"&&b("full")},H.onClose=()=>{!o&&r.status!=="error"&&b(r.status==="open"?"host-left":"unreachable")},D.onopen=()=>H.send({t:"hello",name:i});try{await I.setLocalDescription(await I.createOffer()),await $T(I),await Tu(s,{k:"offer",from:d,host:N,sdp:await QT(I.localDescription)})}catch{b("unavailable");return}let B=async Y=>{if(o||r.status==="open"||r.status==="error")return;if(Date.now()>L){b("unreachable");return}let W=Y;try{for(let K of await oy(s,Y)){W=K.id;let $=K.body;if($.to===d){if($.k==="full"){b("full");return}$.k==="answer"&&!I.remoteDescription&&await I.setRemoteDescription(await jT($.sdp))}}}catch{}c=setTimeout(()=>B(W),hL)};B(U)};return(async()=>{let N;try{N=await oy(s,`${JT}s`)}catch{b("unavailable");return}if(o)return;let U=N.at(-1)?.id||`${JT}s`,I=N.filter(L=>L.body.k==="host"),D=new Set(N.filter(L=>L.body.k==="bye").map(L=>L.body.peer)),H=I.filter(L=>!D.has(L.body.peer)).at(-1);H?C(H.body.peer,U):w(U)})(),Object.assign(r,{onMessage:f(a.message),onPresence:f(a.presence),onStatus:f(a.status),send(N,U){if(r.status!=="open")return!1;if(l)return M(r.you.id,N,U),!0;if(!u?.open())return!1;let I={t:"send",data:N};return Array.isArray(U)&&U.length&&(I.to=U),u.send(I),!0},sync(){return l?(v(a.presence,r.members),!0):!!u?.open()&&(u.send({t:"sync"}),!0)},close(){if(!o){if(o=!0,g(),l){Tu(s,{k:"bye",peer:d}).catch(()=>{});for(let N of h.values())N.close();h.clear()}u?.close(),r.you=null,r.members=[],x("closed")}}}),r}var lL,cL,ZT,uL,hL,KT,JT,ly,eE,fL,Tu,dL,pL,mL,uy=Fe(()=>{lL="https://ntfy.sh/",cL="blockstrike-v2-",ZT=[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],uL=4e3,hL=2500,KT=25e3,JT=1800,ly=null,eE=e=>{ly=e||null},fL=(()=>{try{return window.self===window.top}catch{return!1}})();Tu=(e,t)=>nE(`${e}/publish?message=${encodeURIComponent(JSON.stringify(t))}`);dL=e=>btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),pL=e=>Uint8Array.from(atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=>t.charCodeAt(0));mL=()=>Math.random().toString(36).slice(2,10)});var gL,aE,vL,yL,rE,sE,oE,fy,lE,_L,cE,uE,hE,fE,hy,Mp,Tp=Fe(()=>{Qa();uy();gL=4,aE=20,vL=110,yL={ar:0,sniper:1,shotgun:2},rE=["ar","sniper","shotgun"],sE="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",oE=()=>Array.from({length:4},()=>sE[Math.random()*sE.length|0]).join(""),fy=e=>String(e||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4),lE=()=>cy(),_L="https://mfehric.github.io/blockstrike/",cE=(()=>{try{return window.self===window.top}catch{return!1}})(),uE=()=>{try{return cE?new URL(location.href):document.referrer?new URL(document.referrer):null}catch{return null}},hE=()=>{let e=fy(uE()?.searchParams.get("room"));return e.length===4?e:""},fE=e=>{let t=uE();return cE?t?`${t.origin}${t.pathname}?room=${e}`:"":`${_L}?room=${e}`},hy=class{constructor(){this.buf=[],this.last=null}push(t){t.t=performance.now(),this.buf.push(t),this.last=t,this.buf.length>24&&this.buf.shift()}sample(t=performance.now()){let n=this.buf;if(!n.length)return null;let i=t-vL;if(i<=n[0].t)return n[0];for(let s=n.length-1;s>0;s--)if(n[s-1].t<=i){let a=n[s-1],r=n[s],o=Math.min(1,(i-a.t)/Math.max(1,r.t-a.t)),l=r.yaw-a.yaw;return l=Math.atan2(Math.sin(l),Math.cos(l)),{x:a.x+(r.x-a.x)*o,y:a.y+(r.y-a.y)*o,z:a.z+(r.z-a.z)*o,yaw:a.yaw+l*o,pitch:a.pitch+(r.pitch-a.pitch)*o,fl:r.fl,w:r.w,hp:r.hp}}return n[n.length-1]}},Mp=class{constructor({code:t,name:n,onEvent:i}){this.code=t,this.name=n,this.onEvent=i,this.room=null,this.status="connecting",this.you=null,this.members=[],this.tracks=new Map,this.names=new Map}connect(){if(!cy()){this.status="error",this.error="unavailable",this.onEvent("status","error");return}let t=iE(`bs-${this.code}`,{name:this.name,max:gL});this.room=t,t.onStatus(n=>{this.status=n,this.error=t.error,n==="open"&&(this.you=t.you),this.onEvent("status",n)}),t.onPresence(n=>{this.members=n;for(let i of n)this.names.set(i.id,i.name);for(let i of[...this.tracks.keys()])n.some(s=>s.id===i)||this.tracks.delete(i);this.onEvent("presence",n)}),t.onMessage(({from:n,data:i})=>this.handle(n,i))}get id(){return this.you?.id||null}get hostId(){return this.members[0]?.id||null}get isHost(){return!!this.id&&this.hostId===this.id}handle(t,n){if(!(!n||typeof n!="object"))switch(n.k){case"st":{let i=n.s;if(!Array.isArray(i)||i.length<8)return;let s=this.tracks.get(t);s||(s=new hy,this.tracks.set(t,s)),s.push({x:i[0],y:i[1],z:i[2],yaw:i[3],pitch:i[4],fl:i[5]|0,w:i[6]|0,hp:i[7]});break}default:this.onEvent("msg",{from:t,d:n})}}send(t,n){return this.room?.send(t,n)}sendState(t,n,i,s){let a=(t.crouched?1:0)|(t.sliding?2:0)|(n?4:0),r=o=>Math.round(o*100)/100;this.send({k:"st",s:[r(t.pos.x),r(t.pos.y),r(t.pos.z),r(t.yaw),r(t.pitch),a,yL[i]||0,Math.round(s)]})}close(){this.room?.close(),this.room=null}}});var Ep,ws,Wr,Ap,dy,dE=Fe(()=>{Ki();Qa();Rl();iy();bp();Tp();bu();Ep=["#e0644a","#4b8bd9","#5fb36b","#d9a441"],ws=new F,Wr=new F,Ap=class extends Dl{constructor(t){super(t),this.net=null,this.phase="lobby",this.stateAcc=0,this.syncAcc=0,this.byId=new Map,this.lastHit=new Map,this.ended=!1,this.hooks={}}join({code:t,name:n}){this.stop(),this.byId.clear(),this.lastHit.clear(),this.phase="lobby",this.ended=!1,this.net=new Mp({code:t,name:n,onEvent:(i,s)=>this.onNet(i,s)}),this.net.connect(),this.time=$a,this.clock=0,this.state="idle"}leave(){this.net?.close(),this.net=null,this.stop(),this.byId.clear(),this.phase="lobby"}ensureFighters(){let t=this.net;if(t?.id){(!this.player||!this.fighters.includes(this.player))&&(this.fighters=[],this.player=this.mk(t.you.name,"#ffffff",!0,this.playerBody),this.player.id=t.id,this.player.alive=!1,this.byId.set(t.id,this.player),this.fighters.push(this.player)),t.members.forEach((n,i)=>{if(n.id===t.id){this.player.color=Ep[i%4],this.player.name=n.name;return}let s=this.byId.get(n.id);if(!s){let a={pos:{x:0,y:0,z:0},prev:{x:0,y:0,z:0},vel:{x:0,y:0,z:0},yaw:0,pitch:0,height:At.standHeight,eye:At.standEye,hSpeed:0,onGround:!0,crouched:!1,sliding:!1,events:[]};s=this.mk(n.name,Ep[i%4],!1,a),s.remote=!0,s.mid=n.id,s.id=n.id,s.alive=!1,s.view=new Nl(Ep[i%4]),this.scene.add(s.view.group),this.views.push(s.view),this.byId.set(n.id,s),this.fighters.push(s)}s.name=n.name,s.color=Ep[i%4]});for(let[n,i]of[...this.byId])n!==t.id&&!t.members.some(s=>s.id===n)&&(this.byId.delete(n),this.fighters=this.fighters.filter(s=>s!==i),i.view&&(this.scene.remove(i.view.group),this.views=this.views.filter(s=>s!==i.view)))}}mk(t,n,i,s){return{name:t,color:n,isPlayer:i,body:s,hp:100,alive:!1,kills:0,deaths:0,respawnAt:0,invuln:0,lastHurt:-99,loadout:new Cl,bot:null,view:null,id:this.fighters.length+(i?0:1)}}onNet(t,n){if(t==="status"){this.hooks.onStatus?.(n);return}if(t==="presence"){this.ensureFighters(),this.hooks.onPresence?.(this.net.members);return}if(t!=="msg")return;let{from:i,d:s}=n,a=this.byId.get(i);switch(s.k){case"hello":break;case"sync":this.onSync(i,s);break;case"shot":this.onShot(a,s);break;case"hit":this.onHit(a,s);break;case"died":this.onDied(a,s);break}}onSync(t,n){if(t===this.net.hostId){if(typeof n.left=="number"&&(this.time=n.left),n.scores&&typeof n.scores=="object")for(let[i,s]of Object.entries(n.scores)){let a=this.byId.get(i);a&&Array.isArray(s)&&(a.kills=s[0]|0,a.deaths=s[1]|0)}n.phase!==this.phase&&this.setPhase(n.phase)}}setPhase(t){if(t!==this.phase){if(this.phase=t,this.ensureFighters(),t==="lobby"){this.ended=!1,this.state="idle",this.time=$a;for(let n of this.fighters)n.alive=!1,n.kills=0,n.deaths=0}else if(t==="running"){this.state="running",this.clock=0,this.ended=!1;for(let n of this.fighters)n.remote||(n.kills=0,n.deaths=0,this.spawn(n,!0))}else t==="ended"&&(this.state="ended",this.ended||(this.ended=!0,this.events.onEnd?.(this.ranking())));this.hooks.onPhase?.(t)}}startRound(){if(this.net?.isHost){for(let t of this.fighters)t.kills=0,t.deaths=0;this.time=$a,this.broadcastSync("running"),this.setPhase("running")}}backToLobby(){this.net?.isHost&&(this.broadcastSync("lobby"),this.setPhase("lobby"))}broadcastSync(t=this.phase){if(!this.net?.isHost)return;let n={};for(let[i,s]of this.byId)n[i]=[s.kills,s.deaths];this.net.send({k:"sync",phase:t,left:Math.round(this.time*10)/10,scores:n})}onShot(t,n){if(!t||!Array.isArray(n.e)||!Array.isArray(n.o))return;let i=pn[n.w];if(!i)return;ws.set(n.o[0],n.o[1],n.o[2]);for(let o of n.e.slice(0,12))Array.isArray(o)&&(Wr.set(o[0],o[1],o[2]),this.effects.tracer(ws,Wr,i.tracer,i.tracerWidth,i.tracerLife),o[3]&&this.effects.burst(Wr,new F(0,1,0),"#cfd6e4",4,3,.07));let s=this.playerBody.pos,a=Math.hypot(ws.x-s.x,ws.y-s.y,ws.z-s.z),r=Math.max(0,1-a/80);r>.02&&Be.shot(n.w,r*r*.8,Math.max(-1,Math.min(1,(ws.x-s.x)*Math.cos(this.playerBody.yaw)/(a||1))))}onHit(t,n){let i=this.player;if(!t||!i?.alive||i.invuln>0||this.phase!=="running"||n.v!==this.net.id)return;let s=pn[n.w];if(!s||!(n.d>0))return;let a=s.dmg*s.headMult*s.pellets*1.05;if(n.d>a)return;let r=this.net.tracks.get(t.mid)?.last,o=this.playerBody.pos;if(r&&(Math.hypot(r.x-o.x,r.y-o.y,r.z-o.z)>s.range+4||(ws.set(r.x,r.y+1.5,r.z),Wr.set(o.x,o.y+1.1,o.z),!this.combat.los(ws,Wr)&&(Wr.set(o.x,o.y+1.6,o.z),!this.combat.los(ws,Wr)))))return;let l=performance.now(),c=t.mid+n.w;l-(this.lastHit.get(c)||0)<s.interval*600||(this.lastHit.set(c,l),this.damage(i,n.d,t,n.w,!!n.h,null))}onDied(t,n){if(!t)return;let i=this.byId.get(n.by)||null;if(t.alive||t.hp>0){t.alive=!1,t.hp=0,t.deaths++,i&&i!==t&&i.kills++,this.feed.push({t:this.clock,killer:i?i.name:"",victim:t.name,weapon:n.w,head:!!n.h,mine:!!i?.isPlayer,died:!1,color:i?.color,vcolor:t.color}),this.feed.length>6&&this.feed.shift(),this.events.onFeed?.(this.feed),i?.isPlayer&&Be.kill();let s=t.body.pos;this.effects.burst(ws.set(s.x,s.y+1,s.z),new F(0,1,0),t.color,18,5,.14)}}damage(t,n,i,s,a,r){return!t.alive||t.invuln>0||this.phase!=="running"?!1:t.remote?(i?.isPlayer&&this.events.onHit?.({head:a,kill:t.hp-n<=0,amount:n,point:r}),t.hp=Math.max(1,t.hp-n),this.net.send({k:"hit",v:t.mid,d:Math.round(n*10)/10,w:s,h:a?1:0},[t.mid]),!1):super.damage(t,n,i,s,a,r)}kill(t,n,i,s){super.kill(t,n,i,s),t.isPlayer&&this.net?.send({k:"died",v:this.net.id,by:n?.mid||null,w:i,h:s?1:0})}announceShot(t,n,i){this.net?.send({k:"shot",w:t,o:[dy(n.x),dy(n.y),dy(n.z)],e:i})}update(t){if(!this.net||this.net.status!=="open")return;this.ensureFighters(),this.phase==="running"&&(this.clock+=t,this.time=Math.max(0,this.time-t));let n=this.player;n&&(n.invuln=Math.max(0,n.invuln-t),this.phase==="running"&&(n.alive&&n.hp<100&&this.clock-n.lastHurt>4&&(n.hp=Math.min(100,n.hp+18*t)),!n.alive&&this.clock>=n.respawnAt&&this.spawn(n)));for(let i of this.fighters){if(!i.remote)continue;let s=this.net.tracks.get(i.mid)?.sample();if(!s)continue;let a=i.body;a.prev.x=a.pos.x,a.prev.y=a.pos.y,a.prev.z=a.pos.z;let r=s.x-a.pos.x,o=s.z-a.pos.z;a.pos.x=s.x,a.pos.y=s.y,a.pos.z=s.z,a.yaw=s.yaw,a.pitch=s.pitch,a.crouched=!!(s.fl&1),a.sliding=!!(s.fl&2),a.height=a.crouched?At.crouchHeight:At.standHeight,a.hSpeed=Math.hypot(r,o)*60;let l=i.alive;i.alive=!!(s.fl&4),i.hp=s.hp,i.loadout.cur=rE[s.w]||"ar",i.alive&&!l&&(i.invuln=0)}this.stateAcc+=t,this.stateAcc>=1/aE&&(this.stateAcc=0,this.net.sendState(this.playerBody,n?.alive&&this.phase==="running",n?.loadout.cur||"ar",n?.hp??100)),this.syncAcc+=t,this.net.isHost&&this.syncAcc>=1&&(this.syncAcc=0,this.phase==="running"&&this.time<=0?(this.broadcastSync("ended"),this.setPhase("ended")):this.broadcastSync())}renderViews(t,n){for(let i of this.fighters){if(!i.view)continue;let s=i.body;i.view.group.position.set(s.pos.x,s.pos.y,s.pos.z),i.view.update(t,s,i.alive,i.alive?s.hSpeed:0),i.view.group.visible=this.phase==="running"&&(i.alive||i.view.fall<1)}}},dy=e=>Math.round(e*100)/100});var tr,xL,wp,pE=Fe(()=>{Ki();Qa();hp();fp();zT();bu();FT();HT();VT();kT();bp();dE();Rl();tr=1/At.tickRate,xL=.0022,wp=class{constructor(t,n){this.settings=n,this.renderer=new lp({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.dprMax=Math.min(window.devicePixelRatio||1,2),this.scale=Math.min(n.scale||1,1),this.curScale=this.scale,this.slowT=0,this.fastT=0,this.renderer.setPixelRatio(this.dprMax*this.curScale),this.scene=new Lr,this.scene.background=new Ht("#9fc4e8"),this.scene.fog=new Yc("#9fc4e8",45,120),this.camera=new fn(n.fov,1,.05,200),this.camera.rotation.order="YXZ",this.world=PT(),this.scene.add(this.world.mesh),this.addSky(),this.player=new Al(this.world);let i=this.world.spawns[0];this.player.teleport(i[0],i[1],i[2],-Math.PI/4),this.combat=new mp(this.world.mesh),this.nav=GT(this.world,this.combat),this.effects=new gp(this.scene),this.vm=new vp,this.scene.add(new zr("#ffffff",1.5));let s=new Pr("#fff2d8",1.6);s.position.set(-30,60,20),this.scene.add(s),this.renderer.autoClear=!1,this.hooks={},this.dmgNums=[],this.hitMarker={t:0,kind:"hit"},this.hurt={t:0,angle:0},this.scoped=!1,this.triggerHeld=!1,this.kickP=0,this.kickY=0,this.deadBlend=0,this.lookDX=0,this.lookDY=0;let a={onHit:r=>{Be.hit(r.head),this.hitMarker={t:.22,kind:r.kill?"kill":r.head?"head":"hit"},this.dmgNums.push({pos:r.point.clone(),text:String(Math.round(r.amount)),head:r.head,kill:r.kill,life:.9,max:.9}),this.dmgNums.length>14&&this.dmgNums.shift()},onPlayerHurt:(r,o)=>{if(this.hurt.t=1,r){let l=this.player.pos,c=Math.atan2(-(r.x-l.x),-(r.z-l.z));this.hurt.angle=c-this.player.yaw}Be.hurt()},onPlayerDeath:()=>{Be.die(),this.deadBlend=0},onPlayerSpawn:()=>{this.deadBlend=0,this.kickP=this.kickY=0,this.vm.setWeapon("ar")},onFeed:r=>this.hooks.onFeed?.(r),onEnd:r=>this.hooks.onEnd?.(r)};this.matchOpts={world:this.world,combat:this.combat,nav:this.nav,effects:this.effects,scene:this.scene,playerBody:this.player,events:a},this.botMatch=new Dl(this.matchOpts),this.match=this.botMatch,this.onlineMatch=null,this.input=new dp(t),this.active=!1,this.acc=0,this.last=0,this.raf=0,this.roll=0,this.dip=0,this.dipV=0,this.fov=n.fov,this.stepTimer=0,this.frames=0,this.fpsT=0,this.fps=0,this.onFrame=null,this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(t),this.canvas=t,this.resize(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}addSky(){let t=new Tn(1,1,1),n=new jn({color:"#ffffff",fog:!1}),i=14,s=new Or(t,n,i),a=new tn;for(let r=0;r<i;r++)a.position.set((Math.random()-.5)*220,38+Math.random()*14,(Math.random()-.5)*220),a.scale.set(10+Math.random()*18,2+Math.random()*2,6+Math.random()*10),a.updateMatrix(),s.setMatrixAt(r,a.matrix);this.scene.add(s)}resize(){let t=this.canvas.clientWidth||800,n=this.canvas.clientHeight||600;this.cssW=t,this.cssH=n,this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.vm?.resize(t/n)}startOnline(t,n){return this.leaveOnline(),this.onlineMatch=new Ap(this.matchOpts),this.match=this.onlineMatch,this.dmgNums.length=0,this.hurt.t=0,this.triggerHeld=!1,this.onlineMatch.join({code:t,name:n}),this.onlineMatch}leaveOnline(){this.onlineMatch&&(this.onlineMatch.leave(),this.onlineMatch=null),this.match=this.botMatch,this.scoped=!1}startMatch(t){this.leaveOnline(),this.match.start(t),this.dmgNums.length=0,this.hurt.t=0,this.triggerHeld=!1}setActive(t){this.active=t,this.input.setEnabled(t),this.last=performance.now(),this.acc=0,t||Be.slide(!1)}applySettings(t){this.settings=t,this.scale=Math.min(t.scale||1,1),this.curScale=Math.min(this.curScale,this.scale),this.applyScale()}applyScale(){this.renderer.setPixelRatio(this.dprMax*this.curScale),this.resize()}aimDir(t){let n=this.player,i=Math.cos(n.pitch);return t.set(-Math.sin(n.yaw)*i,Math.sin(n.pitch),-Math.cos(n.yaw)*i)}weapons(t,n){let i=this.player,s=t.loadout;for(let l=1;l<=3;l++)if(n.consumeEdge("Digit"+l)){let c=["ar","sniper","shotgun"][l-1];s.select(c)&&(this.vm.setWeapon(c),Be.switchGun())}n.consumeEdge("KeyR")&&s.reload()&&Be.reload(),s.update(tr);let a=s.w;this.scoped=a.id==="sniper"&&(n.mouseButtons&2)!==0&&s.switchT<=0&&s.reloadT<=0;let r=(n.mouseButtons&1)!==0,o=r&&(a.auto||!this.triggerHeld);if(this.triggerHeld=r,o)if(s.canFire()){let l=s.consume(),c=this.aimDir(new F),h=new F(i.pos.x,i.pos.y+i.eye,i.pos.z),p=new F(Math.cos(i.yaw),0,-Math.sin(i.yaw)),u=h.clone().addScaledVector(c,.9).addScaledVector(p,.22);u.y-=.2;let d=Math.min(1,i.hSpeed/At.maxSpeed)+(i.onGround?0:1.2),v=a.spread+a.moveSpread*d;a.id==="sniper"&&(v=this.scoped?a.scopedSpread+.004*d:a.spread),a.id==="shotgun"&&(v=a.spread);let x=this.match.shoot(t,a.id,h,c,v,1,u);this.match.announceShot?.(a.id,u,x),Be.shot(a.id,.9,0);let m=a.recoil[Math.min(l,a.recoil.length-1)];this.kickP+=m[0],this.kickY+=m[1]*(l%2?1:-.6),this.vm.fire(a.id==="ar"?.7:1.4,a.flash),s.ammo[a.id]===0&&s.reserve[a.id]>0&&s.reload()&&Be.reload()}else s.ammo[a.id]===0&&s.cd<=0&&s.reloadT<=0&&(s.reserve[a.id]>0?s.reload()&&Be.reload():Be.empty())}simStep(){let t=this.player,n=this.input,i=this.match.player,s=i.alive,a=s?n.snapshot():{fwd:0,strafe:0,jump:!1,crouch:!1};t.step(tr,a);for(let r of t.events)r.type==="jump"?Be.jump():r.type==="land"?(Be.land(r.v),this.dipV-=Math.min(r.v,22)*At.landDip*10):r.type==="slide"&&Be.slideStart();t.events.length=0,Be.slide(s&&t.sliding&&t.onGround,t.hSpeed),s&&t.onGround&&!t.sliding&&t.hSpeed>2&&(this.stepTimer+=tr*t.hSpeed,this.stepTimer>(t.crouched?3.2:4.2)&&(this.stepTimer=0,Be.step())),s?this.weapons(i,n):(this.scoped=!1,this.triggerHeld=!1),this.match.net||this.match.update(tr),this.hitMarker.t>0&&(this.hitMarker.t-=tr)}loop(t){this.raf=requestAnimationFrame(this.loop),this.last||(this.last=t);let n=Math.min(.1,(t-this.last)/1e3);this.last=t;let i=this.player;if(this.active){let[M,T]=this.input.consumeLook();this.lookDX=M,this.lookDY=T;let A=pn[this.match.player?.loadout.cur||"ar"],y=xL*this.settings.sensitivity*(this.scoped?A.scopeSens:1);if(this.match.player?.alive){i.yaw-=M*y,i.pitch=Math.max(-1.55,Math.min(1.55,i.pitch-T*y));let C=Math.min(1,n*30);i.pitch=Math.min(1.55,i.pitch+this.kickP*C),i.yaw+=this.kickY*C,this.kickP-=this.kickP*C,this.kickY-=this.kickY*C}this.acc+=n;let w=0;for(;this.acc>=tr&&w++<8;)this.simStep(),this.acc-=tr;w>=8&&(this.acc=0)}let s=this.acc/tr,a=i.prev,r=i.pos,o=a.x+(r.x-a.x)*s,l=a.y+(r.y-a.y)*s+a.eye+(i.eye-a.eye)*s,c=a.z+(r.z-a.z)*s;this.dipV+=(-this.dip*140-this.dipV*14)*n,this.dip+=this.dipV*n;let h=Math.sin(i.yaw),p=Math.cos(i.yaw),u=i.vel.x*p-i.vel.z*h;this.roll+=(-u*.0035-this.roll)*Math.min(1,n*10);let d=i.hSpeed,v=this.match.player,x=!v||v.alive||this.match.state!=="running",m=v?v.loadout.cur:"ar",f=this.scoped?pn.sniper.scopeFov:this.settings.fov+At.fovSpeedKick*Math.min(1,Math.max(0,(d-At.maxSpeed)/8));this.fov+=(f-this.fov)*Math.min(1,n*(this.scoped?16:6)),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix()),x?this.deadBlend=0:this.deadBlend=Math.min(1,this.deadBlend+n*2.2);let g=this.deadBlend;this.camera.position.set(o,(l+this.dip)*(1-g)+(i.pos.y+.3)*g,c),this.camera.rotation.set(i.pitch*(1-g*.6),i.yaw,this.roll+g*.7);let b=!!this.match.net;if(b&&this.match.update(n),this.active||b){this.match.renderViews(n,s),this.effects.update(n),this.hurt.t=Math.max(0,this.hurt.t-n*1.6);for(let M=this.dmgNums.length-1;M>=0;M--)this.dmgNums[M].life-=n,this.dmgNums[M].life<=0&&this.dmgNums.splice(M,1)}let _=v&&v.loadout.reloadT>0?1-v.loadout.reloadT/pn[m].reload:0;this.vm.hidden=this.scoped||!x||this.match.state!=="running",this.vm.update(n,this.lookDX,this.lookDY,i.hSpeed,i.onGround,i.sliding,_),this.lookDX=this.lookDY=0,this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.vm.hidden||(this.renderer.clearDepth(),this.renderer.render(this.vm.scene,this.vm.camera)),this.frames++,this.fpsT+=n,this.fpsT>=.5&&(this.fps=Math.round(this.frames/this.fpsT),this.frames=0,this.fpsT=0,this.active&&(this.fps<54?(this.slowT+=.5,this.fastT=0):this.fps>=59?(this.fastT+=.5,this.slowT=0):this.slowT=this.fastT=0,this.slowT>=1&&this.curScale>.45?(this.curScale=Math.max(.45,this.curScale-.15),this.slowT=0,this.applyScale()):this.fastT>=6&&this.curScale<this.scale&&(this.curScale=Math.min(this.scale,this.curScale+.1),this.fastT=0,this.applyScale()))),this.onFrame&&this.onFrame(this)}dispose(){cancelAnimationFrame(this.raf),this.resizeObs.disconnect(),this.input.dispose(),Be.slide(!1),this.world.mesh.geometry.dispose(),this.match.stop(),this.renderer.dispose()}}});async function vE(){try{let e=await window.mobius?.storage?.get(gE);return{...Cp,...e||{}}}catch{return{...Cp}}}function yE(e){clearTimeout(mE),mE=setTimeout(()=>{try{window.mobius?.storage?.set(gE,e)}catch{}},400)}var Cp,gE,mE,_E=Fe(()=>{Cp={sensitivity:1,fov:100,volume:.7,scale:1,difficulty:"normal",name:""},gE="settings.json",mE=null});function SE({game:e,feed:t}){let n=(0,Cs.useRef)({}),i=(0,Cs.useRef)([]),s=a=>r=>{n.current[a]=r};return(0,Cs.useEffect)(()=>{let a=0,r=0;return e.onFrame=o=>{a++;let l=o.match,c=l.player,h=n.current;if(!c)return;let p=o.player,u=o.hitMarker;if(h.hm){h.hm.style.opacity=u.t>0?Math.min(1,u.t/.12):0;let T="bs-hm "+(u.t>0?u.kind:"");h.hm.className!==T&&(h.hm.className=T)}let d=o.cssW,v=o.cssH,x=i.current;for(let T=0;T<14;T++){let A=x[T];A||(A=document.createElement("div"),A.className="bs-dn",h.dn.appendChild(A),x[T]=A);let y=o.dmgNums[T];if(!y){A.style.display!=="none"&&(A.style.display="none");continue}if(Ul.copy(y.pos),Ul.y+=(1-y.life/y.max)*.8+.2,Ul.project(o.camera),Ul.z>1){A.style.display="none";continue}A.style.display="block";let w="bs-dn"+(y.head?" head":"");A.className!==w&&(A.className=w),A.textContent=y.text+(y.kill?" \u2715":""),A.style.opacity=Math.min(1,y.life/.35),A.style.transform=`translate(${(Ul.x+1)/2*d-10}px, ${(1-Ul.y)/2*v}px)`}if(h.scope){let T="bs-scope"+(o.scoped?" on":"");h.scope.className!==T&&(h.scope.className=T)}if(h.cross&&(h.cross.style.display=o.scoped||!c.alive?"none":"block"),h.hurt&&(h.hurt.style.opacity=Math.min(.9,o.hurt.t)*(c.alive?1:.4)),h.hdir&&(h.hdir.style.opacity=Math.min(1,o.hurt.t*1.4),h.hdir.style.transform=`rotate(${-o.hurt.angle*180/Math.PI}deg)`),a%3)return;let m=p.hSpeed;h.spd.textContent=m.toFixed(1),h.bar.style.width=Math.min(100,m/18*100)+"%",h.chip.textContent=c.alive?p.sliding?"SLIDE":p.onGround?p.crouched?"CROUCH":m>.5?"RUN":"IDLE":"AIR":"",h.fps.textContent=o.fps+" fps",h.hpn.textContent=Math.ceil(c.hp),h.hpb.style.width=Math.max(0,c.hp)+"%";let f=c.loadout,g=f.w;h.mag.textContent=f.ammo[g.id],h.res.textContent="/ "+f.reserve[g.id],h.wn.textContent=g.name,h.rl.textContent=f.reloadT>0?"RELOADING\u2026":f.ammo[g.id]===0&&f.reserve[g.id]===0?"NO AMMO":f.ammo[g.id]===0?"PRESS R":"",h.slots.children[0].className=f.cur==="ar"?"on":"",h.slots.children[1].className=f.cur==="sniper"?"on":"",h.slots.children[2].className=f.cur==="shotgun"?"on":"",h.time.textContent=xE(l.time);let b=l.ranking(),_=b[0];h.score.textContent=`YOU ${c.kills} \xB7 ${_===c?"LEAD":_.name+" "+_.kills}`,h.dead&&(h.dead.style.display=c.alive?"none":"block",c.alive||(h.deadt.textContent="Respawning in "+Math.max(0,Math.ceil(c.respawnAt-l.clock))));let M=o.input.down("Tab");h.sb.className="bs-sb"+(M?" on":""),M&&(r-=1)<=0&&(r=8,h.sbody.innerHTML=b.map(T=>`<tr class="${T.isPlayer?"me":""}"><td><span class="bs-dot" style="background:${T.color}"></span>${T.name}</td><td>${T.kills}</td><td>${T.deaths}</td></tr>`).join(""))},()=>{e.onFrame=null}},[e]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("div",{className:"bs-scope",ref:s("scope")}),(0,X.jsx)("div",{className:"bs-hurt",ref:s("hurt")}),(0,X.jsx)("div",{className:"bs-hdir",ref:s("hdir"),children:(0,X.jsx)("i",{})}),(0,X.jsxs)("div",{className:"bs-cross",ref:s("cross"),children:[(0,X.jsx)("i",{}),(0,X.jsx)("i",{}),(0,X.jsx)("i",{}),(0,X.jsx)("i",{})]}),(0,X.jsxs)("div",{className:"bs-hm",ref:s("hm"),children:[(0,X.jsx)("i",{}),(0,X.jsx)("i",{}),(0,X.jsx)("i",{}),(0,X.jsx)("i",{})]}),(0,X.jsx)("div",{ref:s("dn")}),(0,X.jsxs)("div",{className:"bs-top",children:[(0,X.jsx)("b",{ref:s("time"),children:xE($a)}),(0,X.jsx)("div",{ref:s("score")})]}),(0,X.jsx)("div",{className:"bs-feed",children:t.map((a,r)=>(0,X.jsxs)("div",{className:a.mine?"mine":a.died?"died":"",children:[(0,X.jsx)("span",{style:{color:a.color},children:a.killer||"\u2014"}),(0,X.jsx)("em",{children:(pn[a.weapon]?.name||"")+(a.head?" \u25C6":"")}),(0,X.jsx)("span",{style:{color:a.vcolor},children:a.victim})]},a.t+a.victim+r))}),(0,X.jsxs)("div",{className:"bs-hp",children:[(0,X.jsx)("b",{ref:s("hpn"),children:"100"}),(0,X.jsx)("div",{className:"bs-bar",children:(0,X.jsx)("div",{ref:s("hpb"),style:{width:"100%"}})})]}),(0,X.jsxs)("div",{className:"bs-ammo",children:[(0,X.jsx)("div",{className:"bs-wname",ref:s("wn")}),(0,X.jsx)("b",{ref:s("mag"),children:"30"}),(0,X.jsx)("span",{ref:s("res")}),(0,X.jsx)("div",{className:"bs-reload",ref:s("rl")}),(0,X.jsxs)("div",{className:"bs-slots",ref:s("slots"),children:[(0,X.jsx)("i",{children:"1"}),(0,X.jsx)("i",{children:"2"}),(0,X.jsx)("i",{children:"3"})]})]}),(0,X.jsxs)("div",{className:"bs-speed",style:{bottom:"max(20px,var(--mobius-safe-bottom,0px))",width:150},children:[(0,X.jsx)("b",{ref:s("spd"),style:{fontSize:22},children:"0.0"}),(0,X.jsx)("small",{children:"m/s"}),(0,X.jsx)("div",{className:"bs-bar",children:(0,X.jsx)("div",{ref:s("bar")})}),(0,X.jsx)("span",{className:"bs-chip",ref:s("chip")})]}),(0,X.jsx)("div",{className:"bs-fps",ref:s("fps")}),(0,X.jsxs)("div",{className:"bs-dead",ref:s("dead"),children:[(0,X.jsx)("b",{children:"ELIMINATED"}),(0,X.jsx)("span",{ref:s("deadt")})]}),(0,X.jsx)("div",{className:"bs-sb",ref:s("sb"),children:(0,X.jsxs)("div",{className:"bs-table",children:[(0,X.jsx)("h3",{children:"SCOREBOARD"}),(0,X.jsxs)("table",{children:[(0,X.jsx)("thead",{children:(0,X.jsxs)("tr",{children:[(0,X.jsx)("th",{children:"PLAYER"}),(0,X.jsx)("th",{children:"KILLS"}),(0,X.jsx)("th",{children:"DEATHS"})]})}),(0,X.jsx)("tbody",{ref:s("sbody")})]})]})})]})}function Rp({label:e,value:t,min:n,max:i,step:s,onChange:a,fmt:r=o=>o}){return(0,X.jsxs)("label",{className:"bs-row",children:[(0,X.jsx)("span",{children:e}),(0,X.jsx)("input",{type:"range",min:n,max:i,step:s,value:t,onChange:o=>a(parseFloat(o.target.value))}),(0,X.jsx)("output",{children:r(t)})]})}function bE({settings:e,onChange:t,showDifficulty:n}){return(0,X.jsxs)(X.Fragment,{children:[n&&(0,X.jsx)("div",{className:"bs-seg",role:"group","aria-label":"Bot difficulty",children:["easy","normal","hard"].map(i=>(0,X.jsx)("button",{className:e.difficulty===i?"on":"",onClick:()=>t({difficulty:i}),children:i.toUpperCase()},i))}),(0,X.jsx)(Rp,{label:"Sensitivity",value:e.sensitivity,min:.2,max:3,step:.05,onChange:i=>t({sensitivity:i}),fmt:i=>i.toFixed(2)}),(0,X.jsx)(Rp,{label:"Field of view",value:e.fov,min:70,max:120,step:1,onChange:i=>t({fov:i}),fmt:i=>i+"\xB0"}),(0,X.jsx)(Rp,{label:"Render scale",value:e.scale,min:.5,max:1,step:.05,onChange:i=>t({scale:i}),fmt:i=>Math.round(i*100)+"%"}),(0,X.jsx)(Rp,{label:"Volume",value:e.volume,min:0,max:1,step:.05,onChange:i=>t({volume:i}),fmt:i=>Math.round(i*100)+"%"})]})}function ME({settings:e,onChange:t,onPlay:n,onOnline:i,error:s}){return(0,X.jsx)("div",{className:"bs-menu",children:(0,X.jsxs)("div",{className:"bs-card",children:[(0,X.jsxs)("h1",{className:"bs-title",children:["BLOCK",(0,X.jsx)("span",{children:"STRIKE"})]}),(0,X.jsx)("p",{className:"bs-sub",children:"4-minute free-for-all"}),(0,X.jsx)("button",{className:"bs-play",onClick:n,autoFocus:!0,children:"PLAY VS 5 BOTS"}),(0,X.jsx)("button",{className:"bs-ghost",onClick:i,children:"Play online with friends"}),s&&(0,X.jsx)("p",{className:"bs-note",children:s}),(0,X.jsx)(bE,{settings:e,onChange:t,showDifficulty:!0}),(0,X.jsx)(SL,{})]})})}function TE({settings:e,onChange:t,onResume:n,onQuit:i,error:s,online:a}){return(0,X.jsx)("div",{className:"bs-menu",children:(0,X.jsxs)("div",{className:"bs-card",children:[(0,X.jsx)("h1",{className:"bs-title",children:a?"ONLINE MATCH":"PAUSED"}),(0,X.jsx)("p",{className:"bs-sub",children:a?"The match keeps running while you are here.":"The match is on hold."}),(0,X.jsx)("button",{className:"bs-play",onClick:n,autoFocus:!0,children:a?"CLICK TO JUMP IN":"RESUME"}),s&&(0,X.jsx)("p",{className:"bs-note",children:s}),(0,X.jsx)("button",{className:"bs-ghost",onClick:i,children:a?"Leave room":"Quit to main menu"}),(0,X.jsx)(bE,{settings:e,onChange:t})]})})}function py({ranking:e,onAgain:t,onMenu:n,againLabel:i="PLAY AGAIN",menuLabel:s="Main menu"}){let a=e.findIndex(r=>r.isPlayer);return(0,X.jsx)("div",{className:"bs-menu",children:(0,X.jsxs)("div",{className:"bs-card",children:[(0,X.jsx)("h1",{className:"bs-title",children:a===0?(0,X.jsxs)(X.Fragment,{children:["VICT",(0,X.jsx)("span",{children:"ORY"})]}):(0,X.jsxs)(X.Fragment,{children:["MATCH ",(0,X.jsx)("span",{children:"OVER"})]})}),(0,X.jsx)("p",{className:"bs-win",children:a===0?"You topped the scoreboard.":`You finished #${a+1} of ${e.length}.`}),(0,X.jsx)("div",{className:"bs-table",style:{width:"100%",padding:0,border:0},children:(0,X.jsxs)("table",{children:[(0,X.jsx)("thead",{children:(0,X.jsxs)("tr",{children:[(0,X.jsx)("th",{children:"#"}),(0,X.jsx)("th",{children:"PLAYER"}),(0,X.jsx)("th",{children:"KILLS"}),(0,X.jsx)("th",{children:"DEATHS"})]})}),(0,X.jsx)("tbody",{children:e.map((r,o)=>(0,X.jsxs)("tr",{className:r.isPlayer?"me":"",children:[(0,X.jsx)("td",{style:{textAlign:"left",opacity:.6},children:o+1}),(0,X.jsxs)("td",{style:{textAlign:"left"},children:[(0,X.jsx)("span",{className:"bs-dot",style:{background:r.color}}),r.name]}),(0,X.jsx)("td",{children:r.kills}),(0,X.jsx)("td",{children:r.deaths})]},r.id))})]})}),(0,X.jsx)("button",{className:"bs-play",style:{marginTop:16},onClick:t,autoFocus:!0,children:i}),(0,X.jsx)("button",{className:"bs-ghost",onClick:n,children:s})]})})}function EE({name:e,onName:t,onCreate:n,onJoin:i,onBack:s,available:a,initialCode:r="",ready:o=!0}){let[l,c]=Cs.default.useState(r),h=l.toUpperCase().slice(0,4);return(0,X.jsx)("div",{className:"bs-menu",children:(0,X.jsxs)("div",{className:"bs-card",children:[(0,X.jsxs)("h1",{className:"bs-title",children:["PLAY ",(0,X.jsx)("span",{children:"ONLINE"})]}),(0,X.jsx)("p",{className:"bs-sub",children:r?`You're invited to room ${r}. Pick a name and join.`:"Up to 4 players. Friends can join from their own M\xF6bius or straight from the invite link in a browser."}),!a&&(0,X.jsx)("p",{className:"bs-note",children:"This browser cannot open online rooms."}),(0,X.jsxs)("label",{className:"bs-row",style:{gridTemplateColumns:"70px 1fr"},children:[(0,X.jsx)("span",{children:"Name"}),(0,X.jsx)("input",{className:"bs-text",value:e,maxLength:16,placeholder:"Player",onChange:p=>t(p.target.value)})]}),(0,X.jsx)("button",{className:"bs-play",style:{marginTop:16},disabled:!a||!o,onClick:n,children:"CREATE ROOM"}),(0,X.jsxs)("label",{className:"bs-row",style:{gridTemplateColumns:"70px 1fr 90px"},children:[(0,X.jsx)("span",{children:"Room code"}),(0,X.jsx)("input",{className:"bs-text bs-code",value:l,maxLength:8,placeholder:"ABCD",inputMode:"text",autoCapitalize:"characters",autoCorrect:"off",autoComplete:"off",spellCheck:!1,"aria-label":"Room code",onChange:p=>c(p.target.value.replace(/[^A-Za-z0-9]/g,"")),onKeyDown:p=>{p.key==="Enter"&&o&&h.length>=4&&i(h)}}),(0,X.jsx)("button",{className:"bs-seg-btn",disabled:!a||!o||h.length<4,onClick:()=>i(h),children:"JOIN"})]}),(0,X.jsx)("button",{className:"bs-ghost",onClick:s,children:"Back"})]})})}function AE({code:e,status:t,error:n,members:i,isHost:s,youId:a,onStart:r,onLeave:o}){let[l,c]=Cs.default.useState(""),[h,p]=Cs.default.useState(!1);Cs.default.useEffect(()=>{if(t==="open"){p(!1);return}let m=setTimeout(()=>p(!0),8e3);return()=>clearTimeout(m)},[t]);let u=fE(e),d=async()=>{let m=u||e,f=!1;try{f=window.mobius?.clipboard?.writeText?await window.mobius.clipboard.writeText(m):(await navigator.clipboard.writeText(m),!0)}catch{f=!1}c(f?"ok":"fail"),setTimeout(()=>c(""),f?1500:6e3)},v=t==="open",x=n==="full"?"This room is full (4 players).":n==="host-left"?"The host left, so the room closed.":n==="unreachable"?"Could not reach this room. Check the code, or ask the host to create it again.":n==="unavailable"?"Could not reach the room service. Check your connection and try again.":n==="unauthorized"?"Could not sign in to the room.":h&&t!=="open"?"Still cannot reach the room server. Check your connection, or leave and try again.":bL[t]||"";return(0,X.jsx)("div",{className:"bs-menu",children:(0,X.jsxs)("div",{className:"bs-card",children:[(0,X.jsxs)("h1",{className:"bs-title",children:["ROOM ",(0,X.jsx)("span",{children:e})]}),(0,X.jsx)("p",{className:"bs-sub",children:v?u?"Send friends the invite link. The host starts the match.":"Share this code. The host starts the match.":x}),(0,X.jsx)("button",{className:"bs-ghost",style:{marginTop:0},onClick:d,children:l==="ok"?"Copied":u?"Copy invite link":"Copy room code"}),l==="fail"&&(0,X.jsxs)("p",{className:"bs-note",style:{userSelect:"all",wordBreak:"break-all"},children:["Copy was blocked. Select and copy: ",u||e]}),(0,X.jsxs)("ul",{className:"bs-players",children:[i.map((m,f)=>(0,X.jsxs)("li",{children:[(0,X.jsx)("span",{className:"bs-dot",style:{background:["#e0644a","#4b8bd9","#5fb36b","#d9a441"][f%4]}}),m.name,m.id===a?" (you)":"",f===0?" \xB7 host":""]},m.id)),!i.length&&(0,X.jsx)("li",{style:{opacity:.6},children:x||"Waiting\u2026"})]}),s?(0,X.jsxs)("button",{className:"bs-play",onClick:r,disabled:!v,children:["START MATCH (",i.length," ",i.length===1?"player":"players",")"]}):(0,X.jsx)("p",{className:"bs-note",children:v?"Waiting for the host to start\u2026":""}),(0,X.jsx)("button",{className:"bs-ghost",onClick:o,children:"Leave room"})]})})}var Cs,X,xE,Ul,SL,bL,wE=Fe(()=>{Cs=ts(Jr());Rl();bp();Tp();Ki();X=ts(wr()),xE=e=>{let t=Math.max(0,Math.ceil(e));return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")},Ul=new F;SL=()=>(0,X.jsxs)("div",{className:"bs-keys",children:[(0,X.jsx)("kbd",{children:"W A S D"}),(0,X.jsx)("span",{children:"Move \xB7 strafe-turn in the air to gain speed"}),(0,X.jsx)("kbd",{children:"Space"}),(0,X.jsx)("span",{children:"Jump \xB7 hold to bunny-hop"}),(0,X.jsx)("kbd",{children:"Shift"}),(0,X.jsx)("span",{children:"Crouch \xB7 slide while running \xB7 land crouched = slide-hop"}),(0,X.jsx)("kbd",{children:"Mouse"}),(0,X.jsx)("span",{children:"Left fire \xB7 Right scope (sniper)"}),(0,X.jsx)("kbd",{children:"1 2 3 R"}),(0,X.jsx)("span",{children:"AR \xB7 Sniper \xB7 Shotgun \xB7 Reload"}),(0,X.jsx)("kbd",{children:"Tab"}),(0,X.jsx)("span",{children:"Scoreboard"})]});bL={connecting:"Connecting\u2026",open:"Connected",closed:"Disconnected",error:"Could not connect"}});var CE,RE,NE=Fe(()=>{CE=`
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
`,RE=`
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
.bs-scope{position:absolute;inset:0;display:none;pointer-events:none;background:radial-gradient(circle at 50% 50%,transparent 0,transparent min(34vh,34vw),#000 calc(min(34vh,34vw) + 2px))}
.bs-scope.on{display:block}
.bs-scope:before,.bs-scope:after{content:"";position:absolute;background:#000;left:50%;top:50%}
.bs-scope:before{width:2px;height:min(68vh,68vw);transform:translate(-1px,-50%)}.bs-scope:after{height:2px;width:min(68vh,68vw);transform:translate(-50%,-1px)}
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
`});var UE={};KE(UE,{default:()=>DE});function DE({appId:e,token:t}){eE(t);let n=(0,an.useRef)(null),i=(0,an.useRef)(null),[s,a]=(0,an.useState)(null),[r,o]=(0,an.useState)(Cp),[l]=(0,an.useState)(()=>hE()),[c,h]=(0,an.useState)(l?"online":"menu"),[p,u]=(0,an.useState)(!1),[d,v]=(0,an.useState)(""),[x,m]=(0,an.useState)([]),[f,g]=(0,an.useState)([]),[b,_]=(0,an.useState)(null),M=(0,an.useRef)(null);M.current=b;let T=(0,an.useRef)(r),A=(0,an.useRef)(c);A.current=c,(0,an.useEffect)(()=>{let L=B=>window.parent.postMessage({type:"moebius:immersive",value:B,appId:e},"*");return L(!0),()=>L(!1)},[e]),(0,an.useEffect)(()=>{let L=!1,B=null,Y=n.current;vE().then(rt=>{L||(T.current=rt,o(rt),Su(rt.volume),B=new wp(Y,rt),B.hooks={onFeed:Pt=>m(Pt.slice(-5).map(Nt=>({...Nt,at:performance.now()}))),onEnd:Pt=>{g(Pt.map(Nt=>({id:Nt.id,name:Nt.name,color:Nt.color,isPlayer:Nt.isPlayer,kills:Nt.kills,deaths:Nt.deaths}))),B.setActive(!1),h("results"),document.pointerLockElement&&document.exitPointerLock()}},i.current=B,window.__blockstrike={game:B,config:At},a(B))});let W=()=>{let rt=document.pointerLockElement===Y;u(rt),i.current?.setActive(rt&&A.current==="playing")},K=()=>v("Mouse capture was blocked. Click again to retry."),$=rt=>rt.preventDefault();document.addEventListener("pointerlockchange",W),document.addEventListener("pointerlockerror",K),Y.addEventListener("contextmenu",$);let St=setInterval(()=>m(rt=>rt.length&&rt.some(Pt=>performance.now()-Pt.at>6e3)?rt.filter(Pt=>performance.now()-Pt.at<6e3):rt),1e3);return()=>{L=!0,clearInterval(St),document.removeEventListener("pointerlockchange",W),document.removeEventListener("pointerlockerror",K),Y.removeEventListener("contextmenu",$),document.pointerLockElement===Y&&document.exitPointerLock(),B?.dispose()}},[]);let y=L=>{let B={...T.current,...L};T.current=B,o(B),i.current?.applySettings(B),L.volume!==void 0&&Su(B.volume),yE(B)},w=()=>{v(""),ey(),Su(T.current.volume);let L=n.current;try{let B=L.requestPointerLock({unadjustedMovement:!0});B&&B.catch&&B.catch(()=>{try{L.requestPointerLock()}catch{}})}catch{L.requestPointerLock()}},C=()=>{let L=i.current;L&&(L.startMatch(T.current.difficulty),m([]),A.current="playing",h("playing"),w())},N=()=>{let L=i.current;L?.leaveOnline(),L?.match.stop(),L?.setActive(!1),_(null),h("menu")},U=L=>_(B=>B&&{...B,status:L.net?.status||B.status,error:L.net?.error||null,members:L.net?.members||[],youId:L.net?.id||null,isHost:!!L.net?.isHost}),I=L=>{let B=i.current;if(!B)return;ey(),Su(T.current.volume);let Y=(T.current.name||"").trim()||"Player";_({code:L,status:"connecting",error:null,members:[],youId:null,isHost:!1});let W=B.startOnline(L,Y);W.hooks={onStatus:()=>U(W),onPresence:()=>U(W),onPhase:K=>{U(W),K==="running"?(A.current="playing",h("playing")):K==="lobby"&&A.current!=="lobby"&&(A.current="lobby",h("lobby"))}},A.current="lobby",h("lobby")},D=()=>{let L=i.current?.onlineMatch;L&&(L.startRound(),w())},H=()=>{i.current?.onlineMatch?.backToLobby(),A.current="lobby",h("lobby")};return(0,Li.jsxs)("div",{className:"bs-root",children:[(0,Li.jsx)("style",{children:CE+RE}),(0,Li.jsx)("canvas",{ref:n,className:"bs-canvas"}),s&&c==="playing"&&(0,Li.jsx)(SE,{game:s,feed:x}),c==="menu"&&(0,Li.jsx)(ME,{settings:r,onChange:y,onPlay:C,onOnline:()=>h("online"),error:d}),c==="online"&&(0,Li.jsx)(EE,{name:r.name||"",onName:L=>y({name:L}),available:lE(),initialCode:l,ready:!!s,onCreate:()=>I(oE()),onJoin:L=>I(fy(L)),onBack:()=>h("menu")}),c==="lobby"&&b&&(0,Li.jsx)(AE,{code:b.code,status:b.status,error:b.error,members:b.members,isHost:b.isHost,youId:b.youId,onStart:D,onLeave:N}),c==="playing"&&!p&&(0,Li.jsx)(TE,{settings:r,onChange:y,onResume:w,onQuit:N,error:d,online:!!b}),c==="results"&&b&&(0,Li.jsx)(py,{ranking:f,onAgain:H,onMenu:N,againLabel:"BACK TO LOBBY",menuLabel:"Leave room"}),c==="results"&&!b&&(0,Li.jsx)(py,{ranking:f,onAgain:C,onMenu:()=>h("menu")})]})}var an,Li,LE=Fe(()=>{an=ts(Jr());pE();Qa();bu();_E();wE();Tp();uy();NE();Li=ts(wr())});var DB=ts(Jr()),IE=ts(WM()),PE=ts(wr()),OE="blockstrike:";window.mobius={storage:{async get(e){try{let t=localStorage.getItem(OE+e);return t==null?null:JSON.parse(t)}catch{return null}},async set(e,t){try{localStorage.setItem(OE+e,JSON.stringify(t))}catch{}}},clipboard:{async writeText(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}}};var{default:ML}=await Promise.resolve().then(()=>(LE(),UE));(0,IE.createRoot)(document.getElementById("root")).render((0,PE.jsx)(ML,{appId:"web"}));
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
