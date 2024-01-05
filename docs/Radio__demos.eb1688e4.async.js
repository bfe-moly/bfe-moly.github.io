"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[7075],{27410:function(g,l,e){e.r(l);var c=e(55902),_=e(67294),s=e(85893),r=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,{items:[{key:"1",value:"First",childrenNode:"First"}],orientation:"horizontal"})})};l.default=r},31058:function(g,l,e){e.r(l);var c=e(5574),_=e.n(c),s=e(55902),r=e(521),b=e(7935),o=e(67294),a=e(85893),u=function(){var n=(0,o.useState)(!0),m=_()(n,2),t=m[0],d=m[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{style:{fontSize:"14px",margin:"14px auto"},children:"Disable"}),(0,a.jsx)(s.Z,{items:[{key:"disable1",value:"First",childrenNode:"First"},{key:"disable2",value:"Second",childrenNode:"Second",disabled:!0},{key:"disable3",value:"Third",childrenNode:"Third"}],value:"Second",orientation:"horizontal"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{style:{fontSize:"14px",margin:"14px auto"},children:"DisableAll"}),(0,a.jsx)(s.Z,{items:[{key:"disableAll1",value:"First",childrenNode:"First"},{key:"disableAll2",value:"Second",childrenNode:"Second",disabled:!0},{key:"disableAll3",value:"Third",childrenNode:"Third"}],value:"Second",disabledAll:t,orientation:"horizontal"})]}),(0,a.jsx)(r.Z,{wrap:!0,children:(0,a.jsx)(b.Z,{style:{marginTop:"16px"},className:"my-btn",variant:"tradeLong",size:"small",onClick:function(){return d(!t)},children:"Toggle DisableAll"})})]})};l.default=u},3530:function(g,l,e){e.r(l),e.d(l,{default:function(){return d}});var c=e(55902),_=e(67294),s=e(68400),r=e.n(s),b=e(93985),o,a,u=(0,b.iv)(o||(o=r()([`
  color: #121214;
  font-family: 'IBM Plex Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`]))),E=(0,b.iv)(a||(a=r()([`
  color: #81858c;
  font-family: 'IBM Plex Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  float: left;
`]))),n=e(85893),m="extra",t=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(c.Z,{items:[{key:"".concat(m,"_1"),value:"First",childrenNode:"First"},{key:"".concat(m,"_2"),value:"Second",childrenNode:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:u,children:"Option Title"}),(0,n.jsx)("span",{className:E,children:"A brief description of this option or the tips that help users to make their choice. A brief description of this option or the tips that help users to make their choice. A brief description of this option or the tips that help users to make their choice."})]}),disabled:!0},{key:"".concat(m,"_3"),value:"Third",childrenNode:(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:u,children:"Third"})})}],value:"Second",size:"small"})})},d=t},42967:function(g,l,e){e.r(l);var c=e(5574),_=e.n(c),s=e(521),r=e(55902),b=e(67294),o=e(85893),a="mult",u=function(){var n,m,t=[{key:"".concat(a,"1"),value:"First",childrenNode:"First"},{key:"".concat(a,"2"),value:"Second",childrenNode:"Second"},{key:"".concat(a,"3"),value:"Third",childrenNode:"Third"}],d=(0,b.useState)(t==null||(n=t[0])===null||n===void 0?void 0:n.value),h=_()(d,2),v=h[0],x=h[1],f=(0,b.useState)(t==null||(m=t[0])===null||m===void 0?void 0:m.value),i=_()(f,2),p=i[0],j=i[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{wrap:!0,children:(0,o.jsx)(r.Z,{value:v,items:t,orientation:"horizontal",handleRadioChange:x,radioName:"first"})}),(0,o.jsx)(s.Z,{wrap:!0,children:(0,o.jsx)(r.Z,{value:p,items:t,orientation:"horizontal",handleRadioChange:j,radioName:"second"})})]})})};l.default=u},62872:function(g,l,e){e.r(l);var c=e(55902),_=e(67294),s=e(85893),r="size",b=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{style:{fontSize:"14px",margin:"14px auto"},children:"Small"}),(0,s.jsx)(c.Z,{items:[{key:"".concat(r,"1"),value:"First",childrenNode:"First"},{key:"".concat(r,"2"),value:"Second",childrenNode:"Second",disabled:!0},{key:"".concat(r,"3"),value:"Third",childrenNode:"Third"}],value:"Second",size:"small",orientation:"horizontal"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{style:{fontSize:"14px",margin:"14px auto"},children:"Medium"}),(0,s.jsx)(c.Z,{items:[{key:"".concat(r,"_2_1"),value:"First",childrenNode:"First"},{key:"".concat(r,"_2_2"),value:"Second",childrenNode:"Second",disabled:!0},{key:"".concat(r,"_2_3"),value:"Third",childrenNode:"Third"}],value:"Second",size:"medium",orientation:"horizontal"})]})]})};l.default=b},72279:function(g,l,e){e.r(l);var c=e(5574),_=e.n(c),s=e(55902),r=e(521),b=e(7935),o=e(67294),a=e(85893),u="theme",E=function(){var m=(0,o.useState)("light"),t=_()(m,2),d=t[0],h=t[1],v=function(){var f,i,p=(f=window)===null||f===void 0||(i=f.localStorage)===null||i===void 0?void 0:i.getItem("dumi:prefers-color");p&&h(p)};return(0,o.useEffect)(function(){v()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{style:{fontSize:"14px",margin:"14px auto",filter:"invert(100%)",mixBlendMode:"difference"},children:["\u5F53\u524D\u4E3B\u9898\uFF1A",d]}),(0,a.jsx)(s.Z,{items:[{key:"".concat(u,"1"),value:"First",childrenNode:"First"},{key:"".concat(u,"2"),value:"Second",childrenNode:"Second",disabled:!0},{key:"".concat(u,"3"),value:"Third",childrenNode:"Third"}],value:"Second",theme:d,orientation:"horizontal"})]}),(0,a.jsx)(r.Z,{wrap:!0,children:(0,a.jsx)(b.Z,{style:{marginTop:"16px"},className:"my-btn",variant:"tradeLong",size:"small",onClick:v,children:"\u8DDF\u968F\u4E3B\u9898\u76AE\u80A4"})})]})};l.default=E},7935:function(g,l,e){var c=e(57636);l.Z=c.z},521:function(g,l,e){e.d(l,{Z:function(){return m}});var c=e(68400),_=e.n(c),s=e(36493),r=e(93985),b=e(46069),o=e(67294),a=e(85893),u,E=(0,r.hi)(u||(u=_()([`
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
`]))),n=o.forwardRef(function(t,d){var h=t.className,v=t.children,x=t.size,f=t.align,i=t.direction,p=i===void 0?"horizontal":i,j=t.wrap,y=t.split,T=t.compact,M=t.style,D=f||(p==="horizontal"?"center":"start"),R=function(){var O=Array.isArray(x)?x:[x,x],C=O.map(function(P){return typeof P=="number"?"".concat(P,"px"):P==="middle"?"16px":P==="large"?"24px":"8px"});return C.join(" ")};return(0,a.jsx)("div",{className:(0,s.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":p==="vertical","items-center":D==="center"||p==="horizontal","items-start":D==="start","items-end":D==="end","items-baseline":D==="baseline","flex-wrap":j,"moly-space-compact":T},h),style:T?{}:{gap:R()},ref:d,children:o.Children.map(v,function(A,O){return(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)("div",{style:M,className:(0,s.cn)("moly-space-item",{"w-full":D==="stretch","moly-space-item-first":O===0,"moly-space-item-last":O===o.Children.count(v)-1}),children:A}),y&&(0,a.jsx)("div",{className:"moly-space-split last:hidden",children:y})]},O)})})});n.displayName=b.fC.displayName;var m=n},57636:function(g,l,e){e.d(l,{z:function(){return h}});var c=e(97857),_=e.n(c),s=e(13769),r=e.n(s),b=e(36493),o=e(42978),a=e(70696),u=e(19492),E=e(67294),n=e(85893),m=["className","variant","size","loading","subtitle","block"],t=(0,u.j)(["moly-btn inline-flex items-center justify-center rounded-lg select-none","text-base font-bds-font-weight-medium transition-all leading-6 font-IBM font-semibold","disabled:cursor-not-allowed disabled:opacity-40 bg-transparent","outline-none ring-btn-default focus-visible:ring-[5px]","border-y-[1px] border-solid border-transparent"],{variants:{variant:{default:["border border-solid border-base-bds-static-border-color bg-base-bds-static-white text-base-bds-static-black","enable:active:border active:border-base-bds-static-active-color active:text-base-bds-static-active-color","enabled:hover:border-brandColor-bds-brand-600-hover","enabled:hover:text-brandColor-bds-brand-600-hover"],primary:["bg-brandColor-bds-brand-700-normal text-base-bds-static-black","enabled:active:bg-brandColor-bds-brand-800-pressed enabled:active:text-base-bds-static-black","enabled:hover:bg-brandColor-bds-brand-600-hover"],secondary:["border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title","enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title","enabled:hover:border-base-bds-gray-t4-dis","enabled:hover:text-base-bds-gray-t2","disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3"],secondaryBrand:["border border-solid border-brandColor-bds-brand-900-focus text-brandColor-bds-brand-900-text","enabled:hover:text-brandColor-bds-brand-700-normal enabled:hover:border-brandColor-bds-brand-600-hover","enabled:active:border-brandColor-bds-brand-800-pressed enabled:active:text-brandColor-bds-brand-800-pressed","disabled:border-base-bds-static-border-color","disabled:opacity-90 disabled:text-base-bds-gray-t3"],tradeLong:["bg-greenColor-bds-green-700-normal text-base-bds-static-white","enabled:active:bg-greenColor-bds-green-800-pressed enabled:active:text-base-bds-static-white","enabled:hover:bg-greenColor-bds-green-600-hover","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-green"],tradeShort:["bg-redColor-bds-red-700-normal text-base-bds-static-white enabled:hover:bg-redColor-bds-red-600-hover","enabled:active:bg-redColor-bds-red-800-pressed enabled:active:text-base-bds-static-white","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-red"],tradeSecondary:["text-base-bds-gray-t1-title bg-base-bds-gray-ele-border","enabled:hover:bg-base-bds-gray-ele-line enabled:active:bg-base-bds-gray-ele-border enabled:hover:text-base-bds-gray-t1-title","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100"],marketing:["opacity-100 bg-bds-gradient-brand enabled:hover:bg-marketing-btn-background-hover","enabled:active:bg-marketing-btn-background-press","enabled:hover:opacity-90","text-base-bds-static-black"]},size:{middle:"px-[24px] py-[11px]","xx-small":"text-xs leading-[18px] px-[8px] py-[2px] rounded","x-small":"text-xs leading-[18px] px-[12px] py-[6px] rounded",small:"text-sm leading-[22px] px-[16px] py-[8px] rounded",large:"text-lg leading-[26px] px-[32px] py-[14px]","x-large":"text-xl px-[32px] py-[17px]"}},defaultVariants:{variant:"default",size:"middle"}}),d={PRIMARY:"primary",SECONDARY:"secondary",SECONDARY_BRAND:"secondaryBrand",TRADE_LONG:"tradeLong",TRADE_SHORT:"tradeShort",TRADE_SECONDARY:"tradeSecondary"},h=E.forwardRef(function(v,x){var f=v.className,i=v.variant,p=v.size,j=v.loading,y=j===void 0?!1:j,T=v.subtitle,M=T===void 0?"":T,D=v.block,R=D===void 0?!1:D,A=r()(v,m),O=M&&p==="small"&&[d.TRADE_LONG,d.TRADE_SHORT,d.TRADE_SECONDARY].includes(i),C="".concat(R?"w-full":""),P=O?(0,n.jsx)("button",_()(_()({className:(0,b.cn)(t({variant:i,size:p,className:f}),C,"pt-[4px] pb-[6px]"),ref:x},A),{},{children:(0,n.jsxs)("div",{className:"btn-content flex flex-col",children:[(0,n.jsx)("div",{className:"inner-children leading-[20px]",children:A.children}),(0,n.jsx)("div",{className:"subtitle font-regular text-xs opacity-70 leading-[10px]",children:M})]})})):(0,n.jsxs)("button",_()(_()({className:(0,b.cn)(t({variant:i,size:p,className:f}),C,{"bg-brandColor-bds-brand-600-hover":y&&i===d.PRIMARY,"text-base-bds-gray-t2":y&&i===d.SECONDARY,"text-brandColor-bds-brand-700-normal":y&&i===d.SECONDARY_BRAND,"bg-greenColor-bds-green-600-hover":y&&i===d.TRADE_LONG,"bg-redColor-bds-red-600-hover":y&&i===d.TRADE_SHORT,"bg-base-bds-gray-ele-line":y&&i===d.TRADE_SECONDARY,"pointer-events-none":y}),ref:x},A),{},{children:[y?(0,n.jsx)(a.LoadingIcon,{className:"mr-2 rtl:ml-2 animate-spin"}):null,A.children]}));return(0,n.jsx)(o.Z,{component:"Button",children:P})});h.displayName="Button"}}]);
