"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[5585],{88133:function(M,N,a){var z=a(5193);N.Z=z.h},65585:function(M,N,a){a.d(N,{Z:function(){return W}});var z=a(97857),x=a.n(z),Z=a(5574),G=a.n(Z),B=a(9783),u=a.n(B),C=a(22641),b=a(36493),y=a(7935),f=a(88133),r=a(70696),O=a(55891),P=a(67294),E=a(68400),D=a.n(E),$=a(93985),A,j=(0,$.iv)(A||(A=D()([`
  .moly-iconbutton {
    margin: 0 6px;
  }
  .moly-pagination-item-container {
    position: relative;
    height: 100%;

    .quick-jump {
      height: 100%;
      opacity: 0;
      font-size: 16px;
      color: var(--bds-gray-t2);
      transition: all 0.3s;
    }

    &:hover {
      .quick-jump {
        opacity: 1;
      }
      .moly-pagination-item-ellipsis {
        opacity: 0;
      }
    }
  }

  .moly-pagination-item-link-icon {
    opacity: 0;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    line-height: 32px;
    color: var(--bds-gray-t2);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .moly-pagination-item-ellipsis {
    font-size: 12px;
    transition: all 0.3s;
    opacity: 1;
    color: var(--bds-gray-t2);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  &.moly-pagination-align-center {
    text-align: center;
  }

  &.moly-pagination-align-right {
    text-align: right;
  }

  .moly-pagination-total-text {
    font-size: 12px;
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    line-height: 32px;
    vertical-align: middle;
  }

  &.moly-pagination-simple {
    display: flex;
    align-items: center;
  }

  &.moly-pagination-simple .moly-pagination-prev,
  &.moly-pagination-simple .moly-pagination-next {
    height: 24px;
    line-height: 24px;
    vertical-align: top;
    display: flex;
    .moly-pagination-item-link {
      background-color: transparent;
      color: var(--bds-gray-t1-title);
      border: 0;
      &::after {
        height: 24px;
        line-height: 24px;
      }
    }
  }

  &.moly-pagination-simple .moly-pagination-simple-pager {
    display: inline-block;
    height: 24px;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--bds-gray-t1-title);
  }

  .moly-pagination-simple-pager input {
    box-sizing: border-box;
    height: 100%;
    background: var(--bds-gray-ele-line);
    border: 1px solid transparent;
    margin-right: 8px;
    padding: 0 6px;
    text-align: center;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      border-color: var(--bds-brand-800-pressed);
    }

    &:focus {
      box-shadow: 0px 0px 0px 5px rgba(247, 166, 0, 0.12);
      border-color: var(--bds-brand-800-pressed);
    }
  }

  .moly-pagination-stairs button {
    min-width: 64px;
    border-radius: 4px;

    &:first-child {
      margin-right: 8px;
    }
  }

  &.moly-pagination-rtl {
    direction: rtl;

    &.moly-pagination-align-right {
      text-align: left;
    }

    &.moly-pagination-align-left {
      text-align: right;
    }

    .moly-pagination-prev {
      margin-right: 0;
    }

    .moly-pagination-next {
      margin-right: 8px;
    }

    .moly-pagination-total-text {
      margin-left: 8px;
    }

    &.moly-pagination-mini {
      .moly-pagination {
        &-next {
          margin-right: 4px;
        }
      }
    }
    .moly-pagination-simple-pager input {
      margin-left: 8px;
      margin-right: initial;
    }
    .moly-pagination-slash {
      margin: 0 5px 0 10px;
    }

    .moly-pagination-options {
      margin-right: 16px;
      margin-left: 0;
    }

    &.moly-pagination-mini .moly-pagination-options {
      margin-right: 12px;
      margin-left: 0;
    }

    .moly-pagination-simple-pager {
      margin-right: 0;
    }
  }

  .moly-pagination {
    margin: 0;
    padding: 0;
    font-size: 12px;

    &::after {
      display: block;
      clear: both;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      content: ' ';
    }

    &-item {
      display: inline-block;
      min-width: 32px;
      height: 32px;
      margin-right: 8px;
      font-family: var(--bds-font-family);
      line-height: 30px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      background-color: transparent;
      border: 1px solid var(--bds-gray-t4-dis);
      border-radius: 4px;
      outline: 0;
      cursor: pointer;
      user-select: none;

      a {
        display: block;
        padding: 0 6px;
        color: var(--bds-gray-t1-title);
        transition: none;
        font-weight: 500;
        font-size: 12px;

        &:hover {
          text-decoration: none;
        }
      }

      &:hover {
        transition: all 0.3s;
        a {
          color: var(--bds-gray-t2);
        }
      }

      &-active {
        font-weight: 500;
        background: var(--bds-brand-700-normal);
        border-color: var(--bds-brand-700-normal);

        a {
          color: #121214;
        }

        &:hover a {
          color: #121214;
        }
      }
    }

    &-jump-prev,
    &-jump-next {
      outline: 0;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: #666;
      }

      button:after {
        display: block;
        content: '\u2022\u2022\u2022';
      }
    }

    &-prev,
    &-jump-prev,
    &-jump-next {
      margin-right: 8px;
    }
    &-prev,
    &-next,
    &-jump-prev,
    &-jump-next {
      display: inline-block;
      min-width: 32px;
      height: 32px;
      color: rgba(0, 0, 0, 0.85);
      font-family: var(--bds-font-family);
      line-height: 32px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.3s;
    }

    &-prev,
    &-next {
      outline: 0;

      button {
        color: rgba(0, 0, 0, 0.85);
        cursor: pointer;
        user-select: none;
      }

      &:hover button {
        border-color: #40a9ff;
      }

      .moly-pagination-item-link {
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 12px;
        text-align: center;
        background-color: transparent;
        border: 1px solid var(--bds-gray-t4-dis);
        border-radius: 4px;
        outline: none;
        transition: all 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bds-gray-t1-title);
      }

      &:hover .moly-pagination-item-link {
        border-color: var(--bds-gray-t4-dis);
        color: var(--bds-gray-t2);
      }
    }

    &-disabled {
      &,
      &:hover &:focus {
        cursor: not-allowed;
        .moly-pagination-item-link {
          border-color: var(--bds-gray-t4-dis) !important;
          cursor: not-allowed;
          color: var(--bds-gray-t3) !important;
        }
      }
    }

    &-slash {
      margin: 0 10px 0 5px;
    }

    &-options {
      display: inline-block;
      margin-left: 16px;
      vertical-align: middle;

      @media all and (-ms-high-contrast: none) {
        *::-ms-backdrop,
        & {
          vertical-align: top;
        }
      }

      &-size-changer.rc-select {
        display: inline-block;
        width: auto;
        margin-right: 8px;
      }

      &-quick-jumper {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        vertical-align: top;

        input {
          width: 50px;
          margin: 0 8px;
        }
      }
    }

    // ============================ Disabled ============================
    &&-disabled {
      cursor: not-allowed;

      .moly-pagination-item {
        background: hsv(0, 0, 96%);
        border-color: #d9d9d9;
        cursor: not-allowed;

        a {
          color: fade(#000, 25%);
          background: transparent;
          border: none;
          cursor: not-allowed;
        }

        &-active {
          background: darken(hsv(0, 0, 96%), 10%);
          border-color: transparent;
          a {
            color: #fff;
          }
        }
      }

      .moly-pagination-item-link {
        color: fade(#000, 25%);
        background: hsv(0, 0, 96%);
        border-color: #d9d9d9;
      }

      .moly-pagination-item-link-icon {
        opacity: 0;
      }

      .moly-pagination-item-ellipsis {
        opacity: 1;
      }
    }
  }

  &.moly-pagination-disabled {
    .moly-pagination-item {
      background: hsv(0, 0, 96%);
      border-color: #d9d9d9;
      a {
        color: fade(#000, 25%);
        background: transparent;
        border: none;
        cursor: not-allowed;
      }

      &-active {
        background: darken(hsv(0, 0, 96%), 10%);
        border-color: transparent;
        a {
          color: #fff;
        }
      }
    }

    .moly-pagination-item-link {
      color: var(--bds-gray-t4-dis);
      background: hsv(0, 0, 96%);
      border-color: #d9d9d9;
      cursor: not-allowed;
    }

    .moly-pagination-item-link-icon {
      opacity: 0;
    }

    .moly-pagination-item-ellipsis {
      opacity: 1;
    }
  }

  &.moly-pagination-disabled:hover .moly-pagination-item-link,
  &.moly-pagination-disabled:focus .moly-pagination-item-link {
    border-color: var(--bds-gray-t4-dis);
    cursor: not-allowed;

    svg {
      color: var(--bds-gray-t2);
    }
  }

  &.moly-pagination-disabled:focus .moly-pagination-item-link svg {
    color: var(--bds-gray-t1-title);
  }

  &.moly-pagination-disabled .moly-pagination-item:hover a,
  &.moly-pagination-disabled .moly-pagination-item:focus a {
    color: var(--bds-gray-t1-title);
  }

  &.moly-pagination-mini .moly-pagination-prev,
  &.moly-pagination-mini .moly-pagination-next {
    width: 24px;
    height: 24px;
    min-width: auto;
  }

  &.moly-pagination-mini .moly-pagination-prev,
  &.moly-pagination-mini .moly-pagination-jump-prev,
  &.moly-pagination-mini .moly-pagination-jump-next {
    margin-right: 4px;
  }

  &.moly-pagination-mini .moly-pagination-item {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    min-width: auto;

    a {
      line-height: 22px;
      padding: 0;
    }
  }

  &.moly-pagination-mini .moly-pagination-options {
    margin-left: 12px;
    font-size: 12px;
    height: 24px;

    .moly-pagination-options-quick-jumper {
      height: 24px;
      line-height: 24px;
    }
  }

  &.moly-pagination-mini.moly-pagination-simple {
    .moly-pagination-simple-pager {
      font-size: 12px;
    }
    .moly-pagination-prev,
    .moly-pagination-next {
      font-size: 12px;
    }
  }

  &.moly-pagination-simple-readonly {
    display: flex;
    align-items: center;
    .page-button {
      color: var(--bds-gray-t1-title);
      display: flex;
      align-items: center;
      background-color: transparent;
      &.disabled {
        color: var(--bds-gray-t3);
        cursor: not-allowed;
      }
    }

    .prev-btn {
      margin-right: 16px;
    }

    .next-btn {
      margin-left: 16px;
    }

    .pagination-text {
      display: inherit;
      font-weight: 500;
      font-size: 14px;
      span:nth-child(2) {
        margin: 0 4px;
      }
    }

    &.simple-readonly-small {
      .prev-btn {
        margin-right: 4px;
      }

      .next-btn {
        margin-left: 4px;
      }

      .pagination-text {
        font-size: 12px;
      }
    }
  }

  &.moly-pagination-stairs {
    &.align {
      &-left {
        text-align: left;
      }

      &-right {
        text-align: right;
      }

      &-center {
        text-align: center;
      }
    }

    button {
      padding: 8px 12px;
      min-width: 64px;

      &:first-child {
        margin-right: 8px;
      }
    }

    &.rtl {
      button {
        &:first-child {
          margin-right: 0;
        }

        &:last-child {
          margin-right: 8px;
        }
      }

      &.align {
        &-left {
          text-align: right;
        }

        &-right {
          text-align: left;
        }
      }
    }
  }

  &.moly-pagination-stairs .align {
    &-left {
      text-align: left;
    }

    &-right {
      text-align: right;
    }

    &-center {
      text-align: center;
    }
  }

  &.moly-pagination-mobile {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .page-button {
      min-width: 80px;
      padding: 8px 12px;
      border-radius: 4px;
      border: 1px solid var(--bds-gray-t4-dis);
      color: var(--bds-gray-t1-title);
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      background-color: transparent;

      &.disabled {
        color: var(--bds-gray-t3);
      }
    }

    .mobile-pagination-text {
      color: var(--bds-gray-t1-title);
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;

      input {
        width: 40px;
        height: 32px;
        line-height: 32px;
        padding: 0 4px;
        text-align: center;
        outline-style: none;
        border-radius: 4px;
        background-color: var(--bds-gray-ele-line);
        border: 1px solid transparent;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          border-color: var(--bds-brand-800-pressed);
        }

        &:focus {
          box-shadow: 0px 0px 0px 5px rgba(247, 166, 0, 0.12);
          border-color: var(--bds-brand-800-pressed);
        }
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      span:nth-child(2) {
        margin: 0 8px;
      }
    }

    &.moly-pagination-readonly {
      justify-content: center;
      .mobile-pagination-text span:nth-child(2) {
        margin: 0 4px;
      }
    }

    &.moly-pagination-stairs {
      padding: 8px 0;
      > button {
        width: 50%;
      }
    }
  }

  .moly-pagination-options {
    font-size: 14px;
    color: var(--bds-gray-t1-title);

    input {
      padding: 4px;
      height: 100%;
      width: 50px;
      box-sizing: border-box;
      background: var(--bds-gray-ele-line);
      border-radius: 4px;
      outline-style: none;
      text-align: center;
      caret-color: var(--bds-brand-800-pressed);
      border: 1px solid transparent;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        border-color: var(--bds-brand-800-pressed);
      }

      &:focus {
        box-shadow: 0px 0px 0px 5px rgba(247, 166, 0, 0.12);
        border-color: var(--bds-brand-800-pressed);
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .moly-pagination-item {
      &-after-jump-prev,
      &-before-jump-next {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .moly-pagination-options {
      display: none;
    }
  }
`]))),i=a(85893),e="moly-pagination",L=function(n){var o=n.align,t=o===void 0?"left":o,h=n.disabledPrev,d=n.disabledNext,s=n.prevText,p=n.nextText,l=n.onClick,c=n.isMobile,g=(0,C.S)();return(0,i.jsxs)("div",{className:(0,b.cn)(j,"".concat(e,"-stairs align-").concat(t," ").concat(g?"rtl":""),u()({},"".concat(e,"-mobile"),c)),children:[(0,i.jsx)(y.Z,{variant:"secondary",onClick:function(){return l&&l("prev")},disabled:h,size:"small",children:s||"Prev"}),(0,i.jsx)(y.Z,{variant:"secondary",onClick:function(){return l&&l("next")},disabled:d,size:"small",children:p||"Next"})]})},K=function(n){var o=n.pageSize,t=n.current,h=n.total,d=n.defaultCurrent,s=n.onChange,p=n.prevText,l=n.nextText,c=n.readonly,g=Math.floor(h/o),m=d||t,T=(0,P.useState)(),k=G()(T,2),w=k[0],R=k[1];(0,P.useEffect)(function(){R(m)},[m]);var X=function(){s&&s(t-1,o)},F=function(){s&&s(t+1,o)},H=function(v){var Q=v.target.value;R(Q)},J=function(){var v=Number(w);v<1&&(v=1),v>g&&(v=g),s(v,o)};return(0,i.jsxs)("div",{className:(0,b.cn)(j,"".concat(e," ").concat(e,"-mobile"),u()({},"".concat(e,"-readonly"),c)),children:[!c&&(0,i.jsx)(y.Z,{variant:"secondary",onClick:X,disabled:t===1,size:"small",children:p||"Prev"}),(0,i.jsxs)("div",{className:"mobile-pagination-text",children:[c?(0,i.jsx)("span",{children:m}):(0,i.jsx)("input",{type:"number",size:1,value:w,onChange:H,onBlur:J}),(0,i.jsx)("span",{children:"/"}),(0,i.jsx)("span",{children:g})]}),!c&&(0,i.jsx)(y.Z,{variant:"secondary",onClick:F,disabled:t===g,size:"small",children:l||"Next"})]})},U=function(n){var o=n.pageSize,t=o===void 0?10:o,h=n.current,d=h===void 0?1:h,s=n.total,p=n.defaultCurrent,l=n.onChange,c=(0,C.S)(),g=Math.floor(s/t),m=p||d,T=function(){l&&l(d-1,t)},k=function(){l&&l(d+1,t)};return(0,i.jsxs)("div",{className:(0,b.cn)(j,"".concat(e," ").concat(e,"-simple-readonly"),{"simple-readonly-small":n.size==="small"}),children:[(0,i.jsx)(f.Z,{size:"x-small",className:"prev-btn",onClick:T,disabled:d===1,children:c?(0,i.jsx)(r.ArrowchevronRightIcon,{}):(0,i.jsx)(r.ArrowchevronLeftIcon,{})}),(0,i.jsxs)("div",{className:"pagination-text",children:[(0,i.jsx)("span",{children:m}),(0,i.jsx)("span",{children:"/"}),(0,i.jsx)("span",{children:g})]}),(0,i.jsx)(f.Z,{size:"x-small",className:"next-btn",onClick:k,disabled:d===g,children:c?(0,i.jsx)(r.ArrowchevronLeftIcon,{}):(0,i.jsx)(r.ArrowchevronRightIcon,{})})]})},V=function(n){var o,t=(0,C.S)(),h=P.useMemo(function(){var p=(0,i.jsx)("span",{className:"".concat(e,"-item-ellipsis"),children:"\u2022\u2022\u2022"}),l=n.simple?(0,i.jsx)(f.Z,{size:"x-small",children:t?(0,i.jsx)(r.ArrowchevronRightIcon,{}):(0,i.jsx)(r.ArrowchevronLeftIcon,{})}):(0,i.jsx)("button",{className:"".concat(e,"-item-link"),type:"button",tabIndex:-1,children:t?(0,i.jsx)(r.ArrowchevronRightIcon,{className:"relative "}):(0,i.jsx)(r.ArrowchevronLeftIcon,{className:"relative "})}),c=n.simple?(0,i.jsx)(f.Z,{size:"x-small",children:t?(0,i.jsx)(r.ArrowchevronLeftIcon,{}):(0,i.jsx)(r.ArrowchevronRightIcon,{})}):(0,i.jsx)("button",{className:"".concat(e,"-item-link"),type:"button",tabIndex:-1,children:t?(0,i.jsx)(r.ArrowchevronLeftIcon,{className:"relative "}):(0,i.jsx)(r.ArrowchevronRightIcon,{className:"relative "})}),g=(0,i.jsx)("a",{className:"".concat(e,"-item-link"),children:(0,i.jsxs)("div",{className:"".concat(e,"-item-container"),children:[t?(0,i.jsx)(r.Arrowchevron2RightIcon,{className:"quick-jump relative"}):(0,i.jsx)(r.Arrowchevron2LeftIcon,{className:"quick-jump relative"}),p]})}),m=(0,i.jsx)("a",{className:"".concat(e,"-item-link"),children:(0,i.jsxs)("div",{className:"".concat(e,"-item-container"),children:[t?(0,i.jsx)(r.Arrowchevron2LeftIcon,{className:"quick-jump relative"}):(0,i.jsx)(r.Arrowchevron2RightIcon,{className:"quick-jump relative"}),p]})});return{prevIcon:l,nextIcon:c,jumpPrevIcon:g,jumpNextIcon:m}},[t,n.simple]),d=(0,b.cn)((o={},u()(o,"".concat(e,"-align-").concat((n==null?void 0:n.align)||"left"),!0),u()(o,"".concat(e,"-mini"),(n==null?void 0:n.size)==="small"),u()(o,"".concat(e,"-rtl"),t),u()(o,(n==null?void 0:n.rootClassName)||"",!0),o)),s={align:n==null?void 0:n.align,isMobile:n==null?void 0:n.isMobile,prevText:n==null?void 0:n.prevText,nextText:n==null?void 0:n.nextText,disabledPrev:n==null?void 0:n.disabledPrev,disabledNext:n==null?void 0:n.disabledNext};return n.isMobile?n.isStairs?(0,i.jsx)(L,x()(x()({},s),{},{onClick:n.onChangeStairs})):(0,i.jsx)(K,x()({},n)):n.simple&&n.readonly?(0,i.jsx)(U,x()({},n)):n.isStairs?(0,i.jsx)(L,x()(x()({},s),{},{onClick:n.onChangeStairs})):(0,i.jsx)(O.Z,x()(x()({prefixCls:"moly-pagination",className:(0,b.cn)(j,d),locale:{jump_to:n.jumpToText||"Go to",page:""}},h),n))},W=V}}]);
