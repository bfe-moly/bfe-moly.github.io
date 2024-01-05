!(function(){var Ie=Object.defineProperty;var te=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var be=(o,i,e)=>i in o?Ie(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e,F=(o,i)=>{for(var e in i||(i={}))ve.call(i,e)&&be(o,e,i[e]);if(te)for(var e of te(i))fe.call(i,e)&&be(o,e,i[e]);return o};var ie=(o,i)=>{var e={};for(var a in o)ve.call(o,a)&&i.indexOf(a)<0&&(e[a]=o[a]);if(o!=null&&te)for(var a of te(o))i.indexOf(a)<0&&fe.call(o,a)&&(e[a]=o[a]);return e};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[3150],{14429:function(o,i,e){"use strict";e.r(i);var a=e(23272),g=e(14479),b=e(7935),t=e(85893),_=function(){var r=(0,a.lm)(),v=r.notification,s=r.ENotificationType,n=4500,l="\u63CF\u8FF0\u6587\u6848",c="\u63CF\u8FF0\u6587\u6848";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.m,{}),(0,t.jsxs)("div",{className:"moly-space flex items-center flex-wrap moly-space-compact",style:{gap:"8px"},children:[(0,t.jsx)(b.Z,{variant:"tradeLong","data-swipe-direction":"right",onClick:function(){v({iconType:s.SUCCESS,title:l,duration:n,description:c})},children:"success"}),(0,t.jsx)(b.Z,{variant:"tradeShort","data-swipe-direction":"down",onClick:function(){v({iconType:s.FAIL,title:l,duration:n,description:c})},children:"fail"}),(0,t.jsx)(b.Z,{variant:"primary","data-swipe-direction":"down",onClick:function(){v({iconType:s.INFO,title:l,duration:n,description:c})},children:"info"}),(0,t.jsx)(b.Z,{variant:"tradeShort","data-swipe-direction":"down",onClick:function(){v({iconType:s.WARN,title:l,duration:n,description:c})},children:"warn"}),(0,t.jsx)(b.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){v({duration:n,title:l,description:c})},children:"normal"})]})]})};i.default=_},57370:function(o,i,e){"use strict";e.r(i);var a=e(23272),g=e(14479),b=e(7935),t=e(85893),_=function(){var r=(0,a.lm)(),v=r.notification,s=r.ENotificationType,n="\u63CF\u8FF0\u6587\u6848",l="\u63CF\u8FF0\u6587\u6848";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.m,{}),(0,t.jsxs)("div",{className:"moly-space flex items-center flex-wrap moly-space-compact",style:{gap:"8px"},children:[(0,t.jsx)(b.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){v({icon:"https://www.bybit.com/uniframe/static/media/Facebook.1685d893.svg",iconType:s.CUSTOM,title:n,description:l})},children:"custom icon"}),(0,t.jsx)(b.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){v({showCloseBtn:!0,title:n,description:l,duration:10*10*1e3})},children:"close button"}),(0,t.jsx)(b.Z,{variant:"tradeSecondary","data-swipe-direction":"down",onClick:function(){v({duration:1e3,title:n,description:l})},children:"duration custom - 1s"}),(0,t.jsx)("br",{}),(0,t.jsx)(b.Z,{variant:"primary","data-swipe-direction":"down",onClick:function(){v({showCloseBtn:!0,link:"https://www.bybit.com",linkText:"View",title:n,description:l})},children:"view more in new page"}),(0,t.jsx)(b.Z,{variant:"primary","data-swipe-direction":"down",onClick:function(){v({showCloseBtn:!0,link:"https://www.bybit.com",linkText:"View in current page",linkTarget:"_self",title:n,description:l})},children:"view more in current page"})]})]})};i.default=_},7935:function(o,i,e){"use strict";var a=e(57636);i.Z=a.z},88133:function(o,i,e){"use strict";var a=e(5193);i.Z=a.h},57636:function(o,i,e){"use strict";e.d(i,{z:function(){return d}});var a=e(97857),g=e.n(a),b=e(13769),t=e.n(b),_=e(36493),h=e(42978),r=e(70696),v=e(19492),s=e(67294),n=e(85893),l=["className","variant","size","loading","subtitle","block"],c=(0,v.j)(["moly-btn inline-flex items-center justify-center rounded-lg select-none","text-base font-bds-font-weight-medium transition-all leading-6 font-IBM font-semibold","disabled:cursor-not-allowed disabled:opacity-40 bg-transparent","outline-none ring-btn-default focus-visible:ring-[5px]","border-y-[1px] border-solid border-transparent"],{variants:{variant:{default:["border border-solid border-base-bds-static-border-color bg-base-bds-static-white text-base-bds-static-black","enable:active:border active:border-base-bds-static-active-color active:text-base-bds-static-active-color","enabled:hover:border-brandColor-bds-brand-600-hover","enabled:hover:text-brandColor-bds-brand-600-hover"],primary:["bg-brandColor-bds-brand-700-normal text-base-bds-static-black","enabled:active:bg-brandColor-bds-brand-800-pressed enabled:active:text-base-bds-static-black","enabled:hover:bg-brandColor-bds-brand-600-hover"],secondary:["border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title","enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title","enabled:hover:border-base-bds-gray-t4-dis","enabled:hover:text-base-bds-gray-t2","disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3"],secondaryBrand:["border border-solid border-brandColor-bds-brand-900-focus text-brandColor-bds-brand-900-text","enabled:hover:text-brandColor-bds-brand-700-normal enabled:hover:border-brandColor-bds-brand-600-hover","enabled:active:border-brandColor-bds-brand-800-pressed enabled:active:text-brandColor-bds-brand-800-pressed","disabled:border-base-bds-static-border-color","disabled:opacity-90 disabled:text-base-bds-gray-t3"],tradeLong:["bg-greenColor-bds-green-700-normal text-base-bds-static-white","enabled:active:bg-greenColor-bds-green-800-pressed enabled:active:text-base-bds-static-white","enabled:hover:bg-greenColor-bds-green-600-hover","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-green"],tradeShort:["bg-redColor-bds-red-700-normal text-base-bds-static-white enabled:hover:bg-redColor-bds-red-600-hover","enabled:active:bg-redColor-bds-red-800-pressed enabled:active:text-base-bds-static-white","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100","ring-btn-red"],tradeSecondary:["text-base-bds-gray-t1-title bg-base-bds-gray-ele-border","enabled:hover:bg-base-bds-gray-ele-line enabled:active:bg-base-bds-gray-ele-border enabled:hover:text-base-bds-gray-t1-title","disabled:bg-base-bds-gray-ele-edge disabled:text-base-bds-gray-t3 disabled:opacity-100"],marketing:["opacity-100 bg-bds-gradient-brand enabled:hover:bg-marketing-btn-background-hover","enabled:active:bg-marketing-btn-background-press","enabled:hover:opacity-90","text-base-bds-static-black"]},size:{middle:"px-[24px] py-[11px]","xx-small":"text-xs leading-[18px] px-[8px] py-[2px] rounded","x-small":"text-xs leading-[18px] px-[12px] py-[6px] rounded",small:"text-sm leading-[22px] px-[16px] py-[8px] rounded",large:"text-lg leading-[26px] px-[32px] py-[14px]","x-large":"text-xl px-[32px] py-[17px]"}},defaultVariants:{variant:"default",size:"middle"}}),u={PRIMARY:"primary",SECONDARY:"secondary",SECONDARY_BRAND:"secondaryBrand",TRADE_LONG:"tradeLong",TRADE_SHORT:"tradeShort",TRADE_SECONDARY:"tradeSecondary"},d=s.forwardRef(function(T,M){var O=T.className,p=T.variant,E=T.size,C=T.loading,f=C===void 0?!1:C,A=T.subtitle,D=A===void 0?"":A,N=T.block,L=N===void 0?!1:N,P=t()(T,l),w=D&&E==="small"&&[u.TRADE_LONG,u.TRADE_SHORT,u.TRADE_SECONDARY].includes(p),Y="".concat(L?"w-full":""),z=w?(0,n.jsx)("button",g()(g()({className:(0,_.cn)(c({variant:p,size:E,className:O}),Y,"pt-[4px] pb-[6px]"),ref:M},P),{},{children:(0,n.jsxs)("div",{className:"btn-content flex flex-col",children:[(0,n.jsx)("div",{className:"inner-children leading-[20px]",children:P.children}),(0,n.jsx)("div",{className:"subtitle font-regular text-xs opacity-70 leading-[10px]",children:D})]})})):(0,n.jsxs)("button",g()(g()({className:(0,_.cn)(c({variant:p,size:E,className:O}),Y,{"bg-brandColor-bds-brand-600-hover":f&&p===u.PRIMARY,"text-base-bds-gray-t2":f&&p===u.SECONDARY,"text-brandColor-bds-brand-700-normal":f&&p===u.SECONDARY_BRAND,"bg-greenColor-bds-green-600-hover":f&&p===u.TRADE_LONG,"bg-redColor-bds-red-600-hover":f&&p===u.TRADE_SHORT,"bg-base-bds-gray-ele-line":f&&p===u.TRADE_SECONDARY,"pointer-events-none":f}),ref:M},P),{},{children:[f?(0,n.jsx)(r.LoadingIcon,{className:"mr-2 rtl:ml-2 animate-spin"}):null,P.children]}));return(0,n.jsx)(h.Z,{component:"Button",children:z})});d.displayName="Button"},5193:function(o,i,e){"use strict";e.d(i,{h:function(){return E}});var a=e(97857),g=e.n(a),b=e(13769),t=e.n(b),_=e(36493),h=e(42978),r=e(19492),v=e(68400),s=e.n(v),n=e(93985),l,c=function(){return(0,n.hi)(l||(l=s()([`
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
  `])))},u=e(67294),d=e(85893),T=["className","color","variant","size","children","style","disabled","type","showTooltip","tooltipContent","width"];c();var M=(0,u.lazy)(function(){return e.e(5968).then(e.bind(e,5968))}),O={DEFAULT:"default",OUTLINED:"outlined",FLOAT:"float"},p=(0,r.j)(["inline-flex items-center justify-center","transition-all rounded-lg select-none cursor-pointer","data-[disabled]:text-[var(--bds-gray-t4-dis)] data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:pointer-events-none","focus-visible:outline-none"],{variants:{variant:{default:["text-[var(--bds-gray-t2)]","hover:bg-base-bds-trans-hover","active:active:text-[var(--bds-gray-t1-title)] active:active:bg-base-bds-trans-hover","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],outlined:["text-[var(--bds-gray-t1-title)]","border border-solid border-base-bds-gray-t4-dis","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],float:["text-[var(--bds-gray-t1-title)]","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]"]},size:{"xx-small":"rounded","x-small":"rounded",small:"rounded",middle:"",large:"","x-large":""}},defaultVariants:{variant:"default",size:"middle"}}),E=(0,u.forwardRef)(function(f,A){var D=f.className,N=f.color,L=f.variant,P=f.size,w=f.children,Y=f.style,z=f.disabled,k=f.type,X=f.showTooltip,ne=X===void 0?!1:X,Q=f.tooltipContent,$=f.width,ae=t()(f,T),re=(0,u.useMemo)(function(){return N?$?{backgroundColor:(0,_.ey)(N,.2),width:$,height:$}:{backgroundColor:(0,_.ey)(N,.2)}:{}},[]),x=(0,u.useMemo)(function(){return $?{width:$,height:$}:{}},[]),m=L==="outlined"||L==="default"?0:-1,R=null,y=(0,d.jsx)("div",g()(g()({className:(0,_.cn)("moly-iconbutton",D,"".concat(k?"type-".concat(k):""),"".concat(L||"default"," "),"".concat(P||"middle"),p({variant:L,size:P})),ref:A,"data-disabled":z?"":void 0,tabIndex:m,style:g()(g()(g()({},Y),re),x)},ae),{},{children:w})),I=(0,d.jsx)(h.Z,{component:"IconButton",children:y});return O.OUTLINED===L?R=I:R=y,ne&&Q?(0,d.jsx)(M,{title:Q,children:(0,d.jsx)(d.Fragment,{children:R})}):R});E.displayName="IconButton"},22641:function(o,i,e){"use strict";e.d(i,{S:function(){return v}});var a=e(5574),g=e.n(a),b=e(67294),t=!1,_=!1,h=new Set,r=function(n){t=n,h.forEach(function(l){return l()})},v=function(){var n=(0,b.useState)(t),l=g()(n,2),c=l[0],u=l[1];return(0,b.useEffect)(function(){var d=function(){u(t)};return h.add(d),function(){h.delete(d)}},[]),(0,b.useEffect)(function(){if(!_){_=!0,r(document.documentElement.dir==="rtl");var d=new MutationObserver(function(){r(document.documentElement.dir==="rtl")});d.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}},[]),c}},36493:function(o,i,e){"use strict";e.d(i,{KX:function(){return h},K_:function(){return t},cn:function(){return b},ey:function(){return _}});var a=e(86010),g=e(57851);function b(){for(var r=arguments.length,v=new Array(r),s=0;s<r;s++)v[s]=arguments[s];return(0,g.m)((0,a.W)(v))}function t(r){return r?/^#[0-9A-F]{6}$/i.test(r):!1}function _(r,v){if(!t(r))return r;var s=Math.round(v*255);return"".concat(r).concat(s.toString(16).toUpperCase())}function h(r,v){var s=r.findIndex(function(n){return n!=null});return s===-1?v:r[s]}},42978:function(o,i,e){"use strict";e.d(i,{Z:function(){return re}});var a=e(36493),g=e(55331),b=e(75531),t=e(67294),_=t.isValidElement;function h(x){return x&&_(x)&&x.type===React.Fragment}function r(x,m,R){return _(x)?t.cloneElement(x,typeof R=="function"?R(x.props||{}):R):m}function v(x,m){return r(x,x,m)}var s=e(38024),n=e(64543),l=e(97857),c=e.n(l),u=e(5574),d=e.n(u),T=e(68400),M=e.n(T),O=e(93985),p,E="moly-wave-motion",C="cubic-bezier(0.08, 0.82, 0.17, 1)",f="cubic-bezier(0.645, 0.045, 0.355, 1)",A=(0,O.hi)(p||(p=M()([`
  .`,` {
    position: absolute;
    background: transparent;
    pointer-events: none;
    box-sizing: border-box;
    color: var(--wave-color);

    box-shadow: 0 0 0 0 currentColor;
    opacity: 1;

    &-appear {
      transition: box-shadow 0.4s `,", opacity 2s ",`;

      &-active {
        box-shadow: 0 0 0 6px currentcolor;
        opacity: 0;
      }

      &.wave-quick {
        transition: box-shadow 0.3s `,", opacity 0.35s ",`;
      }
    }
  }
`])),E,C,C,f,f),D=e(82225),N=e(24996),L="moly-wave-target";function P(x){var m=(x||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return m&&m[1]&&m[2]&&m[3]?!(m[1]===m[2]&&m[2]===m[3]):!0}function w(x){return x&&x!=="#fff"&&x!=="#ffffff"&&x!=="rgb(255, 255, 255)"&&x!=="rgba(255, 255, 255, 1)"&&P(x)&&!/rgba\((?:\d*, ){3}0\)/.test(x)&&x!=="transparent"}function Y(x){var m=getComputedStyle(x),R=m.borderTopColor,y=m.borderColor,I=m.backgroundColor;return w(R)?R:w(y)?y:w(I)?I:""}function z(x){return Number.isNaN(x)?0:x}var k=e(85893),X=function(m){var R=m.className,y=m.target,I=m.component,S=t.useRef(null),V=t.useState([]),W=d()(V,2),H=W[0],B=W[1],J=t.useState(0),oe=d()(J,2),q=oe[0],me=oe[1],pe=t.useState(0),se=d()(pe,2),xe=se[0],_e=se[1],he=t.useState(0),de=d()(he,2),ge=de[0],ye=de[1],Ee=t.useState(0),le=d()(Ee,2),Ce=le[0],Re=le[1],Te=t.useState(!1),ce=d()(Te,2),Oe=ce[0],Ae=ce[1],ee={left:q,top:xe,width:ge,height:Ce,borderRadius:H.map(function(j){return"".concat(j,"px")}).join(" ")};y.classList.contains("ring-btn-green")?ee["--wave-color"]="var(--bds-green-100-bg)":y.classList.contains("ring-btn-red")?ee["--wave-color"]="var(--bds-red-100-bg)":ee["--wave-color"]="var(--bds-brand-100-bg)";function ue(){var j=getComputedStyle(y),K=j.position==="static",U=j.borderLeftWidth,G=j.borderTopWidth;me(K?y.offsetLeft:z(-parseFloat(U))),_e(K?y.offsetTop:z(-parseFloat(G))),ye(y.offsetWidth),Re(y.offsetHeight);var Z=j.borderTopLeftRadius,Ne=j.borderTopRightRadius,De=j.borderBottomLeftRadius,Se=j.borderBottomRightRadius;B([Z,Ne,Se,De].map(function(Pe){return z(parseFloat(Pe))}))}if(t.useEffect(function(){if(y){var j=(0,n.Z)(function(){ue(),Ae(!0)}),K;return typeof ResizeObserver!="undefined"&&(K=new ResizeObserver(ue),K.observe(y)),function(){var U;n.Z.cancel(j),(U=K)===null||U===void 0||U.disconnect()}}},[]),!Oe)return null;var Me=(I==="Checkbox"||I==="Radio")&&(y==null?void 0:y.classList.contains(L));return(0,k.jsx)(D.ZP,{visible:!0,motionAppear:!0,motionName:E,motionDeadline:500,onAppearEnd:function(K,U){if(U.deadline||U.propertyName==="opacity"){var G,Z=(G=S.current)===null||G===void 0?void 0:G.parentElement;Z&&(0,N.vE)(Z).then(function(){Z==null||Z.remove()})}return!1},children:function(K){var U=K.className;return(0,k.jsx)("div",{ref:S,className:(0,a.cn)(R,{"wave-quick":Me},U),style:ee})}})},ne=function(m,R){var y,I=R.component;if(!(I==="Checkbox"&&!((y=m.querySelector("input"))!==null&&y!==void 0&&y.checked))){var S=document.createElement("div");S.style.position="absolute",S.style.left="0px",S.style.top="0px",m==null||m.insertBefore(S,m==null?void 0:m.firstChild),(0,N.sY)((0,k.jsx)(X,c()(c()({},R),{},{target:m})),S)}},Q=ne;function $(x,m,R){var y=(0,s.zX)(function(V){var W=x.current;if(W){var H=W.querySelector(".".concat(L))||W;Q(H,{className:m,component:R,event:V})}}),I=t.useRef(),S=function(W){n.Z.cancel(I.current),I.current=(0,n.Z)(function(){y(W)})};return S}var ae=function(m){var R=m.children,y=m.disabled,I=m.component,S=(0,t.useRef)(null),V="moly-wave",W=$(S,(0,a.cn)(V),I);if(t.useEffect(function(){var B=S.current;if(!(!B||B.nodeType!==1||y)){var J=function(q){!(0,g.Z)(q.target)||!B.getAttribute||B.getAttribute("disabled")||B.disabled||B.className.includes("-leave")||W(q)};return B.addEventListener("click",J,!0),function(){B.removeEventListener("click",J,!0)}}},[y]),!t.isValidElement(R))return R!=null?R:null;var H=(0,b.Yr)(R)?(0,b.sQ)(R.ref,S):S;return v(R,{ref:H})},re=ae},96446:function(o,i,e){var a=e(37923);function g(b){if(Array.isArray(b))return a(b)}o.exports=g,o.exports.__esModule=!0,o.exports.default=o.exports},96936:function(o){function i(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}o.exports=i,o.exports.__esModule=!0,o.exports.default=o.exports},88619:function(o){function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=i,o.exports.__esModule=!0,o.exports.default=o.exports},19632:function(o,i,e){var a=e(96446),g=e(96936),b=e(96263),t=e(88619);function _(h){return a(h)||g(h)||b(h)||t()}o.exports=_,o.exports.__esModule=!0,o.exports.default=o.exports},65936:function(o,i,e){"use strict";e.d(i,{B:function(){return _}});var a=e(67294),g=e(25360),b=e(28771),t=e(88426);function _(h){const r=h+"CollectionProvider",[v,s]=(0,g.b)(r),[n,l]=v(r,{collectionRef:{current:null},itemMap:new Map}),c=E=>{const{scope:C,children:f}=E,A=a.useRef(null),D=a.useRef(new Map).current;return a.createElement(n,{scope:C,itemMap:D,collectionRef:A},f)},u=h+"CollectionSlot",d=a.forwardRef((E,C)=>{const{scope:f,children:A}=E,D=l(u,f),N=(0,b.e)(C,D.collectionRef);return a.createElement(t.g7,{ref:N},A)}),T=h+"CollectionItemSlot",M="data-radix-collection-item",O=a.forwardRef((E,C)=>{const w=E,{scope:f,children:A}=w,D=ie(w,["scope","children"]),N=a.useRef(null),L=(0,b.e)(C,N),P=l(T,f);return a.useEffect(()=>(P.itemMap.set(N,F({ref:N},D)),()=>void P.itemMap.delete(N))),a.createElement(t.g7,{[M]:"",ref:L},A)});function p(E){const C=l(h+"CollectionConsumer",E);return a.useCallback(()=>{const A=C.collectionRef.current;if(!A)return[];const D=Array.from(A.querySelectorAll(`[${M}]`));return Array.from(C.itemMap.values()).sort((P,w)=>D.indexOf(P.ref.current)-D.indexOf(w.ref.current))},[C.collectionRef,C.itemMap])}return[{Provider:c,Slot:d,ItemSlot:O},p,s]}},29115:function(o,i,e){"use strict";e.d(i,{z:function(){return h}});var a=e(67294),g=e(73935),b=e(28771),t=e(9981);function _(s,n){return(0,a.useReducer)((l,c)=>{const u=n[l][c];return u!=null?u:l},s)}const h=s=>{const{present:n,children:l}=s,c=r(n),u=typeof l=="function"?l({present:c.isPresent}):a.Children.only(l),d=(0,b.e)(c.ref,u.ref);return typeof l=="function"||c.isPresent?(0,a.cloneElement)(u,{ref:d}):null};h.displayName="Presence";function r(s){const[n,l]=(0,a.useState)(),c=(0,a.useRef)({}),u=(0,a.useRef)(s),d=(0,a.useRef)("none"),T=s?"mounted":"unmounted",[M,O]=_(T,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,a.useEffect)(()=>{const p=v(c.current);d.current=M==="mounted"?p:"none"},[M]),(0,t.b)(()=>{const p=c.current,E=u.current;if(E!==s){const f=d.current,A=v(p);s?O("MOUNT"):A==="none"||(p==null?void 0:p.display)==="none"?O("UNMOUNT"):O(E&&f!==A?"ANIMATION_OUT":"UNMOUNT"),u.current=s}},[s,O]),(0,t.b)(()=>{if(n){const p=C=>{const A=v(c.current).includes(C.animationName);C.target===n&&A&&(0,g.flushSync)(()=>O("ANIMATION_END"))},E=C=>{C.target===n&&(d.current=v(c.current))};return n.addEventListener("animationstart",E),n.addEventListener("animationcancel",p),n.addEventListener("animationend",p),()=>{n.removeEventListener("animationstart",E),n.removeEventListener("animationcancel",p),n.removeEventListener("animationend",p)}}else O("ANIMATION_END")},[n,O]),{isPresent:["mounted","unmountSuspended"].includes(M),ref:(0,a.useCallback)(p=>{p&&(c.current=getComputedStyle(p)),l(p)},[])}}function v(s){return(s==null?void 0:s.animationName)||"none"}},19492:function(o,i,e){"use strict";e.d(i,{j:function(){return t}});var a=e(86010);const g=_=>typeof _=="boolean"?"".concat(_):_===0?"0":_,b=a.Z,t=(_,h)=>r=>{var v;if((h==null?void 0:h.variants)==null)return b(_,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:n}=h,l=Object.keys(s).map(d=>{const T=r==null?void 0:r[d],M=n==null?void 0:n[d];if(T===null)return null;const O=g(T)||g(M);return s[d][O]}),c=r&&Object.entries(r).reduce((d,T)=>{let[M,O]=T;return O===void 0||(d[M]=O),d},{}),u=h==null||(v=h.compoundVariants)===null||v===void 0?void 0:v.reduce((d,T)=>{let E=T,{class:M,className:O}=E,p=ie(E,["class","className"]);return Object.entries(p).every(C=>{let[f,A]=C;return Array.isArray(A)?A.includes(F(F({},n),c)[f]):F(F({},n),c)[f]===A})?[...d,M,O]:d},[]);return b(_,l,u,r==null?void 0:r.class,r==null?void 0:r.className)}}}]);
}());