"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[1561],{65219:function(Re,$,t){t.r($),t.d($,{default:function(){return y}});var A=t(5574),f=t.n(A),j=t(92327),h=t(9783),F=t.n(h),P=t(74094),b=t(27060),L=t(97857),m=t.n(L),M=t(13769),w=t.n(M),p=t(67294),x=t(36493),e=t(85893),be=["className","height"],ye=["className"],S=["className"],oe=["className"],ie=["className"],ce=["className"],g=["className"],q=["className"],U=p.forwardRef(function(a,l){var o=a.className,s=a.height,V=w()(a,be);return(0,e.jsx)("div",{className:"w-full h-full overflow-auto",style:{height:s},children:(0,e.jsx)("table",m()({ref:l,className:(0,x.cn)("moly-table w-full caption-bottom",o)},V))})});U.displayName="Table";var I=p.forwardRef(function(a,l){var o=a.className,s=w()(a,ye);return(0,e.jsx)("thead",m()({ref:l,className:(0,x.cn)(o)},s))});I.displayName="TableHeader";var Z=p.forwardRef(function(a,l){var o=a.className,s=w()(a,S);return(0,e.jsx)("tbody",m()({ref:l,className:(0,x.cn)("[&_tr:last-child]:border-0",o)},s))});Z.displayName="TableBody";var Q=p.forwardRef(function(a,l){var o=a.className,s=w()(a,oe);return(0,e.jsx)("tfoot",m()({ref:l,className:(0,x.cn)("bg-primary font-medium text-primary-foreground",o)},s))});Q.displayName="TableFooter";var R=p.forwardRef(function(a,l){var o=a.className,s=w()(a,ie);return(0,e.jsx)("tr",m()({ref:l,className:(0,x.cn)("transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",o)},s))});R.displayName="TableRow";var Se=p.forwardRef(function(a,l){var o=a.className,s=w()(a,ce);return(0,e.jsx)("th",m()({ref:l,className:(0,x.cn)("text-left align-middle text-muted-foreground [&:has([role=checkbox])]:pr-0",o)},s))});Se.displayName="TableHead";var N=p.forwardRef(function(a,l){var o=a.className,s=w()(a,g);return(0,e.jsx)("td",m()({ref:l,className:(0,x.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",o)},s))});N.displayName="TableCell";var _=p.forwardRef(function(a,l){var o=a.className,s=w()(a,q);return(0,e.jsx)("caption",m()({ref:l,className:(0,x.cn)("mt-4 text-sm text-muted-foreground",o)},s))});_.displayName="TableCaption";var ee=t(91473),de=t(64707),X,G=function(a){return a.NETWORK="NETWORK",a.SYSTEM="SYSTEM",a}({}),B=(X={},F()(X,G.SYSTEM,{img:"//s1.bycsi.com/bybit/deadpool/image-c1e7653506224aca8575be2d20df897a.png",text:"System error. Please try again later."}),F()(X,G.NETWORK,{img:"//s1.bycsi.com/bybit/deadpool/image-0ad9ab6dd3d445d5a32a443f630aa983.png",text:"Network error. Please try again later."}),X);function Te(a){var l,o=a.columns,s=a.data,V=a.height,te=V===void 0?"auto":V,K=a.loading,Ne=K===void 0?!1:K,ae=a.isLite,ue=ae===void 0?!1:ae,J=a.error,fe=a.rowSplitStyle,ne=fe===void 0?"normal":fe,re=a.cellSpaceStyle,k=re===void 0?"normal":re,ve=a.showRowSelection,me=ve===void 0?!0:ve,pe=a.className,le=a.emptyText,Ce=le===void 0?"No Records":le,ge=a.errorText,D=a.onRowClick,je=p.useState({}),he=f()(je,2),z=he[0],xe=he[1],se=(0,P.b7)({data:s,columns:o,getCoreRowModel:(0,b.sC)(),state:{expanded:z},onExpandedChange:xe,getExpandedRowModel:(0,b.rV)()});return(0,e.jsxs)(U,{className:(0,x.cn)("font-IBM",pe),height:te,children:[(0,e.jsx)(I,{children:se.getHeaderGroups().map(function(i,C){return(0,e.jsx)(R,{children:i.headers.map(function(d,E){return(0,e.jsx)(Se,{className:(0,x.cn)("p-[12px] gap-[8px]","font-IBM","text-[12px]","font-[400]","leading-bds-line-height-12","text-base-bds-gray-t2",ue?"border-solid border-b border-base-bds-gray-ele-border":"bg-base-bds-gray-bg-edge"),children:d.isPlaceholder?null:(0,P.ie)(d.column.columnDef.header,d.getContext())},(d==null?void 0:d.id)||E)})},(i==null?void 0:i.id)||C)})}),(0,e.jsxs)(Z,{className:"relative",children:[J?(0,e.jsx)(R,{children:(0,e.jsx)(N,{colSpan:o.length,className:"w-full",children:(0,e.jsx)("div",{className:"h-[300px] pt-[71px] mx-auto flex flex-col items-center gap-[16px]",children:(0,e.jsx)(ee.Z,{title:"",subTitle:"".concat(ge||B[J.type].text," (Code: ").concat(J.code,")"),status:J.type===G.NETWORK?"networkError":"databaseError"})})})}):(l=se.getRowModel().rows)!==null&&l!==void 0&&l.length?se.getRowModel().rows.map(function(i,C){return(0,e.jsxs)(p.Fragment,{children:[(0,e.jsx)(R,{"data-state":i.getIsSelected()&&"selected",className:(0,x.cn)("transition",me?"hover:bg-base-bds-trans-hover":"hover:bg-inherit",D?"cursor-pointer":""),onClick:function(E){return D==null?void 0:D(E,i.id)},children:i.getVisibleCells().map(function(d,E){return(0,e.jsx)(N,{className:(0,x.cn)("px-[12px]",k==="normal"&&"py-[12px]",k==="small"&&"py-[8px]",k==="large"&&"py-[16px]","font-IBM","text-[14px]","font-[500]","leading-bds-line-height-14","text-base-bds-gray-t1-title",ne!=="none"&&"border-solid border-b",ne==="strong"?"border-base-bds-gray-ele-border":"border-base-bds-gray-ele-line"),children:(0,P.ie)(d.column.columnDef.cell,d.getContext())},(d==null?void 0:d.id)||E)})}),!!i.getIsExpanded()&&(0,e.jsx)(R,{children:(0,e.jsx)(N,{colSpan:o.length,className:(0,x.cn)("px-[40px] py-[16px]","font-IBM","text-base-bds-gray-t1-title","bg-base-bds-gray-bg-edge"),children:i.getValue("extend")})})]},(i==null?void 0:i.id)||C)}):(0,e.jsx)(R,{children:(0,e.jsx)(N,{colSpan:o.length,className:"w-full",children:(0,e.jsx)("div",{className:"h-[300px] pt-[71px] mx-auto flex flex-col items-center gap-[16px]",children:(0,e.jsx)(ee.Z,{title:"",subTitle:Ce})})})}),Ne&&(0,e.jsx)(R,{children:(0,e.jsx)(N,{colSpan:o.length,className:"w-full",children:(0,e.jsx)("div",{className:(0,x.cn)("absolute left-0 top-0 w-full h-full opacity-90 bg-base-bds-gray-bg-card flex justify-center items-center"),children:(0,e.jsx)(de.Z,{})})})})]})]})}var r=Te,n=r,v=G;function c(){return[{orderId:"a00000000001",qty:34.25235,price:4234.52352,side:"buy",type:"Market",status:"created",time:new Date().valueOf()},{orderId:"a00000000002",qty:34.222235,price:434.52352,side:"sell",type:"Market",status:"processing",time:new Date().valueOf()},{orderId:"a00000000003",qty:4.32222,price:4234343452352e-5,side:"sell",type:"Limit",status:"failed",time:new Date().valueOf()},{orderId:"a00000000004",qty:5.25235,price:.52352,side:"buy",type:"Market",status:"success",time:new Date().valueOf()}]}var T=function(){var l=[{accessorKey:"orderId",header:function(u){var O=u.column;return(0,e.jsxs)("div",{children:[O.id,"(Order ID)"]})}},{accessorKey:"price",header:"Price"},{accessorKey:"qty",header:"Quantity"},{accessorKey:"side",header:"B/S",cell:function(u){var O,H,we=u.row;return(0,e.jsx)("span",{children:(O=we.getValue("side"))===null||O===void 0||(H=O.toString())===null||H===void 0?void 0:H.toUpperCase()})}},{accessorKey:"type",header:"Order Type"},{accessorKey:"status",header:"Status"},{accessorKey:"time",header:"Amount2",cell:function(u){var O=u.row,H=new Date(O.getValue("time"));return"".concat(H.getFullYear(),"-").concat(H.getMonth()+1,"-").concat(H.getDate()," ").concat(H.getHours(),": ").concat(H.getMinutes(),":").concat(H.getSeconds())}}],o=c(),s=(0,p.useState)(!1),V=f()(s,2),te=V[0],K=V[1],Ne=(0,p.useState)(!1),ae=f()(Ne,2),ue=ae[0],J=ae[1],fe=(0,p.useState)(),ne=f()(fe,2),re=ne[0],k=ne[1],ve=(0,p.useState)(!1),me=f()(ve,2),pe=me[0],le=me[1],Ce=(0,p.useState)(!1),ge=f()(Ce,2),D=ge[0],je=ge[1],he=(0,p.useState)(),z=f()(he,2),xe=z[0],se=z[1],i=(0,p.useState)(),C=f()(i,2),d=C[0],E=C[1],Y=function(u,O){D&&(u.stopPropagation(),u.nativeEvent.stopPropagation(),alert(O))};return(0,e.jsxs)("div",{className:"container mx-auto py-10",children:[(0,e.jsx)(n,{columns:l,data:pe?[]:o,height:"205px",loading:te,isLite:ue,error:re,showRowSelection:D,onRowClick:Y,rowSplitStyle:xe,cellSpaceStyle:d}),(0,e.jsxs)("div",{className:"mt-[50px] flex gap-4 flex-wrap",children:[(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-[40px]",children:["loading:",(0,e.jsx)(j.P,{width:100,defaultValue:"0",onChange:function(u){K(u==="1")},options:[{label:"\u5F00\u542F",value:"1"},{label:"\u5173\u95ED",value:"0"}]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-[40px]",children:["isLite:",(0,e.jsx)(j.P,{width:100,defaultValue:"0",onChange:function(u){J(u==="1")},options:[{label:"\u5F00\u542F",value:"1"},{label:"\u5173\u95ED",value:"0"}]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-[40px]",children:["error:",(0,e.jsx)(j.P,{width:180,defaultValue:"",onChange:function(u){k(u?{type:u,code:"0000001"}:void 0)},options:[{label:"none",value:""},{label:"Network Error",value:v.NETWORK},{label:"System Error",value:v.SYSTEM}]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-[40px]",children:["empty:",(0,e.jsx)(j.P,{width:180,defaultValue:!1,onChange:function(u){le(!!u)},options:[{label:"\u975E\u7A7A",value:!1},{label:"\u7A7A",value:!0}]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-[40px]",children:["onRowClick:",(0,e.jsx)(j.P,{width:100,defaultValue:D?"1":"0",onChange:function(u){je(u==="1")},options:[{label:"\u5F00\u542F",value:"1"},{label:"\u5173\u95ED",value:"0"}]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-[40px]",children:["rowSplitStyle:",(0,e.jsx)(j.P,{width:160,defaultValue:"",onChange:function(u){se(u)},options:[{label:"\u9ED8\u8BA4",value:"undefined"},{label:"normal",value:"normal"},{label:"strong",value:"strong"},{label:"none",value:"none"}]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-2 mb-[40px]",children:["cellSpaceStyle:",(0,e.jsx)(j.P,{width:120,defaultValue:"",onChange:function(u){E(u)},options:[{label:"\u9ED8\u8BA4",value:""},{label:"small",value:"small"},{label:"normal",value:"normal"},{label:"large",value:"large"}]})]})]})]})},y=T},91473:function(Re,$,t){var A=t(93175);$.Z=A.Z},64707:function(Re,$,t){t.d($,{Z:function(){return ie}});var A=t(97857),f=t.n(A),j=t(5574),h=t.n(j),F=t(65090),P=t(36493),b=t(67294),L=t(68400),m=t.n(L),M=t(93985),w,p,x="animation: bybit 1s linear infinite;",e=function(g,q,U,I){return"@keyframes ".concat(g,` {
      0%,
      100% {
        transform: translate(`).concat(q,", ").concat(U,`);
        `).concat(x,`
      }

      50% {
        transform: translate(`).concat(q,", ").concat(I,`);
        `).concat(x,`
      }
    }`)},be=(0,M.iv)(w||(w=m()([`
  `,`
`])),[e("moly-spin","0","-25%","25%"),e("moly-spin-1","19%","-25%","25%"),e("moly-spin-2","45%","-25%","25%"),e("moly-spin-3","70%","-50%","0%"),e("moly-spin-4","80%","-25%","25%")].join(`
`)),ye=(0,M.iv)(p||(p=m()([`
  color: var(--bds-gray-t1-title);
`]))),S=t(85893),oe=function(g){var q=(0,F.F)(),U=h()(q,1),I=U[0],Z=I==="light"?"#000":"#fff",Q=typeof g.size=="number"?g.size:64;g.size==="small"?Q=48:g.size==="large"&&(Q=96);var R=g.spinning!==!1,Se=g.children!==void 0,N={display:"inline-block",animationDuration:"1s",animationIterationCount:"infinite",animationFillMode:"both"},_=function(r){return(0,S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:Q,height:Q,viewBox:"0 0 54 15",fill:"none",style:f()({display:"inline",padding:4,transitionProperty:"opacity",transitionDuration:"0.4s",opacity:R?"1":"0"},r||{}),children:[(0,S.jsx)("path",{d:"M6.03751 14.9988H0V0.455078H5.79357C8.60948 0.455078 10.2508 2.04847 10.2508 4.54014C10.2508 6.15492 9.19812 7.1949 8.46895 7.54245C9.3413 7.95149 10.4549 8.87117 10.4549 10.8121C10.4549 13.5284 8.60948 14.9988 6.03751 14.9988ZM5.57084 2.98686H2.81591V6.33939H5.57084C6.76668 6.33939 7.43486 5.66567 7.43486 4.66312C7.43486 3.66324 6.76668 2.98686 5.57084 2.98686ZM5.7538 8.89256H2.81591V12.467H5.7538C7.02918 12.467 7.63903 11.6489 7.63903 10.6704C7.63903 9.68925 7.02918 8.89256 5.7538 8.89256Z",fill:Z,style:f()(f()({},N),{},{animationName:"moly-spin",animationDelay:"50ms"})}),(0,S.jsx)("path",{d:"M8.04326 9.03425V14.9988H5.24856V9.03425L0.91333 0.455078H3.97318L6.66713 6.318L9.3213 0.455078H12.3785L8.04326 9.03425Z",fill:Z,transform:"translate(11, 0)",style:f()(f()({},N),{},{animationName:"moly-spin-1",animationDelay:"100ms"})}),(0,S.jsx)("path",{d:"M6.03751 14.9988H0V0.455078H5.79357C8.60948 0.455078 10.2508 2.04847 10.2508 4.54014C10.2508 6.15492 9.19812 7.1949 8.46895 7.54245C9.3413 7.95149 10.4549 8.87117 10.4549 10.8121C10.4549 13.5284 8.60948 14.9988 6.03751 14.9988ZM5.57084 2.98686H2.81591V6.33939H5.57084C6.76668 6.33939 7.43486 5.66567 7.43486 4.66312C7.43486 3.66324 6.76668 2.98686 5.57084 2.98686ZM5.7538 8.89256H2.81591V12.467H5.7538C7.02918 12.467 7.63903 11.6489 7.63903 10.6704C7.63903 9.68925 7.02918 8.89256 5.7538 8.89256Z",fill:Z,transform:"translate(25 0)",style:f()(f()({},N),{},{animationName:"moly-spin-2",animationDelay:"150ms"})}),(0,S.jsx)("rect",{width:"3",height:"15",transform:"translate(38 -5)",fill:"#F7A600",style:f()(f()({},N),{},{animationName:"moly-spin-3",animationDelay:"200ms"})}),(0,S.jsx)("path",{d:"M6.74998 2.98686V14.9988H3.93407V2.98686H0.16626V0.455078H10.5178V2.98686H6.74998Z",transform:"translate(43 0)",fill:Z,style:f()(f()({},N),{},{animationName:"moly-spin-4",animationDelay:"250ms"})})]})},ee=g.indicator||_(),de="absolute w-[100%] h-[100%] left-0 top-0 overflow-hidden",X=I==="light"?"bg-white opacity-60":"bg-black opacity-50",G=ye,B="text-[14px]";return g.indicator===void 0&&(B+=" translate-y-[-14px]"),g.size==="small"&&(B="text-[12px]",g.indicator===void 0&&(B+=" translate-y-[-12px]")),g.size==="large"&&(B="text-[18px]",g.indicator===void 0&&(B+=" translate-y-[-18px]")),Se?(0,S.jsxs)("div",{className:(0,P.cn)(be,g.wrapperClassName||"","relative overflow-hidden"),children:[g.children,R?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{className:(0,P.cn)(de,X)}),(0,S.jsxs)("div",{className:(0,P.cn)(de,"grid","justify-center content-center"),children:[ee,g.tip?(0,S.jsx)("div",{className:(0,P.cn)("text-center",G,B),children:g.tip}):null]})]}):null]}):ee},ie=oe},36493:function(Re,$,t){t.d($,{KX:function(){return P},K_:function(){return h},cn:function(){return j},ey:function(){return F}});var A=t(86010),f=t(57851);function j(){for(var b=arguments.length,L=new Array(b),m=0;m<b;m++)L[m]=arguments[m];return(0,f.m)((0,A.W)(L))}function h(b){return b?/^#[0-9A-F]{6}$/i.test(b):!1}function F(b,L){if(!h(b))return b;var m=Math.round(L*255);return"".concat(b).concat(m.toString(16).toUpperCase())}function P(b,L){var m=b.findIndex(function(M){return M!=null});return m===-1?L:b[m]}},42978:function(Re,$,t){t.d($,{Z:function(){return Te}});var A=t(36493),f=t(55331),j=t(75531),h=t(67294),F=h.isValidElement;function P(r){return r&&F(r)&&r.type===React.Fragment}function b(r,n,v){return F(r)?h.cloneElement(r,typeof v=="function"?v(r.props||{}):v):n}function L(r,n){return b(r,r,n)}var m=t(38024),M=t(64543),w=t(97857),p=t.n(w),x=t(5574),e=t.n(x),be=t(68400),ye=t.n(be),S=t(93985),oe,ie="moly-wave-motion",ce="cubic-bezier(0.08, 0.82, 0.17, 1)",g="cubic-bezier(0.645, 0.045, 0.355, 1)",q=(0,S.hi)(oe||(oe=ye()([`
  .`,` {
    position: absolute;
    background: transparent;
    pointer-events: none;
    box-sizing: border-box;
    color: var(--wave-color);

    box-shadow: 0 0 0 0 currentColor;
    opacity: 1;

    &-appear {
      transition: box-shadow 0.4s `,", opacity 2s ",`;

      &-active {
        box-shadow: 0 0 0 6px currentcolor;
        opacity: 0;
      }

      &.wave-quick {
        transition: box-shadow 0.3s `,", opacity 0.35s ",`;
      }
    }
  }
`])),ie,ce,ce,g,g),U=t(82225),I=t(24996),Z="moly-wave-target";function Q(r){var n=(r||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return n&&n[1]&&n[2]&&n[3]?!(n[1]===n[2]&&n[2]===n[3]):!0}function R(r){return r&&r!=="#fff"&&r!=="#ffffff"&&r!=="rgb(255, 255, 255)"&&r!=="rgba(255, 255, 255, 1)"&&Q(r)&&!/rgba\((?:\d*, ){3}0\)/.test(r)&&r!=="transparent"}function Se(r){var n=getComputedStyle(r),v=n.borderTopColor,c=n.borderColor,T=n.backgroundColor;return R(v)?v:R(c)?c:R(T)?T:""}function N(r){return Number.isNaN(r)?0:r}var _=t(85893),ee=function(n){var v=n.className,c=n.target,T=n.component,y=h.useRef(null),a=h.useState([]),l=e()(a,2),o=l[0],s=l[1],V=h.useState(0),te=e()(V,2),K=te[0],Ne=te[1],ae=h.useState(0),ue=e()(ae,2),J=ue[0],fe=ue[1],ne=h.useState(0),re=e()(ne,2),k=re[0],ve=re[1],me=h.useState(0),pe=e()(me,2),le=pe[0],Ce=pe[1],ge=h.useState(!1),D=e()(ge,2),je=D[0],he=D[1],z={left:K,top:J,width:k,height:le,borderRadius:o.map(function(i){return"".concat(i,"px")}).join(" ")};c.classList.contains("ring-btn-green")?z["--wave-color"]="var(--bds-green-100-bg)":c.classList.contains("ring-btn-red")?z["--wave-color"]="var(--bds-red-100-bg)":z["--wave-color"]="var(--bds-brand-100-bg)";function xe(){var i=getComputedStyle(c),C=i.position==="static",d=i.borderLeftWidth,E=i.borderTopWidth;Ne(C?c.offsetLeft:N(-parseFloat(d))),fe(C?c.offsetTop:N(-parseFloat(E))),ve(c.offsetWidth),Ce(c.offsetHeight);var Y=i.borderTopLeftRadius,W=i.borderTopRightRadius,u=i.borderBottomLeftRadius,O=i.borderBottomRightRadius;s([Y,W,O,u].map(function(H){return N(parseFloat(H))}))}if(h.useEffect(function(){if(c){var i=(0,M.Z)(function(){xe(),he(!0)}),C;return typeof ResizeObserver!="undefined"&&(C=new ResizeObserver(xe),C.observe(c)),function(){var d;M.Z.cancel(i),(d=C)===null||d===void 0||d.disconnect()}}},[]),!je)return null;var se=(T==="Checkbox"||T==="Radio")&&(c==null?void 0:c.classList.contains(Z));return(0,_.jsx)(U.ZP,{visible:!0,motionAppear:!0,motionName:ie,motionDeadline:500,onAppearEnd:function(C,d){if(d.deadline||d.propertyName==="opacity"){var E,Y=(E=y.current)===null||E===void 0?void 0:E.parentElement;Y&&(0,I.vE)(Y).then(function(){Y==null||Y.remove()})}return!1},children:function(C){var d=C.className;return(0,_.jsx)("div",{ref:y,className:(0,A.cn)(v,{"wave-quick":se},d),style:z})}})},de=function(n,v){var c,T=v.component;if(!(T==="Checkbox"&&!((c=n.querySelector("input"))!==null&&c!==void 0&&c.checked))){var y=document.createElement("div");y.style.position="absolute",y.style.left="0px",y.style.top="0px",n==null||n.insertBefore(y,n==null?void 0:n.firstChild),(0,I.sY)((0,_.jsx)(ee,p()(p()({},v),{},{target:n})),y)}},X=de;function G(r,n,v){var c=(0,m.zX)(function(a){var l=r.current;if(l){var o=l.querySelector(".".concat(Z))||l;X(o,{className:n,component:v,event:a})}}),T=h.useRef(),y=function(l){M.Z.cancel(T.current),T.current=(0,M.Z)(function(){c(l)})};return y}var B=function(n){var v=n.children,c=n.disabled,T=n.component,y=(0,h.useRef)(null),a="moly-wave",l=G(y,(0,A.cn)(a),T);if(h.useEffect(function(){var s=y.current;if(!(!s||s.nodeType!==1||c)){var V=function(K){!(0,f.Z)(K.target)||!s.getAttribute||s.getAttribute("disabled")||s.disabled||s.className.includes("-leave")||l(K)};return s.addEventListener("click",V,!0),function(){s.removeEventListener("click",V,!0)}}},[c]),!h.isValidElement(v))return v!=null?v:null;var o=(0,j.Yr)(v)?(0,j.sQ)(v.ref,y):y;return L(v,{ref:o})},Te=B}}]);
