(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Mc(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const yt={},Ir=[],Mn=()=>{},Gp=()=>!1,ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bc=t=>t.startsWith("onUpdate:"),Ut=Object.assign,Ec=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wp=Object.prototype.hasOwnProperty,nt=(t,e)=>Wp.call(t,e),ze=Array.isArray,Nr=t=>na(t)==="[object Map]",Rd=t=>na(t)==="[object Set]",$e=t=>typeof t=="function",Et=t=>typeof t=="string",Ii=t=>typeof t=="symbol",_t=t=>t!==null&&typeof t=="object",Pd=t=>(_t(t)||$e(t))&&$e(t.then)&&$e(t.catch),Ld=Object.prototype.toString,na=t=>Ld.call(t),Xp=t=>na(t).slice(8,-1),Dd=t=>na(t)==="[object Object]",Tc=t=>Et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,us=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$p=/-(\w)/g,In=ia(t=>t.replace($p,(e,n)=>n?n.toUpperCase():"")),jp=/\B([A-Z])/g,cr=ia(t=>t.replace(jp,"-$1").toLowerCase()),ra=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ma=ia(t=>t?`on${ra(t)}`:""),Ci=(t,e)=>!Object.is(t,e),ba=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Id=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Yp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qp=t=>{const e=Et(t)?Number(t):NaN;return isNaN(e)?t:e};let _u;const Nd=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ac(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Et(i)?Qp(i):Ac(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(t)||_t(t))return t}const Kp=/;(?![^(]*\))/g,Zp=/:([^]+)/,Jp=/\/\*[^]*?\*\//g;function Qp(t){const e={};return t.replace(Jp,"").split(Kp).forEach(n=>{if(n){const i=n.split(Zp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function En(t){let e="";if(Et(t))e=t;else if(ze(t))for(let n=0;n<t.length;n++){const i=En(t[n]);i&&(e+=i+" ")}else if(_t(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tm=Mc(em);function Ud(t){return!!t||t===""}const Od=t=>!!(t&&t.__v_isRef===!0),Be=t=>Et(t)?t:t==null?"":ze(t)||_t(t)&&(t.toString===Ld||!$e(t.toString))?Od(t)?Be(t.value):JSON.stringify(t,Fd,2):String(t),Fd=(t,e)=>Od(e)?Fd(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ea(i,s)+" =>"]=r,n),{})}:Rd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ea(n))}:Ii(e)?Ea(e):_t(e)&&!ze(e)&&!Dd(e)?String(e):e,Ea=(t,e="")=>{var n;return Ii(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rn;class nm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rn,!e&&Rn&&(this.index=(Rn.scopes||(Rn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rn;try{return Rn=this,e()}finally{Rn=n}}}on(){Rn=this}off(){Rn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function im(t,e=Rn){e&&e.active&&e.effects.push(t)}function rm(){return Rn}let nr;class wc{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,im(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ni();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(sm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ui()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ei,n=nr;try{return Ei=!0,nr=this,this._runnings++,vu(this),this.fn()}finally{xu(this),this._runnings--,nr=n,Ei=e}}stop(){this.active&&(vu(this),xu(this),this.onStop&&this.onStop(),this.active=!1)}}function sm(t){return t.value}function vu(t){t._trackId++,t._depsLength=0}function xu(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Bd(t.deps[e],t);t.deps.length=t._depsLength}}function Bd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ei=!0,vl=0;const kd=[];function Ni(){kd.push(Ei),Ei=!1}function Ui(){const t=kd.pop();Ei=t===void 0?!0:t}function Cc(){vl++}function Rc(){for(vl--;!vl&&xl.length;)xl.shift()()}function Hd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Bd(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const xl=[];function zd(t,e,n){Cc();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&xl.push(i.scheduler)))}Rc()}const Vd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},yl=new WeakMap,ir=Symbol(""),Sl=Symbol("");function nn(t,e,n){if(Ei&&nr){let i=yl.get(t);i||yl.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Vd(()=>i.delete(n))),Hd(nr,r)}}function ii(t,e,n,i,r,s){const o=yl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ze(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Ii(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ze(t)?Tc(n)&&a.push(o.get("length")):(a.push(o.get(ir)),Nr(t)&&a.push(o.get(Sl)));break;case"delete":ze(t)||(a.push(o.get(ir)),Nr(t)&&a.push(o.get(Sl)));break;case"set":Nr(t)&&a.push(o.get(ir));break}Cc();for(const l of a)l&&zd(l,4);Rc()}const om=Mc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ii)),yu=am();function am(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=at(this);for(let s=0,o=this.length;s<o;s++)nn(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(at)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ni(),Cc();const i=at(this)[e].apply(this,n);return Rc(),Ui(),i}}),t}function lm(t){Ii(t)||(t=String(t));const e=at(this);return nn(e,"has",t),e.hasOwnProperty(t)}class Wd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Sm:Yd:s?jd:$d).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){if(o&&nt(yu,n))return Reflect.get(yu,n,i);if(n==="hasOwnProperty")return lm}const a=Reflect.get(e,n,i);return(Ii(n)?Gd.has(n):om(n))||(r||nn(e,"get",n),s)?a:rn(a)?o&&Tc(n)?a:a.value:_t(a)?r?Dc(a):oa(a):a}}class Xd extends Wd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=sr(s);if(!Hr(i)&&!sr(i)&&(s=at(s),i=at(i)),!ze(e)&&rn(s)&&!rn(i))return l?!1:(s.value=i,!0)}const o=ze(e)&&Tc(n)?Number(n)<e.length:nt(e,n),a=Reflect.set(e,n,i,r);return e===at(r)&&(o?Ci(i,s)&&ii(e,"set",n,i):ii(e,"add",n,i)),a}deleteProperty(e,n){const i=nt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ii(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ii(n)||!Gd.has(n))&&nn(e,"has",n),i}ownKeys(e){return nn(e,"iterate",ze(e)?"length":ir),Reflect.ownKeys(e)}}class cm extends Wd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const um=new Xd,hm=new cm,dm=new Xd(!0);const Pc=t=>t,sa=t=>Reflect.getPrototypeOf(t);function Xs(t,e,n=!1,i=!1){t=t.__v_raw;const r=at(t),s=at(e);n||(Ci(e,s)&&nn(r,"get",e),nn(r,"get",s));const{has:o}=sa(r),a=i?Pc:n?Nc:ys;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function $s(t,e=!1){const n=this.__v_raw,i=at(n),r=at(t);return e||(Ci(t,r)&&nn(i,"has",t),nn(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function js(t,e=!1){return t=t.__v_raw,!e&&nn(at(t),"iterate",ir),Reflect.get(t,"size",t)}function Su(t,e=!1){!e&&!Hr(t)&&!sr(t)&&(t=at(t));const n=at(this);return sa(n).has.call(n,t)||(n.add(t),ii(n,"add",t,t)),this}function Mu(t,e,n=!1){!n&&!Hr(e)&&!sr(e)&&(e=at(e));const i=at(this),{has:r,get:s}=sa(i);let o=r.call(i,t);o||(t=at(t),o=r.call(i,t));const a=s.call(i,t);return i.set(t,e),o?Ci(e,a)&&ii(i,"set",t,e):ii(i,"add",t,e),this}function bu(t){const e=at(this),{has:n,get:i}=sa(e);let r=n.call(e,t);r||(t=at(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&ii(e,"delete",t,void 0),s}function Eu(){const t=at(this),e=t.size!==0,n=t.clear();return e&&ii(t,"clear",void 0,void 0),n}function Ys(t,e){return function(i,r){const s=this,o=s.__v_raw,a=at(o),l=e?Pc:t?Nc:ys;return!t&&nn(a,"iterate",ir),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function qs(t,e,n){return function(...i){const r=this.__v_raw,s=at(r),o=Nr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Pc:e?Nc:ys;return!e&&nn(s,"iterate",l?Sl:ir),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fm(){const t={get(s){return Xs(this,s)},get size(){return js(this)},has:$s,add:Su,set:Mu,delete:bu,clear:Eu,forEach:Ys(!1,!1)},e={get(s){return Xs(this,s,!1,!0)},get size(){return js(this)},has:$s,add(s){return Su.call(this,s,!0)},set(s,o){return Mu.call(this,s,o,!0)},delete:bu,clear:Eu,forEach:Ys(!1,!0)},n={get(s){return Xs(this,s,!0)},get size(){return js(this,!0)},has(s){return $s.call(this,s,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:Ys(!0,!1)},i={get(s){return Xs(this,s,!0,!0)},get size(){return js(this,!0)},has(s){return $s.call(this,s,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:Ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=qs(s,!1,!1),n[s]=qs(s,!0,!1),e[s]=qs(s,!1,!0),i[s]=qs(s,!0,!0)}),[t,n,e,i]}const[pm,mm,gm,_m]=fm();function Lc(t,e){const n=e?t?_m:gm:t?mm:pm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(nt(n,r)&&r in i?n:i,r,s)}const vm={get:Lc(!1,!1)},xm={get:Lc(!1,!0)},ym={get:Lc(!0,!1)};const $d=new WeakMap,jd=new WeakMap,Yd=new WeakMap,Sm=new WeakMap;function Mm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bm(t){return t.__v_skip||!Object.isExtensible(t)?0:Mm(Xp(t))}function oa(t){return sr(t)?t:Ic(t,!1,um,vm,$d)}function Em(t){return Ic(t,!1,dm,xm,jd)}function Dc(t){return Ic(t,!0,hm,ym,Yd)}function Ic(t,e,n,i,r){if(!_t(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=bm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function hs(t){return sr(t)?hs(t.__v_raw):!!(t&&t.__v_isReactive)}function sr(t){return!!(t&&t.__v_isReadonly)}function Hr(t){return!!(t&&t.__v_isShallow)}function qd(t){return t?!!t.__v_raw:!1}function at(t){const e=t&&t.__v_raw;return e?at(e):t}function Tm(t){return Object.isExtensible(t)&&Id(t,"__v_skip",!0),t}const ys=t=>_t(t)?oa(t):t,Nc=t=>_t(t)?Dc(t):t;class Kd{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new wc(()=>e(this._value),()=>Lo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=at(this);return(!e._cacheable||e.effect.dirty)&&Ci(e._value,e._value=e.effect.run())&&Lo(e,4),Zd(e),e.effect._dirtyLevel>=2&&Lo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Am(t,e,n=!1){let i,r;const s=$e(t);return s?(i=t,r=Mn):(i=t.get,r=t.set),new Kd(i,r,s||!r,n)}function Zd(t){var e;Ei&&nr&&(t=at(t),Hd(nr,(e=t.dep)!=null?e:t.dep=Vd(()=>t.dep=void 0,t instanceof Kd?t:void 0)))}function Lo(t,e=4,n,i){t=at(t);const r=t.dep;r&&zd(r,e)}function rn(t){return!!(t&&t.__v_isRef===!0)}function Do(t){return wm(t,!1)}function wm(t,e){return rn(t)?t:new Cm(t,e)}class Cm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:at(e),this._value=n?e:ys(e)}get value(){return Zd(this),this._value}set value(e){const n=this.__v_isShallow||Hr(e)||sr(e);e=n?e:at(e),Ci(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ys(e),Lo(this,4))}}function Rm(t){return rn(t)?t.value:t}const Pm={get:(t,e,n)=>Rm(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return rn(r)&&!rn(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Jd(t){return hs(t)?t:new Proxy(t,Pm)}/**
* @vue/runtime-core v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e,n,i){try{return i?t(...i):t()}catch(r){aa(r,e,n)}}function bn(t,e,n,i){if($e(t)){const r=Ti(t,e,n,i);return r&&Pd(r)&&r.catch(s=>{aa(s,e,n)}),r}if(ze(t)){const r=[];for(let s=0;s<t.length;s++)r.push(bn(t[s],e,n,i));return r}}function aa(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ni(),Ti(l,null,10,[t,o,a]),Ui();return}}Lm(t,n,r,i)}function Lm(t,e,n,i=!0){console.error(t)}let Ss=!1,Ml=!1;const Ht=[];let kn=0;const Ur=[];let _i=null,qi=0;const Qd=Promise.resolve();let Uc=null;function ef(t){const e=Uc||Qd;return t?e.then(this?t.bind(this):t):e}function Dm(t){let e=kn+1,n=Ht.length;for(;e<n;){const i=e+n>>>1,r=Ht[i],s=Ms(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function Oc(t){(!Ht.length||!Ht.includes(t,Ss&&t.allowRecurse?kn+1:kn))&&(t.id==null?Ht.push(t):Ht.splice(Dm(t.id),0,t),tf())}function tf(){!Ss&&!Ml&&(Ml=!0,Uc=Qd.then(rf))}function Im(t){const e=Ht.indexOf(t);e>kn&&Ht.splice(e,1)}function Nm(t){ze(t)?Ur.push(...t):(!_i||!_i.includes(t,t.allowRecurse?qi+1:qi))&&Ur.push(t),tf()}function Tu(t,e,n=Ss?kn+1:0){for(;n<Ht.length;n++){const i=Ht[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Ht.splice(n,1),n--,i()}}}function nf(t){if(Ur.length){const e=[...new Set(Ur)].sort((n,i)=>Ms(n)-Ms(i));if(Ur.length=0,_i){_i.push(...e);return}for(_i=e,qi=0;qi<_i.length;qi++){const n=_i[qi];n.active!==!1&&n()}_i=null,qi=0}}const Ms=t=>t.id==null?1/0:t.id,Um=(t,e)=>{const n=Ms(t)-Ms(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rf(t){Ml=!1,Ss=!0,Ht.sort(Um);try{for(kn=0;kn<Ht.length;kn++){const e=Ht[kn];e&&e.active!==!1&&Ti(e,e.i,e.i?15:14)}}finally{kn=0,Ht.length=0,nf(),Ss=!1,Uc=null,(Ht.length||Ur.length)&&rf()}}let zt=null,la=null;function Go(t){const e=zt;return zt=t,la=t&&t.type.__scopeId||null,e}function $r(t){la=t}function jr(){la=null}function rr(t,e=zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Hu(-1);const s=Go(e);let o;try{o=t(...r)}finally{Go(s),i._d&&Hu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ni(),bn(l,n,8,[t.el,a,t,e]),Ui())}}const vi=Symbol("_leaveCb"),Ks=Symbol("_enterCb");function Om(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fc(()=>{t.isMounted=!0}),uf(()=>{t.isUnmounting=!0}),t}const gn=[Function,Array],sf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},of=t=>{const e=t.subTree;return e.component?of(e.component):e},Fm={name:"BaseTransition",props:sf,setup(t,{slots:e}){const n=Df(),i=Om();return()=>{const r=e.default&&lf(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const d of r)if(d.type!==Jt){s=d;break}}const o=at(t),{mode:a}=o;if(i.isLeaving)return Ta(s);const l=Au(s);if(!l)return Ta(s);let c=bl(l,o,i,n,d=>c=d);Wo(l,c);const u=n.subTree,h=u&&Au(u);if(h&&h.type!==Jt&&!Zi(l,h)&&of(n).type!==Jt){const d=bl(h,o,i,n);if(Wo(h,d),a==="out-in"&&l.type!==Jt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ta(s);a==="in-out"&&l.type!==Jt&&(d.delayLeave=(f,_,x)=>{const m=af(i,h);m[String(h.key)]=h,f[vi]=()=>{_(),f[vi]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return s}}},Bm=Fm;function af(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function bl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:T}=e,E=String(t.key),P=af(n,t),w=(y,b)=>{y&&bn(y,i,9,b)},C=(y,b)=>{const R=b[1];w(y,b),ze(y)?y.every(I=>I.length<=1)&&R():y.length<=1&&R()},U={mode:o,persisted:a,beforeEnter(y){let b=l;if(!n.isMounted)if(s)b=m||l;else return;y[vi]&&y[vi](!0);const R=P[E];R&&Zi(t,R)&&R.el[vi]&&R.el[vi](),w(b,[y])},enter(y){let b=c,R=u,I=h;if(!n.isMounted)if(s)b=p||c,R=A||u,I=T||h;else return;let W=!1;const Q=y[Ks]=J=>{W||(W=!0,J?w(I,[y]):w(R,[y]),U.delayedLeave&&U.delayedLeave(),y[Ks]=void 0)};b?C(b,[y,Q]):Q()},leave(y,b){const R=String(t.key);if(y[Ks]&&y[Ks](!0),n.isUnmounting)return b();w(d,[y]);let I=!1;const W=y[vi]=Q=>{I||(I=!0,b(),Q?w(x,[y]):w(_,[y]),y[vi]=void 0,P[R]===t&&delete P[R])};P[R]=t,f?C(f,[y,W]):W()},clone(y){const b=bl(y,e,n,i,r);return r&&r(b),b}};return U}function Ta(t){if(ca(t))return t=Ri(t),t.children=null,t}function Au(t){if(!ca(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&$e(n.default))return n.default()}}function Wo(t,e){t.shapeFlag&6&&t.component?Wo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lf(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===tt?(o.patchFlag&128&&r++,i=i.concat(lf(o.children,e,a))):(e||o.type!==Jt)&&i.push(a!=null?Ri(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function km(t,e){return $e(t)?Ut({name:t.name},e,{setup:t}):t}const ds=t=>!!t.type.__asyncLoader,ca=t=>t.type.__isKeepAlive;function Hm(t,e){cf(t,"a",e)}function zm(t,e){cf(t,"da",e)}function cf(t,e,n=Ot){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ua(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ca(r.parent.vnode)&&Vm(i,e,n,r),r=r.parent}}function Vm(t,e,n,i){const r=ua(e,t,i,!0);hf(()=>{Ec(i[e],r)},n)}function ua(t,e,n=Ot,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ni();const a=Bs(n),l=bn(e,n,t,o);return a(),Ui(),l});return i?r.unshift(s):r.push(s),s}}const ai=t=>(e,n=Ot)=>{(!fa||t==="sp")&&ua(t,(...i)=>e(...i),n)},Gm=ai("bm"),Fc=ai("m"),Wm=ai("bu"),Xm=ai("u"),uf=ai("bum"),hf=ai("um"),$m=ai("sp"),jm=ai("rtg"),Ym=ai("rtc");function qm(t,e=Ot){ua("ec",t,e)}const Km="components";function Nt(t,e){return Jm(Km,t,!0,e)||t}const Zm=Symbol.for("v-ndc");function Jm(t,e,n=!0,i=!1){const r=zt||Ot;if(r){const s=r.type;{const a=Gg(s,!1);if(a&&(a===e||a===In(e)||a===ra(In(e))))return s}const o=wu(r[t]||s[t],e)||wu(r.appContext[t],e);return!o&&i?s:o}}function wu(t,e){return t&&(t[e]||t[In(e)]||t[ra(In(e))])}function Pt(t,e,n,i){let r;const s=n;if(ze(t)||Et(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(_t(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s)}}else r=[];return r}function bs(t,e,n={},i,r){if(zt.isCE||zt.parent&&ds(zt.parent)&&zt.parent.isCE)return e!=="default"&&(n.name=e),ut("slot",n,i);let s=t[e];s&&s._c&&(s._d=!1),se();const o=s&&df(s(n)),a=Hn(tt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function df(t){return t.some(e=>$o(e)?!(e.type===Jt||e.type===tt&&!df(e.children)):!0)?t:null}const El=t=>t?If(t)?Vc(t):El(t.parent):null,fs=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$emit:t=>t.emit,$options:t=>Bc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Oc(t.update)}),$nextTick:t=>t.n||(t.n=ef.bind(t.proxy)),$watch:t=>Eg.bind(t)}),Aa=(t,e)=>t!==yt&&!t.__isScriptSetup&&nt(t,e),Qm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Aa(i,e))return o[e]=1,i[e];if(r!==yt&&nt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(n!==yt&&nt(n,e))return o[e]=4,n[e];Tl&&(o[e]=0)}}const u=fs[e];let h,d;if(u)return e==="$attrs"&&nn(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==yt&&nt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,nt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Aa(r,e)?(r[e]=n,!0):i!==yt&&nt(i,e)?(i[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==yt&&nt(t,o)||Aa(e,o)||(a=s[0])&&nt(a,o)||nt(i,o)||nt(fs,o)||nt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cu(t){return ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tl=!0;function eg(t){const e=Bc(t),n=t.proxy,i=t.ctx;Tl=!1,e.beforeCreate&&Ru(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:T,unmounted:E,render:P,renderTracked:w,renderTriggered:C,errorCaptured:U,serverPrefetch:y,expose:b,inheritAttrs:R,components:I,directives:W,filters:Q}=e;if(c&&tg(c,i,null),o)for(const Z in o){const V=o[Z];$e(V)&&(i[Z]=V.bind(n))}if(r){const Z=r.call(n,n);_t(Z)&&(t.data=oa(Z))}if(Tl=!0,s)for(const Z in s){const V=s[Z],me=$e(V)?V.bind(n,n):$e(V.get)?V.get.bind(n,n):Mn,xe=!$e(V)&&$e(V.set)?V.set.bind(n):Mn,Te=Xg({get:me,set:xe});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Ue=>Te.value=Ue})}if(a)for(const Z in a)ff(a[Z],i,n,Z);if(l){const Z=$e(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(V=>{ag(V,Z[V])})}u&&Ru(u,t,"c");function K(Z,V){ze(V)?V.forEach(me=>Z(me.bind(n))):V&&Z(V.bind(n))}if(K(Gm,h),K(Fc,d),K(Wm,f),K(Xm,_),K(Hm,x),K(zm,m),K(qm,U),K(Ym,w),K(jm,C),K(uf,A),K(hf,E),K($m,y),ze(b))if(b.length){const Z=t.exposed||(t.exposed={});b.forEach(V=>{Object.defineProperty(Z,V,{get:()=>n[V],set:me=>n[V]=me})})}else t.exposed||(t.exposed={});P&&t.render===Mn&&(t.render=P),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),W&&(t.directives=W)}function tg(t,e,n=Mn){ze(t)&&(t=Al(t));for(const i in t){const r=t[i];let s;_t(r)?"default"in r?s=Io(r.from||i,r.default,!0):s=Io(r.from||i):s=Io(r),rn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ru(t,e,n){bn(ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ff(t,e,n,i){const r=i.includes(".")?Cf(n,i):()=>n[i];if(Et(t)){const s=e[t];$e(s)&&bi(r,s)}else if($e(t))bi(r,t.bind(n));else if(_t(t))if(ze(t))t.forEach(s=>ff(s,e,n,i));else{const s=$e(t.handler)?t.handler.bind(n):e[t.handler];$e(s)&&bi(r,s,t)}}function Bc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Xo(l,c,o,!0)),Xo(l,e,o)),_t(e)&&s.set(e,l),l}function Xo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Xo(t,s,n,!0),r&&r.forEach(o=>Xo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=ng[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ng={data:Pu,props:Lu,emits:Lu,methods:os,computed:os,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:os,directives:os,watch:rg,provide:Pu,inject:ig};function Pu(t,e){return e?t?function(){return Ut($e(t)?t.call(this,this):t,$e(e)?e.call(this,this):e)}:e:t}function ig(t,e){return os(Al(t),Al(e))}function Al(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?Ut(Object.create(null),t,e):e}function Lu(t,e){return t?ze(t)&&ze(e)?[...new Set([...t,...e])]:Ut(Object.create(null),Cu(t),Cu(e??{})):e}function rg(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function pf(){return{app:null,config:{isNativeTag:Gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sg=0;function og(t,e){return function(i,r=null){$e(i)||(i=Ut({},i)),r!=null&&!_t(r)&&(r=null);const s=pf(),o=new WeakSet;let a=!1;const l=s.app={_uid:sg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&$e(c.install)?(o.add(c),c.install(l,...u)):$e(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=ut(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Vc(d.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=ps;ps=l;try{return c()}finally{ps=u}}};return l}}let ps=null;function ag(t,e){if(Ot){let n=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===n&&(n=Ot.provides=Object.create(i)),n[t]=e}}function Io(t,e,n=!1){const i=Ot||zt;if(i||ps){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ps._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$e(e)?e.call(i&&i.proxy):e}}const mf={},gf=()=>Object.create(mf),_f=t=>Object.getPrototypeOf(t)===mf;function lg(t,e,n,i=!1){const r={},s=gf();t.propsDefaults=Object.create(null),vf(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Em(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function cg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=at(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ha(t.emitsOptions,d))continue;const f=e[d];if(l)if(nt(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const _=In(d);r[_]=wl(l,a,_,f,t,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{vf(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!nt(e,h)&&((u=cr(h))===h||!nt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=wl(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!nt(e,h))&&(delete s[h],c=!0)}c&&ii(t.attrs,"set","")}function vf(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(us(l))continue;const c=e[l];let u;r&&nt(r,u=In(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ha(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=at(n),c=a||yt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=wl(r,l,h,c[h],t,!nt(c,h))}}return o}function wl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$e(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Bs(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===cr(n))&&(i=!0))}return i}const ug=new WeakMap;function xf(t,e,n=!1){const i=n?ug:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!$e(t)){const u=h=>{l=!0;const[d,f]=xf(h,e,!0);Ut(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return _t(t)&&i.set(t,Ir),Ir;if(ze(s))for(let u=0;u<s.length;u++){const h=In(s[u]);Du(h)&&(o[h]=yt)}else if(s)for(const u in s){const h=In(u);if(Du(h)){const d=s[u],f=o[h]=ze(d)||$e(d)?{type:d}:Ut({},d);if(f){const _=Uu(Boolean,f.type),x=Uu(String,f.type);f[0]=_>-1,f[1]=x<0||_<x,(_>-1||nt(f,"default"))&&a.push(h)}}}const c=[o,a];return _t(t)&&i.set(t,c),c}function Du(t){return t[0]!=="$"&&!us(t)}function Iu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Nu(t,e){return Iu(t)===Iu(e)}function Uu(t,e){return ze(e)?e.findIndex(n=>Nu(n,t)):$e(e)&&Nu(e,t)?0:-1}const yf=t=>t[0]==="_"||t==="$stable",kc=t=>ze(t)?t.map(Fn):[Fn(t)],hg=(t,e,n)=>{if(e._n)return e;const i=rr((...r)=>kc(e(...r)),n);return i._c=!1,i},Sf=(t,e,n)=>{const i=t._ctx;for(const r in t){if(yf(r))continue;const s=t[r];if($e(s))e[r]=hg(r,s,i);else if(s!=null){const o=kc(s);e[r]=()=>o}}},Mf=(t,e)=>{const n=kc(e);t.slots.default=()=>n},bf=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},dg=(t,e,n)=>{const i=t.slots=gf();if(t.vnode.shapeFlag&32){const r=e._;r?(bf(i,e,n),n&&Id(i,"_",r,!0)):Sf(e,i)}else e&&Mf(t,e)},fg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:bf(r,e,n):(s=!e.$stable,Sf(e,r)),o=e}else e&&(Mf(t,e),o={default:1});if(s)for(const a in r)!yf(a)&&o[a]==null&&delete r[a]};function Cl(t,e,n,i,r=!1){if(ze(t)){t.forEach((d,f)=>Cl(d,e&&(ze(e)?e[f]:e),n,i,r));return}if(ds(i)&&!r)return;const s=i.shapeFlag&4?Vc(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Et(c)?(u[c]=null,nt(h,c)&&(h[c]=null)):rn(c)&&(c.value=null)),$e(l))Ti(l,a,12,[o,u]);else{const d=Et(l),f=rn(l);if(d||f){const _=()=>{if(t.f){const x=d?nt(h,l)?h[l]:u[l]:l.value;r?ze(x)&&Ec(x,s):ze(x)?x.includes(s)||x.push(s):d?(u[l]=[s],nt(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,nt(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Kt(_,n)):_()}}}const Ef=Symbol("_vte"),pg=t=>t.__isTeleport,ms=t=>t&&(t.disabled||t.disabled===""),Ou=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Fu=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Rl=(t,e)=>{const n=t&&t.to;return Et(n)?e?e(n):null:n},mg={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:_,createText:x,createComment:m}}=c,p=ms(e.props);let{shapeFlag:A,children:T,dynamicChildren:E}=e;if(t==null){const P=e.el=x(""),w=e.anchor=x(""),C=e.target=Rl(e.props,_),U=e.targetStart=x(""),y=e.targetAnchor=x("");f(P,n,i),f(w,n,i),U[Ef]=y,C&&(f(U,C),f(y,C),o==="svg"||Ou(C)?o="svg":(o==="mathml"||Fu(C))&&(o="mathml"));const b=(R,I)=>{A&16&&u(T,R,I,r,s,o,a,l)};p?b(n,w):C&&b(C,y)}else{e.el=t.el,e.targetStart=t.targetStart;const P=e.anchor=t.anchor,w=e.target=t.target,C=e.targetAnchor=t.targetAnchor,U=ms(t.props),y=U?n:w,b=U?P:C;if(o==="svg"||Ou(w)?o="svg":(o==="mathml"||Fu(w))&&(o="mathml"),E?(d(t.dynamicChildren,E,y,r,s,o,a),Hc(t,e,!0)):l||h(t,e,y,b,r,s,o,a,!1),p)U?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Zs(e,n,P,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Rl(e.props,_);R&&Zs(e,R,null,c,0)}else U&&Zs(e,w,C,c,1)}Tf(e)},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=t;if(h&&(r(c),r(u)),s&&r(l),o&16){const f=s||!ms(d);for(let _=0;_<a.length;_++){const x=a[_];i(x,e,n,f,!!x.dynamicChildren)}}},move:Zs,hydrate:gg};function Zs(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&i(o,e,n),(!h||ms(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);h&&i(a,e,n)}function gg(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Rl(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(ms(e.props))e.anchor=c(o(t),e,a(t),n,i,r,s),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,i,r,s)}Tf(e)}return e.anchor&&o(e.anchor)}const _g=mg;function Tf(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Kt=Dg;function vg(t){return xg(t)}function xg(t,e){const n=Nd();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Mn,insertStaticContent:_}=t,x=(g,L,B,X=null,H=null,ie=null,q=void 0,ee=null,ce=!!L.dynamicChildren)=>{if(g===L)return;g&&!Zi(g,L)&&(X=oe(g),Ue(g,H,ie,!0),g=null),L.patchFlag===-2&&(ce=!1,L.dynamicChildren=null);const{type:ne,ref:S,shapeFlag:v}=L;switch(ne){case da:m(g,L,B,X);break;case Jt:p(g,L,B,X);break;case Ra:g==null&&A(L,B,X,q);break;case tt:I(g,L,B,X,H,ie,q,ee,ce);break;default:v&1?P(g,L,B,X,H,ie,q,ee,ce):v&6?W(g,L,B,X,H,ie,q,ee,ce):(v&64||v&128)&&ne.process(g,L,B,X,H,ie,q,ee,ce,Pe)}S!=null&&H&&Cl(S,g&&g.ref,ie,L||g,!L)},m=(g,L,B,X)=>{if(g==null)i(L.el=a(L.children),B,X);else{const H=L.el=g.el;L.children!==g.children&&c(H,L.children)}},p=(g,L,B,X)=>{g==null?i(L.el=l(L.children||""),B,X):L.el=g.el},A=(g,L,B,X)=>{[g.el,g.anchor]=_(g.children,L,B,X,g.el,g.anchor)},T=({el:g,anchor:L},B,X)=>{let H;for(;g&&g!==L;)H=d(g),i(g,B,X),g=H;i(L,B,X)},E=({el:g,anchor:L})=>{let B;for(;g&&g!==L;)B=d(g),r(g),g=B;r(L)},P=(g,L,B,X,H,ie,q,ee,ce)=>{L.type==="svg"?q="svg":L.type==="math"&&(q="mathml"),g==null?w(L,B,X,H,ie,q,ee,ce):y(g,L,H,ie,q,ee,ce)},w=(g,L,B,X,H,ie,q,ee)=>{let ce,ne;const{props:S,shapeFlag:v,transition:D,dirs:k}=g;if(ce=g.el=o(g.type,ie,S&&S.is,S),v&8?u(ce,g.children):v&16&&U(g.children,ce,null,X,H,wa(g,ie),q,ee),k&&Bi(g,null,X,"created"),C(ce,g,g.scopeId,q,X),S){for(const G in S)G!=="value"&&!us(G)&&s(ce,G,null,S[G],ie,X);"value"in S&&s(ce,"value",null,S.value,ie),(ne=S.onVnodeBeforeMount)&&Un(ne,X,g)}k&&Bi(g,null,X,"beforeMount");const Y=yg(H,D);Y&&D.beforeEnter(ce),i(ce,L,B),((ne=S&&S.onVnodeMounted)||Y||k)&&Kt(()=>{ne&&Un(ne,X,g),Y&&D.enter(ce),k&&Bi(g,null,X,"mounted")},H)},C=(g,L,B,X,H)=>{if(B&&f(g,B),X)for(let ie=0;ie<X.length;ie++)f(g,X[ie]);if(H){let ie=H.subTree;if(L===ie){const q=H.vnode;C(g,q,q.scopeId,q.slotScopeIds,H.parent)}}},U=(g,L,B,X,H,ie,q,ee,ce=0)=>{for(let ne=ce;ne<g.length;ne++){const S=g[ne]=ee?xi(g[ne]):Fn(g[ne]);x(null,S,L,B,X,H,ie,q,ee)}},y=(g,L,B,X,H,ie,q)=>{const ee=L.el=g.el;let{patchFlag:ce,dynamicChildren:ne,dirs:S}=L;ce|=g.patchFlag&16;const v=g.props||yt,D=L.props||yt;let k;if(B&&ki(B,!1),(k=D.onVnodeBeforeUpdate)&&Un(k,B,L,g),S&&Bi(L,g,B,"beforeUpdate"),B&&ki(B,!0),(v.innerHTML&&D.innerHTML==null||v.textContent&&D.textContent==null)&&u(ee,""),ne?b(g.dynamicChildren,ne,ee,B,X,wa(L,H),ie):q||V(g,L,ee,null,B,X,wa(L,H),ie,!1),ce>0){if(ce&16)R(ee,v,D,B,H);else if(ce&2&&v.class!==D.class&&s(ee,"class",null,D.class,H),ce&4&&s(ee,"style",v.style,D.style,H),ce&8){const Y=L.dynamicProps;for(let G=0;G<Y.length;G++){const pe=Y[G],ae=v[pe],Ee=D[pe];(Ee!==ae||pe==="value")&&s(ee,pe,ae,Ee,H,B)}}ce&1&&g.children!==L.children&&u(ee,L.children)}else!q&&ne==null&&R(ee,v,D,B,H);((k=D.onVnodeUpdated)||S)&&Kt(()=>{k&&Un(k,B,L,g),S&&Bi(L,g,B,"updated")},X)},b=(g,L,B,X,H,ie,q)=>{for(let ee=0;ee<L.length;ee++){const ce=g[ee],ne=L[ee],S=ce.el&&(ce.type===tt||!Zi(ce,ne)||ce.shapeFlag&70)?h(ce.el):B;x(ce,ne,S,null,X,H,ie,q,!0)}},R=(g,L,B,X,H)=>{if(L!==B){if(L!==yt)for(const ie in L)!us(ie)&&!(ie in B)&&s(g,ie,L[ie],null,H,X);for(const ie in B){if(us(ie))continue;const q=B[ie],ee=L[ie];q!==ee&&ie!=="value"&&s(g,ie,ee,q,H,X)}"value"in B&&s(g,"value",L.value,B.value,H)}},I=(g,L,B,X,H,ie,q,ee,ce)=>{const ne=L.el=g?g.el:a(""),S=L.anchor=g?g.anchor:a("");let{patchFlag:v,dynamicChildren:D,slotScopeIds:k}=L;k&&(ee=ee?ee.concat(k):k),g==null?(i(ne,B,X),i(S,B,X),U(L.children||[],B,S,H,ie,q,ee,ce)):v>0&&v&64&&D&&g.dynamicChildren?(b(g.dynamicChildren,D,B,H,ie,q,ee),(L.key!=null||H&&L===H.subTree)&&Hc(g,L,!0)):V(g,L,B,S,H,ie,q,ee,ce)},W=(g,L,B,X,H,ie,q,ee,ce)=>{L.slotScopeIds=ee,g==null?L.shapeFlag&512?H.ctx.activate(L,B,X,q,ce):Q(L,B,X,H,ie,q,ce):J(g,L,ce)},Q=(g,L,B,X,H,ie,q)=>{const ee=g.component=Bg(g,X,H);if(ca(g)&&(ee.ctx.renderer=Pe),kg(ee,!1,q),ee.asyncDep){if(H&&H.registerDep(ee,K,q),!g.el){const ce=ee.subTree=ut(Jt);p(null,ce,L,B)}}else K(ee,g,L,B,H,ie,q)},J=(g,L,B)=>{const X=L.component=g.component;if(Rg(g,L,B))if(X.asyncDep&&!X.asyncResolved){Z(X,L,B);return}else X.next=L,Im(X.update),X.effect.dirty=!0,X.update();else L.el=g.el,X.vnode=L},K=(g,L,B,X,H,ie,q)=>{const ee=()=>{if(g.isMounted){let{next:S,bu:v,u:D,parent:k,vnode:Y}=g;{const Ce=Af(g);if(Ce){S&&(S.el=Y.el,Z(g,S,q)),Ce.asyncDep.then(()=>{g.isUnmounted||ee()});return}}let G=S,pe;ki(g,!1),S?(S.el=Y.el,Z(g,S,q)):S=Y,v&&ba(v),(pe=S.props&&S.props.onVnodeBeforeUpdate)&&Un(pe,k,S,Y),ki(g,!0);const ae=Ca(g),Ee=g.subTree;g.subTree=ae,x(Ee,ae,h(Ee.el),oe(Ee),g,H,ie),S.el=ae.el,G===null&&Pg(g,ae.el),D&&Kt(D,H),(pe=S.props&&S.props.onVnodeUpdated)&&Kt(()=>Un(pe,k,S,Y),H)}else{let S;const{el:v,props:D}=L,{bm:k,m:Y,parent:G}=g,pe=ds(L);if(ki(g,!1),k&&ba(k),!pe&&(S=D&&D.onVnodeBeforeMount)&&Un(S,G,L),ki(g,!0),v&&wt){const ae=()=>{g.subTree=Ca(g),wt(v,g.subTree,g,H,null)};pe?L.type.__asyncLoader().then(()=>!g.isUnmounted&&ae()):ae()}else{const ae=g.subTree=Ca(g);x(null,ae,B,X,g,H,ie),L.el=ae.el}if(Y&&Kt(Y,H),!pe&&(S=D&&D.onVnodeMounted)){const ae=L;Kt(()=>Un(S,G,ae),H)}(L.shapeFlag&256||G&&ds(G.vnode)&&G.vnode.shapeFlag&256)&&g.a&&Kt(g.a,H),g.isMounted=!0,L=B=X=null}},ce=g.effect=new wc(ee,Mn,()=>Oc(ne),g.scope),ne=g.update=()=>{ce.dirty&&ce.run()};ne.i=g,ne.id=g.uid,ki(g,!0),ne()},Z=(g,L,B)=>{L.component=g;const X=g.vnode.props;g.vnode=L,g.next=null,cg(g,L.props,X,B),fg(g,L.children,B),Ni(),Tu(g),Ui()},V=(g,L,B,X,H,ie,q,ee,ce=!1)=>{const ne=g&&g.children,S=g?g.shapeFlag:0,v=L.children,{patchFlag:D,shapeFlag:k}=L;if(D>0){if(D&128){xe(ne,v,B,X,H,ie,q,ee,ce);return}else if(D&256){me(ne,v,B,X,H,ie,q,ee,ce);return}}k&8?(S&16&&te(ne,H,ie),v!==ne&&u(B,v)):S&16?k&16?xe(ne,v,B,X,H,ie,q,ee,ce):te(ne,H,ie,!0):(S&8&&u(B,""),k&16&&U(v,B,X,H,ie,q,ee,ce))},me=(g,L,B,X,H,ie,q,ee,ce)=>{g=g||Ir,L=L||Ir;const ne=g.length,S=L.length,v=Math.min(ne,S);let D;for(D=0;D<v;D++){const k=L[D]=ce?xi(L[D]):Fn(L[D]);x(g[D],k,B,null,H,ie,q,ee,ce)}ne>S?te(g,H,ie,!0,!1,v):U(L,B,X,H,ie,q,ee,ce,v)},xe=(g,L,B,X,H,ie,q,ee,ce)=>{let ne=0;const S=L.length;let v=g.length-1,D=S-1;for(;ne<=v&&ne<=D;){const k=g[ne],Y=L[ne]=ce?xi(L[ne]):Fn(L[ne]);if(Zi(k,Y))x(k,Y,B,null,H,ie,q,ee,ce);else break;ne++}for(;ne<=v&&ne<=D;){const k=g[v],Y=L[D]=ce?xi(L[D]):Fn(L[D]);if(Zi(k,Y))x(k,Y,B,null,H,ie,q,ee,ce);else break;v--,D--}if(ne>v){if(ne<=D){const k=D+1,Y=k<S?L[k].el:X;for(;ne<=D;)x(null,L[ne]=ce?xi(L[ne]):Fn(L[ne]),B,Y,H,ie,q,ee,ce),ne++}}else if(ne>D)for(;ne<=v;)Ue(g[ne],H,ie,!0),ne++;else{const k=ne,Y=ne,G=new Map;for(ne=Y;ne<=D;ne++){const be=L[ne]=ce?xi(L[ne]):Fn(L[ne]);be.key!=null&&G.set(be.key,ne)}let pe,ae=0;const Ee=D-Y+1;let Ce=!1,ue=0;const ye=new Array(Ee);for(ne=0;ne<Ee;ne++)ye[ne]=0;for(ne=k;ne<=v;ne++){const be=g[ne];if(ae>=Ee){Ue(be,H,ie,!0);continue}let ge;if(be.key!=null)ge=G.get(be.key);else for(pe=Y;pe<=D;pe++)if(ye[pe-Y]===0&&Zi(be,L[pe])){ge=pe;break}ge===void 0?Ue(be,H,ie,!0):(ye[ge-Y]=ne+1,ge>=ue?ue=ge:Ce=!0,x(be,L[ge],B,null,H,ie,q,ee,ce),ae++)}const Oe=Ce?Sg(ye):Ir;for(pe=Oe.length-1,ne=Ee-1;ne>=0;ne--){const be=Y+ne,ge=L[be],Ge=be+1<S?L[be+1].el:X;ye[ne]===0?x(null,ge,B,Ge,H,ie,q,ee,ce):Ce&&(pe<0||ne!==Oe[pe]?Te(ge,B,Ge,2):pe--)}}},Te=(g,L,B,X,H=null)=>{const{el:ie,type:q,transition:ee,children:ce,shapeFlag:ne}=g;if(ne&6){Te(g.component.subTree,L,B,X);return}if(ne&128){g.suspense.move(L,B,X);return}if(ne&64){q.move(g,L,B,Pe);return}if(q===tt){i(ie,L,B);for(let v=0;v<ce.length;v++)Te(ce[v],L,B,X);i(g.anchor,L,B);return}if(q===Ra){T(g,L,B);return}if(X!==2&&ne&1&&ee)if(X===0)ee.beforeEnter(ie),i(ie,L,B),Kt(()=>ee.enter(ie),H);else{const{leave:v,delayLeave:D,afterLeave:k}=ee,Y=()=>i(ie,L,B),G=()=>{v(ie,()=>{Y(),k&&k()})};D?D(ie,Y,G):G()}else i(ie,L,B)},Ue=(g,L,B,X=!1,H=!1)=>{const{type:ie,props:q,ref:ee,children:ce,dynamicChildren:ne,shapeFlag:S,patchFlag:v,dirs:D,cacheIndex:k}=g;if(v===-2&&(H=!1),ee!=null&&Cl(ee,null,B,g,!0),k!=null&&(L.renderCache[k]=void 0),S&256){L.ctx.deactivate(g);return}const Y=S&1&&D,G=!ds(g);let pe;if(G&&(pe=q&&q.onVnodeBeforeUnmount)&&Un(pe,L,g),S&6)it(g.component,B,X);else{if(S&128){g.suspense.unmount(B,X);return}Y&&Bi(g,null,L,"beforeUnmount"),S&64?g.type.remove(g,L,B,Pe,X):ne&&!ne.hasOnce&&(ie!==tt||v>0&&v&64)?te(ne,L,B,!1,!0):(ie===tt&&v&384||!H&&S&16)&&te(ce,L,B),X&&ot(g)}(G&&(pe=q&&q.onVnodeUnmounted)||Y)&&Kt(()=>{pe&&Un(pe,L,g),Y&&Bi(g,null,L,"unmounted")},B)},ot=g=>{const{type:L,el:B,anchor:X,transition:H}=g;if(L===tt){lt(B,X);return}if(L===Ra){E(g);return}const ie=()=>{r(B),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(g.shapeFlag&1&&H&&!H.persisted){const{leave:q,delayLeave:ee}=H,ce=()=>q(B,ie);ee?ee(g.el,ie,ce):ce()}else ie()},lt=(g,L)=>{let B;for(;g!==L;)B=d(g),r(g),g=B;r(L)},it=(g,L,B)=>{const{bum:X,scope:H,update:ie,subTree:q,um:ee,m:ce,a:ne}=g;Bu(ce),Bu(ne),X&&ba(X),H.stop(),ie&&(ie.active=!1,Ue(q,g,L,B)),ee&&Kt(ee,L),Kt(()=>{g.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},te=(g,L,B,X=!1,H=!1,ie=0)=>{for(let q=ie;q<g.length;q++)Ue(g[q],L,B,X,H)},oe=g=>{if(g.shapeFlag&6)return oe(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const L=d(g.anchor||g.el),B=L&&L[Ef];return B?d(B):L};let Ae=!1;const He=(g,L,B)=>{g==null?L._vnode&&Ue(L._vnode,null,null,!0):x(L._vnode||null,g,L,null,null,null,B),Ae||(Ae=!0,Tu(),nf(),Ae=!1),L._vnode=g},Pe={p:x,um:Ue,m:Te,r:ot,mt:Q,mc:U,pc:V,pbc:b,n:oe,o:t};let Ze,wt;return{render:He,hydrate:Ze,createApp:og(He,Ze)}}function wa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ki({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hc(t,e,n=!1){const i=t.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Hc(o,a)),a.type===da&&(a.el=o.el)}}function Sg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Af(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Af(e)}function Bu(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Mg=Symbol.for("v-scx"),bg=()=>Io(Mg),Js={};function bi(t,e,n){return wf(t,e,n)}function wf(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=yt){if(e&&s){const w=e;e=(...C)=>{w(...C),P()}}const l=Ot,c=w=>i===!0?w:Ki(w,i===!1?1:void 0);let u,h=!1,d=!1;if(rn(t)?(u=()=>t.value,h=Hr(t)):hs(t)?(u=()=>c(t),h=!0):ze(t)?(d=!0,h=t.some(w=>hs(w)||Hr(w)),u=()=>t.map(w=>{if(rn(w))return w.value;if(hs(w))return c(w);if($e(w))return Ti(w,l,2)})):$e(t)?e?u=()=>Ti(t,l,2):u=()=>(f&&f(),bn(t,l,3,[_])):u=Mn,e&&i){const w=u;u=()=>Ki(w())}let f,_=w=>{f=T.onStop=()=>{Ti(w,l,4),f=T.onStop=void 0}},x;if(fa)if(_=Mn,e?n&&bn(e,l,3,[u(),d?[]:void 0,_]):u(),r==="sync"){const w=bg();x=w.__watcherHandles||(w.__watcherHandles=[])}else return Mn;let m=d?new Array(t.length).fill(Js):Js;const p=()=>{if(!(!T.active||!T.dirty))if(e){const w=T.run();(i||h||(d?w.some((C,U)=>Ci(C,m[U])):Ci(w,m)))&&(f&&f(),bn(e,l,3,[w,m===Js?void 0:d&&m[0]===Js?[]:m,_]),m=w)}else T.run()};p.allowRecurse=!!e;let A;r==="sync"?A=p:r==="post"?A=()=>Kt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),A=()=>Oc(p));const T=new wc(u,Mn,A),E=rm(),P=()=>{T.stop(),E&&Ec(E.effects,T)};return e?n?p():m=T.run():r==="post"?Kt(T.run.bind(T),l&&l.suspense):T.run(),x&&x.push(P),P}function Eg(t,e,n){const i=this.proxy,r=Et(t)?t.includes(".")?Cf(i,t):()=>i[t]:t.bind(i,i);let s;$e(e)?s=e:(s=e.handler,n=e);const o=Bs(this),a=wf(r,s.bind(i),n);return o(),a}function Cf(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Ki(t,e=1/0,n){if(e<=0||!_t(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,rn(t))Ki(t.value,e,n);else if(ze(t))for(let i=0;i<t.length;i++)Ki(t[i],e,n);else if(Rd(t)||Nr(t))t.forEach(i=>{Ki(i,e,n)});else if(Dd(t)){for(const i in t)Ki(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ki(t[i],e,n)}return t}const Tg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${In(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function Ag(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||yt;let r=n;const s=e.startsWith("update:"),o=s&&Tg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Et(u)?u.trim():u)),o.number&&(r=n.map(Yp)));let a,l=i[a=Ma(e)]||i[a=Ma(In(e))];!l&&s&&(l=i[a=Ma(cr(e))]),l&&bn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(c,t,6,r)}}function Rf(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!$e(t)){const l=c=>{const u=Rf(c,e,!0);u&&(a=!0,Ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(_t(t)&&i.set(t,null),null):(ze(s)?s.forEach(l=>o[l]=null):Ut(o,s),_t(t)&&i.set(t,o),o)}function ha(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,cr(e))||nt(t,e))}function Ca(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:_,inheritAttrs:x}=t,m=Go(t);let p,A;try{if(n.shapeFlag&4){const E=r||i,P=E;p=Fn(c.call(P,E,u,h,f,d,_)),A=a}else{const E=e;p=Fn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),A=e.props?a:wg(a)}}catch(E){gs.length=0,aa(E,t,1),p=ut(Jt)}let T=p;if(A&&x!==!1){const E=Object.keys(A),{shapeFlag:P}=T;E.length&&P&7&&(s&&E.some(bc)&&(A=Cg(A,s)),T=Ri(T,A,!1,!0))}return n.dirs&&(T=Ri(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),p=T,Go(m),p}const wg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},Cg=(t,e)=>{const n={};for(const i in t)(!bc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Rg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ku(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!ha(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ku(i,o,c):!0:!!o;return!1}function ku(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ha(n,s))return!0}return!1}function Pg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lg=t=>t.__isSuspense;function Dg(t,e){e&&e.pendingBranch?ze(t)?e.effects.push(...t):e.effects.push(t):Nm(t)}const tt=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),gs=[];let un=null;function se(t=!1){gs.push(un=t?null:[])}function Ig(){gs.pop(),un=gs[gs.length-1]||null}let Es=1;function Hu(t){Es+=t,t<0&&un&&(un.hasOnce=!0)}function Pf(t){return t.dynamicChildren=Es>0?un||Ir:null,Ig(),Es>0&&un&&un.push(t),t}function le(t,e,n,i,r,s){return Pf(_e(t,e,n,i,r,s,!0))}function Hn(t,e,n,i,r){return Pf(ut(t,e,n,i,r,!0))}function $o(t){return t?t.__v_isVNode===!0:!1}function Zi(t,e){return t.type===e.type&&t.key===e.key}const Lf=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Et(t)||rn(t)||$e(t)?{i:zt,r:t,k:e,f:!!n}:t:null);function _e(t,e=null,n=null,i=0,r=null,s=t===tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lf(e),ref:e&&No(e),scopeId:la,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(zc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Et(n)?8:16),Es>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const ut=Ng;function Ng(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Zm)&&(t=Jt),$o(t)){const a=Ri(t,e,!0);return n&&zc(a,n),Es>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag=-2,a}if(Wg(t)&&(t=t.__vccOpts),e){e=Ug(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=En(a)),_t(l)&&(qd(l)&&!ze(l)&&(l=Ut({},l)),e.style=Ac(l))}const o=Et(t)?1:Lg(t)?128:pg(t)?64:_t(t)?4:$e(t)?2:0;return _e(t,e,n,i,r,o,s,!0)}function Ug(t){return t?qd(t)||_f(t)?Ut({},t):t:null}function Ri(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Zt(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Lf(c),ref:e&&e.ref?n&&s?ze(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ri(t.ssContent),ssFallback:t.ssFallback&&Ri(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Wo(u,l.clone(u)),u}function vn(t=" ",e=0){return ut(da,null,t,e)}function Ie(t="",e=!1){return e?(se(),Hn(Jt,null,t)):ut(Jt,null,t)}function Fn(t){return t==null||typeof t=="boolean"?ut(Jt):ze(t)?ut(tt,null,t.slice()):typeof t=="object"?xi(t):ut(da,null,String(t))}function xi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ri(t)}function zc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ze(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!_f(e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zt(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=En([e.class,i.class]));else if(r==="style")e.style=Ac([e.style,i.style]);else if(ta(r)){const s=e[r],o=i[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){bn(t,e,7,[n,i])}const Og=pf();let Fg=0;function Bg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Og,s={uid:Fg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xf(i,r),emitsOptions:Rf(i,r),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ag.bind(null,s),t.ce&&t.ce(s),s}let Ot=null;const Df=()=>Ot||zt;let jo,Pl;{const t=Nd(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};jo=e("__VUE_INSTANCE_SETTERS__",n=>Ot=n),Pl=e("__VUE_SSR_SETTERS__",n=>fa=n)}const Bs=t=>{const e=Ot;return jo(t),t.scope.on(),()=>{t.scope.off(),jo(e)}},zu=()=>{Ot&&Ot.scope.off(),jo(null)};function If(t){return t.vnode.shapeFlag&4}let fa=!1;function kg(t,e=!1,n=!1){e&&Pl(e);const{props:i,children:r}=t.vnode,s=If(t);lg(t,i,s,e),dg(t,r,n);const o=s?Hg(t,e):void 0;return e&&Pl(!1),o}function Hg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qm);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Vg(t):null,s=Bs(t);Ni();const o=Ti(i,t,0,[t.props,r]);if(Ui(),s(),Pd(o)){if(o.then(zu,zu),e)return o.then(a=>{Vu(t,a,e)}).catch(a=>{aa(a,t,0)});t.asyncDep=o}else Vu(t,o,e)}else Nf(t,e)}function Vu(t,e,n){$e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_t(e)&&(t.setupState=Jd(e)),Nf(t,n)}let Gu;function Nf(t,e,n){const i=t.type;if(!t.render){if(!e&&Gu&&!i.render){const r=i.template||Bc(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ut(Ut({isCustomElement:s,delimiters:a},o),l);i.render=Gu(r,c)}}t.render=i.render||Mn}{const r=Bs(t);Ni();try{eg(t)}finally{Ui(),r()}}}const zg={get(t,e){return nn(t,"get",""),t[e]}};function Vg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zg),slots:t.slots,emit:t.emit,expose:e}}function Vc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jd(Tm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fs)return fs[n](t)},has(e,n){return n in e||n in fs}})):t.proxy}function Gg(t,e=!0){return $e(t)?t.displayName||t.name:t.name||e&&t.__name}function Wg(t){return $e(t)&&"__vccOpts"in t}const Xg=(t,e)=>Am(t,e,fa);function $g(t,e,n){const i=arguments.length;return i===2?_t(e)&&!ze(e)?$o(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&$o(n)&&(n=[n]),ut(t,e,n))}const jg="3.4.34";/**
* @vue/runtime-dom v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Yg="http://www.w3.org/2000/svg",qg="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,Wu=ei&&ei.createElement("template"),Kg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ei.createElementNS(Yg,t):e==="mathml"?ei.createElementNS(qg,t):n?ei.createElement(t,{is:n}):ei.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ei.createTextNode(t),createComment:t=>ei.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ei.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Wu.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=Wu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ci="transition",Zr="animation",Ts=Symbol("_vtc"),Gc=(t,{slots:e})=>$g(Bm,Zg(t),e);Gc.displayName="Transition";const Uf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gc.props=Ut({},sf,Uf);const Hi=(t,e=[])=>{ze(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xu=t=>t?ze(t)?t.some(e=>e.length>1):t.length>1:!1;function Zg(t){const e={};for(const I in t)I in Uf||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,_=Jg(r),x=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:T,onLeave:E,onLeaveCancelled:P,onBeforeAppear:w=p,onAppear:C=A,onAppearCancelled:U=T}=e,y=(I,W,Q)=>{zi(I,W?u:a),zi(I,W?c:o),Q&&Q()},b=(I,W)=>{I._isLeaving=!1,zi(I,h),zi(I,f),zi(I,d),W&&W()},R=I=>(W,Q)=>{const J=I?C:A,K=()=>y(W,I,Q);Hi(J,[W,K]),$u(()=>{zi(W,I?l:s),ui(W,I?u:a),Xu(J)||ju(W,i,x,K)})};return Ut(e,{onBeforeEnter(I){Hi(p,[I]),ui(I,s),ui(I,o)},onBeforeAppear(I){Hi(w,[I]),ui(I,l),ui(I,c)},onEnter:R(!1),onAppear:R(!0),onLeave(I,W){I._isLeaving=!0;const Q=()=>b(I,W);ui(I,h),ui(I,d),t_(),$u(()=>{I._isLeaving&&(zi(I,h),ui(I,f),Xu(E)||ju(I,i,m,Q))}),Hi(E,[I,Q])},onEnterCancelled(I){y(I,!1),Hi(T,[I])},onAppearCancelled(I){y(I,!0),Hi(U,[I])},onLeaveCancelled(I){b(I),Hi(P,[I])}})}function Jg(t){if(t==null)return null;if(_t(t))return[Pa(t.enter),Pa(t.leave)];{const e=Pa(t);return[e,e]}}function Pa(t){return qp(t)}function ui(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ts]||(t[Ts]=new Set)).add(e)}function zi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ts];n&&(n.delete(e),n.size||(t[Ts]=void 0))}function $u(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Qg=0;function ju(t,e,n,i){const r=t._endId=++Qg,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=e_(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),s()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function e_(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${ci}Delay`),s=i(`${ci}Duration`),o=Yu(r,s),a=i(`${Zr}Delay`),l=i(`${Zr}Duration`),c=Yu(a,l);let u=null,h=0,d=0;e===ci?o>0&&(u=ci,h=o,d=s.length):e===Zr?c>0&&(u=Zr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?ci:Zr:null,d=u?u===ci?s.length:l.length:0);const f=u===ci&&/\b(transform|all)(,|$)/.test(i(`${ci}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Yu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>qu(n)+qu(t[i])))}function qu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function t_(){return document.body.offsetHeight}function n_(t,e,n){const i=t[Ts];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ku=Symbol("_vod"),i_=Symbol("_vsh"),r_=Symbol(""),s_=/(^|;)\s*display\s*:/;function o_(t,e,n){const i=t.style,r=Et(n);let s=!1;if(n&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Uo(i,a,"")}else for(const o in e)n[o]==null&&Uo(i,o,"");for(const o in n)o==="display"&&(s=!0),Uo(i,o,n[o])}else if(r){if(e!==n){const o=i[r_];o&&(n+=";"+o),i.cssText=n,s=s_.test(n)}}else e&&t.removeAttribute("style");Ku in t&&(t[Ku]=s?i.display:"",t[i_]&&(i.display="none"))}const Zu=/\s*!important$/;function Uo(t,e,n){if(ze(n))n.forEach(i=>Uo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=a_(t,e);Zu.test(n)?t.setProperty(cr(i),n.replace(Zu,""),"important"):t[i]=n}}const Ju=["Webkit","Moz","ms"],La={};function a_(t,e){const n=La[e];if(n)return n;let i=In(e);if(i!=="filter"&&i in t)return La[e]=i;i=ra(i);for(let r=0;r<Ju.length;r++){const s=Ju[r]+i;if(s in t)return La[e]=s}return e}const Qu="http://www.w3.org/1999/xlink";function eh(t,e,n,i,r,s=tm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qu,e.slice(6,e.length)):t.setAttributeNS(Qu,e,n):n==null||s&&!Ud(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ii(n)?String(n):n)}function l_(t,e,n,i){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Ud(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function c_(t,e,n,i){t.addEventListener(e,n,i)}function u_(t,e,n,i){t.removeEventListener(e,n,i)}const th=Symbol("_vei");function h_(t,e,n,i,r=null){const s=t[th]||(t[th]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=d_(e);if(i){const c=s[e]=m_(i,r);c_(t,a,c,l)}else o&&(u_(t,a,o,l),s[e]=void 0)}}const nh=/(?:Once|Passive|Capture)$/;function d_(t){let e;if(nh.test(t)){e={};let i;for(;i=t.match(nh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let Da=0;const f_=Promise.resolve(),p_=()=>Da||(f_.then(()=>Da=0),Da=Date.now());function m_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;bn(g_(i,n.value),e,5,[i])};return n.value=t,n.attached=p_(),n}function g_(t,e){if(ze(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ih=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,__=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?n_(t,i,o):e==="style"?o_(t,n,i):ta(e)?bc(e)||h_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v_(t,e,i,o))?(l_(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&eh(t,e,i,o,s,e!=="value")):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),eh(t,e,i,o))};function v_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ih(e)&&$e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ih(e)&&Et(n)?!1:e in t}const x_=["ctrl","shift","alt","meta"],y_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>x_.some(n=>t[`${n}Key`]&&!e.includes(n))},Ia=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=y_[e[o]];if(a&&a(r,e))return}return t(r,...s)})},S_=Ut({patchProp:__},Kg);let rh;function M_(){return rh||(rh=vg(S_))}const b_=(...t)=>{const e=M_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=T_(i);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,E_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function E_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function T_(t){return Et(t)?document.querySelector(t):t}const dn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},A_={name:"dropzone",data(){return{files:[]}},methods:{handleDrop(t){const e=t.dataTransfer.files;this.addFiles(e)},handleFileInput(t){const e=t.target.files;this.addFiles(e)},addFiles(t){this.$emit("files-added",Array.from(t))},setFilename(t){this.files.includes(t)||this.files.push(t)}}},w_=t=>($r("data-v-df9df657"),t=t(),jr(),t),C_={class:"file-dropper"},R_=w_(()=>_e("div",{class:"instructions"},"Drop .gltf and .bin files to load model.",-1)),P_={key:0},L_={key:1},D_={class:"file-input-container"};function I_(t,e,n,i,r,s){return se(),le("div",C_,[R_,_e("div",{class:"drop-zone",onDragover:e[0]||(e[0]=Ia(()=>{},["prevent"])),onDragenter:e[1]||(e[1]=Ia(()=>{},["prevent"])),onDrop:e[2]||(e[2]=Ia((...o)=>s.handleDrop&&s.handleDrop(...o),["prevent"])),tabindex:"0"},[r.files.length===0?(se(),le("p",P_,"Drop files here")):(se(),le("ul",L_,[(se(!0),le(tt,null,Pt(r.files,o=>(se(),le("li",{key:o},Be(o),1))),128))]))],32),_e("div",D_,[_e("input",{type:"file",multiple:"",ref:"fileInput",onChange:e[3]||(e[3]=(...o)=>s.handleFileInput&&s.handleFileInput(...o)),accept:".gltf,.bin",id:"file-input",class:"file-input"},null,544)])])}const N_=dn(A_,[["render",I_],["__scopeId","data-v-df9df657"]]),We={document:{},model:{},nodeParents:[],g_buffer:null,setBuffer(t){this.g_buffer=t},parseModel(t){return this.model=JSON.parse(t),this.parseNodes(this.model),this.model},parseNodes(t){const e=[],n=(i,r)=>{i.children&&i.children.forEach(s=>{e[s]=r,n(this.getNode(s),s)})};t.scenes[0].nodes.forEach((i,r)=>{e[i]=0,n(this.getNode(i),i)}),this.nodeParents=e},getScenes(t){return t&&t.scenes||[]},getScene(t=0,e){return this.getScenes(e)[t]},getNodes(t){return t&&t.nodes||[]},getNode(t=0,e){return this.getNodes(e)[t]||{}},getNodeIndex(t,e){if(e)return e.nodes.findIndex(n=>t.name===n.name)},getNodeByIndex(t,e){if(e)return e.nodes&&e.nodes[t]||{}},getChildNodes(t,e){return!t||!t.length?[]:t.map(n=>this.getNodeByIndex(n,e))},getParentNode(t){return this.nodeParents[t]||{}},getMeshes(t){return t.meshes||[]},getMesh(t,e){return this.getMeshes(e)[t]||{}},getPrimitives(t,e){return e.meshes[t].primitives||[]},getMaterials(t){return t.materials||[]},getMaterial(t,e){return e.materials[t]||{}},getMaterialIndex(t,e){return e.materials.findIndex(n=>t.name===n.name)},getTextures(t){return t.textures||[]},getImages(t){return t.images||[]},getImage(t,e){if(e.images)return e.images[t]},getAnimations(t){return t.animations||[]},getName(t){return t&&t.name||""},getBaseColorFactor(t){return t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.baseColorFactor||[0,0,0,0]},getBaseColorTexture(t,e){const n=this.getTextures(e);if(!n)return null;const i=t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.baseColorTexture&&t.pbrMetallicRoughness.baseColorTexture.index||null;return i!=null?n[i]:null},getAlphaMode(t){return t&&t.alphaMode||null},getEmissiveFactor(t){return t&&t.emissiveFactor||[0,0,0]},getEmissiveTexture(t,e){const n=this.getTextures(e);if(!n)return null;const i=t&&t.emissiveTexture&&t.emissiveTexture.index||null;return i!=null&&n[i]||null},getMetallicFactor(t){return t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.metallicFactor},getRoughnessFactor(t){return t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.roughnessFactor},getMetallicRoughnessTexture(t,e){const n=this.getTextures(e);if(!n)return null;const i=t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.metallicRoughnessTexture&&t.pbrMetallicRoughness.metallicRoughnessTexture.index||null;return i!=null&&n[i]||null},getNormalScale(t){return t&&t.normalTexture&&t.normalTexture.scale},getNormalTexture(t,e){const n=this.getTextures(e);if(!n)return null;const i=t&&t.normalTexture&&t.normalTexture.index||null;return i!=null&&n[i]||null},getOcclusionScale(t){return t&&t.occlusionTexture&&t.occlusionTexture.scale},getOcclusionTexture(t,e){const n=this.getTextures(e);if(!n)return null;const i=t&&t.occlusionTexture&&t.occlusionTexture.index||null;return i!=null&&n[i]||null},getExtensions(t){return t&&t.extensions||[]},getAccessor(t,e){return e.accessors&&e.accessors[t]||null},getBuffer(t){return t.buffers[0]||null},bufferTypes:{getArrayConstructor(t){switch(t){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5125:return Uint32Array;case 5126:return Float32Array;default:throw new Error("Unsupported component type")}},getItemSize(t){switch(t){case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;default:throw new Error("Unsupported type")}},componentSize(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4;default:throw new Error("Unsupported component type")}},readComponent(t,e,n){switch(n){case 5120:return t.getInt8(e);case 5121:return t.getUint8(e);case 5122:return t.getInt16(e,!0);case 5123:return t.getUint16(e,!0);case 5125:return t.getUint32(e,!0);case 5126:return t.getFloat32(e,!0);default:throw new Error("Unsupported component type")}},writeComponent(t,e,n,i){switch(n){case 5120:t.setInt8(e,i);break;case 5121:t.setUint8(e,i);break;case 5122:t.setInt16(e,!0,i);break;case 5123:t.setUint16(e,!0,i);break;case 5125:t.setUint32(e,!0,i);break;case 5126:t.setFloat32(e,i,!0);break;default:throw new Error("Unsupported component type")}}},getAccessorData(t,e,n){const i=e.accessors[t],r=e.bufferViews[i.bufferView];if(!i||!r)throw new Error("Invalid accessor or bufferView index");const s=n||this.g_buffer,o=i.componentType,a=i.type,l=i.count,c=this.bufferTypes.getArrayConstructor(o),u=this.bufferTypes.getItemSize(a),h=(r.byteOffset||0)+(i.byteOffset||0),d=s.buffer.byteLength;r.byteOffset+r.byteLength>d&&(console.log(`BufferView too large: ${h+r.byteLength} > ${d}`),console.log(`accessorIndex: ${t}`));const f=l*u*this.bufferTypes.componentSize(o);if(i.byteOffset+f>r.byteLength)throw new Error("Accessor exceeds bufferView bounds");const _=Math.min(r.byteLength,s.byteLength-h),x=new DataView(s.buffer,h,_),m=new c(l*u),p=this.bufferTypes.componentSize(o);for(let A=0;A<l*u;A++){const T=A*p;if(T+p>_)throw new Error("Reading beyond buffer bounds");m[A]=this.bufferTypes.readComponent(x,T,o)}return m},setAccessorData(t,e,n){const i=e.accessors[t],r=e.bufferViews[i.bufferView],s=this.g_buffer,o=i.componentType,a=i.type,l=i.count,c=this.bufferTypes.getItemSize(a);if(n.length!==l*c)throw new Error(`Data length mismatch. Expected ${l*c} values, got ${n.length}`);const u=(r.byteOffset||0)+(i.byteOffset||0),h=l*c*this.bufferTypes.componentSize(o);if(i.byteOffset+h>r.byteLength)throw new Error("Write operation would exceed bufferView bounds");const d=new DataView(s.buffer,u,h);for(let f=0;f<n.length;f++)this.bufferTypes.writeComponent(d,f*this.bufferTypes.componentSize(o),o,n[f])},addNewAccessorData(t,e,n,i){const r=this.bufferTypes.getItemSize(i),s=this.bufferTypes.componentSize(n),o=e.length*s,a={buffer:0,byteOffset:t.buffers[0].byteLength,byteLength:o,name:"newBufferView"},l={bufferView:t.bufferViews.length,componentType:n,count:e.length/r,type:i,byteOffset:0,name:"newAccessor"},c=this.g_buffer.buffer,u=new ArrayBuffer(c.byteLength+o);new Uint8Array(u).set(new Uint8Array(c));const h=new DataView(u,c.byteLength,o);for(let d=0;d<e.length;d++)this.bufferTypes.writeComponent(h,d*s,n,e[d]);return t.bufferViews.push(a),t.accessors.push(l),t.buffers[0].byteLength+=o,this.g_buffer=new Uint8Array(u),t.accessors.length-1},repackBuffer(t){let e=0;const n=new ArrayBuffer(t.buffers[0].byteLength),i=new Set;t.accessors.forEach((s,o)=>{if(!i.has(s.bufferView)){const a=t.bufferViews[s.bufferView],l=a.byteOffset;new Uint8Array(n,e).set(new Uint8Array(this.g_buffer.buffer,l,a.byteLength)),a.byteOffset=e,e+=a.byteLength,e=Math.ceil(e/4)*4,i.add(s.bufferView)}}),t.bufferViews.forEach((s,o)=>{if(!i.has(o)){const a=s.byteOffset;new Uint8Array(n,e).set(new Uint8Array(this.g_buffer.buffer,a,s.byteLength)),s.byteOffset=e,e+=s.byteLength,e=Math.ceil(e/4)*4}});const r=new ArrayBuffer(e);return new Uint8Array(r).set(new Uint8Array(n,0,e)),t.buffers[0].byteLength=e,this.g_buffer=new Uint8Array(r),t},setNodeProperty(t,e,n,i){if(!i&&!t)return;const r=this.getNodeIndex(t,i);if(r!==null)try{i.nodes[r][e]=n}catch(s){console.log(`Error setting node ${r} ${e} : ${n} (${s})`)}}};function U_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wc={exports:{}};function Xc(){}Xc.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function r(){i.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,r=n.length;for(i;i<r;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],r=[];if(i&&e)for(var s=0,o=i.length;s<o;s++)i[s].fn!==e&&i[s].fn._!==e&&r.push(i[s]);return r.length?n[t]=r:delete n[t],this}};Wc.exports=Xc;Wc.exports.TinyEmitter=Xc;var O_=Wc.exports,F_=O_,B_=new F_;const Qs=U_(B_),pa={$on:(...t)=>Qs.on(...t),$once:(...t)=>Qs.once(...t),$off:(...t)=>Qs.off(...t),$emit:(...t)=>Qs.emit(...t)},k_={name:"listItem",props:{model:Object,item:Object,icon:String,defaultName:String,selected:Boolean},components:{},data(){return{}},computed:{itemName(){return this.item?this.item.name:this.defaultName||""},nodeIndex(){return We.getNodeIndex(this.item,this.model)||null}},methods:{selectItem(){pa.$emit("selectItem",{item:this.item,icon:this.icon,index:this.nodeIndex})}}};function H_(t,e,n,i,r,s){return se(),le("div",{class:En(["list-item",[n.icon,n.selected?"selected":""]]),onClick:e[1]||(e[1]=(...o)=>s.selectItem&&s.selectItem(...o))},[_e("span",{class:"interactive",onClick:e[0]||(e[0]=(...o)=>s.selectItem&&s.selectItem(...o))},Be(s.itemName),1),bs(t.$slots,"default")],2)}const $c=dn(k_,[["render",H_]]),z_={name:"treeNode",components:{listItem:$c},props:{model:Object,node:Object,selectedNode:Object},data(){return{children:this.getChildren()}},computed:{selected(){return this.selectedNode&&this.selectedNode.name==this.node.name}},methods:{getChildren(){return this.node?We.getChildNodes(this.node&&this.node.children,this.model):[]},getParent(){return this.node?We.getParentNode(We.getNodeIndex(this.node,this.model)):null},getIcon(){return this.node?this.node.mesh!=null?"icon-outliner-object":"icon-outliner-empty":""}}},V_={key:0,class:"tree-node"},G_={class:"nodes"};function W_(t,e,n,i,r,s){const o=Nt("listItem"),a=Nt("treeNode",!0);return s.getParent?(se(),le("li",V_,[ut(o,{item:n.node,selected:s.selected,icon:s.getIcon(),model:n.model},null,8,["item","selected","icon","model"]),_e("ul",G_,[(se(!0),le(tt,null,Pt(s.getChildren(),l=>(se(),Hn(a,{node:l,model:n.model,selectedNode:n.selectedNode},null,8,["node","model","selectedNode"]))),256))])])):Ie("",!0)}const X_=dn(z_,[["render",W_]]),$_={name:"nodeList",props:{root:Object,model:Object,selectedNode:Object},components:{treeNode:X_},data(){return{}},computed:{rootNodes(){return this.root?this.root.listNodes():[]},scenes(){return this.model?We.getScenes(this.model):[]}},methods:{getChildNodes(t){return t&&t.nodes?We.getChildNodes(t.nodes,this.model):[]}}},j_={class:"node-list"},Y_={class:"scenes"},q_={class:"sceneItem list-item icon-scene"},K_={class:"nodes"};function Z_(t,e,n,i,r,s){const o=Nt("treeNode");return se(),le("div",j_,[_e("ul",Y_,[(se(!0),le(tt,null,Pt(s.scenes,(a,l)=>(se(),le("li",q_,[vn(Be(a.name)+" ",1),_e("ul",K_,[(se(!0),le(tt,null,Pt(this.getChildNodes(a),c=>(se(),Hn(o,{node:c,model:n.model,selectedNode:n.selectedNode},null,8,["node","model","selectedNode"]))),256))])]))),256))])])}const J_=dn($_,[["render",Z_]]),Ll=(t,e)=>{if(!t||t.length!==4)return t;const n=t[0],i=t[1],r=t[2],s=t[3],o=Math.atan2(2*(n*i+r*s),1-2*(i*i+r*r)),a=2*(n*r-s*i),l=Math.asin(Math.max(-1,Math.min(1,a))),c=Math.atan2(2*(n*s+i*r),1-2*(r*r+s*s));return e?[o,l,c].map(h=>Q_(h)):[o,l,c]},Q_=t=>t*(180/Math.PI),_s=(t,e=4)=>{if(t!==void 0)return Array.isArray(t)?t.map(n=>parseFloat(n.toFixed(e))):t&&parseFloat(t.toFixed(e))},Oo=(t,e,n)=>Array.isArray(t)?t.map(i=>`${_s(i)}`).join(", "):_s(t),ev=t=>!t||t.length!==3?!1:t[0]==t[1]==t[2],As=t=>t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.metallicRoughnessTexture!=null,tv=t=>t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.metallicFactor<1&&As(t),nv=t=>t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.roughnessFactor<1&&As(t),iv=t=>t?!!(As(t)&&!t.occlusionTexture||t.occlusionTexture&&!As(t)):!1,Rr={isNonUniformScale:ev,hasMetallicRoughnessTexture:As,hasFractionalMetallicTexture:tv,hasFractionalRoughnessTexture:nv,missingOcclusion:iv},rv={name:"listView",props:{list:Array,listIcons:Array,model:Object},components:{listItem:$c},data(){return{selectedItem:null}},computed:{},methods:{selectItem(t){t&&(this.selectedItem=t,pa.$emit("selectItem",t))},getIcon(t){return this.listIcons&&(this.listIcons[t]||this.listIcons[0])||""}}},sv={class:"list-view"},ov={class:"items"};function av(t,e,n,i,r,s){const o=Nt("listItem");return se(),le("div",sv,[(se(!0),le(tt,null,Pt(n.list,(a,l)=>(se(),le("div",ov,[ut(o,{item:a,selected:r.selectedItem,icon:s.getIcon(l),model:n.model},null,8,["item","selected","icon","model"])]))),256))])}const jc=dn(rv,[["render",av]]);function lv(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function sh(t,e){if(t&&e){const n=i=>{lv(t,i)||(t.classList?t.classList.add(i):t.className+=" "+i)};[e].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n))}}function Yo(t){for(const e of document==null?void 0:document.styleSheets)try{for(const n of e==null?void 0:e.cssRules)for(const i of n==null?void 0:n.style)if(t.test(i))return{name:i,value:n.style.getPropertyValue(i).trim()}}catch{}return null}function cv(t,e){if(t&&e){const n=i=>{t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n))}}function Of(t){let e={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),e}function Ff(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName("body")[0],r=t.innerWidth||n.clientWidth||i.clientWidth,s=t.innerHeight||n.clientHeight||i.clientHeight;return{width:r,height:s}}function uv(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function hv(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function dv(t,e,n=!0){var i,r,s,o;if(t){const a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Of(t),l=a.height,c=a.width,u=e.offsetHeight,h=e.offsetWidth,d=e.getBoundingClientRect(),f=hv(),_=uv(),x=Ff();let m,p,A="top";d.top+u+l>x.height?(m=d.top+f-l,A="bottom",m<0&&(m=f)):m=u+d.top+f,d.left+c>x.width?p=Math.max(0,d.left+_+h-c):p=d.left+_,t.style.top=m+"px",t.style.left=p+"px",t.style.transformOrigin=A,n&&(t.style.marginTop=A==="bottom"?`calc(${(r=(i=Yo(/-anchor-gutter$/))==null?void 0:i.value)!=null?r:"2px"} * -1)`:(o=(s=Yo(/-anchor-gutter$/))==null?void 0:s.value)!=null?o:"")}}function fv(t,e,n=!0){var i,r,s,o;if(t){const a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Of(t),l=e.offsetHeight,c=e.getBoundingClientRect(),u=Ff();let h,d,f="top";c.top+l+a.height>u.height?(h=-1*a.height,f="bottom",c.top+h<0&&(h=-1*c.top)):h=l,a.width>u.width?d=c.left*-1:c.left+a.width>u.width?d=(c.left+a.width-u.width)*-1:d=0,t.style.top=h+"px",t.style.left=d+"px",t.style.transformOrigin=f,n&&(t.style.marginTop=f==="bottom"?`calc(${(r=(i=Yo(/-anchor-gutter$/))==null?void 0:i.value)!=null?r:"2px"} * -1)`:(o=(s=Yo(/-anchor-gutter$/))==null?void 0:s.value)!=null?o:"")}}function Yc(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Dl(t,e={}){if(Yc(t)){const n=(i,r)=>{var s,o;const a=(s=t==null?void 0:t.$attrs)!=null&&s[i]?[(o=t==null?void 0:t.$attrs)==null?void 0:o[i]]:[];return[r].flat().reduce((l,c)=>{if(c!=null){const u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){const h=Array.isArray(c)?n(i,c):Object.entries(c).map(([d,f])=>i==="style"&&(f||f===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?d:void 0);l=h.length?l.concat(h.filter(d=>!!d)):l}}return l},a)};Object.entries(e).forEach(([i,r])=>{if(r!=null){const s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),r):i==="p-bind"?Dl(t,r):(r=i==="class"?[...new Set(n("class",r))].join(" ").trim():i==="style"?n("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}function Bf(t,e){return Yc(t)?t.matches(e)?t:t.querySelector(e):null}function kf(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function Hf(t,e=[]){const n=kf(t);return n===null?e:Hf(n,e.concat([n]))}function pv(t){let e=[];if(t){let n=Hf(t);const i=/(auto|scroll)/,r=s=>{try{let o=window.getComputedStyle(s,null);return i.test(o.getPropertyValue("overflow"))||i.test(o.getPropertyValue("overflowX"))||i.test(o.getPropertyValue("overflowY"))}catch{return!1}};for(let s of n){let o=s.nodeType===1&&s.dataset.scrollselectors;if(o){let a=o.split(",");for(let l of a){let c=Bf(s,l);c&&r(c)&&e.push(c)}}s.nodeType!==9&&r(s)&&e.push(s)}}return e}function mv(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&kf(t))}function zf(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function gv(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function _v(t,e="",n){Yc(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}function qc(){const t=new Map;return{on(e,n){let i=t.get(e);return i?i.push(n):i=[n],t.set(e,i),this},off(e,n){let i=t.get(e);return i&&i.splice(i.indexOf(n)>>>0,1),this},emit(e,n){let i=t.get(e);i&&i.slice().map(r=>{r(n)})},clear(){t.clear()}}}var vv=Object.defineProperty,oh=Object.getOwnPropertySymbols,xv=Object.prototype.hasOwnProperty,yv=Object.prototype.propertyIsEnumerable,ah=(t,e,n)=>e in t?vv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Sv=(t,e)=>{for(var n in e||(e={}))xv.call(e,n)&&ah(t,n,e[n]);if(oh)for(var n of oh(e))yv.call(e,n)&&ah(t,n,e[n]);return t};function Vf(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Gf(t){return!!(t&&t.constructor&&t.call&&t.apply)}function jt(t){return!Vf(t)}function Pi(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function ri(t,...e){return Gf(t)?t(...e):t}function Wn(t,e=!0){return typeof t=="string"&&(e||t!=="")}function yi(t){return Wn(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Wf(t,e="",n={}){const i=yi(e).split("."),r=i.shift();return r?Pi(t)?Wf(ri(t[Object.keys(t).find(s=>yi(s)===r)||""],n),i.join("."),n):void 0:ri(t,n)}function Xf(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function $f(t){return jt(t)&&!isNaN(t)}function ti(t,e){if(e){const n=e.test(t);return e.lastIndex=0,n}return!1}function Mv(...t){const e=(n={},i={})=>{const r=Sv({},n);return Object.keys(i).forEach(s=>{Pi(i[s])&&s in n&&Pi(n[s])?r[s]=e(n[s],i[s]):r[s]=i[s]}),r};return t.reduce((n,i,r)=>r===0?i:e(n,i),{})}function vs(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function jf(t){return Wn(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,n)=>n===0?e:"-"+e.toLowerCase()).toLowerCase():t}function lh(t){return Wn(t)?t.replace(/[A-Z]/g,(e,n)=>n===0?e:"."+e.toLowerCase()).toLowerCase():t}var eo={};function bv(t="pui_id_"){return eo.hasOwnProperty(t)||(eo[t]=0),eo[t]++,`${t}${eo[t]}`}function Ev(){let t=[];const e=(o,a,l=999)=>{const c=r(o,a,l),u=c.value+(c.key===o?0:l)+1;return t.push({key:o,value:u}),u},n=o=>{t=t.filter(a=>a.value!==o)},i=(o,a)=>r(o).value,r=(o,a,l=0)=>[...t].reverse().find(c=>!0)||{key:o,value:l},s=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:s,set:(o,a,l)=>{a&&(a.style.zIndex=String(e(o,!0,l)))},clear:o=>{o&&(n(s(o)),o.style.zIndex="")},getCurrent:o=>i(o)}}var Na=Ev();function ws(t){"@babel/helpers - typeof";return ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ws(t)}function Tv(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Av(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Cv(i.key),i)}}function wv(t,e,n){return e&&Av(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Cv(t){var e=Rv(t,"string");return ws(e)=="symbol"?e:e+""}function Rv(t,e){if(ws(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(ws(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Pv=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};Tv(this,t),this.element=e,this.listener=n}return wv(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=pv(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function Lv(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return bv(t)}var Dv=qc(),Yf={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=zf()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function Iv(t,e,n,i,r,s){return s.inline?bs(t.$slots,"default",{key:0}):r.mounted?(se(),Hn(_g,{key:1,to:n.appendTo},[bs(t.$slots,"default")],8,["to"])):Ie("",!0)}Yf.render=Iv;var Nv=Object.defineProperty,Uv=Object.defineProperties,Ov=Object.getOwnPropertyDescriptors,qo=Object.getOwnPropertySymbols,qf=Object.prototype.hasOwnProperty,Kf=Object.prototype.propertyIsEnumerable,ch=(t,e,n)=>e in t?Nv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Jr=(t,e)=>{for(var n in e||(e={}))qf.call(e,n)&&ch(t,n,e[n]);if(qo)for(var n of qo(e))Kf.call(e,n)&&ch(t,n,e[n]);return t},Ua=(t,e)=>Uv(t,Ov(e)),Qr=(t,e)=>{var n={};for(var i in t)qf.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&qo)for(var i of qo(t))e.indexOf(i)<0&&Kf.call(t,i)&&(n[i]=t[i]);return n},Fv=qc(),On=Fv;function uh(t,e){Xf(t)?t.push(...e||[]):Pi(t)&&Object.assign(t,e)}function Bv(t){return Pi(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function hh(t,e=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(i=>e.endsWith(i))?t:`${t}`.trim().split(" ").map(s=>$f(s)?`${s}px`:s).join(" ")}function kv(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Il(t="",e=""){return kv(`${Wn(t,!1)&&Wn(e,!1)?`${t}-`:t}${e}`)}function Zf(t="",e=""){return`--${Il(t,e)}`}function Jf(t,e="",n="",i=[],r){if(Wn(t)){const s=/{([^}]*)}/g,o=t.trim();if(ti(o,s)){const a=o.replaceAll(s,u=>{const d=u.replace(/{|}/g,"").split(".").filter(f=>!i.some(_=>ti(f,_)));return`var(${Zf(n,jf(d.join("-")))}${jt(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return ti(a.replace(c,"0"),l)?`calc(${a})`:a}return hh(o,e)}else if($f(t))return hh(t,e)}function Hv(t,e,n){Wn(e,!1)&&t.push(`${e}:${n};`)}function as(t,e){return t?`${t}{${e}}`:""}var Oa=(...t)=>zv(Mt.getTheme(),...t),zv=(t={},e,n,i="variable")=>{if(e){const{variable:r,options:s}=Mt.defaults||{},{prefix:o,transform:a}=(t==null?void 0:t.options)||s||{},c=ti(e,/{([^}]*)}/g)?e:`{${e}}`;return i==="value"||a==="strict"?Mt.getTokenValue(e):Jf(c,void 0,o,[r.excludedKeyRegex],n)}return""};function Vv(t,e={}){const n=Mt.defaults.variable,{prefix:i=n.prefix,selector:r=n.selector,excludedKeyRegex:s=n.excludedKeyRegex}=e,o=(c,u="")=>Object.entries(c).reduce((h,[d,f])=>{const _=ti(d,s)?Il(u):Il(u,jf(d)),x=Bv(f);if(Pi(x)){const{variables:m,tokens:p}=o(x,_);uh(h.tokens,p),uh(h.variables,m)}else h.tokens.push((i?_.replace(`${i}-`,""):_).replaceAll("-",".")),Hv(h.variables,Zf(_),Jf(x,_,i,[s]));return h},{variables:[],tokens:[]}),{variables:a,tokens:l}=o(t,i);return{value:a,tokens:l,declarations:a.join(""),css:as(r,a.join(""))}}var Tn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){const e=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[t].flat().map(n=>{var i;return(i=e.map(r=>r.resolve(n)).find(r=>r.matched))!=null?i:this.rules.custom.resolve(n)})}},_toVariables(t,e){return Vv(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:n,set:i,defaults:r}){var s,o,a,l;const{preset:c,options:u}=e;let h,d,f,_;if(jt(c)){const{primitive:x,semantic:m}=c,p=m||{},{colorScheme:A}=p,T=Qr(p,["colorScheme"]),E=A||{},{dark:P}=E,w=Qr(E,["dark"]),C=jt(x)?this._toVariables({primitive:x},u):{},U=jt(T)?this._toVariables({semantic:T},u):{},y=jt(w)?this._toVariables({light:w},u):{},b=jt(P)?this._toVariables({dark:P},u):{},[R,I]=[(s=C.declarations)!=null?s:"",C.tokens],[W,Q]=[(o=U.declarations)!=null?o:"",U.tokens||[]],[J,K]=[(a=y.declarations)!=null?a:"",y.tokens||[]],[Z,V]=[(l=b.declarations)!=null?l:"",b.tokens||[]];h=this.transformCSS(t,R,"light","variable",u,i,r),d=I;const me=this.transformCSS(t,`${W}${J}color-scheme:light`,"light","variable",u,i,r),xe=this.transformCSS(t,`${Z}color-scheme:dark`,"dark","variable",u,i,r);f=`${me}${xe}`,_=[...new Set([...Q,...K,...V])]}return{primitive:{css:h,tokens:d},semantic:{css:f,tokens:_}}},getPreset({name:t="",preset:e={},options:n,params:i,set:r,defaults:s,selector:o}){var a,l,c;const u=t.replace("-directive",""),h=e,{colorScheme:d}=h,f=Qr(h,["colorScheme"]),_=d||{},{dark:x}=_,m=Qr(_,["dark"]),p=jt(f)?this._toVariables({[u]:f},n):{},A=jt(m)?this._toVariables({[u]:m},n):{},T=jt(x)?this._toVariables({[u]:x},n):{},[E,P]=[(a=p.declarations)!=null?a:"",p.tokens||[]],[w,C]=[(l=A.declarations)!=null?l:"",A.tokens||[]],[U,y]=[(c=T.declarations)!=null?c:"",T.tokens||[]],b=[...new Set([...P,...C,...y])],R=this.transformCSS(u,`${E}${w}`,"light","variable",n,r,s,o),I=this.transformCSS(u,U,"dark","variable",n,r,s,o);return{css:`${R}${I}`,tokens:b}},getPresetC({name:t="",theme:e={},params:n,set:i,defaults:r}){var s;const{preset:o,options:a}=e,l=(s=o==null?void 0:o.components)==null?void 0:s[t];return this.getPreset({name:t,preset:l,options:a,params:n,set:i,defaults:r})},getPresetD({name:t="",theme:e={},params:n,set:i,defaults:r}){var s;const o=t.replace("-directive",""),{preset:a,options:l}=e,c=(s=a==null?void 0:a.directives)==null?void 0:s[o];return this.getPreset({name:o,preset:c,options:l,params:n,set:i,defaults:r})},getColorSchemeOption(t,e){var n;return this.regex.resolve((n=t.darkModeSelector)!=null?n:e.options.darkModeSelector)},getLayerOrder(t,e={},n,i){const{cssLayer:r}=e;return r?`@layer ${ri(r.order||"primeui",n)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:n,props:i={},set:r,defaults:s}){const o=this.getCommon({name:t,theme:e,params:n,set:r,defaults:s}),a=Object.entries(i).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(o||{}).reduce((l,[c,u])=>{if(u!=null&&u.css){const h=vs(u==null?void 0:u.css),d=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${d}" ${a}>${h}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:e={},params:n,props:i={},set:r,defaults:s}){var o;const a={name:t,theme:e,params:n,set:r,defaults:s},l=(o=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:o.css,c=Object.entries(i).reduce((u,[h,d])=>u.push(`${h}="${d}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${vs(l)}</style>`:""},createTokens(t={},e,n="",i="",r={}){return Object.entries(t).forEach(([s,o])=>{const a=ti(s,e.variable.excludedKeyRegex)?n:n?`${n}.${lh(s)}`:lh(s),l=i?`${i}.${s}`:s;Pi(o)?this.createTokens(o,e,a,l,r):(r[a]||(r[a]={paths:[],computed(c,u={}){if(c){const h=this.paths.find(d=>d.scheme===c)||this.paths.find(d=>d.scheme==="none");return h==null?void 0:h.computed(c,u.binding)}return this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),r[a].paths.push({path:l,value:o,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){const h=/{([^}]*)}/g;let d=o;if(u.name=this.path,u.binding||(u.binding={}),ti(o,h)){const _=o.trim().replaceAll(h,p=>{var A,T;const E=p.replace(/{|}/g,"");return(T=(A=r[E])==null?void 0:A.computed(c,u))==null?void 0:T.value}),x=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,m=/var\([^)]+\)/g;d=ti(_.replace(m,"0"),x)?`calc(${_})`:_}return Vf(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:d.includes("undefined")?void 0:d}}}))}),r},getTokenValue(t,e,n){var i;const s=(l=>l.split(".").filter(u=>!ti(u.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(e),o=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(i=t[s])==null?void 0:i.computed(o)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{const u=c,{colorScheme:h}=u,d=Qr(u,["colorScheme"]);return l[h]=d,l},void 0)},transformCSS(t,e,n,i,r={},s,o,a){if(jt(e)){const{cssLayer:l}=r;if(i!=="style"){const c=this.getColorSchemeOption(r,o),u=a?as(a,e):e;e=n==="dark"?c.reduce((h,{selector:d})=>(jt(d)&&(h+=d.includes("[CSS]")?d.replace("[CSS]",u):as(d,u)),h),""):as(a??":root",e)}if(l){const c={name:"primeui",order:"primeui"};Pi(l)&&(c.name=ri(l.name,{name:t,type:i})),jt(c.name)&&(e=as(`@layer ${c.name}`,e),s==null||s.layerNames(c.name))}return e}return""}},Mt={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){const{theme:e}=t;e&&(this._theme=Ua(Jr({},e),{options:Jr(Jr({},this.defaults.options),e.options)}),this._tokens=Tn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),On.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ua(Jr({},this.theme),{preset:t}),this._tokens=Tn.createTokens(t,this.defaults),this.clearLoadedStyleNames(),On.emit("preset:change",t),On.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ua(Jr({},this.theme),{options:t}),this.clearLoadedStyleNames(),On.emit("options:change",t),On.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Tn.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return Tn.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Tn.getPresetC(n)},getDirective(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Tn.getPresetD(n)},getCustomPreset(t="",e,n,i){const r={name:t,preset:e,options:this.options,selector:n,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Tn.getPreset(r)},getLayerOrderCSS(t=""){return Tn.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,n="style",i){return Tn.transformCSS(t,e,i,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,n={}){return Tn.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,n={}){return Tn.getStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),On.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&On.emit("theme:load"))}},es={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Cs(t){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cs(t)}function dh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function fh(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dh(Object(n),!0).forEach(function(i){Gv(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dh(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Gv(t,e,n){return(e=Wv(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Wv(t){var e=Xv(t,"string");return Cs(e)=="symbol"?e:e+""}function Xv(t,e){if(Cs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Cs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $v(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Df()?Fc(t):e?t():ef(t)}var jv=0;function Yv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Do(!1),i=Do(t),r=Do(null),s=zf()?window.document:void 0,o=e.document,a=o===void 0?s:o,l=e.immediate,c=l===void 0?!0:l,u=e.manual,h=u===void 0?!1:u,d=e.name,f=d===void 0?"style_".concat(++jv):d,_=e.id,x=_===void 0?void 0:_,m=e.media,p=m===void 0?void 0:m,A=e.nonce,T=A===void 0?void 0:A,E=e.first,P=E===void 0?!1:E,w=e.onMounted,C=w===void 0?void 0:w,U=e.onUpdated,y=U===void 0?void 0:U,b=e.onLoad,R=b===void 0?void 0:b,I=e.props,W=I===void 0?{}:I,Q=function(){},J=function(V){var me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var xe=fh(fh({},W),me),Te=xe.name||f,Ue=xe.id||x,ot=xe.nonce||T;r.value=a.querySelector('style[data-primevue-style-id="'.concat(Te,'"]'))||a.getElementById(Ue)||a.createElement("style"),r.value.isConnected||(i.value=V||t,Dl(r.value,{type:"text/css",id:Ue,media:p,nonce:ot}),P?a.head.prepend(r.value):a.head.appendChild(r.value),_v(r.value,"data-primevue-style-id",Te),Dl(r.value,xe),r.value.onload=function(lt){return R==null?void 0:R(lt,{name:Te})},C==null||C(Te)),!n.value&&(Q=bi(i,function(lt){r.value.textContent=lt,y==null||y(Te)},{immediate:!0}),n.value=!0)}},K=function(){!a||!n.value||(Q(),mv(r.value)&&a.head.removeChild(r.value),n.value=!1)};return c&&!h&&$v(J),{id:x,name:f,el:r,css:i,unload:K,load:J,isLoaded:Dc(n)}}function Rs(t){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rs(t)}function ph(t,e){return Jv(t)||Zv(t,e)||Kv(t,e)||qv()}function qv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kv(t,e){if(t){if(typeof t=="string")return mh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mh(t,e):void 0}}function mh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function Zv(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(l=(i=s.call(n)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function Jv(t){if(Array.isArray(t))return t}function gh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Fa(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gh(Object(n),!0).forEach(function(i){Qv(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gh(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Qv(t,e,n){return(e=e0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e0(t){var e=t0(t,"string");return Rs(e)=="symbol"?e:e+""}function t0(t,e){if(Rs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Rs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var n0=function(e){var n=e.dt;return`
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(n("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(n("icon.size"),`;
}

.p-icon {
    width: `).concat(n("icon.size"),`;
    height: `).concat(n("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"),`;
    color: `).concat(n("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},i0=function(e){var n=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},r0={},s0={},cn={name:"base",css:i0,theme:n0,classes:r0,inlineStyles:s0,load:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(s){return s},r=i(ri(e,{dt:Oa}));return r?Yv(vs(r),Fa({name:this.name},n)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.theme,n,function(i){return Mt.transformCSS(n.name||e.name,i)})},getCommonTheme:function(e){return Mt.getCommon(this.name,e)},getComponentTheme:function(e){return Mt.getComponent(this.name,e)},getDirectiveTheme:function(e){return Mt.getDirective(this.name,e)},getPresetTheme:function(e,n,i){return Mt.getCustomPreset(this.name,e,n,i)},getLayerOrderThemeCSS:function(){return Mt.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var i=ri(this.css,{dt:Oa}),r=vs("".concat(i).concat(e)),s=Object.entries(n).reduce(function(o,a){var l=ph(a,2),c=l[0],u=l[1];return o.push("".concat(c,'="').concat(u,'"'))&&o},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(s,">").concat(r,"</style>")}return""},getCommonThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Mt.getCommonStyleSheet(this.name,e,n)},getThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=[Mt.getStyleSheet(this.name,e,n)];if(this.theme){var r=this.name==="base"?"global-style":"".concat(this.name,"-style"),s=ri(this.theme,{dt:Oa}),o=vs(Mt.transformCSS(r,s)),a=Object.entries(n).reduce(function(l,c){var u=ph(c,2),h=u[0],d=u[1];return l.push("".concat(h,'="').concat(d,'"'))&&l},[]).join(" ");i.push('<style type="text/css" data-primevue-style-id="'.concat(r,'" ').concat(a,">").concat(o,"</style>"))}return i.join("")},extend:function(e){return Fa(Fa({},this),{},{css:void 0,theme:void 0},e)}},_h=cn.extend({name:"common"});function Ps(t){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ps(t)}function o0(t){return tp(t)||a0(t)||ep(t)||Qf()}function a0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function to(t,e){return tp(t)||l0(t,e)||ep(t,e)||Qf()}function Qf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ep(t,e){if(t){if(typeof t=="string")return vh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vh(t,e):void 0}}function vh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function l0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=s.call(n)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function tp(t){if(Array.isArray(t))return t}function xh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xh(Object(n),!0).forEach(function(i){Fo(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xh(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Fo(t,e,n){return(e=c0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c0(t){var e=u0(t,"string");return Ps(e)=="symbol"?e:e+""}function u0(t,e){if(Ps(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Ps(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var h0={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var n=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return n._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,beforeCreate:function(){var e,n,i,r,s,o,a,l,c,u,h,d=(e=this.pt)===null||e===void 0?void 0:e._usept,f=d?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,_=d?(i=this.pt)===null||i===void 0||(i=i.value)===null||i===void 0?void 0:i[this.$.type.name]:this.pt;(r=_||f)===null||r===void 0||(r=r.hooks)===null||r===void 0||(s=r.onBeforeCreate)===null||s===void 0||s.call(r);var x=(o=this.$primevueConfig)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o._usept,m=x?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,p=x?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=p||m)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(h=u.onBeforeCreate)===null||h===void 0||h.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this.rootEl=Bf(this.$el,'[data-pc-name="'.concat(yi(this.$.type.name),'"]')),this.rootEl&&(this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=et({name:this.$.type.name},this.$params)),this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),i=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),i==null||i()}},_mergeProps:function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return Gf(e)?e.apply(void 0,i):Zt.apply(void 0,i)},_loadStyles:function(){var e=this,n=function(){es.isStyleNameLoaded("base")||(cn.loadCSS(e.$styleOptions),e._loadGlobalStyles(),es.setLoadedStyleName("base")),e._loadThemeStyles()};n(),this._themeChangeListener(n)},_loadCoreStyles:function(){var e,n;!es.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(_h.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),es.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);jt(e)&&cn.load(e,et({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,n;if(!this.isUnstyled){if(!Mt.isStyleNameLoaded("common")){var i,r,s=((i=this.$style)===null||i===void 0||(r=i.getCommonTheme)===null||r===void 0?void 0:r.call(i))||{},o=s.primitive,a=s.semantic;cn.load(o==null?void 0:o.css,et({name:"primitive-variables"},this.$styleOptions)),cn.load(a==null?void 0:a.css,et({name:"semantic-variables"},this.$styleOptions)),cn.loadTheme(et({name:"global-style"},this.$styleOptions)),Mt.setLoadedStyleName("common")}if(!Mt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var l,c,u,h,d=((l=this.$style)===null||l===void 0||(c=l.getComponentTheme)===null||c===void 0?void 0:c.call(l))||{},f=d.css;(u=this.$style)===null||u===void 0||u.load(f,et({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(et({name:"".concat(this.$style.name,"-style")},this.$styleOptions)),Mt.setLoadedStyleName(this.$style.name)}if(!Mt.isStyleNameLoaded("layer-order")){var _,x,m=(_=this.$style)===null||_===void 0||(x=_.getLayerOrderThemeCSS)===null||x===void 0?void 0:x.call(_);cn.load(m,et({name:"layer-order",first:!0},this.$styleOptions)),Mt.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var n,i,r,s=((n=this.$style)===null||n===void 0||(i=n.getPresetTheme)===null||i===void 0?void 0:i.call(n,e,"[".concat(this.$attrSelector,"]")))||{},o=s.css,a=(r=this.$style)===null||r===void 0?void 0:r.load(o,et({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};es.clearLoadedStyleNames(),On.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Wf(e,n,i)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,o=/./g.test(i)&&!!r[i.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,h=u===void 0?!1:u,d=s?o?this._useGlobalPT(this._getPTClassValue,i,r):this._useDefaultPT(this._getPTClassValue,i,r):void 0,f=o?void 0:this._getPTSelf(n,this._getPTClassValue,i,et(et({},r),{},{global:d||{}})),_=this._getPTDatasets(i);return c||!c&&f?h?this._mergeProps(h,d,f,_):et(et(et({},d),f),_):et(et({},f),_)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return Zt(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(i)),this._usePT.apply(this,[this.$_attrsPT].concat(i)))},_getPTDatasets:function(){var e,n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",s=i==="root"&&jt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return i!=="transition"&&et(et({},i==="root"&&et(Fo({},"".concat(r,"name"),yi(s?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),s&&Fo({},"".concat(r,"extend"),yi(this.$.type.name)))),{},Fo({},"".concat(r,"section"),yi(i)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Wn(e)||Xf(e)?{class:e}:e},_getPT:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=r?r(a):a,h=yi(i),d=yi(n.$name);return(l=c?h!==d?u==null?void 0:u[h]:void 0:u==null?void 0:u[h])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:s(e.originalValue),value:s(e.value)}:s(e,!0)},_usePT:function(e,n,i,r){var s=function(x){return n(x,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var o,a=e._usept||((o=this.$primevueConfig)===null||o===void 0?void 0:o.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,h=u===void 0?!1:u,d=s(e.originalValue),f=s(e.value);return d===void 0&&f===void 0?void 0:Wn(f)?f:Wn(d)?d:c||!c&&f?h?this._mergeProps(h,d,f):et(et({},d),f):f}return s(e)},_useGlobalPT:function(e,n,i){return this._usePT(this.globalPT,e,n,i)},_useDefaultPT:function(e,n,i){return this._usePT(this.defaultPT,e,n,i)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,et(et({},this.$params),n))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Zt(this.$_attrsWithoutPT,this.ptm(e,n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,et({instance:this},i),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,et(et({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var r=this._getOptionValue(this.$style.inlineStyles,e,et(et({},this.$params),i)),s=this._getOptionValue(_h.inlineStyles,e,et(et({},this.$params),i));return[s,r]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(i){return ri(i,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(i){return n._getOptionValue(i,n.$name,et({},n.$params))||ri(i,et({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return et(et({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=to(e,1),i=n[0];return i==null?void 0:i.startsWith("pt:")}).reduce(function(e,n){var i=to(n,2),r=i[0],s=i[1],o=r.split(":"),a=o0(o),l=a.slice(1);return l==null||l.reduce(function(c,u,h,d){return!c[u]&&(c[u]=h===d.length-1?s:{}),c[u]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=to(e,1),i=n[0];return!(i!=null&&i.startsWith("pt:"))}).reduce(function(e,n){var i=to(n,2),r=i[0],s=i[1];return e[r]=s,e},{})},$attrSelector:function(){return Lv("pc")}}},d0=function(e){var n=e.dt;return`
.p-colorpicker {
    display: inline-block;
    position: relative;
}

.p-colorpicker-dragging {
    cursor: pointer;
}

.p-colorpicker-preview {
    width: `.concat(n("colorpicker.preview.width"),`;
    height: `).concat(n("colorpicker.preview.height"),`;
    padding: 0;
    border: 0 none;
    border-radius: `).concat(n("colorpicker.preview.border.radius"),`;
    transition: background `).concat(n("colorpicker.transition.duration"),", color ").concat(n("colorpicker.transition.duration"),", border-color ").concat(n("colorpicker.transition.duration"),", outline-color ").concat(n("colorpicker.transition.duration"),", box-shadow ").concat(n("colorpicker.transition.duration"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-colorpicker-preview:enabled:focus-visible {
    border-color: `).concat(n("colorpicker.preview.focus.border.color"),`;
    box-shadow: `).concat(n("colorpicker.preview.focus.ring.shadow"),`;
    outline: `).concat(n("colorpicker.preview.focus.ring.width")," ").concat(n("colorpicker.preview.focus.ring.style")," ").concat(n("colorpicker.preview.focus.ring.color"),`;
    outline-offset: `).concat(n("colorpicker.preview.focus.ring.offset"),`;
}

.p-colorpicker-panel {
    background: `).concat(n("colorpicker.panel.background"),`;
    border: 1px solid `).concat(n("colorpicker.panel.border.color"),`;
    border-radius: `).concat(n("colorpicker.panel.border.radius"),`;
    box-shadow: `).concat(n("colorpicker.panel.shadow"),`;
    width: 193px;
    height: 166px;
    position: absolute;
    top: 0;
    left: 0;
}

.p-colorpicker-panel-inline {
    box-shadow: none;
    position: static;
}

.p-colorpicker-content {
    position: relative;
}

.p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.p-colorpicker-color-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-color-handle {
    position: absolute;
    top: 0px;
    left: 150px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    margin: -5px 0 0 -5px;
    cursor: pointer;
    opacity: 0.85;
    border-color: `).concat(n("colorpicker.handle.color"),`;
}

.p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: 0.85;
    background: linear-gradient(0deg,
        red 0,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        red);
}

.p-colorpicker-hue-handle {
    position: absolute;
    top: 150px;
    left: 0px;
    width: 21px;
    margin-left: -2px;
    margin-top: -5px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    opacity: 0.85;
    cursor: pointer;
    border-color: `).concat(n("colorpicker.handle.color"),`;
}
`)},f0={root:"p-colorpicker p-component",preview:function(e){var n=e.props;return["p-colorpicker-preview",{"p-disabled":n.disabled}]},panel:function(e){var n=e.props;return["p-colorpicker-panel",{"p-colorpicker-panel-inline":n.inline,"p-disabled":n.disabled}]},colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},p0=cn.extend({name:"colorpicker",theme:d0,classes:f0}),m0={name:"BaseColorPicker",extends:h0,props:{modelValue:{type:null,default:null},defaultColor:{type:null,default:"ff0000"},inline:{type:Boolean,default:!1},format:{type:String,default:"hex"},disabled:{type:Boolean,default:!1},tabindex:{type:String,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},inputId:{type:String,default:null},panelClass:null},style:p0,provide:function(){return{$pcColorPicker:this,$parentInstance:this}}},np={name:"ColorPicker",extends:m0,inheritAttrs:!1,emits:["update:modelValue","change","show","hide"],data:function(){return{overlayVisible:!1}},hsbValue:null,outsideClickListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,scrollHandler:null,resizeListener:null,hueDragging:null,colorDragging:null,selfUpdate:null,picker:null,colorSelector:null,colorHandle:null,hueView:null,hueHandle:null,watch:{modelValue:{immediate:!0,handler:function(e){this.hsbValue=this.toHSB(e),this.selfUpdate?this.selfUpdate=!1:this.updateUI()}}},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindDragListeners(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.picker&&this.autoZIndex&&Na.clear(this.picker),this.clearRefs()},mounted:function(){this.updateUI()},methods:{pickColor:function(e){var n=this.colorSelector.getBoundingClientRect(),i=n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),r=n.left+document.body.scrollLeft,s=Math.floor(100*Math.max(0,Math.min(150,(e.pageX||e.changedTouches[0].pageX)-r))/150),o=Math.floor(100*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-i)))/150);this.hsbValue=this.validateHSB({h:this.hsbValue.h,s,b:o}),this.selfUpdate=!0,this.updateColorHandle(),this.updateInput(),this.updateModel(e)},pickHue:function(e){var n=this.hueView.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);this.hsbValue=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-n)))/150),s:100,b:100}),this.selfUpdate=!0,this.updateColorSelector(),this.updateHue(),this.updateModel(e),this.updateInput()},updateModel:function(e){var n=this.modelValue;switch(this.format){case"hex":n=this.HSBtoHEX(this.hsbValue);break;case"rgb":n=this.HSBtoRGB(this.hsbValue);break;case"hsb":n=this.hsbValue;break}this.$emit("update:modelValue",n),this.$emit("change",{event:e,value:n})},updateColorSelector:function(){if(this.colorSelector){var e=this.validateHSB({h:this.hsbValue.h,s:100,b:100});this.colorSelector.style.backgroundColor="#"+this.HSBtoHEX(e)}},updateColorHandle:function(){this.colorHandle&&(this.colorHandle.style.left=Math.floor(150*this.hsbValue.s/100)+"px",this.colorHandle.style.top=Math.floor(150*(100-this.hsbValue.b)/100)+"px")},updateHue:function(){this.hueHandle&&(this.hueHandle.style.top=Math.floor(150-150*this.hsbValue.h/360)+"px")},updateInput:function(){this.$refs.input&&(this.$refs.input.style.backgroundColor="#"+this.HSBtoHEX(this.hsbValue))},updateUI:function(){this.updateHue(),this.updateColorHandle(),this.updateInput(),this.updateColorSelector()},validateHSB:function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},validateRGB:function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},validateHEX:function(e){var n=6-e.length;if(n>0){for(var i=[],r=0;r<n;r++)i.push("0");i.push(e),e=i.join("")}return e},HEXtoRGB:function(e){var n=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:n>>16,g:(n&65280)>>8,b:n&255}},HEXtoHSB:function(e){return this.RGBtoHSB(this.HEXtoRGB(e))},RGBtoHSB:function(e){var n={h:0,s:0,b:0},i=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),s=r-i;return n.b=r,n.s=r!==0?255*s/r:0,n.s!==0?e.r===r?n.h=(e.g-e.b)/s:e.g===r?n.h=2+(e.b-e.r)/s:n.h=4+(e.r-e.g)/s:n.h=-1,n.h*=60,n.h<0&&(n.h+=360),n.s*=100/255,n.b*=100/255,n},HSBtoRGB:function(e){var n={r:null,g:null,b:null},i=Math.round(e.h),r=Math.round(e.s*255/100),s=Math.round(e.b*255/100);if(r===0)n={r:s,g:s,b:s};else{var o=s,a=(255-r)*s/255,l=(o-a)*(i%60)/60;i===360&&(i=0),i<60?(n.r=o,n.b=a,n.g=a+l):i<120?(n.g=o,n.b=a,n.r=o-l):i<180?(n.g=o,n.r=a,n.b=a+l):i<240?(n.b=o,n.r=a,n.g=o-l):i<300?(n.b=o,n.g=a,n.r=a+l):i<360?(n.r=o,n.g=a,n.b=o-l):(n.r=0,n.g=0,n.b=0)}return{r:Math.round(n.r),g:Math.round(n.g),b:Math.round(n.b)}},RGBtoHEX:function(e){var n=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var i in n)n[i].length===1&&(n[i]="0"+n[i]);return n.join("")},HSBtoHEX:function(e){return this.RGBtoHEX(this.HSBtoRGB(e))},toHSB:function(e){var n;if(e)switch(this.format){case"hex":n=this.HEXtoHSB(e);break;case"rgb":n=this.RGBtoHSB(e);break;case"hsb":n=e;break}else n=this.HEXtoHSB(this.defaultColor);return n},onOverlayEnter:function(e){this.updateUI(),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&Na.set("overlay",e,this.baseZIndex,this.$primevue.config.zIndex.overlay),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.clearRefs(),this.$emit("hide")},onOverlayAfterLeave:function(e){this.autoZIndex&&Na.clear(e)},alignOverlay:function(){this.appendTo==="self"?fv(this.picker,this.$refs.input):dv(this.picker,this.$refs.input)},onInputClick:function(){this.disabled||(this.overlayVisible=!this.overlayVisible)},onInputKeydown:function(e){switch(e.code){case"Space":this.overlayVisible=!this.overlayVisible,e.preventDefault();break;case"Escape":case"Tab":this.overlayVisible=!1;break}},onColorMousedown:function(e){this.disabled||(this.bindDragListeners(),this.onColorDragStart(e))},onColorDragStart:function(e){this.disabled||(this.colorDragging=!0,this.pickColor(e),this.$el.setAttribute("p-colorpicker-dragging","true"),!this.isUnstyled&&sh(this.$el,"p-colorpicker-dragging"),e.preventDefault())},onDrag:function(e){this.colorDragging&&(this.pickColor(e),e.preventDefault()),this.hueDragging&&(this.pickHue(e),e.preventDefault())},onDragEnd:function(){this.colorDragging=!1,this.hueDragging=!1,this.$el.setAttribute("p-colorpicker-dragging","false"),!this.isUnstyled&&cv(this.$el,"p-colorpicker-dragging"),this.unbindDragListeners()},onHueMousedown:function(e){this.disabled||(this.bindDragListeners(),this.onHueDragStart(e))},onHueDragStart:function(e){this.disabled||(this.hueDragging=!0,this.pickHue(e),!this.isUnstyled&&sh(this.$el,"p-colorpicker-dragging"))},isInputClicked:function(e){return this.$refs.input&&this.$refs.input.isSameNode(e.target)},bindDragListeners:function(){this.bindDocumentMouseMoveListener(),this.bindDocumentMouseUpListener()},unbindDragListeners:function(){this.unbindDocumentMouseMoveListener(),this.unbindDocumentMouseUpListener()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.picker&&!e.picker.contains(n.target)&&!e.isInputClicked(n)&&(e.overlayVisible=!1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Pv(this.$refs.container,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!gv()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentMouseMoveListener:function(){this.documentMouseMoveListener||(this.documentMouseMoveListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.documentMouseMoveListener))},unbindDocumentMouseMoveListener:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null)},bindDocumentMouseUpListener:function(){this.documentMouseUpListener||(this.documentMouseUpListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseUpListener:function(){this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},pickerRef:function(e){this.picker=e},colorSelectorRef:function(e){this.colorSelector=e},colorHandleRef:function(e){this.colorHandle=e},hueViewRef:function(e){this.hueView=e},hueHandleRef:function(e){this.hueHandle=e},clearRefs:function(){this.picker=null,this.colorSelector=null,this.colorHandle=null,this.hueView=null,this.hueHandle=null},onOverlayClick:function(e){Dv.emit("overlay-click",{originalEvent:e,target:this.$el})}},components:{Portal:Yf}},g0=["id","tabindex","disabled"];function _0(t,e,n,i,r,s){var o=Nt("Portal");return se(),le("div",Zt({ref:"container",class:t.cx("root")},t.ptmi("root")),[t.inline?Ie("",!0):(se(),le("input",Zt({key:0,ref:"input",id:t.inputId,type:"text",class:t.cx("preview"),readonly:"readonly",tabindex:t.tabindex,disabled:t.disabled,onClick:e[0]||(e[0]=function(){return s.onInputClick&&s.onInputClick.apply(s,arguments)}),onKeydown:e[1]||(e[1]=function(){return s.onInputKeydown&&s.onInputKeydown.apply(s,arguments)})},t.ptm("preview")),null,16,g0)),ut(o,{appendTo:t.appendTo,disabled:t.inline},{default:rr(function(){return[ut(Gc,Zt({name:"p-connected-overlay",onEnter:s.onOverlayEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},t.ptm("transition")),{default:rr(function(){return[t.inline||r.overlayVisible?(se(),le("div",Zt({key:0,ref:s.pickerRef,class:[t.cx("panel"),t.panelClass],onClick:e[10]||(e[10]=function(){return s.onOverlayClick&&s.onOverlayClick.apply(s,arguments)})},t.ptm("panel")),[_e("div",Zt({class:t.cx("content")},t.ptm("content")),[_e("div",Zt({ref:s.colorSelectorRef,class:t.cx("colorSelector"),onMousedown:e[2]||(e[2]=function(a){return s.onColorMousedown(a)}),onTouchstart:e[3]||(e[3]=function(a){return s.onColorDragStart(a)}),onTouchmove:e[4]||(e[4]=function(a){return s.onDrag(a)}),onTouchend:e[5]||(e[5]=function(a){return s.onDragEnd()})},t.ptm("colorSelector")),[_e("div",Zt({class:t.cx("colorBackground")},t.ptm("colorBackground")),[_e("div",Zt({ref:s.colorHandleRef,class:t.cx("colorHandle")},t.ptm("colorHandle")),null,16)],16)],16),_e("div",Zt({ref:s.hueViewRef,class:t.cx("hue"),onMousedown:e[6]||(e[6]=function(a){return s.onHueMousedown(a)}),onTouchstart:e[7]||(e[7]=function(a){return s.onHueDragStart(a)}),onTouchmove:e[8]||(e[8]=function(a){return s.onDrag(a)}),onTouchend:e[9]||(e[9]=function(a){return s.onDragEnd()})},t.ptm("hue")),[_e("div",Zt({ref:s.hueHandleRef,class:t.cx("hueHandle")},t.ptm("hueHandle")),null,16)],16)],16)],16)):Ie("",!0)]}),_:1},16,["onEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo","disabled"])],16)}np.render=_0;const v0={name:"editView",props:{property:String,val:[Number,Object],label:String,type:String,units:{type:String,default:""},showUnits:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data(){return{currentVal:0,editing:!1}},mounted(){this.currentVal=this.val},watch:{val(){this.currentVal=this.val}},computed:{v_units(){return this.showUnits&&this.units||""},valueArray(){return this.currentVal&&Array.isArray(this.currentVal)?this.currentVal:[this.currentVal]},formattedValue(){return Oo(this.val)},isString(){return this.type&&this.type==="String"}},methods:{toggleEdit(){this.editing=!this.editing},saveEdit(){this.$emit("changedValue",{value:this.currentVal,property:this.property}),this.editing=!1},cancelEdit(){this.currentValue=this.val,this.editing=!1},changeValue(t,e){const n=e.target.value;Array.isArray(this.currentVal)?this.currentVal[t]=this.isString?n:parseFloat(n):this.currentVal=this.isString?n:parseFloat(n)}}},Kc=t=>($r("data-v-4e5c4b3d"),t=t(),jr(),t),x0={class:"edit-view"},y0={key:0,class:"label"},S0={class:"value"},M0=Kc(()=>_e("svg",{version:"1.1",id:"editIcon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 8 120 130","xml:space":"preserve"},[_e("g",null,[_e("path",{class:"st0",d:"M94.62,2c-1.46-1.36-3.14-2.09-5.02-1.99c-1.88,0-3.56,0.73-4.92,2.2L73.59,13.72l31.07,30.03l11.19-11.72 c1.36-1.36,1.88-3.14,1.88-5.02s-0.73-3.66-2.09-4.92L94.62,2L94.62,2L94.62,2z M41.44,109.58c-4.08,1.36-8.26,2.62-12.35,3.98 c-4.08,1.36-8.16,2.72-12.35,4.08c-9.73,3.14-15.07,4.92-16.22,5.23c-1.15,0.31-0.42-4.18,1.99-13.6l7.74-29.61l0.64-0.66 l30.56,30.56L41.44,109.58L41.44,109.58L41.44,109.58z M22.2,67.25l42.99-44.82l31.07,29.92L52.75,97.8L22.2,67.25L22.2,67.25z"})])],-1)),b0=[M0],E0={key:1,class:"editor"},T0={class:"param"},A0=["value","onChange"],w0={class:"cancel-save"},C0=Kc(()=>_e("svg",{height:"100%",viewBox:"0 0 1600 1600",width:"100%",xmlns:"http://www.w3.org/2000/svg"},[_e("g",{"enable-background":"new",transform:"matrix(100 0 0 100 -6800 -61900)"},[_e("path",{d:"m67-636h18v18h-18z",fill:"none","stroke-width":"1.627",transform:"scale(1 -1)"}),_e("path",{d:"m75.999998 620c-3.860077 0-7 3.13991-7 7s3.139924 7 7 7 7-3.13991 7-7-3.139923-7-7-7zm2.990234 2.98633a1.0001 1.0001 0 0 1 .716797 1.7207l-2.292969 2.29297 2.292969 2.29297a1.0001 1.0001 0 1 1 -1.414062 1.41406l-2.292969-2.29297-2.292969 2.29297a1.0001 1.0001 0 1 1 -1.414062-1.41406l2.292969-2.29297-2.292969-2.29297a1.0001 1.0001 0 0 1 .697265-1.7168 1.0001 1.0001 0 0 1 .716797.30274l2.292969 2.29297 2.292969-2.29297a1.0001 1.0001 0 0 1 .697265-.30664z",class:"st0",fill:"#fff","fill-rule":"evenodd"})])],-1)),R0=[C0],P0=Kc(()=>_e("svg",{height:"100%",viewBox:"0 0 1200 1200",width:"100%",xmlns:"http://www.w3.org/2000/svg"},[_e("g",{class:"st0",fill:"#fff"},[_e("path",{d:"m282.03125 601c-.56266 0-1.03125.46859-1.03125 1.03125v7.9375c0 .56266.46859 1.03125 1.03125 1.03125h7.9375c.56266 0 1.03125-.46859 1.03125-1.03125v-7.9375c0-.56266-.46859-1.03125-1.03125-1.03125zm6.94922 1.99023a1.0001 1.0001 0 0 1 .72656 1.7168l-4 4a1.0001 1.0001 0 0 1 -1.41406 0l-2-2a1.0001 1.0001 0 1 1 1.41406-1.41406l1.29297 1.29297 3.29297-3.29297a1.0001 1.0001 0 0 1 .6875-.30274z",transform:"matrix(100 0 0 100 -28000 -60000)"})])],-1)),L0=[P0];function D0(t,e,n,i,r,s){return se(),le("div",x0,[n.label?(se(),le("div",y0,Be(n.label),1)):Ie("",!0),bs(t.$slots,"default",{},void 0,!0),_e("div",{class:En(["controller",{editing:r.editing}])},[_e("div",S0,Be(s.formattedValue)+" "+Be(s.v_units),1),_e("div",{class:"edit-control",onClick:e[0]||(e[0]=(...o)=>s.toggleEdit&&s.toggleEdit(...o))},b0)],2),r.editing?(se(),le("div",E0,[(se(!0),le(tt,null,Pt(s.valueArray,(o,a)=>(se(),le("div",T0,[_e("input",{type:"text",value:o,onChange:l=>s.changeValue(a,l)},null,40,A0)]))),256)),_e("div",w0,[_e("div",{class:"cancel-control",onClick:e[1]||(e[1]=(...o)=>s.cancelEdit&&s.cancelEdit(...o))},R0),_e("div",{class:"save-control",onClick:e[2]||(e[2]=(...o)=>s.saveEdit&&s.saveEdit(...o))},L0)])])):Ie("",!0)])}const ip=dn(v0,[["render",D0],["__scopeId","data-v-4e5c4b3d"]]),I0={name:"materialEdit",props:{doc:Object,model:Object,material:Object,showUsers:Boolean},components:{listView:jc,ColorPicker:np,editView:ip},data(){return{metallicWarning:Rr.hasFractionalMetallicTexture,roughnessWarning:Rr.hasFractionalRoughnessTexture,occlusionWarning:Rr.missingOcclusion,hasMetallic:Rr.hasMetallicRoughnessTexture,occlusionStrength:0,userList:[],baseColorSwatch:[],extensionList:[],selectedMaterial:null}},watch:{material:{handler(t){this.getUsers(t),this.setColorSwatches(t),this.selectedMaterial=t},immediate:!0}},computed:{name(){return this.material&&this.material.name||"material"},alphaMode(){return We.getAlphaMode(this.material)},baseColorFactor(){return We.getBaseColorFactor(this.material)},baseColorTexture(){return We.getBaseColorTexture(this.material,this.model)},baseColorImage(){return this.getImageURI(this.baseColorTexture)},metallicFactor(){return We.getMetallicFactor(this.material)},roughnessFactor(){return We.getRoughnessFactor(this.material)},metallicRoughnessTexture(){return We.getMetallicRoughnessTexture(this.material,this.model)},metallicRoughnessImage(){return this.getImageURI(this.metallicRoughnessTexture)},normalTexture(){return We.getNormalTexture(this.material,this.model)},normalImage(){return this.getImageURI(this.normalTexture)},normalScale(){return We.getNormalScale(this.material)},emissiveFactor(){return We.getEmissiveFactor(this.material)},emissiveTexture(){return We.getEmissiveTexture(this.material,this.model)},emissiveImage(){return this.getImageURI(this.emissiveTexture)},occlusionTexture(){return We.getOcclusionTexture(this.material,this.model)},occlusionImage(){return this.getImageURI(this.occlusionTexture)},doubleSided(){return this.material&&this.material.doubleSided||!1}},methods:{setColorSwatches(t){this.baseColorSwatch={r:this.baseColorFactor[0]*255,g:this.baseColorFactor[1]*255,b:this.baseColorFactor[2]*255}},setRoughnessFactor(t){t&&t.property&&t.value&&(this.selectedMaterial.pbrMetallicRoughness.roughnessFactor=t.value)},getImageURI(t){if(!t)return"";let e=We.getImage(t.source,this.model);if(!e){const n=t.extensions&&t.extensions.MSFT_texture_dds.source||null;n&&(e=We.getImage(n,this.model))}return e&&e.uri||""},getUsers(t){const e=We.getMaterialIndex(t,this.model),n=We.getNodes(this.model),i=We.getMeshes(this.model),r=[];n.forEach((s,o)=>{s.mesh&&i[s.mesh].primitives.forEach(c=>{if(c.material==e){const u=We.getNodeByIndex(o,this.model);u&&r.push(u)}})}),this.userList=r}}},$n=t=>($r("data-v-d3bcdc45"),t=t(),jr(),t),N0={class:"material-edit section"},U0=$n(()=>_e("div",{class:"label"},"Material Name",-1)),O0={class:"item-name"},F0={key:0,class:"label"},B0={key:1,class:"vec4"},k0=$n(()=>_e("br",null,null,-1)),H0=$n(()=>_e("br",null,null,-1)),z0=$n(()=>_e("br",null,null,-1)),V0=$n(()=>_e("br",null,null,-1)),G0={key:2,class:"label"},W0={key:3,class:"item-name list-item icon-image"},X0={key:4,class:"label"},$0={key:5,class:"warning"},j0={key:6,class:"item-name"},Y0={key:7,class:"label"},q0={key:8,class:"warning"},K0={key:9,class:"item-name"},Z0={key:10,class:"label"},J0={key:11,class:"item-name list-item icon-image"},Q0={key:12,class:"label"},ex={key:13,class:"item-name list-item icon-image"},tx={key:14,class:"warning"},nx={key:15,class:"label"},ix={key:16,class:"item-name list-item icon-image"},rx={key:17,class:"label"},sx={key:18,class:"item-name"},ox={key:19,class:"label"},ax={key:20,class:"item-name"},lx={key:21,class:"label"},cx={key:22,class:"vec3"},ux=$n(()=>_e("br",null,null,-1)),hx=$n(()=>_e("br",null,null,-1)),dx=$n(()=>_e("br",null,null,-1)),fx={key:23,class:"label"},px={key:24,class:"item-name list-item icon-image"},mx={key:25,class:"extensions-list"},gx=$n(()=>_e("div",{class:"label"},"Extensions",-1)),_x={key:26,class:"user-list"},vx=$n(()=>_e("div",{class:"label"},"Used By:",-1));function xx(t,e,n,i,r,s){const o=Nt("ColorPicker"),a=Nt("edit-view"),l=Nt("listView");return se(),le("div",N0,[U0,_e("div",O0,Be(s.name),1),s.baseColorFactor?(se(),le("div",F0,[vn(" Base Color "),ut(o,{modelValue:r.baseColorSwatch,"onUpdate:modelValue":e[0]||(e[0]=c=>r.baseColorSwatch=c),format:"rgb"},null,8,["modelValue"])])):Ie("",!0),s.baseColorFactor?(se(),le("div",B0,[vn(" R: "+Be(s.baseColorFactor[0]),1),k0,vn(" G: "+Be(s.baseColorFactor[1]),1),H0,vn(" B: "+Be(s.baseColorFactor[2]),1),z0,vn(" A: "+Be(s.baseColorFactor[3]),1),V0])):Ie("",!0),s.baseColorTexture?(se(),le("div",G0,"Base Color Texture")):Ie("",!0),s.baseColorTexture?(se(),le("div",W0,Be(s.baseColorImage),1)):Ie("",!0),s.metallicFactor!=null?(se(),le("div",X0,"Metallic Factor")):Ie("",!0),r.metallicWarning(n.material)&&s.metallicFactor!=null?(se(),le("div",$0,"Has Metallic Texture")):Ie("",!0),s.metallicFactor!=null?(se(),le("div",j0,Be(s.metallicFactor),1)):Ie("",!0),s.roughnessFactor!=null?(se(),le("div",Y0,"Roughness Factor")):Ie("",!0),r.roughnessWarning(n.material)&&s.roughnessFactor!=null?(se(),le("div",q0,"Has Roughness Texture")):Ie("",!0),s.roughnessFactor!=null?(se(),le("div",K0,[ut(a,{property:"roughnessFactor",onChangedValue:s.setRoughnessFactor,val:s.roughnessFactor},null,8,["onChangedValue","val"])])):Ie("",!0),s.metallicRoughnessTexture?(se(),le("div",Z0,"Metallic/Roughness Texture")):Ie("",!0),s.metallicRoughnessTexture?(se(),le("div",J0,Be(s.metallicRoughnessImage),1)):Ie("",!0),s.occlusionTexture?(se(),le("div",Q0,"Occlusion Texture")):Ie("",!0),s.occlusionTexture?(se(),le("div",ex,Be(s.occlusionImage),1)):Ie("",!0),r.occlusionWarning(n.material)?(se(),le("div",tx,"Occlusion Error")):Ie("",!0),s.normalTexture?(se(),le("div",nx,"Normal Texture")):Ie("",!0),s.normalTexture?(se(),le("div",ix,Be(s.normalImage),1)):Ie("",!0),s.normalScale?(se(),le("div",rx,"Normal Scale")):Ie("",!0),s.normalScale?(se(),le("div",sx,Be(s.normalScale),1)):Ie("",!0),s.alphaMode?(se(),le("div",ox,"Alpha Mode")):Ie("",!0),s.alphaMode?(se(),le("div",ax,Be(s.alphaMode),1)):Ie("",!0),s.emissiveFactor?(se(),le("div",lx,"Emissive Factor")):Ie("",!0),s.emissiveFactor?(se(),le("div",cx,[vn(" R: "+Be(s.emissiveFactor[0]),1),ux,vn(" G: "+Be(s.emissiveFactor[1]),1),hx,vn(" B: "+Be(s.emissiveFactor[2]),1),dx])):Ie("",!0),s.emissiveTexture?(se(),le("div",fx,"Emissive Texture")):Ie("",!0),s.emissiveTexture?(se(),le("div",px,Be(s.emissiveImage),1)):Ie("",!0),n.material.extensions?(se(),le("div",mx,[gx,(se(!0),le(tt,null,Pt(Object.entries(n.material.extensions),([c,u])=>(se(),le("div",null,[vn(Be(c)+" ",1),(se(!0),le(tt,null,Pt(Object.entries(u),([h,d])=>(se(),le("div",null,Be(h)+": "+Be(d),1))),256))]))),256))])):Ie("",!0),n.showUsers&&r.userList?(se(),le("div",_x,[vx,_e("ul",null,[ut(l,{list:r.userList,"list-icons":["icon-object"]},null,8,["list"])])])):Ie("",!0)])}const yx=dn(I0,[["render",xx],["__scopeId","data-v-d3bcdc45"]]),Sx={name:"animEdit",props:{model:Object,buffer:Object,anim:Object},components:{listView:jc},data(){return{selectedChannel:0,selectedSampler:{},selectedSamplerIndex:0,selectedNode:null}},watch:{anim:{handler(t){this.selectChannel(0)},immediate:!0}},computed:{name(){return this.anim&&this.anim.name||"Animation"},samplers(){return this.anim&&this.anim.samplers||[]},channels(){return this.anim&&this.anim.channels||[]},targets(){return this.channels.map(t=>({node:We.getNodeByIndex(t.target.node,this.model),path:t.target.path}))},samplerKeyframes(){return this.selectedSampler?this.selectedSampler.input.chunks.map((t,e)=>{this.getKeyframe(t);const n=Oo(Ll(this.selectedSampler.output.chunks[e],!0));return[e,n]}):[[],[]]},samplerOutputType(){return this.selectedSampler&&this.selectedSampler.output.accessor.type||""},samplerAccessors(){return[this.selectedSampler.input.index,this.selectedSampler.output.index]},samplerBufferViews(){return[this.selectedSampler.input.accessor.bufferView,this.selectedSampler.output.accessor.bufferView]}},methods:{selectChannel(t){this.selectedChannel=t,this.selectedSampler=this.getSampler(t),this.selectedSamplerIndex=t,this.selectedNode=this.targets[t].node},getSampler(t){const e=this.samplers[t],n=this.getSamplerData(e.input),i=this.getSamplerData(e.output);return{sampler:e,input:n,output:i}},getSamplerData(t){const e=this.getAccessor(t),n=this.getAccessorData(t),i=We.bufferTypes.getItemSize(e.type),r=n.reduce((s,o,a)=>{const l=Math.floor(a/i);return s[l]=[].concat(s[l]||[],o),s},[]);return{accessor:e,data:n,chunks:r,index:t}},getAccessor(t){return We.getAccessor(t,this.model)||{}},getAccessorData(t){return We.getAccessorData(t,this.model,this.buffer)||[]},getKeyframe(t){return Math.floor(t/.041666)},getFormattedQuat(t){return t&&Oo(Ll(t,!0))},getFormattedVec3(t){return t&&Oo(t)},getFrameCount(t){return t&&t.input&&t.input.chunks.length||0}}},ks=t=>($r("data-v-c7495263"),t=t(),jr(),t),Mx={class:"anim-edit section"},bx=ks(()=>_e("div",{class:"label"},"Channel Targets",-1)),Ex=["onClick"],Tx={key:0,class:"extensions-list"},Ax=ks(()=>_e("div",{class:"label"},"Extensions",-1)),wx={key:1,class:"sampler-list"},Cx=ks(()=>_e("div",{class:"label"},"Samplers",-1)),Rx=["onClick"],Px={key:0,class:"label"},Lx={key:1},Dx={key:2,class:"label"},Ix={key:3},Nx=ks(()=>_e("div",{class:"label"},"Sampler",-1)),Ux={class:"cols label"},Ox=ks(()=>_e("div",null,"Keyframe (Input)",-1)),Fx={class:"cols"};function Bx(t,e,n,i,r,s){return se(),le("div",Mx,[bx,(se(!0),le(tt,null,Pt(s.targets,(o,a)=>(se(),le("div",{class:En(["list-item icon-object",{selected:r.selectedChannel===a}]),onClick:l=>s.selectChannel(a)},Be(o.node.name)+" : "+Be(o.path),11,Ex))),256)),n.anim.extensions?(se(),le("div",Tx,[Ax,(se(!0),le(tt,null,Pt(Object.entries(n.anim.extensions),([o,a])=>(se(),le("div",null,[vn(Be(o)+" ",1),(se(!0),le(tt,null,Pt(Object.entries(a),([l,c])=>(se(),le("div",null,Be(l)+": "+Be(c),1))),256))]))),256))])):Ie("",!0),s.samplers?(se(),le("div",wx,[Cx,(se(!0),le(tt,null,Pt(s.samplers,(o,a)=>(se(),le("button",{class:En({selected:this.selectedSamplerIndex===a}),onClick:l=>s.selectChannel(a)}," Sampler "+Be(a),11,Rx))),256))])):Ie("",!0),r.selectedNode?(se(),le(tt,{key:2},[r.selectedNode.translation?(se(),le("div",Px,"Node Translation")):Ie("",!0),r.selectedNode.translation?(se(),le("div",Lx,Be(s.getFormattedVec3(r.selectedNode.translation)),1)):Ie("",!0),r.selectedNode.rotation?(se(),le("div",Dx,"Node Rotation")):Ie("",!0),r.selectedNode.rotation?(se(),le("div",Ix,Be(s.getFormattedQuat(r.selectedNode.rotation)),1)):Ie("",!0)],64)):Ie("",!0),r.selectedSampler?(se(),le(tt,{key:3},[Nx,_e("div",null,"Accessors: "+Be(s.samplerAccessors.join(", ")),1),_e("div",null,"BufferViews: "+Be(s.samplerBufferViews.join(", ")),1),_e("div",null,Be(r.selectedSampler.sampler.interpolation)+" "+Be(`${s.getFrameCount(r.selectedSampler)} frames`),1),_e("div",Ux,[Ox,_e("div",null,"Value (Output) "+Be(s.samplerOutputType),1)]),(se(!0),le(tt,null,Pt(s.samplerKeyframes,o=>(se(),le("div",Fx,[_e("div",null,Be(o[0]),1),_e("div",null,Be(o[1]),1)]))),256))],64)):Ie("",!0)])}const kx=dn(Sx,[["render",Bx],["__scopeId","data-v-c7495263"]]),Hx={name:"inspector",props:{doc:Object,model:Object,buffer:Object,item:Object,icon:String,index:Number},components:{materialEdit:yx,animEdit:kx,listItem:$c,editView:ip},data(){return{mesh:null,primitives:null,children:null,selectedMaterial:null,selectedAnimation:null,itemType:null,validate:Rr}},watch:{item(t){this.selectedMaterial=null,this.selectedAnimation=!1,this.mesh=this.getMesh(),this.primitives=this.getPrimitives(),this.children=this.getChildren(),this.itemType=this.getItemType(t,this.index),this.$nextTick(()=>{!this.selectedMaterial&&this.icon=="icon-material"&&(this.isMaterialType=!0,this.selectedMaterial=this.item),!this.selectedAnimation&&this.icon=="icon-anim"&&(this.selectedAnimation=this.item)})}},computed:{isNode(){return this.itemType==="object"},isMaterial(){return this.itemType==="material"},isAnimation(){return this.itemType==="anim"},isArmature(){return this.itemType==="armature"},isBone(){return this.itemType==="bone"},nodeIndex(){if(this.item)return We.getNodeIndex(this.item,this.model)},itemName(){return this.item&&this.item.name||null},meshName(){return this.mesh&&this.mesh.name||""},materialsList(){if(this.mesh){const t=this.getPrimitives(this.mesh);if(t){const e=t.map((n,i)=>this.getMaterial(n));return e&&this.selectMaterial(e[0]),e||[]}}return[]},animations(){if(!this.item||!this.model)return[];const t=[];return this.model.animations&&this.model.animations.forEach((e,n)=>{e.channels.forEach(i=>{i.target.node===this.nodeIndex&&t.push(e)})}),t},itemIcon(){return`icon-${this.itemType}`},nodeRotation(){return this.item&&_s(Ll(this.item.rotation))||null},nodeTranslation(){return this.item&&_s(this.item.translation)||null},nodeScale(){return this.item&&_s(this.item.scale)||null},nodeScaleWarning(){return Rr.isNonUniformScale(this.nodeScale)?"Warning: Non-Uniform Scale":""}},methods:{getItemType(t,e){return t?t.mesh!=null?"object":t.pbrMetallicRoughness!=null?"material":t.channels!=null?"anim":t.joints!=null?"armature":(e||e===0)&&this.model&&this.model.skins&&this.model.skins.some(n=>n.joints.includes(e))?"bone":"empty":null},getMesh(){return this.item&&this.item.mesh!=null?We.getMesh(this.item.mesh,this.model):null},getPrimitives(){return this.item&&this.item.mesh!=null?We.getPrimitives(this.item.mesh,this.model):null},getMaterial(t){return We.getMaterial(t.material,this.model)},getChildren(){return this.item&&We.getChildNodes(this.item&&this.item.children,this.model)||null},getChildIndex(t){return We.getNodeIndex(t,this.model)},getIcon(t,e){return`icon-${this.getItemType(t,e)}`},selectMaterial(t){this.selectedMaterial=t},isSelected(t){return t.name===this.selectedMaterial.name},selectItem(t,e,n){pa.$emit("selectItem",{item:t,icon:e,index:n})},setValue(t){if(t&&t.property&&t.value)switch(t.property){case"rotation":case"translation":default:We.setNodeProperty(this.item,t.property,t.value,this.model)}console.log(t)}}},zx={class:"inspector"},Vx={class:"info"},Gx={key:1,class:"mesh-name list-item icon-mesh"},Wx=["onClick"],Xx={key:0,class:"warning"},$x={key:1,class:"warning"},jx={key:6,class:"section"},Yx=_e("div",{class:"section-name"},"Children",-1),qx={class:"child-list"},Kx={key:8,class:"material-section"},Zx=_e("div",{class:"section-name"},"Materials",-1),Jx=["onClick"];function Qx(t,e,n,i,r,s){const o=Nt("edit-view"),a=Nt("listItem"),l=Nt("animEdit"),c=Nt("materialEdit");return se(),le("div",zx,[_e("div",Vx,[s.itemName?(se(),le("div",{key:0,class:En(["node-name list-item",s.itemIcon])},Be(s.itemName),3)):Ie("",!0),s.meshName?(se(),le("div",Gx,Be(s.meshName),1)):Ie("",!0),s.animations&&s.animations.length&&!s.isAnimation?(se(!0),le(tt,{key:2},Pt(s.animations,u=>(se(),le("div",{class:"anim-name list-item icon-anim",onClick:h=>s.selectItem(u,"icon-anim")},Be(u.name),9,Wx))),256)):Ie("",!0),s.nodeRotation?(se(),Hn(o,{key:3,property:"rotation",onChangedValue:s.setValue,label:"Rotation",val:s.nodeRotation,units:"°",showUnits:!0},null,8,["onChangedValue","val"])):Ie("",!0),s.nodeTranslation?(se(),Hn(o,{key:4,property:"translation",onChangedValue:s.setValue,label:"Translation",val:s.nodeTranslation,units:"m",showUnits:!1},null,8,["onChangedValue","val"])):Ie("",!0),s.nodeScale?(se(),Hn(o,{key:5,property:"scale",onChangedValue:s.setValue,label:"Scale",val:s.nodeScale,units:"",showUnits:!1},{default:rr(()=>[s.nodeScaleWarning?(se(),le("div",Xx,Be(s.nodeScaleWarning),1)):Ie("",!0),s.nodeScaleWarning?(se(),le("div",$x,Be(n.item.scale),1)):Ie("",!0)]),_:1},8,["onChangedValue","val"])):Ie("",!0),r.children&&r.children.length?(se(),le("div",jx,[Yx,_e("ul",qx,[(se(!0),le(tt,null,Pt(s.getChildren(),u=>(se(),le("li",null,[ut(a,{item:u,icon:s.getIcon(u,s.getChildIndex(u)),model:n.model},null,8,["item","icon","model"])]))),256))])])):Ie("",!0),s.isAnimation?(se(),Hn(l,{key:7,anim:n.item,model:n.model,buffer:n.buffer},null,8,["anim","model","buffer"])):Ie("",!0),s.materialsList&&s.materialsList.length?(se(),le("div",Kx,[Zx,(se(!0),le(tt,null,Pt(s.materialsList,u=>(se(),le("div",{class:En(["list-item icon-material",{selected:s.isSelected(u)}]),onClick:h=>s.selectMaterial(u)},Be(u.name),11,Jx))),256))])):Ie("",!0),r.selectedMaterial?(se(),Hn(c,{key:9,model:n.model,material:s.isMaterial?n.item:r.selectedMaterial,showUsers:s.isMaterial},null,8,["model","material","showUsers"])):Ie("",!0)])])}const ey=dn(Hx,[["render",Qx]]),ty={name:"tabs",props:{tabNames:Array,defaultTab:String},components:{},data(){return{selectedTab:this.defaultTab}},watch:{},computed:{},methods:{selectTab(t){this.selectedTab=t}}},ny={class:"tab-view"},iy={class:"tab-list"},ry=["onClick"],sy={class:"tabs"},oy=["id"];function ay(t,e,n,i,r,s){return se(),le("div",ny,[_e("div",iy,[(se(!0),le(tt,null,Pt(n.tabNames,(o,a)=>(se(),le("div",{tabindex:"0",onClick:l=>s.selectTab(o)},[_e("div",{class:En(["tab-name",{selected:o==r.selectedTab}])},Be(o),3)],8,ry))),256))]),_e("div",sy,[(se(!0),le(tt,null,Pt(n.tabNames,o=>(se(),le("div",{class:En(["tab-body",{selected:o==r.selectedTab}]),id:o},[bs(t.$slots,o,{},void 0,!0)],10,oy))),256))])])}const ly=dn(ty,[["render",ay],["__scopeId","data-v-a9feefbe"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="180",Or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cy=0,yh=1,uy=2,rp=1,hy=2,Qn=3,Li=0,Qt=1,zn=2,Ai=0,Fr=1,Sh=2,Mh=3,bh=4,dy=5,Ji=100,fy=101,py=102,my=103,gy=104,_y=200,vy=201,xy=202,yy=203,Nl=204,Ul=205,Sy=206,My=207,by=208,Ey=209,Ty=210,Ay=211,wy=212,Cy=213,Ry=214,Ol=0,Fl=1,Bl=2,zr=3,kl=4,Hl=5,zl=6,Vl=7,sp=0,Py=1,Ly=2,wi=0,Dy=1,Iy=2,Ny=3,Uy=4,Oy=5,Fy=6,op=7,ap=300,Vr=301,Gr=302,Gl=303,Wl=304,ma=306,Xl=1e3,er=1001,$l=1002,Dn=1003,By=1004,no=1005,Vn=1006,Ba=1007,tr=1008,oi=1009,lp=1010,cp=1011,Ls=1012,Jc=1013,or=1014,ni=1015,Hs=1016,Qc=1017,eu=1018,Ds=1020,up=35902,hp=35899,dp=1021,fp=1022,Pn=1023,Is=1026,Ns=1027,pp=1028,tu=1029,mp=1030,nu=1031,iu=1033,Bo=33776,ko=33777,Ho=33778,zo=33779,jl=35840,Yl=35841,ql=35842,Kl=35843,Zl=36196,Jl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,ic=37811,rc=37812,sc=37813,oc=37814,ac=37815,lc=37816,cc=37817,uc=37818,hc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,_c=36283,vc=36284,xc=36285,yc=36286,ky=3200,Hy=3201,ru=0,zy=1,Mi="",xn="srgb",Wr="srgb-linear",Ko="linear",dt="srgb",fr=7680,Eh=519,Vy=512,Gy=513,Wy=514,gp=515,Xy=516,$y=517,jy=518,Yy=519,Th=35044,Ah="300 es",Gn=2e3,Zo=2001;class ur{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const Br=Math.PI/180,Us=180/Math.PI;function Yr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function su(t,e){return(t%e+e)%e}function qy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Ky(t,e,n){return t!==e?(n-t)/(e-t):0}function xs(t,e,n){return(1-n)*t+n*e}function Zy(t,e,n,i){return xs(t,e,1-Math.exp(-n*i))}function Jy(t,e=1){return e-Math.abs(su(t,e*2)-e)}function Qy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function eS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function tS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function nS(t,e){return t+Math.random()*(e-t)}function iS(t){return t*(.5-Math.random())}function rS(t){t!==void 0&&(wh=t);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sS(t){return t*Br}function oS(t){return t*Us}function aS(t){return(t&t-1)===0&&t!==0}function lS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function uS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*f,a*c);break;case"YXY":t.set(l*f,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const hS={DEG2RAD:Br,RAD2DEG:Us,generateUUID:Yr,clamp:Ke,euclideanModulo:su,mapLinear:qy,inverseLerp:Ky,lerp:xs,damp:Zy,pingpong:Jy,smoothstep:Qy,smootherstep:eS,randInt:tS,randFloat:nS,randFloatSpread:iS,seededRandom:rS,degToRad:sS,radToDeg:oS,isPowerOfTwo:aS,ceilPowerOfTwo:lS,floorPowerOfTwo:cS,setQuaternionFromProperEuler:uS,normalize:Xt,denormalize:Cr};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=f,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||c!==f||u!==_){let m=1-a;const p=l*d+c*f+u*_+h*x,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const P=Math.sqrt(T),w=Math.atan2(P,p*A);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}const E=a*A;if(l=l*m+d*E,c=c*m+f*E,u=u*m+_*E,h=h*m+x*E,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[n]=a*_+u*h+l*f-c*d,e[n+1]=l*_+u*d+c*h-a*f,e[n+2]=c*_+u*f+a*d-l*h,e[n+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ch.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new z,Ch=new ar;class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],x=r[0],m=r[3],p=r[6],A=r[1],T=r[4],E=r[7],P=r[2],w=r[5],C=r[8];return s[0]=o*x+a*A+l*P,s[3]=o*m+a*T+l*w,s[6]=o*p+a*E+l*C,s[1]=c*x+u*A+h*P,s[4]=c*m+u*T+h*w,s[7]=c*p+u*E+h*C,s[2]=d*x+f*A+_*P,s[5]=d*m+f*T+_*w,s[8]=d*p+f*E+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=n*h+i*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=f*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ha.makeScale(e,n)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ha.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new je;function _p(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dS(){const t=Jo("canvas");return t.style.display="block",t}const Rh={};function Os(t){t in Rh||(Rh[t]=!0,console.warn(t))}function fS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Ph=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pS(){const t={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?Ko:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Wr]:{primaries:e,whitePoint:i,transfer:Ko,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),t}const st=pS();function si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function kr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pr;class mS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=Jo("canvas")),pr.width=e.width,pr.height=e.height;const r=pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(si(n[i]/255)*255):n[i]=si(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(za(r[o].image)):s.push(za(r[o]))}else s=za(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function za(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _S=0;const Va=new z;class en extends ur{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=er,r=er,s=Vn,o=tr,a=Pn,l=oi,c=en.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Yr(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xl:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xl:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=ap;en.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,E=(f+1)/2,P=(p+1)/2,w=(u+d)/4,C=(h+x)/4,U=(_+m)/4;return T>E&&T>P?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=C/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=U/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends ur{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new en(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ou(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends vS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vp extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),ro.subVectors(this.max,ts),mr.subVectors(e.a,ts),gr.subVectors(e.b,ts),_r.subVectors(e.c,ts),hi.subVectors(gr,mr),di.subVectors(_r,gr),Vi.subVectors(mr,_r);let n=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Vi.z,Vi.y,hi.z,0,-hi.x,di.z,0,-di.x,Vi.z,0,-Vi.x,-hi.y,hi.x,0,-di.y,di.x,0,-Vi.y,Vi.x,0];return!Ga(n,mr,gr,_r,ro)||(n=[1,0,0,0,1,0,0,0,1],!Ga(n,mr,gr,_r,ro))?!1:(so.crossVectors(hi,di),n=[so.x,so.y,so.z],Ga(n,mr,gr,_r,ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new z,new z,new z,new z,new z,new z,new z,new z],An=new z,io=new zs,mr=new z,gr=new z,_r=new z,hi=new z,di=new z,Vi=new z,ts=new z,ro=new z,so=new z,Gi=new z;function Ga(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Gi.fromArray(t,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),c=n.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yS=new zs,ns=new z,Wa=new z;class ga{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const n=ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Wa)),this.expandByPoint(ns.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new z,Xa=new z,oo=new z,fi=new z,$a=new z,ao=new z,ja=new z;class au{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xa.copy(e).add(n).multiplyScalar(.5),oo.copy(n).sub(e).normalize(),fi.copy(this.origin).sub(Xa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(oo),a=fi.dot(this.direction),l=-fi.dot(oo),c=fi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xa).addScaledVector(oo,d),f}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){$a.subVectors(n,e),ao.subVectors(i,e),ja.crossVectors($a,ao);let o=this.direction.dot(ja),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(ao.crossVectors(fi,ao));if(l<0)return null;const c=a*this.direction.dot($a.cross(fi));if(c<0||l+c>o)return null;const u=-a*fi.dot(ja);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,c,u,h,d,f,_,x,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,f,_,x,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,f,_,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,x=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=f+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+f*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,x=c*h;n[0]=d+x*a,n[4]=_*a-f,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=f*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=_+f*a,n[1]=f+_*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,x=a*h;n[0]=l*u,n[4]=_*c-f,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=f*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-d*h,n[8]=_*h+f,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=f*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+x,n[5]=o*u,n[9]=f*h-_,n[2]=_*h-f,n[6]=a*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SS,e,MS)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),pi.crossVectors(i,an),pi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),pi.crossVectors(i,an)),pi.normalize(),lo.crossVectors(an,pi),r[0]=pi.x,r[4]=lo.x,r[8]=an.x,r[1]=pi.y,r[5]=lo.y,r[9]=an.y,r[2]=pi.z,r[6]=lo.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],x=i[6],m=i[10],p=i[14],A=i[3],T=i[7],E=i[11],P=i[15],w=r[0],C=r[4],U=r[8],y=r[12],b=r[1],R=r[5],I=r[9],W=r[13],Q=r[2],J=r[6],K=r[10],Z=r[14],V=r[3],me=r[7],xe=r[11],Te=r[15];return s[0]=o*w+a*b+l*Q+c*V,s[4]=o*C+a*R+l*J+c*me,s[8]=o*U+a*I+l*K+c*xe,s[12]=o*y+a*W+l*Z+c*Te,s[1]=u*w+h*b+d*Q+f*V,s[5]=u*C+h*R+d*J+f*me,s[9]=u*U+h*I+d*K+f*xe,s[13]=u*y+h*W+d*Z+f*Te,s[2]=_*w+x*b+m*Q+p*V,s[6]=_*C+x*R+m*J+p*me,s[10]=_*U+x*I+m*K+p*xe,s[14]=_*y+x*W+m*Z+p*Te,s[3]=A*w+T*b+E*Q+P*V,s[7]=A*C+T*R+E*J+P*me,s[11]=A*U+T*I+E*K+P*xe,s[15]=A*y+T*W+E*Z+P*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*f-i*l*f)+x*(+n*l*f-n*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+n*c*h-n*a*f-s*o*h+i*o*f+s*a*u-i*c*u)+p*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],x=e[13],m=e[14],p=e[15],A=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,T=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,E=u*x*c-_*h*c+_*a*f-o*x*f-u*a*p+o*h*p,P=_*h*l-u*x*l-_*a*d+o*x*d+u*a*m-o*h*m,w=n*A+i*T+r*E+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=A*C,e[1]=(x*d*s-h*m*s-x*r*f+i*m*f+h*r*p-i*d*p)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*f-i*l*f)*C,e[4]=T*C,e[5]=(u*m*s-_*d*s+_*r*f-n*m*f-u*r*p+n*d*p)*C,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*p-n*l*p)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*f+n*l*f)*C,e[8]=E*C,e[9]=(_*h*s-u*x*s-_*i*f+n*x*f+u*i*p-n*h*p)*C,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*p+n*a*p)*C,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*f-n*a*f)*C,e[12]=P*C,e[13]=(u*x*r-_*h*r+_*i*d-n*x*d-u*i*m+n*h*m)*C,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*C,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,x=o*u,m=o*h,p=a*h,A=l*c,T=l*u,E=l*h,P=i.x,w=i.y,C=i.z;return r[0]=(1-(x+p))*P,r[1]=(f+E)*P,r[2]=(_-T)*P,r[3]=0,r[4]=(f-E)*w,r[5]=(1-(d+p))*w,r[6]=(m+A)*w,r[7]=0,r[8]=(_+T)*C,r[9]=(m-A)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,u=1/o,h=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,n.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Gn,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let _,x;if(l)_=s/(o-s),x=o*s/(o-s);else if(a===Gn)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Zo)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Gn,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),f=-(i+r)/(i-r);let _,x;if(l)_=1/(o-s),x=o/(o-s);else if(a===Gn)_=-2/(o-s),x=-(o+s)/(o-s);else if(a===Zo)_=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vr=new z,wn=new At,SS=new z(0,0,0),MS=new z(1,1,1),pi=new z,lo=new z,an=new z,Dh=new At,Ih=new ar;class Xn{constructor(e=0,n=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bS=0;const Nh=new z,xr=new ar,Kn=new At,co=new z,is=new z,ES=new z,TS=new ar,Uh=new z(1,0,0),Oh=new z(0,1,0),Fh=new z(0,0,1),Bh={type:"added"},AS={type:"removed"},yr={type:"childadded",child:null},Ya={type:"childremoved",child:null};class Vt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new z,n=new Xn,i=new ar,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new je}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,n){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?co.copy(e):co.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(is,co,this.up):Kn.lookAt(co,is,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Kn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bh),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(AS),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bh),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,ES),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,TS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new z(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new z,Zn=new z,qa=new z,Jn=new z,Sr=new z,Mr=new z,kh=new z,Ka=new z,Za=new z,Ja=new z,Qa=new bt,el=new bt,tl=new bt;class Sn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),Zn.subVectors(i,n),qa.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(Zn),l=Cn.dot(qa),c=Zn.dot(Zn),u=Zn.dot(qa),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Qa.setScalar(0),el.setScalar(0),tl.setScalar(0),Qa.fromBufferAttribute(e,n),el.fromBufferAttribute(e,i),tl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qa,s.x),o.addScaledVector(el,s.y),o.addScaledVector(tl,s.z),o}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),Zn.subVectors(e,n),Cn.cross(Zn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Sr.subVectors(r,i),Mr.subVectors(s,i),Ka.subVectors(e,i);const l=Sr.dot(Ka),c=Mr.dot(Ka);if(l<=0&&c<=0)return n.copy(i);Za.subVectors(e,r);const u=Sr.dot(Za),h=Mr.dot(Za);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Sr,o);Ja.subVectors(e,s);const f=Sr.dot(Ja),_=Mr.dot(Ja);if(_>=0&&f<=_)return n.copy(s);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Mr,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return kh.subVectors(s,r),a=(h-u)/(h-u+(f-_)),n.copy(r).addScaledVector(kh,a);const p=1/(m+x+d);return o=x*p,a=d*p,n.copy(i).addScaledVector(Sr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function nl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=su(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=nl(o,s,e+1/3),this.g=nl(o,s,e),this.b=nl(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=yp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return st.workingToColorSpace(Bt.copy(this),e),Math.round(Ke(Bt.r*255,0,255))*65536+Math.round(Ke(Bt.g*255,0,255))*256+Math.round(Ke(Bt.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=xn){st.workingToColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+n,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mi),e.getHSL(uo);const i=xs(mi.h,uo.h,n),r=xs(mi.s,uo.s,n),s=xs(mi.l,uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Qe;Qe.NAMES=yp;let wS=0;class hr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Fr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ul&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sp extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new z,ho=new Ye;let CS=0;class hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ho.fromBufferAttribute(this,n),ho.applyMatrix3(e),this.setXY(n,ho.x,ho.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Cr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Cr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Cr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Cr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Cr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}}class Mp extends hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bp extends hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tn extends hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let RS=0;const _n=new At,il=new Vt,br=new z,ln=new zs,rs=new zs,It=new z;class fn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_p(e)?bp:Mp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(ln.min,rs.min),ln.expandByPoint(It),It.addVectors(ln.max,rs.max),ln.expandByPoint(It)):(ln.expandByPoint(rs.min),ln.expandByPoint(rs.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(br.fromBufferAttribute(e,c),It.add(br)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new z,l[U]=new z;const c=new z,u=new z,h=new z,d=new Ye,f=new Ye,_=new Ye,x=new z,m=new z;function p(U,y,b){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,b),d.fromBufferAttribute(s,U),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(R),a[U].add(x),a[y].add(x),a[b].add(x),l[U].add(m),l[y].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,y=A.length;U<y;++U){const b=A[U],R=b.start,I=b.count;for(let W=R,Q=R+I;W<Q;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new z,E=new z,P=new z,w=new z;function C(U){P.fromBufferAttribute(r,U),w.copy(P);const y=a[U];T.copy(y),T.sub(P.multiplyScalar(P.dot(y))).normalize(),E.crossVectors(w,y);const R=E.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,R)}for(let U=0,y=A.length;U<y;++U){const b=A[U],R=b.start,I=b.count;for(let W=R,Q=R+I;W<Q;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=n.count;d<f;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new At,Wi=new au,fo=new ga,zh=new z,po=new z,mo=new z,go=new z,rl=new z,_o=new z,Vh=new z,vo=new z;class Ln extends Vt{constructor(e=new fn,n=new Sp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(rl.fromBufferAttribute(h,e),o?_o.addScaledVector(rl,u):_o.addScaledVector(rl.sub(n),u))}n.add(_o)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(fo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(fo,zh)===null||Wi.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Hh.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Hh),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=A,P=T;E<P;E+=3){const w=a.getX(E),C=a.getX(E+1),U=a.getX(E+2);r=xo(this,p,e,i,c,u,h,w,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const A=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=xo(this,o,e,i,c,u,h,A,T,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=A,P=T;E<P;E+=3){const w=E,C=E+1,U=E+2;r=xo(this,p,e,i,c,u,h,w,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){const A=m,T=m+1,E=m+2;r=xo(this,o,e,i,c,u,h,A,T,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function PS(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Li,a),l===null)return null;vo.copy(a),vo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vo);return c<n.near||c>n.far?null:{distance:c,point:vo.clone(),object:t}}function xo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,po),t.getVertexPosition(l,mo),t.getVertexPosition(c,go);const u=PS(t,e,n,i,po,mo,go,Vh);if(u){const h=new z;Sn.getBarycoord(Vh,po,mo,go,h),r&&(u.uv=Sn.getInterpolatedAttribute(r,a,l,c,h,new Ye)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,a,l,c,h,new Ye)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Sn.getNormal(po,mo,go,d.normal),u.face=d,u.barycoord=h}return u}class Vs extends fn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2));function _(x,m,p,A,T,E,P,w,C,U,y){const b=E/C,R=P/U,I=E/2,W=P/2,Q=w/2,J=C+1,K=U+1;let Z=0,V=0;const me=new z;for(let xe=0;xe<K;xe++){const Te=xe*R-W;for(let Ue=0;Ue<J;Ue++){const ot=Ue*b-I;me[x]=ot*A,me[m]=Te*T,me[p]=Q,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[p]=w>0?1:-1,u.push(me.x,me.y,me.z),h.push(Ue/C),h.push(1-xe/U),Z+=1}}for(let xe=0;xe<U;xe++)for(let Te=0;Te<C;Te++){const Ue=d+Te+J*xe,ot=d+Te+J*(xe+1),lt=d+(Te+1)+J*(xe+1),it=d+(Te+1)+J*xe;l.push(Ue,ot,it),l.push(ot,lt,it),V+=6}a.addGroup(f,V,y),f+=V,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Xr(t[n]);for(const r in i)e[r]=i[r]}return e}function LS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ep(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const DS={clone:Xr,merge:$t};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Tp extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new z,Gh=new Ye,Wh=new Ye;class yn extends Tp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,n){return this.getViewBounds(e,Gh,Wh),n.subVectors(Wh,Gh)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Tr=1;class US extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Er,Tr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Er,Tr,e,n);s.layers=this.layers,this.add(s);const o=new yn(Er,Tr,e,n);o.layers=this.layers,this.add(o);const a=new yn(Er,Tr,e,n);a.layers=this.layers,this.add(a);const l=new yn(Er,Tr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Er,Tr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ap extends en{constructor(e=[],n=Vr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ap(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vs(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ai});s.uniforms.tEquirect.value=n;const o=new Ln(r,s),a=n.minFilter;return n.minFilter===tr&&(n.minFilter=Vn),new US(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ls extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FS={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class BS extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ol=new z,kS=new z,HS=new je;class Si{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ol.subVectors(i,n).cross(kS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HS.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new ga,zS=new Ye(.5,.5),yo=new z;class wp{constructor(e=new Si,n=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],x=s[9],m=s[10],p=s[11],A=s[12],T=s[13],E=s[14],P=s[15];if(r[0].setComponents(c-o,f-u,p-_,P-A).normalize(),r[1].setComponents(c+o,f+u,p+_,P+A).normalize(),r[2].setComponents(c+a,f+h,p+x,P+T).normalize(),r[3].setComponents(c-a,f-h,p-x,P-T).normalize(),i)r[4].setComponents(l,d,m,E).normalize(),r[5].setComponents(c-l,f-d,p-m,P-E).normalize();else if(r[4].setComponents(c-l,f-d,p-m,P-E).normalize(),n===Gn)r[5].setComponents(c+l,f+d,p+m,P+E).normalize();else if(n===Zo)r[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const n=zS.distanceTo(e.center);return Xi.radius=.7071067811865476+n,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yo.x=r.normal.x>0?e.max.x:e.min.x,yo.y=r.normal.y>0?e.max.y:e.min.y,yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _a extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new z,ea=new z,Xh=new At,ss=new au,So=new ga,al=new z,$h=new z;class VS extends Vt{constructor(e=new fn,n=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Qo.fromBufferAttribute(n,r-1),ea.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Qo.distanceTo(ea);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),So.radius+=s,e.ray.intersectsSphere(So)===!1)return;Xh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=f,m=_-1;x<m;x+=c){const p=u.getX(x),A=u.getX(x+1),T=Mo(this,e,ss,l,p,A,x);T&&n.push(T)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(f),p=Mo(this,e,ss,l,x,m,_-1);p&&n.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=f,m=_-1;x<m;x+=c){const p=Mo(this,e,ss,l,x,x+1,x);p&&n.push(p)}if(this.isLineLoop){const x=Mo(this,e,ss,l,_-1,f,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mo(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Qo.fromBufferAttribute(a,r),ea.fromBufferAttribute(a,s),n.distanceSqToSegment(Qo,ea,al,$h)>i)return;al.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(al);if(!(c<e.near||c>e.far))return{distance:c,point:$h.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const jh=new z,Yh=new z;class lu extends VS{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)jh.fromBufferAttribute(n,r),Yh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jh.distanceTo(Yh);e.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cp extends en{constructor(e,n,i=or,r,s,o,a=Dn,l=Dn,c,u=Is,h=1){if(u!==Is&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Rp extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const bo=new z,Eo=new z,ll=new z,To=new Sn;class GS extends fn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Br*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:m,c:p}=To;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),To.getNormal(ll),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const T=(A+1)%3,E=h[A],P=h[T],w=To[u[A]],C=To[u[T]],U=`${E}_${P}`,y=`${P}_${E}`;y in d&&d[y]?(ll.dot(d[y].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(C.x,C.y,C.z)),d[y]=null):U in d||(d[U]={index0:c[A],index1:c[T],normal:ll.clone()})}}for(const _ in d)if(d[_]){const{index0:x,index1:m}=d[_];bo.fromBufferAttribute(a,x),Eo.fromBufferAttribute(a,m),f.push(bo.x,bo.y,bo.z),f.push(Eo.x,Eo.y,Eo.z)}this.setAttribute("position",new tn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class va extends fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,f=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*d-o;for(let T=0;T<c;T++){const E=T*h-s;_.push(E,-A,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const T=A+c*p,E=A+c*(p+1),P=A+1+c*(p+1),w=A+1+c*p;f.push(T,E,w),f.push(E,P,w)}this.setIndex(f),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.widthSegments,e.heightSegments)}}class qh extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class WS extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XS extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $S extends hr{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Qe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jS extends Tp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class YS extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qS extends lu{constructor(e=10,n=10,i=4473924,r=8947848){i=new Qe(i),r=new Qe(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,f=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=d===s?i:r;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new fn;u.setAttribute("position",new tn(l,3)),u.setAttribute("color",new tn(c,3));const h=new _a({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zh extends lu{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new fn;r.setAttribute("position",new tn(n,3)),r.setAttribute("color",new tn(i,3));const s=new _a({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class KS extends ur{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jh(t,e,n,i){const r=ZS(i);switch(n){case dp:return t*e;case pp:return t*e/r.components*r.byteLength;case tu:return t*e/r.components*r.byteLength;case mp:return t*e*2/r.components*r.byteLength;case nu:return t*e*2/r.components*r.byteLength;case fp:return t*e*3/r.components*r.byteLength;case Pn:return t*e*4/r.components*r.byteLength;case iu:return t*e*4/r.components*r.byteLength;case Bo:case ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ho:case zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yl:case Kl:return Math.max(t,16)*Math.max(e,8)/4;case jl:case ql:return Math.max(t,8)*Math.max(e,8)/2;case Zl:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _c:case vc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xc:case yc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZS(t){switch(t){case oi:case lp:return{byteLength:1,components:1};case Ls:case cp:case Hs:return{byteLength:2,components:1};case Qc:case eu:return{byteLength:2,components:4};case or:case Jc:case ni:return{byteLength:4,components:1};case up:case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
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
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dM=`#ifdef USE_IRIDESCENCE
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
#endif`,fM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,MM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,XM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ZM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lb=`#if defined( USE_POINTS_UV )
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
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
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
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sb=`#ifdef USE_NORMALMAP
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
#endif`,Mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Fb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zb=`#ifdef USE_SKINNING
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
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$b=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
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
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
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
}`,sE=`#if DEPTH_PACKING == 3200
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
}`,oE=`#define DISTANCE
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
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
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
}`,hE=`uniform vec3 diffuse;
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
}`,dE=`#include <common>
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
}`,fE=`uniform vec3 diffuse;
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
}`,pE=`#define LAMBERT
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
}`,mE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,gE=`#define MATCAP
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
}`,_E=`#define MATCAP
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
}`,vE=`#define NORMAL
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
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
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
}`,SE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ME=`#define STANDARD
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
}`,bE=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,EE=`#define TOON
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
}`,TE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,AE=`uniform float size;
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
}`,wE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,RE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,PE=`uniform float rotation;
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
}`,LE=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:QS,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:aM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:hM,iridescence_fragment:dM,bumpmap_pars_fragment:fM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:EM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:wM,emissivemap_pars_fragment:CM,colorspace_fragment:RM,colorspace_pars_fragment:PM,envmap_fragment:LM,envmap_common_pars_fragment:DM,envmap_pars_fragment:IM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:XM,envmap_vertex:UM,fog_vertex:OM,fog_pars_vertex:FM,fog_fragment:BM,fog_pars_fragment:kM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:zM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:GM,lights_pars_begin:WM,lights_toon_fragment:$M,lights_toon_pars_fragment:jM,lights_phong_fragment:YM,lights_phong_pars_fragment:qM,lights_physical_fragment:KM,lights_physical_pars_fragment:ZM,lights_fragment_begin:JM,lights_fragment_maps:QM,lights_fragment_end:eb,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:rb,map_fragment:sb,map_pars_fragment:ob,map_particle_fragment:ab,map_particle_pars_fragment:lb,metalnessmap_fragment:cb,metalnessmap_pars_fragment:ub,morphinstance_vertex:hb,morphcolor_vertex:db,morphnormal_vertex:fb,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:gb,normal_fragment_maps:_b,normal_pars_fragment:vb,normal_pars_vertex:xb,normal_vertex:yb,normalmap_pars_fragment:Sb,clearcoat_normal_fragment_begin:Mb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:Tb,opaque_fragment:Ab,packing:wb,premultiplied_alpha_fragment:Cb,project_vertex:Rb,dithering_fragment:Pb,dithering_pars_fragment:Lb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Ub,shadowmap_vertex:Ob,shadowmask_pars_fragment:Fb,skinbase_vertex:Bb,skinning_pars_vertex:kb,skinning_vertex:Hb,skinnormal_vertex:zb,specularmap_fragment:Vb,specularmap_pars_fragment:Gb,tonemapping_fragment:Wb,tonemapping_pars_fragment:Xb,transmission_fragment:$b,transmission_pars_fragment:jb,uv_pars_fragment:Yb,uv_pars_vertex:qb,uv_vertex:Kb,worldpos_vertex:Zb,background_vert:Jb,background_frag:Qb,backgroundCube_vert:eE,backgroundCube_frag:tE,cube_vert:nE,cube_frag:iE,depth_vert:rE,depth_frag:sE,distanceRGBA_vert:oE,distanceRGBA_frag:aE,equirect_vert:lE,equirect_frag:cE,linedashed_vert:uE,linedashed_frag:hE,meshbasic_vert:dE,meshbasic_frag:fE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:_E,meshnormal_vert:vE,meshnormal_frag:xE,meshphong_vert:yE,meshphong_frag:SE,meshphysical_vert:ME,meshphysical_frag:bE,meshtoon_vert:EE,meshtoon_frag:TE,points_vert:AE,points_frag:wE,shadow_vert:CE,shadow_frag:RE,sprite_vert:PE,sprite_frag:LE},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Bn={basic:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:$t([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:$t([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:$t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:$t([Se.points,Se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:$t([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:$t([Se.common,Se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:$t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:$t([Se.sprite,Se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:$t([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:$t([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Bn.physical={uniforms:$t([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ao={r:0,b:0,g:0},$i=new Xn,DE=new At;function IE(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?n:e).get(E)),E}function x(T){let E=!1;const P=_(T);P===null?p(a,l):P&&P.isColor&&(p(P,1),E=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,E){const P=_(E);P&&(P.isCubeTexture||P.mapping===ma)?(u===void 0&&(u=new Ln(new Vs(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Xr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(E.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DE.makeRotationFromEuler($i)),u.material.toneMapped=st.getTransfer(P.colorSpace)!==dt,(h!==P||d!==P.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=P,d=P.version,f=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Ln(new va(2,2),new Di({name:"BackgroundMaterial",uniforms:Xr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=st.getTransfer(P.colorSpace)!==dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=P,d=P.version,f=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,E){T.getRGB(Ao,Ep(t)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,E,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m,dispose:A}}function NE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,R,I,W,Q){let J=!1;const K=h(W,I,R);s!==K&&(s=K,c(s.object)),J=f(b,W,I,Q),J&&_(b,W,I,Q),Q!==null&&e.update(Q,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(b,R,I,W),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function h(b,R,I){const W=I.wireframe===!0;let Q=i[b.id];Q===void 0&&(Q={},i[b.id]=Q);let J=Q[R.id];J===void 0&&(J={},Q[R.id]=J);let K=J[W];return K===void 0&&(K=d(l()),J[W]=K),K}function d(b){const R=[],I=[],W=[];for(let Q=0;Q<n;Q++)R[Q]=0,I[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:W,object:b,attributes:{},index:null}}function f(b,R,I,W){const Q=s.attributes,J=R.attributes;let K=0;const Z=I.getAttributes();for(const V in Z)if(Z[V].location>=0){const xe=Q[V];let Te=J[V];if(Te===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;K++}return s.attributesNum!==K||s.index!==W}function _(b,R,I,W){const Q={},J=R.attributes;let K=0;const Z=I.getAttributes();for(const V in Z)if(Z[V].location>=0){let xe=J[V];xe===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));const Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),Q[V]=Te,K++}s.attributes=Q,s.attributesNum=K,s.index=W}function x(){const b=s.newAttributes;for(let R=0,I=b.length;R<I;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){const I=s.newAttributes,W=s.enabledAttributes,Q=s.attributeDivisors;I[b]=1,W[b]===0&&(t.enableVertexAttribArray(b),W[b]=1),Q[b]!==R&&(t.vertexAttribDivisor(b,R),Q[b]=R)}function A(){const b=s.newAttributes,R=s.enabledAttributes;for(let I=0,W=R.length;I<W;I++)R[I]!==b[I]&&(t.disableVertexAttribArray(I),R[I]=0)}function T(b,R,I,W,Q,J,K){K===!0?t.vertexAttribIPointer(b,R,I,Q,J):t.vertexAttribPointer(b,R,I,W,Q,J)}function E(b,R,I,W){x();const Q=W.attributes,J=I.getAttributes(),K=R.defaultAttributeValues;for(const Z in J){const V=J[Z];if(V.location>=0){let me=Q[Z];if(me===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),me!==void 0){const xe=me.normalized,Te=me.itemSize,Ue=e.get(me);if(Ue===void 0)continue;const ot=Ue.buffer,lt=Ue.type,it=Ue.bytesPerElement,te=lt===t.INT||lt===t.UNSIGNED_INT||me.gpuType===Jc;if(me.isInterleavedBufferAttribute){const oe=me.data,Ae=oe.stride,He=me.offset;if(oe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)p(V.location+Pe,oe.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let Pe=0;Pe<V.locationSize;Pe++)T(V.location+Pe,Te/V.locationSize,lt,xe,Ae*it,(He+Te/V.locationSize*Pe)*it,te)}else{if(me.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,me.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);t.bindBuffer(t.ARRAY_BUFFER,ot);for(let oe=0;oe<V.locationSize;oe++)T(V.location+oe,Te/V.locationSize,lt,xe,Te*it,Te/V.locationSize*oe*it,te)}}else if(K!==void 0){const xe=K[Z];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(V.location,xe);break;case 3:t.vertexAttrib3fv(V.location,xe);break;case 4:t.vertexAttrib4fv(V.location,xe);break;default:t.vertexAttrib1fv(V.location,xe)}}}}A()}function P(){U();for(const b in i){const R=i[b];for(const I in R){const W=R[I];for(const Q in W)u(W[Q].object),delete W[Q];delete R[I]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const R=i[b.id];for(const I in R){const W=R[I];for(const Q in W)u(W[Q].object),delete W[Q];delete R[I]}delete i[b.id]}function C(b){for(const R in i){const I=i[R];if(I[b.id]===void 0)continue;const W=I[b.id];for(const Q in W)u(W[Q].object),delete W[Q];delete I[b.id]}}function U(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function UE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];n.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==oi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ni&&!U)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:P,maxSamples:w}}function FE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Si,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,T=A*4;let E=p.clippingState||null;l.value=E,E=u(_,d,T,f);for(let P=0;P!==T;++P)E[P]=n[P];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=f+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=f;T!==x;++T,E+=4)o.copy(h[T]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function BE(t){let e=new WeakMap;function n(o,a){return a===Gl?o.mapping=Vr:a===Wl&&(o.mapping=Gr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gl||a===Wl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lr=4,Qh=[.125,.215,.35,.446,.526,.582],Qi=20,cl=new jS,ed=new Qe;let ul=null,hl=0,dl=0,fl=!1;const Yi=(1+Math.sqrt(5))/2,Ar=1/Yi,td=[new z(-Yi,Ar,0),new z(Yi,Ar,0),new z(-Ar,0,Yi),new z(Ar,0,Yi),new z(0,Yi,-Ar),new z(0,Yi,Ar),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],kE=new z;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=kE}=s;ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,hl,dl),this._renderer.xr.enabled=fl,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Hs,format:Pn,colorSpace:Wr,depthBuffer:!1},r=id(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HE(s)),this._blurMaterial=zE(s,e,n)}return r}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,cl)}_sceneToCubeUV(e,n,i,r,s){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ed),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new Sp({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new Ln(new Vs,x);let p=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,p=!0):(x.color.copy(ed),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const P=this._cubeSize;wo(r,E*P,T>2?P:0,P,P),h.setRenderTarget(r),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vr||e.mapping===Gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=td[(r-s-1)%td.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ln(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Qi;m>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const p=[];let A=0;for(let C=0;C<Qi;++C){const U=C/x,y=Math.exp(-U*U/2);p.push(y),C===0?A+=y:C<m&&(A+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const E=this._sizeLods[r],P=3*E*(r>T-Lr?r-T+Lr:0),w=4*(this._cubeSize-E);wo(n,P,w,3*E,2*E),l.setRenderTarget(n),l.render(h,cl)}}function HE(t){const e=[],n=[],i=[];let r=t;const s=t-Lr+1+Qh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Lr?l=Qh[o-t+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,x=3,m=2,p=1,A=new Float32Array(x*_*f),T=new Float32Array(m*_*f),E=new Float32Array(p*_*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,U=w>2?0:-1,y=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];A.set(y,x*_*w),T.set(d,m*_*w);const b=[w,w,w,w,w,w];E.set(b,p*_*w)}const P=new fn;P.setAttribute("position",new hn(A,x)),P.setAttribute("uv",new hn(T,m)),P.setAttribute("faceIndex",new hn(E,p)),e.push(P),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function id(t,e,n){const i=new lr(t,e,n);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zE(t,e,n){const i=new Float32Array(Qi),r=new z(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function rd(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function sd(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function VE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gl||l===Wl,u=l===Vr||l===Gr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new nd(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(n===null&&(n=new nd(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function GE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Os("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],t.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let x=0;if(f!==null){const A=f.array;x=f.version;for(let T=0,E=A.length;T<E;T+=3){const P=A[T+0],w=A[T+1],C=A[T+2];d.push(P,w,w,C,C,P)}}else if(_!==void 0){const A=_.array;x=_.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const P=T+0,w=T+1,C=T+2;d.push(P,w,w,C,C,P)}}else return;const m=new(_p(d)?bp:Mp)(d,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function XE(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,_){_!==0&&(t.drawElementsInstanced(i,f,s,d*o,_),n.update(f,i,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];n.update(m,i,1)}function h(d,f,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=f[A]*x[A];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $E(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jE(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let b=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let P=a.attributes.position.count*E,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*w*4*h),U=new vp(C,P,w,h);U.type=ni,U.needsUpdate=!0;const y=E*4;for(let R=0;R<h;R++){const I=p[R],W=A[R],Q=T[R],J=P*w*4*R;for(let K=0;K<I.count;K++){const Z=K*y;_===!0&&(r.fromBufferAttribute(I,K),C[J+Z+0]=r.x,C[J+Z+1]=r.y,C[J+Z+2]=r.z,C[J+Z+3]=0),x===!0&&(r.fromBufferAttribute(W,K),C[J+Z+4]=r.x,C[J+Z+5]=r.y,C[J+Z+6]=r.z,C[J+Z+7]=0),m===!0&&(r.fromBufferAttribute(Q,K),C[J+Z+8]=r.x,C[J+Z+9]=r.y,C[J+Z+10]=r.z,C[J+Z+11]=Q.itemSize===4?r.w:1)}}d={count:h,texture:U,size:new Ye(P,w)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function YE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Lp=new en,od=new Cp(1,1),Dp=new vp,Ip=new xS,Np=new Ap,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),hd=new Float32Array(4);function qr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ad[r];if(s===void 0&&(s=new Float32Array(r),ad[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xa(t,e){let n=ld[e];n===void 0&&(n=new Int32Array(e),ld[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;hd.set(i),t.uniformMatrix2fv(this.addr,!1,hd),Dt(n,i)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;ud.set(i),t.uniformMatrix3fv(this.addr,!1,ud),Dt(n,i)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;cd.set(i),t.uniformMatrix4fv(this.addr,!1,cd),Dt(n,i)}}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(od.compareFunction=gp,s=od):s=Lp,n.setTexture2D(e||s,r)}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ip,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Np,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dp,r)}function pT(t){switch(t){case 5126:return qE;case 35664:return KE;case 35665:return ZE;case 35666:return JE;case 35674:return QE;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return aT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return fT}}function mT(t,e){t.uniform1fv(this.addr,e)}function gT(t,e){const n=qr(e,this.size,2);t.uniform2fv(this.addr,n)}function _T(t,e){const n=qr(e,this.size,3);t.uniform3fv(this.addr,n)}function vT(t,e){const n=qr(e,this.size,4);t.uniform4fv(this.addr,n)}function xT(t,e){const n=qr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yT(t,e){const n=qr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ST(t,e){const n=qr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MT(t,e){t.uniform1iv(this.addr,e)}function bT(t,e){t.uniform2iv(this.addr,e)}function ET(t,e){t.uniform3iv(this.addr,e)}function TT(t,e){t.uniform4iv(this.addr,e)}function AT(t,e){t.uniform1uiv(this.addr,e)}function wT(t,e){t.uniform2uiv(this.addr,e)}function CT(t,e){t.uniform3uiv(this.addr,e)}function RT(t,e){t.uniform4uiv(this.addr,e)}function PT(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Lp,s[o])}function LT(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ip,s[o])}function DT(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Np,s[o])}function IT(t,e,n){const i=this.cache,r=e.length,s=xa(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Dp,s[o])}function NT(t){switch(t){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return bT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return wT;case 36295:return CT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return IT}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pT(n.type)}}class OT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NT(n.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function dd(t,e){t.seq.push(e),t.map[e.id]=e}function BT(t,e,n){const i=t.name,r=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),o=pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dd(n,c===void 0?new UT(a,t,e):new OT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new FT(a),dd(n,h)),n=h}}}class Vo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);BT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kT=37297;let HT=0;function zT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const pd=new je;function VT(t){st._getMatrix(pd,st.workingColorSpace,t);const e=`mat3( ${pd.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Ko:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function md(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+zT(t.getShaderSource(e),a)}else return s}function GT(t,e){const n=VT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function WT(t,e){let n;switch(e){case Dy:n="Linear";break;case Iy:n="Reinhard";break;case Ny:n="Cineon";break;case Uy:n="ACESFilmic";break;case Fy:n="AgX";break;case op:n="Neutral";break;case Oy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Co=new z;function XT(){st.getLuminanceCoefficients(Co);const t=Co.x.toFixed(4),e=Co.y.toFixed(4),n=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function jT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function cs(t){return t!==""}function gd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(t){return t.replace(qT,ZT)}const KT=new Map;function ZT(t,e){let n=qe[e];if(n===void 0){const i=KT.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sc(n)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(t){return t.replace(JT,QT)}function QT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===hy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function tA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vr:case Gr:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gr:e="ENVMAP_MODE_REFRACTION";break}return e}function iA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sp:e="ENVMAP_BLENDING_MULTIPLY";break;case Py:e="ENVMAP_BLENDING_MIX";break;case Ly:e="ENVMAP_BLENDING_ADD";break}return e}function rA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=eA(n),c=tA(n),u=nA(n),h=iA(n),d=rA(n),f=$T(n),_=jT(s),x=r.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(m=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?qe.tonemapping_pars_fragment:"",n.toneMapping!==wi?WT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,GT("linearToOutputTexel",n.outputColorSpace),XT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cs).join(`
`)),o=Sc(o),o=gd(o,n),o=_d(o,n),a=Sc(a),a=gd(a,n),a=_d(a,n),o=vd(o),a=vd(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+o,E=A+p+a,P=fd(r,r.VERTEX_SHADER,T),w=fd(r,r.FRAGMENT_SHADER,E);r.attachShader(x,P),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",W=r.getShaderInfoLog(P)||"",Q=r.getShaderInfoLog(w)||"",J=I.trim(),K=W.trim(),Z=Q.trim();let V=!0,me=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,w);else{const xe=md(r,P,"vertex"),Te=md(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+J+`
`+xe+`
`+Te)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(K===""||Z==="")&&(me=!1);me&&(R.diagnostics={runnable:V,programLog:J,vertexShader:{log:K,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(P),r.deleteShader(w),U=new Vo(r,x),y=YT(r,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,kT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=w,this}let oA=0;class aA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lA(e),n.set(e,i)),i}}class lA{constructor(e){this.id=oA++,this.code=e,this.usedTimes=0}}function cA(t,e,n,i,r,s,o){const a=new xp,l=new aA,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,R,I,W){const Q=I.fog,J=W.geometry,K=y.isMeshStandardMaterial?I.environment:null,Z=(y.isMeshStandardMaterial?n:e).get(y.envMap||K),V=Z&&Z.mapping===ma?Z.image.height:null,me=_[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Te=xe!==void 0?xe.length:0;let Ue=0;J.morphAttributes.position!==void 0&&(Ue=1),J.morphAttributes.normal!==void 0&&(Ue=2),J.morphAttributes.color!==void 0&&(Ue=3);let ot,lt,it,te;if(me){const ct=Bn[me];ot=ct.vertexShader,lt=ct.fragmentShader}else ot=y.vertexShader,lt=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const oe=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),He=W.isInstancedMesh===!0,Pe=W.isBatchedMesh===!0,Ze=!!y.map,wt=!!y.matcap,g=!!Z,L=!!y.aoMap,B=!!y.lightMap,X=!!y.bumpMap,H=!!y.normalMap,ie=!!y.displacementMap,q=!!y.emissiveMap,ee=!!y.metalnessMap,ce=!!y.roughnessMap,ne=y.anisotropy>0,S=y.clearcoat>0,v=y.dispersion>0,D=y.iridescence>0,k=y.sheen>0,Y=y.transmission>0,G=ne&&!!y.anisotropyMap,pe=S&&!!y.clearcoatMap,ae=S&&!!y.clearcoatNormalMap,Ee=S&&!!y.clearcoatRoughnessMap,Ce=D&&!!y.iridescenceMap,ue=D&&!!y.iridescenceThicknessMap,ye=k&&!!y.sheenColorMap,Oe=k&&!!y.sheenRoughnessMap,be=!!y.specularMap,ge=!!y.specularColorMap,Ge=!!y.specularIntensityMap,N=Y&&!!y.transmissionMap,fe=Y&&!!y.thicknessMap,ve=!!y.gradientMap,Re=!!y.alphaMap,he=y.alphaTest>0,re=!!y.alphaHash,De=!!y.extensions;let Xe=wi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const mt={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:lt,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&W._colorsTexture!==null,instancing:He,instancingColor:He&&W.instanceColor!==null,instancingMorph:He&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Wr,alphaToCoverage:!!y.alphaToCoverage,map:Ze,matcap:wt,envMap:g,envMapMode:g&&Z.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:B,bumpMap:X,normalMap:H,displacementMap:d&&ie,emissiveMap:q,normalMapObjectSpace:H&&y.normalMapType===zy,normalMapTangentSpace:H&&y.normalMapType===ru,metalnessMap:ee,roughnessMap:ce,anisotropy:ne,anisotropyMap:G,clearcoat:S,clearcoatMap:pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:v,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:ue,sheen:k,sheenColorMap:ye,sheenRoughnessMap:Oe,specularMap:be,specularColorMap:ge,specularIntensityMap:Ge,transmission:Y,transmissionMap:N,thicknessMap:fe,gradientMap:ve,opaque:y.transparent===!1&&y.blending===Fr&&y.alphaToCoverage===!1,alphaMap:Re,alphaTest:he,alphaHash:re,combine:y.combine,mapUv:Ze&&x(y.map.channel),aoMapUv:L&&x(y.aoMap.channel),lightMapUv:B&&x(y.lightMap.channel),bumpMapUv:X&&x(y.bumpMap.channel),normalMapUv:H&&x(y.normalMap.channel),displacementMapUv:ie&&x(y.displacementMap.channel),emissiveMapUv:q&&x(y.emissiveMap.channel),metalnessMapUv:ee&&x(y.metalnessMap.channel),roughnessMapUv:ce&&x(y.roughnessMap.channel),anisotropyMapUv:G&&x(y.anisotropyMap.channel),clearcoatMapUv:pe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(y.sheenRoughnessMap.channel),specularMapUv:be&&x(y.specularMap.channel),specularColorMapUv:ge&&x(y.specularColorMap.channel),specularIntensityMapUv:Ge&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:fe&&x(y.thicknessMap.channel),alphaMapUv:Re&&x(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(H||ne),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(Ze||Re),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ae,skinning:W.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ze&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:q&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:De&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&y.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(b,y),T(b,y),b.push(t.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function A(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function T(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){const b=_[y.type];let R;if(b){const I=Bn[b];R=DS.clone(I.uniforms)}else R=y.uniforms;return R}function P(y,b){let R;for(let I=0,W=u.length;I<W;I++){const Q=u[I];if(Q.cacheKey===b){R=Q,++R.usedTimes;break}}return R===void 0&&(R=new sA(t,b,y,s),u.push(R)),R}function w(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:U}}function uA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function yd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,f,_,x,m){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,_,x,m){const p=o(h,d,f,_,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):n.push(p)}function l(h,d,f,_,x,m){const p=o(h,d,f,_,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):n.unshift(p)}function c(h,d){n.length>1&&n.sort(h||hA),i.length>1&&i.sort(d||yd),r.length>1&&r.sort(d||yd)}function u(){for(let h=e,d=t.length;h<d;h++){const f=t[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Sd,t.set(i,[o])):r>=s.length?(o=new Sd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Qe};break;case"SpotLight":n={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function pA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mA=0;function gA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _A(t){const e=new fA,n=pA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new At,o=new At;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,A=0,T=0,E=0,P=0,w=0,C=0;c.sort(gA);for(let y=0,b=c.length;y<b;y++){const R=c[y],I=R.color,W=R.intensity,Q=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*W,h+=I.g*W,d+=I.b*W;else if(R.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(R.sh.coefficients[K],W);C++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,V=n.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=R.shadow.matrix,A++}i.directional[f]=K,f++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(I).multiplyScalar(W),K.distance=Q,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,i.spot[x]=K;const Z=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,Z.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[x]=Z.matrix,R.castShadow){const V=n.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=J,E++}x++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(I).multiplyScalar(W),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=K,m++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const Z=R.shadow,V=n.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=R.shadow.matrix,T++}i.point[_]=K,_++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(W),K.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[p]=K,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==f||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==E||U.numSpotMaps!==P||U.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,U.directionalLength=f,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=E,U.numSpotMaps=P,U.numLightProbes=C,i.version=mA++)}function l(c,u){let h=0,d=0,f=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(T.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Md(t){const e=new _A(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Md(t),e.set(r,[a])):s>=o.length?(a=new Md(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(t,e,n){let i=new wp;const r=new Ye,s=new Ye,o=new bt,a=new WS({depthPacking:Hy}),l=new XS,c={},u=n.maxTextureSize,h={[Li]:Qt,[Qt]:Li,[zn]:zn},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ln(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rp;let p=this.type;this.render=function(w,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=t.getRenderTarget(),b=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ai),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=p!==Qn&&this.type===Qn,Q=p===Qn&&this.type!==Qn;for(let J=0,K=w.length;J<K;J++){const Z=w[J],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const me=V.getFrameExtents();if(r.multiply(me),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,V.mapSize.y=s.y)),V.map===null||W===!0||Q===!0){const Te=this.type!==Qn?{minFilter:Dn,magFilter:Dn}:{};V.map!==null&&V.map.dispose(),V.map=new lr(r.x,r.y,Te),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const xe=V.getViewportCount();for(let Te=0;Te<xe;Te++){const Ue=V.getViewport(Te);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),I.viewport(o),V.updateMatrices(Z,Te),i=V.getFrustum(),E(C,U,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Qn&&A(V,U),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,b,R)};function A(w,C){const U=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new lr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,U,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,U,f,x,null)}function T(w,C,U,y){let b=null;const R=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)b=R;else if(b=U.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=b.uuid,W=C.uuid;let Q=c[I];Q===void 0&&(Q={},c[I]=Q);let J=Q[W];J===void 0&&(J=b.clone(),Q[W]=J,C.addEventListener("dispose",P)),b=J}if(b.visible=C.visible,b.wireframe=C.wireframe,y===Qn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=t.properties.get(b);I.light=U}return b}function E(w,C,U,y,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Qn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const W=e.update(w),Q=w.material;if(Array.isArray(Q)){const J=W.groups;for(let K=0,Z=J.length;K<Z;K++){const V=J[K],me=Q[V.materialIndex];if(me&&me.visible){const xe=T(w,me,y,b);w.onBeforeShadow(t,w,C,U,W,xe,V),t.renderBufferDirect(U,null,W,xe,w,V),w.onAfterShadow(t,w,C,U,W,xe,V)}}}else if(Q.visible){const J=T(w,Q,y,b);w.onBeforeShadow(t,w,C,U,W,J,null),t.renderBufferDirect(U,null,W,J,w,null),w.onAfterShadow(t,w,C,U,W,J,null)}}const I=w.children;for(let W=0,Q=I.length;W<Q;W++)E(I[W],C,U,y,b)}function P(w){w.target.removeEventListener("dispose",P);for(const U in c){const y=c[U],b=w.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const MA={[Ol]:Fl,[Bl]:zl,[kl]:Vl,[zr]:Hl,[Fl]:Ol,[zl]:Bl,[Vl]:kl,[Hl]:zr};function bA(t,e){function n(){let N=!1;const fe=new bt;let ve=null;const Re=new bt(0,0,0,0);return{setMask:function(he){ve!==he&&!N&&(t.colorMask(he,he,he,he),ve=he)},setLocked:function(he){N=he},setClear:function(he,re,De,Xe,mt){mt===!0&&(he*=Xe,re*=Xe,De*=Xe),fe.set(he,re,De,Xe),Re.equals(fe)===!1&&(t.clearColor(he,re,De,Xe),Re.copy(fe))},reset:function(){N=!1,ve=null,Re.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,ve=null,Re=null,he=null;return{setReversed:function(re){if(fe!==re){const De=e.get("EXT_clip_control");re?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Xe=he;he=null,this.setClear(Xe)}},getReversed:function(){return fe},setTest:function(re){re?oe(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(re){ve!==re&&!N&&(t.depthMask(re),ve=re)},setFunc:function(re){if(fe&&(re=MA[re]),Re!==re){switch(re){case Ol:t.depthFunc(t.NEVER);break;case Fl:t.depthFunc(t.ALWAYS);break;case Bl:t.depthFunc(t.LESS);break;case zr:t.depthFunc(t.LEQUAL);break;case kl:t.depthFunc(t.EQUAL);break;case Hl:t.depthFunc(t.GEQUAL);break;case zl:t.depthFunc(t.GREATER);break;case Vl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=re}},setLocked:function(re){N=re},setClear:function(re){he!==re&&(fe&&(re=1-re),t.clearDepth(re),he=re)},reset:function(){N=!1,ve=null,Re=null,he=null,fe=!1}}}function r(){let N=!1,fe=null,ve=null,Re=null,he=null,re=null,De=null,Xe=null,mt=null;return{setTest:function(ct){N||(ct?oe(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!N&&(t.stencilMask(ct),fe=ct)},setFunc:function(ct,jn,Nn){(ve!==ct||Re!==jn||he!==Nn)&&(t.stencilFunc(ct,jn,Nn),ve=ct,Re=jn,he=Nn)},setOp:function(ct,jn,Nn){(re!==ct||De!==jn||Xe!==Nn)&&(t.stencilOp(ct,jn,Nn),re=ct,De=jn,Xe=Nn)},setLocked:function(ct){N=ct},setClear:function(ct){mt!==ct&&(t.clearStencil(ct),mt=ct)},reset:function(){N=!1,fe=null,ve=null,Re=null,he=null,re=null,De=null,Xe=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,A=null,T=null,E=null,P=null,w=null,C=new Qe(0,0,0),U=0,y=!1,b=null,R=null,I=null,W=null,Q=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=Z>=2);let me=null,xe={};const Te=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),ot=new bt().fromArray(Te),lt=new bt().fromArray(Ue);function it(N,fe,ve,Re){const he=new Uint8Array(4),re=t.createTexture();t.bindTexture(N,re),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<ve;De++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(fe+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return re}const te={};te[t.TEXTURE_2D]=it(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=it(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=it(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=it(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(zr),X(!1),H(yh),oe(t.CULL_FACE),L(Ai);function oe(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function Ae(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function He(N,fe){return h[N]!==fe?(t.bindFramebuffer(N,fe),h[N]=fe,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(N,fe){let ve=f,Re=!1;if(N){ve=d.get(fe),ve===void 0&&(ve=[],d.set(fe,ve));const he=N.textures;if(ve.length!==he.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let re=0,De=he.length;re<De;re++)ve[re]=t.COLOR_ATTACHMENT0+re;ve.length=he.length,Re=!0}}else ve[0]!==t.BACK&&(ve[0]=t.BACK,Re=!0);Re&&t.drawBuffers(ve)}function Ze(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const wt={[Ji]:t.FUNC_ADD,[fy]:t.FUNC_SUBTRACT,[py]:t.FUNC_REVERSE_SUBTRACT};wt[my]=t.MIN,wt[gy]=t.MAX;const g={[_y]:t.ZERO,[vy]:t.ONE,[xy]:t.SRC_COLOR,[Nl]:t.SRC_ALPHA,[Ty]:t.SRC_ALPHA_SATURATE,[by]:t.DST_COLOR,[Sy]:t.DST_ALPHA,[yy]:t.ONE_MINUS_SRC_COLOR,[Ul]:t.ONE_MINUS_SRC_ALPHA,[Ey]:t.ONE_MINUS_DST_COLOR,[My]:t.ONE_MINUS_DST_ALPHA,[Ay]:t.CONSTANT_COLOR,[wy]:t.ONE_MINUS_CONSTANT_COLOR,[Cy]:t.CONSTANT_ALPHA,[Ry]:t.ONE_MINUS_CONSTANT_ALPHA};function L(N,fe,ve,Re,he,re,De,Xe,mt,ct){if(N===Ai){x===!0&&(Ae(t.BLEND),x=!1);return}if(x===!1&&(oe(t.BLEND),x=!0),N!==dy){if(N!==m||ct!==y){if((p!==Ji||E!==Ji)&&(t.blendEquation(t.FUNC_ADD),p=Ji,E=Ji),ct)switch(N){case Fr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sh:t.blendFunc(t.ONE,t.ONE);break;case Mh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Fr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,T=null,P=null,w=null,C.set(0,0,0),U=0,m=N,y=ct}return}he=he||fe,re=re||ve,De=De||Re,(fe!==p||he!==E)&&(t.blendEquationSeparate(wt[fe],wt[he]),p=fe,E=he),(ve!==A||Re!==T||re!==P||De!==w)&&(t.blendFuncSeparate(g[ve],g[Re],g[re],g[De]),A=ve,T=Re,P=re,w=De),(Xe.equals(C)===!1||mt!==U)&&(t.blendColor(Xe.r,Xe.g,Xe.b,mt),C.copy(Xe),U=mt),m=N,y=!1}function B(N,fe){N.side===zn?Ae(t.CULL_FACE):oe(t.CULL_FACE);let ve=N.side===Qt;fe&&(ve=!ve),X(ve),N.blending===Fr&&N.transparent===!1?L(Ai):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Re=N.stencilWrite;a.setTest(Re),Re&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function X(N){b!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),b=N)}function H(N){N!==cy?(oe(t.CULL_FACE),N!==R&&(N===yh?t.cullFace(t.BACK):N===uy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),R=N}function ie(N){N!==I&&(K&&t.lineWidth(N),I=N)}function q(N,fe,ve){N?(oe(t.POLYGON_OFFSET_FILL),(W!==fe||Q!==ve)&&(t.polygonOffset(fe,ve),W=fe,Q=ve)):Ae(t.POLYGON_OFFSET_FILL)}function ee(N){N?oe(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ce(N){N===void 0&&(N=t.TEXTURE0+J-1),me!==N&&(t.activeTexture(N),me=N)}function ne(N,fe,ve){ve===void 0&&(me===null?ve=t.TEXTURE0+J-1:ve=me);let Re=xe[ve];Re===void 0&&(Re={type:void 0,texture:void 0},xe[ve]=Re),(Re.type!==N||Re.texture!==fe)&&(me!==ve&&(t.activeTexture(ve),me=ve),t.bindTexture(N,fe||te[N]),Re.type=N,Re.texture=fe)}function S(){const N=xe[me];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(N){ot.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ot.copy(N))}function Oe(N){lt.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),lt.copy(N))}function be(N,fe){let ve=c.get(fe);ve===void 0&&(ve=new WeakMap,c.set(fe,ve));let Re=ve.get(N);Re===void 0&&(Re=t.getUniformBlockIndex(fe,N.name),ve.set(N,Re))}function ge(N,fe){const Re=c.get(fe).get(N);l.get(fe)!==Re&&(t.uniformBlockBinding(fe,Re,N.__bindingPointIndex),l.set(fe,Re))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},me=null,xe={},h={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,A=null,T=null,E=null,P=null,w=null,C=new Qe(0,0,0),U=0,y=!1,b=null,R=null,I=null,W=null,Q=null,ot.set(0,0,t.canvas.width,t.canvas.height),lt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ae,bindFramebuffer:He,drawBuffers:Pe,useProgram:Ze,setBlending:L,setMaterial:B,setFlipSided:X,setCullFace:H,setLineWidth:ie,setPolygonOffset:q,setScissorTest:ee,activeTexture:ce,bindTexture:ne,unbindTexture:S,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Ce,texImage3D:ue,updateUBOMapping:be,uniformBlockBinding:ge,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:k,texSubImage3D:Y,compressedTexSubImage2D:G,compressedTexSubImage3D:pe,scissor:ye,viewport:Oe,reset:Ge}}function EA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return f?new OffscreenCanvas(S,v):Jo("canvas")}function x(S,v,D){let k=1;const Y=ne(S);if((Y.width>D||Y.height>D)&&(k=D/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(k*Y.width),pe=Math.floor(k*Y.height);h===void 0&&(h=_(G,pe));const ae=v?_(G,pe):h;return ae.width=G,ae.height=pe,ae.getContext("2d").drawImage(S,0,0,G,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+G+"x"+pe+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){t.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(S,v,D,k,Y=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=v;if(v===t.RED&&(D===t.FLOAT&&(G=t.R32F),D===t.HALF_FLOAT&&(G=t.R16F),D===t.UNSIGNED_BYTE&&(G=t.R8)),v===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(G=t.R8UI),D===t.UNSIGNED_SHORT&&(G=t.R16UI),D===t.UNSIGNED_INT&&(G=t.R32UI),D===t.BYTE&&(G=t.R8I),D===t.SHORT&&(G=t.R16I),D===t.INT&&(G=t.R32I)),v===t.RG&&(D===t.FLOAT&&(G=t.RG32F),D===t.HALF_FLOAT&&(G=t.RG16F),D===t.UNSIGNED_BYTE&&(G=t.RG8)),v===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(G=t.RG8UI),D===t.UNSIGNED_SHORT&&(G=t.RG16UI),D===t.UNSIGNED_INT&&(G=t.RG32UI),D===t.BYTE&&(G=t.RG8I),D===t.SHORT&&(G=t.RG16I),D===t.INT&&(G=t.RG32I)),v===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(G=t.RGB8UI),D===t.UNSIGNED_SHORT&&(G=t.RGB16UI),D===t.UNSIGNED_INT&&(G=t.RGB32UI),D===t.BYTE&&(G=t.RGB8I),D===t.SHORT&&(G=t.RGB16I),D===t.INT&&(G=t.RGB32I)),v===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),D===t.UNSIGNED_INT&&(G=t.RGBA32UI),D===t.BYTE&&(G=t.RGBA8I),D===t.SHORT&&(G=t.RGBA16I),D===t.INT&&(G=t.RGBA32I)),v===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(G=t.R11F_G11F_B10F)),v===t.RGBA){const pe=Y?Ko:st.getTransfer(k);D===t.FLOAT&&(G=t.RGBA32F),D===t.HALF_FLOAT&&(G=t.RGBA16F),D===t.UNSIGNED_BYTE&&(G=pe===dt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(S,v){let D;return S?v===null||v===or||v===Ds?D=t.DEPTH24_STENCIL8:v===ni?D=t.DEPTH32F_STENCIL8:v===Ls&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===or||v===Ds?D=t.DEPTH_COMPONENT24:v===ni?D=t.DEPTH_COMPONENT32F:v===Ls&&(D=t.DEPTH_COMPONENT16),D}function P(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dn&&S.minFilter!==Vn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function w(S){const v=S.target;v.removeEventListener("dispose",w),U(v),v.isVideoTexture&&u.delete(v)}function C(S){const v=S.target;v.removeEventListener("dispose",C),b(v)}function U(S){const v=i.get(S);if(v.__webglInit===void 0)return;const D=S.source,k=d.get(D);if(k){const Y=k[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(S),Object.keys(k).length===0&&d.delete(D)}i.remove(S)}function y(S){const v=i.get(S);t.deleteTexture(v.__webglTexture);const D=S.source,k=d.get(D);delete k[v.__cacheKey],o.memory.textures--}function b(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let Y=0;Y<v.__webglFramebuffer[k].length;Y++)t.deleteFramebuffer(v.__webglFramebuffer[k][Y]);else t.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)t.deleteFramebuffer(v.__webglFramebuffer[k]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=S.textures;for(let k=0,Y=D.length;k<Y;k++){const G=i.get(D[k]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(D[k])}i.remove(S)}let R=0;function I(){R=0}function W(){const S=R;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),R+=1,S}function Q(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function J(S,v){const D=i.get(S);if(S.isVideoTexture&&ee(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&D.__version!==S.version){const k=S.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,S,v);return}}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+v)}function K(S,v){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){te(D,S,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+v)}function Z(S,v){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){te(D,S,v);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+v)}function V(S,v){const D=i.get(S);if(S.version>0&&D.__version!==S.version){oe(D,S,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+v)}const me={[Xl]:t.REPEAT,[er]:t.CLAMP_TO_EDGE,[$l]:t.MIRRORED_REPEAT},xe={[Dn]:t.NEAREST,[By]:t.NEAREST_MIPMAP_NEAREST,[no]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[Ba]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},Te={[Vy]:t.NEVER,[Yy]:t.ALWAYS,[Gy]:t.LESS,[gp]:t.LEQUAL,[Wy]:t.EQUAL,[jy]:t.GEQUAL,[Xy]:t.GREATER,[$y]:t.NOTEQUAL};function Ue(S,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vn||v.magFilter===Ba||v.magFilter===no||v.magFilter===tr||v.minFilter===Vn||v.minFilter===Ba||v.minFilter===no||v.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,me[v.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,me[v.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,me[v.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,xe[v.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,xe[v.minFilter]),v.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dn||v.minFilter!==no&&v.minFilter!==tr||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ot(S,v){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",w));const k=v.source;let Y=d.get(k);Y===void 0&&(Y={},d.set(k,Y));const G=Q(v);if(G!==S.__cacheKey){Y[G]===void 0&&(Y[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Y[G].usedTimes++;const pe=Y[S.__cacheKey];pe!==void 0&&(Y[S.__cacheKey].usedTimes--,pe.usedTimes===0&&y(v)),S.__cacheKey=G,S.__webglTexture=Y[G].texture}return D}function lt(S,v,D){return Math.floor(Math.floor(S/D)/v)}function it(S,v,D,k){const G=S.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,D,k,v.data);else{G.sort((ue,ye)=>ue.start-ye.start);let pe=0;for(let ue=1;ue<G.length;ue++){const ye=G[pe],Oe=G[ue],be=ye.start+ye.count,ge=lt(Oe.start,v.width,4),Ge=lt(ye.start,v.width,4);Oe.start<=be+1&&ge===Ge&&lt(Oe.start+Oe.count-1,v.width,4)===ge?ye.count=Math.max(ye.count,Oe.start+Oe.count-ye.start):(++pe,G[pe]=Oe)}G.length=pe+1;const ae=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ue=0,ye=G.length;ue<ye;ue++){const Oe=G[ue],be=Math.floor(Oe.start/4),ge=Math.ceil(Oe.count/4),Ge=be%v.width,N=Math.floor(be/v.width),fe=ge,ve=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ge,N,fe,ve,D,k,v.data)}S.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function te(S,v,D){let k=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=t.TEXTURE_3D);const Y=ot(S,v),G=v.source;n.bindTexture(k,S.__webglTexture,t.TEXTURE0+D);const pe=i.get(G);if(G.version!==pe.__version||Y===!0){n.activeTexture(t.TEXTURE0+D);const ae=st.getPrimaries(st.workingColorSpace),Ee=v.colorSpace===Mi?null:st.getPrimaries(v.colorSpace),Ce=v.colorSpace===Mi||ae===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ue=x(v.image,!1,r.maxTextureSize);ue=ce(v,ue);const ye=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type);let be=T(v.internalFormat,ye,Oe,v.colorSpace,v.isVideoTexture);Ue(k,v);let ge;const Ge=v.mipmaps,N=v.isVideoTexture!==!0,fe=pe.__version===void 0||Y===!0,ve=G.dataReady,Re=P(v,ue);if(v.isDepthTexture)be=E(v.format===Ns,v.type),fe&&(N?n.texStorage2D(t.TEXTURE_2D,1,be,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,be,ue.width,ue.height,0,ye,Oe,null));else if(v.isDataTexture)if(Ge.length>0){N&&fe&&n.texStorage2D(t.TEXTURE_2D,Re,be,Ge[0].width,Ge[0].height);for(let he=0,re=Ge.length;he<re;he++)ge=Ge[he],N?ve&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ge.width,ge.height,ye,Oe,ge.data):n.texImage2D(t.TEXTURE_2D,he,be,ge.width,ge.height,0,ye,Oe,ge.data);v.generateMipmaps=!1}else N?(fe&&n.texStorage2D(t.TEXTURE_2D,Re,be,ue.width,ue.height),ve&&it(v,ue,ye,Oe)):n.texImage2D(t.TEXTURE_2D,0,be,ue.width,ue.height,0,ye,Oe,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,be,Ge[0].width,Ge[0].height,ue.depth);for(let he=0,re=Ge.length;he<re;he++)if(ge=Ge[he],v.format!==Pn)if(ye!==null)if(N){if(ve)if(v.layerUpdates.size>0){const De=Jh(ge.width,ge.height,v.format,v.type);for(const Xe of v.layerUpdates){const mt=ge.data.subarray(Xe*De/ge.data.BYTES_PER_ELEMENT,(Xe+1)*De/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,Xe,ge.width,ge.height,1,ye,mt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,ue.depth,ye,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,be,ge.width,ge.height,ue.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,ue.depth,ye,Oe,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,be,ge.width,ge.height,ue.depth,0,ye,Oe,ge.data)}else{N&&fe&&n.texStorage2D(t.TEXTURE_2D,Re,be,Ge[0].width,Ge[0].height);for(let he=0,re=Ge.length;he<re;he++)ge=Ge[he],v.format!==Pn?ye!==null?N?ve&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,ge.width,ge.height,ye,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,he,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ge.width,ge.height,ye,Oe,ge.data):n.texImage2D(t.TEXTURE_2D,he,be,ge.width,ge.height,0,ye,Oe,ge.data)}else if(v.isDataArrayTexture)if(N){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,be,ue.width,ue.height,ue.depth),ve)if(v.layerUpdates.size>0){const he=Jh(ue.width,ue.height,v.format,v.type);for(const re of v.layerUpdates){const De=ue.data.subarray(re*he/ue.data.BYTES_PER_ELEMENT,(re+1)*he/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,ye,Oe,De)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,Oe,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ue.width,ue.height,ue.depth,0,ye,Oe,ue.data);else if(v.isData3DTexture)N?(fe&&n.texStorage3D(t.TEXTURE_3D,Re,be,ue.width,ue.height,ue.depth),ve&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,Oe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,be,ue.width,ue.height,ue.depth,0,ye,Oe,ue.data);else if(v.isFramebufferTexture){if(fe)if(N)n.texStorage2D(t.TEXTURE_2D,Re,be,ue.width,ue.height);else{let he=ue.width,re=ue.height;for(let De=0;De<Re;De++)n.texImage2D(t.TEXTURE_2D,De,be,he,re,0,ye,Oe,null),he>>=1,re>>=1}}else if(Ge.length>0){if(N&&fe){const he=ne(Ge[0]);n.texStorage2D(t.TEXTURE_2D,Re,be,he.width,he.height)}for(let he=0,re=Ge.length;he<re;he++)ge=Ge[he],N?ve&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ye,Oe,ge):n.texImage2D(t.TEXTURE_2D,he,be,ye,Oe,ge);v.generateMipmaps=!1}else if(N){if(fe){const he=ne(ue);n.texStorage2D(t.TEXTURE_2D,Re,be,he.width,he.height)}ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Oe,ue)}else n.texImage2D(t.TEXTURE_2D,0,be,ye,Oe,ue);m(v)&&p(k),pe.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function oe(S,v,D){if(v.image.length!==6)return;const k=ot(S,v),Y=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+D);const G=i.get(Y);if(Y.version!==G.__version||k===!0){n.activeTexture(t.TEXTURE0+D);const pe=st.getPrimaries(st.workingColorSpace),ae=v.colorSpace===Mi?null:st.getPrimaries(v.colorSpace),Ee=v.colorSpace===Mi||pe===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let re=0;re<6;re++)!Ce&&!ue?ye[re]=x(v.image[re],!0,r.maxCubemapSize):ye[re]=ue?v.image[re].image:v.image[re],ye[re]=ce(v,ye[re]);const Oe=ye[0],be=s.convert(v.format,v.colorSpace),ge=s.convert(v.type),Ge=T(v.internalFormat,be,ge,v.colorSpace),N=v.isVideoTexture!==!0,fe=G.__version===void 0||k===!0,ve=Y.dataReady;let Re=P(v,Oe);Ue(t.TEXTURE_CUBE_MAP,v);let he;if(Ce){N&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,Ge,Oe.width,Oe.height);for(let re=0;re<6;re++){he=ye[re].mipmaps;for(let De=0;De<he.length;De++){const Xe=he[De];v.format!==Pn?be!==null?N?ve&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,Xe.width,Xe.height,be,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,Ge,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,Xe.width,Xe.height,be,ge,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,Ge,Xe.width,Xe.height,0,be,ge,Xe.data)}}}else{if(he=v.mipmaps,N&&fe){he.length>0&&Re++;const re=ne(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(ue){N?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ye[re].width,ye[re].height,be,ge,ye[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,ye[re].width,ye[re].height,0,be,ge,ye[re].data);for(let De=0;De<he.length;De++){const mt=he[De].image[re].image;N?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,mt.width,mt.height,be,ge,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,Ge,mt.width,mt.height,0,be,ge,mt.data)}}else{N?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be,ge,ye[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,be,ge,ye[re]);for(let De=0;De<he.length;De++){const Xe=he[De];N?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,be,ge,Xe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,Ge,be,ge,Xe.image[re])}}}m(v)&&p(t.TEXTURE_CUBE_MAP),G.__version=Y.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Ae(S,v,D,k,Y,G){const pe=s.convert(D.format,D.colorSpace),ae=s.convert(D.type),Ee=T(D.internalFormat,pe,ae,D.colorSpace),Ce=i.get(v),ue=i.get(D);if(ue.__renderTarget=v,!Ce.__hasExternalTextures){const ye=Math.max(1,v.width>>G),Oe=Math.max(1,v.height>>G);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,G,Ee,ye,Oe,v.depth,0,pe,ae,null):n.texImage2D(Y,G,Ee,ye,Oe,0,pe,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,Y,ue.__webglTexture,0,ie(v)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,Y,ue.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(S,v,D){if(t.bindRenderbuffer(t.RENDERBUFFER,S),v.depthBuffer){const k=v.depthTexture,Y=k&&k.isDepthTexture?k.type:null,G=E(v.stencilBuffer,Y),pe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=ie(v);q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,G,v.width,v.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,G,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,G,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,S)}else{const k=v.textures;for(let Y=0;Y<k.length;Y++){const G=k[Y],pe=s.convert(G.format,G.colorSpace),ae=s.convert(G.type),Ee=T(G.internalFormat,pe,ae,G.colorSpace),Ce=ie(v);D&&q(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ee,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Ee,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(v.depthTexture);k.__renderTarget=v,(!k.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const Y=k.__webglTexture,G=ie(v);if(v.depthTexture.format===Is)q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(v.depthTexture.format===Ns)q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ze(S){const v=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const k=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=k}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const k=S.texture.mipmaps;k&&k.length>0?Pe(v.__webglFramebuffer[0],S):Pe(v.__webglFramebuffer,S)}else if(D){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=t.createRenderbuffer(),He(v.__webglDepthbuffer[k],S,!1);else{const Y=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,G)}}else{const k=S.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),He(v.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function wt(S,v,D){const k=i.get(S);v!==void 0&&Ae(k.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Ze(S)}function g(S){const v=S.texture,D=i.get(S),k=i.get(v);S.addEventListener("dispose",C);const Y=S.textures,G=S.isWebGLCubeRenderTarget===!0,pe=Y.length>1;if(pe||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=v.version,o.memory.textures++),G){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)D.__webglFramebuffer[ae][Ee]=t.createFramebuffer()}else D.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)D.__webglFramebuffer[ae]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(pe)for(let ae=0,Ee=Y.length;ae<Ee;ae++){const Ce=i.get(Y[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&q(S)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<Y.length;ae++){const Ee=Y[ae];D.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Ce=s.convert(Ee.format,Ee.colorSpace),ue=s.convert(Ee.type),ye=T(Ee.internalFormat,Ce,ue,Ee.colorSpace,S.isXRRenderTarget===!0),Oe=ie(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,ye,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),He(D.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)Ae(D.__webglFramebuffer[ae][Ee],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else Ae(D.__webglFramebuffer[ae],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let ae=0,Ee=Y.length;ae<Ee;ae++){const Ce=Y[ae],ue=i.get(Ce);let ye=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ye=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,ue.__webglTexture),Ue(ye,Ce),Ae(D.__webglFramebuffer,S,Ce,t.COLOR_ATTACHMENT0+ae,ye,0),m(Ce)&&p(ye)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,k.__webglTexture),Ue(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)Ae(D.__webglFramebuffer[Ee],S,v,t.COLOR_ATTACHMENT0,ae,Ee);else Ae(D.__webglFramebuffer,S,v,t.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),n.unbindTexture()}S.depthBuffer&&Ze(S)}function L(S){const v=S.textures;for(let D=0,k=v.length;D<k;D++){const Y=v[D];if(m(Y)){const G=A(S),pe=i.get(Y).__webglTexture;n.bindTexture(G,pe),p(G),n.unbindTexture()}}}const B=[],X=[];function H(S){if(S.samples>0){if(q(S)===!1){const v=S.textures,D=S.width,k=S.height;let Y=t.COLOR_BUFFER_BIT;const G=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(S),ae=v.length>1;if(ae)for(let Ce=0;Ce<v.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const Ee=S.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const ue=i.get(v[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,D,k,0,0,D,k,Y,t.NEAREST),l===!0&&(B.length=0,X.length=0,B.push(t.COLOR_ATTACHMENT0+Ce),S.depthBuffer&&S.resolveDepthBuffer===!1&&(B.push(G),X.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,X)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,B))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<v.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const ue=i.get(v[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ie(S){return Math.min(r.maxSamples,S.samples)}function q(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function ce(S,v){const D=S.colorSpace,k=S.format,Y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==Wr&&D!==Mi&&(st.getTransfer(D)===dt?(k!==Pn||Y!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function ne(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=wt,this.setupRenderTarget=g,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=q}function TA(t,e){function n(i,r=Mi){let s;const o=st.getTransfer(r);if(i===oi)return t.UNSIGNED_BYTE;if(i===Qc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===up)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===lp)return t.BYTE;if(i===cp)return t.SHORT;if(i===Ls)return t.UNSIGNED_SHORT;if(i===Jc)return t.INT;if(i===or)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Hs)return t.HALF_FLOAT;if(i===dp)return t.ALPHA;if(i===fp)return t.RGB;if(i===Pn)return t.RGBA;if(i===Is)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===pp)return t.RED;if(i===tu)return t.RED_INTEGER;if(i===mp)return t.RG;if(i===nu)return t.RG_INTEGER;if(i===iu)return t.RGBA_INTEGER;if(i===Bo||i===ko||i===Ho||i===zo)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Yl||i===ql||i===Kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zl||i===Jl||i===Ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zl||i===Jl)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ql)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ec)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pc||i===mc||i===gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pc)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===vc||i===xc||i===yc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_c)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
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

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Rp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:AA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends ur{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const x=typeof XRWebGLBinding<"u",m=new CA,p={},A=n.getContextAttributes();let T=null,E=null;const P=[],w=[],C=new Ye;let U=null;const y=new yn;y.viewport=new bt;const b=new yn;b.viewport=new bt;const R=[y,b],I=new YS;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=P[te];return oe===void 0&&(oe=new sl,P[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=P[te];return oe===void 0&&(oe=new sl,P[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=P[te];return oe===void 0&&(oe=new sl,P[te]=oe),oe.getHandSpace()};function J(te){const oe=w.indexOf(te.inputSource);if(oe===-1)return;const Ae=P[oe];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,c||o),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function K(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<P.length;te++){const oe=w[te];oe!==null&&(w[te]=null,P[te].disconnect(oe))}W=null,Q=null,m.reset();for(const te in p)delete p[te];e.setRenderTarget(T),f=null,d=null,h=null,r=null,E=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Z),A.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,He=null,Pe=null;A.depth&&(Pe=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=A.stencil?Ns:Is,He=A.stencil?Ds:or);const Ze={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new lr(d.textureWidth,d.textureHeight,{format:Pn,type:oi,depthTexture:new Cp(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ae={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new lr(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(te){for(let oe=0;oe<te.removed.length;oe++){const Ae=te.removed[oe],He=w.indexOf(Ae);He>=0&&(w[He]=null,P[He].disconnect(Ae))}for(let oe=0;oe<te.added.length;oe++){const Ae=te.added[oe];let He=w.indexOf(Ae);if(He===-1){for(let Ze=0;Ze<P.length;Ze++)if(Ze>=w.length){w.push(Ae),He=Ze;break}else if(w[Ze]===null){w[Ze]=Ae,He=Ze;break}if(He===-1)break}const Pe=P[He];Pe&&Pe.connect(Ae)}}const V=new z,me=new z;function xe(te,oe,Ae){V.setFromMatrixPosition(oe.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const He=V.distanceTo(me),Pe=oe.projectionMatrix.elements,Ze=Ae.projectionMatrix.elements,wt=Pe[14]/(Pe[10]-1),g=Pe[14]/(Pe[10]+1),L=(Pe[9]+1)/Pe[5],B=(Pe[9]-1)/Pe[5],X=(Pe[8]-1)/Pe[0],H=(Ze[8]+1)/Ze[0],ie=wt*X,q=wt*H,ee=He/(-X+H),ce=ee*-X;if(oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ce),te.translateZ(ee),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Pe[10]===-1)te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ne=wt+ee,S=g+ee,v=ie-ce,D=q+(He-ce),k=L*g/S*ne,Y=B*g/S*ne;te.projectionMatrix.makePerspective(v,D,k,Y,ne,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Te(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let oe=te.near,Ae=te.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),I.near=b.near=y.near=oe,I.far=b.far=y.far=Ae,(W!==I.near||Q!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,Q=I.far),I.layers.mask=te.layers.mask|6,y.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const He=te.parent,Pe=I.cameras;Te(I,He);for(let Ze=0;Ze<Pe.length;Ze++)Te(Pe[Ze],He);Pe.length===2?xe(I,y,b):I.projectionMatrix.copy(y.projectionMatrix),Ue(te,I,He)};function Ue(te,oe,Ae){Ae===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Us*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(te){return p[te]};let ot=null;function lt(te,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){const Ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let He=!1;Ae.length!==I.cameras.length&&(I.cameras.length=0,He=!0);for(let g=0;g<Ae.length;g++){const L=Ae[g];let B=null;if(f!==null)B=f.getViewport(L);else{const H=h.getViewSubImage(d,L);B=H.viewport,g===0&&(e.setRenderTargetTextures(E,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(E))}let X=R[g];X===void 0&&(X=new yn,X.layers.enable(g),X.viewport=new bt,R[g]=X),X.matrix.fromArray(L.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(L.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(B.x,B.y,B.width,B.height),g===0&&(I.matrix.copy(X.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),He===!0&&I.cameras.push(X)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const g=h.getDepthInformation(Ae[0]);g&&g.isValid&&g.texture&&m.init(g,r.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let g=0;g<Ae.length;g++){const L=Ae[g].camera;if(L){let B=p[L];B||(B=new Rp,p[L]=B);const X=h.getCameraImage(L);B.sourceTexture=X}}}}for(let Ae=0;Ae<P.length;Ae++){const He=w[Ae],Pe=P[Ae];He!==null&&Pe!==void 0&&Pe.update(He,oe,c||o)}ot&&ot(te,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const it=new Pp;it.setAnimationLoop(lt),this.setAnimationLoop=function(te){ot=te},this.dispose=function(){}}}const ji=new Xn,PA=new At;function LA(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ep(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,E=A.envMapRotation;T&&(m.envMap.value=T,ji.copy(E),ji.x*=-1,ji.y*=-1,ji.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(ji)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const E=T.program;i.uniformBlockBinding(A,E)}function c(A,T){let E=r[A.id];E===void 0&&(_(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));const P=T.program;i.updateUBOMapping(A,P);const w=e.render.frame;s[A.id]!==w&&(d(A),s[A.id]=w)}function u(A){const T=h();A.__bindingPointIndex=T;const E=t.createBuffer(),P=A.__size,w=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],E=A.uniforms,P=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let w=0,C=E.length;w<C;w++){const U=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,b=U.length;y<b;y++){const R=U[y];if(f(R,w,y,P)===!0){const I=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let Q=0;for(let J=0;J<W.length;J++){const K=W[J],Z=x(K);typeof K=="number"||typeof K=="boolean"?(R.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,I+Q,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=0,R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=0,R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=0):(K.toArray(R.__data,Q),Q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(A,T,E,P){const w=A.value,C=T+"_"+E;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:P[C]=w.clone(),!0;{const U=P[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return P[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(A){const T=A.uniforms;let E=0;const P=16;for(let C=0,U=T.length;C<U;C++){const y=Array.isArray(T[C])?T[C]:[T[C]];for(let b=0,R=y.length;b<R;b++){const I=y[b],W=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,J=W.length;Q<J;Q++){const K=W[Q],Z=x(K),V=E%P,me=V%Z.boundary,xe=V+me;E+=me,xe!==0&&P-xe<Z.storage&&(E+=P-xe),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Z.storage}}}const w=E%P;return w>0&&(E+=P-w),A.__size=E,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class IA{constructor(e={}){const{canvas:n=dS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=xn;let w=0,C=0,U=null,y=-1,b=null;const R=new bt,I=new bt;let W=null;const Q=new Qe(0);let J=0,K=n.width,Z=n.height,V=1,me=null,xe=null;const Te=new bt(0,0,K,Z),Ue=new bt(0,0,K,Z);let ot=!1;const lt=new wp;let it=!1,te=!1;const oe=new At,Ae=new z,He=new bt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function wt(){return U===null?V:1}let g=i;function L(M,O){return n.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zc}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",he,!1),g===null){const O="webgl2";if(g=L(O,M),g===null)throw L(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let B,X,H,ie,q,ee,ce,ne,S,v,D,k,Y,G,pe,ae,Ee,Ce,ue,ye,Oe,be,ge,Ge;function N(){B=new GE(g),B.init(),be=new TA(g,B),X=new OE(g,B,e,be),H=new bA(g,B),X.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),ie=new $E(g),q=new uA,ee=new EA(g,B,H,q,X,be,ie),ce=new BE(E),ne=new VE(E),S=new JS(g),ge=new NE(g,S),v=new WE(g,S,ie,ge),D=new YE(g,v,S,ie),ue=new jE(g,X,ee),ae=new FE(q),k=new cA(E,ce,ne,B,X,ge,ae),Y=new LA(E,q),G=new dA,pe=new vA(B),Ce=new IE(E,ce,ne,H,D,f,l),Ee=new SA(E,D,X),Ge=new DA(g,ie,X,H),ye=new UE(g,B,ie),Oe=new XE(g,B,ie),ie.programs=k.programs,E.capabilities=X,E.extensions=B,E.properties=q,E.renderLists=G,E.shadowMap=Ee,E.state=H,E.info=ie}N();const fe=new RA(E,g);this.xr=fe,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const M=B.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=B.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(K,Z,!1))},this.getSize=function(M){return M.set(K,Z)},this.setSize=function(M,O,$=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,Z=O,n.width=Math.floor(M*V),n.height=Math.floor(O*V),$===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(K*V,Z*V).floor()},this.setDrawingBufferSize=function(M,O,$){K=M,Z=O,V=$,n.width=Math.floor(M*$),n.height=Math.floor(O*$),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Te)},this.setViewport=function(M,O,$,j){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,O,$,j),H.viewport(R.copy(Te).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,O,$,j){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,O,$,j),H.scissor(I.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(M){H.setScissorTest(ot=M)},this.setOpaqueSort=function(M){me=M},this.setTransparentSort=function(M){xe=M},this.getClearColor=function(M){return M.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,$=!0){let j=0;if(M){let F=!1;if(U!==null){const de=U.texture.format;F=de===iu||de===nu||de===tu}if(F){const de=U.texture.type,Me=de===oi||de===or||de===Ls||de===Ds||de===Qc||de===eu,Le=Ce.getClearColor(),we=Ce.getClearAlpha(),ke=Le.r,Ve=Le.g,Ne=Le.b;Me?(_[0]=ke,_[1]=Ve,_[2]=Ne,_[3]=we,g.clearBufferuiv(g.COLOR,0,_)):(x[0]=ke,x[1]=Ve,x[2]=Ne,x[3]=we,g.clearBufferiv(g.COLOR,0,x))}else j|=g.COLOR_BUFFER_BIT}O&&(j|=g.DEPTH_BUFFER_BIT),$&&(j|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Ce.dispose(),G.dispose(),pe.dispose(),q.dispose(),ce.dispose(),ne.dispose(),D.dispose(),ge.dispose(),Ge.dispose(),k.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Nn),fe.removeEventListener("sessionend",hu),Oi.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=ie.autoReset,O=Ee.enabled,$=Ee.autoUpdate,j=Ee.needsUpdate,F=Ee.type;N(),ie.autoReset=M,Ee.enabled=O,Ee.autoUpdate=$,Ee.needsUpdate=j,Ee.type=F}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const O=M.target;O.removeEventListener("dispose",re),De(O)}function De(M){Xe(M),q.remove(M)}function Xe(M){const O=q.get(M).programs;O!==void 0&&(O.forEach(function($){k.releaseProgram($)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,$,j,F,de){O===null&&(O=Pe);const Me=F.isMesh&&F.matrixWorld.determinant()<0,Le=Fp(M,O,$,j,F);H.setMaterial(j,Me);let we=$.index,ke=1;if(j.wireframe===!0){if(we=v.getWireframeAttribute($),we===void 0)return;ke=2}const Ve=$.drawRange,Ne=$.attributes.position;let Je=Ve.start*ke,ht=(Ve.start+Ve.count)*ke;de!==null&&(Je=Math.max(Je,de.start*ke),ht=Math.min(ht,(de.start+de.count)*ke)),we!==null?(Je=Math.max(Je,0),ht=Math.min(ht,we.count)):Ne!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Ne.count));const St=ht-Je;if(St<0||St===1/0)return;ge.setup(F,j,Le,$,we);let gt,pt=ye;if(we!==null&&(gt=S.get(we),pt=Oe,pt.setIndex(gt)),F.isMesh)j.wireframe===!0?(H.setLineWidth(j.wireframeLinewidth*wt()),pt.setMode(g.LINES)):pt.setMode(g.TRIANGLES);else if(F.isLine){let Fe=j.linewidth;Fe===void 0&&(Fe=1),H.setLineWidth(Fe*wt()),F.isLineSegments?pt.setMode(g.LINES):F.isLineLoop?pt.setMode(g.LINE_LOOP):pt.setMode(g.LINE_STRIP)}else F.isPoints?pt.setMode(g.POINTS):F.isSprite&&pt.setMode(g.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))pt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Fe=F._multiDrawStarts,vt=F._multiDrawCounts,rt=F._multiDrawCount,sn=we?S.get(we).bytesPerElement:1,dr=q.get(j).currentProgram.getUniforms();for(let on=0;on<rt;on++)dr.setValue(g,"_gl_DrawID",on),pt.render(Fe[on]/sn,vt[on])}else if(F.isInstancedMesh)pt.renderInstances(Je,St,F.count);else if($.isInstancedBufferGeometry){const Fe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,vt=Math.min($.instanceCount,Fe);pt.renderInstances(Je,St,vt)}else pt.render(Je,St)};function mt(M,O,$){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,Ws(M,O,$),M.side=Li,M.needsUpdate=!0,Ws(M,O,$),M.side=zn):Ws(M,O,$)}this.compile=function(M,O,$=null){$===null&&($=M),p=pe.get($),p.init(O),T.push(p),$.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==$&&M.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const j=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const de=F.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Le=de[Me];mt(Le,$,F),j.add(Le)}else mt(de,$,F),j.add(de)}),p=T.pop(),j},this.compileAsync=function(M,O,$=null){const j=this.compile(M,O,$);return new Promise(F=>{function de(){if(j.forEach(function(Me){q.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){F(M);return}setTimeout(de,10)}B.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ct=null;function jn(M){ct&&ct(M)}function Nn(){Oi.stop()}function hu(){Oi.start()}const Oi=new Pp;Oi.setAnimationLoop(jn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(M){ct=M,fe.setAnimationLoop(M),M===null?Oi.stop():Oi.start()},fe.addEventListener("sessionstart",Nn),fe.addEventListener("sessionend",hu),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,O,U),p=pe.get(M,T.length),p.init(O),T.push(p),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),lt.setFromProjectionMatrix(oe,Gn,O.reversedDepth),te=this.localClippingEnabled,it=ae.init(this.clippingPlanes,te),m=G.get(M,A.length),m.init(),A.push(m),fe.enabled===!0&&fe.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&ya(de,O,-1/0,E.sortObjects)}ya(M,O,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(me,xe),Ze=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Ze&&Ce.addToRenderList(m,M),this.info.render.frame++,it===!0&&ae.beginShadows();const $=p.state.shadowsArray;Ee.render($,M,O),it===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){const de=O.cameras;if(F.length>0)for(let Me=0,Le=de.length;Me<Le;Me++){const we=de[Me];fu(j,F,M,we)}Ze&&Ce.render(M);for(let Me=0,Le=de.length;Me<Le;Me++){const we=de[Me];du(m,M,we,we.viewport)}}else F.length>0&&fu(j,F,M,O),Ze&&Ce.render(M),du(m,M,O);U!==null&&C===0&&(ee.updateMultisampleRenderTarget(U),ee.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(E,M,O),ge.resetDefaultState(),y=-1,b=null,T.pop(),T.length>0?(p=T[T.length-1],it===!0&&ae.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function ya(M,O,$,j){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||lt.intersectsSprite(M)){j&&He.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);const Me=D.update(M),Le=M.material;Le.visible&&m.push(M,Me,Le,$,He.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||lt.intersectsObject(M))){const Me=D.update(M),Le=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),He.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),He.copy(Me.boundingSphere.center)),He.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(Le)){const we=Me.groups;for(let ke=0,Ve=we.length;ke<Ve;ke++){const Ne=we[ke],Je=Le[Ne.materialIndex];Je&&Je.visible&&m.push(M,Me,Je,$,He.z,Ne)}}else Le.visible&&m.push(M,Me,Le,$,He.z,null)}}const de=M.children;for(let Me=0,Le=de.length;Me<Le;Me++)ya(de[Me],O,$,j)}function du(M,O,$,j){const F=M.opaque,de=M.transmissive,Me=M.transparent;p.setupLightsView($),it===!0&&ae.setGlobalState(E.clippingPlanes,$),j&&H.viewport(R.copy(j)),F.length>0&&Gs(F,O,$),de.length>0&&Gs(de,O,$),Me.length>0&&Gs(Me,O,$),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function fu(M,O,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new lr(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Hs:oi,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const de=p.state.transmissionRenderTarget[j.id],Me=j.viewport||R;de.setSize(Me.z*E.transmissionResolutionScale,Me.w*E.transmissionResolutionScale);const Le=E.getRenderTarget(),we=E.getActiveCubeFace(),ke=E.getActiveMipmapLevel();E.setRenderTarget(de),E.getClearColor(Q),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),Ze&&Ce.render($);const Ve=E.toneMapping;E.toneMapping=wi;const Ne=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),it===!0&&ae.setGlobalState(E.clippingPlanes,j),Gs(M,$,j),ee.updateMultisampleRenderTarget(de),ee.updateRenderTargetMipmap(de),B.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ht=0,St=O.length;ht<St;ht++){const gt=O[ht],pt=gt.object,Fe=gt.geometry,vt=gt.material,rt=gt.group;if(vt.side===zn&&pt.layers.test(j.layers)){const sn=vt.side;vt.side=Qt,vt.needsUpdate=!0,pu(pt,$,j,Fe,vt,rt),vt.side=sn,vt.needsUpdate=!0,Je=!0}}Je===!0&&(ee.updateMultisampleRenderTarget(de),ee.updateRenderTargetMipmap(de))}E.setRenderTarget(Le,we,ke),E.setClearColor(Q,J),Ne!==void 0&&(j.viewport=Ne),E.toneMapping=Ve}function Gs(M,O,$){const j=O.isScene===!0?O.overrideMaterial:null;for(let F=0,de=M.length;F<de;F++){const Me=M[F],Le=Me.object,we=Me.geometry,ke=Me.group;let Ve=Me.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),Le.layers.test($.layers)&&pu(Le,O,$,we,Ve,ke)}}function pu(M,O,$,j,F,de){M.onBeforeRender(E,O,$,j,F,de),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(E,O,$,j,M,de),F.transparent===!0&&F.side===zn&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,E.renderBufferDirect($,O,j,F,M,de),F.side=Li,F.needsUpdate=!0,E.renderBufferDirect($,O,j,F,M,de),F.side=zn):E.renderBufferDirect($,O,j,F,M,de),M.onAfterRender(E,O,$,j,F,de)}function Ws(M,O,$){O.isScene!==!0&&(O=Pe);const j=q.get(M),F=p.state.lights,de=p.state.shadowsArray,Me=F.state.version,Le=k.getParameters(M,F.state,de,O,$),we=k.getProgramCacheKey(Le);let ke=j.programs;j.environment=M.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(M.isMeshStandardMaterial?ne:ce).get(M.envMap||j.environment),j.envMapRotation=j.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,ke===void 0&&(M.addEventListener("dispose",re),ke=new Map,j.programs=ke);let Ve=ke.get(we);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===Me)return gu(M,Le),Ve}else Le.uniforms=k.getUniforms(M),M.onBeforeCompile(Le,E),Ve=k.acquireProgram(Le,we),ke.set(we,Ve),j.uniforms=Le.uniforms;const Ne=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=ae.uniform),gu(M,Le),j.needsLights=kp(M),j.lightsStateVersion=Me,j.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function mu(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Vo.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function gu(M,O){const $=q.get(M);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Fp(M,O,$,j,F){O.isScene!==!0&&(O=Pe),ee.resetTextureUnits();const de=O.fog,Me=j.isMeshStandardMaterial?O.environment:null,Le=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Wr,we=(j.isMeshStandardMaterial?ne:ce).get(j.envMap||Me),ke=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,ht=!!$.morphAttributes.color;let St=wi;j.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(St=E.toneMapping);const gt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pt=gt!==void 0?gt.length:0,Fe=q.get(j),vt=p.state.lights;if(it===!0&&(te===!0||M!==b)){const Gt=M===b&&j.id===y;ae.setState(j,M,Gt)}let rt=!1;j.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vt.state.version||Fe.outputColorSpace!==Le||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isBatchedMesh&&Fe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Fe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Fe.instancingMorph===!1&&F.morphTexture!==null||Fe.envMap!==we||j.fog===!0&&Fe.fog!==de||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ae.numPlanes||Fe.numIntersection!==ae.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Ve||Fe.morphTargets!==Ne||Fe.morphNormals!==Je||Fe.morphColors!==ht||Fe.toneMapping!==St||Fe.morphTargetsCount!==pt)&&(rt=!0):(rt=!0,Fe.__version=j.version);let sn=Fe.currentProgram;rt===!0&&(sn=Ws(j,O,F));let dr=!1,on=!1,Kr=!1;const xt=sn.getUniforms(),pn=Fe.uniforms;if(H.useProgram(sn.program)&&(dr=!0,on=!0,Kr=!0),j.id!==y&&(y=j.id,on=!0),dr||b!==M){H.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xt.setValue(g,"projectionMatrix",M.projectionMatrix),xt.setValue(g,"viewMatrix",M.matrixWorldInverse);const Yt=xt.map.cameraPosition;Yt!==void 0&&Yt.setValue(g,Ae.setFromMatrixPosition(M.matrixWorld)),X.logarithmicDepthBuffer&&xt.setValue(g,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(g,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,on=!0,Kr=!0)}if(F.isSkinnedMesh){xt.setOptional(g,F,"bindMatrix"),xt.setOptional(g,F,"bindMatrixInverse");const Gt=F.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),xt.setValue(g,"boneTexture",Gt.boneTexture,ee))}F.isBatchedMesh&&(xt.setOptional(g,F,"batchingTexture"),xt.setValue(g,"batchingTexture",F._matricesTexture,ee),xt.setOptional(g,F,"batchingIdTexture"),xt.setValue(g,"batchingIdTexture",F._indirectTexture,ee),xt.setOptional(g,F,"batchingColorTexture"),F._colorsTexture!==null&&xt.setValue(g,"batchingColorTexture",F._colorsTexture,ee));const mn=$.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ue.update(F,$,sn),(on||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,xt.setValue(g,"receiveShadow",F.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(pn.envMap.value=we,pn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(pn.envMapIntensity.value=O.environmentIntensity),on&&(xt.setValue(g,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&Bp(pn,Kr),de&&j.fog===!0&&Y.refreshFogUniforms(pn,de),Y.refreshMaterialUniforms(pn,j,V,Z,p.state.transmissionRenderTarget[M.id]),Vo.upload(g,mu(Fe),pn,ee)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vo.upload(g,mu(Fe),pn,ee),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(g,"center",F.center),xt.setValue(g,"modelViewMatrix",F.modelViewMatrix),xt.setValue(g,"normalMatrix",F.normalMatrix),xt.setValue(g,"modelMatrix",F.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Gt=j.uniformsGroups;for(let Yt=0,Sa=Gt.length;Yt<Sa;Yt++){const Fi=Gt[Yt];Ge.update(Fi,sn),Ge.bind(Fi,sn)}}return sn}function Bp(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function kp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,O,$){const j=q.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=O,q.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const $=q.get(M);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const Hp=g.createFramebuffer();this.setRenderTarget=function(M,O=0,$=0){U=M,w=O,C=$;let j=!0,F=null,de=!1,Me=!1;if(M){const we=q.get(M);if(we.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(g.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)ee.setupRenderTarget(M);else if(we.__hasExternalTextures)ee.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ne=M.depthTexture;if(we.__boundDepthTexture!==Ne){if(Ne!==null&&q.has(Ne)&&(M.width!==Ne.image.width||M.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(M)}}const ke=M.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const Ve=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?F=Ve[O][$]:F=Ve[O],de=!0):M.samples>0&&ee.useMultisampledRTT(M)===!1?F=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[$]:F=Ve,R.copy(M.viewport),I.copy(M.scissor),W=M.scissorTest}else R.copy(Te).multiplyScalar(V).floor(),I.copy(Ue).multiplyScalar(V).floor(),W=ot;if($!==0&&(F=Hp),H.bindFramebuffer(g.FRAMEBUFFER,F)&&j&&H.drawBuffers(M,F),H.viewport(R),H.scissor(I),H.setScissorTest(W),de){const we=q.get(M.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,$)}else if(Me){const we=O;for(let ke=0;ke<M.textures.length;ke++){const Ve=q.get(M.textures[ke]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,$,we)}}else if(M!==null&&$!==0){const we=q.get(M.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,we.__webglTexture,$)}y=-1},this.readRenderTargetPixels=function(M,O,$,j,F,de,Me,Le=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){H.bindFramebuffer(g.FRAMEBUFFER,we);try{const ke=M.textures[Le],Ve=ke.format,Ne=ke.type;if(!X.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-j&&$>=0&&$<=M.height-F&&(M.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Le),g.readPixels(O,$,j,F,be.convert(Ve),be.convert(Ne),de))}finally{const ke=U!==null?q.get(U).__webglFramebuffer:null;H.bindFramebuffer(g.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(M,O,$,j,F,de,Me,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(O>=0&&O<=M.width-j&&$>=0&&$<=M.height-F){H.bindFramebuffer(g.FRAMEBUFFER,we);const ke=M.textures[Le],Ve=ke.format,Ne=ke.type;if(!X.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Je),g.bufferData(g.PIXEL_PACK_BUFFER,de.byteLength,g.STREAM_READ),M.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Le),g.readPixels(O,$,j,F,be.convert(Ve),be.convert(Ne),0);const ht=U!==null?q.get(U).__webglFramebuffer:null;H.bindFramebuffer(g.FRAMEBUFFER,ht);const St=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await fS(g,St,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Je),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,de),g.deleteBuffer(Je),g.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,$=0){const j=Math.pow(2,-$),F=Math.floor(M.image.width*j),de=Math.floor(M.image.height*j),Me=O!==null?O.x:0,Le=O!==null?O.y:0;ee.setTexture2D(M,0),g.copyTexSubImage2D(g.TEXTURE_2D,$,0,0,Me,Le,F,de),H.unbindTexture()};const zp=g.createFramebuffer(),Vp=g.createFramebuffer();this.copyTextureToTexture=function(M,O,$=null,j=null,F=0,de=null){de===null&&(F!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=F,F=0):de=0);let Me,Le,we,ke,Ve,Ne,Je,ht,St;const gt=M.isCompressedTexture?M.mipmaps[de]:M.image;if($!==null)Me=$.max.x-$.min.x,Le=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,Ve=$.min.y,Ne=$.isBox3?$.min.z:0;else{const mn=Math.pow(2,-F);Me=Math.floor(gt.width*mn),Le=Math.floor(gt.height*mn),M.isDataArrayTexture?we=gt.depth:M.isData3DTexture?we=Math.floor(gt.depth*mn):we=1,ke=0,Ve=0,Ne=0}j!==null?(Je=j.x,ht=j.y,St=j.z):(Je=0,ht=0,St=0);const pt=be.convert(O.format),Fe=be.convert(O.type);let vt;O.isData3DTexture?(ee.setTexture3D(O,0),vt=g.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ee.setTexture2DArray(O,0),vt=g.TEXTURE_2D_ARRAY):(ee.setTexture2D(O,0),vt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,O.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,O.unpackAlignment);const rt=g.getParameter(g.UNPACK_ROW_LENGTH),sn=g.getParameter(g.UNPACK_IMAGE_HEIGHT),dr=g.getParameter(g.UNPACK_SKIP_PIXELS),on=g.getParameter(g.UNPACK_SKIP_ROWS),Kr=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ke),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ve),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ne);const xt=M.isDataArrayTexture||M.isData3DTexture,pn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const mn=q.get(M),Gt=q.get(O),Yt=q.get(mn.__renderTarget),Sa=q.get(Gt.__renderTarget);H.bindFramebuffer(g.READ_FRAMEBUFFER,Yt.__webglFramebuffer),H.bindFramebuffer(g.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let Fi=0;Fi<we;Fi++)xt&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,q.get(M).__webglTexture,F,Ne+Fi),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,q.get(O).__webglTexture,de,St+Fi)),g.blitFramebuffer(ke,Ve,Me,Le,Je,ht,Me,Le,g.DEPTH_BUFFER_BIT,g.NEAREST);H.bindFramebuffer(g.READ_FRAMEBUFFER,null),H.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||q.has(M)){const mn=q.get(M),Gt=q.get(O);H.bindFramebuffer(g.READ_FRAMEBUFFER,zp),H.bindFramebuffer(g.DRAW_FRAMEBUFFER,Vp);for(let Yt=0;Yt<we;Yt++)xt?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,mn.__webglTexture,F,Ne+Yt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,mn.__webglTexture,F),pn?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Gt.__webglTexture,de,St+Yt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Gt.__webglTexture,de),F!==0?g.blitFramebuffer(ke,Ve,Me,Le,Je,ht,Me,Le,g.COLOR_BUFFER_BIT,g.NEAREST):pn?g.copyTexSubImage3D(vt,de,Je,ht,St+Yt,ke,Ve,Me,Le):g.copyTexSubImage2D(vt,de,Je,ht,ke,Ve,Me,Le);H.bindFramebuffer(g.READ_FRAMEBUFFER,null),H.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else pn?M.isDataTexture||M.isData3DTexture?g.texSubImage3D(vt,de,Je,ht,St,Me,Le,we,pt,Fe,gt.data):O.isCompressedArrayTexture?g.compressedTexSubImage3D(vt,de,Je,ht,St,Me,Le,we,pt,gt.data):g.texSubImage3D(vt,de,Je,ht,St,Me,Le,we,pt,Fe,gt):M.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,de,Je,ht,Me,Le,pt,Fe,gt.data):M.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,de,Je,ht,gt.width,gt.height,pt,gt.data):g.texSubImage2D(g.TEXTURE_2D,de,Je,ht,Me,Le,pt,Fe,gt);g.pixelStorei(g.UNPACK_ROW_LENGTH,rt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,sn),g.pixelStorei(g.UNPACK_SKIP_PIXELS,dr),g.pixelStorei(g.UNPACK_SKIP_ROWS,on),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Kr),de===0&&O.generateMipmaps&&g.generateMipmap(vt),H.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&ee.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ee.setTextureCube(M,0):M.isData3DTexture?ee.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ee.setTexture2DArray(M,0):ee.setTexture2D(M,0),H.unbindTexture()},this.resetState=function(){w=0,C=0,U=null,H.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const bd={type:"change"},uu={type:"start"},Up={type:"end"},Ro=new au,Ed=new Si,NA=Math.cos(70*hS.DEG2RAD),Ct=new z,qt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6;class UA extends KS{constructor(e,n=null){super(e,n),this.state=ft.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ar,this._lastTargetPosition=new z,this._quat=new ar().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kh,this._sphericalDelta=new Kh,this._scale=1,this._panOffset=new z,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new z,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FA.bind(this),this._onPointerDown=OA.bind(this),this._onPointerUp=BA.bind(this),this._onContextMenu=XA.bind(this),this._onMouseWheel=zA.bind(this),this._onKeyDown=VA.bind(this),this._onTouchStart=GA.bind(this),this._onTouchMove=WA.bind(this),this._onMouseDown=kA.bind(this),this._onMouseMove=HA.bind(this),this._interceptControlDown=$A.bind(this),this._interceptControlUp=jA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bd),this.update(),this.state=ft.NONE}update(e=null){const n=this.object.position;Ct.copy(n).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),r<-Math.PI?r+=qt:r>Math.PI&&(r-=qt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<NA?this.object.lookAt(this.target):(Ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(Ed,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ct.setFromMatrixColumn(n,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,n){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(n,1):(Ct.setFromMatrixColumn(n,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ct.copy(r).sub(this.target);let s=Ct.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/n.clientHeight),this._rotateUp(qt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/n.clientHeight),this._rotateUp(qt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ye,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function OA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function FA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function BA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Up),this.state=ft.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function kA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ft.DOLLY;break;case Or.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ft.ROTATE}break;case Or.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(uu)}function HA(t){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function zA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(t.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Up))}function VA(t){this.enabled!==!1&&this._handleKeyDown(t)}function GA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ft.TOUCH_ROTATE;break;case Pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ft.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(uu)}function WA(t){switch(this._trackPointer(t),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ft.NONE}}function XA(t){this.enabled!==!1&&t.preventDefault()}function $A(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Td=(t,e,n)=>{const i=t.bufferViews[e.bufferView],r=(e.byteOffset||0)+(i.byteOffset||0),s=e.count,o=i.byteStride||0,a=e.componentType,l=e.type,c={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array}[a],u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16}[l];if(o===0||o===u*c.BYTES_PER_ELEMENT)return new hn(new c(n.buffer,n.byteOffset+r,s*u),u,e.normalized===!0);{const h=new c(s*u),d=new Uint8Array(n.buffer,n.byteOffset+r);for(let f=0;f<s;++f){const _=f*o,x=f*u,m=d.slice(_,_+u*c.BYTES_PER_ELEMENT);h.set(new c(m.buffer,m.byteOffset,u),x)}return new hn(h,u,e.normalized===!0)}},Ad={buildBufferGeometry:(t,e,n=0,i=0)=>{const s=t.meshes[n].primitives[i],o=new fn;if(s.indices!==void 0){const a=t.accessors[s.indices];o.setIndex(Td(t,a,e))}for(const[a,l]of Object.entries(s.attributes)){const c=Td(t,t.accessors[l],e),u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",JOINTS_0:"skinIndex",WEIGHTS_0:"skinWeight"}[a]||a;o.setAttribute(u,c)}return o.computeBoundingBox(),o.computeBoundingSphere(),o}};function YA(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new fn;let c=0;for(let u=0;u<t.length;++u){const h=t[u];let d=0;if(n!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(n)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(n){let u=0;const h=[];for(let d=0;d<t.length;++d){const f=t[d].index;for(let _=0;_<f.count;++_)h.push(f.getX(_)+u);u+=t[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=wd(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const _=wd(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function wd(t){let e,n,i,r=-1,s=0;for(let c=0;c<t.length;++c){const u=t[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*n}const o=new e(s),a=new hn(o,n,i);let l=0;for(let c=0;c<t.length;++c){const u=t[c];if(u.isInterleavedBufferAttribute){const h=l/n;for(let d=0,f=u.count;d<f;d++)for(let _=0;_<n;_++){const x=u.getComponent(d,_);a.setComponent(d+h,_,x)}}else o.set(u.array,l);l+=u.count*n}return r!==void 0&&(a.gpuType=r),a}let Rt,wr,gl;const qA={name:"modelViewer",props:{model:Object,buffer:Object,selectedNode:Object,index:Number},data(){return{files:[],renderer:{},controls:{},objects:[],meshData:[],materials:{},options:{},canvasSize:{width:600,height:600}}},watch:{model:{handler(t){this.buildGeometry()},immediate:!0},buffer:{handler(t){this.buildGeometry()},immediate:!0},index:{handler(t){},immediate:!0},selectedNode:{handler(t){t&&t.name&&this.highlightObject(t.name)},immediate:!0}},mounted(){if(gl=document.querySelector(".model-viewer canvas"),Rt=new BS,wr=new yn(50,this.canvasSize.width/this.canvasSize.height,.05,200),wr.position.set(0,10,20),this.setMaterials(),this.initRenderer(),!this.renderer.domElement){console.error(this.renderer);return}this.initControls(),window.addEventListener("resize",this.onWindowResize)},computed:{scene(){return Rt}},methods:{setMaterials(){const t=new $S({color:12963537,side:zn}),e=new qh({name:"transparent",color:15395562,emissive:15395562,transparent:!0,opacity:.3,roughness:.9,depthWrite:!1}),n=new qh({name:"highlight",color:16556291,emissive:16556291,transparent:!0,opacity:.7,roughness:.7,depthWrite:!1}),i=new _a({color:10250242});this.materials={matCap:t,transparent:e,highlight:n,edgeSelect:i}},buildMesh(t,e){const n=Ad.buildBufferGeometry(this.model,this.buffer,t,e);return new Ln(n,this.materials.transparent)},buildCombinedMesh(t,e,n){const i=[];t.primitives.keys().forEach(o=>{const a=Ad.buildBufferGeometry(this.model,this.buffer,e,o);i.push(a)});const r=YA(i);return new Ln(r,n)},processNode(t,e){let n=new Vt;if(t.mesh!==void 0){const i=We.getMesh(t.mesh,this.model),r=this.materials.transparent;n=this.buildCombinedMesh(i,t.mesh,r)}if(n.name=t.name,t.matrix)n.matrix.fromArray(t.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale);else{const i=t.translation||[0,0,0],r=t.rotation||[0,0,0,1],s=t.scale||[1,1,1];n.position.set(i[0],i[1],i[2]),n.quaternion.set(r[0],r[1],r[2],r[3]),n.scale.set(s[0],s[1],s[2])}e?e.add(n):Rt.add(n),t.children&&We.getChildNodes(t.children,this.model).forEach(r=>this.processNode(r,n))},processNode2(t,e){const n=new ls;if(n.name=t.name+"_g",t.children&&We.getChildNodes(t.children,this.model).forEach(o=>this.processNode(o,n)),t.mesh!==void 0){const s=We.getMesh(t.mesh,this.model);this.materials.transparent,s.primitives.keys().forEach(o=>{const a=this.buildMesh(t.mesh,o);a.name=t.name,t.translation,t.rotation,n.add(a)})}else{const s=new Vt;s.name=t.name,n.add(s)}const i=t.translation||[0,0,0],r=t.rotation||[0,0,0,0];n.position.set(i[0],i[1],i[2]),n.quaternion.set(r[0],r[1],r[2],r[3]),e?e.add(n):Rt.add(n)},clearScene(){Rt.traverse(t=>{t.isMesh&&t.geometry&&t.geometry.dispose()}),Rt.clear()},buildGeometry(t){if(!(this.model&&this.buffer)||!this.model.meshes||!(this.model.scenes&&this.model.scenes[0].nodes))return;this.clearScene(),this.objects=[],this.meshData=[],We.getChildNodes(this.model.scenes[0].nodes,this.model).forEach(r=>{this.processNode(r)});const n=new Zh(5);n.setColors(2236962,2236962,2236962),Rt.add(n);const i=new qS(10,10,5263440,5263440);Rt.add(i),this.render()},selectObject(t){if(!Rt)return;const e=Rt.getObjectByName("highlight");e&&(Rt.remove(e),e.geometry.dispose(),e.material.dispose());const n=Rt.getObjectByName(t);if(n){const i=new GS(n.geometry),r=new lu(i,this.materials.edgeSelect);r.material.opacity=.5,r.material.transparent=!0,r.name="highlight",Rt.add(r)}this.render()},highlightObject(t){if(!Rt)return;Rt.getObjectsByProperty("name","origin").forEach(s=>{s.geometry&&(s.removeFromParent(),Rt.remove(s),s.geometry.dispose())}),this.render();const n=new Zh(1);n.name="origin";const i=Rt.getObjectByProperty("material",this.materials.highlight);i&&i.isMesh&&(i.material=this.materials.transparent);const r=Rt.getObjectByName(t);r&&r.isMesh&&(r.material=this.materials.highlight),r&&n&&r.add(n),this.render()},onChangeModelDisplay(t){},setModelMaterial(t){},initRenderer(){this.renderer=new IA({antialias:!0,canvas:gl}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvasSize.width,this.canvasSize.height),this.renderer.toneMapping=op,this.renderer.toneMappingExposure=1,this.renderer.setClearColor(3289650,1),this.renderer.outputEncoding=void 0},initControls(){const t=new UA(wr,gl);t.addEventListener("change",this.render),t.minDistance=.1,t.maxDistance=50,t.target.set(0,0,-.2),t.update()},render(){const t=Rt,e=wr;this.renderer.render(t,e)},onWindowResize(){wr.aspect=this.canvasSize.width/this.canvasSize.height,wr.updateProjectionMatrix(),this.renderer.setSize(this.canvasSize.width,this.canvasSize.height),this.render()}}},KA=t=>($r("data-v-e6e167c0"),t=t(),jr(),t),ZA={class:"model-viewer"},JA=KA(()=>_e("section",{class:"controls"},null,-1)),QA={ref:"canvas"};function ew(t,e,n,i,r,s){return se(),le("div",ZA,[JA,_e("canvas",QA,null,512)])}const tw=dn(qA,[["render",ew],["__scopeId","data-v-e6e167c0"]]),nw={name:"mainpage",components:{dropzone:N_,nodeList:J_,inspector:ey,tabs:ly,listView:jc,modelViewer:tw},data(){return{fileError:"",models:[],g_json:null,g_bin:null,g_document:{},g_root:null,g_model:{},selectedModelIndex:0,selectedNode:null,selectedNodeIcon:"",selectedMaterial:null,selectedIndex:null,fileNames:{}}},created(){pa.$on("selectItem",t=>{this.selectedNodeIcon=t.icon,this.selectNode(t.item),this.selectedIndex=t.index}),window.gltf=We},computed:{materialList(){return We.getMaterials(this.selectedModel)},animationsList(){return We.getAnimations(this.selectedModel)},selectedModel(){var t;return((t=this.models[this.selectedModelIndex])==null?void 0:t.model)||{}},selectedBuffer(){var t;return((t=this.models[this.selectedModelIndex])==null?void 0:t.buffer)||{}}},methods:{handleFiles(t){this.fileError="",t.forEach(e=>{const n=new FileReader,i=e.type=="model/gltf+json"?"json":"bin";n.onload=r=>{const s=r.target.result;if(i=="json")try{const o=JSON.parse(s);this.addToModels(e.name,o),this.fileNames.gltf=e.name,this.setFilename(e.name)}catch(o){console.error("Error parsing JSON:",o),this.fileError=`Error parsing JSON: ${o}`}else{const o=new Uint8Array(s);this.fileNames.bin=e.name,this.setFilename(e.name),We&&this.addToModels(e.name,o)}},n.onerror=r=>{console.error("Error reading file:",r),this.fileError=`Error reading file: ${r}`},console.log(e),i=="json"?n.readAsText(e):n.readAsArrayBuffer(e)})},async readDocument(){if(this.g_json&&this.g_bin){let t={json:this.g_json,resources:{}};t.resources[this.getBufferName(this.g_json)]=this.g_bin,console.log(t);try{const e=await We.readJSON(t);this.g_document=e,window.doc=e,console.log(e),this.g_root=e.getRoot()}catch(e){console.error("Failed to parse GLTF Document: ",e)}}},addToModels(t,e){const n=s=>s.match(/\.gltf$/i),i=t.replace(/\.gltf$/,"").replace(/\.bin$/,""),r=this.models.findIndex(s=>s.name===i);r!==-1?n(t)?this.models[r].model=e:this.models[r].buffer=e:n(t)?this.models.push({name:i,model:e}):this.models.push({name:i,buffer:e}),this.selectedModelIndex=Math.max(0,this.models.length-1)},setFilename(t){this.$refs.dropZone&&this.$refs.dropZone.setFilename(t)},saveFile(){const t=JSON.stringify(this.g_json),e=new Blob([t],{type:"model/gltf+json"}),n=URL.createObjectURL(e);this.$refs.downloadBtn.setAttribute("href",n),this.$refs.downloadBtn.setAttribute("download","model.gltf")},getBufferName(t){try{return t.buffers[0].uri}catch(e){console.error("Can't get buffer name:",e)}return""},selectNode(t){this.selectedNode=t}}},iw={id:"app"},rw={class:"header"},sw={class:"file-drop"},ow={class:"file-status"},aw={key:0,class:"error"},lw=_e("div",{class:"main-header"},null,-1),cw={class:"controls"},uw={class:"save-file"},hw={id:"download",ref:"downloadBtn"},dw={class:"cols"},fw={class:"mainpanel"},pw={class:"model-list"},mw={class:"model-selector"},gw=["onClick"];function _w(t,e,n,i,r,s){const o=Nt("dropzone"),a=Nt("inspector"),l=Nt("nodeList"),c=Nt("listView"),u=Nt("tabs"),h=Nt("modelViewer");return se(),le("div",iw,[_e("div",rw,[_e("div",sw,[ut(o,{onFilesAdded:s.handleFiles,ref:"dropZone"},null,8,["onFilesAdded"])]),_e("div",ow,[r.fileError?(se(),le("div",aw,Be(r.fileError),1)):Ie("",!0)]),lw,_e("div",cw,[_e("div",uw,[_e("button",{onClick:e[0]||(e[0]=(...d)=>s.saveFile&&s.saveFile(...d))},"Save"),_e("button",hw,"Download",512)])])]),_e("div",dw,[_e("div",fw,[ut(a,{item:r.selectedNode,icon:r.selectedNodeIcon,index:r.selectedIndex,model:s.selectedModel,buffer:s.selectedBuffer},null,8,["item","icon","index","model","buffer"]),_e("div",pw,[_e("ul",mw,[(se(!0),le(tt,null,Pt(r.models,(d,f)=>(se(),le("li",{class:En({active:f===r.selectedModelIndex}),onClick:_=>r.selectedModelIndex=f},Be(d.name),11,gw))),256))]),ut(u,{"tab-names":["Nodes","Materials","Animations"],"default-tab":"Nodes"},{Nodes:rr(()=>[ut(l,{model:s.selectedModel,selectedNode:r.selectedNode},null,8,["model","selectedNode"])]),Materials:rr(()=>[ut(c,{list:s.materialList,"list-icons":["icon-material"],model:s.selectedModel},null,8,["list","model"])]),Animations:rr(()=>[ut(c,{list:s.animationsList,"list-icons":["icon-anim"],model:s.selectedModel},null,8,["list","model"])]),_:1})]),ut(h,{model:s.selectedModel,buffer:s.selectedBuffer,index:r.selectedIndex,selectedNode:r.selectedNode},null,8,["model","buffer","index","selectedNode"])])])])}const vw=dn(nw,[["render",_w]]),xw=t=>($r("data-v-51a0df28"),t=t(),jr(),t),yw=xw(()=>_e("header",null,null,-1)),Sw=km({__name:"App",setup(t){return(e,n)=>(se(),le(tt,null,[yw,_e("main",null,[ut(vw)])],64))}}),Mw=dn(Sw,[["__scopeId","data-v-51a0df28"]]);var kt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},Po=qc();function Fs(t){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fs(t)}function Cd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function _l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cd(Object(n),!0).forEach(function(i){bw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cd(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function bw(t,e,n){return(e=Ew(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ew(t){var e=Tw(t,"string");return Fs(e)=="symbol"?e:e+""}function Tw(t,e){if(Fs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Fs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Aw={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[kt.STARTS_WITH,kt.CONTAINS,kt.NOT_CONTAINS,kt.ENDS_WITH,kt.EQUALS,kt.NOT_EQUALS],numeric:[kt.EQUALS,kt.NOT_EQUALS,kt.LESS_THAN,kt.LESS_THAN_OR_EQUAL_TO,kt.GREATER_THAN,kt.GREATER_THAN_OR_EQUAL_TO],date:[kt.DATE_IS,kt.DATE_IS_NOT,kt.DATE_BEFORE,kt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},ww=Symbol();function Cw(t,e){var n={config:oa(e)};return t.config.globalProperties.$primevue=n,t.provide(ww,n),Rw(),Pw(t,n),n}var Dr=[];function Rw(){On.clear(),Dr.forEach(function(t){return t==null?void 0:t()}),Dr=[]}function Pw(t,e){var n=Do(!1),i=function(){if(!Mt.isStyleNameLoaded("common")){var c,u,h=((c=cn.getCommonTheme)===null||c===void 0?void 0:c.call(cn))||{},d=h.primitive,f=h.semantic,_={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};cn.load(d==null?void 0:d.css,_l({name:"primitive-variables"},_)),cn.load(f==null?void 0:f.css,_l({name:"semantic-variables"},_)),cn.loadTheme(_l({name:"global-style"},_)),Mt.setLoadedStyleName("common")}};On.on("theme:change",function(l){n.value||(t.config.globalProperties.$primevue.config.theme=l,n.value=!0)});var r=bi(e.config,function(l,c){Po.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=bi(function(){return e.config.ripple},function(l,c){Po.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),o=bi(function(){return e.config.theme},function(l,c){n.value||Mt.setTheme(l),e.config.unstyled||i(),n.value=!1,Po.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),a=bi(function(){return e.config.unstyled},function(l,c){!l&&e.config.theme&&i(),Po.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});Dr.push(r),Dr.push(s),Dr.push(o),Dr.push(a)}var Lw={install:function(e,n){var i=Mv(Aw,n);Cw(e,i)}};const Op=b_(Mw);Op.use(Lw,{unstyled:!0});Op.mount("#app");
