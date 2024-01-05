!(function(){"use strict";var Le=Object.defineProperty;var oe=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var ue=(p,c,e)=>c in p?Le(p,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):p[c]=e,re=(p,c)=>{for(var e in c||(c={}))ve.call(c,e)&&ue(p,e,c[e]);if(oe)for(var e of oe(c))be.call(c,e)&&ue(p,e,c[e]);return p};var fe=(p,c)=>{var e={};for(var v in p)ve.call(p,v)&&c.indexOf(v)<0&&(e[v]=p[v]);if(p!=null&&oe)for(var v of oe(p))c.indexOf(v)<0&&be.call(p,v)&&(e[v]=p[v]);return e};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[9709],{79637:function(p,c,e){e.r(c);var v=e(5574),x=e.n(v),b=e(12065),r=e(67294),a=e(85893),y=function(){var h=(0,r.useState)(!1),o=x()(h,2),u=o[0],k=o[1],l=function(d,E){var C;console.log("checked = ".concat(E),d==null||(C=d.target)===null||C===void 0?void 0:C.checked),k(!E)};return(0,a.jsxs)("div",{className:"flex items-center space-x-4 py-4",children:[(0,a.jsx)(b.Z,{onChange:l,children:"Normal"}),(0,a.jsx)(b.Z,{onChange:l,size:"small",children:"Small Size"}),(0,a.jsx)(b.Z,{onChange:l,checked:u,children:"Control Checked"}),(0,a.jsx)(b.Z,{onChange:l,defaultChecked:!0,children:"Default Checked"}),(0,a.jsx)(b.Z,{onChange:l,indeterminate:!0,children:"Indeterminate Style"}),(0,a.jsx)(b.Z,{onChange:l,type:"buy",children:"Buy Style"}),(0,a.jsx)(b.Z,{onChange:l,type:"sell",children:"Sell Style"}),(0,a.jsx)(b.Z,{onChange:l,type:"buy",disabled:!0,children:"Disabled"})]})};c.default=y},4281:function(p,c,e){e.r(c);var v=e(12065),x=e(82545),b=e(67294),r=e(85893),a=function(){return(0,r.jsxs)("div",{className:"flex items-center space-x-4 py-4",children:[(0,r.jsxs)(v.Z,{children:["Text"," ",(0,r.jsx)(x.h,{href:"https://www.bybit.com",opensWindow:!0,children:"Link"})]}),(0,r.jsxs)(v.Z,{children:["Text ",(0,r.jsx)(x.h,{onClick:function(h){return h.preventDefault()},children:"UnChecked"})]}),(0,r.jsxs)(v.Z,{children:["Text ",(0,r.jsx)(x.h,{children:"Checked"})]})]})};c.default=a},12065:function(p,c,e){e.d(c,{Z:function(){return F}});var v=e(5574),x=e.n(v),b=e(50132),r=e(67294),a=e(36493),y=e(42978),t=e(70696),h=e(68400),o=e.n(h),u=e(93985),k,l,S,d,E,C,f,z=(0,u.F4)(k||(k=o()([`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`]))),Z=(0,u.F4)(l||(l=o()([`
  from {
    border-color: transparent;
    background-color: transparent;
  }
  to {
    border-color: auto;
    background-color: auto;
  }
`]))),P=(0,u.F4)(S||(S=o()([`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.4);
  }
`]))),N=(0,u.F4)(d||(d=o()([`
  from {
    border-color: auto;
    background-color: auto;
  }
  to {
    border-color: transparent;
    background-color: transparent;
  }
`]))),V={molyCheckbox:(0,u.iv)(E||(E=o()([`
    display: flex;
    height: 22px;
    align-items: center;
    position: relative;

    input[type='checkbox'] {
      position: absolute;
      z-index: -1;
    }

    &-inner {
      position: relative;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: conter;
      &::before {
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    input[type='checkbox'] + span::before {
      box-sizing: border-box;
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid var(--bds-gray-t2);
      transform-origin: center center;
      animation: `,` 100ms ease-in-out;
    }
    input[type='checkbox']:hover + span::before,
    input[type='checkbox']:focus + span::before {
      border-color: var(--bds-brand-600-hover);
    }
    input[type='checkbox']:checked + span::before {
      border-color: var(--bds-brand-700-normal);
      background-color: var(--bds-brand-700-normal);
      animation: `,` 100ms ease-in-out;
    }

    input[type='checkbox']:hover:checked + span::before {
      border-color: var(--bds-brand-600-hover);
      background-color: var(--bds-brand-600-hover);
    }

    input[type='checkbox']:disabled + span::before,
    input[type='checkbox']:disabled:hover + span::before,
    input[type='checkbox']:disabled:checked + span::before {
      border-color: var(--bds-gray-ele-border);
      background-color: var(--bds-gray-ele-edge);
    }

    &.indeterminate {
      input[type='checkbox']:checked + span::before {
        background-color: initial;
        border-color: var(--bds-gray-ele-border);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-brand-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-buy {
      input[type='checkbox']:hover + span::before,
      input[type='checkbox']:focus + span::before {
        border-color: var(--bds-green-600-hover);
      }
      input[type='checkbox']:checked + span::before {
        border-color: var(--bds-green-700-normal);
        background-color: var(--bds-green-700-normal);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-green-600-hover);
        background-color: var(--bds-green-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-buy.indeterminate {
      input[type='checkbox']:checked + span::before {
        background-color: initial;
        border-color: var(--bds-gray-ele-border);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-green-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-sell {
      input[type='checkbox']:hover + span::before,
      input[type='checkbox']:focus + span::before {
        border-color: var(--bds-red-600-hover);
      }
      input[type='checkbox']:checked + span::before {
        border-color: var(--bds-red-700-normal);
        background-color: var(--bds-red-700-normal);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-red-600-hover);
        background-color: var(--bds-red-600-hover);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.color-sell.indeterminate {
      input[type='checkbox']:checked + span::before {
        background-color: initial;
        border-color: var(--bds-gray-ele-border);
      }
      input[type='checkbox']:hover:checked + span::before {
        border-color: var(--bds-red-700-normal);
      }
      input[type='checkbox']:disabled + span::before,
      input[type='checkbox']:disabled:hover + span::before,
      input[type='checkbox']:disabled:checked + span::before {
        border-color: var(--bds-gray-ele-border);
        background-color: var(--bds-gray-ele-edge);
      }
    }

    &.sm &-inner {
      width: 14px;
      height: 14px;
    }
    &.sm {
      height: 18px;

      input[type='checkbox'] + span::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
      }
    }
  `])),N,Z),fadeIn:(0,u.iv)(C||(C=o()([`
    transform-origin: center center;
    animation: `,` 100ms ease-in-out;
  `])),z),fadeOut:(0,u.iv)(f||(f=o()([`
    transform-origin: center center;
    animation: `,` 100ms ease-in-out;
    display: none;
  `])),P)},D=V,j=e(85893);function J(_){var U=_.className,w=_.size,M=w===void 0?"middle":w,K=_.type,W=K===void 0?"normal":K,A=_.checked,X=_.defaultChecked,$=X===void 0?!1:X,g=_.indeterminate,s=_.disabled,n=s===void 0?!1:s,m=_.onChange,i=m===void 0?function(){}:m,O=_.children,R=(0,r.useState)(),Y=x()(R,2),T=Y[0],H=Y[1];return(0,r.useEffect)(function(){H($)},[$]),(0,r.useEffect)(function(){T!==A&&H(A)},[A]),(0,j.jsxs)("label",{className:(0,a.cn)("flex gap-[8px] items-start transition-all",n?"cursor-not-allowed":"cursor-pointer",U),children:[(0,j.jsxs)("span",{className:"flex justify-center items-center relative",children:[(0,j.jsx)(y.Z,{component:"Checkbox",children:typeof A!="undefined"?(0,j.jsx)(b.Z,{prefixCls:D.molyCheckbox,className:(0,a.cn)("outline-none ring-btn-default focus-visible:ring-[5px]",M==="small"?"sm":"","color-".concat(W),g?"indeterminate":""),checked:A,disabled:n,onChange:function(L){H(A),i==null||i(L.nativeEvent,A)}}):(0,j.jsx)(b.Z,{prefixCls:D.molyCheckbox,className:(0,a.cn)("outline-none ring-btn-default focus-visible:ring-[5px]",M==="small"?"sm":"","color-".concat(W),g?"indeterminate":"",U),defaultChecked:$,disabled:n,onChange:function(L){var ee,q;H(L==null||(ee=L.target)===null||ee===void 0?void 0:ee.checked),i==null||i(L.nativeEvent,L==null||(q=L.target)===null||q===void 0?void 0:q.checked)}})}),g?(0,j.jsx)("div",{className:(0,a.cn)("absolute","bg-brandColor-bds-brand-700-normal",T?D.fadeIn:D.fadeOut,M==="small"?"w-[7px] h-[7px] ":"w-[8px] h-[8px] ",W==="buy"?"bg-greenColor-bds-green-700-normal":"",W==="sell"?"bg-redColor-bds-red-700-normal":"",n?"bg-base-bds-gray-t4-dis":"")}):(0,j.jsx)(t.CheckIcon,{className:(0,a.cn)("text-center absolute","text-base-bds-static-black",T?D.fadeIn:D.fadeOut,M==="small"?"w-[14px] text-[7px] font-[500]":"w-[16px] text-[8px] font-[700]",W!=="normal"?"text-base-bds-gray-t1-title-revert":"",n?"bg-base-bds-gray-t4-dis":"")})]}),(0,j.jsx)("span",{className:(0,a.cn)("font-IBM font-normal text-base-bds-gray-t1-title",M==="small"?"text-[12px] leading-[18px]":"text-[14px] leading-[22px]",W==="buy"?"".concat(T?"text-greenColor-bds-green-700-normal":"hover:text-greenColor-bds-green-700-normal"):"",W==="sell"?"".concat(T?"text-redColor-bds-red-700-normal":"hover:text-redColor-bds-red-700-normal"):"",n?"hover:text-base-bds-gray-t3 text-base-bds-gray-t3":""),children:O})]})}var F=J},82545:function(p,c,e){e.d(c,{h:function(){return E}});var v=e(97857),x=e.n(v),b=e(5574),r=e.n(b),a=e(13769),y=e.n(a),t=e(22641),h=e(36493),o=e(67294),u=e(70696),k=e(19492),l=(0,k.j)(["no-wrap font-medium transition-all","inline-flex items-center","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs gap-[2px]"],normal:["text-sm gap-[2px]"],large:["text-base gap-[4px]"],xlarge:["text-lg gap-[6px]"]},variant:{primary:[],secondary:[],tertiary:[]}},compoundVariants:[{variant:"primary",className:["text-brandColor-bds-brand-900-text hover:text-brandColor-bds-brand-600-hover cursor-pointer"]},{variant:"secondary",className:["text-base-bds-black-t2 hover:text-base-bds-gray-t2 cursor-pointer"]},{variant:"tertiary",className:["text-base-bds-gray-t2 hover:text-base-bds-gray-t3 cursor-pointer"]}],defaultVariants:{variant:"primary",size:"normal"}}),S=e(85893),d=["className","color","variant","size","href","children","disabled","closeIcon","opensWindow","style","onClick"],E=(0,o.forwardRef)(function(f,z){var Z=f.className,P=f.color,N=f.variant,V=f.size,D=f.href,j=f.children,J=f.disabled,F=f.closeIcon,_=F===void 0?!1:F,U=f.opensWindow,w=U===void 0?!1:U,M=f.style,K=f.onClick,W=y()(f,d),A=(0,o.useState)(!1),X=r()(A,2),$=X[0],g=X[1],s=(0,t.S)(),n=(0,o.useMemo)(function(){return P?(0,h.K_)(P)?{color:$?(0,h.ey)(P,.6):P}:{}:{}},[$]),m=function(O){J||(D?w?window.open(D):window.location.href=D:K==null||K(O))};return(0,S.jsxs)("div",x()(x()({className:(0,h.cn)(Z,l({variant:N,size:V})),ref:z,"data-disabled":f.disabled?"":void 0,style:x()(x()({},M),n)},W),{},{onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return g(!1)},onClick:m,children:[j,!_&&(s?(0,S.jsx)(u.DirectionleftIcon,{}):(0,S.jsx)(u.DirectionrightIcon,{}))]}))})},22641:function(p,c,e){e.d(c,{S:function(){return h}});var v=e(5574),x=e.n(v),b=e(67294),r=!1,a=!1,y=new Set,t=function(u){r=u,y.forEach(function(k){return k()})},h=function(){var u=(0,b.useState)(r),k=x()(u,2),l=k[0],S=k[1];return(0,b.useEffect)(function(){var d=function(){S(r)};return y.add(d),function(){y.delete(d)}},[]),(0,b.useEffect)(function(){if(!a){a=!0,t(document.documentElement.dir==="rtl");var d=new MutationObserver(function(){t(document.documentElement.dir==="rtl")});d.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}},[]),l}},36493:function(p,c,e){e.d(c,{KX:function(){return y},K_:function(){return r},cn:function(){return b},ey:function(){return a}});var v=e(86010),x=e(57851);function b(){for(var t=arguments.length,h=new Array(t),o=0;o<t;o++)h[o]=arguments[o];return(0,x.m)((0,v.W)(h))}function r(t){return t?/^#[0-9A-F]{6}$/i.test(t):!1}function a(t,h){if(!r(t))return t;var o=Math.round(h*255);return"".concat(t).concat(o.toString(16).toUpperCase())}function y(t,h){var o=t.findIndex(function(u){return u!=null});return o===-1?h:t[o]}},42978:function(p,c,e){e.d(c,{Z:function(){return g}});var v=e(36493),x=e(55331),b=e(75531),r=e(67294),a=r.isValidElement;function y(s){return s&&a(s)&&s.type===React.Fragment}function t(s,n,m){return a(s)?r.cloneElement(s,typeof m=="function"?m(s.props||{}):m):n}function h(s,n){return t(s,s,n)}var o=e(38024),u=e(64543),k=e(97857),l=e.n(k),S=e(5574),d=e.n(S),E=e(68400),C=e.n(E),f=e(93985),z,Z="moly-wave-motion",P="cubic-bezier(0.08, 0.82, 0.17, 1)",N="cubic-bezier(0.645, 0.045, 0.355, 1)",V=(0,f.hi)(z||(z=C()([`
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
`])),Z,P,P,N,N),D=e(82225),j=e(24996),J="moly-wave-target";function F(s){var n=(s||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return n&&n[1]&&n[2]&&n[3]?!(n[1]===n[2]&&n[2]===n[3]):!0}function _(s){return s&&s!=="#fff"&&s!=="#ffffff"&&s!=="rgb(255, 255, 255)"&&s!=="rgba(255, 255, 255, 1)"&&F(s)&&!/rgba\((?:\d*, ){3}0\)/.test(s)&&s!=="transparent"}function U(s){var n=getComputedStyle(s),m=n.borderTopColor,i=n.borderColor,O=n.backgroundColor;return _(m)?m:_(i)?i:_(O)?O:""}function w(s){return Number.isNaN(s)?0:s}var M=e(85893),K=function(n){var m=n.className,i=n.target,O=n.component,R=r.useRef(null),Y=r.useState([]),T=d()(Y,2),H=T[0],B=T[1],L=r.useState(0),ee=d()(L,2),q=ee[0],he=ee[1],me=r.useState(0),se=d()(me,2),pe=se[0],xe=se[1],ye=r.useState(0),de=d()(ye,2),ge=de[0],Ce=de[1],Ee=r.useState(0),le=d()(Ee,2),ke=le[0],_e=le[1],Re=r.useState(!1),ie=d()(Re,2),je=ie[0],Oe=ie[1],ae={left:q,top:pe,width:ge,height:ke,borderRadius:H.map(function(I){return"".concat(I,"px")}).join(" ")};i.classList.contains("ring-btn-green")?ae["--wave-color"]="var(--bds-green-100-bg)":i.classList.contains("ring-btn-red")?ae["--wave-color"]="var(--bds-red-100-bg)":ae["--wave-color"]="var(--bds-brand-100-bg)";function ce(){var I=getComputedStyle(i),Q=I.position==="static",G=I.borderLeftWidth,te=I.borderTopWidth;he(Q?i.offsetLeft:w(-parseFloat(G))),xe(Q?i.offsetTop:w(-parseFloat(te))),Ce(i.offsetWidth),_e(i.offsetHeight);var ne=I.borderTopLeftRadius,Se=I.borderTopRightRadius,Pe=I.borderBottomLeftRadius,De=I.borderBottomRightRadius;B([ne,Se,De,Pe].map(function(Me){return w(parseFloat(Me))}))}if(r.useEffect(function(){if(i){var I=(0,u.Z)(function(){ce(),Oe(!0)}),Q;return typeof ResizeObserver!="undefined"&&(Q=new ResizeObserver(ce),Q.observe(i)),function(){var G;u.Z.cancel(I),(G=Q)===null||G===void 0||G.disconnect()}}},[]),!je)return null;var Te=(O==="Checkbox"||O==="Radio")&&(i==null?void 0:i.classList.contains(J));return(0,M.jsx)(D.ZP,{visible:!0,motionAppear:!0,motionName:Z,motionDeadline:500,onAppearEnd:function(Q,G){if(G.deadline||G.propertyName==="opacity"){var te,ne=(te=R.current)===null||te===void 0?void 0:te.parentElement;ne&&(0,j.vE)(ne).then(function(){ne==null||ne.remove()})}return!1},children:function(Q){var G=Q.className;return(0,M.jsx)("div",{ref:R,className:(0,v.cn)(m,{"wave-quick":Te},G),style:ae})}})},W=function(n,m){var i,O=m.component;if(!(O==="Checkbox"&&!((i=n.querySelector("input"))!==null&&i!==void 0&&i.checked))){var R=document.createElement("div");R.style.position="absolute",R.style.left="0px",R.style.top="0px",n==null||n.insertBefore(R,n==null?void 0:n.firstChild),(0,j.sY)((0,M.jsx)(K,l()(l()({},m),{},{target:n})),R)}},A=W;function X(s,n,m){var i=(0,o.zX)(function(Y){var T=s.current;if(T){var H=T.querySelector(".".concat(J))||T;A(H,{className:n,component:m,event:Y})}}),O=r.useRef(),R=function(T){u.Z.cancel(O.current),O.current=(0,u.Z)(function(){i(T)})};return R}var $=function(n){var m=n.children,i=n.disabled,O=n.component,R=(0,r.useRef)(null),Y="moly-wave",T=X(R,(0,v.cn)(Y),O);if(r.useEffect(function(){var B=R.current;if(!(!B||B.nodeType!==1||i)){var L=function(q){!(0,x.Z)(q.target)||!B.getAttribute||B.getAttribute("disabled")||B.disabled||B.className.includes("-leave")||T(q)};return B.addEventListener("click",L,!0),function(){B.removeEventListener("click",L,!0)}}},[i]),!r.isValidElement(m))return m!=null?m:null;var H=(0,b.Yr)(m)?(0,b.sQ)(m.ref,R):R;return h(m,{ref:H})},g=$},50132:function(p,c,e){var v=e(87462),x=e(1413),b=e(4942),r=e(97685),a=e(91),y=e(94184),t=e.n(y),h=e(21770),o=e(67294),u=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],k=(0,o.forwardRef)(function(l,S){var d,E=l.prefixCls,C=E===void 0?"rc-checkbox":E,f=l.className,z=l.style,Z=l.checked,P=l.disabled,N=l.defaultChecked,V=N===void 0?!1:N,D=l.type,j=D===void 0?"checkbox":D,J=l.title,F=l.onChange,_=(0,a.Z)(l,u),U=(0,o.useRef)(null),w=(0,h.Z)(V,{value:Z}),M=(0,r.Z)(w,2),K=M[0],W=M[1];(0,o.useImperativeHandle)(S,function(){return{focus:function(){var g;(g=U.current)===null||g===void 0||g.focus()},blur:function(){var g;(g=U.current)===null||g===void 0||g.blur()},input:U.current}});var A=t()(C,f,(d={},(0,b.Z)(d,"".concat(C,"-checked"),K),(0,b.Z)(d,"".concat(C,"-disabled"),P),d)),X=function(g){P||("checked"in l||W(g.target.checked),F==null||F({target:(0,x.Z)((0,x.Z)({},l),{},{type:j,checked:g.target.checked}),stopPropagation:function(){g.stopPropagation()},preventDefault:function(){g.preventDefault()},nativeEvent:g.nativeEvent}))};return o.createElement("span",{className:A,title:J,style:z},o.createElement("input",(0,v.Z)({},_,{className:"".concat(C,"-input"),ref:U,onChange:X,disabled:P,checked:!!K,type:j})),o.createElement("span",{className:"".concat(C,"-inner")}))});c.Z=k},19492:function(p,c,e){e.d(c,{j:function(){return r}});var v=e(86010);const x=a=>typeof a=="boolean"?"".concat(a):a===0?"0":a,b=v.Z,r=(a,y)=>t=>{var h;if((y==null?void 0:y.variants)==null)return b(a,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:u}=y,k=Object.keys(o).map(d=>{const E=t==null?void 0:t[d],C=u==null?void 0:u[d];if(E===null)return null;const f=x(E)||x(C);return o[d][f]}),l=t&&Object.entries(t).reduce((d,E)=>{let[C,f]=E;return f===void 0||(d[C]=f),d},{}),S=y==null||(h=y.compoundVariants)===null||h===void 0?void 0:h.reduce((d,E)=>{let Z=E,{class:C,className:f}=Z,z=fe(Z,["class","className"]);return Object.entries(z).every(P=>{let[N,V]=P;return Array.isArray(V)?V.includes(re(re({},u),l)[N]):re(re({},u),l)[N]===V})?[...d,C,f]:d},[]);return b(a,k,S,t==null?void 0:t.class,t==null?void 0:t.className)}}}]);
}());