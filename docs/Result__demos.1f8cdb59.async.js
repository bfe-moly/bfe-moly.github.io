"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[1338],{61116:function(j,p,e){e.r(p);var g=e(5574),d=e.n(g),f=e(21256),h=e(67294),x=e(55902),u=e(521),i=e(7935),c=e(63606),o=e(85893),b=function(n){var s=n.label,l=n.value,m=n.items,r=n.handleRadioChange,v=(0,f.OI)(),E=d()(v,1),y=E[0];return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:s}),(0,o.jsx)(x.Z,{size:"medium",items:m,value:l,orientation:"horizontal",handleRadioChange:r,theme:y})]})},_=["success","error","pending","warning","clock","countdown"],t=function(){var n=(0,h.useState)("large"),s=d()(n,2),l=s[0],m=s[1],r=(0,h.useState)("success"),v=d()(r,2),E=v[0],y=v[1],R=(0,h.useState)(1),A=d()(R,2),C=A[0],M=A[1],T=(0,h.useState)(1),D=d()(T,2),S=D[0],O=D[1],U=(0,h.useState)(1),N=d()(U,2),B=N[0],I=N[1],L={title:"Title is optional, shorter is better",subTitle:"Short description better no more than 2 lines. Maximum width: 400px",extra:{large:(0,o.jsxs)(u.Z,{size:24,children:[(0,o.jsx)(i.Z,{size:"middle",variant:"primary",children:"Button"}),(0,o.jsx)(i.Z,{size:"middle",variant:"secondary",children:"Button"})]}),medium:(0,o.jsxs)(u.Z,{size:12,children:[(0,o.jsx)(i.Z,{size:"x-small",variant:"primary",children:"Button"}),(0,o.jsx)(i.Z,{size:"x-small",variant:"secondary",children:"Button"})]}),small:(0,o.jsxs)(u.Z,{size:12,children:[(0,o.jsx)(i.Z,{size:"x-small",variant:"primary",children:"Button"}),(0,o.jsx)(i.Z,{size:"x-small",variant:"secondary",children:"Button"})]})}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{value:E,handleRadioChange:function(P){y(P)},label:"status",items:[{key:"1",value:"success",childrenNode:"success"},{key:"2",value:"error",childrenNode:"error"},{key:"3",value:"pending",childrenNode:"pending"},{key:"4",value:"warning",childrenNode:"warning"},{key:"5",value:"clock",childrenNode:"clock"},{key:"6",value:"countdown",childrenNode:"countdown"},{key:"7",value:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",childrenNode:"\u81EA\u5B9A\u4E49\u56FE\u7247"}]}),(0,o.jsx)(b,{value:l,handleRadioChange:function(P){m(P)},label:"size",items:[{key:"large",value:"large",childrenNode:"large"},{key:"medium",value:"medium",childrenNode:"medium"},{key:"small",value:"small",childrenNode:"small"}]}),(0,o.jsx)(b,{value:S,label:"isShowTitle",handleRadioChange:function(P){O(P)},items:[{key:"isShowTitleShow",value:1,childrenNode:"show"},{key:"isShowTitleHide",value:0,childrenNode:"hide"}]}),(0,o.jsx)(b,{handleRadioChange:function(P){I(P)},label:"isShowSubTitle",value:B,items:[{key:"isShowSubTitleShow",value:1,childrenNode:"show"},{key:"isShowSubTitleHide",value:0,childrenNode:"hide"}]}),(0,o.jsx)(b,{value:C,handleRadioChange:function(P){M(P)},label:"isShowSubExtra",items:[{key:"isShowSubExtraShow",value:1,childrenNode:"show"},{key:"isShowSubExtraShowHide",value:0,childrenNode:"hide"}]}),(0,o.jsx)(c.Z,{title:S?L.title:"",subTitle:B?L.subTitle:"",extra:C?L.extra[l]:null,size:l,status:E,image:_.includes(E)?null:E,countdown:10})]})};p.default=t},82912:function(j,p,e){e.r(p);var g=e(5574),d=e.n(g),f=e(67294),h=e(63606),x=e(521),u=e(7935),i=e(21256),c=e(85893),o=function(){var _=(0,i.OI)(),t=d()(_,1),a=t[0];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(h.Z,{theme:a,image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},size:"small",title:"Title is optional, shorter is better",subTitle:"Short description better no more than 2 lines. Maximum width: 400px",extra:(0,c.jsxs)(x.Z,{size:12,children:[(0,c.jsx)(u.Z,{size:"x-small",variant:"primary",children:"Button"}),(0,c.jsx)(u.Z,{size:"x-small",variant:"secondary",children:"Button"})]})})})};p.default=o},7935:function(j,p,e){var g=e(57636);p.Z=g.z},521:function(j,p,e){e.d(p,{Z:function(){return _}});var g=e(68400),d=e.n(g),f=e(36493),h=e(93985),x=e(46069),u=e(67294),i=e(85893),c,o=(0,h.hi)(c||(c=d()([`
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
`]))),b=u.forwardRef(function(t,a){var n=t.className,s=t.children,l=t.size,m=t.align,r=t.direction,v=r===void 0?"horizontal":r,E=t.wrap,y=t.split,R=t.compact,A=t.style,C=m||(v==="horizontal"?"center":"start"),M=function(){var D=Array.isArray(l)?l:[l,l],S=D.map(function(O){return typeof O=="number"?"".concat(O,"px"):O==="middle"?"16px":O==="large"?"24px":"8px"});return S.join(" ")};return(0,i.jsx)("div",{className:(0,f.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":v==="vertical","items-center":C==="center"||v==="horizontal","items-start":C==="start","items-end":C==="end","items-baseline":C==="baseline","flex-wrap":E,"moly-space-compact":R},n),style:R?{}:{gap:M()},ref:a,children:u.Children.map(s,function(T,D){return(0,i.jsxs)(u.Fragment,{children:[(0,i.jsx)("div",{style:A,className:(0,f.cn)("moly-space-item",{"w-full":C==="stretch","moly-space-item-first":D===0,"moly-space-item-last":D===u.Children.count(s)-1}),children:T}),y&&(0,i.jsx)("div",{className:"moly-space-split last:hidden",children:y})]},D)})})});b.displayName=x.fC.displayName;var _=b},57636:function(j,p,e){e.d(p,{z:function(){return n}});var g=e(97857),d=e.n(g),f=e(13769),h=e.n(f),x=e(36493),u=e(42978),i=e(70696),c=e(19492),o=e(67294),b=e(85893),_=["className","variant","size","loading","subtitle","block"],t=(0,c.j)(["moly-btn inline-flex items-center justify-center rounded-lg select-none","text-base font-bds-font-weight-medium transition-all leading-6 font-IBM font-semibold","disabled:cursor-not-allowed disabled:opacity-40 bg-transparent","outline-none ring-btn-default focus-visible:ring-[5px]","border-y-[1px] border-solid border-transparent"],{variants:{variant:{default:["border border-solid border-base-bds-static-border-color bg-base-bds-static-white text-base-bds-static-black","enable:active:border active:border-base-bds-static-active-color active:text-base-bds-static-active-color","enabled:hover:border-brandColor-bds-brand-600-hover","enabled:hover:text-brandColor-bds-brand-600-hover"],primary:["bg-brandColor-bds-brand-700-normal text-base-bds-static-black","enabled:active:bg-brandColor-bds-brand-800-pressed enabled:active:text-base-bds-static-black","enabled:hover:bg-brandColor-bds-brand-600-hover"],secondary:["border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title","enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title","enabled:hover:border-base-bds-gray-t4-dis","enabled:hover:text-base-bds-gray-t2","disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3"],secondaryBrand:["border border-solid border-brandColor-bds-brand-900-focus text-brandColor-bds-brand-900-text","enabled:hover:text-brandColor-bds-brand-700-normal enabled:hover:border-brandColor-bds-brand-600-hover","enabled:active:border-brandColor-bds-brand-800-pressed enabled:active:text-brandColor-bds-brand-800-pressed","disabled:border-base-bds-static-border-color","disabled:opacity-90 disabled:text-base-bds-gray-t3"],tradeLong:["bg-greenColor-bds-green-700-normal text-base-bds-static-white","enabled:active:bg-greenColor-bds-green-800-pressed enabled:active:text-base-bds-static-white","enabled:hover:bg-greenColor-bds-green-600-hover","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-green"],tradeShort:["bg-redColor-bds-red-700-normal text-base-bds-static-white enabled:hover:bg-redColor-bds-red-600-hover","enabled:active:bg-redColor-bds-red-800-pressed enabled:active:text-base-bds-static-white","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-red"],tradeSecondary:["text-base-bds-gray-t1-title bg-base-bds-gray-ele-border","enabled:hover:bg-base-bds-gray-ele-line enabled:active:bg-base-bds-gray-ele-border enabled:hover:text-base-bds-gray-t1-title","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100"],marketing:["opacity-100 bg-bds-gradient-brand enabled:hover:bg-marketing-btn-background-hover","enabled:active:bg-marketing-btn-background-press","enabled:hover:opacity-90","text-base-bds-static-black"]},size:{middle:"px-[24px] py-[11px]","xx-small":"text-xs leading-[18px] px-[8px] py-[2px] rounded","x-small":"text-xs leading-[18px] px-[12px] py-[6px] rounded",small:"text-sm leading-[22px] px-[16px] py-[8px] rounded",large:"text-lg leading-[26px] px-[32px] py-[14px]","x-large":"text-xl px-[32px] py-[17px]"}},defaultVariants:{variant:"default",size:"middle"}}),a={PRIMARY:"primary",SECONDARY:"secondary",SECONDARY_BRAND:"secondaryBrand",TRADE_LONG:"tradeLong",TRADE_SHORT:"tradeShort",TRADE_SECONDARY:"tradeSecondary"},n=o.forwardRef(function(s,l){var m=s.className,r=s.variant,v=s.size,E=s.loading,y=E===void 0?!1:E,R=s.subtitle,A=R===void 0?"":R,C=s.block,M=C===void 0?!1:C,T=h()(s,_),D=A&&v==="small"&&[a.TRADE_LONG,a.TRADE_SHORT,a.TRADE_SECONDARY].includes(r),S="".concat(M?"w-full":""),O=D?(0,b.jsx)("button",d()(d()({className:(0,x.cn)(t({variant:r,size:v,className:m}),S,"pt-[4px] pb-[6px]"),ref:l},T),{},{children:(0,b.jsxs)("div",{className:"btn-content flex flex-col",children:[(0,b.jsx)("div",{className:"inner-children leading-[20px]",children:T.children}),(0,b.jsx)("div",{className:"subtitle font-regular text-xs opacity-70 leading-[10px]",children:A})]})})):(0,b.jsxs)("button",d()(d()({className:(0,x.cn)(t({variant:r,size:v,className:m}),S,{"bg-brandColor-bds-brand-600-hover":y&&r===a.PRIMARY,"text-base-bds-gray-t2":y&&r===a.SECONDARY,"text-brandColor-bds-brand-700-normal":y&&r===a.SECONDARY_BRAND,"bg-greenColor-bds-green-600-hover":y&&r===a.TRADE_LONG,"bg-redColor-bds-red-600-hover":y&&r===a.TRADE_SHORT,"bg-base-bds-gray-ele-line":y&&r===a.TRADE_SECONDARY,"pointer-events-none":y}),ref:l},T),{},{children:[y?(0,b.jsx)(i.LoadingIcon,{className:"mr-2 rtl:ml-2 animate-spin"}):null,T.children]}));return(0,b.jsx)(u.Z,{component:"Button",children:O})});n.displayName="Button"},65090:function(j,p,e){e.d(p,{F:function(){return x}});var g=e(5574),d=e.n(g),f=e(67294),h=function(i){if(typeof window!="undefined"){var c=document.documentElement;return c.classList.contains("moly-theme-dark")?"dark":i||"light"}return"light"},x=function(){var i=(0,f.useState)(h()),c=d()(i,2),o=c[0],b=c[1],_=null;return typeof window!="undefined"&&(_=new MutationObserver(function(){b(h())}),_.observe(document.documentElement,{attributes:!0})),(0,f.useEffect)(function(){return function(){var t;return(t=_)===null||t===void 0?void 0:t.disconnect()}}),[o]}},81396:function(j,p,e){e.d(p,{j:function(){return i},VG:function(){return c}});var g=e(15009),d=e.n(g),f=e(99289),h=e.n(f),x=function(){var t=["en","en-US","zh-CN","zh-TW","ja-JP","ko-KR","ru-RU","es-ES","vi-VN","tr-TR","pt-BR","pt-PT","fr-FR","th-TH","id-ID","kk-KZ","fil-PH","uk-UA","hi-IN","ar-SA","es-MX","es-AR","es-419","zh-MY","pl-PL","nl-NL"],a=window.location.host,n=window.location.pathname,s=n,l=n.split("/");return t.some(function(m){var r;return(m==null?void 0:m.toLocaleLowerCase())===((r=l[1])===null||r===void 0?void 0:r.toLocaleLowerCase())})&&(s="/"+l.slice(2).join("/")),"".concat(a).concat(s)},u=function(){var _=h()(d()().mark(function t(){var a,n=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return a=n.length>0&&n[0]!==void 0?n[0]:30,l.abrupt("return",new Promise(function(m){var r,v;(r=window)!==null&&r!==void 0&&r.sensorsDataAnalytic201505&&(v=window.sensorsDataAnalytic201505)!==null&&v!==void 0&&v.enableLocalLog&&m(window.sensorsDataAnalytic201505),setTimeout(function(){a>0?u(a-1).then(m):m(null)},100)}));case 2:case"end":return l.stop()}},t)}));return function(){return _.apply(this,arguments)}}(),i=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];u().then(function(s){s==null||s.track.apply(s,a)})},c=function(t){i("molyComp",{comp_type:t||"",host_path:x()})},o=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];console.log(a)},b=function(){for(var t,a,n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];var m=s[0],r=m===void 0?{}:m;Object.prototype.toString.call(r)==="[object Object]"&&(r.host_path=getHostPath());var v=((t=window)===null||t===void 0||(a=t.Monitor)===null||a===void 0?void 0:a.log)||o;v.apply(void 0,s)}}}]);
