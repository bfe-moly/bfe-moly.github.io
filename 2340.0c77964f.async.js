"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2340],{86855:function($,C,t){t.d(C,{Z:function(){return N}});var O=t(97857),v=t.n(O),L=t(5574),_=t.n(L),M=t(13769),g=t.n(M),m=t(60761),s=t(67294),d=t(36493),j=t(42978),f=t(68400),A=t.n(f),D=t(93985),w,l,P=(0,D.iv)(w||(w=A()([`
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
`]))),S=(0,D.iv)(l||(l=A()([`
  background-color: var(--bds-static-white);
`]))),u=t(85893),n=["className","size","disabled","loading","unCheckedChildren","checkedChildren","onCheckedChange"],R=s.forwardRef(function(c,y){var h=c.className,b=c.size,E=c.disabled,i=c.loading,a=c.unCheckedChildren,o=c.checkedChildren,r=c.onCheckedChange,e=g()(c,n),p=(0,s.useState)(e.defaultChecked),x=_()(p,2),T=x[0],B=x[1],k=function(W){B(W),r==null||r(W)};return(0,u.jsx)(j.Z,{component:"switch",children:(0,u.jsx)(m.fC,v()(v()({className:(0,d.cn)([P,"bg-[var(--bds-gray-t3)] text-xs rounded-full relative group select-none","transition-all","outline-none focus-visible:ring-[5px] ring-btn-default",{"h-5 min-w-[42px]":b!=="small"},{"min-w-[20px] h-[10px]":b==="small"},h])},e),{},{ref:y,disabled:E||i,onCheckedChange:k,children:(0,u.jsxs)(u.Fragment,{children:[b!=="small"&&(0,u.jsx)("div",{className:(0,d.cn)("px-[6px] flex text-white align-center  transition-[padding]","group-data-[state=unchecked]:pl-[22px] group-data-[state=checked]:pr-[22px]","rtl:group-data-[state=unchecked]:pl-0  rtl:group-data-[state=checked]:pr-0 rtl:group-data-[state=unchecked]:pr-[22px] rtl:group-data-[state=checked]:pl-[22px]"),children:T?o:a}),(0,u.jsx)("div",{className:(0,d.cn)("absolute h-full left-[2px] right-[2px] top-0",{"left-[1px] right-[1px]":b==="small"}),children:(0,u.jsx)(m.bU,{className:(0,d.cn)([S,"block w-[16px] h-[16px] rounded-full absolute top-1/2 -translate-y-1/2 transition-[left] pointer-events-none text-[var(--bds-brand-700-normal)]","-translate-x-full data-[state=unchecked]:left-[16px] data-[state=checked]:left-full","rtl:data-[state=checked]:left-[16px] rtl:data-[state=unchecked]:left-full",{"w-[8px] h-[8px] data-[state=unchecked]:left-[8px]":b==="small"}]),children:i&&(0,u.jsx)("svg",{className:"absolute top-1/2 left-1/2 -mt-[6px] -ml-[6px] animate-spin",viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading",width:"12px",height:"12px",fill:"currentColor","aria-hidden":"true",children:(0,u.jsx)("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"})})})})]})}))})});R.displayName=m.fC.displayName;var N=R},73400:function($,C,t){var O=t(5968);C.Z=O.default},70332:function($,C,t){t.d(C,{I:function(){return a}});var O=t(97857),v=t.n(O),L=t(13769),_=t.n(L),M=t(22641),g=t(36493),m=t(77310),s=t(19492),d=t(67294),j=t(68400),f=t.n(j),A=t(93985),D,w=(0,A.iv)(D||(D=f()([`
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
`]))),l=t(85893),P=["className"],S=["className","variant"],u=["className"],n=["className"],R=m.zt,N=d.forwardRef(function(o,r){var e=o.className,p=_()(o,P);return(0,l.jsx)(m.l_,v()({ref:r,className:(0,g.cn)(w,"fixed top-0 z-[9999] flex max-h-screen flex-col mt-16 left-1/2 justify-center items-center w-0 [&:not(:empty)]:w-max -translate-x-1/2 pointer-events-none",e)},p))});N.displayName=m.l_.displayName;var c=(0,s.j)("group pointer-events-auto relative flex items-center justify-between space-x-4 overflow-hidden rounded-md border shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",{variants:{variant:{default:"border bg-background moly-toast-background flex justify-center align-center border-0 rounded-lg mb-2",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),y=d.forwardRef(function(o,r){var e=o.className,p=o.variant,x=_()(o,S),T=(0,M.S)();return(0,l.jsx)(m.fC,v()({ref:r,className:(0,g.cn)(c({variant:p}),"".concat(T?"moly-toast-background-rtl":""),e)},x))});y.displayName=m.fC.displayName;var h=d.forwardRef(function(o,r){var e=o.className,p=_()(o,u);return(0,l.jsx)(m.aU,v()({ref:r,className:(0,g.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e)},p))});h.displayName=m.aU.displayName;var b=d.forwardRef(function(o,r){var e=o.className,p=_()(o,n);return(0,l.jsx)(m.Dx,v()({ref:r,className:(0,g.cn)("text-sm font-medium moly-toast-title",e)},p))});b.displayName=m.Dx.displayName;var E=t(80820),i=["id","title","action","duration"];function a(){var o=(0,E.pm)(),r=o.toasts;return(0,l.jsxs)(R,{swipeDirection:"down",children:[r.map(function(e){var p=e.id,x=e.title,T=e.action,B=e.duration,k=B===void 0?3e3:B,z=_()(e,i);return(0,l.jsxs)(y,v()(v()({duration:k},z),{},{children:[(0,l.jsx)("div",{className:"grid gap-1",children:x&&(0,l.jsx)(b,{children:x})}),T]}),p)}),(0,l.jsx)(N,{})]})}},80820:function($,C,t){t.d(C,{pm:function(){return E}});var O=t(5574),v=t.n(O),L=t(13769),_=t.n(L),M=t(19632),g=t.n(M),m=t(97857),s=t.n(m),d=t(70696),j=t(67294),f=t(85893),A=["iconType"],D=3,w=1e6,l=function(i){return i.SUCCESS="success",i.FAIL="fail",i.INFO="info",i.WARN="warn",i.PROCESS="process",i}(l||{}),P={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"},S=0;function u(){return S=(S+1)%Number.MAX_VALUE,S.toString()}var n=new Map,R=function(a){if(!n.has(a)){var o=setTimeout(function(){n.delete(a),h&&h({type:"REMOVE_TOAST",toastId:a})},w);n.set(a,o)}},N=function(a,o){switch(o.type){case"ADD_TOAST":return s()(s()({},a),{},{toasts:[o.toast].concat(g()(a.toasts)).slice(0,D)});case"UPDATE_TOAST":return s()(s()({},a),{},{toasts:a.toasts.map(function(e){return e.id===o.toast.id?s()(s()({},e),o.toast):e})});case"DISMISS_TOAST":{var r=o.toastId;return r?R(r):a.toasts.forEach(function(e){R(e.id)}),s()(s()({},a),{},{toasts:a.toasts.map(function(e){return e.id===r||r===void 0?s()(s()({},e),{},{open:!1}):e})})}case"REMOVE_TOAST":return o.toastId===void 0?s()(s()({},a),{},{toasts:[]}):s()(s()({},a),{},{toasts:a.toasts.filter(function(e){return e.id!==o.toastId})})}},c=[],y={toasts:[]};function h(i){y=N(y,i),c.forEach(function(a){a(y)})}function b(i){var a=i.iconType,o=_()(i,A),r=u();o.title=(0,f.jsxs)(f.Fragment,{children:[a===l.SUCCESS&&(0,f.jsx)(d.CircleIcon,{className:"moly-toast-icon-success"}),a===l.FAIL&&(0,f.jsx)(d.EmptyIcon,{className:"moly-toast-icon-fail"}),a===l.INFO&&(0,f.jsx)(d.AlertCircleSolidIcon,{className:"moly-toast-icon-info"}),a===l.WARN&&(0,f.jsx)(d.AlertTriangleSolidIcon,{className:"moly-toast-icon-warn"}),a===l.PROCESS&&(0,f.jsx)(d.LoadingIcon,{className:"moly-toast-icon-process animate-spin"}),o.title]});var e=function(T){return h({type:"UPDATE_TOAST",toast:s()(s()({},T),{},{id:r})})},p=function(){return h({type:"DISMISS_TOAST",toastId:r})};return h({type:"ADD_TOAST",toast:s()(s()({},o),{},{id:r,open:!0,onOpenChange:function(T){T||p()}})}),{id:r,dismiss:p,update:e}}function E(){var i=(0,j.useState)(y),a=v()(i,2),o=a[0],r=a[1];return(0,j.useEffect)(function(){return c.push(r),function(){var e=c.indexOf(r);e>-1&&c.splice(e,1)}},[o]),s()(s()({},o),{},{toast:b,EToastType:l,dismiss:function(p){return h({type:"DISMISS_TOAST",toastId:p})}})}},5968:function($,C,t){t.r(C),t.d(C,{SideEnum:function(){return S},default:function(){return u}});var O=t(19632),v=t.n(O),L=t(5574),_=t.n(L),M=t(92419),g=t(67294),m=t(36493),s=t(68400),d=t.n(s),j=t(93985),f,A,D={molyTooltipUnderline:(0,j.iv)(f||(f=d()([`
    > * {
      text-decoration-line: underline;
      text-decoration-color: var(--gray-tt-4-dis, #d5dae0);
      text-decoration-style: dashed;
      text-underline-offset: 4px;
      text-decoration-thickness: 1px;
    }
    > * * {
      text-decoration: inherit;
    }
  `])))},w=function(){return(0,j.hi)(A||(A=d()([`
  .moly-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    font-size: 12px;
    line-height: 1.5;

    @keyframes contentShow {
      0% {
        display: none;
        opacity: 0;
        transform: scale(1);
      }
      50% {
        display: block;
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        display: block;
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes contentHide {
      0% {
        display: block;
        opacity: 1;
        transform: scale(1);
      }
      50% {
        display: block;
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        display: none;
        opacity: 0;
        transform: scale(1);
      }
    }
    @keyframes arrowShow {
      0% {
        display: none;
        opacity: 0;
      }
      50% {
        display: block;
        opacity: 0;
      }
      100% {
        display: block;
        opacity: 1;
      }
    }
    @keyframes arrowHide {
      0% {
        display: block;
        opacity: 1;
      }
      50% {
        display: block;
        opacity: 0;
      }
      100% {
        display: none;
        opacity: 0;
      }
    }
    @keyframes tooltipHide {
      0% {
        display: block;
      }
      100% {
        display: none;
      }
    }

    &-hidden {
      .moly-tooltip-content {
        animation: tooltipHide 1500ms linear;
        display: none;
      }
      .moly-tooltip-inner {
        animation: contentHide 150ms ease-in;
        display: none;
      }
      .moly-tooltip-arrow {
        animation: arrowHide 150ms ease-in forwards;
        display: none;
      }
    }

    &-inner {
      padding: 8px 12px;
      max-width: 280px;
      min-height: 16px;
      text-align: left;
      font-family: var(--bds-font-family);
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--bds-gray-t1-title);
      background-color: var(--bds-gray-ele-border);
      border-radius: 8px;

      animation: contentShow 150ms ease-out;
    }

    &-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      animation: arrowShow 150ms ease-out forwards;
    }

    &-placement-top &-arrow,
    &-placement-topLeft &-arrow,
    &-placement-topRight &-arrow {
      bottom: 0;
      margin-left: -6px;
      border-width: 6px 6px 0;
      border-top-color: var(--bds-gray-ele-border);
    }
    &-placement-top &-arrow {
      left: 50%;
    }
    &-placement-topLeft &-arrow {
      left: 22px !important;
    }
    &-placement-topRight &-arrow {
      left: auto !important;
      right: 16px !important;
    }

    &-placement-right &-arrow,
    &-placement-rightTop &-arrow,
    &-placement-rightBottom &-arrow {
      left: 0;
      margin-top: -6px;
      border-width: 6px 6px 6px 0;
      border-right-color: var(--bds-gray-ele-border);
    }
    &-placement-right &-arrow {
      top: 50%;
    }
    &-placement-rightTop &-arrow {
      top: 16px !important;
      margin-top: 0;
    }
    &-placement-rightBottom &-arrow {
      top: auto !important;
      bottom: 16px !important;
    }

    &-placement-bottom &-arrow,
    &-placement-bottomLeft &-arrow,
    &-placement-bottomRight &-arrow {
      top: 0px;
      margin-left: -6px;
      border-width: 0 6px 6px;
      border-bottom-color: var(--bds-gray-ele-border);
    }
    &-placement-bottom &-arrow {
      left: 50%;
    }
    &-placement-bottomLeft &-arrow {
      left: 22px !important;
    }
    &-placement-bottomRight &-arrow {
      left: auto !important;
      right: 16px !important;
    }

    &-placement-left &-arrow,
    &-placement-leftTop &-arrow,
    &-placement-leftBottom &-arrow {
      right: 0;
      margin-top: -6px;
      border-width: 6px 0 6px 6px;
      border-left-color: var(--bds-gray-ele-border);
    }
    &-placement-left &-arrow {
      top: 50%;
    }
    &-placement-leftTop &-arrow {
      top: 16px !important;
      margin-top: 0;
    }
    &-placement-leftBottom &-arrow {
      top: auto !important;
      bottom: 16px !important;
    }

    &-placement {
      &-top,
      &-topLeft,
      &-topRight {
        padding-bottom: 6px;
      }

      &-right,
      &-rightTop,
      &-rightBottom {
        padding-left: 6px;
      }

      &-bottom,
      &-bottomLeft,
      &-bottomRight {
        padding-top: 6px;
      }

      &-left,
      &-leftTop,
      &-leftBottom {
        padding-right: 6px;
      }
    }
  }
  [dir=rtl] .moly-tooltip {
    &-inner {
      text-align: right;
    }
  }
`])))},l=D,P=t(85893);w();var S=function(n){return n[n.top=0]="top",n[n.left=1]="left",n[n.right=2]="right",n[n.bottom=3]="bottom",n[n.topLeft=4]="topLeft",n[n.topRight=5]="topRight",n[n.bottomLeft=6]="bottomLeft",n[n.bottomRight=7]="bottomRight",n[n.leftTop=8]="leftTop",n[n.leftBottom=9]="leftBottom",n[n.rightTop=10]="rightTop",n[n.rightBottom=11]="rightBottom",n}({});function u(n){var R=n.children,N=n.title,c=n.placement,y=c===void 0?"top":c,h=n.defaultOpen,b=h===void 0?!1:h,E=n.popupContainer,i=E===void 0?typeof document=="undefined"?void 0:document.body:E,a=n.mouseEnterDelay,o=a===void 0?300:a,r=n.mouseLeaveDelay,e=r===void 0?300:r,p=n.overlayClassName,x=n.overlayStyle,T=n.trigger,B=T===void 0?"hover":T,k=n.open,z=n.zIndex,W=n.onOpenChange,tt=W===void 0?function(){}:W,Q=n.destroyTooltipOnHide,nt=Q===void 0?!1:Q,X=n.hasDashedLine,et=X===void 0?!1:X,Y=n.stopPropagation,ot=Y===void 0?!1:Y,F=(0,g.useRef)(null),at=(0,g.useState)([]),G=_()(at,2),rt=G[0],st=G[1];return(0,g.useEffect)(function(){var U,I,H,Z,J=6,q=16,lt=((U=F.current)===null||U===void 0||(I=U.getBoundingClientRect())===null||I===void 0?void 0:I.width)||0,it=((H=F.current)===null||H===void 0||(Z=H.getBoundingClientRect())===null||Z===void 0?void 0:Z.height)||0,K=lt/2-q-J,V=it/2-q-J,dt={topLeft:[K,-4],top:[0,-4],topRight:[-K,-4],bottomLeft:[K,4],bottom:[0,4],bottomRight:[-K,4],leftTop:[-4,V],left:[-4,0],leftBottom:[-4,-V],rightTop:[4,V],right:[4,0],rightBottom:[4,-V]};st(dt)},[]),(0,P.jsx)(M.Z,{prefixCls:"moly-tooltip",trigger:B,defaultVisible:b,placement:y,onVisibleChange:function(I){return tt(I)},visible:k,overlay:N,overlayStyle:x,overlayClassName:p,mouseEnterDelay:o/1e3,mouseLeaveDelay:e/1e3,getTooltipContainer:function(){return i},destroyTooltipOnHide:nt,showArrow:!0,align:{offset:rt[y]},zIndex:z,children:(0,P.jsx)("div",{className:m.cn.apply(void 0,["inline-block"].concat(v()(et?[l.molyTooltipUnderline,"cursor-pointer"]:[]))),onClick:function(I){ot&&I.stopPropagation()},ref:F,children:R})})}}}]);
