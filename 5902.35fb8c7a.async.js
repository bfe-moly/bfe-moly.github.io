"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[5902],{55902:function(_,W,e){e.d(W,{Z:function(){return X}});var L=e(9783),z=e.n(L),y=e(5574),o=e.n(y),S=e(22641),x=e(36493),i=e(42978),f=e(30150),s=e(67294),g=e(68400),p=e.n(g),R=e(93985),O,v,B,Z,F,U=(0,R.iv)(O||(O=p()([`
  --gray-tt-1: #121214;
  --gray-tt-3: #adb1b8;
  --gray-line-01: #f3f5f7;
  --gray-line-02: #81858c;
  --gray-border-01: #e9edf2;
  --gray-border-02: #d5dae0;
  --brand-color-01: #f7a600;
  --bg-color-01: white;
`]))),K=(0,R.iv)(v||(v=p()([`
  --gray-tt-1: #ffffff;
  --gray-tt-3: #71757a;
  --gray-line-01: #25282c;
  --gray-line-02: #81858c;
  --gray-border-01: #404347;
  --gray-border-02: #595d61;
  --brand-color-01: #f7a600;
  --bg-color-01: transparent;
`]))),G={small:(0,R.iv)(B||(B=p()([`
    --item-size: 14px;
    --indicator-size: 7px;
    --item-margin-top: 2px;
    --title-size: 12px;
    --title-line-height: 18px;
  `]))),medium:(0,R.iv)(Z||(Z=p()([`
    --item-size: 16px;
    --indicator-size: 8px;
    --item-margin-top: 2px;
    --title-size: 14px;
    --title-line-height: 22px;
  `])))},H=(0,R.iv)(F||(F=p()([`
  /* reset */
  button {
    all: unset;
  }

  .radio-group-root {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .radio-group-root.horizontal {
    flex-direction: row;
  }
  .radio-group-root.horizontal-reverse {
    flex-direction: row-reverse;
  }
  .radio-group-root.vertical {
    flex-direction: column;
  }
  .radio-group-root.vertical-reverse {
    flex-direction: column-reverse;
  }
  .radio-group-item__wrap {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .radio-group-item__wrap.disabled,
  .radio-group-item__wrap.disabled label {
    cursor: not-allowed;
  }

  .radio-group-item {
    background-color: var(--bg-color-01);
    width: var(--item-size);
    height: var(--item-size);
    flex: 0 0 var(--item-size);
    border-radius: 100%;
    border: 1px solid var(--gray-line-02);
    align-self: flex-start;
    margin-top: var(--item-margin-top);
  }
  .radio-group-item[aria-checked='true'] {
    border: 1px solid var(--brand-color-01);
  }
  .radio-group-item:focus {
    border: 1px solid var(--brand-color-01);
  }

  .radio-group-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .radio-group-indicator::after {
    content: '';
    display: block;
    width: var(--indicator-size);
    height: var(--indicator-size);
    border-radius: 50%;
    background-color: var(--brand-color-01);
  }

  .radio-group-root .radio-group-item__label {
    color: var(--gray-tt-1);
    padding-left: 8px;
    font-family: IBM Plex Sans;
    font-size: var(--title-size);
    font-style: normal;
    font-weight: 400;
    line-height: var(--title-line-height);
    cursor: pointer;
  }
  // hover
  .radio-group-item__wrap:not(.disabled):hover .radio-group-item {
    border-color: var(--brand-color-01);
  }
  .radio-group-item__wrap.disabled .radio-group-item__label {
    color: var(--gray-tt-3);
  }
  .radio-group-item__wrap.disabled .radio-group-item {
    border: 1px solid var(--gray-line-01);
    background-color: var(--gray-border-01);
  }
  .radio-group-item__wrap.disabled .radio-group-indicator::after {
    background-color: var(--gray-border-02);
  }
`]))),j=e(85893),q=function(D){var m=D!=null?D:{},oe=m.className,$=m.defaultValue,P=m.disabledAll,Y=P===void 0?!1:P,k=m.theme,te=k===void 0?"light":k,Q=m.size,ne=Q===void 0?"small":Q,M=m.value,n=m.radioName,t=m.items,a=t===void 0?[]:t,r=m.handleRadioChange,u=m.orientation,d=(0,s.useState)($||M),C=o()(d,2),c=C[0],N=C[1],h=(0,S.S)(),I=(0,s.useCallback)(function(l){if(l!==c&&(N(l),typeof r=="function")){var A=a.find(function(re){var ae=re.value;return ae===l});A&&r(l,A)}},[c]);return(0,s.useEffect)(function(){N(M)},[M]),a.length?(0,j.jsx)("div",{className:(0,x.cn)(H,oe,G[ne],te==="dark"?K:U),children:(0,j.jsx)(f.fC,{className:(0,x.cn)("radio-group-root",z()({},u,!!u)),defaultValue:$,value:c,"aria-label":n,dir:h?"rtl":"ltr",name:n,onValueChange:I,children:a.map(function(l){return(0,j.jsxs)("div",{"data-checked":c===l.value,className:(0,x.cn)("radio-group-item__wrap",{disabled:Y||l.disabled}),children:[(0,j.jsx)(i.Z,{component:"Radio",children:(0,j.jsx)(f.ck,{className:"radio-group-item",value:l.value,id:"".concat(n||"").concat(l.key),disabled:Y||l.disabled,children:(0,j.jsx)(f.z$,{className:"radio-group-indicator"})})}),(0,j.jsx)("label",{className:"radio-group-item__label",htmlFor:"".concat(n||"").concat(l.key),children:l==null?void 0:l.childrenNode})]},l.key)})})}):null},X=q},22641:function(_,W,e){e.d(W,{S:function(){return f}});var L=e(5574),z=e.n(L),y=e(67294),o=!1,S=!1,x=new Set,i=function(g){o=g,x.forEach(function(p){return p()})},f=function(){var g=(0,y.useState)(o),p=z()(g,2),R=p[0],O=p[1];return(0,y.useEffect)(function(){var v=function(){O(o)};return x.add(v),function(){x.delete(v)}},[]),(0,y.useEffect)(function(){if(!S){S=!0,i(document.documentElement.dir==="rtl");var v=new MutationObserver(function(){i(document.documentElement.dir==="rtl")});v.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}},[]),R}},36493:function(_,W,e){e.d(W,{KX:function(){return x},K_:function(){return o},cn:function(){return y},ey:function(){return S}});var L=e(86010),z=e(57851);function y(){for(var i=arguments.length,f=new Array(i),s=0;s<i;s++)f[s]=arguments[s];return(0,z.m)((0,L.W)(f))}function o(i){return i?/^#[0-9A-F]{6}$/i.test(i):!1}function S(i,f){if(!o(i))return i;var s=Math.round(f*255);return"".concat(i).concat(s.toString(16).toUpperCase())}function x(i,f){var s=i.findIndex(function(g){return g!=null});return s===-1?f:i[s]}},42978:function(_,W,e){e.d(W,{Z:function(){return M}});var L=e(36493),z=e(55331),y=e(75531),o=e(67294),S=o.isValidElement;function x(n){return n&&S(n)&&n.type===React.Fragment}function i(n,t,a){return S(n)?o.cloneElement(n,typeof a=="function"?a(n.props||{}):a):t}function f(n,t){return i(n,n,t)}var s=e(38024),g=e(64543),p=e(97857),R=e.n(p),O=e(5574),v=e.n(O),B=e(68400),Z=e.n(B),F=e(93985),U,K="moly-wave-motion",G="cubic-bezier(0.08, 0.82, 0.17, 1)",H="cubic-bezier(0.645, 0.045, 0.355, 1)",j=(0,F.hi)(U||(U=Z()([`
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
`])),K,G,G,H,H),q=e(82225),X=e(24996),ee="moly-wave-target";function D(n){var t=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function m(n){return n&&n!=="#fff"&&n!=="#ffffff"&&n!=="rgb(255, 255, 255)"&&n!=="rgba(255, 255, 255, 1)"&&D(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&n!=="transparent"}function oe(n){var t=getComputedStyle(n),a=t.borderTopColor,r=t.borderColor,u=t.backgroundColor;return m(a)?a:m(r)?r:m(u)?u:""}function $(n){return Number.isNaN(n)?0:n}var P=e(85893),Y=function(t){var a=t.className,r=t.target,u=t.component,d=o.useRef(null),C=o.useState([]),c=v()(C,2),N=c[0],h=c[1],I=o.useState(0),l=v()(I,2),A=l[0],re=l[1],ae=o.useState(0),ie=v()(ae,2),ce=ie[0],fe=ie[1],ve=o.useState(0),le=v()(ve,2),me=le[0],ge=le[1],be=o.useState(0),se=v()(be,2),pe=se[0],he=se[1],ye=o.useState(!1),de=v()(ye,2),xe=de[0],Re=de[1],J={left:A,top:ce,width:me,height:pe,borderRadius:N.map(function(b){return"".concat(b,"px")}).join(" ")};r.classList.contains("ring-btn-green")?J["--wave-color"]="var(--bds-green-100-bg)":r.classList.contains("ring-btn-red")?J["--wave-color"]="var(--bds-red-100-bg)":J["--wave-color"]="var(--bds-brand-100-bg)";function ue(){var b=getComputedStyle(r),T=b.position==="static",E=b.borderLeftWidth,V=b.borderTopWidth;re(T?r.offsetLeft:$(-parseFloat(E))),fe(T?r.offsetTop:$(-parseFloat(V))),ge(r.offsetWidth),he(r.offsetHeight);var w=b.borderTopLeftRadius,Se=b.borderTopRightRadius,Ce=b.borderBottomLeftRadius,Te=b.borderBottomRightRadius;h([w,Se,Te,Ce].map(function(Le){return $(parseFloat(Le))}))}if(o.useEffect(function(){if(r){var b=(0,g.Z)(function(){ue(),Re(!0)}),T;return typeof ResizeObserver!="undefined"&&(T=new ResizeObserver(ue),T.observe(r)),function(){var E;g.Z.cancel(b),(E=T)===null||E===void 0||E.disconnect()}}},[]),!xe)return null;var Ee=(u==="Checkbox"||u==="Radio")&&(r==null?void 0:r.classList.contains(ee));return(0,P.jsx)(q.ZP,{visible:!0,motionAppear:!0,motionName:K,motionDeadline:500,onAppearEnd:function(T,E){if(E.deadline||E.propertyName==="opacity"){var V,w=(V=d.current)===null||V===void 0?void 0:V.parentElement;w&&(0,X.vE)(w).then(function(){w==null||w.remove()})}return!1},children:function(T){var E=T.className;return(0,P.jsx)("div",{ref:d,className:(0,L.cn)(a,{"wave-quick":Ee},E),style:J})}})},k=function(t,a){var r,u=a.component;if(!(u==="Checkbox"&&!((r=t.querySelector("input"))!==null&&r!==void 0&&r.checked))){var d=document.createElement("div");d.style.position="absolute",d.style.left="0px",d.style.top="0px",t==null||t.insertBefore(d,t==null?void 0:t.firstChild),(0,X.sY)((0,P.jsx)(Y,R()(R()({},a),{},{target:t})),d)}},te=k;function Q(n,t,a){var r=(0,s.zX)(function(C){var c=n.current;if(c){var N=c.querySelector(".".concat(ee))||c;te(N,{className:t,component:a,event:C})}}),u=o.useRef(),d=function(c){g.Z.cancel(u.current),u.current=(0,g.Z)(function(){r(c)})};return d}var ne=function(t){var a=t.children,r=t.disabled,u=t.component,d=(0,o.useRef)(null),C="moly-wave",c=Q(d,(0,L.cn)(C),u);if(o.useEffect(function(){var h=d.current;if(!(!h||h.nodeType!==1||r)){var I=function(A){!(0,z.Z)(A.target)||!h.getAttribute||h.getAttribute("disabled")||h.disabled||h.className.includes("-leave")||c(A)};return h.addEventListener("click",I,!0),function(){h.removeEventListener("click",I,!0)}}},[r]),!o.isValidElement(a))return a!=null?a:null;var N=(0,y.Yr)(a)?(0,y.sQ)(a.ref,d):d;return f(a,{ref:N})},M=ne}}]);
