"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2327],{97143:function(te,I,e){e.d(I,{o:function(){return D}});var w=e(97857),p=e.n(w),R=e(9783),j=e.n(R),P=e(13769),m=e.n(P),U=e(76881),A=e(36493),N=e(70696),g=e(67294),i=e(85893),C=["size"],D=(0,g.memo)(g.forwardRef(function(r,c){var y,b=r.size,v=b===void 0?"small":b,L=m()(r,C);return(0,i.jsx)(U.I,p()(p()({ref:c},L),{},{size:v==="xs"?"xs":v,prefix:(0,i.jsx)(N.SearchIcon,{className:(0,A.cn)("text-base-bds-gray-t2",(y={},j()(y,"w-4 h-4",v==="xs"||v==="small"),j()(y,"w-5 h-5",v!=="xs"&&v!=="small"),y))}),allowClear:!0}))}));D.displayName="Search"},92327:function(te,I,e){e.d(I,{P:function(){return k}});var w=e(97857),p=e.n(w),R=e(19632),j=e.n(R),P=e(5574),m=e.n(P),U=e(13769),A=e.n(U),N=e(68400),g=e.n(N),i=e(36493),C=e(70696),D=e(93985),r=e(43543),c=e(67294),y=e(32538),b=e(93175),v=e(97143),L=e(27036),a=e(85893),H=["tabIndex","customButton","contentCenter","allowClear","notFoundText","defaultValue","onChange","options","showSearch","mode","placeholder","size","tagSize","RenderNode","valueRender","value","width","height","className","getPopupContainer","onDropdownVisibleChange","optionClass","dropdownClassName"],T,F,W=function(t,ee,oe,ae){return(0,a.jsx)("div",{className:(0,i.cn)("truncate"),title:t,children:t})},G={xs:["text-[12px] font-medium leading-[18px]"],small:["text-[12px] font-medium leading-[18px]"],medium:["text-[16px] font-medium leading-6"],large:["text-[20px] font-medium leading-7"]},J={xs:["min-h-[32px] h-auto px-[8px]  py-[7px]  rounded"],small:["min-h-[40px] h-auto px-[12px] rounded"],medium:["min-h-[48px] h-auto px-[16px] rounded-lg"]},Q=(0,D.iv)(T||(T=g()([`
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
`]))),X=(0,D.iv)(F||(F=g()([`
  .rc-select-item-option-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`]))),k=function(t){var ee=t.tabIndex,oe=ee===void 0?1:ee,ae=t.customButton,Pe=t.contentCenter,le=t.allowClear,re=t.notFoundText,De=t.defaultValue,E=t.onChange,se=t.options,B=se===void 0?[]:se,Me=t.showSearch,de=t.mode,_=de===void 0?"combobox":de,ie=t.placeholder,_e=ie===void 0?"please select":ie,ue=t.size,s=ue===void 0?"medium":ue,K=t.tagSize,me=t.RenderNode,Y=t.valueRender,h=t.value,M=t.width,V=t.height,Oe=t.className,$=t.getPopupContainer,ne=t.onDropdownVisibleChange,Se=t.optionClass,Ie=t.dropdownClassName,we=A()(t,H);M||(s==="medium"?M=380:M=276),V||(s==="medium"?V=48:s==="xs"?V=32:V=40);var Re=(0,c.useState)("label_"+(Math.random()*1e8).toFixed(0)),ce=m()(Re,2),be=ce[0],Qe=ce[1],Ue=(0,c.useState)(!1),ve=m()(Ue,2),Ae=ve[0],Ne=ve[1],Le=(0,c.useState)(""),pe=m()(Le,2),Z=pe[0],fe=pe[1],Te=(0,c.useState)(["tags","multiple"].includes(_)&&!Array.isArray(h)?[]:h),he=m()(Te,2),n=he[0],O=he[1],We=(0,c.useState)("rc_"+(Math.random()*1e8).toFixed(0)),xe=m()(We,2),ge=xe[0],Xe=xe[1],Be=(0,c.useState)(document.body),ye=m()(Be,2),Ke=ye[0],Ve=ye[1],ze=function(){var o="calc(100% - 14px)";return(s==="medium"||!s)&&(o="calc(100% - 16px)"),{width:o}};(0,c.useLayoutEffect)(function(){for(var l,o=document.querySelector(".".concat(ge));o&&!((d=o)!==null&&d!==void 0&&(u=d.parentElement)!==null&&u!==void 0&&u.classList.contains("moly-modal"));){var d,u,f;o=(f=o)===null||f===void 0?void 0:f.parentElement}Ve(((l=o)===null||l===void 0?void 0:l.parentElement)||document.body)},[]),(0,c.useEffect)(function(){return O(h||De),(n==null?void 0:n.toString())!==(h==null?void 0:h.toString())&&O(h),function(){}},[h]);var Fe=function(o){var d=n.filter(function(u){return u!==o});O(j()(d))},Ye=function(){var o=ze(),d=o.width;if(_==="combobox"){var u;return n?(0,a.jsx)("div",{className:(0,i.cn)("truncate inline-block flex-1"),children:((u=B.find(function(S){return S.value===n}))===null||u===void 0?void 0:u.label)||n}):(0,a.jsx)(a.Fragment,{})}if(Array.isArray(n)&&n.length>0){var f=[],Ce=n.map(function(S){var z=B.find(function(Je){return Je.value===S}),je=z.label,x=z.value,Ge=x===void 0?"":x;return f.push(Ge),je});if(_==="tags"){var Ee=K;return K||s==="medium"&&(Ee="large"),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("div",{className:(0,i.cn)("flex flex-wrap",{"gap-[6px]":!K||K==="normal","gap-[4px]":K==="small"||s==="small"}),children:Ce.map(function(S,z){return(0,a.jsx)(L.V,{variant:"light",closeIcon:!0,className:"w-auto",size:Ee,onClose:function(x){x==null||x.preventDefault(),x==null||x.stopPropagation(),Fe(f[z])},children:S},S+"_"+z)})})})}return(0,a.jsxs)("div",{style:{width:d},children:["+ ",Ce.length]})}},$e=B.filter(function(l){return Z?l.label.toLowerCase().indexOf(Z.toLowerCase())>-1||l.value.toString().toLowerCase().indexOf(Z.toLowerCase())>-1:!0}),Ze=function(o){if(_==="combobox"){if(n||h)return null}else if(Array.isArray(n)&&(n==null?void 0:n.length)>0)return null;return(0,a.jsx)("div",{className:"truncate inline-block flex-1",style:{color:"var(--bds-gray-t3)"},children:_e},Math.random()+"_")},He=function(){if(n===void 0||Array.isArray(n)&&(n==null?void 0:n.length)===0)return(0,a.jsx)(a.Fragment,{});if(["tags","multiple"].includes(_)){if(Array.isArray(n)){var o=n.map(function(u){return B.find(function(f){return f.value===u})});return(0,a.jsx)("div",{className:"flex-1",children:Y(n,o)})}}else{var d=B.find(function(u){return u.value===n});return(0,a.jsx)("div",{className:"flex-1",children:Y(n,d)})}};return(0,a.jsx)(r.ZP,p()(p()({virtual:!1,onDropdownVisibleChange:function(o){Ne(o),fe(""),ne==null||ne(o)},optionFilterProp:"text",value:n,mode:_,placeholder:_e,onChange:function(o){E(o),O(o)},menuItemSelectedIcon:function(o){var d=o.isSelected;return d?(0,a.jsx)(C.CheckIcon,{}):""},notFoundContent:(0,a.jsx)("div",{className:"font-IBM text-center pb-[12px]",children:(0,a.jsx)(b.Z,{size:"small",title:"",status:"noSearchResult",subTitle:re||""})}),getRawInputElement:function(){return ae||(0,a.jsx)("div",{style:{width:M,height:_==="tags"?"auto":V,minWidth:M,maxWidth:M},tabIndex:oe,className:(0,i.cn)(ge,"font-IBM","transition duration-150 ease-in-out","focus-visible:shadow-select-shadow focus-visible:outline-none","bg-base-bds-gray-ele-line","text-base-bds-gray-t1-title","border-none box-border ","hover:bg-base-bds-gray-ele-border","py-[12px]",G[s],J[s],{"py-[11px]":_==="tags","py-[7px]":_==="tags"&&s==="xs","h-auto":_==="tags"},Oe),children:(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:be}),(0,a.jsx)("div",{className:(0,i.cn)("font-IBM relative cursor-pointer ",{group:n&&le,"flex relative ":_==="tags"}),children:(0,a.jsxs)("div",{className:(0,i.cn)("flex items-center w-full gap-[8px]",{"h-auto sticky":_==="tags"}),children:[Ze(),Y&&He(),!Y&&Ye(),le&&(0,a.jsx)(C.EmptyIcon,{onClick:function(d){d.preventDefault(),d.stopPropagation(),_==="combobox"?(O(""),E==null||E("")):(O([]),E==null||E([]))},className:(0,i.cn)("cursor-pointer group-hover:duration-150 group-hover:ease-out group-hover:transition-all w-[20px] h-[20px] ","text-[#81858C] absolute  opacity-0 group-hover:static group-hover:inline-block group-hover:opacity-100 ",{"w-[16px] h-[16px]":["xs","small"].includes(s)})}),(0,a.jsx)(C.ArrowdownIcon,{className:(0,i.cn)("text-[#81858C] cursor-pointer transition-all group-hover:hidden w-[20px] h-[20px] ",{"rotate-180":Ae,"w-[16px] h-[16px]":["xs","small"].includes(s)})})]})})]})})})},dropdownStyle:{background:"var(--bds-gray-bg-float)",border:"1px solid var(--bds-gray-ele-line)",boxShadow:"var(--bds-shadow-l1)",borderRadius:"8px"},animation:"slide-up",dropdownClassName:(0,i.cn)(Q,Ie,"font-IBM  absolute z-[10000] pointer-events-auto text-base-bds-gray-t1-title border-none","bg-base-bds-gray-bg-card border-base-bds-gray-ele-line","shadow-boxShadow-bds-shadow-l1 p-[4px]"),allowClear:!0,dropdownRender:function(o){var d="small";return s==="medium"?d="small":(s==="small"||s==="xs")&&(d="xs"),(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[Me&&(0,a.jsx)(v.o,{size:d,id:be,value:Z,onChange:function(f){fe(f.target.value)},className:(0,i.cn)("w-auto mb-[10px] ",{"mx-[2px] h-[40px]":s==="small"})}),o]})})},getPopupContainer:function(){return $?$==null?void 0:$():Ke}},we),{},{children:$e.map(function(l){return l.type==="divider"?(0,a.jsx)(r.Wx,{disabled:!0,className:"h-auto",children:(0,a.jsx)(y.Z,{style:{marginTop:"0px",marginBottom:"4px"}})}):(0,a.jsx)(r.Wx,{"data-changed":l.value===n,value:l.value,className:(0,i.cn)("custom-select-option-selector ",X,"mb-[4px] last:mb-0  w-full cursor-pointer rounded-md font-normal select-none items-center py-[8px]  pr-2 outline-none  h-[40px] text-base px-[12px]","text-base-bds-gray-t1-title","focus:bg-base-bds-trans-hover","hover:bg-base-bds-trans-hover ","whitespace-nowrap overflow-hidden text-ellipsis","flex","data-[selected=true]:bg-base-bds-trans-hover","rc-select-item-option-selected:inline-block","rc-select-item-option-active:bg-base-bds-trans-hover","aria-[selected=true]:text-brandColor-bds-brand-900-text","data-[changed=true]:text-brandColor-bds-brand-900-text","data-[selected=true]:font-medium aria-[selected=true]:font-medium data-[changed=true]:font-medium","transition ease-in-out duration-150",{"text-center":Pe,"h-[26px] py-[4px] px-[8px] text-xs":s==="small"||s==="xs","gap-2":_!=="combobox"},Se),children:me?me(l):W(l.label,s)},l.value)})}))};k.displayName="Select"},27036:function(te,I,e){e.d(I,{V:function(){return C}});var w=e(97857),p=e.n(w),R=e(13769),j=e.n(R),P=e(67294),m=e(36493),U=e(70696),A=e(19492),N=(0,A.j)(["whitespace-nowrap font-medium","inline-flex items-center gap-1","ps-2 pe-2","rounded","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:bg-base-bds-gray-ele-edge data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs leading-[16.8px] h-[16.8px] scale-[0.83333] ps-[4px] pe-[4px]"],normal:["text-xs leading-[18px] h-[18px] ps-[4px] pe-[4px]"],large:["text-sm leading-[24px] h-[24px] ps-[6px] pe-[6px]"],xlarge:["text-base leading-[32px] h-[32px] ps-[8px] pe-[8px]"]},variant:{default:[],primary:["text-white"],light:[]},color:{neutral:[],red:[],green:[],brand:[],"reddish-gradient":[],"brand-gradient":[]},shape:{normal:[],leaf:["rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none"]}},compoundVariants:[{variant:"default",color:"neutral",className:["bg-base-bds-gray-ele-line text-base-bds-gray-t2"]},{variant:"default",color:"red",className:["bg-redColor-bds-red-100-bg text-redColor-bds-red-700-normal"]},{variant:"default",color:"green",className:["bg-greenColor-bds-green-100-bg text-greenColor-bds-green-700-normal"]},{variant:"default",color:"brand",className:["bg-brandColor-bds-brand-100-bg text-brandColor-bds-brand-900-text"]},{variant:"primary",color:"neutral",className:["bg-base-bds-gray-t2 "]},{variant:"primary",color:"red",className:["bg-redColor-bds-red-700-normal"]},{variant:"primary",color:"green",className:["bg-greenColor-bds-green-700-normal"]},{variant:"primary",color:"brand",className:["bg-brandColor-bds-brand-700-normal"]},{variant:"primary",color:"reddish-gradient",className:["bg-bds-gradient-reddish"]},{variant:"primary",color:"brand-gradient",className:["bg-bds-gradient-brand text-base-bds-gray-t1-title"]},{variant:"light",color:"neutral",className:["border border-solid border-base-bds-gray-t4-dis","text-base-bds-gray-t2","data-[disabled]:bg-transparent data-[disabled]:border-base-bds-gray-ele-border"]}],defaultVariants:{variant:"default",size:"normal",color:"neutral",shape:"normal"}}),g=e(85893),i=["className","color","variant","size","shape","children","closeIcon","onClose","style"],C=(0,P.forwardRef)(function(r,c){var y=r.className,b=r.color,v=r.variant,L=r.size,a=r.shape,H=r.children,T=r.closeIcon,F=T===void 0?!1:T,W=r.onClose,G=r.style,J=j()(r,i),Q=(0,P.useMemo)(function(){return b?(0,m.K_)(b)?v==="primary"?{backgroundColor:b}:{color:b,backgroundColor:(0,m.ey)(b,.2)}:{}:{}},[]),X=function(q){r.disabled||W==null||W(q)};return(0,g.jsxs)("div",p()(p()({className:(0,m.cn)(y,N({color:b,variant:v,size:L,shape:a})),ref:c,"data-disabled":r.disabled?"":void 0,style:p()(p()({},G),Q)},J),{},{children:[H,F&&(0,g.jsx)(U.CloseIcon,{className:"cursor-pointer data-[disabled]:cursor-not-allowed","data-disabled":r.disabled?"":void 0,onClick:X})]}))})}}]);
