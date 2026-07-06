import{a as nm,b as im,g as rm,r as j,N as dn,u as am,d as om,R as Le,O as cm,e as lm,f as Ge,B as um}from"./vendor-Celz99YT.js";import{R as cc,A as hm,C as lc,X as uc,Y as hc,T as dc,a as dm,B as mm,b as pm}from"./charts-C-bf9yPT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var br={exports:{}},Js={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function fm(){if(mc)return Js;mc=1;var s=nm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(l,h,m){var f,w={},_=null,S=null;m!==void 0&&(_=""+m),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(f in h)n.call(h,f)&&!a.hasOwnProperty(f)&&(w[f]=h[f]);if(l&&l.defaultProps)for(f in h=l.defaultProps,h)w[f]===void 0&&(w[f]=h[f]);return{$$typeof:e,type:l,key:_,ref:S,props:w,_owner:i.current}}return Js.Fragment=t,Js.jsx=c,Js.jsxs=c,Js}var pc;function gm(){return pc||(pc=1,br.exports=fm()),br.exports}var o=gm(),Zn={},fc;function _m(){if(fc)return Zn;fc=1;var s=im();return Zn.createRoot=s.createRoot,Zn.hydrateRoot=s.hydrateRoot,Zn}var ym=_m();const vm=rm(ym),wm=()=>{};var gc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Em=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=s[t++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=s[t++],c=s[t++],l=s[t++],h=((i&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const a=s[t++],c=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const a=s[i],c=i+1<s.length,l=c?s[i+1]:0,h=i+2<s.length,m=h?s[i+2]:0,f=a>>2,w=(a&3)<<4|l>>4;let _=(l&15)<<2|m>>6,S=m&63;h||(S=64,c||(_=64)),n.push(t[f],t[w],t[_],t[S])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(eu(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Em(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const a=t[s.charAt(i++)],l=i<s.length?t[s.charAt(i)]:0;++i;const m=i<s.length?t[s.charAt(i)]:64;++i;const w=i<s.length?t[s.charAt(i)]:64;if(++i,a==null||l==null||m==null||w==null)throw new bm;const _=a<<2|l>>4;if(n.push(_),m!==64){const S=l<<4&240|m>>2;if(n.push(S),w!==64){const k=m<<6&192|w;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class bm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tm=function(s){const e=eu(s);return tu.encodeByteArray(e,!0)},gi=function(s){return Tm(s).replace(/\./g,"")},su=function(s){try{return tu.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=()=>Im().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof gc>"u")return;const s=gc.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Sm=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&su(s[1]);return e&&JSON.parse(e)},Di=()=>{try{return wm()||xm()||Am()||Sm()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},nu=s=>{var e,t;return(t=(e=Di())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[s]},Nm=s=>{const e=nu(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},iu=()=>{var s;return(s=Di())===null||s===void 0?void 0:s.config},ru=s=>{var e;return(e=Di())===null||e===void 0?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function au(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=s.iat||0,a=s.sub||s.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},s);return[gi(JSON.stringify(t)),gi(JSON.stringify(c)),""].join(".")}const nn={};function km(){const s={prod:[],emulator:[]};for(const e of Object.keys(nn))nn[e]?s.emulator.push(e):s.prod.push(e);return s}function Pm(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let _c=!1;function ou(s,e){if(typeof window>"u"||typeof document>"u"||!Ss(window.location.host)||nn[s]===e||nn[s]||_c)return;nn[s]=e;function t(_){return`__firebase__banner__${_}`}const n="__firebase__banner",a=km().prod.length>0;function c(){const _=document.getElementById(n);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function m(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{_c=!0,c()},_}function f(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function w(){const _=Pm(n),S=t("text"),k=document.getElementById(S)||document.createElement("span"),D=t("learnmore"),M=document.getElementById(D)||document.createElement("a"),Y=t("preprendIcon"),$=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Q=_.element;l(Q),f(M,D);const ne=m();h($,Y),Q.append($,k,M,ne),document.body.appendChild(Q)}a?(k.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Mm(){var s;const e=(s=Di())===null||s===void 0?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Om(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lm(){const s=Ce();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Fm(){return!Mm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Um(){try{return typeof indexedDB=="object"}catch{return!1}}function zm(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="FirebaseError";class dt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Bm,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?Gm(a,n):"Error",l=`${this.serviceName}: ${c} (${i}).`;return new dt(i,l,n)}}function Gm(s,e){return s.replace($m,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const $m=/\{\$([^}]+)}/g;function qm(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Yt(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const a=s[i],c=e[i];if(yc(a)&&yc(c)){if(!Yt(a,c))return!1}else if(a!==c)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function yc(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ys(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,a]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function Xs(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function Hm(s,e){const t=new Wm(s,e);return t.subscribe.bind(t)}class Wm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Km(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Tr),i.error===void 0&&(i.error=Tr),i.complete===void 0&&(i.complete=Tr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Km(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Tr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(s){return s&&s._delegate?s._delegate:s}class Xt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Cm;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ym(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);n===l&&c.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const c=this.instances.get(i);return c&&e(c,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Jm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jm(s){return s===$t?void 0:s}function Ym(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(q||(q={}));const Zm={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},ep=q.INFO,tp={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},sp=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=tp[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ga{constructor(e){this.name=e,this._logLevel=ep,this._logHandler=sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const np=(s,e)=>e.some(t=>s instanceof t);let vc,wc;function ip(){return vc||(vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rp(){return wc||(wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,Lr=new WeakMap,lu=new WeakMap,Ir=new WeakMap,_a=new WeakMap;function ap(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",a),s.removeEventListener("error",c)},a=()=>{t(Tt(s.result)),i()},c=()=>{n(s.error),i()};s.addEventListener("success",a),s.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&cu.set(t,s)}).catch(()=>{}),_a.set(e,s),e}function op(s){if(Lr.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",a),s.removeEventListener("error",c),s.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",a),s.addEventListener("error",c),s.addEventListener("abort",c)});Lr.set(s,e)}let Fr={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Lr.get(s);if(e==="objectStoreNames")return s.objectStoreNames||lu.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function cp(s){Fr=s(Fr)}function lp(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(xr(this),e,...t);return lu.set(n,e.sort?e.sort():[e]),Tt(n)}:rp().includes(s)?function(...e){return s.apply(xr(this),e),Tt(cu.get(this))}:function(...e){return Tt(s.apply(xr(this),e))}}function up(s){return typeof s=="function"?lp(s):(s instanceof IDBTransaction&&op(s),np(s,ip())?new Proxy(s,Fr):s)}function Tt(s){if(s instanceof IDBRequest)return ap(s);if(Ir.has(s))return Ir.get(s);const e=up(s);return e!==s&&(Ir.set(s,e),_a.set(e,s)),e}const xr=s=>_a.get(s);function hp(s,e,{blocked:t,upgrade:n,blocking:i,terminated:a}={}){const c=indexedDB.open(s,e),l=Tt(c);return n&&c.addEventListener("upgradeneeded",h=>{n(Tt(c.result),h.oldVersion,h.newVersion,Tt(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{a&&h.addEventListener("close",()=>a()),i&&h.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),l}const dp=["get","getKey","getAll","getAllKeys","count"],mp=["put","add","delete","clear"],Ar=new Map;function Ec(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Ar.get(e))return Ar.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=mp.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||dp.includes(t)))return;const a=async function(c,...l){const h=this.transaction(c,i?"readwrite":"readonly");let m=h.store;return n&&(m=m.index(l.shift())),(await Promise.all([m[t](...l),i&&h.done]))[0]};return Ar.set(e,a),a}cp(s=>({...s,get:(e,t,n)=>Ec(e,t)||s.get(e,t,n),has:(e,t)=>!!Ec(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function fp(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ur="@firebase/app",bc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new ga("@firebase/app"),gp="@firebase/app-compat",_p="@firebase/analytics-compat",yp="@firebase/analytics",vp="@firebase/app-check-compat",wp="@firebase/app-check",Ep="@firebase/auth",bp="@firebase/auth-compat",Tp="@firebase/database",Ip="@firebase/data-connect",xp="@firebase/database-compat",Ap="@firebase/functions",Sp="@firebase/functions-compat",Np="@firebase/installations",Cp="@firebase/installations-compat",Rp="@firebase/messaging",kp="@firebase/messaging-compat",Pp="@firebase/performance",jp="@firebase/performance-compat",Mp="@firebase/remote-config",Dp="@firebase/remote-config-compat",Op="@firebase/storage",Vp="@firebase/storage-compat",Lp="@firebase/firestore",Fp="@firebase/ai",Up="@firebase/firestore-compat",zp="firebase",Bp="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]",Gp={[Ur]:"fire-core",[gp]:"fire-core-compat",[yp]:"fire-analytics",[_p]:"fire-analytics-compat",[wp]:"fire-app-check",[vp]:"fire-app-check-compat",[Ep]:"fire-auth",[bp]:"fire-auth-compat",[Tp]:"fire-rtdb",[Ip]:"fire-data-connect",[xp]:"fire-rtdb-compat",[Ap]:"fire-fn",[Sp]:"fire-fn-compat",[Np]:"fire-iid",[Cp]:"fire-iid-compat",[Rp]:"fire-fcm",[kp]:"fire-fcm-compat",[Pp]:"fire-perf",[jp]:"fire-perf-compat",[Mp]:"fire-rc",[Dp]:"fire-rc-compat",[Op]:"fire-gcs",[Vp]:"fire-gcs-compat",[Lp]:"fire-fst",[Up]:"fire-fst-compat",[Fp]:"fire-vertex","fire-js":"fire-js",[zp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Map,$p=new Map,Br=new Map;function Tc(s,e){try{s.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function vs(s){const e=s.name;if(Br.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,s);for(const t of _i.values())Tc(t,s);for(const t of $p.values())Tc(t,s);return!0}function ya(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ue(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},It=new Tn("app","Firebase",qp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=Bp;function uu(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n=Object.assign({name:zr,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(t||(t=iu()),!t)throw It.create("no-options");const a=_i.get(i);if(a){if(Yt(t,a.options)&&Yt(n,a.config))return a;throw It.create("duplicate-app",{appName:i})}const c=new Xm(i);for(const h of Br.values())c.addComponent(h);const l=new Hp(t,n,c);return _i.set(i,l),l}function hu(s=zr){const e=_i.get(s);if(!e&&s===zr&&iu())return uu();if(!e)throw It.create("no-app",{appName:s});return e}function xt(s,e,t){var n;let i=(n=Gp[s])!==null&&n!==void 0?n:s;t&&(i+=`-${t}`);const a=i.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const l=[`Unable to register library "${i}" with version "${e}":`];a&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(l.join(" "));return}vs(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="firebase-heartbeat-database",Kp=1,mn="firebase-heartbeat-store";let Sr=null;function du(){return Sr||(Sr=hp(Wp,Kp,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(mn)}catch(t){console.warn(t)}}}}).catch(s=>{throw It.create("idb-open",{originalErrorMessage:s.message})})),Sr}async function Qp(s){try{const t=(await du()).transaction(mn),n=await t.objectStore(mn).get(mu(s));return await t.done,n}catch(e){if(e instanceof dt)lt.warn(e.message);else{const t=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}}async function Ic(s,e){try{const n=(await du()).transaction(mn,"readwrite");await n.objectStore(mn).put(e,mu(s)),await n.done}catch(t){if(t instanceof dt)lt.warn(t.message);else{const n=It.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(n.message)}}}function mu(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=1024,Yp=30;class Xp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ef(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>Yp){const c=tf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){lt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xc(),{heartbeatsToSend:n,unsentEntries:i}=Zp(this._heartbeatsCache.heartbeats),a=gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return lt.warn(t),""}}}function xc(){return new Date().toISOString().substring(0,10)}function Zp(s,e=Jp){const t=[];let n=s.slice();for(const i of s){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),Ac(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ac(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ef{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Um()?zm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ac(s){return gi(JSON.stringify({version:2,heartbeats:s})).length}function tf(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(s){vs(new Xt("platform-logger",e=>new pp(e),"PRIVATE")),vs(new Xt("heartbeat",e=>new Xp(e),"PRIVATE")),xt(Ur,bc,s),xt(Ur,bc,"esm2017"),xt("fire-js","")}sf("");function va(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(s);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(s,n[i])&&(t[n[i]]=s[n[i]]);return t}function pu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nf=pu,fu=new Tn("auth","Firebase",pu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new ga("@firebase/auth");function rf(s,...e){yi.logLevel<=q.WARN&&yi.warn(`Auth (${Ns}): ${s}`,...e)}function ai(s,...e){yi.logLevel<=q.ERROR&&yi.error(`Auth (${Ns}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(s,...e){throw Ea(s,...e)}function He(s,...e){return Ea(s,...e)}function wa(s,e,t){const n=Object.assign(Object.assign({},nf()),{[e]:t});return new Tn("auth","Firebase",n).create(e,{appName:s.name})}function At(s){return wa(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function af(s,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&ze(s,"argument-error"),wa(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ea(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return fu.create(s,...e)}function F(s,e,...t){if(!s)throw Ea(e,...t)}function at(s){const e="INTERNAL ASSERTION FAILED: "+s;throw ai(e),new Error(e)}function ut(s,e){s||at(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function of(){return Sc()==="http:"||Sc()==="https:"}function Sc(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(of()||Om()||"connection"in navigator)?navigator.onLine:!0}function lf(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=jm()||Vm()}get(){return cf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(s,e){ut(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],df=new xn(3e4,6e4);function ts(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function Ft(s,e,t,n,i={}){return _u(s,i,async()=>{let a={},c={};n&&(e==="GET"?c=n:a={body:JSON.stringify(n)});const l=In(Object.assign({key:s.config.apiKey},c)).slice(1),h=await s._getAdditionalHeaders();h["Content-Type"]="application/json",s.languageCode&&(h["X-Firebase-Locale"]=s.languageCode);const m=Object.assign({method:e,headers:h},a);return Dm()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&Ss(s.emulatorConfig.host)&&(m.credentials="include"),gu.fetch()(await yu(s,s.config.apiHost,t,l),m)})}async function _u(s,e,t){s._canInitEmulator=!1;const n=Object.assign(Object.assign({},uf),e);try{const i=new pf(s),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw ei(s,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const l=a.ok?c.errorMessage:c.error.message,[h,m]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(s,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw ei(s,"email-already-in-use",c);if(h==="USER_DISABLED")throw ei(s,"user-disabled",c);const f=n[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw wa(s,f,m);ze(s,f)}}catch(i){if(i instanceof dt)throw i;ze(s,"network-request-failed",{message:String(i)})}}async function Oi(s,e,t,n,i={}){const a=await Ft(s,e,t,n,i);return"mfaPendingCredential"in a&&ze(s,"multi-factor-auth-required",{_serverResponse:a}),a}async function yu(s,e,t,n){const i=`${e}${t}?${n}`,a=s,c=a.config.emulator?ba(s.config,i):`${s.config.apiScheme}://${i}`;return hf.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function mf(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(He(this.auth,"network-request-failed")),df.get())})}}function ei(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=He(s,e,n);return i.customData._tokenResponse=t,i}function Nc(s){return s!==void 0&&s.enterprise!==void 0}class ff{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gf(s,e){return Ft(s,"GET","/v2/recaptchaConfig",ts(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(s,e){return Ft(s,"POST","/v1/accounts:delete",e)}async function vi(s,e){return Ft(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yf(s,e=!1){const t=tt(s),n=await t.getIdToken(e),i=Ta(n);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:rn(Nr(i.auth_time)),issuedAtTime:rn(Nr(i.iat)),expirationTime:rn(Nr(i.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Nr(s){return Number(s)*1e3}function Ta(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const i=su(t);return i?JSON.parse(i):(ai("Failed to decode base64 JWT payload"),null)}catch(i){return ai("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cc(s){const e=Ta(s);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof dt&&vf(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function vf({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rn(this.lastLoginAt),this.creationTime=rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(s){var e;const t=s.auth,n=await s.getIdToken(),i=await pn(s,vi(t,{idToken:n}));F(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];s._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?vu(a.providerUserInfo):[],l=bf(s.providerData,c),h=s.isAnonymous,m=!(s.email&&a.passwordHash)&&!(l!=null&&l.length),f=h?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new $r(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(s,w)}async function Ef(s){const e=tt(s);await wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bf(s,e){return[...s.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function vu(s){return s.map(e=>{var{providerId:t}=e,n=va(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(s,e){const t=await _u(s,{},async()=>{const n=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=s.config,c=await yu(s,i,"/v1/token",`key=${a}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:n};return s.emulatorConfig&&Ss(s.emulatorConfig.host)&&(h.credentials="include"),gu.fetch()(c,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function If(s,e){return Ft(s,"POST","/v2/accounts:revokeToken",ts(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Cc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:a}=await Tf(e,t);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:a}=t,c=new ps;return n&&(F(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),i&&(F(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(F(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(s,e){F(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,a=va(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new $r(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await pn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yf(this,e)}reload(){return Ef(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await wi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await pn(this,_f(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,a,c,l,h,m,f;const w=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,S=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,k=(c=t.photoURL)!==null&&c!==void 0?c:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,M=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,Y=(m=t.createdAt)!==null&&m!==void 0?m:void 0,$=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Q,emailVerified:ne,isAnonymous:Fe,providerData:le,stsTokenManager:b}=t;F(Q&&b,e,"internal-error");const g=ps.fromJSON(this.name,b);F(typeof Q=="string",e,"internal-error"),_t(w,e.name),_t(_,e.name),F(typeof ne=="boolean",e,"internal-error"),F(typeof Fe=="boolean",e,"internal-error"),_t(S,e.name),_t(k,e.name),_t(D,e.name),_t(M,e.name),_t(Y,e.name),_t($,e.name);const v=new qe({uid:Q,auth:e,email:_,emailVerified:ne,displayName:w,isAnonymous:Fe,photoURL:k,phoneNumber:S,tenantId:D,stsTokenManager:g,createdAt:Y,lastLoginAt:$});return le&&Array.isArray(le)&&(v.providerData=le.map(E=>Object.assign({},E))),M&&(v._redirectEventId=M),v}static async _fromIdTokenResponse(e,t,n=!1){const i=new ps;i.updateFromServerResponse(t);const a=new qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await wi(a),a}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];F(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?vu(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),l=new ps;l.updateFromIdToken(n);const h=new qe({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:c}),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $r(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;function ot(s){ut(s instanceof Function,"Expected a class definition");let e=Rc.get(s);return e?(ut(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Rc.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wu.type="NONE";const kc=wu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(s,e,t){return`firebase:${s}:${e}:${t}`}class fs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=oi(this.userKey,i.apiKey,a),this.fullPersistenceKey=oi("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vi(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new fs(ot(kc),e,n);const i=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=i[0]||ot(kc);const c=oi(n,e.config.apiKey,e.name);let l=null;for(const m of t)try{const f=await m._get(c);if(f){let w;if(typeof f=="string"){const _=await vi(e,{idToken:f}).catch(()=>{});if(!_)break;w=await qe._fromGetAccountInfoResponse(e,_,f)}else w=qe._fromJSON(e,f);m!==a&&(l=w),a=m;break}}catch{}const h=i.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new fs(a,e,n):(a=h[0],l&&await a._set(c,l.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new fs(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Au(e))return"Blackberry";if(Su(e))return"Webos";if(bu(e))return"Safari";if((e.includes("chrome/")||Tu(e))&&!e.includes("edge/"))return"Chrome";if(xu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Eu(s=Ce()){return/firefox\//i.test(s)}function bu(s=Ce()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tu(s=Ce()){return/crios\//i.test(s)}function Iu(s=Ce()){return/iemobile/i.test(s)}function xu(s=Ce()){return/android/i.test(s)}function Au(s=Ce()){return/blackberry/i.test(s)}function Su(s=Ce()){return/webos/i.test(s)}function Ia(s=Ce()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function xf(s=Ce()){var e;return Ia(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Af(){return Lm()&&document.documentMode===10}function Nu(s=Ce()){return Ia(s)||xu(s)||Su(s)||Au(s)||/windows phone/i.test(s)||Iu(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(s,e=[]){let t;switch(s){case"Browser":t=Pc(Ce());break;case"Worker":t=`${Pc(Ce())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ns}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((c,l)=>{try{const h=e(a);c(h)}catch(h){l(h)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nf(s,e={}){return Ft(s,"GET","/v2/passwordPolicy",ts(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=6;class Rf{constructor(e){var t,n,i,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Cf,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,a,c,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(n=h.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(a=h.containsUppercaseLetter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jc(this),this.idTokenSubscription=new jc(this),this.beforeStateQueue=new Sf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var n,i,a;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vi(this,{idToken:e}),n=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===l)&&(h!=null&&h.user)&&(i=h.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(At(this));const t=e?tt(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nf(this),t=new Rf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await If(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,n,i);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ss(s){return tt(s)}class jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pf(s){Vi=s}function Ru(s){return Vi.loadJS(s)}function jf(){return Vi.recaptchaEnterpriseScript}function Mf(){return Vi.gapiScript}function Df(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Of{constructor(){this.enterprise=new Vf}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Vf{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Lf="recaptcha-enterprise",ku="NO_RECAPTCHA";class Ff{constructor(e){this.type=Lf,this.auth=ss(e)}async verify(e="verify",t=!1){async function n(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,l)=>{gf(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const m=new ff(h);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(h=>{l(h)})})}function i(a,c,l){const h=window.grecaptcha;Nc(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(ku)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Of().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{n(this.auth).then(l=>{if(!t&&Nc(window.grecaptcha))i(l,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=jf();h.length!==0&&(h+=l),Ru(h).then(()=>{i(l,a,c)}).catch(m=>{c(m)})}}).catch(l=>{c(l)})})}}async function Mc(s,e,t,n=!1,i=!1){const a=new Ff(s);let c;if(i)c=ku;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,m=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Dc(s,e,t,n,i){var a;if(!((a=s._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Mc(s,e,t,t==="getOobCode");return n(s,c)}else return n(s,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Mc(s,e,t,t==="getOobCode");return n(s,l)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(s,e){const t=ya(s,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Yt(a,e??{}))return i;ze(i,"already-initialized")}return t.initialize({options:e})}function zf(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Bf(s,e,t){const n=ss(s);F(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,a=Pu(e),{host:c,port:l}=Gf(e),h=l===null?"":`:${l}`,m={url:`${a}//${c}${h}/`},f=Object.freeze({host:c,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){F(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),F(Yt(m,n.config.emulator)&&Yt(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=m,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,Ss(c)?(au(`${a}//${c}${h}`),ou("Auth",!0)):$f()}function Pu(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Gf(s){const e=Pu(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:Oc(n.substr(a.length+1))}}else{const[a,c]=n.split(":");return{host:a,port:Oc(c)}}}function Oc(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function $f(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}async function qf(s,e){return Ft(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(s,e){return Oi(s,"POST","/v1/accounts:signInWithPassword",ts(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(s,e){return Oi(s,"POST","/v1/accounts:signInWithEmailLink",ts(s,e))}async function Kf(s,e){return Oi(s,"POST","/v1/accounts:signInWithEmailLink",ts(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends xa{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new fn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new fn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dc(e,t,"signInWithPassword",Hf);case"emailLink":return Wf(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dc(e,n,"signUpPassword",qf);case"emailLink":return Kf(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(s,e){return Oi(s,"POST","/v1/accounts:signInWithIdp",ts(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="http://localhost";class Zt extends xa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,a=va(t,["providerId","signInMethod"]);if(!n||!i)return null;const c=new Zt(n,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return gs(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gs(e,t)}buildRequest(){const e={requestUri:Qf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=In(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yf(s){const e=Ys(Xs(s)).link,t=e?Ys(Xs(e)).deep_link_id:null,n=Ys(Xs(s)).deep_link_id;return(n?Ys(Xs(n)).link:null)||n||t||e||s}class Aa{constructor(e){var t,n,i,a,c,l;const h=Ys(Xs(e)),m=(t=h.apiKey)!==null&&t!==void 0?t:null,f=(n=h.oobCode)!==null&&n!==void 0?n:null,w=Jf((i=h.mode)!==null&&i!==void 0?i:null);F(m&&f&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=f,this.continueUrl=(a=h.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=h.lang)!==null&&c!==void 0?c:null,this.tenantId=(l=h.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Yf(e);try{return new Aa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,t){return fn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Aa.parseLink(t);return F(n,"argument-error"),fn._fromEmailAndCode(e,n.code,n.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends An{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends An{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rt.credential(t,n)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends An{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends An{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const a=await qe._fromIdTokenResponse(e,n,i),c=Vc(n);return new ws({user:a,providerId:c,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Vc(n);return new ws({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Vc(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends dt{constructor(e,t,n,i){var a;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ei.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ei(e,t,n,i)}}function ju(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ei._fromErrorAndOperation(s,a,e,n):a})}async function Xf(s,e,t=!1){const n=await pn(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return ws._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(s,e,t=!1){const{auth:n}=s;if(Ue(n.app))return Promise.reject(At(n));const i="reauthenticate";try{const a=await pn(s,ju(n,i,e,s),t);F(a.idToken,n,"internal-error");const c=Ta(a.idToken);F(c,n,"internal-error");const{sub:l}=c;return F(s.uid===l,n,"user-mismatch"),ws._forOperation(s,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ze(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(s,e,t=!1){if(Ue(s.app))return Promise.reject(At(s));const n="signIn",i=await ju(s,n,e),a=await ws._fromIdTokenResponse(s,n,i);return t||await s._updateCurrentUser(a.user),a}async function eg(s,e){return Mu(ss(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(s){const e=ss(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function sg(s,e,t){return Ue(s.app)?Promise.reject(At(s)):eg(tt(s),Cs.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&tg(s),n})}function ng(s,e,t,n){return tt(s).onIdTokenChanged(e,t,n)}function ig(s,e,t){return tt(s).beforeAuthStateChanged(e,t)}function rg(s,e,t,n){return tt(s).onAuthStateChanged(e,t,n)}function ag(s){return tt(s).signOut()}const bi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=1e3,cg=10;class Ou extends Du{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,h)=>{this.notifyListeners(c,h)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(n);!t&&this.localCache[n]===c||this.notifyListeners(n,c)},a=this.storage.getItem(n);Af()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cg):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ou.type="LOCAL";const lg=Ou;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends Du{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vu.type="SESSION";const Lu=Vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Li(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(c).map(async m=>m(t.origin,a)),h=await ug(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Li.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((l,h)=>{const m=Na("",20);i.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},n);c={messageChannel:i,onMessage(w){const _=w;if(_.data.eventId===m)switch(_.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(_.data.response);break;default:clearTimeout(f),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function dg(s){Ye().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function mg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pg(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function fg(){return Fu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="firebaseLocalStorageDb",gg=1,Ti="firebaseLocalStorage",zu="fbase_key";class Sn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fi(s,e){return s.transaction([Ti],e?"readwrite":"readonly").objectStore(Ti)}function _g(){const s=indexedDB.deleteDatabase(Uu);return new Sn(s).toPromise()}function qr(){const s=indexedDB.open(Uu,gg);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Ti,{keyPath:zu})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Ti)?e(n):(n.close(),await _g(),e(await qr()))})})}async function Lc(s,e,t){const n=Fi(s,!0).put({[zu]:e,value:t});return new Sn(n).toPromise()}async function yg(s,e){const t=Fi(s,!1).get(e),n=await new Sn(t).toPromise();return n===void 0?null:n.value}function Fc(s,e){const t=Fi(s,!0).delete(e);return new Sn(t).toPromise()}const vg=800,wg=3;class Bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>wg)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Li._getInstance(fg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mg(),!this.activeServiceWorker)return;this.sender=new hg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qr();return await Lc(e,bi,"1"),await Fc(e,bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>yg(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Fi(i,!1).getAll();return new Sn(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bu.type="LOCAL";const Eg=Bu;new xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(s,e){return e?ot(e):(F(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends xa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bg(s){return Mu(s.auth,new Ca(s),s.bypassAuthState)}function Tg(s){const{auth:e,user:t}=s;return F(t,e,"internal-error"),Zf(t,new Ca(s),s.bypassAuthState)}async function Ig(s){const{auth:e,user:t}=s;return F(t,e,"internal-error"),Xf(t,new Ca(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:a,error:c,type:l}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bg;case"linkViaPopup":case"linkViaRedirect":return Ig;case"reauthViaPopup":case"reauthViaRedirect":return Tg;default:ze(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new xn(2e3,1e4);async function Ag(s,e,t){if(Ue(s.app))return Promise.reject(He(s,"operation-not-supported-in-this-environment"));const n=ss(s);af(s,e,Sa);const i=Gu(n,t);return new qt(n,"signInViaPopup",e,i).executeNotNull()}class qt extends $u{constructor(e,t,n,i,a){super(e,t,i,a),this.provider=n,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Na();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xg.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="pendingRedirect",ci=new Map;class Ng extends $u{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ci.get(this.auth._key());if(!e){try{const n=await Cg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ci.set(this.auth._key(),e)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cg(s,e){const t=Pg(e),n=kg(s);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Rg(s,e){ci.set(s._key(),e)}function kg(s){return ot(s._redirectPersistence)}function Pg(s){return oi(Sg,s.config.apiKey,s.name)}async function jg(s,e,t=!1){if(Ue(s.app))return Promise.reject(At(s));const n=ss(s),i=Gu(n,e),c=await new Ng(n,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=600*1e3;class Dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Og(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!qu(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(He(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uc(e))}saveEventToCache(e){this.cachedEventUids.add(Uc(e)),this.lastProcessedEventTime=Date.now()}}function Uc(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function qu({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Og(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qu(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(s,e={}){return Ft(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fg=/^https?/;async function Ug(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Vg(s);for(const t of e)try{if(zg(t))return}catch{}ze(s,"unauthorized-domain")}function zg(s){const e=Gr(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const c=new URL(s);return c.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===n}if(!Fg.test(t))return!1;if(Lg.test(s))return n===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new xn(3e4,6e4);function zc(){const s=Ye().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function Gg(s){return new Promise((e,t)=>{var n,i,a;function c(){zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zc(),t(He(s,"network-request-failed"))},timeout:Bg.get()})}if(!((i=(n=Ye().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Ye().gapi)===null||a===void 0)&&a.load)c();else{const l=Df("iframefcb");return Ye()[l]=()=>{gapi.load?c():t(He(s,"network-request-failed"))},Ru(`${Mf()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw li=null,e})}let li=null;function $g(s){return li=li||Gg(s),li}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new xn(5e3,15e3),Hg="__/auth/iframe",Wg="emulator/auth/iframe",Kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jg(s){const e=s.config;F(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?ba(e,Wg):`https://${s.config.authDomain}/${Hg}`,n={apiKey:e.apiKey,appName:s.name,v:Ns},i=Qg.get(s.config.apiHost);i&&(n.eid=i);const a=s._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${In(n).slice(1)}`}async function Yg(s){const e=await $g(s),t=Ye().gapi;return F(t,s,"internal-error"),e.open({where:document.body,url:Jg(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kg,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const c=He(s,"network-request-failed"),l=Ye().setTimeout(()=>{a(c)},qg.get());function h(){Ye().clearTimeout(l),i(n)}n.ping(h).then(h,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zg=500,e_=600,t_="_blank",s_="http://localhost";class Bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n_(s,e,t,n=Zg,i=e_){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const h=Object.assign(Object.assign({},Xg),{width:n.toString(),height:i.toString(),top:a,left:c}),m=Ce().toLowerCase();t&&(l=Tu(m)?t_:t),Eu(m)&&(e=e||s_,h.scrollbars="yes");const f=Object.entries(h).reduce((_,[S,k])=>`${_}${S}=${k},`,"");if(xf(m)&&l!=="_self")return i_(e||"",l),new Bc(null);const w=window.open(e||"",l,f);F(w,s,"popup-blocked");try{w.focus()}catch{}return new Bc(w)}function i_(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="__/auth/handler",a_="emulator/auth/handler",o_=encodeURIComponent("fac");async function Gc(s,e,t,n,i,a){F(s.config.authDomain,s,"auth-domain-config-required"),F(s.config.apiKey,s,"invalid-api-key");const c={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:Ns,eventId:i};if(e instanceof Sa){e.setDefaultLanguage(s.languageCode),c.providerId=e.providerId||"",qm(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,w]of Object.entries({}))c[f]=w}if(e instanceof An){const f=e.getScopes().filter(w=>w!=="");f.length>0&&(c.scopes=f.join(","))}s.tenantId&&(c.tid=s.tenantId);const l=c;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const h=await s._getAppCheckToken(),m=h?`#${o_}=${encodeURIComponent(h)}`:"";return`${c_(s)}?${In(l).slice(1)}${m}`}function c_({config:s}){return s.emulator?ba(s,a_):`https://${s.authDomain}/${r_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="webStorageSupport";class l_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=jg,this._overrideRedirectResult=Rg}async _openPopup(e,t,n,i){var a;ut((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Gc(e,t,n,Gr(),i);return n_(e,c,Na())}async _openRedirect(e,t,n,i){await this._originValidation(e);const a=await Gc(e,t,n,Gr(),i);return dg(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(ut(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Yg(e),n=new Dg(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cr,{type:Cr},i=>{var a;const c=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Cr];c!==void 0&&t(!!c),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ug(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nu()||bu()||Ia()}}const u_=l_;var $c="@firebase/auth",qc="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m_(s){vs(new Xt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=n.options;F(c&&!c.includes(":"),"invalid-api-key",{appName:n.name});const h={apiKey:c,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cu(s)},m=new kf(n,i,a,h);return zf(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),vs(new Xt("auth-internal",e=>{const t=ss(e.getProvider("auth").getImmediate());return(n=>new h_(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt($c,qc,d_(s)),xt($c,qc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=300,f_=ru("authIdTokenMaxAge")||p_;let Hc=null;const g_=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>f_)return;const i=t==null?void 0:t.token;Hc!==i&&(Hc=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function __(s=hu()){const e=ya(s,"auth");if(e.isInitialized())return e.getImmediate();const t=Uf(s,{popupRedirectResolver:u_,persistence:[Eg,lg,Lu]}),n=ru("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const c=g_(a.toString());ig(t,c,()=>c(t.currentUser)),ng(t,l=>c(l))}}const i=nu("auth");return i&&Bf(t,`http://${i}`),t}function y_(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}Pf({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=i=>{const a=He("internal-error");a.customData=i,t(a)},n.type="text/javascript",n.charset="UTF-8",y_().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m_("Browser");var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var St,Hu;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function v(){}v.prototype=g.prototype,b.D=g.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(E,T,x){for(var y=Array(arguments.length-2),st=2;st<arguments.length;st++)y[st-2]=arguments[st];return g.prototype[T].apply(E,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)E[T]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=b.g[0],v=b.g[1],T=b.g[2];var x=b.g[3],y=g+(x^v&(T^x))+E[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=x+(T^g&(v^T))+E[1]+3905402710&4294967295,x=g+(y<<12&4294967295|y>>>20),y=T+(v^x&(g^v))+E[2]+606105819&4294967295,T=x+(y<<17&4294967295|y>>>15),y=v+(g^T&(x^g))+E[3]+3250441966&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(x^v&(T^x))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=x+(T^g&(v^T))+E[5]+1200080426&4294967295,x=g+(y<<12&4294967295|y>>>20),y=T+(v^x&(g^v))+E[6]+2821735955&4294967295,T=x+(y<<17&4294967295|y>>>15),y=v+(g^T&(x^g))+E[7]+4249261313&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(x^v&(T^x))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=x+(T^g&(v^T))+E[9]+2336552879&4294967295,x=g+(y<<12&4294967295|y>>>20),y=T+(v^x&(g^v))+E[10]+4294925233&4294967295,T=x+(y<<17&4294967295|y>>>15),y=v+(g^T&(x^g))+E[11]+2304563134&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(x^v&(T^x))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=x+(T^g&(v^T))+E[13]+4254626195&4294967295,x=g+(y<<12&4294967295|y>>>20),y=T+(v^x&(g^v))+E[14]+2792965006&4294967295,T=x+(y<<17&4294967295|y>>>15),y=v+(g^T&(x^g))+E[15]+1236535329&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(T^x&(v^T))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=x+(v^T&(g^v))+E[6]+3225465664&4294967295,x=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(x^g))+E[11]+643717713&4294967295,T=x+(y<<14&4294967295|y>>>18),y=v+(x^g&(T^x))+E[0]+3921069994&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^x&(v^T))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=x+(v^T&(g^v))+E[10]+38016083&4294967295,x=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(x^g))+E[15]+3634488961&4294967295,T=x+(y<<14&4294967295|y>>>18),y=v+(x^g&(T^x))+E[4]+3889429448&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^x&(v^T))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=x+(v^T&(g^v))+E[14]+3275163606&4294967295,x=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(x^g))+E[3]+4107603335&4294967295,T=x+(y<<14&4294967295|y>>>18),y=v+(x^g&(T^x))+E[8]+1163531501&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^x&(v^T))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=x+(v^T&(g^v))+E[2]+4243563512&4294967295,x=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(x^g))+E[7]+1735328473&4294967295,T=x+(y<<14&4294967295|y>>>18),y=v+(x^g&(T^x))+E[12]+2368359562&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(v^T^x)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=x+(g^v^T)+E[8]+2272392833&4294967295,x=g+(y<<11&4294967295|y>>>21),y=T+(x^g^v)+E[11]+1839030562&4294967295,T=x+(y<<16&4294967295|y>>>16),y=v+(T^x^g)+E[14]+4259657740&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^x)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=x+(g^v^T)+E[4]+1272893353&4294967295,x=g+(y<<11&4294967295|y>>>21),y=T+(x^g^v)+E[7]+4139469664&4294967295,T=x+(y<<16&4294967295|y>>>16),y=v+(T^x^g)+E[10]+3200236656&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^x)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=x+(g^v^T)+E[0]+3936430074&4294967295,x=g+(y<<11&4294967295|y>>>21),y=T+(x^g^v)+E[3]+3572445317&4294967295,T=x+(y<<16&4294967295|y>>>16),y=v+(T^x^g)+E[6]+76029189&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^x)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=x+(g^v^T)+E[12]+3873151461&4294967295,x=g+(y<<11&4294967295|y>>>21),y=T+(x^g^v)+E[15]+530742520&4294967295,T=x+(y<<16&4294967295|y>>>16),y=v+(T^x^g)+E[2]+3299628645&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(T^(v|~x))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=x+(v^(g|~T))+E[7]+1126891415&4294967295,x=g+(y<<10&4294967295|y>>>22),y=T+(g^(x|~v))+E[14]+2878612391&4294967295,T=x+(y<<15&4294967295|y>>>17),y=v+(x^(T|~g))+E[5]+4237533241&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~x))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=x+(v^(g|~T))+E[3]+2399980690&4294967295,x=g+(y<<10&4294967295|y>>>22),y=T+(g^(x|~v))+E[10]+4293915773&4294967295,T=x+(y<<15&4294967295|y>>>17),y=v+(x^(T|~g))+E[1]+2240044497&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~x))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=x+(v^(g|~T))+E[15]+4264355552&4294967295,x=g+(y<<10&4294967295|y>>>22),y=T+(g^(x|~v))+E[6]+2734768916&4294967295,T=x+(y<<15&4294967295|y>>>17),y=v+(x^(T|~g))+E[13]+1309151649&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~x))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=x+(v^(g|~T))+E[11]+3174756917&4294967295,x=g+(y<<10&4294967295|y>>>22),y=T+(g^(x|~v))+E[2]+718787259&4294967295,T=x+(y<<15&4294967295|y>>>17),y=v+(x^(T|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+x&4294967295}n.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var v=g-this.blockSize,E=this.B,T=this.h,x=0;x<g;){if(T==0)for(;x<=v;)i(this,b,x),x+=this.blockSize;if(typeof b=="string"){for(;x<g;)if(E[T++]=b.charCodeAt(x++),T==this.blockSize){i(this,E),T=0;break}}else for(;x<g;)if(E[T++]=b[x++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=g},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var v=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=v&255,v/=256;for(this.u(b),b=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)b[v++]=this.g[g]>>>E&255;return b};function a(b,g){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=g(b)}function c(b,g){this.h=g;for(var v=[],E=!0,T=b.length-1;0<=T;T--){var x=b[T]|0;E&&x==g||(v[T]=x,E=!1)}this.g=v}var l={};function h(b){return-128<=b&&128>b?a(b,function(g){return new c([g|0],0>g?-1:0)}):new c([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return w;if(0>b)return M(m(-b));for(var g=[],v=1,E=0;b>=v;E++)g[E]=b/v|0,v*=4294967296;return new c(g,0)}function f(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return M(f(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=m(Math.pow(g,8)),E=w,T=0;T<b.length;T+=8){var x=Math.min(8,b.length-T),y=parseInt(b.substring(T,T+x),g);8>x?(x=m(Math.pow(g,x)),E=E.j(x).add(m(y))):(E=E.j(v),E=E.add(m(y)))}return E}var w=h(0),_=h(1),S=h(16777216);s=c.prototype,s.m=function(){if(D(this))return-M(this).m();for(var b=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);b+=(0<=E?E:4294967296+E)*g,g*=4294967296}return b},s.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(D(this))return"-"+M(this).toString(b);for(var g=m(Math.pow(b,6)),v=this,E="";;){var T=ne(v,g).g;v=Y(v,T.j(g));var x=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=T,k(v))return x+E;for(;6>x.length;)x="0"+x;E=x+E}},s.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function D(b){return b.h==-1}s.l=function(b){return b=Y(this,b),D(b)?-1:k(b)?0:1};function M(b){for(var g=b.g.length,v=[],E=0;E<g;E++)v[E]=~b.g[E];return new c(v,~b.h).add(_)}s.abs=function(){return D(this)?M(this):this},s.add=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],E=0,T=0;T<=g;T++){var x=E+(this.i(T)&65535)+(b.i(T)&65535),y=(x>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=y>>>16,x&=65535,y&=65535,v[T]=y<<16|x}return new c(v,v[v.length-1]&-2147483648?-1:0)};function Y(b,g){return b.add(M(g))}s.j=function(b){if(k(this)||k(b))return w;if(D(this))return D(b)?M(this).j(M(b)):M(M(this).j(b));if(D(b))return M(this.j(M(b)));if(0>this.l(S)&&0>b.l(S))return m(this.m()*b.m());for(var g=this.g.length+b.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<b.g.length;T++){var x=this.i(E)>>>16,y=this.i(E)&65535,st=b.i(T)>>>16,js=b.i(T)&65535;v[2*E+2*T]+=y*js,$(v,2*E+2*T),v[2*E+2*T+1]+=x*js,$(v,2*E+2*T+1),v[2*E+2*T+1]+=y*st,$(v,2*E+2*T+1),v[2*E+2*T+2]+=x*st,$(v,2*E+2*T+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new c(v,0)};function $(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function Q(b,g){this.g=b,this.h=g}function ne(b,g){if(k(g))throw Error("division by zero");if(k(b))return new Q(w,w);if(D(b))return g=ne(M(b),g),new Q(M(g.g),M(g.h));if(D(g))return g=ne(b,M(g)),new Q(M(g.g),g.h);if(30<b.g.length){if(D(b)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,E=g;0>=E.l(b);)v=Fe(v),E=Fe(E);var T=le(v,1),x=le(E,1);for(E=le(E,2),v=le(v,2);!k(E);){var y=x.add(E);0>=y.l(b)&&(T=T.add(v),x=y),E=le(E,1),v=le(v,1)}return g=Y(b,T.j(g)),new Q(T,g)}for(T=w;0<=b.l(g);){for(v=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),x=m(v),y=x.j(g);D(y)||0<y.l(b);)v-=E,x=m(v),y=x.j(g);k(x)&&(x=_),T=T.add(x),b=Y(b,y)}return new Q(T,b)}s.A=function(b){return ne(this,b).h},s.and=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&b.i(E);return new c(v,this.h&b.h)},s.or=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|b.i(E);return new c(v,this.h|b.h)},s.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^b.i(E);return new c(v,this.h^b.h)};function Fe(b){for(var g=b.g.length+1,v=[],E=0;E<g;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new c(v,b.h)}function le(b,g){var v=g>>5;g%=32;for(var E=b.g.length-v,T=[],x=0;x<E;x++)T[x]=0<g?b.i(x+v)>>>g|b.i(x+v+1)<<32-g:b.i(x+v);return new c(T,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Hu=n,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=f,St=c}).apply(typeof Wc<"u"?Wc:typeof self<"u"?self:typeof window<"u"?window:{});var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wu,Zs,Ku,ui,Hr,Qu,Ju,Yu;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,u,d){return r==Array.prototype||r==Object.prototype||(r[u]=d.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof ti=="object"&&ti];for(var u=0;u<r.length;++u){var d=r[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(r,u){if(u)e:{var d=n;r=r.split(".");for(var p=0;p<r.length-1;p++){var I=r[p];if(!(I in d))break e;d=d[I]}r=r[r.length-1],p=d[r],u=u(p),u!=p&&u!=null&&e(d,r,{configurable:!0,writable:!0,value:u})}}function a(r,u){r instanceof String&&(r+="");var d=0,p=!1,I={next:function(){if(!p&&d<r.length){var A=d++;return{value:u(A,r[A]),done:!1}}return p=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(r){return r||function(){return a(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function h(r){var u=typeof r;return u=u!="object"?u:r?Array.isArray(r)?"array":u:"null",u=="array"||u=="object"&&typeof r.length=="number"}function m(r){var u=typeof r;return u=="object"&&r!=null||u=="function"}function f(r,u,d){return r.call.apply(r.bind,arguments)}function w(r,u,d){if(!r)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,p),r.apply(u,I)}}return function(){return r.apply(u,arguments)}}function _(r,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:w,_.apply(null,arguments)}function S(r,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),r.apply(this,p)}}function k(r,u){function d(){}d.prototype=u.prototype,r.aa=u.prototype,r.prototype=new d,r.prototype.constructor=r,r.Qb=function(p,I,A){for(var R=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)R[ee-2]=arguments[ee];return u.prototype[I].apply(p,R)}}function D(r){const u=r.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=r[p];return d}return[]}function M(r,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(h(p)){const I=r.length||0,A=p.length||0;r.length=I+A;for(let R=0;R<A;R++)r[I+R]=p[R]}else r.push(p)}}class Y{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(r){return/^[\s\xa0]*$/.test(r)}function Q(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function ne(r){return ne[" "](r),r}ne[" "]=function(){};var Fe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function le(r,u,d){for(const p in r)u.call(d,r[p],p,r)}function b(r,u){for(const d in r)u.call(void 0,r[d],d,r)}function g(r){const u={};for(const d in r)u[d]=r[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,u){let d,p;for(let I=1;I<arguments.length;I++){p=arguments[I];for(d in p)r[d]=p[d];for(let A=0;A<v.length;A++)d=v[A],Object.prototype.hasOwnProperty.call(p,d)&&(r[d]=p[d])}}function T(r){var u=1;r=r.split(":");const d=[];for(;0<u&&r.length;)d.push(r.shift()),u--;return r.length&&d.push(r.join(":")),d}function x(r){l.setTimeout(()=>{throw r},0)}function y(){var r=Xi;let u=null;return r.g&&(u=r.g,r.g=r.g.next,r.g||(r.h=null),u.next=null),u}class st{constructor(){this.h=this.g=null}add(u,d){const p=js.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var js=new Y(()=>new bd,r=>r.reset());class bd{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ms,Ds=!1,Xi=new st,oo=()=>{const r=l.Promise.resolve(void 0);Ms=()=>{r.then(Td)}};var Td=()=>{for(var r;r=y();){try{r.h.call(r.g)}catch(d){x(d)}var u=js;u.j(r),100>u.h&&(u.h++,r.next=u.g,u.g=r)}Ds=!1};function mt(){this.s=this.s,this.C=this.C}mt.prototype.s=!1,mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(r,u){this.type=r,this.g=this.target=u,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Id=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,u=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return r})();function Os(r,u){if(be.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var d=this.type=r.type,p=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=u,u=r.relatedTarget){if(Fe){e:{try{ne(u.nodeName);var I=!0;break e}catch{}I=!1}I||(u=null)}}else d=="mouseover"?u=r.fromElement:d=="mouseout"&&(u=r.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:xd[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Os.aa.h.call(this)}}k(Os,be);var xd={2:"touch",3:"pen",4:"mouse"};Os.prototype.h=function(){Os.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),Ad=0;function Sd(r,u,d,p,I){this.listener=r,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=I,this.key=++Ad,this.da=this.fa=!1}function Dn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function On(r){this.src=r,this.g={},this.h=0}On.prototype.add=function(r,u,d,p,I){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var R=er(r,u,p,I);return-1<R?(u=r[R],d||(u.fa=!1)):(u=new Sd(u,this.src,A,!!p,I),u.fa=d,r.push(u)),u};function Zi(r,u){var d=u.type;if(d in r.g){var p=r.g[d],I=Array.prototype.indexOf.call(p,u,void 0),A;(A=0<=I)&&Array.prototype.splice.call(p,I,1),A&&(Dn(u),r.g[d].length==0&&(delete r.g[d],r.h--))}}function er(r,u,d,p){for(var I=0;I<r.length;++I){var A=r[I];if(!A.da&&A.listener==u&&A.capture==!!d&&A.ha==p)return I}return-1}var tr="closure_lm_"+(1e6*Math.random()|0),sr={};function co(r,u,d,p,I){if(Array.isArray(u)){for(var A=0;A<u.length;A++)co(r,u[A],d,p,I);return null}return d=ho(d),r&&r[Mn]?r.K(u,d,m(p)?!!p.capture:!1,I):Nd(r,u,d,!1,p,I)}function Nd(r,u,d,p,I,A){if(!u)throw Error("Invalid event type");var R=m(I)?!!I.capture:!!I,ee=ir(r);if(ee||(r[tr]=ee=new On(r)),d=ee.add(u,d,p,R,A),d.proxy)return d;if(p=Cd(),d.proxy=p,p.src=r,p.listener=d,r.addEventListener)Id||(I=R),I===void 0&&(I=!1),r.addEventListener(u.toString(),p,I);else if(r.attachEvent)r.attachEvent(uo(u.toString()),p);else if(r.addListener&&r.removeListener)r.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Cd(){function r(d){return u.call(r.src,r.listener,d)}const u=Rd;return r}function lo(r,u,d,p,I){if(Array.isArray(u))for(var A=0;A<u.length;A++)lo(r,u[A],d,p,I);else p=m(p)?!!p.capture:!!p,d=ho(d),r&&r[Mn]?(r=r.i,u=String(u).toString(),u in r.g&&(A=r.g[u],d=er(A,d,p,I),-1<d&&(Dn(A[d]),Array.prototype.splice.call(A,d,1),A.length==0&&(delete r.g[u],r.h--)))):r&&(r=ir(r))&&(u=r.g[u.toString()],r=-1,u&&(r=er(u,d,p,I)),(d=-1<r?u[r]:null)&&nr(d))}function nr(r){if(typeof r!="number"&&r&&!r.da){var u=r.src;if(u&&u[Mn])Zi(u.i,r);else{var d=r.type,p=r.proxy;u.removeEventListener?u.removeEventListener(d,p,r.capture):u.detachEvent?u.detachEvent(uo(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=ir(u))?(Zi(d,r),d.h==0&&(d.src=null,u[tr]=null)):Dn(r)}}}function uo(r){return r in sr?sr[r]:sr[r]="on"+r}function Rd(r,u){if(r.da)r=!0;else{u=new Os(u,this);var d=r.listener,p=r.ha||r.src;r.fa&&nr(r),r=d.call(p,u)}return r}function ir(r){return r=r[tr],r instanceof On?r:null}var rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ho(r){return typeof r=="function"?r:(r[rr]||(r[rr]=function(u){return r.handleEvent(u)}),r[rr])}function Te(){mt.call(this),this.i=new On(this),this.M=this,this.F=null}k(Te,mt),Te.prototype[Mn]=!0,Te.prototype.removeEventListener=function(r,u,d,p){lo(this,r,u,d,p)};function Re(r,u){var d,p=r.F;if(p)for(d=[];p;p=p.F)d.push(p);if(r=r.M,p=u.type||u,typeof u=="string")u=new be(u,r);else if(u instanceof be)u.target=u.target||r;else{var I=u;u=new be(p,r),E(u,I)}if(I=!0,d)for(var A=d.length-1;0<=A;A--){var R=u.g=d[A];I=Vn(R,p,!0,u)&&I}if(R=u.g=r,I=Vn(R,p,!0,u)&&I,I=Vn(R,p,!1,u)&&I,d)for(A=0;A<d.length;A++)R=u.g=d[A],I=Vn(R,p,!1,u)&&I}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var r=this.i,u;for(u in r.g){for(var d=r.g[u],p=0;p<d.length;p++)Dn(d[p]);delete r.g[u],r.h--}}this.F=null},Te.prototype.K=function(r,u,d,p){return this.i.add(String(r),u,!1,d,p)},Te.prototype.L=function(r,u,d,p){return this.i.add(String(r),u,!0,d,p)};function Vn(r,u,d,p){if(u=r.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,A=0;A<u.length;++A){var R=u[A];if(R&&!R.da&&R.capture==d){var ee=R.listener,ye=R.ha||R.src;R.fa&&Zi(r.i,R),I=ee.call(ye,p)!==!1&&I}}return I&&!p.defaultPrevented}function mo(r,u,d){if(typeof r=="function")d&&(r=_(r,d));else if(r&&typeof r.handleEvent=="function")r=_(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(r,u||0)}function po(r){r.g=mo(()=>{r.g=null,r.i&&(r.i=!1,po(r))},r.l);const u=r.h;r.h=null,r.m.apply(null,u)}class kd extends mt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:po(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(r){mt.call(this),this.h=r,this.g={}}k(Vs,mt);var fo=[];function go(r){le(r.g,function(u,d){this.g.hasOwnProperty(d)&&nr(u)},r),r.g={}}Vs.prototype.N=function(){Vs.aa.N.call(this),go(this)},Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ar=l.JSON.stringify,Pd=l.JSON.parse,jd=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function or(){}or.prototype.h=null;function _o(r){return r.h||(r.h=r.i())}function yo(){}var Ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){be.call(this,"d")}k(cr,be);function lr(){be.call(this,"c")}k(lr,be);var Ut={},vo=null;function Ln(){return vo=vo||new Te}Ut.La="serverreachability";function wo(r){be.call(this,Ut.La,r)}k(wo,be);function Fs(r){const u=Ln();Re(u,new wo(u))}Ut.STAT_EVENT="statevent";function Eo(r,u){be.call(this,Ut.STAT_EVENT,r),this.stat=u}k(Eo,be);function ke(r){const u=Ln();Re(u,new Eo(u,r))}Ut.Ma="timingevent";function bo(r,u){be.call(this,Ut.Ma,r),this.size=u}k(bo,be);function Us(r,u){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},u)}function zs(){this.g=!0}zs.prototype.xa=function(){this.g=!1};function Md(r,u,d,p,I,A){r.info(function(){if(r.g)if(A)for(var R="",ee=A.split("&"),ye=0;ye<ee.length;ye++){var J=ee[ye].split("=");if(1<J.length){var Ie=J[0];J=J[1];var xe=Ie.split("_");R=2<=xe.length&&xe[1]=="type"?R+(Ie+"="+J+"&"):R+(Ie+"=redacted&")}}else R=null;else R=A;return"XMLHTTP REQ ("+p+") [attempt "+I+"]: "+u+`
`+d+`
`+R})}function Dd(r,u,d,p,I,A,R){r.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+I+"]: "+u+`
`+d+`
`+A+" "+R})}function as(r,u,d,p){r.info(function(){return"XMLHTTP TEXT ("+u+"): "+Vd(r,d)+(p?" "+p:"")})}function Od(r,u){r.info(function(){return"TIMEOUT: "+u})}zs.prototype.info=function(){};function Vd(r,u){if(!r.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(r=0;r<d.length;r++)if(Array.isArray(d[r])){var p=d[r];if(!(2>p.length)){var I=p[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var R=1;R<I.length;R++)I[R]=""}}}}return ar(d)}catch{return u}}var Fn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},To={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ur;function Un(){}k(Un,or),Un.prototype.g=function(){return new XMLHttpRequest},Un.prototype.i=function(){return{}},ur=new Un;function pt(r,u,d,p){this.j=r,this.i=u,this.l=d,this.R=p||1,this.U=new Vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Io}function Io(){this.i=null,this.g="",this.h=!1}var xo={},hr={};function dr(r,u,d){r.L=1,r.v=$n(nt(u)),r.m=d,r.P=!0,Ao(r,null)}function Ao(r,u){r.F=Date.now(),zn(r),r.A=nt(r.v);var d=r.A,p=r.R;Array.isArray(p)||(p=[String(p)]),Uo(d.i,"t",p),r.C=0,d=r.j.J,r.h=new Io,r.g=ic(r.j,d?u:null,!r.m),0<r.O&&(r.M=new kd(_(r.Y,r,r.g),r.O)),u=r.U,d=r.g,p=r.ca;var I="readystatechange";Array.isArray(I)||(I&&(fo[0]=I.toString()),I=fo);for(var A=0;A<I.length;A++){var R=co(d,I[A],p||u.handleEvent,!1,u.h||u);if(!R)break;u.g[R.key]=R}u=r.H?g(r.H):{},r.m?(r.u||(r.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,u)):(r.u="GET",r.g.ea(r.A,r.u,null,u)),Fs(),Md(r.i,r.u,r.A,r.l,r.R,r.m)}pt.prototype.ca=function(r){r=r.target;const u=this.M;u&&it(r)==3?u.j():this.Y(r)},pt.prototype.Y=function(r){try{if(r==this.g)e:{const xe=it(this.g);var u=this.g.Ba();const ls=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||Wo(this.g)))){this.J||xe!=4||u==7||(u==8||0>=ls?Fs(3):Fs(2)),mr(this);var d=this.g.Z();this.X=d;t:if(So(this)){var p=Wo(this.g);r="";var I=p.length,A=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),Bs(this);var R="";break t}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,r+=this.h.i.decode(p[u],{stream:!(A&&u==I-1)});p.length=0,this.h.g+=r,this.C=0,R=this.h.g}else R=this.g.oa();if(this.o=d==200,Dd(this.i,this.u,this.A,this.l,this.R,xe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,ye=this.g;if((ee=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(ee)){var J=ee;break t}}J=null}if(d=J)as(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pr(this,d);else{this.o=!1,this.s=3,ke(12),zt(this),Bs(this);break e}}if(this.P){d=!0;let Be;for(;!this.J&&this.C<R.length;)if(Be=Ld(this,R),Be==hr){xe==4&&(this.s=4,ke(14),d=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==xo){this.s=4,ke(15),as(this.i,this.l,R,"[Invalid Chunk]"),d=!1;break}else as(this.i,this.l,Be,null),pr(this,Be);if(So(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||R.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)as(this.i,this.l,R,"[Invalid Chunked Response]"),zt(this),Bs(this);else if(0<R.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+R.length),wr(Ie),Ie.M=!0,ke(11))}}else as(this.i,this.l,R,null),pr(this,R);xe==4&&zt(this),this.o&&!this.J&&(xe==4?ec(this.j,this):(this.o=!1,zn(this)))}else tm(this.g),d==400&&0<R.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),zt(this),Bs(this)}}}catch{}finally{}};function So(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ld(r,u){var d=r.C,p=u.indexOf(`
`,d);return p==-1?hr:(d=Number(u.substring(d,p)),isNaN(d)?xo:(p+=1,p+d>u.length?hr:(u=u.slice(p,p+d),r.C=p+d,u)))}pt.prototype.cancel=function(){this.J=!0,zt(this)};function zn(r){r.S=Date.now()+r.I,No(r,r.I)}function No(r,u){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Us(_(r.ba,r),u)}function mr(r){r.B&&(l.clearTimeout(r.B),r.B=null)}pt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Od(this.i,this.A),this.L!=2&&(Fs(),ke(17)),zt(this),this.s=2,Bs(this)):No(this,this.S-r)};function Bs(r){r.j.G==0||r.J||ec(r.j,r)}function zt(r){mr(r);var u=r.M;u&&typeof u.ma=="function"&&u.ma(),r.M=null,go(r.U),r.g&&(u=r.g,r.g=null,u.abort(),u.ma())}function pr(r,u){try{var d=r.j;if(d.G!=0&&(d.g==r||fr(d.h,r))){if(!r.K&&fr(d.h,r)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var I=p;if(I[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<r.F)Jn(d),Kn(d);else break e;vr(d),ke(18)}}else d.za=I[1],0<d.za-d.T&&37500>I[2]&&d.F&&d.v==0&&!d.C&&(d.C=Us(_(d.Za,d),6e3));if(1>=ko(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Gt(d,11)}else if((r.K||d.g==r)&&Jn(d),!$(u))for(I=d.Da.g.parse(u),u=0;u<I.length;u++){let J=I[u];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const Ie=J[3];Ie!=null&&(d.la=Ie,d.j.info("VER="+d.la));const xe=J[4];xe!=null&&(d.Aa=xe,d.j.info("SVER="+d.Aa));const ls=J[5];ls!=null&&typeof ls=="number"&&0<ls&&(p=1.5*ls,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Be=r.g;if(Be){const Xn=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xn){var A=p.h;A.g||Xn.indexOf("spdy")==-1&&Xn.indexOf("quic")==-1&&Xn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(gr(A,A.h),A.h=null))}if(p.D){const Er=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;Er&&(p.ya=Er,se(p.I,p.D,Er))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-r.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var R=r;if(p.qa=nc(p,p.J?p.ia:null,p.W),R.K){Po(p.h,R);var ee=R,ye=p.L;ye&&(ee.I=ye),ee.B&&(mr(ee),zn(ee)),p.g=R}else Xo(p);0<d.i.length&&Qn(d)}else J[0]!="stop"&&J[0]!="close"||Gt(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Gt(d,7):yr(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}Fs(4)}catch{}}var Fd=class{constructor(r,u){this.g=r,this.map=u}};function Co(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ro(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ko(r){return r.h?1:r.g?r.g.size:0}function fr(r,u){return r.h?r.h==u:r.g?r.g.has(u):!1}function gr(r,u){r.g?r.g.add(u):r.h=u}function Po(r,u){r.h&&r.h==u?r.h=null:r.g&&r.g.has(u)&&r.g.delete(u)}Co.prototype.cancel=function(){if(this.i=jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function jo(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let u=r.i;for(const d of r.g.values())u=u.concat(d.D);return u}return D(r.i)}function Ud(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var u=[],d=r.length,p=0;p<d;p++)u.push(r[p]);return u}u=[],d=0;for(p in r)u[d++]=r[p];return u}function zd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var u=[];r=r.length;for(var d=0;d<r;d++)u.push(d);return u}u=[],d=0;for(const p in r)u[d++]=p;return u}}}function Mo(r,u){if(r.forEach&&typeof r.forEach=="function")r.forEach(u,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,u,void 0);else for(var d=zd(r),p=Ud(r),I=p.length,A=0;A<I;A++)u.call(void 0,p[A],d&&d[A],r)}var Do=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bd(r,u){if(r){r=r.split("&");for(var d=0;d<r.length;d++){var p=r[d].indexOf("="),I=null;if(0<=p){var A=r[d].substring(0,p);I=r[d].substring(p+1)}else A=r[d];u(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Bt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Bt){this.h=r.h,Bn(this,r.j),this.o=r.o,this.g=r.g,Gn(this,r.s),this.l=r.l;var u=r.i,d=new qs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Oo(this,d),this.m=r.m}else r&&(u=String(r).match(Do))?(this.h=!1,Bn(this,u[1]||"",!0),this.o=Gs(u[2]||""),this.g=Gs(u[3]||"",!0),Gn(this,u[4]),this.l=Gs(u[5]||"",!0),Oo(this,u[6]||"",!0),this.m=Gs(u[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Bt.prototype.toString=function(){var r=[],u=this.j;u&&r.push($s(u,Vo,!0),":");var d=this.g;return(d||u=="file")&&(r.push("//"),(u=this.o)&&r.push($s(u,Vo,!0),"@"),r.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&r.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&r.push("/"),r.push($s(d,d.charAt(0)=="/"?qd:$d,!0))),(d=this.i.toString())&&r.push("?",d),(d=this.m)&&r.push("#",$s(d,Wd)),r.join("")};function nt(r){return new Bt(r)}function Bn(r,u,d){r.j=d?Gs(u,!0):u,r.j&&(r.j=r.j.replace(/:$/,""))}function Gn(r,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);r.s=u}else r.s=null}function Oo(r,u,d){u instanceof qs?(r.i=u,Kd(r.i,r.h)):(d||(u=$s(u,Hd)),r.i=new qs(u,r.h))}function se(r,u,d){r.i.set(u,d)}function $n(r){return se(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Gs(r,u){return r?u?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function $s(r,u,d){return typeof r=="string"?(r=encodeURI(r).replace(u,Gd),d&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Gd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Vo=/[#\/\?@]/g,$d=/[#\?:]/g,qd=/[#\?]/g,Hd=/[#\?@]/g,Wd=/#/g;function qs(r,u){this.h=this.g=null,this.i=r||null,this.j=!!u}function ft(r){r.g||(r.g=new Map,r.h=0,r.i&&Bd(r.i,function(u,d){r.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}s=qs.prototype,s.add=function(r,u){ft(this),this.i=null,r=os(this,r);var d=this.g.get(r);return d||this.g.set(r,d=[]),d.push(u),this.h+=1,this};function Lo(r,u){ft(r),u=os(r,u),r.g.has(u)&&(r.i=null,r.h-=r.g.get(u).length,r.g.delete(u))}function Fo(r,u){return ft(r),u=os(r,u),r.g.has(u)}s.forEach=function(r,u){ft(this),this.g.forEach(function(d,p){d.forEach(function(I){r.call(u,I,p,this)},this)},this)},s.na=function(){ft(this);const r=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const I=r[p];for(let A=0;A<I.length;A++)d.push(u[p])}return d},s.V=function(r){ft(this);let u=[];if(typeof r=="string")Fo(this,r)&&(u=u.concat(this.g.get(os(this,r))));else{r=Array.from(this.g.values());for(let d=0;d<r.length;d++)u=u.concat(r[d])}return u},s.set=function(r,u){return ft(this),this.i=null,r=os(this,r),Fo(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[u]),this.h+=1,this},s.get=function(r,u){return r?(r=this.V(r),0<r.length?String(r[0]):u):u};function Uo(r,u,d){Lo(r,u),0<d.length&&(r.i=null,r.g.set(os(r,u),D(d)),r.h+=d.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const A=encodeURIComponent(String(p)),R=this.V(p);for(p=0;p<R.length;p++){var I=A;R[p]!==""&&(I+="="+encodeURIComponent(String(R[p]))),r.push(I)}}return this.i=r.join("&")};function os(r,u){return u=String(u),r.j&&(u=u.toLowerCase()),u}function Kd(r,u){u&&!r.j&&(ft(r),r.i=null,r.g.forEach(function(d,p){var I=p.toLowerCase();p!=I&&(Lo(this,p),Uo(this,I,d))},r)),r.j=u}function Qd(r,u){const d=new zs;if(l.Image){const p=new Image;p.onload=S(gt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=S(gt,d,"TestLoadImage: error",!1,u,p),p.onabort=S(gt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(gt,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=r}else u(!1)}function Jd(r,u){const d=new zs,p=new AbortController,I=setTimeout(()=>{p.abort(),gt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(r,{signal:p.signal}).then(A=>{clearTimeout(I),A.ok?gt(d,"TestPingServer: ok",!0,u):gt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),gt(d,"TestPingServer: error",!1,u)})}function gt(r,u,d,p,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),p(d)}catch{}}function Yd(){this.g=new jd}function Xd(r,u,d){const p=d||"";try{Mo(r,function(I,A){let R=I;m(I)&&(R=ar(I)),u.push(p+A+"="+encodeURIComponent(R))})}catch(I){throw u.push(p+"type="+encodeURIComponent("_badmap")),I}}function qn(r){this.l=r.Ub||null,this.j=r.eb||!1}k(qn,or),qn.prototype.g=function(){return new Hn(this.l,this.j)},qn.prototype.i=(function(r){return function(){return r}})({});function Hn(r,u){Te.call(this),this.D=r,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Hn,Te),s=Hn.prototype,s.open=function(r,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=u,this.readyState=1,Ws(this)},s.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(u.body=r),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},s.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zo(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function zo(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}s.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var u=r.value?r.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!r.done}))&&(this.response=this.responseText+=u)}r.done?Hs(this):Ws(this),this.readyState==3&&zo(this)}},s.Ra=function(r){this.g&&(this.response=this.responseText=r,Hs(this))},s.Qa=function(r){this.g&&(this.response=r,Hs(this))},s.ga=function(){this.g&&Hs(this)};function Hs(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ws(r)}s.setRequestHeader=function(r,u){this.u.append(r,u)},s.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,r.push(d[0]+": "+d[1]),d=u.next();return r.join(`\r
`)};function Ws(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Bo(r){let u="";return le(r,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function _r(r,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Bo(d),typeof r=="string"?d!=null&&encodeURIComponent(String(d)):se(r,u,d))}function ce(r){Te.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ce,Te);var Zd=/^https?$/i,em=["POST","PUT"];s=ce.prototype,s.Ha=function(r){this.J=r},s.ea=function(r,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);u=u?u.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ur.g(),this.v=this.o?_o(this.o):_o(ur),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(r),!0),this.B=!1}catch(A){Go(this,A);return}if(r=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var I in p)d.set(I,p[I]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())d.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(A=>A.toLowerCase()=="content-type"),I=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(em,u,void 0))||p||I||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,R]of d)this.g.setRequestHeader(A,R);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ho(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){Go(this,A)}};function Go(r,u){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=u,r.m=5,$o(r),Wn(r)}function $o(r){r.A||(r.A=!0,Re(r,"complete"),Re(r,"error"))}s.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Re(this,"complete"),Re(this,"abort"),Wn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),ce.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?qo(this):this.bb())},s.bb=function(){qo(this)};function qo(r){if(r.h&&typeof c<"u"&&(!r.v[1]||it(r)!=4||r.Z()!=2)){if(r.u&&it(r)==4)mo(r.Ea,0,r);else if(Re(r,"readystatechange"),it(r)==4){r.h=!1;try{const R=r.Z();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=R===0){var I=String(r.D).match(Do)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),p=!Zd.test(I?I.toLowerCase():"")}d=p}if(d)Re(r,"complete"),Re(r,"success");else{r.m=6;try{var A=2<it(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",$o(r)}}finally{Wn(r)}}}}function Wn(r,u){if(r.g){Ho(r);const d=r.g,p=r.v[0]?()=>{}:null;r.g=null,r.v=null,u||Re(r,"ready");try{d.onreadystatechange=p}catch{}}}function Ho(r){r.I&&(l.clearTimeout(r.I),r.I=null)}s.isActive=function(){return!!this.g};function it(r){return r.g?r.g.readyState:0}s.Z=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(r){if(this.g){var u=this.g.responseText;return r&&u.indexOf(r)==0&&(u=u.substring(r.length)),Pd(u)}};function Wo(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function tm(r){const u={};r=(r.g&&2<=it(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<r.length;p++){if($(r[p]))continue;var d=T(r[p]);const I=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const A=u[I]||[];u[I]=A,A.push(d)}b(u,function(p){return p.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(r,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[r]||u}function Ko(r){this.Aa=0,this.i=[],this.j=new zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,r),this.cb=Ks("retryDelaySeedMs",1e4,r),this.Wa=Ks("forwardChannelMaxRetries",2,r),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Co(r&&r.concurrentRequestLimit),this.Da=new Yd,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=Ko.prototype,s.la=8,s.G=1,s.connect=function(r,u,d,p){ke(0),this.W=r,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=nc(this,null,this.W),Qn(this)};function yr(r){if(Qo(r),r.G==3){var u=r.U++,d=nt(r.I);if(se(d,"SID",r.K),se(d,"RID",u),se(d,"TYPE","terminate"),Qs(r,d),u=new pt(r,r.j,u),u.L=2,u.v=$n(nt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ic(u.j,null),u.g.ea(u.v)),u.F=Date.now(),zn(u)}sc(r)}function Kn(r){r.g&&(wr(r),r.g.cancel(),r.g=null)}function Qo(r){Kn(r),r.u&&(l.clearTimeout(r.u),r.u=null),Jn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function Qn(r){if(!Ro(r.h)&&!r.s){r.s=!0;var u=r.Ga;Ms||oo(),Ds||(Ms(),Ds=!0),Xi.add(u,r),r.B=0}}function sm(r,u){return ko(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=u.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Us(_(r.Ga,r,u),tc(r,r.B)),r.B++,!0)}s.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const I=new pt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=g(A),E(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Yo(this,I,u),d=nt(this.I),se(d,"RID",r),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),Qs(this,d),A&&(this.O?u="headers="+encodeURIComponent(String(Bo(A)))+"&"+u:this.m&&_r(d,this.m,A)),gr(this.h,I),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",u),se(d,"SID","null"),I.T=!0,dr(I,d,null)):dr(I,d,u),this.G=2}}else this.G==3&&(r?Jo(this,r):this.i.length==0||Ro(this.h)||Jo(this))};function Jo(r,u){var d;u?d=u.l:d=r.U++;const p=nt(r.I);se(p,"SID",r.K),se(p,"RID",d),se(p,"AID",r.T),Qs(r,p),r.m&&r.o&&_r(p,r.m,r.o),d=new pt(r,r.j,d,r.B+1),r.m===null&&(d.H=r.o),u&&(r.i=u.D.concat(r.i)),u=Yo(r,d,1e3),d.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),gr(r.h,d),dr(d,p,u)}function Qs(r,u){r.H&&le(r.H,function(d,p){se(u,p,d)}),r.l&&Mo({},function(d,p){se(u,p,d)})}function Yo(r,u,d){d=Math.min(r.i.length,d);var p=r.l?_(r.l.Na,r.l,r):null;e:{var I=r.i;let A=-1;for(;;){const R=["count="+d];A==-1?0<d?(A=I[0].g,R.push("ofs="+A)):A=0:R.push("ofs="+A);let ee=!0;for(let ye=0;ye<d;ye++){let J=I[ye].g;const Ie=I[ye].map;if(J-=A,0>J)A=Math.max(0,I[ye].g-100),ee=!1;else try{Xd(Ie,R,"req"+J+"_")}catch{p&&p(Ie)}}if(ee){p=R.join("&");break e}}}return r=r.i.splice(0,d),u.D=r,p}function Xo(r){if(!r.g&&!r.u){r.Y=1;var u=r.Fa;Ms||oo(),Ds||(Ms(),Ds=!0),Xi.add(u,r),r.v=0}}function vr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Us(_(r.Fa,r),tc(r,r.v)),r.v++,!0)}s.Fa=function(){if(this.u=null,Zo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Us(_(this.ab,this),r)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Kn(this),Zo(this))};function wr(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function Zo(r){r.g=new pt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var u=nt(r.qa);se(u,"RID","rpc"),se(u,"SID",r.K),se(u,"AID",r.T),se(u,"CI",r.F?"0":"1"),!r.F&&r.ja&&se(u,"TO",r.ja),se(u,"TYPE","xmlhttp"),Qs(r,u),r.m&&r.o&&_r(u,r.m,r.o),r.L&&(r.g.I=r.L);var d=r.g;r=r.ia,d.L=1,d.v=$n(nt(u)),d.m=null,d.P=!0,Ao(d,r)}s.Za=function(){this.C!=null&&(this.C=null,Kn(this),vr(this),ke(19))};function Jn(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function ec(r,u){var d=null;if(r.g==u){Jn(r),wr(r),r.g=null;var p=2}else if(fr(r.h,u))d=u.D,Po(r.h,u),p=1;else return;if(r.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var I=r.B;p=Ln(),Re(p,new bo(p,d)),Qn(r)}else Xo(r);else if(I=u.s,I==3||I==0&&0<u.X||!(p==1&&sm(r,u)||p==2&&vr(r)))switch(d&&0<d.length&&(u=r.h,u.i=u.i.concat(d)),I){case 1:Gt(r,5);break;case 4:Gt(r,10);break;case 3:Gt(r,6);break;default:Gt(r,2)}}}function tc(r,u){let d=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(d*=2),d*u}function Gt(r,u){if(r.j.info("Error code "+u),u==2){var d=_(r.fb,r),p=r.Xa;const I=!p;p=new Bt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bn(p,"https"),$n(p),I?Qd(p.toString(),d):Jd(p.toString(),d)}else ke(2);r.G=0,r.l&&r.l.sa(u),sc(r),Qo(r)}s.fb=function(r){r?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function sc(r){if(r.G=0,r.ka=[],r.l){const u=jo(r.h);(u.length!=0||r.i.length!=0)&&(M(r.ka,u),M(r.ka,r.i),r.h.i.length=0,D(r.i),r.i.length=0),r.l.ra()}}function nc(r,u,d){var p=d instanceof Bt?nt(d):new Bt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Gn(p,p.s);else{var I=l.location;p=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var A=new Bt(null);p&&Bn(A,p),u&&(A.g=u),I&&Gn(A,I),d&&(A.l=d),p=A}return d=r.D,u=r.ya,d&&u&&se(p,d,u),se(p,"VER",r.la),Qs(r,p),p}function ic(r,u,d){if(u&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=r.Ca&&!r.pa?new ce(new qn({eb:d})):new ce(r.pa),u.Ha(r.J),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}s=rc.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Yn(){}Yn.prototype.g=function(r,u){return new Oe(r,u)};function Oe(r,u){Te.call(this),this.g=new Ko(u),this.l=r,this.h=u&&u.messageUrlParams||null,r=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(r?r["X-WebChannel-Content-Type"]=u.messageContentType:r={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(r?r["X-WebChannel-Client-Profile"]=u.va:r={"X-WebChannel-Client-Profile":u.va}),this.g.S=r,(r=u&&u.Sb)&&!$(r)&&(this.g.m=r),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,r=this.h,r!==null&&u in r&&(r=this.h,u in r&&delete r[u])),this.j=new cs(this)}k(Oe,Te),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){yr(this.g)},Oe.prototype.o=function(r){var u=this.g;if(typeof r=="string"){var d={};d.__data__=r,r=d}else this.u&&(d={},d.__data__=ar(r),r=d);u.i.push(new Fd(u.Ya++,r)),u.G==3&&Qn(u)},Oe.prototype.N=function(){this.g.l=null,delete this.j,yr(this.g),delete this.g,Oe.aa.N.call(this)};function ac(r){cr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var u=r.__sm__;if(u){e:{for(const d in u){r=d;break e}r=void 0}(this.i=r)&&(r=this.i,u=u!==null&&r in u?u[r]:void 0),this.data=u}else this.data=r}k(ac,cr);function oc(){lr.call(this),this.status=1}k(oc,lr);function cs(r){this.g=r}k(cs,rc),cs.prototype.ua=function(){Re(this.g,"a")},cs.prototype.ta=function(r){Re(this.g,new ac(r))},cs.prototype.sa=function(r){Re(this.g,new oc)},cs.prototype.ra=function(){Re(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,Yu=function(){return new Yn},Ju=function(){return Ln()},Qu=Ut,Hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fn.NO_ERROR=0,Fn.TIMEOUT=8,Fn.HTTP_ERROR=6,ui=Fn,To.COMPLETE="complete",Ku=To,yo.EventType=Ls,Ls.OPEN="a",Ls.CLOSE="b",Ls.ERROR="c",Ls.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Zs=yo,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,Wu=ce}).apply(typeof ti<"u"?ti:typeof self<"u"?self:typeof window<"u"?window:{});const Kc="@firebase/firestore",Qc="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new ga("@firebase/firestore");function us(){return es.logLevel}function P(s,...e){if(es.logLevel<=q.DEBUG){const t=e.map(Ra);es.debug(`Firestore (${Rs}): ${s}`,...t)}}function ht(s,...e){if(es.logLevel<=q.ERROR){const t=e.map(Ra);es.error(`Firestore (${Rs}): ${s}`,...t)}}function kt(s,...e){if(es.logLevel<=q.WARN){const t=e.map(Ra);es.warn(`Firestore (${Rs}): ${s}`,...t)}}function Ra(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Xu(s,n,t)}function Xu(s,e,t){let n=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ht(n),new Error(n)}function oe(s,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,s||Xu(e,i,n)}function W(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class v_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Se.UNAUTHENTICATED)))}shutdown(){}}class w_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class E_{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let a=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Kt,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const h=a;e.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Kt)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(oe(typeof n.accessToken=="string",31837,{l:n}),new Zu(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class b_{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class T_{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new b_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){oe(this.o===void 0,3512);const n=a=>{a.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,P("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>n(a)))};const i=a=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Jc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(oe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Jc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=x_(40);for(let a=0;a<i.length;++a)n.length<20&&i[a]<t&&(n+=e.charAt(i[a]%62))}return n}}function B(s,e){return s<e?-1:s>e?1:0}function Wr(s,e){let t=0;for(;t<s.length&&t<e.length;){const n=s.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return B(n,i);{const a=eh(),c=A_(a.encode(Yc(s,t)),a.encode(Yc(e,t)));return c!==0?c:B(n,i)}}t+=n>65535?2:1}return B(s.length,e.length)}function Yc(s,e){return s.codePointAt(e)>65535?s.substring(e,e+2):s.substring(e,e+1)}function A_(s,e){for(let t=0;t<s.length&&t<e.length;++t)if(s[t]!==e[t])return B(s[t],e[t]);return B(s.length,e.length)}function Es(s,e,t){return s.length===e.length&&s.every(((n,i)=>t(n,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="__name__";class Ke{constructor(e,t,n){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&z(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ke?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const a=Ke.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return B(e.length,t.length)}static compareSegments(e,t){const n=Ke.isNumericId(e),i=Ke.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Ke.extractNumericId(e).compare(Ke.extractNumericId(t)):Wr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return St.fromString(e.substring(4,e.length-2))}}class ae extends Ke{construct(e,t,n){return new ae(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new ae(t)}static emptyPath(){return new ae([])}}const S_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Ke{construct(e,t,n){return new Pe(e,t,n)}static isValidIdentifier(e){return S_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xc}static keyField(){return new Pe([Xc])}static fromServerFormat(e){const t=[];let n="",i=0;const a=()=>{if(n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let c=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,i+=2}else l==="`"?(c=!c,i++):l!=="."||c?(n+=l,i++):(a(),i++)}if(a(),c)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ae.fromString(e))}static fromName(e){return new L(ae.fromString(e).popFirst(5))}static empty(){return new L(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(s,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function C_(s,e,t,n){if(e===!0&&n===!0)throw new O(C.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Zc(s){if(!L.isDocumentKey(s))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function R_(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function k_(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":z(12329,{type:typeof s})}function Kr(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=k_(s);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(s,e){const t={typeString:s};return e&&(t.value=e),t}function Nn(s,e){if(!R_(s))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,a="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const c=s[n];if(i&&typeof c!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${n}' field to equal '${a.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=-62135596800,tl=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*tl);return new me(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<el)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tl}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nn(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-el;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:pe("string",me._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new me(0,0))}static max(){return new U(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=-1;function P_(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new me(t+1,0):new me(t,n));return new Pt(i,L.empty(),e)}function j_(s){return new Pt(s.readTime,s.key,gn)}class Pt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Pt(U.min(),L.empty(),gn)}static max(){return new Pt(U.max(),L.empty(),gn)}}function M_(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(s.documentKey,e.documentKey),t!==0?t:B(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(s){if(s.code!==C.FAILED_PRECONDITION||s.message!==D_)throw s;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((n,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,n)=>{t(e)}))}static reject(e){return new N(((t,n)=>{n(e)}))}static waitFor(e){return new N(((t,n)=>{let i=0,a=0,c=!1;e.forEach((l=>{++i,l.next((()=>{++a,c&&a===i&&t()}),(h=>n(h)))})),c=!0,a===i&&t()}))}static or(e){let t=N.resolve(!1);for(const n of e)t=t.next((i=>i?N.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,a)=>{n.push(t.call(this,i,a))})),this.waitFor(n)}static mapArray(e,t){return new N(((n,i)=>{const a=e.length,c=new Array(a);let l=0;for(let h=0;h<a;h++){const m=h;t(e[m]).next((f=>{c[m]=f,++l,l===a&&n(c)}),(f=>i(f)))}}))}static doWhile(e,t){return new N(((n,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):n()};a()}))}}function V_(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ks(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}zi.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=-1;function Bi(s){return s==null}function Qr(s){return s===0&&1/s==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="";function F_(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=sl(e)),e=U_(s.get(t),e);return sl(e)}function U_(s,e){let t=e;const n=s.length;for(let i=0;i<n;i++){const a=s.charAt(i);switch(a){case"\0":t+="";break;case th:t+="";break;default:t+=a}}return t}function sl(s){return s+th+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Cn(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function z_(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new si(this.root,e,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new si(this.root,e,this.comparator,!0)}}class si{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?n(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,n,i,a){this.key=e,this.value=t,this.color=n??ve.RED,this.left=i??ve.EMPTY,this.right=a??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,a){return new ve(e??this.key,t??this.value,n??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const a=n(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,n),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,n,i,a){return this}insert(e,t,n){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new il(this.data.getIterator())}getIteratorFrom(e){return new il(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=n.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class il{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Et([])}unionWith(e){let t=new ge(Pe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new sh("Invalid base64 string: "+a):a}})(e);return new Ee(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const B_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(s){if(oe(!!s,39018),typeof s=="string"){let e=0;const t=B_.exec(s);if(oe(!!t,46558,{timestamp:s}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ue(s.seconds),nanos:ue(s.nanos)}}function ue(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Mt(s){return typeof s=="string"?Ee.fromBase64String(s):Ee.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="server_timestamp",ih="__type__",rh="__previous_value__",ah="__local_write_time__";function Pa(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[ih])===null||t===void 0?void 0:t.stringValue)===nh}function Gi(s){const e=s.mapValue.fields[rh];return Pa(e)?Gi(e):e}function _n(s){const e=jt(s.mapValue.fields[ah].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,n,i,a,c,l,h,m,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=m,this.isUsingEmulator=f}}const Ii="(default)";class yn{constructor(e,t){this.projectId=e,this.database=t||Ii}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===Ii}isEqual(e){return e instanceof yn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="__type__",q_="__max__",ni={mapValue:{}},H_="__vector__",Jr="value";function Dt(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Pa(s)?4:K_(s)?9007199254740991:W_(s)?10:11:z(28295,{value:s})}function Ze(s,e){if(s===e)return!0;const t=Dt(s);if(t!==Dt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return _n(s).isEqual(_n(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=jt(i.timestampValue),l=jt(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,a){return Mt(i.bytesValue).isEqual(Mt(a.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,a){return ue(i.geoPointValue.latitude)===ue(a.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(a.geoPointValue.longitude)})(s,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return ue(i.integerValue)===ue(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=ue(i.doubleValue),l=ue(a.doubleValue);return c===l?Qr(c)===Qr(l):isNaN(c)&&isNaN(l)}return!1})(s,e);case 9:return Es(s.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},l=a.mapValue.fields||{};if(nl(c)!==nl(l))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(l[h]===void 0||!Ze(c[h],l[h])))return!1;return!0})(s,e);default:return z(52216,{left:s})}}function vn(s,e){return(s.values||[]).find((t=>Ze(t,e)))!==void 0}function bs(s,e){if(s===e)return 0;const t=Dt(s),n=Dt(e);if(t!==n)return B(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return B(s.booleanValue,e.booleanValue);case 2:return(function(a,c){const l=ue(a.integerValue||a.doubleValue),h=ue(c.integerValue||c.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(s,e);case 3:return rl(s.timestampValue,e.timestampValue);case 4:return rl(_n(s),_n(e));case 5:return Wr(s.stringValue,e.stringValue);case 6:return(function(a,c){const l=Mt(a),h=Mt(c);return l.compareTo(h)})(s.bytesValue,e.bytesValue);case 7:return(function(a,c){const l=a.split("/"),h=c.split("/");for(let m=0;m<l.length&&m<h.length;m++){const f=B(l[m],h[m]);if(f!==0)return f}return B(l.length,h.length)})(s.referenceValue,e.referenceValue);case 8:return(function(a,c){const l=B(ue(a.latitude),ue(c.latitude));return l!==0?l:B(ue(a.longitude),ue(c.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return al(s.arrayValue,e.arrayValue);case 10:return(function(a,c){var l,h,m,f;const w=a.fields||{},_=c.fields||{},S=(l=w[Jr])===null||l===void 0?void 0:l.arrayValue,k=(h=_[Jr])===null||h===void 0?void 0:h.arrayValue,D=B(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:al(S,k)})(s.mapValue,e.mapValue);case 11:return(function(a,c){if(a===ni.mapValue&&c===ni.mapValue)return 0;if(a===ni.mapValue)return 1;if(c===ni.mapValue)return-1;const l=a.fields||{},h=Object.keys(l),m=c.fields||{},f=Object.keys(m);h.sort(),f.sort();for(let w=0;w<h.length&&w<f.length;++w){const _=Wr(h[w],f[w]);if(_!==0)return _;const S=bs(l[h[w]],m[f[w]]);if(S!==0)return S}return B(h.length,f.length)})(s.mapValue,e.mapValue);default:throw z(23264,{le:t})}}function rl(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return B(s,e);const t=jt(s),n=jt(e),i=B(t.seconds,n.seconds);return i!==0?i:B(t.nanos,n.nanos)}function al(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const a=bs(t[i],n[i]);if(a)return a}return B(t.length,n.length)}function Ts(s){return Yr(s)}function Yr(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=jt(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return Mt(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return L.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",i=!0;for(const a of t.values||[])i?i=!1:n+=",",n+=Yr(a);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of n)a?a=!1:i+=",",i+=`${c}:${Yr(t.fields[c])}`;return i+"}"})(s.mapValue):z(61005,{value:s})}function hi(s){switch(Dt(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gi(s);return e?16+hi(e):16;case 5:return 2*s.stringValue.length;case 6:return Mt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,a)=>i+hi(a)),0)})(s.arrayValue);case 10:case 11:return(function(n){let i=0;return Cn(n.fields,((a,c)=>{i+=a.length+hi(c)})),i})(s.mapValue);default:throw z(13486,{value:s})}}function Xr(s){return!!s&&"integerValue"in s}function ja(s){return!!s&&"arrayValue"in s}function ol(s){return!!s&&"nullValue"in s}function cl(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Rr(s){return!!s&&"mapValue"in s}function W_(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[$_])===null||t===void 0?void 0:t.stringValue)===H_}function an(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return Cn(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=an(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=an(s.arrayValue.values[t]);return e}return Object.assign({},s)}function K_(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===q_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Rr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=an(t)}setAll(e){let t=Pe.emptyPath(),n={},i=[];e.forEach(((c,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,n,i),n={},i=[],t=l.popLast()}c?n[l.lastSegment()]=an(c):i.push(l.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,n,i)}delete(e){const t=this.field(e.popLast());Rr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Rr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Cn(t,((i,a)=>e[i]=a));for(const i of n)delete e[i]}clone(){return new Qe(an(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,n,i,a,c,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=a,this.data=c,this.documentState=l}static newInvalidDocument(e){return new Ne(e,0,U.min(),U.min(),U.min(),Qe.empty(),0)}static newFoundDocument(e,t,n,i){return new Ne(e,1,t,U.min(),n,i,0)}static newNoDocument(e,t){return new Ne(e,2,t,U.min(),U.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new Ne(e,3,t,U.min(),U.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.position=e,this.inclusive=t}}function ll(s,e,t){let n=0;for(let i=0;i<s.position.length;i++){const a=e[i],c=s.position[i];if(a.field.isKeyField()?n=L.comparator(L.fromName(c.referenceValue),t.key):n=bs(c,t.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function ul(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Ze(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t="asc"){this.field=e,this.dir=t}}function Q_(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{}class fe extends oh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Y_(e,t,n):t==="array-contains"?new ey(e,n):t==="in"?new ty(e,n):t==="not-in"?new sy(e,n):t==="array-contains-any"?new ny(e,n):new fe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new X_(e,n):new Z_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bs(t,this.value)):t!==null&&Dt(this.value)===Dt(t)&&this.matchesComparison(bs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends oh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new et(e,t)}matches(e){return ch(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ch(s){return s.op==="and"}function lh(s){return J_(s)&&ch(s)}function J_(s){for(const e of s.filters)if(e instanceof et)return!1;return!0}function Zr(s){if(s instanceof fe)return s.field.canonicalString()+s.op.toString()+Ts(s.value);if(lh(s))return s.filters.map((e=>Zr(e))).join(",");{const e=s.filters.map((t=>Zr(t))).join(",");return`${s.op}(${e})`}}function uh(s,e){return s instanceof fe?(function(n,i){return i instanceof fe&&n.op===i.op&&n.field.isEqual(i.field)&&Ze(n.value,i.value)})(s,e):s instanceof et?(function(n,i){return i instanceof et&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((a,c,l)=>a&&uh(c,i.filters[l])),!0):!1})(s,e):void z(19439)}function hh(s){return s instanceof fe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ts(t.value)}`})(s):s instanceof et?(function(t){return t.op.toString()+" {"+t.getFilters().map(hh).join(" ,")+"}"})(s):"Filter"}class Y_ extends fe{constructor(e,t,n){super(e,t,n),this.key=L.fromName(n.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class X_ extends fe{constructor(e,t){super(e,"in",t),this.keys=dh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Z_ extends fe{constructor(e,t){super(e,"not-in",t),this.keys=dh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function dh(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>L.fromName(n.referenceValue)))}class ey extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ja(t)&&vn(t.arrayValue,this.value)}}class ty extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vn(this.value.arrayValue,t)}}class sy extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vn(this.value.arrayValue,t)}}class ny extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ja(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>vn(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t=null,n=[],i=[],a=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=a,this.startAt=c,this.endAt=l,this.Pe=null}}function hl(s,e=null,t=[],n=[],i=null,a=null,c=null){return new iy(s,e,t,n,i,a,c)}function Ma(s){const e=W(s);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Zr(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(a){return a.field.canonicalString()+a.dir})(n))).join(","),Bi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Ts(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Ts(n))).join(",")),e.Pe=t}return e.Pe}function Da(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Q_(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!uh(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!ul(s.startAt,e.startAt)&&ul(s.endAt,e.endAt)}function ea(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t=null,n=[],i=[],a=null,c="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=a,this.limitType=c,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ry(s,e,t,n,i,a,c,l){return new $i(s,e,t,n,i,a,c,l)}function Oa(s){return new $i(s)}function dl(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function ay(s){return s.collectionGroup!==null}function on(s){const e=W(s);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new ge(Pe.comparator);return c.filters.forEach((h=>{h.getFlattenedFilters().forEach((m=>{m.isInequality()&&(l=l.add(m.field))}))})),l})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Ai(a,n))})),t.has(Pe.keyField().canonicalString())||e.Te.push(new Ai(Pe.keyField(),n))}return e.Te}function Xe(s){const e=W(s);return e.Ie||(e.Ie=oy(e,on(s))),e.Ie}function oy(s,e){if(s.limitType==="F")return hl(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Ai(i.field,a)}));const t=s.endAt?new xi(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new xi(s.startAt.position,s.startAt.inclusive):null;return hl(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function ta(s,e,t){return new $i(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function qi(s,e){return Da(Xe(s),Xe(e))&&s.limitType===e.limitType}function mh(s){return`${Ma(Xe(s))}|lt:${s.limitType}`}function hs(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>hh(i))).join(", ")}]`),Bi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>Ts(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>Ts(i))).join(",")),`Target(${n})`})(Xe(s))}; limitType=${s.limitType})`}function Hi(s,e){return e.isFoundDocument()&&(function(n,i){const a=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(a):L.isDocumentKey(n.path)?n.path.isEqual(a):n.path.isImmediateParentOf(a)})(s,e)&&(function(n,i){for(const a of on(n))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(s,e)&&(function(n,i){for(const a of n.filters)if(!a.matches(i))return!1;return!0})(s,e)&&(function(n,i){return!(n.startAt&&!(function(c,l,h){const m=ll(c,l,h);return c.inclusive?m<=0:m<0})(n.startAt,on(n),i)||n.endAt&&!(function(c,l,h){const m=ll(c,l,h);return c.inclusive?m>=0:m>0})(n.endAt,on(n),i))})(s,e)}function cy(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function ph(s){return(e,t)=>{let n=!1;for(const i of on(s)){const a=ly(i,e,t);if(a!==0)return a;n=n||i.field.isKeyField()}return 0}}function ly(s,e,t){const n=s.field.isKeyField()?L.comparator(e.key,t.key):(function(a,c,l){const h=c.data.field(a),m=l.data.field(a);return h!==null&&m!==null?bs(h,m):z(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return z(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,a]of n)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cn(this.inner,((t,n)=>{for(const[i,a]of n)e(i,a)}))}isEmpty(){return z_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new he(L.comparator);function Ot(){return uy}const fh=new he(L.comparator);function en(...s){let e=fh;for(const t of s)e=e.insert(t.key,t);return e}function hy(s){let e=fh;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ht(){return cn()}function gh(){return cn()}function cn(){return new ns((s=>s.toString()),((s,e)=>s.isEqual(e)))}const dy=new ge(L.comparator);function K(...s){let e=dy;for(const t of s)e=e.add(t);return e}const my=new ge(B);function py(){return my}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(e)?"-0":e}}function gy(s){return{integerValue:""+s}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this._=void 0}}function _y(s,e,t){return s instanceof sa?(function(i,a){const c={fields:{[ih]:{stringValue:nh},[ah]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Pa(a)&&(a=Gi(a)),a&&(c.fields[rh]=a),{mapValue:c}})(t,e):s instanceof Si?_h(s,e):s instanceof Ni?yh(s,e):(function(i,a){const c=vy(i,a),l=ml(c)+ml(i.Ee);return Xr(c)&&Xr(i.Ee)?gy(l):fy(i.serializer,l)})(s,e)}function yy(s,e,t){return s instanceof Si?_h(s,e):s instanceof Ni?yh(s,e):t}function vy(s,e){return s instanceof na?(function(n){return Xr(n)||(function(a){return!!a&&"doubleValue"in a})(n)})(e)?e:{integerValue:0}:null}class sa extends Wi{}class Si extends Wi{constructor(e){super(),this.elements=e}}function _h(s,e){const t=vh(e);for(const n of s.elements)t.some((i=>Ze(i,n)))||t.push(n);return{arrayValue:{values:t}}}class Ni extends Wi{constructor(e){super(),this.elements=e}}function yh(s,e){let t=vh(e);for(const n of s.elements)t=t.filter((i=>!Ze(i,n)));return{arrayValue:{values:t}}}class na extends Wi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ml(s){return ue(s.integerValue||s.doubleValue)}function vh(s){return ja(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function wy(s,e){return s.field.isEqual(e.field)&&(function(n,i){return n instanceof Si&&i instanceof Si||n instanceof Ni&&i instanceof Ni?Es(n.elements,i.elements,Ze):n instanceof na&&i instanceof na?Ze(n.Ee,i.Ee):n instanceof sa&&i instanceof sa})(s.transform,e.transform)}class Qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Va{}function wh(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new by(s.key,Qt.none()):new La(s.key,s.data,Qt.none());{const t=s.data,n=Qe.empty();let i=new ge(Pe.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?n.delete(a):n.set(a,c),i=i.add(a)}return new Ki(s.key,n,new Et(i.toArray()),Qt.none())}}function Ey(s,e,t){s instanceof La?(function(i,a,c){const l=i.value.clone(),h=fl(i.fieldTransforms,a,c.transformResults);l.setAll(h),a.convertToFoundDocument(c.version,l).setHasCommittedMutations()})(s,e,t):s instanceof Ki?(function(i,a,c){if(!di(i.precondition,a))return void a.convertToUnknownDocument(c.version);const l=fl(i.fieldTransforms,a,c.transformResults),h=a.data;h.setAll(Eh(i)),h.setAll(l),a.convertToFoundDocument(c.version,h).setHasCommittedMutations()})(s,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ln(s,e,t,n){return s instanceof La?(function(a,c,l,h){if(!di(a.precondition,c))return l;const m=a.value.clone(),f=gl(a.fieldTransforms,h,c);return m.setAll(f),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null})(s,e,t,n):s instanceof Ki?(function(a,c,l,h){if(!di(a.precondition,c))return l;const m=gl(a.fieldTransforms,h,c),f=c.data;return f.setAll(Eh(a)),f.setAll(m),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),l===null?null:l.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(s,e,t,n):(function(a,c,l){return di(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l})(s,e,t)}function pl(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Es(n,i,((a,c)=>wy(a,c)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class La extends Va{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ki extends Va{constructor(e,t,n,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Eh(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function fl(s,e,t){const n=new Map;oe(s.length===t.length,32656,{Ae:t.length,Re:s.length});for(let i=0;i<t.length;i++){const a=s[i],c=a.transform,l=e.data.field(a.field);n.set(a.field,yy(c,l,t[i]))}return n}function gl(s,e,t){const n=new Map;for(const i of s){const a=i.transform,c=t.data.field(i.field);n.set(i.field,_y(a,c,e))}return n}class by extends Va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&Ey(a,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ln(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ln(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=gh();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let l=this.applyToLocalView(c,a.mutatedFields);l=t.has(i.key)?null:l;const h=wh(c,l);h!==null&&n.set(i.key,h),c.isValidDocument()||c.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,((t,n)=>pl(t,n)))&&Es(this.baseMutations,e.baseMutations,((t,n)=>pl(t,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,H;function bh(s){if(s===void 0)return ht("GRPC error has no .code"),C.UNKNOWN;switch(s){case de.OK:return C.OK;case de.CANCELLED:return C.CANCELLED;case de.UNKNOWN:return C.UNKNOWN;case de.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case de.INTERNAL:return C.INTERNAL;case de.UNAVAILABLE:return C.UNAVAILABLE;case de.UNAUTHENTICATED:return C.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case de.NOT_FOUND:return C.NOT_FOUND;case de.ALREADY_EXISTS:return C.ALREADY_EXISTS;case de.PERMISSION_DENIED:return C.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case de.ABORTED:return C.ABORTED;case de.OUT_OF_RANGE:return C.OUT_OF_RANGE;case de.UNIMPLEMENTED:return C.UNIMPLEMENTED;case de.DATA_LOSS:return C.DATA_LOSS;default:return z(39323,{code:s})}}(H=de||(de={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new St([4294967295,4294967295],0);function _l(s){const e=eh().encode(s),t=new Hu;return t.update(e),new Uint8Array(t.digest())}function yl(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new St([t,n],0),new St([i,a],0)]}class Fa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tn(`Invalid padding: ${t}`);if(n<0)throw new tn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new tn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=St.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(St.fromNumber(n)));return i.compare(Ay)===1&&(i=new St([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=_l(e),[n,i]=yl(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(n,i,a);if(!this.ye(c))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Fa(a,i,t);return n.forEach((l=>c.insert(l))),c}insert(e){if(this.fe===0)return;const t=_l(e),[n,i]=yl(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(n,i,a);this.we(c)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,n,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Rn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Qi(U.min(),i,new he(B),Ot(),K())}}class Rn{constructor(e,t,n,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Rn(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class Th{constructor(e,t){this.targetId=e,this.De=t}}class Ih{constructor(e,t,n=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class vl{constructor(){this.ve=0,this.Ce=wl(),this.Fe=Ee.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),n=K();return this.Ce.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:z(38017,{changeType:a})}})),new Rn(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=wl()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Sy{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ot(),this.je=ii(),this.Je=ii(),this.He=new he(B)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const a=i.target;if(ea(a))if(n===0){const c=new L(a.path);this.Xe(t,c,Ne.newNoDocument(c,U.min()))}else oe(n===1,20013,{expectedCount:n});else{const c=this.ot(t);if(c!==n){const l=this._t(e),h=l?this.ut(l,e,c):1;if(h!==0){this.rt(t);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:a=0}=t;let c,l;try{c=Mt(n).toUint8Array()}catch(h){if(h instanceof sh)return kt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Fa(c,i,a)}catch(h){return kt(h instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.fe===0?null:l}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach((a=>{const c=this.We.lt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,a,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((a,c)=>{const l=this.st(c);if(l){if(a.current&&ea(l.target)){const h=new L(l.target.path);this.Tt(h).has(c)||this.It(c,h)||this.Xe(c,h,Ne.newNoDocument(h,e))}a.Ne&&(t.set(c,a.Le()),a.ke())}}));let n=K();this.Je.forEach(((a,c)=>{let l=!0;c.forEachWhile((h=>{const m=this.st(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(a))})),this.ze.forEach(((a,c)=>c.setReadTime(e)));const i=new Qi(e,t,this.He,this.ze,n);return this.ze=Ot(),this.je=ii(),this.Je=ii(),this.He=new he(B),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new vl,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ge(B),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ge(B),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||P("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new vl),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ii(){return new he(L.comparator)}function wl(){return new he(L.comparator)}const Ny={asc:"ASCENDING",desc:"DESCENDING"},Cy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ry={and:"AND",or:"OR"};class ky{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ia(s,e){return s.useProto3Json||Bi(e)?e:{value:e}}function Py(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jy(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function _s(s){return oe(!!s,49232),U.fromTimestamp((function(t){const n=jt(t);return new me(n.seconds,n.nanos)})(s))}function My(s,e){return ra(s,e).canonicalString()}function ra(s,e){const t=(function(i){return new ae(["projects",i.projectId,"databases",i.database])})(s).child("documents");return e===void 0?t:t.child(e)}function xh(s){const e=ae.fromString(s);return oe(Rh(e),10190,{key:e.toString()}),e}function kr(s,e){const t=xh(e);if(t.get(1)!==s.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new L(Sh(t))}function Ah(s,e){return My(s.databaseId,e)}function Dy(s){const e=xh(s);return e.length===4?ae.emptyPath():Sh(e)}function El(s){return new ae(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Sh(s){return oe(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Oy(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:z(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(m,f){return m.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Ee.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ee.fromUint8Array(f||new Uint8Array))})(s,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&(function(m){const f=m.code===void 0?C.UNKNOWN:bh(m.code);return new O(f,m.message||"")})(c);t=new Ih(n,i,a,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=kr(s,n.document.name),a=_s(n.document.updateTime),c=n.document.createTime?_s(n.document.createTime):U.min(),l=new Qe({mapValue:{fields:n.document.fields}}),h=Ne.newFoundDocument(i,a,c,l),m=n.targetIds||[],f=n.removedTargetIds||[];t=new mi(m,f,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=kr(s,n.document),a=n.readTime?_s(n.readTime):U.min(),c=Ne.newNoDocument(i,a),l=n.removedTargetIds||[];t=new mi([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=kr(s,n.document),a=n.removedTargetIds||[];t=new mi([],a,i,null)}else{if(!("filter"in e))return z(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:a}=n,c=new xy(i,a),l=n.targetId;t=new Th(l,c)}}return t}function Vy(s,e){return{documents:[Ah(s,e.path)]}}function Ly(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Ah(s,i);const a=(function(m){if(m.length!==0)return Ch(et.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(m){if(m.length!==0)return m.map((f=>(function(_){return{field:ds(_.field),direction:zy(_.dir)}})(f)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=ia(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:i}}function Fy(s){let e=Dy(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){oe(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let a=[];t.where&&(a=(function(w){const _=Nh(w);return _ instanceof et&&lh(_)?_.getFilters():[_]})(t.where));let c=[];t.orderBy&&(c=(function(w){return w.map((_=>(function(k){return new Ai(ms(k.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(w){let _;return _=typeof w=="object"?w.value:w,Bi(_)?null:_})(t.limit));let h=null;t.startAt&&(h=(function(w){const _=!!w.before,S=w.values||[];return new xi(S,_)})(t.startAt));let m=null;return t.endAt&&(m=(function(w){const _=!w.before,S=w.values||[];return new xi(S,_)})(t.endAt)),ry(e,i,c,a,l,"F",h,m)}function Uy(s,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nh(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ms(t.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ms(t.unaryFilter.field);return fe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ms(t.unaryFilter.field);return fe.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(s):s.fieldFilter!==void 0?(function(t){return fe.create(ms(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return et.create(t.compositeFilter.filters.map((n=>Nh(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(s):z(30097,{filter:s})}function zy(s){return Ny[s]}function By(s){return Cy[s]}function Gy(s){return Ry[s]}function ds(s){return{fieldPath:s.canonicalString()}}function ms(s){return Pe.fromServerFormat(s.fieldPath)}function Ch(s){return s instanceof fe?(function(t){if(t.op==="=="){if(cl(t.value))return{unaryFilter:{field:ds(t.field),op:"IS_NAN"}};if(ol(t.value))return{unaryFilter:{field:ds(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cl(t.value))return{unaryFilter:{field:ds(t.field),op:"IS_NOT_NAN"}};if(ol(t.value))return{unaryFilter:{field:ds(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(t.field),op:By(t.op),value:t.value}}})(s):s instanceof et?(function(t){const n=t.getFilters().map((i=>Ch(i)));return n.length===1?n[0]:{compositeFilter:{op:Gy(t.op),filters:n}}})(s):z(54877,{filter:s})}function Rh(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,n,i,a=U.min(),c=U.min(),l=Ee.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.gt=e}}function qy(s){const e=Fy({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.Dn=new Wy}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Pt.min())}updateCollectionGroup(e,t,n){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Wy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ge(ae.comparator),a=!i.has(n);return this.index[t]=i.add(n),a}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ge(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kh=41943040;class Me{static withCacheSize(e){return new Me(e,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.DEFAULT_COLLECTION_PERCENTILE=10,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Me.DEFAULT=new Me(kh,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Me.DISABLED=new Me(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Is(0)}static ur(){return new Is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="LruGarbageCollector",Ky=1048576;function Il([s,e],[t,n]){const i=B(s,t);return i===0?B(e,n):i}class Qy{constructor(e){this.Tr=e,this.buffer=new ge(Il),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Il(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Jy{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){P(Tl,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ks(t)?P(Tl,"Ignoring IndexedDB error during garbage collection: ",t):await Ui(t)}await this.Rr(3e5)}))}}class Yy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(zi.ue);const n=new Qy(t);return this.Vr.forEachTarget(e,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(bl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bl):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,a,c,l,h,m;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,c=Date.now(),this.nthSequenceNumber(e,i)))).next((w=>(n=w,l=Date.now(),this.removeTargets(e,n,t)))).next((w=>(a=w,h=Date.now(),this.removeOrphanedDocuments(e,n)))).next((w=>(m=Date.now(),us()<=q.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-f}ms
	Determined least recently used ${i} in `+(l-c)+`ms
	Removed ${a} targets in `+(h-l)+`ms
	Removed ${w} documents in `+(m-h)+`ms
Total Duration: ${m-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:w}))))}}function Xy(s,e){return new Yy(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.changes=new ns((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?N.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&ln(n.mutation,i,Et.empty(),me.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,K()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=K()){const i=Ht();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((a=>{let c=en();return a.forEach(((l,h)=>{c=c.insert(l,h.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const n=Ht();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,K())))}populateOverlays(e,t,n){const i=[];return n.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,l)=>{t.set(c,l)}))}))}computeViews(e,t,n,i){let a=Ot();const c=cn(),l=(function(){return cn()})();return t.forEach(((h,m)=>{const f=n.get(m.key);i.has(m.key)&&(f===void 0||f.mutation instanceof Ki)?a=a.insert(m.key,m):f!==void 0?(c.set(m.key,f.mutation.getFieldMask()),ln(f.mutation,m,f.mutation.getFieldMask(),me.now())):c.set(m.key,Et.empty())})),this.recalculateAndSaveOverlays(e,a).next((h=>(h.forEach(((m,f)=>c.set(m,f))),t.forEach(((m,f)=>{var w;return l.set(m,new ev(f,(w=c.get(m))!==null&&w!==void 0?w:null))})),l)))}recalculateAndSaveOverlays(e,t){const n=cn();let i=new he(((c,l)=>c-l)),a=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const l of c)l.keys().forEach((h=>{const m=t.get(h);if(m===null)return;let f=n.get(h)||Et.empty();f=l.applyToLocalView(m,f),n.set(h,f);const w=(i.get(l.batchId)||K()).add(h);i=i.insert(l.batchId,w)}))})).next((()=>{const c=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),m=h.key,f=h.value,w=gh();f.forEach((_=>{if(!a.has(_)){const S=wh(t.get(_),n.get(_));S!==null&&w.set(_,S),a=a.add(_)}})),c.push(this.documentOverlayCache.saveOverlays(e,m,w))}return N.waitFor(c)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(c){return L.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ay(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-a.size):N.resolve(Ht());let l=gn,h=a;return c.next((m=>N.forEach(m,((f,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),a.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{h=h.insert(f,_)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,h,m,K()))).next((f=>({batchId:l,changes:hy(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((n=>{let i=en();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const a=t.collectionGroup;let c=en();return this.indexManager.getCollectionParents(e,a).next((l=>N.forEach(l,(h=>{const m=(function(w,_){return new $i(_,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,n,i).next((f=>{f.forEach(((w,_)=>{c=c.insert(w,_)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,a,i)))).next((c=>{a.forEach(((h,m)=>{const f=m.getKey();c.get(f)===null&&(c=c.insert(f,Ne.newInvalidDocument(f)))}));let l=en();return c.forEach(((h,m)=>{const f=a.get(h);f!==void 0&&ln(f.mutation,m,Et.empty(),me.now()),Hi(t,m)&&(l=l.insert(h,m))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:_s(i.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:qy(i.bundledQuery),readTime:_s(i.readTime)}})(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.overlays=new he(L.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ht();return N.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&n.set(i,a)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,a)=>{this.wt(e,t,a)})),N.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(n)),N.resolve()}getOverlaysForCollection(e,t,n){const i=Ht(),a=t.length+1,c=new L(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const h=l.getNext().value,m=h.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&h.largestBatchId>n&&i.set(h.getKey(),h)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let a=new he(((m,f)=>m-f));const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>n){let f=a.get(m.largestBatchId);f===null&&(f=Ht(),a=a.insert(m.largestBatchId,f)),f.set(m.getKey(),m)}}const l=Ht(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((m,f)=>l.set(m,f))),!(l.size()>=i)););return N.resolve(l)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const c=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(n.key,new Iy(t,n));let a=this.kr.get(t);a===void 0&&(a=K(),this.kr.set(t,a)),this.kr.set(t,a.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.qr=new ge(_e.Qr),this.$r=new ge(_e.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new _e(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new _e(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new L(new ae([])),n=new _e(t,e),i=new _e(t,e+1),a=[];return this.$r.forEachInRange([n,i],(c=>{this.Wr(c),a.push(c.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new L(new ae([])),n=new _e(t,e),i=new _e(t,e+1);let a=K();return this.$r.forEachInRange([n,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new _e(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class _e{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return L.comparator(e.key,t.key)||B(e.Hr,t.Hr)}static Ur(e,t){return B(e.Hr,t.Hr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ge(_e.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Ty(a,t,n,i);this.mutationQueue.push(c);for(const l of i)this.Yr=this.Yr.add(new _e(l.key,a)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(c)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),a=i<0?0:i;return N.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?L_:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([n,i],(c=>{const l=this.Zr(c.Hr);a.push(l)})),N.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ge(B);return t.forEach((i=>{const a=new _e(i,0),c=new _e(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,c],(l=>{n=n.add(l.Hr)}))})),N.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let a=n;L.isDocumentKey(a)||(a=a.child(""));const c=new _e(new L(a),0);let l=new ge(B);return this.Yr.forEachWhile((h=>{const m=h.key.path;return!!n.isPrefixOf(m)&&(m.length===i&&(l=l.add(h.Hr)),!0)}),c),N.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((n=>{const i=this.Zr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){oe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return N.forEach(t.mutations,(i=>{const a=new _e(i.key,t.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new _e(t,0),i=this.Yr.firstAfterOrEqual(n);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.ni=e,this.docs=(function(){return new he(L.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),a=i?i.size:0,c=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return N.resolve(n?n.document.mutableCopy():Ne.newInvalidDocument(t))}getEntries(e,t){let n=Ot();return t.forEach((i=>{const a=this.docs.get(i);n=n.insert(i,a?a.document.mutableCopy():Ne.newInvalidDocument(i))})),N.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let a=Ot();const c=t.path,l=new L(c.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:m,value:{document:f}}=h.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||M_(j_(f),n)<=0||(i.has(f.key)||Hi(t,f))&&(a=a.insert(f.key,f.mutableCopy()))}return N.resolve(a)}getAllFromCollectionGroup(e,t,n,i){z(9500)}ri(e,t){return N.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new ov(this)}getSize(e){return N.resolve(this.size)}}class ov extends Zy{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)})),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.persistence=e,this.ii=new ns((t=>Ma(t)),Da),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.si=0,this.oi=new Ua,this.targetCount=0,this._i=Is.ar()}forEachTarget(e,t){return this.ii.forEach(((n,i)=>t(i))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Is(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,n){let i=0;const a=[];return this.ii.forEach(((c,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ii.delete(c),a.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),N.waitFor(a).next((()=>i))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return N.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),N.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),N.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return N.resolve(n)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t){this.ai={},this.overlays={},this.ui=new zi(0),this.ci=!1,this.ci=!0,this.li=new iv,this.referenceDelegate=e(this),this.hi=new cv(this),this.indexManager=new Hy,this.remoteDocumentCache=(function(i){return new av(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new $y(t),this.Ti=new sv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new rv(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){P("MemoryPersistence","Starting transaction:",e);const i=new lv(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ei(e,t){return N.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class lv extends O_{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.Ai=new Ua,this.Ri=null}static Vi(e){return new za(e)}get mi(){if(this.Ri)return this.Ri;throw z(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),N.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.mi.add(a.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,(n=>{const i=L.fromPath(n);return this.fi(e,i).next((a=>{a||t.removeEntry(i,U.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ci{constructor(e,t){this.persistence=e,this.gi=new ns((n=>F_(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Xy(this,t)}static Vi(e,t){return new Ci(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return N.forEach(this.gi,((n,i)=>this.Sr(e,n,i).next((a=>a?N.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ri(e,(c=>this.Sr(e,c,t).next((l=>{l||(n++,a.removeEntry(c,U.min()))})))).next((()=>a.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hi(e.data.value)),t}Sr(e,t,n){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return N.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=K(),i=K();for(const a of t.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Ba(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Fm()?8:V_(Ce())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const a={result:null};return this.ps(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ys(e,t,i,n).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new uv;return this.ws(e,t,c).next((l=>{if(a.result=l,this.Rs)return this.Ss(e,t,c,l.size)}))})).next((()=>a.result))}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(us()<=q.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",hs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(us()<=q.DEBUG&&P("QueryEngine","Query:",hs(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(us()<=q.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",hs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):N.resolve())}ps(e,t){if(dl(t))return N.resolve(null);let n=Xe(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ta(t,null,"F"),n=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((a=>{const c=K(...a);return this.gs.getDocuments(e,c).next((l=>this.indexManager.getMinOffset(e,n).next((h=>{const m=this.bs(t,l);return this.Ds(t,m,c,h.readTime)?this.ps(e,ta(t,null,"F")):this.vs(e,m,t,h)}))))})))))}ys(e,t,n,i){return dl(t)||i.isEqual(U.min())?N.resolve(null):this.gs.getDocuments(e,n).next((a=>{const c=this.bs(t,a);return this.Ds(t,c,n,i)?N.resolve(null):(us()<=q.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(t)),this.vs(e,c,t,P_(i,gn)).next((l=>l)))}))}bs(e,t){let n=new ge(ph(e));return t.forEach(((i,a)=>{Hi(e,a)&&(n=n.add(a))})),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}ws(e,t,n){return us()<=q.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",hs(t)),this.gs.getDocumentsMatchingQuery(e,t,Pt.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="LocalStore",dv=3e8;class mv{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new he(B),this.Ms=new ns((a=>Ma(a)),Da),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tv(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function pv(s,e,t,n){return new mv(s,e,t,n)}async function jh(s,e){const t=W(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((a=>(i=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((a=>{const c=[],l=[];let h=K();for(const m of i){c.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}for(const m of a){l.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}return t.localDocuments.getDocuments(n,h).next((m=>({Bs:m,removedBatchIds:c,addedBatchIds:l})))}))}))}function Mh(s){const e=W(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function fv(s,e){const t=W(s),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((f,w)=>{const _=i.get(w);if(!_)return;l.push(t.hi.removeMatchingKeys(a,f.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,f.addedDocuments,w))));let S=_.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?S=S.withResumeToken(Ee.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),i=i.insert(w,S),(function(D,M,Y){return D.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=dv?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(_,S,f)&&l.push(t.hi.updateTargetData(a,S))}));let h=Ot(),m=K();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(a,f))})),l.push(gv(a,c,e.documentUpdates).next((f=>{h=f.Ls,m=f.ks}))),!n.isEqual(U.min())){const f=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,n)));l.push(f)}return N.waitFor(l).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,h,m))).next((()=>h))})).then((a=>(t.Fs=i,a)))}function gv(s,e,t){let n=K(),i=K();return t.forEach((a=>n=n.add(a))),e.getEntries(s,n).next((a=>{let c=Ot();return t.forEach(((l,h)=>{const m=a.get(l);h.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(l,h.readTime),c=c.insert(l,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(h),c=c.insert(l,h)):P(Ga,"Ignoring outdated watch update for ",l,". Current version:",m.version," Watch version:",h.version)})),{Ls:c,ks:i}}))}function _v(s,e){const t=W(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.hi.getTargetData(n,e).next((a=>a?(i=a,N.resolve(i)):t.hi.allocateTargetId(n).next((c=>(i=new bt(e,c,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function aa(s,e,t){const n=W(s),i=n.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",a,(c=>n.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!ks(c))throw c;P(Ga,`Failed to update sequence numbers for target ${e}: ${c}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function xl(s,e,t){const n=W(s);let i=U.min(),a=K();return n.persistence.runTransaction("Execute query","readwrite",(c=>(function(h,m,f){const w=W(h),_=w.Ms.get(f);return _!==void 0?N.resolve(w.Fs.get(_)):w.hi.getTargetData(m,f)})(n,c,Xe(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(c,l.targetId).next((h=>{a=h}))})).next((()=>n.Cs.getDocumentsMatchingQuery(c,e,t?i:U.min(),t?a:K()))).next((l=>(yv(n,cy(e),l),{documents:l,qs:a})))))}function yv(s,e,t){let n=s.xs.get(e)||U.min();t.forEach(((i,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)})),s.xs.set(e,n)}class Al{constructor(){this.activeTargetIds=py()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vv{constructor(){this.Fo=new Al,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Al,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="ConnectivityMonitor";class Nl{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){P(Sl,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){P(Sl,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri=null;function oa(){return ri===null?ri=(function(){return 268435456+Math.round(2147483648*Math.random())})():ri++,"0x"+ri.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="RestConnection",Ev={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bv{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Ii?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,a){const c=oa(),l=this.Go(e,t.toUriEncodedString());P(Pr,`Sending RPC '${e}' ${c}:`,l,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,i,a);const{host:m}=new URL(l),f=Ss(m);return this.jo(e,l,h,n,f).then((w=>(P(Pr,`Received RPC '${e}' ${c}: `,w),w)),(w=>{throw kt(Pr,`RPC '${e}' ${c} failed with error: `,w,"url: ",l,"request:",n),w}))}Jo(e,t,n,i,a,c){return this.Wo(e,t,n,i,a)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),n&&n.headers.forEach(((i,a)=>e[a]=i))}Go(e,t){const n=Ev[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="WebChannelConnection";class Iv extends bv{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,a){const c=oa();return new Promise(((l,h)=>{const m=new Wu;m.setWithCredentials(!0),m.listenOnce(Ku.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case ui.NO_ERROR:const w=m.getResponseJson();P(Ae,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(w)),l(w);break;case ui.TIMEOUT:P(Ae,`RPC '${e}' ${c} timed out`),h(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case ui.HTTP_ERROR:const _=m.getStatus();if(P(Ae,`RPC '${e}' ${c} failed with status:`,_,"response text:",m.getResponseText()),_>0){let S=m.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const D=(function(Y){const $=Y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf($)>=0?$:C.UNKNOWN})(k.status);h(new O(D,k.message))}else h(new O(C.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new O(C.UNAVAILABLE,"Connection failed."));break;default:z(9055,{c_:e,streamId:c,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{P(Ae,`RPC '${e}' ${c} completed.`)}}));const f=JSON.stringify(i);P(Ae,`RPC '${e}' ${c} sending request:`,i),m.send(t,"POST",f,n,15)}))}P_(e,t,n){const i=oa(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Yu(),l=Ju(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const f=a.join("");P(Ae,`Creating RPC '${e}' stream ${i}: ${f}`,h);const w=c.createWebChannel(f,h);this.T_(w);let _=!1,S=!1;const k=new Tv({Ho:M=>{S?P(Ae,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(_||(P(Ae,`Opening RPC '${e}' stream ${i} transport.`),w.open(),_=!0),P(Ae,`RPC '${e}' stream ${i} sending:`,M),w.send(M))},Yo:()=>w.close()}),D=(M,Y,$)=>{M.listen(Y,(Q=>{try{$(Q)}catch(ne){setTimeout((()=>{throw ne}),0)}}))};return D(w,Zs.EventType.OPEN,(()=>{S||(P(Ae,`RPC '${e}' stream ${i} transport opened.`),k.s_())})),D(w,Zs.EventType.CLOSE,(()=>{S||(S=!0,P(Ae,`RPC '${e}' stream ${i} transport closed`),k.__(),this.I_(w))})),D(w,Zs.EventType.ERROR,(M=>{S||(S=!0,kt(Ae,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),k.__(new O(C.UNAVAILABLE,"The operation could not be completed")))})),D(w,Zs.EventType.MESSAGE,(M=>{var Y;if(!S){const $=M.data[0];oe(!!$,16349);const Q=$,ne=(Q==null?void 0:Q.error)||((Y=Q[0])===null||Y===void 0?void 0:Y.error);if(ne){P(Ae,`RPC '${e}' stream ${i} received error:`,ne);const Fe=ne.status;let le=(function(v){const E=de[v];if(E!==void 0)return bh(E)})(Fe),b=ne.message;le===void 0&&(le=C.INTERNAL,b="Unknown error status: "+Fe+" with message "+ne.message),S=!0,k.__(new O(le,b)),w.close()}else P(Ae,`RPC '${e}' stream ${i} received:`,$),k.a_($)}})),D(l,Qu.STAT_EVENT,(M=>{M.stat===Hr.PROXY?P(Ae,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Hr.NOPROXY&&P(Ae,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(s){return new ky(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,n=1e3,i=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="PersistentStream";class xv{constructor(e,t,n,i,a,c,l,h){this.Fi=e,this.w_=n,this.S_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Oh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ht(t.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===t&&this.W_(n,i)}),(n=>{e((()=>{const i=new O(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return P(Cl,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(P(Cl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Av extends xv{constructor(e,t,n,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,c),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Oy(this.serializer,e),n=(function(a){if(!("targetChange"in a))return U.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?U.min():c.readTime?_s(c.readTime):U.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=El(this.serializer),t.addTarget=(function(a,c){let l;const h=c.target;if(l=ea(h)?{documents:Vy(a,h)}:{query:Ly(a,h).Vt},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=jy(a,c.resumeToken);const m=ia(a,c.expectedCount);m!==null&&(l.expectedCount=m)}else if(c.snapshotVersion.compareTo(U.min())>0){l.readTime=Py(a,c.snapshotVersion.toTimestamp());const m=ia(a,c.expectedCount);m!==null&&(l.expectedCount=m)}return l})(this.serializer,e);const n=Uy(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=El(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{}class Nv extends Sv{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Wo(e,ra(t,n),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())}))}Jo(e,t,n,i,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,l])=>this.connection.Jo(e,ra(t,n),i,c,l,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new O(C.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Cv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ht(t),this._a=!1):P("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="RemoteStore";class Rv{constructor(e,t,n,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((c=>{n.enqueueAndForget((async()=>{Pn(this)&&(P(xs,"Restarting streams for network reachability change."),await(async function(h){const m=W(h);m.Ia.add(4),await kn(m),m.Aa.set("Unknown"),m.Ia.delete(4),await Ji(m)})(this))}))})),this.Aa=new Cv(n,i)}}async function Ji(s){if(Pn(s))for(const e of s.da)await e(!0)}async function kn(s){for(const e of s.da)await e(!1)}function Vh(s,e){const t=W(s);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Wa(t)?Ha(t):Ps(t).x_()&&qa(t,e))}function $a(s,e){const t=W(s),n=Ps(t);t.Ta.delete(e),n.x_()&&Lh(t,e),t.Ta.size===0&&(n.x_()?n.B_():Pn(t)&&t.Aa.set("Unknown"))}function qa(s,e){if(s.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ps(s).H_(e)}function Lh(s,e){s.Ra.$e(e),Ps(s).Y_(e)}function Ha(s){s.Ra=new Sy({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>s.Ta.get(e)||null,lt:()=>s.datastore.serializer.databaseId}),Ps(s).start(),s.Aa.aa()}function Wa(s){return Pn(s)&&!Ps(s).M_()&&s.Ta.size>0}function Pn(s){return W(s).Ia.size===0}function Fh(s){s.Ra=void 0}async function kv(s){s.Aa.set("Online")}async function Pv(s){s.Ta.forEach(((e,t)=>{qa(s,e)}))}async function jv(s,e){Fh(s),Wa(s)?(s.Aa.la(e),Ha(s)):s.Aa.set("Unknown")}async function Mv(s,e,t){if(s.Aa.set("Online"),e instanceof Ih&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const l of a.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,c),i.Ta.delete(l),i.Ra.removeTarget(l))})(s,e)}catch(n){P(xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Rl(s,n)}else if(e instanceof mi?s.Ra.Ye(e):e instanceof Th?s.Ra.it(e):s.Ra.et(e),!t.isEqual(U.min()))try{const n=await Mh(s.localStore);t.compareTo(n)>=0&&await(function(a,c){const l=a.Ra.Pt(c);return l.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const f=a.Ta.get(m);f&&a.Ta.set(m,f.withResumeToken(h.resumeToken,c))}})),l.targetMismatches.forEach(((h,m)=>{const f=a.Ta.get(h);if(!f)return;a.Ta.set(h,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),Lh(a,h);const w=new bt(f.target,h,m,f.sequenceNumber);qa(a,w)})),a.remoteSyncer.applyRemoteEvent(l)})(s,t)}catch(n){P(xs,"Failed to raise snapshot:",n),await Rl(s,n)}}async function Rl(s,e,t){if(!ks(e))throw e;s.Ia.add(1),await kn(s),s.Aa.set("Offline"),t||(t=()=>Mh(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{P(xs,"Retrying IndexedDB access"),await t(),s.Ia.delete(1),await Ji(s)}))}async function kl(s,e){const t=W(s);t.asyncQueue.verifyOperationInProgress(),P(xs,"RemoteStore received new credentials");const n=Pn(t);t.Ia.add(3),await kn(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ji(t)}async function Dv(s,e){const t=W(s);e?(t.Ia.delete(2),await Ji(t)):e||(t.Ia.add(2),await kn(t),t.Aa.set("Unknown"))}function Ps(s){return s.Va||(s.Va=(function(t,n,i){const a=W(t);return a.ia(),new Av(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(s.datastore,s.asyncQueue,{Zo:kv.bind(null,s),e_:Pv.bind(null,s),n_:jv.bind(null,s),J_:Mv.bind(null,s)}),s.da.push((async e=>{e?(s.Va.N_(),Wa(s)?Ha(s):s.Aa.set("Unknown")):(await s.Va.stop(),Fh(s))}))),s.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,n,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=a,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,a){const c=Date.now()+n,l=new Ka(e,t,c,i,a);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uh(s,e){if(ht("AsyncQueue",`${e}: ${s}`),ks(s))return new O(C.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{static emptySet(e){return new ys(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||L.comparator(t.key,n.key):(t,n)=>L.comparator(t.key,n.key),this.keyedMap=en(),this.sortedSet=new he(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=n.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ys;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.fa=new he(L.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):z(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class As{constructor(e,t,n,i,a,c,l,h,m){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(e,t,n,i,a){const c=[];return t.forEach((l=>{c.push({type:0,doc:l})})),new As(e,t,ys.emptySet(t),c,n,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Vv{constructor(){this.queries=jl(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=W(t),a=i.queries;i.queries=jl(),a.forEach(((c,l)=>{for(const h of l.wa)h.onError(n)}))})(this,new O(C.ABORTED,"Firestore shutting down"))}}function jl(){return new ns((s=>mh(s)),qi)}async function Lv(s,e){const t=W(s);let n=3;const i=e.query;let a=t.queries.get(i);a?!a.Sa()&&e.ba()&&(n=2):(a=new Ov,n=e.ba()?0:1);try{switch(n){case 0:a.ya=await t.onListen(i,!0);break;case 1:a.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const l=Uh(c,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Qa(t)}async function Fv(s,e){const t=W(s),n=e.query;let i=3;const a=t.queries.get(n);if(a){const c=a.wa.indexOf(e);c>=0&&(a.wa.splice(c,1),a.wa.length===0?i=e.ba()?0:1:!a.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Uv(s,e){const t=W(s);let n=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const l of c.wa)l.Ca(i)&&(n=!0);c.ya=i}}n&&Qa(t)}function zv(s,e,t){const n=W(s),i=n.queries.get(e);if(i)for(const a of i.wa)a.onError(t);n.queries.delete(e)}function Qa(s){s.Da.forEach((e=>{e.next()}))}var ca,Ml;(Ml=ca||(ca={})).Fa="default",Ml.Cache="cache";class Bv{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new As(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ca.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.key=e}}class Bh{constructor(e){this.key=e}}class Gv{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=ph(e),this.eu=new ys(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Pl,i=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,w)=>{const _=i.get(f),S=Hi(this.query,w)?w:null,k=!!_&&this.mutatedKeys.has(_.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let M=!1;_&&S?_.data.isEqual(S.data)?k!==D&&(n.track({type:3,doc:S}),M=!0):this.iu(_,S)||(n.track({type:2,doc:S}),M=!0,(h&&this.Xa(S,h)>0||m&&this.Xa(S,m)<0)&&(l=!0)):!_&&S?(n.track({type:0,doc:S}),M=!0):_&&!S&&(n.track({type:1,doc:_}),M=!0,(h||m)&&(l=!0)),M&&(S?(c=c.add(S),a=D?a.add(f):a.delete(f)):(c=c.delete(f),a=a.delete(f)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const f=this.query.limitType==="F"?c.last():c.first();c=c.delete(f.key),a=a.delete(f.key),n.track({type:1,doc:f})}return{eu:c,ru:n,Ds:l,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((f,w)=>(function(S,k){const D=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{At:M})}};return D(S)-D(k)})(f.type,w.type)||this.Xa(f.doc,w.doc))),this.su(n),i=i!=null&&i;const l=t&&!i?this.ou():[],h=this.Za.size===0&&this.current&&!i?1:0,m=h!==this.Ya;return this.Ya=h,c.length!==0||m?{snapshot:new As(this.query,e.eu,a,c,e.mutatedKeys,h===0,m,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Pl,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=K(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new Bh(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new zh(n))})),t}uu(e){this.Ha=e.qs,this.Za=K();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return As.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ja="SyncEngine";class $v{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qv{constructor(e){this.key=e,this.lu=!1}}class Hv{constructor(e,t,n,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new ns((l=>mh(l)),qi),this.Tu=new Map,this.Iu=new Set,this.du=new he(L.comparator),this.Eu=new Map,this.Au=new Ua,this.Ru={},this.Vu=new Map,this.mu=Is.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Wv(s,e,t=!0){const n=Wh(s);let i;const a=n.Pu.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.cu()):i=await Gh(n,e,t,!0),i}async function Kv(s,e){const t=Wh(s);await Gh(t,e,!0,!1)}async function Gh(s,e,t,n){const i=await _v(s.localStore,Xe(e)),a=i.targetId,c=s.sharedClientState.addLocalQueryTarget(a,t);let l;return n&&(l=await Qv(s,e,a,c==="current",i.resumeToken)),s.isPrimaryClient&&t&&Vh(s.remoteStore,i),l}async function Qv(s,e,t,n,i){s.gu=(w,_,S)=>(async function(D,M,Y,$){let Q=M.view.nu(Y);Q.Ds&&(Q=await xl(D.localStore,M.query,!1).then((({documents:b})=>M.view.nu(b,Q))));const ne=$&&$.targetChanges.get(M.targetId),Fe=$&&$.targetMismatches.get(M.targetId)!=null,le=M.view.applyChanges(Q,D.isPrimaryClient,ne,Fe);return Ol(D,M.targetId,le._u),le.snapshot})(s,w,_,S);const a=await xl(s.localStore,e,!0),c=new Gv(e,a.qs),l=c.nu(a.documents),h=Rn.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",i),m=c.applyChanges(l,s.isPrimaryClient,h);Ol(s,t,m._u);const f=new $v(e,t,c);return s.Pu.set(e,f),s.Tu.has(t)?s.Tu.get(t).push(e):s.Tu.set(t,[e]),m.snapshot}async function Jv(s,e,t){const n=W(s),i=n.Pu.get(e),a=n.Tu.get(i.targetId);if(a.length>1)return n.Tu.set(i.targetId,a.filter((c=>!qi(c,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await aa(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&$a(n.remoteStore,i.targetId),la(n,i.targetId)})).catch(Ui)):(la(n,i.targetId),await aa(n.localStore,i.targetId,!0))}async function Yv(s,e){const t=W(s),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),$a(t.remoteStore,n.targetId))}async function $h(s,e){const t=W(s);try{const n=await fv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Eu.get(a);c&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.lu=!0:i.modifiedDocuments.size>0?oe(c.lu,14607):i.removedDocuments.size>0&&(oe(c.lu,42227),c.lu=!1))})),await Hh(t,n,e)}catch(n){await Ui(n)}}function Dl(s,e,t){const n=W(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach(((a,c)=>{const l=c.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(c,l){const h=W(c);h.onlineState=l;let m=!1;h.queries.forEach(((f,w)=>{for(const _ of w.wa)_.va(l)&&(m=!0)})),m&&Qa(h)})(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Xv(s,e,t){const n=W(s);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),a=i&&i.key;if(a){let c=new he(L.comparator);c=c.insert(a,Ne.newNoDocument(a,U.min()));const l=K().add(a),h=new Qi(U.min(),new Map,new he(B),c,l);await $h(n,h),n.du=n.du.remove(a),n.Eu.delete(e),Ya(n)}else await aa(n.localStore,e,!1).then((()=>la(n,e,t))).catch(Ui)}function la(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Tu.get(e))s.Pu.delete(n),t&&s.hu.pu(n,t);s.Tu.delete(e),s.isPrimaryClient&&s.Au.zr(e).forEach((n=>{s.Au.containsKey(n)||qh(s,n)}))}function qh(s,e){s.Iu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&($a(s.remoteStore,t),s.du=s.du.remove(e),s.Eu.delete(t),Ya(s))}function Ol(s,e,t){for(const n of t)n instanceof zh?(s.Au.addReference(n.key,e),Zv(s,n)):n instanceof Bh?(P(Ja,"Document no longer in limbo: "+n.key),s.Au.removeReference(n.key,e),s.Au.containsKey(n.key)||qh(s,n.key)):z(19791,{yu:n})}function Zv(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Iu.has(n)||(P(Ja,"New document in limbo: "+t),s.Iu.add(n),Ya(s))}function Ya(s){for(;s.Iu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Iu.values().next().value;s.Iu.delete(e);const t=new L(ae.fromString(e)),n=s.mu.next();s.Eu.set(n,new qv(t)),s.du=s.du.insert(t,n),Vh(s.remoteStore,new bt(Xe(Oa(t.path)),n,"TargetPurposeLimboResolution",zi.ue))}}async function Hh(s,e,t){const n=W(s),i=[],a=[],c=[];n.Pu.isEmpty()||(n.Pu.forEach(((l,h)=>{c.push(n.gu(h,e,t).then((m=>{var f;if((m||t)&&n.isPrimaryClient){const w=m?!m.fromCache:(f=t==null?void 0:t.targetChanges.get(h.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(m){i.push(m);const w=Ba.Es(h.targetId,m);a.push(w)}})))})),await Promise.all(c),n.hu.J_(i),await(async function(h,m){const f=W(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>N.forEach(m,(_=>N.forEach(_.Is,(S=>f.persistence.referenceDelegate.addReference(w,_.targetId,S))).next((()=>N.forEach(_.ds,(S=>f.persistence.referenceDelegate.removeReference(w,_.targetId,S)))))))))}catch(w){if(!ks(w))throw w;P(Ga,"Failed to update sequence numbers: "+w)}for(const w of m){const _=w.targetId;if(!w.fromCache){const S=f.Fs.get(_),k=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(k);f.Fs=f.Fs.insert(_,D)}}})(n.localStore,a))}async function e0(s,e){const t=W(s);if(!t.currentUser.isEqual(e)){P(Ja,"User change. New user:",e.toKey());const n=await jh(t.localStore,e);t.currentUser=e,(function(a,c){a.Vu.forEach((l=>{l.forEach((h=>{h.reject(new O(C.CANCELLED,c))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Hh(t,n.Bs)}}function t0(s,e){const t=W(s),n=t.Eu.get(e);if(n&&n.lu)return K().add(n.key);{let i=K();const a=t.Tu.get(e);if(!a)return i;for(const c of a){const l=t.Pu.get(c);i=i.unionWith(l.view.tu)}return i}}function Wh(s){const e=W(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=$h.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=t0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xv.bind(null,e),e.hu.J_=Uv.bind(null,e.eventManager),e.hu.pu=zv.bind(null,e.eventManager),e}class Ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return pv(this.persistence,new hv,e.initialUser,this.serializer)}Du(e){return new Ph(za.Vi,this.serializer)}bu(e){return new vv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ri.provider={build:()=>new Ri};class s0 extends Ri{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){oe(this.persistence.referenceDelegate instanceof Ci,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Jy(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Me.withCacheSize(this.cacheSizeBytes):Me.DEFAULT;return new Ph((n=>Ci.Vi(n,t)),this.serializer)}}class ua{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Dl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=e0.bind(null,this.syncEngine),await Dv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Vv})()}createDatastore(e){const t=Dh(e.databaseInfo.databaseId),n=(function(a){return new Iv(a)})(e.databaseInfo);return(function(a,c,l,h){return new Nv(a,c,l,h)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,a,c,l){return new Rv(n,i,a,c,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Dl(this.syncEngine,t,0)),(function(){return Nl.C()?new Nl:new wv})())}createSyncEngine(e,t){return(function(i,a,c,l,h,m,f){const w=new Hv(i,a,c,l,h,m);return f&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const a=W(i);P(xs,"RemoteStore shutting down."),a.Ia.add(5),await kn(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ua.provider={build:()=>new ua};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="FirestoreClient";class i0{constructor(e,t,n,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=ka.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,(async c=>{P(Vt,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(n,(c=>(P(Vt,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Uh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Mr(s,e){s.asyncQueue.verifyOperationInProgress(),P(Vt,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async i=>{n.isEqual(i)||(await jh(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>{kt("Terminating Firestore due to IndexedDb database deletion"),s.terminate().then((()=>{P("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{kt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),s._offlineComponents=e}async function Vl(s,e){s.asyncQueue.verifyOperationInProgress();const t=await r0(s);P(Vt,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>kl(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,i)=>kl(e.remoteStore,i))),s._onlineComponents=e}async function r0(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){P(Vt,"Using user provided OfflineComponentProvider");try{await Mr(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;kt("Error using user provided cache. Falling back to memory cache: "+t),await Mr(s,new Ri)}}else P(Vt,"Using default OfflineComponentProvider"),await Mr(s,new s0(void 0));return s._offlineComponents}async function a0(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(P(Vt,"Using user provided OnlineComponentProvider"),await Vl(s,s._uninitializedComponentsProvider._online)):(P(Vt,"Using default OnlineComponentProvider"),await Vl(s,new ua))),s._onlineComponents}async function o0(s){const e=await a0(s),t=e.eventManager;return t.onListen=Wv.bind(null,e.syncEngine),t.onUnlisten=Jv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Kv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yv.bind(null,e.syncEngine),t}function c0(s,e,t={}){const n=new Kt;return s.asyncQueue.enqueueAndForget((async()=>(function(a,c,l,h,m){const f=new n0({next:_=>{f.Ou(),c.enqueueAndForget((()=>Fv(a,w)));const S=_.docs.has(l);!S&&_.fromCache?m.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&_.fromCache&&h&&h.source==="server"?m.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(_)},error:_=>m.reject(_)}),w=new Bv(Oa(l.path),f,{includeMetadataChanges:!0,ka:!0});return Lv(a,w)})(await o0(s),s.asyncQueue,e,t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="firestore.googleapis.com",Fl=!0;class Ul{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qh,this.ssl=Fl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Fl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ky)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kh((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xa{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ul({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ul(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new v_;switch(n.type){case"firstParty":return new T_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Ll.get(t);n&&(P("ComponentProvider","Removing Datastore"),Ll.delete(t),n.terminate())})(this),Promise.resolve()}}function l0(s,e,t,n={}){var i;s=Kr(s,Xa);const a=Ss(e),c=s._getSettings(),l=Object.assign(Object.assign({},c),{emulatorOptions:s._getEmulatorOptions()}),h=`${e}:${t}`;a&&(au(`https://${h}`),ou("Firestore",!0)),c.host!==Qh&&c.host!==h&&kt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},c),{host:h,ssl:a,emulatorOptions:n});if(!Yt(m,l)&&(s._setSettings(m),n.mockUserToken)){let f,w;if(typeof n.mockUserToken=="string")f=n.mockUserToken,w=Se.MOCK_USER;else{f=Rm(n.mockUserToken,(i=s._app)===null||i===void 0?void 0:i.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Se(_)}s._authCredentials=new w_(new Zu(f,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Za(this.firestore,e,this._query)}}class je{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Nn(t,je._jsonSchema))return new je(e,n||null,new L(ae.fromString(t.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:pe("string",je._jsonSchemaVersion),referencePath:pe("string")};class wn extends Za{constructor(e,t,n){super(e,t,Oa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new L(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function u0(s,e,...t){if(s=tt(s),arguments.length===1&&(e=ka.newId()),N_("doc","path",e),s instanceof Xa){const n=ae.fromString(e,...t);return Zc(n),new je(s,null,new L(n))}{if(!(s instanceof je||s instanceof wn))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ae.fromString(e,...t));return Zc(n),new je(s.firestore,s instanceof wn?s.converter:null,new L(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="AsyncQueue";class Bl{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Oh(this,"async_queue_retry"),this.oc=()=>{const n=jr();n&&P(zl,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=jr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Kt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ks(e))throw e;P(zl,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,ht("INTERNAL UNHANDLED ERROR: ",Gl(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Ka.createAndSchedule(this,e,t,n,(a=>this.lc(a)));return this.ec.push(i),i}ac(){this.tc&&z(47125,{hc:Gl(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Gl(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Jh extends Xa{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Bl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bl(e),this._firestoreClient=void 0,await e}}}function h0(s,e){const t=typeof s=="object"?s:hu(),n=typeof s=="string"?s:Ii,i=ya(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const a=Nm("firestore");a&&l0(i,...a)}return i}function d0(s){if(s._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||m0(s),s._firestoreClient}function m0(s){var e,t,n;const i=s._freezeSettings(),a=(function(l,h,m,f){return new G_(l,h,m,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Kh(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,i);s._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),s._firestoreClient=new i0(s._authCredentials,s._appCheckCredentials,s._queue,a,s._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Je(Ee.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Je(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nn(e,Je._jsonSchema))return Je.fromBase64String(e.bytes)}}Je._jsonSchemaVersion="firestore/bytes/1.0",Je._jsonSchema={type:pe("string",Je._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(e){if(Nn(e,Nt._jsonSchema))return new Nt(e.latitude,e.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:pe("string",Nt._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nn(e,Ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ct(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ct._jsonSchemaVersion="firestore/vectorValue/1.0",Ct._jsonSchema={type:pe("string",Ct._jsonSchemaVersion),vectorValues:pe("object")};const p0=new RegExp("[~\\*/\\[\\]]");function f0(s,e,t){if(e.search(p0)>=0)throw $l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new Yh(...e.split("."))._internalPath}catch{throw $l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function $l(s,e,t,n,i){let a=`Function ${e}() called with invalid data`;a+=". ";let c="";return new O(C.INVALID_ARGUMENT,a+s+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t,n,i,a){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new g0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class g0 extends Xh{data(){return super.data()}}function Zh(s,e){return typeof e=="string"?f0(s,e):e instanceof Yh?e._internalPath:e._delegate._internalPath}class _0{convertValue(e,t="none"){switch(Dt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Cn(e,((i,a)=>{n[i]=this.convertValue(a,t)})),n}convertVectorValue(e){var t,n,i;const a=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[Jr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((c=>ue(c.doubleValue)));return new Ct(a)}convertGeoPoint(e){return new Nt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Gi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_n(e));default:return null}}convertTimestamp(e){const t=jt(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ae.fromString(e);oe(Rh(n),9688,{name:e});const i=new yn(n.get(1),n.get(3)),a=new L(n.popFirst(5));return i.isEqual(t)||ht(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class sn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jt extends Xh{constructor(e,t,n,i,a,c){super(e,t,n,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Zh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Jt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Jt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jt._jsonSchema={type:pe("string",Jt._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class pi extends Jt{data(e={}){return super.data(e)}}class un{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new sn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new pi(this._firestore,this._userDataWriter,n.key,n,new sn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((l=>{const h=new pi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new sn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>a||l.type!==3)).map((l=>{const h=new pi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new sn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,f=-1;return l.type!==0&&(m=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),f=c.indexOf(l.doc.key)),{type:y0(l.type),doc:h,oldIndex:m,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=un._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ka.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),n.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function y0(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(s){s=Kr(s,je);const e=Kr(s.firestore,Jh);return c0(d0(e),s._key).then((t=>E0(e,s,t)))}un._jsonSchemaVersion="firestore/querySnapshot/1.0",un._jsonSchema={type:pe("string",un._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};class w0 extends _0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function E0(s,e,t){const n=t.docs.get(e._key),i=new w0(s);return new Jt(s,i,e._key,n,new sn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Rs=i})(Ns),vs(new Xt("firestore",((n,{instanceIdentifier:i,options:a})=>{const c=n.getProvider("app").getImmediate(),l=new Jh(new E_(n.getProvider("auth-internal")),new I_(c,n.getProvider("app-check-internal")),(function(m,f){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(m.options.projectId,f)})(c,i),c);return a=Object.assign({useFetchStreams:t},a),l._setSettings(a),l}),"PUBLIC").setMultipleInstances(!0)),xt(Kc,Qc,e),xt(Kc,Qc,"esm2017")})();var b0="firebase",T0="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(b0,T0,"app");const fi={apiKey:"AIzaSyBkRPeaFVuEZiQ4u6StN1vL7ZyfV356JV4",authDomain:"matchlink-ai.firebaseapp.com",projectId:"matchlink-ai",storageBucket:"matchlink-ai.firebasestorage.app",messagingSenderId:"1006566402902",appId:"1:1006566402902:web:80bb36ed2c3fcded73c4f7"};var Zl;console.log("Firebase Init:",{hasApiKey:!!fi.apiKey,apiKeyLength:(Zl=fi.apiKey)==null?void 0:Zl.length,domain:fi.authDomain});const ed=uu(fi),ki=__(ed),I0=h0(ed),x0={operations:{role:"operations",label:"Operations Manager",description:"Stadium-wide monitoring, crowd management, and staff coordination",icon:"Settings",color:"#6366f1",defaultView:"/dashboard",navItems:[{id:"dashboard",label:"Dashboard",path:"/dashboard",icon:"LayoutDashboard"},{id:"stadium",label:"Stadium Twin",path:"/stadium",icon:"Map"},{id:"crowd",label:"Crowd Intel",path:"/crowd",icon:"Users"},{id:"predictions",label:"Predictions",path:"/predictions",icon:"TrendingUp"},{id:"incidents",label:"Incidents",path:"/incidents",icon:"AlertTriangle"},{id:"assistant",label:"AI Assistant",path:"/assistant",icon:"Bot"},{id:"match",label:"Match Schedule",path:"/match",icon:"Calendar"}]},security:{role:"security",label:"Security Staff",description:"Incident response, crowd density monitoring, and emergency coordination",icon:"Shield",color:"#ef4444",defaultView:"/dashboard",navItems:[{id:"dashboard",label:"Dashboard",path:"/dashboard",icon:"LayoutDashboard"},{id:"incidents",label:"Incidents",path:"/incidents",icon:"AlertTriangle"},{id:"stadium",label:"Stadium Map",path:"/stadium",icon:"Map"},{id:"crowd",label:"Crowd Monitor",path:"/crowd",icon:"Users"},{id:"assistant",label:"AI Assistant",path:"/assistant",icon:"Bot"}]},spectator:{role:"spectator",label:"Spectator",description:"Navigation, facilities, food, accessibility, and match information",icon:"User",color:"#22c55e",defaultView:"/dashboard",navItems:[{id:"dashboard",label:"Home",path:"/dashboard",icon:"Home"},{id:"match",label:"Matches",path:"/match",icon:"Calendar"},{id:"navigation",label:"Navigate",path:"/navigation",icon:"Navigation"},{id:"stadium",label:"Stadium Map",path:"/stadium",icon:"Map"},{id:"assistant",label:"AI Assistant",path:"/assistant",icon:"Bot"}]},staff:{role:"staff",label:"Tournament Staff",description:"Logistics, schedules, volunteer management, and equipment tracking",icon:"Briefcase",color:"#f59e0b",defaultView:"/dashboard",navItems:[{id:"dashboard",label:"Dashboard",path:"/dashboard",icon:"LayoutDashboard"},{id:"match",label:"Schedule",path:"/match",icon:"Calendar"},{id:"stadium",label:"Stadium Map",path:"/stadium",icon:"Map"},{id:"incidents",label:"Incidents",path:"/incidents",icon:"AlertTriangle"},{id:"assistant",label:"AI Assistant",path:"/assistant",icon:"Bot"}]}},td={medical_emergency:"Medical Emergency",lost_child:"Lost Child",suspicious_activity:"Suspicious Activity",facility_damage:"Facility Damage",long_queue:"Long Queue",blocked_exit:"Blocked Exit",crowd_surge:"Crowd Surge",weather_alert:"Weather Alert",fire_alarm:"Fire Alarm",power_outage:"Power Outage",unauthorized_access:"Unauthorized Access",altercation:"Altercation"},sd=j.createContext(null);function A0({children:s}){const[e,t]=j.useState(null),[n,i]=j.useState(!0);j.useEffect(()=>{const h=rg(ki,async m=>{if(m)try{const f=await v0(u0(I0,"users",m.uid));if(f.exists()){const w=f.data();t({id:m.uid,name:w.name||m.email||"Unknown User",role:w.role||"spectator",currentLocation:w.currentLocation,currentStadiumId:w.currentStadiumId,preferences:w.preferences||{theme:"dark",reducedMotion:!1,highContrast:!1,fontSize:"normal",accessibilityNeeds:["none"]},zone:w.zone||null,shift:w.shift||null})}else console.warn("User document not found in Firestore. Defaulting to spectator."),t({id:m.uid,name:m.email||"Unknown",role:"spectator",currentLocation:null,currentStadiumId:null,preferences:{theme:"dark",reducedMotion:!1,highContrast:!1,fontSize:"normal",accessibilityNeeds:["none"]},zone:null,shift:null})}catch(f){console.error("Error fetching user profile:",f),t(null)}else t(null);i(!1)});return()=>h()},[]);const a=async()=>{try{await ag(ki)}catch(h){console.error("Error logging out:",h)}},c=(e==null?void 0:e.role)??null,l=c?x0[c]:null;return o.jsx(sd.Provider,{value:{user:e,role:c,isAuthenticated:e!==null,isLoading:n,logout:a,roleConfig:l},children:s})}function is(){const s=j.useContext(sd);if(!s)throw new Error("useAuth must be used within an AuthProvider");return s}function Dr({children:s,allowedRoles:e}){const{user:t}=is();return t?e.includes(t.role)?o.jsx(o.Fragment,{children:s}):o.jsx(dn,{to:"/dashboard",replace:!0}):o.jsx(dn,{to:"/",replace:!0})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nd=(...s)=>s.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=j.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:c,...l},h)=>j.createElement("svg",{ref:h,...N0,width:e,height:e,stroke:s,strokeWidth:n?Number(t)*24/Number(e):t,className:nd("lucide",i),...l},[...c.map(([m,f])=>j.createElement(m,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(s,e)=>{const t=j.forwardRef(({className:n,...i},a)=>j.createElement(C0,{ref:a,iconNode:e,className:nd(`lucide-${S0(s)}`,n),...i}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=V("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=V("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=V("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=V("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=V("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=V("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=V("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=V("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=V("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=V("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=V("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=V("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=V("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=V("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=V("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=V("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=V("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=V("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=V("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=V("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=V("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=V("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=V("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=V("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=V("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=V("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=V("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=V("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=V("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=V("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=V("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=V("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=V("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=V("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=V("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=V("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=V("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=V("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=V("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=V("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=V("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=V("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=V("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=V("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),ow={LayoutDashboard:o.jsx(od,{size:18}),Map:o.jsx(no,{size:18}),Users:o.jsx(ji,{size:18}),TrendingUp:o.jsx(ro,{size:18}),AlertTriangle:o.jsx(Rt,{size:18}),Bot:o.jsx(to,{size:18}),Calendar:o.jsx(so,{size:18}),Home:o.jsx(z0,{size:18}),Navigation:o.jsx(io,{size:18}),Shield:o.jsx(Wt,{size:18}),Briefcase:o.jsx(j0,{size:18}),Settings:o.jsx(X0,{size:18})};function cw({collapsed:s,onToggleCollapse:e}){const{roleConfig:t,user:n,logout:i}=is(),a=am();return!t||!n?null:o.jsxs("aside",{className:`sidebar ${s?"sidebar--collapsed":""}`,"aria-label":"Main navigation",children:[o.jsxs("div",{className:"sidebar__header",children:[o.jsxs("div",{className:"sidebar__brand",children:[o.jsx("div",{className:"sidebar__logo","aria-hidden":"true",children:o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 32 32",fill:"none",children:[o.jsx("rect",{width:"32",height:"32",rx:"8",fill:"var(--color-accent)"}),o.jsx("path",{d:"M8 16L13 11L16 14L19 11L24 16L19 21L16 18L13 21L8 16Z",fill:"white",opacity:"0.9"}),o.jsx("circle",{cx:"16",cy:"16",r:"2",fill:"var(--color-accent)"})]})}),!s&&o.jsxs("div",{className:"sidebar__brand-text",children:[o.jsx("span",{className:"sidebar__brand-name",children:"MatchMind"}),o.jsx("span",{className:"sidebar__brand-tag",children:"AI"})]})]}),o.jsx("button",{className:"sidebar__toggle",onClick:e,"aria-label":s?"Expand sidebar":"Collapse sidebar",title:s?"Expand sidebar":"Collapse sidebar",children:s?o.jsx(O0,{size:16}):o.jsx(D0,{size:16})})]}),!s&&o.jsxs("div",{className:"sidebar__role",children:[o.jsx("div",{className:"sidebar__role-dot",style:{background:t.color}}),o.jsxs("div",{className:"sidebar__role-info",children:[o.jsx("span",{className:"sidebar__role-name",children:n.name}),o.jsx("span",{className:"sidebar__role-label",children:t.label})]})]}),o.jsx("nav",{className:"sidebar__nav",children:o.jsx("ul",{className:"sidebar__nav-list",role:"list",children:t.navItems.map(c=>o.jsx("li",{children:o.jsxs(om,{to:c.path,className:({isActive:l})=>`sidebar__nav-item ${l?"sidebar__nav-item--active":""}`,title:s?c.label:void 0,"aria-current":a.pathname===c.path?"page":void 0,children:[o.jsx("span",{className:"sidebar__nav-icon",children:ow[c.icon]??o.jsx(od,{size:18})}),!s&&o.jsx("span",{className:"sidebar__nav-label",children:c.label}),!s&&c.badge!=null&&o.jsx("span",{className:"sidebar__nav-badge",children:c.badge})]})},c.id))})}),o.jsx("div",{className:"sidebar__footer",children:o.jsxs("button",{className:"sidebar__nav-item sidebar__footer-btn",onClick:i,title:"Switch Role",children:[o.jsx("span",{className:"sidebar__nav-icon",children:o.jsx(G0,{size:18})}),!s&&o.jsx("span",{className:"sidebar__nav-label",children:"Switch Role"})]})})]})}function Hl(){return typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Wl(){try{const s=localStorage.getItem("matchmind-theme");return s==="dark"||s==="light"?s:null}catch{return null}}function lw(){const[s,e]=j.useState(()=>Wl()??Hl());j.useEffect(()=>{document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("matchmind-theme",s)}catch{}},[s]),j.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{Wl()||e(Hl())};return i.addEventListener("change",a),()=>i.removeEventListener("change",a)},[]);const t=j.useCallback(()=>{e(i=>i==="dark"?"light":"dark")},[]),n=j.useCallback(i=>{e(i)},[]);return{theme:s,toggleTheme:t,setTheme:n}}const hd=j.createContext(null);function uw({children:s}){const e=lw(),t=j.useMemo(()=>({theme:e.theme,toggleTheme:e.toggleTheme,setTheme:e.setTheme}),[e.theme,e.toggleTheme,e.setTheme]);return o.jsx(hd.Provider,{value:t,children:s})}function hw(){const s=j.useContext(hd);if(!s)throw new Error("useThemeContext must be used within a ThemeProvider");return s}const ao=Le.memo(function({status:e,label:t,size:n="sm",pulse:i=!1}){return o.jsxs("span",{className:`status-indicator status-indicator--${e} status-indicator--${n}`,role:"status","aria-label":t??e,children:[o.jsx("span",{className:`status-indicator__dot ${i?"status-indicator__dot--pulse":""}`,"aria-hidden":"true"}),t&&o.jsx("span",{className:"status-indicator__label",children:t})]})});function dw({onMenuClick:s,pageTitle:e}){const{theme:t,toggleTheme:n}=hw(),{user:i,roleConfig:a}=is(),[c,l]=j.useState(!1),h=new Date;return o.jsxs("header",{className:"topbar",role:"banner",children:[o.jsxs("div",{className:"topbar__left",children:[o.jsx("button",{className:"topbar__menu-btn",onClick:s,"aria-label":"Toggle menu",children:o.jsx($0,{size:18})}),e&&o.jsx("h1",{className:"topbar__title",children:e})]}),o.jsx("div",{className:"topbar__center",children:o.jsxs("div",{className:`topbar__search ${c?"topbar__search--open":""}`,children:[o.jsx(J0,{size:15,className:"topbar__search-icon","aria-hidden":"true"}),o.jsx("input",{type:"search",className:"topbar__search-input",placeholder:"Search or ask AI... (⌘K)","aria-label":"Search operations",onFocus:()=>l(!0),onBlur:()=>l(!1)}),o.jsx("kbd",{className:"topbar__search-kbd",children:"⌘K"})]})}),o.jsxs("div",{className:"topbar__right",children:[o.jsx("div",{className:"topbar__live-indicator",children:o.jsx(ao,{status:"online",pulse:!0,label:"LIVE"})}),o.jsxs("span",{className:"topbar__clock","aria-label":`Current time: ${h.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}`,children:[o.jsx(jn,{size:14}),h.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})]}),o.jsx("button",{className:"topbar__icon-btn",onClick:n,"aria-label":`Switch to ${t==="dark"?"light":"dark"} mode`,title:`Switch to ${t==="dark"?"light":"dark"} mode`,children:t==="dark"?o.jsx(tw,{size:17}):o.jsx(W0,{size:17})}),o.jsxs("button",{className:"topbar__icon-btn topbar__icon-btn--notify","aria-label":"Notifications (3 unread)",children:[o.jsx(k0,{size:17}),o.jsx("span",{className:"topbar__notify-dot","aria-hidden":"true"})]}),i&&o.jsx("div",{className:"topbar__avatar",title:`${i.name} — ${a==null?void 0:a.label}`,children:o.jsx("span",{className:"topbar__avatar-letter",style:{background:a==null?void 0:a.color},children:i.name.charAt(0)})})]})]})}function mw(){const[s,e]=j.useState(!1),t=j.useCallback(()=>{e(n=>!n)},[]);return o.jsxs("div",{className:`layout ${s?"layout--collapsed":""}`,children:[o.jsx("a",{href:"#main-content",className:"skip-nav",children:"Skip to main content"}),o.jsx(cw,{collapsed:s,onToggleCollapse:t}),o.jsxs("div",{className:"layout__content",children:[o.jsx(dw,{onMenuClick:t}),o.jsx("main",{id:"main-content",className:"layout__main",role:"main",children:o.jsx(Le.Suspense,{fallback:o.jsx("div",{className:"layout__loading",children:o.jsx("div",{className:"layout__loading-spinner"})}),children:o.jsx(cm,{})})})]})]})}function pw(){const[s,e]=j.useState(""),[t,n]=j.useState(""),[i,a]=j.useState(""),[c,l]=j.useState(!1),h=async f=>{f.preventDefault(),a(""),l(!0);try{await sg(ki,s,t)}catch(w){console.error(w),a(w.message||"Authentication failed. Please try again.")}finally{l(!1)}},m=async()=>{a(""),l(!0);try{const f=new rt;await Ag(ki,f)}catch(f){console.error(f),a(f.message||"Google authentication failed.")}finally{l(!1)}};return o.jsx("div",{className:"login-page",children:o.jsxs("div",{className:"login-page__content",children:[o.jsxs("div",{className:"login-page__header",children:[o.jsx("div",{className:"login-page__logo",children:o.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 32 32",fill:"none",children:[o.jsx("rect",{width:"32",height:"32",rx:"8",fill:"#6366f1"}),o.jsx("path",{d:"M8 16L13 11L16 14L19 11L24 16L19 21L16 18L13 21L8 16Z",fill:"white",opacity:"0.9"}),o.jsx("circle",{cx:"16",cy:"16",r:"2",fill:"#6366f1"})]})}),o.jsxs("h1",{className:"login-page__title",children:["MatchMind ",o.jsx("span",{className:"login-page__ai",children:"AI"})]}),o.jsx("p",{className:"login-page__subtitle",children:"Secure Authentication Portal"})]}),o.jsxs("form",{className:"login-form",onSubmit:h,children:[i&&o.jsxs("div",{className:"login-form__error",role:"alert",children:[o.jsx(L0,{size:16}),i]}),o.jsxs("div",{className:"login-form__field",children:[o.jsx("label",{htmlFor:"email",children:"Email Address"}),o.jsx("input",{id:"email",type:"email",value:s,onChange:f=>e(f.target.value),placeholder:"operator@matchmind.com",required:!0,disabled:c,className:"login-form__input"})]}),o.jsxs("div",{className:"login-form__field",children:[o.jsx("label",{htmlFor:"password",children:"Password"}),o.jsx("input",{id:"password",type:"password",value:t,onChange:f=>n(f.target.value),placeholder:"••••••••",required:!0,disabled:c,className:"login-form__input"})]}),o.jsx("button",{type:"submit",className:"login-form__submit",disabled:c,children:c?"Authenticating...":o.jsxs(o.Fragment,{children:[o.jsx(Wt,{size:18}),"Sign in with Email",o.jsx(eo,{size:18})]})}),o.jsx("div",{style:{textAlign:"center",margin:"0.5rem 0",color:"var(--color-text-secondary)",fontSize:"0.9rem"},children:"OR"}),o.jsx("button",{type:"button",className:"login-form__submit",style:{background:"white",color:"#333"},disabled:c,onClick:m,children:c?"Authenticating...":o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[o.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),o.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),o.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),o.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),o.jsx("path",{fill:"none",d:"M1 1h22v22H1z"})]}),"Sign in with Google"]})})]}),o.jsx("div",{className:"login-page__footer",children:o.jsxs("div",{className:"login-page__status",children:[o.jsx("span",{className:"login-page__status-dot"}),"Firebase Auth Active"]})})]})})}const De=Le.memo(function({label:e,value:t,change:n,changeLabel:i,icon:a,variant:c="default",size:l="md"}){const m=n===void 0||n===0?"neutral":n>0?"up":"down";return o.jsxs("div",{className:`metric-card metric-card--${c} metric-card--${l}`,children:[o.jsxs("div",{className:"metric-card__header",children:[o.jsx("span",{className:"metric-card__label",children:e}),a&&o.jsx("span",{className:"metric-card__icon","aria-hidden":"true",children:a})]}),o.jsx("div",{className:"metric-card__value","aria-label":`${e}: ${t}`,children:t}),n!==void 0&&o.jsxs("div",{className:`metric-card__change metric-card__change--${m}`,children:[m==="up"&&o.jsx(ro,{size:12}),m==="down"&&o.jsx(iw,{size:12}),m==="neutral"&&o.jsx(H0,{size:12}),o.jsxs("span",{children:[n>0?"+":"",n.toFixed(1),"%"]}),i&&o.jsx("span",{className:"metric-card__change-label",children:i})]})]})}),Z=Le.memo(function({variant:e="default",size:t="sm",dot:n=!1,pulseDot:i=!1,children:a,className:c=""}){return o.jsxs("span",{className:`badge badge--${e} badge--${t} ${c}`,children:[n&&o.jsx("span",{className:`badge__dot ${i?"badge__dot--pulse":""}`,"aria-hidden":"true"}),a]})}),ie=Date.now(),re=6e4,dd=[{id:"inc-001",type:"medical_emergency",title:"Spectator collapsed near Section 214",description:"A 67-year-old male spectator reported feeling dizzy and collapsed in the concourse near Section 214. Bystanders called for help. Patient is conscious but disoriented.",priority:"high",status:"in_progress",location:"Section 214 Concourse",zone:"East Stand",position:{x:72,y:45},reportedBy:"Usher Team East",reportedAt:ie-12*re,acknowledgedAt:ie-11*re,resolvedAt:null,assignedTo:"Medical Team Alpha",assignedDepartment:"Medical",responseTimeMinutes:1,estimatedResolutionMinutes:15,notes:[{id:"n1",author:"Medical Team Alpha",content:"En route to Section 214. ETA 2 minutes.",timestamp:ie-11*re},{id:"n2",author:"Medical Team Alpha",content:"On scene. Patient stable, administering first aid. Monitoring vitals.",timestamp:ie-9*re}],aiSuggestion:"Deploy wheelchair from Medical Station Bravo. Alert nearest first aid station. Prepare stretcher if transport to medical room required. Consider heat-related illness given current 29°C temperature.",aiPriority:"high"},{id:"inc-002",type:"lost_child",title:"Lost 6-year-old near Gate B food court",description:"Parent reported a 6-year-old boy separated from family near the food court area between Gate B and Section 120. Child wearing a blue Brazil jersey, name is Lucas.",priority:"high",status:"in_progress",location:"Gate B Food Court",zone:"North East",position:{x:80,y:25},reportedBy:"Information Desk",reportedAt:ie-8*re,acknowledgedAt:ie-7*re,resolvedAt:null,assignedTo:"Security Team Bravo",assignedDepartment:"Security",responseTimeMinutes:1,estimatedResolutionMinutes:20,notes:[{id:"n3",author:"Security Team Bravo",content:"Sweeping food court area. Description broadcasted to all units.",timestamp:ie-6*re}],aiSuggestion:"Broadcast description on internal radio. Check CCTV cameras for Gate B food court area. Deploy staff to cover all exits from the food court. Contact family zone for safe handoff.",aiPriority:"high"},{id:"inc-003",type:"long_queue",title:"Gate B queue exceeding 15 minute wait",description:"Queue at Gate B has grown to approximately 580 people with estimated wait time exceeding 14 minutes. Entry throughput has decreased due to additional security screening requirements.",priority:"medium",status:"acknowledged",location:"Gate B",zone:"East Entrance",position:{x:95,y:35},reportedBy:"System (Automated)",reportedAt:ie-20*re,acknowledgedAt:ie-18*re,resolvedAt:null,assignedTo:"Gate Operations",assignedDepartment:"Operations",responseTimeMinutes:2,estimatedResolutionMinutes:30,notes:[{id:"n4",author:"Gate Supervisor B",content:"Opened additional screening lane. Requested 2 more staff from reserve pool.",timestamp:ie-15*re}],aiSuggestion:"Redirect spectators from Gate B to Gate C (3 min wait) via digital signage and PA announcement. Deploy 2 additional screening staff from reserve pool. Consider opening auxiliary lane.",aiPriority:"medium"},{id:"inc-004",type:"facility_damage",title:"Restroom West — plumbing issue",description:"Restroom West reporting water leak from a broken pipe in the second stall. Water accumulating on floor, creating slip hazard.",priority:"medium",status:"in_progress",location:"Restroom West",zone:"West Stand",position:{x:12,y:50},reportedBy:"Cleaning Staff",reportedAt:ie-35*re,acknowledgedAt:ie-33*re,resolvedAt:null,assignedTo:"Maintenance Team 2",assignedDepartment:"Facilities",responseTimeMinutes:2,estimatedResolutionMinutes:45,notes:[{id:"n5",author:"Maintenance Team 2",content:"Shut off water supply to affected stall. Cleanup in progress. Full repair estimated 30 minutes.",timestamp:ie-25*re}],aiSuggestion:"Mark Restroom West as closed on stadium map. Redirect visitors to Restroom South (1 min wait, 200m away). Place wet floor signs in surrounding area.",aiPriority:"medium"},{id:"inc-005",type:"suspicious_activity",title:"Unattended bag near Gate A",description:"Security camera detected an unattended backpack near the Gate A entrance for over 10 minutes. No owner identified in immediate vicinity.",priority:"high",status:"in_progress",location:"Gate A Entrance",zone:"North",position:{x:50,y:8},reportedBy:"CCTV Operator",reportedAt:ie-5*re,acknowledgedAt:ie-4*re,resolvedAt:null,assignedTo:"Security Team Alpha",assignedDepartment:"Security",responseTimeMinutes:1,estimatedResolutionMinutes:15,notes:[{id:"n6",author:"Security Team Alpha",content:"Arriving at location. Establishing 30m perimeter.",timestamp:ie-3*re}],aiSuggestion:"Establish 30-meter safety perimeter. Attempt to identify owner via PA system and CCTV review. If unclaimed after 5 minutes, follow bomb threat protocol BTP-7. Notify local law enforcement.",aiPriority:"critical"},{id:"inc-006",type:"crowd_surge",title:"Crowd density spike in Section 121-130",description:"Crowd density in Section 121-130 has reached 97.6% capacity. Brazil supporters celebrating goal creating movement toward front rows.",priority:"high",status:"acknowledged",location:"Section 121-130",zone:"South East",position:{x:75,y:70},reportedBy:"System (Automated)",reportedAt:ie-2*re,acknowledgedAt:ie-1*re,resolvedAt:null,assignedTo:null,assignedDepartment:"Security",responseTimeMinutes:1,estimatedResolutionMinutes:10,notes:[],aiSuggestion:"Deploy crowd management team to Section 121 aisles. Activate PA message requesting spectators remain in assigned seats. Open additional exit routes to concourse. Monitor for crush risk.",aiPriority:"high"},{id:"inc-007",type:"altercation",title:"Verbal altercation between fan groups — Section 300",description:"Two groups of rival supporters engaged in heated verbal altercation in upper deck Section 305. Approximately 8-10 individuals involved. No physical violence yet.",priority:"medium",status:"resolved",location:"Section 305",zone:"Upper West",position:{x:30,y:60},reportedBy:"Steward Section 300",reportedAt:ie-50*re,acknowledgedAt:ie-49*re,resolvedAt:ie-38*re,assignedTo:"Security Team Charlie",assignedDepartment:"Security",responseTimeMinutes:1,estimatedResolutionMinutes:null,notes:[{id:"n7",author:"Security Team Charlie",content:"On scene. Groups separated. Issuing warnings.",timestamp:ie-47*re},{id:"n8",author:"Security Team Charlie",content:"Situation de-escalated. 2 individuals relocated to different sections. No injuries.",timestamp:ie-38*re}],aiSuggestion:"Separate groups and relocate aggressors. Document incident for post-match review. Consider increasing steward presence in mixed-allegiance sections.",aiPriority:"medium"}];function md(){return dd.filter(s=>s.status!=="resolved"&&s.status!=="escalated")}function ma(s){return s>=1e6?`${(s/1e6).toFixed(1)}M`:s>=1e3?`${(s/1e3).toFixed(1)}K`:s.toLocaleString()}function bn(s){return new Date(s).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}function fw(s){return new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function pa(s){const t=Date.now()-s,n=Math.floor(t/6e4),i=Math.floor(t/36e5);return n<1?"Just now":n<60?`${n}m ago`:i<24?`${i}h ago`:fw(s)}function pd(s){const e=Date.now(),t=s-e;if(t<=0)return"Now";const n=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4),c=Math.floor(t%6e4/1e3);return n>0?`${n}d ${i}h`:i>0?`${i}h ${a}m`:a>0?`${a}m ${c}s`:`${c}s`}function hn(s){return{low:"var(--color-congestion-low)",moderate:"var(--color-congestion-moderate)",high:"var(--color-congestion-high)",critical:"var(--color-congestion-critical)"}[s]}const gw={critical:"danger",high:"danger",medium:"warning",low:"info"},fd=Le.memo(function(){const e=md();return o.jsxs("div",{className:"alerts-feed",children:[o.jsx("div",{className:"alerts-feed__header",children:o.jsxs("div",{className:"alerts-feed__title-row",children:[o.jsx(Rt,{size:16}),o.jsx("h3",{className:"alerts-feed__title",children:"Active Alerts"}),o.jsx(Z,{variant:"danger",size:"sm",dot:!0,pulseDot:!0,children:e.length})]})}),o.jsx("ul",{className:"alerts-feed__list",role:"list","aria-label":"Active incidents",children:e.map(t=>o.jsxs("li",{className:"alerts-feed__item",role:"listitem",children:[o.jsxs("div",{className:"alerts-feed__item-header",children:[o.jsx(Z,{variant:gw[t.priority]??"default",size:"sm",children:t.priority.toUpperCase()}),o.jsx(Z,{variant:"default",size:"sm",children:td[t.type]})]}),o.jsx("p",{className:"alerts-feed__item-title",children:t.title}),o.jsxs("div",{className:"alerts-feed__item-meta",children:[o.jsxs("span",{className:"alerts-feed__item-meta-item",children:[o.jsx(Lt,{size:11}),t.location]}),o.jsxs("span",{className:"alerts-feed__item-meta-item",children:[o.jsx(jn,{size:11}),pa(t.reportedAt)]})]}),t.assignedTo&&o.jsxs("p",{className:"alerts-feed__item-assigned",children:["Assigned to: ",t.assignedTo]})]},t.id))})]})}),G=Le.memo(function({variant:e="default",padding:t="md",interactive:n=!1,selected:i=!1,children:a,className:c="",...l}){return o.jsx("div",{className:`card card--${e} card--pad-${t} ${n?"card--interactive":""} ${i?"card--selected":""} ${c}`,role:n?"button":void 0,tabIndex:n?0:void 0,...l,children:a})});function te({title:s,subtitle:e,action:t,icon:n}){return o.jsxs("div",{className:"card__header",children:[o.jsxs("div",{className:"card__header-left",children:[n&&o.jsx("span",{className:"card__header-icon",children:n}),o.jsxs("div",{children:[o.jsx("h3",{className:"card__title",children:s}),e&&o.jsx("p",{className:"card__subtitle",children:e})]})]}),t&&o.jsx("div",{className:"card__header-action",children:t})]})}function ct(s,e=500){return new Promise(t=>{setTimeout(()=>{t(s)},e)})}const _w=[{id:"metlife",name:"MetLife Stadium",city:"East Rutherford",state:"New Jersey",country:"USA",capacity:82500,coordinates:{lat:40.8128,lng:-74.0742},gates:[{id:"gate-a",name:"Gate A",type:"general",position:{x:50,y:5},direction:"North",congestionLevel:"moderate",currentThroughput:42,maxThroughput:80,queueLength:320,estimatedWaitMinutes:8,isOpen:!0,isAccessible:!0},{id:"gate-b",name:"Gate B",type:"general",position:{x:95,y:35},direction:"East",congestionLevel:"high",currentThroughput:65,maxThroughput:80,queueLength:580,estimatedWaitMinutes:14,isOpen:!0,isAccessible:!1},{id:"gate-c",name:"Gate C",type:"general",position:{x:50,y:95},direction:"South",congestionLevel:"low",currentThroughput:28,maxThroughput:80,queueLength:120,estimatedWaitMinutes:3,isOpen:!0,isAccessible:!0},{id:"gate-d",name:"Gate D",type:"general",position:{x:5,y:35},direction:"West",congestionLevel:"low",currentThroughput:35,maxThroughput:80,queueLength:85,estimatedWaitMinutes:2,isOpen:!0,isAccessible:!1},{id:"gate-vip",name:"VIP Entrance",type:"vip",position:{x:5,y:65},direction:"West",congestionLevel:"low",currentThroughput:12,maxThroughput:30,queueLength:15,estimatedWaitMinutes:1,isOpen:!0,isAccessible:!0},{id:"gate-accessible",name:"Accessible Entry",type:"accessible",position:{x:95,y:65},direction:"East",congestionLevel:"low",currentThroughput:8,maxThroughput:20,queueLength:10,estimatedWaitMinutes:1,isOpen:!0,isAccessible:!0},{id:"gate-staff",name:"Staff Entrance",type:"staff",position:{x:30,y:95},direction:"South",congestionLevel:"low",currentThroughput:5,maxThroughput:15,queueLength:0,estimatedWaitMinutes:0,isOpen:!0,isAccessible:!0},{id:"gate-emergency-n",name:"Emergency Exit N",type:"emergency",position:{x:70,y:5},direction:"North",congestionLevel:"low",currentThroughput:0,maxThroughput:120,queueLength:0,estimatedWaitMinutes:0,isOpen:!1,isAccessible:!0}],sections:[{id:"sec-100",name:"Section 100-110",level:"lower",capacity:4200,currentOccupancy:3850,position:{x:25,y:30},gates:["gate-a","gate-d"],isAccessible:!0},{id:"sec-111",name:"Section 111-120",level:"lower",capacity:4200,currentOccupancy:3600,position:{x:75,y:30},gates:["gate-a","gate-b"],isAccessible:!0},{id:"sec-121",name:"Section 121-130",level:"lower",capacity:4200,currentOccupancy:4100,position:{x:75,y:70},gates:["gate-b","gate-c"],isAccessible:!0},{id:"sec-131",name:"Section 131-140",level:"lower",capacity:4200,currentOccupancy:2800,position:{x:25,y:70},gates:["gate-c","gate-d"],isAccessible:!0},{id:"sec-200",name:"Section 200-220",level:"middle",capacity:8400,currentOccupancy:7200,position:{x:30,y:35},gates:["gate-a","gate-d"],isAccessible:!1},{id:"sec-221",name:"Section 221-240",level:"middle",capacity:8400,currentOccupancy:6500,position:{x:70,y:35},gates:["gate-a","gate-b"],isAccessible:!1},{id:"sec-300",name:"Section 300-320",level:"upper",capacity:12e3,currentOccupancy:9800,position:{x:30,y:65},gates:["gate-c","gate-d"],isAccessible:!1},{id:"sec-321",name:"Section 321-340",level:"upper",capacity:12e3,currentOccupancy:11200,position:{x:70,y:65},gates:["gate-b","gate-c"],isAccessible:!1},{id:"sec-suites",name:"Luxury Suites",level:"suite",capacity:2500,currentOccupancy:1800,position:{x:50,y:50},gates:["gate-vip"],isAccessible:!0}],facilities:[{id:"food-1",name:"Jersey Eats",type:"food_court",position:{x:20,y:20},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:12,status:"busy",nearestGate:"gate-a"},{id:"food-2",name:"Stadium Grill",type:"food_court",position:{x:80,y:20},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:8,status:"available",nearestGate:"gate-b"},{id:"food-3",name:"Global Flavors",type:"food_court",position:{x:20,y:80},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:5,status:"available",nearestGate:"gate-c"},{id:"food-4",name:"Quick Bites",type:"food_court",position:{x:80,y:80},level:"Upper",isAccessible:!1,isOpen:!0,waitTimeMinutes:18,status:"busy",nearestGate:"gate-c"},{id:"rest-1",name:"Restroom North A",type:"restroom",position:{x:35,y:15},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:4,status:"busy",nearestGate:"gate-a"},{id:"rest-2",name:"Restroom North B",type:"restroom",position:{x:65,y:15},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:2,status:"available",nearestGate:"gate-a"},{id:"rest-3",name:"Restroom East",type:"restroom",position:{x:88,y:50},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:6,status:"busy",nearestGate:"gate-b"},{id:"rest-4",name:"Restroom South",type:"restroom",position:{x:50,y:85},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:1,status:"available",nearestGate:"gate-c"},{id:"rest-5",name:"Restroom West",type:"restroom",position:{x:12,y:50},level:"Main",isAccessible:!1,isOpen:!1,waitTimeMinutes:0,status:"maintenance",nearestGate:"gate-d"},{id:"med-1",name:"Medical Station Alpha",type:"first_aid",position:{x:15,y:40},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:0,status:"available",nearestGate:"gate-d"},{id:"med-2",name:"Medical Station Bravo",type:"first_aid",position:{x:85,y:40},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:3,status:"busy",nearestGate:"gate-b"},{id:"info-1",name:"Fan Information Center",type:"information",position:{x:50,y:10},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:2,status:"available",nearestGate:"gate-a"},{id:"merch-1",name:"FIFA Official Store",type:"merchandise",position:{x:40,y:90},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:15,status:"busy",nearestGate:"gate-c"},{id:"atm-1",name:"ATM Station",type:"atm",position:{x:60,y:90},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:3,status:"available",nearestGate:"gate-c"},{id:"prayer-1",name:"Multi-Faith Room",type:"prayer_room",position:{x:10,y:70},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:0,status:"available",nearestGate:"gate-d"},{id:"family-1",name:"Family Zone",type:"family_zone",position:{x:90,y:70},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:0,status:"available",nearestGate:"gate-accessible"},{id:"water-1",name:"Hydration Station North",type:"water_station",position:{x:50,y:18},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:1,status:"available",nearestGate:"gate-a"},{id:"water-2",name:"Hydration Station South",type:"water_station",position:{x:50,y:82},level:"Main",isAccessible:!0,isOpen:!0,waitTimeMinutes:0,status:"available",nearestGate:"gate-c"}],parkingLots:[{id:"lot-a",name:"Lot A (East)",capacity:8e3,occupied:6200,type:"general",distanceToGateMinutes:8,nearestGate:"gate-b",priceUSD:60},{id:"lot-b",name:"Lot B (West)",capacity:6e3,occupied:5800,type:"general",distanceToGateMinutes:12,nearestGate:"gate-d",priceUSD:45},{id:"lot-c",name:"Lot C (South)",capacity:4e3,occupied:2100,type:"general",distanceToGateMinutes:15,nearestGate:"gate-c",priceUSD:35},{id:"lot-vip",name:"VIP Parking",capacity:500,occupied:380,type:"vip",distanceToGateMinutes:3,nearestGate:"gate-vip",priceUSD:150},{id:"lot-ada",name:"Accessible Parking",capacity:400,occupied:210,type:"accessible",distanceToGateMinutes:4,nearestGate:"gate-accessible",priceUSD:40},{id:"lot-staff",name:"Staff Parking",capacity:800,occupied:640,type:"staff",distanceToGateMinutes:5,nearestGate:"gate-staff",priceUSD:0}]}],Kl=_w[0],yw={getDefaultStadium:()=>ct(Kl),getStadiumById:s=>ct(Kl)};function Yi(){const[s,e]=j.useState(null),[t,n]=j.useState(!0),[i,a]=j.useState(null);return j.useEffect(()=>{let c=!0;return yw.getDefaultStadium().then(l=>{c&&(e(l),n(!1))}).catch(l=>{c&&(a(l),n(!1))}),()=>{c=!1}},[]),{stadium:s,loading:t,error:i}}const gd=Date.now(),vw=6e4,ww={timestamp:gd,totalOccupancy:68450,capacityPercentage:.83,entryRate:142,exitRate:28,avgQueueMinutes:6.2,peakQueueMinutes:14,densityByZone:[{zoneId:"north",zoneName:"North Stand",density:.78,congestionLevel:"moderate",trend:"increasing",personCount:14200},{zoneId:"south",zoneName:"South Stand",density:.62,congestionLevel:"low",trend:"stable",personCount:11800},{zoneId:"east",zoneName:"East Stand",density:.91,congestionLevel:"high",trend:"increasing",personCount:18500},{zoneId:"west",zoneName:"West Stand",density:.72,congestionLevel:"moderate",trend:"decreasing",personCount:13200},{zoneId:"concourse-n",zoneName:"North Concourse",density:.55,congestionLevel:"low",trend:"stable",personCount:3400},{zoneId:"concourse-s",zoneName:"South Concourse",density:.38,congestionLevel:"low",trend:"decreasing",personCount:2100},{zoneId:"concourse-e",zoneName:"East Concourse",density:.82,congestionLevel:"high",trend:"increasing",personCount:4200},{zoneId:"concourse-w",zoneName:"West Concourse",density:.45,congestionLevel:"low",trend:"stable",personCount:2800}],predictions:[{timeOffset:10,predictedOccupancy:72100,predictedEntryRate:160,predictedExitRate:25,confidence:.92,reasoning:"Match kickoff in 15 minutes. Historical data shows 18% entry surge in final 20 minutes before kickoff."},{timeOffset:20,predictedOccupancy:78300,predictedEntryRate:95,predictedExitRate:12,confidence:.87,reasoning:"Near-capacity as match starts. Entry rate normalizes post-kickoff. Minimal exits expected during first 15 minutes of play."},{timeOffset:60,predictedOccupancy:79800,predictedEntryRate:15,predictedExitRate:8,confidence:.82,reasoning:"Steady state during first half. Minor exits for concourse facilities. Late arrivals trickle in."},{timeOffset:75,predictedOccupancy:74200,predictedEntryRate:5,predictedExitRate:85,confidence:.78,reasoning:"Half-time break. Significant movement to concourse for food and restrooms. Expect 7-8% temporary density shift."},{timeOffset:120,predictedOccupancy:62500,predictedEntryRate:2,predictedExitRate:280,confidence:.74,reasoning:"Post-match exodus beginning. Peak exit rate expected 5-10 minutes after final whistle. Gate C and D will see highest volume."}]},Ew=Array.from({length:24},(s,e)=>{const t=(23-e)*5,n=25e3+e*1800+Math.random()*1200,i=Math.max(20,180-e*3+Math.random()*30),a=Math.max(5,10+Math.random()*15);return{timestamp:gd-t*vw,occupancy:Math.round(Math.min(n,82500)),entryRate:Math.round(i),exitRate:Math.round(a)}}),bw=[{gateId:"gate-a",gateName:"Gate A",currentLength:320,estimatedWaitMinutes:8,throughputPerMinute:42,trend:"stable"},{gateId:"gate-b",gateName:"Gate B",currentLength:580,estimatedWaitMinutes:14,throughputPerMinute:65,trend:"increasing"},{gateId:"gate-c",gateName:"Gate C",currentLength:120,estimatedWaitMinutes:3,throughputPerMinute:28,trend:"decreasing"},{gateId:"gate-d",gateName:"Gate D",currentLength:85,estimatedWaitMinutes:2,throughputPerMinute:35,trend:"stable"},{gateId:"gate-vip",gateName:"VIP",currentLength:15,estimatedWaitMinutes:1,throughputPerMinute:12,trend:"stable"},{gateId:"gate-accessible",gateName:"Accessible",currentLength:10,estimatedWaitMinutes:1,throughputPerMinute:8,trend:"stable"}],Vr={getCurrentMetrics:()=>ct(ww),getHistory:()=>ct(Ew),getQueueMetrics:()=>ct(bw)};function _d(){const[s,e]=j.useState(null),[t,n]=j.useState([]),[i,a]=j.useState([]),[c,l]=j.useState(!0),[h,m]=j.useState(null);return j.useEffect(()=>{let f=!0;return Promise.all([Vr.getCurrentMetrics(),Vr.getHistory(),Vr.getQueueMetrics()]).then(([w,_,S])=>{f&&(e(w),n(_),a(S),l(!1))}).catch(w=>{f&&(m(w),l(!1))}),()=>{f=!1}},[]),{metrics:s,history:t,queue:i,loading:c,error:h}}const Tw={USA:{code:"USA",name:"United States",flag:"🇺🇸",group:"A"},MEX:{code:"MEX",name:"Mexico",flag:"🇲🇽",group:"A"},CAN:{code:"CAN",name:"Canada",flag:"🇨🇦",group:"A"},COL:{code:"COL",name:"Colombia",flag:"🇨🇴",group:"A"},BRA:{code:"BRA",name:"Brazil",flag:"🇧🇷",group:"B"},ARG:{code:"ARG",name:"Argentina",flag:"🇦🇷",group:"B"},FRA:{code:"FRA",name:"France",flag:"🇫🇷",group:"B"},JPN:{code:"JPN",name:"Japan",flag:"🇯🇵",group:"B"},GER:{code:"GER",name:"Germany",flag:"🇩🇪",group:"C"},ESP:{code:"ESP",name:"Spain",flag:"🇪🇸",group:"C"},ENG:{code:"ENG",name:"England",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",group:"C"},KOR:{code:"KOR",name:"South Korea",flag:"🇰🇷",group:"C"},POR:{code:"POR",name:"Portugal",flag:"🇵🇹",group:"D"},NED:{code:"NED",name:"Netherlands",flag:"🇳🇱",group:"D"},URU:{code:"URU",name:"Uruguay",flag:"🇺🇾",group:"D"},SEN:{code:"SEN",name:"Senegal",flag:"🇸🇳",group:"D"},ITA:{code:"ITA",name:"Italy",flag:"🇮🇹",group:"E"},CRO:{code:"CRO",name:"Croatia",flag:"🇭🇷",group:"E"},NGA:{code:"NGA",name:"Nigeria",flag:"🇳🇬",group:"E"},AUS:{code:"AUS",name:"Australia",flag:"🇦🇺",group:"E"},MAR:{code:"MAR",name:"Morocco",flag:"🇲🇦",group:"F"},BEL:{code:"BEL",name:"Belgium",flag:"🇧🇪",group:"F"},CHI:{code:"CHI",name:"Chile",flag:"🇨🇱",group:"F"},SUI:{code:"SUI",name:"Switzerland",flag:"🇨🇭",group:"F"},DEN:{code:"DEN",name:"Denmark",flag:"🇩🇰",group:"G"},WAL:{code:"WAL",name:"Wales",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",group:"G"},ECU:{code:"ECU",name:"Ecuador",flag:"🇪🇨",group:"G"},TUN:{code:"TUN",name:"Tunisia",flag:"🇹🇳",group:"G"},POL:{code:"POL",name:"Poland",flag:"🇵🇱",group:"H"},GHA:{code:"GHA",name:"Ghana",flag:"🇬🇭",group:"H"},IRN:{code:"IRN",name:"Iran",flag:"🇮🇷",group:"H"},CRC:{code:"CRC",name:"Costa Rica",flag:"🇨🇷",group:"H"}};function X(s){return Tw[s]}const We=new Date("2026-06-11T00:00:00Z").getTime(),$e=864e5,Ve=36e5,yd=[{id:"m01",matchNumber:1,homeTeam:X("USA"),awayTeam:X("COL"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+16*Ve,status:"completed",group:"A",stage:"group",homeScore:2,awayScore:1,attendance:82102},{id:"m02",matchNumber:2,homeTeam:X("MEX"),awayTeam:X("CAN"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+$e+19*Ve,status:"completed",group:"A",stage:"group",homeScore:1,awayScore:1,attendance:78540},{id:"m09",matchNumber:9,homeTeam:X("USA"),awayTeam:X("CAN"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+4*$e+16*Ve,status:"completed",group:"A",stage:"group",homeScore:3,awayScore:0,attendance:82500},{id:"m10",matchNumber:10,homeTeam:X("COL"),awayTeam:X("MEX"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+4*$e+19*Ve,status:"completed",group:"A",stage:"group",homeScore:2,awayScore:2,attendance:79100},{id:"m17",matchNumber:17,homeTeam:X("CAN"),awayTeam:X("COL"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+8*$e+16*Ve,status:"completed",group:"A",stage:"group",homeScore:0,awayScore:1,attendance:71400},{id:"m18",matchNumber:18,homeTeam:X("MEX"),awayTeam:X("USA"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+8*$e+16*Ve,status:"completed",group:"A",stage:"group",homeScore:1,awayScore:2,attendance:82500},{id:"m03",matchNumber:3,homeTeam:X("BRA"),awayTeam:X("JPN"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+$e+13*Ve,status:"completed",group:"B",stage:"group",homeScore:3,awayScore:1,attendance:82500},{id:"m04",matchNumber:4,homeTeam:X("ARG"),awayTeam:X("FRA"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+$e+16*Ve,status:"completed",group:"B",stage:"group",homeScore:2,awayScore:2,attendance:82500},{id:"m05",matchNumber:5,homeTeam:X("GER"),awayTeam:X("KOR"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+2*$e+13*Ve,status:"completed",group:"C",stage:"group",homeScore:2,awayScore:0,attendance:76200},{id:"m06",matchNumber:6,homeTeam:X("ESP"),awayTeam:X("ENG"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:We+2*$e+19*Ve,status:"completed",group:"C",stage:"group",homeScore:1,awayScore:1,attendance:82500},{id:"m25",matchNumber:25,homeTeam:X("BRA"),awayTeam:X("GER"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:Date.now()-2700*1e3,status:"live",group:"R16",stage:"round_of_16",homeScore:1,awayScore:0,attendance:null},{id:"m26",matchNumber:26,homeTeam:X("ARG"),awayTeam:X("NED"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:Date.now()+3*Ve,status:"scheduled",group:"R16",stage:"round_of_16",homeScore:null,awayScore:null,attendance:null},{id:"m27",matchNumber:27,homeTeam:X("FRA"),awayTeam:X("POR"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:Date.now()+$e+16*Ve,status:"scheduled",group:"R16",stage:"round_of_16",homeScore:null,awayScore:null,attendance:null},{id:"m28",matchNumber:28,homeTeam:X("ESP"),awayTeam:X("USA"),stadiumId:"metlife",stadiumName:"MetLife Stadium",city:"East Rutherford",datetime:Date.now()+$e+19*Ve,status:"scheduled",group:"R16",stage:"round_of_16",homeScore:null,awayScore:null,attendance:null}];function Iw(){return yd.filter(s=>s.status==="live"||s.status==="halftime")}function xw(){return yd.filter(s=>s.status==="scheduled").sort((s,e)=>s.datetime-e.datetime)}const Ql={getLiveMatches:()=>ct(Iw()),getUpcomingMatches:()=>ct(xw())};function Mi(s="live"){const[e,t]=j.useState([]),[n,i]=j.useState(!0),[a,c]=j.useState(null);return j.useEffect(()=>{let l=!0;return i(!0),(s==="live"?Ql.getLiveMatches():Ql.getUpcomingMatches()).then(m=>{l&&(t(m),i(!1))}).catch(m=>{l&&(c(m),i(!1))}),()=>{l=!1}},[s]),{matches:e,loading:n,error:a}}function rs({size:s=24,className:e="",label:t="Loading..."}){return o.jsxs("div",{className:`spinner-container ${e}`,children:[o.jsx(B0,{size:s,className:"spinner-icon"}),t&&o.jsx("span",{className:"spinner-label",children:t})]})}function Jl(){const{user:s}=is(),[e,t]=j.useState(Date.now()),{stadium:n,loading:i}=Yi(),{metrics:a,loading:c}=_d(),{matches:l,loading:h}=Mi("live"),{matches:m,loading:f}=Mi("upcoming"),w=i||c||h||f;return j.useEffect(()=>{const _=setInterval(()=>t(Date.now()),1e3);return()=>clearInterval(_)},[]),w||!n||!a?o.jsx(rs,{}):o.jsxs("div",{className:"ops-dashboard",children:[l.length>0&&o.jsxs("div",{className:"ops-dashboard__live-banner",role:"region","aria-label":"Live match",children:[o.jsx(ao,{status:"online",pulse:!0}),o.jsx("span",{className:"ops-dashboard__live-text",children:"LIVE"}),l.map(_=>o.jsxs("span",{className:"ops-dashboard__live-match",children:[o.jsxs("span",{className:"ops-dashboard__live-team",children:[_.homeTeam.flag," ",_.homeTeam.code]}),o.jsxs("span",{className:"ops-dashboard__live-score",children:[_.homeScore," – ",_.awayScore]}),o.jsxs("span",{className:"ops-dashboard__live-team",children:[_.awayTeam.code," ",_.awayTeam.flag]}),o.jsx(Z,{variant:"accent",size:"sm",children:_.stage.replace("_"," ").toUpperCase()})]},_.id))]}),o.jsxs("section",{className:"ops-dashboard__metrics stagger-children","aria-label":"Key metrics",children:[o.jsx(De,{label:"Total Occupancy",value:ma(a.totalOccupancy),change:5.2,changeLabel:"vs 10m ago",icon:o.jsx(ji,{size:15}),variant:a.capacityPercentage>.9?"danger":a.capacityPercentage>.75?"warning":"success"}),o.jsx(De,{label:"Capacity",value:`${Math.round(a.capacityPercentage*100)}%`,change:3.1,changeLabel:"vs 10m ago",icon:o.jsx(En,{size:15}),variant:"accent"}),o.jsx(De,{label:"Entry Rate",value:`${a.entryRate}/min`,change:-8.4,changeLabel:"vs 10m ago",icon:o.jsx(Pi,{size:15})}),o.jsx(De,{label:"Avg Queue",value:`${a.avgQueueMinutes.toFixed(0)} min`,change:12.5,changeLabel:"vs 10m ago",icon:o.jsx(jn,{size:15}),variant:a.avgQueueMinutes>10?"danger":a.avgQueueMinutes>5?"warning":"success"}),o.jsx(De,{label:"Active Incidents",value:"6",change:0,icon:o.jsx(Rt,{size:15}),variant:"danger"}),o.jsx(De,{label:"Staff On Duty",value:"342",change:0,icon:o.jsx(cd,{size:15}),variant:"success"})]}),o.jsxs("div",{className:"ops-dashboard__grid",children:[o.jsxs("div",{className:"ops-dashboard__col ops-dashboard__col--main",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Gate Status",subtitle:"Real-time throughput and queue length",icon:o.jsx(Pi,{size:16})}),o.jsxs("div",{className:"ops-dashboard__gates",role:"table","aria-label":"Gate congestion status",children:[o.jsxs("div",{className:"ops-dashboard__gates-header",role:"row",children:[o.jsx("span",{role:"columnheader",children:"Gate"}),o.jsx("span",{role:"columnheader",children:"Queue"}),o.jsx("span",{role:"columnheader",children:"Wait"}),o.jsx("span",{role:"columnheader",children:"Rate"}),o.jsx("span",{role:"columnheader",children:"Status"})]}),n.gates.filter(_=>_.type!=="emergency").map(_=>o.jsxs("div",{className:"ops-dashboard__gate-row",role:"row",children:[o.jsxs("span",{className:"ops-dashboard__gate-name",role:"cell",children:[o.jsx("span",{className:"ops-dashboard__gate-dot",style:{background:hn(_.congestionLevel)}}),_.name]}),o.jsx("span",{className:"ops-dashboard__gate-value",role:"cell",children:_.queueLength}),o.jsxs("span",{className:"ops-dashboard__gate-value",role:"cell",children:[_.estimatedWaitMinutes," min"]}),o.jsxs("span",{className:"ops-dashboard__gate-value",role:"cell",children:[o.jsx("span",{className:"ops-dashboard__gate-bar-bg",children:o.jsx("span",{className:"ops-dashboard__gate-bar",style:{width:`${_.currentThroughput/_.maxThroughput*100}%`,background:hn(_.congestionLevel)}})}),_.currentThroughput,"/",_.maxThroughput]}),o.jsx("span",{role:"cell",children:o.jsx(Z,{variant:_.isOpen?"success":"default",size:"sm",children:_.isOpen?"Open":"Closed"})})]},_.id))]})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Zone Density",subtitle:"Real-time crowd distribution",icon:o.jsx(ji,{size:16})}),o.jsx("div",{className:"ops-dashboard__zones",children:a.densityByZone.map(_=>o.jsxs("div",{className:"ops-dashboard__zone",children:[o.jsxs("div",{className:"ops-dashboard__zone-header",children:[o.jsx("span",{className:"ops-dashboard__zone-name",children:_.zoneName}),o.jsxs(Z,{variant:_.congestionLevel==="high"?"danger":_.congestionLevel==="moderate"?"warning":"success",size:"sm",children:[Math.round(_.density*100),"%"]})]}),o.jsx("div",{className:"ops-dashboard__zone-bar-bg",children:o.jsx("div",{className:"ops-dashboard__zone-bar",style:{width:`${_.density*100}%`,background:hn(_.congestionLevel)},role:"progressbar","aria-valuenow":Math.round(_.density*100),"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${_.zoneName} density: ${Math.round(_.density*100)}%`})}),o.jsxs("div",{className:"ops-dashboard__zone-meta",children:[o.jsxs("span",{children:[ma(_.personCount)," people"]}),o.jsxs("span",{className:`ops-dashboard__zone-trend ops-dashboard__zone-trend--${_.trend}`,children:[_.trend==="increasing"?"↑":_.trend==="decreasing"?"↓":"→"," ",_.trend]})]})]},_.zoneId))})]})]}),o.jsxs("div",{className:"ops-dashboard__col ops-dashboard__col--side",children:[o.jsx(G,{padding:"md",children:o.jsx(fd,{})}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Upcoming",subtitle:"Next matches at this venue"}),o.jsx("div",{className:"ops-dashboard__upcoming",children:m.slice(0,3).map(_=>o.jsxs("div",{className:"ops-dashboard__match",children:[o.jsxs("div",{className:"ops-dashboard__match-teams",children:[o.jsxs("span",{children:[_.homeTeam.flag," ",_.homeTeam.code]}),o.jsx("span",{className:"ops-dashboard__match-vs",children:"vs"}),o.jsxs("span",{children:[_.awayTeam.code," ",_.awayTeam.flag]})]}),o.jsxs("div",{className:"ops-dashboard__match-meta",children:[o.jsx("span",{className:"ops-dashboard__match-countdown",children:pd(_.datetime)}),o.jsx("span",{className:"ops-dashboard__match-time",children:bn(_.datetime)})]})]},_.id))})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Conditions",subtitle:"Current weather",icon:o.jsx(sw,{size:16})}),o.jsxs("div",{className:"ops-dashboard__weather",children:[o.jsxs("div",{className:"ops-dashboard__weather-main",children:[o.jsx("span",{className:"ops-dashboard__weather-temp",children:"29°C"}),o.jsx("span",{className:"ops-dashboard__weather-desc",children:"Partly Cloudy"})]}),o.jsxs("div",{className:"ops-dashboard__weather-details",children:[o.jsxs("span",{children:[o.jsx(aw,{size:12})," Wind: 12 km/h"]}),o.jsx("span",{children:"💧 Humidity: 62%"}),o.jsx("span",{children:"☀ UV Index: 7 (High)"})]})]})]})]})]})]})}const Yl={getAllIncidents:()=>ct(dd),getActiveIncidents:()=>ct(md())};function vd(s=!1){const[e,t]=j.useState([]),[n,i]=j.useState(!0),[a,c]=j.useState(null);return j.useEffect(()=>{let l=!0;return i(!0),(s?Yl.getActiveIncidents():Yl.getAllIncidents()).then(m=>{l&&(t(m),i(!1))}).catch(m=>{l&&(c(m),i(!1))}),()=>{l=!1}},[s]),{incidents:e,loading:n,error:a}}function Aw(){const{incidents:s,loading:e}=vd(!0),{stadium:t,loading:n}=Yi();if(e||n||!t)return o.jsx(rs,{});const i=s.filter(a=>a.priority==="high"||a.priority==="critical");return o.jsxs("div",{className:"security-dashboard",children:[i.length>0&&o.jsxs("div",{className:"security-dashboard__alert-banner",children:[o.jsx(Rt,{size:18}),o.jsxs("span",{className:"security-dashboard__alert-text",children:[o.jsx("strong",{children:"CRITICAL:"})," ",i.length," high priority incidents require immediate attention."]})]}),o.jsxs("section",{className:"security-dashboard__metrics stagger-children",children:[o.jsx(De,{label:"Active Incidents",value:s.length,change:2,icon:o.jsx(Rt,{size:15}),variant:s.length>5?"danger":"warning"}),o.jsx(De,{label:"Security Personnel",value:"142",change:0,icon:o.jsx(Wt,{size:15}),variant:"success"}),o.jsx(De,{label:"Active Cameras",value:"415 / 420",icon:o.jsx(rw,{size:15}),variant:"warning"}),o.jsx(De,{label:"Response Time",value:"1.4 min",change:-.2,changeLabel:"vs 10m ago",icon:o.jsx(En,{size:15}),variant:"success"})]}),o.jsxs("div",{className:"security-dashboard__grid",children:[o.jsxs("div",{className:"security-dashboard__col security-dashboard__col--main",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Restricted Zones Monitoring",subtitle:"Access control point status",icon:o.jsx(rd,{size:16})}),o.jsxs("div",{className:"security-dashboard__zones",children:[o.jsxs("div",{className:"security-dashboard__zone-row",children:[o.jsxs("div",{className:"security-dashboard__zone-info",children:[o.jsx(Wt,{size:16,className:"security-dashboard__zone-icon"}),o.jsxs("div",{children:[o.jsx("span",{className:"security-dashboard__zone-name",children:"Locker Rooms & Tunnel"}),o.jsx("span",{className:"security-dashboard__zone-meta",children:"Level 0 · Access Level: Red"})]})]}),o.jsx(Z,{variant:"success",size:"sm",children:"SECURE"})]}),o.jsxs("div",{className:"security-dashboard__zone-row",children:[o.jsxs("div",{className:"security-dashboard__zone-info",children:[o.jsx(Wt,{size:16,className:"security-dashboard__zone-icon"}),o.jsxs("div",{children:[o.jsx("span",{className:"security-dashboard__zone-name",children:"Media Center"}),o.jsx("span",{className:"security-dashboard__zone-meta",children:"Level 1 · Access Level: Yellow"})]})]}),o.jsx(Z,{variant:"success",size:"sm",children:"SECURE"})]}),o.jsxs("div",{className:"security-dashboard__zone-row",children:[o.jsxs("div",{className:"security-dashboard__zone-info",children:[o.jsx(Rt,{size:16,className:"security-dashboard__zone-icon security-dashboard__zone-icon--alert"}),o.jsxs("div",{children:[o.jsx("span",{className:"security-dashboard__zone-name",children:"VIP Hospitality Suites"}),o.jsx("span",{className:"security-dashboard__zone-meta",children:"Level 3 · Access Level: VIP"})]})]}),o.jsx(Z,{variant:"warning",size:"sm",children:"UNAUTHORIZED ACCESS ATTEMPT (2m ago)"})]}),o.jsxs("div",{className:"security-dashboard__zone-row",children:[o.jsxs("div",{className:"security-dashboard__zone-info",children:[o.jsx(Wt,{size:16,className:"security-dashboard__zone-icon"}),o.jsxs("div",{children:[o.jsx("span",{className:"security-dashboard__zone-name",children:"Broadcast Control Room"}),o.jsx("span",{className:"security-dashboard__zone-meta",children:"Level 4 · Access Level: Red"})]})]}),o.jsx(Z,{variant:"success",size:"sm",children:"SECURE"})]})]})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Screening Throughput",subtitle:"Metal detector and bag check status",icon:o.jsx(no,{size:16})}),o.jsx("div",{className:"security-dashboard__screening",children:t.gates.filter(a=>a.type==="general").map(a=>o.jsxs("div",{className:"security-dashboard__screening-item",children:[o.jsxs("div",{className:"security-dashboard__screening-header",children:[o.jsxs("span",{children:[a.name," Checkpoint"]}),o.jsxs("span",{className:"security-dashboard__screening-rate",children:[Math.round(a.currentThroughput*.9),"/min cleared"]})]}),o.jsx("div",{className:"security-dashboard__screening-bar-bg",children:o.jsx("div",{className:"security-dashboard__screening-bar",style:{width:`${a.currentThroughput/a.maxThroughput*100}%`,background:a.congestionLevel==="high"?"var(--color-warning)":"var(--color-success)"}})}),o.jsxs("div",{className:"security-dashboard__screening-meta",children:[o.jsx("span",{children:"Scanner Status: All Operational"}),a.congestionLevel==="high"&&o.jsx("span",{className:"security-dashboard__screening-alert",children:"High load"})]})]},a.id))})]})]}),o.jsxs("div",{className:"security-dashboard__col security-dashboard__col--side",children:[o.jsx(G,{padding:"md",children:o.jsx(fd,{})}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Radio Channels",subtitle:"Live comms status",icon:o.jsx(Q0,{size:16})}),o.jsxs("div",{className:"security-dashboard__comms",children:[o.jsxs("div",{className:"security-dashboard__comm-channel",children:[o.jsx("span",{className:"security-dashboard__comm-name",children:"Channel 1 (Main Security)"}),o.jsxs("span",{className:"security-dashboard__comm-status",children:[o.jsx("span",{className:"status-dot status-dot--active"})," Active"]})]}),o.jsxs("div",{className:"security-dashboard__comm-channel",children:[o.jsx("span",{className:"security-dashboard__comm-name",children:"Channel 2 (Medical)"}),o.jsxs("span",{className:"security-dashboard__comm-status",children:[o.jsx("span",{className:"status-dot status-dot--active"})," Active"]})]}),o.jsxs("div",{className:"security-dashboard__comm-channel",children:[o.jsx("span",{className:"security-dashboard__comm-name",children:"Channel 3 (Crowd Control)"}),o.jsxs("span",{className:"security-dashboard__comm-status",children:[o.jsx("span",{className:"status-dot status-dot--idle"})," Idle"]})]}),o.jsxs("div",{className:"security-dashboard__comm-channel",children:[o.jsx("span",{className:"security-dashboard__comm-name",children:"Channel 4 (Emergency)"}),o.jsxs("span",{className:"security-dashboard__comm-status",children:[o.jsx("span",{className:"status-dot status-dot--idle"})," Idle"]})]})]})]})]})]})]})}const we=Le.memo(function({variant:e="primary",size:t="md",loading:n=!1,icon:i,iconPosition:a="left",fullWidth:c=!1,disabled:l,children:h,className:m="",...f}){return o.jsxs("button",{className:`btn btn--${e} btn--${t} ${c?"btn--full":""} ${n?"btn--loading":""} ${m}`,disabled:l||n,"aria-busy":n,...f,children:[n&&o.jsx("span",{className:"btn__spinner","aria-hidden":"true",children:o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:o.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"28",strokeDashoffset:"8"})})}),i&&a==="left"&&!n&&o.jsx("span",{className:"btn__icon",children:i}),h&&o.jsx("span",{className:"btn__label",children:h}),i&&a==="right"&&!n&&o.jsx("span",{className:"btn__icon",children:i})]})});function Sw(){const{matches:s,loading:e}=Mi("upcoming"),{stadium:t,loading:n}=Yi();if(e||n||!t)return o.jsx(rs,{});const i=s[0],a="Section 114",c="Gate B",l=t.facilities.filter(h=>h.nearestGate.toLowerCase().includes((c==null?void 0:c.toLowerCase().split(" ")[1])||"")||h.nearestGate==="gate-b").slice(0,4);return o.jsxs("div",{className:"spectator-dashboard",children:[o.jsx("div",{className:"spectator-dashboard__hero",children:o.jsxs("div",{className:"spectator-dashboard__hero-content",children:[o.jsx(Z,{variant:"accent",size:"sm",children:"Your Next Match"}),o.jsxs("h2",{className:"spectator-dashboard__hero-title",children:[i==null?void 0:i.homeTeam.name," vs ",i==null?void 0:i.awayTeam.name]}),o.jsxs("div",{className:"spectator-dashboard__hero-meta",children:[o.jsx("span",{className:"spectator-dashboard__hero-countdown",children:i?pd(i.datetime):""}),o.jsxs("span",{className:"spectator-dashboard__hero-time",children:["Kickoff at ",i?bn(i.datetime):""]})]}),o.jsxs("div",{className:"spectator-dashboard__hero-ticket",children:[o.jsx(nw,{size:16}),o.jsxs("span",{children:[c," · ",a," · Row 12 · Seat 4"]})]})]})}),o.jsxs("div",{className:"spectator-dashboard__grid",children:[o.jsxs("div",{className:"spectator-dashboard__col spectator-dashboard__col--main",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Quick Navigation",subtitle:`From your seat in ${a}`,icon:o.jsx(io,{size:16})}),o.jsxs("div",{className:"spectator-dashboard__nav-grid",children:[o.jsxs("button",{className:"spectator-dashboard__nav-btn",children:[o.jsx(ql,{size:24,className:"spectator-dashboard__nav-icon"}),o.jsx("span",{children:"Food & Drink"}),o.jsx("span",{className:"spectator-dashboard__nav-wait",children:"3 min wait"})]}),o.jsxs("button",{className:"spectator-dashboard__nav-btn",children:[o.jsx(ha,{size:24,className:"spectator-dashboard__nav-icon"}),o.jsx("span",{children:"Restrooms"}),o.jsx("span",{className:"spectator-dashboard__nav-wait",children:"1 min wait"})]}),o.jsxs("button",{className:"spectator-dashboard__nav-btn",children:[o.jsx(id,{size:24,className:"spectator-dashboard__nav-icon"}),o.jsx("span",{children:"Merchandise"}),o.jsx("span",{className:"spectator-dashboard__nav-wait",children:"12 min wait"})]}),o.jsxs("button",{className:"spectator-dashboard__nav-btn",children:[o.jsx(Lt,{size:24,className:"spectator-dashboard__nav-icon"}),o.jsx("span",{children:"My Exit Route"}),o.jsx("span",{className:"spectator-dashboard__nav-wait spectator-dashboard__nav-wait--good",children:"Optimal"})]})]})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Nearby Facilities",subtitle:`Closest to ${c}`}),o.jsx("div",{className:"spectator-dashboard__facilities",children:l.map((h,m)=>o.jsxs("div",{className:"spectator-dashboard__facility",children:[o.jsx("div",{className:"spectator-dashboard__facility-icon",children:h.type==="food_court"?o.jsx(ql,{size:18}):h.type==="restroom"?o.jsx(ha,{size:18}):o.jsx(ad,{size:18})}),o.jsxs("div",{className:"spectator-dashboard__facility-info",children:[o.jsx("span",{className:"spectator-dashboard__facility-name",children:h.name}),o.jsx("span",{className:"spectator-dashboard__facility-meta",children:h.level})]}),o.jsx("div",{className:"spectator-dashboard__facility-status",children:o.jsxs(Z,{variant:h.waitTimeMinutes>10?"warning":"success",size:"sm",children:[h.waitTimeMinutes," min wait"]})})]},h.id||m))})]})]}),o.jsxs("div",{className:"spectator-dashboard__col spectator-dashboard__col--side",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Getting Home",icon:o.jsx(Lt,{size:16})}),o.jsxs("div",{className:"spectator-dashboard__transport",children:[o.jsxs("div",{className:"spectator-dashboard__transport-item",children:[o.jsx("span",{className:"spectator-dashboard__transport-mode",children:"🚆 Metro / Train"}),o.jsx("span",{className:"spectator-dashboard__transport-status",children:"Normal service · Every 10m"})]}),o.jsxs("div",{className:"spectator-dashboard__transport-item",children:[o.jsx("span",{className:"spectator-dashboard__transport-mode",children:"🚌 Shuttle Bus"}),o.jsx("span",{className:"spectator-dashboard__transport-status",children:"Delays expected post-match"})]}),o.jsxs("div",{className:"spectator-dashboard__transport-item",children:[o.jsx("span",{className:"spectator-dashboard__transport-mode",children:"🚗 Rideshare (Lot D)"}),o.jsx("span",{className:"spectator-dashboard__transport-status",children:"Surge pricing active"})]})]}),o.jsx(we,{variant:"secondary",size:"sm",style:{marginTop:"var(--space-4)",width:"100%"},children:"Plan Exit Route"})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Event Schedule",icon:o.jsx(so,{size:16})}),o.jsxs("div",{className:"spectator-dashboard__schedule",children:[o.jsxs("div",{className:"spectator-dashboard__schedule-item",children:[o.jsx("span",{className:"spectator-dashboard__schedule-time",children:"18:00"}),o.jsx("span",{className:"spectator-dashboard__schedule-desc",children:"Gates Open"})]}),o.jsxs("div",{className:"spectator-dashboard__schedule-item",children:[o.jsx("span",{className:"spectator-dashboard__schedule-time",children:"19:15"}),o.jsx("span",{className:"spectator-dashboard__schedule-desc",children:"Pre-match Show"})]}),o.jsxs("div",{className:"spectator-dashboard__schedule-item spectator-dashboard__schedule-item--active",children:[o.jsx("span",{className:"spectator-dashboard__schedule-time",children:"20:00"}),o.jsx("span",{className:"spectator-dashboard__schedule-desc",children:"Kickoff"})]})]})]})]})]})]})}function Nw(){const s={name:"Alex Johnson",role:"Steward",zone:"East Stand - Section 114",shiftStart:"16:00",shiftEnd:"23:00"};return o.jsxs("div",{className:"staff-dashboard",children:[o.jsxs("div",{className:"staff-dashboard__profile",children:[o.jsxs("div",{className:"staff-dashboard__profile-info",children:[o.jsx("div",{className:"staff-dashboard__avatar",children:s.name.charAt(0)}),o.jsxs("div",{children:[o.jsx("h2",{className:"staff-dashboard__name",children:s.name}),o.jsx("p",{className:"staff-dashboard__role",children:s.role})]})]}),o.jsxs("div",{className:"staff-dashboard__status",children:[o.jsx(Z,{variant:"success",dot:!0,pulseDot:!0,children:"ON SHIFT"}),o.jsxs("span",{className:"staff-dashboard__time",children:[s.shiftStart," - ",s.shiftEnd]})]})]}),o.jsxs("div",{className:"staff-dashboard__grid",children:[o.jsxs("div",{className:"staff-dashboard__col staff-dashboard__col--main",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Current Assignment",icon:o.jsx(Lt,{size:16})}),o.jsxs("div",{className:"staff-dashboard__assignment",children:[o.jsxs("div",{className:"staff-dashboard__assignment-zone",children:[o.jsx("h3",{children:s.zone}),o.jsx(Z,{variant:"warning",size:"sm",children:"High Traffic Expected"})]}),o.jsx("p",{className:"staff-dashboard__assignment-desc",children:"Monitor aisles for clear passage. Direct spectators to Gate C for fastest exit. Be prepared to assist with wheelchair access at row 34."}),o.jsxs("div",{className:"staff-dashboard__assignment-actions",children:[o.jsx(we,{variant:"primary",children:"Report Issue"}),o.jsx(we,{variant:"secondary",children:"Request Break"})]})]})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Shift Tasks",icon:o.jsx(ew,{size:16})}),o.jsxs("div",{className:"staff-dashboard__tasks",children:[o.jsxs("label",{className:"staff-dashboard__task",children:[o.jsx("input",{type:"checkbox",defaultChecked:!0,className:"staff-dashboard__task-check"}),o.jsx("span",{className:"staff-dashboard__task-text",children:"Attend pre-match briefing (16:15)"})]}),o.jsxs("label",{className:"staff-dashboard__task",children:[o.jsx("input",{type:"checkbox",defaultChecked:!0,className:"staff-dashboard__task-check"}),o.jsx("span",{className:"staff-dashboard__task-text",children:"Collect radio and high-vis vest"})]}),o.jsxs("label",{className:"staff-dashboard__task",children:[o.jsx("input",{type:"checkbox",defaultChecked:!0,className:"staff-dashboard__task-check"}),o.jsx("span",{className:"staff-dashboard__task-text",children:"Inspect section 114 for debris/hazards"})]}),o.jsxs("label",{className:"staff-dashboard__task",children:[o.jsx("input",{type:"checkbox",className:"staff-dashboard__task-check"}),o.jsx("span",{className:"staff-dashboard__task-text",children:"Conduct post-match sweep"})]}),o.jsxs("label",{className:"staff-dashboard__task",children:[o.jsx("input",{type:"checkbox",className:"staff-dashboard__task-check"}),o.jsx("span",{className:"staff-dashboard__task-text",children:"Return equipment to logistics"})]})]})]})]}),o.jsxs("div",{className:"staff-dashboard__col staff-dashboard__col--side",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Team Messages",icon:o.jsx(q0,{size:16})}),o.jsxs("div",{className:"staff-dashboard__messages",children:[o.jsxs("div",{className:"staff-dashboard__message",children:[o.jsx("span",{className:"staff-dashboard__message-sender",children:"Supervisor Ops"}),o.jsx("p",{className:"staff-dashboard__message-text",children:"All East Stand stewards, please ensure vomitories remain clear during halftime."}),o.jsx("span",{className:"staff-dashboard__message-time",children:"10 mins ago"})]}),o.jsxs("div",{className:"staff-dashboard__message",children:[o.jsx("span",{className:"staff-dashboard__message-sender",children:"Central Control"}),o.jsx("p",{className:"staff-dashboard__message-text",children:"Gate B screening is delayed. Direct overflows to Gate C."}),o.jsx("span",{className:"staff-dashboard__message-time",children:"25 mins ago"})]})]})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Support Contacts",icon:o.jsx(cd,{size:16})}),o.jsxs("div",{className:"staff-dashboard__contacts",children:[o.jsxs("div",{className:"staff-dashboard__contact",children:[o.jsx("span",{children:"Supervisor (East)"}),o.jsx("span",{children:"Ch. 2"})]}),o.jsxs("div",{className:"staff-dashboard__contact",children:[o.jsx("span",{children:"Medical Team Alpha"}),o.jsx("span",{children:"Ch. 4"})]}),o.jsxs("div",{className:"staff-dashboard__contact",children:[o.jsx("span",{children:"Security Control"}),o.jsx("span",{children:"Ch. 1"})]})]})]})]})]})]})}const Cw={food_court:o.jsx(id,{size:10}),restroom:o.jsx(ha,{size:10}),first_aid:o.jsx(F0,{size:10}),information:o.jsx(ad,{size:10}),merchandise:o.jsx(Z0,{size:10})};function Rw(){const{stadium:s,loading:e}=Yi(),[t,n]=j.useState("all"),[i,a]=j.useState(null),c=(s==null?void 0:s.facilities.filter(l=>t==="all"?!0:t==="food"?l.type==="food_court":t==="restrooms"?l.type==="restroom":t==="medical"?l.type==="first_aid":!1))||[];return e||!s?o.jsx(rs,{}):o.jsxs("div",{className:"stadium-map-page",children:[o.jsxs("div",{className:"stadium-map-page__header",children:[o.jsx("h2",{className:"stadium-map-page__title",children:"Stadium Digital Twin"}),o.jsxs("p",{className:"stadium-map-page__subtitle",children:[s.name," — Live facility and congestion overlay"]})]}),o.jsx("div",{className:"stadium-map-page__controls",children:["all","gates","food","restrooms","medical"].map(l=>o.jsx(we,{variant:t===l?"primary":"secondary",size:"sm",onClick:()=>n(l),children:l.charAt(0).toUpperCase()+l.slice(1)},l))}),o.jsxs("div",{className:"stadium-map-page__grid",children:[o.jsxs(G,{padding:"none",className:"stadium-map-page__map-card",children:[o.jsx("div",{className:"stadium-svg-container",role:"group","aria-label":"Interactive stadium map showing gates, facilities, and congestion levels",children:o.jsxs("svg",{viewBox:"0 0 100 100",className:"stadium-svg",children:[o.jsx("ellipse",{cx:"50",cy:"50",rx:"44",ry:"40",fill:"var(--color-bg-tertiary)",stroke:"var(--color-border-primary)",strokeWidth:"0.5"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"36",ry:"32",fill:"var(--color-bg-secondary)",stroke:"var(--color-border-primary)",strokeWidth:"0.3"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"26",ry:"22",fill:"var(--color-bg-tertiary)",stroke:"var(--color-border-primary)",strokeWidth:"0.3"}),o.jsx("rect",{x:"30",y:"34",width:"40",height:"32",rx:"2",fill:"var(--color-success-muted)",stroke:"var(--color-success)",strokeWidth:"0.3",opacity:"0.4"}),o.jsx("line",{x1:"50",y1:"34",x2:"50",y2:"66",stroke:"var(--color-success)",strokeWidth:"0.2",opacity:"0.4"}),o.jsx("circle",{cx:"50",cy:"50",r:"5",fill:"none",stroke:"var(--color-success)",strokeWidth:"0.2",opacity:"0.4"}),o.jsx("text",{x:"25",y:"32",className:"stadium-svg__label",children:"Lower North"}),o.jsx("text",{x:"68",y:"32",className:"stadium-svg__label",children:"Lower East"}),o.jsx("text",{x:"25",y:"74",className:"stadium-svg__label",children:"Lower South"}),o.jsx("text",{x:"68",y:"74",className:"stadium-svg__label",children:"Upper East"}),(t==="all"||t==="gates")&&s.gates.map(l=>o.jsxs("g",{className:"stadium-svg__gate",onClick:()=>a(l),onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),a(l))},role:"button",tabIndex:0,"aria-label":`Gate ${l.name}, ${l.congestionLevel} congestion`,children:[o.jsx("circle",{cx:l.position.x,cy:l.position.y,r:"3",fill:hn(l.congestionLevel),opacity:"0.8",className:"stadium-svg__gate-circle"}),l.congestionLevel==="high"||l.congestionLevel==="critical"?o.jsx("circle",{cx:l.position.x,cy:l.position.y,r:"3",fill:"none",stroke:hn(l.congestionLevel),strokeWidth:"0.5",className:"stadium-svg__pulse-ring"}):null,o.jsx("text",{x:l.position.x,y:l.position.y-4.5,className:"stadium-svg__gate-label",children:l.name})]},l.id)),c.map(l=>o.jsx("g",{className:"stadium-svg__facility",onClick:()=>a(l),onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),a(l))},role:"button",tabIndex:0,"aria-label":`${l.name} (${l.type.replace("_"," ")}), ${l.status}`,children:o.jsx("rect",{x:l.position.x-1.5,y:l.position.y-1.5,width:"3",height:"3",rx:"0.5",fill:l.status==="closed"||l.status==="maintenance"?"var(--color-text-disabled)":l.waitTimeMinutes>10?"var(--color-warning)":"var(--color-accent)",opacity:"0.8",className:"stadium-svg__facility-rect"})},l.id))]})}),o.jsxs("div",{className:"stadium-map-page__legend",children:[o.jsx("div",{className:"stadium-map-page__legend-title",children:"Congestion Level"}),o.jsxs("div",{className:"stadium-map-page__legend-items",children:[o.jsxs("span",{className:"stadium-map-page__legend-item",children:[o.jsx("span",{className:"stadium-map-page__legend-dot",style:{background:"var(--color-congestion-low)"}})," Low"]}),o.jsxs("span",{className:"stadium-map-page__legend-item",children:[o.jsx("span",{className:"stadium-map-page__legend-dot",style:{background:"var(--color-congestion-moderate)"}})," Moderate"]}),o.jsxs("span",{className:"stadium-map-page__legend-item",children:[o.jsx("span",{className:"stadium-map-page__legend-dot",style:{background:"var(--color-congestion-high)"}})," High"]}),o.jsxs("span",{className:"stadium-map-page__legend-item",children:[o.jsx("span",{className:"stadium-map-page__legend-dot",style:{background:"var(--color-congestion-critical)"}})," Critical"]})]})]})]}),o.jsxs("div",{className:"stadium-map-page__detail",children:[i&&"congestionLevel"in i&&o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:i.name,subtitle:`${i.direction} · ${i.type.toUpperCase()}`,icon:o.jsx(Pi,{size:16})}),o.jsxs("div",{className:"stadium-map-page__detail-grid",children:[o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Congestion"}),o.jsx(Z,{variant:i.congestionLevel==="high"?"danger":i.congestionLevel==="moderate"?"warning":"success",size:"sm",children:i.congestionLevel})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Queue Length"}),o.jsxs("span",{children:[i.queueLength," people"]})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Wait Time"}),o.jsxs("span",{children:[i.estimatedWaitMinutes," min"]})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Throughput"}),o.jsxs("span",{children:[i.currentThroughput,"/",i.maxThroughput," per min"]})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Accessible"}),o.jsx("span",{children:i.isAccessible?"✓ Yes":"✗ No"})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Status"}),o.jsx(Z,{variant:i.isOpen?"success":"danger",size:"sm",children:i.isOpen?"Open":"Closed"})]})]})]}),i&&"waitTimeMinutes"in i&&!("congestionLevel"in i)&&o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:i.name,subtitle:i.type.replace("_"," "),icon:Cw[i.type]??o.jsx(Lt,{size:16})}),o.jsxs("div",{className:"stadium-map-page__detail-grid",children:[o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Status"}),o.jsx(Z,{variant:i.status==="available"?"success":i.status==="busy"?"warning":"danger",size:"sm",children:i.status})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Wait Time"}),o.jsxs("span",{children:[i.waitTimeMinutes," min"]})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Level"}),o.jsx("span",{children:i.level})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Accessible"}),o.jsx("span",{children:i.isAccessible?"✓ Yes":"✗ No"})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Nearest Gate"}),o.jsx("span",{children:i.nearestGate.replace("gate-","Gate ").toUpperCase()})]})]})]}),!i&&o.jsx(G,{padding:"md",children:o.jsxs("div",{className:"stadium-map-page__empty-detail",children:[o.jsx(rd,{size:24}),o.jsx("p",{children:"Click on a gate or facility on the map to view details"})]})}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Quick Stats"}),o.jsxs("div",{className:"stadium-map-page__detail-grid",children:[o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Open Gates"}),o.jsxs("span",{children:[s.gates.filter(l=>l.isOpen).length,"/",s.gates.length]})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Total in Queue"}),o.jsx("span",{children:s.gates.reduce((l,h)=>l+h.queueLength,0).toLocaleString()})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Food Courts Open"}),o.jsx("span",{children:s.facilities.filter(l=>l.type==="food_court"&&l.isOpen).length})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Restrooms Available"}),o.jsxs("span",{children:[s.facilities.filter(l=>l.type==="restroom"&&l.isOpen).length,"/",s.facilities.filter(l=>l.type==="restroom").length]})]}),o.jsxs("div",{className:"stadium-map-page__detail-row",children:[o.jsx("span",{children:"Medical Stations"}),o.jsxs("span",{children:[s.facilities.filter(l=>l.type==="first_aid"&&l.isOpen).length," active"]})]})]})]})]})]})]})}const kw={critical:"danger",high:"danger",medium:"warning",low:"info"},Pw={reported:"danger",acknowledged:"warning",in_progress:"info",resolved:"success",escalated:"danger"};function jw(){const[s,e]=j.useState("active"),[t,n]=j.useState(null),{incidents:i,loading:a}=vd(!1);if(a)return o.jsx(rs,{});const c=i.filter(h=>s==="active"?h.status!=="resolved":s==="resolved"?h.status==="resolved":!0),l=i.filter(h=>h.status!=="resolved").length;return o.jsxs("div",{className:"incidents-page",children:[o.jsxs("div",{className:"incidents-page__header",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"incidents-page__title",children:"Incident Management"}),o.jsx("p",{className:"incidents-page__subtitle",children:"Track, assign, and resolve stadium incidents in real-time"})]}),o.jsx(we,{variant:"primary",size:"sm",icon:o.jsx(K0,{size:14}),children:"Report Incident"})]}),o.jsxs("div",{className:"incidents-page__summary",children:[o.jsxs("div",{className:"incidents-page__stat",children:[o.jsx("span",{className:"incidents-page__stat-value incidents-page__stat-value--danger",children:l}),o.jsx("span",{className:"incidents-page__stat-label",children:"Active"})]}),o.jsxs("div",{className:"incidents-page__stat",children:[o.jsx("span",{className:"incidents-page__stat-value",children:i.filter(h=>h.priority==="high"||h.priority==="critical").length}),o.jsx("span",{className:"incidents-page__stat-label",children:"High Priority"})]}),o.jsxs("div",{className:"incidents-page__stat",children:[o.jsx("span",{className:"incidents-page__stat-value incidents-page__stat-value--success",children:i.filter(h=>h.status==="resolved").length}),o.jsx("span",{className:"incidents-page__stat-label",children:"Resolved"})]}),o.jsxs("div",{className:"incidents-page__stat",children:[o.jsx("span",{className:"incidents-page__stat-value",children:"1.2m"}),o.jsx("span",{className:"incidents-page__stat-label",children:"Avg Response"})]})]}),o.jsx("div",{className:"incidents-page__filters",children:["active","all","resolved"].map(h=>o.jsxs(we,{variant:s===h?"primary":"ghost",size:"sm",onClick:()=>e(h),children:[h.charAt(0).toUpperCase()+h.slice(1),h==="active"&&o.jsx(Z,{variant:"danger",size:"sm",children:l})]},h))}),o.jsx("div",{className:"incidents-page__list",role:"list","aria-label":"Incidents",children:c.map(h=>o.jsxs(G,{padding:"none",className:`incidents-page__card ${t===h.id?"incidents-page__card--expanded":""}`,children:[o.jsxs("button",{className:"incidents-page__card-header",onClick:()=>n(t===h.id?null:h.id),"aria-expanded":t===h.id,children:[o.jsx("div",{className:"incidents-page__card-priority",style:{background:h.priority==="high"||h.priority==="critical"?"var(--color-danger)":h.priority==="medium"?"var(--color-warning)":"var(--color-info)"}}),o.jsxs("div",{className:"incidents-page__card-main",children:[o.jsxs("div",{className:"incidents-page__card-top",children:[o.jsx(Z,{variant:kw[h.priority]??"default",size:"sm",children:h.priority.toUpperCase()}),o.jsx(Z,{variant:Pw[h.status],size:"sm",children:h.status.replace("_"," ")}),o.jsx("span",{className:"incidents-page__card-type",children:td[h.type]})]}),o.jsx("h3",{className:"incidents-page__card-title",children:h.title}),o.jsxs("div",{className:"incidents-page__card-meta",children:[o.jsxs("span",{children:[o.jsx(Lt,{size:11})," ",h.location]}),o.jsxs("span",{children:[o.jsx(jn,{size:11})," ",pa(h.reportedAt)]}),h.assignedTo&&o.jsxs("span",{children:[o.jsx(ld,{size:11})," ",h.assignedTo]})]})]}),o.jsx("span",{className:"incidents-page__card-chevron",children:t===h.id?o.jsx(V0,{size:16}):o.jsx(M0,{size:16})})]}),t===h.id&&o.jsxs("div",{className:"incidents-page__card-body",children:[o.jsxs("div",{className:"incidents-page__card-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:h.description})]}),o.jsxs("div",{className:"incidents-page__card-section incidents-page__ai-section",children:[o.jsxs("h4",{children:[o.jsx(to,{size:14})," AI Analysis & Recommendation"]}),o.jsx("p",{children:h.aiSuggestion})]}),h.notes.length>0&&o.jsxs("div",{className:"incidents-page__card-section",children:[o.jsx("h4",{children:"Activity Log"}),o.jsx("div",{className:"incidents-page__notes",children:h.notes.map(m=>o.jsxs("div",{className:"incidents-page__note",children:[o.jsx("span",{className:"incidents-page__note-time",children:pa(m.timestamp)}),o.jsx("span",{className:"incidents-page__note-author",children:m.author}),o.jsx("p",{className:"incidents-page__note-content",children:m.content})]},m.id))})]}),o.jsxs("div",{className:"incidents-page__card-actions",children:[o.jsx(we,{variant:"primary",size:"sm",children:"Update Status"}),o.jsx(we,{variant:"secondary",size:"sm",children:"Assign Team"}),o.jsx(we,{variant:"ghost",size:"sm",children:"View on Map"})]})]})]},h.id))})]})}function Mw(){var a;const{matches:s,loading:e}=Mi("live"),t=s[0],[n,i]=j.useState(Date.now());return j.useEffect(()=>{const c=setInterval(()=>i(Date.now()),1e3);return()=>clearInterval(c)},[]),e?o.jsx(rs,{}):t?o.jsxs("div",{className:"match-companion",children:[o.jsx("div",{className:"match-companion__header",children:o.jsxs("div",{children:[o.jsx("h2",{className:"match-companion__title",children:"Match Companion"}),o.jsx("p",{className:"match-companion__subtitle",children:"Live statistics, events, and operational impact"})]})}),o.jsxs("div",{className:"match-companion__grid",children:[o.jsxs("div",{className:"match-companion__col match-companion__col--main",children:[o.jsxs(G,{padding:"none",className:"match-companion__scorecard",children:[o.jsxs("div",{className:"match-companion__scorecard-header",children:[o.jsx(Z,{variant:"accent",size:"sm",children:t.stage.replace("_"," ").toUpperCase()}),o.jsx(ao,{status:"online",pulse:!0,label:`LIVE — ${t.currentMinute}'`}),o.jsx(Z,{variant:"default",size:"sm",children:t.venue})]}),o.jsxs("div",{className:"match-companion__teams",children:[o.jsxs("div",{className:"match-companion__team",children:[o.jsx("div",{className:"match-companion__flag",children:t.homeTeam.flag}),o.jsx("h3",{className:"match-companion__team-name",children:t.homeTeam.name}),o.jsx("span",{className:"match-companion__team-code",children:t.homeTeam.code})]}),o.jsx("div",{className:"match-companion__score-box",children:o.jsxs("div",{className:"match-companion__score",children:[o.jsx("span",{children:t.homeScore}),o.jsx("span",{className:"match-companion__score-divider",children:"-"}),o.jsx("span",{children:t.awayScore})]})}),o.jsxs("div",{className:"match-companion__team",children:[o.jsx("div",{className:"match-companion__flag",children:t.awayTeam.flag}),o.jsx("h3",{className:"match-companion__team-name",children:t.awayTeam.name}),o.jsx("span",{className:"match-companion__team-code",children:t.awayTeam.code})]})]}),o.jsx("div",{className:"match-companion__events",children:(a=t.events)==null?void 0:a.map(c=>o.jsxs("div",{className:"match-companion__event",children:[o.jsxs("span",{className:"match-companion__event-time",children:[c.minute,"'"]}),o.jsxs("span",{className:"match-companion__event-icon",children:[c.type==="goal"&&"⚽",c.type==="yellow_card"&&o.jsx("div",{className:"match-companion__card match-companion__card--yellow"}),c.type==="red_card"&&o.jsx("div",{className:"match-companion__card match-companion__card--red"}),c.type==="substitution"&&"🔄",c.type==="var_review"&&"📺"]}),o.jsxs("span",{className:"match-companion__event-player",children:[c.player,c.type==="substitution"&&c.assist&&o.jsxs("span",{className:"match-companion__event-sub",children:[" for ",c.assist]})]}),o.jsx("span",{className:"match-companion__event-team",children:c.teamId===t.homeTeam.id?t.homeTeam.code:t.awayTeam.code})]},c.id))})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Operational Impact Analysis",subtitle:"Real-time predictive insights based on match events",icon:o.jsx(En,{size:16})}),o.jsxs("div",{className:"match-companion__impacts",children:[o.jsxs("div",{className:"match-companion__impact",children:[o.jsxs("div",{className:"match-companion__impact-header",children:[o.jsx(Z,{variant:"warning",size:"sm",children:"Concourse Surge Prediction"}),o.jsx("span",{className:"match-companion__impact-time",children:"Halftime approaching (in 5 mins)"})]}),o.jsx("p",{className:"match-companion__impact-desc",children:"Expect a 300% increase in concourse density. Food courts and restrooms near Sections 115-125 will experience critical congestion."}),o.jsxs("div",{className:"match-companion__impact-actions",children:[o.jsx(we,{variant:"primary",size:"sm",children:"Pre-deploy Staff to Concourses"}),o.jsx(we,{variant:"secondary",size:"sm",children:"Update Digital Signage"})]})]}),o.jsxs("div",{className:"match-companion__impact",children:[o.jsxs("div",{className:"match-companion__impact-header",children:[o.jsx(Z,{variant:"info",size:"sm",children:"Exit Strategy Modeling"}),o.jsx("span",{className:"match-companion__impact-time",children:"Match score: 1-0"})]}),o.jsx("p",{className:"match-companion__impact-desc",children:"Close matches typically delay spectator exit by 10-15 minutes compared to blowouts. Peak exit surge is predicted at Final Whistle + 8 mins."})]})]})]})]}),o.jsxs("div",{className:"match-companion__col match-companion__col--side",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Match Timeline"}),o.jsxs("div",{className:"match-companion__timeline",children:[o.jsxs("div",{className:"match-companion__timeline-item match-companion__timeline-item--past",children:[o.jsx("span",{className:"match-companion__timeline-time",children:"18:00"}),o.jsx("span",{className:"match-companion__timeline-desc",children:"Gates Open"})]}),o.jsxs("div",{className:"match-companion__timeline-item match-companion__timeline-item--past",children:[o.jsx("span",{className:"match-companion__timeline-time",children:"19:15"}),o.jsx("span",{className:"match-companion__timeline-desc",children:"Teams Warmup"})]}),o.jsxs("div",{className:"match-companion__timeline-item match-companion__timeline-item--past",children:[o.jsx("span",{className:"match-companion__timeline-time",children:"20:00"}),o.jsx("span",{className:"match-companion__timeline-desc",children:"Kickoff (1st Half)"})]}),o.jsxs("div",{className:"match-companion__timeline-item match-companion__timeline-item--active",children:[o.jsx("span",{className:"match-companion__timeline-time",children:"20:45"}),o.jsx("span",{className:"match-companion__timeline-desc",children:"Halftime"})]}),o.jsxs("div",{className:"match-companion__timeline-item",children:[o.jsx("span",{className:"match-companion__timeline-time",children:"21:00"}),o.jsx("span",{className:"match-companion__timeline-desc",children:"Kickoff (2nd Half)"})]}),o.jsxs("div",{className:"match-companion__timeline-item",children:[o.jsx("span",{className:"match-companion__timeline-time",children:"21:45"}),o.jsx("span",{className:"match-companion__timeline-desc",children:"Full Time"})]})]})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Officials",icon:o.jsx(Wt,{size:16})}),o.jsxs("div",{className:"match-companion__officials",children:[o.jsxs("div",{className:"match-companion__official",children:[o.jsx("span",{className:"match-companion__official-role",children:"Referee"}),o.jsx("span",{className:"match-companion__official-name",children:"Pierluigi Collina"})]}),o.jsxs("div",{className:"match-companion__official",children:[o.jsx("span",{className:"match-companion__official-role",children:"Assistant 1"}),o.jsx("span",{className:"match-companion__official-name",children:"Sian Massey-Ellis"})]}),o.jsxs("div",{className:"match-companion__official",children:[o.jsx("span",{className:"match-companion__official-role",children:"Assistant 2"}),o.jsx("span",{className:"match-companion__official-name",children:"Clement Turpin"})]}),o.jsxs("div",{className:"match-companion__official",children:[o.jsx("span",{className:"match-companion__official-role",children:"Fourth Official"}),o.jsx("span",{className:"match-companion__official-name",children:"Anthony Taylor"})]}),o.jsxs("div",{className:"match-companion__official",children:[o.jsx("span",{className:"match-companion__official-role",children:"VAR"}),o.jsx("span",{className:"match-companion__official-name",children:"Massimiliano Irrati"})]})]})]})]})]})]}):o.jsxs("div",{className:"match-companion",children:[o.jsxs("div",{className:"match-companion__header",children:[o.jsx("h2",{className:"match-companion__title",children:"Match Companion"}),o.jsx("p",{className:"match-companion__subtitle",children:"No live matches currently underway"})]}),o.jsx(G,{padding:"md",children:o.jsxs("div",{style:{textAlign:"center",padding:"var(--space-10) 0",color:"var(--color-text-tertiary)"},children:[o.jsx(so,{size:32,style:{margin:"0 auto var(--space-4)"}}),o.jsx("p",{children:"Check the schedule for upcoming matches."})]})})]})}function Dw(s){return s.replace(/<[^>]*>/g,"")}function wd(s,e=500){return typeof s!="string"?"":Dw(s).trim().substring(0,e)}const Ow=[{intent:"gate_congestion",keywords:/gate|congestion|queue|wait|line|entrance|entry/i},{intent:"staff_deploy",keywords:/deploy|staff|assign|allocate|personnel|team/i,roles:["operations","security"]},{intent:"crowd_status",keywords:/crowd|density|occupancy|capacity|full|packed|overcrowded/i},{intent:"food_recommend",keywords:/food|eat|restaurant|stall|hungry|snack|drink|beverage/i},{intent:"restroom",keywords:/restroom|toilet|bathroom|washroom/i},{intent:"wheelchair",keywords:/wheelchair|accessible|disability|mobility|ada/i},{intent:"exit_route",keywords:/exit|leave|fastest|quickest|route|way out|after.*match/i},{intent:"parking",keywords:/parking|car|park|lot|drive/i},{intent:"medical",keywords:/medical|emergency|first aid|hurt|injured|ambulance|health|doctor/i},{intent:"incident",keywords:/incident|report|suspicious|danger|threat|alert|lost.*child|unattended/i,roles:["operations","security"]},{intent:"weather",keywords:/weather|rain|temperature|hot|cold|wind|sun/i},{intent:"match_info",keywords:/match|game|score|team|playing|schedule|kick.*off|result/i},{intent:"navigation",keywords:/where|find|locate|direction|how.*get|nearest|closest|navigate/i},{intent:"greeting",keywords:/^(hi|hello|hey|good\s+(morning|afternoon|evening))[\s!?.]*$/i},{intent:"evacuation",keywords:/evacuati|fire|bomb|emergency.*exit|emergency.*protocol/i,roles:["operations","security"]},{intent:"transport",keywords:/transport|bus|train|subway|metro|taxi|uber|shuttle|public/i}];function Vw(s){for(const{intent:e,keywords:t}of Ow)if(t.test(s))return e;return"general"}const Xl={gate_congestion:s=>({type:"recommendation",title:s==="spectator"?"Fastest Entry Route":"Gate Congestion Analysis",reasoning:s==="spectator"?"Based on current queue lengths and your location, Gate C has the shortest wait time at just 3 minutes. Gate B is experiencing high congestion (14 min wait) due to increased security screening.":"Gate B is operating at 81% capacity with a 580-person queue (14 min wait). This is 65% above normal pre-match levels. Root cause: additional security screening activated 20 minutes ago. Gate C and D have significant spare capacity.",data:[{label:"Gate A",value:"8 min wait · 320 in queue",variant:"warning"},{label:"Gate B",value:"14 min wait · 580 in queue",variant:"danger"},{label:"Gate C",value:"3 min wait · 120 in queue",variant:"success"},{label:"Gate D",value:"2 min wait · 85 in queue",variant:"success"},{label:"VIP",value:"1 min wait · 15 in queue",variant:"success"}],actions:s==="spectator"?[{label:"Navigate to Gate C",type:"primary"},{label:"View Map",type:"secondary"}]:[{label:"Deploy Staff to Gate B",type:"primary"},{label:"Activate Digital Signage",type:"secondary"}]}),staff_deploy:()=>({type:"recommendation",title:"Staff Deployment Recommendation",reasoning:"Analysis of current crowd density, gate throughput, and incident reports suggests the following reallocation. East Stand is at 91% density with an increasing trend. 2 stewards from the underutilized South Concourse can be reassigned to East Stand aisles without impacting coverage.",data:[{label:"East Stand",value:"Needs +2 stewards (91% density, increasing)",variant:"danger"},{label:"Gate B",value:"Needs +2 screening staff (14 min queue)",variant:"danger"},{label:"South Concourse",value:"Can release 2 staff (38% density, stable)",variant:"success"},{label:"West Concourse",value:"Can release 1 staff (45% density, stable)",variant:"success"}],actions:[{label:"Approve Reallocation",type:"primary"},{label:"View Staff Map",type:"secondary"}]}),crowd_status:s=>({type:"info",title:"Current Crowd Status",reasoning:"Stadium is at 83% capacity (68,450 of 82,500). Entry rate is 142/min with exit rate at 28/min. Peak occupancy expected in 20 minutes as match approaches kickoff. East Stand is the most congested zone at 91% density.",data:[{label:"Total Occupancy",value:"68,450 (83%)",variant:"warning"},{label:"Entry Rate",value:"142 per minute",variant:"default"},{label:"Exit Rate",value:"28 per minute",variant:"default"},{label:"Peak Zone",value:"East Stand (91%)",variant:"danger"},{label:"Quietest Zone",value:"South Concourse (38%)",variant:"success"},{label:"Predicted Peak",value:"78,300 in 20 minutes",variant:"warning"}],actions:s==="operations"?[{label:"Open Crowd Dashboard",type:"primary"},{label:"View Predictions",type:"secondary"}]:[{label:"View Stadium Map",type:"secondary"}]}),food_recommend:()=>({type:"recommendation",title:"Food Recommendations Near You",reasoning:"Based on current wait times and your location near the East Stand. Global Flavors near Gate C has the shortest wait (5 min) and offers diverse cuisine. Stadium Grill near Gate B is also good (8 min wait) but the gate area is congested. Avoid Quick Bites in the upper deck (18 min wait).",data:[{label:"Global Flavors (Gate C)",value:"5 min wait · International cuisine",variant:"success"},{label:"Stadium Grill (Gate B)",value:"8 min wait · American classics",variant:"success"},{label:"Jersey Eats (Gate A)",value:"12 min wait · Local favorites",variant:"warning"},{label:"Quick Bites (Upper)",value:"18 min wait · Fast food",variant:"danger"}],actions:[{label:"Navigate to Global Flavors",type:"primary"},{label:"View All Options",type:"secondary"}]}),restroom:()=>({type:"recommendation",title:"Nearest Available Restrooms",reasoning:"Restroom West is currently closed for maintenance (plumbing issue). Restroom South has the shortest wait at 1 minute and is fully accessible. Restroom North B is a good alternative at 2 minutes.",data:[{label:"Restroom South",value:"1 min wait · Accessible ✓",variant:"success"},{label:"Restroom North B",value:"2 min wait · Accessible ✓",variant:"success"},{label:"Restroom North A",value:"4 min wait · Accessible ✓",variant:"warning"},{label:"Restroom East",value:"6 min wait · Accessible ✓",variant:"warning"},{label:"Restroom West",value:"CLOSED — Maintenance",variant:"danger"}],actions:[{label:"Navigate to Restroom South",type:"primary"},{label:"View on Map",type:"secondary"}]}),wheelchair:()=>({type:"navigation",title:"Accessible Routes & Entrances",reasoning:"The nearest accessible entrance is the Accessible Entry on the East side (1 min wait). Gate A and Gate C also have accessible pathways. All elevators are operational. Accessible seating is available in Sections 100-110 (lower level) and Luxury Suites.",data:[{label:"Accessible Entry (East)",value:"1 min wait · Ramp access",variant:"success"},{label:"Gate A (North)",value:"8 min wait · Elevator available",variant:"warning"},{label:"Gate C (South)",value:"3 min wait · Ramp access",variant:"success"},{label:"Accessible Parking",value:"210/400 occupied · 4 min to gate",variant:"success"},{label:"Elevators",value:"All 6 operational",variant:"success"}],actions:[{label:"Navigate Accessible Route",type:"primary"},{label:"Request Assistance",type:"secondary"}]}),exit_route:()=>({type:"navigation",title:"Post-Match Exit Strategy",reasoning:"Based on predictive modeling, Gate C and Gate D will have the lowest congestion after the match. The peak exit surge occurs 5-10 minutes after the final whistle with ~280 exits/min. Waiting 15-20 minutes reduces exit time by 60%. South exits lead to Lot C parking (less congested) and public transport.",data:[{label:"Gate C (South)",value:"Best option · Near public transport",variant:"success"},{label:"Gate D (West)",value:"Good option · Near Lot B parking",variant:"success"},{label:"Gate A (North)",value:"Moderate congestion expected",variant:"warning"},{label:"Gate B (East)",value:"Avoid · Highest post-match volume",variant:"danger"},{label:"Optimal Wait",value:"Leave 15-20 min after whistle",variant:"default"}],actions:[{label:"Set Exit Reminder",type:"primary"},{label:"View Exit Map",type:"secondary"}]}),parking:()=>({type:"info",title:"Parking Availability",reasoning:"Lot A (East) is approaching capacity at 78%. Lot C (South) has the most availability with only 53% occupied. Accessible parking has ample space. Post-match, Lot C offers the fastest egress due to proximity to highway on-ramps.",data:[{label:"Lot A (East)",value:"6,200/8,000 · 78% full · $60",variant:"warning"},{label:"Lot B (West)",value:"5,800/6,000 · 97% full · $45",variant:"danger"},{label:"Lot C (South)",value:"2,100/4,000 · 53% full · $35",variant:"success"},{label:"VIP Parking",value:"380/500 · 76% full · $150",variant:"warning"},{label:"Accessible",value:"210/400 · 53% full · $40",variant:"success"}],actions:[{label:"Navigate to Lot C",type:"primary"},{label:"View Parking Map",type:"secondary"}]}),medical:s=>({type:"alert",title:s==="spectator"?"Nearest Medical Assistance":"Medical Resources Status",reasoning:s==="spectator"?"Medical Station Alpha near Gate D is available with no wait. Medical Station Bravo near Gate B has a 3-minute wait due to an active case. For emergencies, call the stadium medical line or alert the nearest steward.":"Medical Station Alpha is staffed and available. Station Bravo is handling an active case (67-year-old male, collapsed near Section 214, stable condition). Two ambulances on standby at the service entrance. All AED locations verified operational.",data:[{label:"Station Alpha (West)",value:"Available · No wait",variant:"success"},{label:"Station Bravo (East)",value:s==="spectator"?"3 min wait":"Active case · 1 patient",variant:"warning"},{label:"Ambulances",value:"2 on standby",variant:"success"},{label:"AED Locations",value:"12 units · All operational",variant:"success"}],actions:s==="spectator"?[{label:"Navigate to Station Alpha",type:"primary"},{label:"Call Medical Line",type:"secondary"}]:[{label:"View Medical Dashboard",type:"primary"},{label:"Dispatch Team",type:"secondary"}]}),match_info:()=>({type:"info",title:"Match Information",reasoning:"Brazil vs Germany is currently live in the Round of 16. The score is 1-0 to Brazil (goal at 23'). Next match at this venue: Argentina vs Netherlands at "+new Date(Date.now()+3*36e5).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})+" today.",data:[{label:"🔴 LIVE",value:"🇧🇷 Brazil 1 – 0 Germany 🇩🇪",variant:"default"},{label:"Stage",value:"Round of 16 · Match 25",variant:"default"},{label:"Next Match",value:"🇦🇷 Argentina vs Netherlands 🇳🇱",variant:"default"},{label:"Tomorrow",value:"🇫🇷 France vs Portugal 🇵🇹",variant:"default"}],actions:[{label:"View Full Schedule",type:"primary"},{label:"Set Reminder",type:"secondary"}]}),weather:()=>({type:"info",title:"Weather Conditions",reasoning:"Current conditions are warm and partly cloudy at 29°C. UV index is high (7) — sunscreen recommended for spectators in uncovered sections. No rain expected for the next 6 hours. Wind speed is manageable at 12 km/h.",data:[{label:"Temperature",value:"29°C / 84°F · Partly Cloudy",variant:"default"},{label:"Wind",value:"12 km/h · NW direction",variant:"default"},{label:"Humidity",value:"62%",variant:"default"},{label:"UV Index",value:"7 (High) — Sunscreen recommended",variant:"warning"},{label:"Rain Forecast",value:"No rain for next 6 hours",variant:"success"}],actions:[{label:"View Forecast",type:"secondary"}]}),greeting:s=>({type:"info",title:"Welcome to MatchMind AI",reasoning:"Hello! I'm your intelligent operations assistant for today's matches at MetLife Stadium. I can help you with real-time crowd data, navigation, incident management, predictions, and more. What do you need help with?",data:[{label:"Current Match",value:"🇧🇷 Brazil 1–0 Germany 🇩🇪 (LIVE)",variant:"default"},{label:"Stadium",value:"83% capacity · 68,450 spectators",variant:"warning"},{label:"Your Role",value:s.charAt(0).toUpperCase()+s.slice(1),variant:"default"},{label:"Conditions",value:"29°C · Partly Cloudy",variant:"default"}],actions:[]}),evacuation:()=>({type:"alert",title:"Emergency Evacuation Protocols",reasoning:"Evacuation Protocol EP-3 is available for activation. Current occupancy of 68,450 requires estimated 18-22 minutes for full evacuation using all 8 gates including emergency exits. All emergency exit routes have been verified clear as of 10 minutes ago.",data:[{label:"Estimated Evacuation",value:"18-22 minutes (full stadium)",variant:"danger"},{label:"Emergency Exits",value:"8 available · All verified clear",variant:"success"},{label:"Assembly Points",value:"4 designated · All accessible",variant:"success"},{label:"Current Occupancy",value:"68,450 · 83% capacity",variant:"warning"}],actions:[{label:"Activate EP-3 Protocol",type:"primary"},{label:"View Evacuation Map",type:"secondary"}]}),transport:()=>({type:"recommendation",title:"Transportation Options",reasoning:"NJ Transit is running extended service tonight with trains every 10 minutes from MetLife Stadium station until 1:00 AM. Shuttle buses are running to Secaucus Junction. Rideshare pickup is designated at Lot D. Post-match, expect 30-45 minute delays for personal vehicles.",data:[{label:"NJ Transit",value:"Every 10 min · Extended to 1:00 AM",variant:"success"},{label:"Shuttle Bus",value:"To Secaucus Junction · 15 min ride",variant:"success"},{label:"Rideshare",value:"Pickup at Lot D · Est. 20 min wait post-match",variant:"warning"},{label:"Personal Vehicle",value:"30-45 min egress delay expected",variant:"warning"}],actions:[{label:"Navigate to Train Station",type:"primary"},{label:"View Transport Map",type:"secondary"}]}),general:s=>({type:"info",title:"How Can I Help?",reasoning:`I can assist with many operational needs. Try asking about:

• Gate congestion and fastest entry
• Crowd density and predictions
• Staff deployment recommendations
• Food and restroom availability
• Accessible routes and facilities
• Match schedule and scores
• Weather conditions
• Parking and transportation
• Incident reporting and management
• Exit strategies after the match`,data:[],actions:[]}),navigation:()=>({type:"navigation",title:"Navigation Assistance",reasoning:"I can help you find any facility in the stadium. Key locations: Fan Information Center is near Gate A (North), Medical stations are at West and East sides, the FIFA Official Store is near Gate C (South). All restrooms are marked on the stadium map.",data:[{label:"Information Center",value:"Near Gate A · 2 min wait",variant:"success"},{label:"FIFA Store",value:"Near Gate C · 15 min wait",variant:"warning"},{label:"Family Zone",value:"East side · Near Accessible Entry",variant:"success"},{label:"Multi-Faith Room",value:"West side · Near Gate D",variant:"success"},{label:"ATM",value:"Near Gate C · 3 min wait",variant:"success"}],actions:[{label:"Open Stadium Map",type:"primary"},{label:"Get Directions",type:"secondary"}]}),incident:()=>({type:"alert",title:"Incident Management",reasoning:"There are currently 6 active incidents. 2 are high priority (medical emergency in Section 214, unattended bag at Gate A). The crowd surge alert in Section 121-130 was just acknowledged. All incidents are being tracked with assigned response teams.",data:[{label:"Medical — Section 214",value:"HIGH · In Progress · Medical Team Alpha",variant:"danger"},{label:"Lost Child — Gate B",value:"HIGH · In Progress · Security Bravo",variant:"danger"},{label:"Unattended Bag — Gate A",value:"HIGH · In Progress · Security Alpha",variant:"danger"},{label:"Crowd Surge — Sec 121",value:"HIGH · Acknowledged · Pending assignment",variant:"warning"},{label:"Queue — Gate B",value:"MEDIUM · Acknowledged · Gate Operations",variant:"warning"},{label:"Plumbing — Restroom West",value:"MEDIUM · In Progress · Maintenance",variant:"warning"}],actions:[{label:"Report New Incident",type:"primary"},{label:"View Incident Map",type:"secondary"}]})};function Lw(s,e){const t=wd(s,1e3),n=Vw(t),a=(Xl[n]??Xl.general)(e);return{id:`msg-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,role:"assistant",content:a.reasoning,timestamp:Date.now(),structuredData:a}}const Fw={operations:["What's the current crowd status?","Where should I deploy staff?","Show me gate congestion","Any active incidents?","Evacuation protocols"],security:["Show active incidents","Crowd density alerts","Suspicious activity reports","Emergency evacuation plan","Gate congestion status"],spectator:["What's the fastest entrance?","Best food near me?","Where's the nearest restroom?","Accessible routes available?","When's the next match?"],staff:["Today's match schedule","Crowd status update","Report an incident","Parking availability","Weather conditions"]};function Uw(){const{role:s}=is(),[e,t]=j.useState([]),[n,i]=j.useState(""),[a,c]=j.useState(!1),l=j.useRef(null),h=j.useRef(null),m=j.useCallback(()=>{var S;(S=l.current)==null||S.scrollIntoView({behavior:"smooth"})},[]);j.useEffect(()=>{m()},[e,m]);const f=j.useCallback(S=>{const k=s??"operations";if(!S.trim())return;const D=wd(S,1e3);if(!D)return;const M={id:`user-${Date.now()}`,role:"user",content:D,timestamp:Date.now()};t(Y=>[...Y,M]),i(""),c(!0),setTimeout(()=>{const Y=Lw(D,k);t($=>[...$,Y]),c(!1)},600+Math.random()*400)},[s]),w=j.useCallback(S=>{S.preventDefault(),f(n)},[n,f]),_=s?Fw[s]??[]:[];return o.jsxs("div",{className:"assistant",children:[o.jsxs("div",{className:"assistant__header",children:[o.jsxs("div",{className:"assistant__header-left",children:[o.jsx("div",{className:"assistant__avatar",children:o.jsx(Or,{size:18})}),o.jsxs("div",{children:[o.jsx("h2",{className:"assistant__title",children:"AI Operations Assistant"}),o.jsx("p",{className:"assistant__subtitle",children:"Context-aware intelligence for FIFA World Cup 2026"})]})]}),o.jsx(Z,{variant:"success",size:"sm",dot:!0,pulseDot:!0,children:"Online"})]}),o.jsxs("div",{className:"assistant__messages",role:"log","aria-label":"Conversation","aria-live":"polite",children:[e.length===0&&o.jsxs("div",{className:"assistant__empty",children:[o.jsx("div",{className:"assistant__empty-icon",children:o.jsx(to,{size:32})}),o.jsx("h3",{className:"assistant__empty-title",children:"Hello! I'm your MatchMind AI assistant."}),o.jsx("p",{className:"assistant__empty-desc",children:"Ask me about crowd conditions, gate congestion, food options, navigation, incidents, or anything else about today's operations at MetLife Stadium."}),o.jsx("div",{className:"assistant__suggestions",children:_.map(S=>o.jsxs("button",{className:"assistant__suggestion",onClick:()=>f(S),children:[S,o.jsx(eo,{size:12})]},S))})]}),e.map(S=>o.jsxs("div",{className:`assistant__msg assistant__msg--${S.role}`,role:"article","aria-label":`${S.role==="user"?"You":"AI Assistant"} at ${bn(S.timestamp)}`,children:[o.jsx("div",{className:"assistant__msg-avatar",children:S.role==="user"?o.jsx(ld,{size:14}):o.jsx(Or,{size:14})}),o.jsxs("div",{className:"assistant__msg-body",children:[o.jsxs("div",{className:"assistant__msg-header",children:[o.jsx("span",{className:"assistant__msg-author",children:S.role==="user"?"You":"MatchMind AI"}),o.jsx("span",{className:"assistant__msg-time",children:bn(S.timestamp)})]}),S.role==="user"&&o.jsx("p",{className:"assistant__msg-text",children:S.content}),S.role==="assistant"&&S.structuredData&&o.jsxs("div",{className:"assistant__structured",children:[o.jsx("h4",{className:"assistant__structured-title",children:S.structuredData.title}),o.jsx("p",{className:"assistant__structured-reasoning",children:S.structuredData.reasoning}),S.structuredData.data&&S.structuredData.data.length>0&&o.jsx("div",{className:"assistant__data-grid",children:S.structuredData.data.map((k,D)=>o.jsxs("div",{className:`assistant__data-item assistant__data-item--${k.variant??"default"}`,children:[o.jsx("span",{className:"assistant__data-label",children:k.label}),o.jsx("span",{className:"assistant__data-value",children:k.value})]},D))}),S.structuredData.actions&&S.structuredData.actions.length>0&&o.jsx("div",{className:"assistant__actions",children:S.structuredData.actions.map((k,D)=>o.jsx(we,{variant:k.type==="primary"?"primary":"secondary",size:"sm",children:k.label},D))})]})]})]},S.id)),a&&o.jsxs("div",{className:"assistant__msg assistant__msg--assistant","aria-label":"AI is typing",children:[o.jsx("div",{className:"assistant__msg-avatar",children:o.jsx(Or,{size:14})}),o.jsx("div",{className:"assistant__msg-body",children:o.jsxs("div",{className:"assistant__typing",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})})]}),o.jsx("div",{ref:l})]}),o.jsxs("form",{className:"assistant__input-area",onSubmit:w,children:[o.jsxs("div",{className:"assistant__input-wrapper",children:[o.jsx("input",{ref:h,type:"text",className:"assistant__input",placeholder:"Ask about operations, navigation, crowd data...",value:n,onChange:S=>i(S.target.value),"aria-label":"Type your message",maxLength:1e3}),o.jsx(we,{type:"submit",variant:"primary",size:"sm",disabled:!n.trim()||a,icon:o.jsx(Y0,{size:14}),"aria-label":"Send message"})]}),o.jsxs("p",{className:"assistant__input-hint",children:["AI responses are generated from real-time stadium data. Context: MetLife Stadium, ",s??"guest"," view."]})]})]})}function zw(){const{metrics:s,history:e,loading:t}=_d(),[n,i]=j.useState(e);if(j.useEffect(()=>{e.length>0&&i(e)},[e]),j.useEffect(()=>{const c=setInterval(()=>{i(l=>{const h=l[l.length-1];if(!h)return l;const m={...h,timestamp:h.timestamp+5*6e4,occupancy:Math.min(82500,h.occupancy+Math.floor(Math.random()*200-50)),entryRate:Math.max(0,h.entryRate+Math.floor(Math.random()*10-5)),exitRate:Math.max(0,h.exitRate+Math.floor(Math.random()*5-2))};return[...l.slice(1),m]})},5e3);return()=>clearInterval(c)},[e.length]),t||!s||n.length===0)return o.jsx(rs,{});const a=n.map(c=>({time:bn(c.timestamp),occupancy:c.occupancy,entry:c.entryRate}));return o.jsxs("div",{className:"crowd-dashboard",children:[o.jsxs("div",{className:"crowd-dashboard__header",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"crowd-dashboard__title",children:"Crowd Intelligence"}),o.jsx("p",{className:"crowd-dashboard__subtitle",children:"Real-time density, flow, and predictive analytics"})]}),o.jsxs("div",{className:"crowd-dashboard__actions",children:[o.jsx(we,{variant:"secondary",size:"sm",children:"Export Report"}),o.jsx(we,{variant:"primary",size:"sm",children:"Adjust Capacity Limits"})]})]}),o.jsxs("div",{className:"crowd-dashboard__metrics",children:[o.jsx(De,{label:"Current Occupancy",value:ma(s.totalOccupancy),change:1.2,icon:o.jsx(ji,{size:15}),variant:"default"}),o.jsx(De,{label:"Fill Rate",value:`${s.entryRate} / min`,change:-5.4,icon:o.jsx(ro,{size:15}),variant:"warning"}),o.jsx(De,{label:"Avg Queue Time",value:`${s.avgQueueMinutes.toFixed(1)} min`,change:8.3,icon:o.jsx(jn,{size:15}),variant:"danger"}),o.jsx(De,{label:"Predicted Peak",value:"78,400",changeLabel:"at 19:45",icon:o.jsx(En,{size:15}),variant:"accent"})]}),o.jsxs("div",{className:"crowd-dashboard__grid",children:[o.jsxs(G,{padding:"md",className:"crowd-dashboard__span-2",children:[o.jsx(te,{title:"Occupancy Trend & Prediction",subtitle:"Live tracking vs predictive model",icon:o.jsx(En,{size:16})}),o.jsx("div",{className:"crowd-dashboard__chart-container",children:o.jsx(cc,{width:"100%",height:300,children:o.jsxs(hm,{data:a,margin:{top:10,right:10,left:-20,bottom:0},children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"colorOccupancy",x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"5%",stopColor:"var(--color-accent)",stopOpacity:.3}),o.jsx("stop",{offset:"95%",stopColor:"var(--color-accent)",stopOpacity:0})]})}),o.jsx(lc,{strokeDasharray:"3 3",vertical:!1,stroke:"var(--color-border-secondary)"}),o.jsx(uc,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fontSize:12,fill:"var(--color-text-tertiary)"},dy:10}),o.jsx(hc,{axisLine:!1,tickLine:!1,tick:{fontSize:12,fill:"var(--color-text-tertiary)"}}),o.jsx(dc,{contentStyle:{background:"var(--color-bg-secondary)",border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-md)"},itemStyle:{color:"var(--color-text-primary)",fontSize:"14px",fontWeight:600},labelStyle:{color:"var(--color-text-tertiary)",fontSize:"12px",marginBottom:"4px"}}),o.jsx(dm,{type:"monotone",dataKey:"occupancy",name:"Occupancy",stroke:"var(--color-accent)",strokeWidth:3,fillOpacity:1,fill:"url(#colorOccupancy)",isAnimationActive:!1})]})})})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Entry Flow Rate",subtitle:"Throughput across all gates",icon:o.jsx(Pi,{size:16})}),o.jsx("div",{className:"crowd-dashboard__chart-container",children:o.jsx(cc,{width:"100%",height:240,children:o.jsxs(mm,{data:a.slice(-12),margin:{top:10,right:0,left:-20,bottom:0},children:[o.jsx(lc,{strokeDasharray:"3 3",vertical:!1,stroke:"var(--color-border-secondary)"}),o.jsx(uc,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fontSize:10,fill:"var(--color-text-tertiary)"},dy:10}),o.jsx(hc,{axisLine:!1,tickLine:!1,tick:{fontSize:10,fill:"var(--color-text-tertiary)"}}),o.jsx(dc,{cursor:{fill:"var(--color-bg-tertiary)"},contentStyle:{background:"var(--color-bg-secondary)",border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-md)"}}),o.jsx(pm,{dataKey:"entry",name:"Entry Rate (per min)",fill:"var(--color-success)",radius:[4,4,0,0],isAnimationActive:!1})]})})})]}),o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Zone Density Alerts",subtitle:"Areas approaching critical capacity",icon:o.jsx(Rt,{size:16})}),o.jsx("div",{className:"crowd-dashboard__alerts",children:s.densityByZone.filter(c=>c.density>.7).sort((c,l)=>l.density-c.density).map(c=>o.jsxs("div",{className:"crowd-dashboard__alert",children:[o.jsxs("div",{className:"crowd-dashboard__alert-info",children:[o.jsx("span",{className:"crowd-dashboard__alert-zone",children:c.zoneName}),o.jsxs("span",{className:"crowd-dashboard__alert-trend",children:["Trend: ",c.trend.toUpperCase()]})]}),o.jsx("div",{className:"crowd-dashboard__alert-status",children:o.jsxs(Z,{variant:c.density>.85?"danger":"warning",size:"sm",children:[Math.round(c.density*100),"% DENSITY"]})})]},c.zoneId))})]})]})]})}const Bw=[{id:"p1",type:"congestion",confidence:88,timeframe:"In 45 mins",description:"Severe bottleneck expected at Gate C",reasoning:["Current arrival rate at Gate C is 15% above model","Train schedule shows 3 high-capacity arrivals in next 30 mins","Historical data indicates 40% of late arrivals use Gate C"],recommendation:"Deploy 4 additional screening staff to Gate C and divert digital signage to Gate D.",impactedZones:["Gate C Plaza","East Concourse"]},{id:"p2",type:"logistics",confidence:74,timeframe:"At Halftime",description:"Concession stand 114 to run low on bottled water",reasoning:["Current temperature is 2°C higher than forecast","Sales rate in Section 110-120 is 2.4x baseline","Inventory sync shows only 3 pallets remaining in local storage"],recommendation:"Dispatch 2 pallets from central storage to Section 114 before 35th minute of match.",impactedZones:["Concourse Level 1"]},{id:"p3",type:"security",confidence:62,timeframe:"Post-match (22:15)",description:"Potential crowd friction at VIP Exit North",reasoning:["Away team supporters concentrated in North stands","VIP exit overlaps with primary away egress route","Match tension index currently rising (sentiment analysis)"],recommendation:"Pre-deploy barrier team to separate North egress flow. Activate staggered release protocol.",impactedZones:["North Plaza","VIP Exit"]}];function Gw(){return o.jsxs("div",{className:"predictions-dashboard",children:[o.jsxs("div",{className:"predictions-dashboard__header",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"predictions-dashboard__title",children:"Predictive Engine"}),o.jsx("p",{className:"predictions-dashboard__subtitle",children:"AI-driven foresight and autonomous recommendations"})]}),o.jsx(Z,{variant:"accent",dot:!0,pulseDot:!0,children:"MODELS ACTIVE"})]}),o.jsxs("div",{className:"predictions-dashboard__summary",children:[o.jsxs(G,{padding:"md",className:"predictions-dashboard__summary-card",children:[o.jsx(P0,{className:"predictions-dashboard__summary-icon"}),o.jsxs("div",{className:"predictions-dashboard__summary-info",children:[o.jsx("span",{className:"predictions-dashboard__summary-val",children:"2.4M"}),o.jsx("span",{className:"predictions-dashboard__summary-label",children:"Data points analyzed today"})]})]}),o.jsxs(G,{padding:"md",className:"predictions-dashboard__summary-card",children:[o.jsx(da,{className:"predictions-dashboard__summary-icon"}),o.jsxs("div",{className:"predictions-dashboard__summary-info",children:[o.jsx("span",{className:"predictions-dashboard__summary-val",children:"94.2%"}),o.jsx("span",{className:"predictions-dashboard__summary-label",children:"Historical Accuracy"})]})]}),o.jsxs(G,{padding:"md",className:"predictions-dashboard__summary-card",children:[o.jsx(U0,{className:"predictions-dashboard__summary-icon"}),o.jsxs("div",{className:"predictions-dashboard__summary-info",children:[o.jsx("span",{className:"predictions-dashboard__summary-val",children:"12"}),o.jsx("span",{className:"predictions-dashboard__summary-label",children:"Preventative Actions Taken"})]})]})]}),o.jsx("div",{className:"predictions-dashboard__grid",children:Bw.map(s=>o.jsxs(G,{className:"predictions-dashboard__prediction",children:[o.jsxs("div",{className:"predictions-dashboard__prediction-header",children:[o.jsxs("div",{className:"predictions-dashboard__prediction-type",children:[s.type==="congestion"&&o.jsx(Rt,{size:16}),s.type==="logistics"&&o.jsx(ud,{size:16}),s.type==="security"&&o.jsx(da,{size:16}),o.jsxs("span",{className:"capitalize",children:[s.type," Risk"]})]}),o.jsxs("div",{className:"predictions-dashboard__prediction-meta",children:[o.jsx("span",{className:"predictions-dashboard__timeframe",children:s.timeframe}),o.jsxs(Z,{variant:s.confidence>80?"danger":"warning",size:"sm",children:[s.confidence,"% Confidence"]})]})]}),o.jsxs("div",{className:"predictions-dashboard__prediction-body",children:[o.jsx("h3",{className:"predictions-dashboard__prediction-desc",children:s.description}),o.jsxs("div",{className:"predictions-dashboard__reasoning",children:[o.jsx("h4",{children:"AI Reasoning Chain:"}),o.jsx("ul",{children:s.reasoning.map((e,t)=>o.jsx("li",{children:e},t))})]}),o.jsxs("div",{className:"predictions-dashboard__impact",children:[o.jsx("h4",{children:"Impacted Zones:"}),o.jsx("div",{className:"predictions-dashboard__impact-tags",children:s.impactedZones.map((e,t)=>o.jsx("span",{className:"predictions-dashboard__impact-tag",children:e},t))})]})]}),o.jsxs("div",{className:"predictions-dashboard__prediction-footer",children:[o.jsxs("div",{className:"predictions-dashboard__recommendation",children:[o.jsx("strong",{children:"Action:"})," ",s.recommendation]}),o.jsxs(we,{variant:"primary",size:"sm",children:["Execute Plan ",o.jsx(eo,{size:14})]})]})]},s.id))})]})}const fa=Le.forwardRef(({className:s="",label:e,error:t,helperText:n,fullWidth:i=!0,id:a,...c},l)=>{const h=Le.useId(),m=a||h,f=`${m}-helper`,w=`${m}-error`,_=["input-wrapper",i?"input-wrapper--full":"",t?"input-wrapper--error":"",s].filter(Boolean).join(" ");return o.jsxs("div",{className:_,children:[e&&o.jsx("label",{htmlFor:m,className:"input-label",children:e}),o.jsx("div",{className:"input-container",children:o.jsx("input",{id:m,ref:l,className:"input-element","aria-invalid":!!t,"aria-describedby":[t?w:void 0,n?f:void 0].filter(Boolean).join(" ")||void 0,...c})}),t&&o.jsx("span",{id:w,className:"input-error-text",role:"alert",children:t}),n&&!t&&o.jsx("span",{id:f,className:"input-helper-text",children:n})]})});fa.displayName="Input";const Ed=Le.forwardRef(({className:s="",label:e,error:t,helperText:n,options:i,fullWidth:a=!0,id:c,...l},h)=>{const m=Le.useId(),f=c||m,w=`${f}-helper`,_=`${f}-error`,S=["select-wrapper",a?"select-wrapper--full":"",t?"select-wrapper--error":"",s].filter(Boolean).join(" ");return o.jsxs("div",{className:S,children:[e&&o.jsx("label",{htmlFor:f,className:"select-label",children:e}),o.jsxs("div",{className:"select-container",children:[o.jsx("select",{id:f,ref:h,className:"select-element","aria-invalid":!!t,"aria-describedby":[t?_:void 0,n?w:void 0].filter(Boolean).join(" ")||void 0,...l,children:i.map(k=>o.jsx("option",{value:k.value,children:k.label},k.value))}),o.jsx("div",{className:"select-chevron","aria-hidden":"true",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),t&&o.jsx("span",{id:_,className:"select-error-text",role:"alert",children:t}),n&&!t&&o.jsx("span",{id:w,className:"select-helper-text",children:n})]})});Ed.displayName="Select";function $w(){const[s,e]=j.useState("Gate A"),[t,n]=j.useState("Section 114"),[i,a]=j.useState("fastest"),c=[{instruction:"Enter through Gate A security checkpoint",distance:"50m",time:"2m"},{instruction:"Turn right towards the East Concourse",distance:"120m",time:"1.5m"},{instruction:"Proceed straight past Food Court B",distance:"80m",time:"1m",congestion:"high"},{instruction:"Take Escalator 2 up to Level 1",distance:"20m",time:"0.5m"},{instruction:"Section 114 entrance is on your left",distance:"10m",time:"0.2m"}];return o.jsxs("div",{className:"navigation-view",children:[o.jsx("div",{className:"navigation-view__header",children:o.jsxs("div",{children:[o.jsx("h2",{className:"navigation-view__title",children:"Smart Navigation"}),o.jsx("p",{className:"navigation-view__subtitle",children:"Dynamic pathfinding avoiding real-time congestion"})]})}),o.jsxs("div",{className:"navigation-view__grid",children:[o.jsxs("div",{className:"navigation-view__sidebar",children:[o.jsxs(G,{padding:"md",children:[o.jsx(te,{title:"Plan Route",icon:o.jsx(io,{size:16})}),o.jsxs("div",{className:"navigation-view__form",children:[o.jsxs("div",{className:"navigation-view__field",children:[o.jsx("label",{children:"Starting Point"}),o.jsxs("div",{className:"navigation-view__input-group",children:[o.jsx(Lt,{size:16,className:"navigation-view__input-icon"}),o.jsx(fa,{value:s,onChange:l=>e(l.target.value),placeholder:"E.g., Gate A, Section 114"})]})]}),o.jsxs("div",{className:"navigation-view__field",children:[o.jsx("label",{children:"Destination"}),o.jsxs("div",{className:"navigation-view__input-group",children:[o.jsx(da,{size:16,className:"navigation-view__input-icon"}),o.jsx(fa,{value:t,onChange:l=>n(l.target.value),placeholder:"E.g., Restroom, Concession"})]})]}),o.jsxs("div",{className:"navigation-view__field",children:[o.jsx("label",{children:"Routing Preference"}),o.jsx(Ed,{"aria-label":"Routing Preference",value:i,onChange:l=>a(l.target.value),options:[{value:"fastest",label:"Fastest (Default)"},{value:"avoid_crowds",label:"Avoid Crowds"},{value:"accessible",label:"Wheelchair Accessible"},{value:"covered",label:"Covered / Indoors"}]})]}),o.jsx(we,{variant:"primary",style:{width:"100%",marginTop:"var(--space-2)"},children:"Calculate Route"})]})]}),o.jsxs(G,{padding:"md",className:"navigation-view__summary",children:[o.jsxs("div",{className:"navigation-view__summary-stats",children:[o.jsxs("div",{className:"navigation-view__stat",children:[o.jsx("span",{className:"navigation-view__stat-val",children:"5.2 min"}),o.jsx("span",{className:"navigation-view__stat-label",children:"Est. Time"})]}),o.jsxs("div",{className:"navigation-view__stat",children:[o.jsx("span",{className:"navigation-view__stat-val",children:"280m"}),o.jsx("span",{className:"navigation-view__stat-label",children:"Distance"})]})]}),i==="avoid_crowds"&&o.jsxs("div",{className:"navigation-view__alert",children:[o.jsx(ud,{size:14})," Re-routed to avoid Level 1 Concourse congestion (+1.5m)"]}),i==="accessible"&&o.jsxs("div",{className:"navigation-view__alert navigation-view__alert--info",children:[o.jsx(R0,{size:14})," Route uses elevators only. Step-free guaranteed."]})]})]}),o.jsx("div",{className:"navigation-view__main",children:o.jsxs(G,{padding:"md",className:"navigation-view__steps-card",children:[o.jsx(te,{title:"Turn-by-turn Directions",icon:o.jsx(no,{size:16})}),o.jsxs("div",{className:"navigation-view__steps",children:[c.map((l,h)=>o.jsxs("div",{className:"navigation-view__step",children:[o.jsx("div",{className:"navigation-view__step-number",children:h+1}),o.jsxs("div",{className:"navigation-view__step-content",children:[o.jsx("p",{className:"navigation-view__step-instruction",children:l.instruction}),o.jsxs("div",{className:"navigation-view__step-meta",children:[o.jsx("span",{children:l.distance}),o.jsx("span",{children:"·"}),o.jsx("span",{children:l.time}),l.congestion==="high"&&o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"·"}),o.jsx("span",{className:"navigation-view__step-warning",children:"High Traffic Area"})]})]})]})]},h)),o.jsxs("div",{className:"navigation-view__step navigation-view__step--final",children:[o.jsx("div",{className:"navigation-view__step-number",children:o.jsx(Lt,{size:12})}),o.jsx("div",{className:"navigation-view__step-content",children:o.jsxs("p",{className:"navigation-view__step-instruction",children:["Arrive at ",t]})})]})]})]})})]})]})}function qw(){const{user:s}=is();if(!s)return o.jsx(dn,{to:"/",replace:!0});switch(s.role){case"operations":return o.jsx(Jl,{});case"security":return o.jsx(Aw,{});case"spectator":return o.jsx(Sw,{});case"staff":return o.jsx(Nw,{});default:return o.jsx(Jl,{})}}function Hw(){const{user:s,isLoading:e}=is();return e?o.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-bg-primary)"},children:[o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",color:"var(--color-text-secondary)"},children:[o.jsx("div",{className:"spinner-loader",style:{width:32,height:32,border:"3px solid rgba(99,102,241,0.2)",borderTopColor:"var(--color-accent)",borderRadius:"50%",animation:"spin 1s linear infinite"}}),o.jsx("div",{children:"Initializing MatchMind Secure Session..."})]}),o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):s?o.jsx(lm,{children:o.jsxs(Ge,{path:"/",element:o.jsx(mw,{}),children:[o.jsx(Ge,{index:!0,element:o.jsx(dn,{to:"/dashboard",replace:!0})}),o.jsx(Ge,{path:"dashboard",element:o.jsx(qw,{})}),o.jsx(Ge,{path:"stadium",element:o.jsx(Rw,{})}),o.jsx(Ge,{path:"crowd",element:o.jsx(Dr,{allowedRoles:["operations","security"],children:o.jsx(zw,{})})}),o.jsx(Ge,{path:"predictions",element:o.jsx(Dr,{allowedRoles:["operations"],children:o.jsx(Gw,{})})}),o.jsx(Ge,{path:"incidents",element:o.jsx(Dr,{allowedRoles:["operations","security","staff"],children:o.jsx(jw,{})})}),o.jsx(Ge,{path:"navigation",element:o.jsx($w,{})}),o.jsx(Ge,{path:"match",element:o.jsx(Mw,{})}),o.jsx(Ge,{path:"assistant",element:o.jsx(Uw,{})}),o.jsx(Ge,{path:"*",element:o.jsx(dn,{to:"/dashboard",replace:!0})})]})}):o.jsx(pw,{})}class Ww extends Le.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("[MatchMind AI] Error caught by boundary:",e,t)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"48px 24px",gap:"16px",textAlign:"center"},children:[o.jsx("div",{style:{width:48,height:48,borderRadius:"12px",background:"var(--color-danger-muted)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px"},children:"⚠"}),o.jsx("h2",{style:{fontSize:"var(--text-lg)",fontWeight:600,color:"var(--color-text-primary)"},children:"Something went wrong"}),o.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--color-text-secondary)",maxWidth:"400px"},children:"An unexpected error occurred. Please refresh the page or contact operations support."}),o.jsx("button",{onClick:()=>{this.setState({hasError:!1,error:null}),window.location.reload()},style:{padding:"8px 20px",borderRadius:"6px",background:"var(--color-accent)",color:"#fff",border:"none",fontSize:"var(--text-base)",fontWeight:500,cursor:"pointer"},children:"Reload Page"})]}):this.props.children}}vm.createRoot(document.getElementById("root")).render(o.jsx(Le.StrictMode,{children:o.jsx(Ww,{children:o.jsx(um,{children:o.jsx(uw,{children:o.jsx(A0,{children:o.jsx(Hw,{})})})})})}));
