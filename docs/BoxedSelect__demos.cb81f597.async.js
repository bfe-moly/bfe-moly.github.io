"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[7866],{72155:function(D,b,n){n.r(b),n.d(b,{default:function(){return P}});var x=n(5574),g=n.n(x),C=n(36493),f=n(70696),d=n(67294),S=n(68400),e=n.n(S),l=n(93985),t,p=(0,l.iv)(t||(t=e()([`
  &.card {
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    position: relative;
    border-color: var(--bds-gray-ele-line);
    cursor: pointer;
    overflow: hidden;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  &.isSelectedCard {
    border-color: var(--bds-brand-700-normal);
  }

  &.isSelectedCard .tag {
    opacity: 1;
  }

  &.isSelectedCard:hover {
    border-color: var(--bds-brand-600-hover);
  }

  &.isSelectedCard:hover .tagBg {
    border-color: transparent var(--bds-brand-600-hover)
      var(--bds-brand-600-hover) transparent;
  }

  &.isNotSelectedCard:hover {
    background-color: var(--bds-badge-type-secondary-bg-color);
  }

  &.isDisabledCard {
    background-color: var(--bds-gray-ele-edge);
  }

  &.isDisabledCard:hover {
    cursor: not-allowed;
    background-color: var(--bds-gray-ele-edge);
  }

  .tag {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .tagBg {
    width: 0;
    height: 0;
    border: 16px solid;
    border-color: transparent var(--bds-brand-700-normal)
      var(--bds-brand-700-normal) transparent;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .icon {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 2px;
    bottom: 0;
    color: var(--bds-static-black);
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    .tag {
      left: 0;
      right: auto;
    }
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    .tagBg {
      border-color: transparent transparent var(--bds-brand-700-normal)
        var(--bds-brand-700-normal);
    }
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    &.isSelectedCard:hover .tagBg {
      border-color: transparent transparent var(--bds-brand-600-hover)
        var(--bds-brand-600-hover);
    }
  }

  [direction='rtl'] &,
  [dir='rtl'] &,
  [data-direction='rtl'] & {
    .icon {
      left: 2px;
      right: auto;
    }
  }
`]))),o=n(85893),y=function(r){var u=r.children,s=r.isSelected,h=r.className,c=r.disabled,a=r.onChange,i=function(){c||a==null||a()};return(0,o.jsxs)("div",{onClick:i,className:(0,C.cn)(h,p,"card","".concat(s?"isSelectedCard":""),"".concat(s?"":"isNotSelectedCard"),"".concat(c?"isDisabledCard":"")),children:[u,(0,o.jsxs)("div",{className:"tag",children:[(0,o.jsx)("div",{className:"tagBg"}),(0,o.jsx)(f.CheckIcon,{className:"icon"})]})]})},T=function(r){var u=r.children,s=r.defaultValue,h=s===void 0?"":s,c=r.value,a=c===void 0?"":c,i=r.onChange,N=(0,d.useState)(h),A=g()(N,2),E=A[0],O=A[1],I=function(m){a||O(m),i&&i(m===E?"":m)};return(0,d.useLayoutEffect)(function(){O(a)},[a]),(0,o.jsx)("div",{children:d.Children.map(u,function(v){return d.isValidElement(v)?d.cloneElement(v,{isSelected:v.props.value===E,onChange:function(){return I(v.props.value)}}):v})})};y.Group=T;var V=y,B=V,G=B.Group,L=[{title:"Option1",desc:"A short description to help the user make a choice",disabled:!1},{title:"Option2",desc:"A short description to help the user make a choice",disabled:!1},{title:"Option3",desc:"A short description to help the user make a choice",disabled:!0}],M=function(){var r=(0,d.useState)("0"),u=g()(r,2),s=u[0],h=u[1],c=function(i){h(i)};return(0,o.jsx)("div",{className:"w-[400px]",children:(0,o.jsx)(G,{value:s,onChange:c,children:L.map(function(a,i){return(0,o.jsx)(B,{value:"".concat(i),className:"mt-[10px]",disabled:a.disabled,children:(0,o.jsxs)("div",{className:"px-[20px] py-[16px]",children:[(0,o.jsx)("div",{className:"text-[16px] leading-[24px] font-[600] text-base-bds-gray-t1-title",children:a.title}),(0,o.jsx)("div",{className:"text-[14px] leading-[22px] font-[400] text-base-bds-gray-t2",children:a.desc})]})},i)})})})},P=M},36493:function(D,b,n){n.d(b,{KX:function(){return S},K_:function(){return f},cn:function(){return C},ey:function(){return d}});var x=n(86010),g=n(57851);function C(){for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return(0,g.m)((0,x.W)(l))}function f(e){return e?/^#[0-9A-F]{6}$/i.test(e):!1}function d(e,l){if(!f(e))return e;var t=Math.round(l*255);return"".concat(e).concat(t.toString(16).toUpperCase())}function S(e,l){var t=e.findIndex(function(p){return p!=null});return t===-1?l:e[t]}}}]);
