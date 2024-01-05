!(function(){"use strict";var Ae=Object.defineProperty;var re=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var ue=(m,r,e)=>r in m?Ae(m,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[r]=e,ee=(m,r)=>{for(var e in r||(r={}))ve.call(r,e)&&ue(m,e,r[e]);if(re)for(var e of re(r))fe.call(r,e)&&ue(m,e,r[e]);return m};var me=(m,r)=>{var e={};for(var s in m)ve.call(m,s)&&r.indexOf(s)<0&&(e[s]=m[s]);if(m!=null&&re)for(var s of re(m))r.indexOf(s)<0&&fe.call(m,s)&&(e[s]=m[s]);return e};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[5031],{13342:function(m,r,e){e.r(r);var s=e(79700),i=e(85893),t=function(){return(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsx)(s.b,{banner:!0,variant:"remind",closeIcon:!0,onClose:function(){return alert("On close message!")},message:"Highlighted info that requires user's notice to helps them to complete the task."}),(0,i.jsx)(s.b,{banner:!0,message:"Tips, supplementary information or guidelines that help user to proceed."}),(0,i.jsx)(s.b,{banner:!0,variant:"warn",message:"Warnings or critical information that require user notice and might cause destructive results."})]})};r.default=t},56065:function(m,r,e){e.r(r);var s=e(79700),i=e(85893),t=function(){return(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsx)(s.b,{variant:"remind",closeIcon:!0,onClose:function(){return alert("On close message!")},message:"Highlighted info that requires user's notice to helps them to complete the task."}),(0,i.jsx)(s.b,{message:"Tips, supplementary information or guidelines that help user to proceed."}),(0,i.jsx)(s.b,{variant:"warn",message:"Warnings or critical information that require user notice and might cause destructive results."})]})};r.default=t},29503:function(m,r,e){e.r(r);var s=e(79700),i=e(70696),t=e(85893),d=function(){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(s.b,{variant:"remind",icon:(0,t.jsx)(i.VolumeIcon,{className:"text-brandColor-bds-brand-900-text"}),message:(0,t.jsx)("span",{className:"text-brandColor-bds-brand-900-text",children:"Risk Disclosure"}),description:"Highlighted info that requires user's notice to helps them to complete the task. Highlighted info that requires user's notice to helps them to complete the task"}),(0,t.jsx)(s.b,{showIcon:!1,message:(0,t.jsxs)("div",{className:"leading-bds-line-height-12 space-y-[4px] px-[4px] py-[8px]",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("div",{className:"text-base-bds-gray-t2",children:"Last Traded Pair"}),(0,t.jsx)("div",{className:"font-semibold",children:"RUB/USDT"})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("div",{className:"text-base-bds-gray-t2",children:"Reference Price"}),(0,t.jsx)("div",{className:"font-semibold",children:"455.45 RUB/USDT"})]}),(0,t.jsx)("div",{className:"text-base-bds-gray-t2",children:"A fixed price does not fluctuate based on market movements."})]})})]})};r.default=d},94656:function(m,r,e){e.r(r);var s=e(79700),i=e(82545),t=e(85893),d=function(){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(s.b,{variant:"remind",message:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:"Highlighted info that requires user\u2018s notice to helps them to complete the task."}),(0,t.jsx)(i.h,{variant:"primary",size:"normal",children:"View More"})]})}),(0,t.jsx)(s.b,{message:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:"Tips, supplementary information or guidelines that help user to proceed."}),(0,t.jsx)(i.h,{variant:"primary",size:"normal",children:"View More"})]})}),(0,t.jsx)(s.b,{variant:"warn",message:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:"Warnings or critical information that require user notice and might cause destructive results."}),(0,t.jsx)(i.h,{variant:"primary",size:"normal",children:"View More"})]})})]})};r.default=d},88133:function(m,r,e){var s=e(5193);r.Z=s.h},79700:function(m,r,e){e.d(r,{b:function(){return O}});var s=e(5574),i=e.n(s),t=e(88133),d=e(36493),v=e(70696),p=e(19492),a=e(86010),g=e(67294),c=e(85893),x=(0,p.j)(["flex flex-col w-full pl-[12px] rtl:pl-[8px] pr-[8px] rtl:pr-[12px] py-[8px] text-bds-font-size-14 leading-bds-line-height-14"],{variants:{variant:{info:["bg-base-bds-gray-ele-line"],remind:["bg-brandColor-bds-brand-100-bg"],warn:["bg-redColor-bds-red-100-bg"]}},defaultVariants:{variant:"info"}}),C=function(n){var y=null;return n==="info"?y=(0,c.jsx)(v.HelpIcon,{className:"text-base-bds-gray-t2"}):n==="remind"?y=(0,c.jsx)(v.AlertCircleSolidIcon,{className:"text-brandColor-bds-brand-700-normal"}):y=(0,c.jsx)(v.AlertTriangleSolidIcon,{className:"text-redColor-bds-red-700-normal"}),y},O=function(n){var y=n.showIcon,R=y===void 0?!0:y,h=n.icon,W=n.className,M=n.variant,I=M===void 0?"info":M,b=n.message,D=n.description,S=n.closeIcon,P=S===void 0?!1:S,L=n.banner,$=L===void 0?!1:L,_=n.onClose,X=g.useState(!1),B=i()(X,2),U=B[0],w=B[1];if(U)return null;var Y=function(){w(!0),_&&_()},F=function(){return(0,c.jsx)(t.Z,{onClick:Y,size:"small",children:(0,c.jsx)(v.CloseIcon,{})})},N=R?h:void 0,H=N||C(I),G=P===!0?F():P,l=$?"pl-[16px] pr-[12px] rtl:pl-[12px] rtl:pr-[16px]":"rounded-8",o=b&&D?"font-semibold":void 0,f=D?"mb-[4px]":void 0;return(0,c.jsxs)("div",{className:(0,d.cn)(x({className:W,variant:I}),l),children:[(R||b||P)&&(0,c.jsxs)("div",{className:(0,a.Z)("flex w-full justify-between",f),children:[R&&(0,c.jsx)("div",{className:"flex items-center h-bds-height-14 mr-[8px] rtl:ml-[8px] rtl:mr-0",children:H}),b&&(0,c.jsx)("div",{className:(0,a.Z)("grow",o),children:b}),P&&(0,c.jsx)("div",{className:"flex items-center h-bds-height-14 ml-[8px] rtl:mr-[8px] rtl:ml-0",children:G})]}),D&&(0,c.jsx)("div",{className:"",children:D})]})}},5193:function(m,r,e){e.d(r,{h:function(){return M}});var s=e(97857),i=e.n(s),t=e(13769),d=e.n(t),v=e(36493),p=e(42978),a=e(19492),g=e(68400),c=e.n(g),x=e(93985),C,O=function(){return(0,x.hi)(C||(C=c()([`
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
  `])))},E=e(67294),n=e(85893),y=["className","color","variant","size","children","style","disabled","type","showTooltip","tooltipContent","width"];O();var R=(0,E.lazy)(function(){return e.e(5968).then(e.bind(e,5968))}),h={DEFAULT:"default",OUTLINED:"outlined",FLOAT:"float"},W=(0,a.j)(["inline-flex items-center justify-center","transition-all rounded-lg select-none cursor-pointer","data-[disabled]:text-[var(--bds-gray-t4-dis)] data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:pointer-events-none","focus-visible:outline-none"],{variants:{variant:{default:["text-[var(--bds-gray-t2)]","hover:bg-base-bds-trans-hover","active:active:text-[var(--bds-gray-t1-title)] active:active:bg-base-bds-trans-hover","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],outlined:["text-[var(--bds-gray-t1-title)]","border border-solid border-base-bds-gray-t4-dis","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]","focus-visible:outline-none ring-btn-default focus-visible:ring-[5px]"],float:["text-[var(--bds-gray-t1-title)]","hover:text-[var(--bds-gray-t2)]","active:text-[var(--bds-gray-t1-title)]"]},size:{"xx-small":"rounded","x-small":"rounded",small:"rounded",middle:"",large:"","x-large":""}},defaultVariants:{variant:"default",size:"middle"}}),M=(0,E.forwardRef)(function(b,D){var S=b.className,P=b.color,L=b.variant,$=b.size,_=b.children,X=b.style,B=b.disabled,U=b.type,w=b.showTooltip,Y=w===void 0?!1:w,F=b.tooltipContent,N=b.width,H=d()(b,y),G=(0,E.useMemo)(function(){return P?N?{backgroundColor:(0,v.ey)(P,.2),width:N,height:N}:{backgroundColor:(0,v.ey)(P,.2)}:{}},[]),l=(0,E.useMemo)(function(){return N?{width:N,height:N}:{}},[]),o=L==="outlined"||L==="default"?0:-1,f=null,u=(0,n.jsx)("div",i()(i()({className:(0,v.cn)("moly-iconbutton",S,"".concat(U?"type-".concat(U):""),"".concat(L||"default"," "),"".concat($||"middle"),W({variant:L,size:$})),ref:D,"data-disabled":B?"":void 0,tabIndex:o,style:i()(i()(i()({},X),G),l)},H),{},{children:_})),j=(0,n.jsx)(p.Z,{component:"IconButton",children:u});return h.OUTLINED===L?f=j:f=u,Y&&F?(0,n.jsx)(R,{title:F,children:(0,n.jsx)(n.Fragment,{children:f})}):f});M.displayName="IconButton"},82545:function(m,r,e){e.d(r,{h:function(){return y}});var s=e(97857),i=e.n(s),t=e(5574),d=e.n(t),v=e(13769),p=e.n(v),a=e(22641),g=e(36493),c=e(67294),x=e(70696),C=e(19492),O=(0,C.j)(["no-wrap font-medium transition-all","inline-flex items-center","data-[disabled]:text-base-bds-gray-t4-dis data-[disabled]:cursor-not-allowed"],{variants:{size:{small:["text-xs gap-[2px]"],normal:["text-sm gap-[2px]"],large:["text-base gap-[4px]"],xlarge:["text-lg gap-[6px]"]},variant:{primary:[],secondary:[],tertiary:[]}},compoundVariants:[{variant:"primary",className:["text-brandColor-bds-brand-900-text hover:text-brandColor-bds-brand-600-hover cursor-pointer"]},{variant:"secondary",className:["text-base-bds-black-t2 hover:text-base-bds-gray-t2 cursor-pointer"]},{variant:"tertiary",className:["text-base-bds-gray-t2 hover:text-base-bds-gray-t3 cursor-pointer"]}],defaultVariants:{variant:"primary",size:"normal"}}),E=e(85893),n=["className","color","variant","size","href","children","disabled","closeIcon","opensWindow","style","onClick"],y=(0,c.forwardRef)(function(h,W){var M=h.className,I=h.color,b=h.variant,D=h.size,S=h.href,P=h.children,L=h.disabled,$=h.closeIcon,_=$===void 0?!1:$,X=h.opensWindow,B=X===void 0?!1:X,U=h.style,w=h.onClick,Y=p()(h,n),F=(0,c.useState)(!1),N=d()(F,2),H=N[0],G=N[1],l=(0,a.S)(),o=(0,c.useMemo)(function(){return I?(0,g.K_)(I)?{color:H?(0,g.ey)(I,.6):I}:{}:{}},[H]),f=function(j){L||(S?B?window.open(S):window.location.href=S:w==null||w(j))};return(0,E.jsxs)("div",i()(i()({className:(0,g.cn)(M,O({variant:b,size:D})),ref:W,"data-disabled":h.disabled?"":void 0,style:i()(i()({},U),o)},Y),{},{onMouseEnter:function(){return G(!0)},onMouseLeave:function(){return G(!1)},onClick:f,children:[P,!_&&(l?(0,E.jsx)(x.DirectionleftIcon,{}):(0,E.jsx)(x.DirectionrightIcon,{}))]}))})},22641:function(m,r,e){e.d(r,{S:function(){return g}});var s=e(5574),i=e.n(s),t=e(67294),d=!1,v=!1,p=new Set,a=function(x){d=x,p.forEach(function(C){return C()})},g=function(){var x=(0,t.useState)(d),C=i()(x,2),O=C[0],E=C[1];return(0,t.useEffect)(function(){var n=function(){E(d)};return p.add(n),function(){p.delete(n)}},[]),(0,t.useEffect)(function(){if(!v){v=!0,a(document.documentElement.dir==="rtl");var n=new MutationObserver(function(){a(document.documentElement.dir==="rtl")});n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}},[]),O}},36493:function(m,r,e){e.d(r,{KX:function(){return p},K_:function(){return d},cn:function(){return t},ey:function(){return v}});var s=e(86010),i=e(57851);function t(){for(var a=arguments.length,g=new Array(a),c=0;c<a;c++)g[c]=arguments[c];return(0,i.m)((0,s.W)(g))}function d(a){return a?/^#[0-9A-F]{6}$/i.test(a):!1}function v(a,g){if(!d(a))return a;var c=Math.round(g*255);return"".concat(a).concat(c.toString(16).toUpperCase())}function p(a,g){var c=a.findIndex(function(x){return x!=null});return c===-1?g:a[c]}},42978:function(m,r,e){e.d(r,{Z:function(){return G}});var s=e(36493),i=e(55331),t=e(75531),d=e(67294),v=d.isValidElement;function p(l){return l&&v(l)&&l.type===React.Fragment}function a(l,o,f){return v(l)?d.cloneElement(l,typeof f=="function"?f(l.props||{}):f):o}function g(l,o){return a(l,l,o)}var c=e(38024),x=e(64543),C=e(97857),O=e.n(C),E=e(5574),n=e.n(E),y=e(68400),R=e.n(y),h=e(93985),W,M="moly-wave-motion",I="cubic-bezier(0.08, 0.82, 0.17, 1)",b="cubic-bezier(0.645, 0.045, 0.355, 1)",D=(0,h.hi)(W||(W=R()([`
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
`])),M,I,I,b,b),S=e(82225),P=e(24996),L="moly-wave-target";function $(l){var o=(l||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return o&&o[1]&&o[2]&&o[3]?!(o[1]===o[2]&&o[2]===o[3]):!0}function _(l){return l&&l!=="#fff"&&l!=="#ffffff"&&l!=="rgb(255, 255, 255)"&&l!=="rgba(255, 255, 255, 1)"&&$(l)&&!/rgba\((?:\d*, ){3}0\)/.test(l)&&l!=="transparent"}function X(l){var o=getComputedStyle(l),f=o.borderTopColor,u=o.borderColor,j=o.backgroundColor;return _(f)?f:_(u)?u:_(j)?j:""}function B(l){return Number.isNaN(l)?0:l}var U=e(85893),w=function(o){var f=o.className,u=o.target,j=o.component,T=d.useRef(null),J=d.useState([]),K=n()(J,2),k=K[0],z=K[1],te=d.useState(0),se=n()(te,2),ne=se[0],he=se[1],be=d.useState(0),oe=n()(be,2),xe=oe[0],ge=oe[1],ye=d.useState(0),ie=n()(ye,2),pe=ie[0],Ee=ie[1],je=d.useState(0),le=n()(je,2),Ce=le[0],Te=le[1],Re=d.useState(!1),de=n()(Re,2),Ie=de[0],Oe=de[1],ae={left:ne,top:xe,width:pe,height:Ce,borderRadius:k.map(function(A){return"".concat(A,"px")}).join(" ")};u.classList.contains("ring-btn-green")?ae["--wave-color"]="var(--bds-green-100-bg)":u.classList.contains("ring-btn-red")?ae["--wave-color"]="var(--bds-red-100-bg)":ae["--wave-color"]="var(--bds-brand-100-bg)";function ce(){var A=getComputedStyle(u),Z=A.position==="static",V=A.borderLeftWidth,q=A.borderTopWidth;he(Z?u.offsetLeft:B(-parseFloat(V))),ge(Z?u.offsetTop:B(-parseFloat(q))),Ee(u.offsetWidth),Te(u.offsetHeight);var Q=A.borderTopLeftRadius,De=A.borderTopRightRadius,Pe=A.borderBottomLeftRadius,Le=A.borderBottomRightRadius;z([Q,De,Le,Pe].map(function(Ne){return B(parseFloat(Ne))}))}if(d.useEffect(function(){if(u){var A=(0,x.Z)(function(){ce(),Oe(!0)}),Z;return typeof ResizeObserver!="undefined"&&(Z=new ResizeObserver(ce),Z.observe(u)),function(){var V;x.Z.cancel(A),(V=Z)===null||V===void 0||V.disconnect()}}},[]),!Ie)return null;var Me=(j==="Checkbox"||j==="Radio")&&(u==null?void 0:u.classList.contains(L));return(0,U.jsx)(S.ZP,{visible:!0,motionAppear:!0,motionName:M,motionDeadline:500,onAppearEnd:function(Z,V){if(V.deadline||V.propertyName==="opacity"){var q,Q=(q=T.current)===null||q===void 0?void 0:q.parentElement;Q&&(0,P.vE)(Q).then(function(){Q==null||Q.remove()})}return!1},children:function(Z){var V=Z.className;return(0,U.jsx)("div",{ref:T,className:(0,s.cn)(f,{"wave-quick":Me},V),style:ae})}})},Y=function(o,f){var u,j=f.component;if(!(j==="Checkbox"&&!((u=o.querySelector("input"))!==null&&u!==void 0&&u.checked))){var T=document.createElement("div");T.style.position="absolute",T.style.left="0px",T.style.top="0px",o==null||o.insertBefore(T,o==null?void 0:o.firstChild),(0,P.sY)((0,U.jsx)(w,O()(O()({},f),{},{target:o})),T)}},F=Y;function N(l,o,f){var u=(0,c.zX)(function(J){var K=l.current;if(K){var k=K.querySelector(".".concat(L))||K;F(k,{className:o,component:f,event:J})}}),j=d.useRef(),T=function(K){x.Z.cancel(j.current),j.current=(0,x.Z)(function(){u(K)})};return T}var H=function(o){var f=o.children,u=o.disabled,j=o.component,T=(0,d.useRef)(null),J="moly-wave",K=N(T,(0,s.cn)(J),j);if(d.useEffect(function(){var z=T.current;if(!(!z||z.nodeType!==1||u)){var te=function(ne){!(0,i.Z)(ne.target)||!z.getAttribute||z.getAttribute("disabled")||z.disabled||z.className.includes("-leave")||K(ne)};return z.addEventListener("click",te,!0),function(){z.removeEventListener("click",te,!0)}}},[u]),!d.isValidElement(f))return f!=null?f:null;var k=(0,t.Yr)(f)?(0,t.sQ)(f.ref,T):T;return g(f,{ref:k})},G=H},19492:function(m,r,e){e.d(r,{j:function(){return d}});var s=e(86010);const i=v=>typeof v=="boolean"?"".concat(v):v===0?"0":v,t=s.Z,d=(v,p)=>a=>{var g;if((p==null?void 0:p.variants)==null)return t(v,a==null?void 0:a.class,a==null?void 0:a.className);const{variants:c,defaultVariants:x}=p,C=Object.keys(c).map(n=>{const y=a==null?void 0:a[n],R=x==null?void 0:x[n];if(y===null)return null;const h=i(y)||i(R);return c[n][h]}),O=a&&Object.entries(a).reduce((n,y)=>{let[R,h]=y;return h===void 0||(n[R]=h),n},{}),E=p==null||(g=p.compoundVariants)===null||g===void 0?void 0:g.reduce((n,y)=>{let M=y,{class:R,className:h}=M,W=me(M,["class","className"]);return Object.entries(W).every(I=>{let[b,D]=I;return Array.isArray(D)?D.includes(ee(ee({},x),O)[b]):ee(ee({},x),O)[b]===D})?[...n,R,h]:n},[]);return t(v,C,E,a==null?void 0:a.class,a==null?void 0:a.className)}}}]);
}());