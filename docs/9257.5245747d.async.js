"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[9257],{19257:function(mo,N,t){t.d(N,{Z:function(){return to}});var H=t(97857),b=t.n(H),V=t(9783),u=t.n(V),z=t(5574),I=t.n(z),M=t(13769),X=t.n(M),Y=t(22641),h=t(36493),R=t(70696),E=t(92419),m=t(67294),W=t(5193),F=t(52677),D=t.n(F),$=8;function Z(o){var p=o.contentRadius,c=o.limitVerticalRadius,a=p>12?p+2:0,s=c?$:a;return{arrowOffsetHorizontal:a,arrowOffsetVertical:s}}function U(o,p,c,a){if(a===!1)return{adjustX:!1,adjustY:!1};var s=a&&D()(a)==="object"?a:{},n={};switch(o){case"top":case"bottom":n.shiftX=p.arrowOffsetHorizontal*2+c,n.shiftY=!0,n.adjustY=!0;break;case"left":case"right":n.shiftY=p.arrowOffsetVertical*2+c,n.shiftX=!0,n.adjustX=!0;break}var v=b()(b()({},n),s);return v.shiftX||(v.adjustX=!0),v.shiftY||(v.adjustY=!0),v}var B={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},G={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},J=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function K(o){var p=o.arrowWidth,c=o.autoAdjustOverflow,a=o.arrowPointAtCenter,s=o.offset,n=o.visibleFirst,v=o.borderRadius,i=p/2,w={};return Object.keys(B).forEach(function(f){var x=a&&G[f]||B[f],e=b()(b()({},x),{},{offset:[0,0],dynamicInset:!0});switch(w[f]=e,J.has(f)&&(e.autoArrow=!1),f){case"top":case"topLeft":case"topRight":e.offset[1]=-i-s;break;case"bottom":case"bottomLeft":case"bottomRight":e.offset[1]=i+s;break;case"left":case"leftTop":case"leftBottom":e.offset[0]=-i-s;break;case"right":case"rightTop":case"rightBottom":e.offset[0]=i+s;break}var d=Z({contentRadius:v,limitVerticalRadius:!0});if(a)switch(f){case"topLeft":case"bottomLeft":e.offset[0]=-d.arrowOffsetHorizontal-i;break;case"topRight":case"bottomRight":e.offset[0]=d.arrowOffsetHorizontal+i;break;case"leftTop":case"rightTop":e.offset[1]=-d.arrowOffsetHorizontal-i;break;case"leftBottom":case"rightBottom":e.offset[1]=d.arrowOffsetHorizontal+i;break}e.overflow=U(f,d,p,c),n&&(e.htmlRegion="visibleFirst")}),w}var Q=t(68400),q=t.n(Q),_=t(93985),O,oo=function(){return(0,_.hi)(O||(O=q()([`
  .moly-popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1030;
    cursor: auto;
    user-select: text;
    white-space: normal;
    text-align: left;

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
    @keyframes popoverHide {
      0% {
        display: block;
      }
      100% {
        display: none;
      }
    }

    &-hidden {
      animation: popoverHide 300ms linear;
      display: none;

      .moly-popover-content {
        animation: contentHide 300ms ease-in;
      }
      .moly-popover-arrow {
        animation: arrowHide 300ms ease-in forwards;
      }
    }

    &-rotate {
      transform: rotateY(180deg);
    }

    &-content{
      box-shadow: 0px 0px 24px 0px rgba(18, 18, 20, 0.10);
      border-radius: 8px;
      overflow: hidden;
      animation: contentShow 300ms ease-out;
      transform-origin: var(--arrow-x,50%) var(--arrow-y,50%);

      .moly-popover-inner{
        border: none;
        border-radius: 8px;
        background-color: var(--bds-gray-bg-float);
        position: relative;
        min-width: 180px;

        .moly-popover-title {
          padding: 12px 12px 0 12px;
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          border-bottom: none;
          color: var(--bds-gray-t1-title);
          display: flex;
          align-items: center;
        }

        .moly-popover-inner-content {
          padding: 2px 12px 12px 12px;
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          color: var(--bds-gray-t1-title);
        }
      }
    }

    // Arrow
    &-arrow {
      border-width: 6px;
      position: absolute;
      display: block;
      border-color: transparent;
      border-style: solid;
      animation: arrowShow 300ms ease-out forwards;
    }

    &.moly-popover-placement-top,
    &.moly-popover-placement-topLeft,
    &.moly-popover-placement-topRight {
      padding-bottom: 6px;
      //transform-origin: bottom;
      .moly-popover-arrow {
        border-top-color: var(--bds-gray-bg-float);
        border-bottom-width: 0;
      }
    }
    &-placement-top &-arrow {
      margin-left: -6px;
    }
    &-placement-topLeft &-arrow {
      bottom: 0;
      left: 16px;
    }
    &-placement-topRight &-arrow {
      bottom: 0;
      right: 16px;
    }

    &.moly-popover-placement-right,
    &.moly-popover-placement-rightTop,
    &.moly-popover-placement-rightBottom {
      padding-left: 6px;
      //transform-origin: left;
      .moly-popover-arrow {
        border-right-color: var(--bds-gray-bg-float);
        border-left-width: 0;
      }
    }
    &-placement-right &-arrow {
      margin-top: -6px;
    }
    &-placement-rightTop &-arrow {
      left: 0;
      top: 16px;
    }
    &-placement-rightBottom &-arrow {
      left: 0;
      bottom: 16px;
    }

    &.moly-popover-placement-bottom,
    &.moly-popover-placement-bottomLeft,
    &.moly-popover-placement-bottomRight {
      padding-top: 6px;
      //transform-origin: top;
      .moly-popover-arrow {
        border-bottom-color: var(--bds-gray-bg-float);
        border-top-width: 0;
      }
    }
    &-placement-bottom &-arrow {
      margin-left: -6px;
    }
    &-placement-bottomLeft &-arrow {
      top: 0;
      left: 16px;
    }
    &-placement-bottomRight &-arrow {
      top: 0;
      right: 16px;
    }

    &.moly-popover-placement-left,
    &.moly-popover-placement-leftTop,
    &.moly-popover-placement-leftBottom {
      padding-right: 6px;
      //transform-origin: right;
      .moly-popover-arrow {
        border-left-color: var(--bds-gray-bg-float);
        border-right-width: 0;
      }
    }
    &-placement-left &-arrow {
      margin-top: -6px;
    }
    &-placement-leftTop &-arrow {
      right: 0;
      top: 16px;
    }
    &-placement-leftBottom &-arrow {
      right: 0;
      bottom: 16px;
    }

    // Info
    &.moly-popover-info{
      .moly-popover-content{
        .moly-popover-inner{
          background-color: var(--bds-gray-bg-float);

          .moly-popover-title {
            color: var(--bds-gray-t1-title);
          }

          .moly-popover-inner-content {
            color: var(--bds-gray-t1-title);
          }
        }
      }
    }
    &.moly-popover-info.moly-popover-placement-top,
    &.moly-popover-info.moly-popover-placement-topLeft,
    &.moly-popover-info.moly-popover-placement-topRight {
      .moly-popover-arrow {
        border-top-color: var(--bds-gray-bg-float);
      }
    }
    &.moly-popover-info.moly-popover-placement-right,
    &.moly-popover-info.moly-popover-placement-rightTop,
    &.moly-popover-info.moly-popover-placement-rightBottom {
      .moly-popover-arrow {
        border-right-color: var(--bds-gray-bg-float);
      }
    }
    &.moly-popover-info.moly-popover-placement-bottom,
    &.moly-popover-info.moly-popover-placement-bottomLeft,
    &.moly-popover-info.moly-popover-placement-bottomRight {
      .moly-popover-arrow {
        border-bottom-color: var(--bds-gray-bg-float);
      }
    }
    &.moly-popover-info.moly-popover-placement-left,
    &.moly-popover-info.moly-popover-placement-leftTop,
    &.moly-popover-info.moly-popover-placement-leftBottom {
      .moly-popover-arrow {
        border-left-color: var(--bds-gray-bg-float);
      }
    }

    // Highlight
    &.moly-popover-highlight{
      .moly-popover-content{
        .moly-popover-inner{
          background-color: var(--bds-brand-700-normal);

          .moly-popover-title {
            color: var(--bds-static-black);
          }

          .moly-popover-inner-content {
            color: var(--bds-static-black);
          }
        }
      }
    }
    &.moly-popover-highlight.moly-popover-placement-top,
    &.moly-popover-highlight.moly-popover-placement-topLeft,
    &.moly-popover-highlight.moly-popover-placement-topRight {
      .moly-popover-arrow {
        border-top-color: var(--bds-brand-700-normal);
      }
    }
    &.moly-popover-highlight.moly-popover-placement-right,
    &.moly-popover-highlight.moly-popover-placement-rightTop,
    &.moly-popover-highlight.moly-popover-placement-rightBottom {
      .moly-popover-arrow {
        border-right-color: var(--bds-brand-700-normal);
      }
    }
    &.moly-popover-highlight.moly-popover-placement-bottom,
    &.moly-popover-highlight.moly-popover-placement-bottomLeft,
    &.moly-popover-highlight.moly-popover-placement-bottomRight {
      .moly-popover-arrow {
        border-bottom-color: var(--bds-brand-700-normal);
      }
    }
    &.moly-popover-highlight.moly-popover-placement-left,
    &.moly-popover-highlight.moly-popover-placement-leftTop,
    &.moly-popover-highlight.moly-popover-placement-leftBottom {
      .moly-popover-arrow {
        border-left-color: var(--bds-brand-700-normal);
      }
    }

    // Warning
    &.moly-popover-warning{
      .moly-popover-content{
        .moly-popover-inner{
          background-color: var(--bds-red-700-normal);

          .moly-popover-title {
            color: var(--bds-static-white);
          }

          .moly-popover-inner-content {
            color: var(--bds-static-white);
          }
        }
      }
    }
    &.moly-popover-warning.moly-popover-placement-top,
    &.moly-popover-warning.moly-popover-placement-topLeft,
    &.moly-popover-warning.moly-popover-placement-topRight {
      .moly-popover-arrow {
        border-top-color: var(--bds-red-700-normal);
      }
    }
    &.moly-popover-warning.moly-popover-placement-right,
    &.moly-popover-warning.moly-popover-placement-rightTop,
    &.moly-popover-warning.moly-popover-placement-rightBottom {
      .moly-popover-arrow {
        border-right-color: var(--bds-red-700-normal);
      }
    }
    &.moly-popover-warning.moly-popover-placement-bottom,
    &.moly-popover-warning.moly-popover-placement-bottomLeft,
    &.moly-popover-warning.moly-popover-placement-bottomRight {
      .moly-popover-arrow {
        border-bottom-color: var(--bds-red-700-normal);
      }
    }
    &.moly-popover-warning.moly-popover-placement-left,
    &.moly-popover-warning.moly-popover-placement-leftTop,
    &.moly-popover-warning.moly-popover-placement-leftBottom {
      .moly-popover-arrow {
        border-left-color: var(--bds-red-700-normal);
      }
    }
  }

`])))},l=t(85893),no=["title","content","trigger","type","children","overlayClassName","placement","visible","onVisibleChange","showCloseBtn"];oo();var C="moly-popover",P=(0,m.memo)(function(o){var p=o.title,c=o.content,a=o.trigger,s=a===void 0?"hover":a,n=o.type,v=o.children,i=o.overlayClassName,w=o.placement,f=w===void 0?"top":w,x=o.visible,e=o.onVisibleChange,d=o.showCloseBtn,T=d===void 0?!1:d,eo=X()(o,no),y=(0,Y.S)(),ro=(0,m.useMemo)(function(){var r=n?"moly-popover-".concat(n):"";return(0,h.cn)(r,"font-IBM",i)},[i,n]),lo=(0,m.useState)(x||!1),S=I()(lo,2),j=S[0],L=S[1];(0,m.useEffect)(function(){L(!!x)},[x]),(0,m.useEffect)(function(){e&&e(j)},[j]);var ao=(0,m.useCallback)(function(r){L(r),e&&e(r)},[e]),k=(0,m.useCallback)(function(){L(!1)},[]),A=(0,m.useMemo)(function(){var r=null,g=(0,h.cn)("absolute","!w-[14px]","!h-[14px]",y?"right-3 moly-popover-rotate":"left-3");return n==="info"?r=(0,l.jsx)(R.HelpIcon,{className:g}):n==="highlight"?r=(0,l.jsx)(R.PlacardIcon,{className:g}):n==="warning"&&(r=(0,l.jsx)(R.CirclepromptIcon,{className:g})),(0,l.jsxs)(l.Fragment,{children:[r,(0,l.jsx)("span",{className:(0,h.cn)(T?"me-7":""),children:p}),T?(0,l.jsx)(W.h,{variant:"default",className:(0,h.cn)("absolute top-3 cursor-pointer",y?"left-3":"right-3",u()({},"!text-base-bds-static-white",n==="warning")),size:"x-small",onClick:k,children:(0,l.jsx)(R.CloseIcon,{})}):null]})},[y,n,p,k,T]),po=(0,m.useCallback)(function(){var r,g;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:(0,h.cn)("".concat(C,"-title"),(r={},u()(r,"!pr-8",n&&y),u()(r,"!pl-8",n&&!y),r)),children:A}),(0,l.jsx)("div",{className:(0,h.cn)("".concat(C,"-inner-content"),y?"text-right":"text-left",(g={},u()(g,"!pr-8",n&&y),u()(g,"!pl-8",n&&!y),g)),children:c})]})},[c,y,A,n]),io=(0,m.useMemo)(function(){var r=K({arrowWidth:12,borderRadius:8,offset:0});return r},[]);return(0,l.jsx)(E.Z,b()(b()({trigger:s,placement:f,overlayClassName:ro,visible:j,onVisibleChange:ao,builtinPlacements:io,getTooltipContainer:function(){return typeof document=="undefined"?void 0:document.body},overlay:po(),prefixCls:C,mouseEnterDelay:.1,mouseLeaveDelay:.1},eo),{},{children:v}))});P.displayName="Popover";var to=P}}]);
