"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2066],{84011:function(N,v,e){e.r(v);var y=e(27036),l=e(59250),c=e(67294),n=e(85893),f=[{key:"t1",label:"tab1",children:"content1"},{key:"t2",label:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:"tab2"}),(0,n.jsx)(y.V,{variant:"default",size:"small",color:"green",children:"Label"})]}),children:"content2"}],u=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(l.Z,{items:f,defaultActiveKey:"t1"})})};v.default=u},62944:function(N,v,e){e.r(v);var y=e(22641),l=e(59250),c=e(7935),n=e(67294),f=e(85893),u=[{key:"t1",label:"tab1",children:"content1"},{key:"t2",label:"tab2",children:"content2"}],a=function(){var i=(0,y.S)(),m=i?{marginLeft:"12px"}:{marginRight:"12px"};return(0,f.jsx)(l.Z,{items:u,tabBarGutter:20,defaultActiveKey:"t1",tabBarExtraContent:{left:(0,f.jsx)(c.Z,{variant:"tradeLong",style:m,size:"small",children:"Extra Left"}),right:(0,f.jsx)(c.Z,{variant:"tradeShort",size:"small",children:"Extra Right"})}})};v.default=a},6253:function(N,v,e){e.r(v);var y=e(5574),l=e.n(y),c=e(86855),n=e(521),f=e(7935),u=e(59250),a=e(67294),t=e(85893),i=new Array(30).fill(1).map(function(C,d){return{key:"t".concat(d),label:"tab".concat(d),children:"content".concat(d)}}),m=function(){var d=(0,a.useState)(!0),j=l()(d,2),o=j[0],O=j[1],x=(0,a.useState)("title"),p=l()(x,2),h=p[0],D=p[1],M=["title","button","buttonBg","text"];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{children:"\u6EDA\u52A8\u6309\u94AE\uFF1A"}),(0,t.jsx)(c.Z,{checkedChildren:"\u663E\u793A",unCheckedChildren:"\u9690\u85CF",checked:o,onCheckedChange:O})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(n.Z,{size:"middle",children:["tabType:",M.map(function(T){return(0,t.jsx)(f.Z,{size:"x-small",variant:T===h?"primary":"default",onClick:function(){D(T)},children:T},T)})]}),(0,t.jsx)("br",{}),(0,t.jsx)(u.Z,{items:i,defaultActiveKey:"t1",showScrollButton:o,tabType:h})]})};v.default=m},4817:function(N,v,e){e.r(v);var y=e(5574),l=e.n(y),c=e(521),n=e(7935),f=e(59250),u=e(67294),a=e(85893),t=[{key:"t1",label:"tab1",children:"content1"},{key:"t2",label:"tab2",children:"content2"}],i=["xl","l","m","s","xs"],m=function(){var d=(0,u.useState)("m"),j=l()(d,2),o=j[0],O=j[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{display:"flex",marginBottom:"12px"},children:(0,a.jsx)(c.Z,{size:"middle",children:i.map(function(x){return(0,a.jsx)(n.Z,{size:"x-small",variant:x===o?"primary":"default",onClick:function(){O(x)},children:x},x)})})}),(0,a.jsx)(f.Z,{items:t,size:o,defaultActiveKey:"t1"})]})};v.default=m},74233:function(N,v,e){e.r(v);var y=e(5574),l=e.n(y),c=e(521),n=e(7935),f=e(86855),u=e(59250),a=e(67294),t=e(85893),i=[{key:"t1",label:"\u6211\u662Ftab1",children:"content1"},{key:"t2",label:"\u6211\u662Ftab2\u6211\u662Ftab2",children:"content2"},{key:"t3",label:"\u6211\u662Ftab3\u6211\u662Ftab3\u6211\u662Ftab3",children:"content3"},{key:"t4",label:"\u6211\u662Ftab4\u6211\u662Ftab4\u6211\u662Ftab4\u6211\u662Ftab4",children:"content4"},{key:"t5",label:"\u6211\u662Ftab5\u6211\u662Ftab5\u6211\u662Ftab5",children:"content5"}],m=["title","button","buttonBg","text"],C=["xl","l","m","s","xs"],d=["default","primary","primaryLite","tradeLong","tradeLongLite","tradeShort","tradeShortLite"],j=function(){var O=(0,a.useState)("title"),x=l()(O,2),p=x[0],h=x[1],D=(0,a.useState)("m"),M=l()(D,2),T=M[0],E=M[1],F=(0,a.useState)("default"),R=l()(F,2),A=R[0],U=R[1],S=(0,a.useState)(!1),$=l()(S,2),L=$[0],I=$[1],G=(0,a.useState)(!1),H=l()(G,2),X=H[0],J=H[1];return(0,a.useEffect)(function(){J(p==="title"||p==="buttonBg")},[p]),(0,t.jsxs)("div",{children:[(0,t.jsxs)(c.Z,{size:"middle",children:["size:",C.map(function(_){return(0,t.jsx)(n.Z,{size:"x-small",variant:_===T?"primary":"default",onClick:function(){E(_)},children:_},_)})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(c.Z,{size:"middle",children:["tabType:",m.map(function(_){return(0,t.jsx)(n.Z,{size:"x-small",variant:_===p?"primary":"default",onClick:function(){h(_)},children:_},_)})]}),p==="buttonBg"?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),(0,t.jsxs)(c.Z,{size:"middle",children:["buttonType:",d.map(function(_){return(0,t.jsx)(n.Z,{size:"x-small",variant:_===A?"primary":"default",onClick:function(){U(_)},children:_},_)})]})]}):null,X?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{children:"\u662F\u5426\u5747\u5206\uFF1A"}),(0,t.jsx)(f.Z,{checkedChildren:"\u5747\u5206",unCheckedChildren:"\u4E0D\u5747\u5206",checked:L,onCheckedChange:I})]})]}):null,(0,t.jsx)("br",{}),(0,t.jsx)(u.Z,{size:T,buttonType:A,items:i,defaultActiveKey:"t1",tabType:p,isEqualDivided:L})]})};v.default=j},521:function(N,v,e){e.d(v,{Z:function(){return C}});var y=e(68400),l=e.n(y),c=e(36493),n=e(93985),f=e(46069),u=e(67294),a=e(85893),t,i=(0,n.hi)(t||(t=l()([`
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
`]))),m=u.forwardRef(function(d,j){var o=d.className,O=d.children,x=d.size,p=d.align,h=d.direction,D=h===void 0?"horizontal":h,M=d.wrap,T=d.split,E=d.compact,F=d.style,R=p||(D==="horizontal"?"center":"start"),A=function(){var S=Array.isArray(x)?x:[x,x],$=S.map(function(L){return typeof L=="number"?"".concat(L,"px"):L==="middle"?"16px":L==="large"?"24px":"8px"});return $.join(" ")};return(0,a.jsx)("div",{className:(0,c.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":D==="vertical","items-center":R==="center"||D==="horizontal","items-start":R==="start","items-end":R==="end","items-baseline":R==="baseline","flex-wrap":M,"moly-space-compact":E},o),style:E?{}:{gap:A()},ref:j,children:u.Children.map(O,function(U,S){return(0,a.jsxs)(u.Fragment,{children:[(0,a.jsx)("div",{style:F,className:(0,c.cn)("moly-space-item",{"w-full":R==="stretch","moly-space-item-first":S===0,"moly-space-item-last":S===u.Children.count(O)-1}),children:U}),T&&(0,a.jsx)("div",{className:"moly-space-split last:hidden",children:T})]},S)})})});m.displayName=f.fC.displayName;var C=m},86855:function(N,v,e){e.d(v,{Z:function(){return T}});var y=e(97857),l=e.n(y),c=e(5574),n=e.n(c),f=e(13769),u=e.n(f),a=e(60761),t=e(67294),i=e(36493),m=e(42978),C=e(68400),d=e.n(C),j=e(93985),o,O,x=(0,j.iv)(o||(o=d()([`
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
`]))),p=(0,j.iv)(O||(O=d()([`
  background-color: var(--bds-static-white);
`]))),h=e(85893),D=["className","size","disabled","loading","unCheckedChildren","checkedChildren","onCheckedChange"],M=t.forwardRef(function(E,F){var R=E.className,A=E.size,U=E.disabled,S=E.loading,$=E.unCheckedChildren,L=E.checkedChildren,I=E.onCheckedChange,G=u()(E,D),H=(0,t.useState)(G.defaultChecked),X=n()(H,2),J=X[0],_=X[1],Y=function(r){_(r),I==null||I(r)};return(0,h.jsx)(m.Z,{component:"switch",children:(0,h.jsx)(a.fC,l()(l()({className:(0,i.cn)([x,"bg-[var(--bds-gray-t3)] text-xs rounded-full relative group select-none","transition-all","outline-none focus-visible:ring-[5px] ring-btn-default",{"h-5 min-w-[42px]":A!=="small"},{"min-w-[20px] h-[10px]":A==="small"},R])},G),{},{ref:F,disabled:U||S,onCheckedChange:Y,children:(0,h.jsxs)(h.Fragment,{children:[A!=="small"&&(0,h.jsx)("div",{className:(0,i.cn)("px-[6px] flex text-white align-center  transition-[padding]","group-data-[state=unchecked]:pl-[22px] group-data-[state=checked]:pr-[22px]","rtl:group-data-[state=unchecked]:pl-0  rtl:group-data-[state=checked]:pr-0 rtl:group-data-[state=unchecked]:pr-[22px] rtl:group-data-[state=checked]:pl-[22px]"),children:J?L:$}),(0,h.jsx)("div",{className:(0,i.cn)("absolute h-full left-[2px] right-[2px] top-0",{"left-[1px] right-[1px]":A==="small"}),children:(0,h.jsx)(a.bU,{className:(0,i.cn)([p,"block w-[16px] h-[16px] rounded-full absolute top-1/2 -translate-y-1/2 transition-[left] pointer-events-none text-[var(--bds-brand-700-normal)]","-translate-x-full data-[state=unchecked]:left-[16px] data-[state=checked]:left-full","rtl:data-[state=checked]:left-[16px] rtl:data-[state=unchecked]:left-full",{"w-[8px] h-[8px] data-[state=unchecked]:left-[8px]":A==="small"}]),children:S&&(0,h.jsx)("svg",{className:"absolute top-1/2 left-1/2 -mt-[6px] -ml-[6px] animate-spin",viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading",width:"12px",height:"12px",fill:"currentColor","aria-hidden":"true",children:(0,h.jsx)("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"})})})})]})}))})});M.displayName=a.fC.displayName;var T=M},27036:function(N,v,e){e.d(v,{V:function(){return d}});var y=e(97857),l=e.n(y),c=e(13769),n=e.n(c),f=e(67294),u=e(36493),a=e(70696),t=e(19492),i=(0,t.j)(["whitespace-nowrap font-medium","inline-flex items-center gap-1","ps-2 pe-2","rounded","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:bg-base-bds-gray-ele-edge data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs leading-[16.8px] h-[16.8px] scale-[0.83333] ps-[4px] pe-[4px]"],normal:["text-xs leading-[18px] h-[18px] ps-[4px] pe-[4px]"],large:["text-sm leading-[24px] h-[24px] ps-[6px] pe-[6px]"],xlarge:["text-base leading-[32px] h-[32px] ps-[8px] pe-[8px]"]},variant:{default:[],primary:["text-white"],light:[]},color:{neutral:[],red:[],green:[],brand:[],"reddish-gradient":[],"brand-gradient":[]},shape:{normal:[],leaf:["rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none"]}},compoundVariants:[{variant:"default",color:"neutral",className:["bg-base-bds-gray-ele-line text-base-bds-gray-t2"]},{variant:"default",color:"red",className:["bg-redColor-bds-red-100-bg text-redColor-bds-red-700-normal"]},{variant:"default",color:"green",className:["bg-greenColor-bds-green-100-bg text-greenColor-bds-green-700-normal"]},{variant:"default",color:"brand",className:["bg-brandColor-bds-brand-100-bg text-brandColor-bds-brand-900-text"]},{variant:"primary",color:"neutral",className:["bg-base-bds-gray-t2 "]},{variant:"primary",color:"red",className:["bg-redColor-bds-red-700-normal"]},{variant:"primary",color:"green",className:["bg-greenColor-bds-green-700-normal"]},{variant:"primary",color:"brand",className:["bg-brandColor-bds-brand-700-normal"]},{variant:"primary",color:"reddish-gradient",className:["bg-bds-gradient-reddish"]},{variant:"primary",color:"brand-gradient",className:["bg-bds-gradient-brand text-base-bds-gray-t1-title"]},{variant:"light",color:"neutral",className:["border border-solid border-base-bds-gray-t4-dis","text-base-bds-gray-t2","data-[disabled]:bg-transparent data-[disabled]:border-base-bds-gray-ele-border"]}],defaultVariants:{variant:"default",size:"normal",color:"neutral",shape:"normal"}}),m=e(85893),C=["className","color","variant","size","shape","children","closeIcon","onClose","style"],d=(0,f.forwardRef)(function(o,O){var x=o.className,p=o.color,h=o.variant,D=o.size,M=o.shape,T=o.children,E=o.closeIcon,F=E===void 0?!1:E,R=o.onClose,A=o.style,U=n()(o,C),S=(0,f.useMemo)(function(){return p?(0,u.K_)(p)?h==="primary"?{backgroundColor:p}:{color:p,backgroundColor:(0,u.ey)(p,.2)}:{}:{}},[]),$=function(I){o.disabled||R==null||R(I)};return(0,m.jsxs)("div",l()(l()({className:(0,u.cn)(x,i({color:p,variant:h,size:D,shape:M})),ref:O,"data-disabled":o.disabled?"":void 0,style:l()(l()({},A),S)},U),{},{children:[T,F&&(0,m.jsx)(a.CloseIcon,{className:"cursor-pointer data-[disabled]:cursor-not-allowed","data-disabled":o.disabled?"":void 0,onClick:$})]}))})},22641:function(N,v,e){e.d(v,{S:function(){return t}});var y=e(5574),l=e.n(y),c=e(67294),n=!1,f=!1,u=new Set,a=function(m){n=m,u.forEach(function(C){return C()})},t=function(){var m=(0,c.useState)(n),C=l()(m,2),d=C[0],j=C[1];return(0,c.useEffect)(function(){var o=function(){j(n)};return u.add(o),function(){u.delete(o)}},[]),(0,c.useEffect)(function(){if(!f){f=!0,a(document.documentElement.dir==="rtl");var o=new MutationObserver(function(){a(document.documentElement.dir==="rtl")});o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}},[]),d}},36493:function(N,v,e){e.d(v,{KX:function(){return u},K_:function(){return n},cn:function(){return c},ey:function(){return f}});var y=e(86010),l=e(57851);function c(){for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];return(0,l.m)((0,y.W)(t))}function n(a){return a?/^#[0-9A-F]{6}$/i.test(a):!1}function f(a,t){if(!n(a))return a;var i=Math.round(t*255);return"".concat(a).concat(i.toString(16).toUpperCase())}function u(a,t){var i=a.findIndex(function(m){return m!=null});return i===-1?t:a[i]}},42978:function(N,v,e){e.d(v,{Z:function(){return Y}});var y=e(36493),l=e(55331),c=e(75531),n=e(67294),f=n.isValidElement;function u(s){return s&&f(s)&&s.type===React.Fragment}function a(s,r,g){return f(s)?n.cloneElement(s,typeof g=="function"?g(s.props||{}):g):r}function t(s,r){return a(s,s,r)}var i=e(38024),m=e(64543),C=e(97857),d=e.n(C),j=e(5574),o=e.n(j),O=e(68400),x=e.n(O),p=e(93985),h,D="moly-wave-motion",M="cubic-bezier(0.08, 0.82, 0.17, 1)",T="cubic-bezier(0.645, 0.045, 0.355, 1)",E=(0,p.hi)(h||(h=x()([`
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
`])),D,M,M,T,T),F=e(82225),R=e(24996),A="moly-wave-target";function U(s){var r=(s||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return r&&r[1]&&r[2]&&r[3]?!(r[1]===r[2]&&r[2]===r[3]):!0}function S(s){return s&&s!=="#fff"&&s!=="#ffffff"&&s!=="rgb(255, 255, 255)"&&s!=="rgba(255, 255, 255, 1)"&&U(s)&&!/rgba\((?:\d*, ){3}0\)/.test(s)&&s!=="transparent"}function $(s){var r=getComputedStyle(s),g=r.borderTopColor,b=r.borderColor,B=r.backgroundColor;return S(g)?g:S(b)?b:S(B)?B:""}function L(s){return Number.isNaN(s)?0:s}var I=e(85893),G=function(r){var g=r.className,b=r.target,B=r.component,P=n.useRef(null),Q=n.useState([]),K=o()(Q,2),w=K[0],z=K[1],ee=n.useState(0),ne=o()(ee,2),te=ne[0],de=ne[1],ce=n.useState(0),re=o()(ce,2),ue=re[0],me=re[1],ve=n.useState(0),oe=o()(ve,2),fe=oe[0],be=oe[1],pe=n.useState(0),se=o()(pe,2),he=se[0],ye=se[1],ge=n.useState(!1),le=o()(ge,2),xe=le[0],Ee=le[1],ae={left:te,top:ue,width:fe,height:he,borderRadius:w.map(function(W){return"".concat(W,"px")}).join(" ")};b.classList.contains("ring-btn-green")?ae["--wave-color"]="var(--bds-green-100-bg)":b.classList.contains("ring-btn-red")?ae["--wave-color"]="var(--bds-red-100-bg)":ae["--wave-color"]="var(--bds-brand-100-bg)";function ie(){var W=getComputedStyle(b),V=W.position==="static",Z=W.borderLeftWidth,q=W.borderTopWidth;de(V?b.offsetLeft:L(-parseFloat(Z))),me(V?b.offsetTop:L(-parseFloat(q))),be(b.offsetWidth),ye(b.offsetHeight);var k=W.borderTopLeftRadius,Ce=W.borderTopRightRadius,je=W.borderBottomLeftRadius,Te=W.borderBottomRightRadius;z([k,Ce,Te,je].map(function(Re){return L(parseFloat(Re))}))}if(n.useEffect(function(){if(b){var W=(0,m.Z)(function(){ie(),Ee(!0)}),V;return typeof ResizeObserver!="undefined"&&(V=new ResizeObserver(ie),V.observe(b)),function(){var Z;m.Z.cancel(W),(Z=V)===null||Z===void 0||Z.disconnect()}}},[]),!xe)return null;var _e=(B==="Checkbox"||B==="Radio")&&(b==null?void 0:b.classList.contains(A));return(0,I.jsx)(F.ZP,{visible:!0,motionAppear:!0,motionName:D,motionDeadline:500,onAppearEnd:function(V,Z){if(Z.deadline||Z.propertyName==="opacity"){var q,k=(q=P.current)===null||q===void 0?void 0:q.parentElement;k&&(0,R.vE)(k).then(function(){k==null||k.remove()})}return!1},children:function(V){var Z=V.className;return(0,I.jsx)("div",{ref:P,className:(0,y.cn)(g,{"wave-quick":_e},Z),style:ae})}})},H=function(r,g){var b,B=g.component;if(!(B==="Checkbox"&&!((b=r.querySelector("input"))!==null&&b!==void 0&&b.checked))){var P=document.createElement("div");P.style.position="absolute",P.style.left="0px",P.style.top="0px",r==null||r.insertBefore(P,r==null?void 0:r.firstChild),(0,R.sY)((0,I.jsx)(G,d()(d()({},g),{},{target:r})),P)}},X=H;function J(s,r,g){var b=(0,i.zX)(function(Q){var K=s.current;if(K){var w=K.querySelector(".".concat(A))||K;X(w,{className:r,component:g,event:Q})}}),B=n.useRef(),P=function(K){m.Z.cancel(B.current),B.current=(0,m.Z)(function(){b(K)})};return P}var _=function(r){var g=r.children,b=r.disabled,B=r.component,P=(0,n.useRef)(null),Q="moly-wave",K=J(P,(0,y.cn)(Q),B);if(n.useEffect(function(){var z=P.current;if(!(!z||z.nodeType!==1||b)){var ee=function(te){!(0,l.Z)(te.target)||!z.getAttribute||z.getAttribute("disabled")||z.disabled||z.className.includes("-leave")||K(te)};return z.addEventListener("click",ee,!0),function(){z.removeEventListener("click",ee,!0)}}},[b]),!n.isValidElement(g))return g!=null?g:null;var w=(0,c.Yr)(g)?(0,c.sQ)(g.ref,P):P;return t(g,{ref:w})},Y=_}}]);
