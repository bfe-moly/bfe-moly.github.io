(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[1262,5968,3373],{95486:function(c,m,t){"use strict";t.r(m);var b=t(5574),u=t.n(b),f=t(21256),o=t(67294),g=t(55902),i=t(96596),a=t(85893),l=function(n){var r=n.label,d=n.value,x=n.items,y=n.handleRadioChange,v=(0,f.OI)(),p=u()(v,1),e=p[0];return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:r}),(0,a.jsx)(g.Z,{size:"medium",items:x,value:d,orientation:"horizontal",handleRadioChange:y,theme:e})]})},w=["terrible","bad","normal","good","wonderful"],T=function(){var n=(0,o.useState)("medium"),r=u()(n,2),d=r[0],x=r[1],y=(0,o.useState)(1),v=u()(y,2),p=v[0],e=v[1],N=(0,o.useState)(1),H=u()(N,2),R=H[0],B=H[1],D=(0,o.useState)(0),W=u()(D,2),O=W[0],P=W[1],K=(0,o.useState)(1),_=u()(K,2),$=_[0],Z=_[1],h=(0,o.useState)(),E=u()(h,2),A=E[0],M=E[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{value:d,handleRadioChange:function(C){x(C)},label:"size",items:[{key:"medium",value:"medium",childrenNode:"medium"},{key:"small",value:"small",childrenNode:"small"}]}),(0,a.jsx)(l,{value:p,label:"isAllowClear",handleRadioChange:function(C){e(C)},items:[{key:"isAllowClearAllow",value:1,childrenNode:"allow"},{key:"isAllowClearNotAllow",value:0,childrenNode:"not allowed"}]}),(0,a.jsx)(l,{value:R,label:"isAllowHalf",handleRadioChange:function(C){B(C)},items:[{key:"isAllowHalf",value:1,childrenNode:"allow"},{key:"isAllowHalfNotAllow",value:0,childrenNode:"not allowed"}]}),(0,a.jsx)(l,{value:O,label:"isDisabled",handleRadioChange:function(C){P(C)},items:[{key:"isDisabledTrue",value:1,childrenNode:"true"},{key:"isDisabledFalse",value:0,childrenNode:"false"}]}),(0,a.jsx)(l,{handleRadioChange:function(C){Z(C),M(C==="text"?w:void 0)},label:"isShowHoverTip",value:$,items:[{key:"showHoverTip",value:1,childrenNode:"show"},{key:"hideHoverTip",value:0,childrenNode:"hide"},{key:"showText",value:"text",childrenNode:"text"}]}),(0,a.jsx)("div",{style:{paddingTop:20},children:(0,a.jsx)(i.Z,{allowClear:p,allowHalf:R,disabled:!!O,size:d,defaultValue:2,showToolTips:!!$,tooltips:A})})]})};m.default=T},96596:function(c,m,t){"use strict";t.d(m,{Z:function(){return Z}});var b=t(97857),u=t.n(b),f=t(9783),o=t.n(f),g=t(5574),i=t.n(g),a=t(13769),l=t.n(a),w=t(68400),T=t.n(w),s=t(22641),n=t(65090),r=t(81396),d=t(36493),x=t(93985),y=t(71032),v=t(67294),p=t(5968),e=t(85893),N=function(){return(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",children:(0,e.jsx)("path",{fill:"currentColor",d:"M16 1.333c.508 0 .972.288 1.196.743l3.81 7.72 8.52 1.245a1.334 1.334 0 0 1 .738 2.274L24.1 19.32l1.455 8.482a1.333 1.333 0 0 1-1.935 1.406L16 25.2l-7.619 4.007A1.333 1.333 0 0 1 6.447 27.8L7.9 19.32l-6.164-6.004a1.333 1.333 0 0 1 .738-2.274l8.52-1.246 3.81-7.719a1.333 1.333 0 0 1 1.196-.743Z"})})},H=N,R=function(){return(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",children:(0,e.jsx)("path",{d:"M12 1C12.3806 1 12.7283 1.21607 12.8967 1.55738L15.7543 7.34647L22.1447 8.28051C22.5212 8.33555 22.8339 8.59956 22.9513 8.96157C23.0687 9.32358 22.9704 9.72083 22.6978 9.98636L18.0746 14.4894L19.1656 20.851C19.23 21.2261 19.0757 21.6053 18.7678 21.8291C18.4598 22.0528 18.0515 22.0823 17.7146 21.9051L12 18.8998L6.28548 21.9051C5.94856 22.0823 5.54027 22.0528 5.2323 21.8291C4.92432 21.6053 4.77007 21.2261 4.83442 20.851L5.92551 14.4894L1.3023 9.98636C1.02968 9.72083 0.931405 9.32358 1.04878 8.96157C1.16616 8.59956 1.47884 8.33555 1.8554 8.28051L8.24577 7.34647L11.1033 1.55738C11.2718 1.21607 11.6194 1 12 1Z",fill:"currentColor"})})},B=R,D=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5,A=Array.from({length:E},function(L,C){return(C+1).toString()}),M=Array.from({length:E},function(L,C){return(C+.5).toString()});return{integerArray:A,hoverArray:M}},W=["size","theme","disabled","direction","className","rootClassName","style","tooltips","showToolTips","character","onHoverChange"],O,P="moly-rate",K=(0,x.hi)(O||(O=T()([`
.moly-rate-rtl.moly-rate {
  direction: rtl;
}
.moly-rate {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--bds-brand-700-normal);
  font-size: 20px;
  line-height: 1;
  list-style: none;
  display: inline-block;
  outline: none;

  >div:not(:last-child) {
    margin-inline-end: 24px;
  }

  &-disabled.moly-rate .moly-rate-star {
    cursor: default;

    >div:hover {
      transform: scale(1);
    }
  }

  &-star {
    font-size: 32px;
    position: relative;
    display: inline-block;
    color: inherit;
    cursor: pointer;

    &:not(:last-child) {
      margin-inline-end: 24px;
    }

    >div {
      max-height: 32px;
      transition: all .2s, outline 0s;

      &:hover {
        transform: scale(1.125)
      }

      &:focus {
        outline: 0;
      }
    }

    // \u9ED8\u8BA4starbg
    &-first,
    &-second {
      color: #E9EDF2;
      transition: all .2s;
      user-select: none
    }

    &-first {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;
      opacity: 0;
    }

    &-half .moly-rate-star-first,
    &-half .moly-rate-star-second {
      opacity: 1;
    }

    &-half .moly-rate-star-first,
    &-full .moly-rate-star-second {
      color: inherit;
    }
  }
}

.moly-rate-small {
  >div:not(:last-child) {
    margin-inline-end: 16px;
  }

  .moly-rate-star {
    font-size: 20px;

    &:not(:last-child) {
      margin-inline-end: 16px;
    }

    >div {
      max-height: 24px;

      &:hover {
        transform: scale(1.1458)
      }
    }
  }
}

.moly-rate-dark {

  .moly-rate-star-first,
  .moly-rate-star-second {
    color: #404347;
  }

  .moly-rate-star-half .moly-rate-star-first,
  .moly-rate-star-full .moly-rate-star-second {
    color: inherit;
  }
}
`]))),_=v.forwardRef(function(h,E){var A,M=h.size,L=M===void 0?"medium":M,C=h.theme,F=h.disabled,G=h.direction,q=h.className,ee=h.rootClassName,k=h.style,re=k===void 0?{}:k,I=h.tooltips,te=h.showToolTips,X=te===void 0?!1:te,ne=h.character,oe=ne===void 0?L==="medium"?(0,e.jsx)(H,{}):(0,e.jsx)(B,{}):ne,U=h.onHoverChange,le=l()(h,W),z=(0,s.S)(),S=(0,n.F)(),V=i()(S,1),Y=V[0],ie=(0,v.useState)(I),se=i()(ie,2),j=se[0],de=se[1],J=D(h==null?void 0:h.count),ae=J.integerArray,ue=J.hoverArray;(0,v.useEffect)(function(){(0,r.VG)("rate")},[]),(0,v.useEffect)(function(){de(I)},[I]);var ce=function(Q,me){var ve=me.index;return I||X?(0,e.jsx)(p.default,{title:j==null?void 0:j[ve],trigger:"hover",placement:"top",children:Q}):Q},fe=function(Q){X&&!I&&(j!=null&&j.includes(Q==null?void 0:Q.toString())||de(j!=null&&j.includes("1")?ue:ae)),U==null||U(Q)};return(0,e.jsx)(y.Z,u()(u()({ref:E,character:oe,characterRender:ce,disabled:F,direction:G||(z?"rtl":"ltr")},le),{},{className:(0,d.cn)(q,ee,"".concat(P,"-").concat(L),"".concat(P,"-").concat(C||Y),(A={},o()(A,"".concat(P,"-disabled"),F),o()(A,"".concat(P,"-rtl"),G==="rtl"),A)),onHoverChange:fe,prefixCls:P,style:re}))}),$=_,Z=$},5968:function(c,m,t){"use strict";t.r(m),t.d(m,{SideEnum:function(){return v},default:function(){return p}});var b=t(19632),u=t.n(b),f=t(5574),o=t.n(f),g=t(92419),i=t(67294),a=t(36493),l=t(68400),w=t.n(l),T=t(93985),s,n,r={molyTooltipUnderline:(0,T.iv)(s||(s=w()([`
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
  `])))},d=function(){return(0,T.hi)(n||(n=w()([`
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
`])))},x=r,y=t(85893);d();var v=function(e){return e[e.top=0]="top",e[e.left=1]="left",e[e.right=2]="right",e[e.bottom=3]="bottom",e[e.topLeft=4]="topLeft",e[e.topRight=5]="topRight",e[e.bottomLeft=6]="bottomLeft",e[e.bottomRight=7]="bottomRight",e[e.leftTop=8]="leftTop",e[e.leftBottom=9]="leftBottom",e[e.rightTop=10]="rightTop",e[e.rightBottom=11]="rightBottom",e}({});function p(e){var N=e.children,H=e.title,R=e.placement,B=R===void 0?"top":R,D=e.defaultOpen,W=D===void 0?!1:D,O=e.popupContainer,P=O===void 0?typeof document=="undefined"?void 0:document.body:O,K=e.mouseEnterDelay,_=K===void 0?300:K,$=e.mouseLeaveDelay,Z=$===void 0?300:$,h=e.overlayClassName,E=e.overlayStyle,A=e.trigger,M=A===void 0?"hover":A,L=e.open,C=e.zIndex,F=e.onOpenChange,G=F===void 0?function(){}:F,q=e.destroyTooltipOnHide,ee=q===void 0?!1:q,k=e.hasDashedLine,re=k===void 0?!1:k,I=e.stopPropagation,te=I===void 0?!1:I,X=(0,i.useRef)(null),ne=(0,i.useState)([]),oe=o()(ne,2),U=oe[0],le=oe[1];return(0,i.useEffect)(function(){var z,S,V,Y,ie=6,se=16,j=((z=X.current)===null||z===void 0||(S=z.getBoundingClientRect())===null||S===void 0?void 0:S.width)||0,de=((V=X.current)===null||V===void 0||(Y=V.getBoundingClientRect())===null||Y===void 0?void 0:Y.height)||0,J=j/2-se-ie,ae=de/2-se-ie,ue={topLeft:[J,-4],top:[0,-4],topRight:[-J,-4],bottomLeft:[J,4],bottom:[0,4],bottomRight:[-J,4],leftTop:[-4,ae],left:[-4,0],leftBottom:[-4,-ae],rightTop:[4,ae],right:[4,0],rightBottom:[4,-ae]};le(ue)},[]),(0,y.jsx)(g.Z,{prefixCls:"moly-tooltip",trigger:M,defaultVisible:W,placement:B,onVisibleChange:function(S){return G(S)},visible:L,overlay:H,overlayStyle:E,overlayClassName:h,mouseEnterDelay:_/1e3,mouseLeaveDelay:Z/1e3,getTooltipContainer:function(){return P},destroyTooltipOnHide:ee,showArrow:!0,align:{offset:U[B]},zIndex:C,children:(0,y.jsx)("div",{className:a.cn.apply(void 0,["inline-block"].concat(u()(re?[x.molyTooltipUnderline,"cursor-pointer"]:[]))),onClick:function(S){te&&S.stopPropagation()},ref:X,children:N})})}},65090:function(c,m,t){"use strict";t.d(m,{F:function(){return g}});var b=t(5574),u=t.n(b),f=t(67294),o=function(a){if(typeof window!="undefined"){var l=document.documentElement;return l.classList.contains("moly-theme-dark")?"dark":a||"light"}return"light"},g=function(){var a=(0,f.useState)(o()),l=u()(a,2),w=l[0],T=l[1],s=null;return typeof window!="undefined"&&(s=new MutationObserver(function(){T(o())}),s.observe(document.documentElement,{attributes:!0})),(0,f.useEffect)(function(){return function(){var n;return(n=s)===null||n===void 0?void 0:n.disconnect()}}),[w]}},81396:function(c,m,t){"use strict";t.d(m,{j:function(){return a},VG:function(){return l}});var b=t(15009),u=t.n(b),f=t(99289),o=t.n(f),g=function(){var n=["en","en-US","zh-CN","zh-TW","ja-JP","ko-KR","ru-RU","es-ES","vi-VN","tr-TR","pt-BR","pt-PT","fr-FR","th-TH","id-ID","kk-KZ","fil-PH","uk-UA","hi-IN","ar-SA","es-MX","es-AR","es-419","zh-MY","pl-PL","nl-NL"],r=window.location.host,d=window.location.pathname,x=d,y=d.split("/");return n.some(function(v){var p;return(v==null?void 0:v.toLocaleLowerCase())===((p=y[1])===null||p===void 0?void 0:p.toLocaleLowerCase())})&&(x="/"+y.slice(2).join("/")),"".concat(r).concat(x)},i=function(){var s=o()(u()().mark(function n(){var r,d=arguments;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return r=d.length>0&&d[0]!==void 0?d[0]:30,y.abrupt("return",new Promise(function(v){var p,e;(p=window)!==null&&p!==void 0&&p.sensorsDataAnalytic201505&&(e=window.sensorsDataAnalytic201505)!==null&&e!==void 0&&e.enableLocalLog&&v(window.sensorsDataAnalytic201505),setTimeout(function(){r>0?i(r-1).then(v):v(null)},100)}));case 2:case"end":return y.stop()}},n)}));return function(){return s.apply(this,arguments)}}(),a=function(){for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];i().then(function(x){x==null||x.track.apply(x,r)})},l=function(n){a("molyComp",{comp_type:n||"",host_path:g()})},w=function(){for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];console.log(r)},T=function(){for(var n,r,d=arguments.length,x=new Array(d),y=0;y<d;y++)x[y]=arguments[y];var v=x[0],p=v===void 0?{}:v;Object.prototype.toString.call(p)==="[object Object]"&&(p.host_path=getHostPath());var e=((n=window)===null||n===void 0||(r=n.Monitor)===null||r===void 0?void 0:r.log)||w;e.apply(void 0,x)}},92419:function(c,m,t){"use strict";t.d(m,{Z:function(){return v}});var b=t(87462),u=t(1413),f=t(91),o=t(25152),g=t(67294),i={shiftX:64,adjustY:1},a={adjustX:1,shiftY:!0},l=[0,0],w={left:{points:["cr","cl"],overflow:a,offset:[-4,0],targetOffset:l},right:{points:["cl","cr"],overflow:a,offset:[4,0],targetOffset:l},top:{points:["bc","tc"],overflow:i,offset:[0,-4],targetOffset:l},bottom:{points:["tc","bc"],overflow:i,offset:[0,4],targetOffset:l},topLeft:{points:["bl","tl"],overflow:i,offset:[0,-4],targetOffset:l},leftTop:{points:["tr","tl"],overflow:a,offset:[-4,0],targetOffset:l},topRight:{points:["br","tr"],overflow:i,offset:[0,-4],targetOffset:l},rightTop:{points:["tl","tr"],overflow:a,offset:[4,0],targetOffset:l},bottomRight:{points:["tr","br"],overflow:i,offset:[0,4],targetOffset:l},rightBottom:{points:["bl","br"],overflow:a,offset:[4,0],targetOffset:l},bottomLeft:{points:["tl","bl"],overflow:i,offset:[0,4],targetOffset:l},leftBottom:{points:["br","bl"],overflow:a,offset:[-4,0],targetOffset:l}},T=null,s=t(94184),n=t.n(s);function r(p){var e=p.children,N=p.prefixCls,H=p.id,R=p.overlayInnerStyle,B=p.className,D=p.style;return g.createElement("div",{className:n()("".concat(N,"-content"),B),style:D},g.createElement("div",{className:"".concat(N,"-inner"),id:H,role:"tooltip",style:R},typeof e=="function"?e():e))}var d=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],x=function(e,N){var H=e.overlayClassName,R=e.trigger,B=R===void 0?["hover"]:R,D=e.mouseEnterDelay,W=D===void 0?0:D,O=e.mouseLeaveDelay,P=O===void 0?.1:O,K=e.overlayStyle,_=e.prefixCls,$=_===void 0?"rc-tooltip":_,Z=e.children,h=e.onVisibleChange,E=e.afterVisibleChange,A=e.transitionName,M=e.animation,L=e.motion,C=e.placement,F=C===void 0?"right":C,G=e.align,q=G===void 0?{}:G,ee=e.destroyTooltipOnHide,k=ee===void 0?!1:ee,re=e.defaultVisible,I=e.getTooltipContainer,te=e.overlayInnerStyle,X=e.arrowContent,ne=e.overlay,oe=e.id,U=e.showArrow,le=U===void 0?!0:U,z=(0,f.Z)(e,d),S=(0,g.useRef)(null);(0,g.useImperativeHandle)(N,function(){return S.current});var V=(0,u.Z)({},z);"visible"in e&&(V.popupVisible=e.visible);var Y=function(){return g.createElement(r,{key:"content",prefixCls:$,id:oe,overlayInnerStyle:te},ne)};return g.createElement(o.Z,(0,b.Z)({popupClassName:H,prefixCls:$,popup:Y,action:B,builtinPlacements:w,popupPlacement:F,ref:S,popupAlign:q,getPopupContainer:I,onPopupVisibleChange:h,afterPopupVisibleChange:E,popupTransitionName:A,popupAnimation:M,popupMotion:L,defaultPopupVisible:re,autoDestroy:k,mouseLeaveDelay:P,popupStyle:K,mouseEnterDelay:W,arrow:le},V),Z)},y=(0,g.forwardRef)(x),v=y},64217:function(c,m,t){"use strict";t.d(m,{Z:function(){return l}});var b=t(1413),u=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,f=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,o="".concat(u," ").concat(f).split(/[\s\n]+/),g="aria-",i="data-";function a(w,T){return w.indexOf(T)===0}function l(w){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s;T===!1?s={aria:!0,data:!0,attr:!0}:T===!0?s={aria:!0}:s=(0,b.Z)({},T);var n={};return Object.keys(w).forEach(function(r){(s.aria&&(r==="role"||a(r,g))||s.data&&a(r,i)||s.attr&&o.includes(r))&&(n[r]=w[r])}),n}},96446:function(c,m,t){var b=t(37923);function u(f){if(Array.isArray(f))return b(f)}c.exports=u,c.exports.__esModule=!0,c.exports.default=c.exports},96936:function(c){function m(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}c.exports=m,c.exports.__esModule=!0,c.exports.default=c.exports},88619:function(c){function m(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c.exports=m,c.exports.__esModule=!0,c.exports.default=c.exports},19632:function(c,m,t){var b=t(96446),u=t(96936),f=t(96263),o=t(88619);function g(i){return b(i)||u(i)||f(i)||o()}c.exports=g,c.exports.__esModule=!0,c.exports.default=c.exports},57898:function(c,m,t){"use strict";t.d(m,{D:function(){return u}});var b=t(67294);function u(f){const o=(0,b.useRef)({value:f,previous:f});return(0,b.useMemo)(()=>(o.current.value!==f&&(o.current.previous=o.current.value,o.current.value=f),o.current.previous),[f])}},7546:function(c,m,t){"use strict";t.d(m,{t:function(){return f}});var b=t(67294),u=t(9981);function f(o){const[g,i]=(0,b.useState)(void 0);return(0,u.b)(()=>{if(o){i({width:o.offsetWidth,height:o.offsetHeight});const a=new ResizeObserver(l=>{if(!Array.isArray(l)||!l.length)return;const w=l[0];let T,s;if("borderBoxSize"in w){const n=w.borderBoxSize,r=Array.isArray(n)?n[0]:n;T=r.inlineSize,s=r.blockSize}else T=o.offsetWidth,s=o.offsetHeight;i({width:T,height:s})});return a.observe(o,{box:"border-box"}),()=>a.unobserve(o)}else i(void 0)},[o]),g}}}]);
