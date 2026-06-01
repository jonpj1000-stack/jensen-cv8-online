var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function w(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=w,T=function(){ie.postMessage(null)}}else T=function(){_(w,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,A=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),j=`__reactFiber$`+pt,mt=`__reactProps$`+pt,ht=`__reactContainer$`+pt,gt=`__reactEvents$`+pt,_t=`__reactListeners$`+pt,vt=`__reactHandles$`+pt,yt=`__reactResources$`+pt,bt=`__reactMarker$`+pt;function xt(e){delete e[j],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[j];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[j]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[j])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[j]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function M(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function N(e){e[bt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return ke.call(jt,e)?!0:ke.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(bu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=h({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=h({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(h({},Mn,{dataTransfer:0})),Fn=wn(h({},Dn,{relatedTarget:0})),In=wn(h({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(h({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(h({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(h({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(h({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(h({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(h({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(h({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(h({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=mn&&`CompositionEvent`in window,Qn=null;mn&&`documentMode`in document&&(Qn=document.documentMode);var $n=mn&&`TextEvent`in window&&!Qn,er=mn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=bn(),yn=vn=_n=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Ed(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Bt(wt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(mn){var _r;if(mn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,sn(e)),fn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=mn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Vt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};mn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),Dt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=pi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=pi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=pi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case w:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ge(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[j]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=pe(null),Xi=null,Zi=null;function Qi(e,t,n){k(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,O(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,I={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new ca,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=E.S;E.S=function(e,t){eu=A(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=pe(null);function Sa(){var e=xa.current;return e===null?K.pooledCache:e}function Ca(e,t){t===null?k(xa,xa.current):k(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:I._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case T:return t=ja(t),f(e,t,n)}if(le(t)||oe(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===S)return f(e,oa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=ja(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===S)return p(e,t,oa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=ja(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===S)return m(e,t,n,oa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=ja(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===S)return b(e,r,oa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=pe(null),no=pe(0);function ro(e,t){e=Wl,k(no,e),k(to,t),Wl=e|t.baseLanes}function io(){k(no,Wl),k(to,to.current)}function ao(){Wl=no.current,O(to),O(no)}var oo=pe(null),so=null;function co(e){var t=e.alternate;k(L,L.current&1),k(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){k(L,L.current),k(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(k(L,L.current),k(oo,e),so===null&&(so=e)):fo(e)}function fo(){k(L,L.current),k(oo,oo.current)}function po(e){O(oo),so===e&&(so=null),O(L)}var L=pe(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,B=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=zs;var t=z!==null&&z.next!==null;if(ho=0,B=z=R=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ra(e)&&(ic=!0))}function Eo(e,t,n,r){R=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,B=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}ho=0,B=z=R=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return B===null?R.memoizedState=B=e:B=B.next=e,B}function H(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=B===null?R.memoizedState:B.next;if(t!==null)B=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},B===null?R.memoizedState=B=e:B=B.next=e}return B}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Aa(xo,e,t),t=R,(B===null?t.memoizedState:B.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return aa(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),z,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((ho&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ic=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=R,a=H(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||B!==null&&B.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||ho&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=Mo(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Go(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,z,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(F){var n=K.formState;if(n!==null){a:{var r=R;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,R,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,R,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),z,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ta?Da:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=z;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=Mo(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();R.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&Co(r,z.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(R.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=Mo(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||ho&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Dr(n,t)?n:to.current===null?!(ho&42)||ho&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Dr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Fs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ya(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ue,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return aa(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),K===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===R||t!==null&&t===R}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var zs={readContext:aa,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:aa,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,R,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=jo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,R)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:aa,use:Po,useCallback:ys,useContext:aa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),z.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:aa,use:Po,useCallback:ys,useContext:aa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return z===null?xs(n,e,t):Ss(n,z.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return z===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ti(e)}function Ys(e){console.error(e)}function Xs(e){ti(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ka(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=oo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=$s(e.stateNode,r,a),Ya(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(F&&s&&Fi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:I._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Va(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(lo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||na(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=fc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ia(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(F&&r&&Fi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(F&&r&&Fi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ua||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ua||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ki(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:wa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(L.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?co(t):fo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(co(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||na(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=wa():(l=I._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Va(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=L.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(L,o),ac(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Qi(t,I,e.memoizedState.cache),Ki();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(L,L.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Qi(t,I,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===w){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,I,r),r!==o.cache&&ta(t,[I],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[j]=t,r[mt]=e,Pd(r,n,e),N(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Ri=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(I),e===null?(a=Sa(),a===null&&(a=K,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Qi(t,I,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,I,r),r!==a.cache&&ta(t,[I],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,I,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ma=Oa,Ea}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(I),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,Gi(t))Ui(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[j]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[j]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[j]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[j]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[j]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return $i(t.type),U(t),null;case 19:if(O(L),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return k(L,L.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&A()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return U(t),null}else 2*A()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=A(),e.sibling=null,n=L.current,k(L,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(I),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(I),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(L),null;case 4:return ye(),null;case 10:return $i(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&O(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(I),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ii(t),t.tag){case 3:$i(I),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:O(L);break;case 10:$i(t.type);break;case 22:case 23:po(t),ao(),e!==null&&O(xa);break;case 24:$i(I)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[j]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[j]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[j]=e,N(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[j]=e,N(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Xt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=A()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=aa(I),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(I).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?dt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||F){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912;return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),it(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-A(),10<a)){if(yu(r,t,Jl,!Vl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Ml(t,a,d);var m=(a&62914560)===a?$l-A():(a&4194048)===a?eu-A():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Zi=Xi=null,Ao(e),Fa=null,Ia=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=hi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=et(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ai(),n}function Cu(e,t){R=null,E.H=zs,t===Ta||t===Da?(t=Na(),Y=3):t===Ea?(t=Na(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,Ci(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Tu(){var e=E.H;return E.H=zs,e===null?zs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ai()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=A()+500,Su(e,t)):Hl=et(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ka(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=Xi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,ai(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=gi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Zi=Xi=null,Ao(t),Fa=null,Ia=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,Ci(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,Ci(n,e.current)),q=null;return}t.flags&32768?(F||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,at(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=$s(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=ec(2),r=qa(t,n,2),r!==null&&(tc(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>A()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=ci(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=$e(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=A(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=$e(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,A()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Fe,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case qr:l=In;break;case Zr:l=qn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=pn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Yt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),N(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),N(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),N(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=M(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);N(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=M(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),N(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=M(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),N(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=M(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=M(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=M(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ut(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),N(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ut(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,N(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),N(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,N(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),N(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,N(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),N(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[j]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,N(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),N(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=A()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=sn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),b=e=>{let t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)},x={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ee=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},S=c(u(),1),C=(0,S.createContext)({}),te=()=>(0,S.useContext)(C),ne=(0,S.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=te()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,S.createElement)(`svg`,{ref:c,...x,width:t??l??x.width,height:t??l??x.height,stroke:e??f,strokeWidth:m,className:_(`lucide`,p,i),...!a&&!ee(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,S.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),w=(e,t)=>{let n=(0,S.forwardRef)(({className:n,...r},i)=>(0,S.createElement)(ne,{ref:i,iconNode:t,className:_(`lucide-${v(b(e))}`,`lucide-${e}`,n),...r}));return n.displayName=b(e),n},T=w(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),re=w(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),ie=w(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),ae=w(`clipboard-list`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]),oe=w(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),se=w(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),ce=w(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),le=w(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),E=w(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),D=w(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ue=w(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),de=w(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),fe=w(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),pe=w(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),O=w(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),k=w(`wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]),me=w(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),he=w(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),ge=w(`zoom-in`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`11`,x2:`11`,y1:`8`,y2:`14`,key:`1vmskp`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),_e=w(`zoom-out`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]),ve=g(),ye=[{page:1,title:`JENSEN`,text:`JENSEN
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
29. Petrol Filler Lid`,summary:`This page provides a labeled diagram identifying the dashboard instruments and controls located in the Jensen C-V8 interior.`,checklist:[`Check the ammeter to monitor the electrical charging system status.`,`Inspect the oil pressure gauge to ensure proper engine lubrication readings.`,`Check the water temperature gauge to verify engine cooling system operation.`,`Verify that the L.H. and R.H. flasher warning lights illuminate when indicators are activated.`,`Check the low fuel warning light for proper function before journeys.`,`Inspect the high beam warning light to confirm it illuminates when headlamps are on high beam.`,`Check that the instrument illumination control adjusts dashboard lighting correctly.`]},{page:5,title:`GENERAL DIMENSIONS AND DATA FOR QUICK REFERENCE`,text:`GENERAL DIMENSIONS AND DATA FOR QUICK REFERENCE

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

5`,summary:`This page provides essential vehicle identification locations, engine specifications, fluid capacities, gear ratios, tyre specifications, and key dimensions for the Jensen C-V8.`,checklist:[`Locate the chassis number on the plate secured to the front of the scuttle or stamped on the front chassis frame cross member.`,`Locate the engine number stamped on the left-hand bank of the cylinder block immediately forward of No. 1 cylinder.`,`Check engine oil level ensuring the dipstick top level is not exceeded, with sump capacity of 7 pints Imperial or 8 pints U.S.`,`Verify engine oil pressure reads 45-65 p.s.i. at 40-50 m.p.h.`,`Fill automatic gearbox with 15.5 pints Imperial or 18.5 pints U.S. of fluid when servicing.`,`Fill manual gearbox with overdrive using 5 pints Imperial or 6 pints U.S. of fluid when servicing.`,`Check tyre pressure and maintain at 24 p.s.i. all round, referring to notes on wheels and tyres on pages 17-18.`,`Verify toe-in at static laden weight is set to 1/16 inch (1.5875 mm).`]},{page:6,title:`Castor Angle (Static laden weight) 2> pos:`,text:`Castor Angle (Static laden weight) 2> pos:

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
below, or orders for repair of them may be addressed to their respective manu-`,summary:`This page covers care and adjustment of seats, chromium plating maintenance, general attentions for locks and hinges, and provides a complete tool kit inventory.`,checklist:[`Clean leather seat upholstery occasionally with a cloth moistened in water.`,`Adjust front seat fore and aft position by pushing the control lever located beneath the seat outward.`,`Check that the trigger on the adjustment lever is properly located in one of the adjustment apertures.`,`Wash chromium plating with soap and warm water only, avoiding metal polish.`,`Check the front shroud safety catch regularly to ensure it is functioning correctly.`,`Apply a drop of oil to door locks, hinges, and other small working parts occasionally and check for security.`,`Smear sliding seat runners periodically with grease.`]},{page:23,title:`facturers from whom further information may be obt`,text:`facturers from whom further information may be obt

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
27`,summary:`This page details the lubrication service intervals and procedures for the automatic transmission, manual transmission, propeller shaft universal joints, and rear axle.`,checklist:[`Check automatic transmission fluid level every 4,000 miles with engine and transmission at normal operating temperature, handbrake on, after momentarily engaging each gear and ending in neutral.`,`Drain and replace automatic transmission oil and filter every 32,000 miles, or more frequently if towing trailers, operating in heavy traffic during hot weather, or carrying abnormal loads.`,`Check manual transmission fluid level every 4,000 miles by removing the filler plug and replenish to the filler hole as needed.`,`Drain and refill manual transmission fluid every 32,000 miles.`,`Disassemble, clean, and repack propeller shaft universal joints with multi-purpose grease (NLGI-0 or 1).`,`Check and top up rear axle fluid level every 4,000 miles using only Shell S1747A.`,`Drain and refill rear axle at 1,000 miles initially, then every 12,000 miles thereafter.`]},{page:28,title:`SERVICE LUBRICATION (continued)`,text:`SERVICE LUBRICATION (continued)

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

Printed in England by Jolly & Barber Led., Rugby.`,summary:`OCR text extracted from this scanned manual page. Use it as a searchable working copy and verify against the scan.`,checklist:[]}],be=[{id:`mk3-p01`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:1,sourcePage:1,title:`HANDBOOK OF INSTRUCTIONS`,summary:`This is the title page of the Jensen C-V8 Mk.III owner's handbook, introducing the manual's purpose and noting where to find the chassis serial number for correspondence.`,plainEnglish:`Lubrication system, oil draining, filter changing and lubrication/maintenance schedule information.`,ocrText:`HANDBOOK OF INSTRUCTIONS
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
1`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p02`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:2,sourcePage:2,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p03`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:3,sourcePage:3,title:`VEHICLE PARTICULARS`,summary:`This page provides blank fields for recording essential vehicle identification information including chassis number, engine number, key numbers, registration, and original delivery date.`,plainEnglish:`Owner record page for chassis, engine, key, registration and delivery details.`,ocrText:`VEHICLE PARTICULARS
KEY Nos. :
Ignition, Shroud and Do0E << rveernenn
Boot and Cubby Locker emer nennnrymmnennnn
SEORUE TRATION OO i se
ORIGINAL DATE OF
DELIVERY FROM WORKS...

2`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p04`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:4,sourcePage:4,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p05`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:5,sourcePage:5,title:`Foreword`,summary:`This foreword introduces the Jensen C-V8 owner's handbook, emphasizing the car's quality construction and the importance of following the manual's instructions for proper care, while directing owners to authorized Jensen dealers or the factory Service Department for assistance.`,plainEnglish:`Introductory notes from Jensen Motors about correct operation and maintenance.`,ocrText:`Foreword

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
3`,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p06`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:6,sourcePage:6,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p07`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:7,sourcePage:7,title:`General Dimensions and Data`,summary:`This page provides key specifications including chassis/engine number locations, engine dimensions, fluid capacities, gear ratios, tyre specifications, and wheel alignment data for the Jensen C-V8.`,plainEnglish:`Key Mk III dimensions, capacities, tyre pressures, tuning data and basic specifications.`,ocrText:`General Dimensions and Data
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
|`,checklist:[`Locate the chassis number on the plate secured to the underside of the companion box lid or on the plate secured to the front of the scuttle.`,`Verify the chassis number stamped on the front of the chassis frame front cross member.`,`Locate the engine number stamped on the L.H. bank of the cylinder block immediately forward of No. 1 Cylinder.`,`Fill oil sump to 8.5 pints Imperial (10 pints U.S., 4.7 litres) including filter, ensuring dipstick top level is not exceeded.`,`Check engine oil pressure reads 45/65 psi at 40/50 m.p.h.`,`Fill automatic gearbox with 17 pints Imperial (20 pints U.S., 9.5 litres) or manual gearbox with 6 pints Imperial (7 pints U.S., 3.3 litres).`,`Fill rear axle with 3 pints Imperial (3.6 pints U.S., 1.705 litres).`,`Set tyre pressure to 24 PSI (1.68 kg/sq. cm.) all round and refer to Notes on Wheels and Tyres on page 20.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p08`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:8,sourcePage:8,title:`'Overall Height 4 ft, 7 ins, (1,397 metres)`,summary:`This page provides key vehicle specifications including dimensions, weight, and critical engine settings for ignition timing, contact breaker gap, spark plugs, and valve clearances.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`'Overall Height 4 ft, 7 ins, (1,397 metres)
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
|`,checklist:[`Check ignition timing is set to 10° before T.D.C. at 500 rpm.`,`Inspect and set contact breaker gap between .014 ins and .019 ins (.35 mm to .48 mm).`,`Check spark plug gap is set to .035 ins (.89 mm) using Champion J10Y plugs.`,`Verify oil sump level does not exceed the high level mark on the dipstick.`,`Confirm valve clearances require no adjustment due to zerolash tappets.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p09`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:9,sourcePage:9,title:`Instruments and controls diagram`,summary:`Instrument panel layout diagram showing gauges, switches, warning lights and dashboard controls.`,plainEnglish:`Instrument panel layout diagram showing gauges, switches, warning lights and dashboard controls.`,ocrText:`INSTRUMENTS AND CONTROLS
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

7`,checklist:[`The re-fuel switch automatically unlocks the fuel filler flap on the`,`Should the solenoid fail, the flap can be`,`The harder settings should be used for high speeds,`,`The switch works in a CLOCKWISE direction only, and should not`,`6000 RPM and engine speeds in this sector should not be`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p14`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:14,sourcePage:14,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p15`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:15,sourcePage:15,title:`Starting Up and General Running Hints`,summary:`This page covers the engine running-in period guidelines for new vehicles and provides step-by-step instructions for starting the engine from cold.`,plainEnglish:`Starting, running-in, cold-start and driving guidance for the Mk III.`,ocrText:`Starting Up and General Running Hints
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

a`,checklist:[`Avoid speeds in excess of 60 miles per hour for the first 300 miles of operation.`,`Keep close watch on the engine oil level and panel instruments, especially the temperature and oil pressure gauges, during the running-in period.`,`Avoid sustained high engine speed during the early life of the new car to allow all parts to adjust without excess friction and heat.`,`Ensure the handbrake is applied before starting the engine.`,`Move the gear range selector lever to neutral position 'N' on cars with automatic transmission before starting.`,`Depress the accelerator pedal slowly to one third of its travel and allow it to return to closed position before starting from cold.`,`Turn the ignition key to the extreme right to operate the starter, and release the key when the engine fires.`,`Push the accelerator pedal slowly to full open and operate the starter while keeping the pedal depressed if the engine does not start due to excess fuel in the cylinders.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p16`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:16,sourcePage:16,title:`GEARBOX OPERATION`,summary:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`GEARBOX OPERATION
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

10`,checklist:[`Engine Lubrication System`,`The engine lubrication system comprises an externally mounted`,`flexible pipes, engine sump, and various lubrication passages.`,`pump, The valve gear is lubricated by oilways through the cam`,`shaft, while the qudgeon-pins are splash lubricated.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p20`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:20,sourcePage:20,title:`Lubrication Diagram & First Service`,summary:`This page provides the lubrication diagram and outlines the required service checks after the first 1,000 miles of driving.`,plainEnglish:`Chassis lubrication point diagram (Fig. 3) identifying all grease and check points by code (A1–J1), followed by the First 1,000 Miles service checklist.`,ocrText:`Fig. 3

LUBRICATION AND MAINTENANCE

FIRST 1,000 MILES SERVICE

The following special service is necessary after the car has covered the first 1,000 miles.

Drain and refill axle.
Check contact breakers, and adjust if necessary.
Check steering and front end geometry.
Check hydraulic reservoirs for fluid.
Tighten driving belt if necessary.
Check electrical system.
Check tyre pressures.
Check lights.
Check braking system.
Check water level and connections and tighten if necessary.`,checklist:[`Drain and refill the rear axle.`,`Check contact breakers and adjust if necessary.`,`Check steering and front end geometry.`,`Check hydraulic reservoirs for fluid level.`,`Tighten the driving belt if necessary.`,`Check the electrical system.`,`Check tyre pressures.`,`Check the braking system.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1,lubricationDiagram:!0},{id:`mk3-p21`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:21,sourcePage:21,title:`4,000 MILES`,summary:`This page outlines the scheduled maintenance tasks for the Jensen C-V8 at 4,000-mile intervals, including lubrication points, fluid checks, and component inspections.`,plainEnglish:`Brake system operation and service notes.`,ocrText:`A~1,000 MILES (second end subsequent)
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
"W`,checklist:[`Grease the steering rack using a grease gun at the single nipple.`,`Grease the brake balance lever using a grease gun at the single nipple.`,`Check and top up the steering dampers.`,`Inspect and top up the front shock absorbers.`,`Drain and refill the engine sump.`,`Grease the rear wheel hubs using a grease gun at the two nipples.`,`Check and top up the rear axle.`,`Clean and check the alternator.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p22`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:22,sourcePage:22,title:`G—20,000 MILES`,summary:`This page outlines scheduled maintenance tasks for the Jensen C-V8 at 20,000, 32,000, and 80,000 mile service intervals.`,plainEnglish:`Automatic gearbox operation, selector use, driving speeds, towing and push-start guidance.`,ocrText:`G—20,000 MILES

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

41 — Cerburettor Inlet Pipe Fuel Filter—Replace,`,checklist:[`Replace sparking plugs at 20,000 miles.`,`Replace fuel pump inlet filter at 20,000 miles.`,`Clean and repack wheel hubs at 32,000 miles.`,`Replace air cleaner element at 32,000 miles under heavy operating conditions.`,`Drain, refill, and adjust automatic transmission at 32,000 miles under heavy operating conditions.`,`Replace automatic transmission oil filter at 32,000 miles under heavy operating conditions.`,`Clean and repack propeller shaft joints at 32,000 miles under heavy operating conditions.`,`Replace carburettor inlet pipe fuel filter at 80,000 miles.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p23`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:23,sourcePage:23,title:`Fuel System and Carburettor`,summary:`This page describes the fuel system components including the tank, fuel lines, filters, mechanical pump, and Carter AFB carburettor, with instructions for filter replacement intervals and idle speed adjustment.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Fuel System and Carburettor
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
2`,checklist:[`Replace the fuel filter between the tank and pump every 20,000 miles.`,`Replace the fuel filter after the pump every 80,000 miles.`,`Change filters more frequently where dirty petrol has been used.`,`Warm up the engine thoroughly and drive a minimum of five miles before adjusting idle speed.`,`Disconnect the carburettor to bellcrank rod on cars with automatic transmission before adjusting idle speed.`,`Turn the idle speed screw in or out to obtain 500 r.p.m. using a tachometer.`,`Check that the choke valve is fully open before making idle speed adjustment.`,`Ensure the fast idle adjustment screw is not contacting the fast idle cam during adjustment.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p24`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:24,sourcePage:24,title:`'COVER PLATE`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`STE. uP ASTON
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
"`,checklist:[`{8) Adjust carburettor rod (A) until bail joint stud locates in`,`(7) Adjust cable end ball joint, while applying a light load`,`depressed fully against floor stop, if necessary adjust floor`,`The air cleaner is held on top of the carburettor by one wing nut.`,`Every 8,000 miles the air cleaner element should be cleaned.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p28`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:28,sourcePage:28,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p29`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:29,sourcePage:29,title:`Ignition`,summary:`This page explains the Jensen C-V8's ignition system featuring a ballast resistor and twin contact breakers, along with distributor maintenance intervals.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Ignition
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
15`,checklist:[`Add 5-10 drops of oil to the distributor oil cup every 8,000 miles.`,`Add 2-3 drops of oil to the rotor wick every 8,000 miles.`,`Apply a thin coating of grease to the cam and bumper block every 8,000 miles.`,`Clean and check the contact breaker points every 8,000 miles.`,`Block one contact breaker set with a thin strip of insulating material such as mica when setting the gap on the other.`,`Set each contact breaker gap as if for a single unit.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p30`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:30,sourcePage:30,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p31`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:31,sourcePage:31,title:`Cooling System`,summary:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,plainEnglish:`Cooling system description and service guidance, including coolant, fans and temperature warnings.`,ocrText:`Cooling System
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
|`,checklist:[`lost, When it is necessary to change = wheel the following`,`procedure should be adopted.`,`1) The car should be on s hard level surface.`,`2) The handbrake should be applied.`,`3) The ave plate should be removed using the screwdriver`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p41`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:41,sourcePage:41,title:`Bodywork`,summary:`This page covers the operation of doors, front shroud, boot, and keys on the Jensen C-V8, including locking mechanisms and access procedures.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Bodywork
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

2`,checklist:[`Unlock the small square panel at the front of the shroud using the ignition key to access the shroud release lever.`,`Turn the shroud release lever upwards to a vertical position to release the main shroud securing pins.`,`Pull forward the safety catch located in the air intake immediately to the right of the car centre-line before lifting the shroud.`,`Lift the front shroud with both hands and ensure it stays open automatically in its fully open position.`,`Verify that the small light on the underside of the shroud illuminates when opened with sidelights on.`,`Check that the boot lid light in the forward left hand corner switches on when the boot is opened.`,`Record the numbers of both keys on the designated page in the manual for future reference.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p42`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:42,sourcePage:42,title:`Seats`,summary:`OCR text extracted from the Mk III instruction manual for searching and editing.`,plainEnglish:`OCR text extracted from the Mk III instruction manual for searching and editing.`,ocrText:`Seats

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

2`,checklist:[`adeptor is provided in the toolkit, and this should be used in`,`The nut should be turned anti`,`The spare wheel should be replaced by reversing this sequence of`,`The car should always be cleaned using « liberal supply of clean`,`It is essential not to 'dry clean' the car, as this will produce`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p44`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:44,sourcePage:44,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p45`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:45,sourcePage:45,title:`Cabin Heating and Ventilation Systems`,summary:`This page describes the operation and controls for the Jensen C-V8's cabin heating system and two independent ventilation systems.`,plainEnglish:`Dashboard, switchgear and instrument descriptions, including ignition, lights, wipers, gauges and warning lamps.`,ocrText:`Cabin Heating and Ventilation Systems
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

23`,checklist:[`Check that the engine has reached normal operating temperature before expecting full heater effectiveness.`,`Operate the air cut-off control by moving the knob down to open the valve and allow air into the heater.`,`Set the distribution control to 'INT' to direct airflow to front and rear footwells, or to 'DEMIST' to direct flow to the windscreen.`,`Adjust the temperature control on the right side of the facia lower to set desired cabin temperature.`,`Operate the two-speed fan switch on the facia: move halfway down for slow speed, fully down for high speed.`,`Open the small sliding panels on each footwell exterior to enable speed-dependent ventilation from intakes below the headlights.`,`Pull out the nozzles on the spherical facia-mounted air vents to open face-level ventilation.`,`Operate the switch marked 'Air' on the facia to activate the booster fan for supplementing fresh air output.`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1},{id:`mk3-p46`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:46,sourcePage:46,title:`Blank page`,summary:`Blank or spacer page in the scanned manual.`,plainEnglish:`Blank or spacer page in the scanned manual.`,ocrText:``,checklist:[],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`blank`,hidden:!0,isImageOnly:!1},{id:`mk3-p47`,model:`mk3`,modelLabel:`Jensen C-V8 Mk III`,page:47,sourcePage:47,title:`Electrical System`,summary:`Starting, running-in, cold-start and driving guidance for the Mk III.`,plainEnglish:`Starting, running-in, cold-start and driving guidance for the Mk III.`,ocrText:`Electrical System
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
Printed in Emgland by Bachan Prone Lick, Saver`,checklist:[`Lubrication—chart | 19 Sav =, he`,`Lubrication—enging = = 28 Shroud ee |`,`Lubrication—gearbox 28 © Siowrunning = s`],sourcePdf:`/manuals/jensen-cv8-mk3-instruction-manual.pdf`,type:`text`,hidden:!1,isImageOnly:!1}],xe=[{id:`mk1-mk2`,title:`Mk I & Mk II Wiring Diagram`,subtitle:`Colourised — original Lucas wiring colours`,models:[`all`,`mk1`,`mk2`],pdf:`/manuals/jensen-cv8-mk1-mk2-wiring-diagram.pdf`,credit:`Colourised by Jensen C-V8 community`,components:[{name:`Battery`,wires:[`Brown (main feed)`],circuit:`Charging`,notes:`Located in boot. Brown cable to main fusebox and starter solenoid.`},{name:`Alternator`,wires:[`Brown`,`Yellow/Brown`],circuit:`Charging`,notes:`Lucas 11AC. Brown output to battery via ammeter.`},{name:`Starter Motor`,wires:[`Brown (heavy)`],circuit:`Starting`,notes:`Solenoid operated. White/Red from ignition switch to solenoid.`},{name:`Starter Solenoid`,wires:[`Brown`,`White/Red`],circuit:`Starting`,notes:`White/Red from ignition switch; Brown heavy cable to starter.`},{name:`Ignition Switch`,wires:[`White`,`White/Red`,`Brown`],circuit:`Ignition`,notes:`Position I: White circuit live. Position II: White/Red to starter.`},{name:`Coil`,wires:[`White`,`White/Black`],circuit:`Ignition`,notes:`CB terminal: White/Black to distributor. SW terminal: White from ignition.`},{name:`Distributor`,wires:[`White/Black`],circuit:`Ignition`,notes:`Points fed from coil CB terminal via White/Black.`},{name:`Ballast Resistor`,wires:[`White`,`White/Black`],circuit:`Ignition`,notes:`In series with coil primary. Bypassed during cranking by White/Red.`},{name:`Headlamps`,wires:[`Blue/White (main)`,`Blue/Red (dip)`],circuit:`Lighting`,notes:`Dip: Blue/Red. Main: Blue/White. Flash: Purple/White from stalk.`},{name:`Sidelights (front)`,wires:[`Green/Red`],circuit:`Lighting`,notes:`Green/Red from lighting switch via fusebox.`},{name:`Tail/Brake Lights`,wires:[`Green/Red`,`Green/Purple`],circuit:`Lighting`,notes:`Tail: Green/Red. Stop: Green/Purple from brake switch.`},{name:`Number Plate Light`,wires:[`Green/Red`],circuit:`Lighting`,notes:`Green/Red in parallel with tail lights.`},{name:`Interior Light`,wires:[`Purple/White`],circuit:`Lighting`,notes:`Purple/White: door-switch feed. Always live via purple.`},{name:`Ammeter`,wires:[`Brown`],circuit:`Instruments`,notes:`In series with main Brown feed between alternator and battery.`},{name:`Oil Pressure Gauge`,wires:[`Green/White`],circuit:`Instruments`,notes:`Green/White to sender on engine block. Ignition controlled.`},{name:`Water Temp Gauge`,wires:[`Green/Blue`],circuit:`Instruments`,notes:`Green/Blue to sender on thermostat housing.`},{name:`Fuel Gauge`,wires:[`Green/Yellow`],circuit:`Instruments`,notes:`Green/Yellow to tank sender unit.`},{name:`Speedometer`,wires:[`Green/White`],circuit:`Instruments`,notes:`Illumination: Green. Warning lights fed from instrument circuit.`},{name:`Flasher Unit`,wires:[`Green`,`Light Green`],circuit:`Indicators`,notes:`Lucas FL5. Green feed in, Light Green output to indicator lamps.`},{name:`Front Indicators`,wires:[`Light Green`,`Light Green/Brown`],circuit:`Indicators`,notes:`LH: Light Green. RH: Light Green/Brown.`},{name:`Rear Indicators`,wires:[`Light Green`,`Light Green/Brown`],circuit:`Indicators`,notes:`LH: Light Green. RH: Light Green/Brown.`},{name:`Horn`,wires:[`Purple`,`Yellow/Black`],circuit:`Horn`,notes:`Horns: Yellow/Black from horn push. Always live Purple supply.`},{name:`Heater Motor`,wires:[`Blue`,`Blue/White`],circuit:`Accessories`,notes:`Two speed via resistor. Blue/White: fast. Blue: slow via resistor.`},{name:`Wiper Motor`,wires:[`Green/Yellow`,`Green/Brown`],circuit:`Accessories`,notes:`Green/Yellow: low speed. Self-park circuit via Green/Brown.`},{name:`Washer Motor`,wires:[`Green`],circuit:`Accessories`,notes:`Green feed from fused accessory circuit via washer switch.`},{name:`Overdrive`,wires:[`White/Purple`,`Brown/Yellow`],circuit:`Accessories`,notes:`Gearbox inhibit switch and solenoid. White/Purple from switch.`},{name:`Fuse Box`,wires:[`Brown`,`Green`,`Blue`,`Purple`],circuit:`Distribution`,notes:`4-way Lucas fusebox. Brown in; Green, Blue, Purple feeds out.`}]},{id:`mk3`,title:`Mk III Wiring Diagram`,subtitle:`Colourised — original Lucas wiring colours`,models:[`mk3`],pdf:`/manuals/jensen-cv8-mk3-wiring-diagram.pdf`,credit:`Colourised by Jensen C-V8 community`,components:[{name:`Battery`,wires:[`Brown (main feed)`],circuit:`Charging`,notes:`Located in boot. Brown to main fusebox and starter solenoid.`},{name:`Alternator`,wires:[`Brown`,`Yellow/Brown`],circuit:`Charging`,notes:`Lucas 11AC/15ACR. Brown output to battery via ammeter.`},{name:`Starter Motor`,wires:[`Brown (heavy)`],circuit:`Starting`,notes:`Solenoid operated. White/Red from ignition switch.`},{name:`Ignition Switch`,wires:[`White`,`White/Red`,`Brown`],circuit:`Ignition`,notes:`Combined ignition/starter switch. Key-operated.`},{name:`Coil`,wires:[`White`,`White/Black`],circuit:`Ignition`,notes:`CB terminal to distributor via White/Black.`},{name:`Ballast Resistor`,wires:[`White`,`White/Black`],circuit:`Ignition`,notes:`Bypassed by White/Red during cranking for full voltage.`},{name:`Headlamps`,wires:[`Blue/White (main)`,`Blue/Red (dip)`],circuit:`Lighting`,notes:`Same Lucas colour convention as Mk I/II.`},{name:`Sidelights (front)`,wires:[`Green/Red`],circuit:`Lighting`,notes:`Green/Red from lighting switch.`},{name:`Tail/Brake Lights`,wires:[`Green/Red`,`Green/Purple`],circuit:`Lighting`,notes:`Tail: Green/Red. Brake: Green/Purple.`},{name:`Reversing Light`,wires:[`Green/White`],circuit:`Lighting`,notes:`Mk III addition. Green/White via gearbox reverse switch.`},{name:`Interior Light`,wires:[`Purple/White`],circuit:`Lighting`,notes:`Door-switch controlled. Always-live Purple supply.`},{name:`Ammeter`,wires:[`Brown`],circuit:`Instruments`,notes:`In series on main Brown feed.`},{name:`Oil Pressure Gauge`,wires:[`Green/White`],circuit:`Instruments`,notes:`Green/White to sender on engine.`},{name:`Water Temp Gauge`,wires:[`Green/Blue`],circuit:`Instruments`,notes:`Green/Blue to thermostat housing sender.`},{name:`Fuel Gauge`,wires:[`Green/Yellow`],circuit:`Instruments`,notes:`Green/Yellow to tank sender.`},{name:`Low Fuel Warning`,wires:[`Green/Yellow`],circuit:`Instruments`,notes:`Mk III addition. Triggered by tank sender at low level.`},{name:`Rev Counter`,wires:[`White`,`Green`],circuit:`Instruments`,notes:`Mk III electronic rev counter. White ignition feed, Green illumination.`},{name:`Flasher Unit`,wires:[`Green`,`Light Green`],circuit:`Indicators`,notes:`Lucas FL5.`},{name:`Indicators`,wires:[`Light Green`,`Light Green/Brown`],circuit:`Indicators`,notes:`Same colour coding as Mk I/II.`},{name:`Hazard Warning`,wires:[`Purple`,`Light Green`],circuit:`Indicators`,notes:`Mk III addition. Purple always-live feed to separate flasher unit.`},{name:`Selectaride`,wires:[`Purple`,`Brown/Yellow`],circuit:`Accessories`,notes:`Mk III Selectaride damper switch on transmission tunnel.`},{name:`Heater Motor`,wires:[`Blue`,`Blue/White`],circuit:`Accessories`,notes:`Two-speed heater fan.`},{name:`Wiper Motor`,wires:[`Green/Yellow`,`Green/Brown`],circuit:`Accessories`,notes:`Self-parking. Green/Yellow: run. Green/Brown: park circuit.`},{name:`Re-fuel Switch`,wires:[`Purple`,`Brown/Yellow`],circuit:`Accessories`,notes:`Mk III solenoid-released fuel filler flap.`},{name:`Overdrive`,wires:[`White/Purple`,`Brown/Yellow`],circuit:`Accessories`,notes:`Gearbox inhibit switch and overdrive solenoid.`},{name:`Fuse Box`,wires:[`Brown`,`Green`,`Blue`,`Purple`],circuit:`Distribution`,notes:`Lucas fusebox. Brown in; colour-coded feeds out.`}]}];function Se(e){return e===`mk3`?xe.find(e=>e.id===`mk3`):xe.find(e=>e.id===`mk1-mk2`)}var Ce=[`Charging`,`Starting`,`Ignition`,`Lighting`,`Instruments`,`Indicators`,`Horn`,`Accessories`,`Distribution`],we=`The Armstrong Selectaride was one of the first electrically adjustable shock absorber systems introduced in the post-war era. Jensen fitted it to the C-V8 as a standard feature — a rotary selector switch on the transmission tunnel allowed the driver to choose between four damper settings from SOFT to HARD (positions 1–4) while on the move.

In practice the system was notoriously unreliable. The electro-mechanical valves inside each shock absorber unit were sensitive to dirt and wear, and many cars had the system fail within a few years of production. As a result, the majority of surviving C-V8s have either had the Selectaride system removed entirely, the units replaced with conventional fixed-rate shock absorbers, or — for the dedicated enthusiast — refurbished back to working order.

The documentation on this page covers the original Armstrong wiring arrangement and community-developed wiring modifications that improve reliability. Both modifications allow the original Selectaride units to function correctly if the solenoid valves inside the shock absorbers are still serviceable.`,Te={"mk1-mk2":{title:`Armstrong Selectaride — Mk I & Mk II`,subtitle:`Electrically adjustable shock absorber system with wiring modifications`,models:[`all`,`mk1`,`mk2`],overview:we,pdf:`/manuals/jensen-cv8-mk1-mk2-selectaride.pdf`,contributors:[{name:`Derek Chapman`,role:`Technical diagrams & wiring documentation`},{name:`Phillip Coltman`,role:`Technical diagrams & wiring documentation`}],sections:[{id:`wiring-complete`,title:`Complete Wiring Modification Diagram`,subtitle:`Full rewire — Control Switch, LED Display, Relays and Shock Absorbers`,page:1,tags:[`wiring modification`,`control switch`,`relay`,`LED display`,`shock absorber`,`T1–T4`,`S1–S4`],notes:`The complete diagram shows the four-position Control Switch (T1–T4) connected via the LED indicator display to two relays, which drive the left and right shock absorber solenoid valves (S1–S4). Wire colours: Red = 12V supply, Black = ground, White/Green/Blue = control signals, Brown = coil feed to solenoids, Yellow = relay output.`},{id:`external-relay`,title:`Optional Modification — External Relay`,subtitle:`Protecting switch contacts from high current with an additional relay`,page:2,tags:[`modification`,`relay`,`external relay`,`high current`,`switch contacts`,`coil`,`12V`],notes:`The standard wiring passes full solenoid current through the small Control Switch contacts, causing arcing and wear. This modification adds an external relay — the switch only energises the relay coil (low current) while the relay contacts carry the high current to the solenoid, greatly extending contact life.`},{id:`overview-1`,title:`General Overview — Part 1`,subtitle:`Block diagram: Control Switch → Wiring Loom → Shock Absorber Electrical Boxes`,page:3,image:`/selectaride/SELECTARIDE-G01.jpg`,tags:[`overview`,`wiring loom`,`control switch`,`shock absorber`,`left`,`right`,`T1–T4`,`S1–S4`],notes:`Simplified block diagram showing how the single Selectaride Control Switch (T1–T4) connects via the wiring loom to two identical Shock Absorber Electrical Boxes — one for the left damper (S1–S4) and one for the right (R1–R4). Each box contains a coil which, when energised, moves the internal valve to the selected damping rate.`},{id:`overview-2`,title:`General Overview — Part 2`,subtitle:`Detailed views: Control Switch (bottom view) and Shock Absorber Box (top view)`,page:4,image:`/selectaride/SELECTARIDE-G02.jpg`,tags:[`overview`,`rotor`,`bottom view`,`top view`,`S1–S4`,`R1–R4`,`coil`,`ground`],notes:`Shows the physical construction of the Control Switch rotor (bottom view, T1–T4 contacts) and the Shock Absorber Electrical Box (top view, S1–S4 contacts). Important: S1=R1, S2=R2, S3=R3, S4=R4 — the left and right boxes use identical contact layouts, labelled differently in the wiring diagrams.`},{id:`switching-soft`,title:`Switching Procedure — To Position SOFT`,subtitle:`Rotor and valve positions when moving to the SOFT setting`,page:5,image:`/selectaride/SELECTARIDE-switching-proceedure-0.jpg`,tags:[`switching`,`SOFT`,`rotor`,`T1`,`S1`,`R1`,`valve`,`procedure`],notes:`When turning the selector from position 4 to SOFT, contact T1 briefly closes during rotor travel. S1 and R1 are already closed in this position. The valve inside the shock absorber moves to the SOFT position. Note the rotor position while moving — transitions are important for understanding why dirty or worn contacts cause failure.`},{id:`switching-soft-ab`,title:`Switching Procedure — SOFT Steps A & B`,subtitle:`Before and after: T1 closes (A), then S1/R1 open and S2/R2 close (B)`,page:6,image:`/selectaride/SELECTARIDE-switching-proceedure-1.jpg`,tags:[`switching`,`SOFT`,`T1`,`T2`,`S1`,`S2`,`R1`,`R2`,`procedure`,`step A`,`step B`],notes:`A: While turning from position 4 to SOFT, T1 closes briefly (S1 & R1 already closed). B: After the switch settles, S1 & R1 open and S2 & R2 close — ready for the impulse of T2 on the next position change.`},{id:`switching-pos2-cd`,title:`Switching Procedure — Position 2 Steps C & D`,subtitle:`Transitioning from SOFT to position 2: T2 closes, S3/R3 take over`,page:7,image:`/selectaride/SELECTARIDE-switching-proceedure-2.jpg`,tags:[`switching`,`position 2`,`T2`,`T3`,`S2`,`S3`,`R2`,`R3`,`procedure`,`step C`,`step D`],notes:`C: While turning from SOFT to position 2, T2 closes briefly (S2 & R2 already closed). D: After settling, S2 & R2 open and S3 & R3 close — ready for the impulse of T3 when moving to position 3.`}]},mk3:{title:`Armstrong Selectaride — Mk III`,subtitle:`Full wiring diagram including Selectaride shock absorber system`,models:[`mk3`],overview:we,pdf:`/manuals/jensen-cv8-mk3-selectaride.pdf`,contributors:[{name:`Derek Chapman`,role:`Technical diagrams & wiring documentation`},{name:`Phillip Coltman`,role:`Technical diagrams & wiring documentation`}],sections:[{id:`mk3-wiring-full`,title:`Mk III Full Wiring Diagram with Selectaride`,subtitle:`Complete wiring diagram showing the Selectaride system integrated into the Mk III loom`,page:1,tags:[`wiring`,`Mk III`,`Selectaride`,`shock absorber`,`full diagram`],notes:`The Mk III wiring diagram showing the full loom including the Selectaride adjustable damper circuit. The Mk III uses a dedicated Selectaride switch on the transmission tunnel (referenced in the Controls & Instruments section). This diagram shows how the switch integrates with the rest of the Mk III electrical system.`}]}};function Ee(e){return e===`mk3`?Te.mk3:Te[`mk1-mk2`]}var De=[{id:`engine`,label:`Engine`,emoji:`🔧`},{id:`cooling`,label:`Cooling`,emoji:`🌡️`},{id:`fuel`,label:`Fuel System`,emoji:`⛽`},{id:`ignition`,label:`Ignition`,emoji:`⚡`},{id:`electrical`,label:`Electrical`,emoji:`💡`},{id:`brakes`,label:`Brakes`,emoji:`🛑`},{id:`suspension`,label:`Suspension & Steering`,emoji:`⚙️`},{id:`service`,label:`Service Schedule`,emoji:`📋`},{id:`body`,label:`Body & Interior`,emoji:`🚗`}],Oe=[{id:`engine-oil-change`,category:`engine`,title:`Engine Oil & Filter Change`,subtitle:`Sump drain, filter replacement and refill`,models:[`all`],difficulty:`easy`,overview:`The Jensen C-V8 uses a Chrysler 383 cu in V8 engine. The oil and filter should be changed every 4,000 miles or 3 months, whichever comes first. Use SAE 20W/50 multigrade oil. The sump capacity is approximately 8 pints including the filter.`,symptoms:[],tools:[`Drain plug spanner / 9/16" socket`,`Oil filter strap wrench`,`Oil drain tray (at least 9 pint capacity)`,`Funnel`,`Torque wrench`,`Clean rags`],parts:[`Engine oil — SAE 20W/50 multigrade (approx. 8 pints)`,`Replaceable oil filter element`,`Drain plug copper washer (if worn)`],procedure:[`Warm the engine to operating temperature, then switch off and allow 5 minutes for oil to drain back.`,`Place the drain tray beneath the sump drain plug on the underside of the engine.`,`Remove the drain plug using a 9/16" socket and allow the oil to drain completely.`,`Remove the oil filter. On the Mk III the filter is accessible from above; on earlier models access is from below.`,`Wipe the filter seating face clean and smear a little fresh oil on the new filter gasket.`,`Install the new filter — hand tighten only, then a further 3/4 turn with the strap wrench.`,`Refit the drain plug with a new copper washer. Tighten firmly — do not overtighten.`,`Refill with fresh SAE 20W/50 oil through the filler cap on the rocker cover. Add approximately 7 pints initially.`,`Start the engine and run for 2 minutes. Check the filter and drain plug for leaks.`,`Switch off and wait 5 minutes, then check the dipstick. Top up to the MAX mark if required.`,`Reset the oil change reminder and record the mileage.`],checklist:[`Check drain plug is fully tightened and not leaking`,`Check oil filter is tight and dry — no seepage`,`Check oil level is between MIN and MAX on dipstick`,`Check there is no oil on the exhaust — wipe any spillage`,`Record date, mileage and oil brand used`],manualRefs:[{label:`Lubrication & Maintenance`,model:`base`,pages:[10,11]},{label:`Engine Lubrication System`,model:`mk3`,pages:[19]},{label:`Service Lubrication Schedule`,model:`mk3`,pages:[55,56,57,58]}],wiringRef:null},{id:`engine-tune-up`,category:`engine`,title:`Engine Tune-Up`,subtitle:`Spark plugs, contact points, timing and carburetor`,models:[`all`],difficulty:`moderate`,overview:`A full tune-up on the C-V8 covers spark plug renewal, contact breaker point replacement and gap setting, ignition timing and carburetor idle adjustment. This should be carried out every 12,000 miles. The Chrysler 383 uses Champion N10Y plugs with a gap of 0.025".`,symptoms:[`Rough idle or misfiring`,`Poor fuel economy`,`Hard starting, especially when cold`,`Lack of power or hesitation on acceleration`,`Black sooty exhaust smoke`],tools:[`Spark plug spanner (13/16")`,`Feeler gauges`,`Timing light (stroboscope)`,`Screwdrivers (flat and Phillips)`,`Contact breaker point file or fine emery cloth`,`Distributor spanner`],parts:[`Spark plugs — Champion N10Y (set of 8)`,`Contact breaker points`,`Condenser (renew with points)`,`Distributor cap (inspect, replace if cracked)`,`HT leads (inspect)`],procedure:[`Allow the engine to cool before beginning work.`,`Remove and inspect all 8 spark plugs. Note the colour of each — light tan/grey is correct. Black sooty deposits indicate rich mixture; white/blistered indicates overheating.`,`Set plug gap to 0.025" (0.635mm) using feeler gauges. The gauge should drag slightly when pulled through the gap.`,`Refit plugs by hand to avoid cross-threading, then tighten with the plug spanner — firm but do not overtighten.`,`Remove the distributor cap and rotor arm. Inspect the cap for cracks, carbon tracking or corroded contacts.`,`Examine the contact breaker points. If pitted or worn, replace the complete point set and condenser.`,`Set the contact breaker gap to 0.014–0.016" (0.35–0.40mm) using feeler gauges with the rubbing block on the peak of the cam lobe.`,`Refit the rotor arm and cap. Reconnect all HT leads ensuring correct firing order: 1-8-4-3-6-5-7-2.`,`Start the engine and connect the timing light. Static timing should be 5° BTDC; check against specifications for the model.`,`With the engine at idle (600 rpm), check the timing mark on the crankshaft pulley aligns with the correct pointer.`,`Adjust timing if necessary by slackening the distributor clamp bolt and rotating the distributor body until the mark aligns.`,`Tighten the clamp bolt and recheck timing under a blip of throttle to confirm advance is working.`,`Finally, carry out the carburetor idle adjustment procedure.`],checklist:[`Check all 8 plug leads are firmly seated on plugs and distributor cap`,`Check distributor cap for cracks or tracking marks`,`Verify timing mark aligns at idle with timing light`,`Check contact breaker gap with feeler gauge — 0.014–0.016"`,`Confirm idle speed is 600 rpm in neutral`,`Check for smooth throttle response — no flat spots`],manualRefs:[{label:`Specifications & Dimensions`,model:`base`,pages:[5,6]},{label:`Ignition System`,model:`mk3`,pages:[29,30]},{label:`Service Lubrication`,model:`mk3`,pages:[55,56]}],wiringRef:`ignition`},{id:`valve-clearance`,category:`engine`,title:`Valve Clearance Check`,subtitle:`Tappet adjustment on the Chrysler 383 V8`,models:[`all`],difficulty:`advanced`,overview:`Valve clearances (tappet clearances) on the hydraulic-lifter Chrysler 383 are self-adjusting under normal conditions and do not require periodic adjustment. However, if a persistent ticking is heard from the valve train, it may indicate a collapsed or stuck hydraulic lifter. This procedure covers inspection and bleed-down testing.`,symptoms:[`Persistent clicking or ticking from the top of the engine`,`Noise that does not clear after warming up`,`Noise that is speed-related and rhythmic`],tools:[`Rocker cover gasket set`,`Torque wrench`,`Socket set`,`Clean drain tray`,`Engine flush oil (if suspected sludge)`],parts:[`Rocker cover gaskets (set of 2)`,`Hydraulic valve lifters (if defective)`],procedure:[`Allow the engine to cool. Remove both rocker covers after slackening all retaining bolts.`,`With the engine running at idle, observe each rocker arm for excessive movement or obvious lack of tension.`,`A hydraulic lifter that has bled down will show excessive rocker arm travel. A stuck-open lifter will have no movement.`,`If a collapsed lifter is suspected, top up oil to MAX, run the engine at fast idle (1200 rpm) for 5 minutes to allow lifters to pump up.`,`If ticking persists, the suspect lifter must be removed, cleaned or replaced. This requires camshaft access — a workshop job.`,`Before refitting rocker covers, clean all gasket faces and fit new rocker cover gaskets.`,`Refit rocker covers and tighten bolts evenly in a cross pattern to approximately 25 in/lb — do not overtighten.`,`Start the engine and check for oil leaks from rocker cover gaskets.`],checklist:[`Check oil level is at MAX before running engine`,`Check ticking disappears after running at fast idle`,`Check rocker covers are not leaking after refitting`,`Check oil pressure gauge shows normal reading (30–40 psi at idle)`],manualRefs:[{label:`Specifications & Dimensions`,model:`base`,pages:[5,6]},{label:`Engine Lubrication System`,model:`mk3`,pages:[19]}],wiringRef:null},{id:`running-in`,category:`engine`,title:`Running-In Procedure`,subtitle:`New engine and post-rebuild break-in`,models:[`all`],difficulty:`easy`,overview:`The Jensen C-V8 manual specifies a careful running-in procedure for new or rebuilt engines. Varying engine speed during the first 500 miles allows bearing surfaces to bed in correctly. Avoid sustained high speeds and heavy loads until 1,000 miles have been covered.`,symptoms:[],tools:[],parts:[`Engine oil — SAE 20W/50 (for oil change at 500 miles)`,`Oil filter`],procedure:[`For the first 500 miles, do not exceed 50 mph (3,200 rpm). Vary the engine speed frequently — avoid sustained cruising at one speed.`,`Do not use full throttle at any stage during the first 500 miles.`,`Avoid towing or carrying heavy loads during running-in.`,`At 500 miles: drain and refill the engine oil and replace the filter. This removes metallic particles from the initial bed-in.`,`From 500 to 1,000 miles, speed may be gradually increased up to 70 mph. Still avoid sustained full-throttle use.`,`At 1,000 miles: carry out the standard 1,000-mile service — check all fluid levels, tyre pressures and lubrication points.`,`After 1,000 miles the engine can be used normally. Performance will continue to improve up to approximately 5,000 miles.`],checklist:[`Check engine oil level daily during running-in period`,`Check coolant level after first run and again at 200 miles`,`Change oil and filter at 500 miles`,`Record mileage at each check`],manualRefs:[{label:`Starting, Gearbox & Towing`,model:`base`,pages:[7,8,9]},{label:`Starting Up & Running`,model:`mk3`,pages:[15,16,17,18]},{label:`Lubrication & Maintenance`,model:`base`,pages:[10,11]}],wiringRef:null},{id:`overheating-diagnosis`,category:`cooling`,title:`Overheating Diagnosis`,subtitle:`Finding the cause of high coolant temperature`,models:[`all`],difficulty:`moderate`,overview:`Overheating on the C-V8 is most commonly caused by low coolant level, a failed thermostat, a blocked radiator, a broken or slipping fan belt, or a failed water pump. The Mk III uses electric cooling fans in addition to the engine-driven fan. Work through the checks systematically before dismantling anything.`,symptoms:[`Temperature gauge reading in the red sector`,`Steam from under the bonnet`,`Coolant loss or puddles under the car`,`Boiling/bubbling sounds from the engine bay`,`Heater output suddenly hot then cold`],tools:[`Radiator pressure tester`,`Multimeter`,`Hose clamp pliers`,`Torchlight for inspection`],parts:[`Coolant (water + anti-freeze 50/50)`,`Thermostat (82°C)`,`Radiator top and bottom hoses`,`Fan belt`],procedure:[`Do not open the radiator cap when the engine is hot — wait at least 30 minutes after switching off.`,`Check the coolant level in the radiator and header tank. If low, top up and check for leaks.`,`Inspect all hoses and clips for leaks or swelling. Squeeze the hoses — they should feel firm, not spongy or hard.`,`Check the fan belt tension. The belt should have approximately 1/2" (12mm) deflection under moderate finger pressure at the midpoint of the longest run. A slack belt will also squeal under load.`,`Start the engine from cold and observe the temperature gauge. The thermostat should open (gauge rises steadily then stabilises) at approximately 82°C.`,`If the gauge rises continuously to the red zone, suspect a stuck-closed thermostat. Remove and test it in boiling water — it should open fully.`,`Check the electric fans operate (Mk III): they should cut in when the coolant temperature reaches approximately 90°C.`,`With the engine fully warm, feel both radiator hoses. The top hose should be hot; the bottom hose cooler. If both are the same temperature, suspect a blocked radiator.`,`Pressure-test the cooling system using a radiator pressure tester — hold 14 psi for 10 minutes with no drop.`,`If the system loses pressure with no visible external leak, suspect a failed head gasket — look for white exhaust smoke and check for oil in the coolant.`],checklist:[`Check coolant level — cold, with engine off`,`Check fan belt tension — 1/2" deflection at midpoint`,`Check all hose clips are tight`,`Confirm thermostat opens correctly — gauge stabilises`,`Check Mk III electric fans operate when hot`,`Check for white exhaust smoke (possible head gasket)`],manualRefs:[{label:`Cooling, Heating & Rear Axle`,model:`base`,pages:[20,21]},{label:`Cooling System`,model:`mk3`,pages:[31,32]}],wiringRef:`cooling`},{id:`coolant-service`,category:`cooling`,title:`Coolant System Service`,subtitle:`Drain, flush and refill with fresh antifreeze`,models:[`all`],difficulty:`easy`,overview:`The cooling system should be flushed and refilled with fresh antifreeze mixture every 2 years or 20,000 miles. The correct mixture is 50% water and 50% ethylene glycol antifreeze, providing protection to approximately -36°C and raising the boiling point. Total system capacity is approximately 20 pints.`,symptoms:[],tools:[`Drain plug spanner`,`Funnel and measuring jug`,`Hose clamp pliers`,`Hosepipe for flushing`],parts:[`Antifreeze — ethylene glycol (approx. 10 pints)`,`Distilled water (10 pints)`,`Radiator/hose clips if worn`],procedure:[`Allow the engine to cool completely before draining.`,`Place a drain tray beneath the radiator. Remove the bottom hose from the radiator outlet or open the drain tap at the base of the radiator.`,`Remove the radiator filler cap to allow air in and speed draining.`,`Once drained, reconnect the hose or close the drain tap.`,`Flush the system by filling with clean water via the filler and running the engine for 10 minutes with the heater on full heat to flush the heater matrix.`,`Drain the flush water completely.`,`Prepare the coolant mixture: 10 pints of antifreeze plus 10 pints of clean water (distilled or de-ionised preferred).`,`Pour the mixture into the radiator and header/expansion tank slowly to avoid airlocks.`,`Start the engine with the filler cap off and run until the thermostat opens. Top up as the level drops.`,`Refit the filler cap. Check all hoses and clips for leaks after the first drive.`],checklist:[`Check antifreeze concentration with a hydrometer or test strip`,`Check all hose clips are tight after refilling`,`Check coolant level in header tank when cold — should be between MIN and MAX`,`Verify no leaks after first drive`],manualRefs:[{label:`Cooling, Heating & Rear Axle`,model:`base`,pages:[20,21]},{label:`Cooling System`,model:`mk3`,pages:[31,32]}],wiringRef:null},{id:`fan-belt`,category:`cooling`,title:`Fan Belt Inspection & Renewal`,subtitle:`Drive belt condition, tension and replacement`,models:[`all`],difficulty:`easy`,overview:`The fan belt on the C-V8 drives the alternator/dynamo, water pump and cooling fan from the crankshaft pulley. It should be inspected every 4,000 miles. A worn or slipping belt will cause charging failure and overheating. Tension: 1/2" deflection at the midpoint under firm thumb pressure.`,symptoms:[`Battery not charging / ammeter discharging`,`Overheating`,`Squealing from the front of the engine under load`,`Visible fraying, cracking or glazing on the belt`],tools:[`Spanner set`,`Ruler or belt tension gauge`,`Pry bar for tensioning (use carefully)`],parts:[`Fan belt (V-belt — measure old belt if unsure of size)`],procedure:[`With the engine off and cold, press down on the longest run of the fan belt at its midpoint. Correct deflection is approximately 1/2" (12mm) under firm thumb pressure.`,`Inspect the belt for cracks, fraying, glazing (shiny surface) or oil contamination. A glazed belt will slip even if the tension is correct.`,`To replace the belt: slacken the alternator/dynamo pivot bolt and adjuster bolt. Pivot the alternator/dynamo towards the engine to release tension.`,`Slip the old belt off all three pulleys: crankshaft, water pump and alternator/dynamo.`,`Loop the new belt over the crankshaft pulley, then the water pump, then the alternator/dynamo.`,`Pivot the alternator/dynamo outwards to tension the belt. Aim for 1/2" deflection.`,`Tighten the adjuster bolt first, then the pivot bolt.`,`Start the engine and run for 5 minutes. Re-check tension — new belts stretch slightly during the first few minutes of running.`,`Readjust if necessary.`],checklist:[`Check tension — 1/2" deflection mid-span`,`Check belt surface — no cracks, glazing or oil contamination`,`Check all three pulleys are aligned — no edge wear on belt`,`Confirm alternator is charging after replacement`],manualRefs:[{label:`Cooling, Heating & Rear Axle`,model:`base`,pages:[20,21]},{label:`Cooling System`,model:`mk3`,pages:[31,32]}],wiringRef:null},{id:`carb-idle`,category:`fuel`,title:`Carburettor Idle Adjustment`,subtitle:`Carter AFB idle mixture and idle speed setting`,models:[`all`],difficulty:`moderate`,overview:`The Jensen C-V8 is fitted with a Carter AFB (Aluminum Four-Barrel) carburettor. The idle mixture and idle speed screws are accessible from outside the carburettor. The target idle speed is 600 rpm in neutral. The Mk III manual provides detailed adjustment procedures including the secondary throttle and accelerator pump.`,symptoms:[`Rough or unstable idle`,`Engine stalls at idle or when coming to a stop`,`Black smoke from exhaust (rich mixture)`,`Popping on overrun (lean mixture)`,`High fuel consumption`],tools:[`Tachometer / rev counter`,`Flat-bladed screwdriver`,`Vacuum gauge (optional but helpful)`],parts:[],procedure:[`Warm the engine to full operating temperature — at least 10 minutes of running.`,`Locate the idle mixture screws on the carburettor body — there are two, one on each side of the primary throttle body.`,`Turn each mixture screw gently clockwise until it just seats — count and record the number of turns. Do not tighten hard as the tapered tip is easily damaged.`,`Return each screw to the recorded position as a baseline.`,`Adjust the idle speed screw (on the throttle linkage) to give 600 rpm on the tachometer.`,`Turn the first idle mixture screw out (anti-clockwise) by 1/8 turn at a time, pausing after each adjustment to allow the idle to stabilise. The idle speed will rise as mixture improves.`,`Repeat for the second mixture screw. Adjust alternately.`,`Once maximum idle speed is reached, readjust the idle speed screw back to 600 rpm.`,`Fine-tune mixture screws until the smoothest idle at 600 rpm is achieved.`,`Check idle quality with the choke fully off and all electrical loads on (lights, heater).`,`Road test: check for smooth pull-away, no hesitation or rich stumble.`],checklist:[`Check idle speed is 600 rpm in neutral`,`Check engine pulls cleanly from idle without stumble`,`Check choke plate is fully open when engine is hot`,`Check throttle linkage moves freely to full throttle and returns to idle`,`Check air filter is fitted — do not adjust with it removed`],manualRefs:[{label:`Fuel System & Carburettor`,model:`base`,pages:[15,16,17]},{label:`Fuel System & Carburettor`,model:`mk3`,pages:[23,24,25,26,27]}],wiringRef:null},{id:`fuel-filter`,category:`fuel`,title:`Fuel Filter Service`,subtitle:`Inline filter and carburettor inlet strainer`,models:[`all`],difficulty:`easy`,overview:`The C-V8 fuel system has a replaceable fuel filter in the line between the fuel pump and carburettor. There is also a small strainer at the carburettor fuel inlet union. Both should be inspected at 12,000 miles. A blocked filter causes fuel starvation, particularly at high speed.`,symptoms:[`Engine cuts out at high speed or under load`,`Fuel starvation on long climbs`,`Flat spots on acceleration`,`Engine runs well at idle but poorly at speed`],tools:[`Spanners`,`Small drain tray`,`Petrol-resistant gloves`,`Clean cloths`],parts:[`Inline fuel filter`,`Fibre washers for carburettor inlet union`],procedure:[`Ensure ignition is off and the engine is cool. Have a fire extinguisher accessible.`,`Locate the inline fuel filter in the engine bay between the fuel pump and carburettor.`,`Place a small tray under the filter connections to catch spilled fuel.`,`Slacken the hose clips or unions at each end of the filter and remove it.`,`Fit the new filter, observing the flow direction arrow on the body.`,`Tighten the clips or unions firmly.`,`Also remove the fuel inlet union on the carburettor and clean the brass gauze strainer inside with a petrol-dampened cloth.`,`Refit the inlet union with new fibre washers and tighten firmly.`,`Run the engine and check for leaks at both fuel connections.`],checklist:[`Check new filter is fitted in the correct flow direction`,`Check no fuel leaks at filter ends after starting`,`Check carburettor inlet union is tight — no seepage`,`Check engine pulls strongly at full throttle on road test`],manualRefs:[{label:`Fuel System & Carburettor`,model:`base`,pages:[15,16]},{label:`Fuel System & Carburettor`,model:`mk3`,pages:[23,24,25]}],wiringRef:null},{id:`air-cleaner`,category:`fuel`,title:`Air Cleaner Service`,subtitle:`Air filter element replacement and housing clean`,models:[`all`],difficulty:`easy`,overview:`The air cleaner on the C-V8 uses a dry paper element which should be replaced every 12,000 miles or annually, whichever comes first. In dusty conditions more frequent replacement is needed. Never run the engine without the air cleaner fitted.`,symptoms:[`Rich running / black smoke (severely blocked filter)`,`Slightly higher fuel consumption`,`Visible dirt or discolouration on the element`],tools:[`Wing nut spanner or by hand`,`Clean cloths or brush`],parts:[`Air filter element (paper element for Carter AFB)`],procedure:[`Remove the wing nut securing the air cleaner lid.`,`Lift off the lid and extract the paper filter element.`,`Clean the inside of the air cleaner housing with a damp cloth. Do not allow dirt to fall into the carburettor.`,`Tap the old element gently to dislodge loose dust and inspect by holding it up to a light. If blocked or damaged, replace it.`,`Fit the new element and refit the lid and wing nut.`,`Check the crankcase breather hose from the rocker cover to the air cleaner is securely connected.`],checklist:[`Check element is correctly seated in the housing`,`Check lid is secured with wing nut`,`Check crankcase breather hose is connected`,`Check underside of lid for oil deposits — excessive oil indicates crankcase breathing problems`],manualRefs:[{label:`Fuel System & Carburettor`,model:`base`,pages:[15,16]},{label:`Fuel System & Carburettor`,model:`mk3`,pages:[23,24,25,26,27]}],wiringRef:null},{id:`spark-plugs`,category:`ignition`,title:`Spark Plug Service`,subtitle:`Removal, inspection and gap setting`,models:[`all`],difficulty:`easy`,overview:`The C-V8 uses eight Champion N10Y spark plugs (or equivalent) with a gap of 0.025". Plugs should be inspected at 6,000 miles and replaced at 12,000 miles. The plug condition is a valuable diagnostic indicator of engine health.`,symptoms:[`Rough idle or misfire on one or more cylinders`,`Hard starting`,`Poor fuel economy`],tools:[`Spark plug spanner (13/16")`,`Extension bar`,`Feeler gauges or plug gapping tool`,`Torque wrench`,`Wire brush`],parts:[`Spark plugs — Champion N10Y x8 (or NGK BP6ES equivalent)`,`Anti-seize compound (optional)`],procedure:[`Allow the engine to cool — removing plugs from a hot aluminium head can damage threads.`,`Remove HT leads by pulling the boot, not the wire. Label leads if unsure of routing.`,`Clean around each plug with compressed air or a brush before removal to prevent dirt entering the cylinder.`,`Unscrew each plug and examine the firing end.`,`Normal appearance: light tan or grey insulator. Rich: black sooty. Lean: white or blistered. Oily: valve stem seals or rings worn.`,`Clean any serviceable plugs with a wire brush. Do not sandblast as abrasive gets into the engine.`,`Set the gap on new or cleaned plugs to 0.025" (0.635mm). Adjust by bending the outer electrode only.`,`Apply a small amount of anti-seize to the threads of new plugs if the heads are aluminium.`,`Start each plug by hand to avoid cross-threading. Tighten to approximately 25 ft/lb (new plugs) or 15 ft/lb (reused).`,`Refit HT leads ensuring correct firing order: 1-8-4-3-6-5-7-2 (Chrysler 383 firing order).`],checklist:[`Check plug gap is 0.025" — use wire type feeler gauge`,`Check all HT leads are firmly pushed home on plugs`,`Check firing order is correct if leads were removed`,`Check no traces of coolant in any plug bore (possible head gasket leak)`],manualRefs:[{label:`Specifications & Dimensions`,model:`base`,pages:[5,6]},{label:`Ignition`,model:`mk3`,pages:[29,30]}],wiringRef:`ignition`},{id:`contact-breaker`,category:`ignition`,title:`Contact Breaker Points`,subtitle:`Inspection, setting and replacement`,models:[`all`],difficulty:`moderate`,overview:`The distributor uses conventional contact breaker points and a condenser. The contact gap must be set to 0.014–0.016" with the rubbing block on the peak of the distributor cam. Points should be replaced every 12,000 miles and the condenser renewed with them. A worn condenser causes point burning and erratic advance.`,symptoms:[`Engine misfire especially at high speed`,`Difficulty starting`,`Erratic ignition advance (hunting idle)`,`Visible pitting or burning on contact faces`],tools:[`Feeler gauges`,`Screwdrivers`,`Spanner for distributor clamp`,`Low-voltage test light (optional)`],parts:[`Contact breaker point set`,`Condenser`],procedure:[`Remove the distributor cap by unclipping or unscrewing the retaining clips. Set it aside without disconnecting the HT leads.`,`Remove the rotor arm by pulling it straight off.`,`Examine the contact faces. Slight pitting is normal; severe burning or a pip-and-crater pattern means the condenser has failed.`,`To replace: remove the retaining screw and disconnect the condenser wire from the contact set. Lift out the points.`,`Fit the new condenser, routing its wire clear of the rotor arm.`,`Fit the new contact set without tightening the adjustment screw fully.`,`Turn the engine over (by hand or using the starter in short bursts with the ignition off) until the rubbing block rests on a peak of the cam lobe — the points should be at maximum opening.`,`Insert feeler gauge 0.015" into the contact gap. It should be a smooth drag fit. Adjust the contact base plate with the screwdriver slot until correct.`,`Tighten the adjustment screw and recheck the gap — it often moves slightly when tightened.`,`Refit the rotor arm and cap. Set the ignition timing as described in the Ignition Timing card.`],checklist:[`Check contact gap is 0.014–0.016" with rubbing block on cam peak`,`Check condenser wire is clear of rotor arm rotation path`,`Check rotor arm is firmly seated`,`Check cap is clipped or screwed down firmly`,`Verify ignition timing after fitting new points`],manualRefs:[{label:`Specifications & Dimensions`,model:`base`,pages:[5,6]},{label:`Ignition`,model:`mk3`,pages:[29,30]}],wiringRef:`ignition`},{id:`ignition-timing`,category:`ignition`,title:`Ignition Timing`,subtitle:`Static and dynamic timing with a stroboscope`,models:[`all`],difficulty:`moderate`,overview:`Correct ignition timing is critical for performance and preventing detonation (pinking) on the Chrysler 383. The Mk III manual specifies the timing and notes the use of a ballast resistor in the ignition circuit. Dynamic timing should be checked with a stroboscope at 600 rpm idle. The Mk III uses a distributor with vacuum and centrifugal advance.`,symptoms:[`Pinking or detonation under load`,`Lack of power`,`Poor fuel economy`,`Overheating (over-advanced timing causes heat)`,`Hard starting (retarded timing)`],tools:[`Stroboscopic timing light`,`Distributor clamp spanner`,`Tachometer`],parts:[],procedure:[`Locate the timing marks on the crankshaft pulley and the timing cover pointer. Clean them with a cloth and mark them with white paint or chalk for visibility.`,`Connect the timing light to the Number 1 cylinder HT lead (front right on the Chrysler V8) following the timing light manufacturer's instructions.`,`Start the engine and warm to operating temperature.`,`Set idle speed to 600 rpm using the tachometer.`,`Disconnect the vacuum advance pipe from the distributor and plug it.`,`Point the timing light at the crankshaft pulley. The mark should align with the correct notch on the timing scale.`,`Refer to the specifications: the base manual shows timing for Mk I/II; the Mk III manual shows the Mk III specification.`,`If adjustment is needed: slacken the distributor clamp bolt (single bolt at the base of the distributor).`,`Rotate the distributor body slowly — clockwise to retard, anti-clockwise to advance (standing at the front of the car facing the engine).`,`When the timing mark aligns, hold the distributor and tighten the clamp bolt. Recheck timing.`,`Reconnect the vacuum advance pipe. With the vacuum connected the timing mark should advance further — this confirms the vacuum advance is working.`,`Blip the throttle sharply — timing should advance immediately and return to base on release, confirming centrifugal advance.`],checklist:[`Check timing marks are clean and visible`,`Check idle speed is 600 rpm when measuring timing`,`Check vacuum pipe is disconnected during base timing check`,`Confirm centrifugal advance works — timing advances with rpm`,`Confirm vacuum advance works — timing advances when pipe reconnected`,`Check for pinking on road test under load`],manualRefs:[{label:`Specifications & Dimensions`,model:`base`,pages:[5,6]},{label:`Ignition`,model:`mk3`,pages:[29,30]}],wiringRef:`ignition`},{id:`charging-diagnosis`,category:`electrical`,title:`Charging System Diagnosis`,subtitle:`Alternator, dynamo, regulator and battery checks`,models:[`all`],difficulty:`moderate`,overview:`Early C-V8 models (Mk I/II) use a Lucas dynamo and control box. The Mk III uses a Lucas alternator. Both charge through a positive earth system on early cars and negative earth on later ones. The ammeter on the dashboard is a useful diagnostic tool. A discharging reading at speed indicates a charging fault.`,symptoms:[`Ammeter showing constant discharge`,`Battery going flat`,`Warning light not extinguishing after starting`,`Dim lights that fade at idle`,`Battery requiring frequent top-up of water`],tools:[`Multimeter (volts/amps)`,`Test light`,`Cleaning brush and emery cloth`],parts:[`Fan belt (if slipping)`,`Battery (if failed)`,`Brushes for alternator/dynamo`],procedure:[`Check the fan belt tension first — a slipping belt is the most common cause of charging failure.`,`Check battery voltage with the engine off: should be 12.0–12.6V for a charged battery.`,`Start the engine and rev to approximately 2,000 rpm. Battery voltage should rise to 13.8–14.4V for negative earth systems.`,`If voltage does not rise, the fault is in the charging circuit — check the alternator or dynamo output first.`,`Check all connections at the battery terminals, alternator/dynamo and earthing point. Corrosion and loose connections are common.`,`For the Lucas alternator (Mk III): check the warning light circuit — the light itself provides the initial field excitation. If the bulb has blown, the alternator will not charge.`,`Inspect the alternator/dynamo brushes. Worn brushes that no longer make contact will stop charging.`,`On dynamo-equipped cars (Mk I/II): check the voltage regulator control box — contacts may need cleaning. This requires specialist knowledge.`,`Test the battery under load using a battery tester. A battery that cannot hold voltage under load needs replacement.`],checklist:[`Check fan belt is tight and not slipping`,`Check battery terminal connections are clean and tight`,`Check charging voltage is 13.8–14.4V at 2,000 rpm`,`Check charge warning light goes out when engine starts`,`Check earth connections at battery negative and engine block`],manualRefs:[{label:`Electrical Equipment`,model:`base`,pages:[12,13]},{label:`Electrical System`,model:`mk3`,pages:[47,48]}],wiringRef:`charging`},{id:`fuse-identification`,category:`electrical`,title:`Fuse Identification`,subtitle:`Fuse box location, ratings and circuit mapping`,models:[`all`],difficulty:`easy`,overview:`The Jensen C-V8 fuse box is located in the engine compartment. The base manual covers the Mk I/II fuse arrangement; the Mk III has a different fuse layout with different amperage ratings. Always replace a blown fuse with one of the correct rating — fitting a higher-rated fuse can cause wiring fire.`,symptoms:[`Electrical circuit completely dead`,`Lights not working on one circuit`,`Horn, wipers or heater not working`,`Specific accessories dead`],tools:[`Fuse puller or small flat screwdriver`,`Test light or multimeter`],parts:[`Fuse set — various ratings (check the manual for the correct rating for each circuit)`],procedure:[`Locate the fuse box in the engine compartment. On the Mk I/II it is on the bulkhead; on the Mk III it is also near the bulkhead.`,`Identify the blown fuse — it will have a visibly broken wire inside the glass tube. Some failures are only visible when the fuse is removed and held up to the light.`,`Identify the circuit rating from the label on the fuse box cover or the manual before replacing.`,`Before fitting a replacement, use a test light to check for a fault in the circuit — if a new fuse blows immediately there is a short circuit that must be traced.`,`If the circuit is clear, fit a new fuse of the exact same rating.`,`Test the circuit and check the new fuse has not blown.`,`If the fuse blows again, systematically disconnect loads on that circuit until the fault is isolated.`],checklist:[`Check new fuse is the correct amperage rating`,`Check fuse box cover is replaced after work`,`Check circuit functions correctly after replacement`,`Check for the cause if fuse blew unexpectedly — do not just replace repeatedly`],manualRefs:[{label:`Electrical Equipment`,model:`base`,pages:[12,13]},{label:`Electrical System`,model:`mk3`,pages:[47,48]}],wiringRef:null},{id:`headlamp-circuit`,category:`electrical`,title:`Headlamp Circuit`,subtitle:`Bulb replacement, beam alignment and circuit check`,models:[`all`],difficulty:`easy`,overview:`The C-V8 uses sealed-beam headlamps on early models and replaceable bulbs on the Mk III. The Mk III manual details the lighting circuits on pages 49–50. The headlamps are controlled by the lighting switch on the dashboard and the dip switch.`,symptoms:[`One or both headlamps not working`,`Headlamps dim`,`Headlamps not dipping`,`Incorrect beam aim — dazzling oncoming traffic`],tools:[`Phillips and flat screwdrivers`,`Multimeter or test light`],parts:[`Sealed beam unit (Mk I/II) or replacement bulb (Mk III)`,`Dip switch (if faulty)`],procedure:[`If a single headlamp has failed, remove the headlamp rim retaining screws and pull the sealed beam unit forward.`,`Disconnect the wiring plug from the back of the sealed beam and fit the new unit.`,`On the Mk III: the bulb is accessed from behind the headlamp assembly in the engine compartment.`,`If both headlamps fail simultaneously, check the headlamp fuse and the headlamp relay (where fitted).`,`If main beam works but dip does not (or vice versa), suspect the dip switch.`,`Check the earth connections at the headlamp bodies — a poor earth is a common cause of dim lights.`,`Beam alignment: set the headlamps on a level surface 25 feet from a wall. The centre of the dipped beam pattern should be 2 inches below the headlamp centre height.`,`Adjust beam aim using the headlamp adjustment screws — typically one for vertical and one for horizontal.`],checklist:[`Check both headlamps work on main and dipped beam`,`Check sidelights and number plate lights work with headlamps`,`Check earth connections at headlamp bodies`,`Check beam aim is not dazzling oncoming traffic`],manualRefs:[{label:`Electrical Equipment`,model:`base`,pages:[12,13]},{label:`Lights`,model:`mk3`,pages:[49,50]}],wiringRef:`lighting`},{id:`brake-fluid`,category:`brakes`,title:`Brake Fluid & Bleeding`,subtitle:`Fluid change, level check and air bleeding`,models:[`all`],difficulty:`moderate`,overview:`The C-V8 uses a Girling hydraulic brake system with a vacuum servo. Brake fluid must be kept between MIN and MAX in the master cylinder reservoir. Use Girling Crimson or equivalent DOT 3/DOT 4 fluid only. Fluid should be changed every 2 years as it absorbs moisture and lowers the boiling point.`,symptoms:[`Spongy or springy brake pedal`,`Brake pedal goes to the floor`,`Uneven braking — car pulls to one side`,`Brake fluid level dropping without visible leak`],tools:[`Brake bleeding kit (one-man bleed valve or helper)`,`Clear plastic tube and jar`,`Spanner for bleed nipples (usually 7mm)`,`Syringe for drawing down old fluid`],parts:[`Brake fluid — Girling Crimson / DOT 4 (approx. 1 litre)`],procedure:[`Check the fluid level in the master cylinder reservoir — located on the bulkhead in the engine compartment.`,`Ensure the reservoir is full before beginning bleeding.`,`Start bleeding from the wheel furthest from the master cylinder — normally the rear nearside.`,`Fit the bleed tube to the bleed nipple and place the free end in a jar containing a small amount of clean fluid.`,`Slacken the nipple by 1/2 turn. Pump the brake pedal (or use a pressure bleeder) and watch the tube.`,`Continue until no air bubbles appear in the fluid emerging from the bleed nipple.`,`With the pedal held down, tighten the bleed nipple. Release the pedal.`,`Repeat for the rear offside, then front nearside, then front offside.`,`Top up the reservoir with fresh fluid between wheels — never let it run dry.`,`Check pedal feel — it should be firm with no sponginess. If soft, repeat the bleeding sequence.`,`Check all bleed nipples are tightened and no fluid is leaking.`],checklist:[`Check fluid level is between MIN and MAX after bleeding`,`Check all bleed nipples are tight`,`Check pedal is firm — not spongy`,`Check no fluid has been spilt on painted surfaces — clean immediately`,`Check brake servo vacuum hose is connected and sound`],manualRefs:[{label:`Brakes & Servo`,model:`base`,pages:[14]},{label:`Brake Servo Unit`,model:`mk3`,pages:[38]}],wiringRef:null},{id:`brake-adjustment`,category:`brakes`,title:`Brake Adjustment & Servo`,subtitle:`Rear drum adjustment and servo vacuum check`,models:[`all`],difficulty:`moderate`,overview:`The C-V8 has disc brakes at the front and drum brakes at the rear. Rear drums require periodic manual adjustment to compensate for lining wear. The vacuum servo is fed from the inlet manifold and must be working for effective braking. A failed servo results in very heavy pedal effort.`,symptoms:[`Heavy brake pedal requiring excessive force`,`Rear brakes dragging or binding`,`Brake pedal travel excessive`,`Uneven braking rear-to-front`],tools:[`Brake adjuster tool or large flat screwdriver`,`Vacuum gauge`,`Jack and axle stands`],parts:[`Brake servo vacuum hose (if cracked)`],procedure:[`Jack up the rear of the car and support securely on axle stands. Do not work under the car on a jack alone.`,`Locate the adjuster on the rear brake backplate — on each rear wheel.`,`Rotate the adjuster (usually a star wheel accessible through a slot in the backplate) until the drum just drags as you rotate the wheel by hand.`,`Back off the adjuster until the wheel spins freely with only slight drag.`,`Repeat for the other rear brake.`,`Check servo operation: with the engine off, pump the brake pedal several times to exhaust any vacuum reserve. The pedal should be very firm.`,`Hold firm pressure on the pedal and start the engine. The pedal should move slightly towards the floor as the servo vacuum builds — this confirms the servo is working.`,`If pedal does not change with engine running, check the vacuum hose from the inlet manifold to the servo for cracks, kinks or loose connections.`,`Check the non-return valve in the servo vacuum line — it should only allow air to flow one way (towards the engine).`],checklist:[`Check rear wheels spin freely with no drag after adjustment`,`Check pedal assists when engine is started — servo is working`,`Check vacuum hose is firm and not cracked`,`Check handbrake holds car on a gradient after rear adjustment`,`Test brakes at low speed in a safe area before road use`],manualRefs:[{label:`Brakes & Servo`,model:`base`,pages:[14]},{label:`Brake Servo Unit`,model:`mk3`,pages:[38]}],wiringRef:null},{id:`suspension-lubrication`,category:`suspension`,title:`Front Suspension Lubrication`,subtitle:`Grease nipples on wishbones, ball joints and king pins`,models:[`all`],difficulty:`easy`,overview:`The C-V8 front suspension uses double-wishbone geometry. The suspension joints have grease nipples requiring regular lubrication. The Mk III maintenance schedule identifies all lubrication points with letter codes A–J referenced to the lubrication diagram on page 20. All nipples should be greased every 4,000 miles.`,symptoms:[`Clicking or knocking over bumps from the front`,`Vague or wandering steering`,`Wear visible in suspension joints`],tools:[`Grease gun (hand-operated)`,`Correct grease nipple fitting for the gun`,`Wire brush to clean nipples before greasing`,`Jack and axle stands (recommended)`],parts:[`Lithium EP2 grease`],procedure:[`Jack up the front of the car and support on axle stands to take the load off the suspension joints.`,`Identify all grease nipples. Refer to the lubrication diagram in the manual (Mk III: page 20).`,`Clean each nipple with a wire brush before attaching the gun — dirt forced into the joint will cause wear.`,`Attach the grease gun and pump until fresh grease appears at the seal or the joint is firm.`,`Do not over-grease — forcing excessive grease past seals damages them.`,`Lubrication points include: upper and lower wishbone pivots, king pin/ball joints, track rod end ball joints, anti-roll bar drop links.`,`Wipe excess grease from around nipples.`,`Lower the car and check steering movement feels smooth.`],checklist:[`Check all nipples have been greased — tick off against the lubrication diagram`,`Check no nipples are blocked — grease should flow freely`,`Check for split or cracked rubber gaiters on ball joints and track rod ends`,`Check steering feels smooth and consistent lock-to-lock after greasing`],manualRefs:[{label:`Lubrication & Maintenance`,model:`base`,pages:[10,11]},{label:`Maintenance Schedule`,model:`mk3`,pages:[20,21,22]},{label:`Steering & Suspension`,model:`mk3`,pages:[35,36,37]},{label:`Service Lubrication`,model:`mk3`,pages:[55,56,57,58]}],wiringRef:null},{id:`steering-rack`,category:`suspension`,title:`Steering Rack Service`,subtitle:`Rack lubrication, gaiter check and play assessment`,models:[`all`],difficulty:`moderate`,overview:`The C-V8 uses rack and pinion steering. The steering rack requires periodic lubrication and the rubber gaiters must be kept intact to retain lubricant and exclude dirt. Excessive free play in the steering wheel is often traced to worn rack or track rod end joints.`,symptoms:[`Excessive free play at the steering wheel (more than 1" at the rim)`,`Wandering or imprecise steering`,`Clicking from the steering on lock`,`Steering pulling to one side`],tools:[`Spanner set`,`Grease gun`,`Torque wrench`,`Steering wheel play gauge (or ruler)`],parts:[`Steering rack gaiter kit`,`Lithium grease for rack`,`Track rod end (if worn)`],procedure:[`Inspect the steering rack rubber gaiters — one at each end of the rack. They must be intact with no splits, cracks or loose clips.`,`A split gaiter allows water and dirt in, destroying the rack. Replace split gaiters immediately.`,`To assess play: with the car on the ground, rock the steering wheel gently. Movement before the wheels start to turn indicates play in the system.`,`Identify where the play is by having an assistant move the steering wheel while you watch joints under the bonnet and under the car.`,`Track rod end ball joints are the most common wear point — grasp the track rod end and feel for movement in the ball joint.`,`The rack adjustment: some racks have a yoke adjuster screw. Slackening the locknut and tightening the adjuster slightly can remove minor rack play — consult a workshop manual for the specific procedure.`,`Lubricate the rack via the grease nipple if fitted, or by removing a gaiter and applying fresh grease.`],checklist:[`Check both gaiters are intact and clips are tight`,`Check track rod end ball joints for play — replace if worn`,`Measure steering wheel free play — should be less than 1" at rim`,`Check rack mounting bolts are tight`,`Check steering column universal joints are greased and not worn`],manualRefs:[{label:`Lubrication & Maintenance`,model:`base`,pages:[10,11]},{label:`Steering & Suspension`,model:`mk3`,pages:[35,36,37]}],wiringRef:null},{id:`wheel-alignment`,category:`suspension`,title:`Wheel Alignment`,subtitle:`Toe-in check and track rod adjustment`,models:[`all`],difficulty:`advanced`,overview:`Wheel alignment on the C-V8 covers toe-in of the front wheels. The specification is a small amount of toe-in (typically 1/16"–3/32") which provides stable straight-line running. Incorrect toe causes tyre wear (feathering on the inner or outer edges) and can affect handling. Castor and camber are set by the suspension geometry and are not adjustable on most models.`,symptoms:[`Feathered or scrubbed tyre wear on front tyres`,`Car pulling to one side under braking`,`Steering wheel not centred on a straight road`,`Heavy or uneven steering`],tools:[`Toe gauge (trammel bars or optical alignment tool)`,`Tape measure`,`Chalk or tyre pen`,`Track rod end spanner`,`Torque wrench`],parts:[],procedure:[`Alignment is best measured after driving to settle the suspension. Park on level ground.`,`Mark the front tyres at hub height on the inside of the tread — one mark on each tyre at the front of the wheel.`,`Measure the distance between the two marks (the "track" dimension at the front of the wheels).`,`Roll the car forward exactly half a wheel revolution so the marks are now at the rear of the wheels.`,`Measure between the marks again at the rear.`,`Toe-in = rear measurement minus front measurement. Correct specification: 1/16"–3/32" toe-in (front narrower than rear at the mark height).`,`To adjust: slacken the locknut on each track rod end and rotate the track rod (inner tube) to lengthen or shorten the track rod equally on both sides.`,`Rotating the track rod to lengthen it reduces toe-in; shortening increases toe-in.`,`Recheck the measurement after adjustment and when satisfied tighten the locknuts to the specified torque.`,`Always re-check toe after replacing steering or suspension components.`],checklist:[`Check measurement is taken with tyres at correct pressure`,`Check car is on level ground for accurate measurement`,`Check both track rod ends are equally adjusted`,`Check track rod end locknuts are tightened after adjustment`,`Check steering wheel is centred on a straight road after adjustment`],manualRefs:[{label:`Tyres, Wheels & Alignment`,model:`base`,pages:[18,19]},{label:`Steering & Suspension`,model:`mk3`,pages:[35,36,37]}],wiringRef:null},{id:`service-1000`,category:`service`,title:`1,000 Mile Service`,subtitle:`Initial service after delivery or rebuild`,models:[`all`],difficulty:`easy`,overview:`The 1,000 mile service is a critical initial check for new or restored cars. It catches loose fixings, fluid levels settled after initial use, and any bedding-in issues. The Mk III manual details this service on pages 20–22.`,symptoms:[],tools:[`Basic spanner and socket set`,`Torque wrench`,`Grease gun`,`Feeler gauges`,`Tyre pressure gauge`],parts:[`Engine oil top-up if required`,`Coolant top-up if required`,`Grease (EP2)`],procedure:[`Check and top up engine oil to MAX mark on dipstick.`,`Check and top up coolant — refer to coolant service card.`,`Check brake fluid level in master cylinder reservoir.`,`Check clutch fluid level (if hydraulic clutch).`,`Check gearbox and overdrive oil level.`,`Check rear axle oil level.`,`Check all grease nipples on front suspension — grease as required.`,`Check tyre pressures including spare: front 26 psi, rear 26 psi (verify against specifications for loaded/unloaded).`,`Check all wheel nuts are tight — torque to specification.`,`Check battery electrolyte level and terminal security.`,`Check all lights, horn, wipers and washers function.`,`Carry out a road test — check brakes, steering, gearbox change quality and listen for unusual noises.`],checklist:[`Engine oil level checked and correct`,`Coolant level checked and correct`,`Brake fluid level checked`,`Gearbox oil level checked`,`Rear axle oil level checked`,`All suspension nipples greased`,`Tyre pressures correct`,`All wheel nuts tight`,`All lights, horn and wipers working`,`Road test completed with no faults noted`],manualRefs:[{label:`Lubrication & Maintenance`,model:`base`,pages:[10,11]},{label:`Maintenance Schedule`,model:`mk3`,pages:[20,21,22]},{label:`Service Lubrication`,model:`mk3`,pages:[55,56,57,58]}],wiringRef:null},{id:`service-4000`,category:`service`,title:`4,000 Mile Service`,subtitle:`Oil change and comprehensive inspection`,models:[`all`],difficulty:`easy`,overview:`The 4,000 mile service is the regular maintenance interval covering oil change, lubrication of all grease points, and inspection of key systems. The Mk III manual schedules this on pages 20–22 with coded reference to the lubrication diagram.`,symptoms:[],tools:[`Oil drain tools`,`Grease gun`,`Basic spanner set`,`Tyre pressure gauge`,`Torque wrench`],parts:[`Engine oil — SAE 20W/50 (8 pints)`,`Oil filter`,`EP2 grease`],procedure:[`Carry out engine oil and filter change — refer to the Oil & Filter Change card.`,`Grease all front suspension nipples: upper and lower wishbone pivots, king pin or ball joints.`,`Grease steering rack nipple (if fitted), track rod ends.`,`Grease propeller shaft universal joints (front and rear) — 2 nipples on each joint.`,`Grease handbrake cable pivots.`,`Check gearbox and overdrive oil level — top up if required. Capacity: refer to specifications.`,`Check rear axle oil level — top up if required.`,`Check battery electrolyte level — top up individual cells to correct level with distilled water.`,`Inspect and clean battery terminals — apply petroleum jelly to prevent corrosion.`,`Check all tyre pressures and inspect for wear.`,`Check brake fluid level.`,`Inspect coolant level and hose condition.`,`Inspect fan belt condition and tension.`,`Road test and listen for any new noises.`],checklist:[`Engine oil and filter changed`,`All suspension and steering grease points lubricated`,`Propeller shaft universal joints greased`,`Gearbox oil level checked`,`Rear axle oil level checked`,`Battery topped up and terminals clean`,`Tyre pressures correct`,`Fan belt tension correct`,`Brake fluid level correct`],manualRefs:[{label:`Lubrication & Maintenance`,model:`base`,pages:[10,11,25,26,27,28]},{label:`Maintenance Schedule`,model:`mk3`,pages:[20,21,22]},{label:`Service Lubrication`,model:`mk3`,pages:[55,56,57,58]}],wiringRef:null},{id:`service-20000`,category:`service`,title:`20,000 Mile Service`,subtitle:`Full service with tune-up and component renewal`,models:[`all`],difficulty:`moderate`,overview:`The 20,000 mile service is the major service interval covering all 4,000 mile items plus tune-up components, coolant change and a comprehensive inspection of wear items. The Mk III manual details this with G-prefix items on the maintenance schedule pages.`,symptoms:[],tools:[`Full toolkit`,`Timing light`,`Tachometer`,`Compression tester`],parts:[`Spark plugs x8 — Champion N10Y`,`Contact breaker points and condenser`,`Air filter element`,`Fuel filter`,`Engine oil and filter`,`Coolant — antifreeze (10 pints)`,`Gearbox oil (if drain and refill)`,`Rear axle oil (if drain and refill)`],procedure:[`Complete all items on the 4,000 mile service list.`,`Renew all 8 spark plugs — Champion N10Y. Gap: 0.025".`,`Renew contact breaker points and condenser.`,`Set contact breaker gap to 0.015" and check ignition timing.`,`Renew air filter element.`,`Renew inline fuel filter.`,`Drain and refill cooling system with fresh 50/50 antifreeze mixture.`,`Drain and refill gearbox with fresh oil to the correct specification.`,`Drain and refill rear axle with fresh hypoid oil.`,`Carry out a compression test on all 8 cylinders — all should be within 10% of each other and above 130 psi.`,`Inspect all rubber hoses (coolant, vacuum, fuel) and replace any that are swelling, cracking or showing age.`,`Inspect the exhaust system for leaks and corrosion.`,`Inspect brake pads (front discs) for wear — minimum thickness 3mm.`,`Inspect rear brake drum linings through the inspection hole.`,`Carry out a full road test.`],checklist:[`All 4,000 mile items completed`,`Spark plugs renewed and gapped at 0.025"`,`Contact breaker points and condenser renewed`,`Ignition timing set correctly`,`Air filter renewed`,`Fuel filter renewed`,`Coolant drained and refilled`,`Gearbox oil renewed`,`Rear axle oil renewed`,`Compression test — all cylinders within 10%`,`All rubber hoses inspected`,`Brake pad and lining thickness checked`,`Road test completed`],manualRefs:[{label:`Lubrication & Maintenance`,model:`base`,pages:[10,11,25,26,27,28]},{label:`Maintenance Schedule`,model:`mk3`,pages:[20,21,22]},{label:`Service Lubrication`,model:`mk3`,pages:[55,56,57,58]},{label:`Ignition`,model:`mk3`,pages:[29,30]}],wiringRef:null}],ke=[{id:`known-issues`,label:`Known Issues`,emoji:`⚠️`},{id:`ignition`,label:`Ignition & Electrics`,emoji:`⚡`},{id:`engine`,label:`Engine`,emoji:`🔧`},{id:`fuel`,label:`Fuel System`,emoji:`⛽`},{id:`suspension`,label:`Suspension`,emoji:`⚙️`},{id:`body`,label:`Body & Paint`,emoji:`🎨`},{id:`interior`,label:`Interior`,emoji:`🪑`},{id:`suppliers`,label:`Parts & Suppliers`,emoji:`📦`}],Ae=[{id:`rear-spring-axle-plate-cracking`,category:`known-issues`,title:`Rear Spring Axle Plate Cracking`,subtitle:`A widely reported structural fault on the C-V8 rear axle — detection, risks and repair options`,models:[`all`],difficulty:`advanced`,readTime:`10 min read`,severity:`critical`,tags:[`rear axle`,`spring plate`,`suspension`,`structural`,`cracking`,`weld`,`known issue`],contributors:[`JOC C-V8 Tech Forum — community discussion 2022–2025`],sourceUrl:`https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=`,lastUpdated:`2025`,intro:`Cracking of the rear spring axle mounting plate is a well-documented structural problem on the Jensen C-V8, known to Jensen Motors Limited since the car was new and confirmed as widespread by the current owner community. The fault occurs at the welded steel bracket on the rear axle casing that locates the leaf spring — a critical structural component. Because the failure can result in loss of axle control and directional instability, this issue warrants inspection on any C-V8 being prepared for road use, regardless of mileage or apparent condition.`,sections:[{type:`warning`,content:`This is a safety-critical structural fault. If cracking or deformation is found on one side, assume the opposite bracket is also overloaded and inspect it immediately. Do not drive the car at full throttle until both sides have been inspected and any damage repaired by a competent welder or engineer.`},{type:`heading`,content:`What is the Axle Plate?`},{type:`paragraph`,content:`On most rear-wheel-drive vehicles of the era, the leaf spring is clamped to the axle casing by U-bolts. The Jensen C-V8 uses a different arrangement: a steel bracket is welded directly to the axle casing during manufacture (before the axle end flanges were fitted), and four high-tensile bolts pass through this welded bracket and through a flat plate beneath the leaf spring pack, clamping the spring firmly to the axle. This bracket has two functions: it locates the spring on the axle, and it resists axle wrap — the rotational torque reaction that tries to twist the axle nose upward under hard acceleration, causing the rear springs to adopt an S-shape (commonly called axle tramp).`},{type:`paragraph`,content:`On the left-hand side of the car, the bracket is extended to also provide the lower mounting point for the Panhard rod, which controls lateral movement of the axle. This means the LHS bracket carries additional loads not present on the RHS.`},{type:`heading`,content:`Why It Fails`},{type:`paragraph`,content:`The primary failure point is the 90-degree folded section of the bracket where it transitions from vertical to horizontal. Under the repeated torsional and bending loads imposed by hard acceleration and road surface impacts, this fold is prone to cracking. JML acknowledged the problem in a service bulletin dated 13 July 1966 — before the car had even been in production for three full years — noting that loose anchor bolt nuts were a contributing factor, and introducing an updated bracket with increased thickness.`},{type:`list`,content:[`The original bracket was 1/4" (4/16") thick. JML introduced a revised bracket of 5/16" thickness as a service replacement.`,`If the anchor bolt nuts work loose at any point, the spring can rock on the axle under load, dramatically accelerating fatigue cracking of the bracket.`,`A high-BHP modified C-V8 known to the JOC community tore the bracket completely off the axle casing under hard acceleration — demonstrating the severity of the loads involved.`,`Decades of use mean even the thicker revised bracket can reach the end of its fatigue life on cars that have covered significant mileage or been driven hard.`,`Previous poor repairs — where the bracket has been welded without proper preparation or heat treatment — are common and tend to fail again at the weld or adjacent to it.`]},{type:`heading`,content:`Jensen Service Bulletin — July 1966`},{type:`paragraph`,content:`JML Service Bulletin (13 July 1966, unnumbered) states: "It has been reported from the field that rear-spring to axle anchor bolts have been found loose... This can produce a gradual fracturing of the rear-axle spring mounting plate and we, therefore, recommend the following procedure:"`},{type:`list`,content:[`At 12,000 mile intervals: check torque loading of anchor bolt nuts — 40 lb/ft.`,`If deformation of the rear spring plate is noted: fit the latest assembly, which has an overall thickness of 5/16", an increase of 1/16" on the original specified part.`]},{type:`tip`,content:`The 12,000-mile anchor bolt torque check from the 1966 JML service bulletin is a simple, routine task that should be added to your standard service procedure. 40 lb/ft — use a torque wrench, not a judgement call.`},{type:`heading`,content:`Consequences of Failure`},{type:`list`,content:[`If the bracket fractures while driving, the rear axle is free to move fore and aft under the car, and the body will drop on the affected corner.`,`Uncontrolled axle movement will cause immediate and unpredictable steering deviation — potentially pulling the car sharply to one side.`,`An unconstrained axle nose can twist freely under acceleration, putting the rear leaf springs under extreme S-loading that may cause spring failure.`,`In the worst case, catastrophic propshaft failure is possible if the rear flange angle changes suddenly.`,`The LHS bracket failure additionally compromises Panhard rod geometry, affecting lateral axle location.`]},{type:`heading`,content:`Inspection`},{type:`paragraph`,content:`Inspection requires the car to be raised safely on axle stands or a lift with the rear suspension at ride height. The bracket is visible on the outboard face of the axle casing at each spring location. Look carefully at the 90-degree fold of the bracket, the weld line where the bracket joins the axle casing, and any areas showing paint cracking, rust staining, or surface cracking in the metal. On cars that have had previous repairs, inspect the weld bead carefully — a repair weld that is simply laid over an existing crack without proper preparation will show as a discrete ridge over a visible underlying crack.`},{type:`steps`,content:[`Raise the rear of the car and support on axle stands placed under the chassis — not the axle.`,`With the rear suspension hanging free (unloaded), inspect both spring axle brackets from below.`,`Look for cracking at the 90-degree fold, at the weld line, and in the area adjacent to the brake backing plate.`,`Check for evidence of previous welding repairs — any weld bead that was not there from the factory.`,`With an assistant, gently rock the car from side to side and observe whether any movement exists between the spring and the axle at either bracket location.`,`Check the torque on the four anchor bolt nuts using a torque wrench — correct figure is 40 lb/ft.`,`Repeat for the opposite side — if one side is cracked, the other must be treated as suspect regardless of appearance.`]},{type:`heading`,content:`Repair Options`},{type:`paragraph`,content:`Three approaches have been used by C-V8 owners, ranging from like-for-like repair to a full engineering change. The correct choice depends on the severity of the existing damage and the availability of specialist skills and materials.`},{type:`heading`,content:`Option 1 — Professional Weld Repair and Reinforcement (Recommended)`},{type:`paragraph`,content:`The repair must be done by a competent welder experienced with structural steelwork, not a general body shop. The axle should be removed from the car for bench repair — this allows proper access, correct pre-heating, and avoids the risk of heat-induced scaling inside the axle tube damaging bearings or seals.`},{type:`list`,content:[`Remove the axle from the car. This is also the opportunity to replace the vacuum advance unit, clean and inspect the differential and wheel bearings.`,`The cracked area must be properly prepared — the crack must be fully opened up and cleaned back to sound metal before any weld is laid.`,`Pre-heat the bracket area to near blue/red (approximately 200–300°C) before MIG or TIG welding to achieve a deep, sound fusion weld and reduce the risk of heat cracking in the surrounding material.`,`After repairing the crack, add reinforcing plates front and rear of the bracket to spread the loading. These plates should incorporate clearance holes aligned with the existing spring anchor bolt holes.`,`The repair must not be done in situ on a hot engine with the axle under load — the repair weld will not achieve adequate penetration or fusion.`]},{type:`warning`,content:`The original brackets were welded to the axle casing before the axle end flanges were fitted during manufacture. A complete bracket replacement is therefore not straightforward — you cannot slide a new one over the axle shaft. A replacement bracket would need to be fabricated in two halves and welded in place. For most cases, a properly executed repair with reinforcement is the practical solution.`},{type:`heading`,content:`Option 2 — Jaguar XK150 U-Bolt Conversion`},{type:`paragraph`,content:`One approach suggested by experienced C-V8 engineers is to replace the welded bracket arrangement entirely with a set of U-bolt clamps from the rear axle of a Jaguar XK150, which uses a similar axle diameter. This replaces the fatigue-prone folded bracket with a conventional and robust U-bolt clamping arrangement.`},{type:`list`,content:[`The bump stop pad above the spring seat would need to be removed or relocated.`,`A fabricated saddle plate with curved ends to accept the U-bolt would need to be made for each side.`,`This is a more significant fabrication job but results in a more conventional, robust and maintainable spring-to-axle connection.`,`Compatibility with the Panhard rod mount on the LHS bracket would need to be resolved separately.`]},{type:`heading`,content:`Option 3 — Anti-Tramp Bar Installation (Optional Additional Measure)`},{type:`paragraph`,content:`To reduce the root cause of the stress — axle tramp under acceleration — a 4-link anti-tramp bar set-up can be added. This is a more expensive engineering solution used on higher-powered versions of the car. A simpler and cheaper partial measure is to add a heavy-duty leaf clamp between the spring leaves, reducing the spring S-deflection under acceleration. Neither of these replaces the need to repair the cracked bracket first — they are complementary measures to reduce future recurrence.`},{type:`heading`,content:`Ongoing Maintenance`},{type:`list`,content:[`Following the JML 1966 service bulletin: check and torque the four anchor bolt nuts to 40 lb/ft at every 12,000 mile service interval.`,`Include a visual inspection of both brackets at each service — look for new paint cracking or rust staining at the fold.`,`If any anchor bolt nut is found loose, re-torque it and inspect the bracket carefully for signs of deformation or crack initiation before driving further.`,`After any significant axle removal or rebuild, re-torque the anchor bolts and recheck after the first 500 miles of use.`]},{type:`tip`,content:`This is a known issue across essentially the entire C-V8 production run. If you are buying a C-V8 or preparing one for use after a period of storage, a visual inspection of both rear spring axle brackets should be on the pre-purchase or pre-road checklist regardless of what any previous owner or workshop report says.`}]},{id:`erratic-speedometer`,category:`known-issues`,title:`Erratic or Fluctuating Speedometer`,subtitle:`Why the speedo needle flickers or bounces — and how to fix it`,models:[`all`],difficulty:`easy`,readTime:`5 min read`,severity:null,tags:[`speedometer`,`speedo cable`,`instruments`,`known issue`,`gearbox`,`TorqueFlite`],contributors:[`JOC C-V8 Tech Forum — community discussion 2026`],sourceUrl:`https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=`,lastUpdated:`2026`,intro:`A wildly fluctuating or erratic speedometer needle is a common and long-standing complaint on the Jensen C-V8. The problem is almost always in the mechanical speedometer cable rather than the instrument itself — and in most cases it can be resolved without specialist tools or expensive parts.`,sections:[{type:`heading`,content:`Why It Happens`},{type:`paragraph`,content:`The C-V8 uses a mechanical speedometer driven by a flexible cable from the gearbox. Over time — particularly on cars that see infrequent use — the lubricant inside the cable dries out and the inner cable becomes sticky. As the cable rotates, it binds and slips instead of turning smoothly, causing the needle to flick and bounce erratically. A kinked or sharply bent cable, or a damaged outer sheath, will produce the same symptom.`},{type:`paragraph`,content:`A contributing factor on many C-V8s is the angle at which the cable exits the TorqueFlite automatic gearbox. The natural routing creates a fairly sharp bend at the gearbox end, which puts additional stress on the inner cable. Fitting a right-angle connector at the gearbox end reduces this bend and is a known improvement — though these connectors can themselves wear out internally over time, recreating the problem.`},{type:`heading`,content:`Fix 1 — Clean and Re-lubricate the Cable (Do This First)`},{type:`paragraph`,content:`This is the primary fix and should always be tried before replacing any parts. The key is to use a light oil rather than grease — grease can go sticky with infrequent use, whereas EP 80 or EP 90 rear axle oil stays fluid and coats the cable evenly.`},{type:`steps`,content:[`Disconnect the speedometer cable at both ends — at the speedometer head behind the dashboard and at the gearbox.`,`Pull the inner cable out of the outer sheath completely.`,`Clean the inner cable thoroughly using brake cleaner or white spirit. Wipe dry with a clean cloth.`,`Clean the inside of the outer sheath by running a clean cloth through it or flushing with brake cleaner.`,`Inspect the outer plastic sheath carefully for cracks, splits or missing sections. Tape repairs will not hold — the adhesive dissolves in the oil. A damaged sheath should be replaced.`,`Re-lubricate the inner cable with EP 80 or EP 90 rear axle oil. Work it along the full length.`,`Feed the inner cable back into the outer sheath, ensuring no sharp bends or kinks in the routing.`,`Reconnect at both ends and test.`]},{type:`warning`,content:`Do not use conventional grease inside the cable. Grease becomes sticky on a car used infrequently and will cause the same problem to recur. EP 80/90 rear axle oil is the recommended lubricant.`},{type:`heading`,content:`Fix 2 — Right-Angle Connector at the Gearbox`},{type:`paragraph`,content:`If the cable routing from the TorqueFlite gearbox creates a sharp bend, fitting a right-angle connector at the gearbox end reduces stress on the inner cable and can eliminate the erratic behaviour. These connectors are available from Rimmer Bros and on eBay — however, many eBay listings are for UK cars (Jaguar, Triumph, MG etc.) and may not fit the TorqueFlite gearbox directly. Always confirm fitment before ordering.`},{type:`parts`,content:[{name:`Speedometer cable right-angle gearbox connector`,partNumber:null,notes:`Available from Rimmer Bros — confirm TorqueFlite fitment. Also available on eBay — search for speedometer right-angle connector, but verify dimensions against your gearbox drive before purchasing as many listings are for British Leyland applications.`}]},{type:`tip`,content:`Rimmer Bros stock a suitable connector — see rimmerbros.com (item 120694). Note that right-angle connectors can themselves wear out internally over time. If a previously fitted connector has failed, replace it rather than attempting repair.`},{type:`heading`,content:`Checking the Cable Routing`},{type:`list`,content:[`The cable must have no sharp bends or kinks along its entire length — trace it from gearbox to dashboard and gently re-route any tight sections.`,`Make sure the cable is not trapped or pinched by other components.`,`Where the cable passes through the bulkhead, check the grommet is intact and the cable is not chafing.`,`If the outer sheath has any section of missing or damaged plastic, the sheath must be replaced — tape repairs do not work as the adhesive dissolves in the lubricant.`]},{type:`heading`,content:`When the Speedometer Head Itself is the Problem`},{type:`paragraph`,content:`If cleaning and lubricating the cable makes no improvement, the fault may be in the speedometer instrument itself. The internal mechanism can wear or the magnet can weaken over time. Specialist speedometer repair and calibration services are available and can often restore a worn instrument to correct operation. This is a less common cause but worth considering if cable work has not resolved the issue.`}]},{id:`overheating-diagnosis-and-fixes`,category:`known-issues`,title:`Engine Overheating — Diagnosis & Fixes`,subtitle:`A systematic guide to the most common cooling system problems on the C-V8, drawn from community experience`,models:[`all`],difficulty:`moderate`,readTime:`12 min read`,severity:`critical`,tags:[`overheating`,`cooling`,`radiator`,`thermostat`,`fans`,`water pump`,`known issue`],contributors:[`JOC C-V8 Tech Forum — community discussion 2024`],sourceUrl:`https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=`,lastUpdated:`2024`,intro:`Overheating is one of the most frequently reported problems on the Jensen C-V8, particularly on cars that have been off the road, had cooling system work, or been fitted with modern recored radiators. The good news is that overheating on the C-V8 is almost always caused by one or more of a small set of identifiable problems — none of them requiring engine removal. This guide works through each issue systematically, from the simplest to address to the most involved.`,sections:[{type:`warning`,content:`If the temperature gauge is heading toward or into the red, pull over and let the engine cool before investigating. Continuing to drive an overheating engine risks warping the cylinder heads, especially if alloy heads have been fitted. Never remove the radiator cap while the engine is hot.`},{type:`heading`,content:`Is It Actually Overheating?`},{type:`paragraph`,content:`Before spending money on parts, confirm what the engine temperature actually is — not what the dashboard gauge says. The voltage regulator that feeds the instrument cluster can cause the temperature gauge to read high even when the engine is running at a perfectly normal temperature. This is a cheap and common fix. Use an infra-red thermometer on the top hose and thermostat housing to verify the actual coolant temperature before drawing conclusions.`},{type:`tip`,content:`The voltage regulator is inexpensive and easy to replace. If the temperature gauge reads high but the car does not seem to be genuinely hot — top hose pressure is moderate, no steam, fans cycling normally — replace the voltage regulator before doing anything else. It has cured this exact symptom on multiple Jensen owners' cars.`},{type:`heading`,content:`1. Radiator Cap Pressure — Check This First`},{type:`paragraph`,content:`The original C-V8 radiator cap is a 7 lb unit. This is far too low for reliable operation. A low-pressure cap allows coolant to be expelled from the system at a lower temperature than it should be, reducing the coolant volume in the system and causing genuine overheating on the next run. The correct replacement is a 13 lb cap; many owners use 15 lb caps. Check that the cap seats correctly on the radiator neck — if the radiator has been recored or replaced with an Interceptor unit, the neck dimensions may require the neck to be modified to accept the correct cap.`},{type:`list`,content:[`Original 7 lb cap: replace with 13 lb minimum, 15 lb preferred.`,`If the 15 lb cap does not seat firmly on the radiator neck, have the neck modified by a radiator specialist — a poorly seating cap will not hold pressure.`,`A correctly seating cap should require noticeable force to remove once the system is hot.`]},{type:`heading`,content:`2. Electric Fan Setup — The Most Common Root Cause`},{type:`paragraph`,content:`The original Smiths five-blade electric fans fitted to the C-V8 were designed to work with the original open tube-and-fin radiator core. A modern recored radiator has significantly smaller airways that require a much more forceful airflow to cool effectively. If the radiator has been recored and the original fans retained, this mismatch is very likely a primary cause of overheating at low speed and at idle.`},{type:`list`,content:[`Original fans work adequately with original open-core radiators. They are insufficient for modern close-fin recored units.`,`The fan installation must be shrouded — the fans must be mounted directly against the radiator face with a baffle or cowl so that all airflow is drawn through the radiator core, not around it. Fans hanging in free air in the engine bay recirculate air and are largely ineffective.`,`Recommended upgrade: two 12-inch puller fans mounted directly on the radiator in place of the originals, with close-fitting surrounds.`,`Adding push fans in front of the radiator is generally counterproductive — the fan mounts and motor housings reduce the clear radiator area more than the extra airflow helps.`,`Check the direction of fan rotation — fans blowing the wrong way (pushing air forward rather than pulling it rearward through the radiator) will cause overheating. This is easy to overlook after a fan replacement.`,`If retaining the original fans for originality reasons, a modern electronic fan controller that ramps fan speed progressively rather than switching on/off abruptly will improve their effectiveness.`]},{type:`tip`,content:`Use an IR thermometer to draw a heat map across the radiator face while the engine is hot at idle. If the top of the radiator is significantly hotter than the bottom, or if there are cool patches suggesting blocked tubes, the issue is radiator flow rather than fan performance.`},{type:`heading`,content:`3. Fan Temperature Sensor Position`},{type:`paragraph`,content:`The position of the fan temperature sensor critically affects how the fans behave. If the sensor is placed in the top hose (the hottest part of the cooling circuit), the fans will switch on and never switch off — this is not an indication of overheating, it is simply that the top hose is always above the trigger temperature. The factory Otter switch position (in the lower part of the radiator tank, sensing the temperature of cooled water returning to the engine) is the correct location. Sensors in this position cause the fans to cycle on and off normally as the cooled water temperature rises and falls.`},{type:`heading`,content:`4. Thermostat — Type and Condition`},{type:`paragraph`,content:`The thermostat on the C-V8 does not bypass cooling — it restricts coolant flow so that water stays in the radiator long enough to be properly cooled before returning to the engine. Removing the thermostat entirely does NOT help cooling and will typically make the problem worse, because the coolant passes through the radiator too quickly to give up its heat. A standard aftermarket thermostat designed for smaller engines may also restrict flow excessively on the large-capacity 383 V8.`},{type:`list`,content:[`Always use a high-flow thermostat specifically designed for large V8 engines. Standard thermostats have a smaller opening that is inadequate for the 383's coolant flow rate.`,`Test the thermostat before fitting: immerse it in a pan of water heated to the rated opening temperature and confirm it opens fully and promptly.`,`Inspect the thermostat housing for internal corrosion. On older cars, the housing bore can corrode and partially block the coolant path even when the thermostat is open.`,`The correct operating temperature thermostat for the C-V8 is as fitted from the factory — refer to your manual for the specific temperature. Do not fit a cooler-than-standard thermostat as a cooling fix; address the root cause instead.`]},{type:`heading`,content:`5. Water Pump — Impeller Type`},{type:`paragraph`,content:`Many C-V8s still have or have had fitted a water pump with a small pressed-steel impeller. These are significantly less efficient than pumps fitted with a cast impeller at moving the large volume of coolant a big-block V8 requires. Replacing the pump with a high-flow unit with a cast iron impeller has been found to make a meaningful difference to cooling performance. If the cooling system is being worked on for any reason, a high-flow water pump is a worthwhile upgrade.`},{type:`heading`,content:`6. System Flushing — Scale, Rust and Debris`},{type:`paragraph`,content:`After 60 years, the coolant passages in the block and heads of an unrestored C-V8 are likely to contain a significant accumulation of rust, scale, paint flakes and other debris. This restricts coolant flow and reduces heat transfer to the coolant. On cars that have been run without antifreeze, even recently, the system may already contain visible rust particles. A proper chemical flush is an essential first step before any other cooling system diagnosis.`},{type:`list`,content:[`Use a dedicated cooling system flush chemical designed to dissolve rust and scale — a two-part process over multiple days is more effective than a single-flush product for heavily contaminated systems.`,`Drain and flush until the water runs clear before refilling with fresh coolant and antifreeze.`,`Always use coolant with antifreeze even in warm climates — the corrosion inhibitors in antifreeze are as important as its freeze protection.`,`Running without antifreeze will cause new rust to form quickly, turning the coolant brown within days.`,`After flushing, refill with a 50/50 mix of antifreeze and distilled water.`]},{type:`heading`,content:`7. Expansion Tank — The Missing Component`},{type:`paragraph`,content:`The C-V8 was not fitted with an expansion tank from the factory. When the radiator cap vents, expelled coolant is simply lost rather than being retained and drawn back into the system as it cools. This means that any cap venting event (which may simply be normal thermal expansion rather than genuine overheating) leaves the system with less coolant, causing genuine overheating on the next occasion. Fitting an Interceptor-style expansion tank eliminates this problem — the pressure cap is moved to the expansion tank, and expelled coolant is retained and recycled.`},{type:`heading`,content:`8. Head Gaskets — Alloy Head Consideration`},{type:`paragraph`,content:`Cars that have been fitted with aluminium cylinder heads as part of a rebuild may require specific head gaskets different from those used with the original cast iron heads. Using standard modern head gaskets with alloy heads can affect coolant flow between the head and block. Additionally, alloy heads transfer heat to the coolant more rapidly than iron heads when the engine is shut down — this can cause steam or coolant loss immediately after switching off, even on engines that were running at a normal temperature while moving. If alloy heads have been recently fitted and overheating or post-shutdown coolant loss is the primary symptom, verify the correct head gaskets are installed with the engine builder.`},{type:`heading`,content:`Systematic Diagnosis Sequence`},{type:`steps`,content:[`Replace the voltage regulator — cheap, quick, rules out a gauge fault.`,`Verify actual coolant temperature with an IR thermometer before any other work.`,`Replace the radiator cap with a minimum 13 lb unit. Confirm it seats correctly.`,`Check fan rotation direction — they must pull air rearward through the radiator.`,`Confirm fan shrouding — fans must be mounted against the radiator face, not free in the engine bay.`,`Remove and bench-test the thermostat. Replace with a high-flow type if in any doubt.`,`Inspect the thermostat housing bore for corrosion — clean or replace as required.`,`Perform a full chemical flush of the cooling system until the water runs clear.`,`Refill with 50/50 antifreeze/distilled water. Check the system runs up to temperature with fans cycling normally.`,`If still overheating: consider the water pump impeller type; consider fitting an expansion tank.`,`If alloy heads are fitted and symptoms persist: verify correct head gaskets with the engine builder.`]},{type:`tip`,content:`At idle on a warm day, the electric fans should cycle on and off as they maintain temperature just above the thermostat opening point. If the fans run continuously without the temperature stabilising, the system does not have sufficient cooling capacity for idle conditions — almost always a fan or thermostat issue. If the car runs cool on the road but overheats in traffic, it is an idle-speed cooling capacity problem. If it overheats at all speeds, suspect blockage, thermostat, or water pump.`}]},{id:`electronic-ignition-conversion`,category:`ignition`,title:`Converting from Points to Electronic Ignition`,subtitle:`A practical guide to upgrading the Chrysler distributor on the C-V8 V8`,models:[`all`],difficulty:`moderate`,readTime:`8 min read`,tags:[`ignition`,`points`,`electronic`,`pertronix`,`distributor`,`chrysler`,`tune-up`],contributors:[`Jensen C-V8 Community`],lastUpdated:`2025`,intro:`The Jensen C-V8 uses a Chrysler 383 cubic inch V8 with a conventional points-based ignition system as fitted from the factory. While this system works adequately when properly maintained, points wear over time, require regular adjustment, and can cause inconsistent firing — particularly at higher engine speeds. Converting to a modern electronic ignition eliminates the points entirely, replacing them with a solid-state trigger that requires no routine adjustment and delivers a more consistent spark throughout the rev range. This guide covers what to look for, which systems are available, and how to carry out the conversion correctly.`,sections:[{type:`heading`,content:`Why Convert?`},{type:`paragraph`,content:`Points-based ignition was the standard technology of the era but has several drawbacks on a regularly driven classic car. The contact breaker gap must be checked and reset every 3,000–4,000 miles, and worn points cause misfires, reduced power and hard starting. Electronic ignition modules replace the points with a magnetic or optical trigger that has no moving parts to wear, maintains timing accuracy indefinitely, and typically produces a stronger, hotter spark — which is particularly beneficial on a high-displacement V8 like the 383. The conversion is fully reversible if required, and the distributor otherwise remains original.`},{type:`heading`,content:`Choosing an Electronic Ignition System`},{type:`paragraph`,content:`Several manufacturers produce drop-in electronic ignition modules for the Chrysler distributor family. Pertronix is the most established brand for this application and makes three generations of product — the Ignitor I, II and III. All three use the same Hall-effect trigger principle but differ significantly in features and reliability:`},{type:`list`,content:[`Ignitor I — the original, now dated design. Will work but lacks modern protection features. Not recommended for a new conversion.`,`Ignitor II — the recommended choice for a street-driven classic. Modern circuit design, significantly better reliability, and critically includes ignition-on protection (the module will not burn out if the ignition is left on without the engine running — a common failure mode of the Ignitor I).`,`Ignitor III — adds rev limiting and timing curve features more suited to competition or highly modified engines. Unnecessary for a road-going C-V8 and introduces additional complexity without benefit.`]},{type:`tip`,content:`The Pertronix Ignitor II is the sweet spot for the C-V8. Modern, reliable technology without unnecessary complexity. Ensure you order the version for the Chrysler 8-cylinder electronic distributor.`},{type:`warning`,content:`Each Ignitor generation requires a matched Pertronix coil. Do not mix an Ignitor II module with a generic coil or an Ignitor I coil — the resistance specifications differ and the system will not function correctly. Always pair the Ignitor II with the Flame Thrower II coil (0.6 ohm resistance).`},{type:`heading`,content:`Confirming Your Distributor`},{type:`paragraph`,content:`This conversion assumes the car retains its original Chrysler electronic distributor. Most C-V8s still have the factory unit fitted, but it is worth confirming before ordering parts. The original Chrysler distributor can be identified by a small metal tag riveted to the side of the housing, stamped with a part number that can be verified online. If the distributor has previously been replaced with an aftermarket unit, the conversion procedure and applicable Pertronix part numbers may differ.`},{type:`heading`,content:`Parts Required`},{type:`parts`,content:[{name:`Pertronix Ignitor II Module`,partNumber:`9CH-181`,notes:`For Chrysler 8-cylinder electronic distributor. This is the critical part — verify the part number matches your distributor before ordering.`},{name:`Pertronix Flame Thrower II Coil`,partNumber:`45011 (oil-filled) or 45111 (epoxy-filled)`,notes:`Must be 0.6 ohm resistance. Oil-filled runs cooler under sustained use; epoxy-filled handles vibration better. Either is suitable for road use.`},{name:`New vacuum advance unit (optional)`,partNumber:`If required`,notes:`Worth inspecting while the distributor is out. A cracked or collapsed diaphragm will cause timing issues regardless of ignition type.`},{name:`Distributor cap and rotor (optional)`,partNumber:`Standard Chrysler 383`,notes:`Good practice to renew these while the distributor is accessible, particularly if the existing cap shows tracking marks or corrosion.`}]},{type:`costTable`,content:[{item:`Pertronix Ignitor II module`,usd:`$90–120`,gbp:`£70–95`,eur:`€80–110`},{item:`Flame Thrower II coil`,usd:`$80–120`,gbp:`£65–95`,eur:`€75–110`},{item:`Vacuum advance unit (if needed)`,usd:`$25–50`,gbp:`£20–40`,eur:`€23–45`},{item:`Cap and rotor (if renewing)`,usd:`$20–35`,gbp:`£16–28`,eur:`€18–32`},{item:`Total (module + coil)`,usd:`$170–240`,gbp:`£135–190`,eur:`€155–220`}]},{type:`tip`,content:`Pertronix products are widely available from automotive performance retailers globally. Summit Racing (summitRacing.com) carries the full range and ships internationally, typically within a week. Ensure any retailer packs the coil carefully — it is fragile in transit.`},{type:`heading`,content:`Installation: On the Car or on the Bench?`},{type:`paragraph`,content:`The Ignitor II module can be fitted with the distributor in situ, which is the simpler approach if the distributor is otherwise in good condition. However, removing the distributor for a bench installation is worthwhile if: the vacuum advance unit needs replacing, the cap and shaft bearings need inspection, or you want to clean and inspect the entire assembly. There are some excellent video resources on YouTube covering this exact Chrysler distributor which are worth watching before starting work.`},{type:`warning`,content:`If you remove the distributor: mark its rotational position on the engine block before removal, photograph the shaft alignment carefully, and do not turn the engine over while the distributor is out. If you do this, the distributor can be refitted in the same position and timing will require only minor tweaking. Failing to mark the position means resetting the ignition timing from scratch, which is significantly more work.`},{type:`heading`,content:`Installation Steps`},{type:`steps`,content:[`Disconnect the battery negative terminal before starting any ignition work.`,`If removing the distributor: mark its rotational position on the engine block, photograph the rotor alignment, and note all wire positions on the cap.`,`Remove the distributor cap, rotor, and points assembly. The points and condenser are no longer required once the Ignitor II is fitted.`,`Fit the Ignitor II module into the distributor body according to the Pertronix instructions. The module clips onto the breaker plate in place of the points.`,`Route the two wires from the Ignitor II module out through the distributor body. Red wire to positive (+), black wire to negative (−) on the coil.`,`Replace the original coil with the Pertronix Flame Thrower II. Observe correct polarity — the coil terminals are marked + and −.`,`Refit the rotor and distributor cap. If you removed the distributor, refit it aligned with your original marks.`,`Reconnect the battery. Start the engine and allow it to idle.`,`Check and adjust ignition timing using a strobe timing light. The base timing specification for the Chrysler 383 is 10° BTDC at 500 rpm — refer to your manual for your specific model.`,`Road test and recheck timing once the engine is fully warmed up.`]},{type:`heading`,content:`After Installation`},{type:`paragraph`,content:`Once installed, the Ignitor II requires no routine maintenance. There is no points gap to check, no condenser to replace, and no timing drift from mechanical wear. The system should be checked at the same intervals as any other ignition component — cap, rotor, and plug leads — but the module itself should last the life of the vehicle under normal use. If the engine is left with the ignition on but not running, the Ignitor II's built-in protection circuit prevents the module from burning out — a significant improvement over earlier electronic ignition designs.`},{type:`tip`,content:`Other electronic ignition brands are available for the Chrysler distributor, including Crane Cams (now discontinued but units still available second-hand) and various generic "points replacement" modules sold online. These may be suitable for the application but have not been specifically verified for the C-V8. The Pertronix Ignitor II represents a well-documented, proven choice for this engine. Further options may be added to this guide as they are evaluated by C-V8 owners.`},{type:`heading`,content:`Further Resources`},{type:`list`,content:[`Pertronix website (pertronix.com) — full technical specifications, installation guides and FAQ for all Ignitor products.`,`YouTube — search "Pertronix Ignitor II Chrysler 383 installation" for video guides covering this exact distributor.`,`JOC C-V8 Tech Forum — the Jensen Owners Club technical forum has detailed threads on ignition conversion from owners who have carried out this modification.`,`Ignition timing specifications for your model are in the manual — Mk III p. 29–30, base manual p. 5–6.`]}]}],je=[{id:`suspension`,label:`Suspension`,emoji:`🔩`},{id:`brakes`,label:`Brakes`,emoji:`🛑`},{id:`engine`,label:`Engine & Transmission`,emoji:`🔧`},{id:`cooling`,label:`Cooling System`,emoji:`🌡️`},{id:`electrical`,label:`Electrical`,emoji:`⚡`},{id:`lighting`,label:`Lighting`,emoji:`💡`},{id:`bodywork`,label:`Bodywork`,emoji:`🚗`},{id:`seals`,label:`Seals & Rubber`,emoji:`🔄`},{id:`interior`,label:`Interior & Trim`,emoji:`🪑`},{id:`steering`,label:`Steering & Driveline`,emoji:`⚙️`},{id:`suppliers`,label:`Suppliers`,emoji:`📦`}],Me=[{id:`s-01`,category:`suspension`,models:[`all`],part:`Front shock absorbers`,alternative:`Austin Westminster`,partNumber:null,supplier:null,notes:null},{id:`s-02`,category:`suspension`,models:[`all`],part:`Front damper rubber buffers`,alternative:`Austin Westminster`,partNumber:`1G4276`,supplier:`Moss, Guy Broad Spares`,notes:null},{id:`s-03`,category:`suspension`,models:[`all`],part:`Front suspension bottom spring pans`,alternative:`Austin Healey 3000 Mk III`,partNumber:null,supplier:null,notes:null},{id:`s-04`,category:`suspension`,models:[`all`],part:`Rear suspension rubber buffers`,alternative:`Austin Healey 3000 Mk III front suspension bump stops`,partNumber:null,supplier:null,notes:null},{id:`s-05`,category:`suspension`,models:[`all`],part:`Front damper suspension stops (buffers)`,alternative:`Austin Healey 3000 / Austin A60`,partNumber:null,supplier:`Moss`,notes:null},{id:`s-06`,category:`suspension`,models:[`all`],part:`Lower wishbone bushes`,alternative:`Superflex polyurethane bushes`,partNumber:`SPF 1430/19`,supplier:`Superflex`,notes:null},{id:`s-07`,category:`suspension`,models:[`all`],part:`Anti-roll bar bushes`,alternative:`Superflex`,partNumber:null,supplier:`Superflex`,notes:null},{id:`s-08`,category:`suspension`,models:[`all`],part:`Panhard rod rubber bushes`,alternative:`Jaguar Mk2 / XK120 / XK140 / XK150 anti-roll bar upper bushes`,partNumber:null,supplier:`Guy Broad Spares, Superflex`,notes:null},{id:`s-09`,category:`suspension`,models:[`all`],part:`All suspension bushes (polyurethane / stainless sleeves)`,alternative:`Superflex complete bush kit`,partNumber:null,supplier:`Superflex`,notes:null},{id:`s-10`,category:`suspension`,models:[`mk1`,`mk2`],part:`Armstrong Selectaride shock absorbers`,alternative:`Aston Martin DB5, Facel Vega (some British imports). Also optional on Vanden Plas 4ltr R.`,partNumber:null,supplier:`Aston Martin specialists (exchange units)`,notes:`Exchange units available from some Aston specialists.`},{id:`s-11`,category:`suspension`,models:[`all`],part:`Bonnet rubber buffers`,alternative:`Austin Westminster suspension — Moss part no 1G4276`,partNumber:`1G4276`,supplier:`Moss`,notes:null},{id:`b-01`,category:`brakes`,models:[`all`],part:`Front brake callipers / cylinders / pistons / pads`,alternative:`Late Jaguar XK150, Jaguar Mk2 (V8), or Cooper Craft alternative`,partNumber:`Quinton Hazel BP105 (for Cooper Craft pads)`,supplier:`Cooper Craft`,notes:`Pads for Cooper Craft callipers: Quinton Hazel BP105.`},{id:`b-02`,category:`brakes`,models:[`all`],part:`Brake pads (cross-reference vehicles)`,alternative:`Jaguar MkIX / E-Type 59–71, MkX 61 · Bristol 59–65 · Alvis 62–68 · Aston Martin DB4 63–65 · MGA Twin Cam · BMW 3200CS / 2600L / 507 / 3200L/S · Daimler 59–66 · Datsun (various 65–71) · Facel Vega 59–64 · Mercedes 600 65- · Rover 2000 63–66 · Toyota (various 66–71)`,partNumber:null,supplier:null,notes:`Wide cross-reference — check dimensions against your specific caliper.`},{id:`b-03`,category:`brakes`,models:[`all`],part:`Rear brake callipers / cylinders / pistons / pads`,alternative:`As front — see above`,partNumber:`649332063 (cylinders/pistons)`,supplier:`Guy Broad Spares`,notes:null},{id:`b-04`,category:`brakes`,models:[`all`],part:`Brake servo`,alternative:`Lockheed`,partNumber:`LR17551`,supplier:`Guy Broad Spares`,notes:null},{id:`b-05`,category:`brakes`,models:[`all`],part:`3-way brake union`,alternative:`MG / Jaguar / etc. (commonly used type)`,partNumber:null,supplier:`Moss`,notes:null},{id:`b-06a`,category:`brakes`,models:[`all`],part:`Brake fluid reservoir`,alternative:`Alfa Romeo 105 Giulia (1965–69), including 1969 USA dual-circuit brake cars`,partNumber:`BC335 (supplier ref) · OEM: 607.29342 / 60729342 / 607-29342`,supplier:`Euroline International (eurolineinternational.com)`,notes:`New plastic reservoir with metal fitting on the base for the brake line. Direct application: Alfa Romeo 105 Giulia 1965–69. Approx. USD $79.50.`},{id:`b-06`,category:`brakes`,models:[`all`],part:`Brake fluid reservoir (alternative source)`,alternative:`XK150 / E-Type (1950s–60s Jaguars)`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`b-07`,category:`brakes`,models:[`all`],part:`Copper brake pipe set`,alternative:`Automec complete copper set`,partNumber:null,supplier:`Automec Engine`,notes:null},{id:`e-01`,category:`engine`,models:[`all`],part:`Air filter`,alternative:`Coopers`,partNumber:`AG280`,supplier:null,notes:null},{id:`e-02`,category:`engine`,models:[`all`],part:`Oil filter`,alternative:`FRAM CH 8PL · AC PF331 · Purolator PF331`,partNumber:`CH 8PL / PF331`,supplier:null,notes:null},{id:`e-03`,category:`engine`,models:[`all`],part:`Fan belt`,alternative:`Gates`,partNumber:`6227mc (size: AVX10 × 1175La)`,supplier:null,notes:null},{id:`e-04`,category:`engine`,models:[`all`],part:`Spark plugs`,alternative:`Champion J11Y or NGK BP5S`,partNumber:`J11Y / BP5S`,supplier:null,notes:`Earlier sources quote Champion J10Y. Check current supplier recommendations.`},{id:`e-05`,category:`engine`,models:[`all`],part:`All gaskets, seals and engine parts`,alternative:`Chrysler-specialist supplier`,partNumber:null,supplier:`Eadys American Car Spares`,notes:null},{id:`e-06`,category:`engine`,models:[`all`],part:`All gearbox parts`,alternative:`Chrysler-specialist supplier`,partNumber:null,supplier:`Eadys American Car Spares`,notes:null},{id:`e-07`,category:`engine`,models:[`all`],part:`Engine workshop manual`,alternative:`Haynes Techbook (Chrysler)`,partNumber:`103310`,supplier:null,notes:null},{id:`e-08`,category:`engine`,models:[`all`],part:`Transmission fluid`,alternative:`Dexron 2 or 3`,partNumber:null,supplier:null,notes:null},{id:`e-09`,category:`engine`,models:[`all`],part:`Carburettor tuning parts (needles / jets etc.)`,alternative:null,partNumber:null,supplier:`Roadcraft UK Ltd`,notes:null},{id:`c-01`,category:`cooling`,models:[`all`],part:`Alternative electric cooling fans`,alternative:`VW Golf`,partNumber:`431959455C`,supplier:null,notes:`VW Golf fans are well regarded as a direct upgrade alternative.`},{id:`c-02`,category:`cooling`,models:[`all`],part:`Radiator fan thermoswitch`,alternative:`VW Golf GTI / Mk2 Golf`,partNumber:`Intermotor 50030`,supplier:null,notes:null},{id:`c-03`,category:`cooling`,models:[`all`],part:`Top hose`,alternative:`Subaru Impreza 2.5 litre turbo 2007 top hose — very close match`,partNumber:null,supplier:null,notes:`Contributed by Paul Baker (Australia).`},{id:`c-04`,category:`cooling`,models:[`all`],part:`Bottom hose`,alternative:`Ford Fairlane 5.8 litre 1979–84 with 2" cut off both ends`,partNumber:null,supplier:null,notes:`Contributed by Paul Baker (Australia).`},{id:`c-05`,category:`cooling`,models:[`all`],part:`Heater hoses`,alternative:`Standard 12mm and 15mm hose by the metre`,partNumber:null,supplier:null,notes:`Easy to source. Contributed by Paul Baker (Australia).`},{id:`c-06`,category:`cooling`,models:[`all`],part:`Heater control valve`,alternative:`Some older Volvos`,partNumber:null,supplier:null,notes:`Fitment to be verified.`},{id:`el-01`,category:`electrical`,models:[`all`],part:`Alternator (uprated)`,alternative:`Uprated unit to approx. 60 amps (original was 37.5 amps)`,partNumber:null,supplier:`Eadys American Car Spares`,notes:null},{id:`el-02`,category:`electrical`,models:[`all`],part:`Voltage regulator`,alternative:`Available from American car spares specialists`,partNumber:null,supplier:`Eadys American Car Spares`,notes:`A faulty voltage regulator can cause the temperature gauge to read falsely high — worth replacing as a first step in overheating diagnosis.`},{id:`el-03`,category:`electrical`,models:[`all`],part:`Wiring harness`,alternative:`Custom loom`,partNumber:null,supplier:`Auto Sparks, Nottingham`,notes:null},{id:`el-04`,category:`electrical`,models:[`mk2`,`mk3`],part:`Petrol filler flap solenoid`,alternative:`E-Type and MGB 1962–67 overdrive solenoid (available new from Lucas)`,partNumber:null,supplier:`Moss`,notes:`The plunger will need slight modification to fit.`},{id:`el-05`,category:`electrical`,models:[`all`],part:`Steering column horn contacts`,alternative:`XK150`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`el-06`,category:`electrical`,models:[`all`],part:`Door light switches`,alternative:`Jaguar XK120 boot light switch`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`el-07`,category:`electrical`,models:[`all`],part:`Horns`,alternative:`MGA, Morris Minor etc. — reproductions available new`,partNumber:null,supplier:`Moss`,notes:null},{id:`el-08`,category:`electrical`,models:[`all`],part:`Wiper motor`,alternative:`Some Jaguars`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`li-01`,category:`lighting`,models:[`all`],part:`Headlights (not spotlights / lamp rims)`,alternative:`Morris Minor, early Mini, Austin A30/A35 and many other 1950s–60s British cars`,partNumber:null,supplier:`Lucas, Moss`,notes:`Available new from Lucas or Moss.`},{id:`li-02`,category:`lighting`,models:[`all`],part:`Brake lights / indicator lights / front side lights`,alternative:`Lucas L691/2 (still available new) or Austin Healey 2500/3000, Hillman Imp`,partNumber:`Lucas L691/2`,supplier:`Lucas`,notes:null},{id:`li-03`,category:`lighting`,models:[`all`],part:`Number plate / reversing light`,alternative:`Lucas 469 (available new) or Rover 90/100/110 and Jaguar Mk5`,partNumber:`Lucas 469`,supplier:`Guy Broad Spares`,notes:null},{id:`li-04`,category:`lighting`,models:[`all`],part:`Rear reflectors`,alternative:`Sunbeam Rapier / Singer Vogue`,partNumber:null,supplier:null,notes:null},{id:`li-05`,category:`lighting`,models:[`all`],part:`Indicator dash warning lights`,alternative:`Early Austin Healey, Rover 90/100/110`,partNumber:null,supplier:null,notes:null},{id:`bw-01`,category:`bodywork`,models:[`mk1`,`mk2`],part:`Front windscreen (Mk I and Mk II — same glass)`,alternative:null,partNumber:`Pilkington 9066ACL (previously 0121CL)`,supplier:null,notes:`The front windscreen glass is the same for Mk I and Mk II.`},{id:`bw-02`,category:`bodywork`,models:[`all`],part:`Door catches / strikers / door stops`,alternative:`Austin Healey 2500/3000`,partNumber:null,supplier:null,notes:`Available new.`},{id:`bw-03`,category:`bodywork`,models:[`all`],part:`Door hinges`,alternative:`Austin Healey 2500/3000 — top door hinge fits C-V8 top and bottom`,partNumber:null,supplier:null,notes:null},{id:`bw-04`,category:`bodywork`,models:[`all`],part:`Door captive plates for hinges`,alternative:`Austin Healey 2500/3000`,partNumber:null,supplier:null,notes:null},{id:`bw-05`,category:`bodywork`,models:[`all`],part:`Door adjustment shims`,alternative:`Austin Healey 2500/3000`,partNumber:null,supplier:null,notes:null},{id:`bw-06`,category:`bodywork`,models:[`all`],part:`Door handles (exterior)`,alternative:`Rover P4`,partNumber:null,supplier:null,notes:null},{id:`bw-07`,category:`bodywork`,models:[`all`],part:`Boot hinges`,alternative:`Riley 1.5 RME / 2.5 RME`,partNumber:null,supplier:`Asquith Bros (s/h)`,notes:null},{id:`bw-08`,category:`bodywork`,models:[`all`],part:`Boot support stay`,alternative:`Jaguar Mk V (looks the same but check length) or XK150 boot stay`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`bw-09`,category:`bodywork`,models:[`all`],part:`Rear bumper white rubber trim`,alternative:`Triumph Herald bumper trim`,partNumber:null,supplier:null,notes:null},{id:`bw-10`,category:`bodywork`,models:[`all`],part:`Chrome bumper bolts`,alternative:null,partNumber:null,supplier:`Woolies`,notes:null},{id:`bw-11`,category:`bodywork`,models:[`all`],part:`Bonnet stay`,alternative:`Duple Coach (luggage door)`,partNumber:null,supplier:null,notes:null},{id:`bw-12`,category:`bodywork`,models:[`all`],part:`Chrome trim screws / clips`,alternative:null,partNumber:null,supplier:`Woolies`,notes:null},{id:`bw-13`,category:`bodywork`,models:[`all`],part:`Bonnet lock (engine cover lock)`,alternative:`Lotus Europa (old type)`,partNumber:`SJ046B0009`,supplier:`SJS Sportcars`,notes:null},{id:`bw-14`,category:`bodywork`,models:[`mk3`],part:`Rear bonnet individual letter badges — "J E N S E N"`,alternative:`Sunbeam Tiger individual chrome letter set`,partNumber:null,supplier:`Sunbeam Car Parts — sunbeamcarparts.co.uk/brightwork-badges/s-u-n-b-e-a-m-badge-letter-set`,notes:`The Mk III C-V8 has individual chrome letters spelling JENSEN across the rear bonnet/boot lid. The Sunbeam Tiger letter set provides the letters E, N and S — which cover most of JENSEN — but does not include a J. The J must be sourced separately. Order: 1× J (alternate source), 1× E, 1× N, 1× S, 1× E, 1× N from the Sunbeam set.`},{id:`sr-01`,category:`seals`,models:[`all`],part:`Petrol cap / seal / spring`,alternative:`XK120 / XK140 / XK150`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`sr-02`,category:`seals`,models:[`all`],part:`Door rubber seals`,alternative:null,partNumber:`Woolies part no. 264`,supplier:`Woolies`,notes:null},{id:`sr-03`,category:`seals`,models:[`all`],part:`Boot rubber seal`,alternative:null,partNumber:`Woolies part no. 268`,supplier:`Woolies`,notes:null},{id:`sr-04`,category:`seals`,models:[`all`],part:`Rear window seals`,alternative:null,partNumber:`Woolies part no. 264`,supplier:`Woolies`,notes:null},{id:`sr-05`,category:`seals`,models:[`all`],part:`Front inner wing to bonnet D-seal`,alternative:null,partNumber:`Vintage Supplies SHRb`,supplier:`Vintage Supplies Ltd`,notes:null},{id:`sr-06`,category:`seals`,models:[`all`],part:`Door bottom to kick step seal`,alternative:null,partNumber:`Vintage Supplies SHRb`,supplier:`Vintage Supplies Ltd`,notes:null},{id:`sr-07`,category:`seals`,models:[`all`],part:`Windscreen rubber`,alternative:null,partNumber:`Woolies R747`,supplier:`Woolies`,notes:null},{id:`sr-08`,category:`seals`,models:[`all`],part:`Windscreen chrome insert`,alternative:null,partNumber:`Woolies part no. 358`,supplier:`Woolies`,notes:null},{id:`sr-09`,category:`seals`,models:[`all`],part:`Dotted trim rubber edge finisher`,alternative:null,partNumber:`Woolies R181`,supplier:`Woolies`,notes:null},{id:`sr-10`,category:`seals`,models:[`all`],part:`Silent channel felt (door windows)`,alternative:`3mm × 25mm (3m per window)`,partNumber:`Woolies part no. 87`,supplier:`Woolies`,notes:null},{id:`sr-11`,category:`seals`,models:[`all`],part:`Quarter light seal`,alternative:null,partNumber:`Woolies SRS91`,supplier:`Woolies`,notes:`Alternative that works OK.`},{id:`sr-12`,category:`seals`,models:[`all`],part:`Exhaust silencer box mounts (45mm)`,alternative:`Lord mounts`,partNumber:`Fly Drive item 364 series 200 (aircraft spares)`,supplier:null,notes:null},{id:`it-01`,category:`interior`,models:[`all`],part:`Interior door handles / window winders`,alternative:`Wolseley 1500 and Riley 1.5`,partNumber:null,supplier:null,notes:null},{id:`it-02`,category:`interior`,models:[`all`],part:`Rear view mirror`,alternative:`Jaguar Mk2 and E-Type (may be available new from Lucas)`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`it-03`,category:`interior`,models:[`all`],part:`Rear speaker covers`,alternative:`Jaguar Mk2 (slightly bigger)`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`it-04`,category:`interior`,models:[`all`],part:`Seat hinges ("Widney lie-back")`,alternative:`Rover P4`,partNumber:null,supplier:null,notes:null},{id:`it-05`,category:`interior`,models:[`all`],part:`Seat recliner mechanism`,alternative:`Ford Corsair 2000`,partNumber:null,supplier:null,notes:null},{id:`it-06`,category:`interior`,models:[`all`],part:`Interior light lens (light unit is same but has no on/off switch)`,alternative:`Rover P4`,partNumber:null,supplier:null,notes:null},{id:`it-07`,category:`interior`,models:[`all`],part:`Seat runners`,alternative:`XK150`,partNumber:null,supplier:`Guy Broad Spares`,notes:null},{id:`it-08`,category:`interior`,models:[`all`],part:`Alternative radio speakers`,alternative:`4" × 6" Pioneer TS-4621 (60W) — fitted to VWs and Fiats, fit well`,partNumber:`TS-4621`,supplier:null,notes:null},{id:`it-09`,category:`interior`,models:[`all`],part:`Dotted trim aluminium sheet`,alternative:null,partNumber:null,supplier:`Rejen`,notes:null},{id:`sd-01`,category:`steering`,models:[`all`],part:`Track rod ends`,alternative:`Bedford CF van`,partNumber:`Quinton Hazel QR1379`,supplier:null,notes:null},{id:`sd-02`,category:`steering`,models:[`all`],part:`Steering column universal joints`,alternative:`MGA / MGB (Hardy Spicer)`,partNumber:`HS120`,supplier:`Moss`,notes:null},{id:`sd-03`,category:`steering`,models:[`all`],part:`Steering column flex coupling`,alternative:`Austin Metro (works but not as strong)`,partNumber:null,supplier:null,notes:null},{id:`sd-04`,category:`steering`,models:[`all`],part:`Front wheel bearings`,alternative:`Rover 2000 Unipart GHB105 (inner) / Timken 07087X + 07210X`,partNumber:`GHB105 / 07087X + 07210X`,supplier:`Unipart / Timken`,notes:null},{id:`sd-05`,category:`steering`,models:[`all`],part:`Differential pinion seal`,alternative:`Jaguar or Jensen dealers — two sizes`,partNumber:`Small: 2HA-019 · Larger: 8HA-019-5`,supplier:`Jaguar specialists / Jensen dealers`,notes:null},{id:`sd-06`,category:`steering`,models:[`all`],part:`Rear axle (Salisbury axle)`,alternative:`Jaguar XK150 (note: C-V8 half shafts are heavy duty — not standard Jaguar)`,partNumber:null,supplier:null,notes:`Half shafts on Jensens are heavy duty and non-standard. Some brackets also differ.`},{id:`sd-07`,category:`steering`,models:[`all`],part:`Propshaft rubber boot`,alternative:`Citroën AX driveshaft boot — cut to fit (works well)`,partNumber:null,supplier:null,notes:null},{id:`sd-08`,category:`steering`,models:[`all`],part:`Wheels`,alternative:`Rover P5, Vauxhall PA Cresta/Velox, Austin Westminster — 15"`,partNumber:null,supplier:null,notes:null},{id:`sd-09`,category:`steering`,models:[`all`],part:`Tyres — recommended modern size`,alternative:`205/70-15 (increase pressure by 10%)`,partNumber:null,supplier:null,notes:null},{id:`sup-01`,category:`suppliers`,models:[`all`],part:`Eadys American Car Spares`,alternative:null,partNumber:null,supplier:`Dave Eadys Parts Centre`,notes:`Higham Road, Burton Latimer, Northants NN15 5PU. Contact: Dave Eady. Tel: 01536 420 201. Specialises in American/Chrysler parts.`},{id:`sup-02`,category:`suppliers`,models:[`all`],part:`Guy Broad Spares`,alternative:null,partNumber:null,supplier:`Guy Broad Spares`,notes:`Jensen specialist supplier — referenced for many hard-to-find items including Jaguar cross-reference parts.`},{id:`sup-03`,category:`suppliers`,models:[`all`],part:`Woolies (seals and rubber)`,alternative:null,partNumber:null,supplier:`Woolies`,notes:`Classic car seals and rubber trim specialist. Referenced for door seals, windscreen rubber, window channels and trim.`},{id:`sup-04`,category:`suppliers`,models:[`all`],part:`Superflex (polyurethane bushes)`,alternative:null,partNumber:null,supplier:`Superflex`,notes:`Polyurethane and stainless-sleeved bush kits for the full suspension.`},{id:`sup-05`,category:`suppliers`,models:[`all`],part:`Moss Motors`,alternative:null,partNumber:null,supplier:`Moss`,notes:`British Leyland and MG/Austin Healey specialist — many C-V8 cross-reference parts.`}],Ne=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=o(((e,t)=>{t.exports=Ne()}))(),Pe=[{title:`Dashboard & Controls`,pages:[4],tags:`dashboard instruments controls switches gauges warning lights`},{title:`Specifications & Capacities`,pages:[5,6],tags:`specifications capacity timing plug gap compression oil dimensions`},{title:`Motor, Starting & Running`,pages:[7,8,9],tags:`engine motor starting running gearbox transmission overdrive towing`},{title:`Lubrication & Maintenance`,pages:[10,11,25,26,27,28],tags:`lubrication maintenance grease oil service miles`},{title:`Electrical, Battery & Fuses`,pages:[12,13],tags:`electrical lucas autolite battery positive earth fuse fuses bulbs lamps wiper`},{title:`Brakes & Servo`,pages:[13],tags:`brakes servo dunlop brake fluid handbrake vacuum`},{title:`Fuel System & Carburetter`,pages:[15,16],tags:`fuel carburetter carter idle fast idle choke throttle linkage`},{title:`Tyres, Wheels & Alignment`,pages:[17,18,19],tags:`tyres tires wheels alignment bearings toe-in castor camber`},{title:`Cooling, Heating & Rear Axle`,pages:[20,21],tags:`cooling fan radiator heater ventilation antifreeze coolant rear axle powr-lok drive belt`},{title:`Interior & Owner Information`,pages:[2,3,22,23,31,32],tags:`owner warranty seats upholstery vehicle particulars chassis engine key`}],Fe=[{title:`Cover`,pages:[1],category:`overview`,tags:[]},{title:`Introduction`,pages:[2,3],category:`overview`,tags:[`owner`,`handbook`,`warranty`]},{title:`Dashboard & Controls`,pages:[4],category:`overview`,tags:[`dashboard`,`instruments`,`controls`,`gauges`,`switches`,`warning lights`]},{title:`Specifications & Dimensions`,pages:[5,6],category:`specs`,tags:[`specifications`,`dimensions`,`capacity`,`timing`,`compression`,`spark plug`,`ignition`]},{title:`Starting, Gearbox & Towing`,pages:[7,8,9],category:`mechanical`,tags:[`starting`,`engine`,`gearbox`,`overdrive`,`towing`,`transmission`,`running-in`]},{title:`Lubrication & Maintenance`,pages:[10,11],category:`lubrication`,tags:[`lubrication`,`oil`,`grease`,`maintenance`,`filter`,`dipstick`]},{title:`Electrical Equipment`,pages:[12,13],category:`electrical`,tags:[`electrical`,`battery`,`fuses`,`bulbs`,`wiring`,`lucas`,`autolite`,`wiper`]},{title:`Brakes & Servo`,pages:[14],category:`brakes`,tags:[`brakes`,`servo`,`brake fluid`,`handbrake`,`vacuum`,`dunlop`]},{title:`Fuel System & Carburettor`,pages:[15,16,17],category:`fuel`,tags:[`fuel`,`carburettor`,`choke`,`throttle`,`idle`,`accelerator`,`carter`]},{title:`Tyres, Wheels & Alignment`,pages:[18,19],category:`wheels`,tags:[`tyres`,`wheels`,`alignment`,`toe-in`,`camber`,`bearings`,`tyre pressure`]},{title:`Cooling, Heating & Rear Axle`,pages:[20,21],category:`cooling`,tags:[`cooling`,`radiator`,`antifreeze`,`heater`,`rear axle`,`fan belt`,`powr-lok`]},{title:`Interior & Owner Information`,pages:[22,23,24],category:`interior`,tags:[`seats`,`upholstery`,`interior`,`owner`,`chassis number`]},{title:`Service Lubrication`,pages:[25,26,27,28],category:`service`,tags:[`service`,`lubrication`,`grease points`,`capacities`,`oil change`]},{title:`Index`,pages:[29],category:`overview`,tags:[`index`]},{title:`Vehicle Particulars`,pages:[31,32],category:`overview`,tags:[`chassis number`,`engine number`,`registration`,`delivery`]}],Ie=[{title:`Handbook Cover`,pages:[1],category:`overview`,tags:[]},{title:`Vehicle Particulars`,pages:[3],category:`overview`,tags:[`chassis number`,`key number`,`registration`,`delivery`]},{title:`Foreword`,pages:[5],category:`overview`,tags:[`handbook`,`owner`,`jensen motors`]},{title:`General Dimensions & Data`,pages:[7,8],category:`specs`,tags:[`dimensions`,`specifications`,`weight`,`wheelbase`,`turning circle`,`gear ratios`]},{title:`Instruments & Controls Diagram`,pages:[9],category:`overview`,tags:[`dashboard`,`instruments`,`controls`,`diagram`,`layout`]},{title:`Controls & Instruments`,pages:[11,12,13],category:`overview`,tags:[`controls`,`instruments`,`gauges`,`switches`,`headlights`,`horn`,`heater fan`,`selectaride`,`speedometer`,`ammeter`,`oil pressure`]},{title:`Starting Up & Running`,pages:[15,16,17,18],category:`mechanical`,tags:[`starting`,`running-in`,`gearbox`,`overdrive`,`towing`,`push starting`,`choke`,`transmission`]},{title:`Engine Lubrication System`,pages:[19],category:`lubrication`,tags:[`engine oil`,`oil filter`,`sump`,`oil change`,`dipstick`,`oil pressure`,`4000 miles`]},{title:`Maintenance Schedule`,pages:[20,21,22],category:`service`,tags:[`maintenance`,`service intervals`,`king pin`,`spark plugs`,`lubrication diagram`,`grease points`]},{title:`Fuel System & Carburettor`,pages:[23,24,25,26,27],category:`fuel`,tags:[`fuel`,`carburettor`,`choke`,`throttle`,`idle`,`accelerator`,`air cleaner`,`crankcase vent`]},{title:`Ignition`,pages:[29,30],category:`electrical`,tags:[`ignition`,`contact breaker`,`timing`,`distributor`,`coil`,`ballast resistor`]},{title:`Cooling System`,pages:[31,32],category:`cooling`,tags:[`cooling`,`radiator`,`coolant`,`fan`,`thermostat`,`antifreeze`,`electric fans`]},{title:`Transmission & Propeller Shaft`,pages:[33,34],category:`mechanical`,tags:[`transmission`,`gearbox`,`propeller shaft`,`universal joint`,`transmission fluid`]},{title:`Steering & Suspension`,pages:[35,36,37],category:`mechanical`,tags:[`steering`,`suspension`,`rack and pinion`,`wishbone`,`front hubs`,`wheel alignment`,`dampers`]},{title:`Brake Servo Unit`,pages:[38],category:`brakes`,tags:[`brakes`,`servo`,`brake fluid`,`disc brakes`,`handbrake`]},{title:`Wheels & Tyres`,pages:[39,40],category:`wheels`,tags:[`wheels`,`tyres`,`tyre pressure`,`wheel changing`,`jack`,`spare wheel`]},{title:`Bodywork & Seats`,pages:[41,42],category:`interior`,tags:[`bodywork`,`doors`,`seats`,`upholstery`,`adjustment`]},{title:`Spare Wheel`,pages:[43],category:`wheels`,tags:[`spare wheel`,`boot`,`jack`]},{title:`Cabin Heating & Ventilation`,pages:[45,46],category:`interior`,tags:[`heating`,`ventilation`,`heater`,`fresh air`,`fan`,`demist`]},{title:`Electrical System`,pages:[47,48],category:`electrical`,tags:[`electrical`,`battery`,`fuses`,`wiring`,`earth`,`alternator`,`interior light`]},{title:`Lights`,pages:[49,50],category:`electrical`,tags:[`lights`,`headlamps`,`sidelights`,`bulbs`,`reversing light`,`number plate light`,`flasher`]},{title:`Tool Kit & Equipment`,pages:[51,52,53],category:`overview`,tags:[`tools`,`toolkit`,`equipment`,`accessories`]},{title:`Service Lubrication`,pages:[55,56,57,58],category:`service`,tags:[`service`,`lubrication`,`oil change`,`grease`,`intervals`,`capacities`,`transmission fluid`]},{title:`Index`,pages:[59,60],category:`overview`,tags:[`index`]}];function Le(e){let t=new Map;for(let n of e)n.pages.forEach((e,r)=>{t.set(e,{sectionTitle:n.title,isContinuation:r>0,category:n.category||`general`,tags:n.tags||[]})});return t}var Re=Le(Fe),ze=Le(Ie);function Be(e,t){return(t===`mk3`?ze:Re).get(e)||null}function Ve(e,t,n){let r=Be(e,t);return r?r.isContinuation?`${r.sectionTitle} (cont.)`:r.sectionTitle:n}var He={all:`All Models`,mk1:`Mk I`,mk2:`Mk II`,mk3:`Mk III`},Ue=`/manuals/jensen_cv8_owners_manual.pdf`,We=`/manuals/jensen-cv8-mk3-instruction-manual.pdf`;function Ge(e){let t=String(e.title||``).toLowerCase(),n=String(e.text??e.ocrText??``).trim();return e.hidden||e.type===`blank`||t===`blank page`?`blank`:e.type?e.type:n?`text`:`diagram`}function Ke(e,t,n,r){return e.map(e=>{let i=e.text??e.ocrText??``,a=Ge({...e,text:i}),o=a===`blank`,s=a===`diagram`||e.isImageOnly===!0;return{...e,type:a,hidden:o||e.hidden===!0,isImageOnly:s,model:e.model||t,modelLabel:e.modelLabel||n,sourcePdf:e.sourcePdf||r,sourcePage:e.sourcePage||e.page,text:i,summary:e.summary??e.plainEnglish??(s?`Image-only reference page. Use the original scan for this page.`:``),title:e.title||`Page ${e.page}`}})}function qe(e){return e.filter(e=>!e.hidden)}function Je(e,t,n=1){let r=qe(e);if(!r.length)return null;let i=r.find(e=>e.page===t);if(i)return i;let a=[...r].sort((e,t)=>e.page-t.page);return n>=0?a.find(e=>e.page>=t)||a[a.length-1]:[...a].reverse().find(e=>e.page<=t)||a[0]}var Ye=Ke(ye,`base`,`Jensen C-V8`,Ue),Xe=Ke(be,`mk3`,`Jensen C-V8 Mk III`,We),Ze=`OCR text extracted from this scanned manual page`,Qe=[`foreword`,`introduction`,`handbook of instructions`,`vehicle particulars`,`warranty`,`index`,`contents`,`cover`,`title page`,`jensen`],$e=/^(check|inspect|change|replace|drain|fill|remove|install|adjust|clean|tighten|loosen|ensure|apply|add|use|do not|never|always|confirm|photograph|identify|select|engage|depress|set|verify|refit|recheck|run|start|allow|push|pull|turn|disconnect|connect|torque|grease|lubricate|bleed|test|reset|secure|re-?tighten|re-?fit|re-?check)/i;function et(e){return!Array.isArray(e)||e.length<2?!1:e.filter(e=>e.length>35&&$e.test(e)).length>=2}function tt(e){if(!e||e.length<40)return[];let t=e.replace(/\n+/g,` `).split(/(?<=[.!?])\s+/).map(e=>e.trim()).filter(e=>e.length>25&&e.length<300),n=new Set,r=[];for(let e of t){let t=e.slice(0,40).toLowerCase();n.has(t)||(/every\s+[\d,]+\s*(miles?|km|months?|years?|hours?)/i.test(e)||/\d+[\s-]*(p\.?s\.?i\.?|psi|rpm|r\.p\.m|°|degrees?|mm|ins?\.)\b/i.test(e)||/should\s+be\s+(changed|checked|drained|replaced|inspected|cleaned|adjusted|refilled|topped|removed|fitted)/i.test(e)||/must\s+(be|not)\s+/i.test(e)||/\bdo not\b|\bnever\b/i.test(e)||$e.test(e))&&(n.add(t),r.push(e))}return r.slice(0,8)}function nt(e){if(e.isImageOnly||e.type===`diagram`||!e.text?.trim())return`diagram`;let t=(e.title||``).toLowerCase();return Qe.some(e=>t.includes(e))?`informational`:et(e.checklist)||tt(e.text).length>0?`repair`:`reference`}function rt(e){return e.toLowerCase().replace(/(\d),(\d)/g,`$1$2`).replace(/\s+/g,` `).trim()}function it(e,t){return rt(t).includes(rt(e))}function at(e,t){if(!e)return[];let n=t.replace(/[^\d]/g,``);if(!n||n.length<3)return[];let r=e.split(`
`).map(e=>e.trim()).filter(Boolean),i=!1,a=[];for(let e of r){let t=e.match(/([\d,]{4,})\s*(miles?|km)/i);if(t){if(t[1].replace(/,/g,``)===n){i=!0;continue}else if(i)break;continue}if(i&&e.length>3){let t=e.replace(/^[A-Z]\d+\.?\s*[—–\-]+\s*/,``).trim();t.length>4&&a.push(t)}}return a}function ot(e){if(!e)return[];let t=[...e.matchAll(/([\d,]+)\s*miles/gi)],n=new Set;for(let e of t){let t=parseInt(e[1].replace(/,/g,``),10);t>=500&&t<=15e4&&n.add(t)}return[...n].sort((e,t)=>e-t).map(e=>`${e.toLocaleString()} miles`)}function st(e,t,n){let r=(Be(e,t)?.tags||[]).filter(e=>!/\d.*miles/i.test(e)),i=ot(n);return[...r,...i]}var ct=/\b[A-J]\d+\s*[—–\-]/;function lt(e){return ct.test(e||``)}function ut(e,t){if(!t.trim())return e;let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return e.split(RegExp(`(${n})`,`ig`)).map((e,n)=>e.toLowerCase()===t.toLowerCase()?(0,A.jsx)(`mark`,{children:e},n):e)}function dt(){let[e,t]=(0,S.useState)(``),[n,r]=(0,S.useState)(4),[i,a]=(0,S.useState)(100),[o,s]=(0,S.useState)(()=>localStorage.getItem(`jensen-model`)||`all`),[c,l]=(0,S.useState)(!1),[u,d]=(0,S.useState)(`cards`),[f,p]=(0,S.useState)(!1),[m,h]=(0,S.useState)({}),[g,_]=(0,S.useState)(`all`),[v,y]=(0,S.useState)(null),[b,x]=(0,S.useState)(!1),[ee,C]=(0,S.useState)(!1),[te,ne]=(0,S.useState)(null),[w,ve]=(0,S.useState)(100),[ye,be]=(0,S.useState)(``),[xe,we]=(0,S.useState)(`all`),[Te,Ne]=(0,S.useState)(100),[Le,Re]=(0,S.useState)(`home`),[ze,Ge]=(0,S.useState)(null),[Ke,Qe]=(0,S.useState)(`all`),[rt,ot]=(0,S.useState)(`articles`),[ct,dt]=(0,S.useState)(`all`),[ft,pt]=(0,S.useState)(``),[j,mt]=(0,S.useState)(`all`),[ht,gt]=(0,S.useState)(null),[_t,vt]=(0,S.useState)(``),[yt,bt]=(0,S.useState)(()=>{try{return JSON.parse(localStorage.getItem(`jensen-ocr-edits`)||`{}`)}catch{return{}}});(0,S.useEffect)(()=>{fetch(`/ocr-corrections.json`).then(e=>e.ok?e.json():{}).then(e=>{!e||!Object.keys(e).length||bt(t=>({...e,...t}))}).catch(()=>{})},[]),(0,S.useEffect)(()=>{localStorage.setItem(`jensen-model`,o),ne(null)},[o]),(0,S.useEffect)(()=>{localStorage.setItem(`jensen-ocr-edits`,JSON.stringify(yt))},[yt]);let xt=He[o]||He.all,St=(0,S.useMemo)(()=>o===`mk3`?Xe:Ye,[o]),Ct=(0,S.useMemo)(()=>qe(St),[St]),wt=(0,S.useMemo)(()=>{let e=new Set(Ct.map(e=>e.page));return Pe.map(t=>({...t,pages:t.pages.filter(t=>e.has(t))})).filter(e=>e.pages.length)},[Ct]);(0,S.useEffect)(()=>{let e=Je(St,n,1);e&&e.page!==n&&r(e.page)},[St,n]);let M=Ct.find(e=>e.page===n)||Ct[0]||St[0],N=nt(M),Tt=`${o}:${M?.page||1}`,Et=yt[Tt]??M.text??``,Dt=Object.prototype.hasOwnProperty.call(yt,Tt);Object.keys(yt).filter(e=>e.startsWith(`${o}:`)).length,Ct.filter(e=>e.checklist&&e.checklist.length).length;let Ot=(0,S.useMemo)(()=>Ct.map(e=>{let t=`${o}:${e.page}`;return{...e,text:yt[t]??e.text??``}}),[yt,Ct,o]),kt=(0,S.useMemo)(()=>{let t=e.trim().toLowerCase();if(!t)return[];let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return Ot.map(e=>{let t=(`${e.title} ${e.text} ${e.summary}`.toLowerCase().match(new RegExp(n,`g`))||[]).length;return{...e,score:t}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score)},[e,Ot]),At=(e=n)=>{let t=St.find(t=>t.page===e)||M,r=t?.sourcePdf||(o===`mk3`?We:Ue),i=t?.sourcePage||t?.page||e;window.open(`${r}#page=${i}`,`_blank`)},jt=(e,t=1)=>{let n=Je(St,e,t);if(n){r(n.page);let e=nt(n);e===`diagram`?d(`scan`):e===`repair`?d(`cards`):(e===`informational`||u===`cards`)&&d(`page`)}l(!1),p(!1),y(null)},Mt=()=>jt(n-1,-1),Nt=()=>jt(n+1,1),Pt=e=>{bt({...yt,[Tt]:e})},Ft=()=>{let e={...yt};delete e[Tt],bt(e)},It=async()=>{await navigator.clipboard.writeText(Et),p(!0),setTimeout(()=>p(!1),1600)},Lt=()=>{fetch(`/ocr-corrections.json`).then(e=>e.ok?e.json():{}).catch(()=>({})).then(e=>{let t={...e,...yt},n=new Blob([JSON.stringify(t,null,2)],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`jensen-ocr-edits.json`,i.click(),URL.revokeObjectURL(r)})},Rt=()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`application/json,.json`,e.onchange=e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target.result);typeof t==`object`&&t&&bt(e=>({...e,...t}))}catch{alert(`Could not read the file — make sure it is a valid jensen-ocr-edits.json export.`)}},n.readAsText(t)},e.click()},zt=(0,A.jsxs)(`aside`,{className:c?`sidebar open`:`sidebar`,children:[(0,A.jsxs)(`div`,{className:`mobileClose`,children:[(0,A.jsx)(`strong`,{children:`Manual Library`}),(0,A.jsx)(`button`,{onClick:()=>l(!1),children:(0,A.jsx)(me,{size:20})})]}),(0,A.jsx)(`button`,{className:`sidebarHomeBtn`,onClick:()=>{Re(`home`),l(!1)},children:`← Home`}),(0,A.jsxs)(`div`,{className:`searchBox`,children:[(0,A.jsxs)(`label`,{children:[(0,A.jsx)(fe,{size:16}),` Search manual`]}),(0,A.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Try: ballast resistor, brake fluid, tyre pressure...`})]}),e&&(0,A.jsxs)(`div`,{className:`resultsBox`,children:[(0,A.jsxs)(`strong`,{children:[kt.length,` result`,kt.length===1?``:`s`]}),kt.slice(0,8).map(e=>(0,A.jsxs)(`button`,{onClick:()=>jt(e.page),children:[`p`,e.page,`: `,e.title,(0,A.jsxs)(`small`,{children:[e.score,` hit`,e.score===1?``:`s`]})]},e.page))]}),(0,A.jsxs)(`button`,{className:`wiringNavBtn${b?` active`:``}`,onClick:()=>{x(!0),C(!1),l(!1)},children:[(0,A.jsx)(he,{size:16}),` Wiring Diagrams`,(0,A.jsxs)(`small`,{children:[o===`mk3`?`Mk III`:`Mk I & II`,` · colourised`]})]}),(0,A.jsxs)(`button`,{className:`wiringNavBtn selectarideNavBtn${ee?` active`:``}`,onClick:()=>{C(!0),x(!1),l(!1)},children:[(0,A.jsx)(pe,{size:16}),` Selectaride`,(0,A.jsxs)(`small`,{children:[o===`mk3`?`Mk III`:`Mk I & II`,` · shock absorbers`]})]}),(0,A.jsx)(`h3`,{children:`Manual Sections`}),(0,A.jsx)(`nav`,{className:`topics`,children:wt.map(e=>(0,A.jsxs)(`button`,{onClick:()=>jt(e.pages[0]),children:[(0,A.jsx)(T,{size:16}),(0,A.jsx)(`span`,{children:e.title}),(0,A.jsxs)(`small`,{children:[`p`,e.pages.join(`, `)]})]},e.title))}),(0,A.jsx)(`h3`,{children:`All Pages`}),(0,A.jsx)(`nav`,{children:Ct.map(e=>{let t=Ve(e.page,o,e.title),r=Be(e.page,o);return(0,A.jsxs)(`button`,{className:[e.page===n?`selected`:``,r?.isContinuation?`continuation`:``].join(` `).trim(),onClick:()=>jt(e.page),children:[(0,A.jsx)(le,{size:16}),(0,A.jsxs)(`span`,{children:[`Page `,e.page]}),(0,A.jsxs)(`small`,{children:[t,yt[`${o}:${e.page}`]?` · edited`:``]})]},e.page)})})]});return(0,A.jsxs)(`div`,{className:`app`,children:[(0,A.jsxs)(`header`,{className:`topBar`,children:[Le===`manual`&&(0,A.jsx)(`button`,{className:`hamburger`,onClick:()=>l(!0),children:(0,A.jsx)(ue,{})}),(0,A.jsxs)(`div`,{className:`brand`,children:[(0,A.jsx)(`img`,{src:`/jensen-logo.png`,alt:`Jensen logo`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{children:`Jensen C-V8`}),(0,A.jsx)(`h1`,{children:`Workshop Companion`}),(0,A.jsx)(`small`,{children:xt})]})]}),(0,A.jsxs)(`nav`,{className:`appNav`,children:[(0,A.jsx)(`button`,{className:Le===`home`?`active`:``,onClick:()=>{Re(`home`),gt(null),Ge(null)},children:`Home`}),(0,A.jsx)(`button`,{className:Le===`workshop`?`active`:``,onClick:()=>{Re(`workshop`),gt(null)},children:`Workshop`}),(0,A.jsx)(`button`,{className:Le===`restoration`?`active`:``,onClick:()=>{Re(`restoration`),Ge(null)},children:`Restoration`}),(0,A.jsx)(`button`,{className:Le===`manual`?`active`:``,onClick:()=>Re(`manual`),children:`Manuals`})]}),(0,A.jsxs)(`div`,{className:`headerRight`,children:[Le===`manual`&&(0,A.jsx)(`button`,{className:`openPdf`,onClick:()=>At(),children:`Open PDF`}),(0,A.jsxs)(`a`,{href:`https://jensencv8-org.webflow.io`,target:`_blank`,rel:`noopener noreferrer`,className:`parentSiteLink`,title:`jensencv8.org`,children:[(0,A.jsx)(ce,{size:14}),(0,A.jsx)(`span`,{children:`jensencv8.org`})]})]})]}),(0,A.jsxs)(`div`,{className:Le===`manual`?`layout`:`layoutFull`,children:[Le===`home`&&(0,A.jsxs)(`main`,{className:`homePage`,children:[(0,A.jsxs)(`div`,{className:`homeHero`,children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:`Jensen C-V8`}),(0,A.jsx)(`h2`,{children:`Workshop Companion`}),(0,A.jsx)(`p`,{children:`Repair guides, maintenance schedules, wiring diagrams and original manuals — everything you need in the driveway.`}),(0,A.jsx)(`p`,{className:`modelSelectLabel`,children:`Select your model of Jensen C-V8 to get started`}),(0,A.jsxs)(`select`,{value:o,onChange:e=>s(e.target.value),className:`modelSelect homeModelSelect`,children:[(0,A.jsx)(`option`,{value:`all`,children:`All Jensen C-V8 Models`}),(0,A.jsx)(`option`,{value:`mk1`,children:`Jensen C-V8 Mk I`}),(0,A.jsx)(`option`,{value:`mk2`,children:`Jensen C-V8 Mk II`}),(0,A.jsx)(`option`,{value:`mk3`,children:`Jensen C-V8 Mk III`})]})]}),(0,A.jsxs)(`div`,{className:`workInProgressBanner`,children:[(0,A.jsx)(`span`,{className:`wipIcon`,children:`🔧`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`This site is a work in progress.`}),(0,A.jsx)(`p`,{children:`Repair guides, parts information and known issues are being added continuously. Some manual text extracted from the original scans may contain errors — if you spot one, the Edit OCR function in the Manuals section lets you correct it directly. When in doubt, always verify against the original scanned page.`})]})]}),(0,A.jsxs)(`div`,{className:`homeSections`,children:[(0,A.jsxs)(`button`,{className:`homeSection primary`,onClick:()=>Re(`workshop`),children:[(0,A.jsx)(`span`,{className:`homeSectionIcon`,children:`🔧`}),(0,A.jsx)(`h3`,{children:`Repair & Maintenance`}),(0,A.jsx)(`p`,{children:`Task-oriented repair cards, troubleshooting guides and maintenance schedules.`}),(0,A.jsx)(`span`,{className:`homeSectionArrow`,children:`→`})]}),(0,A.jsxs)(`button`,{className:`homeSection`,onClick:()=>Re(`manual`),children:[(0,A.jsx)(`span`,{className:`homeSectionIcon`,children:`📖`}),(0,A.jsx)(`h3`,{children:`Manuals & Diagrams`}),(0,A.jsx)(`p`,{children:`Easily search the original manuals, wiring diagrams and scanned pages.`}),(0,A.jsx)(`span`,{className:`homeSectionArrow`,children:`→`})]}),(0,A.jsxs)(`a`,{href:`https://airtable.com/appqtFw9HrvLwGDRV/shrc1eGBCmNryrv0M`,target:`_blank`,rel:`noopener noreferrer`,className:`homeSection registrySection`,children:[(0,A.jsx)(`div`,{className:`registryBadge`,children:`500 built · 1962–1966`}),(0,A.jsx)(`img`,{src:`/jensen-badge.png`,alt:`Jensen Motors Ltd.`,className:`homeSectionIcon registryBadgeIcon`}),(0,A.jsx)(`h3`,{children:`Registry`}),(0,A.jsx)(`p`,{className:`registryTagline`,children:`Tracking Every Jensen C-V8`}),(0,A.jsx)(`p`,{children:`A global community effort to locate every surviving car — restored, mid-project or barn find. Every detail helps tell the story.`}),(0,A.jsx)(`p`,{className:`registryCta`,children:`Update your car · Explore survivors ↗`})]}),(0,A.jsxs)(`button`,{className:`homeSection`,onClick:()=>{Re(`restoration`),Ge(null)},children:[(0,A.jsx)(`span`,{className:`homeSectionIcon`,children:`🔩`}),(0,A.jsx)(`h3`,{children:`Restoration Knowledge`}),(0,A.jsx)(`p`,{children:`Upgrade guides, parts advice, paint codes and restoration know-how from the C-V8 community.`}),(0,A.jsx)(`span`,{className:`homeSectionArrow`,children:`→`})]}),(0,A.jsxs)(`div`,{className:`homeSection communitySection`,children:[(0,A.jsxs)(`div`,{className:`communitySectionHeader`,children:[(0,A.jsx)(`span`,{className:`homeSectionIcon`,children:`💬`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{children:`Community`}),(0,A.jsx)(`p`,{children:`Forums, social groups and owner networks.`})]})]}),(0,A.jsxs)(`div`,{className:`communityLinks`,children:[(0,A.jsxs)(`a`,{href:`https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=`,target:`_blank`,rel:`noopener noreferrer`,className:`communityLink`,children:[(0,A.jsx)(`div`,{className:`communityLinkIconWrap`,style:{background:`#1a1a2e`},children:(0,A.jsx)(`img`,{src:`/joc-logo.png`,alt:`JOC`,className:`communityLogo`,style:{width:28,height:28}})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`JOC C-V8 Tech Forum`}),(0,A.jsx)(`span`,{children:`Jensen Owners Club technical forum`})]}),(0,A.jsx)(ce,{size:14,className:`communityArrow`})]}),(0,A.jsxs)(`a`,{href:`https://www.facebook.com/share/g/1BbPfYdm2v/`,target:`_blank`,rel:`noopener noreferrer`,className:`communityLink`,children:[(0,A.jsx)(`div`,{className:`communityLinkIconWrap`,style:{background:`#1877F2`},children:(0,A.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`white`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Jensen C-V8 Facebook Group`}),(0,A.jsx)(`span`,{children:`Owners group — news, photos and discussion`})]}),(0,A.jsx)(ce,{size:14,className:`communityArrow`})]}),(0,A.jsxs)(`a`,{href:`https://www.facebook.com/share/g/18rxSoRBHz/`,target:`_blank`,rel:`noopener noreferrer`,className:`communityLink`,children:[(0,A.jsx)(`div`,{className:`communityLinkIconWrap`,style:{background:`#1877F2`},children:(0,A.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`white`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`C-V8 Parts for Sale`}),(0,A.jsx)(`span`,{children:`Facebook group — parts buying and selling`})]}),(0,A.jsx)(ce,{size:14,className:`communityArrow`})]}),(0,A.jsxs)(`a`,{href:`https://chat.whatsapp.com/DoyaYf5DEUuFgXuHS8qVZ3?s=cl&p=i&ilr=4`,target:`_blank`,rel:`noopener noreferrer`,className:`communityLink`,children:[(0,A.jsx)(`div`,{className:`communityLinkIconWrap`,style:{background:`#25D366`},children:(0,A.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`white`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`C-V8 Owners WhatsApp Group`}),(0,A.jsx)(`span`,{children:`Direct chat with fellow owners`})]}),(0,A.jsx)(ce,{size:14,className:`communityArrow`})]})]})]})]})]}),Le===`workshop`&&!ht&&(()=>{let e=Oe.filter(e=>{let t=o===`all`||e.models.includes(`all`)||e.models.includes(o),n=j===`all`||e.category===j,r=_t.trim().toLowerCase(),i=!r||e.title.toLowerCase().includes(r)||e.subtitle.toLowerCase().includes(r)||e.overview.toLowerCase().includes(r)||e.symptoms.some(e=>e.toLowerCase().includes(r));return t&&n&&i}),t={easy:`diffEasy`,moderate:`diffModerate`,advanced:`diffAdvanced`};return(0,A.jsxs)(`main`,{className:`workshopView`,children:[(0,A.jsxs)(`div`,{className:`workshopHeader`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:`Workshop Companion`}),(0,A.jsx)(`h2`,{children:`Repair & Maintenance`})]}),(0,A.jsxs)(`div`,{className:`workshopHeaderControls`,children:[(0,A.jsxs)(`div`,{className:`workshopSearch`,children:[(0,A.jsx)(fe,{size:16}),(0,A.jsx)(`input`,{value:_t,onChange:e=>vt(e.target.value),placeholder:`Search: overheating, brake servo, idle...`}),_t&&(0,A.jsx)(`button`,{onClick:()=>vt(``),children:`Clear`})]}),(0,A.jsxs)(`select`,{value:o,onChange:e=>s(e.target.value),className:`modelSelect`,children:[(0,A.jsx)(`option`,{value:`all`,children:`All Models`}),(0,A.jsx)(`option`,{value:`mk1`,children:`Mk I`}),(0,A.jsx)(`option`,{value:`mk2`,children:`Mk II`}),(0,A.jsx)(`option`,{value:`mk3`,children:`Mk III`})]})]})]}),(0,A.jsxs)(`div`,{className:`workshopCategoryFilters`,children:[(0,A.jsx)(`button`,{className:j===`all`?`active`:``,onClick:()=>mt(`all`),children:`All`}),De.map(e=>(0,A.jsxs)(`button`,{className:j===e.id?`active`:``,onClick:()=>mt(e.id),children:[e.emoji,` `,e.label]},e.id))]}),e.length===0?(0,A.jsxs)(`div`,{className:`workshopEmpty`,children:[(0,A.jsx)(k,{size:32}),(0,A.jsx)(`p`,{children:`No repair cards match your search. Try different keywords or clear the filter.`})]}):(0,A.jsx)(`div`,{className:`workshopCardGrid`,children:e.map(e=>{let n=De.find(t=>t.id===e.category);return(0,A.jsxs)(`button`,{className:`workshopCard`,onClick:()=>gt(e.id),children:[(0,A.jsxs)(`div`,{className:`workshopCardTop`,children:[(0,A.jsxs)(`span`,{className:`workshopCardCat`,children:[n?.emoji,` `,n?.label]}),(0,A.jsx)(`span`,{className:`workshopCardDiff ${t[e.difficulty]}`,children:e.difficulty})]}),(0,A.jsx)(`h3`,{children:e.title}),(0,A.jsx)(`p`,{className:`workshopCardSubtitle`,children:e.subtitle}),(0,A.jsxs)(`p`,{className:`workshopCardOverview`,children:[e.overview.slice(0,120),`…`]}),e.symptoms.length>0&&(0,A.jsxs)(`div`,{className:`workshopCardSymptoms`,children:[(0,A.jsx)(O,{size:12}),(0,A.jsx)(`span`,{children:e.symptoms.slice(0,2).join(` · `)})]}),(0,A.jsx)(`span`,{className:`workshopCardArrow`,children:`View card →`})]},e.id)})})]})})(),Le===`workshop`&&ht&&(()=>{let e=Oe.find(e=>e.id===ht);if(!e)return null;let t=De.find(t=>t.id===e.category);return(0,A.jsxs)(`main`,{className:`repairCardDetail`,children:[(0,A.jsx)(`button`,{className:`backBtn workshopBackBtn`,onClick:()=>gt(null),children:`← Back to Workshop`}),(0,A.jsx)(`div`,{className:`cardDetailHeader`,children:(0,A.jsxs)(`div`,{className:`cardDetailHeaderLeft`,children:[(0,A.jsxs)(`div`,{className:`cardDetailBadges`,children:[(0,A.jsxs)(`span`,{className:`workshopCardCat`,children:[t?.emoji,` `,t?.label]}),(0,A.jsx)(`span`,{className:`workshopCardDiff ${{easy:`diffEasy`,moderate:`diffModerate`,advanced:`diffAdvanced`}[e.difficulty]}`,children:e.difficulty}),e.models[0]!==`all`&&(0,A.jsx)(`span`,{className:`workshopCardModel`,children:e.models.map(e=>e.toUpperCase()).join(` · `)})]}),(0,A.jsx)(`h2`,{children:e.title}),(0,A.jsx)(`p`,{className:`cardDetailSubtitle`,children:e.subtitle})]})}),(0,A.jsx)(`div`,{className:`cardDetailSection`,children:(0,A.jsx)(`p`,{className:`cardDetailOverview`,children:e.overview})}),e.symptoms.length>0&&(0,A.jsxs)(`div`,{className:`cardDetailSection`,children:[(0,A.jsxs)(`h3`,{className:`cardDetailSectionTitle`,children:[(0,A.jsx)(O,{size:18}),` Symptoms`]}),(0,A.jsx)(`ul`,{className:`cardDetailList symptomList`,children:e.symptoms.map((e,t)=>(0,A.jsx)(`li`,{children:e},t))})]}),(0,A.jsxs)(`div`,{className:`toolsPartsGrid`,children:[(0,A.jsxs)(`div`,{className:`cardDetailSection`,children:[(0,A.jsxs)(`h3`,{className:`cardDetailSectionTitle`,children:[(0,A.jsx)(k,{size:18}),` Tools Required`]}),(0,A.jsx)(`ul`,{className:`cardDetailList`,children:e.tools.length>0?e.tools.map((e,t)=>(0,A.jsx)(`li`,{children:e},t)):(0,A.jsx)(`li`,{children:`Standard hand tools`})})]}),(0,A.jsxs)(`div`,{className:`cardDetailSection`,children:[(0,A.jsxs)(`h3`,{className:`cardDetailSectionTitle`,children:[(0,A.jsx)(pe,{size:18}),` Parts & Materials`]}),(0,A.jsx)(`ul`,{className:`cardDetailList`,children:e.parts.length>0?e.parts.map((e,t)=>(0,A.jsx)(`li`,{children:e},t)):(0,A.jsx)(`li`,{children:`No replacement parts required`})})]})]}),(0,A.jsxs)(`div`,{className:`cardDetailSection`,children:[(0,A.jsxs)(`h3`,{className:`cardDetailSectionTitle`,children:[(0,A.jsx)(ae,{size:18}),` Procedure`]}),(0,A.jsx)(`ol`,{className:`procedureList`,children:e.procedure.map((e,t)=>(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`span`,{className:`procedureStep`,children:t+1}),(0,A.jsx)(`p`,{children:e})]},t))})]}),e.checklist.length>0&&(()=>{let t=e.checklist.filter((t,n)=>m[`card:${e.id}:${n}`]).length;return(0,A.jsxs)(`div`,{className:`cardDetailSection`,children:[(0,A.jsxs)(`div`,{className:`checklistHeader`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`h3`,{className:`cardDetailSectionTitle`,style:{margin:0},children:[(0,A.jsx)(ae,{size:18}),` Checklist`]}),(0,A.jsxs)(`p`,{className:`helperText`,children:[t,` of `,e.checklist.length,` checked`]})]}),t>0&&(0,A.jsx)(`button`,{className:`clearBtn`,onClick:()=>{let t={...m};e.checklist.forEach((n,r)=>delete t[`card:${e.id}:${r}`]),h(t)},children:`Clear`})]}),(0,A.jsx)(`ul`,{className:`interactiveChecklist`,children:e.checklist.map((t,n)=>{let r=`card:${e.id}:${n}`,i=!!m[r];return(0,A.jsxs)(`li`,{className:i?`checked`:``,onClick:()=>h(e=>({...e,[r]:!e[r]})),children:[(0,A.jsx)(`span`,{className:`checkbox`,children:i?`✓`:``}),(0,A.jsx)(`p`,{children:t})]},n)})})]})})(),e.manualRefs.length>0&&(0,A.jsxs)(`div`,{className:`cardDetailSection`,children:[(0,A.jsxs)(`h3`,{className:`cardDetailSectionTitle`,children:[(0,A.jsx)(T,{size:18}),` Manual References`]}),(0,A.jsx)(`div`,{className:`manualRefButtons`,children:e.manualRefs.map((e,t)=>(0,A.jsxs)(`button`,{className:`manualRefBtn${(e.model===`base`?o!==`mk3`:o===`mk3`||o===`all`)?``:` muted`}`,onClick:()=>{e.model!==o&&e.model!==`base`?s(`mk3`):e.model===`base`&&o===`mk3`&&s(`all`),jt(e.pages[0]),Re(`manual`)},children:[(0,A.jsx)(T,{size:14}),(0,A.jsx)(`span`,{children:e.label}),(0,A.jsxs)(`small`,{children:[`p. `,e.pages.join(`, `),` · `,e.model===`mk3`?`Mk III manual`:`Base manual`]})]},t))})]})]})})(),Le===`restoration`&&(()=>{let e=ze?Ae.find(e=>e.id===ze):null,t=Ke===`all`?Ae:Ae.filter(e=>e.category===Ke),n=(e,t)=>{switch(e.type){case`heading`:return(0,A.jsx)(`h4`,{className:`articleH4`,children:e.content},t);case`paragraph`:return(0,A.jsx)(`p`,{className:`articleParagraph`,children:e.content},t);case`warning`:return(0,A.jsxs)(`div`,{className:`articleCallout warning`,children:[(0,A.jsx)(O,{size:18}),(0,A.jsx)(`p`,{children:e.content})]},t);case`tip`:return(0,A.jsxs)(`div`,{className:`articleCallout tip`,children:[(0,A.jsx)(k,{size:18}),(0,A.jsx)(`p`,{children:e.content})]},t);case`list`:return(0,A.jsx)(`ul`,{className:`articleList`,children:e.content.map((e,t)=>(0,A.jsx)(`li`,{children:e},t))},t);case`steps`:return(0,A.jsx)(`ol`,{className:`articleSteps`,children:e.content.map((e,t)=>(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`span`,{children:t+1}),(0,A.jsx)(`p`,{children:e})]},t))},t);case`parts`:return(0,A.jsx)(`div`,{className:`articlePartsTable`,children:e.content.map((e,t)=>(0,A.jsxs)(`div`,{className:`articlePart`,children:[(0,A.jsxs)(`div`,{className:`articlePartTop`,children:[(0,A.jsx)(`strong`,{children:e.name}),e.partNumber&&(0,A.jsx)(`code`,{className:`partNumber`,children:e.partNumber})]}),e.notes&&(0,A.jsx)(`p`,{children:e.notes})]},t))},t);case`costTable`:return(0,A.jsxs)(`div`,{className:`articleCostTable`,children:[(0,A.jsxs)(`div`,{className:`costTableHeader`,children:[(0,A.jsx)(`span`,{children:`Item`}),(0,A.jsx)(`span`,{children:`USD`}),(0,A.jsx)(`span`,{children:`GBP`}),(0,A.jsx)(`span`,{children:`EUR`})]}),e.content.map((e,t)=>(0,A.jsxs)(`div`,{className:`costTableRow${e.item.toLowerCase().includes(`total`)?` total`:``}`,children:[(0,A.jsx)(`span`,{children:e.item}),(0,A.jsx)(`span`,{children:e.usd}),(0,A.jsx)(`span`,{children:e.gbp}),(0,A.jsx)(`span`,{children:e.eur})]},t))]},t);default:return null}};return(0,A.jsx)(`main`,{className:`restorationMain`,children:e?(0,A.jsxs)(`div`,{className:`articleDetail`,children:[(0,A.jsxs)(`div`,{className:`articleDetailHeader`,children:[(0,A.jsx)(`button`,{className:`backBtn`,onClick:()=>Ge(null),children:`← Back to Restoration`}),(0,A.jsxs)(`div`,{className:`articleMeta`,children:[(0,A.jsxs)(`span`,{className:`articleCategory`,children:[ke.find(t=>t.id===e.category)?.emoji,` `,ke.find(t=>t.id===e.category)?.label]}),e.severity===`critical`&&(0,A.jsx)(`span`,{className:`severityBadge`,children:`⚠️ Safety Critical`}),(0,A.jsx)(`span`,{className:`articleDifficulty`,children:e.difficulty}),(0,A.jsxs)(`span`,{className:`articleReadTime`,children:[`📖 `,e.readTime]})]}),(0,A.jsx)(`h2`,{children:e.title}),(0,A.jsx)(`p`,{className:`articleSubtitle`,children:e.subtitle})]}),(0,A.jsxs)(`div`,{className:`card articleBody`,children:[(0,A.jsx)(`p`,{className:`articleIntro`,children:e.intro}),e.sections.map((e,t)=>n(e,t)),e.contributors?.length>0&&(0,A.jsxs)(`div`,{className:`articleCredits`,children:[(0,A.jsx)(`strong`,{children:`Contributors:`}),` `,e.contributors.join(`, `),e.sourceUrl&&(0,A.jsxs)(A.Fragment,{children:[` · `,(0,A.jsxs)(`a`,{href:e.sourceUrl,target:`_blank`,rel:`noopener noreferrer`,className:`articleSourceLink`,children:[`View original discussion `,(0,A.jsx)(ce,{size:12})]})]})]})]}),e.sections.some(e=>e.type===`list`&&e.content.some(e=>e.includes(`manual`)))&&(0,A.jsxs)(`div`,{className:`card`,children:[(0,A.jsx)(`h3`,{className:`sectionTitle`,children:`Manual References`}),(0,A.jsxs)(`div`,{className:`manualRefButtons`,children:[(0,A.jsxs)(`button`,{className:`manualRefBtn`,onClick:()=>{Re(`manual`),jt(29)},children:[(0,A.jsx)(T,{size:14}),` Mk III — Ignition p. 29–30`]}),(0,A.jsxs)(`button`,{className:`manualRefBtn`,onClick:()=>{Re(`manual`),jt(5)},children:[(0,A.jsx)(T,{size:14}),` Base Manual — Specs p. 5–6`]})]})]})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:`restorationHeader`,children:[(0,A.jsx)(`h2`,{children:`Restoration Knowledge`}),(0,A.jsx)(`p`,{children:`Community guides, upgrade how-tos and restoration know-how for the Jensen C-V8.`})]}),(0,A.jsxs)(`div`,{className:`restorationTabs`,children:[(0,A.jsxs)(`button`,{className:rt===`articles`?`active`:``,onClick:()=>ot(`articles`),children:[(0,A.jsx)(T,{size:15}),` Articles & Guides`]}),(0,A.jsxs)(`button`,{className:rt===`parts`?`active`:``,onClick:()=>ot(`parts`),children:[(0,A.jsx)(k,{size:15}),` Alternative Parts List`]})]}),rt===`parts`?(0,A.jsxs)(`div`,{className:`partsListView`,children:[(0,A.jsx)(`div`,{className:`partsListHeader`,children:(0,A.jsxs)(`p`,{className:`partsCredit`,children:[`📋 `,`Parts list compiled by Eric Christoffersen (award-winning Jensen C-V8 MkII restoration). Additional hose alternatives by Paul Baker (Australia). Maintained by the Jensen C-V8 community.`]})}),(0,A.jsxs)(`div`,{className:`partsSearch`,children:[(0,A.jsx)(fe,{size:16}),(0,A.jsx)(`input`,{value:ft,onChange:e=>pt(e.target.value),placeholder:`Search by part, alternative, supplier or part number…`}),ft&&(0,A.jsx)(`button`,{onClick:()=>pt(``),children:`Clear`})]}),(0,A.jsxs)(`div`,{className:`categoryFilters`,children:[(0,A.jsx)(`button`,{className:ct===`all`?`active`:``,onClick:()=>dt(`all`),children:`All`}),je.map(e=>(0,A.jsxs)(`button`,{className:ct===e.id?`active`:``,onClick:()=>dt(e.id),children:[e.emoji,` `,e.label]},e.id))]}),(()=>{let e=ft.trim().toLowerCase(),t=Me.filter(t=>ct===`all`||t.category===ct?e?t.part.toLowerCase().includes(e)||(t.alternative||``).toLowerCase().includes(e)||(t.partNumber||``).toLowerCase().includes(e)||(t.supplier||``).toLowerCase().includes(e)||(t.notes||``).toLowerCase().includes(e):!0:!1),n={};return t.forEach(e=>{n[e.category]||(n[e.category]=[]),n[e.category].push(e)}),t.length===0?(0,A.jsxs)(`div`,{className:`emptyChecklist`,style:{marginTop:16},children:[(0,A.jsx)(k,{size:24}),(0,A.jsx)(`p`,{children:`No parts match your search. Try a different term or clear the filter.`})]}):Object.entries(n).map(([e,t])=>{let n=je.find(t=>t.id===e);return(0,A.jsxs)(`div`,{className:`partsGroup`,children:[(0,A.jsxs)(`h3`,{className:`partsGroupTitle`,children:[n?.emoji,` `,n?.label]}),(0,A.jsx)(`div`,{className:`partsTable`,children:t.map(e=>(0,A.jsxs)(`div`,{className:`partRow`,children:[(0,A.jsxs)(`div`,{className:`partMain`,children:[(0,A.jsx)(`strong`,{className:`partName`,children:e.part}),e.models&&!e.models.includes(`all`)&&(0,A.jsx)(`span`,{className:`partModels`,children:e.models.map(e=>e.toUpperCase()).join(` · `)})]}),e.alternative&&(0,A.jsxs)(`div`,{className:`partAlt`,children:[(0,A.jsx)(`span`,{className:`partAltLabel`,children:`Alternative`}),(0,A.jsx)(`span`,{children:e.alternative})]}),e.partNumber&&(0,A.jsxs)(`div`,{className:`partAlt`,children:[(0,A.jsx)(`span`,{className:`partAltLabel`,children:`Part no.`}),(0,A.jsx)(`code`,{className:`partNumber`,children:e.partNumber})]}),e.supplier&&(0,A.jsxs)(`div`,{className:`partAlt`,children:[(0,A.jsx)(`span`,{className:`partAltLabel`,children:`Supplier`}),(0,A.jsx)(`span`,{className:`partSupplier`,children:e.supplier})]}),e.notes&&(0,A.jsx)(`p`,{className:`partNotes`,children:e.notes})]},e.id))})]},e)})})()]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:`categoryFilters`,children:[(0,A.jsx)(`button`,{className:Ke===`all`?`active`:``,onClick:()=>Qe(`all`),children:`All`}),ke.map(e=>(0,A.jsxs)(`button`,{className:Ke===e.id?`active`:``,onClick:()=>Qe(e.id),children:[e.emoji,` `,e.label]},e.id))]}),(0,A.jsxs)(`div`,{className:`articleGrid`,children:[t.map(e=>(0,A.jsxs)(`button`,{className:`articleCard`,onClick:()=>Ge(e.id),children:[(0,A.jsxs)(`div`,{className:`articleCardTop`,children:[(0,A.jsxs)(`span`,{className:`articleCategory`,children:[ke.find(t=>t.id===e.category)?.emoji,` `,ke.find(t=>t.id===e.category)?.label]}),e.severity===`critical`?(0,A.jsx)(`span`,{className:`severityBadge severityBadgeCard`,children:`⚠️ Safety Critical`}):(0,A.jsx)(`span`,{className:`articleDifficulty`,children:e.difficulty})]}),(0,A.jsx)(`h3`,{children:e.title}),(0,A.jsx)(`p`,{children:e.subtitle}),(0,A.jsxs)(`div`,{className:`articleCardFooter`,children:[(0,A.jsx)(`span`,{children:e.readTime}),(0,A.jsx)(`span`,{className:`articleCardTags`,children:e.tags.slice(0,3).map(e=>(0,A.jsx)(`span`,{className:`sectionCardTag`,children:e},e))})]})]},e.id)),t.length===0&&(0,A.jsxs)(`div`,{className:`emptyChecklist`,style:{gridColumn:`1/-1`},children:[(0,A.jsx)(k,{size:24}),(0,A.jsx)(`p`,{children:`No articles in this category yet. More guides will be added as the community contributes them.`})]})]})]}),` `]})})})(),Le===`manual`&&zt,Le===`manual`&&(0,A.jsxs)(A.Fragment,{children:[ee&&(()=>{let e=Ee(o),t=te?e.sections.find(e=>e.id===te):null;return(0,A.jsxs)(`main`,{className:`wiringMain`,children:[(0,A.jsxs)(`div`,{className:`wiringHeader`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`button`,{className:`backBtn`,onClick:()=>C(!1),children:`← Back to manual`}),(0,A.jsx)(`h2`,{children:e.title}),(0,A.jsx)(`p`,{className:`wiringSubtitle`,children:e.subtitle}),(0,A.jsxs)(`p`,{className:`wiringSubtitle`,style:{marginTop:4},children:[`Documentation contributed by:`,` `,e.contributors.map((t,n)=>(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`strong`,{children:t.name}),n<e.contributors.length-1?` & `:``]},t.name))]})]}),(0,A.jsxs)(`div`,{className:`wiringHeaderActions`,children:[(0,A.jsxs)(`a`,{href:e.pdf,download:!0,className:`dlBtn`,children:[(0,A.jsx)(se,{size:15}),` Download PDF`]}),(0,A.jsxs)(`a`,{href:e.pdf,target:`_blank`,rel:`noopener noreferrer`,className:`dlBtn`,children:[(0,A.jsx)(ce,{size:15}),` Open full screen`]})]})]}),(0,A.jsxs)(`div`,{className:`card selectarideOverview`,children:[(0,A.jsx)(`h3`,{className:`sectionTitle`,children:`What is the Selectaride?`}),e.overview.split(`

`).map((e,t)=>(0,A.jsx)(`p`,{children:e},t))]}),(0,A.jsxs)(`div`,{className:`card`,children:[(0,A.jsx)(`h3`,{className:`sectionTitle`,children:`Diagrams & documentation`}),(0,A.jsx)(`p`,{className:`helperText`,children:`Select a section to view the diagram and technical notes.`}),(0,A.jsx)(`div`,{className:`selectarideSections`,children:e.sections.map(e=>(0,A.jsxs)(`button`,{className:`selectarideSection${te===e.id?` active`:``}`,onClick:()=>ne(te===e.id?null:e.id),children:[(0,A.jsxs)(`div`,{className:`selectarideSectionTop`,children:[(0,A.jsx)(`strong`,{children:e.title}),(0,A.jsxs)(`span`,{className:`sectionCardPages`,children:[`PDF p. `,e.page]})]}),(0,A.jsx)(`p`,{children:e.subtitle}),(0,A.jsx)(`div`,{className:`sectionCardTags`,children:e.tags.slice(0,5).map(e=>(0,A.jsx)(`span`,{className:`sectionCardTag`,children:e},e))})]},e.id))}),t&&(0,A.jsxs)(`div`,{className:`selectarideViewer`,children:[(0,A.jsxs)(`div`,{className:`viewerTop`,children:[(0,A.jsx)(`h3`,{children:t.title}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,A.jsx)(`button`,{onClick:()=>ve(e=>Math.max(60,e-20)),children:(0,A.jsx)(_e,{size:16})}),(0,A.jsx)(`button`,{onClick:()=>ve(e=>Math.min(200,e+20)),children:(0,A.jsx)(ge,{size:16})}),(0,A.jsx)(`a`,{href:`${e.pdf}#page=${t.page}`,target:`_blank`,rel:`noopener noreferrer`,className:`iconBtn`,children:(0,A.jsx)(ce,{size:16})})]})]}),t.image?(0,A.jsx)(`div`,{className:`selectarideImgWrap`,children:(0,A.jsx)(`img`,{src:t.image,alt:t.title,className:`selectarideImg`,style:{transform:`scale(${w/100})`,transformOrigin:`top left`}})}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:`pdfPageHint`,children:[(0,A.jsxs)(`span`,{children:[`📄 PDF page `,(0,A.jsx)(`strong`,{children:t.page})]}),(0,A.jsx)(`span`,{className:`pdfPageHintNote`,children:`If the wrong page shows, tap ↗ to open and navigate manually.`})]}),(0,A.jsx)(`iframe`,{title:t.title,src:`${e.pdf}#page=${t.page}&zoom=${w}`,className:`wiringIframe`},`selectaride-${e.pdf}-${t.id}`)]}),(0,A.jsxs)(`div`,{className:`selectarideNotes`,children:[(0,A.jsx)(`h4`,{children:`Technical notes`}),(0,A.jsx)(`p`,{children:t.notes})]})]})]})]})})(),b&&(()=>{let e=Se(o),t=ye.trim().toLowerCase(),n=e.components.filter(e=>{let n=xe===`all`||e.circuit===xe,r=!t||e.name.toLowerCase().includes(t)||e.notes.toLowerCase().includes(t)||e.wires.some(e=>e.toLowerCase().includes(t))||e.circuit.toLowerCase().includes(t);return n&&r});return(0,A.jsxs)(`main`,{className:`wiringMain`,children:[(0,A.jsxs)(`div`,{className:`wiringHeader`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`button`,{className:`backBtn`,onClick:()=>x(!1),children:`← Back to manual`}),(0,A.jsx)(`h2`,{children:e.title}),(0,A.jsxs)(`p`,{className:`wiringSubtitle`,children:[e.subtitle,` · `,(0,A.jsx)(`em`,{children:e.credit})]}),o===`all`&&(0,A.jsx)(`p`,{className:`wiringNote`,children:`Showing Mk I & II diagram. Select Mk III in the model selector for the Mk III diagram.`})]}),(0,A.jsxs)(`div`,{className:`wiringHeaderActions`,children:[(0,A.jsxs)(`a`,{href:e.pdf,download:!0,className:`dlBtn`,children:[(0,A.jsx)(se,{size:15}),` Download PDF`]}),(0,A.jsxs)(`a`,{href:e.pdf,target:`_blank`,rel:`noopener noreferrer`,className:`dlBtn`,children:[(0,A.jsx)(ce,{size:15}),` Open full screen`]})]})]}),(0,A.jsxs)(`div`,{className:`card wiringViewer`,children:[(0,A.jsxs)(`div`,{className:`viewerTop`,children:[(0,A.jsxs)(`h3`,{children:[`Wiring diagram — `,e.title]}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,A.jsx)(`button`,{onClick:()=>Ne(e=>Math.max(60,e-20)),children:(0,A.jsx)(_e,{size:16})}),(0,A.jsx)(`button`,{onClick:()=>Ne(e=>Math.min(200,e+20)),children:(0,A.jsx)(ge,{size:16})})]})]}),(0,A.jsx)(`iframe`,{title:e.title,src:`${e.pdf}#zoom=${Te}`,className:`wiringIframe`},`wiring-${e.id}`)]}),(0,A.jsxs)(`div`,{className:`card`,children:[(0,A.jsx)(`h3`,{className:`sectionTitle`,children:`Component & wire colour guide`}),(0,A.jsx)(`p`,{className:`helperText`,children:`Search by component name, wire colour or circuit. Tap a row to see wiring details.`}),(0,A.jsxs)(`div`,{className:`wiringSearch`,children:[(0,A.jsx)(fe,{size:16}),(0,A.jsx)(`input`,{value:ye,onChange:e=>be(e.target.value),placeholder:`Search: alternator, Blue/White, ignition, horn…`}),ye&&(0,A.jsx)(`button`,{onClick:()=>be(``),children:`Clear`})]}),(0,A.jsxs)(`div`,{className:`wiringCircuitFilters`,children:[(0,A.jsx)(`button`,{className:xe===`all`?`active`:``,onClick:()=>we(`all`),children:`All circuits`}),Ce.map(e=>(0,A.jsx)(`button`,{className:xe===e?`active`:``,onClick:()=>we(e),children:e},e))]}),n.length===0?(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(he,{size:24}),(0,A.jsx)(`p`,{children:`No components match your search. Try a wire colour or circuit name.`})]}):(0,A.jsx)(`div`,{className:`wiringComponents`,children:n.map(e=>(0,A.jsxs)(`div`,{className:`wiringComponent`,children:[(0,A.jsxs)(`div`,{className:`wiringComponentTop`,children:[(0,A.jsx)(`strong`,{children:e.name}),(0,A.jsx)(`span`,{className:`wiringCircuitBadge`,children:e.circuit})]}),(0,A.jsx)(`div`,{className:`wiringWires`,children:e.wires.map(e=>(0,A.jsx)(`span`,{className:`wirePill wire-${e.split(`(`)[0].trim().split(`/`)[0].trim().toLowerCase().replace(/\s/g,`-`)}`,children:e},e))}),(0,A.jsx)(`p`,{className:`wiringNotes`,children:e.notes})]},e.name))})]})]})})(),(0,A.jsxs)(`main`,{style:b||ee?{display:`none`}:{},children:[(0,A.jsxs)(`section`,{className:`hero`,children:[(0,A.jsxs)(`div`,{className:`heroTop`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:`Garage-friendly manual app`}),(0,A.jsx)(`h2`,{children:`Jensen C-V8 Online Manual`})]}),(0,A.jsxs)(`select`,{value:o,onChange:e=>s(e.target.value),className:`modelSelect`,children:[(0,A.jsx)(`option`,{value:`all`,children:`All Jensen C-V8 Models`}),(0,A.jsx)(`option`,{value:`mk1`,children:`Jensen C-V8 Mk I`}),(0,A.jsx)(`option`,{value:`mk2`,children:`Jensen C-V8 Mk II`}),(0,A.jsx)(`option`,{value:`mk3`,children:`Jensen C-V8 Mk III`})]})]}),(0,A.jsxs)(`div`,{className:`heroSearch`,children:[(0,A.jsx)(fe,{size:18}),(0,A.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Try: no start, brake servo, 35 amp fuse, tyre pressure...`}),e&&(0,A.jsx)(`button`,{onClick:()=>t(``),children:`Clear`})]})]}),!e&&(()=>{let e=o===`mk3`?Ie:Fe,t=[`all`,...Array.from(new Set(e.map(e=>e.category).filter(Boolean)))],n=g===`all`?e:e.filter(e=>e.category===g),r=new Set(Ct.map(e=>e.page)),i=n.filter(e=>e.pages.some(e=>r.has(e))),a={all:`All`,overview:`Overview`,specs:`Specs`,mechanical:`Mechanical`,lubrication:`Lubrication`,electrical:`Electrical`,fuel:`Fuel`,brakes:`Brakes`,wheels:`Wheels & Tyres`,cooling:`Cooling`,interior:`Interior`,service:`Service`};return(0,A.jsxs)(`section`,{className:`repairGrid`,children:[(0,A.jsxs)(`div`,{className:`repairGridHeader`,children:[(0,A.jsx)(`p`,{className:`eyebrow`,children:`Manual Sections`}),(0,A.jsx)(`h3`,{children:`Organised repair cards`}),(0,A.jsx)(`p`,{className:`helperText`,children:`These summaries stay inside what the manual says. Use source scans for verification.`})]}),(0,A.jsx)(`div`,{className:`categoryFilters`,children:t.map(e=>(0,A.jsx)(`button`,{className:g===e?`active`:``,onClick:()=>_(e),children:a[e]||e},e))}),(0,A.jsx)(`div`,{className:`sectionCardGrid`,children:i.map(e=>{let t=e.pages.find(e=>r.has(e));return(0,A.jsxs)(`button`,{className:`sectionCard`,onClick:()=>jt(t),children:[(0,A.jsxs)(`div`,{className:`sectionCardTop`,children:[(0,A.jsx)(`span`,{className:`sectionCardCat`,children:a[e.category]||e.category}),(0,A.jsxs)(`span`,{className:`sectionCardPages`,children:[`p. `,e.pages.filter(e=>r.has(e)).join(`–`)]})]}),(0,A.jsx)(`h4`,{children:e.title}),e.tags.length>0&&(0,A.jsx)(`div`,{className:`sectionCardTags`,children:e.tags.slice(0,4).map(e=>(0,A.jsx)(`span`,{className:`sectionCardTag`,children:e},e))})]},e.title)})})]})})(),(0,A.jsxs)(`div`,{className:`tabs`,children:[(0,A.jsxs)(`button`,{className:u===`cards`?`active`:``,onClick:()=>d(`cards`),children:[(0,A.jsx)(D,{size:16}),` `,N===`repair`?`Repair Card`:`Overview`]}),(0,A.jsxs)(`button`,{className:u===`edit`?`active`:``,onClick:()=>d(`edit`),children:[(0,A.jsx)(de,{size:16}),` Edit OCR`]}),(0,A.jsxs)(`button`,{className:u===`page`?`active`:``,onClick:()=>d(`page`),children:[(0,A.jsx)(le,{size:16}),` OCR Text`]}),(0,A.jsxs)(`button`,{className:u===`scan`?`active`:``,onClick:()=>d(`scan`),children:[(0,A.jsx)(E,{size:16}),` Scan Viewer`]}),(0,A.jsxs)(`button`,{className:u===`checklist`?`active`:``,onClick:()=>d(`checklist`),children:[(0,A.jsx)(ae,{size:16}),` Checklist`]})]}),(0,A.jsxs)(`section`,{className:`card pageHeader`,children:[(0,A.jsx)(`h2`,{children:Ve(M.page,o,M.title)}),Be(M.page,o)?.isContinuation&&(0,A.jsxs)(`p`,{className:`continuationNote`,children:[`↩ Continued from `,(0,A.jsx)(`strong`,{children:Be(M.page,o).sectionTitle})]}),(()=>{let e=st(M.page,o,Et);return e.length>0?(0,A.jsxs)(`div`,{className:`tagPills`,children:[e.map(e=>(0,A.jsx)(`button`,{className:`tagPill${v===e?` active`:``}`,onClick:()=>y(v===e?null:e),children:e},e)),v&&(0,A.jsx)(`button`,{className:`tagPillClear`,onClick:()=>y(null),children:`✕ Clear filter`})]}):null})(),(0,A.jsxs)(`div`,{className:`manualRef`,children:[(0,A.jsx)(T,{size:14}),(0,A.jsxs)(`span`,{children:[`Manual p. `,M.page,Be(M.page,o)?.isContinuation?` · Part of ${Be(M.page,o).sectionTitle}`:``]})]}),(()=>{let e=M.summary&&!M.summary.startsWith(Ze),t=/^[a-z()\d.]/,n=e?[]:tt(Et).filter(e=>!t.test(e)).slice(0,3);return e||n.length>0?(0,A.jsxs)(`div`,{className:`summarySection`,children:[e&&(0,A.jsx)(`p`,{className:`summaryLead`,children:M.summary}),n.length>0&&(0,A.jsx)(`ul`,{className:`summaryBullets`,children:n.map((e,t)=>(0,A.jsx)(`li`,{children:e},t))})]}):null})(),Dt&&(0,A.jsxs)(`div`,{className:`editedBadge`,children:[(0,A.jsx)(de,{size:12}),` OCR edited`]}),o===`mk3`&&lt(Et)&&M.page!==20&&(0,A.jsxs)(`div`,{className:`lubRefBanner`,children:[(0,A.jsx)(`span`,{children:`📍 This page references lubrication point codes (A1, C2 etc.)`}),(0,A.jsx)(`button`,{onClick:()=>jt(20),children:`View lubrication diagram — p. 20`})]}),o===`mk3`&&M.page===20&&(0,A.jsxs)(`div`,{className:`lubRefBanner`,children:[(0,A.jsx)(`span`,{children:`📋 The codes on this diagram are referenced in the maintenance schedule`}),(0,A.jsx)(`button`,{onClick:()=>jt(21),children:`View maintenance schedule — p. 21`})]}),(0,A.jsxs)(`div`,{className:`buttons`,children:[(0,A.jsxs)(`button`,{onClick:Mt,children:[(0,A.jsx)(re,{size:16}),` Previous`]}),(0,A.jsxs)(`button`,{onClick:Nt,children:[`Next `,(0,A.jsx)(ie,{size:16})]}),(0,A.jsxs)(`button`,{onClick:()=>At(M.page),children:[`Open original scan `,(0,A.jsx)(ce,{size:16})]})]})]}),u===`cards`&&(0,A.jsxs)(`section`,{className:`card repairCard`,children:[o===`mk3`&&lt(Et)&&M.page!==20&&(0,A.jsxs)(`div`,{className:`lubRefBanner lubRefBannerCard`,children:[(0,A.jsx)(`span`,{children:`📍 References lubrication codes — see the diagram for locations`}),(0,A.jsx)(`button`,{onClick:()=>jt(20),children:`View diagram p. 20`})]}),(0,A.jsxs)(`div`,{className:`repairCardTop`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`p`,{className:`eyebrow`,children:[N===`repair`&&(Be(M.page,o)?.category===`specs`?`Quick reference`:`Repair summary`),N===`reference`&&`Reference data`,N===`informational`&&`Informational page`,N===`diagram`&&`Diagram / image page`]}),(0,A.jsx)(`h3`,{children:Ve(M.page,o,M.title)})]}),(0,A.jsx)(`button`,{onClick:()=>d(`scan`),children:`View scan`})]}),N===`repair`&&(()=>{let e=Be(M.page,o)?.category===`specs`,t=e?`Key specifications`:`Repair steps for this page:`,n=e?`No specifications have been extracted for this page yet.`:`No repair checklist has been generated for this page yet.`,r=et(M.checklist),i=r?M.checklist.filter(e=>$e.test(e)):tt(Et),a=i;if(v){let e=at(Et,v);a=e.length>0?e:i.filter(e=>it(v,e))}let s=!!v;return(0,A.jsxs)(A.Fragment,{children:[M.summary&&!M.summary.startsWith(Ze)&&(0,A.jsx)(`p`,{children:M.summary}),s&&(0,A.jsxs)(`div`,{className:`filterNotice`,children:[(0,A.jsxs)(`span`,{children:[`Showing steps for: `,(0,A.jsx)(`strong`,{children:v})]}),(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>y(null),children:`Show all`})]}),a.length>0?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`p`,{className:`helperText`,children:[r?t:`Key service facts extracted from this page:`,s&&` (${a.length} of ${i.length})`]}),(0,A.jsx)(`ol`,{className:`checklist compact`,children:a.slice(0,8).map((e,t)=>(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`span`,{children:t+1}),(0,A.jsx)(`p`,{children:e})]},e))}),!r&&(0,A.jsxs)(`p`,{className:`helperText dimText`,children:[`Extracted from OCR text. Fix errors in the `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`edit`),children:`Edit OCR tab`}),`.`]})]}):s?(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(k,{size:24}),(0,A.jsxs)(`p`,{children:[`No steps found specifically for `,(0,A.jsx)(`strong`,{children:v}),` on this page.`,` `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>y(null),children:`Show all steps`})]})]}):(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(k,{size:24}),(0,A.jsxs)(`p`,{children:[n,` `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`page`),children:`View the OCR text`}),` for the full content.`]})]})]})})(),N===`reference`&&(0,A.jsxs)(A.Fragment,{children:[M.summary&&!M.summary.startsWith(Ze)&&(0,A.jsx)(`p`,{children:M.summary}),(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(le,{size:24}),(0,A.jsxs)(`p`,{children:[`This is a reference data page — specifications, capacities or tables.`,` `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`page`),children:`View OCR text`}),` `,`or`,` `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`scan`),children:`open the original scan`}),`.`]})]})]}),N===`informational`&&(0,A.jsxs)(A.Fragment,{children:[M.summary&&!M.summary.startsWith(Ze)&&(0,A.jsx)(`p`,{children:M.summary}),(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(T,{size:24}),(0,A.jsxs)(`p`,{children:[`This is an informational page — no repair steps apply.`,` `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`page`),children:`Read the OCR text`}),` `,`or`,` `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`scan`),children:`view the original scan`}),`.`]})]})]}),N===`diagram`&&(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(E,{size:24}),(0,A.jsxs)(`p`,{children:[`This is a diagram or image-only page. Use the`,` `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`scan`),children:`scan viewer`}),` `,`to see the original page.`]})]})]}),u===`edit`&&(0,A.jsxs)(`section`,{className:`card`,children:[(0,A.jsxs)(`div`,{className:`editorHeader`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`h3`,{className:`sectionTitle`,children:[`Edit OCR Text - Page `,M.page]}),(0,A.jsx)(`p`,{className:`helperText`,children:`Correct the OCR errors here. Changes autosave locally and are used by search immediately.`})]}),(0,A.jsx)(`div`,{className:`editorStatus`,children:Dt?`Edited locally`:`Using original OCR`})]}),M.isImageOnly?(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(E,{size:24}),(0,A.jsx)(`p`,{children:`This page is image-only, so there is no OCR text to edit. Use the scan viewer for the original page image.`})]}):(0,A.jsx)(`textarea`,{className:`ocrEditor`,value:Et,onChange:e=>Pt(e.target.value),spellCheck:`false`}),(0,A.jsxs)(`div`,{className:`buttons`,children:[(0,A.jsxs)(`button`,{onClick:It,children:[(0,A.jsx)(oe,{size:16}),` `,f?`Copied`:`Copy text`]}),(0,A.jsxs)(`button`,{onClick:Lt,children:[(0,A.jsx)(se,{size:16}),` Export OCR fixes`]}),(0,A.jsxs)(`button`,{onClick:Rt,children:[(0,A.jsx)(de,{size:16}),` Import OCR fixes`]}),Dt&&(0,A.jsx)(`button`,{onClick:Ft,children:`Reset this page`}),(0,A.jsxs)(`button`,{onClick:()=>d(`scan`),children:[`View scan `,(0,A.jsx)(E,{size:16})]})]})]}),u===`page`&&(0,A.jsxs)(`section`,{className:`card`,children:[(0,A.jsx)(`h3`,{className:`sectionTitle`,children:`OCR text from this page`}),(0,A.jsx)(`p`,{className:`helperText`,children:`This view uses your corrected OCR text if you have edited this page.`}),(0,A.jsx)(`pre`,{className:`ocrText`,children:ut(Et||(M.isImageOnly?`This is an image-only reference page. Open the scan viewer to see the original page.`:`No readable OCR text was extracted from this page.`),e)})]}),u===`scan`&&(0,A.jsxs)(`section`,{className:`card viewer`,children:[(0,A.jsxs)(`div`,{className:`viewerTop`,children:[(0,A.jsxs)(`h3`,{children:[`Original scanned page `,M.page]}),(0,A.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,A.jsx)(`button`,{onClick:()=>a(Math.max(60,i-20)),children:(0,A.jsx)(_e,{size:16})}),(0,A.jsx)(`button`,{onClick:()=>a(Math.min(180,i+20)),children:(0,A.jsx)(ge,{size:16})}),(0,A.jsx)(`button`,{onClick:()=>At(M.page),title:`Open in new tab`,children:(0,A.jsx)(ce,{size:16})})]})]}),(0,A.jsxs)(`div`,{className:`pdfPageHint`,children:[(0,A.jsxs)(`span`,{children:[`📄 PDF page `,(0,A.jsx)(`strong`,{children:M.sourcePage||M.page})]}),(0,A.jsx)(`span`,{className:`pdfPageHintNote`,children:`If the wrong page shows, tap the ↗ button to open in your browser and navigate manually.`})]}),(0,A.jsx)(`iframe`,{title:`manual pdf`,src:`${M.sourcePdf||(o===`mk3`?We:Ue)}#page=${M.sourcePage||M.page}&zoom=${i}`},`scan-${M.sourcePdf}-${M.sourcePage||M.page}`)]}),u===`checklist`&&(()=>{let e=et(M.checklist)?M.checklist.filter(e=>$e.test(e)):[],t=e.length>0?e:tt(Et),n=t.filter((e,t)=>m[`${o}:${M.page}:${t}`]).length;return(0,A.jsxs)(`section`,{className:`card`,children:[(0,A.jsxs)(`div`,{className:`checklistHeader`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h3`,{className:`sectionTitle`,children:e.length>0?`Troubleshooting checklist`:`Key service facts — checklist`}),(0,A.jsxs)(`p`,{className:`helperText`,children:[n,` of `,t.length,` checked`]})]}),n>0&&(0,A.jsx)(`button`,{className:`clearBtn`,onClick:()=>{let e={...m};t.forEach((t,n)=>delete e[`${o}:${M.page}:${n}`]),h(e)},children:`Clear all`})]}),t.length>0?(0,A.jsx)(`ul`,{className:`interactiveChecklist`,children:t.map((e,t)=>{let n=`${o}:${M.page}:${t}`,r=!!m[n];return(0,A.jsxs)(`li`,{className:r?`checked`:``,onClick:()=>h(e=>({...e,[n]:!e[n]})),children:[(0,A.jsx)(`span`,{className:`checkbox`,children:r?`✓`:``}),(0,A.jsx)(`p`,{children:e})]},t)})}):(0,A.jsxs)(`div`,{className:`emptyChecklist`,children:[(0,A.jsx)(k,{size:24}),(0,A.jsx)(`p`,{children:M.isImageOnly?`This is a diagram/image page. Use the original scan.`:`No checklist available for this page yet.`})]}),e.length===0&&t.length>0&&(0,A.jsxs)(`p`,{className:`helperText dimText`,children:[`Extracted from OCR text. Fix errors in the `,(0,A.jsx)(`button`,{className:`inlineLink`,onClick:()=>d(`edit`),children:`Edit OCR tab`}),`.`]})]})})(),e&&(0,A.jsxs)(`section`,{className:`card`,children:[(0,A.jsx)(`h3`,{className:`sectionTitle`,children:`Search results from OCR text`}),(0,A.jsx)(`div`,{className:`searchResults`,children:kt.map(e=>(0,A.jsxs)(`button`,{onClick:()=>jt(e.page),children:[(0,A.jsxs)(`strong`,{children:[`Page `,e.page,`: `,e.title]}),(0,A.jsxs)(`span`,{children:[e.text.slice(0,260),`...`]})]},e.page))})]})]})]})]})]})}(0,ve.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(dt,{}));