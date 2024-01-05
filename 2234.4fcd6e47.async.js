!(function(){"use strict";var Tn=Object.defineProperty,Pn=Object.defineProperties;var Nn=Object.getOwnPropertyDescriptors;var pn=Object.getOwnPropertySymbols;var Cn=Object.prototype.hasOwnProperty,Sn=Object.prototype.propertyIsEnumerable;var En=(F,g,n)=>g in F?Tn(F,g,{enumerable:!0,configurable:!0,writable:!0,value:n}):F[g]=n,An=(F,g)=>{for(var n in g||(g={}))Cn.call(g,n)&&En(F,n,g[n]);if(pn)for(var n of pn(g))Sn.call(g,n)&&En(F,n,g[n]);return F},jn=(F,g)=>Pn(F,Nn(g));var bn=(F,g)=>{var n={};for(var j in F)Cn.call(F,j)&&g.indexOf(j)<0&&(n[j]=F[j]);if(F!=null&&pn)for(var j of pn(F))g.indexOf(j)<0&&Sn.call(F,j)&&(n[j]=F[j]);return n};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2234],{74062:function(F,g,n){n.d(g,{Z:function(){return v}});var j=n(9783),r=n.n(j),W=n(97857),T=n.n(W),z=n(13769),O=n.n(z),p=n(22641),P=n(36493),y=n(67294),D=n(68400),b=n.n(D),c=n(93985),l,A,h,w={badgeHeight:"var(--bds-badge-height)",badgeHeightSmall:"var(--bds-badge-height-small)",badgeDotSize:"var(--bds-badge-dot-size)",badgeDotSizeSmall:"var(--bds-badge-dot-size-small)",badgePaddingHorizontal:"var(--bds-badge-padding-horizontal)",badgePaddingHorizontalSmall:"var(--bds-badge-padding-horizontal-small)",badgeBgColor:"var(--bds-badge-bg-color)",badgeSupColor:"var(--bds-badge-sup-text-color)",badgeFontWeight:"var(--bds-font-weight-medium)",badgeFontSize:"var(--bds-badge-font-size)",badgeFontSizeSmall:"var(--bds-badge-font-size-small)",badgeTypeSecondaryColor:"var(--bds-badge-type-secondary-text-color)",badgeTypeSecondaryBgColor:"var(--bds-badge-type-secondary-bg-color)",badgeSupTypeSecondaryColor:"var(--bds-badge-sup-type-secondary-text-color)",badgeFontFamily:"var(--bds-font-family)"},t=function(m,x){var o=w,C=(0,c.iv)(l||(l=b()([`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: `,`;
    top: 0;
    right: 0;
    transform: `,`;
    transform-origin: 0 100%;
    transition: color;
    background: `,`;
    border-radius: calc(`,` / 2);
    color: #fff;
    font-weight: `,`;
    text-align: center;
    white-space: nowrap;

    [direction='rtl'] &,
    [dir='rtl'] &,
    [data-direction='rtl'] & {
      right: unset;
      left: 0;
      transform: `,`;
      transform-origin: 0;
    }
  `])),x.hasChild?"absolute":"unset",x.hasChild?"translate(50%, -50%)":"none",o.badgeBgColor,o.badgeHeight,o.badgeFontWeight,x.hasChild?"translate(-50%, -50%)":"none"),a=(0,c.iv)(A||(A=b()([`
    `,`
  `])),C),M=(0,c.iv)(h||(h=b()([`
    &.`,` {
      position: `,`;
      display: `,`;
      `,`
      line-height: inherit;
      font-family: `,`;
      font-size: `,`;

      .`,`-size-small {
        font-size: `,`;
      }

      .`,`-dot {
        `,`;
        width: `,`;
        height: `,`;
        border-radius: 100%;
        &.`,`-size-small {
          width: `,`;
          height: `,`;
        }
      }

      .`,`-sup {
        position: relative;
        top: -0.3em;
        left: -0.35em;
        display: inline-block;
        line-height: 0;
        font-size: 20px;
        font-weight: 600;
        transform: scale(0.5);
        vertical-align: baseline;
        color: `,`;
        &.`,`-size-small {
          top: -0.35em;
          font-size: 16px;
        }
        [direction='rtl'] &,
        [dir='rtl'] &,
        [data-direction='rtl'] & {
          left: unset;
          right: -0.35em;
        }
      }

      .`,`-count {
        `,`;
        min-width: `,`;
        height: `,`;
        line-height: `,`;
        padding: `,`;
        &.`,`-size-small {
          min-width: `,`;
          height: `,`;
          padding: `,`;
        }
      }

      .`,`-inline-flex {
        position: static;
        transform: unset;
        margin-left: 4px;
      }

      .`,`-type-secondary {
        &.`,`-sup {
          color: `,`;
        }
        &.`,`-count {
          color: `,`;
          background: `,`;
        }
      }

      .`,`-custom-component {
        `,`;
        font-size: inherit;
        color: inherit;
        background: transparent;
        box-shadow: inherit;
      }
    }
  `])),m,x.hasChild?"relative":"unset",x.inlineFlex?"inline-flex":"inline-block",x.inlineFlex?"align-items: center;":"",o.badgeFontFamily,o.badgeFontSize,m,o.badgeFontSizeSmall,m,a,o.badgeDotSize,o.badgeDotSize,m,o.badgeDotSizeSmall,o.badgeDotSizeSmall,m,o.badgeSupColor,m,m,a,o.badgeHeight,o.badgeHeight,o.badgeHeight,x.isLongerThan2?"0 ".concat(o.badgePaddingHorizontal):"unset",m,o.badgeHeightSmall,o.badgeHeightSmall,x.isLongerThan2?"0 ".concat(o.badgePaddingHorizontalSmall):"unset",m,m,m,o.badgeSupTypeSecondaryColor,m,o.badgeTypeSecondaryColor,o.badgeTypeSecondaryBgColor,m,a);return{styles:M,theme:o}},f=t,u=n(85893),E=["className","style","count","dot","sup","inlineFlex","type","size","offset","showZero","overflowCount","color","children","classNames","styles"],e="moly-badge";function s(i){var m=i.className,x=i.style,o=i.count,C=i.dot,a=i.sup,M=i.inlineFlex,Z=i.type,S=Z===void 0?"primary":Z,U=i.size,I=i.offset,K=i.showZero,B=K===void 0?!1:K,R=i.overflowCount,V=R===void 0?99:R,d=i.color,L=i.children,N=i.classNames,$=i.styles,G=O()(i,E),k=(0,p.S)(),Q=function(){return typeof o=="string"||y.isValidElement(o)?o:typeof o=="function"?o():o>V?"".concat(V,"+"):"".concat(o)}(),_=(0,y.useMemo)(function(){return y.isValidElement(o)||typeof o=="function"},[o]),nn=Q==="0",Y=C&&!nn,H=Y?"":Q,on=function(){return typeof H=="string"?H.length>1:!1}(),sn=(0,y.useMemo)(function(){var tn=H==null||H==="";return(tn||nn&&!B)&&!Y},[H,nn,B,Y]),dn=f(e,{inlineFlex:M,size:U,isLongerThan2:on,hasChild:!!L,isHidden:sn,countIsCustom:_}),cn=dn.styles,un=dn.theme,hn=(0,P.cn)("".concat(e),cn,m,N==null?void 0:N.root),mn=T()(T()({},x),$==null?void 0:$.root),J=function(){var tn={};_?tn.color=d||un.badgeBgColor:d&&(tn.background=d);var X={};return I&&(X={top:I[1]},k?(X.left=-parseInt(I[0],10),X.right="unset"):(X.left="unset",X.right=-parseInt(I[0],10))),T()(T()(T()({},tn),X),$==null?void 0:$.indicator)}(),fn=function(){if(!Y&&a){var X;return(0,u.jsx)("sup",{className:(0,P.cn)("".concat(e,"-sup"),(X={},r()(X,"".concat(e,"-size-small"),U==="small"),r()(X,"".concat(e,"-type-secondary"),S==="secondary"),X),N==null?void 0:N.indicator),children:H})}if(!sn){var an;return(0,u.jsx)("span",{className:(0,P.cn)((an={},r()(an,"".concat(e,"-dot"),Y),r()(an,"".concat(e,"-count"),!Y&&!_),r()(an,"".concat(e,"-inline-flex"),M),r()(an,"".concat(e,"-size-small"),U==="small"),r()(an,"".concat(e,"-type-secondary"),S==="secondary"),r()(an,"".concat(e,"-custom-component"),_),an),N==null?void 0:N.indicator),style:J,children:H})}return(0,u.jsx)(u.Fragment,{})};return(0,u.jsxs)("span",T()(T()({className:hn,style:mn},G),{},{children:[L,fn()]}))}s.displayName="Badge";var v=s},81376:function(F,g,n){n.d(g,{Z:function(){return h}});var j=n(5574),r=n.n(j),W=n(36493),T=n(70696),z=n(67294),O=n(68400),p=n.n(O),P=n(93985),y,D=(0,P.iv)(y||(y=p()([`
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
`]))),b=n(85893),c=function(t){var f=t.children,u=t.isSelected,E=t.className,e=t.disabled,s=t.onChange,v=function(){e||s==null||s()};return(0,b.jsxs)("div",{onClick:v,className:(0,W.cn)(E,D,"card","".concat(u?"isSelectedCard":""),"".concat(u?"":"isNotSelectedCard"),"".concat(e?"isDisabledCard":"")),children:[f,(0,b.jsxs)("div",{className:"tag",children:[(0,b.jsx)("div",{className:"tagBg"}),(0,b.jsx)(T.CheckIcon,{className:"icon"})]})]})},l=function(t){var f=t.children,u=t.defaultValue,E=u===void 0?"":u,e=t.value,s=e===void 0?"":e,v=t.onChange,i=(0,z.useState)(E),m=r()(i,2),x=m[0],o=m[1],C=function(M){s||o(M),v&&v(M===x?"":M)};return(0,z.useLayoutEffect)(function(){o(s)},[s]),(0,b.jsx)("div",{children:z.Children.map(f,function(a){return z.isValidElement(a)?z.cloneElement(a,{isSelected:a.props.value===x,onChange:function(){return C(a.props.value)}}):a})})};c.Group=l;var A=c,h=A},26777:function(F,g,n){n.d(g,{Z:function(){return l}});var j=n(36493),r=n(67294),W=n(5574),T=n.n(W),z=n(22641),O=n(70696),p=n(85893),P=(0,r.lazy)(function(){return Promise.all([n.e(1775),n.e(3373)]).then(n.bind(n,5968))}),y=function(h){var w=h.separator,t=h.children,f=h.key,u=h.isLast,E=h.ellipsis,e=(0,r.useState)(!1),s=T()(e,2),v=s[0],i=s[1],m=(0,r.useRef)(null),x=(0,z.S)(),o=(0,p.jsx)("span",{className:"text-base-bds-gray-t3 flex items-center",children:w||(x?(0,p.jsx)(O.ArrowchevronLeftIcon,{}):(0,p.jsx)(O.ArrowchevronRightIcon,{}))});(0,r.useEffect)(function(){E&&m.current&&m.current.scrollWidth>m.current.offsetWidth&&i(!0)},[m.current]);var C=(0,r.useCallback)(function(M){var Z=M.mr;return(0,p.jsx)("span",{ref:m,className:(0,j.cn)(Z,"truncate hover:text-base-bds-gray-t3 cursor-pointer","inline-block","transition-all","font-medium",E?"max-w-[200px]":""),style:{display:"inherit"},children:t})},[t]),a=(0,r.useCallback)(function(){return(0,p.jsx)(r.Suspense,{children:(0,p.jsx)(P,{title:t,children:(0,p.jsx)(C,{mr:""})})})},[t]);return(0,p.jsxs)("div",{className:(0,j.cn)("flex","items-center",x?"ml-[6px]":"mr-[6px]",u?"text-base-bds-gray-t1-title":"text-base-bds-gray-t2"),children:[v?(0,p.jsx)(a,{}):(0,p.jsx)(C,{mr:x?"ml-[6px]":"mr-[6px]"}),!u&&o]},f)},D=y,b=function(h){var w=h.items,t=h.separator,f=h.itemRender,u=h.className,E=h.style;return(0,p.jsx)("div",{className:(0,j.cn)(u,"flex","items-center","text-bds-font-size-14"),style:E,children:w.map(function(e,s){var v,i,m=f?f(e,s,w):(e==null||(v=e.label)===null||v===void 0?void 0:v.call(e))||e.title;return D({separator:t,children:m,key:e.key,ellipsis:(i=e.ellipsis)!==null&&i!==void 0?i:!0,isLast:s===w.length-1})})})},c=b,l=c},17512:function(F,g,n){n.d(g,{Z:function(){return k}});var j=n(5574),r=n.n(j),W=n(97857),T=n.n(W),z=n(13769),O=n.n(z),p=n(82545),P=n(47398),y=n(67294),D=n(68400),b=n.n(D),c=n(93985),l,A,h,w,t,f,u,E,e,s,v,i=(0,c.F4)(l||(l=b()([`
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  `]))),m=(0,c.F4)(A||(A=b()([`
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  `]))),x=(0,c.iv)(h||(h=b()([`
  flex-basis: 15px;
  color: var(--bds-gray-t3);
`]))),o=(0,c.iv)(w||(w=b()([`
  flex: 1;
`]))),C=(0,c.iv)(t||(t=b()([`
  border-radius: 6px;
  width: 100%;
  background-color: var(--mauve-6);
  box-shadow: 0 2px 10px var(--black-a4);
  font-family: 'IBM Plex Sans';
`]))),a=(0,c.iv)(f||(f=b()([`
  margin-top: 1px;
  padding: 24px 0;
  border-bottom: 1px solid var(--bds-gray-ele-border);
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--mauve-12);
  }
`]))),M=(0,c.iv)(u||(u=b()([`
  display: flex;
`]))),Z=(0,c.iv)(E||(E=b()([`
  font-family: inherit;
  background-color: transparent;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: var(--bds-gray-t1-title);
  text-align: inherit;
  border-radius: 2px;
  margin: 0;
  padding: 0;
  &:hover {
    color: var(--bds-brand-700-normal);
    .moly-icon {
      color: var(--bds-brand-700-normal);
    }
  }
  &[data-state='open'] {
    .moly-collaspe-custom-icon,
    .moly-icon {
      transform: rotate(180deg);
    }
  }
`]))),S=(0,c.iv)(e||(e=b()([`
  overflow: hidden;
  font-size: 15px;
  &[data-state='open'] {
    animation: `,` 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state='closed'] {
    animation: `,` 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`])),i,m),U=(0,c.iv)(s||(s=b()([`
  padding-top: 12px;
  color: var(--bds-gray-t2);
  font-size: 16px;
  line-height: 24px;
`]))),I=(0,c.iv)(v||(v=b()([`
  margin-top: 24px;
`]))),K=n(36493),B=n(70696),R=n(85893),V=["children","className"],d=["children","className"],L=["className"],N=y.forwardRef(function(Q,_){var nn=Q.children,Y=Q.className,H=O()(Q,V),on=H.icon;return(0,R.jsx)(P.h4,{ref:_,className:M,children:(0,R.jsxs)(P.xz,T()(T()({className:(0,K.cn)(Z,Y,"transition-all focus-visible:outline-none ring-focus-default focus-visible:ring-[5px] ring-btn-default rounded-lg")},H),{},{children:[(0,R.jsx)("span",{className:o,children:nn}),on?(0,R.jsx)("div",{className:"moly-collaspe-custom-icon transition-all",children:on}):(0,R.jsx)(B.ArrowchevronDownIcon,{className:"moly-icon ".concat(x," transition-all")})]}))})}),$=y.forwardRef(function(Q,_){var nn=Q.children,Y=Q.className,H=O()(Q,d);return(0,R.jsx)(P.VY,T()(T()({className:(0,K.cn)(S,Y),ref:_},H),{},{children:(0,R.jsx)("div",{className:U,children:nn})}))}),G=y.forwardRef(function(Q,_){var nn=Q.className,Y=O()(Q,L),H=Y.items,on=Y.moreLink,sn=Y.onChange,dn=Y.type,cn=Y.collapsible,un=Y.defaultValue,hn=Y.value,mn=Y.icon,J=Y.moreText,fn=(0,y.useState)(!1),tn=r()(fn,2),X=tn[0],an=tn[1],vn=(0,y.useMemo)(function(){return X||H&&(H==null?void 0:H.length)<8?H:H==null?void 0:H.slice(0,8)},[X]);return(0,R.jsxs)(P.fC,{className:(0,K.cn)("moly-collapse",C,nn),type:dn||"single",onValueChange:sn,ref:_,collapsible:cn,defaultValue:un,value:hn,children:[vn&&vn.length>0&&vn.map(function(q){return(0,R.jsxs)(P.ck,{className:a,value:q.key,children:[(0,R.jsx)(N,{icon:mn,children:q==null?void 0:q.label}),(0,R.jsx)($,{children:q==null?void 0:q.children})]},q==null?void 0:q.key)}),H&&(H==null?void 0:H.length)>8&&!X&&(0,R.jsxs)(p.h,{className:I,variant:"primary",closeIcon:!0,size:"xlarge",onClick:function(){return an(!0)},children:[J!=null?J:"View more",(0,R.jsx)(B.ArrowchevronDownIcon,{})]}),on&&(0,R.jsx)(p.h,{className:I,variant:"primary",size:"xlarge",onClick:function(){return window.open(on)},children:J!=null?J:"View more"})]})});G.displayName=P.fC.displayName;var k=G},86411:function(F,g,n){n.d(g,{Z:function(){return o}});var j=n(5574),r=n.n(j),W=n(36493),T=n(67294),z=n(68400),O=n.n(z),p=n(93985),P,y=function(){return(0,p.hi)(P||(P=O()([`
  .moly-countdown {
    display: inline-flex;
    align-items: center;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &.full {
        flex-direction: column;
      }

      .group {
        display: flex;
        flex-direction: row;

        .num {
          margin-left: 2px;
        }
      }

      &:first-of-type {
        margin-left: 0 !important;
      }

      .num {
        text-align: center;
        font-family: 'IBM Plex Sans';
        font-weight: 600;
        background-size: contain;
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        overflow: hidden;

        &:first-of-type {
          margin-left: 0 !important;
        }

        .inner {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 4px 4px 0 0;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
      }

      .desc {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        color: #81858c;
      }
    }

    &.strong {
      .num {
        border: 1px solid #595d61;
        color: #F9FAFB;
        background: url('https://fh-static.bycsi.com/dark-dash-8c6da6523852ec4100a6eceae36d2ffc.svg')
          center no-repeat;
        background-color: #121214;

        &::after {
          content: '';
          background-color: transparent;
        }
      }

      .desc {
        color: #121214;
      }
    }

    .num {
      border: 1px solid rgba(56, 68, 82, 0.06);
      color: #121214;
      background: url('https://fh-static.bycsi.com/light-dash-ffacc8945fd5a333a45bca6062a711af.svg')
        center no-repeat;
      background-color: #f3f5f7;

      &::after {
        content: '';
        background-color: white;
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0;
        bottom: 0;
        z-index: 1;
      }
    }

    &.xsmall {
      .item {
        margin-left: 8px;
      }

      .num {
        font-size: 14px;
        line-height: 20px;
        min-width: 24px;
        height: 20px;
        border-radius: 2px;
        margin-left: 8px;
        background-image: unset;
        border-width: 0;

        &::before {
          border-radius: 4px 4px 0 0;
        }

        &::after {
          background-color: transparent;
        }

        &.three {
          min-width: 32px;
        }
      }

      .full {
        .num {
          width: 16px;
          min-width: 16px;
          margin-left: 2px;
        }

        .desc {
          font-size: 10px;
          line-height: 14px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 14px;
        line-height: 22px;
        margin-left: 2px;
      }
    }

    &.small {
      .item {
        margin-left: 8px;
      }

      .num {
        font-size: 16px;
        line-height: 24px;
        min-width: 32px;
        height: 24px;
        border-radius: 4px;
        margin-left: 8px;
        background-image: unset;
        border-width: 0;

        &::before {
          border-radius: 4px 4px 0 0;
        }

        &::after {
          background-color: transparent;
        }

        &.three {
          min-width: 40px;
        }
      }

      .full {
        .num {
          width: 18px;
          min-width: 18px;
          margin-left: 2px;
        }

        .desc {
          font-size: 10px;
          line-height: 14px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 14px;
        line-height: 22px;
        margin-left: 4px;
      }
    }

    &.middle {
      .item {
        margin-left: 12px;
      }

      .num {
        font-size: 24px;
        line-height: 32px;
        min-width: 48px;
        height: 32px;
        border-radius: 4px;
        margin-left: 12px;
        background-image: unset;
        border-width: 0;

        &::before {
          border-radius: 4px 4px 0 0;
        }

        &::after {
          background-color: transparent;
        }

        &.three {
          min-width: 64px;
        }
      }

      .full {
        .num {
          width: 26px;
          min-width: 26px;
          margin-left: 4px;
        }

        .desc {
          font-size: 12px;
          line-height: 18px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 18px;
        line-height: 26px;
        margin-left: 6px;
      }
    }

    &.large {
      .item {
        margin-left: 12px;
      }

      .num {
        font-size: 32px;
        line-height: 48px;
        min-width: 64px;
        height: 48px;
        border-radius: 6px;
        margin-left: 12px;

        &::before {
          border-radius: 6px 6px 0 0;
        }

        &.three {
          min-width: 80px;
        }
      }

      .full {
        .num {
          width: 36px;
          min-width: 36px;
          margin-left: 6px;
        }

        .desc {
          font-size: 14px;
          line-height: 22px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 24px;
        line-height: 32px;
        margin-left: 6px;
      }
    }

    &.xlarge {
      .item {
        margin-left: 20px;
      }

      .num {
        font-size: 48px;
        line-height: 64px;
        min-width: 88px;
        height: 64px;
        border-radius: 8px;
        margin-left: 20px;

        &::before {
          border-radius: 8px 8px 0 0;
        }

        &.three {
          min-width: 120px;
        }
      }

      .full {
        .num {
          width: 48px;
          min-width: 48px;
          margin-left: 8px;
        }

        .desc {
          font-size: 16px;
          line-height: 24px;
          margin-left: 0;
        }
      }

      .desc {
        font-size: 32px;
        line-height: 40px;
        margin-left: 8px;
        font-weight: 700;
      }
    }
  }

  html.moly-theme-dark {
    .moly-countdown {
      .num {
        border: 1px solid #595d61;
        color: white;
        background: url('https://fh-static.bycsi.com/dark-dash-8c6da6523852ec4100a6eceae36d2ffc.svg')
          center no-repeat;
        background-color: rgba(192, 210, 231, 0.12);


        &::after {
          content: '';
          background-color: #16171A;
        }
      }

      .full {
        .desc {
          color: #ADB1B8;
        }
      }



      &.strong {
        .num {
          border: 1px solid rgba(56, 68, 82, 0.06);
          color: #1E2023;
          background: url('https://fh-static.bycsi.com/light-dash-ffacc8945fd5a333a45bca6062a711af.svg')
            center no-repeat;
          background-color: #f3f5f7;

          &::after {
            content: '';
            background-color: white;
            position: absolute;
            width: 100%;
            height: 50%;
            left: 0;
            bottom: 0;
            z-index: 1;
          }
        }

        .desc {
          color: white;
        }

        .full {
          .desc {
            color: #ADB1B8;
          }
        }
      }

      &.xsmall {
        .item {
          margin-left: 8px;
        }

        .num {
          font-size: 14px;
          line-height: 20px;
          min-width: 24px;
          height: 20px;
          border-radius: 2px;
          margin-left: 8px;
          background-image: unset;
          border-width: 0;

          &::before {
            border-radius: 4px 4px 0 0;
          }

          &::after {
            background-color: transparent;
          }

          &.three {
            min-width: 32px;
          }
        }

        .full {
          .num {
            width: 16px;
            min-width: 16px;
            margin-left: 2px;
          }

          .desc {
            font-size: 10px;
            line-height: 14px;
            margin-left: 0;
          }
        }

        .desc {
          font-size: 14px;
          line-height: 22px;
          margin-left: 2px;
        }
      }

      &.small {
        .item {
          margin-left: 8px;
        }

        .num {
          font-size: 16px;
          line-height: 24px;
          min-width: 32px;
          height: 24px;
          border-radius: 4px;
          margin-left: 8px;
          background-image: unset;
          border-width: 0;

          &::before {
            border-radius: 4px 4px 0 0;
          }

          &::after {
            background-color: transparent;
          }

          &.three {
            min-width: 40px;
          }
        }

        .full {
          .num {
            width: 18px;
            min-width: 18px;
            margin-left: 2px;
          }

          .desc {
            font-size: 10px;
            line-height: 14px;
            margin-left: 0;
          }
        }

        .desc {
          font-size: 14px;
          line-height: 22px;
          margin-left: 4px;
        }
      }

      &.middle {
        .item {
          margin-left: 12px;
        }

        .num {
          font-size: 24px;
          line-height: 32px;
          min-width: 48px;
          height: 32px;
          border-radius: 4px;
          margin-left: 12px;
          background-image: unset;
          border-width: 0;

          &::before {
            border-radius: 4px 4px 0 0;
          }

          &::after {
            background-color: transparent;
          }

          &.three {
            min-width: 64px;
          }
        }

        .full {
          .num {
            width: 26px;
            min-width: 26px;
            margin-left: 4px;
          }

          .desc {
            font-size: 12px;
            line-height: 18px;
            margin-left: 0;
          }
        }

        .desc {
          font-size: 18px;
          line-height: 26px;
          margin-left: 6px;
        }
      }

      &.large {
        .item {
          margin-left: 12px;
        }

        .num {
          font-size: 32px;
          line-height: 48px;
          min-width: 64px;
          height: 48px;
          border-radius: 6px;
          margin-left: 12px;

          &::before {
            border-radius: 6px 6px 0 0;
          }

          &.three {
            min-width: 80px;
          }
        }

        .full {
          .num {
            width: 36px;
            min-width: 36px;
            margin-left: 6px;
          }

          .desc {
            font-size: 14px;
            line-height: 22px;
            margin-left: 0;
          }
        }

        .desc {
          font-size: 24px;
          line-height: 32px;
          margin-left: 6px;
        }
      }

      &.xlarge {
        .item {
          margin-left: 20px;
        }

        .num {
          font-size: 48px;
          line-height: 64px;
          min-width: 88px;
          height: 64px;
          border-radius: 8px;
          margin-left: 20px;

          &::before {
            border-radius: 8px 8px 0 0;
          }

          &.three {
            min-width: 120px;
          }
        }

        .full {
          .num {
            width: 48px;
            min-width: 48px;
            margin-left: 8px;
          }

          .desc {
            font-size: 16px;
            line-height: 24px;
            margin-left: 0;
          }
        }

        .desc {
          font-size: 32px;
          line-height: 40px;
          margin-left: 8px;
          font-weight: 700;
        }
      }
    }
  }
`])))},D=n(27484),b=n.n(D);function c(C){var a=(0,T.useRef)(C);return a.current=C,a}var l=function(a){return typeof a=="number"},A=function(a){if(!a)return 0;var M=b()(a).valueOf()-Date.now();return M<0?0:M},h=function(a){return{days:Math.floor(a/864e5),hours:Math.floor(a/36e5)%24,minutes:Math.floor(a/6e4)%60,seconds:Math.floor(a/1e3)%60,milliseconds:Math.floor(a)%1e3}},w=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},M=a||{},Z=M.leftTime,S=M.targetDate,U=M.interval,I=U===void 0?1e3:U,K=M.onEnd,B=(0,T.useMemo)(function(){return"leftTime"in a?l(Z)&&Z>0?Date.now()+Z:void 0:S},[Z,S]),R=(0,T.useState)(function(){return A(B)}),V=r()(R,2),d=V[0],L=V[1],N=c(K);(0,T.useEffect)(function(){if(!B){L(0);return}L(A(B));var G=setInterval(function(){var k=A(B);if(L(k),k===0){var Q;clearInterval(G),(Q=N.current)===null||Q===void 0||Q.call(N)}},I);return function(){return clearInterval(G)}},[B,I]);var $=(0,T.useMemo)(function(){return h(d)},[d]);return[d,$]},t=w,f=n(85893);y();var u=typeof window!="undefined",E={day:!0,hour:!0,minute:!0,second:!0},e=function(a){return a<10?"0".concat(a):"".concat(a)},s={day:"D",hour:"H",minute:"M",second:"S"},v={day:"DAY",hour:"HOUR",minute:"MINUTE",second:"SECOND"},i=function(a){var M=a.num,Z=a.mode,S=a.unit,U=Z==="easy",I=e(M);if(U)return(0,f.jsxs)("div",{className:"item",children:[(0,f.jsx)("div",{className:(0,W.cn)("num",{three:(I==null?void 0:I.length)>=3}),children:(0,f.jsx)("span",{className:"inner",children:I})}),(0,f.jsx)("span",{className:"desc",children:s[S]})]});var K=(I||"").split("");return(0,f.jsxs)("div",{className:(0,W.cn)("item","full"),children:[(0,f.jsx)("div",{className:"group",children:K.map(function(B,R){return(0,f.jsx)("span",{className:"num",children:(0,f.jsx)("span",{className:"inner",children:B})},R)})}),(0,f.jsx)("span",{className:"desc",children:v[S]})]})},m=function(a){var M=a.targetTimestamp,Z=a.className,S=a.strong,U=a.size,I=a.onEnd,K=a.display,B=K===void 0?E:K,R=a.mode,V=R===void 0?"easy":R,d=t({targetDate:M,onEnd:I}),L=r()(d,2),N=L[1],$=N.days,G=N.hours,k=N.minutes,Q=N.seconds;return u?(0,f.jsxs)("div",{className:(0,W.cn)("moly-countdown","".concat(U||"middle"),Z,{strong:S}),children:[B!=null&&B.day?(0,f.jsx)(i,{num:$,mode:V,unit:"day"}):null,B!=null&&B.hour?(0,f.jsx)(i,{num:G,mode:V,unit:"hour"}):null,B!=null&&B.minute?(0,f.jsx)(i,{num:k,mode:V,unit:"minute"}):null,B!=null&&B.second?(0,f.jsx)(i,{num:Q,mode:V,unit:"second"}):null]}):(0,f.jsx)("div",{className:(0,W.cn)("moly-countdown",Z)})},x=(0,T.memo)(m),o=x},97167:function(F,g,n){var j=n(32538);g.Z=j.Z},91473:function(F,g,n){var j=n(93175);g.Z=j.Z},2218:function(F,g,n){var j=n(47322);g.ZP=j.E},96596:function(F,g,n){n.d(g,{Z:function(){return Z}});var j=n(97857),r=n.n(j),W=n(9783),T=n.n(W),z=n(5574),O=n.n(z),p=n(13769),P=n.n(p),y=n(68400),D=n.n(y),b=n(22641),c=n(65090),l=n(81396),A=n(36493),h=n(93985),w=n(71032),t=n(67294),f=n(5968),u=n(85893),E=function(){return(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",children:(0,u.jsx)("path",{fill:"currentColor",d:"M16 1.333c.508 0 .972.288 1.196.743l3.81 7.72 8.52 1.245a1.334 1.334 0 0 1 .738 2.274L24.1 19.32l1.455 8.482a1.333 1.333 0 0 1-1.935 1.406L16 25.2l-7.619 4.007A1.333 1.333 0 0 1 6.447 27.8L7.9 19.32l-6.164-6.004a1.333 1.333 0 0 1 .738-2.274l8.52-1.246 3.81-7.719a1.333 1.333 0 0 1 1.196-.743Z"})})},e=E,s=function(){return(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",children:(0,u.jsx)("path",{d:"M12 1C12.3806 1 12.7283 1.21607 12.8967 1.55738L15.7543 7.34647L22.1447 8.28051C22.5212 8.33555 22.8339 8.59956 22.9513 8.96157C23.0687 9.32358 22.9704 9.72083 22.6978 9.98636L18.0746 14.4894L19.1656 20.851C19.23 21.2261 19.0757 21.6053 18.7678 21.8291C18.4598 22.0528 18.0515 22.0823 17.7146 21.9051L12 18.8998L6.28548 21.9051C5.94856 22.0823 5.54027 22.0528 5.2323 21.8291C4.92432 21.6053 4.77007 21.2261 4.83442 20.851L5.92551 14.4894L1.3023 9.98636C1.02968 9.72083 0.931405 9.32358 1.04878 8.96157C1.16616 8.59956 1.47884 8.33555 1.8554 8.28051L8.24577 7.34647L11.1033 1.55738C11.2718 1.21607 11.6194 1 12 1Z",fill:"currentColor"})})},v=s,i=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5,I=Array.from({length:U},function(B,R){return(R+1).toString()}),K=Array.from({length:U},function(B,R){return(R+.5).toString()});return{integerArray:I,hoverArray:K}},m=["size","theme","disabled","direction","className","rootClassName","style","tooltips","showToolTips","character","onHoverChange"],x,o="moly-rate",C=(0,h.hi)(x||(x=D()([`
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
`]))),a=t.forwardRef(function(S,U){var I,K=S.size,B=K===void 0?"medium":K,R=S.theme,V=S.disabled,d=S.direction,L=S.className,N=S.rootClassName,$=S.style,G=$===void 0?{}:$,k=S.tooltips,Q=S.showToolTips,_=Q===void 0?!1:Q,nn=S.character,Y=nn===void 0?B==="medium"?(0,u.jsx)(e,{}):(0,u.jsx)(v,{}):nn,H=S.onHoverChange,on=P()(S,m),sn=(0,b.S)(),dn=(0,c.F)(),cn=O()(dn,1),un=cn[0],hn=(0,t.useState)(k),mn=O()(hn,2),J=mn[0],fn=mn[1],tn=i(S==null?void 0:S.count),X=tn.integerArray,an=tn.hoverArray;(0,t.useEffect)(function(){(0,l.VG)("rate")},[]),(0,t.useEffect)(function(){fn(k)},[k]);var vn=function(ln,en){var gn=en.index;return k||_?(0,u.jsx)(f.default,{title:J==null?void 0:J[gn],trigger:"hover",placement:"top",children:ln}):ln},q=function(ln){_&&!k&&(J!=null&&J.includes(ln==null?void 0:ln.toString())||fn(J!=null&&J.includes("1")?an:X)),H==null||H(ln)};return(0,u.jsx)(w.Z,r()(r()({ref:U,character:Y,characterRender:vn,disabled:V,direction:d||(sn?"rtl":"ltr")},on),{},{className:(0,A.cn)(L,N,"".concat(o,"-").concat(B),"".concat(o,"-").concat(R||un),(I={},T()(I,"".concat(o,"-disabled"),V),T()(I,"".concat(o,"-rtl"),d==="rtl"),I)),onHoverChange:q,prefixCls:o,style:G}))}),M=a,Z=M},80315:function(F,g,n){var j=n(97143);g.Z=j.o},8530:function(F,g,n){n.d(g,{Z:function(){return D}});var j=n(97857),r=n.n(j),W=n(36493),T=n(19492),z=n(85893),O=function(c){var l=(0,T.j)("",{variants:{size:{large:"h-16 w-16",medium:"h-12 w-12",small:"h-8 w-8"}},defaultVariants:{size:"medium"}}),A=c!=null?c:{},h=A.className,w=A.size,t=w===void 0?"medium":w;return(0,z.jsx)("div",r()({className:(0,W.cn)("animate-pulse rounded-full bg-base-bds-trans-hover",l({size:t}),h)},c))},p=function(c){var l=c!=null?c:{},A=l.className,h=l.size,w=h===void 0?"medium":h,t=(0,T.j)("",{variants:{size:{"xx-large":"h-12","x-large":"h-8",large:"h-6",medium:"h-[18px]",small:"h-3.5"}},defaultVariants:{size:"medium"}});return(0,z.jsx)("div",r()({className:(0,W.cn)("animate-pulse rounded-lg w-full bg-base-bds-trans-hover",t({size:w}),A)},c))},P=function(c){var l=c!=null?c:{},A=l.size,h=A===void 0?"medium":A,w=l.row,t=w===void 0?6:w;return(0,z.jsx)("div",{className:"space-y-4",children:new Array(Number(t)).fill(void 0).map(function(f,u){return(0,z.jsx)(p,{size:h,style:{width:"".concat(Math.floor(Math.random()*(100-50)+50),"%")}},u)})})},y={Ball:O,Bar:p,Bars:P},D=y},64707:function(F,g,n){n.d(g,{Z:function(){return u}});var j=n(97857),r=n.n(j),W=n(5574),T=n.n(W),z=n(65090),O=n(36493),p=n(67294),P=n(68400),y=n.n(P),D=n(93985),b,c,l="animation: bybit 1s linear infinite;",A=function(e,s,v,i){return"@keyframes ".concat(e,` {
      0%,
      100% {
        transform: translate(`).concat(s,", ").concat(v,`);
        `).concat(l,`
      }

      50% {
        transform: translate(`).concat(s,", ").concat(i,`);
        `).concat(l,`
      }
    }`)},h=(0,D.iv)(b||(b=y()([`
  `,`
`])),[A("moly-spin","0","-25%","25%"),A("moly-spin-1","19%","-25%","25%"),A("moly-spin-2","45%","-25%","25%"),A("moly-spin-3","70%","-50%","0%"),A("moly-spin-4","80%","-25%","25%")].join(`
`)),w=(0,D.iv)(c||(c=y()([`
  color: var(--bds-gray-t1-title);
`]))),t=n(85893),f=function(e){var s=(0,z.F)(),v=T()(s,1),i=v[0],m=i==="light"?"#000":"#fff",x=typeof e.size=="number"?e.size:64;e.size==="small"?x=48:e.size==="large"&&(x=96);var o=e.spinning!==!1,C=e.children!==void 0,a={display:"inline-block",animationDuration:"1s",animationIterationCount:"infinite",animationFillMode:"both"},M=function(R){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:x,height:x,viewBox:"0 0 54 15",fill:"none",style:r()({display:"inline",padding:4,transitionProperty:"opacity",transitionDuration:"0.4s",opacity:o?"1":"0"},R||{}),children:[(0,t.jsx)("path",{d:"M6.03751 14.9988H0V0.455078H5.79357C8.60948 0.455078 10.2508 2.04847 10.2508 4.54014C10.2508 6.15492 9.19812 7.1949 8.46895 7.54245C9.3413 7.95149 10.4549 8.87117 10.4549 10.8121C10.4549 13.5284 8.60948 14.9988 6.03751 14.9988ZM5.57084 2.98686H2.81591V6.33939H5.57084C6.76668 6.33939 7.43486 5.66567 7.43486 4.66312C7.43486 3.66324 6.76668 2.98686 5.57084 2.98686ZM5.7538 8.89256H2.81591V12.467H5.7538C7.02918 12.467 7.63903 11.6489 7.63903 10.6704C7.63903 9.68925 7.02918 8.89256 5.7538 8.89256Z",fill:m,style:r()(r()({},a),{},{animationName:"moly-spin",animationDelay:"50ms"})}),(0,t.jsx)("path",{d:"M8.04326 9.03425V14.9988H5.24856V9.03425L0.91333 0.455078H3.97318L6.66713 6.318L9.3213 0.455078H12.3785L8.04326 9.03425Z",fill:m,transform:"translate(11, 0)",style:r()(r()({},a),{},{animationName:"moly-spin-1",animationDelay:"100ms"})}),(0,t.jsx)("path",{d:"M6.03751 14.9988H0V0.455078H5.79357C8.60948 0.455078 10.2508 2.04847 10.2508 4.54014C10.2508 6.15492 9.19812 7.1949 8.46895 7.54245C9.3413 7.95149 10.4549 8.87117 10.4549 10.8121C10.4549 13.5284 8.60948 14.9988 6.03751 14.9988ZM5.57084 2.98686H2.81591V6.33939H5.57084C6.76668 6.33939 7.43486 5.66567 7.43486 4.66312C7.43486 3.66324 6.76668 2.98686 5.57084 2.98686ZM5.7538 8.89256H2.81591V12.467H5.7538C7.02918 12.467 7.63903 11.6489 7.63903 10.6704C7.63903 9.68925 7.02918 8.89256 5.7538 8.89256Z",fill:m,transform:"translate(25 0)",style:r()(r()({},a),{},{animationName:"moly-spin-2",animationDelay:"150ms"})}),(0,t.jsx)("rect",{width:"3",height:"15",transform:"translate(38 -5)",fill:"#F7A600",style:r()(r()({},a),{},{animationName:"moly-spin-3",animationDelay:"200ms"})}),(0,t.jsx)("path",{d:"M6.74998 2.98686V14.9988H3.93407V2.98686H0.16626V0.455078H10.5178V2.98686H6.74998Z",transform:"translate(43 0)",fill:m,style:r()(r()({},a),{},{animationName:"moly-spin-4",animationDelay:"250ms"})})]})},Z=e.indicator||M(),S="absolute w-[100%] h-[100%] left-0 top-0 overflow-hidden",U=i==="light"?"bg-white opacity-60":"bg-black opacity-50",I=w,K="text-[14px]";return e.indicator===void 0&&(K+=" translate-y-[-14px]"),e.size==="small"&&(K="text-[12px]",e.indicator===void 0&&(K+=" translate-y-[-12px]")),e.size==="large"&&(K="text-[18px]",e.indicator===void 0&&(K+=" translate-y-[-18px]")),C?(0,t.jsxs)("div",{className:(0,O.cn)(h,e.wrapperClassName||"","relative overflow-hidden"),children:[e.children,o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,O.cn)(S,U)}),(0,t.jsxs)("div",{className:(0,O.cn)(S,"grid","justify-center content-center"),children:[Z,e.tip?(0,t.jsx)("div",{className:(0,O.cn)("text-center",I,K),children:e.tip}):null]})]}):null]}):Z},u=f},81836:function(F,g,n){n.d(g,{C:function(){return V},Z:function(){return R}});var j=n(5574),r=n.n(j),W=n(9783),T=n.n(W),z=n(74094),O=n(27060),p=n(97857),P=n.n(p),y=n(13769),D=n.n(y),b=n(67294),c=n(36493),l=n(85893),A=["className","height"],h=["className"],w=["className"],t=["className"],f=["className"],u=["className"],E=["className"],e=["className"],s=b.forwardRef(function(d,L){var N=d.className,$=d.height,G=D()(d,A);return(0,l.jsx)("div",{className:"w-full h-full overflow-auto",style:{height:$},children:(0,l.jsx)("table",P()({ref:L,className:(0,c.cn)("moly-table w-full caption-bottom",N)},G))})});s.displayName="Table";var v=b.forwardRef(function(d,L){var N=d.className,$=D()(d,h);return(0,l.jsx)("thead",P()({ref:L,className:(0,c.cn)(N)},$))});v.displayName="TableHeader";var i=b.forwardRef(function(d,L){var N=d.className,$=D()(d,w);return(0,l.jsx)("tbody",P()({ref:L,className:(0,c.cn)("[&_tr:last-child]:border-0",N)},$))});i.displayName="TableBody";var m=b.forwardRef(function(d,L){var N=d.className,$=D()(d,t);return(0,l.jsx)("tfoot",P()({ref:L,className:(0,c.cn)("bg-primary font-medium text-primary-foreground",N)},$))});m.displayName="TableFooter";var x=b.forwardRef(function(d,L){var N=d.className,$=D()(d,f);return(0,l.jsx)("tr",P()({ref:L,className:(0,c.cn)("transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",N)},$))});x.displayName="TableRow";var o=b.forwardRef(function(d,L){var N=d.className,$=D()(d,u);return(0,l.jsx)("th",P()({ref:L,className:(0,c.cn)("text-left align-middle text-muted-foreground [&:has([role=checkbox])]:pr-0",N)},$))});o.displayName="TableHead";var C=b.forwardRef(function(d,L){var N=d.className,$=D()(d,E);return(0,l.jsx)("td",P()({ref:L,className:(0,c.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",N)},$))});C.displayName="TableCell";var a=b.forwardRef(function(d,L){var N=d.className,$=D()(d,e);return(0,l.jsx)("caption",P()({ref:L,className:(0,c.cn)("mt-4 text-sm text-muted-foreground",N)},$))});a.displayName="TableCaption";var M=n(91473),Z=n(64707),S,U=function(d){return d.NETWORK="NETWORK",d.SYSTEM="SYSTEM",d}({}),I=(S={},T()(S,U.SYSTEM,{img:"//s1.bycsi.com/bybit/deadpool/image-c1e7653506224aca8575be2d20df897a.png",text:"System error. Please try again later."}),T()(S,U.NETWORK,{img:"//s1.bycsi.com/bybit/deadpool/image-0ad9ab6dd3d445d5a32a443f630aa983.png",text:"Network error. Please try again later."}),S);function K(d){var L,N=d.columns,$=d.data,G=d.height,k=G===void 0?"auto":G,Q=d.loading,_=Q===void 0?!1:Q,nn=d.isLite,Y=nn===void 0?!1:nn,H=d.error,on=d.rowSplitStyle,sn=on===void 0?"normal":on,dn=d.cellSpaceStyle,cn=dn===void 0?"normal":dn,un=d.showRowSelection,hn=un===void 0?!0:un,mn=d.className,J=d.emptyText,fn=J===void 0?"No Records":J,tn=d.errorText,X=d.onRowClick,an=b.useState({}),vn=r()(an,2),q=vn[0],yn=vn[1],ln=(0,z.b7)({data:$,columns:N,getCoreRowModel:(0,O.sC)(),state:{expanded:q},onExpandedChange:yn,getExpandedRowModel:(0,O.rV)()});return(0,l.jsxs)(s,{className:(0,c.cn)("font-IBM",mn),height:k,children:[(0,l.jsx)(v,{children:ln.getHeaderGroups().map(function(en,gn){return(0,l.jsx)(x,{children:en.headers.map(function(rn,xn){return(0,l.jsx)(o,{className:(0,c.cn)("p-[12px] gap-[8px]","font-IBM","text-[12px]","font-[400]","leading-bds-line-height-12","text-base-bds-gray-t2",Y?"border-solid border-b border-base-bds-gray-ele-border":"bg-base-bds-gray-bg-edge"),children:rn.isPlaceholder?null:(0,z.ie)(rn.column.columnDef.header,rn.getContext())},(rn==null?void 0:rn.id)||xn)})},(en==null?void 0:en.id)||gn)})}),(0,l.jsxs)(i,{className:"relative",children:[H?(0,l.jsx)(x,{children:(0,l.jsx)(C,{colSpan:N.length,className:"w-full",children:(0,l.jsx)("div",{className:"h-[300px] pt-[71px] mx-auto flex flex-col items-center gap-[16px]",children:(0,l.jsx)(M.Z,{title:"",subTitle:"".concat(tn||I[H.type].text," (Code: ").concat(H.code,")"),status:H.type===U.NETWORK?"networkError":"databaseError"})})})}):(L=ln.getRowModel().rows)!==null&&L!==void 0&&L.length?ln.getRowModel().rows.map(function(en,gn){return(0,l.jsxs)(b.Fragment,{children:[(0,l.jsx)(x,{"data-state":en.getIsSelected()&&"selected",className:(0,c.cn)("transition",hn?"hover:bg-base-bds-trans-hover":"hover:bg-inherit",X?"cursor-pointer":""),onClick:function(xn){return X==null?void 0:X(xn,en.id)},children:en.getVisibleCells().map(function(rn,xn){return(0,l.jsx)(C,{className:(0,c.cn)("px-[12px]",cn==="normal"&&"py-[12px]",cn==="small"&&"py-[8px]",cn==="large"&&"py-[16px]","font-IBM","text-[14px]","font-[500]","leading-bds-line-height-14","text-base-bds-gray-t1-title",sn!=="none"&&"border-solid border-b",sn==="strong"?"border-base-bds-gray-ele-border":"border-base-bds-gray-ele-line"),children:(0,z.ie)(rn.column.columnDef.cell,rn.getContext())},(rn==null?void 0:rn.id)||xn)})}),!!en.getIsExpanded()&&(0,l.jsx)(x,{children:(0,l.jsx)(C,{colSpan:N.length,className:(0,c.cn)("px-[40px] py-[16px]","font-IBM","text-base-bds-gray-t1-title","bg-base-bds-gray-bg-edge"),children:en.getValue("extend")})})]},(en==null?void 0:en.id)||gn)}):(0,l.jsx)(x,{children:(0,l.jsx)(C,{colSpan:N.length,className:"w-full",children:(0,l.jsx)("div",{className:"h-[300px] pt-[71px] mx-auto flex flex-col items-center gap-[16px]",children:(0,l.jsx)(M.Z,{title:"",subTitle:fn})})})}),_&&(0,l.jsx)(x,{children:(0,l.jsx)(C,{colSpan:N.length,className:"w-full",children:(0,l.jsx)("div",{className:(0,c.cn)("absolute left-0 top-0 w-full h-full opacity-90 bg-base-bds-gray-bg-card flex justify-center items-center"),children:(0,l.jsx)(Z.Z,{})})})})]})]})}var B=K,R=B,V=U},44593:function(F,g,n){n.d(g,{Z:function(){return A}});var j=n(97857),r=n.n(j),W=n(5574),T=n.n(W),z=n(13769),O=n.n(z),p=n(36493),P=n(19492),y=n(67294),D=n(85893),b=["showCount","className","label","variant","placeholder","value","defaultValue","errorMessage","maxLength","onChange"],c=(0,P.j)(["flex min-h-[82px] w-full rounded-md bg-[#f3f5f7] px-[16px] py-[16px] text-sm border border-[#F3F5F7]","box-border  placeholder:text-[#ADB1B8]","bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line","disabled:cursor-not-allowed disabled:opacity-50 disabled:border-bds-input-disabled-border disabled:bg-base-bds-gray-ele-edge"],{variants:{variant:{default:[""],readonly:[],error:["border-[#EF454A]","focus-visible:border-[#EF454A]","hover:border-[#EF454A]"]}},defaultVariants:{variant:"default"}}),l=y.forwardRef(function(h,w){var t=h.showCount,f=t===void 0?!0:t,u=h.className,E=h.label,e=E===void 0?"Input Label":E,s=h.variant,v=s===void 0?"default":s,i=h.placeholder,m=i===void 0?"Please input content":i,x=h.value,o=x===void 0?"":x,C=h.defaultValue,a=C===void 0?"":C,M=h.errorMessage,Z=h.maxLength,S=Z===void 0?100:Z,U=h.onChange,I=O()(h,b),K=(0,y.useState)(o||a),B=T()(K,2),R=B[0],V=B[1],d=(0,y.useState)(a.length||0),L=T()(d,2),N=L[0],$=L[1],G=v==="readonly",k=v==="error";return(0,D.jsxs)(D.Fragment,{children:[e&&(0,D.jsx)("p",{className:"mb-[8px] text-[var(--bds-gray-t2)] text-sm",children:e}),(0,D.jsx)("textarea",r()({className:(0,p.cn)("moly-textarea","transition-all ease-in-out duration-100",{"hover:outline-none hover:border-[#F0960E] hover:shadow-input-shadow focus:shadow-input-shadow focus:outline-none focus:border focus:border-solid focus:border-brandColor-bds-brand-900-focus focus-visible:outline-none focus-visible:border focus-visible:border-solid focus-visible:border-brandColor-bds-brand-900-focus focus-visible:shadow-input-shadow":!I.disabled,"border-bds-input-disabled-border bg-base-bds-gray-ele-edge":I.disabled,"hover:shadow-error-shadow focus:shadow-error-shadow focus-within:shadow-error-shadow focus-visible:shadow-error-shadow":k&&!I.disabled},c({variant:v,className:u})),ref:w,placeholder:m,maxLength:S,readOnly:G,value:R,onChange:function(_){V(_.target.value),$(_.target.value.length),U==null||U(_)}},I)),f&&!k&&!G&&S&&(0,D.jsx)("p",{className:"mt-[8px] text-[var(--bds-gray-t2)] text-sm text-right",children:"".concat(N,"/").concat(S)}),k&&M&&(0,D.jsx)("p",{className:"mt-[8px] text-[var(--bds-red-700-normal)] text-sm",children:M})]})});l.displayName="Textarea";var A=l},79700:function(F,g,n){n.d(g,{b:function(){return c}});var j=n(5574),r=n.n(j),W=n(88133),T=n(36493),z=n(70696),O=n(19492),p=n(86010),P=n(67294),y=n(85893),D=(0,O.j)(["flex flex-col w-full pl-[12px] rtl:pl-[8px] pr-[8px] rtl:pr-[12px] py-[8px] text-bds-font-size-14 leading-bds-line-height-14"],{variants:{variant:{info:["bg-base-bds-gray-ele-line"],remind:["bg-brandColor-bds-brand-100-bg"],warn:["bg-redColor-bds-red-100-bg"]}},defaultVariants:{variant:"info"}}),b=function(A){var h=null;return A==="info"?h=(0,y.jsx)(z.HelpIcon,{className:"text-base-bds-gray-t2"}):A==="remind"?h=(0,y.jsx)(z.AlertCircleSolidIcon,{className:"text-brandColor-bds-brand-700-normal"}):h=(0,y.jsx)(z.AlertTriangleSolidIcon,{className:"text-redColor-bds-red-700-normal"}),h},c=function(A){var h=A.showIcon,w=h===void 0?!0:h,t=A.icon,f=A.className,u=A.variant,E=u===void 0?"info":u,e=A.message,s=A.description,v=A.closeIcon,i=v===void 0?!1:v,m=A.banner,x=m===void 0?!1:m,o=A.onClose,C=P.useState(!1),a=r()(C,2),M=a[0],Z=a[1];if(M)return null;var S=function(){Z(!0),o&&o()},U=function(){return(0,y.jsx)(W.Z,{onClick:S,size:"small",children:(0,y.jsx)(z.CloseIcon,{})})},I=w?t:void 0,K=I||b(E),B=i===!0?U():i,R=x?"pl-[16px] pr-[12px] rtl:pl-[12px] rtl:pr-[16px]":"rounded-8",V=e&&s?"font-semibold":void 0,d=s?"mb-[4px]":void 0;return(0,y.jsxs)("div",{className:(0,T.cn)(D({className:f,variant:E}),R),children:[(w||e||i)&&(0,y.jsxs)("div",{className:(0,p.Z)("flex w-full justify-between",d),children:[w&&(0,y.jsx)("div",{className:"flex items-center h-bds-height-14 mr-[8px] rtl:ml-[8px] rtl:mr-0",children:K}),e&&(0,y.jsx)("div",{className:(0,p.Z)("grow",V),children:e}),i&&(0,y.jsx)("div",{className:"flex items-center h-bds-height-14 ml-[8px] rtl:mr-[8px] rtl:ml-0",children:B})]}),s&&(0,y.jsx)("div",{className:"",children:s})]})}},47322:function(F,g,n){n.d(g,{E:function(){return u},p:function(){return f}});var j=n(97857),r=n.n(j),W=n(5574),T=n.n(W),z=n(13769),O=n.n(z),p=n(67294),P=n(36493);function y(E){return new Promise(function(e,s){var v=new Image;v.src=E,v.onload=function(){e(v)},v.onerror=s})}var D=n(85893),b=["src","blur_src","style","onLoad"];function c(E){var e=E.src,s=E.blur_src,v=E.style,i=E.onLoad,m=O()(E,b),x=(0,p.useState)(!0),o=T()(x,2),C=o[0],a=o[1];(0,p.useEffect)(function(){y(e).then(function(){return a(!1)}).catch(function(Z){console.error("load original image failed: ".concat(e,", ").concat(Z))})},[e]);var M=(0,p.useMemo)(function(){return r()({filter:"blur(".concat(C?8:0,"px)"),transition:"filter 0.5s ease-in-out"},v)},[C,v]);return(0,D.jsx)("img",r()({srcSet:C?s:e,style:M,onLoad:C?void 0:i},m))}var l=n(54077);function A(E){if(!E)return Promise.resolve(!1);var e=new Promise(function(s){var v=document.createElement("img");v.onerror=function(){return s(!1)},v.onload=function(){return s(!0)},v.srcset=E});return e}var h=n(48876),w=["src","format","resize","quality","progressive","loading","s3_process_disabled","fallback_to_origin_src"],t=p.createContext({}),f=t.Provider,u=(0,p.memo)(function(e){var s=e.src,v=e.format,i=v===void 0?"auto":v,m=e.resize,x=e.quality,o=e.progressive,C=e.loading,a=e.s3_process_disabled,M=e.fallback_to_origin_src,Z=M===void 0?!0:M,S=O()(e,w),U=(0,p.useState)(!1),I=T()(U,2),K=I[0],B=I[1],R=(0,p.useContext)(t),V=!(0,h.eJ)(s)||(0,P.KX)([a,R.s3_process_disabled],!1),d=(0,P.KX)([C,R.loading],"lazy"),L=V?s:(0,l.P)(s,{format:i,resize:m,quality:x}),N=o&&!V;if((0,p.useEffect)(function(){A(L).then(function(G){G||(console.warn("[invalid] image: ".concat(s)),Z&&B(!0))}).catch(function(G){console.warn("detect image valid error: ".concat(G)),B(!0)})},[]),K)return(0,D.jsx)("img",r()({src:s,loading:d},S));if(N){var $=(0,l.S)(s,{format:i,resize:m,quality:x,thumbnail:!0});return(0,D.jsx)(c,r()({src:L,blur_src:$,loading:d},S))}return(0,D.jsx)("img",r()({srcSet:L,loading:d},S))})},98002:function(F,g,n){n.d(g,{H9:function(){return W},R$:function(){return p},ZB:function(){return r},bF:function(){return z},e5:function(){return T},nn:function(){return O}});var j=null,r=["png","jpg","jpeg","webp","avif"];function W(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"avifok";return`function addClass(className) {
    document.documentElement.classList.add(className);
   }
   var avif = new Image();
   avif.src =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
   avif.onload = function () {
    addClass("`.concat(P,`");
   };`)}function T(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"webpok";return`
  var isWebp = document.createElement("canvas").toDataURL("image/webp").includes("data:image/webp");
  if(isWebp) {
    document.documentElement.classList.add("`.concat(P,`");
  }
  `)}function z(){return new Promise(function(P,y){var D=document.createElement("script");D.innerHTML=`
    `.concat(W(),`
    `).concat(T(),`
    `),D.onerror=function(){y(!1)},document.body.appendChild(D),setTimeout(function(){P(!0)},1)})}function O(){return typeof window=="undefined"?!1:document.documentElement.classList.contains("avifok")}function p(){return typeof window=="undefined"?!0:document.documentElement.classList.contains("webpok")}},54077:function(F,g,n){n.d(g,{P:function(){return w},S:function(){return A}});var j=n(97857),r=n.n(j),W=n(98002);function T(t){if(t){var f=(0,W.R$)(),u=(0,W.nn)();if(t==="auto")return u?"avif":f?"webp":void 0;if(t==="avif")return u?"avif":void 0;if(t==="webp")return f?"webp":void 0;if(W.ZB.includes(t))return t;console.error("\u4E0D\u652F\u6301\u7684\u56FE\u7247\u683C\u5F0F\uFF1A".concat(t))}}var z=80,O=new Map([["webp",80],["avif",60]]);function p(t,f){if(typeof t=="number"){if(t>0&&t<=100)return t;console.warn("quality should be larger than 0 and less than or equal to 100, but got ".concat(t))}var u=T(f);if(u)return O.get(u)||z}var P=n(13769),y=n.n(P),D=["width","height","ratio"];function b(t){if(t){var f=t.width,u=t.height,E=t.ratio,e=E===void 0?1:E,s=y()(t,D),v=r()({},s),i=Number(f),m=Number(u);return isNaN(i)||(v.width=Math.round(i*e)),isNaN(m)||(v.height=Math.round(m*e)),Object.keys(v).length>0?v:void 0}}function c(t){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.1;if(t){var u=r()({},t),E=u.width,e=u.height;return E&&(u.width=Number(E)*f),e&&(u.height=Number(e)*f),b(t)}}var l=n(48876);function A(t,f){if(!t)return"";if(!(0,l.eJ)(t))return t;var u=f.resize,E=f.format,e=f.quality,s=f.thumbnail,v=T(E),i=p(e,E),m=s?c(u):b(u),x=(0,l.ZQ)(t),o=new URLSearchParams;if(v&&o.set("format",v),i&&o.set("quality",String(i)),m){var C=[];Object.keys(m).forEach(function(a){var M=m[a];M&&C.push("".concat(a,"/").concat(M))}),C.length>0&&o.set("resize",C.join(","))}return"".concat(x,"?").concat(o.toString())}var h=[1,1.5,2,2.5,3];function w(t,f){var u=[];return h.forEach(function(E){var e=A(t,r()(r()({},f),{},{resize:r()(r()({},f.resize),{},{ratio:E})}));u.push("".concat(e," ").concat(E,"x"))}),u.join(", ")}},48876:function(F,g,n){n.d(g,{ZQ:function(){return z},eJ:function(){return W}});var j=!1,r=new Map([["https://fh-static.bycsi.com","/common-static/fhs"],["https://t1.bycsi.com","/bycsi-root"],["https://s1.bycsi.com","/bycsi-root"]]);function W(O){try{var p=new URL(O);return r.has(p.origin)}catch(P){return!1}}function T(){return typeof window=="undefined"?!1:window.origin.includes("moly.")}function z(O){if(!W(O))return O;var p=O;return r.forEach(function(P,y){O.startsWith(y)&&(p=O.replace(y,P),(j||T())&&(p="https://www.bybit.com"+p))}),p}},31081:function(F,g,n){n.r(g),n.d(g,{Alert:function(){return j.b},Badge:function(){return r.Z},BoxedSelect:function(){return W.Z},Breadcrumb:function(){return T.Z},Button:function(){return z.Z},Checkbox:function(){return O.Z},Collapse:function(){return p.Z},Countdown:function(){return P.Z},DatePicker:function(){return y.M},DateRangePicker:function(){return D.D},Divider:function(){return b.Z},Empty:function(){return c.Z},IconButton:function(){return l.Z},Image:function(){return A.ZP},ImageProvider:function(){return h.p},Input:function(){return f.Z},Modal:function(){return u.Z},NotificationContainer:function(){return E.m},Pagination:function(){return s.Z},Popover:function(){return v.Z},Radio:function(){return i.Z},Rate:function(){return m.Z},Result:function(){return x.Z},Search:function(){return o.Z},Select:function(){return C.Z},Skeleton:function(){return a.Z},Slider:function(){return M.Z},Space:function(){return Z.Z},Spin:function(){return S.Z},Switch:function(){return U.Z},Table:function(){return I.Z},TableErrorEnum:function(){return I.C},Tabs:function(){return K.Z},Tag:function(){return B.V},Text:function(){return R.x},TextLink:function(){return V.h},Textarea:function(){return d.Z},ToastContainer:function(){return L.I},Tooltip:function(){return $.Z},detectAvifScript:function(){return w.H9},detectWebpScript:function(){return w.e5},getProcessedSrcset:function(){return t.P},getProcessedUrl:function(){return t.S},loadDetectScript:function(){return w.bF},useNotification:function(){return e.lm},useToast:function(){return N.pm}});var j=n(79700),r=n(74062),W=n(81376),T=n(26777),z=n(7935),O=n(12065),p=n(17512),P=n(86411),y=n(36760),D=n(21782),b=n(97167),c=n(91473),l=n(88133),A=n(2218),h=n(47322),w=n(98002),t=n(54077),f=n(73746),u=n(35488),E=n(14479),e=n(23272),s=n(65585),v=n(19257),i=n(55902),m=n(96596),x=n(63606),o=n(80315),C=n(97571),a=n(8530),M=n(69216),Z=n(521),S=n(64707),U=n(86855),I=n(81836),K=n(59250),B=n(27036),R=n(30501),V=n(82545),d=n(44593),L=n(70332),N=n(80820),$=n(73400)},60761:function(F,g,n){n.d(g,{bU:function(){return e},fC:function(){return E}});var j=n(87462),r=n(67294),W=n(36206),T=n(28771),z=n(25360),O=n(77342),p=n(57898),P=n(7546),y=n(75320);const D="Switch",[b,c]=(0,z.b)(D),[l,A]=b(D),h=(0,r.forwardRef)((s,v)=>{const L=s,{__scopeSwitch:i,name:m,checked:x,defaultChecked:o,required:C,disabled:a,value:M="on",onCheckedChange:Z}=L,S=bn(L,["__scopeSwitch","name","checked","defaultChecked","required","disabled","value","onCheckedChange"]),[U,I]=(0,r.useState)(null),K=(0,T.e)(v,N=>I(N)),B=(0,r.useRef)(!1),R=U?!!U.closest("form"):!0,[V=!1,d]=(0,O.T)({prop:x,defaultProp:o,onChange:Z});return(0,r.createElement)(l,{scope:i,checked:V,disabled:a},(0,r.createElement)(y.WV.button,(0,j.Z)({type:"button",role:"switch","aria-checked":V,"aria-required":C,"data-state":u(V),"data-disabled":a?"":void 0,disabled:a,value:M},S,{ref:K,onClick:(0,W.M)(s.onClick,N=>{d($=>!$),R&&(B.current=N.isPropagationStopped(),B.current||N.stopPropagation())})})),R&&(0,r.createElement)(f,{control:U,bubbles:!B.current,name:m,value:M,checked:V,required:C,disabled:a,style:{transform:"translateX(-100%)"}}))}),w="SwitchThumb",t=(0,r.forwardRef)((s,v)=>{const o=s,{__scopeSwitch:i}=o,m=bn(o,["__scopeSwitch"]),x=A(w,i);return(0,r.createElement)(y.WV.span,(0,j.Z)({"data-state":u(x.checked),"data-disabled":x.disabled?"":void 0},m,{ref:v}))}),f=s=>{const M=s,{control:v,checked:i,bubbles:m=!0}=M,x=bn(M,["control","checked","bubbles"]),o=(0,r.useRef)(null),C=(0,p.D)(i),a=(0,P.t)(v);return(0,r.useEffect)(()=>{const Z=o.current,S=window.HTMLInputElement.prototype,I=Object.getOwnPropertyDescriptor(S,"checked").set;if(C!==i&&I){const K=new Event("click",{bubbles:m});I.call(Z,i),Z.dispatchEvent(K)}},[C,i,m]),(0,r.createElement)("input",(0,j.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:i},x,{tabIndex:-1,ref:o,style:jn(An(An({},s.style),a),{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))};function u(s){return s?"checked":"unchecked"}const E=h,e=t}}]);
}());