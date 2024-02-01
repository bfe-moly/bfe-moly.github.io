"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2066,7686],{84011:function(B,u,e){e.r(u);var _=e(27036),o=e(59250),m=e(67294),n=e(85893),v=[{key:"t1",label:"tab1",children:"content1"},{key:"t2",label:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:"tab2"}),(0,n.jsx)(_.V,{variant:"default",size:"small",color:"green",children:"Label"})]}),children:"content2"}],f=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(o.Z,{items:v,defaultActiveKey:"t1"})})};u.default=f},62944:function(B,u,e){e.r(u);var _=e(22641),o=e(59250),m=e(7935),n=e(67294),v=e(85893),f=[{key:"t1",label:"tab1",children:"content1"},{key:"t2",label:"tab2",children:"content2"}],a=function(){var b=(0,_.S)(),l=b?{marginLeft:"12px"}:{marginRight:"12px"};return(0,v.jsx)(o.Z,{items:f,tabBarGutter:20,defaultActiveKey:"t1",tabBarExtraContent:{left:(0,v.jsx)(m.Z,{variant:"tradeLong",style:l,size:"small",children:"Extra Left"}),right:(0,v.jsx)(m.Z,{variant:"tradeShort",size:"small",children:"Extra Right"})}})};u.default=a},6253:function(B,u,e){e.r(u);var _=e(5574),o=e.n(_),m=e(86855),n=e(521),v=e(7935),f=e(59250),a=e(67294),t=e(85893),b=new Array(30).fill(1).map(function(D,i){return{key:"t".concat(i),label:"tab".concat(i),children:"content".concat(i)}}),l=function(){var i=(0,a.useState)(!0),p=o()(i,2),r=p[0],g=p[1],E=(0,a.useState)("title"),h=o()(E,2),d=h[0],O=h[1],P=["title","button","buttonBg","text"];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{children:"\u6EDA\u52A8\u6309\u94AE\uFF1A"}),(0,t.jsx)(m.Z,{checkedChildren:"\u663E\u793A",unCheckedChildren:"\u9690\u85CF",checked:r,onCheckedChange:g})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(n.Z,{size:"middle",children:["tabType:",P.map(function(y){return(0,t.jsx)(v.Z,{size:"x-small",variant:y===d?"primary":"default",onClick:function(){O(y)},children:y},y)})]}),(0,t.jsx)("br",{}),(0,t.jsx)(f.Z,{items:b,defaultActiveKey:"t1",showScrollButton:r,tabType:d})]})};u.default=l},4817:function(B,u,e){e.r(u);var _=e(5574),o=e.n(_),m=e(521),n=e(7935),v=e(59250),f=e(67294),a=e(85893),t=[{key:"t1",label:"tab1",children:"content1"},{key:"t2",label:"tab2",children:"content2"}],b=["xl","l","m","s","xs"],l=function(){var i=(0,f.useState)("m"),p=o()(i,2),r=p[0],g=p[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{display:"flex",marginBottom:"12px"},children:(0,a.jsx)(m.Z,{size:"middle",children:b.map(function(E){return(0,a.jsx)(n.Z,{size:"x-small",variant:E===r?"primary":"default",onClick:function(){g(E)},children:E},E)})})}),(0,a.jsx)(v.Z,{items:t,size:r,defaultActiveKey:"t1"})]})};u.default=l},74233:function(B,u,e){e.r(u);var _=e(5574),o=e.n(_),m=e(521),n=e(7935),v=e(86855),f=e(59250),a=e(67294),t=e(85893),b=[{key:"t1",label:"\u6211\u662Ftab1",children:"content1"},{key:"t2",label:"\u6211\u662Ftab2\u6211\u662Ftab2",children:"content2"},{key:"t3",label:"\u6211\u662Ftab3\u6211\u662Ftab3\u6211\u662Ftab3",children:"content3"},{key:"t4",label:"\u6211\u662Ftab4\u6211\u662Ftab4\u6211\u662Ftab4\u6211\u662Ftab4",children:"content4"},{key:"t5",label:"\u6211\u662Ftab5\u6211\u662Ftab5\u6211\u662Ftab5",children:"content5"}],l=["title","button","buttonBg","text"],D=["xl","l","m","s","xs"],i=["default","primary","primaryLite","tradeLong","tradeLongLite","tradeShort","tradeShortLite"],p=function(){var g=(0,a.useState)("title"),E=o()(g,2),h=E[0],d=E[1],O=(0,a.useState)("m"),P=o()(O,2),y=P[0],C=P[1],I=(0,a.useState)("default"),j=o()(I,2),M=j[0],S=j[1],A=(0,a.useState)(!1),U=o()(A,2),L=U[0],z=U[1],Y=(0,a.useState)(!1),G=o()(Y,2),H=G[0],Q=G[1];return(0,a.useEffect)(function(){Q(h==="title"||h==="buttonBg")},[h]),(0,t.jsxs)("div",{children:[(0,t.jsxs)(m.Z,{size:"middle",children:["size:",D.map(function(T){return(0,t.jsx)(n.Z,{size:"x-small",variant:T===y?"primary":"default",onClick:function(){C(T)},children:T},T)})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(m.Z,{size:"middle",children:["tabType:",l.map(function(T){return(0,t.jsx)(n.Z,{size:"x-small",variant:T===h?"primary":"default",onClick:function(){d(T)},children:T},T)})]}),h==="buttonBg"?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),(0,t.jsxs)(m.Z,{size:"middle",children:["buttonType:",i.map(function(T){return(0,t.jsx)(n.Z,{size:"x-small",variant:T===M?"primary":"default",onClick:function(){S(T)},children:T},T)})]})]}):null,H?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{children:"\u662F\u5426\u5747\u5206\uFF1A"}),(0,t.jsx)(v.Z,{checkedChildren:"\u5747\u5206",unCheckedChildren:"\u4E0D\u5747\u5206",checked:L,onCheckedChange:z})]})]}):null,(0,t.jsx)("br",{}),(0,t.jsx)(f.Z,{size:y,buttonType:M,items:b,defaultActiveKey:"t1",tabType:h,isEqualDivided:L})]})};u.default=p},7935:function(B,u,e){var _=e(57636);u.Z=_.z},521:function(B,u,e){e.d(u,{Z:function(){return D}});var _=e(68400),o=e.n(_),m=e(36493),n=e(93985),v=e(46069),f=e(67294),a=e(85893),t,b=(0,n.hi)(t||(t=o()([`
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
`]))),l=f.forwardRef(function(i,p){var r=i.className,g=i.children,E=i.size,h=i.align,d=i.direction,O=d===void 0?"horizontal":d,P=i.wrap,y=i.split,C=i.compact,I=i.style,j=h||(O==="horizontal"?"center":"start"),M=function(){var A=Array.isArray(E)?E:[E,E],U=A.map(function(L){return typeof L=="number"?"".concat(L,"px"):L==="middle"?"16px":L==="large"?"24px":"8px"});return U.join(" ")};return(0,a.jsx)("div",{className:(0,m.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":O==="vertical","items-center":j==="center"||O==="horizontal","items-start":j==="start","items-end":j==="end","items-baseline":j==="baseline","flex-wrap":P,"moly-space-compact":C},r),style:C?{}:{gap:M()},ref:p,children:f.Children.map(g,function(S,A){return S?(0,a.jsxs)(f.Fragment,{children:[(0,a.jsx)("div",{style:I,className:(0,m.cn)("moly-space-item",{"w-full":j==="stretch","moly-space-item-first":A===0,"moly-space-item-last":A===f.Children.count(g)-1}),children:S}),y&&(0,a.jsx)("div",{className:"moly-space-split last:hidden",children:y})]},A):null})})});l.displayName=v.fC.displayName;var D=l},86855:function(B,u,e){e.d(u,{Z:function(){return y}});var _=e(97857),o=e.n(_),m=e(5574),n=e.n(m),v=e(13769),f=e.n(v),a=e(60761),t=e(67294),b=e(36493),l=e(42978),D=e(68400),i=e.n(D),p=e(93985),r,g,E=(0,p.iv)(r||(r=i()([`
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
`]))),h=(0,p.iv)(g||(g=i()([`
  background-color: var(--bds-static-white);
`]))),d=e(85893),O=["className","size","disabled","loading","unCheckedChildren","checkedChildren","onCheckedChange"],P=t.forwardRef(function(C,I){var j=C.className,M=C.size,S=C.disabled,A=C.loading,U=C.unCheckedChildren,L=C.checkedChildren,z=C.onCheckedChange,Y=f()(C,O),G=(0,t.useState)(Y.defaultChecked),H=n()(G,2),Q=H[0],T=H[1],w=function(s){T(s),z==null||z(s)};return(0,d.jsx)(l.Z,{component:"switch",children:(0,d.jsx)(a.fC,o()(o()({className:(0,b.cn)([E,"bg-[var(--bds-gray-t3)] text-xs rounded-full relative group select-none","transition-all","outline-none focus-visible:ring-[5px] ring-btn-default",{"h-5 min-w-[42px]":M!=="small"},{"min-w-[20px] h-[10px]":M==="small"},j])},Y),{},{ref:I,disabled:S||A,onCheckedChange:w,children:(0,d.jsxs)(d.Fragment,{children:[M!=="small"&&(0,d.jsx)("div",{className:(0,b.cn)("px-[6px] flex text-white align-center  transition-[padding]","group-data-[state=unchecked]:pl-[22px] group-data-[state=checked]:pr-[22px]","rtl:group-data-[state=unchecked]:pl-0  rtl:group-data-[state=checked]:pr-0 rtl:group-data-[state=unchecked]:pr-[22px] rtl:group-data-[state=checked]:pl-[22px]"),children:Q?L:U}),(0,d.jsx)("div",{className:(0,b.cn)("absolute h-full left-[2px] right-[2px] top-0",{"left-[1px] right-[1px]":M==="small"}),children:(0,d.jsx)(a.bU,{className:(0,b.cn)([h,"block w-[16px] h-[16px] rounded-full absolute top-1/2 -translate-y-1/2 transition-[left] pointer-events-none text-[var(--bds-brand-700-normal)]","-translate-x-full data-[state=unchecked]:left-[16px] data-[state=checked]:left-full","rtl:data-[state=checked]:left-[16px] rtl:data-[state=unchecked]:left-full",{"w-[8px] h-[8px] data-[state=unchecked]:left-[8px]":M==="small"}]),children:A&&(0,d.jsx)("svg",{className:"absolute top-1/2 left-1/2 -mt-[6px] -ml-[6px] animate-spin",viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading",width:"12px",height:"12px",fill:"currentColor","aria-hidden":"true",children:(0,d.jsx)("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"})})})})]})}))})});P.displayName=a.fC.displayName;var y=P},57636:function(B,u,e){e.d(u,{z:function(){return r}});var _=e(97857),o=e.n(_),m=e(13769),n=e.n(m),v=e(36493),f=e(42978),a=e(70696),t=e(19492),b=e(67294),l=e(85893),D=["className","variant","size","loading","subtitle","block"],i=(0,t.j)(["moly-btn inline-flex items-center justify-center rounded-lg select-none","text-base font-bds-font-weight-medium transition-all leading-6 font-IBM font-semibold","disabled:cursor-not-allowed disabled:opacity-40 bg-transparent","outline-none ring-btn-default focus-visible:ring-[5px]","border-y-[1px] border-solid border-transparent"],{variants:{variant:{default:["border border-solid border-base-bds-static-border-color bg-base-bds-static-white text-base-bds-static-black","enable:active:border active:border-base-bds-static-active-color active:text-base-bds-static-active-color","enabled:hover:border-brandColor-bds-brand-600-hover","enabled:hover:text-brandColor-bds-brand-600-hover"],primary:["bg-brandColor-bds-brand-700-normal text-base-bds-static-black","enabled:active:bg-brandColor-bds-brand-800-pressed enabled:active:text-base-bds-static-black","enabled:hover:bg-brandColor-bds-brand-600-hover"],secondary:["border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title","enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title","enabled:hover:border-base-bds-gray-t4-dis","enabled:hover:text-base-bds-gray-t2","disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3"],secondaryBrand:["border border-solid border-brandColor-bds-brand-900-focus text-brandColor-bds-brand-900-text","enabled:hover:text-brandColor-bds-brand-700-normal enabled:hover:border-brandColor-bds-brand-600-hover","enabled:active:border-brandColor-bds-brand-800-pressed enabled:active:text-brandColor-bds-brand-800-pressed","disabled:border-base-bds-static-border-color","disabled:opacity-90 disabled:text-base-bds-gray-t3"],tradeLong:["bg-greenColor-bds-green-700-normal text-base-bds-static-white","enabled:active:bg-greenColor-bds-green-800-pressed enabled:active:text-base-bds-static-white","enabled:hover:bg-greenColor-bds-green-600-hover","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-green"],tradeShort:["bg-redColor-bds-red-700-normal text-base-bds-static-white enabled:hover:bg-redColor-bds-red-600-hover","enabled:active:bg-redColor-bds-red-800-pressed enabled:active:text-base-bds-static-white","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-red"],tradeSecondary:["text-base-bds-gray-t1-title bg-base-bds-gray-ele-border","enabled:hover:bg-base-bds-gray-ele-line enabled:active:bg-base-bds-gray-ele-border enabled:hover:text-base-bds-gray-t1-title","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100"],marketing:["opacity-100 bg-bds-gradient-brand enabled:hover:bg-marketing-btn-background-hover","enabled:active:bg-marketing-btn-background-press","enabled:hover:opacity-90","text-base-bds-static-black"]},size:{middle:"px-[24px] py-[11px]","xx-small":"text-xs leading-[18px] px-[8px] py-[2px] rounded","x-small":"text-xs leading-[18px] px-[12px] py-[6px] rounded",small:"text-sm leading-[22px] px-[16px] py-[8px] rounded",large:"text-lg leading-[26px] px-[32px] py-[14px]","x-large":"text-xl px-[32px] py-[17px]"}},defaultVariants:{variant:"default",size:"middle"}}),p={PRIMARY:"primary",SECONDARY:"secondary",SECONDARY_BRAND:"secondaryBrand",TRADE_LONG:"tradeLong",TRADE_SHORT:"tradeShort",TRADE_SECONDARY:"tradeSecondary"},r=b.forwardRef(function(g,E){var h=g.className,d=g.variant,O=g.size,P=g.loading,y=P===void 0?!1:P,C=g.subtitle,I=C===void 0?"":C,j=g.block,M=j===void 0?!1:j,S=n()(g,D),A=I&&O==="small"&&[p.TRADE_LONG,p.TRADE_SHORT,p.TRADE_SECONDARY].includes(d),U="".concat(M?"w-full":""),L=A?(0,l.jsx)("button",o()(o()({className:(0,v.cn)(i({variant:d,size:O,className:h}),U,"pt-[4px] pb-[6px]"),ref:E},S),{},{children:(0,l.jsxs)("div",{className:"btn-content flex flex-col",children:[(0,l.jsx)("div",{className:"inner-children leading-[20px]",children:S.children}),(0,l.jsx)("div",{className:"subtitle font-regular text-xs opacity-70 leading-[10px]",children:I})]})})):(0,l.jsxs)("button",o()(o()({className:(0,v.cn)(i({variant:d,size:O,className:h}),U,{"bg-brandColor-bds-brand-600-hover":y&&d===p.PRIMARY,"text-base-bds-gray-t2":y&&d===p.SECONDARY,"text-brandColor-bds-brand-700-normal":y&&d===p.SECONDARY_BRAND,"bg-greenColor-bds-green-600-hover":y&&d===p.TRADE_LONG,"bg-redColor-bds-red-600-hover":y&&d===p.TRADE_SHORT,"bg-base-bds-gray-ele-line":y&&d===p.TRADE_SECONDARY,"pointer-events-none":y}),ref:E},S),{},{children:[y?(0,l.jsx)(a.LoadingIcon,{className:"mr-2 rtl:ml-2 animate-spin"}):null,S.children]}));return(0,l.jsx)(f.Z,{component:"Button",children:L})});r.displayName="Button"},27036:function(B,u,e){e.d(u,{V:function(){return i}});var _=e(97857),o=e.n(_),m=e(13769),n=e.n(m),v=e(67294),f=e(36493),a=e(70696),t=e(19492),b=(0,t.j)(["whitespace-nowrap font-medium","inline-flex items-center gap-1","ps-2 pe-2","rounded","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:bg-base-bds-gray-ele-edge data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs leading-[16.8px] h-[16.8px] scale-[0.83333] ps-[4px] pe-[4px]"],normal:["text-xs leading-[18px] h-[18px] ps-[4px] pe-[4px]"],large:["text-sm leading-[24px] h-[24px] ps-[6px] pe-[6px]"],xlarge:["text-base leading-[32px] h-[32px] ps-[8px] pe-[8px]"]},variant:{default:[],primary:["text-white"],light:[]},color:{neutral:[],red:[],green:[],brand:[],"reddish-gradient":[],"brand-gradient":[]},shape:{normal:[],leaf:["rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none"]}},compoundVariants:[{variant:"default",color:"neutral",className:["bg-base-bds-gray-ele-line text-base-bds-gray-t2"]},{variant:"default",color:"red",className:["bg-redColor-bds-red-100-bg text-redColor-bds-red-700-normal"]},{variant:"default",color:"green",className:["bg-greenColor-bds-green-100-bg text-greenColor-bds-green-700-normal"]},{variant:"default",color:"brand",className:["bg-brandColor-bds-brand-100-bg text-brandColor-bds-brand-900-text"]},{variant:"primary",color:"neutral",className:["bg-base-bds-gray-t2 "]},{variant:"primary",color:"red",className:["bg-redColor-bds-red-700-normal"]},{variant:"primary",color:"green",className:["bg-greenColor-bds-green-700-normal"]},{variant:"primary",color:"brand",className:["bg-brandColor-bds-brand-700-normal"]},{variant:"primary",color:"reddish-gradient",className:["bg-bds-gradient-reddish"]},{variant:"primary",color:"brand-gradient",className:["bg-bds-gradient-brand text-base-bds-gray-t1-title"]},{variant:"light",color:"neutral",className:["border border-solid border-base-bds-gray-t4-dis","text-base-bds-gray-t2","data-[disabled]:bg-transparent data-[disabled]:border-base-bds-gray-ele-border"]}],defaultVariants:{variant:"default",size:"normal",color:"neutral",shape:"normal"}}),l=e(85893),D=["className","color","variant","size","shape","children","closeIcon","onClose","style"],i=(0,v.forwardRef)(function(r,g){var E=r.className,h=r.color,d=r.variant,O=r.size,P=r.shape,y=r.children,C=r.closeIcon,I=C===void 0?!1:C,j=r.onClose,M=r.style,S=n()(r,D),A=(0,v.useMemo)(function(){return h?(0,f.K_)(h)?d==="primary"?{backgroundColor:h}:{color:h,backgroundColor:(0,f.ey)(h,.2)}:{}:{}},[]),U=function(z){r.disabled||j==null||j(z)};return(0,l.jsxs)("div",o()(o()({className:(0,f.cn)(E,b({color:h,variant:d,size:O,shape:P})),ref:g,"data-disabled":r.disabled?"":void 0,style:o()(o()({},M),A)},S),{},{children:[y,I&&(0,l.jsx)(a.CloseIcon,{className:"cursor-pointer data-[disabled]:cursor-not-allowed","data-disabled":r.disabled?"":void 0,onClick:U})]}))})},22641:function(B,u,e){e.d(u,{S:function(){return t}});var _=e(5574),o=e.n(_),m=e(67294),n=!1,v=!1,f=new Set,a=function(l){n=l,f.forEach(function(D){return D()})},t=function(){var l=(0,m.useState)(n),D=o()(l,2),i=D[0],p=D[1];return(0,m.useEffect)(function(){var r=function(){p(n)};return f.add(r),function(){f.delete(r)}},[]),(0,m.useEffect)(function(){if(!v){v=!0,a(document.documentElement.dir==="rtl");var r=new MutationObserver(function(){a(document.documentElement.dir==="rtl")});r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}},[]),i}},36493:function(B,u,e){e.d(u,{KX:function(){return f},K_:function(){return n},cn:function(){return m},ey:function(){return v}});var _=e(86010),o=e(57851);function m(){for(var a=arguments.length,t=new Array(a),b=0;b<a;b++)t[b]=arguments[b];return(0,o.m)((0,_.W)(t))}function n(a){return a?/^#[0-9A-F]{6}$/i.test(a):!1}function v(a,t){if(!n(a))return a;var b=Math.round(t*255);return"".concat(a).concat(b.toString(16).toUpperCase())}function f(a,t){var b=a.findIndex(function(l){return l!=null});return b===-1?t:a[b]}},42978:function(B,u,e){e.d(u,{Z:function(){return w}});var _=e(36493),o=e(55331),m=e(75531),n=e(67294),v=n.isValidElement;function f(c){return c&&v(c)&&c.type===React.Fragment}function a(c,s,R){return v(c)?n.cloneElement(c,typeof R=="function"?R(c.props||{}):R):s}function t(c,s){return a(c,c,s)}var b=e(38024),l=e(64543),D=e(97857),i=e.n(D),p=e(5574),r=e.n(p),g=e(68400),E=e.n(g),h=e(93985),d,O="moly-wave-motion",P="cubic-bezier(0.08, 0.82, 0.17, 1)",y="cubic-bezier(0.645, 0.045, 0.355, 1)",C=(0,h.hi)(d||(d=E()([`
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
`])),O,P,P,y,y),I=e(82225),j=e(24996),M="moly-wave-target";function S(c){var s=(c||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return s&&s[1]&&s[2]&&s[3]?!(s[1]===s[2]&&s[2]===s[3]):!0}function A(c){return c&&c!=="#fff"&&c!=="#ffffff"&&c!=="rgb(255, 255, 255)"&&c!=="rgba(255, 255, 255, 1)"&&S(c)&&!/rgba\((?:\d*, ){3}0\)/.test(c)&&c!=="transparent"}function U(c){var s=getComputedStyle(c),R=s.borderTopColor,x=s.borderColor,K=s.backgroundColor;return A(R)?R:A(x)?x:A(K)?K:""}function L(c){return Number.isNaN(c)?0:c}var z=e(85893),Y=function(s){var R=s.className,x=s.target,K=s.component,N=n.useRef(null),X=n.useState([]),Z=r()(X,2),J=Z[0],k=Z[1],ee=n.useState(0),ne=r()(ee,2),te=ne[0],ie=ne[1],ce=n.useState(0),re=r()(ce,2),be=re[0],ue=re[1],me=n.useState(0),se=r()(me,2),ve=se[0],fe=se[1],pe=n.useState(0),oe=r()(pe,2),_e=oe[0],he=oe[1],ye=n.useState(!1),le=r()(ye,2),ge=le[0],xe=le[1],ae={left:te,top:be,width:ve,height:_e,borderRadius:J.map(function(W){return"".concat(W,"px")}).join(" ")};x.classList.contains("ring-btn-green")?ae["--wave-color"]="var(--bds-green-100-bg)":x.classList.contains("ring-btn-red")?ae["--wave-color"]="var(--bds-red-100-bg)":ae["--wave-color"]="var(--bds-brand-100-bg)";function de(){var W=getComputedStyle(x),$=W.position==="static",F=W.borderLeftWidth,q=W.borderTopWidth;ie($?x.offsetLeft:L(-parseFloat(F))),ue($?x.offsetTop:L(-parseFloat(q))),fe(x.offsetWidth),he(x.offsetHeight);var V=W.borderTopLeftRadius,Ce=W.borderTopRightRadius,Re=W.borderBottomLeftRadius,je=W.borderBottomRightRadius;k([V,Ce,je,Re].map(function(De){return L(parseFloat(De))}))}if(n.useEffect(function(){if(x){var W=(0,l.Z)(function(){de(),xe(!0)}),$;return typeof ResizeObserver!="undefined"&&($=new ResizeObserver(de),$.observe(x)),function(){var F;l.Z.cancel(W),(F=$)===null||F===void 0||F.disconnect()}}},[]),!ge)return null;var Ee=(K==="Checkbox"||K==="Radio")&&(x==null?void 0:x.classList.contains(M));return(0,z.jsx)(I.ZP,{visible:!0,motionAppear:!0,motionName:O,motionDeadline:500,onAppearEnd:function($,F){if(F.deadline||F.propertyName==="opacity"){var q,V=(q=N.current)===null||q===void 0?void 0:q.parentElement;V&&(0,j.vE)(V).then(function(){V==null||V.remove()})}return!1},children:function($){var F=$.className;return(0,z.jsx)("div",{ref:N,className:(0,_.cn)(R,{"wave-quick":Ee},F),style:ae})}})},G=function(s,R){var x,K=R.component;if(!(K==="Checkbox"&&!((x=s.querySelector("input"))!==null&&x!==void 0&&x.checked))){var N=document.createElement("div");N.style.position="absolute",N.style.left="0px",N.style.top="0px",s==null||s.insertBefore(N,s==null?void 0:s.firstChild),(0,j.sY)((0,z.jsx)(Y,i()(i()({},R),{},{target:s})),N)}},H=G;function Q(c,s,R){var x=(0,b.zX)(function(X){var Z=c.current;if(Z){var J=Z.querySelector(".".concat(M))||Z;H(J,{className:s,component:R,event:X})}}),K=n.useRef(),N=function(Z){l.Z.cancel(K.current),K.current=(0,l.Z)(function(){x(Z)})};return N}var T=function(s){var R=s.children,x=s.disabled,K=s.component,N=(0,n.useRef)(null),X="moly-wave",Z=Q(N,(0,_.cn)(X),K);if(n.useEffect(function(){var k=N.current;if(!(!k||k.nodeType!==1||x)){var ee=function(te){!(0,o.Z)(te.target)||!k.getAttribute||k.getAttribute("disabled")||k.disabled||k.className.includes("-leave")||Z(te)};return k.addEventListener("click",ee,!0),function(){k.removeEventListener("click",ee,!0)}}},[x]),!n.isValidElement(R))return R!=null?R:null;var J=(0,m.Yr)(R)?(0,m.sQ)(R.ref,N):N;return t(R,{ref:J})},w=T}}]);
