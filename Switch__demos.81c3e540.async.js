"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[5622],{23917:function(L,s,e){e.r(s);var l=e(86855),u=e(67294),r=e(85893),a=function(o){console.log("switch to ".concat(o))},i=function(){return(0,r.jsx)(l.Z,{onCheckedChange:a})};s.default=i},3312:function(L,s,e){e.r(s);var l=e(5574),u=e.n(l),r=e(86855),a=e(7935),i=e(67294),m=e(85893),o=function(){var v=(0,i.useState)(!0),b=u()(v,2),N=b[0],p=b[1],h=function(){p(!N)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.Z,{disabled:N,defaultChecked:!0}),(0,m.jsx)("br",{}),(0,m.jsx)(a.Z,{variant:"primary",size:"small",className:"mt-4",onClick:h,children:"Primary Toggle disabled"})]})};s.default=o},75072:function(L,s,e){e.r(s);var l=e(86855),u=e(67294),r=e(85893),a=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{loading:!0,defaultChecked:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(l.Z,{loading:!0})]})};s.default=a},82339:function(L,s,e){e.r(s);var l=e(86855),u=e(67294),r=e(85893),a=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{defaultChecked:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(l.Z,{size:"small",defaultChecked:!0})]})};s.default=a},39638:function(L,s,e){e.r(s);var l=e(521),u=e(86855),r=e(70696),a=e(67294),i=e(85893),m=function(){return(0,i.jsxs)(l.Z,{direction:"vertical",children:[(0,i.jsx)(u.Z,{checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",defaultChecked:!0}),(0,i.jsx)(u.Z,{checkedChildren:"1",unCheckedChildren:"0"}),(0,i.jsx)(u.Z,{checkedChildren:(0,i.jsx)(r.CheckIcon,{}),unCheckedChildren:(0,i.jsx)(r.CloseIcon,{}),defaultChecked:!0})]})};s.default=m},7935:function(L,s,e){var l=e(57636);s.Z=l.z},521:function(L,s,e){e.d(s,{Z:function(){return N}});var l=e(68400),u=e.n(l),r=e(36493),a=e(93985),i=e(46069),m=e(67294),o=e(85893),g,v=(0,a.hi)(g||(g=u()([`
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
`]))),b=m.forwardRef(function(p,h){var x=p.className,C=p.children,M=p.size,z=p.align,d=p.direction,A=d===void 0?"horizontal":d,W=p.wrap,y=p.split,E=p.compact,Z=p.style,D=z||(A==="horizontal"?"center":"start"),j=function(){var R=Array.isArray(M)?M:[M,M],k=R.map(function(P){return typeof P=="number"?"".concat(P,"px"):P==="middle"?"16px":P==="large"?"24px":"8px"});return k.join(" ")};return(0,o.jsx)("div",{className:(0,r.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":A==="vertical","items-center":D==="center"||A==="horizontal","items-start":D==="start","items-end":D==="end","items-baseline":D==="baseline","flex-wrap":W,"moly-space-compact":E},x),style:E?{}:{gap:j()},ref:h,children:m.Children.map(C,function(S,R){return(0,o.jsxs)(m.Fragment,{children:[(0,o.jsx)("div",{style:Z,className:(0,r.cn)("moly-space-item",{"w-full":D==="stretch","moly-space-item-first":R===0,"moly-space-item-last":R===m.Children.count(C)-1}),children:S}),y&&(0,o.jsx)("div",{className:"moly-space-split last:hidden",children:y})]},R)})})});b.displayName=i.fC.displayName;var N=b},86855:function(L,s,e){e.d(s,{Z:function(){return y}});var l=e(97857),u=e.n(l),r=e(5574),a=e.n(r),i=e(13769),m=e.n(i),o=e(60761),g=e(67294),v=e(36493),b=e(42978),N=e(68400),p=e.n(N),h=e(93985),x,C,M=(0,h.iv)(x||(x=p()([`
  &:not([data-disabled]):hover {
    background-color: var(--bds-gray-t2);
  }

  &[data-state='checked'] {
    background-color: var(--bds-brand-700-normal);
  }

  &[data-state='checked']:not([data-disabled]):hover {
    background-color: var(--bds-brand-600-hover);
  }

  &[data-disabled] {
    cursor: not-allowed;
  }

  &[data-disabled] {
    opacity: 0.35;
  }

  &[data-disabled] {
    opacity: 0.35;
  }
`]))),z=(0,h.iv)(C||(C=p()([`
  background-color: var(--bds-static-white);
`]))),d=e(85893),A=["className","size","disabled","loading","unCheckedChildren","checkedChildren","onCheckedChange"],W=g.forwardRef(function(E,Z){var D=E.className,j=E.size,S=E.disabled,R=E.loading,k=E.unCheckedChildren,P=E.checkedChildren,$=E.onCheckedChange,G=m()(E,A),q=(0,g.useState)(G.defaultChecked),H=a()(q,2),ee=H[0],te=H[1],ae=function(t){te(t),$==null||$(t)};return(0,d.jsx)(b.Z,{component:"switch",children:(0,d.jsx)(o.fC,u()(u()({className:(0,v.cn)([M,"bg-[var(--bds-gray-t3)] text-xs rounded-full relative group select-none","transition-all","outline-none focus-visible:ring-[5px] ring-btn-default",{"h-5 min-w-[42px]":j!=="small"},{"min-w-[20px] h-[10px]":j==="small"},D])},G),{},{ref:Z,disabled:S||R,onCheckedChange:ae,children:(0,d.jsxs)(d.Fragment,{children:[j!=="small"&&(0,d.jsx)("div",{className:(0,v.cn)("px-[6px] flex text-white align-center  transition-[padding]","group-data-[state=unchecked]:pl-[22px] group-data-[state=checked]:pr-[22px]","rtl:group-data-[state=unchecked]:pl-0  rtl:group-data-[state=checked]:pr-0 rtl:group-data-[state=unchecked]:pr-[22px] rtl:group-data-[state=checked]:pl-[22px]"),children:ee?P:k}),(0,d.jsx)("div",{className:(0,v.cn)("absolute h-full left-[2px] right-[2px] top-0",{"left-[1px] right-[1px]":j==="small"}),children:(0,d.jsx)(o.bU,{className:(0,v.cn)([z,"block w-[16px] h-[16px] rounded-full absolute top-1/2 -translate-y-1/2 transition-[left] pointer-events-none text-[var(--bds-brand-700-normal)]","-translate-x-full data-[state=unchecked]:left-[16px] data-[state=checked]:left-full","rtl:data-[state=checked]:left-[16px] rtl:data-[state=unchecked]:left-full",{"w-[8px] h-[8px] data-[state=unchecked]:left-[8px]":j==="small"}]),children:R&&(0,d.jsx)("svg",{className:"absolute top-1/2 left-1/2 -mt-[6px] -ml-[6px] animate-spin",viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading",width:"12px",height:"12px",fill:"currentColor","aria-hidden":"true",children:(0,d.jsx)("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"})})})})]})}))})});W.displayName=o.fC.displayName;var y=W},57636:function(L,s,e){e.d(s,{z:function(){return x}});var l=e(97857),u=e.n(l),r=e(13769),a=e.n(r),i=e(36493),m=e(42978),o=e(70696),g=e(19492),v=e(67294),b=e(85893),N=["className","variant","size","loading","subtitle","block"],p=(0,g.j)(["moly-btn inline-flex items-center justify-center rounded-lg select-none","text-base font-bds-font-weight-medium transition-all leading-6 font-IBM font-semibold","disabled:cursor-not-allowed disabled:opacity-40 bg-transparent","outline-none ring-btn-default focus-visible:ring-[5px]","border-y-[1px] border-solid border-transparent"],{variants:{variant:{default:["border border-solid border-base-bds-static-border-color bg-base-bds-static-white text-base-bds-static-black","enable:active:border active:border-base-bds-static-active-color active:text-base-bds-static-active-color","enabled:hover:border-brandColor-bds-brand-600-hover","enabled:hover:text-brandColor-bds-brand-600-hover"],primary:["bg-brandColor-bds-brand-700-normal text-base-bds-static-black","enabled:active:bg-brandColor-bds-brand-800-pressed enabled:active:text-base-bds-static-black","enabled:hover:bg-brandColor-bds-brand-600-hover"],secondary:["border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title","enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title","enabled:hover:border-base-bds-gray-t4-dis","enabled:hover:text-base-bds-gray-t2","disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3"],secondaryBrand:["border border-solid border-brandColor-bds-brand-900-focus text-brandColor-bds-brand-900-text","enabled:hover:text-brandColor-bds-brand-700-normal enabled:hover:border-brandColor-bds-brand-600-hover","enabled:active:border-brandColor-bds-brand-800-pressed enabled:active:text-brandColor-bds-brand-800-pressed","disabled:border-base-bds-static-border-color","disabled:opacity-90 disabled:text-base-bds-gray-t3"],tradeLong:["bg-greenColor-bds-green-700-normal text-base-bds-static-white","enabled:active:bg-greenColor-bds-green-800-pressed enabled:active:text-base-bds-static-white","enabled:hover:bg-greenColor-bds-green-600-hover","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-green"],tradeShort:["bg-redColor-bds-red-700-normal text-base-bds-static-white enabled:hover:bg-redColor-bds-red-600-hover","enabled:active:bg-redColor-bds-red-800-pressed enabled:active:text-base-bds-static-white","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-red"],tradeSecondary:["bg-base-bds-gray-ele-border","enabled:hover:bg-base-bds-gray-ele-line enabled:active:bg-base-bds-gray-ele-border enabled:hover:text-base-bds-gray-t1-title","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100"],marketing:["opacity-100 bg-bds-gradient-brand enabled:hover:bg-marketing-btn-background-hover","enabled:active:bg-marketing-btn-background-press","enabled:hover:opacity-90","text-base-bds-static-black"]},size:{middle:"px-[24px] py-[11px]","xx-small":"text-xs leading-[18px] px-[8px] py-[2px] rounded","x-small":"text-xs leading-[18px] px-[12px] py-[6px] rounded",small:"text-sm leading-[22px] px-[16px] py-[8px] rounded",large:"text-lg leading-[26px] px-[32px] py-[14px]","x-large":"text-xl px-[32px] py-[17px]"}},defaultVariants:{variant:"default",size:"middle"}}),h={PRIMARY:"primary",SECONDARY:"secondary",SECONDARY_BRAND:"secondaryBrand",TRADE_LONG:"tradeLong",TRADE_SHORT:"tradeShort",TRADE_SECONDARY:"tradeSecondary"},x=v.forwardRef(function(C,M){var z=C.className,d=C.variant,A=C.size,W=C.loading,y=W===void 0?!1:W,E=C.subtitle,Z=E===void 0?"":E,D=C.block,j=D===void 0?!1:D,S=a()(C,N),R=Z&&A==="small"&&[h.TRADE_LONG,h.TRADE_SHORT,h.TRADE_SECONDARY].includes(d),k="".concat(j?"w-full":""),P=R?(0,b.jsx)("button",u()(u()({className:(0,i.cn)(p({variant:d,size:A,className:z}),k,"pt-[4px] pb-[6px]"),ref:M},S),{},{children:(0,b.jsxs)("div",{className:"btn-content flex flex-col",children:[(0,b.jsx)("div",{className:"inner-children leading-[20px]",children:S.children}),(0,b.jsx)("div",{className:"subtitle font-regular text-xs opacity-70 leading-[10px]",children:Z})]})})):(0,b.jsxs)("button",u()(u()({className:(0,i.cn)(p({variant:d,size:A,className:z}),k,{"bg-brandColor-bds-brand-600-hover":y&&d===h.PRIMARY,"text-base-bds-gray-t2":y&&d===h.SECONDARY,"text-brandColor-bds-brand-700-normal":y&&d===h.SECONDARY_BRAND,"bg-greenColor-bds-green-600-hover":y&&d===h.TRADE_LONG,"bg-redColor-bds-red-600-hover":y&&d===h.TRADE_SHORT,"bg-base-bds-gray-ele-line":y&&d===h.TRADE_SECONDARY,"pointer-events-none":y}),ref:M},S),{},{children:[y?(0,b.jsx)(o.LoadingIcon,{className:"mr-2 rtl:ml-2 animate-spin"}):null,S.children]}));return(0,b.jsx)(m.Z,{component:"Button",children:P})});x.displayName="Button"},36493:function(L,s,e){e.d(s,{KX:function(){return m},K_:function(){return a},cn:function(){return r},ey:function(){return i}});var l=e(86010),u=e(57851);function r(){for(var o=arguments.length,g=new Array(o),v=0;v<o;v++)g[v]=arguments[v];return(0,u.m)((0,l.W)(g))}function a(o){return o?/^#[0-9A-F]{6}$/i.test(o):!1}function i(o,g){if(!a(o))return o;var v=Math.round(g*255);return"".concat(o).concat(v.toString(16).toUpperCase())}function m(o,g){var v=o.findIndex(function(b){return b!=null});return v===-1?g:o[v]}},42978:function(L,s,e){e.d(s,{Z:function(){return ae}});var l=e(36493),u=e(55331),r=e(75531),a=e(67294),i=a.isValidElement;function m(n){return n&&i(n)&&n.type===React.Fragment}function o(n,t,f){return i(n)?a.cloneElement(n,typeof f=="function"?f(n.props||{}):f):t}function g(n,t){return o(n,n,t)}var v=e(38024),b=e(64543),N=e(97857),p=e.n(N),h=e(5574),x=e.n(h),C=e(68400),M=e.n(C),z=e(93985),d,A="moly-wave-motion",W="cubic-bezier(0.08, 0.82, 0.17, 1)",y="cubic-bezier(0.645, 0.045, 0.355, 1)",E=(0,z.hi)(d||(d=M()([`
  .`,` {
    position: absolute;
    background: transparent;
    pointer-events: none;
    box-sizing: border-box;
    color: var(--wave-color);

    box-shadow: 0 0 0 0 currentColor;
    opacity: 1;

    &-appear {
      transition: box-shadow 0.4s `,", opacity 2s ",`;

      &-active {
        box-shadow: 0 0 0 6px currentcolor;
        opacity: 0;
      }

      &.wave-quick {
        transition: box-shadow 0.3s `,", opacity 0.35s ",`;
      }
    }
  }
`])),A,W,W,y,y),Z=e(82225),D=e(24996),j="moly-wave-target";function S(n){var t=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function R(n){return n&&n!=="#fff"&&n!=="#ffffff"&&n!=="rgb(255, 255, 255)"&&n!=="rgba(255, 255, 255, 1)"&&S(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&n!=="transparent"}function k(n){var t=getComputedStyle(n),f=t.borderTopColor,c=t.borderColor,T=t.backgroundColor;return R(f)?f:R(c)?c:R(T)?T:""}function P(n){return Number.isNaN(n)?0:n}var $=e(85893),G=function(t){var f=t.className,c=t.target,T=t.component,_=a.useRef(null),Y=a.useState([]),B=x()(Y,2),w=B[0],I=B[1],X=a.useState(0),ne=x()(X,2),Q=ne[0],ie=ne[1],ce=a.useState(0),re=x()(ce,2),be=re[0],ue=re[1],me=a.useState(0),oe=x()(me,2),ve=oe[0],fe=oe[1],pe=a.useState(0),se=x()(pe,2),he=se[0],ge=se[1],ye=a.useState(!1),de=x()(ye,2),xe=de[0],Ce=de[1],J={left:Q,top:be,width:ve,height:he,borderRadius:w.map(function(O){return"".concat(O,"px")}).join(" ")};c.classList.contains("ring-btn-green")?J["--wave-color"]="var(--bds-green-100-bg)":c.classList.contains("ring-btn-red")?J["--wave-color"]="var(--bds-red-100-bg)":J["--wave-color"]="var(--bds-brand-100-bg)";function le(){var O=getComputedStyle(c),K=O.position==="static",U=O.borderLeftWidth,V=O.borderTopWidth;ie(K?c.offsetLeft:P(-parseFloat(U))),ue(K?c.offsetTop:P(-parseFloat(V))),fe(c.offsetWidth),ge(c.offsetHeight);var F=O.borderTopLeftRadius,_e=O.borderTopRightRadius,Re=O.borderBottomLeftRadius,De=O.borderBottomRightRadius;I([F,_e,De,Re].map(function(Oe){return P(parseFloat(Oe))}))}if(a.useEffect(function(){if(c){var O=(0,b.Z)(function(){le(),Ce(!0)}),K;return typeof ResizeObserver!="undefined"&&(K=new ResizeObserver(le),K.observe(c)),function(){var U;b.Z.cancel(O),(U=K)===null||U===void 0||U.disconnect()}}},[]),!xe)return null;var Ee=(T==="Checkbox"||T==="Radio")&&(c==null?void 0:c.classList.contains(j));return(0,$.jsx)(Z.ZP,{visible:!0,motionAppear:!0,motionName:A,motionDeadline:500,onAppearEnd:function(K,U){if(U.deadline||U.propertyName==="opacity"){var V,F=(V=_.current)===null||V===void 0?void 0:V.parentElement;F&&(0,D.vE)(F).then(function(){F==null||F.remove()})}return!1},children:function(K){var U=K.className;return(0,$.jsx)("div",{ref:_,className:(0,l.cn)(f,{"wave-quick":Ee},U),style:J})}})},q=function(t,f){var c,T=f.component;if(!(T==="Checkbox"&&!((c=t.querySelector("input"))!==null&&c!==void 0&&c.checked))){var _=document.createElement("div");_.style.position="absolute",_.style.left="0px",_.style.top="0px",t==null||t.insertBefore(_,t==null?void 0:t.firstChild),(0,D.sY)((0,$.jsx)(G,p()(p()({},f),{},{target:t})),_)}},H=q;function ee(n,t,f){var c=(0,v.zX)(function(Y){var B=n.current;if(B){var w=B.querySelector(".".concat(j))||B;H(w,{className:t,component:f,event:Y})}}),T=a.useRef(),_=function(B){b.Z.cancel(T.current),T.current=(0,b.Z)(function(){c(B)})};return _}var te=function(t){var f=t.children,c=t.disabled,T=t.component,_=(0,a.useRef)(null),Y="moly-wave",B=ee(_,(0,l.cn)(Y),T);if(a.useEffect(function(){var I=_.current;if(!(!I||I.nodeType!==1||c)){var X=function(Q){!(0,u.Z)(Q.target)||!I.getAttribute||I.getAttribute("disabled")||I.disabled||I.className.includes("-leave")||B(Q)};return I.addEventListener("click",X,!0),function(){I.removeEventListener("click",X,!0)}}},[c]),!a.isValidElement(f))return f!=null?f:null;var w=(0,r.Yr)(f)?(0,r.sQ)(f.ref,_):_;return g(f,{ref:w})},ae=te}}]);
