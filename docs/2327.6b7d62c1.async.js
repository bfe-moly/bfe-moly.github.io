"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2327],{97143:function(ne,S,e){e.d(S,{o:function(){return P}});var I=e(97857),v=e.n(I),w=e(9783),E=e.n(w),j=e(13769),c=e.n(j),R=e(76881),U=e(36493),N=e(70696),x=e(67294),i=e(85893),C=["size"],P=(0,x.memo)(x.forwardRef(function(l,m){var g,b=l.size,p=b===void 0?"small":b,A=c()(l,C);return(0,i.jsx)(R.I,v()(v()({ref:m},A),{},{size:p==="xs"?"xs":p,prefix:(0,i.jsx)(N.SearchIcon,{className:(0,U.cn)("z-20 text-base-bds-gray-t2",(g={},E()(g,"w-4 h-4",p==="xs"||p==="small"),E()(g,"w-5 h-5",p!=="xs"&&p!=="small"),g))}),allowClear:!0}))}));P.displayName="Search"},92327:function(ne,S,e){e.d(S,{P:function(){return X}});var I=e(97857),v=e.n(I),w=e(19632),E=e.n(w),j=e(5574),c=e.n(j),R=e(13769),U=e.n(R),N=e(68400),x=e.n(N),i=e(36493),C=e(70696),P=e(93985),l=e(43543),m=e(67294),g=e(32538),b=e(93175),p=e(97143),A=e(27036),a=e(85893),Z=["tabIndex","customButton","contentCenter","allowClear","notFoundText","defaultValue","onChange","options","showSearch","mode","placeholder","size","tagSize","RenderNode","valueRender","value","width","height","className","getPopupContainer","onDropdownVisibleChange","optionClass","dropdownClassName"],L,z,T=function(t,q,te,ee){return(0,a.jsx)("div",{className:(0,i.cn)("truncate"),title:t,children:t})},H={xs:["text-[12px] font-medium leading-[18px]"],small:["text-[12px] font-medium leading-[18px]"],medium:["text-[16px] font-medium leading-6"],large:["text-[20px] font-medium leading-7"]},G={xs:["min-h-[32px] h-auto px-[8px]  py-[7px]  rounded"],small:["min-h-[40px] h-auto px-[12px] rounded"],medium:["min-h-[48px] h-auto px-[16px] rounded-lg"]},J=(0,P.iv)(L||(L=x()([`
  @keyframes rcSelectDropdownSlideUpIn {
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
  }
  @keyframes rcSelectDropdownSlideUpOut {
    0% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
  }

  &.rc-select-dropdown {
    &-slide-up-enter,
    &-slide-up-appear {
      animation-duration: 0.15s;
      animation-fill-mode: both;
      transform-origin: 0 0;
      opacity: 0;
      animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
      animation-play-state: paused;
    }

    &-slide-up-leave {
      animation-duration: 0.15s;
      animation-fill-mode: both;
      transform-origin: 0 0;
      opacity: 1;
      animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
      animation-play-state: paused;
    }

    &-slide-up-enter&-slide-up-enter-active&-placement-bottomLeft,
    &-slide-up-appear&-slide-up-appear-active&-placement-bottomLeft {
      animation-name: rcSelectDropdownSlideUpIn;
      animation-play-state: running;
    }

    &-slide-up-leave&-slide-up-leave-active&-placement-bottomLeft,
    &-slide-up-leave&-slide-up-leave-active&-placement-bottomRight {
      animation-name: rcSelectDropdownSlideUpOut;
      animation-play-state: running;
    }
  }

  &.rc-select-dropdown-hidden {
    display: none;
  }

  .rc-select-item-option-selected {
    display: none;
  }

  .custom-select-option-selector {
    display: flex;
  }

  .rc-select-item-option-active {
    background: var(--bds-trans-hover);
  }
`]))),Q=(0,P.iv)(z||(z=x()([`
  .rc-select-item-option-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`]))),X=function(t){var q=t.tabIndex,te=q===void 0?1:q,ee=t.customButton,Ee=t.contentCenter,je=t.allowClear,oe=t.notFoundText,Pe=t.defaultValue,De=t.onChange,re=t.options,W=re===void 0?[]:re,Me=t.showSearch,le=t.mode,u=le===void 0?"combobox":le,se=t.placeholder,de=se===void 0?"please select":se,ie=t.size,s=ie===void 0?"medium":ie,B=t.tagSize,ue=t.RenderNode,F=t.valueRender,y=t.value,D=t.width,K=t.height,Oe=t.className,Y=t.getPopupContainer,ae=t.onDropdownVisibleChange,Se=t.optionClass,Ie=t.dropdownClassName,we=U()(t,Z);D||(s==="medium"?D=380:D=276),K||(s==="medium"?K=48:s==="xs"?K=32:K=40);var Re=(0,m.useState)("label_"+(Math.random()*1e8).toFixed(0)),_e=c()(Re,2),ce=_e[0],Qe=_e[1],Ue=(0,m.useState)(!1),me=c()(Ue,2),Ne=me[0],Ae=me[1],Le=(0,m.useState)(""),be=c()(Le,2),$=be[0],pe=be[1],Te=(0,m.useState)(["tags","multiple"].includes(u)&&!Array.isArray(y)?[]:y),ve=c()(Te,2),n=ve[0],M=ve[1],We=(0,m.useState)("rc_"+(Math.random()*1e8).toFixed(0)),fe=c()(We,2),he=fe[0],Xe=fe[1],Be=(0,m.useState)(document.body),xe=c()(Be,2),Ke=xe[0],Ve=xe[1],ze=function(){var o="calc(100% - 14px)";return(s==="medium"||!s)&&(o="calc(100% - 16px)"),{width:o}};(0,m.useLayoutEffect)(function(){for(var r,o=document.querySelector(".".concat(he));o&&!((d=o)!==null&&d!==void 0&&(_=d.parentElement)!==null&&_!==void 0&&_.classList.contains("moly-modal"));){var d,_,f;o=(f=o)===null||f===void 0?void 0:f.parentElement}Ve(((r=o)===null||r===void 0?void 0:r.parentElement)||document.body)},[]),(0,m.useEffect)(function(){return M(y||Pe),(n==null?void 0:n.toString())!==(y==null?void 0:y.toString())&&M(y),function(){}},[y]);var Fe=function(o){var d=n.filter(function(_){return _!==o});M(E()(d))},Ye=function(){var o=ze(),d=o.width;if(u==="combobox"){var _;return n?(0,a.jsx)("div",{className:(0,i.cn)("truncate inline-block flex-1"),children:((_=W.find(function(O){return O.value===n}))===null||_===void 0?void 0:_.label)||n}):(0,a.jsx)(a.Fragment,{})}if(Array.isArray(n)&&n.length>0){var f=[],ge=n.map(function(O){var V=W.find(function(Je){return Je.value===O}),Ce=V.label,h=V.value,Ge=h===void 0?"":h;return f.push(Ge),Ce});if(u==="tags"){var ye=B;return B||s==="medium"&&(ye="large"),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("div",{className:(0,i.cn)("flex flex-wrap",{"gap-[6px]":!B||B==="normal","gap-[4px]":B==="small"||s==="small"}),children:ge.map(function(O,V){return(0,a.jsx)(A.V,{variant:"light",closeIcon:!0,className:"w-auto",size:ye,onClose:function(h){h==null||h.preventDefault(),h==null||h.stopPropagation(),Fe(f[V])},children:O},O+"_"+V)})})})}return(0,a.jsxs)("div",{style:{width:d},children:["+ ",ge.length]})}},$e=W.filter(function(r){return $?r.label.toLowerCase().indexOf($.toLowerCase())>-1||r.value.toString().toLowerCase().indexOf($.toLowerCase())>-1:!0}),Ze=function(o){if(u==="combobox"){if(n)return null}else if(Array.isArray(n)&&(n==null?void 0:n.length)>0)return null;return(0,a.jsx)("div",{className:"truncate inline-block flex-1",style:{color:"var(--bds-gray-t3)"},children:de},Math.random()+"_")},He=function(){if(n===void 0||Array.isArray(n)&&(n==null?void 0:n.length)===0)return(0,a.jsx)(a.Fragment,{});if(["tags","multiple"].includes(u)){if(Array.isArray(n)){var o=n.map(function(_){return W.find(function(f){return f.value===_})});return(0,a.jsx)("div",{className:"flex-1",children:F(n,o)})}}else{var d=W.find(function(_){return _.value===n});return(0,a.jsx)("div",{className:"flex-1",children:F(n,d)})}};return(0,a.jsx)(l.ZP,v()(v()({virtual:!1,onDropdownVisibleChange:function(o){Ae(o),pe(""),ae==null||ae(o)},optionFilterProp:"text",value:n,mode:u,placeholder:de,onChange:function(o){De(o),M(o)},menuItemSelectedIcon:function(o){var d=o.isSelected;return d?(0,a.jsx)(C.CheckIcon,{}):""},notFoundContent:(0,a.jsx)("div",{className:"font-IBM text-center pb-[12px]",children:(0,a.jsx)(b.Z,{size:"small",title:"",status:"noSearchResult",subTitle:oe||"No Records Found"})}),getRawInputElement:function(){return ee||(0,a.jsx)("div",{style:{width:D,height:u==="tags"?"auto":K,minWidth:D,maxWidth:D},tabIndex:te,className:(0,i.cn)(he,"font-IBM","transition duration-150 ease-in-out","focus-visible:shadow-select-shadow focus-visible:outline-none","bg-base-bds-gray-ele-line","text-base-bds-gray-t1-title","border-none box-border ","hover:bg-base-bds-gray-ele-border","py-[12px]",H[s],G[s],{"py-[11px]":u==="tags","py-[7px]":u==="tags"&&s==="xs","h-auto":u==="tags"},Oe),children:(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:ce}),(0,a.jsx)("div",{className:(0,i.cn)("font-IBM relative cursor-pointer ",{group:n&&je,"flex relative ":u==="tags"}),children:(0,a.jsxs)("div",{className:(0,i.cn)("flex items-center w-full gap-[8px]",{"h-auto sticky":u==="tags"}),children:[Ze(),F&&He(),!F&&Ye(),(0,a.jsx)(C.EmptyIcon,{onClick:function(d){d.preventDefault(),d.stopPropagation(),M(u==="combobox"?"":[])},className:(0,i.cn)("cursor-pointer group-hover:duration-150 group-hover:ease-out group-hover:transition-all w-[20px] h-[20px] ","text-[#81858C] absolute  opacity-0 group-hover:static group-hover:inline-block group-hover:opacity-100 ",{"w-[16px] h-[16px]":["xs","small"].includes(s)})}),(0,a.jsx)(C.ArrowdownIcon,{className:(0,i.cn)("text-[#81858C] cursor-pointer transition-all group-hover:hidden w-[20px] h-[20px] ",{"rotate-180":Ne,"w-[16px] h-[16px]":["xs","small"].includes(s)})})]})})]})})})},dropdownStyle:{background:"var(--bds-gray-bg-float)",border:"1px solid var(--bds-gray-ele-line)",boxShadow:"var(--bds-shadow-l1)",borderRadius:"8px"},animation:"slide-up",dropdownClassName:(0,i.cn)(J,Ie,"font-IBM  absolute z-[10000] pointer-events-auto text-base-bds-gray-t1-title border-none","bg-base-bds-gray-bg-card border-base-bds-gray-ele-line","shadow-boxShadow-bds-shadow-l1 p-[4px]"),allowClear:!0,dropdownRender:function(o){var d="small";return s==="medium"?d="small":(s==="small"||s==="xs")&&(d="tiny"),(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[Me&&(0,a.jsx)(p.o,{size:d,id:ce,value:$,onChange:function(f){pe(f.target.value)},className:(0,i.cn)("w-auto mb-[10px] ",{"mx-[2px] h-[40px]":s==="small"})}),o]})})},getPopupContainer:function(){return Y?Y==null?void 0:Y():Ke}},we),{},{children:$e.map(function(r){return r.type==="divider"?(0,a.jsx)(l.Wx,{disabled:!0,className:"h-auto",children:(0,a.jsx)(g.Z,{style:{marginTop:"0px",marginBottom:"4px"}})}):(0,a.jsx)(l.Wx,{"data-changed":r.value===n,value:r.value,className:(0,i.cn)("custom-select-option-selector ",Q,"mb-[4px] last:mb-0  w-full cursor-pointer rounded-md font-normal select-none items-center py-[8px]  pr-2 outline-none  h-[40px] text-base px-[12px]","text-base-bds-gray-t1-title","focus:bg-base-bds-trans-hover","hover:bg-base-bds-trans-hover ","whitespace-nowrap overflow-hidden text-ellipsis","flex","data-[selected=true]:bg-base-bds-trans-hover","rc-select-item-option-selected:inline-block","rc-select-item-option-active:bg-base-bds-trans-hover","aria-[selected=true]:text-brandColor-bds-brand-900-text","data-[changed=true]:text-brandColor-bds-brand-900-text","data-[selected=true]:font-medium aria-[selected=true]:font-medium data-[changed=true]:font-medium","transition ease-in-out duration-150",{"text-center":Ee,"h-[26px] py-[4px] px-[8px] text-xs":s==="small"||s==="xs","gap-2":u!=="combobox"},Se),children:ue?ue(r):T(r.label,s)},r.value)})}))};X.displayName="Select"},27036:function(ne,S,e){e.d(S,{V:function(){return C}});var I=e(97857),v=e.n(I),w=e(13769),E=e.n(w),j=e(67294),c=e(36493),R=e(70696),U=e(19492),N=(0,U.j)(["whitespace-nowrap font-medium","inline-flex items-center gap-1","ps-2 pe-2","rounded","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:bg-base-bds-gray-ele-edge data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs leading-[16.8px] h-[16.8px] scale-[0.83333] ps-[4px] pe-[4px]"],normal:["text-xs leading-[18px] h-[18px] ps-[4px] pe-[4px]"],large:["text-sm leading-[24px] h-[24px] ps-[6px] pe-[6px]"],xlarge:["text-base leading-[32px] h-[32px] ps-[8px] pe-[8px]"]},variant:{default:[],primary:["text-white"],light:[]},color:{neutral:[],red:[],green:[],brand:[],"reddish-gradient":[],"brand-gradient":[]},shape:{normal:[],leaf:["rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none"]}},compoundVariants:[{variant:"default",color:"neutral",className:["bg-base-bds-gray-ele-line text-base-bds-gray-t2"]},{variant:"default",color:"red",className:["bg-redColor-bds-red-100-bg text-redColor-bds-red-700-normal"]},{variant:"default",color:"green",className:["bg-greenColor-bds-green-100-bg text-greenColor-bds-green-700-normal"]},{variant:"default",color:"brand",className:["bg-brandColor-bds-brand-100-bg text-brandColor-bds-brand-900-text"]},{variant:"primary",color:"neutral",className:["bg-base-bds-gray-t2 "]},{variant:"primary",color:"red",className:["bg-redColor-bds-red-700-normal"]},{variant:"primary",color:"green",className:["bg-greenColor-bds-green-700-normal"]},{variant:"primary",color:"brand",className:["bg-brandColor-bds-brand-700-normal"]},{variant:"primary",color:"reddish-gradient",className:["bg-bds-gradient-reddish"]},{variant:"primary",color:"brand-gradient",className:["bg-bds-gradient-brand text-base-bds-gray-t1-title"]},{variant:"light",color:"neutral",className:["border border-solid border-base-bds-gray-t4-dis","text-base-bds-gray-t2","data-[disabled]:bg-transparent data-[disabled]:border-base-bds-gray-ele-border"]}],defaultVariants:{variant:"default",size:"normal",color:"neutral",shape:"normal"}}),x=e(85893),i=["className","color","variant","size","shape","children","closeIcon","onClose","style"],C=(0,j.forwardRef)(function(l,m){var g=l.className,b=l.color,p=l.variant,A=l.size,a=l.shape,Z=l.children,L=l.closeIcon,z=L===void 0?!1:L,T=l.onClose,H=l.style,G=E()(l,i),J=(0,j.useMemo)(function(){return b?(0,c.K_)(b)?p==="primary"?{backgroundColor:b}:{color:b,backgroundColor:(0,c.ey)(b,.2)}:{}:{}},[]),Q=function(k){l.disabled||T==null||T(k)};return(0,x.jsxs)("div",v()(v()({className:(0,c.cn)(g,N({color:b,variant:p,size:A,shape:a})),ref:m,"data-disabled":l.disabled?"":void 0,style:v()(v()({},H),J)},G),{},{children:[Z,z&&(0,x.jsx)(R.CloseIcon,{className:"cursor-pointer data-[disabled]:cursor-not-allowed","data-disabled":l.disabled?"":void 0,onClick:Q})]}))})}}]);
