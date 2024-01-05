"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[2327],{97143:function(te,I,e){e.d(I,{o:function(){return x}});var w=e(97857),b=e.n(w),R=e(13769),N=e.n(R),j=e(76881),_=e(70696),f=e(67294),y=e(85893),U=["size"],x=(0,f.memo)(f.forwardRef(function(d,C){var P=d.size,r=P===void 0?"small":P,m=N()(d,U),E=(0,f.useMemo)(function(){return r==="tiny"?16:20},[r]),p=(0,f.useMemo)(function(){return r==="tiny"?32:40},[r]),D=(0,f.useMemo)(function(){return E*2},[E]);return(0,y.jsxs)("div",{className:"relative",children:[(0,y.jsx)(_.SearchIcon,{className:"absolute left-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 text-base-bds-gray-t2 text-bds-font-size-".concat(E)}),(0,y.jsx)(j.I,b()(b()({ref:C},m),{},{size:r==="tiny"?"xs":r,style:{paddingLeft:D,height:p}}))]})}));x.displayName="Search"},92327:function(te,I,e){e.d(I,{P:function(){return X}});var w=e(97857),b=e.n(w),R=e(19632),N=e.n(R),j=e(5574),_=e.n(j),f=e(13769),y=e.n(f),U=e(68400),x=e.n(U),d=e(36493),C=e(70696),P=e(93985),r=e(43543),m=e(67294),E=e(32538),p=e(93175),D=e(97143),$=e(27036),a=e(85893),H=["tabIndex","customButton","contentCenter","allowClear","notFoundText","defaultValue","onChange","options","showSearch","mode","placeholder","size","tagSize","RenderNode","valueRender","value","width","height","className","getPopupContainer","onDropdownVisibleChange","optionClass","dropdownClassName"],L,K,A=function(n,q,ne,ee){return(0,a.jsx)("div",{className:(0,d.cn)("truncate"),title:n,children:n})},Z={xs:["text-[12px] font-medium leading-[18px]"],small:["text-[12px] font-medium leading-[18px]"],medium:["text-[16px] font-medium leading-6"],large:["text-[20px] font-medium leading-7"]},G={xs:["min-h-[32px] h-auto px-[8px]  py-[7px]  rounded"],small:["min-h-[40px] h-auto px-[12px] rounded"],medium:["min-h-[48px] h-auto px-[16px] rounded-lg"]},J=(0,P.iv)(L||(L=x()([`
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
`]))),Q=(0,P.iv)(K||(K=x()([`
  .rc-select-item-option-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`]))),X=function(n){var q=n.tabIndex,ne=q===void 0?1:q,ee=n.customButton,Ee=n.contentCenter,je=n.allowClear,oe=n.notFoundText,Pe=n.defaultValue,De=n.onChange,re=n.options,T=re===void 0?[]:re,Me=n.showSearch,le=n.mode,u=le===void 0?"combobox":le,se=n.placeholder,ie=se===void 0?"please select":se,de=n.size,s=de===void 0?"medium":de,W=n.tagSize,ue=n.RenderNode,V=n.valueRender,g=n.value,M=n.width,B=n.height,Se=n.className,F=n.getPopupContainer,ae=n.onDropdownVisibleChange,Oe=n.optionClass,Ie=n.dropdownClassName,we=y()(n,H);M||(s==="medium"?M=380:M=276),B||(s==="medium"?B=48:s==="xs"?B=32:B=40);var Re=(0,m.useState)("label_"+(Math.random()*1e8).toFixed(0)),ce=_()(Re,2),_e=ce[0],Qe=ce[1],Ne=(0,m.useState)(!1),me=_()(Ne,2),Ue=me[0],Le=me[1],Ae=(0,m.useState)(""),be=_()(Ae,2),Y=be[0],pe=be[1],Te=(0,m.useState)(["tags","multiple"].includes(u)&&!Array.isArray(g)?[]:g),ve=_()(Te,2),t=ve[0],S=ve[1],We=(0,m.useState)("rc_"+(Math.random()*1e8).toFixed(0)),fe=_()(We,2),he=fe[0],Xe=fe[1],Be=(0,m.useState)(document.body),xe=_()(Be,2),ze=xe[0],Ke=xe[1],Ve=function(){var o="calc(100% - 14px)";return(s==="medium"||!s)&&(o="calc(100% - 16px)"),{width:o}};(0,m.useLayoutEffect)(function(){for(var l,o=document.querySelector(".".concat(he));o&&!((i=o)!==null&&i!==void 0&&(c=i.parentElement)!==null&&c!==void 0&&c.classList.contains("moly-modal"));){var i,c,v;o=(v=o)===null||v===void 0?void 0:v.parentElement}Ke(((l=o)===null||l===void 0?void 0:l.parentElement)||document.body)},[]),(0,m.useEffect)(function(){return S(g||Pe),(t==null?void 0:t.toString())!==(g==null?void 0:g.toString())&&S(g),function(){}},[g]);var Fe=function(o){var i=t.filter(function(c){return c!==o});S(N()(i))},Ye=function(){var o=Ve(),i=o.width;if(u==="combobox"){var c;return t?(0,a.jsx)("div",{className:(0,d.cn)("truncate inline-block flex-1"),children:((c=T.find(function(O){return O.value===t}))===null||c===void 0?void 0:c.label)||t}):(0,a.jsx)(a.Fragment,{})}if(Array.isArray(t)&&t.length>0){var v=[],ge=t.map(function(O){var z=T.find(function(Je){return Je.value===O}),Ce=z.label,h=z.value,Ge=h===void 0?"":h;return v.push(Ge),Ce});if(u==="tags"){var ye=W;return W||s==="medium"&&(ye="large"),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("div",{className:(0,d.cn)("flex flex-wrap",{"gap-[6px]":!W||W==="normal","gap-[4px]":W==="small"||s==="small"}),children:ge.map(function(O,z){return(0,a.jsx)($.V,{variant:"light",closeIcon:!0,className:"w-auto",size:ye,onClose:function(h){h==null||h.preventDefault(),h==null||h.stopPropagation(),Fe(v[z])},children:O},O+"_"+z)})})})}return(0,a.jsxs)("div",{style:{width:i},children:["+ ",ge.length]})}},$e=T.filter(function(l){return Y?l.label.toLowerCase().indexOf(Y.toLowerCase())>-1||l.value.toString().toLowerCase().indexOf(Y.toLowerCase())>-1:!0}),He=function(o){if(u==="combobox"){if(t)return null}else if(Array.isArray(t)&&(t==null?void 0:t.length)>0)return null;return(0,a.jsx)("div",{className:"truncate inline-block flex-1",style:{color:"var(--bds-gray-t3)"},children:ie},Math.random()+"_")},Ze=function(){if(t===void 0||Array.isArray(t)&&(t==null?void 0:t.length)===0)return(0,a.jsx)(a.Fragment,{});if(["tags","multiple"].includes(u)){if(Array.isArray(t)){var o=t.map(function(c){return T.find(function(v){return v.value===c})});return(0,a.jsx)("div",{className:"flex-1",children:V(t,o)})}}else{var i=T.find(function(c){return c.value===t});return(0,a.jsx)("div",{className:"flex-1",children:V(t,i)})}};return(0,a.jsx)(r.ZP,b()(b()({virtual:!1,onDropdownVisibleChange:function(o){Le(o),pe(""),ae==null||ae(o)},optionFilterProp:"text",value:t,mode:u,placeholder:ie,onChange:function(o){De(o),S(o)},menuItemSelectedIcon:function(o){var i=o.isSelected;return i?(0,a.jsx)(C.CheckIcon,{}):""},notFoundContent:(0,a.jsx)("div",{className:"font-IBM text-center pb-[12px]",children:(0,a.jsx)(p.Z,{size:"small",title:"",status:"noSearchResult",subTitle:oe||"No Records Found"})}),getRawInputElement:function(){return ee||(0,a.jsx)("div",{style:{width:M,height:u==="tags"?"auto":B,minWidth:M,maxWidth:M},tabIndex:ne,className:(0,d.cn)(he,"font-IBM","transition duration-150 ease-in-out","focus-visible:shadow-select-shadow focus-visible:outline-none","bg-base-bds-gray-ele-line","text-base-bds-gray-t1-title","border-none box-border ","hover:bg-base-bds-gray-ele-border","py-[12px]",Z[s],G[s],{"py-[11px]":u==="tags","py-[7px]":u==="tags"&&s==="xs","h-auto":u==="tags"},Se),children:(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:_e}),(0,a.jsx)("div",{className:(0,d.cn)("font-IBM relative cursor-pointer ",{group:t&&je,"flex relative ":u==="tags"}),children:(0,a.jsxs)("div",{className:(0,d.cn)("flex items-center w-full gap-[8px]",{"h-auto sticky":u==="tags"}),children:[He(),V&&Ze(),!V&&Ye(),(0,a.jsx)(C.EmptyIcon,{onClick:function(i){i.preventDefault(),i.stopPropagation(),S(u==="combobox"?"":[])},className:(0,d.cn)("cursor-pointer group-hover:duration-150 group-hover:ease-out group-hover:transition-all w-[20px] h-[20px] ","text-[#81858C] absolute  opacity-0 group-hover:static group-hover:inline-block group-hover:opacity-100 ",{"w-[16px] h-[16px]":["xs","small"].includes(s)})}),(0,a.jsx)(C.ArrowdownIcon,{className:(0,d.cn)("text-[#81858C] cursor-pointer transition-all group-hover:hidden w-[20px] h-[20px] ",{"rotate-180":Ue,"w-[16px] h-[16px]":["xs","small"].includes(s)})})]})})]})})})},dropdownStyle:{background:"var(--bds-gray-bg-float)",border:"1px solid var(--bds-gray-ele-line)",boxShadow:"var(--bds-shadow-l1)",borderRadius:"8px"},animation:"slide-up",dropdownClassName:(0,d.cn)(J,Ie,"font-IBM  absolute z-[10000] pointer-events-auto text-base-bds-gray-t1-title border-none","bg-base-bds-gray-bg-card border-base-bds-gray-ele-line","shadow-boxShadow-bds-shadow-l1 p-[4px]"),allowClear:!0,dropdownRender:function(o){var i="small";return s==="medium"?i="small":(s==="small"||s==="xs")&&(i="tiny"),(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[Me&&(0,a.jsx)(D.o,{size:i,id:_e,value:Y,onChange:function(v){pe(v.target.value)},className:(0,d.cn)("w-auto mb-[10px] ",{"mx-[2px] h-[40px]":s==="small"})}),o]})})},getPopupContainer:function(){return F?F==null?void 0:F():ze}},we),{},{children:$e.map(function(l){return l.type==="divider"?(0,a.jsx)(r.Wx,{disabled:!0,className:"h-auto",children:(0,a.jsx)(E.Z,{style:{marginTop:"0px",marginBottom:"4px"}})}):(0,a.jsx)(r.Wx,{"data-changed":l.value===t,value:l.value,className:(0,d.cn)("custom-select-option-selector ",Q,"mb-[4px] last:mb-0  w-full cursor-pointer rounded-md font-normal select-none items-center py-[8px]  pr-2 outline-none  h-[40px] text-base px-[12px]","text-base-bds-gray-t1-title","focus:bg-base-bds-trans-hover","hover:bg-base-bds-trans-hover ","whitespace-nowrap overflow-hidden text-ellipsis","flex","data-[selected=true]:bg-base-bds-trans-hover","rc-select-item-option-selected:inline-block","rc-select-item-option-active:bg-base-bds-trans-hover","aria-[selected=true]:text-brandColor-bds-brand-900-text","data-[changed=true]:text-brandColor-bds-brand-900-text","data-[selected=true]:font-medium aria-[selected=true]:font-medium data-[changed=true]:font-medium","transition ease-in-out duration-150",{"text-center":Ee,"h-[26px] py-[4px] px-[8px] text-xs":s==="small"||s==="xs","gap-2":u!=="combobox"},Oe),children:ue?ue(l):A(l.label,s)},l.value)})}))};X.displayName="Select"},27036:function(te,I,e){e.d(I,{V:function(){return C}});var w=e(97857),b=e.n(w),R=e(13769),N=e.n(R),j=e(67294),_=e(36493),f=e(70696),y=e(19492),U=(0,y.j)(["whitespace-nowrap font-medium","inline-flex items-center gap-1","ps-2 pe-2","rounded","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:bg-base-bds-gray-ele-edge data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs leading-[16.8px] h-[16.8px] scale-[0.83333] ps-[4px] pe-[4px]"],normal:["text-xs leading-[18px] h-[18px] ps-[4px] pe-[4px]"],large:["text-sm leading-[24px] h-[24px] ps-[6px] pe-[6px]"],xlarge:["text-base leading-[32px] h-[32px] ps-[8px] pe-[8px]"]},variant:{default:[],primary:["text-white"],light:[]},color:{neutral:[],red:[],green:[],brand:[],"reddish-gradient":[],"brand-gradient":[]},shape:{normal:[],leaf:["rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none"]}},compoundVariants:[{variant:"default",color:"neutral",className:["bg-base-bds-gray-ele-line text-base-bds-gray-t2"]},{variant:"default",color:"red",className:["bg-redColor-bds-red-100-bg text-redColor-bds-red-700-normal"]},{variant:"default",color:"green",className:["bg-greenColor-bds-green-100-bg text-greenColor-bds-green-700-normal"]},{variant:"default",color:"brand",className:["bg-brandColor-bds-brand-100-bg text-brandColor-bds-brand-900-text"]},{variant:"primary",color:"neutral",className:["bg-base-bds-gray-t2 "]},{variant:"primary",color:"red",className:["bg-redColor-bds-red-700-normal"]},{variant:"primary",color:"green",className:["bg-greenColor-bds-green-700-normal"]},{variant:"primary",color:"brand",className:["bg-brandColor-bds-brand-700-normal"]},{variant:"primary",color:"reddish-gradient",className:["bg-bds-gradient-reddish"]},{variant:"primary",color:"brand-gradient",className:["bg-bds-gradient-brand text-base-bds-gray-t1-title"]},{variant:"light",color:"neutral",className:["border border-solid border-base-bds-gray-t4-dis","text-base-bds-gray-t2","data-[disabled]:bg-transparent data-[disabled]:border-base-bds-gray-ele-border"]}],defaultVariants:{variant:"default",size:"normal",color:"neutral",shape:"normal"}}),x=e(85893),d=["className","color","variant","size","shape","children","closeIcon","onClose","style"],C=(0,j.forwardRef)(function(r,m){var E=r.className,p=r.color,D=r.variant,$=r.size,a=r.shape,H=r.children,L=r.closeIcon,K=L===void 0?!1:L,A=r.onClose,Z=r.style,G=N()(r,d),J=(0,j.useMemo)(function(){return p?(0,_.K_)(p)?D==="primary"?{backgroundColor:p}:{color:p,backgroundColor:(0,_.ey)(p,.2)}:{}:{}},[]),Q=function(k){r.disabled||A==null||A(k)};return(0,x.jsxs)("div",b()(b()({className:(0,_.cn)(E,U({color:p,variant:D,size:$,shape:a})),ref:m,"data-disabled":r.disabled?"":void 0,style:b()(b()({},Z),J)},G),{},{children:[H,K&&(0,x.jsx)(f.CloseIcon,{className:"cursor-pointer data-[disabled]:cursor-not-allowed","data-disabled":r.disabled?"":void 0,onClick:Q})]}))})}}]);
