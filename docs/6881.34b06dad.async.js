"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[6881],{5193:function(ye,Z,e){e.d(Z,{h:function(){return N}});var k=e(97857),x=e.n(k),G=e(13769),B=e.n(G),M=e(36493),J=e(42978),Q=e(19492),P=e(68400),X=e.n(P),Y=e(93985),v,f=function(){return(0,Y.hi)(v||(v=X()([`
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
  `])))},I=e(67294),E=e(85893),p=["className","color","variant","size","children","style","disabled","type","showTooltip","tooltipContent","width"];f();var D=(0,I.lazy)(function(){return e.e(5968).then(e.bind(e,5968))}),t={DEFAULT:"default",OUTLINED:"outlined",FLOAT:"float"},q=(0,Q.j)(["inline-flex items-center justify-center","transition-all rounded-lg select-none cursor-pointer","data-[disabled]:text-[var(--bds-gray-t4-dis)] data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:pointer-events-none","focus-visible:outline-none"],{variants:{variant:{default:["text-[var(--bds-gray-t2)]","hover:bg-base-bds-trans-hover","active:active:text-[var(--bds-gray-t1-title)] active:active:bg-base-bds-trans-hover","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],outlined:["text-[var(--bds-gray-t1-title)]","border border-solid border-base-bds-gray-t4-dis","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],float:["text-[var(--bds-gray-t1-title)]","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]"]},size:{"xx-small":"rounded","x-small":"rounded",small:"rounded",middle:"",large:"","x-large":""}},defaultVariants:{variant:"default",size:"middle"}}),N=(0,I.forwardRef)(function(c,ee){var A=c.className,o=c.color,j=c.variant,z=c.size,L=c.children,S=c.style,R=c.disabled,u=c.type,F=c.showTooltip,T=F===void 0?!1:F,w=c.tooltipContent,g=c.width,ne=B()(c,p),K=(0,I.useMemo)(function(){return o?g?{backgroundColor:(0,M.ey)(o,.2),width:g,height:g}:{backgroundColor:(0,M.ey)(o,.2)}:{}},[]),W=(0,I.useMemo)(function(){return g?{width:g,height:g}:{}},[]),r=j==="outlined"||j==="default"?0:-1,_=null,U=(0,E.jsx)("div",x()(x()({className:(0,M.cn)("moly-iconbutton",A,"".concat(u?"type-".concat(u):""),"".concat(j||"default"," "),"".concat(z||"middle"),q({variant:j,size:z})),ref:ee,"data-disabled":R?"":void 0,tabIndex:r,style:x()(x()(x()({},S),K),W)},ne),{},{children:L})),te=(0,E.jsx)(J.Z,{component:"IconButton",children:U});return t.OUTLINED===j?_=te:_=U,T&&w?(0,E.jsx)(D,{title:w,children:(0,E.jsx)(E.Fragment,{children:_})}):_});N.displayName="IconButton"},76881:function(ye,Z,e){e.d(Z,{I:function(){return A}});var k=e(97857),x=e.n(k),G=e(15009),B=e.n(G),M=e(99289),J=e.n(M),Q=e(5574),P=e.n(Q),X=e(13769),Y=e.n(X),v=e(36493),f=e(70696),I=e(93985),E=e(19492),p=e(67294),D=e(5193),t=e(85893),q=["firstZero","prefix","suffix","type","placeholder","allowClear","visible","className","width","height","size","value","defaultValue","variant","onEnter","onChange","onPaste","style","numberControl","step"],N=(0,E.j)(["color-[#121214]"],{variants:{variant:{default:[""],error:["border-[#EF454A]","focus-visible:border-[#EF454A]","hover:outline-none hover:border-[#EF454A]"]}},defaultVariants:{variant:"default"}}),O={xs:["text-[12px] font-medium leading-[18px]"],small:["text-[12px] font-medium leading-[18px]"],medium:["text-[16px] font-medium leading-6"],"x-large":["text-[20px] leading-6 font-medium leading-7"]},c={xs:"h-[32px] px-[7px] rounded gap-[8px]",small:"h-[40px] pl-[11px] pr-[9px]  rounded gap-[8px]",medium:"h-[48px] pl-[15px] pr-[13px] rounded-lg gap-[8px]","x-large":"h-[64px] pl-[19px] pr-[17px] rounded-lg gap-[8px]"},ee=(0,I.iv)(`
  &::placeholder {
      font-weight: 400; 
  }
  `),A=p.forwardRef(function(o,j){var z=o.firstZero,L=o.prefix,S=o.suffix,R=o.type,u=R===void 0?"text":R,F=o.placeholder,T=o.allowClear,w=o.visible,g=o.className,ne=o.width,K=o.height,W=o.size,r=W===void 0?"medium":W,_=o.value,U=o.defaultValue,te=U===void 0?"":U,le=o.variant,ae=le===void 0?"default":le,oe=o.onEnter,l=o.onChange,re=o.onPaste,Ee=o.style,se=o.numberControl,ie=se===void 0?!0:se,de=o.step,ue=de===void 0?1:de,b=Y()(o,q),je=(0,p.useState)(!1),ve=P()(je,2),ce=ve[0],me=ve[1],Ce=(0,p.useState)(_||te),_e=P()(Ce,2),s=_e[0],y=_e[1],Pe=(0,p.useState)(u==="number"?"text":u),be=P()(Pe,2),Ie=be[0],he=be[1],$=(0,p.useRef)();(0,p.useEffect)(function(){var d=function(){var n=J()(B()().mark(function a(){var i;return B()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(482).then(e.bind(e,86673));case 2:i=m.sent,$.current=i==null?void 0:i.Decimal;case 4:case"end":return m.stop()}},a)}));return function(){return n.apply(this,arguments)}}();u==="number"&&!$.current&&d()},[u]);var V=function(){var n=r;return r==="small"&&(n="xs"),(["medium","x-large"].includes(r)||!r)&&(n="small"),n},De=(0,p.useState)(!1),pe=P()(De,2),we=pe[0],xe=pe[1],fe=function(){y(""),l==null||l({target:{value:""}})},Me=function(n){var a=/-?\d+(\.\d+)?/,i=n.match(a);if(i){var h=parseFloat(i[0]);if(!isNaN(h))return h.toString()}return"0"},Oe=function(){var n,a=$.current,i=(s==null?void 0:s.toString())||"0",h=ue.toString(),m=new a(i),H=new a(h),C=(n=m.plus(H))===null||n===void 0?void 0:n.toString();y(C),l==null||l({target:{value:C}})},Se=function(){var n,a=$.current,i=(s==null?void 0:s.toString())||"0",h=ue.toString(),m=new a(i),H=new a(h),C=(n=m.minus(H))===null||n===void 0?void 0:n.toString();y(C),l==null||l({target:{value:C}})};return(0,p.useEffect)(function(){var d=function(){_!==void 0&&(_==null?void 0:_.toString())!==(s==null?void 0:s.toString())&&y(_)},n=setTimeout(d,300);return function(){clearTimeout(n)}},[_,s]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,v.cn)("moly-input","relative flex items-center bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line","transition-all ease-in-out  duration-100",{"shadow-input-shadow border border-solid border-brandColor-bds-brand-900-focus":ce&&!b.disabled,"hover:border hover:border-solid hover:border-brandColor-bds-brand-800-pressed":!b.disabled,"cursor-not-allowed  border-bds-input-disabled-border bg-base-bds-gray-ele-edge":b.disabled,"border-[#EF454A] focus-visible:border-[#EF454A]  hover:border-[#EF454A]":ae==="error","shadow-error-shadow":ce&&ae==="error"&&!b.disabled},c[r],g),style:x()({width:ne,height:K},Ee),children:[L&&(0,t.jsx)("div",{className:(0,v.cn)(" inline-flex items-center ",O[r]),children:L}),(0,t.jsx)("input",x()(x()({type:Ie,ref:j,placeholder:F,value:s,onKeyPress:function(n){var a;if(z){var i=n.keyCode||n.which,h=String.fromCharCode(i),m=/^[0-9]+$/.test(h);m||n.preventDefault()}b==null||(a=b.onKeyPress)===null||a===void 0||a.call(b,n)},onChange:function(n){var a=n.target.value;if(u==="number"){var i=/^-?\d*\.?\d*$/.test(a);i&&(l==null||l(n),y(a));return}l==null||l(n),y(a)},style:{background:"transparent",outline:"medium",caretColor:"none",border:"none",width:"100%"},className:(0,v.cn)(O[r],"appearance-none placeholder:text-[#ADB1B8]",ee,{"cursor-not-allowed bg-bds-input-disabled border-[#F3F5F7] text-base-bds-gray-t4-dis":b.disabled}),onFocus:function(){me(!0)},onPaste:function(n){var a=n.target.value;u==="number"&&(a=Me(a)),n.target.value=a,re==null||re(n),y(a)},onKeyUp:function(n){(n.keyCode===13||n.which===13)&&(oe==null||oe(s))}},b),{},{onBlur:function(n){var a;if(u==="number"){var i=n.target.value,h=function(C){var ge=parseFloat(C);return isNaN(ge)?0:ge},m=h(i).toString();n.target.value=m,l==null||l(n),y(m)}me(!1),(a=b.onBlur)===null||a===void 0||a.call(b,n)}})),S&&(0,t.jsxs)(t.Fragment,{children:[T&&(s==null?void 0:s.length)>0&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(f.EmptyIcon,{onClick:fe,style:{color:"var(--bds-gray-t2)"},className:(0,v.cn)("cursor-pointer",{"w-[16px] h-[16px]":["small","xs"].includes(r),"w-[20px] h-[20px]":["medium","x-large"].includes(r)||!r})})}),(0,t.jsx)("div",{className:(0,v.cn)("justify-items-center text-brandColor-bds-brand-900-text",O[r]),style:{marginRight:u==="number"&&ie?"8px":"0px"},children:S})]}),(u==="password"&&w||T)&&!S&&(0,t.jsxs)("div",{className:(0,v.cn)("flex items-center"),children:[T&&(s==null?void 0:s.length)>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.EmptyIcon,{onClick:fe,style:{color:"var(--bds-gray-t2)"},className:(0,v.cn)("cursor-pointer",{"w-[16px] h-[16px]":["small","xs"].includes(r),"w-[20px] h-[20px]":["medium","x-large"].includes(r)||!r})}),(0,t.jsx)("div",{className:(0,v.cn)("border-colors-base-bds-gray-ele-border hidden mx-[8px] h-[18px] items-center",{block:u==="password"&&w,"h-[16px] ":r==="xs","h-[18px] ":r==="small","h-[20px] ":r==="medium","h-[24px] ":r==="x-large"}),style:{borderLeft:"1px solid var(--bds-gray-ele-border)"}})]}),u==="password"&&w&&(0,t.jsx)(t.Fragment,{children:we?(0,t.jsx)(D.h,{size:V(),children:(0,t.jsx)(f.EyeonIcon,{onClick:function(){xe(!1),he("password")}})}):(0,t.jsx)(D.h,{size:V(),children:(0,t.jsx)(f.EyeoffIcon,{onClick:function(){xe(!0),he("text")}})})})]}),u==="number"&&ie&&(0,t.jsxs)("div",{className:(0,v.cn)("flex items-center"),children:[(0,t.jsx)(D.h,{size:V(),children:(0,t.jsx)(f.ReduceIcon,{onClick:Se})}),(0,t.jsx)("div",{className:(0,v.cn)("border-colors-base-bds-gray-ele-border mt-[2px] mx-[8px]  items-center",{"h-[16px] ":r==="xs","h-[18px] ":r==="small","h-[20px] ":r==="medium","h-[24px] ":r==="x-large"}),style:{borderLeft:"1px solid var(--bds-gray-ele-border)"}}),(0,t.jsx)(D.h,{size:V(),children:(0,t.jsx)(f.PlusIcon,{onClick:Oe})})]}),(0,t.jsx)("div",{className:(0,v.cn)(N({variant:ae}),"pl-[32px]"),style:{height:K,position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})]})})});A.displayName="Input"}}]);
