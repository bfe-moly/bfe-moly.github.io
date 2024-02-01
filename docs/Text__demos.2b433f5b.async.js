!(function(){var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var J=(s,i,e)=>i in s?te(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,V=(s,i)=>{for(var e in i||(i={}))Q.call(i,e)&&J(s,e,i[e]);if(X)for(var e of X(i))q.call(i,e)&&J(s,e,i[e]);return s},ee=(s,i)=>ne(s,re(i));var G=(s,i)=>{var e={};for(var a in s)Q.call(s,a)&&i.indexOf(a)<0&&(e[a]=s[a]);if(s!=null&&X)for(var a of X(s))i.indexOf(a)<0&&q.call(s,a)&&(e[a]=s[a]);return e};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[427],{43911:function(s,i,e){"use strict";e.r(i);var a=e(67294),n=e(521),r=e(30501),t=e(85893),o=function(){return(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(r.x.Link,{href:"https://www.google.com",blank:!0,size:12,children:"\u65B0\u6253\u5F00\u6807\u7B7E"}),(0,t.jsx)(r.x.Link,{href:"https://www.google.com",size:12,children:"https://www.google.com"}),(0,t.jsx)(r.x.Link,{href:"https://www.google.com",size:14,children:"https://www.google.com"}),(0,t.jsx)(r.x.Link,{href:"https://www.google.com",size:16,children:"https://www.google.com"}),(0,t.jsx)(r.x.Link,{href:"https://www.google.com",size:16,disabled:!0,children:"https://www.google.com"})]})};i.default=o},1672:function(s,i,e){"use strict";e.r(i);var a=e(67294),n=e(30501),r=e(97167),t=e(85893),o=function(){var d=`There were two penguins sitting on an iceberg. One turns to the other and says, "You look like you're wearing a tuxedo."
  The other penguin replies, "How do you know I'm not?"
  The first penguin says, "Well, I've never seen a penguin at a black-tie event before!"
  I hope that gives you a good chuckle!`;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.x,{size:12,ellipsis:!0,children:d}),(0,t.jsx)(r.Z,{orientation:"left",children:"\u5206\u5272\u7EBF"}),(0,t.jsx)(n.x,{size:16,ellipsis:{rows:2},children:d})]})};i.default=o},76454:function(s,i,e){"use strict";e.r(i);var a=e(67294),n=e(521),r=e(30501),t=e(85893),o=function(){return(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(r.x,{size:12,children:"default"}),(0,t.jsx)(r.x,{size:12,type:"secondary",children:"secondary"}),(0,t.jsx)(r.x,{size:12,type:"success",children:"success"}),(0,t.jsx)(r.x,{size:12,type:"warning",children:"warning"}),(0,t.jsx)(r.x,{size:12,type:"danger",children:"danger"})]})};i.default=o},75607:function(s,i,e){"use strict";e.r(i);var a=e(67294),n=e(521),r=e(30501),t=e(85893),o=function(){return(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(r.x,{size:12,children:"12px"}),(0,t.jsx)(r.x,{size:14,children:"14px"}),(0,t.jsx)(r.x,{size:16,children:"16px"}),(0,t.jsx)(r.x,{size:18,children:"18px"}),(0,t.jsx)(r.x,{size:20,children:"20px"}),(0,t.jsx)(r.x,{size:24,children:"24px"}),(0,t.jsx)(r.x,{size:24,disabled:!0,children:"24px"})]})};i.default=o},16244:function(s,i,e){"use strict";e.r(i);var a=e(67294),n=e(521),r=e(30501),t=e(85893),o=function(){return(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(r.x.Title,{level:1,children:"H1.Moly"}),(0,t.jsx)(r.x.Title,{level:2,children:"H2.Moly"}),(0,t.jsx)(r.x.Title,{level:3,children:"H3.Moly"}),(0,t.jsx)(r.x.Title,{level:4,children:"H4.Moly"})]})};i.default=o},97167:function(s,i,e){"use strict";var a=e(32538);i.Z=a.Z},521:function(s,i,e){"use strict";e.d(i,{Z:function(){return p}});var a=e(68400),n=e.n(a),r=e(36493),t=e(93985),o=e(46069),l=e(67294),d=e(85893),u,c=(0,t.hi)(u||(u=n()([`
  .moly-space-compact.moly-space-vertical {
    display: inline-block;
  }

  .moly-space-compact.moly-space-vertical .moly-space-item {
    width: 100%;
  }

  .moly-space-compact.moly-space-vertical .moly-space-item > button {
    width: 100%;
  }

  .moly-space-compact
    .moly-space-item:not(.moly-space-item-first):not(.moly-space-item-last)
    > button {
    border-radius: 0;
  }

  .moly-space-compact .moly-space-item {
    position: relative;
  }

  .moly-space-compact:not(.moly-space-vertical)
    .moly-space-item-first
    ~ .moly-space-item {
    margin-left: -1px;
  }

  .moly-space-compact.moly-space-vertical
    .moly-space-item-first
    ~ .moly-space-item {
    margin-top: -1px;
  }

  .moly-space-compact .moly-space-item-first ~ .moly-space-item::before {
    position: absolute;
    background-color: var(--bds-static-border-color);
    content: ' ';
  }

  .moly-space-compact:not(.moly-space-vertical)
    .moly-space-item-first
    ~ .moly-space-item::before {
    width: 1px;
    height: 100%;
  }

  .moly-space-compact.moly-space-vertical
    .moly-space-item-first
    ~ .moly-space-item::before {
    width: 100%;
    height: 1px;
  }

  .moly-space-compact:not(.moly-space-vertical)
    .moly-space-item-first
    > button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .moly-space-compact:not(.moly-space-vertical) .moly-space-item-last > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .moly-space-compact.moly-space-vertical .moly-space-item-first > button {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .moly-space-compact.moly-space-vertical .moly-space-item-last > button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .moly-space-compact .moly-space-item > button:hover {
    position: relative;
    z-index: 2;
  }
`]))),m=l.forwardRef(function(f,_){var $=f.className,z=f.children,C=f.size,P=f.align,h=f.direction,T=h===void 0?"horizontal":h,E=f.wrap,W=f.split,M=f.compact,Z=f.style,x=P||(T==="horizontal"?"center":"start"),B=function(){var D=Array.isArray(C)?C:[C,C],S=D.map(function(O){return typeof O=="number"?"".concat(O,"px"):O==="middle"?"16px":O==="large"?"24px":"8px"});return S.join(" ")};return(0,d.jsx)("div",{className:(0,r.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":T==="vertical","items-center":x==="center"||T==="horizontal","items-start":x==="start","items-end":x==="end","items-baseline":x==="baseline","flex-wrap":E,"moly-space-compact":M},$),style:M?{}:{gap:B()},ref:_,children:l.Children.map(z,function(y,D){return y?(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)("div",{style:Z,className:(0,r.cn)("moly-space-item",{"w-full":x==="stretch","moly-space-item-first":D===0,"moly-space-item-last":D===l.Children.count(z)-1}),children:y}),W&&(0,d.jsx)("div",{className:"moly-space-split last:hidden",children:W})]},D):null})})});m.displayName=o.fC.displayName;var p=m},30501:function(s,i,e){"use strict";e.d(i,{x:function(){return D}});var a=e(97857),n=e.n(a),r=e(13769),t=e.n(r),o=e(36493),l=e(67294),d=e(68400),u=e.n(d),c=e(93985),m,p,f,_,$,z,C=(0,c.iv)(m||(m=u()([`
  font-size: var(--bds-font-size-12);
  line-height: var(--bds-line-height-12);
`]))),P=(0,c.iv)(p||(p=u()([`
  font-size: var(--bds-font-size-14);
  line-height: var(--bds-line-height-14);
`]))),h=(0,c.iv)(f||(f=u()([`
  font-size: var(--bds-font-size-16);
  line-height: var(--bds-line-height-16);
`]))),T=(0,c.iv)(_||(_=u()([`
  font-size: var(--bds-font-size-18);
  line-height: var(--bds-line-height-18);
`]))),E=(0,c.iv)($||($=u()([`
  font-size: var(--bds-font-size-20);
  line-height: var(--bds-line-height-20);
`]))),W=(0,c.iv)(z||(z=u()([`
  font-size: var(--bds-font-size-24);
  line-height: var(--bds-line-height-24);
`]))),M=e(85893),Z=["className","style","size","type","children","ellipsis","disabled"],x=["level","className","children"],B=["className","blank","type","size","children","ellipsis","disabled"],y={color:{white:"text-[var(--bds-static-white)]",secondary:"text-[var(--bds-gray-t2)]",success:"text-[var(--bds-green-800-pressed)]",warning:"text-[var(--bds-brand-700-normal)]",danger:"text-[var(--bds-red-700-normal)]"},size:{12:C,14:P,16:h,18:T,20:E,24:W}},D=function(v){var I=v.className,b=v.style,A=v.size,g=A===void 0?14:A,j=v.type,L=v.children,R=v.ellipsis,w=v.disabled,K=t()(v,Z),U=n()({},b);return R&&typeof R!="boolean"&&R.rows>0&&(U.WebkitLineClamp=R.rows),(0,M.jsx)("span",n()(n()({className:(0,o.cn)("moly-text",j?y.color[j]:"",y.size[g],I,{"line-clamp-1":R},w&&"text-[var(--bds-gray-t4-dis)] cursor-not-allowed"),style:U},K),{},{children:L}))},S=function(v){var I=v.level,b=I===void 0?1:I,A=v.className,g=v.children,j=t()(v,x),L=n()(n()({},j.style||{}),{},{fontSize:"var(--bds-font-size-h".concat(b,")"),lineHeight:"var(--bds-line-height-h".concat(b,")")});return b===1?(0,M.jsx)("h1",n()(n()({className:(0,o.cn)("text-[] leading-[var(--bds-line-height-h1)]",A)},j),{},{style:L,children:g})):b===2?(0,M.jsx)("h2",n()(n()({className:(0,o.cn)(A)},j),{},{style:L,children:g})):b===3?(0,M.jsx)("h3",n()(n()({className:(0,o.cn)(A)},j),{},{style:L,children:g})):(0,M.jsx)("h1",n()(n()({className:(0,o.cn)(A)},j),{},{style:L,children:g}))},O=function(v){var I=v.className,b=v.blank,A=v.type,g=v.size,j=g===void 0?14:g,L=v.children,R=v.ellipsis,w=v.disabled,K=t()(v,B),U=n()({},K);return b&&(U.target="_blank"),w&&delete U.href,(0,M.jsx)("a",n()(n()({className:(0,o.cn)("no-underline text-inherit",!w&&"hover:!text-[var(--bds-brand-600-hover)]",A?y.color[A]:"",y.size[j],{truncate:R},w&&"text-[var(--bds-gray-t4-dis)] cursor-not-allowed",I)},U),{},{children:L}))};D.Title=S,D.Link=O},32538:function(s,i,e){"use strict";e.d(i,{Z:function(){return v}});var a={};e.r(a),e.d(a,{center:function(){return S},darkTheme:function(){return T},dashed:function(){return Z},divider:function(){return E},dividerContent:function(){return B},end:function(){return D},horizontal:function(){return W},lightTheme:function(){return h},solid:function(){return x},start:function(){return y},vertical:function(){return M}});var n=e(36493),r=e(67294),t=e(68400),o=e.n(t),l=e(93985),d,u,c,m,p,f,_,$,z,C,P,h=(0,l.iv)(d||(d=o()([`
  --line-color: var(--bds-gray-ele-borde, #e9edf2);
  --color: var(--bds-gray-t3, #71757a);
`]))),T=(0,l.iv)(u||(u=o()([`
  --line-color: var(--bds-gray-ele-border, #404347);
  --color: var(--bds-gray-t3, #71757a);
`]))),E=(0,l.iv)(c||(c=o()([`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  font-family: 'IBM Plex Sans';
  color: var(--color);

  &::before {
    content: '';
    flex: 1;
    min-width: 10px;
    border-bottom: 1px var(--border-style) var(--line-color);
  }
  &::after {
    content: '';
    flex: 1;
    min-width: 10px;
    border-bottom: 1px var(--border-style) var(--line-color);
  }
`]))),W=(0,l.iv)(m||(m=o()([`
  flex-direction: row;
`]))),M=(0,l.iv)(p||(p=o()([`
  flex-direction: column;

  &::before,
  &::after {
    border-bottom: none;
    border-left: 1px var(--border-style) var(--line-color);
  }
`]))),Z=(0,l.iv)(f||(f=o()([`
  --border-style: dashed;
`]))),x=(0,l.iv)(_||(_=o()([`
  --border-style: solid;
`]))),B=(0,l.iv)($||($=o()([`
  white-space: nowrap;
  margin-left: 0.5em;
  margin-right: 0.5em;
`]))),y=(0,l.iv)(z||(z=o()([`
  justify-content: flex-start;
  &:before {
    flex: 0;
  }
`]))),D=(0,l.iv)(C||(C=o()([`
  justify-content: flex-end;
  &:after {
    flex: 0;
  }
`]))),S=(0,l.iv)(P||(P=o()([`
  justify-content: center;
`]))),O=e(85893),N=function(b){var A=b.className,g=b.style,j=b.children,L=b.type,R=L===void 0?"horizontal":L,w=b.orientation,K=w===void 0?"center":w,U=b.line,Y=U===void 0?"solid":U,F=b.theme;return(0,O.jsx)("div",{style:g,className:(0,n.cn)(A,E,a[R],a[Y],a[K],F==="dark"?T:h),children:j?(0,O.jsx)("span",{className:B,children:j}):null})},v=N},36493:function(s,i,e){"use strict";e.d(i,{KX:function(){return l},K_:function(){return t},cn:function(){return r},ey:function(){return o}});var a=e(86010),n=e(57851);function r(){for(var d=arguments.length,u=new Array(d),c=0;c<d;c++)u[c]=arguments[c];return(0,n.m)((0,a.W)(u))}function t(d){return d?/^#[0-9A-F]{6}$/i.test(d):!1}function o(d,u){if(!t(d))return d;var c=Math.round(u*255);return"".concat(d).concat(c.toString(16).toUpperCase())}function l(d,u){var c=d.findIndex(function(m){return m!=null});return c===-1?u:d[c]}},13769:function(s,i,e){var a=e(48541);function n(r,t){if(r==null)return{};var o=a(r,t),l,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(d=0;d<u.length;d++)l=u[d],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(o[l]=r[l])}return o}s.exports=n,s.exports.__esModule=!0,s.exports.default=s.exports},48541:function(s){function i(e,a){if(e==null)return{};var n={},r=Object.keys(e),t,o;for(o=0;o<r.length;o++)t=r[o],!(a.indexOf(t)>=0)&&(n[t]=e[t]);return n}s.exports=i,s.exports.__esModule=!0,s.exports.default=s.exports},46069:function(s,i,e){"use strict";e.d(i,{fC:function(){return M}});var a=e(87462),n=e(67294),r=e(28771),t=e(25360),o=e(36206),l=e(77342),d=e(57898),u=e(7546),c=e(29115),m=e(75320);const p="Checkbox",[f,_]=(0,t.b)(p),[$,z]=f(p),C=(0,n.forwardRef)((x,B)=>{const F=x,{__scopeCheckbox:y,name:D,checked:S,defaultChecked:O,required:N,disabled:v,value:I="on",onCheckedChange:b}=F,A=G(F,["__scopeCheckbox","name","checked","defaultChecked","required","disabled","value","onCheckedChange"]),[g,j]=(0,n.useState)(null),L=(0,r.e)(B,k=>j(k)),R=(0,n.useRef)(!1),w=g?!!g.closest("form"):!0,[K=!1,U]=(0,l.T)({prop:S,defaultProp:O,onChange:b}),Y=(0,n.useRef)(K);return(0,n.useEffect)(()=>{const k=g==null?void 0:g.form;if(k){const H=()=>U(Y.current);return k.addEventListener("reset",H),()=>k.removeEventListener("reset",H)}},[g,U]),(0,n.createElement)($,{scope:y,state:K,disabled:v},(0,n.createElement)(m.WV.button,(0,a.Z)({type:"button",role:"checkbox","aria-checked":E(K)?"mixed":K,"aria-required":N,"data-state":W(K),"data-disabled":v?"":void 0,disabled:v,value:I},A,{ref:L,onKeyDown:(0,o.M)(x.onKeyDown,k=>{k.key==="Enter"&&k.preventDefault()}),onClick:(0,o.M)(x.onClick,k=>{U(H=>E(H)?!0:!H),w&&(R.current=k.isPropagationStopped(),R.current||k.stopPropagation())})})),w&&(0,n.createElement)(T,{control:g,bubbles:!R.current,name:D,value:I,checked:K,required:N,disabled:v,style:{transform:"translateX(-100%)"}}))}),P="CheckboxIndicator",h=(0,n.forwardRef)((x,B)=>{const N=x,{__scopeCheckbox:y,forceMount:D}=N,S=G(N,["__scopeCheckbox","forceMount"]),O=z(P,y);return(0,n.createElement)(c.z,{present:D||E(O.state)||O.state===!0},(0,n.createElement)(m.WV.span,(0,a.Z)({"data-state":W(O.state),"data-disabled":O.disabled?"":void 0},S,{ref:B,style:V({pointerEvents:"none"},x.style)})))}),T=x=>{const I=x,{control:B,checked:y,bubbles:D=!0}=I,S=G(I,["control","checked","bubbles"]),O=(0,n.useRef)(null),N=(0,d.D)(y),v=(0,u.t)(B);return(0,n.useEffect)(()=>{const b=O.current,A=window.HTMLInputElement.prototype,j=Object.getOwnPropertyDescriptor(A,"checked").set;if(N!==y&&j){const L=new Event("click",{bubbles:D});b.indeterminate=E(y),j.call(b,E(y)?!1:y),b.dispatchEvent(L)}},[N,y,D]),(0,n.createElement)("input",(0,a.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:E(y)?!1:y},S,{tabIndex:-1,ref:O,style:ee(V(V({},x.style),v),{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))};function E(x){return x==="indeterminate"}function W(x){return E(x)?"indeterminate":x?"checked":"unchecked"}const M=C,Z=null},29115:function(s,i,e){"use strict";e.d(i,{z:function(){return l}});var a=e(67294),n=e(73935),r=e(28771),t=e(9981);function o(c,m){return(0,a.useReducer)((p,f)=>{const _=m[p][f];return _!=null?_:p},c)}const l=c=>{const{present:m,children:p}=c,f=d(m),_=typeof p=="function"?p({present:f.isPresent}):a.Children.only(p),$=(0,r.e)(f.ref,_.ref);return typeof p=="function"||f.isPresent?(0,a.cloneElement)(_,{ref:$}):null};l.displayName="Presence";function d(c){const[m,p]=(0,a.useState)(),f=(0,a.useRef)({}),_=(0,a.useRef)(c),$=(0,a.useRef)("none"),z=c?"mounted":"unmounted",[C,P]=o(z,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,a.useEffect)(()=>{const h=u(f.current);$.current=C==="mounted"?h:"none"},[C]),(0,t.b)(()=>{const h=f.current,T=_.current;if(T!==c){const W=$.current,M=u(h);c?P("MOUNT"):M==="none"||(h==null?void 0:h.display)==="none"?P("UNMOUNT"):P(T&&W!==M?"ANIMATION_OUT":"UNMOUNT"),_.current=c}},[c,P]),(0,t.b)(()=>{if(m){const h=E=>{const M=u(f.current).includes(E.animationName);E.target===m&&M&&(0,n.flushSync)(()=>P("ANIMATION_END"))},T=E=>{E.target===m&&($.current=u(f.current))};return m.addEventListener("animationstart",T),m.addEventListener("animationcancel",h),m.addEventListener("animationend",h),()=>{m.removeEventListener("animationstart",T),m.removeEventListener("animationcancel",h),m.removeEventListener("animationend",h)}}else P("ANIMATION_END")},[m,P]),{isPresent:["mounted","unmountSuspended"].includes(C),ref:(0,a.useCallback)(h=>{h&&(f.current=getComputedStyle(h)),p(h)},[])}}function u(c){return(c==null?void 0:c.animationName)||"none"}},57898:function(s,i,e){"use strict";e.d(i,{D:function(){return n}});var a=e(67294);function n(r){const t=(0,a.useRef)({value:r,previous:r});return(0,a.useMemo)(()=>(t.current.value!==r&&(t.current.previous=t.current.value,t.current.value=r),t.current.previous),[r])}},7546:function(s,i,e){"use strict";e.d(i,{t:function(){return r}});var a=e(67294),n=e(9981);function r(t){const[o,l]=(0,a.useState)(void 0);return(0,n.b)(()=>{if(t){l({width:t.offsetWidth,height:t.offsetHeight});const d=new ResizeObserver(u=>{if(!Array.isArray(u)||!u.length)return;const c=u[0];let m,p;if("borderBoxSize"in c){const f=c.borderBoxSize,_=Array.isArray(f)?f[0]:f;m=_.inlineSize,p=_.blockSize}else m=t.offsetWidth,p=t.offsetHeight;l({width:m,height:p})});return d.observe(t,{box:"border-box"}),()=>d.unobserve(t)}else l(void 0)},[t]),o}}}]);
}());