"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[4479],{14479:function(K,P,n){n.d(P,{m:function(){return F}});var U=n(97857),m=n.n(U),L=n(13769),y=n.n(L),O=n(22641),B=n(82545),g=n(36493),o=n(88133),h=n(70696),d=n(77310),x=n(19492),T=n(67294),N=n(68400),b=n.n(N),z=n(93985),C,u=(0,z.iv)(C||(C=b()([`
  li.moly-notification-background:not([icontype]) {
    padding: 16px;
  }

  li.moly-notification-background {
    background-color: var(--bds-gray-bg-float);
    padding: 16px 12px 16px 40px;
    box-shadow: var(--bds-shadow-l2);
  }

  li.moly-notification-background[data-state='open'] {
    transition-timing-function: ease-out;
  }
  li.moly-notification-background[data-state='closed'] {
    transition-timing-function: ease-in;
  }
  li.moly-notification-background[data-state='open'],
  li.moly-notification-background[data-state='closed'] {
    animation-duration: 300ms;
  }

  // \u4F7F\u7528absolute\u5E03\u5C40\uFF0C\u5B9E\u73B0\u591A\u884C\u7684\u60C5\u51B5\u4E0B, icon\u9AD8\u5EA6\u4E0D\u53D8
  .moly-notification-custom-icon {
    width: 16px;
    height: 16px;
    top: 18px;
  }

  .moly-notification-custom-icon,
  .moly-notification-icon-success,
  .moly-notification-icon-fail,
  .moly-notification-icon-warn,
  .moly-notification-icon-info,
  .moly-notification-icon-process {
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 16px;
    font-size: 16px;
  }

  .moly-notification-icon-success {
    color: var(--bds-green-700-normal);
  }

  .moly-notification-icon-fail,
  .moly-notification-icon-warn {
    color: var(--bds-red-700-normal);
  }

  .moly-notification-icon-info {
    color: var(--bds-brand-700-normal);
  }

  .moly-notification-icon-process {
    color: var(--bds-gray-t2);
  }

  .moly-notification-title-limit-width {
    padding-right: 20px;
  }
  .moly-notification-title {
    color: var(--bds-gray-t1-title);
    /* \u8D85\u51FA2\u884C\u663E\u793A ... */
    display: -moz-box;
    display: -webkit-box;
    display: box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  button[moly-notification-close],
  button[moly-notification-close]:focus {
    outline: none;
    box-shadow: none;
    background-color: transparent;
    margin-left: 0;
  }
  .moly-notification-description,
  button[moly-notification-close] {
    color: var(--bds-gray-t2);
  }

  .moly-notification-description {
    /* \u8D85\u51FA4\u884C\u663E\u793A ... */
    display: -moz-box;
    display: -webkit-box;
    display: box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  .moly-notification-arrow-right {
    position: relative;
    top: 2px;
    margin-left: 2px;
  }

  /* \u963F\u8BED\u9002\u914D */
  li.moly-notification-background-rtl {
    direction: rtl;
    padding: 16px 40px 16px 16px;

    .moly-notification-title-limit-width {
      padding-left: 20px;
      padding-right: 0;
    }

    .moly-notification-custom-icon,
    .moly-notification-icon-success,
    .moly-notification-icon-fail,
    .moly-notification-icon-warn,
    .moly-notification-icon-info,
    .moly-notification-icon-process {
      left: unset;
      right: 16px;
    }

    .moly-notification-title,
    .moly-notification-description {
      text-align: right;
      word-break: break-word;
    }

    button[moly-notification-close] {
      top: 12px;
      right: unset;
      left: -10px;
    }

    .moly-notification-arrow-right {
      display: inline-block;
      margin-right: 2px;
      margin-left: 0;
      transform: rotate(180deg);
    }
  }
`]))),r=n(85893),M=["className"],E=["className","variant"],S=["className"],A=["className"],p=["className","showCloseBtn"],k=["className"],W=d.zt,l=T.forwardRef(function(e,f){var v=e.className,a=y()(e,M),_=(0,O.S)();return(0,r.jsx)(d.l_,m()({ref:f,className:(0,g.cn)(u,"fixed z-[9999] flex max-h-screen w-0 flex-col m-4 mb-10 bottom-0 sm:top-auto [&:not(:empty)]:w-80",{"left-0":_,"right-0":!_},v)},a))});l.displayName=d.l_.displayName;var t=(0,x.j)("group pointer-events-auto relative flex items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80",{variants:{variant:{default:"border bg-background moly-notification-background flex justify-center align-center border-0 rounded-lg mb-2",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),s=T.forwardRef(function(e,f){var v=e.className,a=e.variant,_=y()(e,E),R=(0,O.S)();return(0,r.jsx)(d.fC,m()({ref:f,className:(0,g.cn)(t({variant:a}),"".concat(R?"moly-notification-background-rtl data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full":"data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full"),v)},_))});s.displayName=d.fC.displayName;var c=T.forwardRef(function(e,f){var v=e.className,a=y()(e,S);return(0,r.jsx)(d.aU,m()({ref:f,className:(0,g.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",v)},a))});c.displayName=d.aU.displayName;var i=T.forwardRef(function(e,f){var v=e.className,a=y()(e,A);return(0,r.jsx)(d.x8,m()(m()({ref:f,className:(0,g.cn)("absolute right-2 top-4 rounded-md text-foreground/50 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",v),"moly-notification-close":"moly-notification-close"},a),{},{children:(0,r.jsx)(o.Z,{variant:"default",size:"x-small",children:(0,r.jsx)(h.CloseIcon,{})})}))});i.displayName=d.x8.displayName;var j=T.forwardRef(function(e,f){var v=e.className,a=e.showCloseBtn,_=y()(e,p);return(0,r.jsx)(d.Dx,m()({ref:f,className:(0,g.cn)("text-sm font-medium text-left w-full moly-notification-title",{"moly-notification-title-limit-width":a},v)},_))});j.displayName=d.Dx.displayName;var w=T.forwardRef(function(e,f){var v=e.className,a=y()(e,k);return(0,r.jsx)(d.dk,m()({ref:f,className:(0,g.cn)("mt-1 text-xs opacity-90 text-left w-full moly-notification-description",v)},a))});w.displayName=d.dk.displayName;var I=n(23272),D=["id","title","description","action","link","linkText","duration","linkTarget","showCloseBtn"];function F(){var e=(0,I.lm)(),f=e.notifications,v=(0,O.S)();return(0,r.jsxs)(W,{swipeDirection:v?"left":"right",children:[f.map(function(a){var _=a.id,R=a.title,V=a.description,G=a.action,$=a.link,H=a.linkText,Q=a.duration,J=Q===void 0?4500:Q,X=a.linkTarget,q=X===void 0?"_blank":X,Y=a.showCloseBtn,Z=Y===void 0?!1:Y,nn=y()(a,D);return(0,r.jsxs)(s,m()(m()({duration:J},nn),{},{children:[(0,r.jsxs)("div",{className:"w-full",children:[R&&(0,r.jsx)(j,{showCloseBtn:Z,children:R}),V&&(0,r.jsx)(w,{children:V}),$&&H&&(0,r.jsx)(B.h,{variant:"primary",size:"small",href:$,opensWindow:q==="_blank",children:H})]}),G,Z&&(0,r.jsx)(i,{})]}),_)}),(0,r.jsx)(l,{})]})}},23272:function(K,P,n){n.d(P,{lm:function(){return W}});var U=n(5574),m=n.n(U),L=n(49677),y=n.n(L),O=n(19632),B=n.n(O),g=n(97857),o=n.n(g),h=n(70696),d=n(67294),x=n(85893),T=4,N=1e6,b=function(l){return l.SUCCESS="success",l.FAIL="fail",l.INFO="info",l.WARN="warn",l.CUSTOM="custom",l}(b||{}),z={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"},C=0;function u(){return C=(C+1)%Number.MAX_VALUE,C.toString()}var r=new Map,M=function(t){if(!r.has(t)){var s=setTimeout(function(){r.delete(t),p&&p({type:"REMOVE_TOAST",toastId:t})},N);r.set(t,s)}},E=function(t,s){switch(s.type){case"ADD_TOAST":return o()(o()({},t),{},{notifications:[s.toast].concat(B()(t.notifications)).slice(0,T)});case"UPDATE_TOAST":return o()(o()({},t),{},{notifications:t.notifications.map(function(i){return i.id===s.toast.id?o()(o()({},i),s.toast):i})});case"DISMISS_TOAST":{var c=s.toastId;return c?M(c):t.notifications.forEach(function(i){M(i.id)}),o()(o()({},t),{},{notifications:t.notifications.map(function(i){return i.id===c||c===void 0?o()(o()({},i),{},{open:!1}):i})})}case"REMOVE_TOAST":return s.toastId===void 0?o()(o()({},t),{},{notifications:[]}):o()(o()({},t),{},{notifications:t.notifications.filter(function(i){return i.id!==s.toastId})})}},S=[],A={notifications:[]};function p(l){A=E(A,l),S.forEach(function(t){t(A)})}function k(l){var t=Object.assign({},(y()(l),l)),s=u(),c=t.icon,i=t.iconType;t.title=(0,x.jsxs)(x.Fragment,{children:[c&&i===b.CUSTOM&&(0,x.jsx)("img",{src:c,className:"moly-notification-custom-icon"}),!c&&i===b.SUCCESS&&(0,x.jsx)(h.CircleIcon,{className:"moly-notification-icon-success"}),!c&&i===b.FAIL&&(0,x.jsx)(h.EmptyIcon,{className:"moly-notification-icon-fail"}),!c&&i===b.INFO&&(0,x.jsx)(h.AlertCircleSolidIcon,{className:"moly-notification-icon-info"}),!c&&i===b.WARN&&(0,x.jsx)(h.AlertTriangleSolidIcon,{className:"moly-notification-icon-warn"}),t.title]});var j=function(D){return p({type:"UPDATE_TOAST",toast:o()(o()({},D),{},{id:s})})},w=function(){return p({type:"DISMISS_TOAST",toastId:s})};return p({type:"ADD_TOAST",toast:o()(o()({},t),{},{id:s,open:!0,onOpenChange:function(D){D||w()}})}),{id:s,dismiss:w,update:j}}function W(){var l=d.useState(A),t=m()(l,2),s=t[0],c=t[1];return d.useEffect(function(){return S.push(c),function(){var i=S.indexOf(c);i>-1&&S.splice(i,1)}},[s]),o()(o()({},s),{},{notification:k,ENotificationType:b,dismiss:function(j){return p({type:"DISMISS_TOAST",toastId:j})}})}},82545:function(K,P,n){n.d(P,{h:function(){return z}});var U=n(97857),m=n.n(U),L=n(5574),y=n.n(L),O=n(13769),B=n.n(O),g=n(22641),o=n(36493),h=n(67294),d=n(70696),x=n(19492),T=(0,x.j)(["no-wrap font-medium transition-all","inline-flex items-center","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs gap-[2px]"],normal:["text-sm gap-[2px]"],large:["text-base gap-[4px]"],xlarge:["text-lg gap-[6px]"]},variant:{primary:[],secondary:[],tertiary:[]}},compoundVariants:[{variant:"primary",className:["text-brandColor-bds-brand-900-text hover:text-brandColor-bds-brand-600-hover cursor-pointer"]},{variant:"secondary",className:["text-base-bds-black-t2 hover:text-base-bds-gray-t2 cursor-pointer"]},{variant:"tertiary",className:["text-base-bds-gray-t2 hover:text-base-bds-gray-t3 cursor-pointer"]}],defaultVariants:{variant:"primary",size:"normal"}}),N=n(85893),b=["className","color","variant","size","href","children","disabled","closeIcon","opensWindow","style","onClick"],z=(0,h.forwardRef)(function(u,r){var M=u.className,E=u.color,S=u.variant,A=u.size,p=u.href,k=u.children,W=u.disabled,l=u.closeIcon,t=l===void 0?!1:l,s=u.opensWindow,c=s===void 0?!1:s,i=u.style,j=u.onClick,w=B()(u,b),I=(0,h.useState)(!1),D=y()(I,2),F=D[0],e=D[1],f=(0,g.S)(),v=(0,h.useMemo)(function(){return E?(0,o.K_)(E)?{color:F?(0,o.ey)(E,.6):E}:{}:{}},[F]),a=function(R){W||(p?c?window.open(p):window.location.href=p:j==null||j(R))};return(0,N.jsxs)("div",m()(m()({className:(0,o.cn)(M,T({variant:S,size:A})),ref:r,"data-disabled":u.disabled?"":void 0,style:m()(m()({},i),v)},w),{},{onMouseEnter:function(){return e(!0)},onMouseLeave:function(){return e(!1)},onClick:a,children:[k,!t&&(f?(0,N.jsx)(d.DirectionleftIcon,{}):(0,N.jsx)(d.DirectionrightIcon,{}))]}))})}}]);
