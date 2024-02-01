"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[3081],{40860:function(U,x,t){t.r(x);var O=t(80820),_=t(70332),p=t(7935),r=t(85893),h=function(){var c=(0,O.pm)(),n=c.toast,d=c.EToastType,f="\u63CF\u8FF0\u6587\u6848";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.I,{}),(0,r.jsxs)("div",{className:"moly-space flex items-center flex-wrap moly-space-compact",style:{gap:"8px"},children:[(0,r.jsx)(p.Z,{variant:"tradeLong","data-swipe-direction":"down",onClick:function(){n({iconType:d.SUCCESS,title:f})},children:"success"}),(0,r.jsx)(p.Z,{variant:"tradeShort","data-swipe-direction":"down",onClick:function(){n({iconType:d.FAIL,title:f})},children:"fail"}),(0,r.jsx)(p.Z,{variant:"primary","data-swipe-direction":"down",onClick:function(){n({iconType:d.INFO,title:f})},children:"info"}),(0,r.jsx)(p.Z,{variant:"tradeShort","data-swipe-direction":"down",onClick:function(){n({iconType:d.WARN,title:f})},children:"warn"}),(0,r.jsx)(p.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){n({iconType:d.PROCESS,title:f})},children:"process"})]})]})};x.default=h},70332:function(U,x,t){t.d(x,{I:function(){return s}});var O=t(97857),_=t.n(O),p=t(13769),r=t.n(p),h=t(22641),y=t(36493),c=t(77310),n=t(19492),d=t(67294),f=t(68400),u=t.n(f),P=t(93985),j,I=(0,P.iv)(j||(j=u()([`
  .moly-toast-background {
    max-width: 480px;
    width: auto;
    background-color: var(--bds-gray-bg-float);
    padding: 12px 16px 12px 40px;
    box-shadow: var(--bds-shadow-l2);
  }

  .moly-toast-background[data-state='open'] {
    transition-timing-function: ease-in;
  }
  .moly-toast-background[data-state='closed'] {
    transition-timing-function: ease-out;
  }

  // \u4F7F\u7528absolute\u5E03\u5C40\uFF0C\u5B9E\u73B0\u591A\u884C\u7684\u60C5\u51B5\u4E0B, icon\u9AD8\u5EA6\u4E0D\u53D8
  .moly-toast-icon-success,
  .moly-toast-icon-fail,
  .moly-toast-icon-warn,
  .moly-toast-icon-info,
  .moly-toast-icon-process {
    display: inline-block;
    position: absolute;
    top: 14px;
    left: 16px;
    font-size: 16px;
  }

  .moly-toast-icon-success {
    color: var(--bds-green-700-normal);
  }

  .moly-toast-icon-fail,
  .moly-toast-icon-warn {
    color: var(--bds-red-700-normal);
  }

  .moly-toast-icon-info {
    color: var(--bds-brand-700-normal);
  }

  .moly-toast-icon-process {
    color: var(--bds-gray-t2);
  }

  .moly-toast-title {
    color: var(--bds-gray-t1-title);
    word-break: break-word;
  }

  /* \u963F\u8BED\u9002\u914D */
  .moly-toast-background-rtl {
    direction: rtl;
    padding: 12px 40px 12px 16px;
    .moly-toast-icon-success,
    .moly-toast-icon-fail,
    .moly-toast-icon-warn,
    .moly-toast-icon-info,
    .moly-toast-icon-process {
      left: unset;
      right: 16px;
    }
  }

  @media (max-width: 767px) {
    li.moly-toast-background {
      max-width: calc(100vw - 64px);
    }
  }
`]))),i=t(85893),L=["className"],A=["className","variant"],N=["className"],g=["className"],D=c.zt,C=d.forwardRef(function(e,a){var o=e.className,m=r()(e,L);return(0,i.jsx)(c.l_,_()({ref:a,className:(0,y.cn)(I,"fixed top-0 z-[9999] flex max-h-screen flex-col mt-16 left-1/2 justify-center items-center w-0 [&:not(:empty)]:w-max -translate-x-1/2 pointer-events-none",o)},m))});C.displayName=c.l_.displayName;var S=(0,n.j)("group pointer-events-auto relative flex items-center justify-between space-x-4 overflow-hidden rounded-md border shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",{variants:{variant:{default:"border bg-background moly-toast-background flex justify-center align-center border-0 rounded-lg mb-2",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),T=d.forwardRef(function(e,a){var o=e.className,m=e.variant,b=r()(e,A),E=(0,h.S)();return(0,i.jsx)(c.fC,_()({ref:a,className:(0,y.cn)(S({variant:m}),"".concat(E?"moly-toast-background-rtl":""),o)},b))});T.displayName=c.fC.displayName;var v=d.forwardRef(function(e,a){var o=e.className,m=r()(e,N);return(0,i.jsx)(c.aU,_()({ref:a,className:(0,y.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",o)},m))});v.displayName=c.aU.displayName;var M=d.forwardRef(function(e,a){var o=e.className,m=r()(e,g);return(0,i.jsx)(c.Dx,_()({ref:a,className:(0,y.cn)("text-sm font-medium moly-toast-title",o)},m))});M.displayName=c.Dx.displayName;var R=t(80820),l=["id","title","action","duration"];function s(){var e=(0,R.pm)(),a=e.toasts;return(0,i.jsxs)(D,{swipeDirection:"down",children:[a.map(function(o){var m=o.id,b=o.title,E=o.action,w=o.duration,W=w===void 0?3e3:w,B=r()(o,l);return(0,i.jsxs)(T,_()(_()({duration:W},B),{},{children:[(0,i.jsx)("div",{className:"grid gap-1",children:b&&(0,i.jsx)(M,{children:b})}),E]}),m)}),(0,i.jsx)(C,{})]})}},80820:function(U,x,t){t.d(x,{pm:function(){return R}});var O=t(5574),_=t.n(O),p=t(13769),r=t.n(p),h=t(19632),y=t.n(h),c=t(97857),n=t.n(c),d=t(70696),f=t(67294),u=t(85893),P=["iconType"],j=3,I=3e3,i=function(l){return l.SUCCESS="success",l.FAIL="fail",l.INFO="info",l.WARN="warn",l.PROCESS="process",l}(i||{}),L={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"},A=0;function N(){return A=(A+1)%Number.MAX_VALUE,A.toString()}var g=new Map,D=function(s){if(!g.has(s)){var e=setTimeout(function(){g.delete(s),v&&v({type:"REMOVE_TOAST",toastId:s})},I);g.set(s,e)}},C=function(s,e){switch(e.type){case"ADD_TOAST":return n()(n()({},s),{},{toasts:[e.toast].concat(y()(s.toasts)).slice(0,j)});case"UPDATE_TOAST":return n()(n()({},s),{},{toasts:s.toasts.map(function(o){return o.id===e.toast.id?n()(n()({},o),e.toast):o})});case"DISMISS_TOAST":{var a=e.toastId;return a?D(a):s.toasts.forEach(function(o){D(o.id)}),n()(n()({},s),{},{toasts:s.toasts.map(function(o){return o.id===a||a===void 0?n()(n()({},o),{},{open:!1}):o})})}case"REMOVE_TOAST":return e.toastId===void 0?n()(n()({},s),{},{toasts:[]}):n()(n()({},s),{},{toasts:s.toasts.filter(function(o){return o.id!==e.toastId})})}},S=[],T={toasts:[]};function v(l){T=C(T,l),S.forEach(function(s){s(T)})}function M(l){var s=l.iconType,e=r()(l,P),a=N();e.title=(0,u.jsxs)(u.Fragment,{children:[s===i.SUCCESS&&(0,u.jsx)(d.CircleIcon,{className:"moly-toast-icon-success"}),s===i.FAIL&&(0,u.jsx)(d.EmptyIcon,{className:"moly-toast-icon-fail"}),s===i.INFO&&(0,u.jsx)(d.AlertCircleSolidIcon,{className:"moly-toast-icon-info"}),s===i.WARN&&(0,u.jsx)(d.AlertTriangleSolidIcon,{className:"moly-toast-icon-warn"}),s===i.PROCESS&&(0,u.jsx)(d.LoadingIcon,{className:"moly-toast-icon-process animate-spin"}),e.title]});var o=function(E){return v({type:"UPDATE_TOAST",toast:n()(n()({},E),{},{id:a})})},m=function(){return v({type:"DISMISS_TOAST",toastId:a})};return v({type:"ADD_TOAST",toast:n()(n()({},e),{},{id:a,open:!0,onOpenChange:function(E){E||m()}})}),{id:a,dismiss:m,update:o}}function R(){var l=(0,f.useState)(T),s=_()(l,2),e=s[0],a=s[1];return(0,f.useEffect)(function(){return S.push(a),function(){var o=S.indexOf(a);o>-1&&S.splice(o,1)}},[e]),n()(n()({},e),{},{toast:M,EToastType:i,dismiss:function(m){return v({type:"DISMISS_TOAST",toastId:m})}})}}}]);
