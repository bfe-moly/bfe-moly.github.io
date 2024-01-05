"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2816],{12065:function(J,C,e){e.d(C,{Z:function(){return W}});var w=e(5574),b=e.n(w),Z=e(50132),A=e(67294),M=e(36493),x=e(42978),B=e(70696),I=e(68400),r=e.n(I),v=e(93985),E,D,k,L,O,P,Y,Q=(0,v.F4)(E||(E=r()([`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`]))),R=(0,v.F4)(D||(D=r()([`
  from {
    border-color: transparent;
    background-color: transparent;
  }
  to {
    border-color: auto;
    background-color: auto;
  }
`]))),$=(0,v.F4)(k||(k=r()([`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.4);
  }
`]))),X=(0,v.F4)(L||(L=r()([`
  from {
    border-color: auto;
    background-color: auto;
  }
  to {
    border-color: transparent;
    background-color: transparent;
  }
`]))),a={molyCheckbox:(0,v.iv)(O||(O=r()([`
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
  `])),X,R),fadeIn:(0,v.iv)(P||(P=r()([`
    transform-origin: center center;
    animation: `,` 100ms ease-in-out;
  `])),Q),fadeOut:(0,v.iv)(Y||(Y=r()([`
    transform-origin: center center;
    animation: `,` 100ms ease-in-out;
    display: none;
  `])),$)},T=a,f=e(85893);function G(n){var g=n.className,N=n.size,u=N===void 0?"middle":N,t=n.type,l=t===void 0?"normal":t,i=n.checked,d=n.defaultChecked,o=d===void 0?!1:d,s=n.indeterminate,c=n.disabled,p=c===void 0?!1:c,m=n.onChange,y=m===void 0?function(){}:m,h=n.children,V=(0,A.useState)(),K=b()(V,2),S=K[0],H=K[1];return(0,A.useEffect)(function(){H(o)},[o]),(0,A.useEffect)(function(){S!==i&&H(i)},[i]),(0,f.jsxs)("label",{className:(0,M.cn)("flex gap-[8px] items-start transition-all",p?"cursor-not-allowed":"cursor-pointer",g),children:[(0,f.jsxs)("span",{className:"flex justify-center items-center relative",children:[(0,f.jsx)(x.Z,{component:"Checkbox",children:typeof i!="undefined"?(0,f.jsx)(Z.Z,{prefixCls:T.molyCheckbox,className:(0,M.cn)("outline-none ring-btn-default focus-visible:ring-[5px]",u==="small"?"sm":"","color-".concat(l),s?"indeterminate":""),checked:i,disabled:p,onChange:function(j){H(i),y==null||y(j.nativeEvent,i)}}):(0,f.jsx)(Z.Z,{prefixCls:T.molyCheckbox,className:(0,M.cn)("outline-none ring-btn-default focus-visible:ring-[5px]",u==="small"?"sm":"","color-".concat(l),s?"indeterminate":"",g),defaultChecked:o,disabled:p,onChange:function(j){var F,z;H(j==null||(F=j.target)===null||F===void 0?void 0:F.checked),y==null||y(j.nativeEvent,j==null||(z=j.target)===null||z===void 0?void 0:z.checked)}})}),s?(0,f.jsx)("div",{className:(0,M.cn)("absolute","bg-brandColor-bds-brand-700-normal",S?T.fadeIn:T.fadeOut,u==="small"?"w-[7px] h-[7px] ":"w-[8px] h-[8px] ",l==="buy"?"bg-greenColor-bds-green-700-normal":"",l==="sell"?"bg-redColor-bds-red-700-normal":"",p?"bg-base-bds-gray-t4-dis":"")}):(0,f.jsx)(B.CheckIcon,{className:(0,M.cn)("text-center absolute","text-base-bds-static-black",S?T.fadeIn:T.fadeOut,u==="small"?"w-[14px] text-[7px] font-[500]":"w-[16px] text-[8px] font-[700]",l!=="normal"?"text-base-bds-gray-t1-title-revert":"",p?"bg-base-bds-gray-t4-dis":"")})]}),(0,f.jsx)("span",{className:(0,M.cn)("font-IBM font-normal text-base-bds-gray-t1-title",u==="small"?"text-[12px] leading-[18px]":"text-[14px] leading-[22px]",l==="buy"?"".concat(S?"text-greenColor-bds-green-700-normal":"hover:text-greenColor-bds-green-700-normal"):"",l==="sell"?"".concat(S?"text-redColor-bds-red-700-normal":"hover:text-redColor-bds-red-700-normal"):"",p?"hover:text-base-bds-gray-t3 text-base-bds-gray-t3":""),children:h})]})}var W=G},73746:function(J,C,e){var w=e(76881);C.Z=w.I},35488:function(J,C,e){e.d(C,{Z:function(){return W}});var w=e(5574),b=e.n(w),Z=e(13769),A=e.n(Z),M=e(57636),x=e(36493),B=e(70696),I=e(5193),r=e(70609),v=e(67294),E=e(68400),D=e.n(E),k=e(93985),L,O,P,Y,Q=(0,k.iv)(L||(L=D()([`
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  pointer-events: auto;
  background-color: var(--bds-trans-mask);
  position: fixed;
  inset: 0px;
  height: 100%;
  pointer-events: none;
  animation: overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1);
`]))),R=(0,k.iv)(O||(O=D()([`
  @keyframes overlayHidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: overlayHidden 300ms cubic-bezier(0.16, 1, 0.3, 1);
`]))),$=(0,k.iv)(P||(P=D()([`
  background-color: var(--bds-gray-bg-card);
  box-shadow: var(--bds-shadow-l2);
  position: fixed;
  top: 50%;
  left: 50%;
  font-family: 'IBM Plex Sans';
  transform: translate(-50%, -50%);
  outline: none;

  box-sizing: border-box;

  color: var(--bds-gray-t1-title);

  @keyframes DialogContentShow {
    from {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  @keyframes DialogContentHide {
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
  }

  @keyframes DialogContentBottomShow {
    from {
      transform: translateY(100%) translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%) translateX(-50%);
      opacity: 1;
    }
  }

  @keyframes DialogContentBottomHide {
    from {
      transform: translateY(0%) translateX(-50%);
      opacity: 1;
    }
    to {
      transform: translateY(100%) translateX(-50%);
      opacity: 0;
    }
  }

  &[data-direction='default'] {
    &[data-open='open'] {
      animation: DialogContentShow 300ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: forwards;
    }
    &[data-open='closed'] {
      animation: DialogContentHide 230ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: forwards;
    }
  }

  &[data-direction='bottom'] {
    bottom: 0;
    top: initial;
    transition: transform 1.3s ease-in-out;
    transform: translateX(-50%) translateY(100%);
    &[data-open='open'] {
      animation: DialogContentBottomShow 300ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: both;
    }

    &[data-open='closed'] {
      animation: DialogContentBottomHide 230ms cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: forwards;
    }
  }
`]))),X=(0,k.iv)(Y||(Y=D()([`
  margin-top: 24px;
  font-size: 14px;
  line-height: 22px;
  font-family: 'IBM Plex Sans';
  &.unhave-header {
    margin-top: 0px;
  }
`]))),a=e(85893),T=["titleClass","buttonVertical","arrowEnable","arrowHandler","direction","isMobile","size","confirmBtnDisabled","title","subTitle","open","className","overlayClassName","zIndex","onOk","onCancel","titleCenter","wrapClassName","contextWrapper","width","height","okText","type","footerWrapper","headerWrapper","cancelText","footer","closable"],f=function(g){var N=g.size,u=g.buttonVertical,t=g.isMobile,l=g.onOk,i=g.onCancel,d=g.okText,o=g.cancelText,s=g.footer,c=g.footerWrapper,p=g.confirmBtnDisabled;return s===!1||s===null?(0,a.jsx)(a.Fragment,{}):s?(0,a.jsx)("div",{style:{marginTop:24},className:(0,x.cn)({"px-[24px]":t||N==="small","px-[32px]":N!=="small"&&!t},c),children:s}):(0,a.jsx)("div",{style:{display:"flex",marginTop:24,justifyContent:"center"},className:(0,x.cn)({"px-[24px]":t||N==="small","max-w-[496px] mx-auto":["large","medium"].includes(N)&&!t}),children:(0,a.jsx)(r.x8,{asChild:!0,children:(0,a.jsxs)("div",{className:(0,x.cn)("flex w-full",c,{"flex-col gap-[12px]":t&&u,"gap-[20px]":t&&!u||!t}),children:[d&&(0,a.jsx)(M.z,{className:"flex-1",disabled:p,variant:"primary",onClick:function(){l==null||l()},children:d}),o&&(0,a.jsx)(M.z,{className:"flex-1",variant:"secondary",onClick:function(){i==null||i()},children:o})]})})})},G=v.forwardRef(function(n,g){var N=n.titleClass,u=n.buttonVertical,t=n.arrowEnable,l=n.arrowHandler,i=n.direction,d=i===void 0?"default":i,o=n.isMobile,s=n.size,c=s===void 0?"medium":s,p=n.confirmBtnDisabled,m=n.title,y=n.subTitle,h=n.open,V=n.className,K=V===void 0?"":V,S=n.overlayClassName,H=S===void 0?"":S,q=n.zIndex,j=q===void 0?1e3:q,F=n.onOk,z=n.onCancel,oe=n.titleCenter,xe=n.wrapClassName,pe=n.contextWrapper,_=n.width,ge=n.height,re=n.okText,me=re===void 0?"Ok":re,U=n.type,ie=n.footerWrapper,he=ie===void 0?"":ie,le=n.headerWrapper,Me=le===void 0?"":le,se=n.cancelText,ve=se===void 0?"Cancel":se,ue=n.footer,de=n.closable,ee=de===void 0?!0:de,ne=A()(n,T),ye=(0,v.useState)(h),ce=b()(ye,2),Ie=ce[0],ae=ce[1],fe={successful:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2IDlDMjEuMDg4IDkgOSAyMS4wODggOSAzNnMxMi4wODggMjcgMjcgMjcgMjctMTIuMDg4IDI3LTI3UzUwLjkxMiA5IDM2IDlaTTMgMzZDMyAxNy43NzUgMTcuNzc1IDMgMzYgM3MzMyAxNC43NzUgMzMgMzMtMTQuNzc1IDMzLTMzIDMzUzMgNTQuMjI1IDMgMzZaIiBmaWxsPSIjMjBCMjZDIiBmaWxsLW9wYWNpdHk9Ii4xNiIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzYiIHI9IjMzIiBmaWxsPSIjMjBCMjZDIiBmaWxsLW9wYWNpdHk9Ii4xNiIvPjxwYXRoIGQ9Ik01MS41OTQgMjYuMzUyYTMgMyAwIDAgMSAuMDU0IDQuMjQybC0xNy41MyAxNy45OGEzLjAzIDMuMDMgMCAwIDEtNC4yNTguMDc4bC05LjQyOS04Ljk4YTMgMyAwIDEgMSA0LjEzOC00LjM0NGw3LjMwMyA2Ljk1NSAxNS40OC0xNS44NzdhMyAzIDAgMCAxIDQuMjQyLS4wNTRaIiBmaWxsPSIjMjBCMjZDIi8+PC9zdmc+",failed:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2IDlDMjEuMDg4IDkgOSAyMS4wODggOSAzNnMxMi4wODggMjcgMjcgMjcgMjctMTIuMDg4IDI3LTI3UzUwLjkxMiA5IDM2IDlaTTMgMzZDMyAxNy43NzUgMTcuNzc1IDMgMzYgM3MzMyAxNC43NzUgMzMgMzMtMTQuNzc1IDMzLTMzIDMzUzMgNTQuMjI1IDMgMzZaIiBmaWxsPSIjRUY0NTRBIiBmaWxsLW9wYWNpdHk9Ii4xNiIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzYiIHI9IjMzIiBmaWxsPSIjRUY0NTRBIiBmaWxsLW9wYWNpdHk9Ii4xNiIvPjxwYXRoIGQ9Ik00Ny4xMjEgMjQuODc5YTMgMyAwIDAgMSAwIDQuMjQybC0xOCAxOGEzIDMgMCAxIDEtNC4yNDItNC4yNDJsMTgtMThhMyAzIDAgMCAxIDQuMjQyIDBaIiBmaWxsPSIjRUY0NTRBIi8+PHBhdGggZD0iTTI0Ljg3OSAyNC44NzlhMyAzIDAgMCAxIDQuMjQyIDBsMTggMThhMyAzIDAgMSAxLTQuMjQyIDQuMjQybC0xOC0xOGEzIDMgMCAwIDEgMC00LjI0MloiIGZpbGw9IiNFRjQ1NEEiLz48L3N2Zz4=",alert:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2IDlDMjEuMDg4IDkgOSAyMS4wODggOSAzNnMxMi4wODggMjcgMjcgMjcgMjctMTIuMDg4IDI3LTI3UzUwLjkxMiA5IDM2IDlaTTMgMzZDMyAxNy43NzUgMTcuNzc1IDMgMzYgM3MzMyAxNC43NzUgMzMgMzMtMTQuNzc1IDMzLTMzIDMzUzMgNTQuMjI1IDMgMzZaIiBmaWxsPSIjRjdBNjAwIiBmaWxsLW9wYWNpdHk9Ii4xNiIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzYiIHI9IjMzIiBmaWxsPSIjRjdBNjAwIiBmaWxsLW9wYWNpdHk9Ii4xNiIvPjxwYXRoIGQ9Ik0zNiAyMWEzIDMgMCAwIDEgMyAzdjEyYTMgMyAwIDEgMS02IDBWMjRhMyAzIDAgMCAxIDMtM1pNMzMgNDhhMyAzIDAgMCAxIDMtM2guMDNhMyAzIDAgMSAxIDAgNkgzNmEzIDMgMCAwIDEtMy0zWiIgZmlsbD0iI0Y3QTYwMCIvPjwvc3ZnPg==",pending:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2IDlDMjEuMDg4IDkgOSAyMS4wODggOSAzNnMxMi4wODggMjcgMjcgMjcgMjctMTIuMDg4IDI3LTI3UzUwLjkxMiA5IDM2IDlaTTMgMzZDMyAxNy43NzUgMTcuNzc1IDMgMzYgM3MzMyAxNC43NzUgMzMgMzMtMTQuNzc1IDMzLTMzIDMzUzMgNTQuMjI1IDMgMzZaIiBmaWxsPSIjQzBEMkU3IiBmaWxsLW9wYWNpdHk9Ii4xMiIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzYiIHI9IjMzIiBmaWxsPSIjQzBEMkU3IiBmaWxsLW9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0zNCAxN2MxLjY1NyAwIDMgMS4yOSAzIDIuODh2MTguMjRjMCAxLjU5LTEuMzQzIDIuODgtMyAyLjg4cy0zLTEuMjktMy0yLjg4VjE5Ljg4YzAtMS41OSAxLjM0My0yLjg4IDMtMi44OFoiIGZpbGw9IiMxMjEyMTQiLz48cGF0aCBkPSJNNTUgMzhjMCAxLjY1Ny0xLjYxMiAzLTMuNiAzSDM0LjZjLTEuOTg4IDAtMy42LTEuMzQzLTMuNi0zczEuNjEyLTMgMy42LTNoMTYuOGMxLjk4OCAwIDMuNiAxLjM0MyAzLjYgM1oiIGZpbGw9IiMxMjEyMTQiLz48L3N2Zz4="};(0,v.useEffect)(function(){return h&&setTimeout(function(){document.body.style.pointerEvents="initial"},100),h?ae(h):setTimeout(function(){ae(h)},300),function(){}},[h,ae]);var te=_;return o&&(te="calc(100vw - 16px)",d==="bottom"&&(te="100vw")),(0,a.jsx)(r.fC,{open:Ie,children:(0,a.jsxs)(r.h_,{children:[(0,a.jsx)(r.aV,{style:{zIndex:j},className:(0,x.cn)(Q,H,h?"":R)}),(0,a.jsxs)(r.VY,{style:{width:te,height:ge,zIndex:j+1},"data-open":h?"open":"closed","data-direction":d,className:(0,x.cn)("moly-modal py-[24px] rounded-2xl",{"rounded-t-2xl":o&&d==="bottom","rounded-b-none":o&&d==="bottom","w-[780px]":!o&&!_&&c==="large","w-[560px]":!o&&!_&&c==="medium","w-[480px]":!o&&!_&&c==="small"},$,K),onEscapeKeyDown:z,children:[(0,a.jsx)("div",{className:(0,x.cn)("text-[18px] w-full leading-[26px] font-semibold flex flex-row-reverse",{"px-[32px]":!o,"px-[24px]":o||c==="small","text-right":!0,"text-[20px] leading-[28px] mr-[0px]":U,hidden:!m&&!ee}),children:ee&&U&&(0,a.jsx)(r.x8,{asChild:!0,children:(0,a.jsx)(I.h,{width:"24px",className:"w-[24px] h-[24px]",children:(0,a.jsx)(B.CloseIcon,{"aria-label":"Close",onClick:function(){z==null||z()},className:(0,x.cn)("IconButton  leading-6 rounded inline-block text-[#81858c]  ")})})})}),(0,a.jsxs)("div",{className:(0,x.cn)(Me),children:[U&&(0,a.jsx)("div",{className:(0,x.cn)("text-center"),children:(0,a.jsx)("img",{className:(0,x.cn)("w-[66px] h-[66px] mb-[16px] inline"),src:fe[U],alt:"success"})}),(0,a.jsxs)(r.Dx,{className:(0,x.cn)("text-[18px] leading-[26px] font-semibold flex gap-x-2",{"px-[32px]":!o,"px-[24px]":o||c==="small","text-center":oe,"text-[20px] leading-[28px] mr-[0px]":U,hidden:!m&&!ee,"justify-end":!m},N),children:[t&&(0,a.jsx)(I.h,{width:"24px",className:(0,x.cn)("w-[24px] h-[24px] hidden"),children:(0,a.jsx)(B.DirectionleftIcon,{onClick:function(){l==null||l()}})}),m&&(0,a.jsx)("div",{className:"flex-1",children:m}),ee&&!U&&(0,a.jsx)(r.x8,{asChild:!0,children:(0,a.jsx)(I.h,{width:"24px",className:"w-[24px] h-[24px] ",children:(0,a.jsx)(B.CloseIcon,{"aria-label":"Close",onClick:function(){z==null||z()},className:(0,x.cn)("IconButton leading-6 rounded inline-block text-[#81858c] ")})})})]}),y&&(0,a.jsx)(r.Dx,{className:(0,x.cn)("mt-[8px] text-[16px] leading-[24px] font-normal text-[#81858C] ",{"text-center":oe}),children:y})]}),(0,a.jsx)("div",{ref:g,className:(0,x.cn)(pe,X,m?"":"unhave-header",{"px-[32px]":!o,"px-[24px]":o,"overflow-y-scroll max-h-[440px]":o},xe),children:ne==null?void 0:ne.children}),(0,a.jsx)(f,{size:c,buttonVertical:u,isMobile:o,footerWrapper:he,confirmBtnDisabled:p,footer:ue,onOk:F,onCancel:z,okText:me,cancelText:ve})]})]})})});G.displayName="Modal";var W=G},97571:function(J,C,e){var w=e(92327);C.Z=w.P},30501:function(J,C,e){e.d(C,{x:function(){return n}});var w=e(97857),b=e.n(w),Z=e(13769),A=e.n(Z),M=e(36493),x=e(67294),B=e(68400),I=e.n(B),r=e(93985),v,E,D,k,L,O,P=(0,r.iv)(v||(v=I()([`
  font-size: var(--bds-font-size-12);
  line-height: var(--bds-line-height-12);
`]))),Y=(0,r.iv)(E||(E=I()([`
  font-size: var(--bds-font-size-14);
  line-height: var(--bds-line-height-14);
`]))),Q=(0,r.iv)(D||(D=I()([`
  font-size: var(--bds-font-size-16);
  line-height: var(--bds-line-height-16);
`]))),R=(0,r.iv)(k||(k=I()([`
  font-size: var(--bds-font-size-18);
  line-height: var(--bds-line-height-18);
`]))),$=(0,r.iv)(L||(L=I()([`
  font-size: var(--bds-font-size-20);
  line-height: var(--bds-line-height-20);
`]))),X=(0,r.iv)(O||(O=I()([`
  font-size: var(--bds-font-size-24);
  line-height: var(--bds-line-height-24);
`]))),a=e(85893),T=["className","style","size","type","children","ellipsis","disabled"],f=["level","className","children"],G=["className","blank","type","size","children","ellipsis","disabled"],W={color:{white:"text-[var(--bds-static-white)]",secondary:"text-[var(--bds-gray-t2)]",success:"text-[var(--bds-green-800-pressed)]",warning:"text-[var(--bds-brand-700-normal)]",danger:"text-[var(--bds-red-700-normal)]"},size:{12:P,14:Y,16:Q,18:R,20:$,24:X}},n=function(t){var l=t.className,i=t.style,d=t.size,o=d===void 0?14:d,s=t.type,c=t.children,p=t.ellipsis,m=t.disabled,y=A()(t,T),h=b()({},i);return p&&typeof p!="boolean"&&p.rows>0&&(h.WebkitLineClamp=p.rows),(0,a.jsx)("span",b()(b()({className:(0,M.cn)("moly-text",s?W.color[s]:"",W.size[o],l,{"line-clamp-1":p},m&&"text-[var(--bds-gray-t4-dis)] cursor-not-allowed"),style:h},y),{},{children:c}))},g=function(t){var l=t.level,i=l===void 0?1:l,d=t.className,o=t.children,s=A()(t,f),c=b()(b()({},s.style||{}),{},{fontSize:"var(--bds-font-size-h".concat(i,")"),lineHeight:"var(--bds-line-height-h".concat(i,")")});return i===1?(0,a.jsx)("h1",b()(b()({className:(0,M.cn)("text-[] leading-[var(--bds-line-height-h1)]",d)},s),{},{style:c,children:o})):i===2?(0,a.jsx)("h2",b()(b()({className:(0,M.cn)(d)},s),{},{style:c,children:o})):i===3?(0,a.jsx)("h3",b()(b()({className:(0,M.cn)(d)},s),{},{style:c,children:o})):(0,a.jsx)("h1",b()(b()({className:(0,M.cn)(d)},s),{},{style:c,children:o}))},N=function(t){var l=t.className,i=t.blank,d=t.type,o=t.size,s=o===void 0?14:o,c=t.children,p=t.ellipsis,m=t.disabled,y=A()(t,G),h=b()({},y);return i&&(h.target="_blank"),m&&delete h.href,(0,a.jsx)("a",b()(b()({className:(0,M.cn)("no-underline text-inherit",!m&&"hover:!text-[var(--bds-brand-600-hover)]",d?W.color[d]:"",W.size[s],{truncate:p},m&&"text-[var(--bds-gray-t4-dis)] cursor-not-allowed",l)},h),{},{children:c}))};n.Title=g,n.Link=N}}]);
