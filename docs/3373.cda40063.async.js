(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[3373,5968],{5968:function(o,l,e){"use strict";e.r(l),e.d(l,{SideEnum:function(){return F},default:function(){return s}});var c=e(19632),m=e.n(c),p=e(5574),b=e.n(p),a=e(92419),n=e(67294),f=e(36493),r=e(68400),O=e.n(r),X=e(93985),R,L,Y={molyTooltipUnderline:(0,X.iv)(R||(R=O()([`
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
  `])))},U=function(){return(0,X.hi)(L||(L=O()([`
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
`])))},G=Y,A=e(85893);U();var F=function(t){return t[t.top=0]="top",t[t.left=1]="left",t[t.right=2]="right",t[t.bottom=3]="bottom",t[t.topLeft=4]="topLeft",t[t.topRight=5]="topRight",t[t.bottomLeft=6]="bottomLeft",t[t.bottomRight=7]="bottomRight",t[t.leftTop=8]="leftTop",t[t.leftBottom=9]="leftBottom",t[t.rightTop=10]="rightTop",t[t.rightBottom=11]="rightBottom",t}({});function s(t){var g=t.children,x=t.title,y=t.placement,u=y===void 0?"top":y,v=t.defaultOpen,J=v===void 0?!1:v,w=t.popupContainer,K=w===void 0?typeof document=="undefined"?void 0:document.body:w,$=t.mouseEnterDelay,D=$===void 0?300:$,C=t.mouseLeaveDelay,Q=C===void 0?300:C,E=t.overlayClassName,q=t.overlayStyle,B=t.trigger,_=B===void 0?"hover":B,tt=t.open,I=t.zIndex,N=t.onOpenChange,H=N===void 0?function(){}:N,P=t.destroyTooltipOnHide,V=P===void 0?!1:P,j=t.hasDashedLine,et=j===void 0?!1:j,M=t.stopPropagation,ot=M===void 0?!1:M,k=(0,n.useRef)(null),nt=(0,n.useState)([]),Z=b()(nt,2),z=Z[0],rt=Z[1];return(0,n.useEffect)(function(){var d,i,h,T,at=6,lt=16,it=((d=k.current)===null||d===void 0||(i=d.getBoundingClientRect())===null||i===void 0?void 0:i.width)||0,st=((h=k.current)===null||h===void 0||(T=h.getBoundingClientRect())===null||T===void 0?void 0:T.height)||0,W=it/2-lt-at,S=st/2-lt-at,pt={topLeft:[W,-4],top:[0,-4],topRight:[-W,-4],bottomLeft:[W,4],bottom:[0,4],bottomRight:[-W,4],leftTop:[-4,S],left:[-4,0],leftBottom:[-4,-S],rightTop:[4,S],right:[4,0],rightBottom:[4,-S]};rt(pt)},[]),(0,A.jsx)(a.Z,{prefixCls:"moly-tooltip",trigger:_,defaultVisible:J,placement:u,onVisibleChange:function(i){return H(i)},visible:tt,overlay:x,overlayStyle:q,overlayClassName:E,mouseEnterDelay:D/1e3,mouseLeaveDelay:Q/1e3,getTooltipContainer:function(){return K},destroyTooltipOnHide:V,showArrow:!0,align:{offset:z[u]},zIndex:I,children:(0,A.jsx)("div",{className:f.cn.apply(void 0,["inline-block"].concat(m()(et?[G.molyTooltipUnderline,"cursor-pointer"]:[]))),onClick:function(i){ot&&i.stopPropagation()},ref:k,children:g})})}},92419:function(o,l,e){"use strict";e.d(l,{Z:function(){return F}});var c=e(87462),m=e(1413),p=e(91),b=e(25152),a=e(67294),n={shiftX:64,adjustY:1},f={adjustX:1,shiftY:!0},r=[0,0],O={left:{points:["cr","cl"],overflow:f,offset:[-4,0],targetOffset:r},right:{points:["cl","cr"],overflow:f,offset:[4,0],targetOffset:r},top:{points:["bc","tc"],overflow:n,offset:[0,-4],targetOffset:r},bottom:{points:["tc","bc"],overflow:n,offset:[0,4],targetOffset:r},topLeft:{points:["bl","tl"],overflow:n,offset:[0,-4],targetOffset:r},leftTop:{points:["tr","tl"],overflow:f,offset:[-4,0],targetOffset:r},topRight:{points:["br","tr"],overflow:n,offset:[0,-4],targetOffset:r},rightTop:{points:["tl","tr"],overflow:f,offset:[4,0],targetOffset:r},bottomRight:{points:["tr","br"],overflow:n,offset:[0,4],targetOffset:r},rightBottom:{points:["bl","br"],overflow:f,offset:[4,0],targetOffset:r},bottomLeft:{points:["tl","bl"],overflow:n,offset:[0,4],targetOffset:r},leftBottom:{points:["br","bl"],overflow:f,offset:[-4,0],targetOffset:r}},X=null,R=e(94184),L=e.n(R);function Y(s){var t=s.children,g=s.prefixCls,x=s.id,y=s.overlayInnerStyle,u=s.className,v=s.style;return a.createElement("div",{className:L()("".concat(g,"-content"),u),style:v},a.createElement("div",{className:"".concat(g,"-inner"),id:x,role:"tooltip",style:y},typeof t=="function"?t():t))}var U=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],G=function(t,g){var x=t.overlayClassName,y=t.trigger,u=y===void 0?["hover"]:y,v=t.mouseEnterDelay,J=v===void 0?0:v,w=t.mouseLeaveDelay,K=w===void 0?.1:w,$=t.overlayStyle,D=t.prefixCls,C=D===void 0?"rc-tooltip":D,Q=t.children,E=t.onVisibleChange,q=t.afterVisibleChange,B=t.transitionName,_=t.animation,tt=t.motion,I=t.placement,N=I===void 0?"right":I,H=t.align,P=H===void 0?{}:H,V=t.destroyTooltipOnHide,j=V===void 0?!1:V,et=t.defaultVisible,M=t.getTooltipContainer,ot=t.overlayInnerStyle,k=t.arrowContent,nt=t.overlay,Z=t.id,z=t.showArrow,rt=z===void 0?!0:z,d=(0,p.Z)(t,U),i=(0,a.useRef)(null);(0,a.useImperativeHandle)(g,function(){return i.current});var h=(0,m.Z)({},d);"visible"in t&&(h.popupVisible=t.visible);var T=function(){return a.createElement(Y,{key:"content",prefixCls:C,id:Z,overlayInnerStyle:ot},nt)};return a.createElement(b.Z,(0,c.Z)({popupClassName:x,prefixCls:C,popup:T,action:u,builtinPlacements:O,popupPlacement:N,ref:i,popupAlign:P,getPopupContainer:M,onPopupVisibleChange:E,afterPopupVisibleChange:q,popupTransitionName:B,popupAnimation:_,popupMotion:tt,defaultPopupVisible:et,autoDestroy:j,mouseLeaveDelay:K,popupStyle:$,mouseEnterDelay:J,arrow:rt},h),Q)},A=(0,a.forwardRef)(G),F=A},96446:function(o,l,e){var c=e(37923);function m(p){if(Array.isArray(p))return c(p)}o.exports=m,o.exports.__esModule=!0,o.exports.default=o.exports},96936:function(o){function l(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},88619:function(o){function l(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},19632:function(o,l,e){var c=e(96446),m=e(96936),p=e(96263),b=e(88619);function a(n){return c(n)||m(n)||p(n)||b()}o.exports=a,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
