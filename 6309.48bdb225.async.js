!(function(){"use strict";var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var G=(s,r,e)=>r in s?te(s,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[r]=e,I=(s,r)=>{for(var e in r||(r={}))J.call(r,e)&&G(s,e,r[e]);if(V)for(var e of V(r))Q.call(r,e)&&G(s,e,r[e]);return s},Y=(s,r)=>ne(s,re(r));var K=(s,r)=>{var e={};for(var t in s)J.call(s,t)&&r.indexOf(t)<0&&(e[t]=s[t]);if(s!=null&&V)for(var t of V(s))r.indexOf(t)<0&&Q.call(s,t)&&(e[t]=s[t]);return e};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[6309,2253],{46069:function(s,r,e){e.d(r,{fC:function(){return D}});var t=e(87462),a=e(67294),b=e(28771),i=e(25360),h=e(36206),m=e(77342),o=e(57898),C=e(7546),c=e(29115),n=e(75320);const d="Checkbox",[u,v]=(0,i.b)(d),[l,M]=u(d),$=(0,a.forwardRef)((O,L)=>{const F=O,{__scopeCheckbox:P,name:T,checked:B,defaultChecked:N,required:p,disabled:k,value:S="on",onCheckedChange:W}=F,j=K(F,["__scopeCheckbox","name","checked","defaultChecked","required","disabled","value","onCheckedChange"]),[R,z]=(0,a.useState)(null),w=(0,b.e)(L,A=>z(A)),H=(0,a.useRef)(!1),X=R?!!R.closest("form"):!0,[U=!1,Z]=(0,m.T)({prop:B,defaultProp:N,onChange:W}),ee=(0,a.useRef)(U);return(0,a.useEffect)(()=>{const A=R==null?void 0:R.form;if(A){const g=()=>Z(ee.current);return A.addEventListener("reset",g),()=>A.removeEventListener("reset",g)}},[R,Z]),(0,a.createElement)(l,{scope:P,state:U,disabled:k},(0,a.createElement)(n.WV.button,(0,t.Z)({type:"button",role:"checkbox","aria-checked":E(U)?"mixed":U,"aria-required":p,"data-state":y(U),"data-disabled":k?"":void 0,disabled:k,value:S},j,{ref:w,onKeyDown:(0,h.M)(O.onKeyDown,A=>{A.key==="Enter"&&A.preventDefault()}),onClick:(0,h.M)(O.onClick,A=>{Z(g=>E(g)?!0:!g),X&&(H.current=A.isPropagationStopped(),H.current||A.stopPropagation())})})),X&&(0,a.createElement)(x,{control:R,bubbles:!H.current,name:T,value:S,checked:U,required:p,disabled:k,style:{transform:"translateX(-100%)"}}))}),f="CheckboxIndicator",_=(0,a.forwardRef)((O,L)=>{const p=O,{__scopeCheckbox:P,forceMount:T}=p,B=K(p,["__scopeCheckbox","forceMount"]),N=M(f,P);return(0,a.createElement)(c.z,{present:T||E(N.state)||N.state===!0},(0,a.createElement)(n.WV.span,(0,t.Z)({"data-state":y(N.state),"data-disabled":N.disabled?"":void 0},B,{ref:L,style:I({pointerEvents:"none"},O.style)})))}),x=O=>{const S=O,{control:L,checked:P,bubbles:T=!0}=S,B=K(S,["control","checked","bubbles"]),N=(0,a.useRef)(null),p=(0,o.D)(P),k=(0,C.t)(L);return(0,a.useEffect)(()=>{const W=N.current,j=window.HTMLInputElement.prototype,z=Object.getOwnPropertyDescriptor(j,"checked").set;if(p!==P&&z){const w=new Event("click",{bubbles:T});W.indeterminate=E(P),z.call(W,E(P)?!1:P),W.dispatchEvent(w)}},[p,P,T]),(0,a.createElement)("input",(0,t.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:E(P)?!1:P},B,{tabIndex:-1,ref:N,style:Y(I(I({},O.style),k),{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))};function E(O){return O==="indeterminate"}function y(O){return E(O)?"indeterminate":O?"checked":"unchecked"}const D=$,q=null},29115:function(s,r,e){e.d(r,{z:function(){return m}});var t=e(67294),a=e(73935),b=e(28771),i=e(9981);function h(c,n){return(0,t.useReducer)((d,u)=>{const v=n[d][u];return v!=null?v:d},c)}const m=c=>{const{present:n,children:d}=c,u=o(n),v=typeof d=="function"?d({present:u.isPresent}):t.Children.only(d),l=(0,b.e)(u.ref,v.ref);return typeof d=="function"||u.isPresent?(0,t.cloneElement)(v,{ref:l}):null};m.displayName="Presence";function o(c){const[n,d]=(0,t.useState)(),u=(0,t.useRef)({}),v=(0,t.useRef)(c),l=(0,t.useRef)("none"),M=c?"mounted":"unmounted",[$,f]=h(M,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,t.useEffect)(()=>{const _=C(u.current);l.current=$==="mounted"?_:"none"},[$]),(0,i.b)(()=>{const _=u.current,x=v.current;if(x!==c){const y=l.current,D=C(_);c?f("MOUNT"):D==="none"||(_==null?void 0:_.display)==="none"?f("UNMOUNT"):f(x&&y!==D?"ANIMATION_OUT":"UNMOUNT"),v.current=c}},[c,f]),(0,i.b)(()=>{if(n){const _=E=>{const D=C(u.current).includes(E.animationName);E.target===n&&D&&(0,a.flushSync)(()=>f("ANIMATION_END"))},x=E=>{E.target===n&&(l.current=C(u.current))};return n.addEventListener("animationstart",x),n.addEventListener("animationcancel",_),n.addEventListener("animationend",_),()=>{n.removeEventListener("animationstart",x),n.removeEventListener("animationcancel",_),n.removeEventListener("animationend",_)}}else f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes($),ref:(0,t.useCallback)(_=>{_&&(u.current=getComputedStyle(_)),d(_)},[])}}function C(c){return(c==null?void 0:c.animationName)||"none"}},57898:function(s,r,e){e.d(r,{D:function(){return a}});var t=e(67294);function a(b){const i=(0,t.useRef)({value:b,previous:b});return(0,t.useMemo)(()=>(i.current.value!==b&&(i.current.previous=i.current.value,i.current.value=b),i.current.previous),[b])}},7546:function(s,r,e){e.d(r,{t:function(){return b}});var t=e(67294),a=e(9981);function b(i){const[h,m]=(0,t.useState)(void 0);return(0,a.b)(()=>{if(i){m({width:i.offsetWidth,height:i.offsetHeight});const o=new ResizeObserver(C=>{if(!Array.isArray(C)||!C.length)return;const c=C[0];let n,d;if("borderBoxSize"in c){const u=c.borderBoxSize,v=Array.isArray(u)?u[0]:u;n=v.inlineSize,d=v.blockSize}else n=i.offsetWidth,d=i.offsetHeight;m({width:n,height:d})});return o.observe(i,{box:"border-box"}),()=>o.unobserve(i)}else m(void 0)},[i]),h}},19492:function(s,r,e){e.d(r,{j:function(){return i}});var t=e(86010);const a=h=>typeof h=="boolean"?"".concat(h):h===0?"0":h,b=t.Z,i=(h,m)=>o=>{var C;if((m==null?void 0:m.variants)==null)return b(h,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:c,defaultVariants:n}=m,d=Object.keys(c).map(l=>{const M=o==null?void 0:o[l],$=n==null?void 0:n[l];if(M===null)return null;const f=a(M)||a($);return c[l][f]}),u=o&&Object.entries(o).reduce((l,M)=>{let[$,f]=M;return f===void 0||(l[$]=f),l},{}),v=m==null||(C=m.compoundVariants)===null||C===void 0?void 0:C.reduce((l,M)=>{let x=M,{class:$,className:f}=x,_=K(x,["class","className"]);return Object.entries(_).every(E=>{let[y,D]=E;return Array.isArray(D)?D.includes(I(I({},n),u)[y]):I(I({},n),u)[y]===D})?[...l,$,f]:l},[]);return b(h,d,v,o==null?void 0:o.class,o==null?void 0:o.className)}}}]);
}());