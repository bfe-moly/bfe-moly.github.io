"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[6881],{5193:function(be,$,t){t.d($,{h:function(){return D}});var k=t(97857),x=t.n(k),H=t(13769),C=t.n(H),S=t(36493),Z=t(42978),c=t(19492),f=t(68400),G=t.n(f),J=t(93985),p,P=function(){return(0,J.hi)(p||(p=G()([`
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
  `])))},e=t(67294),j=t(85893),Q=["className","color","variant","size","children","style","disabled","type","showTooltip","tooltipContent","width"];P();var M=(0,e.lazy)(function(){return t.e(5968).then(t.bind(t,5968))}),X={DEFAULT:"default",OUTLINED:"outlined",FLOAT:"float"},Y=(0,c.j)(["inline-flex items-center justify-center","transition-all rounded-lg select-none cursor-pointer","data-[disabled]:text-[var(--bds-gray-t4-dis)] data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:pointer-events-none","focus-visible:outline-none"],{variants:{variant:{default:["text-[var(--bds-gray-t2)]","hover:bg-base-bds-trans-hover","active:active:text-[var(--gray-tt-1-title)] active:active:bg-base-bds-trans-hover","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],outlined:["text-[var(--bds-gray-t1-title)]","border border-solid border-base-bds-gray-t4-dis","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],float:["text-[var(--bds-gray-t1-title)]","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]"]},size:{"xx-small":"rounded","x-small":"rounded",small:"rounded",middle:"",large:"","x-large":""}},defaultVariants:{variant:"default",size:"middle"}}),D=(0,e.forwardRef)(function(i,T){var A=i.className,E=i.color,_=i.variant,v=i.size,q=i.children,O=i.style,N=i.disabled,F=i.type,U=i.showTooltip,L=U===void 0?!1:U,B=i.tooltipContent,o=i.width,b=C()(i,Q),K=(0,e.useMemo)(function(){return E?o?{backgroundColor:(0,S.ey)(E,.2),width:o,height:o}:{backgroundColor:(0,S.ey)(E,.2)}:{}},[]),ee=(0,e.useMemo)(function(){return o?{width:o,height:o}:{}},[]),R=_==="outlined"||_==="default"?0:-1,y=null,w=(0,j.jsx)("div",x()(x()({className:(0,S.cn)("moly-iconbutton",A,"".concat(F?"type-".concat(F):""),"".concat(_||"default"," "),"".concat(v||"middle"),Y({variant:_,size:v})),ref:T,"data-disabled":N?"":void 0,tabIndex:R,style:x()(x()(x()({},O),K),ee)},b),{},{children:q})),d=(0,j.jsx)(Z.Z,{component:"IconButton",children:w});return X.OUTLINED===_?y=d:y=w,L&&B?(0,j.jsx)(M,{title:B,children:(0,j.jsx)(j.Fragment,{children:y})}):y});D.displayName="IconButton"},76881:function(be,$,t){t.d($,{I:function(){return D}});var k=t(97857),x=t.n(k),H=t(5574),C=t.n(H),S=t(13769),Z=t.n(S),c=t(36493),f=t(70696),G=t(93985),J=t(19492),p=t(67294),P=t(5193),e=t(85893),j=["firstZero","prefix","suffix","type","placeholder","allowClear","visible","className","width","height","size","value","defaultValue","variant","onEnter","onChange","onPaste","style","numberControl","step"],Q=(0,J.j)(["color-[#121214]"],{variants:{variant:{default:[""],error:["border-[#EF454A]","focus-visible:border-[#EF454A]","hover:outline-none hover:border-[#EF454A]"]}},defaultVariants:{variant:"default"}}),M={xs:["text-[12px] font-medium leading-[18px]"],small:["text-[12px] font-medium leading-[18px]"],medium:["text-[16px] font-medium leading-6"],"x-large":["text-[20px] leading-6 font-medium leading-7"]},X={xs:"h-[32px] px-[7px] rounded gap-[8px]",small:"h-[40px] pl-[11px] pr-[9px]  rounded gap-[8px]",medium:"h-[48px] pl-[15px] pr-[13px] rounded-lg gap-[8px]","x-large":"h-[64px] pl-[19px] pr-[17px] rounded-lg gap-[8px]"},Y=(0,G.iv)(`
  &::placeholder {
      font-weight: 400; 
  }
  `),D=p.forwardRef(function(r,i){var T=r.firstZero,A=r.prefix,E=r.suffix,_=r.type,v=_===void 0?"text":_,q=r.placeholder,O=r.allowClear,N=r.visible,F=r.className,U=r.width,L=r.height,B=r.size,o=B===void 0?"medium":B,b=r.value,K=r.defaultValue,ee=K===void 0?"":K,R=r.variant,y=R===void 0?"default":R,w=r.onEnter,d=r.onChange,te=r.onPaste,me=r.style,ne=r.numberControl,ae=ne===void 0?!0:ne,oe=r.step,re=oe===void 0?1:oe,h=Z()(r,j),ge=(0,p.useState)(!1),le=C()(ge,2),se=le[0],ie=le[1],fe=(0,p.useState)(b||ee),de=C()(fe,2),l=de[0],I=de[1],_e=(0,p.useState)(v==="number"?"text":v),ue=C()(_e,2),ye=ue[0],ce=ue[1],W=function(){var a=o;return o==="small"&&(a="xs"),(["medium","x-large"].includes(o)||!o)&&(a="small"),a},je=(0,p.useState)(!1),ve=C()(je,2),Ee=ve[0],he=ve[1],xe=function(){I(""),d==null||d({target:{value:""}})},pe=function(a){var n=a.charAt(0),s=a.replace(/[^\d.]/g,"");return s=s.replace(/\.{2,}/g,""),s=s.replace(".","$#$").replace(/\./g,"").replace("$#$","."),n==="-"&&(s="-"+s),s},Ce=function(){var a=(l==null?void 0:l.toString())||"0",n=re.toString(),s,m,g;try{s=a.split(".")[1].length}catch(V){s=0}try{m=n.toString().split(".")[1].length}catch(V){m=0}g=Math.pow(10,Math.max(s,m));var z=(a*g+n*g)/g+"";I(z),d==null||d({target:{value:z}})},Pe=function(){var a=(l==null?void 0:l.toString())||"0",n=re.toString(),s,m,g,z;try{s=a.toString().split(".")[1].length}catch(we){s=0}try{m=n.toString().split(".")[1].length}catch(we){m=0}g=Math.pow(10,Math.max(s,m)),z=s>=m?s:m;var V=((a*g-n*g)/g).toFixed(z);I(V),d==null||d({target:{value:V}})};return(0,p.useEffect)(function(){var u=function(){b!==void 0&&(b==null?void 0:b.toString())!==(l==null?void 0:l.toString())&&I(b)},a=setTimeout(u,300);return function(){clearTimeout(a)}},[b,l]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:(0,c.cn)("moly-input","relative flex items-center bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line","transition-all ease-in-out  duration-100",{"shadow-input-shadow border border-solid border-brandColor-bds-brand-900-focus":se&&!h.disabled,"hover:border hover:border-solid hover:border-brandColor-bds-brand-800-pressed":!h.disabled,"cursor-not-allowed  border-bds-input-disabled-border bg-base-bds-gray-ele-edge":h.disabled,"border-[#EF454A] focus-visible:border-[#EF454A]  hover:border-[#EF454A]":y==="error","shadow-error-shadow":se&&y==="error"&&!h.disabled},X[o],F),style:x()({width:U,height:L},me),children:[A&&(0,e.jsx)("div",{className:(0,c.cn)(" inline-flex items-center ",M[o]),children:A}),(0,e.jsx)("input",x()(x()({type:ye,ref:i,placeholder:q,value:l,onKeyPress:function(a){var n;v==="number"&&T&&(/[0-9]/.test(a.key)||a.preventDefault()),h==null||(n=h.onKeyPress)===null||n===void 0||n.call(h,a)},onChange:function(a){var n=a.target.value;v==="number"&&(n=pe(n),T&&parseInt(n)+""=="NaN"&&(n="")),d==null||d(a),I(n)},style:{background:"transparent",outline:"medium",caretColor:"none",border:"none",width:"100%"},className:(0,c.cn)(M[o],"appearance-none placeholder:text-[#ADB1B8]",Y,{"cursor-not-allowed bg-bds-input-disabled border-[#F3F5F7] text-base-bds-gray-t4-dis":h.disabled}),onFocus:function(){ie(!0)},onPaste:function(a){var n=a.target.value;v==="number"&&(n=pe(n),T||(n=parseFloat(n)+""),isNaN(n)&&(n="")),a.target.value=n,te==null||te(a),I(n)},onKeyUp:function(a){(a.keyCode===13||a.which===13)&&(w==null||w(l))}},h),{},{onBlur:function(a){var n;ie(!1),(n=h.onBlur)===null||n===void 0||n.call(h,a)}})),E&&(0,e.jsxs)(e.Fragment,{children:[O&&(l==null?void 0:l.length)>0&&(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(f.EmptyIcon,{onClick:xe,style:{color:"var(--bds-gray-t2)"},className:(0,c.cn)("cursor-pointer",{"w-[16px] h-[16px]":["small","xs"].includes(o),"w-[20px] h-[20px]":["medium","x-large"].includes(o)||!o})})}),(0,e.jsx)("div",{className:(0,c.cn)("justify-items-center text-brandColor-bds-brand-900-text",M[o]),style:{marginRight:v==="number"&&ae?"8px":"0px"},children:E})]}),(v==="password"&&N||O)&&!E&&(0,e.jsxs)("div",{className:(0,c.cn)("flex items-center"),children:[O&&(l==null?void 0:l.length)>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f.EmptyIcon,{onClick:xe,style:{color:"var(--bds-gray-t2)"},className:(0,c.cn)("cursor-pointer",{"w-[16px] h-[16px]":["small","xs"].includes(o),"w-[20px] h-[20px]":["medium","x-large"].includes(o)||!o})}),(0,e.jsx)("div",{className:(0,c.cn)("border-colors-base-bds-gray-ele-border hidden mx-[8px] h-[18px] items-center",{block:v==="password"&&N,"h-[16px] ":o==="xs","h-[18px] ":o==="small","h-[20px] ":o==="medium","h-[24px] ":o==="x-large"}),style:{borderLeft:"1px solid var(--bds-gray-ele-border)"}})]}),v==="password"&&N&&(0,e.jsx)(e.Fragment,{children:Ee?(0,e.jsx)(P.h,{size:W(),children:(0,e.jsx)(f.EyeonIcon,{onClick:function(){he(!1),ce("password")}})}):(0,e.jsx)(P.h,{size:W(),children:(0,e.jsx)(f.EyeoffIcon,{onClick:function(){he(!0),ce("text")}})})})]}),v==="number"&&ae&&(0,e.jsxs)("div",{className:(0,c.cn)("flex items-center"),children:[(0,e.jsx)(P.h,{size:W(),children:(0,e.jsx)(f.ReduceIcon,{onClick:Pe})}),(0,e.jsx)("div",{className:(0,c.cn)("border-colors-base-bds-gray-ele-border mt-[2px] mx-[8px]  items-center",{"h-[16px] ":o==="xs","h-[18px] ":o==="small","h-[20px] ":o==="medium","h-[24px] ":o==="x-large"}),style:{borderLeft:"1px solid var(--bds-gray-ele-border)"}}),(0,e.jsx)(P.h,{size:W(),children:(0,e.jsx)(f.PlusIcon,{onClick:Ce})})]}),(0,e.jsx)("div",{className:(0,c.cn)(Q({variant:y}),"pl-[32px]"),style:{height:L,position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})]})})});D.displayName="Input"}}]);
