"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[3491],{69216:function(A,s,n){var p=n(31975);s.Z=p.Z},521:function(A,s,n){n.d(s,{Z:function(){return m}});var p=n(68400),o=n.n(p),T=n(36493),O=n(93985),Z=n(46069),h=n(67294),u=n(85893),j,M=(0,O.hi)(j||(j=o()([`
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
`]))),v=h.forwardRef(function(e,r){var i=e.className,w=e.children,y=e.size,L=e.align,l=e.direction,k=l===void 0?"horizontal":l,E=e.wrap,z=e.split,C=e.compact,X=e.style,f=L||(k==="horizontal"?"center":"start"),F=function(){var d=Array.isArray(y)?y:[y,y],R=d.map(function(c){return typeof c=="number"?"".concat(c,"px"):c==="middle"?"16px":c==="large"?"24px":"8px"});return R.join(" ")};return(0,u.jsx)("div",{className:(0,T.cn)("moly-space flex",{"flex-col inline-flex moly-space-vertical":k==="vertical","items-center":f==="center"||k==="horizontal","items-start":f==="start","items-end":f==="end","items-baseline":f==="baseline","flex-wrap":E,"moly-space-compact":C},i),style:C?{}:{gap:F()},ref:r,children:h.Children.map(w,function(S,d){return(0,u.jsxs)(h.Fragment,{children:[(0,u.jsx)("div",{style:X,className:(0,T.cn)("moly-space-item",{"w-full":f==="stretch","moly-space-item-first":d===0,"moly-space-item-last":d===h.Children.count(w)-1}),children:S}),z&&(0,u.jsx)("div",{className:"moly-space-split last:hidden",children:z})]},d)})})});v.displayName=Z.fC.displayName;var m=v},31975:function(A,s,n){n.d(s,{Z:function(){return ln}});var p=n(97857),o=n.n(p),T=n(36493),O=n(15560),Z=n(5574),h=n.n(Z),u=n(13769),j=n.n(u),M=n(92419),v=n(64543),m=n(67294),e=n(68400),r=n.n(e),i=n(93985),w,y={molyTooltip:(0,i.iv)(w||(w=r()([`
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
  `])))},L=y,l=n(85893),k=["value","children","onDrag","tipFormatter"],E=null,z=function(t){var a=t.value,b=t.children,g=t.onDrag,D=t.tipFormatter,K=D===void 0?function(W){return W}:D,P=j()(t,k),x=(0,m.useRef)(),V=(0,m.useRef)(null),dn=(0,m.useState)(!1),Y=h()(dn,2),B=Y[0],H=Y[1];function $(){v.Z.cancel(V.current)}function sn(){V.current=(0,v.Z)(function(){x.current&&x.current.forceAlign()})}(0,m.useEffect)(function(){return B?sn():$(),$},[a,B]),(0,m.useEffect)(function(){H(g)},[g]);var pn=function(I){H(g?!0:I)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(M.Z,o()(o()({prefixCls:L.molyTooltip,trigger:["hover"],getTooltipContainer:function(I){return I},placement:"top",overlay:K(a),overlayInnerStyle:{minHeight:"auto"},ref:x,visible:B,onVisibleChange:pn},P),{},{children:b}))})},C=function(t,a,b){return(0,l.jsx)(z,{value:a.value,onDrag:a.dragging,tipFormatter:b,children:t})},X=function(t){var a=t.tipFormatter,b=t.tipProps,g=_objectWithoutProperties(t,E),D=function(P,x){return _jsx(z,_objectSpread(_objectSpread({value:x.value,onDrag:x.dragging,tipFormatter:a},b),{},{children:P}))};return _jsx(Slider,_objectSpread(_objectSpread({},g),{},{handleRender:D}))},f=null,F,S,d,R,c,G,U=(0,i.iv)(F||(F=r()([`
  position: relative;
  width: 100%;
  height: 14px;
  padding: 5px 0;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`]))),J={small:(0,i.iv)(S||(S=r()([`
    --item-size: 12px;
  `]))),medium:(0,i.iv)(d||(d=r()([`
    --item-size: 14px;
  `])))},Q={false:(0,i.iv)(R||(R=r()([`
    --mark-text-display: none;
  `]))),true:(0,i.iv)(c||(c=r()([`
    --mark-text-display: inline-block;
  `])))},q=(0,i.iv)(G||(G=r()([`
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
    border-color: tint(#2db7f5, 20%);
    // transition-property: all;
    // transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    // transition-duration: 100ms;
    // transform: translateX(-50%) scale(1.25) !important;
  }
  .moly-slider-handle:hover {
    border-color: tint(#2db7f5, 20%);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 100ms;
    transform: translateX(-50%) translateY(-6px) !important;
    width: 24px !important;
    height: 24px !important;
  }
  .moly-slider-handle:active {
    border-color: tint(#2db7f5, 20%);
    box-shadow: 0 0 5px tint(#2db7f5, 20%);
    cursor: -webkit-grabbing;
    cursor: grabbing;
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
`]))),_={backgroundColor:"var(--bds-brand-700-normal,#F7A600)",height:4},nn={height:16,width:16,backgroundColor:"var(--bds-brand-700-normal,#F7A600)",border:"0px",marginTop:"-6px",opacity:"1"},tn={backgroundColor:"var(--bds-gray-ele-border,#E9EDF2)",height:4},on={backgroundColor:"var(--bds-gray-ele-border,#E9EDF2)",height:8},en={backgroundColor:"var(--bds-brand-700-normal,#F7A600)",borderColor:"var(--bds-brand-700-normal,#F7A600)",height:8},rn=n(15493),an=function(t){var a=t.markTip===void 0?"true":t.markTip.toString();return(0,l.jsx)(O.Z,o()(o()({},t),{},{handleRender:t.ToolTip?function(b,g){return C(b,g,t.tipFormatter)}:void 0,prefixCls:"moly-slider",className:(0,T.cn)(U,q,J[t.size||rn.n.small],Q[a]),trackStyle:_,handleStyle:nn,railStyle:tn,dotStyle:on,activeDotStyle:en}))},ln=an},15493:function(A,s,n){n.d(s,{n:function(){return p}});var p=function(o){return o[o.small=0]="small",o[o.medium=1]="medium",o}({})}}]);
