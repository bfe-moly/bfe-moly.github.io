"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[3491],{69216:function(D,a,n){var l=n(31975);a.Z=l.Z},521:function(D,a,n){n.d(a,{Z:function(){return b}});var l=n(68400),o=n.n(l),h=n(36493),g=n(93985),j=n(46069),c=n(67294),r=n(85893),d,F=(0,g.hi)(d||(d=o()([`
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
`]))),w=c.forwardRef(function(t,P){var s=t.className,i=t.children,f=t.size,Z=t.align,R=t.direction,m=R===void 0?"horizontal":R,B=t.wrap,O=t.split,E=t.compact,M=t.style,T=Z||(m==="horizontal"?"center":"start"),H=function(){var u=Array.isArray(f)?f:[f,f],A=u.map(function(y){return typeof y=="number"?"".concat(y,"px"):y==="middle"?"16px":y==="large"?"24px":"8px"});return A.join(" ")};return(0,r.jsx)("div",{className:(0,h.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":m==="vertical","items-center":T==="center"||m==="horizontal","items-start":T==="start","items-end":T==="end","items-baseline":T==="baseline","flex-wrap":B,"moly-space-compact":E},s),style:E?{}:{gap:H()},ref:P,children:c.Children.map(i,function(k,u){return k?(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)("div",{style:M,className:(0,h.cn)("moly-space-item",{"w-full":T==="stretch","moly-space-item-first":u===0,"moly-space-item-last":u===c.Children.count(i)-1}),children:k}),O&&(0,r.jsx)("div",{className:"moly-space-split last:hidden",children:O})]},u):null})})});w.displayName=j.fC.displayName;var b=w},31975:function(D,a,n){n.d(a,{Z:function(){return sn}});var l=n(97857),o=n.n(l),h=n(5574),g=n.n(h),j=n(65090),c=n(36493),r=n(15560),d=n(13769),F=n.n(d),w=n(92419),b=n(64543),t=n(67294),P=n(68400),s=n.n(P),i=n(93985),f,Z={molyTooltip:(0,i.iv)(f||(f=s()([`
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    font-size: 12px;
    line-height: 1.5;

    &-hidden {
      display: none;
    }

    &-inner {
      padding: 8px 12px;
      // max-width: 280px;
      min-height: 16px;
      text-align: left;
      font-family: var(--bds-font-family);
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--bds-gray-t1-title);
      background-color: var(--bds-gray-ele-border);
      border-radius: 8px;
    }

    &-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
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
  `])))},R=Z,m=n(85893),B=["value","children","onDrag","tipFormatter"],O=null,E=function(e){var p=e.value,v=e.children,x=e.onDrag,S=e.tipFormatter,L=S===void 0?function(I){return I}:S,C=F()(e,B),z=(0,t.useRef)(),X=(0,t.useRef)(null),mn=(0,t.useState)(!1),Y=g()(mn,2),W=Y[0],_=Y[1];function G(){b.Z.cancel(X.current)}function pn(){X.current=(0,b.Z)(function(){z.current&&z.current.forceAlign()})}(0,t.useEffect)(function(){return W?pn():G(),G},[p,W]),(0,t.useEffect)(function(){_(x)},[x]);var cn=function(U){_(x?!0:U)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(w.Z,o()(o()({prefixCls:R.molyTooltip,trigger:["hover"],getTooltipContainer:function(U){return U},placement:"top",overlay:L(p),overlayInnerStyle:{minHeight:"auto"},ref:z,visible:W,onVisibleChange:cn},C),{},{children:v}))})},M=function(e,p,v){return(0,m.jsx)(E,{value:p.value,onDrag:p.dragging,tipFormatter:v,children:e})},T=function(e){var p=e.tipFormatter,v=e.tipProps,x=_objectWithoutProperties(e,O),S=function(C,z){return _jsx(E,_objectSpread(_objectSpread({value:z.value,onDrag:z.dragging,tipFormatter:p},v),{},{children:C}))};return _jsx(Slider,_objectSpread(_objectSpread({},x),{},{handleRender:S}))},H=null,k,u,A,y,K,V,$=(0,i.iv)(k||(k=s()([`
  position: relative;
  width: 100%;
  height: 14px;
  padding: 5px 0;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`]))),J={small:(0,i.iv)(u||(u=s()([`
    --item-size: 12px;
  `]))),medium:(0,i.iv)(A||(A=s()([`
    --item-size: 14px;
  `])))},Q={false:(0,i.iv)(y||(y=s()([`
    --mark-text-display: none;
  `]))),true:(0,i.iv)(K||(K=s()([`
    --mark-text-display: inline-block;
  `])))},q=(0,i.iv)(V||(V=s()([`
  .moly-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .moly-slider-rail {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #e9e9e9;
    border-radius: 6px;
  }
  .moly-slider-track {
    position: absolute;
    height: 4px;
    background-color: tint(#2db7f5, 60%);
    border-radius: 6px;
  }
  .moly-slider-track-draggable {
    z-index: 1;
    box-sizing: content-box;
    background-clip: content-box;
    border-top: 5px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    transform: translateY(-5px);
  }
  .moly-slider-handle {
    position: absolute;
    z-index: 1;
    width: 14px;
    height: 14px;
    margin-top: -5px;
    background-color: #fff;
    border: solid 2px tint(#2db7f5, 50%);
    border-radius: 50%;
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    opacity: 0.8;
    touch-action: pan-x;
  }
  .moly-slider-handle-dragging.moly-slider-handle-dragging.moly-slider-handle-dragging {
    border-color: tint(#2db7f5, 20%);
    box-shadow: 0 0 0 5px tint(#2db7f5, 50%);
  }
  .moly-slider-handle:focus {
    outline: none;
    box-shadow: none;
  }
  .moly-slider-handle:focus-visible {
    border-color: #2db7f5;
    box-shadow: 0 0 0 3px tint(#2db7f5, 50%);
  }
  .moly-slider-handle-click-focused:focus {
    border-color: tint(#2db7f5, 50%);
    box-shadow: unset;
  }
  .moly-slider-handle:hover {
    border-color: tint(--bds-brand-600-hover, 20%);
    // transition-property: all;
    // transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    // transition-duration: 100ms;
    // transform: translateX(-50%) scale(1.25) !important;
  }
  .moly-slider-handle:hover {
    border-color: tint(--bds-brand-600-hover, 20%);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.38, -0.03, 0.46, 2.91);
    transition-duration: 300ms;
    transform: translateX(-50%) translateY(-2px) !important;
    width: 20px !important;
    height: 20px !important;
  }
  .moly-slider-handle:active {
    border-color: tint(#2db7f5, 20%);
    box-shadow: 0 0 5px tint(#2db7f5, 20%);
    cursor: -webkit-grabbing;
    cursor: grabbing;
    transform: translateX(-50%) translateY(-2px) !important;
    width: 20px !important;
    height: 20px !important;
  }
  .moly-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: var(--item-size);
  }
  .moly-slider-mark-text {
    position: absolute;
    display: inline-block;
    color: #999;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    display: var(--mark-text-display);
  }
  .moly-slider-mark-text-active {
    color: #666;
  }
  .moly-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  .moly-slider-dot {
    position: absolute;
    bottom: -2px;
    width: 8px;
    height: 8px;
    vertical-align: middle;
    background-color: #fff;
    border: 2px solid #e9e9e9;
    border-radius: 50%;
    cursor: pointer;
  }
  .moly-slider-dot-active {
    border-color: tint(#2db7f5, 50%);
  }
  .moly-slider-dot-reverse {
    margin-right: -4px;
  }
  .moly-slider-disabled {
    background-color: #e9e9e9;
  }
  .moly-slider-disabled .moly-slider-track {
    background-color: #ccc;
  }
  .moly-slider-disabled .moly-slider-handle,
  .moly-slider-disabled .moly-slider-dot {
    background-color: #fff;
    border-color: #ccc;
    box-shadow: none;
    cursor: not-allowed;
  }
  .moly-slider-disabled .moly-slider-mark-text,
  .moly-slider-disabled .moly-slider-dot {
    cursor: not-allowed !important;
  }
  .moly-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px;
  }
  .moly-slider-vertical .moly-slider-rail {
    width: 4px;
    height: 100%;
  }
  .moly-slider-vertical .moly-slider-track {
    bottom: 0;
    left: 5px;
    width: 4px;
  }
  .moly-slider-vertical .moly-slider-track-draggable {
    border-top: 0;
    border-bottom: 0;
    border-right: 5px solid rgba(0, 0, 0, 0);
    border-left: 5px solid rgba(0, 0, 0, 0);
    transform: translateX(-5px);
  }
  .moly-slider-vertical .moly-slider-handle {
    position: absolute;
    z-index: 1;
    margin-top: 0;
    margin-left: -5px;
    touch-action: pan-y;
  }
  .moly-slider-vertical .moly-slider-mark {
    top: 0;
    left: 18px;
    height: 100%;
  }
  .moly-slider-vertical .moly-slider-step {
    width: 4px;
    height: 100%;
  }
  .moly-slider-vertical .moly-slider-dot {
    margin-left: -2px;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    display: block !important;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-leave {
    display: block !important;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    animation-name: rcSliderTooltipZoomDownOut;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      transform: scale(0, 0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: scale(1, 1);
      transform-origin: 50% 100%;
    }
  }
  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform: scale(1, 1);
      transform-origin: 50% 100%;
    }
    100% {
      transform: scale(0, 0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
  }
  .moly-slider-tooltip {
    position: absolute;
    top: -9999px;
    left: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .moly-slider-tooltip * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .moly-slider-tooltip-hidden {
    display: none;
  }
  .moly-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;
  }
  .moly-slider-tooltip-inner {
    min-width: 24px;
    height: 24px;
    padding: 6px 2px;
    color: #fff;
    font-size: var(--item-size);
    line-height: 1;
    text-align: center;
    text-decoration: none;
    background-color: tint(#666, 4%);
    border-radius: 6px;
    box-shadow: 0 0 4px #d9d9d9;
  }
  .moly-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .moly-slider-tooltip-placement-top .moly-slider-tooltip-arrow {
    bottom: 4px;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-top-color: tint(#666, 4%);
  }
`]))),nn={backgroundColor:"var(--bds-brand-700-normal,#F7A600)",height:4},tn={height:16,width:16,backgroundColor:"var(--bds-brand-700-normal,#F7A600)",border:"0px",marginTop:"-6px",opacity:"1"},en={backgroundColor:"var(--bds-gray-ele-border,#E9EDF2)",height:4},on={backgroundColor:"var(--bds-gray-ele-border,#E9EDF2)",height:8},rn={backgroundColor:"var(--bds-gray-ele-border,#E9EDF2)",borderColor:"var(--bds-gray-ele-border,#E9EDF2)",height:8},an={backgroundColor:"var(--bds-brand-700-normal,#F7A600)",borderColor:"var(--bds-brand-700-normal,#F7A600)",height:8},ln=n(15493),dn=function(e){var p=(0,j.F)(),v=g()(p,1),x=v[0],S=e.markTip===void 0?"true":e.markTip.toString();return(0,m.jsx)(r.Z,o()(o()({},e),{},{handleRender:e.ToolTip?function(L,C){return M(L,C,e.tipFormatter)}:void 0,prefixCls:"moly-slider",className:(0,c.cn)($,q,J[e.size||ln.n.small],Q[S]),trackStyle:nn,handleStyle:tn,railStyle:en,dotStyle:x==="dark"?rn:on,activeDotStyle:an}))},sn=dn},15493:function(D,a,n){n.d(a,{n:function(){return l}});var l=function(o){return o[o.small=0]="small",o[o.medium=1]="medium",o}({})},65090:function(D,a,n){n.d(a,{F:function(){return j}});var l=n(5574),o=n.n(l),h=n(67294),g=function(r){if(typeof window!="undefined"){var d=document.documentElement;return d.classList.contains("moly-theme-dark")?"dark":r||"light"}return"light"},j=function(){var r=(0,h.useState)(g()),d=o()(r,2),F=d[0],w=d[1],b=null;return typeof window!="undefined"&&(b=new MutationObserver(function(){w(g())}),b.observe(document.documentElement,{attributes:!0})),(0,h.useEffect)(function(){return function(){var t;return(t=b)===null||t===void 0?void 0:t.disconnect()}}),[F]}}}]);
