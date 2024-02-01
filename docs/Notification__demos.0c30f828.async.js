(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[3150],{14429:function(A,b,n){"use strict";n.r(b);var D=n(23272),r=n(14479),x=n(7935),o=n(85893),C=function(){var g=(0,D.lm)(),t=g.notification,y=g.ENotificationType,i=4500,l="\u63CF\u8FF0\u6587\u6848",f="\u63CF\u8FF0\u6587\u6848";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.m,{}),(0,o.jsxs)("div",{className:"moly-space flex items-center flex-wrap moly-space-compact",style:{gap:"8px"},children:[(0,o.jsx)(x.Z,{variant:"tradeLong","data-swipe-direction":"right",onClick:function(){t({iconType:y.SUCCESS,title:l,duration:i,description:f})},children:"success"}),(0,o.jsx)(x.Z,{variant:"tradeShort","data-swipe-direction":"down",onClick:function(){t({iconType:y.FAIL,title:l,duration:i,description:f})},children:"fail"}),(0,o.jsx)(x.Z,{variant:"primary","data-swipe-direction":"down",onClick:function(){t({iconType:y.INFO,title:l,duration:i,description:f})},children:"info"}),(0,o.jsx)(x.Z,{variant:"tradeShort","data-swipe-direction":"down",onClick:function(){t({iconType:y.WARN,title:l,duration:i,description:f})},children:"warn"}),(0,o.jsx)(x.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){t({duration:i,title:l,description:f})},children:"normal"})]})]})};b.default=C},57370:function(A,b,n){"use strict";n.r(b);var D=n(23272),r=n(14479),x=n(7935),o=n(85893),C=function(){var g=(0,D.lm)(),t=g.notification,y=g.ENotificationType,i="\u63CF\u8FF0\u6587\u6848",l="\u63CF\u8FF0\u6587\u6848";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.m,{}),(0,o.jsxs)("div",{className:"moly-space flex items-center flex-wrap moly-space-compact",style:{gap:"8px"},children:[(0,o.jsx)(x.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){t({icon:"https://www.bybit.com/uniframe/static/media/Facebook.1685d893.svg",iconType:y.CUSTOM,title:i,description:l})},children:"custom icon"}),(0,o.jsx)(x.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){t({showCloseBtn:!0,title:i,description:l,duration:10*10*1e3})},children:"close button"}),(0,o.jsx)(x.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){t({duration:1e3,title:i,description:l})},children:"duration custom - 1s"}),(0,o.jsx)("br",{}),(0,o.jsx)(x.Z,{variant:"primary","data-swipe-direction":"down",onClick:function(){t({showCloseBtn:!0,link:"https://www.google.com",linkText:"View",title:i,description:l})},children:"view more in new page"}),(0,o.jsx)(x.Z,{variant:"primary","data-swipe-direction":"down",onClick:function(){t({showCloseBtn:!0,link:"https://www.google.com",linkText:"View in current page",linkTarget:"_self",title:i,description:l})},children:"view more in current page"})]})]})};b.default=C},88133:function(A,b,n){"use strict";var D=n(5193);b.Z=D.h},5193:function(A,b,n){"use strict";n.d(b,{h:function(){return L}});var D=n(97857),r=n.n(D),x=n(13769),o=n.n(x),C=n(36493),R=n(42978),g=n(19492),t=n(68400),y=n.n(t),i=n(93985),l,f=function(){return(0,i.hi)(l||(l=y()([`
    .moly-iconbutton {
      line-height: 1;
      &.xx-small {
        font-size: 12px;
        svg {
          width: 12px;
          height: 12px;
        }
      }
      &.x-small {
        font-size: 16px;
        svg {
          width: 16px;
          height: 16px;
        }
      }
      &.small {
        font-size: 20px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
      &.middle {
        font-size: 24px;
        svg {
          width: 24px;
          height: 24px;
        }
      }
      &.large {
        font-size: 28px;
        svg {
          width: 28px;
          height: 28px;
        }
      } 
      &.x-large {
        font-size: 32px; 
        svg {
          width: 32px;
          height: 32px;
        }
      }


      &.default {
        width: auto;
        height: auto;
        padding: 0;
        border: 2px solid transparent;
      }

      &.outlined,
      &.float {
        &.xx-small {
          width: 24px;
          height: 24px;
        }
        &.x-small {
          width: 32px;
          height: 32px;
        }
        &.small {
          width: 40px;
          height: 40px;
        }
        &.middle {
          width: 48px;
          height: 48px;
        }
        &.large {
          width: 56px;
          height: 56px;
        } 
        &.x-large {
          width: 64px;
          height: 64px;
        }  
      }

      &.float {
        border-radius: 50%;
        background: var(--bds-gray-bg-float);
        box-shadow: 0px 4px 15px 0px rgba(44, 44, 44, 0.05);
      }

      &.float.type-highlight {
        background: var(--brand-700-normal, #f7a600);
        
        &[data-disabled] {
          background: var(--bds-static-white);
          box-shadow: 0px 4px 15px 0px rgba(44, 44, 44, 0.05);
        }

        :hover {
          color: text-[var(--bds-gray-t1-title)];
          background: var(--brand-600-hover, #FFC35C);
        }

        :active {
          color: text-[var(--bds-gray-t1-title)];
          background-color: var(--brand-800-pressed, #f0960e);
        }
      }
    }
  `])))},T=n(67294),_=n(85893),F=["className","color","variant","size","children","style","disabled","type","showTooltip","tooltipContent","width"];f();var B=(0,T.lazy)(function(){return n.e(5968).then(n.bind(n,5968))}),h={DEFAULT:"default",OUTLINED:"outlined",FLOAT:"float"},u=(0,g.j)(["inline-flex items-center justify-center","transition-all rounded-lg select-none cursor-pointer","data-[disabled]:text-[var(--bds-gray-t4-dis)] data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:pointer-events-none","focus-visible:outline-none"],{variants:{variant:{default:["text-[var(--bds-gray-t2)]","hover:bg-base-bds-trans-hover","active:active:text-[var(--bds-gray-t1-title)] active:active:bg-base-bds-trans-hover","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],outlined:["text-[var(--bds-gray-t1-title)]","border border-solid border-base-bds-gray-t4-dis","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],float:["text-[var(--bds-gray-t1-title)]","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]"]},size:{"xx-small":"rounded","x-small":"rounded",small:"rounded",middle:"",large:"","x-large":""}},defaultVariants:{variant:"default",size:"middle"}}),L=(0,T.forwardRef)(function(v,P){var O=v.className,U=v.color,M=v.variant,m=v.size,e=v.children,c=v.style,p=v.disabled,a=v.type,N=v.showTooltip,k=N===void 0?!1:N,W=v.tooltipContent,w=v.width,K=o()(v,F),d=(0,T.useMemo)(function(){return U?w?{backgroundColor:(0,C.ey)(U,.2),width:w,height:w}:{backgroundColor:(0,C.ey)(U,.2)}:{}},[]),E=(0,T.useMemo)(function(){return w?{width:w,height:w}:{}},[]),j=M==="outlined"||M==="default"?0:-1,s=null,S=(0,_.jsx)("div",r()(r()({className:(0,C.cn)("moly-iconbutton",O,"".concat(a?"type-".concat(a):""),"".concat(M||"default"," "),"".concat(m||"middle"),u({variant:M,size:m})),ref:P,"data-disabled":p?"":void 0,tabIndex:j,style:r()(r()(r()({},c),d),E)},K),{},{children:e})),z=(0,_.jsx)(R.Z,{component:"IconButton",children:S});return h.OUTLINED===M?s=z:s=S,k&&W?(0,_.jsx)(B,{title:W,children:(0,_.jsx)(_.Fragment,{children:s})}):s});L.displayName="IconButton"},14479:function(A,b,n){"use strict";n.d(b,{m:function(){return K}});var D=n(97857),r=n.n(D),x=n(13769),o=n.n(x),C=n(22641),R=n(82545),g=n(36493),t=n(88133),y=n(70696),i=n(77310),l=n(19492),f=n(67294),T=n(68400),_=n.n(T),F=n(93985),B,h=(0,F.iv)(B||(B=_()([`
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
`]))),u=n(85893),L=["className"],I=["className","variant"],v=["className"],P=["className"],O=["className","showCloseBtn"],U=["className"],M=i.zt,m=f.forwardRef(function(d,E){var j=d.className,s=o()(d,L),S=(0,C.S)();return(0,u.jsx)(i.l_,r()({ref:E,className:(0,g.cn)(h,"fixed z-[9999] flex max-h-screen w-0 flex-col m-4 mb-10 bottom-0 sm:top-auto [&:not(:empty)]:w-80",{"left-0":S,"right-0":!S},j)},s))});m.displayName=i.l_.displayName;var e=(0,l.j)("group pointer-events-auto relative flex items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80",{variants:{variant:{default:"border bg-background moly-notification-background flex justify-center align-center border-0 rounded-lg mb-2",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),c=f.forwardRef(function(d,E){var j=d.className,s=d.variant,S=o()(d,I),z=(0,C.S)();return(0,u.jsx)(i.fC,r()({ref:E,className:(0,g.cn)(e({variant:s}),"".concat(z?"moly-notification-background-rtl data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full":"data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full"),j)},S))});c.displayName=i.fC.displayName;var p=f.forwardRef(function(d,E){var j=d.className,s=o()(d,v);return(0,u.jsx)(i.aU,r()({ref:E,className:(0,g.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",j)},s))});p.displayName=i.aU.displayName;var a=f.forwardRef(function(d,E){var j=d.className,s=o()(d,P);return(0,u.jsx)(i.x8,r()(r()({ref:E,className:(0,g.cn)("absolute right-2 top-4 rounded-md text-foreground/50 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",j),"moly-notification-close":"moly-notification-close"},s),{},{children:(0,u.jsx)(t.Z,{variant:"default",size:"x-small",children:(0,u.jsx)(y.CloseIcon,{})})}))});a.displayName=i.x8.displayName;var N=f.forwardRef(function(d,E){var j=d.className,s=d.showCloseBtn,S=o()(d,O);return(0,u.jsx)(i.Dx,r()({ref:E,className:(0,g.cn)("text-sm font-medium text-left w-full moly-notification-title",{"moly-notification-title-limit-width":s},j)},S))});N.displayName=i.Dx.displayName;var k=f.forwardRef(function(d,E){var j=d.className,s=o()(d,U);return(0,u.jsx)(i.dk,r()({ref:E,className:(0,g.cn)("mt-1 text-xs opacity-90 text-left w-full moly-notification-description",j)},s))});k.displayName=i.dk.displayName;var W=n(23272),w=["id","title","description","action","link","linkText","duration","linkTarget","showCloseBtn"];function K(){var d=(0,W.lm)(),E=d.notifications,j=(0,C.S)();return(0,u.jsxs)(M,{swipeDirection:j?"left":"right",children:[E.map(function(s){var S=s.id,z=s.title,V=s.description,G=s.action,Z=s.link,$=s.linkText,H=s.duration,J=H===void 0?4500:H,Q=s.linkTarget,q=Q===void 0?"_blank":Q,X=s.showCloseBtn,Y=X===void 0?!1:X,nn=o()(s,w);return(0,u.jsxs)(c,r()(r()({duration:J},nn),{},{children:[(0,u.jsxs)("div",{className:"w-full",children:[z&&(0,u.jsx)(N,{showCloseBtn:Y,children:z}),V&&(0,u.jsx)(k,{children:V}),Z&&$&&(0,u.jsx)(R.h,{variant:"primary",size:"small",href:Z,opensWindow:q==="_blank",children:$})]}),G,Y&&(0,u.jsx)(a,{})]}),S)}),(0,u.jsx)(m,{})]})}},23272:function(A,b,n){"use strict";n.d(b,{lm:function(){return M}});var D=n(5574),r=n.n(D),x=n(49677),o=n.n(x),C=n(19632),R=n.n(C),g=n(97857),t=n.n(g),y=n(70696),i=n(67294),l=n(85893),f=4,T=1e6,_=function(m){return m.SUCCESS="success",m.FAIL="fail",m.INFO="info",m.WARN="warn",m.CUSTOM="custom",m}(_||{}),F={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"},B=0;function h(){return B=(B+1)%Number.MAX_VALUE,B.toString()}var u=new Map,L=function(e){if(!u.has(e)){var c=setTimeout(function(){u.delete(e),O&&O({type:"REMOVE_TOAST",toastId:e})},T);u.set(e,c)}},I=function(e,c){switch(c.type){case"ADD_TOAST":return t()(t()({},e),{},{notifications:[c.toast].concat(R()(e.notifications)).slice(0,f)});case"UPDATE_TOAST":return t()(t()({},e),{},{notifications:e.notifications.map(function(a){return a.id===c.toast.id?t()(t()({},a),c.toast):a})});case"DISMISS_TOAST":{var p=c.toastId;return p?L(p):e.notifications.forEach(function(a){L(a.id)}),t()(t()({},e),{},{notifications:e.notifications.map(function(a){return a.id===p||p===void 0?t()(t()({},a),{},{open:!1}):a})})}case"REMOVE_TOAST":return c.toastId===void 0?t()(t()({},e),{},{notifications:[]}):t()(t()({},e),{},{notifications:e.notifications.filter(function(a){return a.id!==c.toastId})})}},v=[],P={notifications:[]};function O(m){P=I(P,m),v.forEach(function(e){e(P)})}function U(m){var e=Object.assign({},(o()(m),m)),c=h(),p=e.icon,a=e.iconType;e.title=(0,l.jsxs)(l.Fragment,{children:[p&&a===_.CUSTOM&&(0,l.jsx)("img",{src:p,className:"moly-notification-custom-icon"}),!p&&a===_.SUCCESS&&(0,l.jsx)(y.CircleIcon,{className:"moly-notification-icon-success"}),!p&&a===_.FAIL&&(0,l.jsx)(y.EmptyIcon,{className:"moly-notification-icon-fail"}),!p&&a===_.INFO&&(0,l.jsx)(y.AlertCircleSolidIcon,{className:"moly-notification-icon-info"}),!p&&a===_.WARN&&(0,l.jsx)(y.AlertTriangleSolidIcon,{className:"moly-notification-icon-warn"}),e.title]});var N=function(w){return O({type:"UPDATE_TOAST",toast:t()(t()({},w),{},{id:c})})},k=function(){return O({type:"DISMISS_TOAST",toastId:c})};return O({type:"ADD_TOAST",toast:t()(t()({},e),{},{id:c,open:!0,onOpenChange:function(w){w||k()}})}),{id:c,dismiss:k,update:N}}function M(){var m=i.useState(P),e=r()(m,2),c=e[0],p=e[1];return i.useEffect(function(){return v.push(p),function(){var a=v.indexOf(p);a>-1&&v.splice(a,1)}},[c]),t()(t()({},c),{},{notification:U,ENotificationType:_,dismiss:function(N){return O({type:"DISMISS_TOAST",toastId:N})}})}},82545:function(A,b,n){"use strict";n.d(b,{h:function(){return F}});var D=n(97857),r=n.n(D),x=n(5574),o=n.n(x),C=n(13769),R=n.n(C),g=n(22641),t=n(36493),y=n(67294),i=n(70696),l=n(19492),f=(0,l.j)(["no-wrap font-medium transition-all","inline-flex items-center","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs gap-[2px]"],normal:["text-sm gap-[2px]"],large:["text-base gap-[4px]"],xlarge:["text-lg gap-[6px]"]},variant:{primary:[],secondary:[],tertiary:[]}},compoundVariants:[{variant:"primary",className:["text-brandColor-bds-brand-900-text hover:text-brandColor-bds-brand-600-hover cursor-pointer"]},{variant:"secondary",className:["text-base-bds-black-t2 hover:text-base-bds-gray-t2 cursor-pointer"]},{variant:"tertiary",className:["text-base-bds-gray-t2 hover:text-base-bds-gray-t3 cursor-pointer"]}],defaultVariants:{variant:"primary",size:"normal"}}),T=n(85893),_=["className","color","variant","size","href","children","disabled","closeIcon","opensWindow","style","onClick"],F=(0,y.forwardRef)(function(h,u){var L=h.className,I=h.color,v=h.variant,P=h.size,O=h.href,U=h.children,M=h.disabled,m=h.closeIcon,e=m===void 0?!1:m,c=h.opensWindow,p=c===void 0?!1:c,a=h.style,N=h.onClick,k=R()(h,_),W=(0,y.useState)(!1),w=o()(W,2),K=w[0],d=w[1],E=(0,g.S)(),j=(0,y.useMemo)(function(){return I?(0,t.K_)(I)?{color:K?(0,t.ey)(I,.6):I}:{}:{}},[K]),s=function(z){M||(O?p?window.open(O):window.location.href=O:N==null||N(z))};return(0,T.jsxs)("div",r()(r()({className:(0,t.cn)(L,f({variant:v,size:P})),ref:u,"data-disabled":h.disabled?"":void 0,style:r()(r()({},a),j)},k),{},{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},onClick:s,children:[U,!e&&(E?(0,T.jsx)(i.DirectionleftIcon,{}):(0,T.jsx)(i.DirectionrightIcon,{}))]}))})},49677:function(A){function b(n){if(n==null)throw new TypeError("Cannot destructure "+n)}A.exports=b,A.exports.__esModule=!0,A.exports.default=A.exports}}]);
