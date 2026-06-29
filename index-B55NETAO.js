(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();function F1(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var jd={exports:{}},$l={};var xx;function B1(){if(xx)return $l;xx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:u}}return $l.Fragment=t,$l.jsx=n,$l.jsxs=n,$l}var Sx;function H1(){return Sx||(Sx=1,jd.exports=B1()),jd.exports}var gt=H1(),Jd={exports:{}},ae={};var yx;function G1(){if(yx)return ae;yx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function x(I,K,Mt){this.props=I,this.context=K,this.refs=y,this.updater=Mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function U(){}U.prototype=x.prototype;function P(I,K,Mt){this.props=I,this.context=K,this.refs=y,this.updater=Mt||E}var R=P.prototype=new U;R.constructor=P,b(R,x.prototype),R.isPureReactComponent=!0;var D=Array.isArray;function O(){}var L={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(I,K,Mt){var Tt=Mt.ref;return{$$typeof:o,type:I,key:K,ref:Tt!==void 0?Tt:null,props:Mt}}function G(I,K){return N(I.type,K,I.props)}function V(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function W(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Mt){return K[Mt]})}var lt=/\/+/g;function ct(I,K){return typeof I=="object"&&I!==null&&I.key!=null?W(""+I.key):K.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(K){I.status==="pending"&&(I.status="fulfilled",I.value=K)},function(K){I.status==="pending"&&(I.status="rejected",I.reason=K)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,K,Mt,Tt,Dt){var at=typeof I;(at==="undefined"||at==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(at){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case o:case t:St=!0;break;case _:return St=I._init,F(St(I._payload),K,Mt,Tt,Dt)}}if(St)return Dt=Dt(I),St=Tt===""?"."+ct(I,0):Tt,D(Dt)?(Mt="",St!=null&&(Mt=St.replace(lt,"$&/")+"/"),F(Dt,K,Mt,"",function(ee){return ee})):Dt!=null&&(V(Dt)&&(Dt=G(Dt,Mt+(Dt.key==null||I&&I.key===Dt.key?"":(""+Dt.key).replace(lt,"$&/")+"/")+St)),K.push(Dt)),1;St=0;var bt=Tt===""?".":Tt+":";if(D(I))for(var Ht=0;Ht<I.length;Ht++)Tt=I[Ht],at=bt+ct(Tt,Ht),St+=F(Tt,K,Mt,at,Dt);else if(Ht=S(I),typeof Ht=="function")for(I=Ht.call(I),Ht=0;!(Tt=I.next()).done;)Tt=Tt.value,at=bt+ct(Tt,Ht++),St+=F(Tt,K,Mt,at,Dt);else if(at==="object"){if(typeof I.then=="function")return F(Z(I),K,Mt,Tt,Dt);throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return St}function B(I,K,Mt){if(I==null)return I;var Tt=[],Dt=0;return F(I,Tt,"","",function(at){return K.call(Mt,at,Dt++)}),Tt}function J(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(Mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=Mt)},function(Mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=Mt)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var pt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},yt={map:B,forEach:function(I,K,Mt){B(I,function(){K.apply(this,arguments)},Mt)},count:function(I){var K=0;return B(I,function(){K++}),K},toArray:function(I){return B(I,function(K){return K})||[]},only:function(I){if(!V(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ae.Activity=v,ae.Children=yt,ae.Component=x,ae.Fragment=n,ae.Profiler=s,ae.PureComponent=P,ae.StrictMode=a,ae.Suspense=p,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ae.__COMPILER_RUNTIME={__proto__:null,c:function(I){return L.H.useMemoCache(I)}},ae.cache=function(I){return function(){return I.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(I,K,Mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Tt=b({},I.props),Dt=I.key;if(K!=null)for(at in K.key!==void 0&&(Dt=""+K.key),K)!T.call(K,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&K.ref===void 0||(Tt[at]=K[at]);var at=arguments.length-2;if(at===1)Tt.children=Mt;else if(1<at){for(var St=Array(at),bt=0;bt<at;bt++)St[bt]=arguments[bt+2];Tt.children=St}return N(I.type,Dt,Tt)},ae.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},ae.createElement=function(I,K,Mt){var Tt,Dt={},at=null;if(K!=null)for(Tt in K.key!==void 0&&(at=""+K.key),K)T.call(K,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Dt[Tt]=K[Tt]);var St=arguments.length-2;if(St===1)Dt.children=Mt;else if(1<St){for(var bt=Array(St),Ht=0;Ht<St;Ht++)bt[Ht]=arguments[Ht+2];Dt.children=bt}if(I&&I.defaultProps)for(Tt in St=I.defaultProps,St)Dt[Tt]===void 0&&(Dt[Tt]=St[Tt]);return N(I,at,Dt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(I){return{$$typeof:f,render:I}},ae.isValidElement=V,ae.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:J}},ae.memo=function(I,K){return{$$typeof:d,type:I,compare:K===void 0?null:K}},ae.startTransition=function(I){var K=L.T,Mt={};L.T=Mt;try{var Tt=I(),Dt=L.S;Dt!==null&&Dt(Mt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(O,pt)}catch(at){pt(at)}finally{K!==null&&Mt.types!==null&&(K.types=Mt.types),L.T=K}},ae.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ae.use=function(I){return L.H.use(I)},ae.useActionState=function(I,K,Mt){return L.H.useActionState(I,K,Mt)},ae.useCallback=function(I,K){return L.H.useCallback(I,K)},ae.useContext=function(I){return L.H.useContext(I)},ae.useDebugValue=function(){},ae.useDeferredValue=function(I,K){return L.H.useDeferredValue(I,K)},ae.useEffect=function(I,K){return L.H.useEffect(I,K)},ae.useEffectEvent=function(I){return L.H.useEffectEvent(I)},ae.useId=function(){return L.H.useId()},ae.useImperativeHandle=function(I,K,Mt){return L.H.useImperativeHandle(I,K,Mt)},ae.useInsertionEffect=function(I,K){return L.H.useInsertionEffect(I,K)},ae.useLayoutEffect=function(I,K){return L.H.useLayoutEffect(I,K)},ae.useMemo=function(I,K){return L.H.useMemo(I,K)},ae.useOptimistic=function(I,K){return L.H.useOptimistic(I,K)},ae.useReducer=function(I,K,Mt){return L.H.useReducer(I,K,Mt)},ae.useRef=function(I){return L.H.useRef(I)},ae.useState=function(I){return L.H.useState(I)},ae.useSyncExternalStore=function(I,K,Mt){return L.H.useSyncExternalStore(I,K,Mt)},ae.useTransition=function(){return L.H.useTransition()},ae.version="19.2.7",ae}var Mx;function e_(){return Mx||(Mx=1,Jd.exports=G1()),Jd.exports}var Cn=e_();const V1=F1(Cn);var $d={exports:{}},tu={},tp={exports:{}},ep={};var Ex;function k1(){return Ex||(Ex=1,(function(o){function t(F,B){var J=F.length;F.push(B);t:for(;0<J;){var pt=J-1>>>1,yt=F[pt];if(0<s(yt,B))F[pt]=B,F[J]=yt,J=pt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var B=F[0],J=F.pop();if(J!==B){F[0]=J;t:for(var pt=0,yt=F.length,I=yt>>>1;pt<I;){var K=2*(pt+1)-1,Mt=F[K],Tt=K+1,Dt=F[Tt];if(0>s(Mt,J))Tt<yt&&0>s(Dt,Mt)?(F[pt]=Dt,F[Tt]=J,pt=Tt):(F[pt]=Mt,F[K]=J,pt=K);else if(Tt<yt&&0>s(Dt,J))F[pt]=Dt,F[Tt]=J,pt=Tt;else break t}}return B}function s(F,B){var J=F.sortIndex-B.sortIndex;return J!==0?J:F.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,v=null,g=3,S=!1,E=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var B=n(d);B!==null;){if(B.callback===null)a(d);else if(B.startTime<=F)a(d),B.sortIndex=B.expirationTime,t(p,B);else break;B=n(d)}}function D(F){if(b=!1,R(F),!E)if(n(p)!==null)E=!0,O||(O=!0,W());else{var B=n(d);B!==null&&Z(D,B.startTime-F)}}var O=!1,L=-1,T=5,N=-1;function G(){return y?!0:!(o.unstable_now()-N<T)}function V(){if(y=!1,O){var F=o.unstable_now();N=F;var B=!0;try{t:{E=!1,b&&(b=!1,U(L),L=-1),S=!0;var J=g;try{e:{for(R(F),v=n(p);v!==null&&!(v.expirationTime>F&&G());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var yt=pt(v.expirationTime<=F);if(F=o.unstable_now(),typeof yt=="function"){v.callback=yt,R(F),B=!0;break e}v===n(p)&&a(p),R(F)}else a(p);v=n(p)}if(v!==null)B=!0;else{var I=n(d);I!==null&&Z(D,I.startTime-F),B=!1}}break t}finally{v=null,g=J,S=!1}B=void 0}}finally{B?W():O=!1}}}var W;if(typeof P=="function")W=function(){P(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ct=lt.port2;lt.port1.onmessage=V,W=function(){ct.postMessage(null)}}else W=function(){x(V,0)};function Z(F,B){L=x(function(){F(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(F){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var J=g;g=B;try{return F()}finally{g=J}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=g;g=F;try{return B()}finally{g=J}},o.unstable_scheduleCallback=function(F,B,J){var pt=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pt+J:pt):J=pt,F){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=J+yt,F={id:_++,callback:B,priorityLevel:F,startTime:J,expirationTime:yt,sortIndex:-1},J>pt?(F.sortIndex=J,t(d,F),n(p)===null&&F===n(d)&&(b?(U(L),L=-1):b=!0,Z(D,J-pt))):(F.sortIndex=yt,t(p,F),E||S||(E=!0,O||(O=!0,W()))),F},o.unstable_shouldYield=G,o.unstable_wrapCallback=function(F){var B=g;return function(){var J=g;g=B;try{return F.apply(this,arguments)}finally{g=J}}}})(ep)),ep}var bx;function X1(){return bx||(bx=1,tp.exports=k1()),tp.exports}var np={exports:{}},qn={};var Tx;function W1(){if(Tx)return qn;Tx=1;var o=e_();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,_)},qn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},qn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},qn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},qn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},qn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},qn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},qn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},qn.requestFormReset=function(p){a.d.r(p)},qn.unstable_batchedUpdates=function(p,d){return p(d)},qn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},qn.useFormStatus=function(){return c.H.useHostTransitionStatus()},qn.version="19.2.7",qn}var Ax;function q1(){if(Ax)return np.exports;Ax=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),np.exports=W1(),np.exports}var Rx;function Y1(){if(Rx)return tu;Rx=1;var o=X1(),t=e_(),n=q1();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var M=!1,w=h.child;w;){if(w===r){M=!0,r=h,l=m;break}if(w===l){M=!0,l=h,r=m;break}w=w.sibling}if(!M){for(w=m.child;w;){if(w===r){M=!0,r=m,l=h;break}if(w===l){M=!0,l=m,r=h;break}w=w.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),P=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case D:return"Suspense";case O:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case P:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var Z=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pt=[],yt=-1;function I(e){return{current:e}}function K(e){0>yt||(e.current=pt[yt],pt[yt]=null,yt--)}function Mt(e,i){yt++,pt[yt]=e.current,e.current=i}var Tt=I(null),Dt=I(null),at=I(null),St=I(null);function bt(e,i){switch(Mt(at,i),Mt(Dt,e),Mt(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Vv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Vv(i),e=kv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Tt),Mt(Tt,e)}function Ht(){K(Tt),K(Dt),K(at)}function ee(e){e.memoizedState!==null&&Mt(St,e);var i=Tt.current,r=kv(i,e.type);i!==r&&(Mt(Dt,e),Mt(Tt,r))}function Qt(e){Dt.current===e&&(K(Tt),K(Dt)),St.current===e&&(K(St),Kl._currentValue=J)}var Ke,fe;function Se(e){if(Ke===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ke=i&&i[1]||"",fe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+fe}var ye=!1;function he(e,i){if(!e||ye)return"";ye=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){ot=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],w=m[1];if(M&&w){var H=M.split(`
`),et=w.split(`
`);for(h=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;h<et.length&&!et[h].includes("DetermineComponentFrameRoot");)h++;if(l===H.length||h===et.length)for(l=H.length-1,h=et.length-1;1<=l&&0<=h&&H[l]!==et[h];)h--;for(;1<=l&&0<=h;l--,h--)if(H[l]!==et[h]){if(l!==1||h!==1)do if(l--,h--,0>h||H[l]!==et[h]){var mt=`
`+H[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=h);break}}}finally{ye=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Se(r):""}function ln(e,i){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==i&&i!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return Se("Activity");default:return""}}function un(e){try{var i="",r=null;do i+=ln(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var cn=Object.prototype.hasOwnProperty,mn=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,fn=o.unstable_shouldYield,Y=o.unstable_requestPaint,Be=o.unstable_now,we=o.unstable_getCurrentPriorityLevel,z=o.unstable_ImmediatePriority,A=o.unstable_UserBlockingPriority,j=o.unstable_NormalPriority,rt=o.unstable_LowPriority,ht=o.unstable_IdlePriority,At=o.log,Ut=o.unstable_setDisableYieldValue,ft=null,dt=null;function Ct(e){if(typeof At=="function"&&Ut(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,e)}catch{}}var Ft=Math.clz32?Math.clz32:Kt,Ot=Math.log,Nt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Ot(e)/Nt|0)|0}var jt=256,ie=262144,X=4194304;function Rt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?h=Rt(l):(M&=w,M!==0?h=Rt(M):r||(r=w&~e,r!==0&&(h=Rt(r))))):(w=l&~m,w!==0?h=Rt(w):M!==0?h=Rt(M):r||(r=l&~e,r!==0&&(h=Rt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function wt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function zt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function qt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Vt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,i,r,l,h,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var w=e.entanglements,H=e.expirationTimes,et=e.hiddenUpdates;for(r=M&~r;0<r;){var mt=31-Ft(r),xt=1<<mt;w[mt]=0,H[mt]=-1;var ot=et[mt];if(ot!==null)for(et[mt]=null,mt=0;mt<ot.length;mt++){var ut=ot[mt];ut!==null&&(ut.lane&=-536870913)}r&=~xt}l!==0&&Ne(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~i))}function Ne(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ft(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function gi(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Ft(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function vi(e,i){var r=i&-i;return r=(r&42)!==0?1:ul(r),(r&(e.suspendedLanes|i))!==0?0:r}function ul(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fl(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:hx(e.type))}function Ws(e,i){var r=B.p;try{return B.p=e,i()}finally{B.p=r}}var fa=Math.random().toString(36).slice(2),Sn="__reactFiber$"+fa,Fn="__reactProps$"+fa,ii="__reactContainer$"+fa,as="__reactEvents$"+fa,Lu="__reactListeners$"+fa,Ou="__reactHandles$"+fa,rs="__reactResources$"+fa,fr="__reactMarker$"+fa;function hr(e){delete e[Sn],delete e[Fn],delete e[as],delete e[Lu],delete e[Ou]}function Da(e){var i=e[Sn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ii]||r[Sn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Qv(e);e!==null;){if(r=e[Sn])return r;e=Qv(e)}return i}e=r,r=e.parentNode}return null}function Ua(e){if(e=e[Sn]||e[ii]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ss(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function dr(e){var i=e[rs];return i||(i=e[rs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yn(e){e[fr]=!0}var Pu=new Set,C={};function q(e,i){st(e,i),st(e+"Capture",i)}function st(e,i){for(C[e]=i,e=0;e<i.length;e++)Pu.add(i[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Pt={};function Gt(e){return cn.call(Pt,e)?!0:cn.call(it,e)?!1:nt.test(e)?Pt[e]=!0:(it[e]=!0,!1)}function Lt(e,i,r){if(Gt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Xt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function kt(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Zt(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(M){r=""+M,m.call(this,M)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ae(e){if(!e._valueTracker){var i=se(e)?"checked":"value";e._valueTracker=Zt(e,i,""+e[i])}}function $e(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=se(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function Oe(e){return e.replace(Le,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Bt(e,i,r,l,h,m,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Jt(i)):e.value!==""+Jt(i)&&(e.value=""+Jt(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?de(e,M,Jt(i)):r!=null?de(e,M,Jt(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Jt(w):e.removeAttribute("name")}function Wn(e,i,r,l,h,m,M,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ae(e);return}r=r!=null?""+Jt(r):"",i=i!=null?""+Jt(i):r,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ae(e)}function de(e,i,r){i==="number"&&ke(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function wn(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Jt(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function xi(e,i,r){if(i!=null&&(i=""+Jt(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Jt(r):""}function $i(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(Z(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Jt(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ae(e)}function Si(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Pe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||Pe.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function ta(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&tn(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&tn(e,m,i[m])}function Ue(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function os(e){return pr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Na(){}var Zf=null;function Kf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function G_(e){var i=Ua(e);if(i&&(e=i.stateNode)){var r=e[Fn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Bt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Oe(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Fn]||null;if(!h)throw Error(a(90));Bt(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&$e(l)}break t;case"textarea":xi(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&wn(e,!!r.multiple,i,!1)}}}var Qf=!1;function V_(e,i,r){if(Qf)return e(i,r);Qf=!0;try{var l=e(i);return l}finally{if(Qf=!1,(qs!==null||Ys!==null)&&(Mc(),qs&&(i=qs,e=Ys,Ys=qs=null,G_(i),e)))for(i=0;i<e.length;i++)G_(e[i])}}function hl(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Fn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jf=!1;if(La)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){jf=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{jf=!1}var mr=null,Jf=null,Iu=null;function k_(){if(Iu)return Iu;var e,i=Jf,r=i.length,l,h="value"in mr?mr.value:mr.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var M=r-e;for(l=1;l<=M&&i[r-l]===h[m-l];l++);return Iu=h.slice(e,1<l?1-l:void 0)}function zu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Fu(){return!0}function X_(){return!1}function ai(e){function i(r,l,h,m,M){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fu:X_,this.isPropagationStopped=X_,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fu)},persist:function(){},isPersistent:Fu}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=ai(ls),pl=v({},ls,{view:0,detail:0}),IM=ai(pl),$f,th,ml,Hu=v({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ml&&(ml&&e.type==="mousemove"?($f=e.screenX-ml.screenX,th=e.screenY-ml.screenY):th=$f=0,ml=e),$f)},movementY:function(e){return"movementY"in e?e.movementY:th}}),W_=ai(Hu),zM=v({},Hu,{dataTransfer:0}),FM=ai(zM),BM=v({},pl,{relatedTarget:0}),eh=ai(BM),HM=v({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),GM=ai(HM),VM=v({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kM=ai(VM),XM=v({},ls,{data:0}),q_=ai(XM),WM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=YM[e])?!!i[e]:!1}function nh(){return ZM}var KM=v({},pl,{key:function(e){if(e.key){var i=WM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=zu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nh,charCode:function(e){return e.type==="keypress"?zu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),QM=ai(KM),jM=v({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Y_=ai(jM),JM=v({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nh}),$M=ai(JM),tE=v({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=ai(tE),nE=v({},Hu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iE=ai(nE),aE=v({},ls,{newState:0,oldState:0}),rE=ai(aE),sE=[9,13,27,32],ih=La&&"CompositionEvent"in window,_l=null;La&&"documentMode"in document&&(_l=document.documentMode);var oE=La&&"TextEvent"in window&&!_l,Z_=La&&(!ih||_l&&8<_l&&11>=_l),K_=" ",Q_=!1;function j_(e,i){switch(e){case"keyup":return sE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function lE(e,i){switch(e){case"compositionend":return J_(i);case"keypress":return i.which!==32?null:(Q_=!0,K_);case"textInput":return e=i.data,e===K_&&Q_?null:e;default:return null}}function uE(e,i){if(Zs)return e==="compositionend"||!ih&&j_(e,i)?(e=k_(),Iu=Jf=mr=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Z_&&i.locale!=="ko"?null:i.data;default:return null}}var cE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!cE[e.type]:i==="textarea"}function t0(e,i,r,l){qs?Ys?Ys.push(l):Ys=[l]:qs=l,i=wc(i,"onChange"),0<i.length&&(r=new Bu("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var gl=null,vl=null;function fE(e){Iv(e,0)}function Gu(e){var i=ss(e);if($e(i))return e}function e0(e,i){if(e==="change")return i}var n0=!1;if(La){var ah;if(La){var rh="oninput"in document;if(!rh){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),rh=typeof i0.oninput=="function"}ah=rh}else ah=!1;n0=ah&&(!document.documentMode||9<document.documentMode)}function a0(){gl&&(gl.detachEvent("onpropertychange",r0),vl=gl=null)}function r0(e){if(e.propertyName==="value"&&Gu(vl)){var i=[];t0(i,vl,e,Kf(e)),V_(fE,i)}}function hE(e,i,r){e==="focusin"?(a0(),gl=i,vl=r,gl.attachEvent("onpropertychange",r0)):e==="focusout"&&a0()}function dE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gu(vl)}function pE(e,i){if(e==="click")return Gu(i)}function mE(e,i){if(e==="input"||e==="change")return Gu(i)}function _E(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var yi=typeof Object.is=="function"?Object.is:_E;function xl(e,i){if(yi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!cn.call(i,h)||!yi(e[h],i[h]))return!1}return!0}function s0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o0(e,i){var r=s0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=s0(r)}}function l0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?l0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function u0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ke(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=ke(e.document)}return i}function sh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var gE=La&&"documentMode"in document&&11>=document.documentMode,Ks=null,oh=null,Sl=null,lh=!1;function c0(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;lh||Ks==null||Ks!==ke(l)||(l=Ks,"selectionStart"in l&&sh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sl&&xl(Sl,l)||(Sl=l,l=wc(oh,"onSelect"),0<l.length&&(i=new Bu("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Ks)))}function us(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Qs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},uh={},f0={};La&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function cs(e){if(uh[e])return uh[e];if(!Qs[e])return e;var i=Qs[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in f0)return uh[e]=i[r];return e}var h0=cs("animationend"),d0=cs("animationiteration"),p0=cs("animationstart"),vE=cs("transitionrun"),xE=cs("transitionstart"),SE=cs("transitioncancel"),m0=cs("transitionend"),_0=new Map,ch="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ch.push("scrollEnd");function ea(e,i){_0.set(e,i),q(i,[e])}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Hi=[],js=0,fh=0;function ku(){for(var e=js,i=fh=js=0;i<e;){var r=Hi[i];Hi[i++]=null;var l=Hi[i];Hi[i++]=null;var h=Hi[i];Hi[i++]=null;var m=Hi[i];if(Hi[i++]=null,l!==null&&h!==null){var M=l.pending;M===null?h.next=h:(h.next=M.next,M.next=h),l.pending=h}m!==0&&g0(r,h,m)}}function Xu(e,i,r,l){Hi[js++]=e,Hi[js++]=i,Hi[js++]=r,Hi[js++]=l,fh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function hh(e,i,r,l){return Xu(e,i,r,l),Wu(e)}function fs(e,i){return Xu(e,null,null,i),Wu(e)}function g0(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Ft(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function Wu(e){if(50<Vl)throw Vl=0,yd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Js={};function yE(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(e,i,r,l){return new yE(e,i,r,l)}function dh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oa(e,i){var r=e.alternate;return r===null?(r=Mi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function v0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function qu(e,i,r,l,h,m){var M=0;if(l=e,typeof e=="function")dh(e)&&(M=1);else if(typeof e=="string")M=A1(e,r,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Mi(31,r,i,h),e.elementType=N,e.lanes=m,e;case b:return hs(r.children,h,m,i);case y:M=8,h|=24;break;case x:return e=Mi(12,r,i,h|2),e.elementType=x,e.lanes=m,e;case D:return e=Mi(13,r,i,h),e.elementType=D,e.lanes=m,e;case O:return e=Mi(19,r,i,h),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:M=10;break t;case U:M=9;break t;case R:M=11;break t;case L:M=14;break t;case T:M=16,l=null;break t}M=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Mi(M,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function hs(e,i,r,l){return e=Mi(7,e,l,i),e.lanes=r,e}function ph(e,i,r){return e=Mi(6,e,null,i),e.lanes=r,e}function x0(e){var i=Mi(18,null,null,0);return i.stateNode=e,i}function mh(e,i,r){return i=Mi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var S0=new WeakMap;function Gi(e,i){if(typeof e=="object"&&e!==null){var r=S0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:un(i)},S0.set(e,i),i)}return{value:e,source:i,stack:un(i)}}var $s=[],to=0,Yu=null,yl=0,Vi=[],ki=0,_r=null,da=1,pa="";function Pa(e,i){$s[to++]=yl,$s[to++]=Yu,Yu=e,yl=i}function y0(e,i,r){Vi[ki++]=da,Vi[ki++]=pa,Vi[ki++]=_r,_r=e;var l=da;e=pa;var h=32-Ft(l)-1;l&=~(1<<h),r+=1;var m=32-Ft(i)+h;if(30<m){var M=h-h%5;m=(l&(1<<M)-1).toString(32),l>>=M,h-=M,da=1<<32-Ft(i)+h|r<<h|l,pa=m+e}else da=1<<m|r<<h|l,pa=e}function _h(e){e.return!==null&&(Pa(e,1),y0(e,1,0))}function gh(e){for(;e===Yu;)Yu=$s[--to],$s[to]=null,yl=$s[--to],$s[to]=null;for(;e===_r;)_r=Vi[--ki],Vi[ki]=null,pa=Vi[--ki],Vi[ki]=null,da=Vi[--ki],Vi[ki]=null}function M0(e,i){Vi[ki++]=da,Vi[ki++]=pa,Vi[ki++]=_r,da=i.id,pa=i.overflow,_r=e}var Bn=null,Qe=null,Me=!1,gr=null,Xi=!1,vh=Error(a(519));function vr(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Gi(i,e)),vh}function E0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[Sn]=e,i[Fn]=l,r){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(r=0;r<Xl.length;r++)me(Xl[r],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Wn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),$i(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Hv(i.textContent,r)?(l.popover!=null&&(me("beforetoggle",i),me("toggle",i)),l.onScroll!=null&&me("scroll",i),l.onScrollEnd!=null&&me("scrollend",i),l.onClick!=null&&(i.onclick=Na),i=!0):i=!1,i||vr(e,!0)}function b0(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Xi=!1;return;case 27:case 3:Xi=!0;return;default:Bn=Bn.return}}function eo(e){if(e!==Bn)return!1;if(!Me)return b0(e),Me=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Id(e.type,e.memoizedProps)),r=!r),r&&Qe&&vr(e),b0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=Kv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=Kv(e)}else i===27?(i=Qe,Nr(e.type)?(e=Gd,Gd=null,Qe=e):Qe=i):Qe=Bn?qi(e.stateNode.nextSibling):null;return!0}function ds(){Qe=Bn=null,Me=!1}function xh(){var e=gr;return e!==null&&(li===null?li=e:li.push.apply(li,e),gr=null),e}function Ml(e){gr===null?gr=[e]:gr.push(e)}var Sh=I(null),ps=null,Ia=null;function xr(e,i,r){Mt(Sh,i._currentValue),i._currentValue=r}function za(e){e._currentValue=Sh.current,K(Sh)}function yh(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function Mh(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var M=h.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=h;for(var H=0;H<i.length;H++)if(w.context===i[H]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),yh(m.return,r,e),l||(M=null);break t}m=w.next}}else if(h.tag===18){if(M=h.return,M===null)throw Error(a(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),yh(M,r,e),M=null}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===e){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}}function no(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var M=h.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var w=h.type;yi(h.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(h===St.current){if(M=h.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Kl):e=[Kl])}h=h.return}e!==null&&Mh(i,e,r,l),i.flags|=262144}function Zu(e){for(e=e.firstContext;e!==null;){if(!yi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,Ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return T0(ps,e)}function Ku(e,i){return ps===null&&ms(e),T0(e,i)}function T0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ia===null){if(e===null)throw Error(a(308));Ia=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ia=Ia.next=i;return r}var ME=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},EE=o.unstable_scheduleCallback,bE=o.unstable_NormalPriority,Mn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eh(){return{controller:new ME,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&EE(bE,function(){e.controller.abort()})}var bl=null,bh=0,io=0,ao=null;function TE(e,i){if(bl===null){var r=bl=[];bh=0,io=Rd(),ao={status:"pending",value:void 0,then:function(l){r.push(l)}}}return bh++,i.then(A0,A0),i}function A0(){if(--bh===0&&bl!==null){ao!==null&&(ao.status="fulfilled");var e=bl;bl=null,io=0,ao=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function AE(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var R0=F.S;F.S=function(e,i){cv=Be(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&TE(e,i),R0!==null&&R0(e,i)};var _s=I(null);function Th(){var e=_s.current;return e!==null?e:Xe.pooledCache}function Qu(e,i){i===null?Mt(_s,_s.current):Mt(_s,i.pool)}function C0(){var e=Th();return e===null?null:{parent:Mn._currentValue,pool:e}}var ro=Error(a(460)),Ah=Error(a(474)),ju=Error(a(542)),Ju={then:function(){}};function w0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function D0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Na,Na),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,N0(e),e;default:if(typeof i.status=="string")i.then(Na,Na);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,N0(e),e}throw vs=i,ro}}function gs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(vs=r,ro):r}}var vs=null;function U0(){if(vs===null)throw Error(a(459));var e=vs;return vs=null,e}function N0(e){if(e===ro||e===ju)throw Error(a(483))}var so=null,Tl=0;function $u(e){var i=Tl;return Tl+=1,so===null&&(so=[]),D0(so,e,i)}function Al(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function tc(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function L0(e){function i(Q,k){if(e){var tt=Q.deletions;tt===null?(Q.deletions=[k],Q.flags|=16):tt.push(k)}}function r(Q,k){if(!e)return null;for(;k!==null;)i(Q,k),k=k.sibling;return null}function l(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function h(Q,k){return Q=Oa(Q,k),Q.index=0,Q.sibling=null,Q}function m(Q,k,tt){return Q.index=tt,e?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<k?(Q.flags|=67108866,k):tt):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function M(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,k,tt,vt){return k===null||k.tag!==6?(k=ph(tt,Q.mode,vt),k.return=Q,k):(k=h(k,tt),k.return=Q,k)}function H(Q,k,tt,vt){var $t=tt.type;return $t===b?mt(Q,k,tt.props.children,vt,tt.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&gs($t)===k.type)?(k=h(k,tt.props),Al(k,tt),k.return=Q,k):(k=qu(tt.type,tt.key,tt.props,null,Q.mode,vt),Al(k,tt),k.return=Q,k)}function et(Q,k,tt,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=mh(tt,Q.mode,vt),k.return=Q,k):(k=h(k,tt.children||[]),k.return=Q,k)}function mt(Q,k,tt,vt,$t){return k===null||k.tag!==7?(k=hs(tt,Q.mode,vt,$t),k.return=Q,k):(k=h(k,tt),k.return=Q,k)}function xt(Q,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ph(""+k,Q.mode,tt),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return tt=qu(k.type,k.key,k.props,null,Q.mode,tt),Al(tt,k),tt.return=Q,tt;case E:return k=mh(k,Q.mode,tt),k.return=Q,k;case T:return k=gs(k),xt(Q,k,tt)}if(Z(k)||W(k))return k=hs(k,Q.mode,tt,null),k.return=Q,k;if(typeof k.then=="function")return xt(Q,$u(k),tt);if(k.$$typeof===P)return xt(Q,Ku(Q,k),tt);tc(Q,k)}return null}function ot(Q,k,tt,vt){var $t=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:w(Q,k,""+tt,vt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===$t?H(Q,k,tt,vt):null;case E:return tt.key===$t?et(Q,k,tt,vt):null;case T:return tt=gs(tt),ot(Q,k,tt,vt)}if(Z(tt)||W(tt))return $t!==null?null:mt(Q,k,tt,vt,null);if(typeof tt.then=="function")return ot(Q,k,$u(tt),vt);if(tt.$$typeof===P)return ot(Q,k,Ku(Q,tt),vt);tc(Q,tt)}return null}function ut(Q,k,tt,vt,$t){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(tt)||null,w(k,Q,""+vt,$t);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return Q=Q.get(vt.key===null?tt:vt.key)||null,H(k,Q,vt,$t);case E:return Q=Q.get(vt.key===null?tt:vt.key)||null,et(k,Q,vt,$t);case T:return vt=gs(vt),ut(Q,k,tt,vt,$t)}if(Z(vt)||W(vt))return Q=Q.get(tt)||null,mt(k,Q,vt,$t,null);if(typeof vt.then=="function")return ut(Q,k,tt,$u(vt),$t);if(vt.$$typeof===P)return ut(Q,k,tt,Ku(k,vt),$t);tc(k,vt)}return null}function Wt(Q,k,tt,vt){for(var $t=null,Re=null,Yt=k,le=k=0,ve=null;Yt!==null&&le<tt.length;le++){Yt.index>le?(ve=Yt,Yt=null):ve=Yt.sibling;var Ce=ot(Q,Yt,tt[le],vt);if(Ce===null){Yt===null&&(Yt=ve);break}e&&Yt&&Ce.alternate===null&&i(Q,Yt),k=m(Ce,k,le),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,Yt=ve}if(le===tt.length)return r(Q,Yt),Me&&Pa(Q,le),$t;if(Yt===null){for(;le<tt.length;le++)Yt=xt(Q,tt[le],vt),Yt!==null&&(k=m(Yt,k,le),Re===null?$t=Yt:Re.sibling=Yt,Re=Yt);return Me&&Pa(Q,le),$t}for(Yt=l(Yt);le<tt.length;le++)ve=ut(Yt,Q,le,tt[le],vt),ve!==null&&(e&&ve.alternate!==null&&Yt.delete(ve.key===null?le:ve.key),k=m(ve,k,le),Re===null?$t=ve:Re.sibling=ve,Re=ve);return e&&Yt.forEach(function(zr){return i(Q,zr)}),Me&&Pa(Q,le),$t}function te(Q,k,tt,vt){if(tt==null)throw Error(a(151));for(var $t=null,Re=null,Yt=k,le=k=0,ve=null,Ce=tt.next();Yt!==null&&!Ce.done;le++,Ce=tt.next()){Yt.index>le?(ve=Yt,Yt=null):ve=Yt.sibling;var zr=ot(Q,Yt,Ce.value,vt);if(zr===null){Yt===null&&(Yt=ve);break}e&&Yt&&zr.alternate===null&&i(Q,Yt),k=m(zr,k,le),Re===null?$t=zr:Re.sibling=zr,Re=zr,Yt=ve}if(Ce.done)return r(Q,Yt),Me&&Pa(Q,le),$t;if(Yt===null){for(;!Ce.done;le++,Ce=tt.next())Ce=xt(Q,Ce.value,vt),Ce!==null&&(k=m(Ce,k,le),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return Me&&Pa(Q,le),$t}for(Yt=l(Yt);!Ce.done;le++,Ce=tt.next())Ce=ut(Yt,Q,le,Ce.value,vt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?le:Ce.key),k=m(Ce,k,le),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return e&&Yt.forEach(function(z1){return i(Q,z1)}),Me&&Pa(Q,le),$t}function Ve(Q,k,tt,vt){if(typeof tt=="object"&&tt!==null&&tt.type===b&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var $t=tt.key;k!==null;){if(k.key===$t){if($t=tt.type,$t===b){if(k.tag===7){r(Q,k.sibling),vt=h(k,tt.props.children),vt.return=Q,Q=vt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&gs($t)===k.type){r(Q,k.sibling),vt=h(k,tt.props),Al(vt,tt),vt.return=Q,Q=vt;break t}r(Q,k);break}else i(Q,k);k=k.sibling}tt.type===b?(vt=hs(tt.props.children,Q.mode,vt,tt.key),vt.return=Q,Q=vt):(vt=qu(tt.type,tt.key,tt.props,null,Q.mode,vt),Al(vt,tt),vt.return=Q,Q=vt)}return M(Q);case E:t:{for($t=tt.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){r(Q,k.sibling),vt=h(k,tt.children||[]),vt.return=Q,Q=vt;break t}else{r(Q,k);break}else i(Q,k);k=k.sibling}vt=mh(tt,Q.mode,vt),vt.return=Q,Q=vt}return M(Q);case T:return tt=gs(tt),Ve(Q,k,tt,vt)}if(Z(tt))return Wt(Q,k,tt,vt);if(W(tt)){if($t=W(tt),typeof $t!="function")throw Error(a(150));return tt=$t.call(tt),te(Q,k,tt,vt)}if(typeof tt.then=="function")return Ve(Q,k,$u(tt),vt);if(tt.$$typeof===P)return Ve(Q,k,Ku(Q,tt),vt);tc(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(r(Q,k.sibling),vt=h(k,tt),vt.return=Q,Q=vt):(r(Q,k),vt=ph(tt,Q.mode,vt),vt.return=Q,Q=vt),M(Q)):r(Q,k)}return function(Q,k,tt,vt){try{Tl=0;var $t=Ve(Q,k,tt,vt);return so=null,$t}catch(Yt){if(Yt===ro||Yt===ju)throw Yt;var Re=Mi(29,Yt,null,Q.mode);return Re.lanes=vt,Re.return=Q,Re}}}var xs=L0(!0),O0=L0(!1),Sr=!1;function Rh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ch(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(De&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Wu(e),g0(e,null,r),i}return Xu(e,l,i,r),Wu(e)}function Rl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,gi(e,r)}}function wh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Dh=!1;function Cl(){if(Dh){var e=ao;if(e!==null)throw e}}function wl(e,i,r,l){Dh=!1;var h=e.updateQueue;Sr=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var H=w,et=H.next;H.next=null,M===null?m=et:M.next=et,M=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==M&&(w===null?mt.firstBaseUpdate=et:w.next=et,mt.lastBaseUpdate=H))}if(m!==null){var xt=h.baseState;M=0,mt=et=H=null,w=m;do{var ot=w.lane&-536870913,ut=ot!==w.lane;if(ut?(ge&ot)===ot:(l&ot)===ot){ot!==0&&ot===io&&(Dh=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Wt=e,te=w;ot=i;var Ve=r;switch(te.tag){case 1:if(Wt=te.payload,typeof Wt=="function"){xt=Wt.call(Ve,xt,ot);break t}xt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=te.payload,ot=typeof Wt=="function"?Wt.call(Ve,xt,ot):Wt,ot==null)break t;xt=v({},xt,ot);break t;case 2:Sr=!0}}ot=w.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(et=mt=ut,H=xt):mt=mt.next=ut,M|=ot;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;ut=w,w=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);mt===null&&(H=xt),h.baseState=H,h.firstBaseUpdate=et,h.lastBaseUpdate=mt,m===null&&(h.shared.lanes=0),Rr|=M,e.lanes=M,e.memoizedState=xt}}function P0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function I0(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)P0(r[e],i)}var oo=I(null),ec=I(0);function z0(e,i){e=qa,Mt(ec,e),Mt(oo,i),qa=e|i.baseLanes}function Uh(){Mt(ec,qa),Mt(oo,oo.current)}function Nh(){qa=ec.current,K(oo),K(ec)}var Ei=I(null),Wi=null;function Er(e){var i=e.alternate;Mt(_n,_n.current&1),Mt(Ei,e),Wi===null&&(i===null||oo.current!==null||i.memoizedState!==null)&&(Wi=e)}function Lh(e){Mt(_n,_n.current),Mt(Ei,e),Wi===null&&(Wi=e)}function F0(e){e.tag===22?(Mt(_n,_n.current),Mt(Ei,e),Wi===null&&(Wi=e)):br()}function br(){Mt(_n,_n.current),Mt(Ei,Ei.current)}function bi(e){K(Ei),Wi===e&&(Wi=null),K(_n)}var _n=I(0);function nc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Bd(r)||Hd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fa=0,oe=null,He=null,En=null,ic=!1,lo=!1,Ss=!1,ac=0,Dl=0,uo=null,RE=0;function hn(){throw Error(a(321))}function Oh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!yi(e[r],i[r]))return!1;return!0}function Ph(e,i,r,l,h,m){return Fa=m,oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?yg:Qh,Ss=!1,m=r(l,h),Ss=!1,lo&&(m=H0(i,r,l,h)),B0(e),m}function B0(e){F.H=Ll;var i=He!==null&&He.next!==null;if(Fa=0,En=He=oe=null,ic=!1,Dl=0,uo=null,i)throw Error(a(300));e===null||bn||(e=e.dependencies,e!==null&&Zu(e)&&(bn=!0))}function H0(e,i,r,l){oe=e;var h=0;do{if(lo&&(uo=null),Dl=0,lo=!1,25<=h)throw Error(a(301));if(h+=1,En=He=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Mg,m=i(r,l)}while(lo);return m}function CE(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Ul(i):i,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(oe.flags|=1024),i}function Ih(){var e=ac!==0;return ac=0,e}function zh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Fh(e){if(ic){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ic=!1}Fa=0,En=He=oe=null,lo=!1,Dl=ac=0,uo=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?oe.memoizedState=En=e:En=En.next=e,En}function gn(){if(He===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=En===null?oe.memoizedState:En.next;if(i!==null)En=i,He=e;else{if(e===null)throw oe.alternate===null?Error(a(467)):Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},En===null?oe.memoizedState=En=e:En=En.next=e}return En}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(e){var i=Dl;return Dl+=1,uo===null&&(uo=[]),e=D0(uo,e,i),i=oe,(En===null?i.memoizedState:En.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?yg:Qh),e}function sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ul(e);if(e.$$typeof===P)return Hn(e)}throw Error(a(438,String(e)))}function Bh(e){var i=null,r=oe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=rc(),oe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=G;return i.index++,r}function Ba(e,i){return typeof i=="function"?i(e):i}function oc(e){var i=gn();return Hh(i,He,e)}function Hh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var w=M=null,H=null,et=i,mt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(ge&xt)===xt:(Fa&xt)===xt){var ot=et.revertLane;if(ot===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===io&&(mt=!0);else if((Fa&ot)===ot){et=et.next,ot===io&&(mt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(w=H=xt,M=m):H=H.next=xt,oe.lanes|=ot,Rr|=ot;xt=et.action,Ss&&r(m,xt),m=et.hasEagerState?et.eagerState:r(m,xt)}else ot={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(w=H=ot,M=m):H=H.next=ot,oe.lanes|=xt,Rr|=xt;et=et.next}while(et!==null&&et!==i);if(H===null?M=m:H.next=w,!yi(m,e.memoizedState)&&(bn=!0,mt&&(r=ao,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=H,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Gh(e){var i=gn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var M=h=h.next;do m=e(m,M.action),M=M.next;while(M!==h);yi(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function G0(e,i,r){var l=oe,h=gn(),m=Me;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var M=!yi((He||h).memoizedState,r);if(M&&(h.memoizedState=r,bn=!0),h=h.queue,Xh(X0.bind(null,l,h,e),[e]),h.getSnapshot!==i||M||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,co(9,{destroy:void 0},k0.bind(null,l,h,r,i),null),Xe===null)throw Error(a(349));m||(Fa&127)!==0||V0(l,i,r)}return r}function V0(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=oe.updateQueue,i===null?(i=rc(),oe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function k0(e,i,r,l){i.value=r,i.getSnapshot=l,W0(i)&&q0(e)}function X0(e,i,r){return r(function(){W0(i)&&q0(e)})}function W0(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!yi(e,r)}catch{return!0}}function q0(e){var i=fs(e,2);i!==null&&ui(i,e,2)}function Vh(e){var i=$n();if(typeof e=="function"){var r=e;if(e=r(),Ss){Ct(!0);try{r()}finally{Ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:e},i}function Y0(e,i,r,l){return e.baseState=r,Hh(e,He,typeof l=="function"?l:Ba)}function wE(e,i,r,l,h){if(cc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};F.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,Z0(i,m)):(m.next=r.next,i.pending=r.next=m)}}function Z0(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=F.T,M={};F.T=M;try{var w=r(h,l),H=F.S;H!==null&&H(M,w),K0(e,i,w)}catch(et){kh(e,i,et)}finally{m!==null&&M.types!==null&&(m.types=M.types),F.T=m}}else try{m=r(h,l),K0(e,i,m)}catch(et){kh(e,i,et)}}function K0(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Q0(e,i,l)},function(l){return kh(e,i,l)}):Q0(e,i,r)}function Q0(e,i,r){i.status="fulfilled",i.value=r,j0(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Z0(e,r)))}function kh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,j0(i),i=i.next;while(i!==l)}e.action=null}function j0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function J0(e,i){return i}function $0(e,i){if(Me){var r=Xe.formState;if(r!==null){t:{var l=oe;if(Me){if(Qe){e:{for(var h=Qe,m=Xi;h.nodeType!==8;){if(!m){h=null;break e}if(h=qi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Qe=qi(h.nextSibling),l=h.data==="F!";break t}}vr(l)}l=!1}l&&(i=r[0])}}return r=$n(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:J0,lastRenderedState:i},r.queue=l,r=vg.bind(null,oe,l),l.dispatch=r,l=Vh(!1),m=Kh.bind(null,oe,!1,l.queue),l=$n(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=wE.bind(null,oe,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function tg(e){var i=gn();return eg(i,He,e)}function eg(e,i,r){if(i=Hh(e,i,J0)[0],e=oc(Ba)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ul(i)}catch(M){throw M===ro?ju:M}else l=i;i=gn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(oe.flags|=2048,co(9,{destroy:void 0},DE.bind(null,h,r),null)),[l,m,e]}function DE(e,i){e.action=i}function ng(e){var i=gn(),r=He;if(r!==null)return eg(i,r,e);gn(),i=i.memoizedState,r=gn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function co(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=oe.updateQueue,i===null&&(i=rc(),oe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function ig(){return gn().memoizedState}function lc(e,i,r,l){var h=$n();oe.flags|=e,h.memoizedState=co(1|i,{destroy:void 0},r,l===void 0?null:l)}function uc(e,i,r,l){var h=gn();l=l===void 0?null:l;var m=h.memoizedState.inst;He!==null&&l!==null&&Oh(l,He.memoizedState.deps)?h.memoizedState=co(i,m,r,l):(oe.flags|=e,h.memoizedState=co(1|i,m,r,l))}function ag(e,i){lc(8390656,8,e,i)}function Xh(e,i){uc(2048,8,e,i)}function UE(e){oe.flags|=4;var i=oe.updateQueue;if(i===null)i=rc(),oe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function rg(e){var i=gn().memoizedState;return UE({ref:i,nextImpl:e}),function(){if((De&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function sg(e,i){return uc(4,2,e,i)}function og(e,i){return uc(4,4,e,i)}function lg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ug(e,i,r){r=r!=null?r.concat([e]):null,uc(4,4,lg.bind(null,i,e),r)}function Wh(){}function cg(e,i){var r=gn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Oh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function fg(e,i){var r=gn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Oh(i,l[1]))return l[0];if(l=e(),Ss){Ct(!0);try{e()}finally{Ct(!1)}}return r.memoizedState=[l,i],l}function qh(e,i,r){return r===void 0||(Fa&1073741824)!==0&&(ge&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=hv(),oe.lanes|=e,Rr|=e,r)}function hg(e,i,r,l){return yi(r,i)?r:oo.current!==null?(e=qh(e,r,l),yi(e,i)||(bn=!0),e):(Fa&42)===0||(Fa&1073741824)!==0&&(ge&261930)===0?(bn=!0,e.memoizedState=r):(e=hv(),oe.lanes|=e,Rr|=e,i)}function dg(e,i,r,l,h){var m=B.p;B.p=m!==0&&8>m?m:8;var M=F.T,w={};F.T=w,Kh(e,!1,i,r);try{var H=h(),et=F.S;if(et!==null&&et(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=AE(H,l);Nl(e,i,mt,Ri(e))}else Nl(e,i,l,Ri(e))}catch(xt){Nl(e,i,{then:function(){},status:"rejected",reason:xt},Ri())}finally{B.p=m,M!==null&&w.types!==null&&(M.types=w.types),F.T=M}}function NE(){}function Yh(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=pg(e).queue;dg(e,h,i,J,r===null?NE:function(){return mg(e),r(l)})}function pg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:J},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function mg(e){var i=pg(e);i.next===null&&(i=e.alternate.memoizedState),Nl(e,i.next.queue,{},Ri())}function Zh(){return Hn(Kl)}function _g(){return gn().memoizedState}function gg(){return gn().memoizedState}function LE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ri();e=yr(r);var l=Mr(i,e,r);l!==null&&(ui(l,i,r),Rl(l,i,r)),i={cache:Eh()},e.payload=i;return}i=i.return}}function OE(e,i,r){var l=Ri();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cc(e)?xg(i,r):(r=hh(e,i,r,l),r!==null&&(ui(r,e,l),Sg(r,i,l)))}function vg(e,i,r){var l=Ri();Nl(e,i,r,l)}function Nl(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(cc(e))xg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,w=m(M,r);if(h.hasEagerState=!0,h.eagerState=w,yi(w,M))return Xu(e,i,h,0),Xe===null&&ku(),!1}catch{}if(r=hh(e,i,h,l),r!==null)return ui(r,e,l),Sg(r,i,l),!0}return!1}function Kh(e,i,r,l){if(l={lane:2,revertLane:Rd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(i)throw Error(a(479))}else i=hh(e,r,l,2),i!==null&&ui(i,e,2)}function cc(e){var i=e.alternate;return e===oe||i!==null&&i===oe}function xg(e,i){lo=ic=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Sg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,gi(e,r)}}var Ll={readContext:Hn,use:sc,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};Ll.useEffectEvent=hn;var yg={readContext:Hn,use:sc,useCallback:function(e,i){return $n().memoizedState=[e,i===void 0?null:i],e},useContext:Hn,useEffect:ag,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,lc(4194308,4,lg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return lc(4194308,4,e,i)},useInsertionEffect:function(e,i){lc(4,2,e,i)},useMemo:function(e,i){var r=$n();i=i===void 0?null:i;var l=e();if(Ss){Ct(!0);try{e()}finally{Ct(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=$n();if(r!==void 0){var h=r(i);if(Ss){Ct(!0);try{r(i)}finally{Ct(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=OE.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var i=$n();return e={current:e},i.memoizedState=e},useState:function(e){e=Vh(e);var i=e.queue,r=vg.bind(null,oe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Wh,useDeferredValue:function(e,i){var r=$n();return qh(r,e,i)},useTransition:function(){var e=Vh(!1);return e=dg.bind(null,oe,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=oe,h=$n();if(Me){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Xe===null)throw Error(a(349));(ge&127)!==0||V0(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,ag(X0.bind(null,l,m,e),[e]),l.flags|=2048,co(9,{destroy:void 0},k0.bind(null,l,m,r,i),null),r},useId:function(){var e=$n(),i=Xe.identifierPrefix;if(Me){var r=pa,l=da;r=(l&~(1<<32-Ft(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=ac++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=RE++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Zh,useFormState:$0,useActionState:$0,useOptimistic:function(e){var i=$n();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Kh.bind(null,oe,!0,r),r.dispatch=i,[e,i]},useMemoCache:Bh,useCacheRefresh:function(){return $n().memoizedState=LE.bind(null,oe)},useEffectEvent:function(e){var i=$n(),r={impl:e};return i.memoizedState=r,function(){if((De&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Qh={readContext:Hn,use:sc,useCallback:cg,useContext:Hn,useEffect:Xh,useImperativeHandle:ug,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:oc,useRef:ig,useState:function(){return oc(Ba)},useDebugValue:Wh,useDeferredValue:function(e,i){var r=gn();return hg(r,He.memoizedState,e,i)},useTransition:function(){var e=oc(Ba)[0],i=gn().memoizedState;return[typeof e=="boolean"?e:Ul(e),i]},useSyncExternalStore:G0,useId:_g,useHostTransitionStatus:Zh,useFormState:tg,useActionState:tg,useOptimistic:function(e,i){var r=gn();return Y0(r,He,e,i)},useMemoCache:Bh,useCacheRefresh:gg};Qh.useEffectEvent=rg;var Mg={readContext:Hn,use:sc,useCallback:cg,useContext:Hn,useEffect:Xh,useImperativeHandle:ug,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:Gh,useRef:ig,useState:function(){return Gh(Ba)},useDebugValue:Wh,useDeferredValue:function(e,i){var r=gn();return He===null?qh(r,e,i):hg(r,He.memoizedState,e,i)},useTransition:function(){var e=Gh(Ba)[0],i=gn().memoizedState;return[typeof e=="boolean"?e:Ul(e),i]},useSyncExternalStore:G0,useId:_g,useHostTransitionStatus:Zh,useFormState:ng,useActionState:ng,useOptimistic:function(e,i){var r=gn();return He!==null?Y0(r,He,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Bh,useCacheRefresh:gg};Mg.useEffectEvent=rg;function jh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Jh={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=Ri(),h=yr(l);h.payload=i,r!=null&&(h.callback=r),i=Mr(e,h,l),i!==null&&(ui(i,e,l),Rl(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=Ri(),h=yr(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Mr(e,h,l),i!==null&&(ui(i,e,l),Rl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Ri(),l=yr(r);l.tag=2,i!=null&&(l.callback=i),i=Mr(e,l,r),i!==null&&(ui(i,e,r),Rl(i,e,r))}};function Eg(e,i,r,l,h,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!xl(r,l)||!xl(h,m):!0}function bg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Jh.enqueueReplaceState(i,i.state,null)}function ys(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Tg(e){Vu(e)}function Ag(e){console.error(e)}function Rg(e){Vu(e)}function fc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Cg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function $h(e,i,r){return r=yr(r),r.tag=3,r.payload={element:null},r.callback=function(){fc(e,i)},r}function wg(e){return e=yr(e),e.tag=3,e}function Dg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){Cg(i,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Cg(i,r,l),typeof h!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function PE(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&no(i,r,h,!0),r=Ei.current,r!==null){switch(r.tag){case 31:case 13:return Wi===null?Ec():r.alternate===null&&dn===0&&(dn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Ju?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),bd(e,l,h)),!1;case 22:return r.flags|=65536,l===Ju?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),bd(e,l,h)),!1}throw Error(a(435,r.tag))}return bd(e,l,h),Ec(),!1}if(Me)return i=Ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==vh&&(e=Error(a(422),{cause:l}),Ml(Gi(e,r)))):(l!==vh&&(i=Error(a(423),{cause:l}),Ml(Gi(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Gi(l,r),h=$h(e.stateNode,l,h),wh(e,h),dn!==4&&(dn=2)),!1;var m=Error(a(520),{cause:l});if(m=Gi(m,r),Gl===null?Gl=[m]:Gl.push(m),dn!==4&&(dn=2),i===null)return!0;l=Gi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=$h(r.stateNode,l,e),wh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Cr===null||!Cr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=wg(h),Dg(h,e,r,l),wh(r,h),!1}r=r.return}while(r!==null);return!1}var td=Error(a(461)),bn=!1;function Gn(e,i,r,l){i.child=e===null?O0(i,null,r,l):xs(i,e.child,r,l)}function Ug(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var M={};for(var w in l)w!=="ref"&&(M[w]=l[w])}else M=l;return ms(i),l=Ph(e,i,r,M,m,h),w=Ih(),e!==null&&!bn?(zh(e,i,h),Ha(e,i,h)):(Me&&w&&_h(i),i.flags|=1,Gn(e,i,l,h),i.child)}function Ng(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!dh(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Lg(e,i,m,l,h)):(e=qu(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!ld(e,h)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:xl,r(M,l)&&e.ref===i.ref)return Ha(e,i,h)}return i.flags|=1,e=Oa(m,l),e.ref=i.ref,e.return=i,i.child=e}function Lg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(xl(m,l)&&e.ref===i.ref)if(bn=!1,i.pendingProps=l=m,ld(e,h))(e.flags&131072)!==0&&(bn=!0);else return i.lanes=e.lanes,Ha(e,i,h)}return ed(e,i,r,l,h)}function Og(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Pg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qu(i,m!==null?m.cachePool:null),m!==null?z0(i,m):Uh(),F0(i);else return l=i.lanes=536870912,Pg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Qu(i,m.cachePool),z0(i,m),br(),i.memoizedState=null):(e!==null&&Qu(i,null),Uh(),br());return Gn(e,i,h,r),i.child}function Ol(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Pg(e,i,r,l,h){var m=Th();return m=m===null?null:{parent:Mn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Qu(i,null),Uh(),F0(i),e!==null&&no(e,i,l,!0),i.childLanes=h,null}function hc(e,i){return i=pc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Ig(e,i,r){return xs(i,e.child,null,r),e=hc(i,i.pendingProps),e.flags|=2,bi(i),i.memoizedState=null,e}function IE(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Me){if(l.mode==="hidden")return e=hc(i,l),i.lanes=536870912,Ol(null,e);if(Lh(i),(e=Qe)?(e=Zv(e,Xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:_r!==null?{id:da,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},r=x0(e),r.return=i,i.child=r,Bn=i,Qe=null)):e=null,e===null)throw vr(i);return i.lanes=536870912,null}return hc(i,l)}var m=e.memoizedState;if(m!==null){var M=m.dehydrated;if(Lh(i),h)if(i.flags&256)i.flags&=-257,i=Ig(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(bn||no(e,i,r,!1),h=(r&e.childLanes)!==0,bn||h){if(l=Xe,l!==null&&(M=vi(l,r),M!==0&&M!==m.retryLane))throw m.retryLane=M,fs(e,M),ui(l,e,M),td;Ec(),i=Ig(e,i,r)}else e=m.treeContext,Qe=qi(M.nextSibling),Bn=i,Me=!0,gr=null,Xi=!1,e!==null&&M0(i,e),i=hc(i,l),i.flags|=4096;return i}return e=Oa(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function dc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function ed(e,i,r,l,h){return ms(i),r=Ph(e,i,r,l,void 0,h),l=Ih(),e!==null&&!bn?(zh(e,i,h),Ha(e,i,h)):(Me&&l&&_h(i),i.flags|=1,Gn(e,i,r,h),i.child)}function zg(e,i,r,l,h,m){return ms(i),i.updateQueue=null,r=H0(i,l,r,h),B0(e),l=Ih(),e!==null&&!bn?(zh(e,i,m),Ha(e,i,m)):(Me&&l&&_h(i),i.flags|=1,Gn(e,i,r,m),i.child)}function Fg(e,i,r,l,h){if(ms(i),i.stateNode===null){var m=Js,M=r.contextType;typeof M=="object"&&M!==null&&(m=Hn(M)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Jh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Rh(i),M=r.contextType,m.context=typeof M=="object"&&M!==null?Hn(M):Js,m.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(jh(i,r,M,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Jh.enqueueReplaceState(m,m.state,null),wl(i,l,m,h),Cl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var w=i.memoizedProps,H=ys(r,w);m.props=H;var et=m.context,mt=r.contextType;M=Js,typeof mt=="object"&&mt!==null&&(M=Hn(mt));var xt=r.getDerivedStateFromProps;mt=typeof xt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||et!==M)&&bg(i,m,l,M),Sr=!1;var ot=i.memoizedState;m.state=ot,wl(i,l,m,h),Cl(),et=i.memoizedState,w||ot!==et||Sr?(typeof xt=="function"&&(jh(i,r,xt,l),et=i.memoizedState),(H=Sr||Eg(i,r,H,l,ot,et,M))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),m.props=l,m.state=et,m.context=M,l=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Ch(e,i),M=i.memoizedProps,mt=ys(r,M),m.props=mt,xt=i.pendingProps,ot=m.context,et=r.contextType,H=Js,typeof et=="object"&&et!==null&&(H=Hn(et)),w=r.getDerivedStateFromProps,(et=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==xt||ot!==H)&&bg(i,m,l,H),Sr=!1,ot=i.memoizedState,m.state=ot,wl(i,l,m,h),Cl();var ut=i.memoizedState;M!==xt||ot!==ut||Sr||e!==null&&e.dependencies!==null&&Zu(e.dependencies)?(typeof w=="function"&&(jh(i,r,w,l),ut=i.memoizedState),(mt=Sr||Eg(i,r,mt,l,ot,ut,H)||e!==null&&e.dependencies!==null&&Zu(e.dependencies))?(et||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ut,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ut,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ut),m.props=l,m.state=ut,m.context=H,l=mt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,dc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=xs(i,e.child,null,h),i.child=xs(i,null,r,h)):Gn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Ha(e,i,h),e}function Bg(e,i,r,l){return ds(),i.flags|=256,Gn(e,i,r,l),i.child}var nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function id(e){return{baseLanes:e,cachePool:C0()}}function ad(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Ai),e}function Hg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),M&&(h=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Me){if(h?Er(i):br(),(e=Qe)?(e=Zv(e,Xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:_r!==null?{id:da,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},r=x0(e),r.return=i,i.child=r,Bn=i,Qe=null)):e=null,e===null)throw vr(i);return Hd(e)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,h?(br(),h=i.mode,w=pc({mode:"hidden",children:w},h),l=hs(l,h,r,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=id(r),l.childLanes=ad(e,M,r),i.memoizedState=nd,Ol(null,l)):(Er(i),rd(i,w))}var H=e.memoizedState;if(H!==null&&(w=H.dehydrated,w!==null)){if(m)i.flags&256?(Er(i),i.flags&=-257,i=sd(e,i,r)):i.memoizedState!==null?(br(),i.child=e.child,i.flags|=128,i=null):(br(),w=l.fallback,h=i.mode,l=pc({mode:"visible",children:l.children},h),w=hs(w,h,r,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,xs(i,e.child,null,r),l=i.child,l.memoizedState=id(r),l.childLanes=ad(e,M,r),i.memoizedState=nd,i=Ol(null,l));else if(Er(i),Hd(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var et=M.dgst;M=et,l=Error(a(419)),l.stack="",l.digest=M,Ml({value:l,source:null,stack:null}),i=sd(e,i,r)}else if(bn||no(e,i,r,!1),M=(r&e.childLanes)!==0,bn||M){if(M=Xe,M!==null&&(l=vi(M,r),l!==0&&l!==H.retryLane))throw H.retryLane=l,fs(e,l),ui(M,e,l),td;Bd(w)||Ec(),i=sd(e,i,r)}else Bd(w)?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,Qe=qi(w.nextSibling),Bn=i,Me=!0,gr=null,Xi=!1,e!==null&&M0(i,e),i=rd(i,l.children),i.flags|=4096);return i}return h?(br(),w=l.fallback,h=i.mode,H=e.child,et=H.sibling,l=Oa(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,et!==null?w=Oa(et,w):(w=hs(w,h,r,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Ol(null,l),l=i.child,w=e.child.memoizedState,w===null?w=id(r):(h=w.cachePool,h!==null?(H=Mn._currentValue,h=h.parent!==H?{parent:H,pool:H}:h):h=C0(),w={baseLanes:w.baseLanes|r,cachePool:h}),l.memoizedState=w,l.childLanes=ad(e,M,r),i.memoizedState=nd,Ol(e.child,l)):(Er(i),r=e.child,e=r.sibling,r=Oa(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=r,i.memoizedState=null,r)}function rd(e,i){return i=pc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function pc(e,i){return e=Mi(22,e,null,i),e.lanes=0,e}function sd(e,i,r){return xs(i,e.child,null,r),e=rd(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Gg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),yh(e.return,i,r)}function od(e,i,r,l,h,m){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=h,M.treeForkCount=m)}function Vg(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var M=_n.current,w=(M&2)!==0;if(w?(M=M&1|2,i.flags|=128):M&=1,Mt(_n,M),Gn(e,i,l,r),l=Me?yl:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gg(e,r,i);else if(e.tag===19)Gg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&nc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),od(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&nc(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}od(i,!0,r,null,m,l);break;case"together":od(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ha(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Rr|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(no(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Oa(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Oa(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function ld(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Zu(e)))}function zE(e,i,r){switch(i.tag){case 3:bt(i,i.stateNode.containerInfo),xr(i,Mn,e.memoizedState.cache),ds();break;case 27:case 5:ee(i);break;case 4:bt(i,i.stateNode.containerInfo);break;case 10:xr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Lh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Er(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Hg(e,i,r):(Er(i),e=Ha(e,i,r),e!==null?e.sibling:null);Er(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(no(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return Vg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Mt(_n,_n.current),l)break;return null;case 22:return i.lanes=0,Og(e,i,r,i.pendingProps);case 24:xr(i,Mn,e.memoizedState.cache)}return Ha(e,i,r)}function kg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)bn=!0;else{if(!ld(e,r)&&(i.flags&128)===0)return bn=!1,zE(e,i,r);bn=(e.flags&131072)!==0}else bn=!1,Me&&(i.flags&1048576)!==0&&y0(i,yl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=gs(i.elementType),i.type=e,typeof e=="function")dh(e)?(l=ys(e,l),i.tag=1,i=Fg(null,i,e,l,r)):(i.tag=0,i=ed(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===R){i.tag=11,i=Ug(null,i,e,l,r);break t}else if(h===L){i.tag=14,i=Ng(null,i,e,l,r);break t}}throw i=ct(e)||e,Error(a(306,i,""))}}return i;case 0:return ed(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=ys(l,i.pendingProps),Fg(e,i,l,h,r);case 3:t:{if(bt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Ch(e,i),wl(i,l,null,r);var M=i.memoizedState;if(l=M.cache,xr(i,Mn,l),l!==m.cache&&Mh(i,[Mn],r,!0),Cl(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Bg(e,i,l,r);break t}else if(l!==h){h=Gi(Error(a(424)),i),Ml(h),i=Bg(e,i,l,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=qi(e.firstChild),Bn=i,Me=!0,gr=null,Xi=!0,r=O0(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ds(),l===h){i=Ha(e,i,r);break t}Gn(e,i,l,r)}i=i.child}return i;case 26:return dc(e,i),e===null?(r=tx(i.type,null,i.pendingProps,null))?i.memoizedState=r:Me||(r=i.type,e=i.pendingProps,l=Dc(at.current).createElement(r),l[Sn]=i,l[Fn]=e,Vn(l,r,e),yn(l),i.stateNode=l):i.memoizedState=tx(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ee(i),e===null&&Me&&(l=i.stateNode=jv(i.type,i.pendingProps,at.current),Bn=i,Xi=!0,h=Qe,Nr(i.type)?(Gd=h,Qe=qi(l.firstChild)):Qe=h),Gn(e,i,i.pendingProps.children,r),dc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Me&&((h=l=Qe)&&(l=d1(l,i.type,i.pendingProps,Xi),l!==null?(i.stateNode=l,Bn=i,Qe=qi(l.firstChild),Xi=!1,h=!0):h=!1),h||vr(i)),ee(i),h=i.type,m=i.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,Id(h,m)?l=null:M!==null&&Id(h,M)&&(i.flags|=32),i.memoizedState!==null&&(h=Ph(e,i,CE,null,null,r),Kl._currentValue=h),dc(e,i),Gn(e,i,l,r),i.child;case 6:return e===null&&Me&&((e=r=Qe)&&(r=p1(r,i.pendingProps,Xi),r!==null?(i.stateNode=r,Bn=i,Qe=null,e=!0):e=!1),e||vr(i)),null;case 13:return Hg(e,i,r);case 4:return bt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=xs(i,null,l,r):Gn(e,i,l,r),i.child;case 11:return Ug(e,i,i.type,i.pendingProps,r);case 7:return Gn(e,i,i.pendingProps,r),i.child;case 8:return Gn(e,i,i.pendingProps.children,r),i.child;case 12:return Gn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,xr(i,i.type,l.value),Gn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ms(i),h=Hn(h),l=l(h),i.flags|=1,Gn(e,i,l,r),i.child;case 14:return Ng(e,i,i.type,i.pendingProps,r);case 15:return Lg(e,i,i.type,i.pendingProps,r);case 19:return Vg(e,i,r);case 31:return IE(e,i,r);case 22:return Og(e,i,r,i.pendingProps);case 24:return ms(i),l=Hn(Mn),e===null?(h=Th(),h===null&&(h=Xe,m=Eh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},Rh(i),xr(i,Mn,h)):((e.lanes&r)!==0&&(Ch(e,i),wl(i,null,null,r),Cl()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),xr(i,Mn,l)):(l=m.cache,xr(i,Mn,l),l!==h.cache&&Mh(i,[Mn],r,!0))),Gn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ga(e){e.flags|=4}function ud(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(_v())e.flags|=8192;else throw vs=Ju,Ah}else e.flags&=-16777217}function Xg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rx(i))if(_v())e.flags|=8192;else throw vs=Ju,Ah}function mc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Et():536870912,e.lanes|=i,mo|=i)}function Pl(e,i){if(!Me)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function FE(e,i,r){var l=i.pendingProps;switch(gh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),za(Mn),Ht(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(i)?Ga(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xh())),je(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Ga(i),m!==null?(je(i),Xg(i,m)):(je(i),ud(i,h,null,l,r))):m?m!==e.memoizedState?(Ga(i),je(i),Xg(i,m)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ga(i),je(i),ud(i,h,e,l,r)),null;case 27:if(Qt(i),r=at.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=Tt.current,eo(i)?E0(i):(e=jv(h,l,r),i.stateNode=e,Ga(i))}return je(i),null;case 5:if(Qt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(m=Tt.current,eo(i))E0(i);else{var M=Dc(at.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?M.createElement(h,{is:l.is}):M.createElement(h)}}m[Sn]=i,m[Fn]=l;t:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break t;for(;M.sibling===null;){if(M.return===null||M.return===i)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=m;t:switch(Vn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ga(i)}}return je(i),ud(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ga(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=at.current,eo(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=Bn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Sn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Hv(e.nodeValue,r)),e||vr(i,!0)}else e=Dc(e).createTextNode(l),e[Sn]=i,i.stateNode=e}return je(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=eo(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Sn]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else r=xh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(bi(i),i):(bi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=eo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Sn]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),h=!1}else h=xh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(bi(i),i):(bi(i),null)}return bi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),mc(i,i.updateQueue),je(i),null);case 4:return Ht(),e===null&&Ud(i.stateNode.containerInfo),je(i),null;case 10:return za(i.type),je(i),null;case 19:if(K(_n),l=i.memoizedState,l===null)return je(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Pl(l,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=nc(e),m!==null){for(i.flags|=128,Pl(l,!1),e=m.updateQueue,i.updateQueue=e,mc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)v0(r,e),r=r.sibling;return Mt(_n,_n.current&1|2),Me&&Pa(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Be()>Sc&&(i.flags|=128,h=!0,Pl(l,!1),i.lanes=4194304)}else{if(!h)if(e=nc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,mc(i,e),Pl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Me)return je(i),null}else 2*Be()-l.renderingStartTime>Sc&&r!==536870912&&(i.flags|=128,h=!0,Pl(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Be(),e.sibling=null,r=_n.current,Mt(_n,h?r&1|2:r&1),Me&&Pa(i,l.treeForkCount),e):(je(i),null);case 22:case 23:return bi(i),Nh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),r=i.updateQueue,r!==null&&mc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&K(_s),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),za(Mn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function BE(e,i){switch(gh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return za(Mn),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Qt(i),null;case 31:if(i.memoizedState!==null){if(bi(i),i.alternate===null)throw Error(a(340));ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(bi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(_n),null;case 4:return Ht(),null;case 10:return za(i.type),null;case 22:case 23:return bi(i),Nh(),e!==null&&K(_s),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return za(Mn),null;case 25:return null;default:return null}}function Wg(e,i){switch(gh(i),i.tag){case 3:za(Mn),Ht();break;case 26:case 27:case 5:Qt(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&bi(i);break;case 13:bi(i);break;case 19:K(_n);break;case 10:za(i.type);break;case 22:case 23:bi(i),Nh(),e!==null&&K(_s);break;case 24:za(Mn)}}function Il(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==h)}}catch(w){ze(i,i.return,w)}}function Tr(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var M=l.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,h=i;var H=r,et=w;try{et()}catch(mt){ze(h,H,mt)}}}l=l.next}while(l!==m)}}catch(mt){ze(i,i.return,mt)}}function qg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{I0(i,r)}catch(l){ze(e,e.return,l)}}}function Yg(e,i,r){r.props=ys(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){ze(e,i,l)}}function zl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){ze(e,i,h)}}function ma(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){ze(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){ze(e,i,h)}else r.current=null}function Zg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){ze(e,e.return,h)}}function cd(e,i,r){try{var l=e.stateNode;o1(l,e.type,r,i),l[Fn]=i}catch(h){ze(e,e.return,h)}}function Kg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Nr(e.type)||e.tag===4}function fd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Nr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Na));else if(l!==4&&(l===27&&Nr(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(hd(e,i,r),e=e.sibling;e!==null;)hd(e,i,r),e=e.sibling}function _c(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Nr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(_c(e,i,r),e=e.sibling;e!==null;)_c(e,i,r),e=e.sibling}function Qg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Vn(i,l,r),i[Sn]=e,i[Fn]=r}catch(m){ze(e,e.return,m)}}var Va=!1,Tn=!1,dd=!1,jg=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function HE(e,i){if(e=e.containerInfo,Od=zc,e=u0(e),sh(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,w=-1,H=-1,et=0,mt=0,xt=e,ot=null;e:for(;;){for(var ut;xt!==r||h!==0&&xt.nodeType!==3||(w=M+h),xt!==m||l!==0&&xt.nodeType!==3||(H=M+l),xt.nodeType===3&&(M+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)ot=xt,xt=ut;for(;;){if(xt===e)break e;if(ot===r&&++et===h&&(w=M),ot===m&&++mt===l&&(H=M),(ut=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ut}r=w===-1||H===-1?null:{start:w,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pd={focusedElem:e,selectionRange:r},zc=!1,Ln=i;Ln!==null;)if(i=Ln,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ln=e;else for(;Ln!==null;){switch(i=Ln,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Wt=ys(r.type,h);e=l.getSnapshotBeforeUpdate(Wt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){ze(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Fd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Ln=e;break}Ln=i.return}}function Jg(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Xa(e,r),l&4&&Il(5,r);break;case 1:if(Xa(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(M){ze(r,r.return,M)}else{var h=ys(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ze(r,r.return,M)}}l&64&&qg(r),l&512&&zl(r,r.return);break;case 3:if(Xa(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{I0(e,i)}catch(M){ze(r,r.return,M)}}break;case 27:i===null&&l&4&&Qg(r);case 26:case 5:Xa(e,r),i===null&&l&4&&Zg(r),l&512&&zl(r,r.return);break;case 12:Xa(e,r);break;case 31:Xa(e,r),l&4&&ev(e,r);break;case 13:Xa(e,r),l&4&&nv(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=KE.bind(null,r),m1(e,r))));break;case 22:if(l=r.memoizedState!==null||Va,!l){i=i!==null&&i.memoizedState!==null||Tn,h=Va;var m=Tn;Va=l,(Tn=i)&&!m?Wa(e,r,(r.subtreeFlags&8772)!==0):Xa(e,r),Va=h,Tn=m}break;case 30:break;default:Xa(e,r)}}function $g(e){var i=e.alternate;i!==null&&(e.alternate=null,$g(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&hr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,ri=!1;function ka(e,i,r){for(r=r.child;r!==null;)tv(e,i,r),r=r.sibling}function tv(e,i,r){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,r)}catch{}switch(r.tag){case 26:Tn||ma(r,i),ka(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Tn||ma(r,i);var l=en,h=ri;Nr(r.type)&&(en=r.stateNode,ri=!1),ka(e,i,r),ql(r.stateNode),en=l,ri=h;break;case 5:Tn||ma(r,i);case 6:if(l=en,h=ri,en=null,ka(e,i,r),en=l,ri=h,en!==null)if(ri)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(m){ze(r,i,m)}else try{en.removeChild(r.stateNode)}catch(m){ze(r,i,m)}break;case 18:en!==null&&(ri?(e=en,qv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Eo(e)):qv(en,r.stateNode));break;case 4:l=en,h=ri,en=r.stateNode.containerInfo,ri=!0,ka(e,i,r),en=l,ri=h;break;case 0:case 11:case 14:case 15:Tr(2,r,i),Tn||Tr(4,r,i),ka(e,i,r);break;case 1:Tn||(ma(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Yg(r,i,l)),ka(e,i,r);break;case 21:ka(e,i,r);break;case 22:Tn=(l=Tn)||r.memoizedState!==null,ka(e,i,r),Tn=l;break;default:ka(e,i,r)}}function ev(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Eo(e)}catch(r){ze(i,i.return,r)}}}function nv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(r){ze(i,i.return,r)}}function GE(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new jg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new jg),i;default:throw Error(a(435,e.tag))}}function gc(e,i){var r=GE(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=QE.bind(null,e,l);l.then(h,h)}})}function si(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,M=i,w=M;t:for(;w!==null;){switch(w.tag){case 27:if(Nr(w.type)){en=w.stateNode,ri=!1;break t}break;case 5:en=w.stateNode,ri=!1;break t;case 3:case 4:en=w.stateNode.containerInfo,ri=!0;break t}w=w.return}if(en===null)throw Error(a(160));tv(m,M,h),en=null,ri=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)iv(i,e),i=i.sibling}var na=null;function iv(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:si(i,e),oi(e),l&4&&(Tr(3,e,e.return),Il(3,e),Tr(5,e,e.return));break;case 1:si(i,e),oi(e),l&512&&(Tn||r===null||ma(r,r.return)),l&64&&Va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=na;if(si(i,e),oi(e),l&512&&(Tn||r===null||ma(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[fr]||m[Sn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Vn(m,l,r),m[Sn]=e,yn(m),l=m;break t;case"link":var M=ix("link","href",h).get(l+(r.href||""));if(M){for(var w=0;w<M.length;w++)if(m=M[w],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(w,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;case"meta":if(M=ix("meta","content",h).get(l+(r.content||""))){for(w=0;w<M.length;w++)if(m=M[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(w,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[Sn]=e,yn(m),l=m}e.stateNode=l}else ax(h,e.type,e.stateNode);else e.stateNode=nx(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?ax(h,e.type,e.stateNode):nx(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&cd(e,e.memoizedProps,r.memoizedProps)}break;case 27:si(i,e),oi(e),l&512&&(Tn||r===null||ma(r,r.return)),r!==null&&l&4&&cd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(si(i,e),oi(e),l&512&&(Tn||r===null||ma(r,r.return)),e.flags&32){h=e.stateNode;try{Si(h,"")}catch(Wt){ze(e,e.return,Wt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,cd(e,h,r!==null?r.memoizedProps:h)),l&1024&&(dd=!0);break;case 6:if(si(i,e),oi(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Wt){ze(e,e.return,Wt)}}break;case 3:if(Lc=null,h=na,na=Uc(i.containerInfo),si(i,e),na=h,oi(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Eo(i.containerInfo)}catch(Wt){ze(e,e.return,Wt)}dd&&(dd=!1,av(e));break;case 4:l=na,na=Uc(e.stateNode.containerInfo),si(i,e),oi(e),na=l;break;case 12:si(i,e),oi(e);break;case 31:si(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gc(e,l)));break;case 13:si(i,e),oi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xc=Be()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gc(e,l)));break;case 22:h=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,et=Va,mt=Tn;if(Va=et||h,Tn=mt||H,si(i,e),Tn=mt,Va=et,oi(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||H||Va||Tn||Ms(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){H=r=i;try{if(m=H.stateNode,h)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=H.stateNode;var xt=H.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;w.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){ze(H,H.return,Wt)}}}else if(i.tag===6){if(r===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(Wt){ze(H,H.return,Wt)}}}else if(i.tag===18){if(r===null){H=i;try{var ut=H.stateNode;h?Yv(ut,!0):Yv(H.stateNode,!1)}catch(Wt){ze(H,H.return,Wt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,gc(e,r))));break;case 19:si(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gc(e,l)));break;case 30:break;case 21:break;default:si(i,e),oi(e)}}function oi(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Kg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=fd(e);_c(e,m,h);break;case 5:var M=r.stateNode;r.flags&32&&(Si(M,""),r.flags&=-33);var w=fd(e);_c(e,w,M);break;case 3:case 4:var H=r.stateNode.containerInfo,et=fd(e);hd(e,et,H);break;default:throw Error(a(161))}}catch(mt){ze(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function av(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;av(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Jg(e,i.alternate,i),i=i.sibling}function Ms(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Tr(4,i,i.return),Ms(i);break;case 1:ma(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Yg(i,i.return,r),Ms(i);break;case 27:ql(i.stateNode);case 26:case 5:ma(i,i.return),Ms(i);break;case 22:i.memoizedState===null&&Ms(i);break;case 30:Ms(i);break;default:Ms(i)}e=e.sibling}}function Wa(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Wa(h,m,r),Il(4,m);break;case 1:if(Wa(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(et){ze(l,l.return,et)}if(l=m,h=l.updateQueue,h!==null){var w=l.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)P0(H[h],w)}catch(et){ze(l,l.return,et)}}r&&M&64&&qg(m),zl(m,m.return);break;case 27:Qg(m);case 26:case 5:Wa(h,m,r),r&&l===null&&M&4&&Zg(m),zl(m,m.return);break;case 12:Wa(h,m,r);break;case 31:Wa(h,m,r),r&&M&4&&ev(h,m);break;case 13:Wa(h,m,r),r&&M&4&&nv(h,m);break;case 22:m.memoizedState===null&&Wa(h,m,r),zl(m,m.return);break;case 30:break;default:Wa(h,m,r)}i=i.sibling}}function pd(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&El(r))}function md(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&El(e))}function ia(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)rv(e,i,r,l),i=i.sibling}function rv(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ia(e,i,r,l),h&2048&&Il(9,i);break;case 1:ia(e,i,r,l);break;case 3:ia(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&El(e)));break;case 12:if(h&2048){ia(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,M=m.id,w=m.onPostCommit;typeof w=="function"&&w(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){ze(i,i.return,H)}}else ia(e,i,r,l);break;case 31:ia(e,i,r,l);break;case 13:ia(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?ia(e,i,r,l):Fl(e,i):m._visibility&2?ia(e,i,r,l):(m._visibility|=2,fo(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&pd(M,i);break;case 24:ia(e,i,r,l),h&2048&&md(i.alternate,i);break;default:ia(e,i,r,l)}}function fo(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,M=i,w=r,H=l,et=M.flags;switch(M.tag){case 0:case 11:case 15:fo(m,M,w,H,h),Il(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?fo(m,M,w,H,h):Fl(m,M):(mt._visibility|=2,fo(m,M,w,H,h)),h&&et&2048&&pd(M.alternate,M);break;case 24:fo(m,M,w,H,h),h&&et&2048&&md(M.alternate,M);break;default:fo(m,M,w,H,h)}i=i.sibling}}function Fl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:Fl(r,l),h&2048&&pd(l.alternate,l);break;case 24:Fl(r,l),h&2048&&md(l.alternate,l);break;default:Fl(r,l)}i=i.sibling}}var Bl=8192;function ho(e,i,r){if(e.subtreeFlags&Bl)for(e=e.child;e!==null;)sv(e,i,r),e=e.sibling}function sv(e,i,r){switch(e.tag){case 26:ho(e,i,r),e.flags&Bl&&e.memoizedState!==null&&R1(r,na,e.memoizedState,e.memoizedProps);break;case 5:ho(e,i,r);break;case 3:case 4:var l=na;na=Uc(e.stateNode.containerInfo),ho(e,i,r),na=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Bl,Bl=16777216,ho(e,i,r),Bl=l):ho(e,i,r));break;default:ho(e,i,r)}}function ov(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Hl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Ln=l,uv(l,e)}ov(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lv(e),e=e.sibling}function lv(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Tr(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,vc(e)):Hl(e);break;default:Hl(e)}}function vc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Ln=l,uv(l,e)}ov(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Tr(8,i,i.return),vc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,vc(i));break;default:vc(i)}e=e.sibling}}function uv(e,i){for(;Ln!==null;){var r=Ln;switch(r.tag){case 0:case 11:case 15:Tr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:El(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Ln=l;else t:for(r=e;Ln!==null;){l=Ln;var h=l.sibling,m=l.return;if($g(l),l===r){Ln=null;break t}if(h!==null){h.return=m,Ln=h;break t}Ln=m}}}var VE={getCacheForType:function(e){var i=Hn(Mn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Hn(Mn).controller.signal}},kE=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,pe=null,ge=0,Ie=0,Ti=null,Ar=!1,po=!1,_d=!1,qa=0,dn=0,Rr=0,Es=0,gd=0,Ai=0,mo=0,Gl=null,li=null,vd=!1,xc=0,cv=0,Sc=1/0,yc=null,Cr=null,Dn=0,wr=null,_o=null,Ya=0,xd=0,Sd=null,fv=null,Vl=0,yd=null;function Ri(){return(De&2)!==0&&ge!==0?ge&-ge:F.T!==null?Rd():fl()}function hv(){if(Ai===0)if((ge&536870912)===0||Me){var e=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),Ai=e}else Ai=536870912;return e=Ei.current,e!==null&&(e.flags|=32),Ai}function ui(e,i,r){(e===Xe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(go(e,0),Dr(e,ge,Ai,!1)),Vt(e,r),((De&2)===0||e!==Xe)&&(e===Xe&&((De&2)===0&&(Es|=r),dn===4&&Dr(e,ge,Ai,!1)),_a(e))}function dv(e,i,r){if((De&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||wt(e,i),h=l?qE(e,i):Ed(e,i,!0),m=l;do{if(h===0){po&&!l&&Dr(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!XE(r)){h=Ed(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var w=e;h=Gl;var H=w.current.memoizedState.isDehydrated;if(H&&(go(w,M).flags|=256),M=Ed(w,M,!1),M!==2){if(_d&&!H){w.errorRecoveryDisabledLanes|=m,Es|=m,h=4;break t}m=li,li=h,m!==null&&(li===null?li=m:li.push.apply(li,m))}h=M}if(m=!1,h!==2)continue}}if(h===1){go(e,0),Dr(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Dr(l,i,Ai,!Ar);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=xc+300-Be(),10<h)){if(Dr(l,i,Ai,!Ar),_t(l,0,!0)!==0)break t;Ya=i,l.timeoutHandle=Xv(pv.bind(null,l,r,li,yc,vd,i,Ai,Es,mo,Ar,m,"Throttled",-0,0),h);break t}pv(l,r,li,yc,vd,i,Ai,Es,mo,Ar,m,null,-0,0)}}break}while(!0);_a(e)}function pv(e,i,r,l,h,m,M,w,H,et,mt,xt,ot,ut){if(e.timeoutHandle=-1,xt=i.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Na},sv(i,m,xt);var Wt=(m&62914560)===m?xc-Be():(m&4194048)===m?cv-Be():0;if(Wt=C1(xt,Wt),Wt!==null){Ya=m,e.cancelPendingCommit=Wt(Mv.bind(null,e,i,m,r,l,h,M,w,H,mt,xt,null,ot,ut)),Dr(e,m,M,!et);return}}Mv(e,i,m,r,l,h,M,w,H)}function XE(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!yi(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Dr(e,i,r,l){i&=~gd,i&=~Es,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-Ft(h),M=1<<m;l[m]=-1,h&=~M}r!==0&&Ne(e,r,i)}function Mc(){return(De&6)===0?(kl(0),!1):!0}function Md(){if(pe!==null){if(Ie===0)var e=pe.return;else e=pe,Ia=ps=null,Fh(e),so=null,Tl=0,e=pe;for(;e!==null;)Wg(e.alternate,e),e=e.return;pe=null}}function go(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,c1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ya=0,Md(),Xe=e,pe=r=Oa(e.current,null),ge=i,Ie=0,Ti=null,Ar=!1,po=wt(e,i),_d=!1,mo=Ai=gd=Es=Rr=dn=0,li=Gl=null,vd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ft(l),m=1<<h;i|=e[h],l&=~m}return qa=i,ku(),r}function mv(e,i){oe=null,F.H=Ll,i===ro||i===ju?(i=U0(),Ie=3):i===Ah?(i=U0(),Ie=4):Ie=i===td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ti=i,pe===null&&(dn=1,fc(e,Gi(i,e.current)))}function _v(){var e=Ei.current;return e===null?!0:(ge&4194048)===ge?Wi===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Wi:!1}function gv(){var e=F.H;return F.H=Ll,e===null?Ll:e}function vv(){var e=F.A;return F.A=VE,e}function Ec(){dn=4,Ar||(ge&4194048)!==ge&&Ei.current!==null||(po=!0),(Rr&134217727)===0&&(Es&134217727)===0||Xe===null||Dr(Xe,ge,Ai,!1)}function Ed(e,i,r){var l=De;De|=2;var h=gv(),m=vv();(Xe!==e||ge!==i)&&(yc=null,go(e,i)),i=!1;var M=dn;t:do try{if(Ie!==0&&pe!==null){var w=pe,H=Ti;switch(Ie){case 8:Md(),M=6;break t;case 3:case 2:case 9:case 6:Ei.current===null&&(i=!0);var et=Ie;if(Ie=0,Ti=null,vo(e,w,H,et),r&&po){M=0;break t}break;default:et=Ie,Ie=0,Ti=null,vo(e,w,H,et)}}WE(),M=dn;break}catch(mt){mv(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Ia=ps=null,De=l,F.H=h,F.A=m,pe===null&&(Xe=null,ge=0,ku()),M}function WE(){for(;pe!==null;)xv(pe)}function qE(e,i){var r=De;De|=2;var l=gv(),h=vv();Xe!==e||ge!==i?(yc=null,Sc=Be()+500,go(e,i)):po=wt(e,i);t:do try{if(Ie!==0&&pe!==null){i=pe;var m=Ti;e:switch(Ie){case 1:Ie=0,Ti=null,vo(e,i,m,1);break;case 2:case 9:if(w0(m)){Ie=0,Ti=null,Sv(i);break}i=function(){Ie!==2&&Ie!==9||Xe!==e||(Ie=7),_a(e)},m.then(i,i);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:w0(m)?(Ie=0,Ti=null,Sv(i)):(Ie=0,Ti=null,vo(e,i,m,7));break;case 5:var M=null;switch(pe.tag){case 26:M=pe.memoizedState;case 5:case 27:var w=pe;if(M?rx(M):w.stateNode.complete){Ie=0,Ti=null;var H=w.sibling;if(H!==null)pe=H;else{var et=w.return;et!==null?(pe=et,bc(et)):pe=null}break e}}Ie=0,Ti=null,vo(e,i,m,5);break;case 6:Ie=0,Ti=null,vo(e,i,m,6);break;case 8:Md(),dn=6;break t;default:throw Error(a(462))}}YE();break}catch(mt){mv(e,mt)}while(!0);return Ia=ps=null,F.H=l,F.A=h,De=r,pe!==null?0:(Xe=null,ge=0,ku(),dn)}function YE(){for(;pe!==null&&!fn();)xv(pe)}function xv(e){var i=kg(e.alternate,e,qa);e.memoizedProps=e.pendingProps,i===null?bc(e):pe=i}function Sv(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=zg(r,i,i.pendingProps,i.type,void 0,ge);break;case 11:i=zg(r,i,i.pendingProps,i.type.render,i.ref,ge);break;case 5:Fh(i);default:Wg(r,i),i=pe=v0(i,qa),i=kg(r,i,qa)}e.memoizedProps=e.pendingProps,i===null?bc(e):pe=i}function vo(e,i,r,l){Ia=ps=null,Fh(i),so=null,Tl=0;var h=i.return;try{if(PE(e,h,i,r,ge)){dn=1,fc(e,Gi(r,e.current)),pe=null;return}}catch(m){if(h!==null)throw pe=h,m;dn=1,fc(e,Gi(r,e.current)),pe=null;return}i.flags&32768?(Me||l===1?e=!0:po||(ge&536870912)!==0?e=!1:(Ar=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),yv(i,e)):bc(i)}function bc(e){var i=e;do{if((i.flags&32768)!==0){yv(i,Ar);return}e=i.return;var r=FE(i.alternate,i,qa);if(r!==null){pe=r;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);dn===0&&(dn=5)}function yv(e,i){do{var r=BE(e.alternate,e);if(r!==null){r.flags&=32767,pe=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=r}while(e!==null);dn=6,pe=null}function Mv(e,i,r,l,h,m,M,w,H){e.cancelPendingCommit=null;do Tc();while(Dn!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=fh,Je(e,r,m,M,w,H),e===Xe&&(pe=Xe=null,ge=0),_o=i,wr=e,Ya=r,xd=m,Sd=h,fv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jE(j,function(){return Rv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=B.p,B.p=2,M=De,De|=4;try{HE(e,i,r)}finally{De=M,B.p=h,F.T=l}}Dn=1,Ev(),bv(),Tv()}}function Ev(){if(Dn===1){Dn=0;var e=wr,i=_o,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var l=B.p;B.p=2;var h=De;De|=4;try{iv(i,e);var m=Pd,M=u0(e.containerInfo),w=m.focusedElem,H=m.selectionRange;if(M!==w&&w&&w.ownerDocument&&l0(w.ownerDocument.documentElement,w)){if(H!==null&&sh(w)){var et=H.start,mt=H.end;if(mt===void 0&&(mt=et),"selectionStart"in w)w.selectionStart=et,w.selectionEnd=Math.min(mt,w.value.length);else{var xt=w.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Wt=w.textContent.length,te=Math.min(H.start,Wt),Ve=H.end===void 0?te:Math.min(H.end,Wt);!ut.extend&&te>Ve&&(M=Ve,Ve=te,te=M);var Q=o0(w,te),k=o0(w,Ve);if(Q&&k&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var tt=xt.createRange();tt.setStart(Q.node,Q.offset),ut.removeAllRanges(),te>Ve?(ut.addRange(tt),ut.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ut.addRange(tt))}}}}for(xt=[],ut=w;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<xt.length;w++){var vt=xt[w];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}zc=!!Od,Pd=Od=null}finally{De=h,B.p=l,F.T=r}}e.current=i,Dn=2}}function bv(){if(Dn===2){Dn=0;var e=wr,i=_o,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var l=B.p;B.p=2;var h=De;De|=4;try{Jg(e,i.alternate,i)}finally{De=h,B.p=l,F.T=r}}Dn=3}}function Tv(){if(Dn===4||Dn===3){Dn=0,Y();var e=wr,i=_o,r=Ya,l=fv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Dn=5:(Dn=0,_o=wr=null,Av(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Cr=null),cl(r),i=i.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=B.p,B.p=2,F.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var w=l[M];m(w.value,{componentStack:w.stack})}}finally{F.T=i,B.p=h}}(Ya&3)!==0&&Tc(),_a(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===yd?Vl++:(Vl=0,yd=e):Vl=0,kl(0)}}function Av(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,El(i)))}function Tc(){return Ev(),bv(),Tv(),Rv()}function Rv(){if(Dn!==5)return!1;var e=wr,i=xd;xd=0;var r=cl(Ya),l=F.T,h=B.p;try{B.p=32>r?32:r,F.T=null,r=Sd,Sd=null;var m=wr,M=Ya;if(Dn=0,_o=wr=null,Ya=0,(De&6)!==0)throw Error(a(331));var w=De;if(De|=4,lv(m.current),rv(m,m.current,M,r),De=w,kl(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,m)}catch{}return!0}finally{B.p=h,F.T=l,Av(e,i)}}function Cv(e,i,r){i=Gi(r,i),i=$h(e.stateNode,i,2),e=Mr(e,i,2),e!==null&&(Vt(e,2),_a(e))}function ze(e,i,r){if(e.tag===3)Cv(e,e,r);else for(;i!==null;){if(i.tag===3){Cv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Cr===null||!Cr.has(l))){e=Gi(r,e),r=wg(2),l=Mr(i,r,2),l!==null&&(Dg(r,l,i,e),Vt(l,2),_a(l));break}}i=i.return}}function bd(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new kE;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(_d=!0,h.add(r),e=ZE.bind(null,e,i,r),i.then(e,e))}function ZE(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(ge&r)===r&&(dn===4||dn===3&&(ge&62914560)===ge&&300>Be()-xc?(De&2)===0&&go(e,0):gd|=r,mo===ge&&(mo=0)),_a(e)}function wv(e,i){i===0&&(i=Et()),e=fs(e,i),e!==null&&(Vt(e,i),_a(e))}function KE(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),wv(e,r)}function QE(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),wv(e,r)}function jE(e,i){return mn(e,i)}var Ac=null,xo=null,Td=!1,Rc=!1,Ad=!1,Ur=0;function _a(e){e!==xo&&e.next===null&&(xo===null?Ac=xo=e:xo=xo.next=e),Rc=!0,Td||(Td=!0,$E())}function kl(e,i){if(!Ad&&Rc){Ad=!0;do for(var r=!1,l=Ac;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var M=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-Ft(42|e)+1)-1,m&=h&~(M&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,Lv(l,m))}else m=ge,m=_t(l,l===Xe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||wt(l,m)||(r=!0,Lv(l,m));l=l.next}while(r);Ad=!1}}function JE(){Dv()}function Dv(){Rc=Td=!1;var e=0;Ur!==0&&u1()&&(e=Ur);for(var i=Be(),r=null,l=Ac;l!==null;){var h=l.next,m=Uv(l,i);m===0?(l.next=null,r===null?Ac=h:r.next=h,h===null&&(xo=r)):(r=l,(e!==0||(m&3)!==0)&&(Rc=!0)),l=h}Dn!==0&&Dn!==5||kl(e),Ur!==0&&(Ur=0)}function Uv(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Ft(m),w=1<<M,H=h[M];H===-1?((w&r)===0||(w&l)!==0)&&(h[M]=zt(w,i)):H<=i&&(e.expiredLanes|=w),m&=~w}if(i=Xe,r=ge,r=_t(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ye(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||wt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Ye(l),cl(r)){case 2:case 8:r=A;break;case 32:r=j;break;case 268435456:r=ht;break;default:r=j}return l=Nv.bind(null,e),r=mn(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Ye(l),e.callbackPriority=2,e.callbackNode=null,2}function Nv(e,i){if(Dn!==0&&Dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Tc()&&e.callbackNode!==r)return null;var l=ge;return l=_t(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(dv(e,l,i),Uv(e,Be()),e.callbackNode!=null&&e.callbackNode===r?Nv.bind(null,e):null)}function Lv(e,i){if(Tc())return null;dv(e,i,!0)}function $E(){f1(function(){(De&6)!==0?mn(z,JE):Dv()})}function Rd(){if(Ur===0){var e=io;e===0&&(e=jt,jt<<=1,(jt&261888)===0&&(jt=256)),Ur=e}return Ur}function Ov(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:os(""+e)}function Pv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function t1(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=Ov((h[Fn]||null).action),M=l.submitter;M&&(i=(i=M[Fn]||null)?Ov(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var w=new Bu("action","action",null,l,h);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ur!==0){var H=M?Pv(h,M):new FormData(h);Yh(r,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(w.preventDefault(),H=M?Pv(h,M):new FormData(h),Yh(r,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var Cd=0;Cd<ch.length;Cd++){var wd=ch[Cd],e1=wd.toLowerCase(),n1=wd[0].toUpperCase()+wd.slice(1);ea(e1,"on"+n1)}ea(h0,"onAnimationEnd"),ea(d0,"onAnimationIteration"),ea(p0,"onAnimationStart"),ea("dblclick","onDoubleClick"),ea("focusin","onFocus"),ea("focusout","onBlur"),ea(vE,"onTransitionRun"),ea(xE,"onTransitionStart"),ea(SE,"onTransitionCancel"),ea(m0,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function Iv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var w=l[M],H=w.instance,et=w.currentTarget;if(w=w.listener,H!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=et;try{m(h)}catch(mt){Vu(mt)}h.currentTarget=null,m=H}else for(M=0;M<l.length;M++){if(w=l[M],H=w.instance,et=w.currentTarget,w=w.listener,H!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=et;try{m(h)}catch(mt){Vu(mt)}h.currentTarget=null,m=H}}}}function me(e,i){var r=i[as];r===void 0&&(r=i[as]=new Set);var l=e+"__bubble";r.has(l)||(zv(i,e,2,!1),r.add(l))}function Dd(e,i,r){var l=0;i&&(l|=4),zv(r,e,l,i)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Ud(e){if(!e[Cc]){e[Cc]=!0,Pu.forEach(function(r){r!=="selectionchange"&&(i1.has(r)||Dd(r,!1,e),Dd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Cc]||(i[Cc]=!0,Dd("selectionchange",!1,i))}}function zv(e,i,r,l){switch(hx(i)){case 2:var h=U1;break;case 8:h=N1;break;default:h=qd}r=h.bind(null,i,r,e),h=void 0,!jf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function Nd(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var w=l.stateNode.containerInfo;if(w===h)break;if(M===4)for(M=l.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===h)return;M=M.return}for(;w!==null;){if(M=Da(w),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){l=m=M;continue t}w=w.parentNode}}l=l.return}V_(function(){var et=m,mt=Kf(r),xt=[];t:{var ot=_0.get(e);if(ot!==void 0){var ut=Bu,Wt=e;switch(e){case"keypress":if(zu(r)===0)break t;case"keydown":case"keyup":ut=QM;break;case"focusin":Wt="focus",ut=eh;break;case"focusout":Wt="blur",ut=eh;break;case"beforeblur":case"afterblur":ut=eh;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=W_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=FM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=$M;break;case h0:case d0:case p0:ut=GM;break;case m0:ut=eE;break;case"scroll":case"scrollend":ut=IM;break;case"wheel":ut=iE;break;case"copy":case"cut":case"paste":ut=kM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Y_;break;case"toggle":case"beforetoggle":ut=rE}var te=(i&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),Q=te?ot!==null?ot+"Capture":null:ot;te=[];for(var k=et,tt;k!==null;){var vt=k;if(tt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||tt===null||Q===null||(vt=hl(k,Q),vt!=null&&te.push(Wl(k,vt,tt))),Ve)break;k=k.return}0<te.length&&(ot=new ut(ot,Wt,null,r,mt),xt.push({event:ot,listeners:te}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&r!==Zf&&(Wt=r.relatedTarget||r.fromElement)&&(Da(Wt)||Wt[ii]))break t;if((ut||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Wt=r.relatedTarget||r.toElement,ut=et,Wt=Wt?Da(Wt):null,Wt!==null&&(Ve=u(Wt),te=Wt.tag,Wt!==Ve||te!==5&&te!==27&&te!==6)&&(Wt=null)):(ut=null,Wt=et),ut!==Wt)){if(te=W_,vt="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Y_,vt="onPointerLeave",Q="onPointerEnter",k="pointer"),Ve=ut==null?ot:ss(ut),tt=Wt==null?ot:ss(Wt),ot=new te(vt,k+"leave",ut,r,mt),ot.target=Ve,ot.relatedTarget=tt,vt=null,Da(mt)===et&&(te=new te(Q,k+"enter",Wt,r,mt),te.target=tt,te.relatedTarget=Ve,vt=te),Ve=vt,ut&&Wt)e:{for(te=a1,Q=ut,k=Wt,tt=0,vt=Q;vt;vt=te(vt))tt++;vt=0;for(var $t=k;$t;$t=te($t))vt++;for(;0<tt-vt;)Q=te(Q),tt--;for(;0<vt-tt;)k=te(k),vt--;for(;tt--;){if(Q===k||k!==null&&Q===k.alternate){te=Q;break e}Q=te(Q),k=te(k)}te=null}else te=null;ut!==null&&Fv(xt,ot,ut,te,!1),Wt!==null&&Ve!==null&&Fv(xt,Ve,Wt,te,!0)}}t:{if(ot=et?ss(et):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Re=e0;else if($_(ot))if(n0)Re=mE;else{Re=dE;var Yt=hE}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?et&&Ue(et.elementType)&&(Re=e0):Re=pE;if(Re&&(Re=Re(e,et))){t0(xt,Re,r,mt);break t}Yt&&Yt(e,ot,et),e==="focusout"&&et&&ot.type==="number"&&et.memoizedProps.value!=null&&de(ot,"number",ot.value)}switch(Yt=et?ss(et):window,e){case"focusin":($_(Yt)||Yt.contentEditable==="true")&&(Ks=Yt,oh=et,Sl=null);break;case"focusout":Sl=oh=Ks=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,c0(xt,r,mt);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":c0(xt,r,mt)}var le;if(ih)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Zs?j_(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(Z_&&r.locale!=="ko"&&(Zs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Zs&&(le=k_()):(mr=mt,Jf="value"in mr?mr.value:mr.textContent,Zs=!0)),Yt=wc(et,ve),0<Yt.length&&(ve=new q_(ve,e,null,r,mt),xt.push({event:ve,listeners:Yt}),le?ve.data=le:(le=J_(r),le!==null&&(ve.data=le)))),(le=oE?lE(e,r):uE(e,r))&&(ve=wc(et,"onBeforeInput"),0<ve.length&&(Yt=new q_("onBeforeInput","beforeinput",null,r,mt),xt.push({event:Yt,listeners:ve}),Yt.data=le)),t1(xt,e,et,r,mt)}Iv(xt,i)})}function Wl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function wc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=hl(e,r),h!=null&&l.unshift(Wl(e,h,m)),h=hl(e,i),h!=null&&l.push(Wl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function a1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fv(e,i,r,l,h){for(var m=i._reactName,M=[];r!==null&&r!==l;){var w=r,H=w.alternate,et=w.stateNode;if(w=w.tag,H!==null&&H===l)break;w!==5&&w!==26&&w!==27||et===null||(H=et,h?(et=hl(r,m),et!=null&&M.unshift(Wl(r,et,H))):h||(et=hl(r,m),et!=null&&M.push(Wl(r,et,H)))),r=r.return}M.length!==0&&e.push({event:i,listeners:M})}var r1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Bv(e){return(typeof e=="string"?e:""+e).replace(r1,`
`).replace(s1,"")}function Hv(e,i){return i=Bv(i),Bv(e)===i}function Ge(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Si(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Si(e,""+l);break;case"className":Xt(e,"class",l);break;case"tabIndex":Xt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,r,l);break;case"style":ta(e,l,m);break;case"data":if(i!=="object"){Xt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=os(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Ge(e,i,"name",h.name,h,null),Ge(e,i,"formEncType",h.formEncType,h,null),Ge(e,i,"formMethod",h.formMethod,h,null),Ge(e,i,"formTarget",h.formTarget,h,null)):(Ge(e,i,"encType",h.encType,h,null),Ge(e,i,"method",h.method,h,null),Ge(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=os(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Na);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=os(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":me("beforetoggle",e),me("toggle",e),Lt(e,"popover",l);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Lt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ha.get(r)||r,Lt(e,r,l))}}function Ld(e,i,r,l,h,m){switch(r){case"style":ta(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Si(e,l):(typeof l=="number"||typeof l=="bigint")&&Si(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Fn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Lt(e,r,l)}}}function Vn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,m,M,r,null)}}h&&Ge(e,i,"srcSet",r.srcSet,r,null),l&&Ge(e,i,"src",r.src,r,null);return;case"input":me("invalid",e);var w=m=M=h=null,H=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var mt=r[l];if(mt!=null)switch(l){case"name":h=mt;break;case"type":M=mt;break;case"checked":H=mt;break;case"defaultChecked":et=mt;break;case"value":m=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:Ge(e,i,l,mt,r,null)}}Wn(e,m,w,H,et,M,h,!1);return;case"select":me("invalid",e),l=M=m=null;for(h in r)if(r.hasOwnProperty(h)&&(w=r[h],w!=null))switch(h){case"value":m=w;break;case"defaultValue":M=w;break;case"multiple":l=w;default:Ge(e,i,h,w,r,null)}i=m,r=M,e.multiple=!!l,i!=null?wn(e,!!l,i,!1):r!=null&&wn(e,!!l,r,!0);return;case"textarea":me("invalid",e),m=h=l=null;for(M in r)if(r.hasOwnProperty(M)&&(w=r[M],w!=null))switch(M){case"value":l=w;break;case"defaultValue":h=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Ge(e,i,M,w,r,null)}$i(e,l,h,m);return;case"option":for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!=null)&&(H==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ge(e,i,H,l,r,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<Xl.length;l++)me(Xl[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,et,l,r,null)}return;default:if(Ue(i)){for(mt in r)r.hasOwnProperty(mt)&&(l=r[mt],l!==void 0&&Ld(e,i,mt,l,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(l=r[w],l!=null&&Ge(e,i,w,l,r,null))}function o1(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,M=null,w=null,H=null,et=null,mt=null;for(ut in r){var xt=r[ut];if(r.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=xt;default:l.hasOwnProperty(ut)||Ge(e,i,ut,null,l,xt)}}for(var ot in l){var ut=l[ot];if(xt=r[ot],l.hasOwnProperty(ot)&&(ut!=null||xt!=null))switch(ot){case"type":m=ut;break;case"name":h=ut;break;case"checked":et=ut;break;case"defaultChecked":mt=ut;break;case"value":M=ut;break;case"defaultValue":w=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==xt&&Ge(e,i,ot,ut,l,xt)}}Bt(e,M,w,H,et,mt,m,h);return;case"select":ut=M=w=ot=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":ut=H;default:l.hasOwnProperty(m)||Ge(e,i,m,null,l,H)}for(h in l)if(m=l[h],H=r[h],l.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":ot=m;break;case"defaultValue":w=m;break;case"multiple":M=m;default:m!==H&&Ge(e,i,h,m,l,H)}i=w,r=M,l=ut,ot!=null?wn(e,!!r,ot,!1):!!l!=!!r&&(i!=null?wn(e,!!r,i,!0):wn(e,!!r,r?[]:"",!1));return;case"textarea":ut=ot=null;for(w in r)if(h=r[w],r.hasOwnProperty(w)&&h!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ge(e,i,w,null,l,h)}for(M in l)if(h=l[M],m=r[M],l.hasOwnProperty(M)&&(h!=null||m!=null))switch(M){case"value":ot=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Ge(e,i,M,h,l,m)}xi(e,ot,ut);return;case"option":for(var Wt in r)ot=r[Wt],r.hasOwnProperty(Wt)&&ot!=null&&!l.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ge(e,i,Wt,null,l,ot));for(H in l)ot=l[H],ut=r[H],l.hasOwnProperty(H)&&ot!==ut&&(ot!=null||ut!=null)&&(H==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ge(e,i,H,ot,l,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)ot=r[te],r.hasOwnProperty(te)&&ot!=null&&!l.hasOwnProperty(te)&&Ge(e,i,te,null,l,ot);for(et in l)if(ot=l[et],ut=r[et],l.hasOwnProperty(et)&&ot!==ut&&(ot!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:Ge(e,i,et,ot,l,ut)}return;default:if(Ue(i)){for(var Ve in r)ot=r[Ve],r.hasOwnProperty(Ve)&&ot!==void 0&&!l.hasOwnProperty(Ve)&&Ld(e,i,Ve,void 0,l,ot);for(mt in l)ot=l[mt],ut=r[mt],!l.hasOwnProperty(mt)||ot===ut||ot===void 0&&ut===void 0||Ld(e,i,mt,ot,l,ut);return}}for(var Q in r)ot=r[Q],r.hasOwnProperty(Q)&&ot!=null&&!l.hasOwnProperty(Q)&&Ge(e,i,Q,null,l,ot);for(xt in l)ot=l[xt],ut=r[xt],!l.hasOwnProperty(xt)||ot===ut||ot==null&&ut==null||Ge(e,i,xt,ot,l,ut)}function Gv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function l1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,M=h.initiatorType,w=h.duration;if(m&&w&&Gv(M)){for(M=0,w=h.responseEnd,l+=1;l<r.length;l++){var H=r[l],et=H.startTime;if(et>w)break;var mt=H.transferSize,xt=H.initiatorType;mt&&Gv(xt)&&(H=H.responseEnd,M+=mt*(H<w?1:(w-et)/(H-et)))}if(--l,i+=8*(m+M)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Od=null,Pd=null;function Dc(e){return e.nodeType===9?e:e.ownerDocument}function Vv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Id(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zd=null;function u1(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Xv=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,Wv=typeof Promise=="function"?Promise:void 0,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof Wv<"u"?function(e){return Wv.resolve(null).then(e).catch(h1)}:Xv;function h1(e){setTimeout(function(){throw e})}function Nr(e){return e==="head"}function qv(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),Eo(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")ql(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,ql(r);for(var m=r.firstChild;m;){var M=m.nextSibling,w=m.nodeName;m[fr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=M}}else r==="body"&&ql(e.ownerDocument.body);r=h}while(r);Eo(i)}function Yv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Fd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Fd(r),hr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function d1(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[fr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=qi(e.nextSibling),e===null)break}return null}function p1(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=qi(e.nextSibling),e===null))return null;return e}function Zv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=qi(e.nextSibling),e===null))return null;return e}function Bd(e){return e.data==="$?"||e.data==="$~"}function Hd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function m1(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function qi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Gd=null;function Kv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return qi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Qv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function jv(e,i,r){switch(i=Dc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function ql(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);hr(e)}var Yi=new Map,Jv=new Set;function Uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Za=B.d;B.d={f:_1,r:g1,D:v1,C:x1,L:S1,m:y1,X:E1,S:M1,M:b1};function _1(){var e=Za.f(),i=Mc();return e||i}function g1(e){var i=Ua(e);i!==null&&i.tag===5&&i.type==="form"?mg(i):Za.r(e)}var So=typeof document>"u"?null:document;function $v(e,i,r){var l=So;if(l&&typeof i=="string"&&i){var h=Oe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Jv.has(h)||(Jv.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Vn(i,"link",e),yn(i),l.head.appendChild(i)))}}function v1(e){Za.D(e),$v("dns-prefetch",e,null)}function x1(e,i){Za.C(e,i),$v("preconnect",e,i)}function S1(e,i,r){Za.L(e,i,r);var l=So;if(l&&e&&i){var h='link[rel="preload"][as="'+Oe(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Oe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Oe(r.imageSizes)+'"]')):h+='[href="'+Oe(e)+'"]';var m=h;switch(i){case"style":m=yo(e);break;case"script":m=Mo(e)}Yi.has(m)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Yi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Yl(m))||i==="script"&&l.querySelector(Zl(m))||(i=l.createElement("link"),Vn(i,"link",e),yn(i),l.head.appendChild(i)))}}function y1(e,i){Za.m(e,i);var r=So;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Oe(l)+'"][href="'+Oe(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Mo(e)}if(!Yi.has(m)&&(e=v({rel:"modulepreload",href:e},i),Yi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Zl(m)))return}l=r.createElement("link"),Vn(l,"link",e),yn(l),r.head.appendChild(l)}}}function M1(e,i,r){Za.S(e,i,r);var l=So;if(l&&e){var h=dr(l).hoistableStyles,m=yo(e);i=i||"default";var M=h.get(m);if(!M){var w={loading:0,preload:null};if(M=l.querySelector(Yl(m)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Yi.get(m))&&Vd(e,r);var H=M=l.createElement("link");yn(H),Vn(H,"link",e),H._p=new Promise(function(et,mt){H.onload=et,H.onerror=mt}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Nc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:w},h.set(m,M)}}}function E1(e,i){Za.X(e,i);var r=So;if(r&&e){var l=dr(r).hoistableScripts,h=Mo(e),m=l.get(h);m||(m=r.querySelector(Zl(h)),m||(e=v({src:e,async:!0},i),(i=Yi.get(h))&&kd(e,i),m=r.createElement("script"),yn(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function b1(e,i){Za.M(e,i);var r=So;if(r&&e){var l=dr(r).hoistableScripts,h=Mo(e),m=l.get(h);m||(m=r.querySelector(Zl(h)),m||(e=v({src:e,async:!0,type:"module"},i),(i=Yi.get(h))&&kd(e,i),m=r.createElement("script"),yn(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function tx(e,i,r,l){var h=(h=at.current)?Uc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=yo(r.href),r=dr(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=yo(r.href);var m=dr(h).hoistableStyles,M=m.get(e);if(M||(h=h.ownerDocument||h,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=h.querySelector(Yl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),Yi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Yi.set(e,r),m||T1(h,e,r,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Mo(r),r=dr(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function yo(e){return'href="'+Oe(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function ex(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function T1(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Vn(i,"link",r),yn(i),e.head.appendChild(i))}function Mo(e){return'[src="'+Oe(e)+'"]'}function Zl(e){return"script[async]"+e}function nx(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Oe(r.href)+'"]');if(l)return i.instance=l,yn(l),l;var h=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),yn(l),Vn(l,"style",h),Nc(l,r.precedence,e),i.instance=l;case"stylesheet":h=yo(r.href);var m=e.querySelector(Yl(h));if(m)return i.state.loading|=4,i.instance=m,yn(m),m;l=ex(r),(h=Yi.get(h))&&Vd(l,h),m=(e.ownerDocument||e).createElement("link"),yn(m);var M=m;return M._p=new Promise(function(w,H){M.onload=w,M.onerror=H}),Vn(m,"link",l),i.state.loading|=4,Nc(m,r.precedence,e),i.instance=m;case"script":return m=Mo(r.src),(h=e.querySelector(Zl(m)))?(i.instance=h,yn(h),h):(l=r,(h=Yi.get(m))&&(l=v({},r),kd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),yn(h),Vn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Nc(l,r.precedence,e));return i.instance}function Nc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,M=0;M<l.length;M++){var w=l[M];if(w.dataset.precedence===i)m=w;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Vd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function kd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Lc=null;function ix(e,i,r){if(Lc===null){var l=new Map,h=Lc=new Map;h.set(r,l)}else h=Lc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[fr]||m[Sn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=e+M;var w=l.get(M);w?w.push(m):l.set(M,[m])}}return l}function ax(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function A1(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function rx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function R1(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=yo(l.href),m=i.querySelector(Yl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Oc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,yn(m);return}m=i.ownerDocument||i,l=ex(l),(h=Yi.get(h))&&Vd(l,h),m=m.createElement("link"),yn(m);var M=m;M._p=new Promise(function(w,H){M.onload=w,M.onerror=H}),Vn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Oc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Xd=0;function C1(e,i){return e.stylesheets&&e.count===0&&Ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Xd===0&&(Xd=62500*l1());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Xd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pc=null;function Ic(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pc=new Map,i.forEach(w1,e),Pc=null,Oc.call(e))}function w1(e,i){if(!(i.state.loading&4)){var r=Pc.get(e);if(r)var l=r.get(null);else{r=new Map,Pc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var M=h[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}h=i.instance,M=h.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,h),r.set(M,h),this.count++,l=Oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Kl={$$typeof:P,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function D1(e,i,r,l,h,m,M,w,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function sx(e,i,r,l,h,m,M,w,H,et,mt,xt){return e=new D1(e,i,r,M,H,et,mt,xt,w),i=1,m===!0&&(i|=24),m=Mi(3,null,null,i),e.current=m,m.stateNode=e,i=Eh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},Rh(m),e}function ox(e){return e?(e=Js,e):Js}function lx(e,i,r,l,h,m){h=ox(h),l.context===null?l.context=h:l.pendingContext=h,l=yr(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=Mr(e,l,i),r!==null&&(ui(r,e,i),Rl(r,e,i))}function ux(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Wd(e,i){ux(e,i),(e=e.alternate)&&ux(e,i)}function cx(e){if(e.tag===13||e.tag===31){var i=fs(e,67108864);i!==null&&ui(i,e,67108864),Wd(e,67108864)}}function fx(e){if(e.tag===13||e.tag===31){var i=Ri();i=ul(i);var r=fs(e,i);r!==null&&ui(r,e,i),Wd(e,i)}}var zc=!0;function U1(e,i,r,l){var h=F.T;F.T=null;var m=B.p;try{B.p=2,qd(e,i,r,l)}finally{B.p=m,F.T=h}}function N1(e,i,r,l){var h=F.T;F.T=null;var m=B.p;try{B.p=8,qd(e,i,r,l)}finally{B.p=m,F.T=h}}function qd(e,i,r,l){if(zc){var h=Yd(l);if(h===null)Nd(e,i,l,Fc,r),dx(e,l);else if(O1(h,e,i,r,l))l.stopPropagation();else if(dx(e,l),i&4&&-1<L1.indexOf(e)){for(;h!==null;){var m=Ua(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Rt(m.pendingLanes);if(M!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var H=1<<31-Ft(M);w.entanglements[1]|=H,M&=~H}_a(m),(De&6)===0&&(Sc=Be()+500,kl(0))}}break;case 31:case 13:w=fs(m,2),w!==null&&ui(w,m,2),Mc(),Wd(m,2)}if(m=Yd(l),m===null&&Nd(e,i,l,Fc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else Nd(e,i,l,null,r)}}function Yd(e){return e=Kf(e),Zd(e)}var Fc=null;function Zd(e){if(Fc=null,e=Da(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Fc=e,null}function hx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(we()){case z:return 2;case A:return 8;case j:case rt:return 32;case ht:return 268435456;default:return 32}default:return 32}}var Kd=!1,Lr=null,Or=null,Pr=null,Ql=new Map,jl=new Map,Ir=[],L1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dx(e,i){switch(e){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Ql.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(i.pointerId)}}function Jl(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ua(i),i!==null&&cx(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function O1(e,i,r,l,h){switch(i){case"focusin":return Lr=Jl(Lr,e,i,r,l,h),!0;case"dragenter":return Or=Jl(Or,e,i,r,l,h),!0;case"mouseover":return Pr=Jl(Pr,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Ql.set(m,Jl(Ql.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,jl.set(m,Jl(jl.get(m)||null,e,i,r,l,h)),!0}return!1}function px(e){var i=Da(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Ws(e.priority,function(){fx(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,Ws(e.priority,function(){fx(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Yd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Zf=l,r.target.dispatchEvent(l),Zf=null}else return i=Ua(r),i!==null&&cx(i),e.blockedOn=r,!1;i.shift()}return!0}function mx(e,i,r){Bc(e)&&r.delete(i)}function P1(){Kd=!1,Lr!==null&&Bc(Lr)&&(Lr=null),Or!==null&&Bc(Or)&&(Or=null),Pr!==null&&Bc(Pr)&&(Pr=null),Ql.forEach(mx),jl.forEach(mx)}function Hc(e,i){e.blockedOn===i&&(e.blockedOn=null,Kd||(Kd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,P1)))}var Gc=null;function _x(e){Gc!==e&&(Gc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Zd(l||r)===null)continue;break}var m=Ua(r);m!==null&&(e.splice(i,3),i-=3,Yh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function Eo(e){function i(H){return Hc(H,e)}Lr!==null&&Hc(Lr,e),Or!==null&&Hc(Or,e),Pr!==null&&Hc(Pr,e),Ql.forEach(i),jl.forEach(i);for(var r=0;r<Ir.length;r++){var l=Ir[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ir.length&&(r=Ir[0],r.blockedOn===null);)px(r),r.blockedOn===null&&Ir.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],M=h[Fn]||null;if(typeof m=="function")M||_x(r);else if(M){var w=null;if(m&&m.hasAttribute("formAction")){if(h=m,M=m[Fn]||null)w=M.formAction;else if(Zd(h)!==null)continue}else w=M.action;typeof w=="function"?r[l+1]=w:(r.splice(l,3),l-=3),_x(r)}}}function gx(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return h=M})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Qd(e){this._internalRoot=e}Vc.prototype.render=Qd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=Ri();lx(r,l,e,i,null,null)},Vc.prototype.unmount=Qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;lx(e.current,2,null,e,null,null),Mc(),i[ii]=null}};function Vc(e){this._internalRoot=e}Vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=fl();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ir.length&&i!==0&&i<Ir[r].priority;r++);Ir.splice(r,0,e),r===0&&px(e)}};var vx=t.version;if(vx!=="19.2.7")throw Error(a(527,vx,"19.2.7"));B.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var I1={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{ft=kc.inject(I1),dt=kc}catch{}}return tu.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,l="",h=Tg,m=Ag,M=Rg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=sx(e,1,!1,null,null,r,l,null,h,m,M,gx),e[ii]=i.current,Ud(e),new Qd(i)},tu.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var l=!1,h="",m=Tg,M=Ag,w=Rg,H=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),i=sx(e,1,!0,i,r??null,l,h,H,m,M,w,gx),i.context=ox(null),r=i.current,l=Ri(),l=ul(l),h=yr(l),h.callback=null,Mr(r,h,l),r=l,i.current.lanes=r,Vt(i,r),_a(i),e[ii]=i.current,Ud(e),new Vc(i)},tu.version="19.2.7",tu}var Cx;function Z1(){if(Cx)return $d.exports;Cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$d.exports=Y1(),$d.exports}var K1=Z1();const n_="185",Q1=0,wx=1,j1=2,gf=1,J1=2,hu=3,$r=0,ei=1,nr=2,ar=0,Xo=1,Dx=2,Ux=3,Nx=4,$1=5,Us=100,tb=101,eb=102,nb=103,ib=104,ab=200,rb=201,sb=202,ob=203,Zp=204,Kp=205,lb=206,ub=207,cb=208,fb=209,hb=210,db=211,pb=212,mb=213,_b=214,Qp=0,jp=1,Jp=2,Qo=3,$p=4,tm=5,em=6,nm=7,i_=0,gb=1,vb=2,ba=0,ny=1,iy=2,ay=3,a_=4,ry=5,sy=6,oy=7,ly=300,Hs=301,jo=302,ip=303,ap=304,Gf=306,im=1e3,ir=1001,am=1002,kn=1003,xb=1004,Xc=1005,Qn=1006,rp=1007,Ls=1008,Li=1009,uy=1010,cy=1011,xu=1012,r_=1013,Aa=1014,la=1015,sr=1016,s_=1017,o_=1018,Su=1020,fy=35902,hy=35899,dy=1021,py=1022,ua=1023,or=1026,Os=1027,l_=1028,u_=1029,Gs=1030,c_=1031,f_=1033,vf=33776,xf=33777,Sf=33778,yf=33779,rm=35840,sm=35841,om=35842,lm=35843,um=36196,cm=37492,fm=37496,hm=37488,dm=37489,Af=37490,pm=37491,mm=37808,_m=37809,gm=37810,vm=37811,xm=37812,Sm=37813,ym=37814,Mm=37815,Em=37816,bm=37817,Tm=37818,Am=37819,Rm=37820,Cm=37821,wm=36492,Dm=36494,Um=36495,Nm=36283,Lm=36284,Rf=36285,Om=36286,Sb=3200,Cf=0,yb=1,qr="",Di="srgb",wf="srgb-linear",Df="linear",Fe="srgb",bo=7680,Lx=519,Mb=512,Eb=513,bb=514,h_=515,Tb=516,Ab=517,d_=518,Rb=519,Ox=35044,Px="300 es",Ma=2e3,yu=2001;function Cb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Uf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wb(){const o=Uf("canvas");return o.style.display="block",o}const Ix={};function zx(...o){const t="THREE."+o.shift();console.log(t,...o)}function my(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ne(...o){o=my(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...o)}}function Te(...o){o=my(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...o)}}function Wo(...o){const t=o.join(" ");t in Ix||(Ix[t]=!0,ne(...o))}function Db(o,t,n){return new Promise(function(a,s){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const Ub={[Qp]:jp,[Jp]:em,[$p]:nm,[Qo]:tm,[jp]:Qp,[em]:Jp,[nm]:$p,[tm]:Qo};class Vs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,c=s.length;u<c;u++)s[u].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sp=Math.PI/180,Pm=180/Math.PI;function Du(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Yn[o&255]+Yn[o>>8&255]+Yn[o>>16&255]+Yn[o>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]).toLowerCase()}function xe(o,t,n){return Math.max(t,Math.min(n,o))}function Nb(o,t){return(o%t+t)%t}function op(o,t,n){return(1-n)*o+n*t}function Lb(o,t){return o+Math.random()*(t-o)}function Ob(o){return o*(.5-Math.random())}function eu(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ci(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pb={randFloat:Lb,randFloatSpread:Ob},I_=class I_{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*s+t.x,this.y=u*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};I_.prototype.isVector2=!0;let _e=I_;class rl{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,u,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],v=a[s+3],g=u[c+0],S=u[c+1],E=u[c+2],b=u[c+3];if(v!==b||p!==g||d!==S||_!==E){let y=p*g+d*S+_*E+v*b;y<0&&(g=-g,S=-S,E=-E,b=-b,y=-y);let x=1-f;if(y<.9995){const U=Math.acos(y),P=Math.sin(U);x=Math.sin(x*U)/P,f=Math.sin(f*U)/P,p=p*x+g*f,d=d*x+S*f,_=_*x+E*f,v=v*x+b*f}else{p=p*x+g*f,d=d*x+S*f,_=_*x+E*f,v=v*x+b*f;const U=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=U,d*=U,_*=U,v*=U}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,s,u,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],v=u[c],g=u[c+1],S=u[c+2],E=u[c+3];return t[n]=f*E+_*v+p*S-d*g,t[n+1]=p*E+_*g+d*v-f*S,t[n+2]=d*E+_*S+f*g-p*v,t[n+3]=_*E-f*v-p*g-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,u=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),v=f(u/2),g=p(a/2),S=p(s/2),E=p(u/2);switch(c){case"XYZ":this._x=g*_*v+d*S*E,this._y=d*S*v-g*_*E,this._z=d*_*E+g*S*v,this._w=d*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+d*S*E,this._y=d*S*v-g*_*E,this._z=d*_*E-g*S*v,this._w=d*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-d*S*E,this._y=d*S*v+g*_*E,this._z=d*_*E+g*S*v,this._w=d*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-d*S*E,this._y=d*S*v+g*_*E,this._z=d*_*E-g*S*v,this._w=d*_*v+g*S*E;break;case"YZX":this._x=g*_*v+d*S*E,this._y=d*S*v+g*_*E,this._z=d*_*E-g*S*v,this._w=d*_*v-g*S*E;break;case"XZY":this._x=g*_*v-d*S*E,this._y=d*S*v-g*_*E,this._z=d*_*E+g*S*v,this._w=d*_*v+g*S*E;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],u=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],v=n[10],g=a+f+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-d)*S,this._z=(c-s)*S}else if(a>f&&a>v){const S=2*Math.sqrt(1+a-f-v);this._w=(_-p)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(u+d)/S}else if(f>v){const S=2*Math.sqrt(1+f-a-v);this._w=(u-d)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-a-f);this._w=(c-s)/S,this._x=(u+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,u=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-u*p,this._y=s*_+c*p+u*f-a*d,this._z=u*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-u*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,s=t._y,u=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,s=-s,u=-u,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const z_=class z_{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Fx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Fx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*s,this.y=u[1]*n+u[4]*a+u[7]*s,this.z=u[2]*n+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=t.elements,c=1/(u[3]*n+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*s+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*s+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*s+u[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,u=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-u*s),v=2*(u*a-c*n);return this.x=n+p*d+c*v-f*_,this.y=a+p*_+f*d-u*v,this.z=s+p*v+u*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s,this.y=u[1]*n+u[5]*a+u[9]*s,this.z=u[2]*n+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,u=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-u*f,this.y=u*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return lp.copy(this).projectOnVector(t),this.sub(lp)}reflect(t){return this.sub(lp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};z_.prototype.isVector3=!0;let $=z_;const lp=new $,Fx=new rl,F_=class F_{constructor(t,n,a,s,u,c,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d)}set(t,n,a,s,u,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],v=a[7],g=a[2],S=a[5],E=a[8],b=s[0],y=s[3],x=s[6],U=s[1],P=s[4],R=s[7],D=s[2],O=s[5],L=s[8];return u[0]=c*b+f*U+p*D,u[3]=c*y+f*P+p*O,u[6]=c*x+f*R+p*L,u[1]=d*b+_*U+v*D,u[4]=d*y+_*P+v*O,u[7]=d*x+_*R+v*L,u[2]=g*b+S*U+E*D,u[5]=g*y+S*P+E*O,u[8]=g*x+S*R+E*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*u*_+a*f*p+s*u*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=_*c-f*d,g=f*p-_*u,S=d*u-c*p,E=n*v+a*g+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(s*d-_*a)*b,t[2]=(f*a-s*c)*b,t[3]=g*b,t[4]=(_*n-s*p)*b,t[5]=(s*u-f*n)*b,t[6]=S*b,t[7]=(a*p-d*n)*b,t[8]=(c*n-a*u)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,u,c,f){const p=Math.cos(u),d=Math.sin(u);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return Wo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(up.makeScale(t,n)),this}rotate(t){return Wo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(up.makeRotation(-t)),this}translate(t,n){return Wo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(up.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};F_.prototype.isMatrix3=!0;let re=F_;const up=new re,Bx=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hx=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ib(){const o={enabled:!0,workingColorSpace:wf,spaces:{},convert:function(s,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Fe&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[u].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Fe&&(s.r=qo(s.r),s.g=qo(s.g),s.b=qo(s.b))),s},workingToColorSpace:function(s,u){return this.convert(s,this.workingColorSpace,u)},colorSpaceToWorking:function(s,u){return this.convert(s,u,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qr?Df:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,u=this.workingColorSpace){return s.fromArray(this.spaces[u].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,u,c){return s.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,u){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,u)},toWorkingColorSpace:function(s,u){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[wf]:{primaries:t,whitePoint:a,transfer:Df,toXYZ:Bx,fromXYZ:Hx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:t,whitePoint:a,transfer:Fe,toXYZ:Bx,fromXYZ:Hx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),o}const Ee=Ib();function rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let To;class zb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{To===void 0&&(To=Uf("canvas")),To.width=t.width,To.height=t.height;const s=To.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=To}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Uf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let c=0;c<u.length;c++)u[c]=rr(u[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(rr(n[a]/255)*255):n[a]=rr(n[a]);return{data:n,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fb=0;class p_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Du(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?u.push(cp(s[c].image)):u.push(cp(s[c]))}else u=cp(s);a.url=u}return n||(t.images[this.uuid]=a),a}}function cp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let Bb=0;const fp=new $;class ni extends Vs{constructor(t=ni.DEFAULT_IMAGE,n=ni.DEFAULT_MAPPING,a=ir,s=ir,u=Qn,c=Ls,f=ua,p=Li,d=ni.DEFAULT_ANISOTROPY,_=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=Du(),this.name="",this.source=new p_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fp).x}get height(){return this.source.getSize(fp).y}get depth(){return this.source.getSize(fp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ne(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ly)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case im:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case am:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case im:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case am:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=ly;ni.DEFAULT_ANISOTROPY=1;const B_=class B_{constructor(t=0,n=0,a=0,s=1){this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,u;const p=t.elements,d=p[0],_=p[4],v=p[8],g=p[1],S=p[5],E=p[9],b=p[2],y=p[6],x=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+b)<.1&&Math.abs(E+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(d+1)/2,R=(S+1)/2,D=(x+1)/2,O=(_+g)/4,L=(v+b)/4,T=(E+y)/4;return P>R&&P>D?P<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(P),s=O/a,u=L/a):R>D?R<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(R),a=O/s,u=T/s):D<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(D),a=L/u,s=T/u),this.set(a,s,u,n),this}let U=Math.sqrt((y-E)*(y-E)+(v-b)*(v-b)+(g-_)*(g-_));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(v-b)/U,this.z=(g-_)/U,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this.w=xe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this.w=xe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};B_.prototype.isVector4=!0;let sn=B_;class Hb extends Vs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new sn(0,0,t,n),this.scissorTest=!1,this.viewport=new sn(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:a.depth},u=new ni(s),c=a.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new p_(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ta extends Hb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class _y extends ni{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gb extends ni{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hf=class Hf{constructor(t,n,a,s,u,c,f,p,d,_,v,g,S,E,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d,_,v,g,S,E,b,y)}set(t,n,a,s,u,c,f,p,d,_,v,g,S,E,b,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=u,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=v,x[14]=g,x[3]=S,x[7]=E,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hf().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,s=1/Ao.setFromMatrixColumn(t,0).length(),u=1/Ao.setFromMatrixColumn(t,1).length(),c=1/Ao.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,u=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const g=c*_,S=c*v,E=f*_,b=f*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=S+E*d,n[5]=g-b*d,n[9]=-f*p,n[2]=b-g*d,n[6]=E+S*d,n[10]=c*p}else if(t.order==="YXZ"){const g=p*_,S=p*v,E=d*_,b=d*v;n[0]=g+b*f,n[4]=E*f-S,n[8]=c*d,n[1]=c*v,n[5]=c*_,n[9]=-f,n[2]=S*f-E,n[6]=b+g*f,n[10]=c*p}else if(t.order==="ZXY"){const g=p*_,S=p*v,E=d*_,b=d*v;n[0]=g-b*f,n[4]=-c*v,n[8]=E+S*f,n[1]=S+E*f,n[5]=c*_,n[9]=b-g*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const g=c*_,S=c*v,E=f*_,b=f*v;n[0]=p*_,n[4]=E*d-S,n[8]=g*d+b,n[1]=p*v,n[5]=b*d+g,n[9]=S*d-E,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const g=c*p,S=c*d,E=f*p,b=f*d;n[0]=p*_,n[4]=b-g*v,n[8]=E*v+S,n[1]=v,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*v+E,n[10]=g-b*v}else if(t.order==="XZY"){const g=c*p,S=c*d,E=f*p,b=f*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=g*v+b,n[5]=c*_,n[9]=S*v-E,n[2]=E*v-S,n[6]=f*_,n[10]=b*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vb,t,kb)}lookAt(t,n,a){const s=this.elements;return Ci.subVectors(t,n),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Fr.crossVectors(a,Ci),Fr.lengthSq()===0&&(Math.abs(a.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Fr.crossVectors(a,Ci)),Fr.normalize(),Wc.crossVectors(Ci,Fr),s[0]=Fr.x,s[4]=Wc.x,s[8]=Ci.x,s[1]=Fr.y,s[5]=Wc.y,s[9]=Ci.y,s[2]=Fr.z,s[6]=Wc.z,s[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],v=a[5],g=a[9],S=a[13],E=a[2],b=a[6],y=a[10],x=a[14],U=a[3],P=a[7],R=a[11],D=a[15],O=s[0],L=s[4],T=s[8],N=s[12],G=s[1],V=s[5],W=s[9],lt=s[13],ct=s[2],Z=s[6],F=s[10],B=s[14],J=s[3],pt=s[7],yt=s[11],I=s[15];return u[0]=c*O+f*G+p*ct+d*J,u[4]=c*L+f*V+p*Z+d*pt,u[8]=c*T+f*W+p*F+d*yt,u[12]=c*N+f*lt+p*B+d*I,u[1]=_*O+v*G+g*ct+S*J,u[5]=_*L+v*V+g*Z+S*pt,u[9]=_*T+v*W+g*F+S*yt,u[13]=_*N+v*lt+g*B+S*I,u[2]=E*O+b*G+y*ct+x*J,u[6]=E*L+b*V+y*Z+x*pt,u[10]=E*T+b*W+y*F+x*yt,u[14]=E*N+b*lt+y*B+x*I,u[3]=U*O+P*G+R*ct+D*J,u[7]=U*L+P*V+R*Z+D*pt,u[11]=U*T+P*W+R*F+D*yt,u[15]=U*N+P*lt+R*B+D*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],v=t[6],g=t[10],S=t[14],E=t[3],b=t[7],y=t[11],x=t[15],U=p*S-d*g,P=f*S-d*v,R=f*g-p*v,D=c*S-d*_,O=c*g-p*_,L=c*v-f*_;return n*(b*U-y*P+x*R)-a*(E*U-y*D+x*O)+s*(E*P-b*D+x*L)-u*(E*R-b*O+y*L)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[1],c=t[5],f=t[9],p=t[2],d=t[6],_=t[10];return n*(c*_-f*d)-a*(u*_-f*p)+s*(u*d-c*p)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=t[9],g=t[10],S=t[11],E=t[12],b=t[13],y=t[14],x=t[15],U=n*f-a*c,P=n*p-s*c,R=n*d-u*c,D=a*p-s*f,O=a*d-u*f,L=s*d-u*p,T=_*b-v*E,N=_*y-g*E,G=_*x-S*E,V=v*y-g*b,W=v*x-S*b,lt=g*x-S*y,ct=U*lt-P*W+R*V+D*G-O*N+L*T;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ct;return t[0]=(f*lt-p*W+d*V)*Z,t[1]=(s*W-a*lt-u*V)*Z,t[2]=(b*L-y*O+x*D)*Z,t[3]=(g*O-v*L-S*D)*Z,t[4]=(p*G-c*lt-d*N)*Z,t[5]=(n*lt-s*G+u*N)*Z,t[6]=(y*R-E*L-x*P)*Z,t[7]=(_*L-g*R+S*P)*Z,t[8]=(c*W-f*G+d*T)*Z,t[9]=(a*G-n*W-u*T)*Z,t[10]=(E*O-b*R+x*U)*Z,t[11]=(v*R-_*O-S*U)*Z,t[12]=(f*N-c*V-p*T)*Z,t[13]=(n*V-a*N+s*T)*Z,t[14]=(b*P-E*D-y*U)*Z,t[15]=(_*D-v*P+g*U)*Z,this}scale(t){const n=this.elements,a=t.x,s=t.y,u=t.z;return n[0]*=a,n[4]*=s,n[8]*=u,n[1]*=a,n[5]*=s,n[9]*=u,n[2]*=a,n[6]*=s,n[10]*=u,n[3]*=a,n[7]*=s,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),u=1-a,c=t.x,f=t.y,p=t.z,d=u*c,_=u*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,u,c){return this.set(1,a,u,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,u=n._x,c=n._y,f=n._z,p=n._w,d=u+u,_=c+c,v=f+f,g=u*d,S=u*_,E=u*v,b=c*_,y=c*v,x=f*v,U=p*d,P=p*_,R=p*v,D=a.x,O=a.y,L=a.z;return s[0]=(1-(b+x))*D,s[1]=(S+R)*D,s[2]=(E-P)*D,s[3]=0,s[4]=(S-R)*O,s[5]=(1-(g+x))*O,s[6]=(y+U)*O,s[7]=0,s[8]=(E+P)*L,s[9]=(y-U)*L,s[10]=(1-(g+b))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const u=this.determinantAffine();if(u===0)return a.set(1,1,1),n.identity(),this;let c=Ao.set(s[0],s[1],s[2]).length();const f=Ao.set(s[4],s[5],s[6]).length(),p=Ao.set(s[8],s[9],s[10]).length();u<0&&(c=-c),aa.copy(this);const d=1/c,_=1/f,v=1/p;return aa.elements[0]*=d,aa.elements[1]*=d,aa.elements[2]*=d,aa.elements[4]*=_,aa.elements[5]*=_,aa.elements[6]*=_,aa.elements[8]*=v,aa.elements[9]*=v,aa.elements[10]*=v,n.setFromRotationMatrix(aa),a.x=c,a.y=f,a.z=p,this}makePerspective(t,n,a,s,u,c,f=Ma,p=!1){const d=this.elements,_=2*u/(n-t),v=2*u/(a-s),g=(n+t)/(n-t),S=(a+s)/(a-s);let E,b;if(p)E=u/(c-u),b=c*u/(c-u);else if(f===Ma)E=-(c+u)/(c-u),b=-2*c*u/(c-u);else if(f===yu)E=-c/(c-u),b=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,u,c,f=Ma,p=!1){const d=this.elements,_=2/(n-t),v=2/(a-s),g=-(n+t)/(n-t),S=-(a+s)/(a-s);let E,b;if(p)E=1/(c-u),b=c/(c-u);else if(f===Ma)E=-2/(c-u),b=-(c+u)/(c-u);else if(f===yu)E=-1/(c-u),b=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Hf.prototype.isMatrix4=!0;let Ze=Hf;const Ao=new $,aa=new Ze,Vb=new $(0,0,0),kb=new $(1,1,1),Fr=new $,Wc=new $,Ci=new $,Gx=new Ze,Vx=new rl;class lr{constructor(t=0,n=0,a=0,s=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,u=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],v=s[2],g=s[6],S=s[10];switch(n){case"XYZ":this._y=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Gx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xb=0;const kx=new $,Ro=new rl,Ka=new Ze,qc=new $,nu=new $,Wb=new $,qb=new rl,Xx=new $(1,0,0),Wx=new $(0,1,0),qx=new $(0,0,1),Yx={type:"added"},Yb={type:"removed"},Co={type:"childadded",child:null},hp={type:"childremoved",child:null};class jn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Du(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const t=new $,n=new lr,a=new rl,s=new $(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new re}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ro.setFromAxisAngle(t,n),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(t,n){return Ro.setFromAxisAngle(t,n),this.quaternion.premultiply(Ro),this}rotateX(t){return this.rotateOnAxis(Xx,t)}rotateY(t){return this.rotateOnAxis(Wx,t)}rotateZ(t){return this.rotateOnAxis(qx,t)}translateOnAxis(t,n){return kx.copy(t).applyQuaternion(this.quaternion),this.position.add(kx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Xx,t)}translateY(t){return this.translateOnAxis(Wx,t)}translateZ(t){return this.translateOnAxis(qx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ka.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?qc.copy(t):qc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),nu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ka.lookAt(nu,qc,this.up):Ka.lookAt(qc,nu,this.up),this.quaternion.setFromRotationMatrix(Ka),s&&(Ka.extractRotation(s.matrixWorld),Ro.setFromRotationMatrix(Ka),this.quaternion.premultiply(Ro.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yx),Co.child=t,this.dispatchEvent(Co),Co.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Yb),hp.child=t,this.dispatchEvent(hp),hp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ka.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ka.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ka),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yx),Co.child=t,this.dispatchEvent(Co),Co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nu,t,Wb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nu,qb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,s=t.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*a-u[8]*s,u[13]+=a-u[1]*n-u[5]*a-u[9]*s,u[14]+=s-u[2]*n-u[6]*a-u[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const u=this.children;for(let c=0,f=u.length;c<f;c++)u[c].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(u(t.materials,this.material[p]));s.material=f}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(u(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),v=c(t.shapes),g=c(t.skeletons),S=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}jn.DEFAULT_UP=new $(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yc extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zb={type:"move"};class dp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,u=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const b of t.hand.values()){const y=n.getJointPose(b,a),x=this._getHandJoint(d,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;d.inputState.pinching&&g>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Yc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function pp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class ue{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=Ee.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ee.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=Ee.workingColorSpace){if(t=Nb(t,1),n=xe(n,0,1),a=xe(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=pp(c,u,t+1/3),this.g=pp(c,u,t),this.b=pp(c,u,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,n=Di){function a(u){u!==void 0&&parseFloat(u)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Di){const a=gy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return Ee.workingToColorSpace(Zn.copy(this),t),Math.round(xe(Zn.r*255,0,255))*65536+Math.round(xe(Zn.g*255,0,255))*256+Math.round(xe(Zn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ee.workingColorSpace){Ee.workingToColorSpace(Zn.copy(this),n);const a=Zn.r,s=Zn.g,u=Zn.b,c=Math.max(a,s,u),f=Math.min(a,s,u);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=_<=.5?v/(c+f):v/(2-c-f),c){case a:p=(s-u)/v+(s<u?6:0);break;case s:p=(u-a)/v+2;break;case u:p=(a-s)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Ee.workingColorSpace){return Ee.workingToColorSpace(Zn.copy(this),n),t.r=Zn.r,t.g=Zn.g,t.b=Zn.b,t}getStyle(t=Di){Ee.workingToColorSpace(Zn.copy(this),t);const n=Zn.r,a=Zn.g,s=Zn.b;return t!==Di?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(Br),this.setHSL(Br.h+t,Br.s+n,Br.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Br),t.getHSL(Zc);const a=op(Br.h,Zc.h,n),s=op(Br.s,Zc.s,n),u=op(Br.l,Zc.l,n);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*s,this.g=u[1]*n+u[4]*a+u[7]*s,this.b=u[2]*n+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new ue;ue.NAMES=gy;class vy extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ra=new $,Qa=new $,mp=new $,ja=new $,wo=new $,Do=new $,Zx=new $,_p=new $,gp=new $,vp=new $,xp=new sn,Sp=new sn,yp=new sn;class oa{constructor(t=new $,n=new $,a=new $){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),ra.subVectors(t,n),s.cross(ra);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,n,a,s,u){ra.subVectors(s,n),Qa.subVectors(a,n),mp.subVectors(t,n);const c=ra.dot(ra),f=ra.dot(Qa),p=ra.dot(mp),d=Qa.dot(Qa),_=Qa.dot(mp),v=c*d-f*f;if(v===0)return u.set(0,0,0),null;const g=1/v,S=(d*p-f*_)*g,E=(c*_-f*p)*g;return u.set(1-S-E,E,S)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(t,n,a,s,u,c,f,p){return this.getBarycoord(t,n,a,s,ja)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ja.x),p.addScaledVector(c,ja.y),p.addScaledVector(f,ja.z),p)}static getInterpolatedAttribute(t,n,a,s,u,c){return xp.setScalar(0),Sp.setScalar(0),yp.setScalar(0),xp.fromBufferAttribute(t,n),Sp.fromBufferAttribute(t,a),yp.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(xp,u.x),c.addScaledVector(Sp,u.y),c.addScaledVector(yp,u.z),c}static isFrontFacing(t,n,a,s){return ra.subVectors(a,n),Qa.subVectors(t,n),ra.cross(Qa).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ra.subVectors(this.c,this.b),Qa.subVectors(this.a,this.b),ra.cross(Qa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return oa.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,u){return oa.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}containsPoint(t){return oa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,u=this.c;let c,f;wo.subVectors(s,a),Do.subVectors(u,a),_p.subVectors(t,a);const p=wo.dot(_p),d=Do.dot(_p);if(p<=0&&d<=0)return n.copy(a);gp.subVectors(t,s);const _=wo.dot(gp),v=Do.dot(gp);if(_>=0&&v<=_)return n.copy(s);const g=p*v-_*d;if(g<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(wo,c);vp.subVectors(t,u);const S=wo.dot(vp),E=Do.dot(vp);if(E>=0&&S<=E)return n.copy(u);const b=S*d-p*E;if(b<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(a).addScaledVector(Do,f);const y=_*E-S*v;if(y<=0&&v-_>=0&&S-E>=0)return Zx.subVectors(u,s),f=(v-_)/(v-_+(S-E)),n.copy(s).addScaledVector(Zx,f);const x=1/(y+b+g);return c=b*x,f=g*x,n.copy(a).addScaledVector(wo,c).addScaledVector(Do,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ks{constructor(t=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(sa.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(sa.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=sa.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,sa):sa.fromBufferAttribute(u,c),sa.applyMatrix4(t.matrixWorld),this.expandByPoint(sa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Kc.copy(a.boundingBox)),Kc.applyMatrix4(t.matrixWorld),this.union(Kc)}const s=t.children;for(let u=0,c=s.length;u<c;u++)this.expandByObject(s[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sa),sa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(iu),Qc.subVectors(this.max,iu),Uo.subVectors(t.a,iu),No.subVectors(t.b,iu),Lo.subVectors(t.c,iu),Hr.subVectors(No,Uo),Gr.subVectors(Lo,No),bs.subVectors(Uo,Lo);let n=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-bs.z,bs.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,bs.z,0,-bs.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-bs.y,bs.x,0];return!Mp(n,Uo,No,Lo,Qc)||(n=[1,0,0,0,1,0,0,0,1],!Mp(n,Uo,No,Lo,Qc))?!1:(jc.crossVectors(Hr,Gr),n=[jc.x,jc.y,jc.z],Mp(n,Uo,No,Lo,Qc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ja),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ja=[new $,new $,new $,new $,new $,new $,new $,new $],sa=new $,Kc=new ks,Uo=new $,No=new $,Lo=new $,Hr=new $,Gr=new $,bs=new $,iu=new $,Qc=new $,jc=new $,Ts=new $;function Mp(o,t,n,a,s){for(let u=0,c=o.length-3;u<=c;u+=3){Ts.fromArray(o,u);const f=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),p=t.dot(Ts),d=n.dot(Ts),_=a.dot(Ts);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const An=new $,Jc=new _e;let Kb=0;class ca extends Vs{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Ox,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Jc.fromBufferAttribute(this,n),Jc.applyMatrix3(t),this.setXY(n,Jc.x,Jc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix3(t),this.setXYZ(n,An.x,An.y,An.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix4(t),this.setXYZ(n,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyNormalMatrix(t),this.setXYZ(n,An.x,An.y,An.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.transformDirection(t),this.setXYZ(n,An.x,An.y,An.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=eu(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ci(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=eu(n,this.array)),n}setX(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=eu(n,this.array)),n}setY(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=eu(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=eu(n,this.array)),n}setW(t,n){return this.normalized&&(n=ci(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ci(n,this.array),a=ci(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ci(n,this.array),a=ci(a,this.array),s=ci(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,u){return t*=this.itemSize,this.normalized&&(n=ci(n,this.array),a=ci(a,this.array),s=ci(s,this.array),u=ci(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ox&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class xy extends ca{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Sy extends ca{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ji extends ca{constructor(t,n,a){super(new Float32Array(t),n,a)}}const Qb=new ks,au=new $,Ep=new $;class Uu{constructor(t=new $,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):Qb.setFromPoints(t).getCenter(a);let s=0;for(let u=0,c=t.length;u<c;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;au.subVectors(t,this.center);const n=au.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(au,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(au.copy(t.center).add(Ep)),this.expandByPoint(au.copy(t.center).sub(Ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let jb=0;const Zi=new Ze,bp=new jn,Oo=new $,wi=new ks,ru=new ks,On=new $;class wa extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Du(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cb(t)?Sy:xy)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new re().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zi.makeRotationFromQuaternion(t),this.applyMatrix4(Zi),this}rotateX(t){return Zi.makeRotationX(t),this.applyMatrix4(Zi),this}rotateY(t){return Zi.makeRotationY(t),this.applyMatrix4(Zi),this}rotateZ(t){return Zi.makeRotationZ(t),this.applyMatrix4(Zi),this}translate(t,n,a){return Zi.makeTranslation(t,n,a),this.applyMatrix4(Zi),this}scale(t,n,a){return Zi.makeScale(t,n,a),this.applyMatrix4(Zi),this}lookAt(t){return bp.lookAt(t),bp.updateMatrix(),this.applyMatrix4(bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ji(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const u=t[s];n.setXYZ(s,u.x,u.y,u.z||0)}t.length>n.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const u=n[a];wi.setFromBufferAttribute(u),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const a=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];ru.setFromBufferAttribute(f),this.morphTargetsRelative?(On.addVectors(wi.min,ru.min),wi.expandByPoint(On),On.addVectors(wi.max,ru.max),wi.expandByPoint(On)):(wi.expandByPoint(ru.min),wi.expandByPoint(ru.max))}wi.getCenter(a);let s=0;for(let u=0,c=t.count;u<c;u++)On.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(On));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)On.fromBufferAttribute(f,d),p&&(Oo.fromBufferAttribute(t,d),On.add(Oo)),s=Math.max(s,a.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,u=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==a.count)&&(c=new ca(new Float32Array(4*a.count),4),this.setAttribute("tangent",c));const f=[],p=[];for(let T=0;T<a.count;T++)f[T]=new $,p[T]=new $;const d=new $,_=new $,v=new $,g=new _e,S=new _e,E=new _e,b=new $,y=new $;function x(T,N,G){d.fromBufferAttribute(a,T),_.fromBufferAttribute(a,N),v.fromBufferAttribute(a,G),g.fromBufferAttribute(u,T),S.fromBufferAttribute(u,N),E.fromBufferAttribute(u,G),_.sub(d),v.sub(d),S.sub(g),E.sub(g);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),f[T].add(b),f[N].add(b),f[G].add(b),p[T].add(y),p[N].add(y),p[G].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let T=0,N=U.length;T<N;++T){const G=U[T],V=G.start,W=G.count;for(let lt=V,ct=V+W;lt<ct;lt+=3)x(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const P=new $,R=new $,D=new $,O=new $;function L(T){D.fromBufferAttribute(s,T),O.copy(D);const N=f[T];P.copy(N),P.sub(D.multiplyScalar(D.dot(N))).normalize(),R.crossVectors(O,N);const V=R.dot(p[T])<0?-1:1;c.setXYZW(T,P.x,P.y,P.z,V)}for(let T=0,N=U.length;T<N;++T){const G=U[T],V=G.start,W=G.count;for(let lt=V,ct=V+W;lt<ct;lt+=3)L(t.getX(lt+0)),L(t.getX(lt+1)),L(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new ca(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const s=new $,u=new $,c=new $,f=new $,p=new $,d=new $,_=new $,v=new $;if(t)for(let g=0,S=t.count;g<S;g+=3){const E=t.getX(g+0),b=t.getX(g+1),y=t.getX(g+2);s.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,y),_.subVectors(c,u),v.subVectors(s,u),_.cross(v),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,b),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,S=n.count;g<S;g+=3)s.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),_.subVectors(c,u),v.subVectors(s,u),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)On.fromBufferAttribute(t,n),On.normalize(),t.setXYZ(n,On.x,On.y,On.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,v=f.normalized,g=new d.constructor(p.length*_);let S=0,E=0;for(let b=0,y=p.length;b<y;b++){f.isInterleavedBufferAttribute?S=p[b]*f.data.stride+f.offset:S=p[b]*_;for(let x=0;x<_;x++)g[E++]=d[S++]}return new ca(g,_,v)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wa,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const u=this.morphAttributes;for(const f in u){const p=[],d=u[f];for(let _=0,v=d.length;_<v;_++){const g=d[_],S=t(g,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,g=d.length;v<g;v++){const S=d[v];_.push(S.toJSON(t.data))}_.length>0&&(s[p]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const u=t.morphAttributes;for(const d in u){const _=[],v=u[d];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Jb=0;class sl extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=Du(),this.name="",this.type="Material",this.blending=Xo,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zp,this.blendDst=Kp,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ne(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector2&&a&&a.isVector2||s&&s.isEuler&&a&&a.isEuler||s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(a.blending=this.blending),this.side!==$r&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Zp&&(a.blendSrc=this.blendSrc),this.blendDst!==Kp&&(a.blendDst=this.blendDst),this.blendEquation!==Us&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const c=[];for(const f in u){const p=u[f];delete p.metadata,c.push(p)}return c}if(n){const u=s(t.textures),c=s(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new _e().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const $a=new $,Tp=new $,$c=new $,Vr=new $,Ap=new $,tf=new $,Rp=new $;class yy{constructor(t=new $,n=new $(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$a)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=$a.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):($a.copy(this.origin).addScaledVector(this.direction,n),$a.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){Tp.copy(t).add(n).multiplyScalar(.5),$c.copy(n).sub(t).normalize(),Vr.copy(this.origin).sub(Tp);const u=t.distanceTo(n)*.5,c=-this.direction.dot($c),f=Vr.dot(this.direction),p=-Vr.dot($c),d=Vr.lengthSq(),_=Math.abs(1-c*c);let v,g,S,E;if(_>0)if(v=c*p-f,g=c*f-p,E=u*_,v>=0)if(g>=-E)if(g<=E){const b=1/_;v*=b,g*=b,S=v*(v+c*g+2*f)+g*(c*v+g+2*p)+d}else g=u,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;else g=-u,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;else g<=-E?(v=Math.max(0,-(-c*u+f)),g=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+g*(g+2*p)+d):g<=E?(v=0,g=Math.min(Math.max(-u,-p),u),S=g*(g+2*p)+d):(v=Math.max(0,-(c*u+f)),g=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+g*(g+2*p)+d);else g=c>0?-u:u,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Tp).addScaledVector($c,g),S}intersectSphere(t,n){$a.subVectors(t.center,this.origin);const a=$a.dot(this.direction),s=$a.dot($a)-a*a,u=t.radius*t.radius;if(s>u)return null;const c=Math.sqrt(u-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,u,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(a=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),_>=0?(u=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(u=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),a>c||u>s||((u>a||isNaN(a))&&(a=u),(c<s||isNaN(s))&&(s=c),v>=0?(f=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(f=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,$a)!==null}intersectTriangle(t,n,a,s,u){Ap.subVectors(n,t),tf.subVectors(a,t),Rp.crossVectors(Ap,tf);let c=this.direction.dot(Rp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Vr.subVectors(this.origin,t);const p=f*this.direction.dot(tf.crossVectors(Vr,tf));if(p<0)return null;const d=f*this.direction.dot(Ap.cross(Vr));if(d<0||p+d>c)return null;const _=-f*Vr.dot(Rp);return _<0?null:this.at(_/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class My extends sl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kx=new Ze,As=new yy,ef=new Uu,Qx=new $,nf=new $,af=new $,rf=new $,Cp=new $,sf=new $,jx=new $,of=new $;class In extends jn{constructor(t=new wa,n=new My){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(u&&f){sf.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const _=f[p],v=u[p];_!==0&&(Cp.fromBufferAttribute(v,t),c?sf.addScaledVector(Cp,_):sf.addScaledVector(Cp.sub(n),_))}n.add(sf)}return n}raycast(t,n){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ef.copy(a.boundingSphere),ef.applyMatrix4(u),As.copy(t.ray).recast(t.near),!(ef.containsPoint(As.origin)===!1&&(As.intersectSphere(ef,Qx)===null||As.origin.distanceToSquared(Qx)>(t.far-t.near)**2))&&(Kx.copy(u).invert(),As.copy(t.ray).applyMatrix4(Kx),!(a.boundingBox!==null&&As.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,As)))}_computeIntersections(t,n,a){let s;const u=this.geometry,c=this.material,f=u.index,p=u.attributes.position,d=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,g=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,b=g.length;E<b;E++){const y=g[E],x=c[y.materialIndex],U=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,D=P;R<D;R+=3){const O=f.getX(R),L=f.getX(R+1),T=f.getX(R+2);s=lf(this,x,t,a,d,_,v,O,L,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const E=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let y=E,x=b;y<x;y+=3){const U=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);s=lf(this,c,t,a,d,_,v,U,P,R),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,b=g.length;E<b;E++){const y=g[E],x=c[y.materialIndex],U=Math.max(y.start,S.start),P=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,D=P;R<D;R+=3){const O=R,L=R+1,T=R+2;s=lf(this,x,t,a,d,_,v,O,L,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let y=E,x=b;y<x;y+=3){const U=y,P=y+1,R=y+2;s=lf(this,c,t,a,d,_,v,U,P,R),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}}function $b(o,t,n,a,s,u,c,f){let p;if(t.side===ei?p=a.intersectTriangle(c,u,s,!0,f):p=a.intersectTriangle(s,u,c,t.side===$r,f),p===null)return null;of.copy(f),of.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(of);return d<n.near||d>n.far?null:{distance:d,point:of.clone(),object:o}}function lf(o,t,n,a,s,u,c,f,p,d){o.getVertexPosition(f,nf),o.getVertexPosition(p,af),o.getVertexPosition(d,rf);const _=$b(o,t,n,a,nf,af,rf,jx);if(_){const v=new $;oa.getBarycoord(jx,nf,af,rf,v),s&&(_.uv=oa.getInterpolatedAttribute(s,f,p,d,v,new _e)),u&&(_.uv1=oa.getInterpolatedAttribute(u,f,p,d,v,new _e)),c&&(_.normal=oa.getInterpolatedAttribute(c,f,p,d,v,new $),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new $,materialIndex:0};oa.getNormal(nf,af,rf,g.normal),_.face=g,_.barycoord=v}return _}class Ey extends ni{constructor(t=null,n=1,a=1,s,u,c,f,p,d=kn,_=kn,v,g){super(null,c,f,p,d,_,s,u,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jx extends ca{constructor(t,n,a,s=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Po=new Ze,$x=new Ze,uf=[],tS=new ks,tT=new Ze,su=new In,ou=new Uu;class by extends In{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Jx(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<a;s++)this.setMatrixAt(s,tT)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Po),tS.copy(t.boundingBox).applyMatrix4(Po),this.boundingBox.union(tS)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Uu),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Po),ou.copy(t.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(ou)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,s=this.morphTexture.source.data.data,u=a.length+1,c=t*u+1;for(let f=0;f<a.length;f++)a[f]=s[c+f]}raycast(t,n){const a=this.matrixWorld,s=this.count;if(su.geometry=this.geometry,su.material=this.material,su.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(a),t.ray.intersectsSphere(ou)!==!1))for(let u=0;u<s;u++){this.getMatrixAt(u,Po),$x.multiplyMatrices(a,Po),su.matrixWorld=$x,su.raycast(t,uf);for(let c=0,f=uf.length;c<f;c++){const p=uf[c];p.instanceId=u,p.object=this,n.push(p)}uf.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new Jx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,s=a.length+1;this.morphTexture===null&&(this.morphTexture=new Ey(new Float32Array(s*this.count),s,this.count,l_,la));const u=this.morphTexture.source.data.data;let c=0;for(let d=0;d<a.length;d++)c+=a[d];const f=this.geometry.morphTargetsRelative?1:1-c,p=s*t;return u[p]=f,u.set(a,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wp=new $,eT=new $,nT=new re;class Wr{constructor(t=new $(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=wp.subVectors(a,n).cross(eT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const s=t.delta(wp),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/u;return a===!0&&(c<0||c>1)?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||nT.getNormalMatrix(t),s=this.coplanarPoint(wp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Uu,iT=new _e(.5,.5),cf=new $;class __{constructor(t=new Wr,n=new Wr,a=new Wr,s=new Wr,u=new Wr,c=new Wr){this.planes=[t,n,a,s,u,c]}set(t,n,a,s,u,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(u),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ma,a=!1){const s=this.planes,u=t.elements,c=u[0],f=u[1],p=u[2],d=u[3],_=u[4],v=u[5],g=u[6],S=u[7],E=u[8],b=u[9],y=u[10],x=u[11],U=u[12],P=u[13],R=u[14],D=u[15];if(s[0].setComponents(d-c,S-_,x-E,D-U).normalize(),s[1].setComponents(d+c,S+_,x+E,D+U).normalize(),s[2].setComponents(d+f,S+v,x+b,D+P).normalize(),s[3].setComponents(d-f,S-v,x-b,D-P).normalize(),a)s[4].setComponents(p,g,y,R).normalize(),s[5].setComponents(d-p,S-g,x-y,D-R).normalize();else if(s[4].setComponents(d-p,S-g,x-y,D-R).normalize(),n===Ma)s[5].setComponents(d+p,S+g,x+y,D+R).normalize();else if(n===yu)s[5].setComponents(p,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const n=iT.distanceTo(t.center);return Rs.radius=.7071067811865476+n,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(cf.x=s.normal.x>0?t.max.x:t.min.x,cf.y=s.normal.y>0?t.max.y:t.min.y,cf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cf)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ty extends ni{constructor(t=[],n=Hs,a,s,u,c,f,p,d,_){super(t,n,a,s,u,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jo extends ni{constructor(t,n,a=Aa,s,u,c,f=kn,p=kn,d,_=or,v=1){if(_!==or&&_!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,s,u,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new p_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class aT extends Jo{constructor(t,n=Aa,a=Hs,s,u,c=kn,f=kn,p,d=or){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,a,s,u,c,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ay extends ni{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ol extends wa{constructor(t=1,n=1,a=1,s=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:u,depthSegments:c};const f=this;s=Math.floor(s),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,a,n,t,c,u,0),E("z","y","x",1,-1,a,n,-t,c,u,1),E("x","z","y",1,1,t,a,n,s,c,2),E("x","z","y",1,-1,t,a,-n,s,c,3),E("x","y","z",1,-1,t,n,a,s,u,4),E("x","y","z",-1,-1,t,n,-a,s,u,5),this.setIndex(p),this.setAttribute("position",new Ji(d,3)),this.setAttribute("normal",new Ji(_,3)),this.setAttribute("uv",new Ji(v,2));function E(b,y,x,U,P,R,D,O,L,T,N){const G=R/L,V=D/T,W=R/2,lt=D/2,ct=O/2,Z=L+1,F=T+1;let B=0,J=0;const pt=new $;for(let yt=0;yt<F;yt++){const I=yt*V-lt;for(let K=0;K<Z;K++){const Mt=K*G-W;pt[b]=Mt*U,pt[y]=I*P,pt[x]=ct,d.push(pt.x,pt.y,pt.z),pt[b]=0,pt[y]=0,pt[x]=O>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(K/L),v.push(1-yt/T),B+=1}}for(let yt=0;yt<T;yt++)for(let I=0;I<L;I++){const K=g+I+Z*yt,Mt=g+I+Z*(yt+1),Tt=g+(I+1)+Z*(yt+1),Dt=g+(I+1)+Z*yt;p.push(K,Mt,Dt),p.push(Mt,Tt,Dt),J+=6}f.addGroup(S,J,N),S+=J,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Vf extends wa{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const u=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,v=t/f,g=n/p,S=[],E=[],b=[],y=[];for(let x=0;x<_;x++){const U=x*g-c;for(let P=0;P<d;P++){const R=P*v-u;E.push(R,-U,0),b.push(0,0,1),y.push(P/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<f;U++){const P=U+d*x,R=U+d*(x+1),D=U+1+d*(x+1),O=U+1+d*x;S.push(P,R,O),S.push(R,D,O)}this.setIndex(S),this.setAttribute("position",new Ji(E,3)),this.setAttribute("normal",new Ji(b,3)),this.setAttribute("uv",new Ji(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vf(t.width,t.height,t.widthSegments,t.heightSegments)}}class g_ extends wa{constructor(t=1,n=32,a=16,s=0,u=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:s,phiLength:u,thetaStart:c,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(c+f,Math.PI);let d=0;const _=[],v=new $,g=new $,S=[],E=[],b=[],y=[];for(let x=0;x<=a;x++){const U=[],P=x/a,R=c+P*f,D=t*Math.cos(R),O=Math.sqrt(t*t-D*D);let L=0;x===0&&c===0?L=.5/n:x===a&&p===Math.PI&&(L=-.5/n);for(let T=0;T<=n;T++){const N=T/n,G=s+N*u;v.x=-O*Math.cos(G),v.y=D,v.z=O*Math.sin(G),E.push(v.x,v.y,v.z),g.copy(v).normalize(),b.push(g.x,g.y,g.z),y.push(N+L,1-P),U.push(d++)}_.push(U)}for(let x=0;x<a;x++)for(let U=0;U<n;U++){const P=_[x][U+1],R=_[x][U],D=_[x+1][U],O=_[x+1][U+1];(x!==0||c>0)&&S.push(P,R,O),(x!==a-1||p<Math.PI)&&S.push(R,D,O)}this.setIndex(S),this.setAttribute("position",new Ji(E,3)),this.setAttribute("normal",new Ji(b,3)),this.setAttribute("uv",new Ji(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new g_(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function $o(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];if(eS(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone();else if(Array.isArray(s))if(eS(s[0])){const u=[];for(let c=0,f=s.length;c<f;c++)u[c]=s[c].clone();t[n][a]=u}else t[n][a]=s.slice();else t[n][a]=s}}return t}function ti(o){const t={};for(let n=0;n<o.length;n++){const a=$o(o[n]);for(const s in a)t[s]=a[s]}return t}function eS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function rT(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function Ry(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const sT={clone:$o,merge:ti};var oT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ra extends sl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oT,this.fragmentShader=lT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$o(t.uniforms),this.uniformsGroups=rT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const s=t.uniforms[a];switch(this.uniforms[a]={},s.type){case"t":this.uniforms[a].value=n[s.value]||null;break;case"c":this.uniforms[a].value=new ue().setHex(s.value);break;case"v2":this.uniforms[a].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[a].value=new $().fromArray(s.value);break;case"v4":this.uniforms[a].value=new sn().fromArray(s.value);break;case"m3":this.uniforms[a].value=new re().fromArray(s.value);break;case"m4":this.uniforms[a].value=new Ze().fromArray(s.value);break;default:this.uniforms[a].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class uT extends Ra{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Im extends sl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cf,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cT extends Im{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fT extends sl{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cf,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=i_,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hT extends sl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dT extends sl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cy extends jn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Dp=new Ze,nS=new $,iS=new $;class pT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new __,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;nS.setFromMatrixPosition(t.matrixWorld),n.position.copy(nS),iS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(iS),n.updateMatrixWorld(),Dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===yu||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Dp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ff=new $,hf=new rl,ga=new $;class wy extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ff,hf,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ff,hf,ga.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(ff,hf,ga),ga.x===1&&ga.y===1&&ga.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ff,hf,ga.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kr=new $,aS=new _e,rS=new _e;class Ni extends wy{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Pm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pm*2*Math.atan(Math.tan(sp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-t/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(kr.x,kr.y).multiplyScalar(-t/kr.z)}getViewSize(t,n){return this.getViewBounds(t,aS,rS),n.subVectors(rS,aS)}setViewOffset(t,n,a,s,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(sp*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,u=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class mT extends pT{constructor(){super(new Ni(90,1,.5,500)),this.isPointLightShadow=!0}}class Dy extends Cy{constructor(t,n,a=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=s,this.shadow=new mT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Uy extends wy{constructor(t=-1,n=1,a=1,s=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _T extends Cy{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Io=-90,zo=1;class gT extends jn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ni(Io,zo,t,n);s.layers=this.layers,this.add(s);const u=new Ni(Io,zo,t,n);u.layers=this.layers,this.add(u);const c=new Ni(Io,zo,t,n);c.layers=this.layers,this.add(c);const f=new Ni(Io,zo,t,n);f.layers=this.layers,this.add(f);const p=new Ni(Io,zo,t,n);p.layers=this.layers,this.add(p);const d=new Ni(Io,zo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,u,c,f,p]=n;for(const d of n)this.remove(d);if(t===Ma)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===yu)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,p,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class vT extends Ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const sS=new Ze;class xT{constructor(t,n,a=0,s=1/0){this.ray=new yy(t,n),this.near=a,this.far=s,this.camera=null,this.layers=new m_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Te("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return sS.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sS),this}intersectObject(t,n=!0,a=[]){return zm(t,this,a,n),a.sort(oS),a}intersectObjects(t,n=!0,a=[]){for(let s=0,u=t.length;s<u;s++)zm(t[s],this,a,n);return a.sort(oS),a}}function oS(o,t){return o.distance-t.distance}function zm(o,t,n,a){let s=!0;if(o.layers.test(t.layers)&&o.raycast(t,n)===!1&&(s=!1),s===!0&&a===!0){const u=o.children;for(let c=0,f=u.length;c<f;c++)zm(u[c],t,n,!0)}}class ST{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const H_=class H_{constructor(t,n,a,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,s){const u=this.elements;return u[0]=t,u[2]=n,u[1]=a,u[3]=s,this}};H_.prototype.isMatrix2=!0;let lS=H_;function uS(o,t,n,a){const s=yT(a);switch(n){case dy:return o*t;case l_:return o*t/s.components*s.byteLength;case u_:return o*t/s.components*s.byteLength;case Gs:return o*t*2/s.components*s.byteLength;case c_:return o*t*2/s.components*s.byteLength;case py:return o*t*3/s.components*s.byteLength;case ua:return o*t*4/s.components*s.byteLength;case f_:return o*t*4/s.components*s.byteLength;case vf:case xf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sf:case yf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sm:case lm:return Math.max(o,16)*Math.max(t,8)/4;case rm:case om:return Math.max(o,8)*Math.max(t,8)/2;case um:case cm:case hm:case dm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case fm:case Af:case pm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case mm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _m:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case gm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case vm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case xm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Sm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ym:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Mm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Em:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case bm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Tm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Am:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Rm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Cm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case wm:case Dm:case Um:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Nm:case Lm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Rf:case Om:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yT(o){switch(o){case Li:case uy:return{byteLength:1,components:1};case xu:case cy:case sr:return{byteLength:2,components:1};case s_:case o_:return{byteLength:2,components:4};case Aa:case r_:case la:return{byteLength:4,components:1};case fy:case hy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:n_}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=n_);function Ny(){let o=null,t=!1,n=null,a=null;function s(u,c){n(u,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&o!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function MT(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=o.SHORT;else if(d instanceof Uint32Array)S=o.UNSIGNED_INT;else if(d instanceof Int32Array)S=o.INT;else if(d instanceof Int8Array)S=o.BYTE;else if(d instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,p,d){const _=p.array,v=p.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],b=v[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++g,v[g]=b)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const b=v[S];o.bufferSubData(d,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:u,update:c}}var ET=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
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
#endif`,TT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wT=`#ifdef USE_AOMAP
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
#endif`,DT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UT=`#ifdef USE_BATCHING
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
#endif`,NT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IT=`#ifdef USE_IRIDESCENCE
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
#endif`,zT=`#ifdef USE_BUMPMAP
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qT=`#define PI 3.141592653589793
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
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZT=`vec3 transformedNormal = objectNormal;
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
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",tA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,aA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cA=`#ifdef USE_GRADIENTMAP
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
}`,fA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mA=`#ifdef USE_ENVMAP
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
	#endif
#endif`,_A=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SA=`PhysicalMaterial material;
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
#endif`,yA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,MA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,EA=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,AA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LA=`#if defined( USE_POINTS_UV )
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
#endif`,OA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BA=`#ifdef USE_MORPHTARGETS
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
#endif`,HA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qA=`#ifdef USE_NORMALMAP
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
#endif`,YA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,sR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,oR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,lR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,uR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cR=`#ifdef USE_SKINNING
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
#endif`,fR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hR=`#ifdef USE_SKINNING
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
#endif`,dR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_R=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gR=`#ifdef USE_TRANSMISSION
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
#endif`,vR=`#ifdef USE_TRANSMISSION
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
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ER=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bR=`uniform sampler2D t2D;
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
}`,TR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wR=`#include <common>
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
}`,DR=`#if DEPTH_PACKING == 3200
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
}`,UR=`#define DISTANCE
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
}`,NR=`#define DISTANCE
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
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`uniform float scale;
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
}`,IR=`uniform vec3 diffuse;
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
}`,zR=`#include <common>
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
}`,FR=`uniform vec3 diffuse;
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
}`,BR=`#define LAMBERT
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
}`,HR=`#define LAMBERT
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
}`,GR=`#define MATCAP
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
}`,VR=`#define MATCAP
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
}`,kR=`#define NORMAL
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
}`,XR=`#define NORMAL
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
}`,WR=`#define PHONG
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
}`,qR=`#define PHONG
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
}`,YR=`#define STANDARD
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
}`,ZR=`#define STANDARD
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
}`,KR=`#define TOON
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
}`,QR=`#define TOON
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
}`,jR=`uniform float size;
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
}`,JR=`uniform vec3 diffuse;
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
}`,$R=`#include <common>
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
}`,t3=`uniform vec3 color;
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
}`,e3=`uniform float rotation;
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
}`,n3=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:ET,alphahash_pars_fragment:bT,alphamap_fragment:TT,alphamap_pars_fragment:AT,alphatest_fragment:RT,alphatest_pars_fragment:CT,aomap_fragment:wT,aomap_pars_fragment:DT,batching_pars_vertex:UT,batching_vertex:NT,begin_vertex:LT,beginnormal_vertex:OT,bsdfs:PT,iridescence_fragment:IT,bumpmap_pars_fragment:zT,clipping_planes_fragment:FT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:GT,color_fragment:VT,color_pars_fragment:kT,color_pars_vertex:XT,color_vertex:WT,common:qT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:ZT,displacementmap_pars_vertex:KT,displacementmap_vertex:QT,emissivemap_fragment:jT,emissivemap_pars_fragment:JT,colorspace_fragment:$T,colorspace_pars_fragment:tA,envmap_fragment:eA,envmap_common_pars_fragment:nA,envmap_pars_fragment:iA,envmap_pars_vertex:aA,envmap_physical_pars_fragment:mA,envmap_vertex:rA,fog_vertex:sA,fog_pars_vertex:oA,fog_fragment:lA,fog_pars_fragment:uA,gradientmap_pars_fragment:cA,lightmap_pars_fragment:fA,lights_lambert_fragment:hA,lights_lambert_pars_fragment:dA,lights_pars_begin:pA,lights_toon_fragment:_A,lights_toon_pars_fragment:gA,lights_phong_fragment:vA,lights_phong_pars_fragment:xA,lights_physical_fragment:SA,lights_physical_pars_fragment:yA,lights_fragment_begin:MA,lights_fragment_maps:EA,lights_fragment_end:bA,lightprobes_pars_fragment:TA,logdepthbuf_fragment:AA,logdepthbuf_pars_fragment:RA,logdepthbuf_pars_vertex:CA,logdepthbuf_vertex:wA,map_fragment:DA,map_pars_fragment:UA,map_particle_fragment:NA,map_particle_pars_fragment:LA,metalnessmap_fragment:OA,metalnessmap_pars_fragment:PA,morphinstance_vertex:IA,morphcolor_vertex:zA,morphnormal_vertex:FA,morphtarget_pars_vertex:BA,morphtarget_vertex:HA,normal_fragment_begin:GA,normal_fragment_maps:VA,normal_pars_fragment:kA,normal_pars_vertex:XA,normal_vertex:WA,normalmap_pars_fragment:qA,clearcoat_normal_fragment_begin:YA,clearcoat_normal_fragment_maps:ZA,clearcoat_pars_fragment:KA,iridescence_pars_fragment:QA,opaque_fragment:jA,packing:JA,premultiplied_alpha_fragment:$A,project_vertex:tR,dithering_fragment:eR,dithering_pars_fragment:nR,roughnessmap_fragment:iR,roughnessmap_pars_fragment:aR,shadowmap_pars_fragment:rR,shadowmap_pars_vertex:sR,shadowmap_vertex:oR,shadowmask_pars_fragment:lR,skinbase_vertex:uR,skinning_pars_vertex:cR,skinning_vertex:fR,skinnormal_vertex:hR,specularmap_fragment:dR,specularmap_pars_fragment:pR,tonemapping_fragment:mR,tonemapping_pars_fragment:_R,transmission_fragment:gR,transmission_pars_fragment:vR,uv_pars_fragment:xR,uv_pars_vertex:SR,uv_vertex:yR,worldpos_vertex:MR,background_vert:ER,background_frag:bR,backgroundCube_vert:TR,backgroundCube_frag:AR,cube_vert:RR,cube_frag:CR,depth_vert:wR,depth_frag:DR,distance_vert:UR,distance_frag:NR,equirect_vert:LR,equirect_frag:OR,linedashed_vert:PR,linedashed_frag:IR,meshbasic_vert:zR,meshbasic_frag:FR,meshlambert_vert:BR,meshlambert_frag:HR,meshmatcap_vert:GR,meshmatcap_frag:VR,meshnormal_vert:kR,meshnormal_frag:XR,meshphong_vert:WR,meshphong_frag:qR,meshphysical_vert:YR,meshphysical_frag:ZR,meshtoon_vert:KR,meshtoon_frag:QR,points_vert:jR,points_frag:JR,shadow_vert:$R,shadow_frag:t3,sprite_vert:e3,sprite_frag:n3},It={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Sa={basic:{uniforms:ti([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:ti([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:ti([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:ti([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:ti([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ue(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:ti([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:ti([It.points,It.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:ti([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:ti([It.common,It.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:ti([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:ti([It.sprite,It.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:ti([It.common,It.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:ti([It.lights,It.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Sa.physical={uniforms:ti([Sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const df={r:0,b:0,g:0},i3=new Ze,Ly=new re;Ly.set(-1,0,0,0,1,0,0,0,1);function a3(o,t,n,a,s,u){const c=new ue(0);let f=s===!0?0:1,p,d,_=null,v=0,g=null;function S(U){let P=U.isScene===!0?U.background:null;if(P&&P.isTexture){const R=U.backgroundBlurriness>0;P=t.get(P,R)}return P}function E(U){let P=!1;const R=S(U);R===null?y(c,f):R&&R.isColor&&(y(R,1),P=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(U,P){const R=S(P);R&&(R.isCubeTexture||R.mapping===Gf)?(d===void 0&&(d=new In(new ol(1,1,1),new Ra({name:"BackgroundCubeMaterial",uniforms:$o(Sa.backgroundCube.uniforms),vertexShader:Sa.backgroundCube.vertexShader,fragmentShader:Sa.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(i3.makeRotationFromEuler(P.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ly),d.material.toneMapped=Ee.getTransfer(R.colorSpace)!==Fe,(_!==R||v!==R.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,g=o.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new In(new Vf(2,2),new Ra({name:"BackgroundMaterial",uniforms:$o(Sa.background.uniforms),vertexShader:Sa.background.vertexShader,fragmentShader:Sa.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(R.colorSpace)!==Fe,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,g=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,P){U.getRGB(df,Ry(o)),n.buffers.color.setClear(df.r,df.g,df.b,P,u)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(U,P=1){c.set(U),f=P,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,y(c,f)},render:E,addToRenderList:b,dispose:x}}function r3(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=g(null);let u=s,c=!1;function f(V,W,lt,ct,Z){let F=!1;const B=v(V,ct,lt,W);u!==B&&(u=B,d(u.object)),F=S(V,ct,lt,Z),F&&E(V,ct,lt,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,R(V,W,lt,ct),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return o.createVertexArray()}function d(V){return o.bindVertexArray(V)}function _(V){return o.deleteVertexArray(V)}function v(V,W,lt,ct){const Z=ct.wireframe===!0;let F=a[W.id];F===void 0&&(F={},a[W.id]=F);const B=V.isInstancedMesh===!0?V.id:0;let J=F[B];J===void 0&&(J={},F[B]=J);let pt=J[lt.id];pt===void 0&&(pt={},J[lt.id]=pt);let yt=pt[Z];return yt===void 0&&(yt=g(p()),pt[Z]=yt),yt}function g(V){const W=[],lt=[],ct=[];for(let Z=0;Z<n;Z++)W[Z]=0,lt[Z]=0,ct[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:lt,attributeDivisors:ct,object:V,attributes:{},index:null}}function S(V,W,lt,ct){const Z=u.attributes,F=W.attributes;let B=0;const J=lt.getAttributes();for(const pt in J)if(J[pt].location>=0){const I=Z[pt];let K=F[pt];if(K===void 0&&(pt==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),pt==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;B++}return u.attributesNum!==B||u.index!==ct}function E(V,W,lt,ct){const Z={},F=W.attributes;let B=0;const J=lt.getAttributes();for(const pt in J)if(J[pt].location>=0){let I=F[pt];I===void 0&&(pt==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),pt==="instanceColor"&&V.instanceColor&&(I=V.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),Z[pt]=K,B++}u.attributes=Z,u.attributesNum=B,u.index=ct}function b(){const V=u.newAttributes;for(let W=0,lt=V.length;W<lt;W++)V[W]=0}function y(V){x(V,0)}function x(V,W){const lt=u.newAttributes,ct=u.enabledAttributes,Z=u.attributeDivisors;lt[V]=1,ct[V]===0&&(o.enableVertexAttribArray(V),ct[V]=1),Z[V]!==W&&(o.vertexAttribDivisor(V,W),Z[V]=W)}function U(){const V=u.newAttributes,W=u.enabledAttributes;for(let lt=0,ct=W.length;lt<ct;lt++)W[lt]!==V[lt]&&(o.disableVertexAttribArray(lt),W[lt]=0)}function P(V,W,lt,ct,Z,F,B){B===!0?o.vertexAttribIPointer(V,W,lt,Z,F):o.vertexAttribPointer(V,W,lt,ct,Z,F)}function R(V,W,lt,ct){b();const Z=ct.attributes,F=lt.getAttributes(),B=W.defaultAttributeValues;for(const J in F){const pt=F[J];if(pt.location>=0){let yt=Z[J];if(yt===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(yt=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(yt=V.instanceColor)),yt!==void 0){const I=yt.normalized,K=yt.itemSize,Mt=t.get(yt);if(Mt===void 0)continue;const Tt=Mt.buffer,Dt=Mt.type,at=Mt.bytesPerElement,St=Dt===o.INT||Dt===o.UNSIGNED_INT||yt.gpuType===r_;if(yt.isInterleavedBufferAttribute){const bt=yt.data,Ht=bt.stride,ee=yt.offset;if(bt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<pt.locationSize;Qt++)x(pt.location+Qt,bt.meshPerAttribute);V.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Qt=0;Qt<pt.locationSize;Qt++)y(pt.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Qt=0;Qt<pt.locationSize;Qt++)P(pt.location+Qt,K/pt.locationSize,Dt,I,Ht*at,(ee+K/pt.locationSize*Qt)*at,St)}else{if(yt.isInstancedBufferAttribute){for(let bt=0;bt<pt.locationSize;bt++)x(pt.location+bt,yt.meshPerAttribute);V.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let bt=0;bt<pt.locationSize;bt++)y(pt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let bt=0;bt<pt.locationSize;bt++)P(pt.location+bt,K/pt.locationSize,Dt,I,K*at,K/pt.locationSize*bt*at,St)}}else if(B!==void 0){const I=B[J];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(pt.location,I);break;case 3:o.vertexAttrib3fv(pt.location,I);break;case 4:o.vertexAttrib4fv(pt.location,I);break;default:o.vertexAttrib1fv(pt.location,I)}}}}U()}function D(){N();for(const V in a){const W=a[V];for(const lt in W){const ct=W[lt];for(const Z in ct){const F=ct[Z];for(const B in F)_(F[B].object),delete F[B];delete ct[Z]}}delete a[V]}}function O(V){if(a[V.id]===void 0)return;const W=a[V.id];for(const lt in W){const ct=W[lt];for(const Z in ct){const F=ct[Z];for(const B in F)_(F[B].object),delete F[B];delete ct[Z]}}delete a[V.id]}function L(V){for(const W in a){const lt=a[W];for(const ct in lt){const Z=lt[ct];if(Z[V.id]===void 0)continue;const F=Z[V.id];for(const B in F)_(F[B].object),delete F[B];delete Z[V.id]}}}function T(V){for(const W in a){const lt=a[W],ct=V.isInstancedMesh===!0?V.id:0,Z=lt[ct];if(Z!==void 0){for(const F in Z){const B=Z[F];for(const J in B)_(B[J].object),delete B[J];delete Z[F]}delete lt[ct],Object.keys(lt).length===0&&delete a[W]}}}function N(){G(),c=!0,u!==s&&(u=s,d(u.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:N,resetDefaultState:G,dispose:D,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:L,initAttributes:b,enableAttribute:y,disableUnusedAttributes:U}}function s3(o,t,n){let a;function s(p){a=p}function u(p,d){o.drawArrays(a,p,d),n.update(d,a,1)}function c(p,d,_){_!==0&&(o.drawArraysInstanced(a,p,d,_),n.update(d,a,_))}function f(p,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,_);let g=0;for(let S=0;S<_;S++)g+=d[S];n.update(g,a,1)}this.setMode=s,this.render=u,this.renderInstances=c,this.renderMultiDraw=f}function o3(o,t,n,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(L){return!(L!==ua&&a.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const T=L===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Li&&a.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==la&&!T)}function p(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(ne("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:R,maxSamples:D,samples:O}}function l3(o){const t=this;let n=null,a=0,s=!1,u=!1;const c=new Wr,f=new re,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||s;return s=g,a=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!s||E===null||E.length===0||u&&!y)u?_(null):d();else{const U=u?0:a,P=U*4;let R=x.clippingState||null;p.value=R,R=_(E,g,P,S);for(let D=0;D!==P;++D)R[D]=n[D];x.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(v,g,S,E){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=p.value,E!==!0||y===null){const x=S+b*4,U=g.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,R=S;P!==b;++P,R+=4)c.copy(v[P]).applyMatrix4(U,f),c.normal.toArray(y,R),y[R+3]=c.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}const Yr=4,cS=[.125,.215,.35,.446,.526,.582],Ns=20,u3=256,lu=new Uy,fS=new ue;let Up=null,Np=0,Lp=0,Op=!1;const c3=new $;class Fm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,s=100,u={}){const{size:c=256,position:f=c3}=u;Up=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Up,Np,Lp),this._renderer.xr.enabled=Op,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Hs||t.mapping===jo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Up=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:sr,format:ua,colorSpace:wf,depthBuffer:!1},s=hS(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hS(t,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f3(u)),this._blurMaterial=d3(u,t,n),this._ggxMaterial=h3(u,t,n)}return s}_compileMaterial(t){const n=new In(new wa,t);this._renderer.compile(n,lu)}_sceneToCubeUV(t,n,a,s,u){const p=new Ni(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(fS),v.toneMapping=ba,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new ol,new My({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let x=!1;const U=t.background;U?U.isColor&&(y.color.copy(U),t.background=null,x=!0):(y.color.copy(fS),x=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(p.up.set(0,d[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[P],u.y,u.z)):R===1?(p.up.set(0,0,d[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[P],u.z)):(p.up.set(0,d[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[P]));const D=this._cubeSize;Fo(s,R*D,P>2?D:0,D,D),v.setRenderTarget(s),x&&v.render(b,p),v.render(t,p)}v.toneMapping=S,v.autoClear=g,t.background=U}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Hs||t.mapping===jo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dS());const u=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const f=u.uniforms;f.envMap.value=t;const p=this._cubeSize;Fo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,lu)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let u=1;u<s;u++)this._applyGGXFilter(t,u-1,u);n.autoClear=a}_applyGGXFilter(t,n,a){const s=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,S=v*g,{_lodMax:E}=this,b=this._sizeLods[a],y=3*b*(a>E-Yr?a-E+Yr:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=E-n,Fo(u,y,x,3*b,2*b),s.setRenderTarget(u),s.render(f,lu),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=E-a,Fo(t,y,x,3*b,2*b),s.setRenderTarget(t),s.render(f,lu)}_blur(t,n,a,s,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",u),this._halfBlur(c,t,a,a,s,"longitudinal",u)}_halfBlur(t,n,a,s,u,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[s];v.material=d;const g=d.uniforms,S=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Ns-1),b=u/E,y=isFinite(u)?1+Math.floor(_*b):Ns;y>Ns&&ne(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ns}`);const x=[];let U=0;for(let L=0;L<Ns;++L){const T=L/b,N=Math.exp(-T*T/2);x.push(N),L===0?U+=N:L<y&&(U+=2*N)}for(let L=0;L<x.length;L++)x[L]=x[L]/U;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-a;const R=this._sizeLods[s],D=3*R*(s>P-Yr?s-P+Yr:0),O=4*(this._cubeSize-R);Fo(n,D,O,3*R,2*R),p.setRenderTarget(n),p.render(v,lu)}}function f3(o){const t=[],n=[],a=[];let s=o;const u=o-Yr+1+cS.length;for(let c=0;c<u;c++){const f=Math.pow(2,s);t.push(f);let p=1/f;c>o-Yr?p=cS[c-o+Yr-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,b=3,y=2,x=1,U=new Float32Array(b*E*S),P=new Float32Array(y*E*S),R=new Float32Array(x*E*S);for(let O=0;O<S;O++){const L=O%3*2/3-1,T=O>2?0:-1,N=[L,T,0,L+2/3,T,0,L+2/3,T+1,0,L,T,0,L+2/3,T+1,0,L,T+1,0];U.set(N,b*E*O),P.set(g,y*E*O);const G=[O,O,O,O,O,O];R.set(G,x*E*O)}const D=new wa;D.setAttribute("position",new ca(U,b)),D.setAttribute("uv",new ca(P,y)),D.setAttribute("faceIndex",new ca(R,x)),a.push(new In(D,null)),s>Yr&&s--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function hS(o,t,n){const a=new Ta(o,t,n);return a.texture.mapping=Gf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Fo(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function h3(o,t,n){return new Ra({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kf(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function d3(o,t,n){const a=new Float32Array(Ns),s=new $(0,1,0);return new Ra({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function dS(){return new Ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function pS(){return new Ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Oy extends Ta{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new Ty(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ol(5,5,5),u=new Ra({name:"CubemapFromEquirect",uniforms:$o(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:ar});u.uniforms.tEquirect.value=n;const c=new In(s,u),f=n.minFilter;return n.minFilter===Ls&&(n.minFilter=Qn),new gT(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(u)}}function p3(o){let t=new WeakMap,n=new WeakMap,a=null;function s(g,S=!1){return g==null?null:S?c(g):u(g)}function u(g){if(g&&g.isTexture){const S=g.mapping;if(S===ip||S===ap)if(t.has(g)){const E=t.get(g).texture;return f(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const b=new Oy(E.height);return b.fromEquirectangularTexture(o,g),t.set(g,b),g.addEventListener("dispose",d),f(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,E=S===ip||S===ap,b=S===Hs||S===jo;if(E||b){let y=n.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return a===null&&(a=new Fm(o)),y=E?a.fromEquirectangular(g,y):a.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const U=g.image;return E&&U&&U.height>0||b&&U&&p(U)?(a===null&&(a=new Fm(o)),y=E?a.fromEquirectangular(g):a.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function f(g,S){return S===ip?g.mapping=Hs:S===ap&&(g.mapping=jo),g}function p(g){let S=0;const E=6;for(let b=0;b<E;b++)g[b]!==void 0&&S++;return S===E}function d(g){const S=g.target;S.removeEventListener("dispose",d);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=n.get(S);E!==void 0&&(n.delete(S),E.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:v}}function m3(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const s=o.getExtension(a);return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Wo("WebGLRenderer: "+a+" extension not supported."),s}}}function _3(o,t,n,a){const s={},u=new WeakMap;function c(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete s[g.id];const S=u.get(g);S&&(t.remove(S),u.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(v,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const S in g)t.update(g[S],o.ARRAY_BUFFER)}function d(v){const g=[],S=v.index,E=v.attributes.position;let b=0;if(E===void 0)return;if(S!==null){const U=S.array;b=S.version;for(let P=0,R=U.length;P<R;P+=3){const D=U[P+0],O=U[P+1],L=U[P+2];g.push(D,O,O,L,L,D)}}else{const U=E.array;b=E.version;for(let P=0,R=U.length/3-1;P<R;P+=3){const D=P+0,O=P+1,L=P+2;g.push(D,O,O,L,L,D)}}const y=new(E.count>=65535?Sy:xy)(g,1);y.version=b;const x=u.get(v);x&&t.remove(x),u.set(v,y)}function _(v){const g=u.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&d(v)}else d(v);return u.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function g3(o,t,n){let a;function s(v){a=v}let u,c;function f(v){u=v.type,c=v.bytesPerElement}function p(v,g){o.drawElements(a,g,u,v*c),n.update(g,a,1)}function d(v,g,S){S!==0&&(o.drawElementsInstanced(a,g,u,v*c,S),n.update(g,a,S))}function _(v,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,u,v,0,S);let b=0;for(let y=0;y<S;y++)b+=g[y];n.update(b,a,1)}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function v3(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:Te("WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function x3(o,t,n){const a=new WeakMap,s=new sn;function u(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(f);if(g===void 0||g.count!==v){let G=function(){T.dispose(),a.delete(f),f.removeEventListener("dispose",G)};var S=G;g!==void 0&&g.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),y===!0&&(R=3);let D=f.attributes.position.count*R,O=1;D>t.maxTextureSize&&(O=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const L=new Float32Array(D*O*4*v),T=new _y(L,D,O,v);T.type=la,T.needsUpdate=!0;const N=R*4;for(let V=0;V<v;V++){const W=x[V],lt=U[V],ct=P[V],Z=D*O*4*V;for(let F=0;F<W.count;F++){const B=F*N;E===!0&&(s.fromBufferAttribute(W,F),L[Z+B+0]=s.x,L[Z+B+1]=s.y,L[Z+B+2]=s.z,L[Z+B+3]=0),b===!0&&(s.fromBufferAttribute(lt,F),L[Z+B+4]=s.x,L[Z+B+5]=s.y,L[Z+B+6]=s.z,L[Z+B+7]=0),y===!0&&(s.fromBufferAttribute(ct,F),L[Z+B+8]=s.x,L[Z+B+9]=s.y,L[Z+B+10]=s.z,L[Z+B+11]=ct.itemSize===4?s.w:1)}}g={count:v,texture:T,size:new _e(D,O)},a.set(f,g),f.addEventListener("dispose",G)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const b=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function S3(o,t,n,a,s){let u=new WeakMap;function c(d){const _=s.render.frame,v=d.geometry,g=t.get(d,v);if(u.get(g)!==_&&(t.update(g),u.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),u.get(d)!==_&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,_))),d.isSkinnedMesh){const S=d.skeleton;u.get(S)!==_&&(S.update(),u.set(S,_))}return g}function f(){u=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:f}}const y3={[ny]:"LINEAR_TONE_MAPPING",[iy]:"REINHARD_TONE_MAPPING",[ay]:"CINEON_TONE_MAPPING",[a_]:"ACES_FILMIC_TONE_MAPPING",[sy]:"AGX_TONE_MAPPING",[oy]:"NEUTRAL_TONE_MAPPING",[ry]:"CUSTOM_TONE_MAPPING"};function M3(o,t,n,a,s,u){const c=new Ta(t,n,{type:o,depthBuffer:s,stencilBuffer:u,samples:a?4:0,depthTexture:s?new Jo(t,n):void 0}),f=new Ta(t,n,{type:sr,depthBuffer:!1,stencilBuffer:!1}),p=new wa;p.setAttribute("position",new Ji([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ji([0,2,0,0,2,0],2));const d=new uT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new In(p,d),v=new Uy(-1,1,1,-1,0,1);let g=null,S=null,E=!1,b,y=null,x=[],U=!1;this.setSize=function(P,R){c.setSize(P,R),f.setSize(P,R);for(let D=0;D<x.length;D++){const O=x[D];O.setSize&&O.setSize(P,R)}},this.setEffects=function(P){x=P,U=x.length>0&&x[0].isRenderPass===!0;const R=c.width,D=c.height;for(let O=0;O<x.length;O++){const L=x[O];L.setSize&&L.setSize(R,D)}},this.begin=function(P,R){if(E||P.toneMapping===ba&&x.length===0)return!1;if(y=R,R!==null){const D=R.width,O=R.height;(c.width!==D||c.height!==O)&&this.setSize(D,O)}return U===!1&&P.setRenderTarget(c),b=P.toneMapping,P.toneMapping=ba,!0},this.hasRenderPass=function(){return U},this.end=function(P,R){P.toneMapping=b,E=!0;let D=c,O=f;for(let L=0;L<x.length;L++){const T=x[L];if(T.enabled!==!1&&(T.render(P,O,D,R),T.needsSwap!==!1)){const N=D;D=O,O=N}}if(g!==P.outputColorSpace||S!==P.toneMapping){g=P.outputColorSpace,S=P.toneMapping,d.defines={},Ee.getTransfer(g)===Fe&&(d.defines.SRGB_TRANSFER="");const L=y3[S];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(y),P.render(_,v),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),p.dispose(),d.dispose()}}const Py=new ni,Bm=new Jo(1,1),Iy=new _y,zy=new Gb,Fy=new Ty,mS=[],_S=[],gS=new Float32Array(16),vS=new Float32Array(9),xS=new Float32Array(4);function ll(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let u=mS[s];if(u===void 0&&(u=new Float32Array(s),mS[s]=u),t!==0){a.toArray(u,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(u,f)}return u}function Un(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Nn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Xf(o,t){let n=_S[t];n===void 0&&(n=new Int32Array(t),_S[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function E3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function b3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;o.uniform2fv(this.addr,t),Nn(n,t)}}function T3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Un(n,t))return;o.uniform3fv(this.addr,t),Nn(n,t)}}function A3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;o.uniform4fv(this.addr,t),Nn(n,t)}}function R3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Nn(n,t)}else{if(Un(n,a))return;xS.set(a),o.uniformMatrix2fv(this.addr,!1,xS),Nn(n,a)}}function C3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Nn(n,t)}else{if(Un(n,a))return;vS.set(a),o.uniformMatrix3fv(this.addr,!1,vS),Nn(n,a)}}function w3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Nn(n,t)}else{if(Un(n,a))return;gS.set(a),o.uniformMatrix4fv(this.addr,!1,gS),Nn(n,a)}}function D3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function U3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;o.uniform2iv(this.addr,t),Nn(n,t)}}function N3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Un(n,t))return;o.uniform3iv(this.addr,t),Nn(n,t)}}function L3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;o.uniform4iv(this.addr,t),Nn(n,t)}}function O3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function P3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;o.uniform2uiv(this.addr,t),Nn(n,t)}}function I3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Un(n,t))return;o.uniform3uiv(this.addr,t),Nn(n,t)}}function z3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;o.uniform4uiv(this.addr,t),Nn(n,t)}}function F3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let u;this.type===o.SAMPLER_2D_SHADOW?(Bm.compareFunction=n.isReversedDepthBuffer()?d_:h_,u=Bm):u=Py,n.setTexture2D(t||u,s)}function B3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||zy,s)}function H3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||Fy,s)}function G3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||Iy,s)}function V3(o){switch(o){case 5126:return E3;case 35664:return b3;case 35665:return T3;case 35666:return A3;case 35674:return R3;case 35675:return C3;case 35676:return w3;case 5124:case 35670:return D3;case 35667:case 35671:return U3;case 35668:case 35672:return N3;case 35669:case 35673:return L3;case 5125:return O3;case 36294:return P3;case 36295:return I3;case 36296:return z3;case 35678:case 36198:case 36298:case 36306:case 35682:return F3;case 35679:case 36299:case 36307:return B3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return G3}}function k3(o,t){o.uniform1fv(this.addr,t)}function X3(o,t){const n=ll(t,this.size,2);o.uniform2fv(this.addr,n)}function W3(o,t){const n=ll(t,this.size,3);o.uniform3fv(this.addr,n)}function q3(o,t){const n=ll(t,this.size,4);o.uniform4fv(this.addr,n)}function Y3(o,t){const n=ll(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Z3(o,t){const n=ll(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function K3(o,t){const n=ll(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Q3(o,t){o.uniform1iv(this.addr,t)}function j3(o,t){o.uniform2iv(this.addr,t)}function J3(o,t){o.uniform3iv(this.addr,t)}function $3(o,t){o.uniform4iv(this.addr,t)}function tC(o,t){o.uniform1uiv(this.addr,t)}function eC(o,t){o.uniform2uiv(this.addr,t)}function nC(o,t){o.uniform3uiv(this.addr,t)}function iC(o,t){o.uniform4uiv(this.addr,t)}function aC(o,t,n){const a=this.cache,s=t.length,u=Xf(n,s);Un(a,u)||(o.uniform1iv(this.addr,u),Nn(a,u));let c;this.type===o.SAMPLER_2D_SHADOW?c=Bm:c=Py;for(let f=0;f!==s;++f)n.setTexture2D(t[f]||c,u[f])}function rC(o,t,n){const a=this.cache,s=t.length,u=Xf(n,s);Un(a,u)||(o.uniform1iv(this.addr,u),Nn(a,u));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||zy,u[c])}function sC(o,t,n){const a=this.cache,s=t.length,u=Xf(n,s);Un(a,u)||(o.uniform1iv(this.addr,u),Nn(a,u));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||Fy,u[c])}function oC(o,t,n){const a=this.cache,s=t.length,u=Xf(n,s);Un(a,u)||(o.uniform1iv(this.addr,u),Nn(a,u));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||Iy,u[c])}function lC(o){switch(o){case 5126:return k3;case 35664:return X3;case 35665:return W3;case 35666:return q3;case 35674:return Y3;case 35675:return Z3;case 35676:return K3;case 5124:case 35670:return Q3;case 35667:case 35671:return j3;case 35668:case 35672:return J3;case 35669:case 35673:return $3;case 5125:return tC;case 36294:return eC;case 36295:return nC;case 36296:return iC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return oC}}class uC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=V3(n.type)}}class cC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lC(n.type)}}class fC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let u=0,c=s.length;u!==c;++u){const f=s[u];f.setValue(t,n[f.id],a)}}}const Pp=/(\w+)(\])?(\[|\.)?/g;function SS(o,t){o.seq.push(t),o.map[t.id]=t}function hC(o,t,n){const a=o.name,s=a.length;for(Pp.lastIndex=0;;){const u=Pp.exec(a),c=Pp.lastIndex;let f=u[1];const p=u[2]==="]",d=u[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){SS(n,d===void 0?new uC(f,o,t):new cC(f,o,t));break}else{let v=n.map[f];v===void 0&&(v=new fC(f),SS(n,v)),n=v}}}class Mf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);hC(f,p,this)}const s=[],u=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):u.push(c);s.length>0&&(this.seq=s.concat(u))}setValue(t,n,a,s){const u=this.map[n];u!==void 0&&u.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let u=0,c=n.length;u!==c;++u){const f=n[u],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,u=t.length;s!==u;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function yS(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const dC=37297;let pC=0;function mC(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=s;c<u;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const MS=new re;function _C(o){Ee._getMatrix(MS,Ee.workingColorSpace,o);const t=`mat3( ${MS.elements.map(n=>n.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Df:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ES(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+mC(o.getShaderSource(t),f)}else return u}function gC(o,t){const n=_C(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vC={[ny]:"Linear",[iy]:"Reinhard",[ay]:"Cineon",[a_]:"ACESFilmic",[sy]:"AgX",[oy]:"Neutral",[ry]:"Custom"};function xC(o,t){const n=vC[t];return n===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pf=new $;function SC(){Ee.getLuminanceCoefficients(pf);const o=pf.x.toFixed(4),t=pf.y.toFixed(4),n=pf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(du).join(`
`)}function MC(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function EC(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=o.getActiveAttrib(t,s),c=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function du(o){return o!==""}function bS(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function TS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hm(o){return o.replace(bC,AC)}const TC=new Map;function AC(o,t){let n=ce[t];if(n===void 0){const a=TC.get(t);if(a!==void 0)n=ce[a],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hm(n)}const RC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function AS(o){return o.replace(RC,CC)}function CC(o,t,n,a){let s="";for(let u=parseInt(t);u<parseInt(n);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function RS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const wC={[gf]:"SHADOWMAP_TYPE_PCF",[hu]:"SHADOWMAP_TYPE_VSM"};function DC(o){return wC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UC={[Hs]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE",[Gf]:"ENVMAP_TYPE_CUBE_UV"};function NC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":UC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const LC={[jo]:"ENVMAP_MODE_REFRACTION"};function OC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":LC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PC={[i_]:"ENVMAP_BLENDING_MULTIPLY",[gb]:"ENVMAP_BLENDING_MIX",[vb]:"ENVMAP_BLENDING_ADD"};function IC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":PC[o.combine]||"ENVMAP_BLENDING_NONE"}function zC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function FC(o,t,n,a){const s=o.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=DC(n),d=NC(n),_=OC(n),v=IC(n),g=zC(n),S=yC(n),E=MC(u),b=s.createProgram();let y,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(du).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(du).join(`
`),x.length>0&&(x+=`
`)):(y=[RS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(du).join(`
`),x=[RS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ba?"#define TONE_MAPPING":"",n.toneMapping!==ba?ce.tonemapping_pars_fragment:"",n.toneMapping!==ba?xC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,gC("linearToOutputTexel",n.outputColorSpace),SC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(du).join(`
`)),c=Hm(c),c=bS(c,n),c=TS(c,n),f=Hm(f),f=bS(f,n),f=TS(f,n),c=AS(c),f=AS(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===Px?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Px?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=U+y+c,R=U+x+f,D=yS(s,s.VERTEX_SHADER,P),O=yS(s,s.FRAGMENT_SHADER,R);s.attachShader(b,D),s.attachShader(b,O),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function L(V){if(o.debug.checkShaderErrors){const W=s.getProgramInfoLog(b)||"",lt=s.getShaderInfoLog(D)||"",ct=s.getShaderInfoLog(O)||"",Z=W.trim(),F=lt.trim(),B=ct.trim();let J=!0,pt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,b,D,O);else{const yt=ES(s,D,"vertex"),I=ES(s,O,"fragment");Te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+yt+`
`+I)}else Z!==""?ne("WebGLProgram: Program Info Log:",Z):(F===""||B==="")&&(pt=!1);pt&&(V.diagnostics={runnable:J,programLog:Z,vertexShader:{log:F,prefix:y},fragmentShader:{log:B,prefix:x}})}s.deleteShader(D),s.deleteShader(O),T=new Mf(s,b),N=EC(s,b)}let T;this.getUniforms=function(){return T===void 0&&L(this),T};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(b,dC)),G},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=O,this}let BC=0;class HC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new GC(t),n.set(t,a)),a}}class GC{constructor(t){this.id=BC++,this.code=t,this.usedTimes=0}}function VC(o){return o===Gs||o===Af||o===Rf}function kC(o,t,n,a,s,u){const c=new m_,f=new HC,p=new Set,d=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,N,G,V,W,lt){const ct=V.fog,Z=W.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=t.get(T.envMap||F,B),pt=J&&J.mapping===Gf?J.image.height:null,yt=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&ne("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,K=I!==void 0?I.length:0;let Mt=0;Z.morphAttributes.position!==void 0&&(Mt=1),Z.morphAttributes.normal!==void 0&&(Mt=2),Z.morphAttributes.color!==void 0&&(Mt=3);let Tt,Dt,at,St;if(yt){const Vt=Sa[yt];Tt=Vt.vertexShader,Dt=Vt.fragmentShader}else{Tt=T.vertexShader,Dt=T.fragmentShader;const Vt=f.getVertexShaderStage(T),Je=f.getFragmentShaderStage(T);f.update(T,Vt,Je),at=Vt.id,St=Je.id}const bt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),ee=W.isInstancedMesh===!0,Qt=W.isBatchedMesh===!0,Ke=!!T.map,fe=!!T.matcap,Se=!!J,ye=!!T.aoMap,he=!!T.lightMap,ln=!!T.bumpMap&&T.wireframe===!1,un=!!T.normalMap,cn=!!T.displacementMap,mn=!!T.emissiveMap,Ye=!!T.metalnessMap,fn=!!T.roughnessMap,Y=T.anisotropy>0,Be=T.clearcoat>0,we=T.dispersion>0,z=T.iridescence>0,A=T.sheen>0,j=T.transmission>0,rt=Y&&!!T.anisotropyMap,ht=Be&&!!T.clearcoatMap,At=Be&&!!T.clearcoatNormalMap,Ut=Be&&!!T.clearcoatRoughnessMap,ft=z&&!!T.iridescenceMap,dt=z&&!!T.iridescenceThicknessMap,Ct=A&&!!T.sheenColorMap,Ft=A&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Nt=!!T.specularColorMap,Kt=!!T.specularIntensityMap,jt=j&&!!T.transmissionMap,ie=j&&!!T.thicknessMap,X=!!T.gradientMap,Rt=!!T.alphaMap,_t=T.alphaTest>0,wt=!!T.alphaHash,zt=!!T.extensions;let Et=ba;T.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Et=o.toneMapping);const qt={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:Tt,fragmentShader:Dt,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&W._colorsTexture!==null,instancing:ee,instancingColor:ee&&W.instanceColor!==null,instancingMorph:ee&&W.morphTexture!==null,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ke,matcap:fe,envMap:Se,envMapMode:Se&&J.mapping,envMapCubeUVHeight:pt,aoMap:ye,lightMap:he,bumpMap:ln,normalMap:un,displacementMap:cn,emissiveMap:mn,normalMapObjectSpace:un&&T.normalMapType===yb,normalMapTangentSpace:un&&T.normalMapType===Cf,packedNormalMap:un&&T.normalMapType===Cf&&VC(T.normalMap.format),metalnessMap:Ye,roughnessMap:fn,anisotropy:Y,anisotropyMap:rt,clearcoat:Be,clearcoatMap:ht,clearcoatNormalMap:At,clearcoatRoughnessMap:Ut,dispersion:we,iridescence:z,iridescenceMap:ft,iridescenceThicknessMap:dt,sheen:A,sheenColorMap:Ct,sheenRoughnessMap:Ft,specularMap:Ot,specularColorMap:Nt,specularIntensityMap:Kt,transmission:j,transmissionMap:jt,thicknessMap:ie,gradientMap:X,opaque:T.transparent===!1&&T.blending===Xo&&T.alphaToCoverage===!1,alphaMap:Rt,alphaTest:_t,alphaHash:wt,combine:T.combine,mapUv:Ke&&E(T.map.channel),aoMapUv:ye&&E(T.aoMap.channel),lightMapUv:he&&E(T.lightMap.channel),bumpMapUv:ln&&E(T.bumpMap.channel),normalMapUv:un&&E(T.normalMap.channel),displacementMapUv:cn&&E(T.displacementMap.channel),emissiveMapUv:mn&&E(T.emissiveMap.channel),metalnessMapUv:Ye&&E(T.metalnessMap.channel),roughnessMapUv:fn&&E(T.roughnessMap.channel),anisotropyMapUv:rt&&E(T.anisotropyMap.channel),clearcoatMapUv:ht&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:At&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:Ot&&E(T.specularMap.channel),specularColorMapUv:Nt&&E(T.specularColorMap.channel),specularIntensityMapUv:Kt&&E(T.specularIntensityMap.channel),transmissionMapUv:jt&&E(T.transmissionMap.channel),thicknessMapUv:ie&&E(T.thicknessMap.channel),alphaMapUv:Rt&&E(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(un||Y),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(Ke||Rt),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&un===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Mt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Et,decodeVideoTexture:Ke&&T.map.isVideoTexture===!0&&Ee.getTransfer(T.map.colorSpace)===Fe,decodeVideoTextureEmissive:mn&&T.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(T.emissiveMap.colorSpace)===Fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===nr,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)N.push(G),N.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(x(N,T),U(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function x(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function U(T,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function P(T){const N=S[T.type];let G;if(N){const V=Sa[N];G=sT.clone(V.uniforms)}else G=T.uniforms;return G}function R(T,N){let G=_.get(N);return G!==void 0?++G.usedTimes:(G=new FC(o,N,T,s),d.push(G),_.set(N,G)),G}function D(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){f.remove(T)}function L(){f.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:D,releaseShaderCache:O,programs:d,dispose:L}}function XC(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function u(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:u}}function WC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function CS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function wS(){const o=[];let t=0;const n=[],a=[],s=[];function u(){t=0,n.length=0,a.length=0,s.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,E,b,y,x){let U=o[t];return U===void 0?(U={id:g.id,object:g,geometry:S,material:E,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:y,group:x},o[t]=U):(U.id=g.id,U.object=g,U.geometry=S,U.material=E,U.materialVariant=c(g),U.groupOrder=b,U.renderOrder=g.renderOrder,U.z=y,U.group=x),t++,U}function p(g,S,E,b,y,x){const U=f(g,S,E,b,y,x);E.transmission>0?a.push(U):E.transparent===!0?s.push(U):n.push(U)}function d(g,S,E,b,y,x){const U=f(g,S,E,b,y,x);E.transmission>0?a.unshift(U):E.transparent===!0?s.unshift(U):n.unshift(U)}function _(g,S,E){n.length>1&&n.sort(g||WC),a.length>1&&a.sort(S||CS),s.length>1&&s.sort(S||CS),E&&(n.reverse(),a.reverse(),s.reverse())}function v(){for(let g=t,S=o.length;g<S;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:s,init:u,push:p,unshift:d,finish:v,sort:_}}function qC(){let o=new WeakMap;function t(a,s){const u=o.get(a);let c;return u===void 0?(c=new wS,o.set(a,[c])):s>=u.length?(c=new wS,u.push(c)):c=u[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function YC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new $,color:new ue};break;case"SpotLight":n={position:new $,direction:new $,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":n={color:new ue,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=n,n}}}function ZC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let KC=0;function QC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function jC(o){const t=new YC,n=ZC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new $);const s=new $,u=new Ze,c=new Ze;function f(d){let _=0,v=0,g=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let S=0,E=0,b=0,y=0,x=0,U=0,P=0,R=0,D=0,O=0,L=0;d.sort(QC);for(let N=0,G=d.length;N<G;N++){const V=d[N],W=V.color,lt=V.intensity,ct=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Gs?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=W.r*lt,v+=W.g*lt,g+=W.b*lt;else if(V.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(V.sh.coefficients[F],lt);L++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,J=n.get(V);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,a.directionalShadow[S]=J,a.directionalShadowMap[S]=Z,a.directionalShadowMatrix[S]=V.shadow.matrix,U++}a.directional[S]=F,S++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(W).multiplyScalar(lt),F.distance=ct,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,a.spot[b]=F;const B=V.shadow;if(V.map&&(a.spotLightMap[D]=V.map,D++,B.updateMatrices(V),V.castShadow&&O++),a.spotLightMatrix[b]=B.matrix,V.castShadow){const J=n.get(V);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,a.spotShadow[b]=J,a.spotShadowMap[b]=Z,R++}b++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(W).multiplyScalar(lt),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),a.rectArea[y]=F,y++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const B=V.shadow,J=n.get(V);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,a.pointShadow[E]=J,a.pointShadowMap[E]=Z,a.pointShadowMatrix[E]=V.shadow.matrix,P++}a.point[E]=F,E++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(lt),F.groundColor.copy(V.groundColor).multiplyScalar(lt),a.hemi[x]=F,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==b||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==U||T.numPointShadows!==P||T.numSpotShadows!==R||T.numSpotMaps!==D||T.numLightProbes!==L)&&(a.directional.length=S,a.spot.length=b,a.rectArea.length=y,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=R+D-O,a.spotLightMap.length=D,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=L,T.directionalLength=S,T.pointLength=E,T.spotLength=b,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=U,T.numPointShadows=P,T.numSpotShadows=R,T.numSpotMaps=D,T.numLightProbes=L,a.version=KC++)}function p(d,_){let v=0,g=0,S=0,E=0,b=0;const y=_.matrixWorldInverse;for(let x=0,U=d.length;x<U;x++){const P=d[x];if(P.isDirectionalLight){const R=a.directional[v];R.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(y),v++}else if(P.isSpotLight){const R=a.spot[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const R=a.rectArea[E];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),u.copy(P.matrixWorld),u.premultiply(y),c.extractRotation(u),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const R=a.point[g];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const R=a.hemi[b];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),b++}}}return{setup:f,setupView:p,state:a}}function DS(o){const t=new jC(o),n=[],a=[],s=[];function u(g){v.camera=g,n.length=0,a.length=0,s.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function p(g){s.push(g)}function d(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:d,setupLightsView:_,pushLight:c,pushShadow:f,pushLightProbeGrid:p}}function JC(o){let t=new WeakMap;function n(s,u=0){const c=t.get(s);let f;return c===void 0?(f=new DS(o),t.set(s,[f])):u>=c.length?(f=new DS(o),c.push(f)):f=c[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const $C=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t2=`uniform sampler2D shadow_pass;
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
}`,e2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],n2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],US=new Ze,uu=new $,Ip=new $;function i2(o,t,n){let a=new __;const s=new _e,u=new _e,c=new sn,f=new hT,p=new dT,d={},_=n.maxTextureSize,v={[$r]:ei,[ei]:$r,[nr]:nr},g=new Ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:$C,fragmentShader:t2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new wa;E.setAttribute("position",new ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new In(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let x=this.type;this.render=function(O,L,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===J1&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gf);const N=o.getRenderTarget(),G=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),W=o.state;W.setBlending(ar),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const lt=x!==this.type;lt&&L.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(Z=>Z.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,Z=O.length;ct<Z;ct++){const F=O[ct],B=F.shadow;if(B===void 0){ne("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();s.multiply(J),u.copy(B.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/J.x),s.x=u.x*J.x,B.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/J.y),s.y=u.y*J.y,B.mapSize.y=u.y));const pt=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=pt,B.map===null||lt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===hu){if(F.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ta(s.x,s.y,{format:Gs,type:sr,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Jo(s.x,s.y,la),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=or,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=kn,B.map.depthTexture.magFilter=kn}else F.isPointLight?(B.map=new Oy(s.x),B.map.depthTexture=new aT(s.x,Aa)):(B.map=new Ta(s.x,s.y),B.map.depthTexture=new Jo(s.x,s.y,Aa)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=or,this.type===gf?(B.map.depthTexture.compareFunction=pt?d_:h_,B.map.depthTexture.minFilter=Qn,B.map.depthTexture.magFilter=Qn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=kn,B.map.depthTexture.magFilter=kn);B.camera.updateProjectionMatrix()}const yt=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<yt;I++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,I),o.clear();else{I===0&&(o.setRenderTarget(B.map),o.clear());const K=B.getViewport(I);c.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),W.viewport(c)}if(F.isPointLight){const K=B.camera,Mt=B.matrix,Tt=F.distance||K.far;Tt!==K.far&&(K.far=Tt,K.updateProjectionMatrix()),uu.setFromMatrixPosition(F.matrixWorld),K.position.copy(uu),Ip.copy(K.position),Ip.add(e2[I]),K.up.copy(n2[I]),K.lookAt(Ip),K.updateMatrixWorld(),Mt.makeTranslation(-uu.x,-uu.y,-uu.z),US.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(US,K.coordinateSystem,K.reversedDepth)}else B.updateMatrices(F);a=B.getFrustum(),R(L,T,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===hu&&U(B,T),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(N,G,V)};function U(O,L){const T=t.update(b);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ta(s.x,s.y,{format:Gs,type:sr})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(L,null,T,g,b,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(L,null,T,S,b,null)}function P(O,L,T,N){let G=null;const V=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)G=V;else if(G=T.isPointLight===!0?p:f,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const W=G.uuid,lt=L.uuid;let ct=d[W];ct===void 0&&(ct={},d[W]=ct);let Z=ct[lt];Z===void 0&&(Z=G.clone(),ct[lt]=Z,L.addEventListener("dispose",D)),G=Z}if(G.visible=L.visible,G.wireframe=L.wireframe,N===hu?G.side=L.shadowSide!==null?L.shadowSide:L.side:G.side=L.shadowSide!==null?L.shadowSide:v[L.side],G.alphaMap=L.alphaMap,G.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,G.map=L.map,G.clipShadows=L.clipShadows,G.clippingPlanes=L.clippingPlanes,G.clipIntersection=L.clipIntersection,G.displacementMap=L.displacementMap,G.displacementScale=L.displacementScale,G.displacementBias=L.displacementBias,G.wireframeLinewidth=L.wireframeLinewidth,G.linewidth=L.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const W=o.properties.get(G);W.light=T}return G}function R(O,L,T,N,G){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&G===hu)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const lt=t.update(O),ct=O.material;if(Array.isArray(ct)){const Z=lt.groups;for(let F=0,B=Z.length;F<B;F++){const J=Z[F],pt=ct[J.materialIndex];if(pt&&pt.visible){const yt=P(O,pt,N,G);O.onBeforeShadow(o,O,L,T,lt,yt,J),o.renderBufferDirect(T,null,lt,yt,O,J),O.onAfterShadow(o,O,L,T,lt,yt,J)}}}else if(ct.visible){const Z=P(O,ct,N,G);O.onBeforeShadow(o,O,L,T,lt,Z,null),o.renderBufferDirect(T,null,lt,Z,O,null),O.onAfterShadow(o,O,L,T,lt,Z,null)}}const W=O.children;for(let lt=0,ct=W.length;lt<ct;lt++)R(W[lt],L,T,N,G)}function D(O){O.target.removeEventListener("dispose",D);for(const T in d){const N=d[T],G=O.target.uuid;G in N&&(N[G].dispose(),delete N[G])}}}function a2(o,t){function n(){let X=!1;const Rt=new sn;let _t=null;const wt=new sn(0,0,0,0);return{setMask:function(zt){_t!==zt&&!X&&(o.colorMask(zt,zt,zt,zt),_t=zt)},setLocked:function(zt){X=zt},setClear:function(zt,Et,qt,Vt,Je){Je===!0&&(zt*=Vt,Et*=Vt,qt*=Vt),Rt.set(zt,Et,qt,Vt),wt.equals(Rt)===!1&&(o.clearColor(zt,Et,qt,Vt),wt.copy(Rt))},reset:function(){X=!1,_t=null,wt.set(-1,0,0,0)}}}function a(){let X=!1,Rt=!1,_t=null,wt=null,zt=null;return{setReversed:function(Et){if(Rt!==Et){const qt=t.get("EXT_clip_control");Et?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Et;const Vt=zt;zt=null,this.setClear(Vt)}},getReversed:function(){return Rt},setTest:function(Et){Et?bt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Et){_t!==Et&&!X&&(o.depthMask(Et),_t=Et)},setFunc:function(Et){if(Rt&&(Et=Ub[Et]),wt!==Et){switch(Et){case Qp:o.depthFunc(o.NEVER);break;case jp:o.depthFunc(o.ALWAYS);break;case Jp:o.depthFunc(o.LESS);break;case Qo:o.depthFunc(o.LEQUAL);break;case $p:o.depthFunc(o.EQUAL);break;case tm:o.depthFunc(o.GEQUAL);break;case em:o.depthFunc(o.GREATER);break;case nm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}wt=Et}},setLocked:function(Et){X=Et},setClear:function(Et){zt!==Et&&(zt=Et,Rt&&(Et=1-Et),o.clearDepth(Et))},reset:function(){X=!1,_t=null,wt=null,zt=null,Rt=!1}}}function s(){let X=!1,Rt=null,_t=null,wt=null,zt=null,Et=null,qt=null,Vt=null,Je=null;return{setTest:function(Ne){X||(Ne?bt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Ne){Rt!==Ne&&!X&&(o.stencilMask(Ne),Rt=Ne)},setFunc:function(Ne,gi,vi){(_t!==Ne||wt!==gi||zt!==vi)&&(o.stencilFunc(Ne,gi,vi),_t=Ne,wt=gi,zt=vi)},setOp:function(Ne,gi,vi){(Et!==Ne||qt!==gi||Vt!==vi)&&(o.stencilOp(Ne,gi,vi),Et=Ne,qt=gi,Vt=vi)},setLocked:function(Ne){X=Ne},setClear:function(Ne){Je!==Ne&&(o.clearStencil(Ne),Je=Ne)},reset:function(){X=!1,Rt=null,_t=null,wt=null,zt=null,Et=null,qt=null,Vt=null,Je=null}}}const u=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],b=null,y=!1,x=null,U=null,P=null,R=null,D=null,O=null,L=null,T=new ue(0,0,0),N=0,G=!1,V=null,W=null,lt=null,ct=null,Z=null;const F=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const pt=o.getParameter(o.VERSION);pt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(pt)[1]),B=J>=1):pt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),B=J>=2);let yt=null,I={};const K=o.getParameter(o.SCISSOR_BOX),Mt=o.getParameter(o.VIEWPORT),Tt=new sn().fromArray(K),Dt=new sn().fromArray(Mt);function at(X,Rt,_t,wt){const zt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(X,Et),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<_t;qt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,wt,0,o.RGBA,o.UNSIGNED_BYTE,zt):o.texImage2D(Rt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,zt);return Et}const St={};St[o.TEXTURE_2D]=at(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=at(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=at(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=at(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),bt(o.DEPTH_TEST),c.setFunc(Qo),ln(!1),un(wx),bt(o.CULL_FACE),ye(ar);function bt(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Ht(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function ee(X,Rt){return g[X]!==Rt?(o.bindFramebuffer(X,Rt),g[X]=Rt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Rt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Qt(X,Rt){let _t=E,wt=!1;if(X){_t=S.get(Rt),_t===void 0&&(_t=[],S.set(Rt,_t));const zt=X.textures;if(_t.length!==zt.length||_t[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,qt=zt.length;Et<qt;Et++)_t[Et]=o.COLOR_ATTACHMENT0+Et;_t.length=zt.length,wt=!0}}else _t[0]!==o.BACK&&(_t[0]=o.BACK,wt=!0);wt&&o.drawBuffers(_t)}function Ke(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const fe={[Us]:o.FUNC_ADD,[tb]:o.FUNC_SUBTRACT,[eb]:o.FUNC_REVERSE_SUBTRACT};fe[nb]=o.MIN,fe[ib]=o.MAX;const Se={[ab]:o.ZERO,[rb]:o.ONE,[sb]:o.SRC_COLOR,[Zp]:o.SRC_ALPHA,[hb]:o.SRC_ALPHA_SATURATE,[cb]:o.DST_COLOR,[lb]:o.DST_ALPHA,[ob]:o.ONE_MINUS_SRC_COLOR,[Kp]:o.ONE_MINUS_SRC_ALPHA,[fb]:o.ONE_MINUS_DST_COLOR,[ub]:o.ONE_MINUS_DST_ALPHA,[db]:o.CONSTANT_COLOR,[pb]:o.ONE_MINUS_CONSTANT_COLOR,[mb]:o.CONSTANT_ALPHA,[_b]:o.ONE_MINUS_CONSTANT_ALPHA};function ye(X,Rt,_t,wt,zt,Et,qt,Vt,Je,Ne){if(X===ar){y===!0&&(Ht(o.BLEND),y=!1);return}if(y===!1&&(bt(o.BLEND),y=!0),X!==$1){if(X!==x||Ne!==G){if((U!==Us||D!==Us)&&(o.blendEquation(o.FUNC_ADD),U=Us,D=Us),Ne)switch(X){case Xo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dx:o.blendFunc(o.ONE,o.ONE);break;case Ux:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Nx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Te("WebGLState: Invalid blending: ",X);break}else switch(X){case Xo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ux:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nx:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",X);break}P=null,R=null,O=null,L=null,T.set(0,0,0),N=0,x=X,G=Ne}return}zt=zt||Rt,Et=Et||_t,qt=qt||wt,(Rt!==U||zt!==D)&&(o.blendEquationSeparate(fe[Rt],fe[zt]),U=Rt,D=zt),(_t!==P||wt!==R||Et!==O||qt!==L)&&(o.blendFuncSeparate(Se[_t],Se[wt],Se[Et],Se[qt]),P=_t,R=wt,O=Et,L=qt),(Vt.equals(T)===!1||Je!==N)&&(o.blendColor(Vt.r,Vt.g,Vt.b,Je),T.copy(Vt),N=Je),x=X,G=!1}function he(X,Rt){X.side===nr?Ht(o.CULL_FACE):bt(o.CULL_FACE);let _t=X.side===ei;Rt&&(_t=!_t),ln(_t),X.blending===Xo&&X.transparent===!1?ye(ar):ye(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),u.setMask(X.colorWrite);const wt=X.stencilWrite;f.setTest(wt),wt&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),mn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function ln(X){V!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),V=X)}function un(X){X!==Q1?(bt(o.CULL_FACE),X!==W&&(X===wx?o.cullFace(o.BACK):X===j1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),W=X}function cn(X){X!==lt&&(B&&o.lineWidth(X),lt=X)}function mn(X,Rt,_t){X?(bt(o.POLYGON_OFFSET_FILL),(ct!==Rt||Z!==_t)&&(ct=Rt,Z=_t,c.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,_t))):Ht(o.POLYGON_OFFSET_FILL)}function Ye(X){X?bt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function fn(X){X===void 0&&(X=o.TEXTURE0+F-1),yt!==X&&(o.activeTexture(X),yt=X)}function Y(X,Rt,_t){_t===void 0&&(yt===null?_t=o.TEXTURE0+F-1:_t=yt);let wt=I[_t];wt===void 0&&(wt={type:void 0,texture:void 0},I[_t]=wt),(wt.type!==X||wt.texture!==Rt)&&(yt!==_t&&(o.activeTexture(_t),yt=_t),o.bindTexture(X,Rt||St[X]),wt.type=X,wt.texture=Rt)}function Be(){const X=I[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function we(){try{o.compressedTexImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function A(){try{o.texSubImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function j(){try{o.texSubImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function ht(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function At(){try{o.texStorage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function Ut(){try{o.texStorage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function ft(){try{o.texImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function dt(){try{o.texImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function Ct(X){return v[X]!==void 0?v[X]:o.getParameter(X)}function Ft(X,Rt){v[X]!==Rt&&(o.pixelStorei(X,Rt),v[X]=Rt)}function Ot(X){Tt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Tt.copy(X))}function Nt(X){Dt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Dt.copy(X))}function Kt(X,Rt){let _t=d.get(Rt);_t===void 0&&(_t=new WeakMap,d.set(Rt,_t));let wt=_t.get(X);wt===void 0&&(wt=o.getUniformBlockIndex(Rt,X.name),_t.set(X,wt))}function jt(X,Rt){const wt=d.get(Rt).get(X);p.get(Rt)!==wt&&(o.uniformBlockBinding(Rt,wt,X.__bindingPointIndex),p.set(Rt,wt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},yt=null,I={},g={},S=new WeakMap,E=[],b=null,y=!1,x=null,U=null,P=null,R=null,D=null,O=null,L=null,T=new ue(0,0,0),N=0,G=!1,V=null,W=null,lt=null,ct=null,Z=null,Tt.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:bt,disable:Ht,bindFramebuffer:ee,drawBuffers:Qt,useProgram:Ke,setBlending:ye,setMaterial:he,setFlipSided:ln,setCullFace:un,setLineWidth:cn,setPolygonOffset:mn,setScissorTest:Ye,activeTexture:fn,bindTexture:Y,unbindTexture:Be,compressedTexImage2D:we,compressedTexImage3D:z,texImage2D:ft,texImage3D:dt,pixelStorei:Ft,getParameter:Ct,updateUBOMapping:Kt,uniformBlockBinding:jt,texStorage2D:At,texStorage3D:Ut,texSubImage2D:A,texSubImage3D:j,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Ot,viewport:Nt,reset:ie}}function r2(o,t,n,a,s,u,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new _e,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,A){return E?new OffscreenCanvas(z,A):Uf("canvas")}function y(z,A,j){let rt=1;const ht=we(z);if((ht.width>j||ht.height>j)&&(rt=j/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const At=Math.floor(rt*ht.width),Ut=Math.floor(rt*ht.height);g===void 0&&(g=b(At,Ut));const ft=A?b(At,Ut):g;return ft.width=At,ft.height=Ut,ft.getContext("2d").drawImage(z,0,0,At,Ut),ne("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+At+"x"+Ut+")."),ft}else return"data"in z&&ne("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),z;return z}function x(z){return z.generateMipmaps}function U(z){o.generateMipmap(z)}function P(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(z,A,j,rt,ht,At=!1){if(z!==null){if(o[z]!==void 0)return o[z];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ut;rt&&(Ut=t.get("EXT_texture_norm16"),Ut||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=A;if(A===o.RED&&(j===o.FLOAT&&(ft=o.R32F),j===o.HALF_FLOAT&&(ft=o.R16F),j===o.UNSIGNED_BYTE&&(ft=o.R8),j===o.UNSIGNED_SHORT&&Ut&&(ft=Ut.R16_EXT),j===o.SHORT&&Ut&&(ft=Ut.R16_SNORM_EXT)),A===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.R8UI),j===o.UNSIGNED_SHORT&&(ft=o.R16UI),j===o.UNSIGNED_INT&&(ft=o.R32UI),j===o.BYTE&&(ft=o.R8I),j===o.SHORT&&(ft=o.R16I),j===o.INT&&(ft=o.R32I)),A===o.RG&&(j===o.FLOAT&&(ft=o.RG32F),j===o.HALF_FLOAT&&(ft=o.RG16F),j===o.UNSIGNED_BYTE&&(ft=o.RG8),j===o.UNSIGNED_SHORT&&Ut&&(ft=Ut.RG16_EXT),j===o.SHORT&&Ut&&(ft=Ut.RG16_SNORM_EXT)),A===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.RG8UI),j===o.UNSIGNED_SHORT&&(ft=o.RG16UI),j===o.UNSIGNED_INT&&(ft=o.RG32UI),j===o.BYTE&&(ft=o.RG8I),j===o.SHORT&&(ft=o.RG16I),j===o.INT&&(ft=o.RG32I)),A===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),j===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),j===o.UNSIGNED_INT&&(ft=o.RGB32UI),j===o.BYTE&&(ft=o.RGB8I),j===o.SHORT&&(ft=o.RGB16I),j===o.INT&&(ft=o.RGB32I)),A===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),j===o.UNSIGNED_INT&&(ft=o.RGBA32UI),j===o.BYTE&&(ft=o.RGBA8I),j===o.SHORT&&(ft=o.RGBA16I),j===o.INT&&(ft=o.RGBA32I)),A===o.RGB&&(j===o.UNSIGNED_SHORT&&Ut&&(ft=Ut.RGB16_EXT),j===o.SHORT&&Ut&&(ft=Ut.RGB16_SNORM_EXT),j===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),j===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),A===o.RGBA){const dt=At?Df:Ee.getTransfer(ht);j===o.FLOAT&&(ft=o.RGBA32F),j===o.HALF_FLOAT&&(ft=o.RGBA16F),j===o.UNSIGNED_BYTE&&(ft=dt===Fe?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT&&Ut&&(ft=Ut.RGBA16_EXT),j===o.SHORT&&Ut&&(ft=Ut.RGBA16_SNORM_EXT),j===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(z,A){let j;return z?A===null||A===Aa||A===Su?j=o.DEPTH24_STENCIL8:A===la?j=o.DEPTH32F_STENCIL8:A===xu&&(j=o.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Aa||A===Su?j=o.DEPTH_COMPONENT24:A===la?j=o.DEPTH_COMPONENT32F:A===xu&&(j=o.DEPTH_COMPONENT16),j}function O(z,A){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==kn&&z.minFilter!==Qn?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function L(z){const A=z.target;A.removeEventListener("dispose",L),N(A),A.isVideoTexture&&_.delete(A),A.isHTMLTexture&&v.delete(A)}function T(z){const A=z.target;A.removeEventListener("dispose",T),V(A)}function N(z){const A=a.get(z);if(A.__webglInit===void 0)return;const j=z.source,rt=S.get(j);if(rt){const ht=rt[A.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&G(z),Object.keys(rt).length===0&&S.delete(j)}a.remove(z)}function G(z){const A=a.get(z);o.deleteTexture(A.__webglTexture);const j=z.source,rt=S.get(j);delete rt[A.__cacheKey],c.memory.textures--}function V(z){const A=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(A.__webglFramebuffer[rt]))for(let ht=0;ht<A.__webglFramebuffer[rt].length;ht++)o.deleteFramebuffer(A.__webglFramebuffer[rt][ht]);else o.deleteFramebuffer(A.__webglFramebuffer[rt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[rt])}else{if(Array.isArray(A.__webglFramebuffer))for(let rt=0;rt<A.__webglFramebuffer.length;rt++)o.deleteFramebuffer(A.__webglFramebuffer[rt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let rt=0;rt<A.__webglColorRenderbuffer.length;rt++)A.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[rt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=z.textures;for(let rt=0,ht=j.length;rt<ht;rt++){const At=a.get(j[rt]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),c.memory.textures--),a.remove(j[rt])}a.remove(z)}let W=0;function lt(){W=0}function ct(){return W}function Z(z){W=z}function F(){const z=W;return z>=s.maxTextures&&ne("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),W+=1,z}function B(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function J(z,A){const j=a.get(z);if(z.isVideoTexture&&Y(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&j.__version!==z.version){const rt=z.image;if(rt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(j,z,A);return}}else z.isExternalTexture&&(j.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+A)}function pt(z,A){const j=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&j.__version!==z.version){Ht(j,z,A);return}else z.isExternalTexture&&(j.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+A)}function yt(z,A){const j=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&j.__version!==z.version){Ht(j,z,A);return}n.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+A)}function I(z,A){const j=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&j.__version!==z.version){ee(j,z,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+A)}const K={[im]:o.REPEAT,[ir]:o.CLAMP_TO_EDGE,[am]:o.MIRRORED_REPEAT},Mt={[kn]:o.NEAREST,[xb]:o.NEAREST_MIPMAP_NEAREST,[Xc]:o.NEAREST_MIPMAP_LINEAR,[Qn]:o.LINEAR,[rp]:o.LINEAR_MIPMAP_NEAREST,[Ls]:o.LINEAR_MIPMAP_LINEAR},Tt={[Mb]:o.NEVER,[Rb]:o.ALWAYS,[Eb]:o.LESS,[h_]:o.LEQUAL,[bb]:o.EQUAL,[d_]:o.GEQUAL,[Tb]:o.GREATER,[Ab]:o.NOTEQUAL};function Dt(z,A){if(A.type===la&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Qn||A.magFilter===rp||A.magFilter===Xc||A.magFilter===Ls||A.minFilter===Qn||A.minFilter===rp||A.minFilter===Xc||A.minFilter===Ls)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,K[A.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,K[A.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,K[A.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,Mt[A.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,Mt[A.minFilter]),A.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,Tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===kn||A.minFilter!==Xc&&A.minFilter!==Ls||A.type===la&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function at(z,A){let j=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",L));const rt=A.source;let ht=S.get(rt);ht===void 0&&(ht={},S.set(rt,ht));const At=B(A);if(At!==z.__cacheKey){ht[At]===void 0&&(ht[At]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ht[At].usedTimes++;const Ut=ht[z.__cacheKey];Ut!==void 0&&(ht[z.__cacheKey].usedTimes--,Ut.usedTimes===0&&G(A)),z.__cacheKey=At,z.__webglTexture=ht[At].texture}return j}function St(z,A,j){return Math.floor(Math.floor(z/j)/A)}function bt(z,A,j,rt){const At=z.updateRanges;if(At.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,j,rt,A.data);else{At.sort((Ft,Ot)=>Ft.start-Ot.start);let Ut=0;for(let Ft=1;Ft<At.length;Ft++){const Ot=At[Ut],Nt=At[Ft],Kt=Ot.start+Ot.count,jt=St(Nt.start,A.width,4),ie=St(Ot.start,A.width,4);Nt.start<=Kt+1&&jt===ie&&St(Nt.start+Nt.count-1,A.width,4)===jt?Ot.count=Math.max(Ot.count,Nt.start+Nt.count-Ot.start):(++Ut,At[Ut]=Nt)}At.length=Ut+1;const ft=n.getParameter(o.UNPACK_ROW_LENGTH),dt=n.getParameter(o.UNPACK_SKIP_PIXELS),Ct=n.getParameter(o.UNPACK_SKIP_ROWS);n.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Ft=0,Ot=At.length;Ft<Ot;Ft++){const Nt=At[Ft],Kt=Math.floor(Nt.start/4),jt=Math.ceil(Nt.count/4),ie=Kt%A.width,X=Math.floor(Kt/A.width),Rt=jt,_t=1;n.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(o.UNPACK_SKIP_ROWS,X),n.texSubImage2D(o.TEXTURE_2D,0,ie,X,Rt,_t,j,rt,A.data)}z.clearUpdateRanges(),n.pixelStorei(o.UNPACK_ROW_LENGTH,ft),n.pixelStorei(o.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(o.UNPACK_SKIP_ROWS,Ct)}}function Ht(z,A,j){let rt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(rt=o.TEXTURE_3D);const ht=at(z,A),At=A.source;n.bindTexture(rt,z.__webglTexture,o.TEXTURE0+j);const Ut=a.get(At);if(At.version!==Ut.__version||ht===!0){if(n.activeTexture(o.TEXTURE0+j),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _t=Ee.getPrimaries(Ee.workingColorSpace),wt=A.colorSpace===qr?null:Ee.getPrimaries(A.colorSpace),zt=A.colorSpace===qr||_t===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment);let dt=y(A.image,!1,s.maxTextureSize);dt=Be(A,dt);const Ct=u.convert(A.format,A.colorSpace),Ft=u.convert(A.type);let Ot=R(A.internalFormat,Ct,Ft,A.normalized,A.colorSpace,A.isVideoTexture);Dt(rt,A);let Nt;const Kt=A.mipmaps,jt=A.isVideoTexture!==!0,ie=Ut.__version===void 0||ht===!0,X=At.dataReady,Rt=O(A,dt);if(A.isDepthTexture)Ot=D(A.format===Os,A.type),ie&&(jt?n.texStorage2D(o.TEXTURE_2D,1,Ot,dt.width,dt.height):n.texImage2D(o.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Ct,Ft,null));else if(A.isDataTexture)if(Kt.length>0){jt&&ie&&n.texStorage2D(o.TEXTURE_2D,Rt,Ot,Kt[0].width,Kt[0].height);for(let _t=0,wt=Kt.length;_t<wt;_t++)Nt=Kt[_t],jt?X&&n.texSubImage2D(o.TEXTURE_2D,_t,0,0,Nt.width,Nt.height,Ct,Ft,Nt.data):n.texImage2D(o.TEXTURE_2D,_t,Ot,Nt.width,Nt.height,0,Ct,Ft,Nt.data);A.generateMipmaps=!1}else jt?(ie&&n.texStorage2D(o.TEXTURE_2D,Rt,Ot,dt.width,dt.height),X&&bt(A,dt,Ct,Ft)):n.texImage2D(o.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Ct,Ft,dt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){jt&&ie&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Ot,Kt[0].width,Kt[0].height,dt.depth);for(let _t=0,wt=Kt.length;_t<wt;_t++)if(Nt=Kt[_t],A.format!==ua)if(Ct!==null)if(jt){if(X)if(A.layerUpdates.size>0){const zt=uS(Nt.width,Nt.height,A.format,A.type);for(const Et of A.layerUpdates){const qt=Nt.data.subarray(Et*zt/Nt.data.BYTES_PER_ELEMENT,(Et+1)*zt/Nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,Et,Nt.width,Nt.height,1,Ct,qt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,Nt.width,Nt.height,dt.depth,Ct,Nt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_t,Ot,Nt.width,Nt.height,dt.depth,0,Nt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?X&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,Nt.width,Nt.height,dt.depth,Ct,Ft,Nt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,_t,Ot,Nt.width,Nt.height,dt.depth,0,Ct,Ft,Nt.data)}else{jt&&ie&&n.texStorage2D(o.TEXTURE_2D,Rt,Ot,Kt[0].width,Kt[0].height);for(let _t=0,wt=Kt.length;_t<wt;_t++)Nt=Kt[_t],A.format!==ua?Ct!==null?jt?X&&n.compressedTexSubImage2D(o.TEXTURE_2D,_t,0,0,Nt.width,Nt.height,Ct,Nt.data):n.compressedTexImage2D(o.TEXTURE_2D,_t,Ot,Nt.width,Nt.height,0,Nt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?X&&n.texSubImage2D(o.TEXTURE_2D,_t,0,0,Nt.width,Nt.height,Ct,Ft,Nt.data):n.texImage2D(o.TEXTURE_2D,_t,Ot,Nt.width,Nt.height,0,Ct,Ft,Nt.data)}else if(A.isDataArrayTexture)if(jt){if(ie&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Ot,dt.width,dt.height,dt.depth),X)if(A.layerUpdates.size>0){const _t=uS(dt.width,dt.height,A.format,A.type);for(const wt of A.layerUpdates){const zt=dt.data.subarray(wt*_t/dt.data.BYTES_PER_ELEMENT,(wt+1)*_t/dt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,wt,dt.width,dt.height,1,Ct,Ft,zt)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Ft,dt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,dt.width,dt.height,dt.depth,0,Ct,Ft,dt.data);else if(A.isData3DTexture)jt?(ie&&n.texStorage3D(o.TEXTURE_3D,Rt,Ot,dt.width,dt.height,dt.depth),X&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Ft,dt.data)):n.texImage3D(o.TEXTURE_3D,0,Ot,dt.width,dt.height,dt.depth,0,Ct,Ft,dt.data);else if(A.isFramebufferTexture){if(ie)if(jt)n.texStorage2D(o.TEXTURE_2D,Rt,Ot,dt.width,dt.height);else{let _t=dt.width,wt=dt.height;for(let zt=0;zt<Rt;zt++)n.texImage2D(o.TEXTURE_2D,zt,Ot,_t,wt,0,Ct,Ft,null),_t>>=1,wt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in o){const _t=o.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),dt.parentNode!==_t){_t.appendChild(dt),v.add(A),_t.onpaint=wt=>{const zt=wt.changedElements;for(const Et of v)zt.includes(Et.image)&&(Et.needsUpdate=!0)},_t.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,dt);else{const zt=o.RGBA,Et=o.RGBA,qt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,zt,Et,qt,dt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(jt&&ie){const _t=we(Kt[0]);n.texStorage2D(o.TEXTURE_2D,Rt,Ot,_t.width,_t.height)}for(let _t=0,wt=Kt.length;_t<wt;_t++)Nt=Kt[_t],jt?X&&n.texSubImage2D(o.TEXTURE_2D,_t,0,0,Ct,Ft,Nt):n.texImage2D(o.TEXTURE_2D,_t,Ot,Ct,Ft,Nt);A.generateMipmaps=!1}else if(jt){if(ie){const _t=we(dt);n.texStorage2D(o.TEXTURE_2D,Rt,Ot,_t.width,_t.height)}X&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Ft,dt)}else n.texImage2D(o.TEXTURE_2D,0,Ot,Ct,Ft,dt);x(A)&&U(rt),Ut.__version=At.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function ee(z,A,j){if(A.image.length!==6)return;const rt=at(z,A),ht=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+j);const At=a.get(ht);if(ht.version!==At.__version||rt===!0){n.activeTexture(o.TEXTURE0+j);const Ut=Ee.getPrimaries(Ee.workingColorSpace),ft=A.colorSpace===qr?null:Ee.getPrimaries(A.colorSpace),dt=A.colorSpace===qr||Ut===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ct=A.isCompressedTexture||A.image[0].isCompressedTexture,Ft=A.image[0]&&A.image[0].isDataTexture,Ot=[];for(let Et=0;Et<6;Et++)!Ct&&!Ft?Ot[Et]=y(A.image[Et],!0,s.maxCubemapSize):Ot[Et]=Ft?A.image[Et].image:A.image[Et],Ot[Et]=Be(A,Ot[Et]);const Nt=Ot[0],Kt=u.convert(A.format,A.colorSpace),jt=u.convert(A.type),ie=R(A.internalFormat,Kt,jt,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,Rt=At.__version===void 0||rt===!0,_t=ht.dataReady;let wt=O(A,Nt);Dt(o.TEXTURE_CUBE_MAP,A);let zt;if(Ct){X&&Rt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,wt,ie,Nt.width,Nt.height);for(let Et=0;Et<6;Et++){zt=Ot[Et].mipmaps;for(let qt=0;qt<zt.length;qt++){const Vt=zt[qt];A.format!==ua?Kt!==null?X?_t&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,0,0,Vt.width,Vt.height,Kt,Vt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,ie,Vt.width,Vt.height,0,Vt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?_t&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,0,0,Vt.width,Vt.height,Kt,jt,Vt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,ie,Vt.width,Vt.height,0,Kt,jt,Vt.data)}}}else{if(zt=A.mipmaps,X&&Rt){zt.length>0&&wt++;const Et=we(Ot[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,wt,ie,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ft){X?_t&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ot[Et].width,Ot[Et].height,Kt,jt,Ot[Et].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ie,Ot[Et].width,Ot[Et].height,0,Kt,jt,Ot[Et].data);for(let qt=0;qt<zt.length;qt++){const Je=zt[qt].image[Et].image;X?_t&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,0,0,Je.width,Je.height,Kt,jt,Je.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,ie,Je.width,Je.height,0,Kt,jt,Je.data)}}else{X?_t&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Kt,jt,Ot[Et]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ie,Kt,jt,Ot[Et]);for(let qt=0;qt<zt.length;qt++){const Vt=zt[qt];X?_t&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,0,0,Kt,jt,Vt.image[Et]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,ie,Kt,jt,Vt.image[Et])}}}x(A)&&U(o.TEXTURE_CUBE_MAP),At.__version=ht.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Qt(z,A,j,rt,ht,At){const Ut=u.convert(j.format,j.colorSpace),ft=u.convert(j.type),dt=R(j.internalFormat,Ut,ft,j.normalized,j.colorSpace),Ct=a.get(A),Ft=a.get(j);if(Ft.__renderTarget=A,!Ct.__hasExternalTextures){const Ot=Math.max(1,A.width>>At),Nt=Math.max(1,A.height>>At);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?n.texImage3D(ht,At,dt,Ot,Nt,A.depth,0,Ut,ft,null):n.texImage2D(ht,At,dt,Ot,Nt,0,Ut,ft,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),fn(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,ht,Ft.__webglTexture,0,Ye(A)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,ht,Ft.__webglTexture,At),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(z,A,j){if(o.bindRenderbuffer(o.RENDERBUFFER,z),A.depthBuffer){const rt=A.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,At=D(A.stencilBuffer,ht),Ut=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;fn(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye(A),At,A.width,A.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye(A),At,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,At,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,z)}else{const rt=A.textures;for(let ht=0;ht<rt.length;ht++){const At=rt[ht],Ut=u.convert(At.format,At.colorSpace),ft=u.convert(At.type),dt=R(At.internalFormat,Ut,ft,At.normalized,At.colorSpace);fn(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye(A),dt,A.width,A.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye(A),dt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,dt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function fe(z,A,j){const rt=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=a.get(A.depthTexture);if(ht.__renderTarget=A,(!ht.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),rt){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,A.depthTexture.addEventListener("dispose",L)),ht.__webglTexture===void 0){ht.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,A.depthTexture);const Ct=u.convert(A.depthTexture.format),Ft=u.convert(A.depthTexture.type);let Ot;A.depthTexture.format===or?Ot=o.DEPTH_COMPONENT24:A.depthTexture.format===Os&&(Ot=o.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Ot,A.width,A.height,0,Ct,Ft,null)}}else J(A.depthTexture,0);const At=ht.__webglTexture,Ut=Ye(A),ft=rt?o.TEXTURE_CUBE_MAP_POSITIVE_X+j:o.TEXTURE_2D,dt=A.depthTexture.format===Os?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===or)fn(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,ft,At,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,dt,ft,At,0);else if(A.depthTexture.format===Os)fn(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,ft,At,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,dt,ft,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(z){const A=a.get(z),j=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const rt=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),rt){const ht=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),A.__depthDisposeCallback=ht}A.__boundDepthTexture=rt}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let rt=0;rt<6;rt++)fe(A.__webglFramebuffer[rt],z,rt);else{const rt=z.texture.mipmaps;rt&&rt.length>0?fe(A.__webglFramebuffer[0],z,0):fe(A.__webglFramebuffer,z,0)}else if(j){A.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[rt]),A.__webglDepthbuffer[rt]===void 0)A.__webglDepthbuffer[rt]=o.createRenderbuffer(),Ke(A.__webglDepthbuffer[rt],z,!1);else{const ht=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=A.__webglDepthbuffer[rt];o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,At)}}else{const rt=z.texture.mipmaps;if(rt&&rt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Ke(A.__webglDepthbuffer,z,!1);else{const ht=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,At)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(z,A,j){const rt=a.get(z);A!==void 0&&Qt(rt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&Se(z)}function he(z){const A=z.texture,j=a.get(z),rt=a.get(A);z.addEventListener("dispose",T);const ht=z.textures,At=z.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=A.version,c.memory.textures++),At){j.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[ft]=[];for(let dt=0;dt<A.mipmaps.length;dt++)j.__webglFramebuffer[ft][dt]=o.createFramebuffer()}else j.__webglFramebuffer[ft]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)j.__webglFramebuffer[ft]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let ft=0,dt=ht.length;ft<dt;ft++){const Ct=a.get(ht[ft]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&fn(z)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){const dt=ht[ft];j.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[ft]);const Ct=u.convert(dt.format,dt.colorSpace),Ft=u.convert(dt.type),Ot=R(dt.internalFormat,Ct,Ft,dt.normalized,dt.colorSpace,z.isXRRenderTarget===!0),Nt=Ye(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,Ot,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,j.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Ke(j.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){n.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)Qt(j.__webglFramebuffer[ft][dt],z,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,dt);else Qt(j.__webglFramebuffer[ft],z,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(A)&&U(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ut){for(let ft=0,dt=ht.length;ft<dt;ft++){const Ct=ht[ft],Ft=a.get(Ct);let Ot=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ot=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ot,Ft.__webglTexture),Dt(Ot,Ct),Qt(j.__webglFramebuffer,z,Ct,o.COLOR_ATTACHMENT0+ft,Ot,0),x(Ct)&&U(Ot)}n.unbindTexture()}else{let ft=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ft=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ft,rt.__webglTexture),Dt(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)Qt(j.__webglFramebuffer[dt],z,A,o.COLOR_ATTACHMENT0,ft,dt);else Qt(j.__webglFramebuffer,z,A,o.COLOR_ATTACHMENT0,ft,0);x(A)&&U(ft),n.unbindTexture()}z.depthBuffer&&Se(z)}function ln(z){const A=z.textures;for(let j=0,rt=A.length;j<rt;j++){const ht=A[j];if(x(ht)){const At=P(z),Ut=a.get(ht).__webglTexture;n.bindTexture(At,Ut),U(At),n.unbindTexture()}}}const un=[],cn=[];function mn(z){if(z.samples>0){if(fn(z)===!1){const A=z.textures,j=z.width,rt=z.height;let ht=o.COLOR_BUFFER_BIT;const At=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=a.get(z),ft=A.length>1;if(ft)for(let Ct=0;Ct<A.length;Ct++)n.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const dt=z.texture.mipmaps;dt&&dt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ct=0;Ct<A.length;Ct++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);const Ft=a.get(A[Ct]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ft,0)}o.blitFramebuffer(0,0,j,rt,0,0,j,rt,ht,o.NEAREST),p===!0&&(un.length=0,cn.length=0,un.push(o.COLOR_ATTACHMENT0+Ct),z.depthBuffer&&z.resolveDepthBuffer===!1&&(un.push(At),cn.push(At),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,cn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,un))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ft)for(let Ct=0;Ct<A.length;Ct++){n.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);const Ft=a.get(A[Ct]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,Ft,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const A=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Ye(z){return Math.min(s.maxSamples,z.samples)}function fn(z){const A=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Y(z){const A=c.render.frame;_.get(z)!==A&&(_.set(z,A),z.update())}function Be(z,A){const j=z.colorSpace,rt=z.format,ht=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||j!==wf&&j!==qr&&(Ee.getTransfer(j)===Fe?(rt!==ua||ht!==Li)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",j)),A}function we(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=lt,this.getTextureUnits=ct,this.setTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=pt,this.setTexture3D=yt,this.setTextureCube=I,this.rebindTextures=ye,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=fn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function s2(o,t){function n(a,s=qr){let u;const c=Ee.getTransfer(s);if(a===Li)return o.UNSIGNED_BYTE;if(a===s_)return o.UNSIGNED_SHORT_4_4_4_4;if(a===o_)return o.UNSIGNED_SHORT_5_5_5_1;if(a===fy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===hy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===uy)return o.BYTE;if(a===cy)return o.SHORT;if(a===xu)return o.UNSIGNED_SHORT;if(a===r_)return o.INT;if(a===Aa)return o.UNSIGNED_INT;if(a===la)return o.FLOAT;if(a===sr)return o.HALF_FLOAT;if(a===dy)return o.ALPHA;if(a===py)return o.RGB;if(a===ua)return o.RGBA;if(a===or)return o.DEPTH_COMPONENT;if(a===Os)return o.DEPTH_STENCIL;if(a===l_)return o.RED;if(a===u_)return o.RED_INTEGER;if(a===Gs)return o.RG;if(a===c_)return o.RG_INTEGER;if(a===f_)return o.RGBA_INTEGER;if(a===vf||a===xf||a===Sf||a===yf)if(c===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===vf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===xf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Sf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===yf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===vf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===xf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Sf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===yf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===rm||a===sm||a===om||a===lm)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===rm)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sm)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===om)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===lm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===um||a===cm||a===fm||a===hm||a===dm||a===Af||a===pm)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===um||a===cm)return c===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===fm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===hm)return u.COMPRESSED_R11_EAC;if(a===dm)return u.COMPRESSED_SIGNED_R11_EAC;if(a===Af)return u.COMPRESSED_RG11_EAC;if(a===pm)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===mm||a===_m||a===gm||a===vm||a===xm||a===Sm||a===ym||a===Mm||a===Em||a===bm||a===Tm||a===Am||a===Rm||a===Cm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===mm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===_m)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===gm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===vm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===xm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Sm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ym)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Mm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Em)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===bm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Tm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Am)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Rm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Cm)return c===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===wm||a===Dm||a===Um)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===wm)return c===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Dm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Um)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Nm||a===Lm||a===Rf||a===Om)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Nm)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Lm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Rf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Om)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Su?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const o2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
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

}`;class u2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Ay(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ra({vertexShader:o2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new In(new Vf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c2 extends Vs{constructor(t,n){super();const a=this;let s=null,u=1,c=null,f="local-floor",p=1,d=null,_=null,v=null,g=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",y=new u2,x={},U=n.getContextAttributes();let P=null,R=null;const D=[],O=[],L=new _e;let T=null;const N=new Ni;N.viewport=new sn;const G=new Ni;G.viewport=new sn;const V=[N,G],W=new vT;let lt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let St=D[at];return St===void 0&&(St=new dp,D[at]=St),St.getTargetRaySpace()},this.getControllerGrip=function(at){let St=D[at];return St===void 0&&(St=new dp,D[at]=St),St.getGripSpace()},this.getHand=function(at){let St=D[at];return St===void 0&&(St=new dp,D[at]=St),St.getHandSpace()};function Z(at){const St=O.indexOf(at.inputSource);if(St===-1)return;const bt=D[St];bt!==void 0&&(bt.update(at.inputSource,at.frame,d||c),bt.dispatchEvent({type:at.type,data:at.inputSource}))}function F(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",B);for(let at=0;at<D.length;at++){const St=O[at];St!==null&&(O[at]=null,D[at].disconnect(St))}lt=null,ct=null,y.reset();for(const at in x)delete x[at];t.setRenderTarget(P),S=null,g=null,v=null,s=null,R=null,Dt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,a.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){f=at,a.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(s,n)),v},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",B),U.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,ee=null;U.depth&&(ee=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=U.stencil?Os:or,Ht=U.stencil?Su:Aa);const Qt={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(Qt),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new Ta(g.textureWidth,g.textureHeight,{format:ua,type:Li,depthTexture:new Jo(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(s,n,bt),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Ta(S.framebufferWidth,S.framebufferHeight,{format:ua,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Dt.setContext(s),Dt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(at){for(let St=0;St<at.removed.length;St++){const bt=at.removed[St],Ht=O.indexOf(bt);Ht>=0&&(O[Ht]=null,D[Ht].disconnect(bt))}for(let St=0;St<at.added.length;St++){const bt=at.added[St];let Ht=O.indexOf(bt);if(Ht===-1){for(let Qt=0;Qt<D.length;Qt++)if(Qt>=O.length){O.push(bt),Ht=Qt;break}else if(O[Qt]===null){O[Qt]=bt,Ht=Qt;break}if(Ht===-1)break}const ee=D[Ht];ee&&ee.connect(bt)}}const J=new $,pt=new $;function yt(at,St,bt){J.setFromMatrixPosition(St.matrixWorld),pt.setFromMatrixPosition(bt.matrixWorld);const Ht=J.distanceTo(pt),ee=St.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,Ke=ee[14]/(ee[10]-1),fe=ee[14]/(ee[10]+1),Se=(ee[9]+1)/ee[5],ye=(ee[9]-1)/ee[5],he=(ee[8]-1)/ee[0],ln=(Qt[8]+1)/Qt[0],un=Ke*he,cn=Ke*ln,mn=Ht/(-he+ln),Ye=mn*-he;if(St.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ye),at.translateZ(mn),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ee[10]===-1)at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const fn=Ke+mn,Y=fe+mn,Be=un-Ye,we=cn+(Ht-Ye),z=Se*fe/Y*fn,A=ye*fe/Y*fn;at.projectionMatrix.makePerspective(Be,we,z,A,fn,Y),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function I(at,St){St===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(St.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let St=at.near,bt=at.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),W.near=G.near=N.near=St,W.far=G.far=N.far=bt,(lt!==W.near||ct!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),lt=W.near,ct=W.far),W.layers.mask=at.layers.mask|6,N.layers.mask=W.layers.mask&-5,G.layers.mask=W.layers.mask&-3;const Ht=at.parent,ee=W.cameras;I(W,Ht);for(let Qt=0;Qt<ee.length;Qt++)I(ee[Qt],Ht);ee.length===2?yt(W,N,G):W.projectionMatrix.copy(N.projectionMatrix),K(at,W,Ht)};function K(at,St,bt){bt===null?at.matrix.copy(St.matrixWorld):(at.matrix.copy(bt.matrixWorld),at.matrix.invert(),at.matrix.multiply(St.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Pm*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(at){p=at,g!==null&&(g.fixedFoveation=at),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(at){return x[at]};let Mt=null;function Tt(at,St){if(_=St.getViewerPose(d||c),E=St,_!==null){const bt=_.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let Ht=!1;bt.length!==W.cameras.length&&(W.cameras.length=0,Ht=!0);for(let fe=0;fe<bt.length;fe++){const Se=bt[fe];let ye=null;if(S!==null)ye=S.getViewport(Se);else{const ln=v.getViewSubImage(g,Se);ye=ln.viewport,fe===0&&(t.setRenderTargetTextures(R,ln.colorTexture,ln.depthStencilTexture),t.setRenderTarget(R))}let he=V[fe];he===void 0&&(he=new Ni,he.layers.enable(fe),he.viewport=new sn,V[fe]=he),he.matrix.fromArray(Se.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Se.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ye.x,ye.y,ye.width,ye.height),fe===0&&(W.matrix.copy(he.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ht===!0&&W.cameras.push(he)}const ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){v=a.getBinding();const fe=v.getDepthInformation(bt[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,s.renderState)}if(ee&&ee.includes("camera-access")&&b){t.state.unbindTexture(),v=a.getBinding();for(let fe=0;fe<bt.length;fe++){const Se=bt[fe].camera;if(Se){let ye=x[Se];ye||(ye=new Ay,x[Se]=ye);const he=v.getCameraImage(Se);ye.sourceTexture=he}}}}for(let bt=0;bt<D.length;bt++){const Ht=O[bt],ee=D[bt];Ht!==null&&ee!==void 0&&ee.update(Ht,St,d||c)}Mt&&Mt(at,St),St.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:St}),E=null}const Dt=new Ny;Dt.setAnimationLoop(Tt),this.setAnimationLoop=function(at){Mt=at},this.dispose=function(){}}}const f2=new Ze,By=new re;By.set(-1,0,0,0,1,0,0,0,1);function h2(o,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,Ry(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,U,P,R){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?u(y,x):x.isMeshLambertMaterial?(u(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(y,x),v(y,x)):x.isMeshPhongMaterial?(u(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,R)):x.isMeshMatcapMaterial?(u(y,x),E(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),b(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,U,P):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ei&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ei&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=t.get(x),P=U.envMap,R=U.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(R)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(By),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,U,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=P*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const U=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function d2(o,t,n,a){let s={},u={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,D){const O=D.program;a.uniformBlockBinding(R,O)}function d(R,D){let O=s[R.id];O===void 0&&(y(R),O=_(R),s[R.id]=O,R.addEventListener("dispose",U));const L=D.program;a.updateUBOMapping(R,L);const T=t.render.frame;u[R.id]!==T&&(g(R),u[R.id]=T)}function _(R){const D=v();R.__bindingPointIndex=D;const O=o.createBuffer(),L=R.__size,T=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,L,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,O),O}function v(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const D=s[R.id],O=R.uniforms,L=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let T=0,N=O.length;T<N;T++){const G=O[T];if(Array.isArray(G))for(let V=0,W=G.length;V<W;V++)S(G[V],T,V,L);else S(G,T,0,L)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(R,D,O,L){if(b(R,D,O,L)===!0){const T=R.__offset,N=R.value;if(Array.isArray(N)){let G=0;for(let V=0;V<N.length;V++){const W=N[V],lt=x(W);E(W,R.__data,G),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(G+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,R.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,R.__data)}}function E(R,D,O){typeof R=="number"||typeof R=="boolean"?D[0]=R:R.isMatrix3?(D[0]=R.elements[0],D[1]=R.elements[1],D[2]=R.elements[2],D[3]=0,D[4]=R.elements[3],D[5]=R.elements[4],D[6]=R.elements[5],D[7]=0,D[8]=R.elements[6],D[9]=R.elements[7],D[10]=R.elements[8],D[11]=0):ArrayBuffer.isView(R)?D.set(new R.constructor(R.buffer,R.byteOffset,D.length)):R.toArray(D,O)}function b(R,D,O,L){const T=R.value,N=D+"_"+O;if(L[N]===void 0)return typeof T=="number"||typeof T=="boolean"?L[N]=T:ArrayBuffer.isView(T)?L[N]=T.slice():L[N]=T.clone(),!0;{const G=L[N];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return L[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(G.equals(T)===!1)return G.copy(T),!0}}return!1}function y(R){const D=R.uniforms;let O=0;const L=16;for(let N=0,G=D.length;N<G;N++){const V=Array.isArray(D[N])?D[N]:[D[N]];for(let W=0,lt=V.length;W<lt;W++){const ct=V[W],Z=Array.isArray(ct.value)?ct.value:[ct.value];for(let F=0,B=Z.length;F<B;F++){const J=Z[F],pt=x(J),yt=O%L,I=yt%pt.boundary,K=yt+I;O+=I,K!==0&&L-K<pt.storage&&(O+=L-K),ct.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=O,O+=pt.storage}}}const T=O%L;return T>0&&(O+=L-T),R.__size=O,R.__cache={},this}function x(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",R),D}function U(R){const D=R.target;D.removeEventListener("dispose",U);const O=c.indexOf(D.__bindingPointIndex);c.splice(O,1),o.deleteBuffer(s[D.id]),delete s[D.id],delete u[D.id]}function P(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},u={}}return{bind:p,update:d,dispose:P}}const p2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let va=null;function m2(){return va===null&&(va=new Ey(p2,16,16,Gs,sr),va.name="DFG_LUT",va.minFilter=Qn,va.magFilter=Qn,va.wrapS=ir,va.wrapT=ir,va.generateMipmaps=!1,va.needsUpdate=!0),va}class _2{constructor(t={}){const{canvas:n=wb(),context:a=null,depth:s=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Li}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=c;const b=S,y=new Set([f_,c_,u_]),x=new Set([Li,Aa,xu,Su,s_,o_]),U=new Uint32Array(4),P=new Int32Array(4),R=new $;let D=null,O=null;const L=[],T=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let V=!1,W=null,lt=null,ct=null,Z=null;this._outputColorSpace=Di;let F=0,B=0,J=null,pt=-1,yt=null;const I=new sn,K=new sn;let Mt=null;const Tt=new ue(0);let Dt=0,at=n.width,St=n.height,bt=1,Ht=null,ee=null;const Qt=new sn(0,0,at,St),Ke=new sn(0,0,at,St);let fe=!1;const Se=new __;let ye=!1,he=!1;const ln=new Ze,un=new $,cn=new sn,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function fn(){return J===null?bt:1}let Y=a;function Be(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:s,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${n_}`),n.addEventListener("webglcontextlost",Je,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",gi,!1),Y===null){const q="webgl2";if(Y=Be(q,C),Y===null)throw Be(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Te("WebGLRenderer: "+C.message),C}let we,z,A,j,rt,ht,At,Ut,ft,dt,Ct,Ft,Ot,Nt,Kt,jt,ie,X,Rt,_t,wt,zt,Et;function qt(){we=new m3(Y),we.init(),wt=new s2(Y,we),z=new o3(Y,we,t,wt),A=new a2(Y,we),z.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),lt=Y.createFramebuffer(),ct=Y.createFramebuffer(),Z=Y.createFramebuffer(),j=new v3(Y),rt=new XC,ht=new r2(Y,we,A,rt,z,wt,j),At=new p3(G),Ut=new MT(Y),zt=new r3(Y,Ut),ft=new _3(Y,Ut,j,zt),dt=new S3(Y,ft,Ut,zt,j),X=new x3(Y,z,ht),Kt=new l3(rt),Ct=new kC(G,At,we,z,zt,Kt),Ft=new h2(G,rt),Ot=new qC,Nt=new JC(we),ie=new a3(G,At,A,dt,E,p),jt=new i2(G,dt,z),Et=new d2(Y,j,z,A),Rt=new s3(Y,we,j),_t=new g3(Y,we,j),j.programs=Ct.programs,G.capabilities=z,G.extensions=we,G.properties=rt,G.renderLists=Ot,G.shadowMap=jt,G.state=A,G.info=j}qt(),b!==Li&&(N=new M3(b,n.width,n.height,f,s,u));const Vt=new c2(G,Y);this.xr=Vt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(C){C!==void 0&&(bt=C,this.setSize(at,St,!1))},this.getSize=function(C){return C.set(at,St)},this.setSize=function(C,q,st=!0){if(Vt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}at=C,St=q,n.width=Math.floor(C*bt),n.height=Math.floor(q*bt),st===!0&&(n.style.width=C+"px",n.style.height=q+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(at*bt,St*bt).floor()},this.setDrawingBufferSize=function(C,q,st){at=C,St=q,bt=st,n.width=Math.floor(C*st),n.height=Math.floor(q*st),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(b===Li){Te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Qt)},this.setViewport=function(C,q,st,nt){C.isVector4?Qt.set(C.x,C.y,C.z,C.w):Qt.set(C,q,st,nt),A.viewport(I.copy(Qt).multiplyScalar(bt).round())},this.getScissor=function(C){return C.copy(Ke)},this.setScissor=function(C,q,st,nt){C.isVector4?Ke.set(C.x,C.y,C.z,C.w):Ke.set(C,q,st,nt),A.scissor(K.copy(Ke).multiplyScalar(bt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){A.setScissorTest(fe=C)},this.setOpaqueSort=function(C){Ht=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,st=!0){let nt=0;if(C){let it=!1;if(J!==null){const Pt=J.texture.format;it=y.has(Pt)}if(it){const Pt=J.texture.type,Gt=x.has(Pt),Lt=ie.getClearColor(),Xt=ie.getClearAlpha(),kt=Lt.r,Jt=Lt.g,se=Lt.b;Gt?(U[0]=kt,U[1]=Jt,U[2]=se,U[3]=Xt,Y.clearBufferuiv(Y.COLOR,0,U)):(P[0]=kt,P[1]=Jt,P[2]=se,P[3]=Xt,Y.clearBufferiv(Y.COLOR,0,P))}else nt|=Y.COLOR_BUFFER_BIT}q&&(nt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(nt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Y.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),W=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Je,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",gi,!1),ie.dispose(),Ot.dispose(),Nt.dispose(),rt.dispose(),At.dispose(),dt.dispose(),zt.dispose(),Et.dispose(),Ct.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Sn),Vt.removeEventListener("sessionend",Fn),ii.stop()};function Je(C){C.preventDefault(),zx("WebGLRenderer: Context Lost."),V=!0}function Ne(){zx("WebGLRenderer: Context Restored."),V=!1;const C=j.autoReset,q=jt.enabled,st=jt.autoUpdate,nt=jt.needsUpdate,it=jt.type;qt(),j.autoReset=C,jt.enabled=q,jt.autoUpdate=st,jt.needsUpdate=nt,jt.type=it}function gi(C){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vi(C){const q=C.target;q.removeEventListener("dispose",vi),ul(q)}function ul(C){cl(C),rt.remove(C)}function cl(C){const q=rt.get(C).programs;q!==void 0&&(q.forEach(function(st){Ct.releaseProgram(st)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,st,nt,it,Pt){q===null&&(q=mn);const Gt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Lt=dr(C,q,st,nt,it);A.setMaterial(nt,Gt);let Xt=st.index,kt=1;if(nt.wireframe===!0){if(Xt=ft.getWireframeAttribute(st),Xt===void 0)return;kt=2}const Jt=st.drawRange,se=st.attributes.position;let Zt=Jt.start*kt,Ae=(Jt.start+Jt.count)*kt;Pt!==null&&(Zt=Math.max(Zt,Pt.start*kt),Ae=Math.min(Ae,(Pt.start+Pt.count)*kt)),Xt!==null?(Zt=Math.max(Zt,0),Ae=Math.min(Ae,Xt.count)):se!=null&&(Zt=Math.max(Zt,0),Ae=Math.min(Ae,se.count));const $e=Ae-Zt;if($e<0||$e===1/0)return;zt.setup(it,nt,Lt,st,Xt);let ke,Le=Rt;if(Xt!==null&&(ke=Ut.get(Xt),Le=_t,Le.setIndex(ke)),it.isMesh)nt.wireframe===!0?(A.setLineWidth(nt.wireframeLinewidth*fn()),Le.setMode(Y.LINES)):Le.setMode(Y.TRIANGLES);else if(it.isLine){let Oe=nt.linewidth;Oe===void 0&&(Oe=1),A.setLineWidth(Oe*fn()),it.isLineSegments?Le.setMode(Y.LINES):it.isLineLoop?Le.setMode(Y.LINE_LOOP):Le.setMode(Y.LINE_STRIP)}else it.isPoints?Le.setMode(Y.POINTS):it.isSprite&&Le.setMode(Y.TRIANGLES);if(it.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Le.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Oe=it._multiDrawStarts,Bt=it._multiDrawCounts,Wn=it._multiDrawCount,de=Xt?Ut.get(Xt).bytesPerElement:1,wn=rt.get(nt).currentProgram.getUniforms();for(let xi=0;xi<Wn;xi++)wn.setValue(Y,"_gl_DrawID",xi),Le.render(Oe[xi]/de,Bt[xi])}else if(it.isInstancedMesh)Le.renderInstances(Zt,$e,it.count);else if(st.isInstancedBufferGeometry){const Oe=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Bt=Math.min(st.instanceCount,Oe);Le.renderInstances(Zt,$e,Bt)}else Le.render(Zt,$e)};function fl(C,q,st){C.transparent===!0&&C.side===nr&&C.forceSinglePass===!1?(C.side=ei,C.needsUpdate=!0,hr(C,q,st),C.side=$r,C.needsUpdate=!0,hr(C,q,st),C.side=nr):hr(C,q,st)}this.compile=function(C,q,st=null){st===null&&(st=C),O=Nt.get(st),O.init(q),T.push(O),st.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(O.pushLight(it),it.castShadow&&O.pushShadow(it))}),C!==st&&C.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(O.pushLight(it),it.castShadow&&O.pushShadow(it))}),O.setupLights();const nt=new Set;return C.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Pt=it.material;if(Pt)if(Array.isArray(Pt))for(let Gt=0;Gt<Pt.length;Gt++){const Lt=Pt[Gt];fl(Lt,st,it),nt.add(Lt)}else fl(Pt,st,it),nt.add(Pt)}),O=T.pop(),nt},this.compileAsync=function(C,q,st=null){const nt=this.compile(C,q,st);return new Promise(it=>{function Pt(){if(nt.forEach(function(Gt){rt.get(Gt).currentProgram.isReady()&&nt.delete(Gt)}),nt.size===0){it(C);return}setTimeout(Pt,10)}we.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Ws=null;function fa(C){Ws&&Ws(C)}function Sn(){ii.stop()}function Fn(){ii.start()}const ii=new Ny;ii.setAnimationLoop(fa),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(C){Ws=C,Vt.setAnimationLoop(C),C===null?ii.stop():ii.start()},Vt.addEventListener("sessionstart",Sn),Vt.addEventListener("sessionend",Fn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;W!==null&&W.renderStart(C,q);const st=Vt.enabled===!0&&Vt.isPresenting===!0,nt=N!==null&&(J===null||st)&&N.begin(G,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(q),q=Vt.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,q,J),O=Nt.get(C,T.length),O.init(q),O.state.textureUnits=ht.getTextureUnits(),T.push(O),ln.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Se.setFromProjectionMatrix(ln,Ma,q.reversedDepth),he=this.localClippingEnabled,ye=Kt.init(this.clippingPlanes,he),D=Ot.get(C,L.length),D.init(),L.push(D),Vt.enabled===!0&&Vt.isPresenting===!0){const Gt=G.xr.getDepthSensingMesh();Gt!==null&&as(Gt,q,-1/0,G.sortObjects)}as(C,q,0,G.sortObjects),D.finish(),G.sortObjects===!0&&D.sort(Ht,ee,q.reversedDepth),Ye=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Ye&&ie.addToRenderList(D,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Kt.beginShadows();const it=O.state.shadowsArray;if(jt.render(it,C,q),ye===!0&&Kt.endShadows(),(nt&&N.hasRenderPass())===!1){const Gt=D.opaque,Lt=D.transmissive;if(O.setupLights(),q.isArrayCamera){const Xt=q.cameras;if(Lt.length>0)for(let kt=0,Jt=Xt.length;kt<Jt;kt++){const se=Xt[kt];Ou(Gt,Lt,C,se)}Ye&&ie.render(C);for(let kt=0,Jt=Xt.length;kt<Jt;kt++){const se=Xt[kt];Lu(D,C,se,se.viewport)}}else Lt.length>0&&Ou(Gt,Lt,C,q),Ye&&ie.render(C),Lu(D,C,q)}J!==null&&B===0&&(ht.updateMultisampleRenderTarget(J),ht.updateRenderTargetMipmap(J)),nt&&N.end(G),C.isScene===!0&&C.onAfterRender(G,C,q),zt.resetDefaultState(),pt=-1,yt=null,T.pop(),T.length>0?(O=T[T.length-1],ht.setTextureUnits(O.state.textureUnits),ye===!0&&Kt.setGlobalState(G.clippingPlanes,O.state.camera)):O=null,L.pop(),L.length>0?D=L[L.length-1]:D=null,W!==null&&W.renderEnd()};function as(C,q,st,nt){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Se.intersectsSprite(C)){nt&&cn.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ln);const Gt=dt.update(C),Lt=C.material;Lt.visible&&D.push(C,Gt,Lt,st,cn.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Se.intersectsObject(C))){const Gt=dt.update(C),Lt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),cn.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),cn.copy(Gt.boundingSphere.center)),cn.applyMatrix4(C.matrixWorld).applyMatrix4(ln)),Array.isArray(Lt)){const Xt=Gt.groups;for(let kt=0,Jt=Xt.length;kt<Jt;kt++){const se=Xt[kt],Zt=Lt[se.materialIndex];Zt&&Zt.visible&&D.push(C,Gt,Zt,st,cn.z,se)}}else Lt.visible&&D.push(C,Gt,Lt,st,cn.z,null)}}const Pt=C.children;for(let Gt=0,Lt=Pt.length;Gt<Lt;Gt++)as(Pt[Gt],q,st,nt)}function Lu(C,q,st,nt){const{opaque:it,transmissive:Pt,transparent:Gt}=C;O.setupLightsView(st),ye===!0&&Kt.setGlobalState(G.clippingPlanes,st),nt&&A.viewport(I.copy(nt)),it.length>0&&rs(it,q,st),Pt.length>0&&rs(Pt,q,st),Gt.length>0&&rs(Gt,q,st),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Ou(C,q,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[nt.id]===void 0){const Zt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[nt.id]=new Ta(1,1,{generateMipmaps:!0,type:Zt?sr:Li,minFilter:Ls,samples:Math.max(4,z.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Pt=O.state.transmissionRenderTarget[nt.id],Gt=nt.viewport||I;Pt.setSize(Gt.z*G.transmissionResolutionScale,Gt.w*G.transmissionResolutionScale);const Lt=G.getRenderTarget(),Xt=G.getActiveCubeFace(),kt=G.getActiveMipmapLevel();G.setRenderTarget(Pt),G.getClearColor(Tt),Dt=G.getClearAlpha(),Dt<1&&G.setClearColor(16777215,.5),G.clear(),Ye&&ie.render(st);const Jt=G.toneMapping;G.toneMapping=ba;const se=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),O.setupLightsView(nt),ye===!0&&Kt.setGlobalState(G.clippingPlanes,nt),rs(C,st,nt),ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt),we.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ae=0,$e=q.length;Ae<$e;Ae++){const ke=q[Ae],{object:Le,geometry:Oe,material:Bt,group:Wn}=ke;if(Bt.side===nr&&Le.layers.test(nt.layers)){const de=Bt.side;Bt.side=ei,Bt.needsUpdate=!0,fr(Le,st,nt,Oe,Bt,Wn),Bt.side=de,Bt.needsUpdate=!0,Zt=!0}}Zt===!0&&(ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt))}G.setRenderTarget(Lt,Xt,kt),G.setClearColor(Tt,Dt),se!==void 0&&(nt.viewport=se),G.toneMapping=Jt}function rs(C,q,st){const nt=q.isScene===!0?q.overrideMaterial:null;for(let it=0,Pt=C.length;it<Pt;it++){const Gt=C[it],{object:Lt,geometry:Xt,group:kt}=Gt;let Jt=Gt.material;Jt.allowOverride===!0&&nt!==null&&(Jt=nt),Lt.layers.test(st.layers)&&fr(Lt,q,st,Xt,Jt,kt)}}function fr(C,q,st,nt,it,Pt){C.onBeforeRender(G,q,st,nt,it,Pt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),it.onBeforeRender(G,q,st,nt,C,Pt),it.transparent===!0&&it.side===nr&&it.forceSinglePass===!1?(it.side=ei,it.needsUpdate=!0,G.renderBufferDirect(st,q,nt,it,C,Pt),it.side=$r,it.needsUpdate=!0,G.renderBufferDirect(st,q,nt,it,C,Pt),it.side=nr):G.renderBufferDirect(st,q,nt,it,C,Pt),C.onAfterRender(G,q,st,nt,it,Pt)}function hr(C,q,st){q.isScene!==!0&&(q=mn);const nt=rt.get(C),it=O.state.lights,Pt=O.state.shadowsArray,Gt=it.state.version,Lt=Ct.getParameters(C,it.state,Pt,q,st,O.state.lightProbeGridArray),Xt=Ct.getProgramCacheKey(Lt);let kt=nt.programs;nt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,nt.fog=q.fog;const Jt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;nt.envMap=At.get(C.envMap||nt.environment,Jt),nt.envMapRotation=nt.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,kt===void 0&&(C.addEventListener("dispose",vi),kt=new Map,nt.programs=kt);let se=kt.get(Xt);if(se!==void 0){if(nt.currentProgram===se&&nt.lightsStateVersion===Gt)return Ua(C,Lt),se}else Lt.uniforms=Ct.getUniforms(C),W!==null&&C.isNodeMaterial&&W.build(C,st,Lt),C.onBeforeCompile(Lt,G),se=Ct.acquireProgram(Lt,Xt),kt.set(Xt,se),nt.uniforms=Lt.uniforms;const Zt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=Kt.uniform),Ua(C,Lt),nt.needsLights=Pu(C),nt.lightsStateVersion=Gt,nt.needsLights&&(Zt.ambientLightColor.value=it.state.ambient,Zt.lightProbe.value=it.state.probe,Zt.directionalLights.value=it.state.directional,Zt.directionalLightShadows.value=it.state.directionalShadow,Zt.spotLights.value=it.state.spot,Zt.spotLightShadows.value=it.state.spotShadow,Zt.rectAreaLights.value=it.state.rectArea,Zt.ltc_1.value=it.state.rectAreaLTC1,Zt.ltc_2.value=it.state.rectAreaLTC2,Zt.pointLights.value=it.state.point,Zt.pointLightShadows.value=it.state.pointShadow,Zt.hemisphereLights.value=it.state.hemi,Zt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Zt.spotLightMatrix.value=it.state.spotLightMatrix,Zt.spotLightMap.value=it.state.spotLightMap,Zt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=O.state.lightProbeGridArray.length>0,nt.currentProgram=se,nt.uniformsList=null,se}function Da(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Mf.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Ua(C,q){const st=rt.get(C);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function ss(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(q.matrixWorld);for(let st=0,nt=C.length;st<nt;st++){const it=C[st];if(it.texture!==null&&it.boundingBox.containsPoint(R))return it}return null}function dr(C,q,st,nt,it){q.isScene!==!0&&(q=mn),ht.resetTextureUnits();const Pt=q.fog,Gt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?q.environment:null,Lt=J===null?G.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ee.workingColorSpace,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,kt=At.get(nt.envMap||Gt,Xt),Jt=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,se=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!st.morphAttributes.position,Ae=!!st.morphAttributes.normal,$e=!!st.morphAttributes.color;let ke=ba;nt.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=G.toneMapping);const Le=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Oe=Le!==void 0?Le.length:0,Bt=rt.get(nt),Wn=O.state.lights;if(ye===!0&&(he===!0||C!==yt)){const Ue=C===yt&&nt.id===pt;Kt.setState(nt,C,Ue)}let de=!1;nt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Wn.state.version||Bt.outputColorSpace!==Lt||it.isBatchedMesh&&Bt.batching===!1||!it.isBatchedMesh&&Bt.batching===!0||it.isBatchedMesh&&Bt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Bt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Bt.instancing===!1||!it.isInstancedMesh&&Bt.instancing===!0||it.isSkinnedMesh&&Bt.skinning===!1||!it.isSkinnedMesh&&Bt.skinning===!0||it.isInstancedMesh&&Bt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Bt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Bt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Bt.instancingMorph===!1&&it.morphTexture!==null||Bt.envMap!==kt||nt.fog===!0&&Bt.fog!==Pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Kt.numPlanes||Bt.numIntersection!==Kt.numIntersection)||Bt.vertexAlphas!==Jt||Bt.vertexTangents!==se||Bt.morphTargets!==Zt||Bt.morphNormals!==Ae||Bt.morphColors!==$e||Bt.toneMapping!==ke||Bt.morphTargetsCount!==Oe||!!Bt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Bt.__version=nt.version);let wn=Bt.currentProgram;de===!0&&(wn=hr(nt,q,it),W&&nt.isNodeMaterial&&W.onUpdateProgram(nt,wn,Bt));let xi=!1,$i=!1,Si=!1;const Pe=wn.getUniforms(),tn=Bt.uniforms;if(A.useProgram(wn.program)&&(xi=!0,$i=!0,Si=!0),nt.id!==pt&&(pt=nt.id,$i=!0),Bt.needsLights){const Ue=ss(O.state.lightProbeGridArray,it);Bt.lightProbeGrid!==Ue&&(Bt.lightProbeGrid=Ue,$i=!0)}if(xi||yt!==C){A.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pe.setValue(Y,"projectionMatrix",C.projectionMatrix),Pe.setValue(Y,"viewMatrix",C.matrixWorldInverse);const ha=Pe.map.cameraPosition;ha!==void 0&&ha.setValue(Y,un.setFromMatrixPosition(C.matrixWorld)),z.logarithmicDepthBuffer&&Pe.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Pe.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),yt!==C&&(yt=C,$i=!0,Si=!0)}if(Bt.needsLights&&(Wn.state.directionalShadowMap.length>0&&Pe.setValue(Y,"directionalShadowMap",Wn.state.directionalShadowMap,ht),Wn.state.spotShadowMap.length>0&&Pe.setValue(Y,"spotShadowMap",Wn.state.spotShadowMap,ht),Wn.state.pointShadowMap.length>0&&Pe.setValue(Y,"pointShadowMap",Wn.state.pointShadowMap,ht)),it.isSkinnedMesh){Pe.setOptional(Y,it,"bindMatrix"),Pe.setOptional(Y,it,"bindMatrixInverse");const Ue=it.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(Y,"boneTexture",Ue.boneTexture,ht))}it.isBatchedMesh&&(Pe.setOptional(Y,it,"batchingTexture"),Pe.setValue(Y,"batchingTexture",it._matricesTexture,ht),Pe.setOptional(Y,it,"batchingIdTexture"),Pe.setValue(Y,"batchingIdTexture",it._indirectTexture,ht),Pe.setOptional(Y,it,"batchingColorTexture"),it._colorsTexture!==null&&Pe.setValue(Y,"batchingColorTexture",it._colorsTexture,ht));const ta=st.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&X.update(it,st,wn),($i||Bt.receiveShadow!==it.receiveShadow)&&(Bt.receiveShadow=it.receiveShadow,Pe.setValue(Y,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=m2()),$i){if(Pe.setValue(Y,"toneMappingExposure",G.toneMappingExposure),Bt.needsLights&&yn(tn,Si),Pt&&nt.fog===!0&&Ft.refreshFogUniforms(tn,Pt),Ft.refreshMaterialUniforms(tn,nt,bt,St,O.state.transmissionRenderTarget[C.id]),Bt.needsLights&&Bt.lightProbeGrid){const Ue=Bt.lightProbeGrid;tn.probesSH.value=Ue.texture,tn.probesMin.value.copy(Ue.boundingBox.min),tn.probesMax.value.copy(Ue.boundingBox.max),tn.probesResolution.value.copy(Ue.resolution)}Mf.upload(Y,Da(Bt),tn,ht)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Mf.upload(Y,Da(Bt),tn,ht),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Pe.setValue(Y,"center",it.center),Pe.setValue(Y,"modelViewMatrix",it.modelViewMatrix),Pe.setValue(Y,"normalMatrix",it.normalMatrix),Pe.setValue(Y,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Ue=nt.uniformsGroups;for(let ha=0,pr=Ue.length;ha<pr;ha++){const os=Ue[ha];Et.update(os,wn),Et.bind(os,wn)}}return wn}function yn(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Pu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,q,st){const nt=rt.get(C);nt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),rt.get(C.texture).__webglTexture=q,rt.get(C.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const st=rt.get(C);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,st=0){J=C,F=q,B=st;let nt=null,it=!1,Pt=!1;if(C){const Lt=rt.get(C);if(Lt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(Y.FRAMEBUFFER,Lt.__webglFramebuffer),I.copy(C.viewport),K.copy(C.scissor),Mt=C.scissorTest,A.viewport(I),A.scissor(K),A.setScissorTest(Mt),pt=-1;return}else if(Lt.__webglFramebuffer===void 0)ht.setupRenderTarget(C);else if(Lt.__hasExternalTextures)ht.rebindTextures(C,rt.get(C.texture).__webglTexture,rt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&rt.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(C)}}const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const kt=rt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?nt=kt[q][st]:nt=kt[q],it=!0):C.samples>0&&ht.useMultisampledRTT(C)===!1?nt=rt.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?nt=kt[st]:nt=kt,I.copy(C.viewport),K.copy(C.scissor),Mt=C.scissorTest}else I.copy(Qt).multiplyScalar(bt).floor(),K.copy(Ke).multiplyScalar(bt).floor(),Mt=fe;if(st!==0&&(nt=lt),A.bindFramebuffer(Y.FRAMEBUFFER,nt)&&A.drawBuffers(C,nt),A.viewport(I),A.scissor(K),A.setScissorTest(Mt),it){const Lt=rt.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,st)}else if(Pt){const Lt=q;for(let Xt=0;Xt<C.textures.length;Xt++){const kt=rt.get(C.textures[Xt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,st,Lt)}}else if(C!==null&&st!==0){const Lt=rt.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Lt.__webglTexture,st)}pt=-1},this.readRenderTargetPixels=function(C,q,st,nt,it,Pt,Gt,Lt=0){if(!(C&&C.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){A.bindFramebuffer(Y.FRAMEBUFFER,Xt);try{const kt=C.textures[Lt],Jt=kt.format,se=kt.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Lt),!z.textureFormatReadable(Jt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(se)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-nt&&st>=0&&st<=C.height-it&&Y.readPixels(q,st,nt,it,wt.convert(Jt),wt.convert(se),Pt)}finally{const kt=J!==null?rt.get(J).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(C,q,st,nt,it,Pt,Gt,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(q>=0&&q<=C.width-nt&&st>=0&&st<=C.height-it){A.bindFramebuffer(Y.FRAMEBUFFER,Xt);const kt=C.textures[Lt],Jt=kt.format,se=kt.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Lt),!z.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Pt.byteLength,Y.STREAM_READ),Y.readPixels(q,st,nt,it,wt.convert(Jt),wt.convert(se),0);const Ae=J!==null?rt.get(J).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,Ae);const $e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Db(Y,$e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Pt),Y.deleteBuffer(Zt),Y.deleteSync($e),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,st=0){const nt=Math.pow(2,-st),it=Math.floor(C.image.width*nt),Pt=Math.floor(C.image.height*nt),Gt=q!==null?q.x:0,Lt=q!==null?q.y:0;ht.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,st,0,0,Gt,Lt,it,Pt),A.unbindTexture()},this.copyTextureToTexture=function(C,q,st=null,nt=null,it=0,Pt=0){let Gt,Lt,Xt,kt,Jt,se,Zt,Ae,$e;const ke=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(st!==null)Gt=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Xt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Jt=st.min.y,se=st.isBox3?st.min.z:0;else{const tn=Math.pow(2,-it);Gt=Math.floor(ke.width*tn),Lt=Math.floor(ke.height*tn),C.isDataArrayTexture?Xt=ke.depth:C.isData3DTexture?Xt=Math.floor(ke.depth*tn):Xt=1,kt=0,Jt=0,se=0}nt!==null?(Zt=nt.x,Ae=nt.y,$e=nt.z):(Zt=0,Ae=0,$e=0);const Le=wt.convert(q.format),Oe=wt.convert(q.type);let Bt;q.isData3DTexture?(ht.setTexture3D(q,0),Bt=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ht.setTexture2DArray(q,0),Bt=Y.TEXTURE_2D_ARRAY):(ht.setTexture2D(q,0),Bt=Y.TEXTURE_2D),A.activeTexture(Y.TEXTURE0),A.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),A.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),A.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const Wn=A.getParameter(Y.UNPACK_ROW_LENGTH),de=A.getParameter(Y.UNPACK_IMAGE_HEIGHT),wn=A.getParameter(Y.UNPACK_SKIP_PIXELS),xi=A.getParameter(Y.UNPACK_SKIP_ROWS),$i=A.getParameter(Y.UNPACK_SKIP_IMAGES);A.pixelStorei(Y.UNPACK_ROW_LENGTH,ke.width),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ke.height),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,kt),A.pixelStorei(Y.UNPACK_SKIP_ROWS,Jt),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,se);const Si=C.isDataArrayTexture||C.isData3DTexture,Pe=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const tn=rt.get(C),ta=rt.get(q),Ue=rt.get(tn.__renderTarget),ha=rt.get(ta.__renderTarget);A.bindFramebuffer(Y.READ_FRAMEBUFFER,Ue.__webglFramebuffer),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let pr=0;pr<Xt;pr++)Si&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(C).__webglTexture,it,se+pr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,Pt,$e+pr)),Y.blitFramebuffer(kt,Jt,Gt,Lt,Zt,Ae,Gt,Lt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(it!==0||C.isRenderTargetTexture||rt.has(C)){const tn=rt.get(C),ta=rt.get(q);A.bindFramebuffer(Y.READ_FRAMEBUFFER,ct),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Z);for(let Ue=0;Ue<Xt;Ue++)Si?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,tn.__webglTexture,it,se+Ue):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,tn.__webglTexture,it),Pe?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ta.__webglTexture,Pt,$e+Ue):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ta.__webglTexture,Pt),it!==0?Y.blitFramebuffer(kt,Jt,Gt,Lt,Zt,Ae,Gt,Lt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Pe?Y.copyTexSubImage3D(Bt,Pt,Zt,Ae,$e+Ue,kt,Jt,Gt,Lt):Y.copyTexSubImage2D(Bt,Pt,Zt,Ae,kt,Jt,Gt,Lt);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Pe?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(Bt,Pt,Zt,Ae,$e,Gt,Lt,Xt,Le,Oe,ke.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Bt,Pt,Zt,Ae,$e,Gt,Lt,Xt,Le,ke.data):Y.texSubImage3D(Bt,Pt,Zt,Ae,$e,Gt,Lt,Xt,Le,Oe,ke):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Pt,Zt,Ae,Gt,Lt,Le,Oe,ke.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Pt,Zt,Ae,ke.width,ke.height,Le,ke.data):Y.texSubImage2D(Y.TEXTURE_2D,Pt,Zt,Ae,Gt,Lt,Le,Oe,ke);A.pixelStorei(Y.UNPACK_ROW_LENGTH,Wn),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,de),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,wn),A.pixelStorei(Y.UNPACK_SKIP_ROWS,xi),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,$i),Pt===0&&q.generateMipmaps&&Y.generateMipmap(Bt),A.unbindTexture()},this.initRenderTarget=function(C){rt.get(C).__webglFramebuffer===void 0&&ht.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ht.setTextureCube(C,0):C.isData3DTexture?ht.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ht.setTexture2DArray(C,0):ht.setTexture2D(C,0),A.unbindTexture()},this.resetState=function(){F=0,B=0,J=null,A.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ee._getUnpackColorSpace()}}class g2 extends vy{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new ol;t.deleteAttribute("uv");const n=new Im({side:ei}),a=new Im,s=new Dy(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const u=new In(t,n);u.position.set(-.757,13.219,.717),u.scale.set(31.713,28.305,28.591),this.add(u);const c=new by(t,a,6),f=new jn;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),c.setMatrixAt(0,f.matrix),f.position.set(-5.607,-.754,-.758),f.rotation.set(0,.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),c.setMatrixAt(1,f.matrix),f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),c.setMatrixAt(2,f.matrix),f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),c.setMatrixAt(3,f.matrix),f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),c.setMatrixAt(4,f.matrix),f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),c.setMatrixAt(5,f.matrix),this.add(c);const p=new In(t,Bo(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const d=new In(t,Bo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const _=new In(t,Bo(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new In(t,Bo(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new In(t,Bo(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const S=new In(t,Bo(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function Bo(o){return new fT({color:0,emissive:16777215,emissiveIntensity:o})}const{randFloat:v2,randFloatSpread:zp}=Pb,x2={count:42,colors:["#ff8fab","#ffd166","#06d6a0","#1a73e8"],ambientColor:16777215,ambientIntensity:1,lightIntensity:120,materialParams:{metalness:.12,roughness:.22,clearcoat:1,clearcoatRoughness:.08},minSize:.24,maxSize:.52,size0:.66,gravity:0,friction:.995,wallBounce:.92,maxVelocity:.055,maxX:5,maxY:1.6,maxZ:1.6,controlSphere0:!1,followCursor:!0},cu=new jn,Fp=new _e,NS=new Wr(new $(0,0,1),0),LS=new xT,OS=new $,vn=new $,Pn=new $,mf=new $,Bp=new $,Ho=new $,Xr=new $;class S2{constructor(t){this.config=t,this.positionData=new Float32Array(t.count*3).fill(0),this.velocityData=new Float32Array(t.count*3).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new $,this.initializePositions(),this.initializeSizes()}initializePositions(){const{config:t,positionData:n}=this;this.center.toArray(n,0);for(let a=1;a<t.count;a+=1){const s=a*3;n[s]=zp(t.maxX*2),n[s+1]=zp(t.maxY*2),n[s+2]=zp(t.maxZ*2)}}initializeSizes(){const{config:t,sizeData:n}=this;n[0]=t.size0;for(let a=1;a<t.count;a+=1)n[a]=v2(t.minSize,t.maxSize)}update(t){const{config:n,positionData:a,velocityData:s,sizeData:u}=this,c=n.controlSphere0?1:0;n.controlSphere0&&(vn.fromArray(a,0),vn.lerp(this.center,.1).toArray(a,0),Pn.set(0,0,0).toArray(s,0));for(let f=c;f<n.count;f+=1){const p=f*3;vn.fromArray(a,p),Pn.fromArray(s,p),Pn.y-=t.delta*n.gravity*u[f],Pn.multiplyScalar(n.friction),Pn.clampLength(0,n.maxVelocity),vn.add(Pn),vn.toArray(a,p),Pn.toArray(s,p)}for(let f=c;f<n.count;f+=1){const p=f*3;vn.fromArray(a,p),Pn.fromArray(s,p);const d=u[f];for(let _=f+1;_<n.count;_+=1){const v=_*3;mf.fromArray(a,v),Bp.fromArray(s,v);const g=u[_];Ho.copy(mf).sub(vn);const S=Ho.length(),E=d+g;if(S<E&&S>0){const b=E-S;Xr.copy(Ho).normalize().multiplyScalar(b*.5),vn.sub(Xr),mf.add(Xr),Pn.addScaledVector(Xr,-.2),Bp.addScaledVector(Xr,.2),vn.toArray(a,p),mf.toArray(a,v),Pn.toArray(s,p),Bp.toArray(s,v)}}if(n.controlSphere0){Ho.fromArray(a,0).sub(vn);const _=Ho.length(),v=u[0]+d;if(_<v&&_>0){const g=v-_;Xr.copy(Ho).normalize().multiplyScalar(g),vn.sub(Xr),Pn.addScaledVector(Xr,-.2)}}Math.abs(vn.x)+d>n.maxX&&(vn.x=Math.sign(vn.x)*(n.maxX-d),Pn.x=-Pn.x*n.wallBounce),Math.abs(vn.y)+d>n.maxY&&(vn.y=Math.sign(vn.y)*(n.maxY-d),Pn.y=-Pn.y*n.wallBounce),Math.abs(vn.z)+d>n.maxZ&&(vn.z=Math.sign(vn.z)*(n.maxZ-d),Pn.z=-Pn.z*n.wallBounce),vn.toArray(a,p),Pn.toArray(s,p)}}}class y2 extends by{constructor(t,n){const a=new g2,s=new Fm(t).fromScene(a,.04).texture,u=new g_(1,32,32),c=new cT({envMap:s,...n.materialParams});super(u,c,n.count),this.config=n,this.physics=new S2(n),this.ambientLight=new _T(n.ambientColor,n.ambientIntensity),this.pointLight=new Dy(new ue(n.colors[0]),n.lightIntensity),this.add(this.ambientLight),this.add(this.pointLight),this.applyColors(n.colors)}applyColors(t){const n=t.map(s=>new ue(s)),a=new ue;for(let s=0;s<this.count;s+=1){const u=s/Math.max(1,this.count-1)*(n.length-1),c=Math.floor(u),f=u-c,p=n[c],d=n[Math.min(c+1,n.length-1)];a.copy(p).lerp(d,f),this.setColorAt(s,a),s===0&&this.pointLight.color.copy(a)}this.instanceColor.needsUpdate=!0}update(t){this.physics.update(t);for(let n=0;n<this.count;n+=1)cu.position.fromArray(this.physics.positionData,n*3),cu.scale.setScalar(n===0&&!this.config.followCursor?0:this.physics.sizeData[n]),cu.updateMatrix(),this.setMatrixAt(n,cu.matrix),n===0&&this.pointLight.position.copy(cu.position);this.instanceMatrix.needsUpdate=!0}}function M2({className:o="",followCursor:t=!0}){const n=Cn.useRef(null);return Cn.useEffect(()=>{const a=n.current;if(!a)return;const s=new _2({canvas:a,antialias:!0,alpha:!0,powerPreference:"high-performance"});s.outputColorSpace=Di,s.toneMapping=a_;const u=new vy,c=new Ni(26,1,.1,100);c.position.set(0,0,20),c.lookAt(0,0,0);const f=a.parentElement,p={...x2,followCursor:t},d=new y2(s,p);u.add(d);const _=new ST,v=()=>{const y=f?.clientWidth||window.innerWidth,x=f?.clientHeight||120;s.setSize(y,x,!1),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.aspect=y/Math.max(x,1),c.updateProjectionMatrix();const U=c.fov*Math.PI/180,P=2*Math.tan(U/2)*c.position.length(),R=P*c.aspect;d.config.maxX=R*.46,d.config.maxY=P*.28,d.config.maxZ=1.6},g=y=>{if(!t)return;const x=a.getBoundingClientRect(),U=y.touches?.[0]||y;Fp.x=(U.clientX-x.left)/x.width*2-1,Fp.y=-((U.clientY-x.top)/x.height)*2+1,LS.setFromCamera(Fp,c),c.getWorldDirection(NS.normal),LS.ray.intersectPlane(NS,OS),d.physics.center.copy(OS),d.config.controlSphere0=!0},S=()=>{d.config.controlSphere0=!1},E=()=>{const y=_.getDelta();d.update({delta:y}),s.render(u,c),b=requestAnimationFrame(E)};let b=0;return v(),b=requestAnimationFrame(E),window.addEventListener("resize",v),a.addEventListener("pointermove",g),a.addEventListener("pointerleave",S),a.addEventListener("touchmove",g,{passive:!0}),a.addEventListener("touchend",S),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",v),a.removeEventListener("pointermove",g),a.removeEventListener("pointerleave",S),a.removeEventListener("touchmove",g),a.removeEventListener("touchend",S),d.geometry.dispose(),d.material.dispose(),s.dispose()}},[t]),gt.jsx("canvas",{className:o,ref:n,style:{width:"100%",height:"100%"}})}function tr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Hy(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var zi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mu={duration:.5,overwrite:!1,delay:0},v_,Xn,nn,Qi=1e8,qe=1/Qi,Gm=Math.PI*2,E2=Gm/4,b2=0,Gy=Math.sqrt,T2=Math.cos,A2=Math.sin,zn=function(t){return typeof t=="string"},pn=function(t){return typeof t=="function"},ur=function(t){return typeof t=="number"},x_=function(t){return typeof t>"u"},Ca=function(t){return typeof t=="object"},hi=function(t){return t!==!1},S_=function(){return typeof window<"u"},_f=function(t){return pn(t)||zn(t)},Vy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jn=Array.isArray,R2=/random\([^)]+\)/g,C2=/,\s*/g,PS=/(?:-?\.?\d|\.)+/gi,ky=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xy=/[+-]=-?[.\d]+/,w2=/[^,'"\[\]\s]+/gi,D2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rn,xa,Vm,y_,Fi={},Nf={},Wy,qy=function(t){return(Nf=tl(t,Fi))&&_i},M_=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Eu=function(t,n){return!n&&console.warn(t)},Yy=function(t,n){return t&&(Fi[t]=n)&&Nf&&(Nf[t]=n)||Fi},bu=function(){return 0},U2={suppressEvents:!0,isStart:!0,kill:!1},Ef={suppressEvents:!0,kill:!1},N2={suppressEvents:!0},E_={},jr=[],km={},Zy,Ui={},Gp={},IS=30,bf=[],b_="",T_=function(t){var n=t[0],a,s;if(Ca(n)||pn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=bf.length;s--&&!bf[s].targetTest(n););a=bf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new _M(t[s],a)))||t.splice(s,1);return t},Is=function(t){return t._gsap||T_(ji(t))[0]._gsap},Ky=function(t,n,a){return(a=t[n])&&pn(a)?t[n]():x_(a)&&t.getAttribute&&t.getAttribute(n)||a},di=function(t,n){return(t=t.split(",")).forEach(n)||t},xn=function(t){return Math.round(t*1e5)/1e5||0},an=function(t){return Math.round(t*1e7)/1e7||0},Yo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},L2=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},Lf=function(){var t=jr.length,n=jr.slice(0),a,s;for(km={},jr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},A_=function(t){return!!(t._initted||t._startAt||t.add)},Qy=function(t,n,a,s){jr.length&&!Xn&&Lf(),t.render(n,a,!!(Xn&&n<0&&A_(t))),jr.length&&!Xn&&Lf()},jy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(w2).length<2?n:zn(t)?t.trim():t},Jy=function(t){return t},Bi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},O2=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},tl=function(t,n){for(var a in n)t[a]=n[a];return t},zS=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Ca(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},Of=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},_u=function(t){var n=t.parent||rn,a=t.keyframes?O2(Jn(t.keyframes)):Bi;if(hi(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},P2=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},$y=function(t,n,a,s,u){var c=t[s],f;if(u)for(f=n[u];c&&c[u]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},Wf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=n._prev,c=n._next;u?u._next=c:t[a]===n&&(t[a]=c),c?c._prev=u:t[s]===n&&(t[s]=u),n._next=n._prev=n.parent=null},ts=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},I2=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Xm=function(t,n,a,s){return t._startAt&&(Xn?t._startAt.revert(Ef):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},z2=function o(t){return!t||t._ts&&o(t.parent)},FS=function(t){return t._repeat?el(t._tTime,t=t.duration()+t._rDelay)*t:0},el=function(t,n){var a=Math.floor(t=an(t/n));return t&&a===t?a-1:a},Pf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},qf=function(t){return t._end=an(t._start+(t._tDur/Math.abs(t._ts||t._rts||qe)||0))},Yf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=an(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),qf(t),a._dirty||zs(a,t)),t},tM=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=Pf(t.rawTime(),n),(!n._dur||Nu(0,n.totalDuration(),a)-n._tTime>qe)&&n.render(a,!0)),zs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-qe}},ya=function(t,n,a,s){return n.parent&&ts(n),n._start=an((ur(a)?a:a||t!==rn?Ki(t,a,n):t._time)+n._delay),n._end=an(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),$y(t,n,"_first","_last",t._sort?"_start":0),Wm(n)||(t._recent=n),s||tM(t,n),t._ts<0&&Yf(t,t._tTime),t},eM=function(t,n){return(Fi.ScrollTrigger||M_("scrollTrigger",n))&&Fi.ScrollTrigger.create(n,t)},nM=function(t,n,a,s,u){if(C_(t,n,u),!t._initted)return 1;if(!a&&t._pt&&!Xn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zy!==Oi.frame)return jr.push(t),t._lazy=[u,s],1},F2=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Wm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},B2=function(t,n,a,s){var u=t.ratio,c=n<0||!n&&(!t._start&&F2(t)&&!(!t._initted&&Wm(t))||(t._ts<0||t._dp._ts<0)&&!Wm(t))?0:1,f=t._rDelay,p=0,d,_,v;if(f&&t._repeat&&(p=Nu(0,t._tDur,n),_=el(p,f),t._yoyo&&_&1&&(c=1-c),_!==el(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||Xn||s||t._zTime===qe||!n&&t._zTime){if(!t._initted&&nM(t,n,s,a,p))return;for(v=t._zTime,t._zTime=n||(a?qe:0),a||(a=n&&!v),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&Xm(t,n,a,!0),t._onUpdate&&!a&&Pi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Pi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&ts(t,1),!a&&!Xn&&(Pi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},H2=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},nl=function(t,n,a,s){var u=t._repeat,c=an(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:an(c*(u+1)+t._rDelay*u):c,f>0&&!s&&Yf(t,t._tTime=t._tDur*f),t.parent&&qf(t),a||zs(t.parent,t),t},BS=function(t){return t instanceof fi?zs(t):nl(t,t._dur)},G2={_start:0,endTime:bu,totalDuration:bu},Ki=function o(t,n,a){var s=t.labels,u=t._recent||G2,c=t.duration()>=Qi?u.endTime(!1):t._dur,f,p,d;return zn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?u:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Jn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},gu=function(t,n,a){var s=ur(n[1]),u=(s?2:1)+(t<2?0:1),c=n[u],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=hi(p.vars.inherit)&&p.parent;c.immediateRender=hi(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[u-1]}return new Rn(n[0],c,n[u+1])},is=function(t,n){return t||t===0?n(t):n},Nu=function(t,n,a){return a<t?t:a>n?n:a},Kn=function(t,n){return!zn(t)||!(n=D2.exec(t))?"":n[1]},V2=function(t,n,a){return is(a,function(s){return Nu(t,n,s)})},qm=[].slice,iM=function(t,n){return t&&Ca(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Ca(t[0]))&&!t.nodeType&&t!==xa},k2=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return zn(s)&&!n||iM(s,1)?(u=a).push.apply(u,ji(s)):a.push(s)})||a},ji=function(t,n,a){return nn&&!n&&nn.selector?nn.selector(t):zn(t)&&!a&&(Vm||!il())?qm.call((n||y_).querySelectorAll(t),0):Jn(t)?k2(t,a):iM(t)?qm.call(t,0):t?[t]:[]},Ym=function(t){return t=ji(t)[0]||Eu("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return ji(n,a.querySelectorAll?a:a===t?Eu("Invalid scope")||y_.createElement("div"):t)}},aM=function(t){return t.sort(function(){return .5-Math.random()})},rM=function(t){if(pn(t))return t;var n=Ca(t)?t:{each:t},a=Fs(n.ease),s=n.from||0,u=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,v=s;return zn(s)?_=v={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],v=s[1]),function(g,S,E){var b=(E||n).length,y=c[b],x,U,P,R,D,O,L,T,N;if(!y){if(N=n.grid==="auto"?0:(n.grid||[1,Qi])[1],!N){for(L=-Qi;L<(L=E[N++].getBoundingClientRect().left)&&N<b;);N<b&&N--}for(y=c[b]=[],x=p?Math.min(N,b)*_-.5:s%N,U=N===Qi?0:p?b*v/N-.5:s/N|0,L=0,T=Qi,O=0;O<b;O++)P=O%N-x,R=U-(O/N|0),y[O]=D=d?Math.abs(d==="y"?R:P):Gy(P*P+R*R),D>L&&(L=D),D<T&&(T=D);s==="random"&&aM(y),y.max=L-T,y.min=T,y.v=b=(parseFloat(n.amount)||parseFloat(n.each)*(N>b?b-1:d?d==="y"?b/N:N:Math.max(N,b/N))||0)*(s==="edges"?-1:1),y.b=b<0?u-b:u,y.u=Kn(n.amount||n.each)||0,a=a&&b<0?nw(a):a}return b=(y[g]-y.min)/y.max||0,an(y.b+(a?a(b):b)*y.v)+y.u}},Zm=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=an(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(ur(a)?0:Kn(a))}},sM=function(t,n){var a=Jn(t),s,u;return!a&&Ca(t)&&(s=a=t.radius||Qi,t.values?(t=ji(t.values),(u=!ur(t[0]))&&(s*=s)):t=Zm(t.increment)),is(n,a?pn(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),p=parseFloat(u?c.y:0),d=Qi,_=0,v=t.length,g,S;v--;)u?(g=t[v].x-f,S=t[v].y-p,g=g*g+S*S):g=Math.abs(t[v]-f),g<d&&(d=g,_=v);return _=!s||d<=s?t[_]:c,u||_===c||ur(c)?_:_+Kn(c)}:Zm(t))},oM=function(t,n,a,s){return is(Jn(t)?!n:a===!0?!!(a=0):!s,function(){return Jn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},X2=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(u,c){return c(u)},s)}},W2=function(t,n){return function(a){return t(parseFloat(a))+(n||Kn(a))}},q2=function(t,n,a){return uM(t,n,0,1,a)},lM=function(t,n,a){return is(a,function(s){return t[~~n(s)]})},Y2=function o(t,n,a){var s=n-t;return Jn(t)?lM(t,o(0,t.length),n):is(a,function(u){return(s+(u-t)%s)%s+t})},Z2=function o(t,n,a){var s=n-t,u=s*2;return Jn(t)?lM(t,o(0,t.length-1),n):is(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},Tu=function(t){return t.replace(R2,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(C2);return oM(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},uM=function(t,n,a,s,u){var c=n-t,f=s-a;return is(u,function(p){return a+((p-t)/c*f||0)})},K2=function o(t,n,a,s){var u=isNaN(t+n)?0:function(S){return(1-S)*t+S*n};if(!u){var c=zn(t),f={},p,d,_,v,g;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Jn(t)&&!Jn(n)){for(_=[],v=t.length,g=v-2,d=1;d<v;d++)_.push(o(t[d-1],t[d]));v--,u=function(E){E*=v;var b=Math.min(g,~~E);return _[b](E-b)},a=n}else s||(t=tl(Jn(t)?[]:{},t));if(!_){for(p in n)R_.call(f,t,p,"get",n[p]);u=function(E){return U_(E,f)||(c?t.p:t)}}}return is(a,u)},HS=function(t,n,a){var s=t.labels,u=Qi,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&u>(f=Math.abs(f))&&(p=c,u=f);return p},Pi=function(t,n,a){var s=t.vars,u=s[n],c=nn,f=t._ctx,p,d,_;if(u)return p=s[n+"Params"],d=s.callbackScope||t,a&&jr.length&&Lf(),f&&(nn=f),_=p?u.apply(d,p):u.call(d),nn=c,_},pu=function(t){return ts(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Xn),t.progress()<1&&Pi(t,"onInterrupt"),t},ko,cM=[],fM=function(t){if(t)if(t=!t.name&&t.default||t,S_()||t.headless){var n=t.name,a=pn(t),s=n&&!a&&t.init?function(){this._props=[]}:t,u={init:bu,render:U_,add:R_,kill:hw,modifier:fw,rawVars:0},c={targetTest:0,get:0,getSetter:D_,aliases:{},register:0};if(il(),t!==s){if(Ui[n])return;Bi(s,Bi(Of(t,u),c)),tl(s.prototype,tl(u,Of(t,c))),Ui[s.prop=n]=s,t.targetTest&&(bf.push(s),E_[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Yy(n,s),t.register&&t.register(_i,s,pi)}else cM.push(t)},We=255,mu={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},Vp=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*We+.5|0},hM=function(t,n,a){var s=t?ur(t)?[t>>16,t>>8&We,t&We]:0:mu.black,u,c,f,p,d,_,v,g,S,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),mu[t])s=mu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&We,s&We,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&We,t&We]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(PS),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,u=_*2-c,s.length>3&&(s[3]*=1),s[0]=Vp(p+1/3,u,c),s[1]=Vp(p,u,c),s[2]=Vp(p-1/3,u,c);else if(~t.indexOf("="))return s=t.match(ky),a&&s.length<4&&(s[3]=1),s}else s=t.match(PS)||mu.transparent;s=s.map(Number)}return n&&!E&&(u=s[0]/We,c=s[1]/We,f=s[2]/We,v=Math.max(u,c,f),g=Math.min(u,c,f),_=(v+g)/2,v===g?p=d=0:(S=v-g,d=_>.5?S/(2-v-g):S/(v+g),p=v===u?(c-f)/S+(c<f?6:0):v===c?(f-u)/S+2:(u-c)/S+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},dM=function(t){var n=[],a=[],s=-1;return t.split(Jr).forEach(function(u){var c=u.match(Vo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},GS=function(t,n,a){var s="",u=(t+s).match(Jr),c=n?"hsla(":"rgba(",f=0,p,d,_,v;if(!u)return t;if(u=u.map(function(g){return(g=hM(g,n,1))&&c+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(_=dM(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Jr,"1").split(Vo),v=d.length-1;f<v;f++)s+=d[f]+(~p.indexOf(f)?u.shift()||c+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!d)for(d=t.split(Jr),v=d.length-1;f<v;f++)s+=d[f]+u[f];return s+d[v]},Jr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in mu)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),Q2=/hsl[a]?\(/,pM=function(t){var n=t.join(" "),a;if(Jr.lastIndex=0,Jr.test(n))return a=Q2.test(n),t[1]=GS(t[1],a),t[0]=GS(t[0],a,dM(t[1])),!0},Au,Oi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,u=1e3/240,c=u,f=[],p,d,_,v,g,S,E=function b(y){var x=o()-s,U=y===!0,P,R,D,O;if((x>t||x<0)&&(a+=x-n),s+=x,D=s-a,P=D-c,(P>0||U)&&(O=++v.frame,g=D-v.time*1e3,v.time=D=D/1e3,c+=P+(P>=u?4:u-P),R=1),U||(p=d(b)),R)for(S=0;S<f.length;S++)f[S](D,g,O,y)};return v={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){Wy&&(!Vm&&S_()&&(xa=Vm=window,y_=xa.document||{},Fi.gsap=_i,(xa.gsapVersions||(xa.gsapVersions=[])).push(_i.version),qy(Nf||xa.GreenSockGlobals||!xa.gsap&&xa||{}),cM.forEach(fM)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),d=_||function(y){return setTimeout(y,c-v.time*1e3+1|0)},Au=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Au=0,d=bu},lagSmoothing:function(y,x){t=y||1/0,n=Math.min(x||33,t)},fps:function(y){u=1e3/(y||240),c=v.time*1e3+u},add:function(y,x,U){var P=x?function(R,D,O,L){y(R,D,O,L),v.remove(P)}:y;return v.remove(y),f[U?"unshift":"push"](P),il(),P},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},v})(),il=function(){return!Au&&Oi.wake()},be={},j2=/^[\d.\-M][\d.\-,\s]/,J2=/["']/g,$2=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,p,d;u<c;u++)p=a[u],f=u!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(J2,"").trim():+d,s=p.substr(f+1).trim();return n},tw=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},ew=function(t){var n=(t+"").split("("),a=be[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[$2(n[1])]:tw(t).split(",").map(jy)):be._CE&&j2.test(t)?be._CE("",t):a},nw=function(t){return function(n){return 1-t(1-n)}},Fs=function(t,n){return t&&(pn(t)?t:be[t]||ew(t))||n},Xs=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var u={easeIn:n,easeOut:a,easeInOut:s},c;return di(t,function(f){be[f]=Fi[f]=u,be[c=f.toLowerCase()]=a;for(var p in u)be[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=be[f+"."+p]=u[p]}),u},mM=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},kp=function o(t,n,a){var s=n>=1?n:1,u=(a||(t?.3:.45))/(n<1?n:1),c=u/Gm*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*A2((_-c)*u)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:mM(f);return u=Gm/u,p.config=function(d,_){return o(t,d,_)},p},Xp=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:mM(a);return s.config=function(u){return o(t,u)},s};di("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Xs(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});be.Linear.easeNone=be.none=be.Linear.easeIn;Xs("Elastic",kp("in"),kp("out"),kp());(function(o,t){var n=1/t,a=2*n,s=2.5*n,u=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Xs("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);Xs("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Xs("Circ",function(o){return-(Gy(1-o*o)-1)});Xs("Sine",function(o){return o===1?1:-T2(o*E2)+1});Xs("Back",Xp("in"),Xp("out"),Xp());be.SteppedEase=be.steps=Fi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),u=n?1:0,c=1-qe;return function(f){return((s*Nu(0,c,f)|0)+u)*a}}};Mu.ease=be["quad.out"];di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return b_+=o+","+o+"Params,"});var _M=function(t,n){this.id=b2++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Ky,this.set=n?n.getSetter:D_},Ru=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,nl(this,+n.duration,1,1),this.data=n.data,nn&&(this._ctx=nn,nn.data.push(this)),Au||Oi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,nl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(il(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(Yf(this,a),!u._dp||u.parent||tM(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ya(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===qe||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Qy(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+FS(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+FS(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?el(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?Pf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-qe?0:this._rts,this.totalTime(Nu(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),qf(this),I2(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(il(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=an(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ya(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(hi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=N2);var s=Xn;return Xn=a,A_(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Xn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,BS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,BS(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Ki(this,a),hi(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,hi(s)),this._dur||(this._zTime=-qe),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-qe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-qe)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(c){var f=pn(a)?a:Jy,p=function(){var _=s.then;s.then=null,u&&u(),pn(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=_),c(f),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){pu(this)},o})();Bi(Ru.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var fi=(function(o){Hy(t,o);function t(a,s){var u;return a===void 0&&(a={}),u=o.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=hi(a.sortChildren),rn&&ya(a.parent||rn,tr(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&eM(tr(u),a.scrollTrigger),u}var n=t.prototype;return n.to=function(s,u,c){return gu(0,arguments,this),this},n.from=function(s,u,c){return gu(1,arguments,this),this},n.fromTo=function(s,u,c,f){return gu(2,arguments,this),this},n.set=function(s,u,c){return u.duration=0,u.parent=this,_u(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new Rn(s,u,Ki(this,c),1),this},n.call=function(s,u,c){return ya(this,Rn.delayedCall(0,s,u),c)},n.staggerTo=function(s,u,c,f,p,d,_){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Rn(s,c,Ki(this,p)),this},n.staggerFrom=function(s,u,c,f,p,d,_){return c.runBackwards=1,_u(c).immediateRender=hi(c.immediateRender),this.staggerTo(s,u,c,f,p,d,_)},n.staggerFromTo=function(s,u,c,f,p,d,_,v){return f.startAt=c,_u(f).immediateRender=hi(f.immediateRender),this.staggerTo(s,u,f,p,d,_,v)},n.render=function(s,u,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:an(s),v=this._zTime<0!=s<0&&(this._initted||!d),g,S,E,b,y,x,U,P,R,D,O,L;if(this!==rn&&_>p&&s>=0&&(_=p),_!==this._tTime||c||v){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),g=_,R=this._start,P=this._ts,x=!P,v&&(d||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(O=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,u,c);if(g=an(_%y),_===p?(b=this._repeat,g=d):(D=an(_/y),b=~~D,b&&b===D&&(g=d,b--),g>d&&(g=d)),D=el(this._tTime,y),!f&&this._tTime&&D!==b&&this._tTime-D*y-this._dur<=0&&(D=b),O&&b&1&&(g=d-g,L=1),b!==D&&!this._lock){var T=O&&D&1,N=T===(O&&b&1);if(b<D&&(T=!T),f=T?0:_%d?d:_,this._lock=1,this.render(f||(L?0:an(b*y)),u,!d)._lock=0,this._tTime=_,!u&&this.parent&&Pi(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1,D=b),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,N&&(this._lock=2,f=T?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=H2(this,an(f),an(g)),U&&(_-=g-(g=U._start))),this._tTime=_,this._time=g,this._act=!!P,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&d&&!u&&!D&&(Pi(this,"onStart"),this._tTime!==_))return this;if(g>=f&&s>=0)for(S=this._first;S;){if(E=S._next,(S._act||g>=S._start)&&S._ts&&U!==S){if(S.parent!==this)return this.render(s,u,c);if(S.render(S._ts>0?(g-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(g-S._start)*S._ts,u,c),g!==this._time||!this._ts&&!x){U=0,E&&(_+=this._zTime=-qe);break}}S=E}else{S=this._last;for(var G=s<0?s:g;S;){if(E=S._prev,(S._act||G<=S._end)&&S._ts&&U!==S){if(S.parent!==this)return this.render(s,u,c);if(S.render(S._ts>0?(G-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(G-S._start)*S._ts,u,c||Xn&&A_(S)),g!==this._time||!this._ts&&!x){U=0,E&&(_+=this._zTime=G?-qe:qe);break}}S=E}}if(U&&!u&&(this.pause(),U.render(g>=f?0:-qe)._zTime=g>=f?1:-1,this._ts))return this._start=R,qf(this),this.render(s,u,c);this._onUpdate&&!u&&Pi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(P)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&ts(this,1),!u&&!(s<0&&!f)&&(_||f||!p)&&(Pi(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,u){var c=this;if(ur(u)||(u=Ki(this,u,s)),!(s instanceof Ru)){if(Jn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(zn(s))return this.addLabel(s,u);if(pn(s))s=Rn.delayedCall(0,s);else return this}return this!==s?ya(this,s,u):this},n.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-Qi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Rn?u&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,u,c)))),d=d._next;return p},n.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},n.remove=function(s){return zn(s)?this.removeLabel(s):pn(s)?this.killTweensOf(s):(s.parent===this&&Wf(this,s),s===this._recent&&(this._recent=this._last),zs(this))},n.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=an(Oi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},n.addLabel=function(s,u){return this.labels[s]=Ki(this,u),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,u,c){var f=Rn.delayedCall(0,u||bu,c);return f.data="isPause",this._hasPause=1,ya(this,f,Ki(this,s))},n.removePause=function(s){var u=this._first;for(s=Ki(this,s);u;)u._start===s&&u.data==="isPause"&&ts(u),u=u._next},n.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Zr!==f[p]&&f[p].kill(s,u);return this},n.getTweensOf=function(s,u){for(var c=[],f=ji(s),p=this._first,d=ur(u),_;p;)p instanceof Rn?L2(p._targets,f)&&(d?(!Zr||p._initted&&p._ts)&&p.globalTime(0)<=u&&p.globalTime(p.totalDuration())>u:!u||p.isActive())&&c.push(p):(_=p.getTweensOf(f,u)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,u){u=u||{};var c=this,f=Ki(c,s),p=u,d=p.startAt,_=p.onStart,v=p.onStartParams,g=p.immediateRender,S,E=Rn.to(c,Bi({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||qe,onStart:function(){if(c.pause(),!S){var y=u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==y&&nl(E,y,0,1).render(E._time,!0,!0),S=1}_&&_.apply(E,v||[])}},u));return g?E.render(0):E},n.tweenFromTo=function(s,u,c){return this.tweenTo(u,Bi({startAt:{time:Ki(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),HS(this,Ki(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),HS(this,Ki(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+qe)},n.shiftChildren=function(s,u,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(s=an(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(d in p)p[d]>=c&&(p[d]+=s);return zs(this)},n.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),zs(this)},n.totalDuration=function(s){var u=0,c=this,f=c._last,p=Qi,d,_,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ya(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(u-=_,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=an(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>u&&f._ts&&(u=f._end),f=d;nl(c,c===rn&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(rn._ts&&(Qy(rn,Pf(s,rn)),Zy=Oi.frame),Oi.frame>=IS){IS+=zi.autoSleep||120;var u=rn._first;if((!u||!u._ts)&&zi.autoSleep&&Oi._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||Oi.sleep()}}},t})(Ru);Bi(fi.prototype,{_lock:0,_hasPause:0,_forcing:0});var iw=function(t,n,a,s,u,c,f){var p=new pi(this._pt,t,n,0,1,MM,null,u),d=0,_=0,v,g,S,E,b,y,x,U;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=Tu(s)),c&&(U=[a,s],c(U,t,n),a=U[0],s=U[1]),g=a.match(Hp)||[];v=Hp.exec(s);)E=v[0],b=s.substring(d,v.index),S?S=(S+1)%5:b.substr(-5)==="rgba("&&(S=1),E!==g[_++]&&(y=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:b||_===1?b:",",s:y,c:E.charAt(1)==="="?Yo(y,E)-y:parseFloat(E)-y,m:S&&S<4?Math.round:0},d=Hp.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(Xy.test(s)||x)&&(p.e=0),this._pt=p,p},R_=function(t,n,a,s,u,c,f,p,d,_){pn(s)&&(s=s(u||0,t,c));var v=t[n],g=a!=="get"?a:pn(v)?d?t[n.indexOf("set")||!pn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():v,S=pn(v)?d?lw:SM:w_,E;if(zn(s)&&(~s.indexOf("random(")&&(s=Tu(s)),s.charAt(1)==="="&&(E=Yo(g,s)+(Kn(g)||0),(E||E===0)&&(s=E))),!_||g!==s||Km)return!isNaN(g*s)&&s!==""?(E=new pi(this._pt,t,n,+g||0,s-(g||0),typeof v=="boolean"?cw:yM,0,S),d&&(E.fp=d),f&&E.modifier(f,this,t),this._pt=E):(!v&&!(n in t)&&M_(n,s),iw.call(this,t,n,g,s,S,p||zi.stringFilter,d))},aw=function(t,n,a,s,u){if(pn(t)&&(t=vu(t,u,n,a,s)),!Ca(t)||t.style&&t.nodeType||Jn(t)||Vy(t))return zn(t)?vu(t,u,n,a,s):t;var c={},f;for(f in t)c[f]=vu(t[f],u,n,a,s);return c},gM=function(t,n,a,s,u,c){var f,p,d,_;if(Ui[t]&&(f=new Ui[t]).init(u,f.rawVars?n[t]:aw(n[t],s,u,c,a),a,s,c)!==!1&&(a._pt=p=new pi(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==ko))for(d=a._ptLookup[a._targets.indexOf(u)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Zr,Km,C_=function o(t,n,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,v=s.yoyoEase,g=s.keyframes,S=s.autoRevert,E=t._dur,b=t._startAt,y=t._targets,x=t.parent,U=x&&x.data==="nested"?x.vars.targets:y,P=t._overwrite==="auto"&&!v_,R=t.timeline,D=s.easeReverse||v,O,L,T,N,G,V,W,lt,ct,Z,F,B,J;if(R&&(!g||!u)&&(u="none"),t._ease=Fs(u,Mu.ease),t._rEase=D&&(Fs(D)||t._ease),t._from=!R&&!!s.runBackwards,t._from&&(t.ratio=1),!R||g&&!s.stagger){if(lt=y[0]?Is(y[0]).harness:0,B=lt&&s[lt.prop],O=Of(s,E_),b&&(b._zTime<0&&b.progress(1),n<0&&_&&f&&!S?b.render(-1,!0):b.revert(_&&E?Ef:U2),b._lazy=0),c){if(ts(t._startAt=Rn.set(y,Bi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!b&&hi(p),startAt:null,delay:0,onUpdate:d&&function(){return Pi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Xn||!f&&!S)&&t._startAt.revert(Ef),f&&E&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&E&&!b){if(n&&(f=!1),T=Bi({overwrite:!1,data:"isFromStart",lazy:f&&!b&&hi(p),immediateRender:f,stagger:0,parent:x},O),B&&(T[lt.prop]=B),ts(t._startAt=Rn.set(y,T)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Xn?t._startAt.revert(Ef):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,qe,qe);else if(!n)return}for(t._pt=t._ptCache=0,p=E&&hi(p)||p&&!E,L=0;L<y.length;L++){if(G=y[L],W=G._gsap||T_(y)[L]._gsap,t._ptLookup[L]=Z={},km[W.id]&&jr.length&&Lf(),F=U===y?L:U.indexOf(G),lt&&(ct=new lt).init(G,B||O,t,F,U)!==!1&&(t._pt=N=new pi(t._pt,G,ct.name,0,1,ct.render,ct,0,ct.priority),ct._props.forEach(function(pt){Z[pt]=N}),ct.priority&&(V=1)),!lt||B)for(T in O)Ui[T]&&(ct=gM(T,O,t,F,G,U))?ct.priority&&(V=1):Z[T]=N=R_.call(t,G,T,"get",O[T],F,U,0,s.stringFilter);t._op&&t._op[L]&&t.kill(G,t._op[L]),P&&t._pt&&(Zr=t,rn.killTweensOf(G,Z,t.globalTime(n)),J=!t.parent,Zr=0),t._pt&&p&&(km[W.id]=1)}V&&EM(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!J,g&&n<=0&&R.render(Qi,!0,!0)},rw=function(t,n,a,s,u,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,v,g,S;if(!d)for(d=t._ptCache[n]=[],g=t._ptLookup,S=t._targets.length;S--;){if(_=g[S][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Km=1,t.vars[n]="+=0",C_(t,f),Km=0,p?Eu(n+" not eligible for reset. Try splitting into individual properties"):1;d.push(_)}for(S=d.length;S--;)v=d[S],_=v._pt||v,_.s=(s||s===0)&&!u?s:_.s+(s||0)+c*_.c,_.c=a-_.s,v.e&&(v.e=xn(a)+Kn(v.e)),v.b&&(v.b=_.s+Kn(v.b))},sw=function(t,n){var a=t[0]?Is(t[0]).harness:0,s=a&&a.aliases,u,c,f,p;if(!s)return n;u=tl({},n);for(c in s)if(c in u)for(p=s[c].split(","),f=p.length;f--;)u[p[f]]=u[c];return u},ow=function(t,n,a,s){var u=n.ease||s||"power1.inOut",c,f;if(Jn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:u})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:u})},vu=function(t,n,a,s,u){return pn(t)?t.call(n,a,s,u):zn(t)&&~t.indexOf("random(")?Tu(t):t},vM=b_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xM={};di(vM+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return xM[o]=1});var Rn=(function(o){Hy(t,o);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=o.call(this,c?s:_u(s))||this;var p=f.vars,d=p.duration,_=p.delay,v=p.immediateRender,g=p.stagger,S=p.overwrite,E=p.keyframes,b=p.defaults,y=p.scrollTrigger,x=s.parent||rn,U=(Jn(a)||Vy(a)?ur(a[0]):"length"in s)?[a]:ji(a),P,R,D,O,L,T,N,G;if(f._targets=U.length?T_(U):Eu("GSAP target "+a+" not found. https://gsap.com",!zi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,E||g||_f(d)||_f(_)){s=f.vars;var V=s.easeReverse||s.yoyoEase;if(P=f.timeline=new fi({data:"nested",defaults:b||{},targets:x&&x.data==="nested"?x.vars.targets:U}),P.kill(),P.parent=P._dp=tr(f),P._start=0,g||_f(d)||_f(_)){if(O=U.length,N=g&&rM(g),Ca(g))for(L in g)~vM.indexOf(L)&&(G||(G={}),G[L]=g[L]);for(R=0;R<O;R++)D=Of(s,xM),D.stagger=0,V&&(D.easeReverse=V),G&&tl(D,G),T=U[R],D.duration=+vu(d,tr(f),R,T,U),D.delay=(+vu(_,tr(f),R,T,U)||0)-f._delay,!g&&O===1&&D.delay&&(f._delay=_=D.delay,f._start+=_,D.delay=0),P.to(T,D,N?N(R,T,U):0),P._ease=be.none;P.duration()?d=_=0:f.timeline=0}else if(E){_u(Bi(P.vars.defaults,{ease:"none"})),P._ease=Fs(E.ease||s.ease||"none");var W=0,lt,ct,Z;if(Jn(E))E.forEach(function(F){return P.to(U,F,">")}),P.duration();else{D={};for(L in E)L==="ease"||L==="easeEach"||ow(L,E[L],D,E.easeEach);for(L in D)for(lt=D[L].sort(function(F,B){return F.t-B.t}),W=0,R=0;R<lt.length;R++)ct=lt[R],Z={ease:ct.e,duration:(ct.t-(R?lt[R-1].t:0))/100*d},Z[L]=ct.v,P.to(U,Z,W),W+=Z.duration;P.duration()<d&&P.to({},{duration:d-P.duration()})}}d||f.duration(d=P.duration())}else f.timeline=0;return S===!0&&!v_&&(Zr=tr(f),rn.killTweensOf(U),Zr=0),ya(x,tr(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(v||!d&&!E&&f._start===an(x._time)&&hi(v)&&z2(tr(f))&&x.data!=="nested")&&(f._tTime=-qe,f.render(Math.max(0,-_)||0)),y&&eM(tr(f),y),f}var n=t.prototype;return n.render=function(s,u,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,v=s>p-qe&&!_?p:s<qe?0:s,g,S,E,b,y,x,U,P;if(!d)B2(this,s,u,c);else if(v!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=v,P=this.timeline,this._repeat){if(b=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(b*100+s,u,c);if(g=an(v%b),v===p?(E=this._repeat,g=d):(y=an(v/b),E=~~y,E&&E===y?(g=d,E--):g>d&&(g=d)),x=this._yoyo&&E&1,x&&(g=d-g),y=el(this._tTime,b),g===f&&!c&&this._initted&&E===y)return this._tTime=v,this;E!==y&&this.vars.repeatRefresh&&!x&&!this._lock&&g!==b&&this._initted&&(this._lock=c=1,this.render(an(b*E),!0).invalidate()._lock=0)}if(!this._initted){if(nM(this,_?s:g,c,u,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==y))return this;if(d!==this._dur)return this.render(s,u,c)}if(this._rEase){var R=g<f;if(R!==this._inv){var D=R?f:d-f;this._inv=R,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=D?(R?-1:1)/D:0,this._invScale=R?-this.ratio:1-this.ratio,this._invEase=R?this._rEase:this._ease}this.ratio=U=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=U=this._ease(g/d);if(this._from&&(this.ratio=U=1-U),this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&v&&!u&&!y&&(Pi(this,"onStart"),this._tTime!==v))return this;for(S=this._pt;S;)S.r(U,S.d),S=S._next;P&&P.render(s<0?s:P._dur*P._ease(g/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&Xm(this,s,u,c),Pi(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!u&&this.parent&&Pi(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(_&&!this._onUpdate&&Xm(this,s,!0,!0),(s||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&ts(this,1),!u&&!(_&&!f)&&(v||f||x)&&(Pi(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,u,c,f,p){Au||Oi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||C_(this,d),_=this._ease(d/this._dur),rw(this,s,u,c,f,_,d,p)?this.resetTo(s,u,c,f,1):(Yf(this,0),this.parent||$y(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?pu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Xn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,Zr&&Zr.vars.overwrite!==!0)._first||pu(this),this.parent&&c!==this.timeline.totalDuration()&&nl(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?ji(s):f,d=this._ptLookup,_=this._pt,v,g,S,E,b,y,x;if((!u||u==="all")&&P2(f,p))return u==="all"&&(this._pt=0),pu(this);for(v=this._op=this._op||[],u!=="all"&&(zn(u)&&(b={},di(u,function(U){return b[U]=1}),u=b),u=sw(f,u)),x=f.length;x--;)if(~p.indexOf(f[x])){g=d[x],u==="all"?(v[x]=u,E=g,S={}):(S=v[x]=v[x]||{},E=u);for(b in E)y=g&&g[b],y&&((!("kill"in y.d)||y.d.kill(b)===!0)&&Wf(this,y,"_pt"),delete g[b]),S!=="all"&&(S[b]=1)}return this._initted&&!this._pt&&_&&pu(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return gu(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return gu(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return rn.killTweensOf(s,u,c)},t})(Ru);Bi(Rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});di("staggerTo,staggerFrom,staggerFromTo",function(o){Rn[o]=function(){var t=new fi,n=qm.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var w_=function(t,n,a){return t[n]=a},SM=function(t,n,a){return t[n](a)},lw=function(t,n,a,s){return t[n](s.fp,a)},uw=function(t,n,a){return t.setAttribute(n,a)},D_=function(t,n){return pn(t[n])?SM:x_(t[n])&&t.setAttribute?uw:w_},yM=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},cw=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},MM=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},U_=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},fw=function(t,n,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,n,a),u=c},hw=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Wf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},dw=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},EM=function(t){for(var n=t._pt,a,s,u,c;n;){for(a=n._next,s=u;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:u=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=u},pi=(function(){function o(n,a,s,u,c,f,p,d,_){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||yM,this.d=p||this,this.set=d||w_,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=dw,this.m=a,this.mt=u,this.tween=s},o})();di(b_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return E_[o]=1});Fi.TweenMax=Fi.TweenLite=Rn;Fi.TimelineLite=Fi.TimelineMax=fi;rn=new fi({sortChildren:!1,defaults:Mu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zi.stringFilter=pM;var Bs=[],Tf={},pw=[],VS=0,mw=0,Wp=function(t){return(Tf[t]||pw).map(function(n){return n()})},Qm=function(){var t=Date.now(),n=[];t-VS>2&&(Wp("matchMediaInit"),Bs.forEach(function(a){var s=a.queries,u=a.conditions,c,f,p,d;for(f in s)c=xa.matchMedia(s[f]).matches,c&&(p=1),c!==u[f]&&(u[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),Wp("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),VS=t,Wp("matchMedia"))},bM=(function(){function o(n,a){this.selector=a&&Ym(a),this.data=[],this._r=[],this.isReverted=!1,this.id=mw++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,u){pn(a)&&(u=s,s=a,a=pn);var c=this,f=function(){var d=nn,_=c.selector,v;return d&&d!==c&&d.data.push(c),u&&(c.selector=Ym(u)),nn=c,v=s.apply(c,arguments),pn(v)&&c._r.push(v),nn=d,c.selector=_,c.isReverted=!1,v};return c.last=f,a===pn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=nn;nn=null,a(this),nn=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof Rn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var f=u.getTweens(),p=u.data.length,d;p--;)d=u.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,v){return v.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=u.data.length;p--;)d=u.data[p],d instanceof fi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Rn)&&d.revert&&d.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Bs.length;c--;)Bs[c].id===this.id&&Bs.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),_w=(function(){function o(n){this.contexts=[],this.scope=n,nn&&nn.data.push(this)}var t=o.prototype;return t.add=function(a,s,u){Ca(a)||(a={matches:a});var c=new bM(0,u||this.scope),f=c.conditions={},p,d,_;nn&&!c.selector&&(c.selector=nn.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=xa.matchMedia(a[d]),p&&(Bs.indexOf(c)<0&&Bs.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Qm):p.addEventListener("change",Qm)));return _&&s(c,function(v){return c.add(null,v)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),If={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return fM(s)})},timeline:function(t){return new fi(t)},getTweensOf:function(t,n){return rn.getTweensOf(t,n)},getProperty:function(t,n,a,s){zn(t)&&(t=ji(t)[0]);var u=Is(t||{}).get,c=a?Jy:jy;return a==="native"&&(a=""),t&&(n?c((Ui[n]&&Ui[n].get||u)(t,n,a,s)):function(f,p,d){return c((Ui[f]&&Ui[f].get||u)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=ji(t),t.length>1){var s=t.map(function(_){return _i.quickSetter(_,n,a)}),u=s.length;return function(_){for(var v=u;v--;)s[v](_)}}t=t[0]||{};var c=Ui[n],f=Is(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var v=new c;ko._pt=0,v.init(t,a?_+a:_,ko,0,[t]),v.render(1,v),ko._pt&&U_(1,ko)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,u=_i.to(t,Bi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return u.resetTo(n,p,d,_)};return c.tween=u,c},isTweening:function(t){return rn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Fs(t.ease,Mu.ease)),zS(Mu,t||{})},config:function(t){return zS(zi,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Ui[f]&&!Fi[f]&&Eu(n+" effect requires "+f+" plugin.")}),Gp[n]=function(f,p,d){return a(ji(f),Bi(p||{},u),d)},c&&(fi.prototype[n]=function(f,p,d){return this.add(Gp[n](f,Ca(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){be[t]=Fs(n)},parseEase:function(t,n){return arguments.length?Fs(t,n):be},getById:function(t){return rn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new fi(t),s,u;for(a.smoothChildTiming=hi(t.smoothChildTiming),rn.remove(a),a._dp=0,a._time=a._tTime=rn._time,s=rn._first;s;)u=s._next,(n||!(!s._dur&&s instanceof Rn&&s.vars.onComplete===s._targets[0]))&&ya(a,s,s._start-s._delay),s=u;return ya(rn,a,0),a},context:function(t,n){return t?new bM(t,n):nn},matchMedia:function(t){return new _w(t)},matchMediaRefresh:function(){return Bs.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Qm()},addEventListener:function(t,n){var a=Tf[t]||(Tf[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Tf[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:Y2,wrapYoyo:Z2,distribute:rM,random:oM,snap:sM,normalize:q2,getUnit:Kn,clamp:V2,splitColor:hM,toArray:ji,selector:Ym,mapRange:uM,pipe:X2,unitize:W2,interpolate:K2,shuffle:aM},install:qy,effects:Gp,ticker:Oi,updateRoot:fi.updateRoot,plugins:Ui,globalTimeline:rn,core:{PropTween:pi,globals:Yy,Tween:Rn,Timeline:fi,Animation:Ru,getCache:Is,_removeLinkedListItem:Wf,reverting:function(){return Xn},context:function(t){return t&&nn&&(nn.data.push(t),t._ctx=nn),nn},suppressOverwrites:function(t){return v_=t}}};di("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return If[o]=Rn[o]});Oi.add(fi.updateRoot);ko=If.to({},{duration:0});var gw=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},vw=function(t,n){var a=t._targets,s,u,c;for(s in n)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=gw(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[u],s))},qp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var p,d;if(zn(u)&&(p={},di(u,function(_){return p[_]=1}),u=p),n){p={};for(d in u)p[d]=n(u[d]);u=p}vw(f,u)}}}},_i=If.registerPlugin({name:"attr",init:function(t,n,a,s,u){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,u,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Xn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},qp("roundProps",Zm),qp("modifiers"),qp("snap",sM))||If;Rn.version=fi.version=_i.version="3.15.0";Wy=1;S_()&&il();be.Power0;be.Power1;be.Power2;be.Power3;be.Power4;be.Linear;be.Quad;be.Cubic;be.Quart;be.Quint;be.Strong;be.Elastic;be.Back;be.SteppedEase;be.Bounce;be.Sine;be.Expo;be.Circ;var kS,Kr,Zo,N_,Ps,XS,L_,xw=function(){return typeof window<"u"},cr={},Ds=180/Math.PI,Ko=Math.PI/180,Go=Math.atan2,WS=1e8,O_=/([A-Z])/g,Sw=/(left|right|width|margin|padding|x)/i,yw=/[\s,\(]\S/,Ea={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Mw=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Ew=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},bw=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},Tw=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},TM=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},AM=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},Aw=function(t,n,a){return t.style[n]=a},Rw=function(t,n,a){return t.style.setProperty(n,a)},Cw=function(t,n,a){return t._gsap[n]=a},ww=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},Dw=function(t,n,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},Uw=function(t,n,a,s,u){var c=t._gsap;c[n]=a,c.renderTransform(u,c)},on="transform",mi=on+"Origin",Nw=function o(t,n){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in cr&&u){if(this.tfm=this.tfm||{},t!=="transform")t=Ea[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=er(s,f)}):this.tfm[t]=c.x?c[t]:er(s,t),t===mi&&(this.tfm.zOrigin=c.zOrigin);else return Ea.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(on)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(mi,n,"")),t=on}(u||n)&&this.props.push(t,n,u[t])},RM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Lw=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?n[t[u]](t[u+2]):n[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(O_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),u=L_(),(!u||!u.isStart)&&!a[on]&&(RM(a),s.zOrigin&&a[mi]&&(a[mi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},CM=function(t,n){var a={target:t,props:[],revert:Lw,save:Nw};return t._gsap||_i.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},wM,Jm=function(t,n){var a=Kr.createElementNS?Kr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Kr.createElement(t);return a&&a.style?a:Kr.createElement(t)},Ii=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(O_,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,al(n)||n,1)||""},qS="O,Moz,ms,Ms,Webkit".split(","),al=function(t,n,a){var s=n||Ps,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(qS[c]+t in u););return c<0?null:(c===3?"ms":c>=0?qS[c]:"")+t},$m=function(){xw()&&window.document&&(kS=window,Kr=kS.document,Zo=Kr.documentElement,Ps=Jm("div")||{style:{}},Jm("div"),on=al(on),mi=on+"Origin",Ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wM=!!al("perspective"),L_=_i.core.reverting,N_=1)},YS=function(t){var n=t.ownerSVGElement,a=Jm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Zo.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Zo.removeChild(a),u},ZS=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},DM=function(t){var n,a;try{n=t.getBBox()}catch{n=YS(t),a=1}return n&&(n.width||n.height)||a||(n=YS(t)),n&&!n.width&&!n.x&&!n.y?{x:+ZS(t,["x","cx","x1"])||0,y:+ZS(t,["y","cy","y1"])||0,width:0,height:0}:n},UM=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&DM(t))},es=function(t,n){if(n){var a=t.style,s;n in cr&&n!==mi&&(n=on),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(O_,"-$1").toLowerCase())):a.removeAttribute(n)}},Qr=function(t,n,a,s,u,c){var f=new pi(t._pt,n,a,0,1,c?AM:TM);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},KS={deg:1,rad:1,turn:1},Ow={grid:1,flex:1},ns=function o(t,n,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=Ps.style,p=Sw.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),v=100,g=s==="px",S=s==="%",E,b,y,x;if(s===c||!u||KS[s]||KS[c])return u;if(c!=="px"&&!g&&(u=o(t,n,a,"px")),x=t.getCTM&&UM(t),(S||c==="%")&&(cr[n]||~n.indexOf("adius")))return E=x?t.getBBox()[p?"width":"height"]:t[_],xn(S?u/E*v:u/100*E);if(f[p?"width":"height"]=v+(g?c:s),b=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(b=(t.ownerSVGElement||{}).parentNode),(!b||b===Kr||!b.appendChild)&&(b=Kr.body),y=b._gsap,y&&S&&y.width&&p&&y.time===Oi.time&&!y.uncache)return xn(u/y.width*v);if(S&&(n==="height"||n==="width")){var U=t.style[n];t.style[n]=v+s,E=t[_],U?t.style[n]=U:es(t,n)}else(S||c==="%")&&!Ow[Ii(b,"display")]&&(f.position=Ii(t,"position")),b===t&&(f.position="static"),b.appendChild(Ps),E=Ps[_],b.removeChild(Ps),f.position="absolute";return p&&S&&(y=Is(b),y.time=Oi.time,y.width=b[_]),xn(g?E*u/v:E&&u?v/E*u:0)},er=function(t,n,a,s){var u;return N_||$m(),n in Ea&&n!=="transform"&&(n=Ea[n],~n.indexOf(",")&&(n=n.split(",")[0])),cr[n]&&n!=="transform"?(u=wu(t,s),u=n!=="transformOrigin"?u[n]:u.svg?u.origin:Ff(Ii(t,mi))+" "+u.zOrigin+"px"):(u=t.style[n],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=zf[n]&&zf[n](t,n,a)||Ii(t,n)||Ky(t,n)||(n==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?ns(t,n,u,a)+a:u},Pw=function(t,n,a,s){if(!a||a==="none"){var u=al(n,t,1),c=u&&Ii(t,u,1);c&&c!==a?(n=u,a=c):n==="borderColor"&&(a=Ii(t,"borderTopColor"))}var f=new pi(this._pt,t.style,n,0,1,MM),p=0,d=0,_,v,g,S,E,b,y,x,U,P,R,D;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ii(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(b=t.style[n],t.style[n]=s,s=Ii(t,n)||s,b?t.style[n]=b:es(t,n)),_=[a,s],pM(_),a=_[0],s=_[1],g=a.match(Vo)||[],D=s.match(Vo)||[],D.length){for(;v=Vo.exec(s);)y=v[0],U=s.substring(p,v.index),E?E=(E+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(E=1),y!==(b=g[d++]||"")&&(S=parseFloat(b)||0,R=b.substr((S+"").length),y.charAt(1)==="="&&(y=Yo(S,y)+R),x=parseFloat(y),P=y.substr((x+"").length),p=Vo.lastIndex-P.length,P||(P=P||zi.units[n]||R,p===s.length&&(s+=P,f.e+=P)),R!==P&&(S=ns(t,n,b,P)||0),f._pt={_next:f._pt,p:U||d===1?U:",",s:S,c:x-S,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?AM:TM;return Xy.test(s)&&(f.e=0),this._pt=f,f},QS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Iw=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=QS[a]||a,n[1]=QS[s]||s,n.join(" ")},zw=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,u=n.u,c=a._gsap,f,p,d;if(u==="all"||u===!0)s.cssText="",p=1;else for(u=u.split(","),d=u.length;--d>-1;)f=u[d],cr[f]&&(p=1,f=f==="transformOrigin"?mi:on),es(a,f);p&&(es(a,on),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",wu(a,1),c.uncache=1,RM(s)))}},zf={clearProps:function(t,n,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new pi(t._pt,n,a,0,0,zw);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},Cu=[1,0,0,1,0,0],NM={},LM=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},jS=function(t){var n=Ii(t,on);return LM(n)?Cu:n.substr(7).match(ky).map(xn)},P_=function(t,n){var a=t._gsap||Is(t),s=t.style,u=jS(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,u=[p.a,p.b,p.c,p.d,p.e,p.f],u.join(",")==="1,0,0,1,0,0"?Cu:u):(u===Cu&&!t.offsetParent&&t!==Zo&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Zo.appendChild(t)),u=jS(t),p?s.display=p:es(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Zo.removeChild(t))),n&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},t_=function(t,n,a,s,u,c){var f=t._gsap,p=u||P_(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,S=p[0],E=p[1],b=p[2],y=p[3],x=p[4],U=p[5],P=n.split(" "),R=parseFloat(P[0])||0,D=parseFloat(P[1])||0,O,L,T,N;a?p!==Cu&&(L=S*y-E*b)&&(T=R*(y/L)+D*(-b/L)+(b*U-y*x)/L,N=R*(-E/L)+D*(S/L)-(S*U-E*x)/L,R=T,D=N):(O=DM(t),R=O.x+(~P[0].indexOf("%")?R/100*O.width:R),D=O.y+(~(P[1]||P[0]).indexOf("%")?D/100*O.height:D)),s||s!==!1&&f.smooth?(x=R-d,U=D-_,f.xOffset=v+(x*S+U*b)-x,f.yOffset=g+(x*E+U*y)-U):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=D,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[mi]="0px 0px",c&&(Qr(c,f,"xOrigin",d,R),Qr(c,f,"yOrigin",_,D),Qr(c,f,"xOffset",v,f.xOffset),Qr(c,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",R+" "+D)},wu=function(t,n){var a=t._gsap||new _M(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Ii(t,mi)||"0",_,v,g,S,E,b,y,x,U,P,R,D,O,L,T,N,G,V,W,lt,ct,Z,F,B,J,pt,yt,I,K,Mt,Tt,Dt;return _=v=g=b=y=x=U=P=R=0,S=E=1,a.svg=!!(t.getCTM&&UM(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[on]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[on]!=="none"?p[on]:"")),s.scale=s.rotate=s.translate="none"),L=P_(t,a.svg),a.svg&&(a.uncache?(J=t.getBBox(),d=a.xOrigin-J.x+"px "+(a.yOrigin-J.y)+"px",B=""):B=!n&&t.getAttribute("data-svg-origin"),t_(t,B||d,!!B||a.originIsAbsolute,a.smooth!==!1,L)),D=a.xOrigin||0,O=a.yOrigin||0,L!==Cu&&(V=L[0],W=L[1],lt=L[2],ct=L[3],_=Z=L[4],v=F=L[5],L.length===6?(S=Math.sqrt(V*V+W*W),E=Math.sqrt(ct*ct+lt*lt),b=V||W?Go(W,V)*Ds:0,U=lt||ct?Go(lt,ct)*Ds+b:0,U&&(E*=Math.abs(Math.cos(U*Ko))),a.svg&&(_-=D-(D*V+O*lt),v-=O-(D*W+O*ct))):(Dt=L[6],Mt=L[7],yt=L[8],I=L[9],K=L[10],Tt=L[11],_=L[12],v=L[13],g=L[14],T=Go(Dt,K),y=T*Ds,T&&(N=Math.cos(-T),G=Math.sin(-T),B=Z*N+yt*G,J=F*N+I*G,pt=Dt*N+K*G,yt=Z*-G+yt*N,I=F*-G+I*N,K=Dt*-G+K*N,Tt=Mt*-G+Tt*N,Z=B,F=J,Dt=pt),T=Go(-lt,K),x=T*Ds,T&&(N=Math.cos(-T),G=Math.sin(-T),B=V*N-yt*G,J=W*N-I*G,pt=lt*N-K*G,Tt=ct*G+Tt*N,V=B,W=J,lt=pt),T=Go(W,V),b=T*Ds,T&&(N=Math.cos(T),G=Math.sin(T),B=V*N+W*G,J=Z*N+F*G,W=W*N-V*G,F=F*N-Z*G,V=B,Z=J),y&&Math.abs(y)+Math.abs(b)>359.9&&(y=b=0,x=180-x),S=xn(Math.sqrt(V*V+W*W+lt*lt)),E=xn(Math.sqrt(F*F+Dt*Dt)),T=Go(Z,F),U=Math.abs(T)>2e-4?T*Ds:0,R=Tt?1/(Tt<0?-Tt:Tt):0),a.svg&&(B=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!LM(Ii(t,on)),B&&t.setAttribute("transform",B))),Math.abs(U)>90&&Math.abs(U)<270&&(u?(S*=-1,U+=b<=0?180:-180,b+=b<=0?180:-180):(E*=-1,U+=U<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=g+c,a.scaleX=xn(S),a.scaleY=xn(E),a.rotation=xn(b)+f,a.rotationX=xn(y)+f,a.rotationY=xn(x)+f,a.skewX=U+f,a.skewY=P+f,a.transformPerspective=R+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[mi]=Ff(d)),a.xOffset=a.yOffset=0,a.force3D=zi.force3D,a.renderTransform=a.svg?Bw:wM?OM:Fw,a.uncache=0,a},Ff=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yp=function(t,n,a){var s=Kn(n);return xn(parseFloat(n)+parseFloat(ns(t,"x",a+"px",s)))+s},Fw=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,OM(t,n)},Cs="0deg",fu="0px",ws=") ",OM=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,v=a.rotationX,g=a.skewX,S=a.skewY,E=a.scaleX,b=a.scaleY,y=a.transformPerspective,x=a.force3D,U=a.target,P=a.zOrigin,R="",D=x==="auto"&&t&&t!==1||x===!0;if(P&&(v!==Cs||_!==Cs)){var O=parseFloat(_)*Ko,L=Math.sin(O),T=Math.cos(O),N;O=parseFloat(v)*Ko,N=Math.cos(O),c=Yp(U,c,L*N*-P),f=Yp(U,f,-Math.sin(O)*-P),p=Yp(U,p,T*N*-P+P)}y!==fu&&(R+="perspective("+y+ws),(s||u)&&(R+="translate("+s+"%, "+u+"%) "),(D||c!==fu||f!==fu||p!==fu)&&(R+=p!==fu||D?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ws),d!==Cs&&(R+="rotate("+d+ws),_!==Cs&&(R+="rotateY("+_+ws),v!==Cs&&(R+="rotateX("+v+ws),(g!==Cs||S!==Cs)&&(R+="skew("+g+", "+S+ws),(E!==1||b!==1)&&(R+="scale("+E+", "+b+ws),U.style[on]=R||"translate(0, 0)"},Bw=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,v=a.scaleX,g=a.scaleY,S=a.target,E=a.xOrigin,b=a.yOrigin,y=a.xOffset,x=a.yOffset,U=a.forceCSS,P=parseFloat(c),R=parseFloat(f),D,O,L,T,N;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Ko,d*=Ko,D=Math.cos(p)*v,O=Math.sin(p)*v,L=Math.sin(p-d)*-g,T=Math.cos(p-d)*g,d&&(_*=Ko,N=Math.tan(d-_),N=Math.sqrt(1+N*N),L*=N,T*=N,_&&(N=Math.tan(_),N=Math.sqrt(1+N*N),D*=N,O*=N)),D=xn(D),O=xn(O),L=xn(L),T=xn(T)):(D=v,T=g,O=L=0),(P&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(P=ns(S,"x",c,"px"),R=ns(S,"y",f,"px")),(E||b||y||x)&&(P=xn(P+E-(E*D+b*L)+y),R=xn(R+b-(E*O+b*T)+x)),(s||u)&&(N=S.getBBox(),P=xn(P+s/100*N.width),R=xn(R+u/100*N.height)),N="matrix("+D+","+O+","+L+","+T+","+P+","+R+")",S.setAttribute("transform",N),U&&(S.style[on]=N)},Hw=function(t,n,a,s,u){var c=360,f=zn(u),p=parseFloat(u)*(f&&~u.indexOf("rad")?Ds:1),d=p-s,_=s+d+"deg",v,g;return f&&(v=u.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*WS)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*WS)%c-~~(d/c)*c)),t._pt=g=new pi(t._pt,n,a,s,d,Mw),g.e=_,g.u="deg",t._props.push(a),g},JS=function(t,n){for(var a in n)t[a]=n[a];return t},Gw=function(t,n,a){var s=JS({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,v,g,S,E;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[on]=n,f=wu(a,1),es(a,on),a.setAttribute("transform",d)):(d=getComputedStyle(a)[on],c[on]=n,f=wu(a,1),c[on]=d);for(p in cr)d=s[p],_=f[p],d!==_&&u.indexOf(p)<0&&(S=Kn(d),E=Kn(_),v=S!==E?ns(a,p,d,E):parseFloat(d),g=parseFloat(_),t._pt=new pi(t._pt,f,p,v,g-v,jm),t._pt.u=E||0,t._props.push(p));JS(f,s)};di("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",u="Left",c=(t<3?[n,a,s,u]:[n+u,n+a,s+a,s+u]).map(function(f){return t<2?o+f:"border"+f+o});zf[t>1?"border"+o:o]=function(f,p,d,_,v){var g,S;if(arguments.length<4)return g=c.map(function(E){return er(f,E,d)}),S=g.join(" "),S.split(g[0]).length===5?g[0]:S;g=(_+"").split(" "),S={},c.forEach(function(E,b){return S[E]=g[b]=g[b]||g[(b-1)/2|0]}),f.init(p,S,v)}});var PM={name:"css",register:$m,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,u){var c=this._props,f=t.style,p=a.vars.startAt,d,_,v,g,S,E,b,y,x,U,P,R,D,O,L,T,N;N_||$m(),this.styles=this.styles||CM(t),T=this.styles.props,this.tween=a;for(b in n)if(b!=="autoRound"&&(_=n[b],!(Ui[b]&&gM(b,n,a,s,t,u)))){if(S=typeof _,E=zf[b],S==="function"&&(_=_.call(a,s,t,u),S=typeof _),S==="string"&&~_.indexOf("random(")&&(_=Tu(_)),E)E(this,t,b,_,a)&&(L=1);else if(b.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(b)+"").trim(),_+="",Jr.lastIndex=0,Jr.test(d)||(y=Kn(d),x=Kn(_),x?y!==x&&(d=ns(t,b,d,x)+x):y&&(_+=y)),this.add(f,"setProperty",d,_,s,u,0,0,b),c.push(b),T.push(b,0,f[b]);else if(S!=="undefined"){if(p&&b in p?(d=typeof p[b]=="function"?p[b].call(a,s,t,u):p[b],zn(d)&&~d.indexOf("random(")&&(d=Tu(d)),Kn(d+"")||d==="auto"||(d+=zi.units[b]||Kn(er(t,b))||""),(d+"").charAt(1)==="="&&(d=er(t,b))):d=er(t,b),g=parseFloat(d),U=S==="string"&&_.charAt(1)==="="&&_.substr(0,2),U&&(_=_.substr(2)),v=parseFloat(_),b in Ea&&(b==="autoAlpha"&&(g===1&&er(t,"visibility")==="hidden"&&v&&(g=0),T.push("visibility",0,f.visibility),Qr(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),b!=="scale"&&b!=="transform"&&(b=Ea[b],~b.indexOf(",")&&(b=b.split(",")[0]))),P=b in cr,P){if(this.styles.save(b),N=_,S==="string"&&_.substring(0,6)==="var(--"){if(_=Ii(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var G=t.style.perspective;t.style.perspective=_,_=Ii(t,"perspective"),G?t.style.perspective=G:es(t,"perspective")}v=parseFloat(_)}if(R||(D=t._gsap,D.renderTransform&&!n.parseTransform||wu(t,n.parseTransform),O=n.smoothOrigin!==!1&&D.smooth,R=this._pt=new pi(this._pt,f,on,0,1,D.renderTransform,D,0,-1),R.dep=1),b==="scale")this._pt=new pi(this._pt,D,"scaleY",D.scaleY,(U?Yo(D.scaleY,U+v):v)-D.scaleY||0,jm),this._pt.u=0,c.push("scaleY",b),b+="X";else if(b==="transformOrigin"){T.push(mi,0,f[mi]),_=Iw(_),D.svg?t_(t,_,0,O,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==D.zOrigin&&Qr(this,D,"zOrigin",D.zOrigin,x),Qr(this,f,b,Ff(d),Ff(_)));continue}else if(b==="svgOrigin"){t_(t,_,1,O,0,this);continue}else if(b in NM){Hw(this,D,b,g,U?Yo(g,U+_):_);continue}else if(b==="smoothOrigin"){Qr(this,D,"smooth",D.smooth,_);continue}else if(b==="force3D"){D[b]=_;continue}else if(b==="transform"){Gw(this,_,t);continue}}else b in f||(b=al(b)||b);if(P||(v||v===0)&&(g||g===0)&&!yw.test(_)&&b in f)y=(d+"").substr((g+"").length),v||(v=0),x=Kn(_)||(b in zi.units?zi.units[b]:y),y!==x&&(g=ns(t,b,d,x)),this._pt=new pi(this._pt,P?D:f,b,g,(U?Yo(g,U+v):v)-g,!P&&(x==="px"||b==="zIndex")&&n.autoRound!==!1?Tw:jm),this._pt.u=x||0,P&&N!==_?(this._pt.b=d,this._pt.e=N,this._pt.r=bw):y!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=Ew);else if(b in f)Pw.call(this,t,b,d,U?U+_:_);else if(b in t)this.add(t,b,d||t[b],U?U+_:_,s,u);else if(b!=="parseTransform"){M_(b,_);continue}P||(b in f?T.push(b,0,f[b]):typeof t[b]=="function"?T.push(b,2,t[b]()):T.push(b,1,d||t[b])),c.push(b)}}L&&EM(this)},render:function(t,n){if(n.tween._time||!L_())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:er,aliases:Ea,getSetter:function(t,n,a){var s=Ea[n];return s&&s.indexOf(",")<0&&(n=s),n in cr&&n!==mi&&(t._gsap.x||er(t,"x"))?a&&XS===a?n==="scale"?ww:Cw:(XS=a||{})&&(n==="scale"?Dw:Uw):t.style&&!x_(t.style[n])?Aw:~n.indexOf("-")?Rw:D_(t,n)},core:{_removeProperty:es,_getMatrix:P_}};_i.utils.checkPrefix=al;_i.core.getStyleSaver=CM;(function(o,t,n,a){var s=di(o+","+t+","+n,function(u){cr[u]=1});di(t,function(u){zi.units[u]="deg",NM[u]=1}),Ea[s[13]]=o+","+t,di(a,function(u){var c=u.split(":");Ea[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){zi.units[o]="px"});_i.registerPlugin(PM);var Bf=_i.registerPlugin(PM)||_i;Bf.core.Tween;function $S(o,t,n){return(1-n)*o+n*t}function ty(o,t){const n=o.touches?.[0]||o;return{x:n.clientX-t.left,y:n.clientY-t.top}}function Vw(o,t){const n=o.x-t.x,a=o.y-t.y;return Math.hypot(n,a)}class kw{DOM={el:null,inner:null};defaultStyle={scale:1,x:0,y:0,opacity:0};rect=null;constructor(t){this.DOM.el=t,this.DOM.inner=t.querySelector(".image-trail__img-inner"),this.getRect(),this.resize=()=>{Bf.set(this.DOM.el,this.defaultStyle),this.getRect()},window.addEventListener("resize",this.resize)}destroy(){window.removeEventListener("resize",this.resize)}getRect(){this.rect=this.DOM.el.getBoundingClientRect()}}class Xw{constructor(t){this.container=t,this.images=[...t.querySelectorAll(".image-trail__img")].map(n=>new kw(n)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.frameId=null,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.handlePointerMove=n=>{const a=t.getBoundingClientRect();this.mousePos=ty(n,a)},this.initRender=n=>{const a=t.getBoundingClientRect();this.mousePos=ty(n,a),this.cacheMousePos={...this.mousePos},this.frameId=requestAnimationFrame(()=>this.render()),t.removeEventListener("mousemove",this.initRender),t.removeEventListener("touchmove",this.initRender)},t.addEventListener("mousemove",this.handlePointerMove),t.addEventListener("touchmove",this.handlePointerMove),t.addEventListener("mousemove",this.initRender),t.addEventListener("touchmove",this.initRender)}destroy(){this.frameId&&cancelAnimationFrame(this.frameId),this.container.removeEventListener("mousemove",this.handlePointerMove),this.container.removeEventListener("touchmove",this.handlePointerMove),this.container.removeEventListener("mousemove",this.initRender),this.container.removeEventListener("touchmove",this.initRender),this.images.forEach(t=>t.destroy())}render(){const t=Vw(this.mousePos,this.lastMousePos);this.cacheMousePos.x=$S(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=$S(this.cacheMousePos.y,this.mousePos.y,.1),t>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),this.frameId=requestAnimationFrame(()=>this.render())}showNextImage(){if(!this.imagesTotal)return;this.zIndexVal+=1,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const t=this.images[this.imgPosition];Bf.killTweensOf(t.DOM.el),Bf.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(t.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-t.rect.width/2,y:this.cacheMousePos.y-t.rect.height/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-t.rect.width/2,y:this.mousePos.y-t.rect.height/2},0).fromTo(t.DOM.inner,{scale:2.8,filter:"brightness(250%)"},{duration:.4,ease:"power1",scale:1,filter:"brightness(100%)"},0).to(t.DOM.el,{duration:.4,ease:"power2",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount+=1,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount-=1,this.activeImagesCount===0&&(this.isIdle=!0)}}function Ww({items:o=[]}){const t=Cn.useRef(null);return Cn.useEffect(()=>{if(!t.current||o.length===0)return;const n=new Xw(t.current);return()=>n.destroy()},[o]),gt.jsx("div",{className:"image-trail",ref:t,children:o.map(n=>gt.jsx("div",{className:"image-trail__img",children:gt.jsx("div",{className:"image-trail__img-inner",style:{backgroundImage:`url(${n})`}})},n))})}const qw=["首页","成员","照片","树洞","联系"],ey=["mint","sky","sun","rose","lavender","leaf"],Yw=['data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23ffe6a7"/%3E%3Ccircle cx="220" cy="180" r="110" fill="%23ff8fab"/%3E%3Ccircle cx="420" cy="270" r="130" fill="%237bdff2"/%3E%3C/svg%3E','data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23d8f3dc"/%3E%3Cpath d="M120 330 300 130l220 200Z" fill="%2351b788"/%3E%3Ccircle cx="460" cy="120" r="70" fill="%23ffd166"/%3E%3C/svg%3E','data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23dcd6ff"/%3E%3Crect x="130" y="130" width="380" height="220" rx="32" fill="%231a73e8"/%3E%3Ccircle cx="250" cy="240" r="62" fill="%23fff"/%3E%3C/svg%3E','data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Crect width="640" height="480" fill="%23fff0ba"/%3E%3Cpath d="M90 260c90-160 190-160 280 0s150 120 190 20" stroke="%23ff6b6b" stroke-width="46" fill="none" stroke-linecap="round"/%3E%3C/svg%3E'];function Zw(){return gt.jsxs("svg",{className:"class-scene",viewBox:"0 0 520 360",role:"img","aria-label":"快乐班级插画",children:[gt.jsx("defs",{children:gt.jsxs("linearGradient",{id:"sky",x1:"0",x2:"1",y1:"0",y2:"1",children:[gt.jsx("stop",{offset:"0%",stopColor:"#9ddcff"}),gt.jsx("stop",{offset:"100%",stopColor:"#f9e798"})]})}),gt.jsx("rect",{width:"520",height:"360",rx:"28",fill:"url(#sky)"}),gt.jsx("path",{className:"cloud cloud-one",d:"M94 78c8-18 34-21 47-6 15-12 43-4 46 17 18 2 29 16 27 31H54c-7-22 15-43 40-42Z",fill:"#fff"}),gt.jsx("path",{className:"cloud cloud-two",d:"M380 72c7-17 31-20 43-5 13-11 38-3 41 16 16 2 26 15 24 29H344c-6-20 14-39 36-40Z",fill:"#fff"}),gt.jsx("path",{d:"M80 278h360v48H80z",fill:"#51b788"}),gt.jsx("path",{d:"M126 182h268v112H126z",fill:"#fff3c4"}),gt.jsx("path",{d:"M108 184 260 82l152 102H108Z",fill:"#ff8fab"}),gt.jsx("path",{d:"M236 230h48v64h-48z",fill:"#7b61ff"}),gt.jsx("path",{d:"M154 210h44v38h-44zM322 210h44v38h-44z",fill:"#7bdff2"}),gt.jsx("path",{className:"bell",d:"M250 142h20l12 28h-44l12-28Z",fill:"#ffd166"}),gt.jsx("circle",{className:"balloon balloon-one",cx:"112",cy:"126",r:"21",fill:"#1a73e8"}),gt.jsx("path",{d:"M112 147c-5 34 10 45 0 71",stroke:"#33424f",strokeWidth:"3",fill:"none"}),gt.jsx("circle",{className:"balloon balloon-two",cx:"420",cy:"132",r:"24",fill:"#06d6a0"}),gt.jsx("path",{d:"M420 156c-9 36 13 43 0 72",stroke:"#33424f",strokeWidth:"3",fill:"none"}),gt.jsx("circle",{cx:"175",cy:"293",r:"20",fill:"#ffd166"}),gt.jsx("circle",{cx:"345",cy:"293",r:"20",fill:"#ffd166"}),gt.jsx("path",{d:"M166 290c8 10 18 10 27 0M336 290c8 10 18 10 27 0",stroke:"#6b4f2a",strokeWidth:"4",fill:"none",strokeLinecap:"round"}),gt.jsx("path",{className:"spark spark-one",d:"M74 216h20M84 206v20",stroke:"#ff6b6b",strokeWidth:"5",strokeLinecap:"round"}),gt.jsx("path",{className:"spark spark-two",d:"M436 226h22M447 215v22",stroke:"#7b61ff",strokeWidth:"5",strokeLinecap:"round"})]})}function Kw({onJump:o}){return gt.jsxs("section",{className:"page home-grid","aria-labelledby":"home-title",children:[gt.jsxs("div",{className:"hero-copy",children:[gt.jsx("p",{className:"kicker",children:"阳光三班中文官网"}),gt.jsx("h1",{id:"home-title",children:"把每天的好奇心，种成闪闪发亮的小森林"}),gt.jsx("p",{className:"lead",children:"这里收藏班级故事、同学风采、活动照片和悄悄话。成员、照片和树洞内容都可以由后台或接口维护。"}),gt.jsxs("div",{className:"hero-actions",children:[gt.jsx("button",{type:"button",onClick:()=>o("照片"),children:"看照片墙"}),gt.jsx("button",{type:"button",className:"ghost",onClick:()=>o("成员"),children:"看成员"})]})]}),gt.jsx(Zw,{})]})}function Qw(){const[o,t]=Cn.useState([]),[n,a]=Cn.useState("loading");return Cn.useEffect(()=>{let s=!1;async function u(){try{a("loading");const c=await fetch("/api/members/");if(!c.ok)throw new Error("成员数据读取失败");const f=await c.json();s||(t(f.results||[]),a("ready"))}catch{s||a("error")}}return u(),()=>{s=!0}},[]),gt.jsxs("section",{className:"page","aria-labelledby":"members-title",children:[gt.jsxs("div",{className:"section-heading",children:[gt.jsx("p",{className:"kicker",children:"成员"}),gt.jsx("h2",{id:"members-title",children:"这里展示 SQLite 数据表里的真实成员"}),gt.jsx("p",{className:"section-note",children:"请在数据库或 Django 后台维护成员资料，前台页面只读展示。"})]}),n==="loading"&&gt.jsx("p",{className:"loading-card",children:"正在读取成员数据..."}),n==="error"&&gt.jsx("p",{className:"error-card",children:"暂时无法读取成员数据，请检查 Django 服务或 API。"}),n==="ready"&&o.length===0&&gt.jsx("p",{className:"empty-card",children:"数据库里还没有成员。向 `members` 表添加数据后，这里会自动显示。"}),n==="ready"&&o.length>0&&gt.jsx("div",{className:"member-grid",children:o.map((s,u)=>{const c=s.联系人||s.contact||"未命名",f=s.性别||s.gender||"未填写",p=s.兴趣爱好||s.hobbies||"未填写",d=ey[u%ey.length];return gt.jsxs("article",{className:`member-card ${d}`,style:{"--delay":`${u*90}ms`},children:[gt.jsx("span",{className:"avatar","aria-hidden":"true",children:c.slice(0,1)}),gt.jsx("h3",{children:c}),gt.jsxs("dl",{className:"member-meta",children:[gt.jsxs("div",{children:[gt.jsx("dt",{children:"性别"}),gt.jsx("dd",{children:f})]}),gt.jsxs("div",{children:[gt.jsx("dt",{children:"兴趣爱好"}),gt.jsx("dd",{children:p})]})]})]},s.id||c)})})]})}function jw(){const[o,t]=Cn.useState([]),[n,a]=Cn.useState("loading");Cn.useEffect(()=>{let c=!1;async function f(){try{a("loading");const p=await fetch("/api/photos/");if(!p.ok)throw new Error("照片数据读取失败");const d=await p.json();c||(t(d.results||[]),a("ready"))}catch{c||a("error")}}return f(),()=>{c=!0}},[]);const s=o.map(c=>c.图片地址||c.image_url).filter(Boolean),u=s.length>0?s:Yw;return gt.jsxs("section",{className:"page","aria-labelledby":"photos-title",children:[gt.jsxs("div",{className:"section-heading",children:[gt.jsx("p",{className:"kicker",children:"照片"}),gt.jsx("h2",{id:"photos-title",children:"后台上传，前台用照片轨迹展览"}),gt.jsx("p",{className:"section-note",children:"只有管理员能在后台挂照片，前台页面用 React Bits 照片轨迹展示已经公开的照片。"})]}),n==="loading"&&gt.jsx("p",{className:"loading-card",children:"正在读取照片墙..."}),n==="error"&&gt.jsx("p",{className:"error-card",children:"暂时无法读取照片，请检查 Django 服务或照片 API。"}),n==="ready"&&o.length===0&&gt.jsx("p",{className:"empty-card",children:"后台还没有公开照片。上传照片并勾选“前台展示”后，这里会出现照片墙。"}),n==="ready"&&o.length>0&&gt.jsx(Ww,{items:u})]})}function Jw(){const[o,t]=Cn.useState([]),[n,a]=Cn.useState("loading"),[s,u]=Cn.useState(""),[c,f]=Cn.useState(""),[p,d]=Cn.useState("idle"),[_,v]=Cn.useState("");async function g(){try{a("loading");const E=await fetch("/api/tree-hole/");if(!E.ok)throw new Error("树洞数据读取失败");const b=await E.json();t(b.results||[]),a("ready")}catch{a("error")}}Cn.useEffect(()=>{g()},[]);async function S(E){E.preventDefault();const b=c.trim();if(!b){v("先写一句悄悄话吧。");return}try{d("submitting"),v("");const y=await fetch("/api/tree-hole/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({昵称:s.trim(),留言内容:b})}),x=await y.json();if(!y.ok)throw new Error(x.error||"提交失败");t(U=>[x,...U]),u(""),f(""),d("done"),v("已经放进树洞啦。")}catch(y){d("idle"),v(y.message||"提交失败，请稍后再试。")}}return gt.jsxs("section",{className:"page tree-hole","aria-labelledby":"tree-title",children:[gt.jsxs("div",{className:"section-heading",children:[gt.jsx("p",{className:"kicker",children:"树洞"}),gt.jsx("h2",{id:"tree-title",children:"前台可以投递，后台可以管理"}),gt.jsx("p",{className:"section-note",children:"同学可以在这里提交留言；你可以在后台编辑、隐藏或删除树洞内容。"})]}),gt.jsxs("div",{className:"tree-layout",children:[gt.jsxs("div",{className:"tree-visual","aria-hidden":"true",children:[gt.jsx("div",{className:"tree-top"}),gt.jsx("div",{className:"tree-trunk",children:gt.jsx("span",{})})]}),gt.jsxs("div",{className:"tree-panel",children:[gt.jsxs("form",{className:"tree-form",onSubmit:S,children:[gt.jsxs("label",{children:["昵称",gt.jsx("input",{maxLength:"50",onChange:E=>u(E.target.value),placeholder:"可以留空匿名",type:"text",value:s})]}),gt.jsxs("label",{children:["留言内容",gt.jsx("textarea",{maxLength:"300",onChange:E=>f(E.target.value),placeholder:"写下想对班级说的话...",rows:"4",value:c})]}),gt.jsxs("div",{className:"form-row",children:[gt.jsxs("span",{children:[c.length,"/300"]}),gt.jsx("button",{type:"submit",disabled:p==="submitting",children:p==="submitting"?"投递中...":"投进树洞"})]}),_&&gt.jsx("p",{className:"form-feedback",children:_})]}),n==="loading"&&gt.jsx("p",{className:"loading-card",children:"正在读取树洞留言..."}),n==="error"&&gt.jsx("p",{className:"error-card",children:"暂时无法读取树洞，请检查 Django 服务或 API。"}),n==="ready"&&o.length===0&&gt.jsx("p",{className:"empty-card",children:"树洞里还没有留言。写下第一句话吧。"}),n==="ready"&&o.length>0&&gt.jsx("div",{className:"wish-list",children:o.map((E,b)=>{const y=E.昵称||E.nickname||"匿名同学",x=E.留言内容||E.content||"";return gt.jsxs("article",{className:"tree-message",style:{"--delay":`${b*90}ms`},children:[gt.jsx("p",{children:x}),gt.jsx("span",{children:y})]},E.id||`${y}-${b}`)})})]})]})]})}function $w(){return gt.jsxs("section",{className:"page contact-page","aria-labelledby":"contact-title",children:[gt.jsxs("div",{className:"section-heading",children:[gt.jsx("p",{className:"kicker",children:"联系"}),gt.jsx("h2",{id:"contact-title",children:"家校一起，把成长照亮"})]}),gt.jsxs("div",{className:"contact-grid",children:[gt.jsxs("article",{children:[gt.jsx("h3",{children:"班级信箱"}),gt.jsx("p",{children:"zhw15759327416@qq.com"})]}),gt.jsxs("article",{children:[gt.jsx("h3",{children:"开放时间"}),gt.jsx("p",{children:"周一至周五 16:30 - 17:30"})]}),gt.jsxs("article",{children:[gt.jsx("h3",{children:"班级地点"}),gt.jsx("p",{children:"XX小学"})]})]})]})}function tD(){const[o,t]=Cn.useState("首页"),n=Cn.useMemo(()=>{switch(o){case"成员":return gt.jsx(Qw,{});case"照片":return gt.jsx(jw,{});case"树洞":return gt.jsx(Jw,{});case"联系":return gt.jsx($w,{});default:return gt.jsx(Kw,{onJump:t})}},[o]);return gt.jsxs("div",{className:"site-shell",children:[gt.jsxs("header",{className:"topbar",children:[gt.jsx("div",{className:"topbar-ballpit","aria-hidden":"true",children:gt.jsx(M2,{className:"topbar-ballpit__canvas"})}),gt.jsxs("div",{className:"topbar-content",children:[gt.jsxs("a",{className:"brand",href:"/","aria-label":"阳光三班首页",children:[gt.jsx("span",{"aria-hidden":"true",children:"三"}),"阳光三班"]}),gt.jsx("nav",{"aria-label":"主导航",children:qw.map(a=>gt.jsx("button",{className:o===a?"active":"",type:"button",onClick:()=>t(a),children:a},a))})]})]}),gt.jsx("main",{className:"content",children:n},o)]})}K1.createRoot(document.getElementById("root")).render(gt.jsx(V1.StrictMode,{children:gt.jsx(tD,{})}));
