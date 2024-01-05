"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[7866],{3731:function(A,l,n){n.r(l);var m=n(5574),f=n.n(m),s=n(81376),c=n(67294),t=n(85893),g=s.Z.Group,e=[{title:"Option1",desc:"A short description to help the user make a choice",disabled:!1},{title:"Option2",desc:"A short description to help the user make a choice",disabled:!1},{title:"Option3",desc:"A short description to help the user make a choice",disabled:!0}],a=function(){var u=(0,c.useState)("0"),d=f()(u,2),_=d[0],S=d[1],E=function(b){S(b)};return(0,t.jsx)("div",{className:"w-[400px]",children:(0,t.jsx)(g,{value:_,onChange:E,children:e.map(function(v,b){return(0,t.jsx)(s.Z,{value:"".concat(b),className:"mt-[10px]",disabled:v.disabled,children:(0,t.jsxs)("div",{className:"px-[20px] py-[16px]",children:[(0,t.jsx)("div",{className:"text-[16px] leading-[24px] font-[600] text-base-bds-gray-t1-title",children:v.title}),(0,t.jsx)("div",{className:"text-[14px] leading-[22px] font-[400] text-base-bds-gray-t2",children:v.desc})]})},b)})})})};l.default=a},81376:function(A,l,n){n.d(l,{Z:function(){return v}});var m=n(5574),f=n.n(m),s=n(36493),c=n(70696),t=n(67294),g=n(68400),e=n.n(g),a=n(93985),r,u=(0,a.iv)(r||(r=e()([`
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
`]))),d=n(85893),_=function(o){var B=o.children,p=o.isSelected,j=o.className,x=o.disabled,i=o.onChange,C=function(){x||i==null||i()};return(0,d.jsxs)("div",{onClick:C,className:(0,s.cn)(j,u,"card","".concat(p?"isSelectedCard":""),"".concat(p?"":"isNotSelectedCard"),"".concat(x?"isDisabledCard":"")),children:[B,(0,d.jsxs)("div",{className:"tag",children:[(0,d.jsx)("div",{className:"tagBg"}),(0,d.jsx)(c.CheckIcon,{className:"icon"})]})]})},S=function(o){var B=o.children,p=o.defaultValue,j=p===void 0?"":p,x=o.value,i=x===void 0?"":x,C=o.onChange,O=(0,t.useState)(j),D=f()(O,2),M=D[0],P=D[1],N=function(y){i||P(y),C&&C(y===M?"":y)};return(0,t.useLayoutEffect)(function(){P(i)},[i]),(0,d.jsx)("div",{children:t.Children.map(B,function(h){return t.isValidElement(h)?t.cloneElement(h,{isSelected:h.props.value===M,onChange:function(){return N(h.props.value)}}):h})})};_.Group=S;var E=_,v=E},36493:function(A,l,n){n.d(l,{KX:function(){return g},K_:function(){return c},cn:function(){return s},ey:function(){return t}});var m=n(86010),f=n(57851);function s(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,f.m)((0,m.W)(a))}function c(e){return e?/^#[0-9A-F]{6}$/i.test(e):!1}function t(e,a){if(!c(e))return e;var r=Math.round(a*255);return"".concat(e).concat(r.toString(16).toUpperCase())}function g(e,a){var r=e.findIndex(function(u){return u!=null});return r===-1?a:e[r]}}}]);
