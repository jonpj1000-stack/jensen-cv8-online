var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return ee(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function j(){fe(pe),fe(me),fe(he)}function ve(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function ye(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(wt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=hi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=hi(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=hi(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-We(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=de(null),Qi=null,$i=null;function ea(e,t,n){A(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,fe(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=O.S;O.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=de(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?A(Ca,Ca.current):A(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case D:return t=Na(t),f(e,t,n)}if(se(t)||ie(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Na(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Na(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Na(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===C)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=de(null),io=de(0);function ao(e,t){e=Wl,A(io,e),A(ro,t),Wl=e|t.baseLanes}function oo(){A(io,Wl),A(ro,ro.current)}function so(){Wl=io.current,fe(ro),fe(io)}var co=de(null),lo=null;function uo(e){var t=e.alternate;A(F,F.current&1),A(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){A(F,F.current),A(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(A(F,F.current),A(co,e),lo===null&&(lo=e)):mo(e)}function mo(){A(F,F.current),A(co,co.current)}function ho(e){fe(co),lo===e&&(lo=null),fe(F)}var F=de(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){O.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ls(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ce,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:ve(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),j(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(ye(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=pe.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=pe.current,qi(t))Gi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return j(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(fe(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return A(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=F.current,A(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),j(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(F),null;case 4:return j(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&fe(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),j();break;case 26:case 27:case 5:ye(t);break;case 4:j();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:fe(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&fe(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:O.T===null?ut():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Vl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,O.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=O.H;return O.H=Vs,e===null?Vs:e}function Eu(){var e=O.A;return O.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,O.H=i,O.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Me()+500,Su(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,O.H=r,O.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Ae();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Me()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ui(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case qr:case Jr:case Yr:l=Rn;break;case $r:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),b=e=>{let t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)},x={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},S=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},C=c(u(),1),w=(0,C.createContext)({}),T=()=>(0,C.useContext)(w),ee=(0,C.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=T()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,C.createElement)(`svg`,{ref:c,...x,width:t??l??x.width,height:t??l??x.height,stroke:e??f,strokeWidth:m,className:_(`lucide`,p,i),...!a&&!S(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,C.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),E=(e,t)=>{let n=(0,C.forwardRef)(({className:n,...r},i)=>(0,C.createElement)(ee,{ref:i,iconNode:t,className:_(`lucide-${v(b(e))}`,`lucide-${e}`,n),...r}));return n.displayName=b(e),n},D=E(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),te=E(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),ne=E(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),re=E(`clipboard-list`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]),ie=E(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),ae=E(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),oe=E(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),se=E(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),O=E(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),k=E(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ce=E(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),le=E(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),ue=E(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),de=E(`wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]),fe=E(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),A=E(`zoom-in`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`11`,x2:`11`,y1:`8`,y2:`14`,key:`1vmskp`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),pe=E(`zoom-out`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),me=g(),he=[{page:1,title:`JENSEN`,text:`JENSEN
MODEL
C-Vé

“INSTRUCTION BOOK`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:2,title:`HANDBOOK OF INSTRUCTIONS`,text:`HANDBOOK OF INSTRUCTIONS

FOR THE

JENSEN CV-8

This handbook is published for the use and ASSISL
of owners of JENSEN CARS.

ance

It embodies in a concise form the
advice and suggestions of the Company’s

Technical Sta in regard to lubrication, general care and

maintenance, together with supplementary information regardi

the necessary adjustments which may be required

from time to time

COMPILED AND PUBLISHED BY

JENSEN MOTORS LIMITED

WE

' BROMWICH, ENGLAND

Telephone: West Bromwich 2041 (10 lines) Telegrams: Expert Telex: 33526,

NOTE

The full Chassis Serial Number must be quoted in all correspondence

PRICE 176 NET`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:3,title:`Foreword`,text:`Foreword

In compiling this book some knowledge of the operation and
care of a Motor Car has been presupposed, and the instructions
contained herein, will, if followed with reasonable care, enable
you to obtain the maximum enjoyment and satisfaction from

your JENSEN Car.
A lubrication chart will be found on Page 11 of this Handbook.

In the rare event of any unforeseen defect or unusual trouble
developing, it is requested that the matter be at once brought to

our notice.

The interest of Jensen Motors Ltd. in their products, does not
end with the delivery of the Car: on the contrary, it is the
Company’s desire to keep in close touch with all Jensen owners,
and to provide for their convenience a Service-after-Sales

second to none.

JENSEN MOTORS LIMITED`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:4,title:`Fig. |`,text:`Fig. |

INSTRUMENTS

Cubby Lid Lock

Electric Clock

Ammeter

Oil Pressure Gauge

Water Temperature Gauge

L.H. Flasher Warning Light
Speedometer

Gear Indicator

Rey. Counter

R.H. Flasher Warning Light
Air Control Heater

Demist

AND CONTROLS

16. Interior

17. Cigar Lighter

18. Ignition Starter

19. Instrument Hlumination
20. Fan-Heater

21. Hot
22. Cold
23. Map

24. Gear Selector

25. High Beam Warning

26. Fresh Air Ducts

27. Low Fuel Warning

28. Indicator & Headlamp Flasher
29. Petrol Filler Lid`,summary:`Dashboard and control identification page. Use it to identify switches, warning lights, gauges and controls before diagnosing or removing parts.`,checklist:[`Identify the control by number on the diagram.`,`Confirm whether the issue is mechanical, electrical, bulb-related or sender-related.`,`Photograph the dashboard before removing any switch or panel.`,`Keep original switch positions and labels for period-correct restoration.`]},{page:5,title:`GENERAL DIMENSIONS AND DATA FOR QUICK REFERENCE`,text:`GENERAL DIMENSIONS AND DATA FOR QUICK REFERENCE

The chassis number will be found stamped on a plate secured to the front of the

scuttle. This number is also stamped on the front of the ch
member

is frame front cross
The engine number is stamped on the L.H. bank of the Cylinder Block
immediately forward of No. 1 Cylinder,

Cylinders are numbered as follows:

R.H. Bank Front to Rear 2—4—6—8
L.H. Bank Front to Rear |—3—5—7
Bore 105 mm. (4-125 ins.)

Stroke
Cubic Capacity

86 mm. (3-375 ins.)
5.916 ce, (361 cu. ins.)

B.H.P. 305 at 4,800 r.p.m

Compression Ratio 9:1

Firing Order I~ 8—~4 38-59

Coolant Capacity including Heater 24 pints (Imp.), 29 pints (U.S.), 13-638 litres
Oil Sump Capacity 7 pints (Imp,), 8 pints (U.S.), 3-978 litres

(Dipstick top level must not be exceeded)
Engine Oil Pressure at 40.50 m p-h. 45:65 p.s.i
Gearbox Capacity

Automatic 15-5 pints (Imp.), 18-5 pints (U.S), 8-808 litres
Manual with Overdrive - J pints (Imp.). 6 pints (U.S.), 2841 litres.
Rear Axle Capacity - 3 pints (Imp.), 3-6 pints (ULS.), 1-705 litres
Fuel Tank Capacity . 16 galls. (Imp.), 19 galls. (U.S.), 72 litres

OVERALL AR RATIOS:
Automatic ; Ist TS 31
2nd 44 01
3rd 3:07:21
Reverse 6:74: 1
Manual with Overdrive. Ist 9-02 > 1
2nd 27 y]
3rd 35401

Overdrive 2-75: 1

Reverse IPS: 1
Tyres . Dunlop 6.70 15 road speed
Tyre Pressure - 24 p.s.i. all round (see notes on wheels and tyres

pp. 1718) (1-68 kg. sq. em.)
Wheelbase » 8 fl. 9 ins. (2-667 metres)
Track (Static laden weight: Front, 4 ft. 7 ii ins. (1-417 metres)
Rear . 4 ft. 8] ins. (1-445 metres)

Toe-in (Static laden weight) . + ty ins, (15875 mm.)
Camber (Static laden weight) | pos.

5`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:6,title:`Castor Angle (Static laden weight) 2> pos:`,text:`Castor Angle (Static laden weight) 2> pos:

King Pin Inclination 7
Centre of Gravity ‘ . 49 ins. (124-46 em.) aft of front axle

Overall Width ft. 74 ins. (1-714 metres)

Overall Height 4 ft. 7 ins. (1-397 metres)

Overall Length « 15 ft. 4 ins, (4-686 metres)

Ground Clearance 6 ins. (15-24 em.)

Turning Circle. 38 ft. (11-592 metres)

Weight (dry) 4 ‘ . 29 ewt, (1473-2 kilogrammes)

Steering Ratio 17-251 33 turns, lock to lock

IGNITION TIMING. # 10 before T.D.C, at S00 rpm.

CONTACT BREAKER GAP . O14 ins. to 019 ins. (356 mm. to 483 mm.)

SPARK PLUGS . Champion J9Y or Autolite A 32. Gap -035 ins.

VALVE CLEARANCES — Zerolash. No adjustment required. |

OIL SUMP CAPACITY.—It is important that sump should not be filled above
the high level mark on the dipstick, otherwise functioning of zerolash tappets may be
impaired

STARTING UP AND GENERAL RUNNING HINTS

ENGINE RUNNING-IN: PERIOD

You do not have to drive your new car at consistently low speeds during the
first few hundred miles of operation. Precision manufacturing methods and
improved design make it possible for you to begin driving ina normal manner.

While speeds in excess of 50 miles an hour should be avoided for the first 300
miles. occasional spurts up to this speed (after the engine is warmed) will materially

assist the “running-in™” process.

After 300 miles of driving, occasional bursts of higher speed are not only per-
missible but desirable. Your new car should not, however, be operated at top speed
until it has been driven at least 500 miles. High speeds should always be avoided
until the engine is warmed up to operating temperature

During the “running-in” period it is extremely important to keep close watch

on the engine oil level and the panel instruments, especially the temperature and oil
pressure gauges. Sustained high engine speed should be avoided during early life
of the new car so that all parts will become adjusted to their position without excess

friction and heat 4
The observance of these precautions will be reflected later on in the prolonged

life of the car, Under this heading, lubrication is by far the most important item.

Many troubles are directly traceable to kick of proper lubrication and owners will

be well repaid by giving careful attention to the lubrication diagram
The engine attains maximum power at 4.800 r.p.m. and 5,100 r.p.m. should not

be exceeded
The illustration on page 4 shows the general arrangement of controls. The

following points should be observed in starting the engine:

6

w% OW VNeoor fevAncd DISC OMMECTED

Sl`,summary:`Quick-reference specifications page covering ignition, plug gap, tyre pressure and capacities.`,checklist:[`Confirm the spec against the scan before adjusting.`,`Use 1-8-4-3-6-5-7-2 firing order.`,`Set spark plug gap to .035 in where applicable.`,`Use 10 degrees BTDC at 500 rpm as the manual timing reference.`,`Do not fill the sump above the high-level mark.`]},{page:7,title:`STARTING CAR ENGINE`,text:`STARTING CAR ENGINE

On cars with automatic transmission move the gear range selector lever to
neutral, quadrant position “N
lever is in this position

It is essential to ensure that the handbrake is applied before starting the engine,
as the automatic carburetter system will cause the engine to run at a fairly fast idle
speed on initial starting from cold

Always depress the accelerator pedal slowly to one third of its travel before starting
the engine.

The engine cannot be started unless the selector

Turn ignition key to extreme right to operate starter. When engine fires, release
key. The engine should start immediately

NOTE.—Do not pump accelerator pedal while starting, If engine does not start
because of excess fuel in cylinder, push accelerator pedal slowly to full open and operate
starter while keeping pedal depressed.

The fuel mixture is automatically adjusted to provide for easy engine starting
and for the warming and operating periods.

GEARBOX OPERATION

The automatic gearbox is more than just a mechanism which automatically
adjusts the gear ratios according to conditions of speed and load. An overriding
control is provided which enables the driver to exercise his own judgment and desire
in regard to the gear ratios to be selected and an understanding of what is possible
greatly enhances the pleasure to be derived from driving the car
irbox provides three forward changes, also Neutral and Revers
control quadrant is marked as follows

RN D211

The following indicates the gears obtained in each range:

The

“1 — Ist only. (Maximum permissible 48 m.p.h.)
“2° — Ist and 2nd. (Maximum permissible 82 m.p.h.)
“Dp” — Ist, 2nd and top.

“N” Neutral

“R™ — Reverse

There are three “gate” positions
No. I— Ist and 2nd
No, 2— “D" and “N*
No, 3— "*R™.
To change from one gate to another it is necessary to depress the button in the
end of the gear lever.

MOUNTAIN: DRIVING
When driving in mountainous country or with heavy loads, the 2 or | position

should be selected on upgrades which require heavy throttle for half a mile or more.
Lower ratios reduce the possibility of overheating the transmission and converter`,summary:`Starting procedure and running advice for the C-V8.`,checklist:[`Select Neutral on automatic cars before starting.`,`Apply the handbrake before starting.`,`Depress accelerator slowly to about one-third travel.`,`Release the key as soon as the engine fires.`,`If flooded, use full throttle briefly while cranking as described.`]},{page:8,title:`under these conditions. The | position is for severe operation or to obtain bett`,text:`under these conditions. The | position is for severe operation or to obtain better
control, or for operation in deseending a steep hill

TO DRIVE AWAY

If the driver so desires, he can leave everything to the automatic gearbox and
gear changes will occur at the theoretically correct moment in terms of speed and load
Obviously. however, road or trafic conditions may be such that the automatic gear
change may be undesirable, or may be snesneste and it is for this reason that the
overriding controls are provided to enable the driver to enforce a gear chang
when desired

The driver should, therefore, first familiarise himself with the approximate speeds
at which the automatic changes occur. These are as follows

as and

D Rana
Up-changes (mph)
1—2 2— top
Light Throttle Wl 15
Full Throttle 48 82

The owner-driver who wishes occasionally to indulge in a very fast get-away will
obtain maximum acceleration by allowing the automatic gearbox to make full
throttle changes throughout the speed range.

The automatic down-change at light throttle will normally occur at the following
speed:

Top to Istdirect . 8 mp.h
Under “Kick-down” conditions down changes occur at speeds below. the
following limits:

Top to Ist . . 43 m.p.h
Topto2nd 2 75 m.p.h
must he observed when making a **Kick-down™ ¢
n view of th

Caut
43 m.p.h.

at speeds below

sudden surge of power engendered.

MANOEUVRING
When manoeuvring

D™ should be selected for forward movement. Reverse
gear can be selected on quadrant, whilst vehicle is in forward motion

IDLING
Engage neutral (°N") when it is necessary to idle the engine for an extended
period

COASTING
Coasting must be avoided at a
damage due to lack of lubrication,

I times, otherwise the gearbox may suffer serious

TOWING

‘Transmission Inoperative. Tow the vehicle with a rear end pick-up or remove
the propeller shaft`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:9,title:`Transmission Operating Properly. The vehicle may be towed safely in “N”`,text:`Transmission Operating Properly. The vehicle may be towed safely in “N”
(neutral) at moderate speeds. For long distance towing (over 100 miles) the pro-

peller shaft should be removed

PUSH STARTING

If the engine fails to start in the normal manner, it may be started by pushing.
Towing the car to start is not recommended due to the sudden surge of power when
the engine starts.

Turn the ignition on, then eng
pedal slightly, after the vehicle has been pushed to a speed of 15 to 25 m.p.h.

age | (low) position and depress the accelerator
(approximately). the transmission will drive the engine.
OPTIONAL MANUAL ‘TRANSMISSION
The change speed arrangement being conventional, we do not propose to describe

the method of engaging and changing gear, but we give here a plan showing the gear

lever positions.

Fig, 2

OVERDRIVE

To engage overdrive, which can only be ope
down switch on facia, No movement of the clutch pe:
process to return to top speed position, If a change out of top gear is made with
overdrive switched on, a special switch will automatically cut out the overdrive.

ited from top speed position, push
is necessary. Reverse

On returning to top gear the overdrive will automatically be switched off.

Power changes are inhibited and it is necessary. therefore, to ease back the
al and wait for the engagement to occur when changing from direct
ed into the disengagement of overdrive.

accelerator pe
gear into overdrive. No inhibition is enginee!
On no account must the inhibiter mechanism be removed and any fault must

be immediately rectified

9`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:10,title:`LUBRICATION`,text:`LUBRICATION

FIRST 1,000 MILES SERVICE
The following special service is necessary after the car has covered the first
1,000 miles,

Drain and refill axle. Tighten driving belt if necessary
Check contact breakers, and adjust if necessary. Check electrical system.

Check steering and front end geometry Check tyre pressures

Cheek clutch adjustment (where applicable). Check lights

Check hydraulic reservoirs for Quid
Check all water connections and tighten if necessary

king system,

A— 1,000 MILE
Al King Pin Bearings Upper and Lower Grease Gun (4 nipples).
A2 Front Suspension Lower Grease Gun (2 nipples),
*N.B.— Rear Axle— Initial Drain and Refill

B— 2,000 MILES ok Montiry
BI Check Brake Fluid Level in Master Cylinder

Steering Rack Grease Gun (1 nipple)

C2 — Brake Balance Lever—Grease Gun (1 nipple)
C3 — Renew Oil Filter Element

C4 — Steering Dampers— Inspect and Top Up

C5 — Shock Absorbers Inspect and Top Up

C6 — Sump— Drain and Refill
C7 — Manifold Heat Control Valve—Lubr
C8 Automatic Transmission Inspect and Top Up.
C9 — Distributor —Inspect and Lubricate
C10 — Wheel Hubs, Rear Grease Gun
C1 — Rear Axle—Check and Top Up
C12 — Alternator Clean

MANUAL TRANSMISSION
C13 — Clutch Bell Crank Lever—Grease Gun (1 nipple).
C14 — Clutch Bell Crank and Fork Linka
C15 — Gearbox—Check and Top Up.

e.

s—Lubricate

D— 8,000 MILES

DI Air Cleaner Element—Clean and Check
D2 Oil Filler Air Cleaner Clean and Re-oil
D3 Distributor Clean. Check Points.

D4 Crankease Ventilator Valve Clean and Cheek.
DS Carburetter Choke Piston— Check

D6 — Sparking Plugs Clean and Cheek

0`,summary:`Lubrication and maintenance schedule including the first 1,000-mile service.`,checklist:[`Complete the first 1,000-mile service items after recommissioning or major rebuild.`,`Check fluid levels, fan belt, electrical system, tyres, lights and brakes.`,`Follow the recurring mileage schedule for greasing and inspections.`,`Record dates and mileage for future restoration history.`]},{page:11,title:`AND MAINTENANCE`,text:`AND MAINTENANCE

copa
cs

FHL
AL

-A2

cz

T BL
— cen
- -He
i Hy x
=> eg
| = Fa
f \\
|
\\
clown

Fig. 3`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:12,title:`ELECTRICAL EQUI`,text:`ELECTRICAL EQUI

All electrical equipment is of Lucas manufacture with the exception of the ignition,
charging and starter systems which are made by Autolite.

LAMP BULBS
Tin, Scaled Beam Units

6045W. . Lucas No, 54521872

5} in. Sealed Beam Units 37-5W ’ . Lucas No, 54521805
Side Lamp OW F Lucas No. 989
Number Plate . OW z Lucas No. 989
Reverse Lamp . 24W . 7 Lucas No. 199

Lucas No. 987
Lucas No. 987
Lucas No. 380
Lucas No. 382
Lucas No. 987
Lucas No. 989 ‘
Lucas No, 25:
Lucas No.

Instrument

Warning Lamps

Stop and Tail

Flashers, 3
Gear Quadrant Light
Boot and Bonnet Light
Map Light

Interior Roof Light

BATTERY (Negative Earth)

The Lucas 12 volt Battery Type BTZIIA, 72 amp hours. is situated on the
left-hand side of the bulkhead. When the acid level falls below the top of the plates,
distilled water should be added until the baflle plate is again covered. It is extremely
important not to raise the fluid level beyond the amount necessary to cover the baflle
plate as surplus fluid could, under certain conditions. cause the acid to overflow.
Keep the battery terminals clean and tight and well smeared with petroleum jelly.
This will protect the terminals from corrosion, which if allowed to continue unchecked,

would result in a break in the battery circuit.
It is important that the battery be firmly secured at all times.
Battery is held in position by a clamp which is secured by four wing nuts.

FUSES ’
The main and auxiliary fuses are 35 amp and the fuse box is located forward
and below the right-hand side of the facia panel. i

HEADLAMPS.

The four headlamps contain sealed beam light units, giving four main beams in
the ‘on’ position and two meeting beams in the ‘dip’ position

The sealed beam units have a high degree of accuracy permitting the aiming of
the beam to be effected with reference to a mechanical feature of the lamp. Three
‘aiming pads’ are moulded in the outside face of the lens to provide an ‘aiming plane”
which, when set vertical and square, gives correct beam aim. This is done by a pair`,summary:`Electrical equipment page covering Lucas/Autolite equipment, bulbs, battery, fuses and positive earth.`,checklist:[`Confirm the car is still wired as positive earth before adding accessories.`,`Check battery security and electrolyte level.`,`Use 35 amp main and auxiliary fuses as stated by the manual.`,`Do not increase fuse rating to mask a fault.`,`Verify Lucas/Autolite originality before replacing components.`]},{page:13,title:`of mechanical ‘aimers’ before the car leaves the factory and any subsequent chec`,text:`of mechanical ‘aimers’ before the car leaves the factory and any subsequent checks
should be made with this type of equipment

As the filaments are sealed in the unit it will be necessary to replace the complete
unit in the event of filament failure.

The headlamps can be “flashed” by pulling the trafficator control lever backwards.

SCREENWIPER
The screenwiper is of the two-specd heavy duty type and the motor is housed on
the scuttle. To operate turn knob on facia clockwise to the required position,

SCREENWASHER
The electric sereenwasher is brought into operation by depressing the screen-

wiper control knob.

MAP LIGHT.

To replace map light bulb the central instrument panel should be removed. The
festoon bulb is secured in a transparent plastic housing and this should be slid forward
and down, when the bulb will be easily accessible.

GEAR QUADRANT LIGHT
To replace bulb remove cover and slide the bulb holder and bulb out from the
left-hand side of the panel

BRAK

A Dunlop hydraulic dise braking system is used on all wheels, being operated

by the foot pedal in conjunction with Vacuum Servo, The handbrake is separate
from the hydraulic foot braking system and operates through a linkage to the self”
adjusting rear brakes. ‘The supply tanks for the brakes and clutch master cylinder
(when fitted) are separate. The fluid level should be checked approximately every
2,000 miles. and topped up if necessary with Dunlop Dise Brake Fluid, to within
half an inch of the top of the tanks. This clearance is necessary to allow for the
expansion of the brake fluid, See separate handbook for instructions on Disc Brakes.

sy

WARNING.—Do not drill main frame tubes in a circumstances as these also
function as vacuum reservoirs for the braking system, and in the case of manual trans-
mission, the clutch control system.

BRAKE SERVO

The vacuum piston of the Servo should be regularly lubricated every 12,000 miles,
to prevent the leather cup from hardening and causing either an air leak or seizure
of the piston. The correct lubricant for this purpose is Edgar Vaughan’s
“Cosmolubric’, Otherwise the Servo motor should not require attention over long
periods, However, should any trouble be experienced with the Servo, it is recom-
mended that the unit be returned to the manufacturer for servicing. (See page 23).

3

$e`,summary:`Lighting, wiper, and brake/servo information.`,checklist:[`Use correct headlamp units and adjustment method.`,`Check wiper operation and parking before dismantling.`,`Check brake fluid every 2,000 miles.`,`Do not drill chassis/main frame tubes because they are vacuum reservoirs.`,`Treat servo faults carefully and use a specialist if needed.`]},{page:14,title:`Page 14`,text:``,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:15,title:`FUEL SYSTEM`,text:`FUEL SYSTEM

The fuel system consists of the tank. line and filters, mechanical pump. carburetter
and air cleaner. The fuel tank contains 16 gallons (Imp.), 19 gallons (U.S.) or
72 litres. An orange warning light in the rev counter face begins to flicker when
fuel level is down to 3 gallons (Imp.) and remains in the fully on condition as the
level drops further. A solenoid operated flap can be raised by a switch on the
right-hand side of the facia (Re-fuel) Lo expose the fuel tank filler pipe. Alternatively
this Hap can be raised manually by depressing a button situated below the forward
left-hand corner of the boot opening.

The carburetter is automatic and the only adjustments that may normally be
required are the idling speed settings.

IDLE SPEED ADJUSTMENT

To make the idle speed adjustment, the engine must be thoroughly warmed up.
For the best results, it is recommended that the rev counter be used in this adjustment.

Before making the idle speed adjustment observe the following precautions :—

On cars equipped with the automatic transmission loosen the nut in the sliding
link of the carburetter to bellerank rod so that the stop in the transmission will not
interfere with the free movement of the carburetter throttle lever.

To make idle speed adjustment, proceed as follows:

(1) Turn the idle speed serew in or out to obtain 500 r.p.m. Be sure the choke
valve is fully open and that the fast idle adjusting screw is not contacting the
fast idle cam

Turn cach idle mixture screw to obtain the highest rp.m. While making the

adjustment. carefully watch the rey counter and notice that the speed can be

decreased by turning the screws in either direction from the setting that gave

the highest r.p.m. reading.

(3) Readjust to 500 r.p.m. with the idle speed screw

(4) Turn each idle mixture adjusting screw in the clockwise direction (weaker) until
there is a slight drop in r.p.m. Now, turn each screw out, counter-clockwise
(richer) just enough to regain the lost r.p.m
This procedure wil

for smooth idle. Thi

sure that the idle has been set to the leanest possible mixture
setting is very important,
Since the correct speed was originally set using the idle speed screw, the speed
obtained after finding the leanest smooth idle setting will probably be too fast,
(5) Readjust the idle speed screw to obtain correct idle speed. Repeat steps (2) and
(4) above if necessary

After the proper idle speed has been obtained, move the sliding link to the rear,
gainst the stop, and tighten the nut securely.

FAST IDLE SPEED ADJUSTMENT
To set the fast idle speed. proceed as follows:

(1) With the engine not running. open the throttle halfway, close the choke valve:
then allow the throttle to close. Release the choke valve.

Is`,summary:`Fuel system and Carter carburetter details.`,checklist:[`Check tank, lines, filters, pump and carburetter as a system.`,`Verify low-fuel warning operation if diagnosing gauge/warning issues.`,`Inspect carburetter linkage and choke operation before mixture adjustment.`,`Use the scan to identify correct Carter carburetter screws and linkage.`]},{page:16,title:`The fast idle adjusting screw should be centred over the index mark on the fast`,text:`The fast idle adjusting screw should be centred over the index mark on the fast
idle cam. If an adjustment is necessary, bend the fast idle rod at the angle, to
secure proper position of the fast idle cam, (See Figure 6).

(2). With the engine running and warmed up, turn the fast idle adjusting screw in or

out to the specified 1700 r.p.m.

HOKE VALVE ty
PEN

FAST IDLE
gs¥,, CONNECTOR ROD

ye TO ADJUST BEND

9g AT THIS ANGLE
a .

7 SECONDARY LOCKOUT
| PAWL

A

x

+e
ay, Ry INDEX

THROTTLE VALVE > .
LOSEC ~ \\ MARK ON CAM 6x
FAST IDLE ADJUSTIN RE
Fig. 6

THROTTLE LINKAGE
If for any reason the throttle linkage has been disturbed, the instructions in
Fig. 7 must be carried out in order to regain the original settings.

Fig. 7

16`,summary:`Fast idle adjustment and carburetter linkage procedure.`,checklist:[`Warm the engine before final adjustment.`,`Centre the fast idle screw over the index mark on the cam.`,`Bend the fast idle rod only as described if alignment is wrong.`,`Set fast idle to the specified rpm shown in the manual.`,`Recheck linkage moves freely after adjustment.`]},{page:17,title:`ACCELERATOR PEDAL ADJUSTME`,text:`ACCELERATOR PEDAL ADJUSTME
The accelerator pedal is adjustable for length as indicated in Fig, 8.

Fig. 8

CARE OF TYRES

TYRE PRESSURES

Standard tyre specitication—Dunlop 6.70 15 RS

The correct pressures are as follows: —24 p.s.i. all round,

For town use only, rear pressures may be dropped to 22 p.s.i

For sustained high speed in excess of 110 miles per hour, the
should be increased to 30 p.s.i

Pressures (including spare) should be checked and adjusted
This should be done when the tyres are cold and not when they have
running
corrected.

lyre pressures

at least weekly.

attained normal
temperatures. Any unusual pressure loss should be investigated and

Under-inflation has an adverse effect on the car and causes rapid and sometimes
irregular wear, Also the casing may be damaged by excessive bending.

TYRE AND WHEEL BALANCE

Balancing of tyre and wheel assemblies is essential.
All wheel assemblies on JENSEN cars are balanced before leaving the factory.
The original balance may be disturbed after a period of running. It can be
cked, and, if necessary, corrected by any Service Station with tyre bal
equipment

ch

lancing

7`,summary:`Accelerator pedal adjustment and tyre pressure guidance.`,checklist:[`Set tyre pressures cold.`,`Use 24 psi all round as the normal pressure.`,`For town use only, rear pressure may be reduced as stated.`,`For sustained high speed, increase pressure as stated.`,`Check accelerator pedal length using Fig. 8.`]},{page:18,title:`AFFECTING TYRE LIFE`,text:`AFFECTING TYRE LIFE
hich have an adverse effect on tyre life are:

FACTORS

The most important factors w
(1) Incorrect tyre pressures.
(2). Misalignment of wheels.
(3) Harsh acceleration Wheel spin should be avoided

(4) Frequent fieree braking

(Sce alignment of front wheels, below),

SPARE WHEE
To remove spare wheel fit special adaptor
This will expose as
brace turned anti-clockwise until the wheel can

into wheel brace and lift 1 t-hand
lotted tube into which the adaptor

rear corner of boot carpet
be with-

should be inserted and the

drawn, To replace wheel reverse this operation

FRONT SUSPENSION

The independent front suspension is of the “Wishbone” type, the coil springs
ame and the lower wishbone, Dampin

The dampers should be topped up
Suspension lubrication points

being held in compression between the chassis fr

is elfected by Piston type hydraulic dampers
Damper Fluid every 4.000 miles.

with Armstrong
are shown in the lubri

ation chart.

ALIGNMENT OF FRONT WHEELS
Alignment of the front wheels isan import
The front wheels should have a toe-in of ih
taken between the wheel rims at the front and rear of the wheels ata he
the centre of the wheel from the ground. The rear measurement should be jj; ins.
eater than the front measurement. Ifthe difference between the Wwo measurements
are out of alignment and adjustment should be made

ant factor in tyre economy and ease of
ins. Thiy measurement is

steering.
ight equal to

| is other than this, the wheels
immediately

To carry out this

rods and rotate an equ

toe-in. When the correct mea

tic

adjustment, loosen the locknuts on the ends of the steer
al amount in the appropriate direction to give the correct
isurement has been obtained, retighten the two locknuts.

ADJUSTING FRONT WHEEL BEARIN
(1) Jack up front of the car and remove the nave plate and hub cap.
(2) Remove cotter pin.
(3) Tighten wheel bearing nut t
with slot of nut over cotter pin hole.
(4) Back off nut one slot and install new cotter pin

o about 90 intbs. while rotating wheel and finish

LUBRICATION OF FRONT HUBS

Wheel bearings should be cleaned and repacked with grease every 16,000 miles.
under normal conditions. If grease Is emulsified the hub should be dismantled and
Grease should also be sparingly applied to the

The hub should not under

the bearings cleaned and regreased
ces of the hub and cap as shown in Figure 9

inner surt
filled with grease

any circumstances be completely

18`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:19,title:`NS`,text:`KK

NS

Cc

lb`,summary:`Front wheel alignment and bearing adjustment page.`,checklist:[`Measure toe-in at wheel height.`,`Use 1/8 inch toe-in as the manual reference.`,`Jack and secure the vehicle safely before bearing work.`,`Remove nave plate and hub cap before adjustment.`,`Recheck for free rotation and no excessive play.`]},{page:20,title:`REAR AXLE`,text:`REAR AXLE
The rear axle with Powr-Lok limited slip differential is of the semi-floating type

A cover on the rear of the gear carrier housing permits the inspection and

flushing of the differential assembly without dismantling the axle.
ar ratio is Stamped on a tag attached to the assembly by one of the

The axle
ier housing

The axle serial number is stamped on the g

rear cover screws.
h reference to any particular

and should always be stated when corresponding wit
unit.

In the event of trouble through any cause, wh
recommended that use should be made of the factory onditioning service.

For rear axle lubrication, sce instructions on pages 10, IL & 24.

Damping is effected by direct acting telescopic dampers which are sealed and

require no adjustment

ever possible it is strongly

DRIVING BELT ADJUSTMENT

The belt must be sufficiently tight to prevent slip at the
ack to deflect the centre of the belt about } in

alternator and water

pump. yet there should be sufficient sI

between pump and alternator
To make any necessary adjustments, slacken the bolts and raise or lower the

alternator until the desired condition of the belt is obtained. then securely lock the

alternator in the new position

ELECTRIC COOLING FANS (Engine Radiator)
Two electric fans are provided and these a
coolant temperature reads above “N° (normal) on the gauge.

wutomatically operated only when

HEATING AND VENTILATION
A heater of 4 kilowatt output is fitted, the controls of which are clearly marked

The two-speed fan is operated by a three-position switch marked “Fan” on the facia,

Sliding panels are provided on each side of the scuttle to permit additional cool air
to be admitted.

A water valve self regul
temperature which has been selected by the hand control
ake to the heater is controlled by the knob below facia.

ating control is provided in the heater to maintain the

The main air int

COOLING SYSTEM
ant is by a large outlet centrifugal pump with a thermostat

Circulation of the cool
to assist rapid warming from cold
Capacity 24 pints (Imp.). 29 pints (U.S.), 13.6 litres,

TOPPING UP
WARNING.—The cooling system
level should be made when the engin
weekly. Top up when necessary to
tank when the engine is cold

pressurised at 14 p.s.i, AI checks on coolant
cold or cool. Coolant level should be checked
approximately | in. below the top of the header

20`,summary:`Rear axle, cooling/heating and drive belt adjustment.`,checklist:[`Do not dismantle the Power-Lok rear axle without the correct Churchill tool.`,`Do not remove the header tank cap when hot.`,`Check coolant weekly when cold.`,`Top up to about one inch below the top of the header tank.`,`Adjust alternator/water pump belt using the alternator guide slot.`]},{page:21,title:`WINTER PREC.`,text:`WINTER PREC.

In winter, an
cooling water as a
radiator. Ca,

radiator

DRAINING COO!
There are thre
cach side of engine

It is advisable occasionally to cle
wire sinee the drain t

FLUSHING

qT
deposits within the
clean running water

Uhe rack and pi
grease should be
The steering

inspected and topped
The steering whe
column and r:

Dust on the car may be
the car must be thoroughly
attempt to rub dirt off the

of the cellulose,

Grease and tar spl.

petrol.

fully follow
and when topping up.
When anti-fre

© ensure efficient circulation of the

applied every 4,000 miles,

ball joints at the outer ends of the
Two hydraulic dampers are fitted

wusing or lowering the

AUTIONS

anti-freezing mixture of Ethylene Glycol base must be added to the
safeguard ig and damage to the cylinder block or the

the maker's instructions when preparing the mixture,

eze has been added an anti-freeze label should be affixed to the

LING SY
¢ draining points:

one at the bottom of the r
crankcase at the base of the eylinder blocks.

ean out the tap aperture with a strong piece of
‘aps may become choked with sediment,

‘adiator and one on

coolant and to reduce form,
cooling passages, the system should be
every 5,000 miles and before

ation of chemical
thoroughly flushed with
adding anti-freeze.

STEERIN
MON unit is fitted with

a single grease nipple and multi-purpose
Ue rods do not requir
in the rack housing
up if necessary every 4,000 miles with Sh
el can be adjusted by releasing the nut

steering wheel to the

© attention
and these should be
ell Tellus 15

at the top of the steering
desired position.

BODYWORK
lightly flicked off with a duster,
washed and dried before
car will result in a severe

but on all other occasions
4 cellulose polish is used. Any

scratching of the smooth surface

ashes must be carefully removed with a soft rag

dipped in

WASHING AND POLISHING

When washing the
slow flood of water and
drying. use a good quali

fo the surface of the cellulose
An occasional application of

maintaining a smooth fi

car, commence from the top and work downwa
then leather off all the surplus moisture.
Ly cellulose polish which will not only impart a brilliant lustre

but will help to preserve it from atmospheric corrosion,

# good class wax polish will also help considerably in
nish

rds, using a
After washing and

21`,summary:`Winter precautions and anti-freeze guidance.`,checklist:[`Use anti-freeze in winter conditions.`,`Check cooling system condition before relying on anti-freeze protection.`,`Inspect hoses and radiator condition during seasonal maintenance.`,`Record coolant type and change date.`]},{page:22,title:`SEATS`,text:`SEATS
Both the front and rear sea
require any attention other than an oceasional clea

Als are upholstered in best quality hide. and will not
in down with a cloth moistened in

water

Provision is made for
is effected by pushing the control
tion casing the seat backward or forward as required
gger on the adjustment lever ts located in one
adjustable for rake.

“fore and aft” adjustment of the front seats. Adjustment
lever. located beneath the seat in an outward

direct To ensure that the seat

is properly located, cheek that the tr
of the adjustment apertures. ‘The seat backs are

CHROMIUM

Wash chromium plating with soap and warm water. On no account use metal

polish

OTHER ATTENTIONS
The front shroud safety ca
sly

tich should be regularly checked to ensure that it is

functioning corre
Door locks, hinges
oceasionilly and be checked for security

and other small working parts should be given a drop of oil
Sliding seat runners will benelit if period-

ically smeared with grease.

TOOL KIT
An adequate set of tools is supplied with the car
The tools are stowed in a compartment on the lett hand side of the boot
The tool kit comprises the following
| Phillips Head Screwdriver.
| Standard Screwdriver
| Electricians’ Screwdriver
1 Plug Spanner. 14 mm.. complete with Tommy Bar.
1 Open Ended Spanner, "5 4" AE
| — Open Ended Spanner. jj
1 — Open Ended Spanner. jh" - 7” AE
| — Adjustable Spanner, 3”.
1 — Pair Pliers.
| — Tyre Pressure Gauge.
1 Lifting Jack (Bevelift)
1 Wheelbrace, }” A F
1 — Adaptor for Spare Wheel

EQUIPMENT
JENSEN MOTORS LTD. accept no liability for tyres, speedometers. elect
equipment and components not manufactured by the Company although supplied
by the Company. Claims in respect of such of the proprictiry parts as are listed
below, or orders for repair of them may be addressed to their respective manu-`,summary:`Seats, hide upholstery and interior care.`,checklist:[`Clean hide upholstery gently with a lightly moistened cloth.`,`Avoid harsh modern cleaners on original leather.`,`Preserve original interior materials where possible.`,`Test any cleaner on a hidden area first.`]},{page:23,title:`facturers from whom further information may be obt`,text:`facturers from whom further information may be obt

ined on application to the
addresses quoted below

IMPORTANT
When claims are being made under

guarantee iis essential to quote the chassis
number which is stamped on a pl

ate located under the bonnet on the R.H. side of the
scuttle, and the date on which the car was commissioned

BRAKES

Dextop Rim & Wurit Co. Lrp.. Foleshill. Coventry,

BRAKES SERVO UNIT
ALToMolivE Propvers Co, Lrp.. Tachbrook Road.

DAMPERS
ARMSTRONG PATENTS Co.

Leamington Spa

Lip. Eastgate, Beverley. Yorks

ELECTRICAL EQUIPMENT (Gene al)

Josten Lvcas (ELecrRicAL) Lip., Gt Hampton Street. Birming
Dordrecht Road, Acton Vale. London, W.3

‘. and

ELECTRICAL EQUIPMENT (Ignition, charging and st

jarter)
\\UTOLITL. (Refer to JENSEN. Motors Lrp.)

INSTRUMENTS,

S. Switit & Soxs (M.A.) Ltp.. Cricklewood Works. London, N.W.2
PYRES

Dextor Runax Co. Lip, Fort Dunlop. Birmingham,

und
1. Albany Street. London N.W.1

tOOLS
ABINGDON KING Dick L1p., Abingdon Works, Kings Road, Tyseley, Birmingham 11
LIFT JACK

JENKS Bros. Lrp.. Brittol Works, Bushbury, Wolverhampton

DOOR HANDLES AND KEYS
Witmor BReebEN Ltp., Easter Works, € amden Street. Birmingham |

EXHAUST SILENCERS

SERVAIS SILENCERS Lip. Ashford Works. Ashford Road,

Cricklewood, London,
N.W.2

RADIO
WokLp Rapio Lip., Edgware Road Cricklewood. London, N.W,2.

{s our policy is one of continual improvement, we reserve the right to alter the
specification and maintenance instructions without notice`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:24,title:`Page 24`,text:``,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:25,title:`SERVICE LUBRICATION`,text:`SERVICE LUBRICATION

a aes

GRADE AND ATTENTION
| ENGINE UNIT CAPACHIES, PERIODS DETAILS
| ' Check oil level and top up if
| Sump | Above SAE 30; 10W-30 | 4.000 m. | necessary at Trequent intervals |
| 2FOC 20W-40 (6,500 kK.) | when new
| orfor | Change oil and filter at stated

| Aslowas — | SAE 20W Town Traflig| intervals.

| OF (-12 C)] 1OW-30 oF operation
| below

| As tow as SAF low: sw-20 [40 he. 5)
| WFC) 1OW-30 Every

2.000 m
| Below SAE SW-20 B.250 k.)
[oF eae sw or

2 months,
| Sump and Filter | 8! pints (Brit. Imp.) |

10 pints (US) Note. — When filter only is
4°7 litres changed add 2 pints
Oil Filler Air SAE 30 Normal | Clean with paraffin or petro!
Cleaner 5.000 m. | andl re-0il
| (13,000 k.)
| Dusty
500 ny.
(800 k.)
| Carburetter Air Clean | Cleun housing and cover. Using
| Cleaner 8.000 m. | compressed wir, gently clean

(13.000 k| paper clement.” Hold nozzle

Renew | Jin. min. away from inside face.

32,000 m. | Examine and discard if any

(51,000 k.) | holes in filter or defacement of
seal on clement.

Distributor SAB 10W-30. 4,000 m

5-10 drops in oil cup
16.500 k.)

SAP 10W-30, When servicing points lubricate

felt rotor wick 2—3 drops, and
MP. Chassis apply thin coat of grease to cam

Grease and bumper block ilter wiping
clean.
Manifold Heat Heat Control 4.000 m. | Apply to each end of the valve
| Control Valve Valve Solvent (6,500 k.) | shaft when mai

fold is cook. |
| (Mopar 1879318)

= |
| Crankease Ventilator Mopar Carburettor | 8,000 m. | Clean and cheek.
Valve

ner (13,000 kK | Extensive short trips with fr

PN 1643273 quent idling (e.g. heavy city

(Denatured alcohol) traffic) require “more. frequent
servicing,`,summary:`Service lubrication table covering engine and service intervals.`,checklist:[`Use the lubrication table as the authoritative service interval reference.`,`Check oil level and top up frequently.`,`Record mileage and lubricant used.`,`Verify grade/capacity from the scan before filling.`]},{page:26,title:`SERVICE LUBRICATION (continued)`,text:`SERVICE LUBRICATION (continued)

GRADE AND. ATTENTION

CAPACITIES, PERIODS DETAILS

ENGINE. UNIT

16,000 m. | Replace Filter No. 1.

(26.000 k.) | Earlier replacement may be
necessary due to operating con-
ditions or dirty fuel

Fuel Filter (2 off)
(1) Before Fuel Pump
(2) Before Carburettor

32,000 m.
(51,000 k.) | Replace Filter No. 2.

8,000 m. | Check. I piston sticks in its

Carburettor Choke Mopar Carburetor
Piston Cleaner (13,000 k.) | well apply a quantity of solvent
PLN 1643273 into the choke piston link

(Denatured alcohol) ‘opening in the air horn,

4,000 m. | Wipe clean and inspect ventila~
(6,500 k) | tion holes for dirt accumulation,

8,000 m. | Spark Plugs.
(13,000 k.) | Clean and adjust. ssary
replace.
Distributor.
Remove cap and rotor, Clean
and. inspect. Check breaker

points for pitting, blueing and
misalignment, and clean’ and
adjust. Lubricate cam and wick.
Check all wire and caps for
seating and clean and set for
ition timing

Carburettor.

Clean air filter. Check fast idle
cam. Adjust idle speed_and
mixture to correct settings.
Tighten Carburettor to manifold
nuts. Check operation of choke
piston and manifold heat control
valve. Use appropriate solvents
if necessary.

| Electrical.
Check battery S.G, Clean and
tighten bi terminals and

connections.

26`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:27,title:`SERVICI`,text:`SERVICI

LUBRICATION (continued)

uN

Automatic
Transmission

GRADE AND ATTENTION
CAPACITY, PERIOD DETAILS
Automatic 4,000 m. | Check. With engine and trans-

Transmission Fluid | (6,500k.) | mission at normal

‘operating

Type *A*, Suffix “A” temperature with handbrake on
momentarily engage each gear
N.B.— Use tun dish ending in neutral. Fluid level
Tor ease of filling. should be at or below “F* mark
but never above when in its
warmed up condition. Add or
delete as necessiry. If abso-
lutely necessary to check cold,
fluid should be at s\\ ightly below
a the “add one pin .
154 pints (Brit. Imp. below this, add pint. Re-check,
IS} pints (U.S.) | 32,000 m. | Adjust automatic transmission
8°75 litres (51,000 k.) | and replace oil and filter, This
should be done more frequently
in cars whose operating condi-
- tions are similar to the follow-
ing:
(a) Frequently tow trailer
(b) Operate in heavy traffic: in
hot weather
(©) Operate frequently with ab-
normal loads.
Manual Transmission Automatic 4,000 m. Check fluid level by removing
Transmission Fluid (6,500 k.) | filler plug. Replenish to filler
Type “A’, Suffix *A* hole,
32,000 m. | Drain and relill
Propeller Shaft MultiPurpose Grease Disassemble, clean and repack
2 o7s. with grease.
Universal Joints
(a) Front Ball and
Trunnion NLGI-O of 1 (U,S.)
(b) Rear Cross and
Roller
| Rear Axle Use only 4,000 m. Check and top up.
. Shell S1747A (6,500 k.)
| 3 pints (Brit, Imp.) 12,000 m, Di and refill
| 36 pints (U.S.) (19,500 k.) | N.B. Initial drain and refill at
1-705 litres | 1,000 miles.
27`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:28,title:`SERVICE LUBRICATION (continued)`,text:`SERVICE LUBRICATION (continued)

GRADE AND ATEN TION
ust CAPACTIY PERIOD DETAILS
Wheel Hubs — Front Grease 16,000 m. | Inspect and repack if grease is
Multi-Purpose (26,000 k) | emulsitied.
32,000 m. | Clean and repack
(51,000 k.)
Wheel Huby Rear Grease 4,000 m. | Grease-gun.
Multi-Purpose (6,500 k.)

32,000 m. | Clean and repack.
(51,000 k.)

Grease 4,000 m, | Grease-zun
Multi-Purpose (6,500 k.) .
Front Suspension Grease 1,000 m. | Grease-2un
3 Points Side Multi-Purpose (1,625 ko)
Brake Balance Lever Grease 4,000 m. | Grease-xun.
Multi-Purpose (6,500 k) +
Shock Absorbers Armstrong 4,000 m. | Inspect and top up.
Front Suspension Hydraulic Fluid (6.500 k.)
ata |
Steering Rack Dampers | Shell Tellus 1S 4.000 m. | Inspect and top up
(6,500 k.)
Clutch Bellerank Lever Grease 4.000 m. | Grease-2un
Multi-Purpose (6,500 k.)
Clutch Bellerank and Oil 4,000 m. | Oil can.
Fork Linkages SAE LOW-30 (6,500 k.)
Brake and Clutch Hydraulic Monthly or | Check and top up.
Master Cylinder Brake Fluid. 2,000.m
Dunlop, or G50 Kk)
SAE 70-R3
Oil Filter 4,000 m, | Repkice oil filter, Mopar Part |
(6,500 k.) | No. 2129109.
| Spark Plugs Autolite A32 8,000 m. | Check, clean, re-gap.
(13,000 Kk.)
Champion J-9Y 20,000 m. | Replace.
2,000 k)
Brake Servo Piston r Vaughars 12,000 m. | Lubricate leather cup on vacuum
smolubric™ (19,500 k.) | piston.

28`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:29,title:`Index`,text:`Index

N Page Page
Air cleaner 25 Lubrication—axle 27
Anti-freeze . 21 Lubrication chart 2, mm
Axle—rear 2 i 20 Lubrication—engine . 0. 25
Lubrication gearbox, automatic « i

B Lubrication gearbox, manual . 2

Battery
Bearings—{ront hubs

Bearings rear axle Numibers 5
Brakes
Bulbs °
Oil filter ‘ 28
c Oil pressure . 5
Carburetter ‘ 15 eben ®t - %
Cluteh . 28
Contact br 6 B
Comrols Propeller shatt ee
Cooling System 20
R
dD Radiator
7 Dampers front . F ay Rearvaxk
Dampers—rear © 3g Recommended lubricants
Dal, gonaesl ¢ Replacement bulbs
Driving belt adjustment 29, Running instructions
‘ s
Engine dati 5&6 Seataninstmens to / 2
Engine— lubrication 230 a, is
Engine starting gy «= Re 15
Hlectrical Equipment : Sparking plugs . 6
Starting 1 6
i Steering 21
Filter air 45 Suspension front i Is
Filter oil
Filters petrol :
Fuel system Tappets 6
Bae Temperature Gauge . ae)
Front Suspension . ar) HOOGKIE 8 x
Towing
+ c Transmission 7
box automatic operation 2.7 Tats a
Gearbox manual operation . 9
t
i A Upholstery . oR
Headlamp adjustment. 12 \\y
Heating and ventilating. 26 paiva tappete 6
1 Ww
Ignition timing a 6 Warning tights. ‘ 4
Instruments 4 Warning bulbs . 2
Wheels —alignment 18
1 Wheels balance . oI
Linkage throttle, automatic box... 16 Windscreen washer OB

29`,summary:`Index page for quickly locating manual topics.`,checklist:[`Use the index to find source pages for a topic.`,`Then open the scanned page and OCR text side by side.`,`Confirm OCR against the original scan before using a specification.`]},{page:30,title:`Page 30`,text:``,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:31,title:`Vehicle Particulars`,text:`Vehicle Particulars

CHASSIS No.

- ENGINE No.

KEY Nos.

IGNITION, SHROUD AND Door

Boor AND Cursy LOCKER

REGISTRATION No

ORIGINAL DATE OF
DELIVERY FROM WORKS`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]},{page:32,title:`NREL = f .`,text:`NREL = f .
Fane’ = | ROD VAS 4

Wis r™ 10 VAR

\\ AAT IS

Printed in England by Jolly & Barber Led., Rugby.`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]}],ge=[{id:`mk3-p01`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:1,sourcePage:1,title:`HANDBOOK OF INSTRUCTIONS`,summary:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,plainEnglish:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,ocrText:`HANDBOOK OF INSTRUCTIONS
FOR THE
JENSEN C-V8 MK.III
eg P
a ee "~& *
. € 7
é J
a ee
Ta f @)
Seem 1")
4
This handbook is published for the use and assistance
of owners of JENSEN CARS. It embodies in a concise form the
advice and suggestions of the Company's
Technical Staff in regard to lubrication, general care and
maintenance, together with supplementary information regarding
the necessary adjustments which may be required
from time to time.
COMPILED AND PUBLISHED BY
JENSEN MOTORS LIMITED Tee
WEST BROMWICH, ENGLAND
Telephone: West Bromwich 2041 (10 lines)
Tetegrems: Expert Telex: 33526
'The Chastis Serial Number will be found an the identifcation plate
fixed to the front of the scuttle, and alsa on the underside ot fhe {
'companion box lid
N.B. The full Chassis Serial Number must be quoted in all
correspondence. |
|
1`,checklist:[`Technical Staff in regard to lubrication, general care and`,`the necessary adjustments which may be required`,`The full Chassis Serial Number must be quoted in all`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p02`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:2,sourcePage:2,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p03`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:3,sourcePage:3,title:`VEHICLE PARTICULARS`,summary:`Owner record page for chassis, engine, key, registration and delivery details.`,plainEnglish:`Owner record page for chassis, engine, key, registration and delivery details.`,ocrText:`VEHICLE PARTICULARS
KEY Nos. :
Ignition, Shroud and Do0E << rveernenn
Boot and Cubby Locker emer nennnrymmnennnn
SEORUE TRATION OO i se
ORIGINAL DATE OF
DELIVERY FROM WORKS...

2`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p04`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:4,sourcePage:4,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p05`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:5,sourcePage:5,title:`Foreword`,summary:`Introductory notes from Jensen Motors about correct operation and maintenance.`,plainEnglish:`Introductory notes from Jensen Motors about correct operation and maintenance.`,ocrText:`Foreword

The Jensen C-V8 is designed and built to high standards of

precision and quslity. Every car when it leaves the works has been

thoroughly tested and adjusted by experts.

However, in order that the car may give the utmost satisfaction, it
| should receive adequate care and attention, and for this reason

the instructions given in this handbook should be observed.

In compiling this handbook some knowledge of the operation and

care of @ motor car have been pre-supposed. Ail descriptions of

position are relative to the driver's seat.

It is the aim and ambition of Jensen Motors Limited that every

'owner shall be completely satisfied. For this reason, Jensen

dealers are chosen with particular care, and can be relied upon to

carry out any servicing or repairs.

Alternatively, the Jensen Service Department at West Bromwich

is always at the disposal of any owner, and all communications in

connection with service matters should be addressed to the Service

Manager.

JENSEN MOTORS LIMITED
3`,checklist:[`thoroughly tested and adjusted by experts.`,`| should receive adequate care and attention, and for this reason`,`the instructions given in this handbook should be observed.`,`connection with service matters should be addressed to the Service`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p06`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:6,sourcePage:6,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p07`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:7,sourcePage:7,title:`General Dimensions and Data`,summary:`Key Mk III dimensions, capacities, tyre pressures, tuning data and basic specifications.`,plainEnglish:`Key Mk III dimensions, capacities, tyre pressures, tuning data and basic specifications.`,ocrText:`General Dimensions and Data
The chassis number will be found stamped on a plate secured to
the underside of companion box lid and on a plate secured to the
front of the scuttle, This number is also stamped on the front of
the chassis frame front cross member. The engine numbar is
stamped on the LH. bank of the cylinder block immediately
forward of No. 1 Cylinder.
Cylinders are numbered as follows —
AL, Bank Front to Rear 2-4-6-8
(UH. Bank Front to Rear 1-3-5-7
Bore 108 mm. (4.26 ins.)
Stroke 86 mm. (2.375 ins,)
Cubic Capacity 8,276 ce. (383 cu, ins.)
BHP. 330 at 4,600 p.m.
Compression Ratic 10.1
Firing Order 1-8-4-3-6-6-7-2
Coolant Capacity
including Heater 32 pints (Imp.), 38 pints (U.S), 18.2 litres
Oil Sump Capacity 84 pints (Imp.), 10 pints (U.S), 4.7 fives
including Filter.
{Dipstick top level must not be exceeded).
Engine Oil Pressure at 40/50 m.p.h. 45/65 psi
| Gearbox Capacity:
Automatic 17 pints (Imp.), 20 pints (U.S,). 9.5 litres
Manual 6 pints (Imp.), 7 pints (U.S.), 3.3 ftres
Reer Axlo Capacity 3 pints (Imp,), 3.6 pints (U.S), 1.705 litres
Fuel Tank Capacity 16 gaits, (Imp.), 19 galls. (U.S.}, 72 litres:
OVERALL GEAR RATIOS:
'Automatic tat 75:4
2nd 44a it
ae 307; 1
Reverse 6.74; 1 |
Manual Ist B16 11 1
2nd 586 21
ci 42651 i
Top 307 :1 "4
Reverse 792 :1
Tyres Durlop 6.70 x 15 Read Speod
Tyre Pressure 24 p£i (1.68 kg,/sq. cm.) all round (see Notes
'on Wheels and Tyres, page 20)
Wheelbase: 8 ft. 9 ins. (2.667 metres)
'Track (Static laden
weight): Front: 4 ft. 742 ins. (1.417 metres)
Rear: 4 ft. Bf ins, (1.445 metres)
Toe-in (Static ladan
weight): eins (1.6975 mm.)
Comber (Static laden
weight); 1° pos.
'Castor Angle (Static
Jaden weight): 2° pos.
King Pin Inclination 6° 30"
'Centre af Gravity 49 ing. (124.46 cm.) aft of tront axle
'Qvarall Width 5B tt 7 ing, (1.214 metres)
'
|`,checklist:[`{Dipstick top level must not be exceeded).`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p08`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:8,sourcePage:8,title:`'Overall Height 4 ft, 7 ins, (1,397 metres)`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`'Overall Height 4 ft, 7 ins, (1,397 metres)
'Overall Length 15 fr, 34 ins. (4.686 metres}
| Ground Clearance 8 ins. (14,6 cm.)
Turning Circle '36 fi, (11,892 metros)
Weight (dry) 29. cant. (1413.2 kilogrammes)
'Steering Ratio 17.2 :1 (3.3 turns, lock to lock}
} IGNITION TIMING 10° betore T.0,C. at 500 rpm.
| CONTACT GREAKER 094 ina to 019 ins. (.35 mm. to .48 mm)
GAP
SPARK PLUGS Champion J10Y. Gap .038 ins, (.89 mm)
VALVE CLEARANCES Zerclash. No adjustment required
DIL SUMP CAPACITY It is important that sump should not be filled
above the high level mark an the dipstick, other
wise functioning of zerolash tappeis may be
| impsired
|
|
|`,checklist:[`DIL SUMP CAPACITY It is important that sump should not be filled`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p09`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:9,sourcePage:9,title:`Instruments and controls diagram`,summary:`Instrument panel layout diagram showing gauges, switches, warning lights and dashboard controls.`,plainEnglish:`Instrument panel layout diagram showing gauges, switches, warning lights and dashboard controls.`,ocrText:`INSTRUMENTS AND CONTROLS
tera counter —_
Wikia enresaroRe exe
a
Siam Woleoe wana BERT
Ge enecauee Gauce
Sroeaaen
fed ive VOTnCATION OUTLET
Soe am :
Recme evar
ae G1}
man brine connor oo
feee-— TT 1| LA
'love socken CD ami
a SS SF EY Cr
—+ @ Oe § |// ORS
mMmeAS=
Tt w ttf |
ltr Lp
NH | //]
caren oosren min
ATR Setecnoh cowraa
Mate ee a
a
eens Tartan RanTET
Fane Liouts conTnoL
Vanbecesn ype oun
'kre remenaruse Cowra
tSireoenes
ean seuecTon
feanan oo
faut geen wane era —————
toe ruet wnnve ger ——
Tonner 8 neab Alp Tagen CORTRGT
Permol rai Uo-retesee suarcat
Fig?
' |`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`diagram`,hidden:!1,isImageOnly:!0},{id:`mk3-p10`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:10,sourcePage:10,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p11`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:11,sourcePage:11,title:`Controls and Instruments`,summary:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,plainEnglish:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,ocrText:`Controls and Instruments
Pedals
On cars fitted with sutomatic transmission, only two pedals are
used in driving the car. The right-hand pedal controls the
accelerator, and the centre, broad pedal, the brake, The left hand
pedal operates the dipswitch and provides a footrest. With the
manual gearbox the pedal controls follow the conventional
arrangement.
Handbrake
The handbrake is centrally located and operates self adjusting
mechanical brakes on the rear discs only. A thumb-operated
fatchet release is incorporated in the handle.
Steering Wheel
The 17° steering wheel is adjustable on its shaft, to suit individual
requirements. Adjustment is effected by the black sleeve immedi-
ately below the wheel, The sleeve is loosened by turning it in
a clockwise direction, When joase, the steering wheel can be
moved up or down to the desired position, and re-locked by
tuming the sleeve anti-clockwise. (There are four holes toward
the lower end of the sleeve, and 8 4" Tommy bar may be used in
these if necessary).
Ignition and Starter Switch
The ignition end starter are both controlled by a single switch
with a removable key.
Tuming the key clockwise switches on the ignition circuit and
the ammeter, fuel gauge, and water temperature indicator, Turning
the key further clockwise against spring pressure will operate the
starter motor. As soon as the engine starts the key should be
released.
Choke
The carburettor incorporates en automatic choke (See Starting-up
section on page 8).
Cigar Lighter
The cigar lighter is operated by pushing it in as far as it will go,
After approximately 10 seconds it will pop out, and is then hot
enough for usa.
Fan Switch
The three-position fan switch controls the two speed heater fan
(See Heating Section page 23).
Panel Light Switch
The three-position panel light switch controls the panel lights
giving two levels of illumination. The panel lights are in circuit
with the main lighting switch, and will not work until the sidelights
are on,

6`,checklist:[`The handbrake is centrally located and operates self adjusting`,`The 17° steering wheel is adjustable on its shaft, to suit individual`,`Adjustment is effected by the black sleeve immedi`,`As soon as the engine starts the key should be`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p12`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:12,sourcePage:12,title:`The headlights may be flashed by pulling backwards on the`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Main Light Switch .

The sidelights and headlights are controlled by a three-position

switch on the facia. In the half-way position it will bring on the

sidelights, and in the fully down position the headlights. Once the

headlights are on, high or low beam should be selected by the foot

The headlights may be flashed by pulling backwards on the

direction indicator lever.

The Direction Indicators

The direction indicators are operated by a lever on the right of the

steering wheel. To indicate a tum, the lever should be moved the

sama way as tha steering wheel. The direction indicators are self-

cancelling after the turn has been completed. A visual indication

is given to the driver by the green light on the facia.

Pulling backwards on the lever flashes the headlights,

Windscreen Wipers and Washer

A dual purpose switch on the facia controls the windscreen wipers

ond washer. If the switch is turned clockwise to the first position,

the wipers will operate at normal speed : turning it further increases:

the speed of the wipers, The higher speed should not be used on

2 drying screen, as this will overlosd the motor.

The wipers are self-parking when switched off.

'The windscreen washer, which is of the electric type, is operated by
| pressing the knob of the wiper switch.

Gear Selector and Indicator (Automatic trensmission only)

'The gear selector and indicator are mounted on the steering

column. Five positions are marked on the indicator RN D 2 1.

The engine can only be sterted when the lever is the "N" position

(See Starting and Driving Section pages 8 & 9).

Clock

'The electric clock is set by the knurled knob on the bezel, which

should be pushed in to engage the hands. |f necessary, the clock

may be regulated by —_ the small screw head in the bezel,
| clockwise to retard, and anti-clockwise to advance.

Map Light Switch

A Map light is fitted in the upper facia roll above the left hand

face-level ventilator and is controlled by @ switch on the facia

marked "map",

Face-level Air Booster Switch

The switch marked "Air" on the facia operates a fan which

increases the fresh air output at face level.

Rear Demist Switch and Warning Light

This switch controls the electrically heated back light, (The

Gurrent {0 the rear light is cut off when the engine cooling fans

come into operation, so the demist warning light goes out, and

'comes on again when the fans cut out).`,checklist:[`headlights are on, high or low beam should be selected by the foot`,`To indicate a tum, the lever should be moved the`,`the speed of the wipers, The higher speed should not be used on`,`should be pushed in to engage the hands.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p13`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:13,sourcePage:13,title:`Horn Push`,summary:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,plainEnglish:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,ocrText:`Re-fuel switch
The re-fuel switch automatically unlocks the fuel filler flap on the
left hand rear wing. Should the solenoid fail, the flap can be
opened manually from inside the luggage boot, (See Fuel System
section page 12).
Horn Push
The twin horns are operated by the push button in the centre of
the steering wheel,
Selectaride Switch
The Selectaride switch on the transmission tunnel controls the
settings of the rear dampers. Four settings are available, from
SOFT up to 4. The harder settings should be used for high speeds,
'or when the car is be § laden.
The switch works in a CLOCKWISE direction only, and should not
be used unless the ignition is switched on.
Revolution Counter
The revolution counter has a red sector from 5100 RPM to
6000 RPM and engine speeds in this sector should not be
sustained, Maximum engine power is developed st 4600 RPM,
so no advantage will be gained by over-rewving the engine.
There is @ low-fuel warning light in the rev-counter face. This
glows continually when 3 gallons only remain in the tank.
Speedometer
The speedometer incorporates trip recorder and odometer. To set
the trip, the knob to the right of the steering column and below the
facia should be pressed upwards and turned anti-clockwise.
In the speecometer face is a high-beam warning light which glows
when the headlamps are in the raised position,
Ammeter
The ammeter indicates the charging or aenevieg rate of the
battery. Under normal running conditions a small charging rate is
indicated.
On starting the engine, the ammeter will indicste & high charge
tate for 2 short time, and then fall to auit the battery condition.
Oil Pressure Gauge
The oil pressure gauge operates only when the engine is running,
and should indicate a pressure of 45-65 p.s.i. under normal
conditions.
Coolant Temperature Indicator
The coolant temperature indicator operates only when the ignition
is on, Under normal running conditions, the Instrument pointer
should be within the white band on the scale. If the pointer enters
the red band—H—the cause should be investigated. DO NOT
remove the radiator cap when the engine is hot. (See Cooling
section on page 16).
Fuel Gauge
The fuel gauge indicates the petro! level in the tank shortly after
the ignition is switched on.

7`,checklist:[`The re-fuel switch automatically unlocks the fuel filler flap on the`,`Should the solenoid fail, the flap can be`,`The harder settings should be used for high speeds,`,`The switch works in a CLOCKWISE direction only, and should not`,`6000 RPM and engine speeds in this sector should not be`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p14`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:14,sourcePage:14,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p15`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:15,sourcePage:15,title:`Starting Up and General Running Hints`,summary:`Starting, running-in, cold-start and driving guidance for the Mk III.`,plainEnglish:`Starting, running-in, cold-start and driving guidance for the Mk III.`,ocrText:`Starting Up and General Running Hints
ENGINE RUNNING-IN PERIOD
itis not necessary to drive the new car at consistently low speeds
during the first few hundred miles of operation, Precision manu~
facturing methods and improved design make it possible to begin
driving in @ normal menner.
'While speeds in excess of 60 miles an hour should be avoided for
the first 300 miles, occasional spurts up to this speed (after the
'engine is warmed) will matarially assist the "running-in" process.
After 300 miles of driving, occasional bursts of higher speed are
not only permissible but desirable, The new car should not,
however, be operated at top speed until if has been driven at least
500 miles. High speed should always be avoided until the engine
is warmed up to operating temperature.
During the "running-in" period it is extremely important to keep
close watch on the engine oil level and the panel insttuments—
especially the temperature and oil pressure gauges. Sustained
high engine speed should be avoided during early life of the new
Car so that all parts will become adjusted to their position without
excess friction and heat.
The observance of these precautions will be reflected later on in
the prolonged life of the car. Under this heading, lubrication Is by
far the most important item. Many troubles are directly traceable
to lack of proper lubrication and owners will be well repaid by
giving careful attention to the lubrication diagram.
The angine attains maximum power at 4,600 r.p.m., and 6,200
p.m. should not be exceeded.
The illustration on page 6 shows the general arrangement of
controls. The following points should be observed in starting the
engine.
STARTING THE ENGINE
It is essential to ensure that the handbrake is appliod
before starting the ongine, 2 the automatic carburetter
system will cause the engine to run at a fairly fast idle speed on
initial starting from cold.
On cars with automatic transmission, move the gear range selector
lever to neutral, quadrant position "N". The engine cannot be
started unless the selector lever is in this position,
FOR STARTING FROM COLD
Depross the accelerator pedal slowly to one third of its
travel and allow it to return to closed position before
starting the engine.
Turn ignition key to extreme right to operate starter. When engine
fires, release key. The engine should start immediately.
NOTE—Do not pump accelerator pedal. If engine does
not start becauee of excess fuel in cylinders, push
accelerator pedal slowly to full open and operate starter
while keeping pedal depressed.
The fuel mixture is automatically adjusted to provide for easy
engine starting and for the werming up and operating periods.

a`,checklist:[`'While speeds in excess of 60 miles an hour should be avoided for`,`not only permissible but desirable, The new car should not,`,`High speed should always be avoided until the engine`,`high engine speed should be avoided during early life of the new`,`Car so that all parts will become adjusted to their position without`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p16`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:16,sourcePage:16,title:`GEARBOX OPERATION`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`GEARBOX OPERATION
The automatic gearbox is more than just a mechanism which
automatically adjusts the gear ratios according to conditions of
speed and load. An averriding control is provided which enables
the driver to exercise his own judgement and desire in regard
to the gear ratios to be selected and an understanding of what is
possible greatly enhances the pleasure to be derived from driving
the car.
'The gearbox provides three forward speeds, Neutral and Reverse.
The control quadrant is marked as follows :—
RND21
'The following indicates tha gears obtained in each range:
"1" 1st only (Maximum permissible 48 m.p.h.)
"2" 1st and 2nd (Maximum permissible 82 m.p.h.)
"D" 1st, 2nd and top
"N" Neutral
"R" Reverse
'There is one 'gate' position for reverse boy
To change into reverse press the button in the end of the gear lever.
TO DRIVE AWAY
If the driver so desires, he can leave everything to the automatic
gearbox and gear changes will occur at the theoretically correct
moment in terms of speed and load, Obviously, however, roed or
traffic conditions may be such that the automatic gear change may
be undesirable, and it is for this reason that the overriding controls:
are provided to enable the driver to enfarce a gear change as and
when desired.
The driver should, therfore, first familiarise himself with the
approximate speeds at which the automatic changes occur, These
are ae follows >—
D Range
Up-changes (m.p.h.)
1-2 2-top
Light Throttle W 16
Full Throttle 40 76
The owner-driver who wishes occasionslly to indulge in a very fast
get-away will obtain maximum acceleration by allowing the
automatic gearbox to make full throttle changes throughout the
speed rarige.
The automatic down-change at light throttle will normally occur
at the following speed —
Top to 1st direct 8 mpr.
Under "Kick-down" conditions down changes occur at speeds
below the following limits —
Top to ist 37 mph,
Top to 2nd 68 mph.
Caution must be observed when making a "Kick-down"
change at speeds below 32 m.p.h. in view of the sudden
surge of power engendered.`,checklist:[`automatically adjusts the gear ratios according to conditions of`,`To change into reverse press the button in the end of the gear lever.`,`traffic conditions may be such that the automatic gear change may`,`are provided to enable the driver to enfarce a gear change as and`,`The driver should, therfore, first familiarise himself with the`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p17`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:17,sourcePage:17,title:`MANOEUVRING`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`MANOEUVRING
When manceuvring, "D" should be selected for forward movement.
Reverse gear can be selected whilst vehicle is in forward motion
but only below 17 mp.h.
MOUNTAIN DRIVING
When driving in mountainous country or with heavy loads, the
2.r1 position should be selected on upgrades which require heavy
throttle for half a mile or more, Lower ratios reduce the possibility
of overheating the transmission and converter under these con-
ditions. The 1 position is for severe operation or to obtain better
control or for operation in descending @ steep hill.
IDLING
Neutral ("N") should be selected when it is necessary to idle the
engine for an extended period,
COASTING
Coasting must be avoided at all times, otherwise the gearbox may
suffer serious damage due to lack of lubrication.
TOWING
Transmission Inoperative. The vehicle should be towed with
a rear end pick-up or remove the propeller shaft.
Transmission Operating Properly. The vehicle may be
towed safely in "N" (neutral) at moderate speeds. For long
distance towing (over 100 miles) the propeller shaft should be
removed.
PUSH STARTING
Hf the engine fails to start in the normal manner, it may be started
by pushing the car. Towing is not recommended due to the
sudden surge of power when the engine starts.
Turn the ignition on, then <7" 1 (low) position and depress the
accelerator pedal slightly: after the vehicle has been pushed to a
speed of 15 to 25 m.p.h. (approximately), the transmission will
drive the engine.

9`,checklist:[`When manceuvring, "D" should be selected for forward movement.`,`2.r1 position should be selected on upgrades which require heavy`,`Neutral ("N") should be selected when it is necessary to idle the`,`Coasting must be avoided at all times, otherwise the gearbox may`,`suffer serious damage due to lack of lubrication.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p18`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:18,sourcePage:18,title:`Optional manual transmission gear-change diagram`,summary:`Manual gearbox shift-pattern diagram and clutch note. Best viewed as the original scan.`,plainEnglish:`Manual gearbox shift-pattern diagram and clutch note. Best viewed as the original scan.`,ocrText:`Fig 2
Optional Manual Transmission
The change speed arrangement being conventional, it is not
Proposed to describe the method of engaging and changing gear,
but @ plan showing the gear lever positions is shown above.
Clutch

The clutch is hydraulically operated and normally requires no
adjustment. If attention is required the work should be carried out
by @n officially appointed Jensen Distributor or Dealer.`,checklist:[`The change speed arrangement being conventional, it is not`,`If attention is required the work should be carried out`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`diagram`,hidden:!1,isImageOnly:!0},{id:`mk3-p19`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:19,sourcePage:19,title:`Engine Lubrication System`,summary:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,plainEnglish:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,ocrText:`Engine Lubrication System
The engine lubrication system comprises an externally mounted
rotor-type pump, a full fiowr oil filter connected to the pump by
flexible pipes, engine sump, and various lubrication passages.
Oil is drawn from the sump through ¢ fine mesh gauze strainer, and
delivered to the bearings, via the oil filter, under pressure from the
pump. Uniform pressure is maintained by a rolief valve in the
pump, The valve gear is lubricated by oilways through the cam-
shaft, while the qudgeon-pins are splash lubricated.
The oil level should be checked daily by means of the dipstick
which Is on the left hand side of the engine. Oil should be added
via the filler cap on the left hand bank of cylinders.
Draining the Sump
Tha engine oil should be changed every 4,000 miles (or 3 months)
(Every 2,000 miles if De swe deal of driving is done in heavy
traffic or in very cold conditions).
The oil should be drained when the engine is warm. The drain
plug is in the bottom of the sump.
Changing the Filter
The engine oil filter element should be changed with the engine
cil with avery second change. The filter is mounted high upon the
left hand side of the engine, and is connected to the pump by two
flexible pipes.
The element is changed by undoing the hexagonal nut on top of
the filter housing. This will allow the top of the housing to be
removed, and tha filter element withdrawn.
Before the now elomont is inserted, the housing, especially the top
rim, should be wiped clean. A new gasket should be used every
time the element is changed.
After the fitting of a new filter element, the car should be run for
a few miles and then the top joint of the filter inspected for leaks.
Hf necessary the hexagonal nut should be retightened.

10`,checklist:[`Engine Lubrication System`,`The engine lubrication system comprises an externally mounted`,`flexible pipes, engine sump, and various lubrication passages.`,`pump, The valve gear is lubricated by oilways through the cam`,`shaft, while the qudgeon-pins are splash lubricated.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p20`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:20,sourcePage:20,title:`Lubrication and maintenance diagram`,summary:`Lubrication and maintenance diagram plus first 1,000 mile service points. Best viewed as the original scan.`,plainEnglish:`Lubrication and maintenance diagram plus first 1,000 mile service points. Best viewed as the original scan.`,ocrText:`|
ao" H 08
po ' Zr
| ——, a
na ee in
Ea ae
w—S4 ee a
a) Sr Se ee
ott ig et
oe a ==
Ree | Aor — 5-02
othe Se
EAS et
a oe
|
[| hivbi
Oh)
con 5 UR [i] com
x a = sie
| 7 —-3) -
Fig 3
LUBRICATION AND MAINTENANCE
FIRST 1,000 MILES SERVICE
PR following special service is necessary sfter the car has covered tho
1,000 miles,
Drain and refill axle. Tighten driving belt i
'Check contect breakers, and adjust if goon
'necessary. Check 'system.
Check staring and front end geometry. Check tyre pressures.
'Check hydraulic reservoirs for fluid. pers fights.
braking system.
'Check water level and connections and tighten if necessary.`,checklist:[`LUBRICATION AND MAINTENANCE`,`'Check contect breakers, and adjust if goon`,`Check staring and front end geometry.`,`'Check hydraulic reservoirs for fluid.`,`'Check water level and connections and tighten if necessary.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`diagram`,hidden:!1,isImageOnly:!0},{id:`mk3-p21`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:21,sourcePage:21,title:`4,000 MILES`,summary:`Brake system operation and service notes.`,plainEnglish:`Brake system operation and service notes.`,ocrText:`A~1,000 MILES (second end subsequent)
Al — King Pin Bearings Upper and Lower—Grease Gun (4 nipples).
A2 — Front Suspension Lower—Grease Gun (2 nipples}.
B—2,000 MILES or Monthly
81 — Brake and Clutch Master Cylinder Resevoirs—check and top up,
4,000 MILES
Ct — Stesting Rack—Grease Gun (1 nipple).
CZ — Brake Balance Lever—Grease Gun (1 nipple).
C3. — Steating Dampars—Check and Top Up.
C4 — Front Shock Absorbers—inspect and Top Up,
C5 — Sump—Orain and Refill,
C6 — Roar Wheel Hubs—Gresse Gun (2 nipples),
C7 — Rear Axle—Check and Top Up.
C8 — Alternator—Clean and Check.
Menual Transmission
C9. — Clutch Bell Crank Levir—Graase Gun (1 nipple).
C10— Clutch Bell Crank and Fork Linkages—Lubricate,
D-2,000 MILES
D1 — Air Geaner Element—Cleen and Check.
D2 — Oil Filer Air Cleanor—Ciean and Re-ol.
D3 — Distrbutor—Ciean, Check Points.
D4 — Crankoste Ventilator Valve—Chack.
0S — Sparking Plugs—Clean and Check,
D6 — Oil Fiter Element—Replace.
D7 — Manifold Hest Contral Valve—Lubricate.
DS — Automatic Transmission—Check and Top Up.
D9 — Propshaft U/J's—tnspect for leekage.
Manual Transmission
D10— Grarbox—Check and Top Up,
£12,000 MILES
£1 — Rear Axle—Drain and Refill.
F-16,000 MILES.
Fi — Front Whee! Hubs—Check end Repack if necessary.
"W`,checklist:[`81 — Brake and Clutch Master Cylinder Resevoirs—check and top up,`,`— Steating Dampars—Check and Top Up.`,`C4 — Front Shock Absorbers—inspect and Top Up,`,`C5 — Sump—Orain and Refill,`,`C7 — Rear Axle—Check and Top Up.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p22`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:22,sourcePage:22,title:`G—20,000 MILES`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`G—20,000 MILES

GI — Sparking Plugs—Replace.

G2 — Fuel Pump Inlet Fittwr-Raplace,
H—22,000 MILES

Hit — Wheel Hubs—Clean and Repack.

*H2 — Air Cleaner Elwnent—Replace.

"H3 — Automatic Transmission—Drain, Ratill and Adjust.

"HA — Automatic Transmission Oil Filter—Replace.

"HS — Propeller Shatt Joints—Clean and Repack,

* Heavy aperating conditions only; normally no attention required.
Manual Transmission

*H6 — Goarbox—Drain and Refill '
J—89,000 MILES:

41 — Cerburettor Inlet Pipe Fuel Filter—Replace,`,checklist:[`Hit — Wheel Hubs—Clean and Repack.`,`*H2 — Air Cleaner Elwnent—Replace.`,`"H3 — Automatic Transmission—Drain, Ratill and Adjust.`,`"HS — Propeller Shatt Joints—Clean and Repack,`,`*H6 — Goarbox—Drain and Refill '`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p23`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:23,sourcePage:23,title:`Fuel System and Carburettor`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Fuel System and Carburettor
Fuel System
The fuel system consists of the fuel tank, line and filters, mechanical
pump, carburettor and air cleaner.
Fuel Tank
The fuel tank is located below the floor of tha boot and has a
capacity of 16 gallons imp., 19 gallons (U.S.) or 72 litres. The low
fuel warning light in the face of the rev counter bums continu-
ously when 3 gallons or less remain in the tank.
The fuel tank filler pipe is covered by 6 flap on the left hand rear
wing, which can be opened automatically from the driver's seat.
The 'Re-fuel' switch on the facia controls # solenoid which, when
energised, allows the flap to fly open. Alternatively the flap can be
opened manually by depressing the small plated lever in the top
. left hand corner of the boot.
There is a drain plug in the bottom of the tank,
. Fuel Line and Filters
The fuel line incorporates two filters, one before and one after the
fuel pump. These are of the paper cartridge type and cannot bs
cleaned. The filter between the tank and pump should be replaced
every 20,000 miles and the filter after the pump every 80,000 miles.
Note: Where dirty petrol has been used, more frequent filter
changes will be necessary.
Fuel Pump
The mechanical fuel pump is located on the right hand side of the
engine. It is driven from the camshaft and delivers fuel to the
carburettor at 34 p.si.
Carburetor
The Carter AFB (Aluminium Four Barrel) carburettor is a compli-
cated and sensitive instrument, for it combines the best features
'of both single and multi-choke designs in one unit.
All jets etc. are correctly set before installation, so the only
adjustment normally necessary will be to the idling speed settings.
Idle Speed Adjustment—(Curb Idle)
To make the idle speed adjustment, the engine must be thoroughly
warmed up. A much more reliable idle roe can be obtained
if the car has been driven a minimum of five miles. For the best
fesults, it is recommended that the tachometer be used in this
adjustment.
Before making the idle speed adjustment observe the following
precautions :—
(1) On cars equipped with the automatic transmission,
disconnect the carburettor to bellcrank rod so that the
'stop in the transmission will not interfere with the free
movement of the carburettor throttle lever.
(2) To make the idle speed adjustment proceed as follows :—
(i) Turn the idle speed screw im or out to obtain
500 rp.m. Be sure the choke valve is fully open
and that the fast idle adjustment screw is not
: contacting the fast idle cam,
2`,checklist:[`pump, carburettor and air cleaner.`,`The fuel tank filler pipe is covered by 6 flap on the left hand rear`,`There is a drain plug in the bottom of the tank,`,`The filter between the tank and pump should be replaced`,`adjustment normally necessary will be to the idling speed settings.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p24`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:24,sourcePage:24,title:`'COVER PLATE`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`STE. uP ASTON
'COVER PLATE
ACCILERATCR PUMP
cnoet 'muniosp sea
OPERATING ACCELERATOR PIMP
ne crone \\*Fo crt atm
vat cums our
CHORE VACUM e bia
" aviuitina
DIAPHRAGA A — | SCRW
LN os rs 4
Patt 1 a= a Oe ray
ian. get pf
a Sa 6
SECONDARY of) ) Gg a
Cee ae ~ ws me
CPERATING (AAs ' NJ
ae e) oo wy i
Neste
ri f C15
" wacko Srost hase
DIAPHRAGM
cod na irs
MAROTTE, feng
drama — \\ mae Hsorne
ot maa AONISTING SCHEWS
PRIMARY THEOTTIE ba alge
SHAST ASM {OUTER VACUUM ADVANCE
Tse rine Nesas
Fig 4
STEF.UP PISTON COveR PATE
ACOLLIRATOR PUMP UNK bad
rae
ACCELERATOR FUME im "
he A jo
xe a
gs Tr
ee Oo A THROTILE AND
Sa 'hain EOD
ea
7 en &,
.,. —
SN
THROTHE vi =—
eves » 7
. Fast Dut
conmuteras
rast ime Seen FAST IGLE CAM, =
ADASIING schEW ELEVATING i865
curs wie snico MY Or at
ADIVETING SCREW
Fig 5`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p25`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:25,sourcePage:25,title:`(fi) Turn each idle mixture screw to obtain the highest`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`(fi) Turn each idle mixture screw to obtain the highest
rpm, While making the adjustment, carefully
watch the tachometer and notice thet the speed can
be Gecreased by turning the screws in either
direction from the setting that gave the highest
rpm, reading.

(iit), Readjust to 500 rpm. with the idle speed screw.

(iv) Turn each idle mixture adjusting screw in the clock-
wise direction (leaner) until there is 8 slight drop
in rpm. Now, tum each screw out, counter-
clockwise (rieher), just enough te regain the lost
rpm,

This procedure will assure that the idle has been set
to the leanest possible mixture for smooth idie.
This setting is very important!

Since the correct speed was originally set using tha
speed screw, the speed obtained after finding the
leanest smooth idle setting will probably be too fast,

(v) Readjust the speed screw to obtain correct idle
speed. Repeat steps 2 and 4 above if necessary,

After the proper idle speed has been obtained, check transmission
setting as described under throttle linkage. Fig, 7.
"agp, CHORE VALVE WIDE OPEN
t Bie 5774 be
SCEEW ON THE LOWEST STEP i)
OF THE CAM =
screw SOR .¢ an ed
he 7
aaa
|
NK6O?,
Fig 6
13`,checklist:[`rpm, While making the adjustment, carefully`,`(iit), Readjust to 500 rpm.`,`(iv) Turn each idle mixture adjusting screw in the clock`,`(v) Readjust the speed screw to obtain correct idle`,`After the proper idle speed has been obtained, check transmission`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p26`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:26,sourcePage:26,title:`PP shh`,summary:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,plainEnglish:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,ocrText:`®
= © © 5)
PP shh
SEY he
© 7 i LE ahs ROD
¥mDIA ROD. h 6) ®)
\\
© 0)
Fig 7

Throttle Linkage
The corract setting of the throttle linkage cannot be over-empha-
sized. The throttle and automatic gearbox controls baing inter-
connected, various conditions affecting car performance can be
encountered if the throttle is not set correctly. As well as poor
general performance, there may be delays in automatic gear-
changes, both up and down, and total failure of the "kick-down'.
If the linkage has been disturbed for any reason, it must be reset in
the following manner, with reference to fig. 7.

(1) Block choke valve in fully open position and ensure
release of fast idle cam (These precautions are not
necessary on @ fully warmed-up engine).

(2) Disconnect;

(a) Carb rod (A) at crosshaft lever (B)
(b) Carb-belicrank rod (C) at carburettor
(c) Rod (D) at upper end

(d) Cable (G) from lever (H)

(3) Insert % dia, rods in the two positions indicated.

(4) Using rod (D) to hold throttle valve fever (J) against
forward stop, adjust rod end until it clips onto ball end
stud (E).

| (5) Remove ~% dia. rod from bellerank (F) and, still loadin
system against throttle valve laver stop, adjust rod ts]
till slotted hole just slips over carburettor lever stud.

| Then adjust rod end out three (3) full turns and replace
washer and spring pin in position.`,checklist:[`If the linkage has been disturbed for any reason, it must be reset in`,`(1) Block choke valve in fully open position and ensure`,`forward stop, adjust rod end until it clips onto ball end`,`system against throttle valve laver stop, adjust rod ts]`,`| Then adjust rod end out three (3) full turns and replace`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p27`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:27,sourcePage:27,title:`{8) Adjust carburettor rod (A) until bail joint stud locates in`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`{8) Adjust carburettor rod (A) until bail joint stud locates in
lever (B) on crosshaft and fix with nut and spring washer.
(7) Adjust cable end ball joint, while applying a light load
against cable stop, until it locates in hole in accelerator
crosshaft lever (H) and fix with nut and spring washer.
(8) Remove ~ dia. tod from crossheft, and blocks from
carburettor choke valve, and test thet full throttle opening
is being obtained in carburettor when the pedal is
depressed fully against floor stop, if necessary adjust floor
stop.
Air Cleaner
The air cleaner is held on top of the carburettor by one wing nut.
Every 8,000 miles the air cleaner element should be cleaned.
Every 32,000 miles, or more often under dusty conditions, a new
element should be fitted. At any time if there should be an oil
mark on 2/3 of the circumference a new element should be fitted,
Closed Crankcase Vent System
'The crankcase ventilator valve is located on the right hand rocker
cover and is connected to the carburettor body by a rubber tubs.
The valve serves as a vent for the crankcase, and also provides
upper x cnr lubrication by introducing oily vapour into the inlet
manifold.
Every 8,000 miles the valve should be checked for comect
'The lefthand rocker cover is vented via the carburettor air cleaner.
"`,checklist:[`{8) Adjust carburettor rod (A) until bail joint stud locates in`,`(7) Adjust cable end ball joint, while applying a light load`,`depressed fully against floor stop, if necessary adjust floor`,`The air cleaner is held on top of the carburettor by one wing nut.`,`Every 8,000 miles the air cleaner element should be cleaned.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p28`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:28,sourcePage:28,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p29`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:29,sourcePage:29,title:`Ignition`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Ignition
The ignition is of basically standard design, but incorporates two
features which may be strange tosome owners. These ere, a ballast
resistor mounted in series with the coil, and twin contact breakers
fitted to the distributor.
The ballast resistor is a variable resistance in the ignition primary
circuit. During low speed operation, when the current flow
through the primary circuit is high, the temperature of the ballast
resistor rises, increasing its resistance. This reduces the current
flow, thus prolonging the life of the contact breakers. At high
engine speeds, when the current flow in the primary circuit drops off,
the ballast resistor cools down, thus Le eagy Aang current to
flow, and more efficient high speed operation, As an aid to easier
starting, the ballast resistor is bypassed whan the starter is in
operation, thus allowing full battery voltage to the ignition primary
circuit,
'The twin contact breakers are fitted to reduce spark erosion at high
speeds (on an 8 cylinder engine), The gaps should be set as if fora
single unit, in fact the engine will run with only one set, When
Setting the gap on one, the other should be blocked with a thin
strip of insulating material, such as mica.
Distributor
Every 8,000 miles 5-10 drops of oi! should be added to the oil
cup and 2-3 drops of oil to the rotor wick, The cam and bumper
block should also be thinly coated with grease. At the same time
the points should be cleaned and checked.
15`,checklist:[`speeds (on an 8 cylinder engine), The gaps should be set as if fora`,`Setting the gap on one, the other should be blocked with a thin`,`should be added to the oil`,`block should also be thinly coated with grease.`,`the points should be cleaned and checked.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p30`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:30,sourcePage:30,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p31`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:31,sourcePage:31,title:`Cooling System`,summary:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,plainEnglish:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,ocrText:`Cooling System
Capacity 32 pints (Imp.) 38 pints (U.S.) 18.2 litres.
The coolant is circulated by 4 centrifugal pump driven off the
engine, by the same belt as the alternator. A thermostat is fitted,
immediately above the water pump, to assist in rapid werming
up of the engine.
WARNING The cooling system is pressurised to 14 p.s.i. and
therefore operates at a higher temperature than normal. Scalding
could result if radiator filler cap is removed when the engine is hot.
eee should therefore be made when the engine is cool or
Topping up
Coolant level should be checked daily. When necessary clean
water should be added to bring the level in the radiator up to the
indicator bar in the header tank. The radiator should not be over-
filled, as the pressurised system requires room for expansion.
Cold water MUST NOT be added when the engine is hot, other-
wise serious damage may be caused to the engine, It must either
be allowed to cool down, or hot water added to the radiator.
Draining Cooling System
There are 3 draining points ; one at the bottom of the radiator, and
one at each side of the crankcase, at the base of each cylinder
block, It is essential that all three be opened when draining the
engine.
The radiator drain tap may become clogged with sediment, and
should therefore be cleaned occasionally with a piece of stiff
wire.
Frost Precautions
In cold weather there is a risk of the water freezing and cracking
the cylinder block or radiator. Therefore, an anti-freeze solution
should be used under these conditions. It is essential that only
an Ethylene Glycol-based product be used.
For the correct quantities to add, for full protection under different
weather conditions, reference should be made to the anti-freeze
makers' charts,
Flushing
To reduce the formation of deposits, which impair efficiency, the
cooling system should be flushed out with clean water every
. miles. This is particularly important before adding anti-
E28.
Thermostat
The thermostat restricts flow between the cylinder block and
radiator to assist rapid warming up. Itis of the copper-impregnated
wax type, and should start to open at approximately 67°C. It
should be fully open at approximately 75°C. Failure of the
thermostat is indicated by slow werming up, and poor heater
performance.
16`,checklist:[`could result if radiator filler cap is removed when the engine is hot.`,`eee should therefore be made when the engine is cool or`,`Coolant level should be checked daily.`,`water should be added to bring the level in the radiator up to the`,`The radiator should not be over`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p32`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:32,sourcePage:32,title:`Electric Fans`,summary:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,plainEnglish:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,ocrText:`| Electric Fans

| There is no engine driven cooling fan, but in its place two electric

| fans which operate only when required to maintain optimum
engine operating temperature.
These fans are mounted on the cross tube behind the radiator
and are controlled by @ thermostatic switch in the bottom of the
radiator.
They are not wired through the ignition circuit and will therefore
continue running, if necessary, even after the engine has been
switched off. (This is because the water temperature actually rises
during the last few seconds of s journey, owing to the car being
stopped and there being no air flow through the radiator. The fans
will only run for a very short time, and then switch themselves off),
The fans are protected by a fuse in the Relay Box at the rear of the
'engine compartment.

|`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p33`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:33,sourcePage:33,title:`Transmission`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`Transmission

Automatic Gearbox
The Chrysler Torquetlite 8 Automatic Gearbox combines a torque-
converter with a fully automatic 3 speed planetary gear system.
For correct operation of the gearbox, it is essential that only
the recommended fluids are used, and that the fluid level is
checked and replenished as necessary.
To prevent overheating of the transmission, the fluid is circulated
through 8n oil cooler in the bottom tank of the main cooling
radiator,
In an emergency
If the fluid level is low, and none of the recommended fluids are
available, SAE 10 engine oil may be added. However, the gearbox
should be drained and re-filled with the correct fluid as soon ss
possible.
Checking and Topping Up
The fluid level should be checked every 8,000 miles. When
checking, the engine and transmission should be idling and at
normal operating temperature. To circulate the transmission fluid
the handbrake should be firmly applied, and, with the engine
idling, Reem geer position selected in turn, Neutral (N) being

inaily held.
The dipstick and oil filler pipe are located behind the right hand
bank of cylinders. The fluid level should be between the 'FULL'
and "ADD ONE PINT' marks, but never sbove the "FULL' mark,
when checked In this way. If necessary, fluid should be added via
the oil filler pipe,
If it is necessary to check the level when cold the level should be
at, or just below, the 'ADD ONE PINT' mark.
Changing Transmission Fluid and Filter
Under normat driving conditions it should not be necessary to
change fluid or filter but if a great deal of towing, (or traffic work
in hot weather), is done, this operation should be carried out every
32,000 miles. 'The following procedure should be adopted —

1) As no direct drain plug is fited, a large container should
be placed under the gearbox sump and the sump bolts
removed,

2) With the sump dropped, the access plate in front of the
convertor housing should be removed, revealing the
drain plug for the torque convertor. This should be
removed, allowing the oil to drain out,

3) The convertor plug should then be replaced (14 in, lbs.
torque) and the access plate bolted back,

4) The oil filter should be removed by undoing the thrae
screws which hold it in position.

5) The filter should be replaced with a new one.

A new gasket should be used, and the screws tightened
(28 in. Ibs, torque.)
v7`,checklist:[`should be drained and re-filled with the correct fluid as soon ss`,`The fluid level should be checked every 8,000 miles.`,`checking, the engine and transmission should be idling and at`,`the handbrake should be firmly applied, and, with the engine`,`The dipstick and oil filler pipe are located behind the right hand`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p34`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:34,sourcePage:34,title:`Propeller Shaft`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`6) The gearbox sump should be cleaned out and replaced,

using a new gasket (150 in. Ibs. torqua).

7) — Fifteen pints of clean transmission fluid should be added.
The procedure for checking the level should then be followed, and
any fluid necessary added to bring the level to the full mark
(approx. 2 pints).

Propeller Shaft
The one piece propeller shaft has a constant velocity joint at the
forward end and a universal joint at the rear end, The sliding
spline at the forward end allows the axle some fore and aft move-
ment. The rear joint is of the normal cross and roller type.
Both joints are packed with \\ubricant and sealed. They should be
inspected every 8,000 miles (or 6 months) for external leakage
otherwise it is not necessary to relubricate at all, If the car has
been used under severe conditions (see Auto-transmission) then
it should be cleaned and repacked at 32,000 miles.
Ifitshould be necessary to remove the propeller shaft, the following
procedure should be adopted :—
1} The clamps holding the universal joint to the yoke on the
Pinion nose should be undone.
2) The shaft should be supported, and not allowed to
hang loose.
3} The sliding spline on the front of the forward universal
joint should be disengaged from the transmission unit,
When re-assembling, which should be done in the reverse order
the following torque rating should be used -—
'Clamp bolts on rear universal joint 170 in, Ibs.
Rear Axle
The rear axle is of the semi-floating type, and incorporates a
limited slip diffential "Powr Lok', which spreads the driving torque
to both wheels, even when one is slipping.
The 'Powr Lok' is extremely sensitive to lubrication, and only the
oils listed on page 29 should be used, ie.
SHELL EP90 SCL
In an Emergency
If this off is not evailable, any 90 E.P. oil may be used for @ short
period. However, the axle should be drained and refilled with the
| correct oil as soon as possible.
The rear axle should be drained and refilled at the first 1,000 mile
service. Thereafter it should be checked every 4,000 miles, and
veplecished oe Necessary, After 12,000 miles it should be drained
and re-filled,`,checklist:[`6) The gearbox sump should be cleaned out and replaced,`,`7) — Fifteen pints of clean transmission fluid should be added.`,`The procedure for checking the level should then be followed, and`,`inspected every 8,000 miles (or 6 months) for external leakage`,`otherwise it is not necessary to relubricate at all, If the car has`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p35`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:35,sourcePage:35,title:`Steering and Suspension`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Steering and Suspension
Steering
The steering is of the rack and pinion type which provides light
and sensitive steering at the cost of some kick-back on poor roads,
Dampers are incorporated in the rack housing to control this.
There is one grease nipple on the rack which requires attention
every 4,00Omiles with 4 general purpose grease. The dampers should
be inspected and topped up with Shell Tellus 15 at the same
time. The ball joints are sealed and require no attention.
Front Suspension
The independent front suspension is of the wishbone type, the coil
springs being held in compression between the chassis frame and
the lower wishbone, while the upper wishbone operates the piston
type dampers. An anti-roll bar connects the two lower wishbones.
'Suspension lubrication points are shown in the lubrication chart.
The hydraulic dampers should be topped up with Armstrong Fluid
every 4,000 miles.
(See front dampers).
Front Wheel Alignment
Alignment of the front wheels is an important factor in tye
economy and ease of steering. The front wheels should have
'too in' of +4". If adjustment is necossary it is made at the tie-rods.
P
—Or
LY p
WLU fifi firnm
— it by
TO _ Sos a
UPA an
A
Section through 7
Front Hub
Fig 9
8`,checklist:[`be inspected and topped up with Shell Tellus 15 at the same`,`'Suspension lubrication points are shown in the lubrication chart.`,`The hydraulic dampers should be topped up with Armstrong Fluid`,`The front wheels should have`,`If adjustment is necossary it is made at the tie-rods.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p36`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:36,sourcePage:36,title:`Front Hubs`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Front Hubs
The front hub bearings may need periodical adjustment. The
following procedure should be adopted.
1) The car should be jacked up and the nave plate removed.
2) The hub cap should be removed by turning it anti-
clockwise.
3) ~The cotter pin should be removed,
4) The wheel bearing nuts should be tightened with o
Torque Wrench to 90 ft. Ibe. while the wheal is rotated.
5) The nut should be backed off until a slot in the nut
coincides with the cotter pin hole, and a new cotter
pin fitted,
Front Hub Lubrication
Wheel bearings should be inspected every 16,000 miles, under
normal conditions. If the graase has emulsified, the hub bearings
should be stripped down and thoroughly cleaned before re-
greasing. The bearings should be repacked with grease but the
hub should not be completely filled with grease, but only lightly
applied around its inner perimeter. At 32,000 miles hub and
bearing should be cleaned and repacked with grease as above.
Front Dampers
'The front dampers should be checked for level every 4,000 miles
and if necessary lopped up with Armstrong Damper fluid,
Rear Suspension
The rear axie is carried on semi-elliptic springs, and is located
laterally by a Panhard rod, The telescopic dampers are adjustable
from the driver's seat (see Controls page 7). No attention to the
dampers is required.
Rear Hubs
One grease nipple on each rear hub requires attention every
4,000 miles. At 32,000 miles the hubs should be stripped, cleaned,
greased and ro-assembled.`,checklist:[`The front hub bearings may need periodical adjustment.`,`following procedure should be adopted.`,`1) The car should be jacked up and the nave plate removed.`,`2) The hub cap should be removed by turning it anti`,`3) ~The cotter pin should be removed,`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p37`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:37,sourcePage:37,title:`G arom`,summary:`Brake system operation and service notes.`,plainEnglish:`Brake system operation and service notes.`,ocrText:`G arom
= a ss
a YES 4% AS
& Cs
= SF Ng A
RAE A Sa ep ga
PREG} | | fain dite
A af wl de SY RE
se di —
a 4
SP
Tandem Maser Cylinder
Fig 10
Brakes
Brakes
A Dunlop hydraulic dise braking split system is used on all four
| whee 'Operated by the foot pedsl in conjunction with a Vacuum
vO unit.
'The tendem master cylinder ensures that, should a failure occur in
any part of the system, braking would still be available on two
wheels.
The handbrake is separate from the foot braking system, and
'operates through a mechanical linkage to the self adjusting
parking brake on the rear discs.
The brakes normally require no attention, as both foot and hand-
brake are self compensating for wear. When pads have to be
changed, reference should be made to the Dunlop booklet supplied
with the car,
Topping Up
'The reservoirs for the brake master cylinders are located above the
Serve unit in the engine compartment and require checking
monthly, of every 2,000 miles, whichever is the shorter period.
If required, Dunlop Disc Brake Fluid should be added to a level haif
an inch below the top of the reservoir. The reservoirs contain»
rubber dust seal which should be removed before topping up.
aL`,checklist:[`'The tendem master cylinder ensures that, should a failure occur in`,`'operates through a mechanical linkage to the self adjusting`,`changed, reference should be made to the Dunlop booklet supplied`,`If required, Dunlop Disc Brake Fluid should be added to a level haif`,`rubber dust seal which should be removed before topping up.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p38`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:38,sourcePage:38,title:`Brake Servo Unt`,summary:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,plainEnglish:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,ocrText:`¢ S i 'Z
ei
i Bayi U
= >
ze!
Brake Servo Unt
Fig 11
| Lubrication
There is one greese nipple on the handbreke compensating linkage
which requires attention every 4,000 miles. A multi purpose grease
should be used
Bleeding the Braking System
If any item of the hydraulic system has been replaced or if air has
entered the system, it must be bled ta restore proper working,
This operation ls fully described in the Dunlop booklet and the
instructions given should be carefully followed. It should be noted
that Dunlop Disc Brake Fluid was formarly known as Wakefield
Crimson.
Servo
Note: The tremendous braking power of the C.VB stems partly
from the fact that one of the chassis tubes is used as 8 vacuum
reservoir, It is therefore Imperative that these are not dilled,
otherwise serious loss of braking power would result,`,checklist:[`entered the system, it must be bled ta restore proper working,`,`instructions given should be carefully followed.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p39`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:39,sourcePage:39,title:`Wheels and Tyres`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Wheels and Tyres
Wheels
The ventilated steel disc wheels ere secured by five nuts. All nuts
have right hand threads.
Tyres
The tyres fitted are 6.70 x 15 Dunlop Road Speed (RS5). These
are tubed tyres having @ nylon carcase, and suitable for sustsined
'speeds of up to 110 m.p.h, at standard pressures. Development
work on tyres is always proceeding, and Jensen Motors Limited
will be pleased to give their latest recommendations when new
tyres are required.
Tyre Pressures
The recommended tyre pressures are -—
Front 24 p.s.i. (1.7 Ka/cm*)
Rear 24 psi. (22 ps.l, for town use only)

For sustained speeds in excess of 110 m.p.h., the tyre pressures,
front and rear, should be increased to 30 p.s.i. (2.1 Kg/em)
Tyre and Wheel Balance
Tyre and wheel assemblies are balanced both statically and
dynamically bafore they are fitted to the car. In view of the high
speeds attainable it is recommended that wheel balance is checked =»
every 5,000 miles. Most large garages and service stations have
balancing equipment.
Tyre Life
It Is not recommended that the tyres be interchanged between
front and back. (A tyre weakened by excessive wheelspin could
prove dengerous were it to tail when fitted to the front),
However, changing tyres from left to right end vice versa wil help
to prolong tyre life. If desired, the spare can be slternated between
the rear wheels,
The following factors have an adverse effect on tyre life:—

Hy Incorrect tyre pressures.

2) Misalignment of wheels,

3) Harsh acceleration, Wheel spin should be avoided.

4) Fierce braking.

20`,checklist:[`front and rear, should be increased to 30 p.s.i.`,`3) Harsh acceleration, Wheel spin should be avoided.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p40`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:40,sourcePage:40,title:`Wheel Changing and Jacking System`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Wheel Changing and Jacking System

The jooking system allows the car to be raised with the minimum
of The jack is of the Bevelift type and is carried in the tool
compartment, in the left hand side of the boot.
Four jacking holes are provided. These are in the chassis side
members close to tha wheel arches and are protected by rubber
plugs, These plugs have retaining wires to prevent them being
lost, When it is necessary to change = wheel the following
procedure should be adopted.

1) The car should be on s hard level surface.

2) The handbrake should be applied.

3) The ave plate should be removed using the screwdriver
in the tool kit. To avoid the possibility of damage to the
nave plate, it should be levered off as close as possible to
'one of the retaining studs. These are located at 3 o/c,
7 o/c and 11 o/c relative to the tyre valve,

4) The wheel nuts should be slightly loosened, but not
removed, using the whselbrace provided.

5) The spare wheel should be removed from its bracket (see
Spare Wheel stowage page 22)

6) The rubber plug should be removed from the nearest
jacking point, and the jack spigot inserted. The handle
should be turned clockwise to raise the car.

7) When the wheel is well clear of the ground the wheel
nuts should be removed, and the wheels changed over.

The procedure should then be reversed,
|`,checklist:[`lost, When it is necessary to change = wheel the following`,`procedure should be adopted.`,`1) The car should be on s hard level surface.`,`2) The handbrake should be applied.`,`3) The ave plate should be removed using the screwdriver`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p41`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:41,sourcePage:41,title:`Bodywork`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Bodywork
Doors.
The door catches are controlled from the outside of the car by
press-buttons in the exterior door handles, They may be lacked by
aither the remote control handles on the inside, or the locks in the
handles on the outside. In order to make it impossible to lock the
doors with their keys inside the car, the locks are self cancelling,
and slamming the door automatically untocks it.
When leaving the car from the right, the left hand door should be
closed from inside by means of the remote control handle, and then
the right hand door locked from outside, When leaving from the
left, the procedure is reversed.
Roomy map pockets are located in the doors behind the combined
arm rest/door pulls.
Front Shroud
The front shroud is hinged at the back, and has.a locking machanism
designed to make it impossible for it to fly open accidentally.
There are three separate operations required to open the shroud.
The email equere panel at the front of the shroud must be unlocked
using the ignition key. When this panel is raised, the shroud
release lever will be seen in the recess. This must be turned up-
wards to a vertical position to release the main shroud securing
pins.
A safety catch is to be found in the air intake, immediately to the
right of the car cantre-lins (to the left when facing the car.) This
should be pulled forward, and the shroud lifted with bath hands.
it will stay open automatically when in its fully open position,
There is @ small light mounted on the underside of the shroud, This
is illuminated automatically when the shroud is opened, provided
that the sidelights are on.
Boot
The bootlid is spring loaded to the open position. Whenever it is
opaned a light in the forward left hand comer is switched on.
Keys
Two keys are provided with each car. One will switch on the
ignition, and lock or open the doors and front shroud. The other
will lock or open the boot and glove locker. Therefore, if desired,
these may be locked and the ignition key left with the car.
A second set of keys will be sent direct to the owner when the
Application for Guarantee is made.
It is advisable to record the numbers of the keys, and 4 page in this
book is provided for the purpose.

2`,checklist:[`When leaving the car from the right, the left hand door should be`,`The email equere panel at the front of the shroud must be unlocked`,`should be pulled forward, and the shroud lifted with bath hands.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p42`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:42,sourcePage:42,title:`Seats`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Seats

Both front seats are fully adjustable for bath fore and aft movement

and rake.

'The seat adjustment is made by a lover at the front of each outer

seat runner, This lever should be moved outwards, and the seat

moved forwards or backwards as required.

Rake adjustment of the backs is effected by turning a knob on the

front of each seat,

For entry into the rear of the car, a pedal release is mounted at

rear outer side of seat. When this is depressed the squab is

released and can be pushed forward.

Lockers

There are four lockers provided in the car. One is in the facia

opposite the passenger, one between the front seats, and one

alongside each rear seat.

The glove locker in the facia has a pull-down lid which lies

horizontal when open, so may be used ss a small table. It is

locked by the same key as the luggage boot.

'The companion box between the front seats has a padded lid which

is pel 'one side.

'The rear lockers also have padded tops and open upwards, the

hinges being on the inside edges. ¢

Safety Belts e

Safety belts of the single econ type: are fitted as standard to

the C-V8, Jensen Motors Limited, believing that safety belts can

make a significant contribution to road safety.

'The belts are fastened at their lower ends to substantial eyebolts

'on the car chassis, and at their upper ands to the reinforced grab

handles,

'The belts have snap-action buckles, which can be both fastened

and released quickly and with little effort. The buckle is fastened

by pushing the tongue into the buckle until a definite 'click' is heard.

To release the buckle, the buckle flap should be fifted through
approx. 90° whan the tongue will be autometically released,

All adjustment for length is made at the fastening end. The belt is
| tightened by pulling the loose end further through the buckle, and
| sliding the cursor down the belt to take up the slack, To loosen the

belt bas buckle should be held by the two black catches and pulled

upwards.`,checklist:[`Both front seats are fully adjustable for bath fore and aft movement`,`'The seat adjustment is made by a lover at the front of each outer`,`seat runner, This lever should be moved outwards, and the seat`,`Rake adjustment of the backs is effected by turning a knob on the`,`To release the buckle, the buckle flap should be fifted through`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p43`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:43,sourcePage:43,title:`Spare Wheel`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Spare Wheel
fs Spare wheel is carried on a special bracket below the luggage
.

The bracket is lowered by means of a slotted tubs in the right hand

rear comer of the boot. To reach this nut it will be necessary to fold

back the carpet, and the cut out piece of underfelt. A special

adeptor is provided in the toolkit, and this should be used in

conjunction with the wheelbrace. The nut should be turned anti-

clockwise until the bracket has dropped far enough for the spare

wheel to be withdrawn,

The spare wheel should be replaced by reversing this sequence of

operations.

Paint Work

The car should always be cleaned using « liberal supply of clean

water. It is essential not to 'dry clean' the car, as this will produce

scratches on the smooth surface of the cellulose, Grease and tar

splashes are best removed using a soft rag dipped in petrol.

An occasional application of » gocd class wax polish will help

to preserve the smooth finish,

Leather Upholstery

The leather upholstery should require no attention save an

occasional wipe down with a little soapy water. Harsh detergents

should not be used,

'f subjected to heavy wear, or harsh weather conditions, the
, Upholstery will benefit from an occasional application of Connolly

Hide Food.

Floor Carpets

When they become soiled, the floor carpets should be token outand

cleaned with 4 vecuum cleaner. They are held in by press-studs,

Ashtrays

Two ashtrays are provided. one for front seat passengers, and ona

for those in the reer. Both ashtrays are mounted in the central

companion box.

The forward one is covered by a chromed snap action lid, while

the rear one pulls out rearwards from the companion box. Both

are removable for cleaning.

Lubrication of Body Parts

See "Service Lubrication", page 28.

First Aid Kit

A compact but comprehensive First Aid Kit is supplied with the

car. It is mounted under the lid of the left hand rear locker.

2`,checklist:[`adeptor is provided in the toolkit, and this should be used in`,`The nut should be turned anti`,`The spare wheel should be replaced by reversing this sequence of`,`The car should always be cleaned using « liberal supply of clean`,`It is essential not to 'dry clean' the car, as this will produce`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p44`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:44,sourcePage:44,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p45`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:45,sourcePage:45,title:`Cabin Heating and Ventilation Systems`,summary:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,plainEnglish:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,ocrText:`Cabin Heating and Ventilation Systems
Heating System
A powerful and comprehensive heating system of 44 Kw output is
fitted, and this allows any combination of temperature end air
flow to be selected and maintained.
The car interior is heated by fresh air drawn from outside the car
and passed over a radiator matrix supplied with hot water from the
engine. Therefore the heater will not be fully effective until the
engine has reched its normal operating temperature,
Controls
There are three main heater controls :—

1) Air cut-off control. This is mounted on the scuttle
below the Leigh Btls and controls the air | passing
into the heater. This valve is opened by moving the
knob down,

2) Distribution control. This is on the left nand side of
the central facia lower, flanking the grille, Its position
determines whether air from the heater is directed
towards the windscreen, or into the car interior. With the
control at "INT", air flow is directed into the front and
rear footwells and also through the grille in the facia
lower. If the control is set to DEMIST', flow is directed
to the windscreen.

3) Temperature control. This is on the right hand side
'of the facia lower, opposite the Distribution control.
Once the desired temperature is set, it is maintained by a
thermostatic valve in the water system, regardiass of the
engine coolant temperature, or the car speed.

4) Fan. The flow of air from the heater can be supplemented
by a two speed fan, controlled by a switch on the facia,
With the switch half way down, slow speed is selected ;
moving it fully down increases the fan speed.

Ventilation Systems
Two completely independent ventilation systems are built into
the car.

1) Footwell Ventilation. Small sliding panels on the
outside of each footwell are connected to intakes below
the headlights. Opening these panels provides a flow
of alr dependent on the speed of the car,

2) Face level Ventilation. Two spherical air vents are
mounted in the facia, which provide fresh air from the
scuttle intake. These are opened by pulling out the
nazzies. A booster fan is fitted to supplement fresh air
output and is controlled by the switch marked "Air"
'on the facia.

23`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p46`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:46,sourcePage:46,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p47`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:47,sourcePage:47,title:`Electrical System`,summary:`Starting, running-in, cold-start and driving guidance for the Mk III.`,plainEnglish:`Starting, running-in, cold-start and driving guidance for the Mk III.`,ocrText:`Electrical System
Allelectrical equipment is of Lucas manufacture with the exception
'of the Ignition, Starting and Charging Systems, which are of
Chrysler origin.
The Electrical system is of the 12 volt NEGATIVE earth type. Most
British snd Continents! cars employ a Positive earth system, and
the difference must be observed—as INCORRECT POLARITY will
cause serious damage to the rectifiers in the alternator,
Alternator
The alternator takes the place of the usual dynamo. It is an
alternating current generator, with six built-in silicone rectifiers
which convert the alternating current into direct currant.
The alternator provides a high charging rate at low engine speed,
'and this means that the battery can be kept fully charged all the
time.
Belt Tension
The belt which drives the alternator and water pump has to be
correctly tensioned, If it is too tight it will load the alternator
bearings excessively, causing their early failure; if too loose, the
beit will slip, causing poor water pump and alternator performance.
The belt tension can be checked by pressing down on it, midway
between the water pump and alternator. The deflection should
is 4" except where a new belt has just been fitted, when it should
ie

Battery
The battery is mounted in the engine compartment. The following
Lucas battary is fitted and recommended as a replacement —

Type BTZ11A

Voltage 12

Capacity 72 Ampere hours
The level of the electrolyte should be checked weekly, of more
often in hot weather, if it has fallen below the top of the separators,
sufficient distilled water should be added to bring it to approx. +*
above the separstors. It is important not to overfill the battery.
The battery is held in its box by two clamps and four wingnuts,
It must always be firmly secured. The terminals should be kept
clean and tight, and well covered in petroleum jelly.
Fuses
'Six fuses are used to protect the electrical equipment, The radio,
the Selectaride rear dampers, and the electric cooling fans are
individually fused : the interior light and the bootlight share a low
independent rating fuse, while all other circuits are carried by the
two main fuses.
The main fuse box is under @ black cover, mounted beneath the
facia near to the steering column. The top fuse is of 50 amp rating,
and protects all circuits which operate independent of the ignition.
The lower one, of 35 amp rating, protects all circuits controlled by
the ignition, Two spare fuses, one 50 amp and one 36 amp, are
provided.

2`,checklist:[`the difference must be observed—as INCORRECT POLARITY will`,`is 4" except where a new belt has just been fitted, when it should`,`The level of the electrolyte should be checked weekly, of more`,`sufficient distilled water should be added to bring it to approx.`,`It is important not to overfill the battery.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p48`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:48,sourcePage:48,title:`The fuse protecting the interior light and the bootlight is housed`,summary:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,plainEnglish:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,ocrText:`The fuse protecting the interior light and the bootlight is housed
in a white nylon in-line fuse holder adjecent to the main fuse box,
This is a 10 amp fuse.
Ablack nylon in-line fuse holder will be found above the white one.
This holds the 15 amp fuse which protects the Selectaride Rear
Dampers.
The 5 amp fuse for the radio is mounted below the radio itself.
Access to it is gained by removing the central instrument panel.
The engine cooling fans are protected by a fuse in the relay box
'on the bulkhead in the engine compartment. This is mounted in 8
white nylon in-line fuse holder.
Blown Fuses
A blown tuse is indicated by failure of all the items protected by
it, These will be shown in the wiring diagram. Before a fuse is
changed, the cause of the trouble should be remedied, or it will
blow again. Fuses should always be replaced by ones of the same
rating.
Voltage Control Box
'The voltage control box is mounted beside the rear demist relay on
the left hand side of the bulkhead in the engine compartment, It is a
delicate mechanism, and must only be disturbed by a qualified
electrician,
Direction Indicator Flasher Unit
This is located adjacent to the main fusebox beneath the facia.
itis a sealed unit and requires no attention whatever. Itis a plug-in
fitment, and must be changed complete if detective.
Electric Horns
Twin wind-tone horns, one high note and one low, are fitted in

| front of the radiator. They are operated by @ horn-push in the
centre of the steering wheel and are supplied through a relay.
This is fitted in the relay box on the bulkhead in the engine com-
partment, and must be changed complete if defective.

|`,checklist:[`changed, the cause of the trouble should be remedied, or it will`,`Fuses should always be replaced by ones of the same`,`delicate mechanism, and must only be disturbed by a qualified`,`fitment, and must be changed complete if detective.`,`partment, and must be changed complete if defective.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p49`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:49,sourcePage:49,title:`Lights`,summary:`Index page for locating subjects in the handbook.`,plainEnglish:`Index page for locating subjects in the handbook.`,ocrText:`Lights
Bulbs
All 12v, Lucas No.
Headlamps 1A Unit 37.5 w. 3.8. 54521805
2A Unit 37.5/50w S.B. 54521806
Side Lamps bw. S.B.C, 209
Flasher 21 w. S.C.C, 382
Stop/Tail 6/21 w, S.B.C. Index 380
No. Plate bw. MC.C. 989
Reversing 2tw. S.C.C, 382
Boot bw. S.B.C, 209
Bonnet bw. MC.C. 989
Interior and Map Lights bw. Festoon 254
Waring Lights & Clock 2w. Peanut 281
Instrument & Gear
Quadrant Illumination 22w. M.S, 987
Headlamp Setting
Where possible, headlamps should be set by 8 professional using
specially developed equipment. Mechanical Aimars for use on
sealed beam units, or Lucas 'Beamsetter' equipment will enable
the lights to be set quickly and accurately.
However, where such items are not available, the beams may be
set, keeping the following points in mind,
a) The beams should be set with the car in its normally
loaded condition (/.2 1 of 2 passengers, tank 4 full).
'b} Setting is most easily done with the car on a flat, level
surface.
¢) Centre of maximum light intensity on high beam should
be 2° below horizontal in 25 ft.
Adjustment is made by turning the screws on the light unit retaining
plate, exposed by removing the rim. There is one screw for vertical
adjustment, one for horizontal, except on the European-type unit,
where there are two for horizontal adjustment,
Sidelights and Rear Lights
The lenses on all side and rear lights are secured by two ee
screws. If these are removed, the lens may be taken off and t!
bulb changed. Bulbs in the stop/tail lamps have twin filaments,
but the offeet peg bayonet fixing ensures correct positioning.
Those in the side lemps and front and rear flashers have single
filaments only, and may be replaced either way round.
25`,checklist:[`Where possible, headlamps should be set by 8 professional using`,`a) The beams should be set with the car in its normally`,`¢) Centre of maximum light intensity on high beam should`,`Adjustment is made by turning the screws on the light unit retaining`,`adjustment, one for horizontal, except on the European-type unit,`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p50`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:50,sourcePage:50,title:`The combined reversing and number plate lemp is mounted directly`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Reversing Number Plate Light .
The combined reversing and number plate lemp is mounted directly
beneath the rear number plate. The two bulbs illuminating the
number plate come on with the sidelights, while the reversing light
is operated whenever Reverse is selected on the gear change
quadrant.
Access to all bulbs is gained by removing the two chromed
countersunk screws in the caver of the lamp, thus allowing the
cover and lens to be withdrawn.
Map Light
The bulb can be replaced through the light vent.
Gear Change Quadrant Light
To gain access to this light it is necessary to move the selector
cover up the stesring column towards the wheel. The cover is
secured by three wing nuts which can be loosened from behind
the facia. When the cover is withdrawn, the lamp holder can be
pullad to the left, out of its housing, and the bulb changed,
Interior (Roof) Light
The interior lamp is mounted in the centre of the roof, end is
operated by the opening of either door. It can also be switched
'on at the light itself. The plastic cover is held in place by four
tongues, and can be removed by squeezing it in the middle. The
festoon type bulb can then be changed.
Boot Light
To replace bulb, turn plastic cover through 90° and withdraw.
Warning Lights
'The location of the four waming lights are shown on Fig. 1. To
replace bulbs the following procedure should be adopted ;
1) Rear Domist
Remove centre panal by removing the two P.K. screws
| and withdraw bulb holders.
2) Flasher
Remove facia crash pad and withdraw bulb holder.
3) Main Beam and Low Fuel
Withdraw bulb holders from rear of appropriate instru-
ment.
RADIO :
A Motorola fully-transistorised push-button radio operating
through twin rear speakers is fitted es standard equipment, Full
| 'operating instructions are given in the separate manual accompany-
ing the car.
N.B. It should be emphasised that the small grille beneath the
facia is not a loud-speaker, but is part of the vehicle's heating
'system,
|`,checklist:[`Gear Change Quadrant Light`,`replace bulbs the following procedure should be adopted ;`,`It should be emphasised that the small grille beneath the`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p51`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:51,sourcePage:51,title:`Tool Kit`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Tool Kit

An adequate set of tools is supplied with the car,

The tools are stowed in a compartment on the left hand side of

the boot.

The tool kit comprises the following -—
1—Phillips Head Screwdriver,
1—Standard Screwdriver,
1—Electricians' Screwdriver,
1—Plug Spanner.
1—Open Ended Spanner, ye" « 4" A/F.
1—Open Ended Spanner, "= # A/F.
1—Open Ended Spanner, th" » #* A/F.
1—Adjustable Spanner, 3°
1—Pair Pliers.
1—Tyre Preasure Gauge.
4—Lifting Jack.
1—Wheelbrace, t* A/F.
1—Adaptor for Spare Wheel bracket operation.

28
|
|`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p52`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:52,sourcePage:52,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p53`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:53,sourcePage:53,title:`Equipment`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Equipment
JENSEN MOTORS LTD. sccept no lisbility for tyres, batteries or
radios not manufactured by the Company although supplied by
the Company. All claims in respect of such should be addressed
to their respective manufacturers at their addresses quoted below,
Important
When claims are being made under guarantee it is essential to
quote the chassis number, which is stamped on a plate located
under the companion box lid, and the date on which the car wes
commissioned.
Battery
sJoneph Lucas (Electrical) Ltd, Gt. Hampton Street, Birmingham
}, OF
Dordrecht Road, Acton Vale, London, W.3.
Tyres
Dunlop Rubber Co. Ltd., Fort Dunlop, Birmingham, or
1, Aibany Street, London, N.W.1.
Radio
World Radio Ltd., Edgware Road, Cricklewood, London, N.W.2.
As our policy is ane of continual improvement, we reserve the right
to alter the specification and maintenance instructions without
notice.
27
|`,checklist:[`All claims in respect of such should be addressed`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p54`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:54,sourcePage:54,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p55`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:55,sourcePage:55,title:`SERVICE LUBRICATION`,summary:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,plainEnglish:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,ocrText:`SERVICE LUBRICATION
enane AND ATTENTION
ENGINE UNIT Caracines "PERIODS DeTats
Aze SALON 48 Change
RSA? aaton,
Ree es
felon ar cr
pia } seater Mont Check OF ard 3p up i
sum mone J ime eer sa
Se orogens
Cage SAR ao
Seow set owa0
Gunp 8i piu (Bae 1 ehaewd sopra
Fine "NB pines tus) . saa
Me
eS
'Nama Gan wan pain point
Ft SAE mond reo
Rr Cleaner Wazoo
Deer
woo
(rok
——_
ean Caan ad ooo
Sine 2002877 00m. Ramen wrap hr ws
(330000) | weahin purain te sero
Stone Sie aed ol. Shake or Oot
Exbuneo: ane Ae Www 24ea002 anew" Se Can ile wth ar
rene az000'm notze kms 2" amy te
Ggoor) rede Dasa 'cme
fe 2Yees Garages. Dicer cert
Se reo Wa tone os
378 oteweumivrence
AON BORER BO aoa,
SAE10W-20 or 8 Moms Liat fltscnorwik with
| Ditsbier 253"Sen
MP. Cham Sipe om ond burper et |
Giasee 'osm dani ni ert
ome
West Conia ve SCD = Laavcnte wach end oF the |
ses Yt = jon weeny |
Cons Vole FIN1B1IS18 ar @ Mont Cool and move contol Dock
Stet Doman Sea fo
4000 m Check vai Wik orgie |
GRGhst) lng smave 'eae ee
Crankcese Yortotor Should "hae "and. cue
tiene Sie con A pee oat
Paper end. maces
faumet Ser_ tive Wn
i 'tga lf wave showidohet
'wtenssaken Resiervalve
Tone of teve veer
WRG m Reso tw Wo 1.
Fun Fer Fae 320028 — (Guee0R} esoce tas nos 2
00 matte verre mar be
(1300008) hocexry sede soos'
ung conden
~ftepar Carberetiy 008m Apply laaner to ond of
Cinorar 0ctz7s_ (F400 R) — thuus sft where otter
Carburetor Choke (Seneneed sieohan "oe in ar horn who moving
SMonht hohe shot beckons ot
foros
Fr}`,checklist:[`pia } seater Mont Check OF ard 3p up i`,`4000 m Check vai Wik orgie |`,`Crankcese Yortotor Should "hae "and.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p56`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:56,sourcePage:56,title:`GRADE AND ATTENTION`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`GRADE AND ATTENTION
ENGINE UNIT CAPACITIES PERIOOS: DETARS
4,000 Wipe chen and _epert
Aveeno 2oseeda 40.Amp. (C0004) venibteen hee. torent
or umd:
3 Moneta
'Engine Tune: 10.600 m. Phegs.
" a re
on ey clare
1 Yau
'Remore sp nd
and rei,
Sian and hapent. Check
feta polo tor pating
Dieeing aad misalignment
ed ean ane an a
fete cam and wick. Check
Alive en copa tr aeaieg
'ted eleon and sett" gnmicn
Taina.
Carburetor.
'Son sir fits. Check tas
'idle cam. Adivat idle speed
nd simu to covece se
ine. Tahenn coburn to
mani ng Check apar.
'Son of cake paton sd
mmanield 'eat cone! and
antesee "velar valve
ee sopsegrne solemn
eowery,
Ehectrtomt
hock, brite SG. Clan
and tighten battery teereines,
tnd convecsons, Tes al.
tery line voltage mt sterner,
Toh eorwe ero Say
Aatomenc Automatic 8.000%, Wh mnging and tee
'ranaision Tranammasion (120001) mation st noma eosteiea
Fu ype or fmpetues bod sages
'RuC'A—SMomihe Suga hand bake om,
| ie mmmartarty nee —
a1. thee "in
'Use Tash tor Bese "tnd boat "winch
'one of flog stead be at or beso
met kat never soos
Nowe 2 'When faite" warmed op
Por noma eee Soctacs Abe ate Sh
i change nec soe
ean. eneck cola Musd shoo )
be at hotly below the nd
one pint mark. If Ewlow sod
Sas San
'17 pinds (Bet. imp.) 32,000, Only far care operating under
Bpiewuss' ereooe) Knmas soon
SE ines or 'nso tamimesion
2 Yeon nd inte ound tte
Aiscreal contre oe os
(al Frquase vate
aun wale
{Gh Operating caren rae
intbor washer
(e) Byarate team wt
Sierra ede
muebevoe — GDDUL) p ilarolg Reprint
Maman Gear tatrane or fr hake
Ternenseion i ee
pe (ae Ys) emu |
Feet ir ae anaivay |
may be med to GAE-B0 or |
Sir ever suena type A
Suite "AY Dela and et |`,checklist:[`and tighten battery teereines,`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p57`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:57,sourcePage:57,title:`GRADE AND ATTENTION`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`|
GRADE AND ATTENTION
ert Caractr —"punioa Devas
Prop Shab Greex and Rotor 6000 Inapent Yo weer lage
Unhost Joins —""Miipupowe" —(Va200%) Sr damage
NLGIGnae'O" (US) 6 Menthe
Uo omc laing Yoke > nc: aasame udass
Soutie Gas ond Matt tetas Sttmai lenge oamege
Rai ih cane iron ©
(0) Rear Buen —
oter
TFariste Vsr oni Sin 099 m Check and wp up
since. tenant)
(S70 A)" R800 Drain ane vt
Sint (Bet op) /10800K) (UE--Drn ame el ot
a'100'm
Wheel fiao—Font Mali-Papom 16000 m — Immoect sed reoact I ereama
cea 'Ergo m! Chana peck
ern00%)
"Wien Hon—Rawr Wok Papoee 4000 m. — Seam gon,
Se ES enstaees
=
een00 8
Taaiy tack Male Papome 400m, — Geaaegane =
'Gane ieiz00 8)
Front Suganaon Male-Papow 1-000 m. — Gane gun.
Sowee cay Gast
"Baka Stance Laver Muli-Purpo 000 m — Gane
'Goon (e208) ae
fom Ababes __Aveavona 4000 m. Insect and tm We
Frome Susseraon __Hpdrauhe Fidd (85008)
Beck Sow Telue 38 a0 and op a
pd ue Ne ime) eaten ora
Chech Balsam Lg) 4000 m —Ogan —
ed tee00)
"Clach Beterck and ght} «400m, Olean
Fon Unkeges (e000)
"Ginko ang Cluah —Wyheoks Baka Fuad. Wardiy or Check endow op
Monte Cyinden' —'Durtop: Dae 'Sake 2.000 fe
'fu G2)
"Di Fle "Wacgor tes non Rapanui waa
: Zaeioe"" (aga)
Goan Pag Ghamgian-J-107 8000 m —Chueh, Gown rope
™ ay
2.000%)
jaisenence ght 4.800 m Door binges, Osor Tools
Ree! (001) Ra sie puck atest
or Window vent pivot: Re
denim Sie an ae, Se
Bot td unge pin Ful
Fine No age' Boot tock
push baton
rmpse Strovt lock: Stoud tatty
Sach'. Shroud lene
Shaft: Boot ha hinge tsaron
tieroters Boot eck: Suit
saos
rane MP, 320001 Window wind michanian,
Boor nechanam:
| 2Yean
| F`,checklist:[`TFariste Vsr oni Sin 099 m Check and wp up`,`(S70 A)" R800 Drain ane vt`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p58`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:58,sourcePage:58,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p59`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:59,sourcePage:59,title:`Index`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`| Index
Only the right-hand pages of this loose last book are numbered: ¥ the index
matter does nat appear on the right hand page, it will be found. by turning
'aver, on the reverse side of that sheet,
A Poge Page
Air Cleaner 4 F
'Alternator 24 hie
denmater 7 few > SS
Antifreeze - 6 Fiter—tuel ; . 2
Ash Trays: s+ BR Fite—ol 2 |. 10
Axio—feer » First Aid Kit. =, 5 22
font Suspension | |
Bary =. sh feo
Beasings—Pront Mute | 1g Fels * a
Boot. ar) «
pu || 38 Gearhox—tubication 28
7 : Gearbox— (automatic) op-
c eration», OB
Citi ° © 42 Gearbox—(menuel) 'oper
posed * 3 ation = 2
Chote | oe Gm fee a
Cigar Lighter : 8 "
Clutch - 2 «@ [igre ae
feadiamp adjustment.
Gomuace Bruaker Gap - Heating and. ventilation
} Coalng Sytem 6 tem 2S
Crankcase Vertitaion =, 18
D Hubs—rear 18
Dampers—trom =. . 1B f
Dempers—eer 1B
|
[wel opel a |
Dimensons | |g CMition—system | 15
Direction Indicatars . 6 Ignition—timing =, 4
Distributor, 15 Instruments. : 8
Doors sy § *
e Jocking system - 2
Enginedats
Engine lubrication . | 28 «

Engine stating = |B Keys 2
Electicol Equipment' =.= 28—CKick-down 8
By

|`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p60`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:60,sourcePage:60,title:`Page Page`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`Page Page
L s
lights... 25 «= Safety Belts. ot
Linkage—throttle © | 13.—= SeatAdjusiment 2} 21
Lockers =. | | 1 Selectande chy ed
Lubricationaxle . , 2D. Service Lubefestion . — <. 28
Lubrication—chart | 19 Sav =, he
Lubrication—enging = = 28 Shroud ee |
Lubrication—gearbox 28 © Siowrunning = s
Spee whe | aR
Soaking plot
Mole ee 6 er 8
'Sump ' 1 we
a Suspension—front. . 18
Suspension—rear | | 18
Numbere—identification . 4 T
Lc eC
° Tempersture Gouge | 7
Olmie 19 Thermostat 2 S16
: REY Throttle Linkage =, =| 13
Oil Praseure Ee een Tae 2
TRE) otic 3 ce
e Trenamislon—tubrication - 28
ransmission—operation 7
Renita so eee a
Pedals oe fae
Propeliershat =. 17 u
Push-staring =, (Upholatery 2
v
jantilation systems. , 23
Rediotor =. + 5 18 Voltage controlbex: = | 24
Radio 26
RorAve oA w
Recommended Lubricants 23 «= Waminglights =. =. 25
Retul =... Wheels—alignmon , 18
Replacement Bulbs - 26 = Whesle—balance | | 20
Reversing light =. =, 5 Windscreen washers =
Revolution Counter, , = 7 Windscreen wipes. | 6
Running Instructions | == B= Wing Diagram =| | 30
Designns by KS Advertising ind, Contarbury.
Printed in Emgland by Bachan Prone Lick, Saver`,checklist:[`Lubrication—chart | 19 Sav =, he`,`Lubrication—enging = = 28 Shroud ee |`,`Lubrication—gearbox 28 © Siowrunning = s`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1}],_e=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=_e()}))(),ve=[{title:`Dashboard & Controls`,pages:[4],tags:`dashboard instruments controls switches gauges warning lights`},{title:`Specifications & Capacities`,pages:[5,6],tags:`specifications capacity timing plug gap compression oil dimensions`},{title:`Motor, Starting & Running`,pages:[7,8,9],tags:`engine motor starting running gearbox transmission overdrive towing`},{title:`Lubrication & Maintenance`,pages:[10,11,25,26,27,28],tags:`lubrication maintenance grease oil service miles`},{title:`Electrical, Battery & Fuses`,pages:[12,13],tags:`electrical lucas autolite battery positive earth fuse fuses bulbs lamps wiper`},{title:`Brakes & Servo`,pages:[13],tags:`brakes servo dunlop brake fluid handbrake vacuum`},{title:`Fuel System & Carburetter`,pages:[15,16],tags:`fuel carburetter carter idle fast idle choke throttle linkage`},{title:`Tyres, Wheels & Alignment`,pages:[17,18,19],tags:`tyres tires wheels alignment bearings toe-in castor camber`},{title:`Cooling, Heating & Rear Axle`,pages:[20,21],tags:`cooling fan radiator heater ventilation antifreeze coolant rear axle powr-lok drive belt`},{title:`Interior & Owner Information`,pages:[2,3,22,23,31,32],tags:`owner warranty seats upholstery vehicle particulars chassis engine key`}],ye=[{title:`Cover`,pages:[1],category:`overview`,tags:[]},{title:`Introduction`,pages:[2,3],category:`overview`,tags:[`owner`,`handbook`,`warranty`]},{title:`Dashboard & Controls`,pages:[4],category:`overview`,tags:[`dashboard`,`instruments`,`controls`,`gauges`,`switches`,`warning lights`]},{title:`Specifications & Dimensions`,pages:[5,6],category:`specs`,tags:[`specifications`,`dimensions`,`capacity`,`timing`,`compression`,`spark plug`,`ignition`]},{title:`Starting, Gearbox & Towing`,pages:[7,8,9],category:`mechanical`,tags:[`starting`,`engine`,`gearbox`,`overdrive`,`towing`,`transmission`,`running-in`]},{title:`Lubrication & Maintenance`,pages:[10,11],category:`lubrication`,tags:[`lubrication`,`oil`,`grease`,`maintenance`,`filter`,`dipstick`]},{title:`Electrical Equipment`,pages:[12,13],category:`electrical`,tags:[`electrical`,`battery`,`fuses`,`bulbs`,`wiring`,`lucas`,`autolite`,`wiper`]},{title:`Brakes & Servo`,pages:[14],category:`brakes`,tags:[`brakes`,`servo`,`brake fluid`,`handbrake`,`vacuum`,`dunlop`]},{title:`Fuel System & Carburettor`,pages:[15,16,17],category:`fuel`,tags:[`fuel`,`carburettor`,`choke`,`throttle`,`idle`,`accelerator`,`carter`]},{title:`Tyres, Wheels & Alignment`,pages:[18,19],category:`wheels`,tags:[`tyres`,`wheels`,`alignment`,`toe-in`,`camber`,`bearings`,`tyre pressure`]},{title:`Cooling, Heating & Rear Axle`,pages:[20,21],category:`cooling`,tags:[`cooling`,`radiator`,`antifreeze`,`heater`,`rear axle`,`fan belt`,`powr-lok`]},{title:`Interior & Owner Information`,pages:[22,23,24],category:`interior`,tags:[`seats`,`upholstery`,`interior`,`owner`,`chassis number`]},{title:`Service Lubrication`,pages:[25,26,27,28],category:`service`,tags:[`service`,`lubrication`,`grease points`,`intervals`,`capacities`,`oil change`]},{title:`Index`,pages:[29],category:`overview`,tags:[`index`]},{title:`Vehicle Particulars`,pages:[31,32],category:`overview`,tags:[`chassis number`,`engine number`,`registration`,`delivery`]}],be=[{title:`Handbook Cover`,pages:[1],category:`overview`,tags:[]},{title:`Vehicle Particulars`,pages:[3],category:`overview`,tags:[`chassis number`,`key number`,`registration`,`delivery`]},{title:`Foreword`,pages:[5],category:`overview`,tags:[`handbook`,`owner`,`jensen motors`]},{title:`General Dimensions & Data`,pages:[7,8],category:`specs`,tags:[`dimensions`,`specifications`,`weight`,`wheelbase`,`turning circle`,`gear ratios`]},{title:`Instruments & Controls Diagram`,pages:[9],category:`overview`,tags:[`dashboard`,`instruments`,`controls`,`diagram`,`layout`]},{title:`Controls & Instruments`,pages:[11,12,13],category:`overview`,tags:[`controls`,`instruments`,`gauges`,`switches`,`headlights`,`horn`,`heater fan`,`selectaride`,`speedometer`,`ammeter`,`oil pressure`]},{title:`Starting Up & Running`,pages:[15,16,17,18],category:`mechanical`,tags:[`starting`,`running-in`,`gearbox`,`overdrive`,`towing`,`push starting`,`choke`,`transmission`]},{title:`Engine Lubrication System`,pages:[19],category:`lubrication`,tags:[`engine oil`,`oil filter`,`sump`,`oil change`,`dipstick`,`oil pressure`,`4000 miles`]},{title:`Lubrication Diagram`,pages:[20],category:`lubrication`,tags:[`lubrication`,`diagram`,`grease points`]},{title:`Maintenance Schedule`,pages:[21,22],category:`service`,tags:[`maintenance`,`service intervals`,`1000 miles`,`4000 miles`,`20000 miles`,`king pin`,`spark plugs`]},{title:`Fuel System & Carburettor`,pages:[23,24,25,26,27],category:`fuel`,tags:[`fuel`,`carburettor`,`choke`,`throttle`,`idle`,`accelerator`,`air cleaner`,`crankcase vent`]},{title:`Ignition`,pages:[29,30],category:`electrical`,tags:[`ignition`,`contact breaker`,`timing`,`distributor`,`coil`,`ballast resistor`]},{title:`Cooling System`,pages:[31,32],category:`cooling`,tags:[`cooling`,`radiator`,`coolant`,`fan`,`thermostat`,`antifreeze`,`electric fans`]},{title:`Transmission & Propeller Shaft`,pages:[33,34],category:`mechanical`,tags:[`transmission`,`gearbox`,`propeller shaft`,`universal joint`,`transmission fluid`]},{title:`Steering & Suspension`,pages:[35,36,37],category:`mechanical`,tags:[`steering`,`suspension`,`rack and pinion`,`wishbone`,`front hubs`,`wheel alignment`,`dampers`]},{title:`Brake Servo Unit`,pages:[38],category:`brakes`,tags:[`brakes`,`servo`,`brake fluid`,`disc brakes`,`handbrake`]},{title:`Wheels & Tyres`,pages:[39,40],category:`wheels`,tags:[`wheels`,`tyres`,`tyre pressure`,`wheel changing`,`jack`,`spare wheel`]},{title:`Bodywork & Seats`,pages:[41,42],category:`interior`,tags:[`bodywork`,`doors`,`seats`,`upholstery`,`adjustment`]},{title:`Spare Wheel`,pages:[43],category:`wheels`,tags:[`spare wheel`,`boot`,`jack`]},{title:`Cabin Heating & Ventilation`,pages:[45,46],category:`interior`,tags:[`heating`,`ventilation`,`heater`,`fresh air`,`fan`,`demist`]},{title:`Electrical System`,pages:[47,48],category:`electrical`,tags:[`electrical`,`battery`,`fuses`,`wiring`,`earth`,`alternator`,`interior light`]},{title:`Lights`,pages:[49,50],category:`electrical`,tags:[`lights`,`headlamps`,`sidelights`,`bulbs`,`reversing light`,`number plate light`,`flasher`]},{title:`Tool Kit & Equipment`,pages:[51,52,53],category:`overview`,tags:[`tools`,`toolkit`,`equipment`,`accessories`]},{title:`Service Lubrication`,pages:[55,56,57,58],category:`service`,tags:[`service`,`lubrication`,`oil change`,`grease`,`intervals`,`capacities`,`transmission fluid`]},{title:`Index`,pages:[59,60],category:`overview`,tags:[`index`]}];function xe(e){let t=new Map;for(let n of e)n.pages.forEach((e,r)=>{t.set(e,{sectionTitle:n.title,isContinuation:r>0,category:n.category||`general`,tags:n.tags||[]})});return t}var Se=xe(ye),Ce=xe(be);function we(e,t){return(t===`mk3`?Ce:Se).get(e)||null}function Te(e,t,n){let r=we(e,t);return r?r.isContinuation?`${r.sectionTitle} (cont.)`:r.sectionTitle:n}var Ee={all:`All Models`,mk1:`Mk I`,mk2:`Mk II`,mk3:`Mk III`},De=`/manuals/jensen_cv8_owners_manual.pdf`,Oe=`/manuals/jensen-cv8-mk3-instruction-manual.pdf`;function ke(e){let t=String(e.title||``).toLowerCase(),n=String(e.text??e.ocrText??``).trim();return e.hidden||e.type===`blank`||t===`blank page`?`blank`:e.type?e.type:n?`text`:`diagram`}function Ae(e,t,n,r){return e.map(e=>{let i=e.text??e.ocrText??``,a=ke({...e,text:i}),o=a===`blank`,s=a===`diagram`||e.isImageOnly===!0;return{...e,type:a,hidden:o||e.hidden===!0,isImageOnly:s,model:e.model||t,modelLabel:e.modelLabel||n,sourcePdf:e.sourcePdf||r,sourcePage:e.sourcePage||e.page,text:i,summary:e.summary??e.plainEnglish??(s?`Image-only reference page. Use the original scan for this page.`:``),title:e.title||`Page ${e.page}`}})}function je(e){return e.filter(e=>!e.hidden)}function Me(e,t,n=1){let r=je(e);if(!r.length)return null;let i=r.find(e=>e.page===t);if(i)return i;let a=[...r].sort((e,t)=>e.page-t.page);return n>=0?a.find(e=>e.page>=t)||a[a.length-1]:[...a].reverse().find(e=>e.page<=t)||a[0]}var Ne=Ae(he,`base`,`Jensen C-V8`,De),Pe=Ae(ge,`mk3`,`Jensen C-V8 Mk III`,Oe),Fe=`OCR text extracted from this scanned manual page`,Ie=[`foreword`,`introduction`,`handbook of instructions`,`vehicle particulars`,`warranty`,`index`,`contents`,`cover`,`title page`,`jensen`],Le=/^(check|inspect|change|replace|drain|fill|remove|install|adjust|clean|tighten|loosen|ensure|apply|add|use|do not|never|always|confirm|photograph|identify|select|engage|depress|set|verify|refit|recheck|run|start|allow|push|pull|turn|disconnect|connect|torque|grease|lubricate|bleed|test|reset|secure|re-?tighten|re-?fit|re-?check)/i;function Re(e){return!Array.isArray(e)||e.length<2?!1:e.filter(e=>e.length>35&&Le.test(e)).length>=2}function ze(e){if(!e||e.length<40)return[];let t=e.replace(/\n+/g,` `).split(/(?<=[.!?])\s+/).map(e=>e.trim()).filter(e=>e.length>25&&e.length<300),n=new Set,r=[];for(let e of t){let t=e.slice(0,40).toLowerCase();n.has(t)||(/every\s+[\d,]+\s*(miles?|km|months?|years?|hours?)/i.test(e)||/\d+[\s-]*(p\.?s\.?i\.?|psi|rpm|r\.p\.m|°|degrees?|mm|ins?\.)\b/i.test(e)||/should\s+be\s+(changed|checked|drained|replaced|inspected|cleaned|adjusted|refilled|topped|removed|fitted)/i.test(e)||/must\s+(be|not)\s+/i.test(e)||/\bdo not\b|\bnever\b/i.test(e)||Le.test(e))&&(n.add(t),r.push(e))}return r.slice(0,8)}function Be(e){if(e.isImageOnly||e.type===`diagram`||!e.text?.trim())return`diagram`;let t=(e.title||``).toLowerCase();return Ie.some(e=>t.includes(e))?`informational`:Re(e.checklist)||ze(e.text).length>0?`repair`:`reference`}function Ve(e,t){if(!t.trim())return e;let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return e.split(RegExp(`(${n})`,`ig`)).map((e,n)=>e.toLowerCase()===t.toLowerCase()?(0,j.jsx)(`mark`,{children:e},n):e)}function He(){let[e,t]=(0,C.useState)(``),[n,r]=(0,C.useState)(4),[i,a]=(0,C.useState)(100),[o,s]=(0,C.useState)(()=>localStorage.getItem(`jensen-model`)||`all`),[c,l]=(0,C.useState)(!1),[u,d]=(0,C.useState)(`cards`),[f,p]=(0,C.useState)(!1),[m,h]=(0,C.useState)({}),[g,_]=(0,C.useState)(`all`),[v,y]=(0,C.useState)(()=>{try{return JSON.parse(localStorage.getItem(`jensen-ocr-edits`)||`{}`)}catch{return{}}});(0,C.useEffect)(()=>{fetch(`/ocr-corrections.json`).then(e=>e.ok?e.json():{}).then(e=>{!e||!Object.keys(e).length||y(t=>({...e,...t}))}).catch(()=>{})},[]),(0,C.useEffect)(()=>{localStorage.setItem(`jensen-model`,o)},[o]),(0,C.useEffect)(()=>{localStorage.setItem(`jensen-ocr-edits`,JSON.stringify(v))},[v]);let b=Ee[o]||Ee.all,x=(0,C.useMemo)(()=>o===`mk3`?Pe:Ne,[o]),S=(0,C.useMemo)(()=>je(x),[x]),w=(0,C.useMemo)(()=>{let e=new Set(S.map(e=>e.page));return ve.map(t=>({...t,pages:t.pages.filter(t=>e.has(t))})).filter(e=>e.pages.length)},[S]);(0,C.useEffect)(()=>{let e=Me(x,n,1);e&&e.page!==n&&r(e.page)},[x,n]);let T=S.find(e=>e.page===n)||S[0]||x[0],ee=Be(T),E=`${o}:${T?.page||1}`,me=v[E]??T.text??``,he=Object.prototype.hasOwnProperty.call(v,E);Object.keys(v).filter(e=>e.startsWith(`${o}:`)).length,S.filter(e=>e.checklist&&e.checklist.length).length;let ge=(0,C.useMemo)(()=>S.map(e=>{let t=`${o}:${e.page}`;return{...e,text:v[t]??e.text??``}}),[v,S,o]),_e=(0,C.useMemo)(()=>{let t=e.trim().toLowerCase();if(!t)return[];let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return ge.map(e=>{let t=(`${e.title} ${e.text} ${e.summary}`.toLowerCase().match(new RegExp(n,`g`))||[]).length;return{...e,score:t}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score)},[e,ge]),xe=(e=n)=>{let t=x.find(t=>t.page===e)||T,r=t?.sourcePdf||(o===`mk3`?Oe:De),i=t?.sourcePage||t?.page||e;window.open(`${r}#page=${i}`,`_blank`)},Se=(e,t=1)=>{let n=Me(x,e,t);if(n){r(n.page);let e=Be(n);e===`diagram`?d(`scan`):e===`repair`?d(`cards`):(e===`informational`||u===`cards`)&&d(`page`)}l(!1),p(!1)},Ce=()=>Se(n-1,-1),ke=()=>Se(n+1,1),Ae=e=>{y({...v,[E]:e})},Ie=()=>{let e={...v};delete e[E],y(e)},He=async()=>{await navigator.clipboard.writeText(me),p(!0),setTimeout(()=>p(!1),1600)},Ue=()=>{fetch(`/ocr-corrections.json`).then(e=>e.ok?e.json():{}).catch(()=>({})).then(e=>{let t={...e,...v},n=new Blob([JSON.stringify(t,null,2)],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`jensen-ocr-edits.json`,i.click(),URL.revokeObjectURL(r)})},We=()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`application/json,.json`,e.onchange=e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target.result);typeof t==`object`&&t&&y(e=>({...e,...t}))}catch{alert(`Could not read the file — make sure it is a valid jensen-ocr-edits.json export.`)}},n.readAsText(t)},e.click()},Ge=(0,j.jsxs)(`aside`,{className:c?`sidebar open`:`sidebar`,children:[(0,j.jsxs)(`div`,{className:`mobileClose`,children:[(0,j.jsx)(`strong`,{children:`Manual Library`}),(0,j.jsx)(`button`,{onClick:()=>l(!1),children:(0,j.jsx)(fe,{size:20})})]}),(0,j.jsxs)(`div`,{className:`searchBox`,children:[(0,j.jsxs)(`label`,{children:[(0,j.jsx)(ue,{size:16}),` Search manual`]}),(0,j.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Try: ballast resistor, brake fluid, tyre pressure...`})]}),e&&(0,j.jsxs)(`div`,{className:`resultsBox`,children:[(0,j.jsxs)(`strong`,{children:[_e.length,` result`,_e.length===1?``:`s`]}),_e.slice(0,8).map(e=>(0,j.jsxs)(`button`,{onClick:()=>Se(e.page),children:[`p`,e.page,`: `,e.title,(0,j.jsxs)(`small`,{children:[e.score,` hit`,e.score===1?``:`s`]})]},e.page))]}),(0,j.jsx)(`h3`,{children:`Manual Sections`}),(0,j.jsx)(`nav`,{className:`topics`,children:w.map(e=>(0,j.jsxs)(`button`,{onClick:()=>Se(e.pages[0]),children:[(0,j.jsx)(D,{size:16}),(0,j.jsx)(`span`,{children:e.title}),(0,j.jsxs)(`small`,{children:[`p`,e.pages.join(`, `)]})]},e.title))}),(0,j.jsx)(`h3`,{children:`All Pages`}),(0,j.jsx)(`nav`,{children:S.map(e=>{let t=Te(e.page,o,e.title),r=we(e.page,o);return(0,j.jsxs)(`button`,{className:[e.page===n?`selected`:``,r?.isContinuation?`continuation`:``].join(` `).trim(),onClick:()=>Se(e.page),children:[(0,j.jsx)(se,{size:16}),(0,j.jsxs)(`span`,{children:[`Page `,e.page]}),(0,j.jsxs)(`small`,{children:[t,v[`${o}:${e.page}`]?` · edited`:``]})]},e.page)})})]});return(0,j.jsxs)(`div`,{className:`app`,children:[(0,j.jsxs)(`header`,{className:`topBar`,children:[(0,j.jsx)(`button`,{className:`hamburger`,onClick:()=>l(!0),children:(0,j.jsx)(ce,{})}),(0,j.jsxs)(`div`,{className:`brand`,children:[(0,j.jsx)(`img`,{src:`/jensen-logo.png`,alt:`Jensen logo`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{children:`Jensen C-V8`}),(0,j.jsx)(`h1`,{children:`Online Manual`}),(0,j.jsx)(`small`,{children:b})]})]}),(0,j.jsx)(`button`,{className:`openPdf`,onClick:()=>xe(),children:`Open PDF`})]}),(0,j.jsxs)(`div`,{className:`layout`,children:[Ge,(0,j.jsxs)(`main`,{children:[(0,j.jsxs)(`section`,{className:`hero`,children:[(0,j.jsxs)(`div`,{className:`heroTop`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`eyebrow`,children:`Garage-friendly manual app`}),(0,j.jsx)(`h2`,{children:`Jensen C-V8 Online Manual`})]}),(0,j.jsxs)(`select`,{value:o,onChange:e=>s(e.target.value),className:`modelSelect`,children:[(0,j.jsx)(`option`,{value:`all`,children:`All Jensen C-V8 Models`}),(0,j.jsx)(`option`,{value:`mk1`,children:`Jensen C-V8 Mk I`}),(0,j.jsx)(`option`,{value:`mk2`,children:`Jensen C-V8 Mk II`}),(0,j.jsx)(`option`,{value:`mk3`,children:`Jensen C-V8 Mk III`})]})]}),(0,j.jsxs)(`div`,{className:`heroSearch`,children:[(0,j.jsx)(ue,{size:18}),(0,j.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Try: no start, brake servo, 35 amp fuse, tyre pressure...`}),e&&(0,j.jsx)(`button`,{onClick:()=>t(``),children:`Clear`})]})]}),!e&&(()=>{let e=o===`mk3`?be:ye,t=[`all`,...Array.from(new Set(e.map(e=>e.category).filter(Boolean)))],n=g===`all`?e:e.filter(e=>e.category===g),r=new Set(S.map(e=>e.page)),i=n.filter(e=>e.pages.some(e=>r.has(e))),a={all:`All`,overview:`Overview`,specs:`Specs`,mechanical:`Mechanical`,lubrication:`Lubrication`,electrical:`Electrical`,fuel:`Fuel`,brakes:`Brakes`,wheels:`Wheels & Tyres`,cooling:`Cooling`,interior:`Interior`,service:`Service`};return(0,j.jsxs)(`section`,{className:`repairGrid`,children:[(0,j.jsxs)(`div`,{className:`repairGridHeader`,children:[(0,j.jsx)(`p`,{className:`eyebrow`,children:`Manual Sections`}),(0,j.jsx)(`h3`,{children:`Organised repair cards`}),(0,j.jsx)(`p`,{className:`helperText`,children:`These summaries stay inside what the manual says. Use source scans for verification.`})]}),(0,j.jsx)(`div`,{className:`categoryFilters`,children:t.map(e=>(0,j.jsx)(`button`,{className:g===e?`active`:``,onClick:()=>_(e),children:a[e]||e},e))}),(0,j.jsx)(`div`,{className:`sectionCardGrid`,children:i.map(e=>{let t=e.pages.find(e=>r.has(e));return(0,j.jsxs)(`button`,{className:`sectionCard`,onClick:()=>Se(t),children:[(0,j.jsxs)(`div`,{className:`sectionCardTop`,children:[(0,j.jsx)(`span`,{className:`sectionCardCat`,children:a[e.category]||e.category}),(0,j.jsxs)(`span`,{className:`sectionCardPages`,children:[`p. `,e.pages.filter(e=>r.has(e)).join(`–`)]})]}),(0,j.jsx)(`h4`,{children:e.title}),e.tags.length>0&&(0,j.jsx)(`div`,{className:`sectionCardTags`,children:e.tags.slice(0,4).map(e=>(0,j.jsx)(`span`,{className:`sectionCardTag`,children:e},e))})]},e.title)})})]})})(),(0,j.jsxs)(`div`,{className:`tabs`,children:[(0,j.jsxs)(`button`,{className:u===`cards`?`active`:``,onClick:()=>d(`cards`),children:[(0,j.jsx)(k,{size:16}),` `,ee===`repair`?`Repair Card`:`Overview`]}),(0,j.jsxs)(`button`,{className:u===`edit`?`active`:``,onClick:()=>d(`edit`),children:[(0,j.jsx)(le,{size:16}),` Edit OCR`]}),(0,j.jsxs)(`button`,{className:u===`page`?`active`:``,onClick:()=>d(`page`),children:[(0,j.jsx)(se,{size:16}),` OCR Text`]}),(0,j.jsxs)(`button`,{className:u===`scan`?`active`:``,onClick:()=>d(`scan`),children:[(0,j.jsx)(O,{size:16}),` Scan Viewer`]}),(0,j.jsxs)(`button`,{className:u===`checklist`?`active`:``,onClick:()=>d(`checklist`),children:[(0,j.jsx)(re,{size:16}),` Checklist`]})]}),(0,j.jsxs)(`section`,{className:`card pageHeader`,children:[(0,j.jsx)(`h2`,{children:Te(T.page,o,T.title)}),we(T.page,o)?.isContinuation&&(0,j.jsxs)(`p`,{className:`continuationNote`,children:[`↩ Continued from `,(0,j.jsx)(`strong`,{children:we(T.page,o).sectionTitle})]}),(()=>{let e=we(T.page,o)?.tags||[];return e.length>0?(0,j.jsx)(`div`,{className:`tagPills`,children:e.map(e=>(0,j.jsx)(`button`,{className:`tagPill`,onClick:()=>t(e),children:e},e))}):null})(),(0,j.jsxs)(`div`,{className:`manualRef`,children:[(0,j.jsx)(D,{size:14}),(0,j.jsxs)(`span`,{children:[`Manual p. `,T.page,we(T.page,o)?.isContinuation?` · Part of ${we(T.page,o).sectionTitle}`:``]}),(0,j.jsxs)(`button`,{className:`refLink`,onClick:()=>xe(T.page),children:[`Open scan `,(0,j.jsx)(oe,{size:12})]})]}),(()=>{let e=T.summary&&!T.summary.startsWith(Fe),t=ze(me).slice(0,3);return(0,j.jsxs)(`div`,{className:`summarySection`,children:[e&&(0,j.jsx)(`p`,{className:`summaryLead`,children:T.summary}),t.length>0&&(0,j.jsx)(`ul`,{className:`summaryBullets`,children:t.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})]})})(),he&&(0,j.jsxs)(`div`,{className:`editedBadge`,children:[(0,j.jsx)(le,{size:12}),` OCR edited`]}),(0,j.jsxs)(`div`,{className:`buttons`,children:[(0,j.jsxs)(`button`,{onClick:Ce,children:[(0,j.jsx)(te,{size:16}),` Previous`]}),(0,j.jsxs)(`button`,{onClick:ke,children:[`Next `,(0,j.jsx)(ne,{size:16})]}),(0,j.jsxs)(`button`,{onClick:()=>xe(T.page),children:[`Open original scan `,(0,j.jsx)(oe,{size:16})]})]})]}),u===`cards`&&(0,j.jsxs)(`section`,{className:`card repairCard`,children:[(0,j.jsxs)(`div`,{className:`repairCardTop`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsxs)(`p`,{className:`eyebrow`,children:[ee===`repair`&&`Repair summary`,ee===`reference`&&`Reference data`,ee===`informational`&&`Informational page`,ee===`diagram`&&`Diagram / image page`]}),(0,j.jsx)(`h3`,{children:Te(T.page,o,T.title)})]}),(0,j.jsx)(`button`,{onClick:()=>d(`scan`),children:`View scan`})]}),ee===`repair`&&(()=>{let e=Re(T.checklist),t=e?[]:ze(me);return(0,j.jsxs)(j.Fragment,{children:[T.summary&&!T.summary.startsWith(Fe)&&(0,j.jsx)(`p`,{children:T.summary}),e?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`p`,{className:`helperText`,children:`Repair steps for this page:`}),(0,j.jsx)(`ol`,{className:`checklist compact`,children:T.checklist.filter(e=>Le.test(e)).slice(0,6).map((e,t)=>(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`span`,{children:t+1}),(0,j.jsx)(`p`,{children:e})]},e))})]}):t.length>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`p`,{className:`helperText`,children:`Key service facts extracted from this page:`}),(0,j.jsx)(`ul`,{className:`keyFacts`,children:t.map((e,t)=>(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`span`,{children:(0,j.jsx)(de,{size:14})}),(0,j.jsx)(`p`,{children:e})]},t))}),(0,j.jsxs)(`p`,{className:`helperText dimText`,children:[`These are extracted directly from the OCR text. Correct any OCR errors in the `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`edit`),children:`Edit OCR tab`}),` to improve accuracy.`]})]}):(0,j.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,j.jsx)(de,{size:24}),(0,j.jsxs)(`p`,{children:[`No repair checklist has been generated for this page yet. `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`page`),children:`View the OCR text`}),` for the full content.`]})]})]})})(),ee===`reference`&&(0,j.jsxs)(j.Fragment,{children:[T.summary&&!T.summary.startsWith(Fe)&&(0,j.jsx)(`p`,{children:T.summary}),(0,j.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,j.jsx)(se,{size:24}),(0,j.jsxs)(`p`,{children:[`This is a reference data page — specifications, capacities or tables.`,` `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`page`),children:`View OCR text`}),` `,`or`,` `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`scan`),children:`open the original scan`}),`.`]})]})]}),ee===`informational`&&(0,j.jsxs)(j.Fragment,{children:[T.summary&&!T.summary.startsWith(Fe)&&(0,j.jsx)(`p`,{children:T.summary}),(0,j.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,j.jsx)(D,{size:24}),(0,j.jsxs)(`p`,{children:[`This is an informational page — no repair steps apply.`,` `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`page`),children:`Read the OCR text`}),` `,`or`,` `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`scan`),children:`view the original scan`}),`.`]})]})]}),ee===`diagram`&&(0,j.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,j.jsx)(O,{size:24}),(0,j.jsxs)(`p`,{children:[`This is a diagram or image-only page. Use the`,` `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`scan`),children:`scan viewer`}),` `,`to see the original page.`]})]})]}),u===`edit`&&(0,j.jsxs)(`section`,{className:`card`,children:[(0,j.jsxs)(`div`,{className:`editorHeader`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsxs)(`h3`,{className:`sectionTitle`,children:[`Edit OCR Text - Page `,T.page]}),(0,j.jsx)(`p`,{className:`helperText`,children:`Correct the OCR errors here. Changes autosave locally and are used by search immediately.`})]}),(0,j.jsx)(`div`,{className:`editorStatus`,children:he?`Edited locally`:`Using original OCR`})]}),T.isImageOnly?(0,j.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,j.jsx)(O,{size:24}),(0,j.jsx)(`p`,{children:`This page is image-only, so there is no OCR text to edit. Use the scan viewer for the original page image.`})]}):(0,j.jsx)(`textarea`,{className:`ocrEditor`,value:me,onChange:e=>Ae(e.target.value),spellCheck:`false`}),(0,j.jsxs)(`div`,{className:`buttons`,children:[(0,j.jsxs)(`button`,{onClick:He,children:[(0,j.jsx)(ie,{size:16}),` `,f?`Copied`:`Copy text`]}),(0,j.jsxs)(`button`,{onClick:Ue,children:[(0,j.jsx)(ae,{size:16}),` Export OCR fixes`]}),(0,j.jsxs)(`button`,{onClick:We,children:[(0,j.jsx)(le,{size:16}),` Import OCR fixes`]}),he&&(0,j.jsx)(`button`,{onClick:Ie,children:`Reset this page`}),(0,j.jsxs)(`button`,{onClick:()=>d(`scan`),children:[`View scan `,(0,j.jsx)(O,{size:16})]})]})]}),u===`page`&&(0,j.jsxs)(`section`,{className:`card`,children:[(0,j.jsx)(`h3`,{className:`sectionTitle`,children:`OCR text from this page`}),(0,j.jsx)(`p`,{className:`helperText`,children:`This view uses your corrected OCR text if you have edited this page.`}),(0,j.jsx)(`pre`,{className:`ocrText`,children:Ve(me||(T.isImageOnly?`This is an image-only reference page. Open the scan viewer to see the original page.`:`No readable OCR text was extracted from this page.`),e)})]}),u===`scan`&&(0,j.jsxs)(`section`,{className:`card viewer`,children:[(0,j.jsxs)(`div`,{className:`viewerTop`,children:[(0,j.jsxs)(`h3`,{children:[`Original scanned page `,T.page]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`button`,{onClick:()=>a(Math.max(60,i-20)),children:(0,j.jsx)(pe,{size:16})}),(0,j.jsx)(`button`,{onClick:()=>a(Math.min(180,i+20)),children:(0,j.jsx)(A,{size:16})})]})]}),(0,j.jsx)(`iframe`,{title:`manual pdf`,src:`${T.sourcePdf||(o===`mk3`?Oe:De)}#page=${T.sourcePage||T.page}&zoom=${i}`})]}),u===`checklist`&&(()=>{let e=Re(T.checklist)?T.checklist.filter(e=>Le.test(e)):[],t=e.length>0?e:ze(me),n=t.filter((e,t)=>m[`${o}:${T.page}:${t}`]).length;return(0,j.jsxs)(`section`,{className:`card`,children:[(0,j.jsxs)(`div`,{className:`checklistHeader`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h3`,{className:`sectionTitle`,children:e.length>0?`Troubleshooting checklist`:`Key service facts — checklist`}),(0,j.jsxs)(`p`,{className:`helperText`,children:[n,` of `,t.length,` checked`]})]}),n>0&&(0,j.jsx)(`button`,{className:`clearBtn`,onClick:()=>{let e={...m};t.forEach((t,n)=>delete e[`${o}:${T.page}:${n}`]),h(e)},children:`Clear all`})]}),t.length>0?(0,j.jsx)(`ul`,{className:`interactiveChecklist`,children:t.map((e,t)=>{let n=`${o}:${T.page}:${t}`,r=!!m[n];return(0,j.jsxs)(`li`,{className:r?`checked`:``,onClick:()=>h(e=>({...e,[n]:!e[n]})),children:[(0,j.jsx)(`span`,{className:`checkbox`,children:r?`✓`:``}),(0,j.jsx)(`p`,{children:e})]},t)})}):(0,j.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,j.jsx)(de,{size:24}),(0,j.jsx)(`p`,{children:T.isImageOnly?`This is a diagram/image page. Use the original scan.`:`No checklist available for this page yet.`})]}),e.length===0&&t.length>0&&(0,j.jsxs)(`p`,{className:`helperText dimText`,children:[`Extracted from OCR text. Fix errors in the `,(0,j.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`edit`),children:`Edit OCR tab`}),`.`]})]})})(),e&&(0,j.jsxs)(`section`,{className:`card`,children:[(0,j.jsx)(`h3`,{className:`sectionTitle`,children:`Search results from OCR text`}),(0,j.jsx)(`div`,{className:`searchResults`,children:_e.map(e=>(0,j.jsxs)(`button`,{onClick:()=>Se(e.page),children:[(0,j.jsxs)(`strong`,{children:[`Page `,e.page,`: `,e.title]}),(0,j.jsxs)(`span`,{children:[e.text.slice(0,260),`...`]})]},e.page))})]})]})]})]})}(0,me.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(He,{}));