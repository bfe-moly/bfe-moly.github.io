!(function(){var ee=Object.defineProperty;var j=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var F=(r,a,e)=>a in r?ee(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,y=(r,a)=>{for(var e in a||(a={}))$.call(a,e)&&F(r,e,a[e]);if(j)for(var e of j(a))Z.call(a,e)&&F(r,e,a[e]);return r};var H=(r,a)=>{var e={};for(var n in r)$.call(r,n)&&a.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&j)for(var n of j(r))a.indexOf(n)<0&&Z.call(r,n)&&(e[n]=r[n]);return e};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[8899],{41379:function(r,a,e){"use strict";e.r(a);var n=e(44593),c=e(67294),o=e(85893),s=function(){return(0,o.jsx)("div",{className:"space-y-4 space-x-4",children:(0,o.jsx)(n.Z,{})})};a.default=s},69941:function(r,a,e){"use strict";e.r(a);var n=e(44593),c=e(67294),o=e(85893),s=function(){return(0,o.jsx)("div",{className:"space-y-4",children:(0,o.jsx)(n.Z,{disabled:!0})})};a.default=s},48342:function(r,a,e){"use strict";e.r(a);var n=e(44593),c=e(67294),o=e(85893),s=function(){return(0,o.jsx)("div",{className:"space-y-4",children:(0,o.jsx)(n.Z,{placeholder:"Placeholder",variant:"readonly",defaultValue:"Read only"})})};a.default=s},41908:function(r,a,e){"use strict";e.r(a);var n=e(44593),c=e(67294),o=e(85893),s=function(){return(0,o.jsx)("div",{className:"space-y-4",children:(0,o.jsx)(n.Z,{variant:"error",errorMessage:"Message can be two lines, but only two lines."})})};a.default=s},44593:function(r,a,e){"use strict";e.d(a,{Z:function(){return b}});var n=e(97857),c=e.n(n),o=e(5574),s=e.n(o),l=e(13769),u=e.n(l),t=e(36493),v=e(19492),i=e(67294),f=e(85893),p=["showCount","className","label","variant","placeholder","value","defaultValue","errorMessage","maxLength","onChange"],g=(0,v.j)(["flex min-h-[82px] w-full rounded-md bg-[#f3f5f7] px-[16px] py-[16px] text-sm border border-[#F3F5F7]","box-border  placeholder:text-[#ADB1B8]","bg-base-bds-gray-ele-line border border-solid border-base-bds-gray-ele-line","disabled:cursor-not-allowed disabled:opacity-50 disabled:border-bds-input-disabled-border disabled:bg-base-bds-gray-ele-edge"],{variants:{variant:{default:[""],readonly:[],error:["border-[#EF454A]","focus-visible:border-[#EF454A]","hover:border-[#EF454A]"]}},defaultVariants:{variant:"default"}}),O=i.forwardRef(function(d,x){var h=d.showCount,A=h===void 0?!0:h,P=d.className,M=d.label,E=M===void 0?"Input Label":M,m=d.variant,D=m===void 0?"default":m,I=d.placeholder,X=I===void 0?"Please input content":I,N=d.value,z=N===void 0?"":N,B=d.defaultValue,K=B===void 0?"":B,R=d.errorMessage,U=d.maxLength,_=U===void 0?100:U,L=d.onChange,C=u()(d,p),G=(0,i.useState)(z||K),V=s()(G,2),J=V[0],Q=V[1],Y=(0,i.useState)(K.length||0),S=s()(Y,2),k=S[0],q=S[1],w=D==="readonly",W=D==="error";return(0,f.jsxs)(f.Fragment,{children:[E&&(0,f.jsx)("p",{className:"mb-[8px] text-[var(--bds-gray-t2)] text-sm",children:E}),(0,f.jsx)("textarea",c()({className:(0,t.cn)("moly-textarea","transition-all ease-in-out duration-100",{"hover:outline-none hover:border-[#F0960E] hover:shadow-input-shadow focus:shadow-input-shadow focus:outline-none focus:border focus:border-solid focus:border-brandColor-bds-brand-900-focus focus-visible:outline-none focus-visible:border focus-visible:border-solid focus-visible:border-brandColor-bds-brand-900-focus focus-visible:shadow-input-shadow":!C.disabled,"border-bds-input-disabled-border bg-base-bds-gray-ele-edge":C.disabled,"hover:shadow-error-shadow focus:shadow-error-shadow focus-within:shadow-error-shadow focus-visible:shadow-error-shadow":W&&!C.disabled},g({variant:D,className:P})),ref:x,placeholder:X,maxLength:_,readOnly:w,value:J,onChange:function(T){Q(T.target.value),q(T.target.value.length),L==null||L(T)}},C)),A&&!W&&!w&&_&&(0,f.jsx)("p",{className:"mt-[8px] text-[var(--bds-gray-t2)] text-sm text-right",children:"".concat(k,"/").concat(_)}),W&&R&&(0,f.jsx)("p",{className:"mt-[8px] text-[var(--bds-red-700-normal)] text-sm",children:R})]})});O.displayName="Textarea";var b=O},36493:function(r,a,e){"use strict";e.d(a,{KX:function(){return u},K_:function(){return s},cn:function(){return o},ey:function(){return l}});var n=e(86010),c=e(57851);function o(){for(var t=arguments.length,v=new Array(t),i=0;i<t;i++)v[i]=arguments[i];return(0,c.m)((0,n.W)(v))}function s(t){return t?/^#[0-9A-F]{6}$/i.test(t):!1}function l(t,v){if(!s(t))return t;var i=Math.round(v*255);return"".concat(t).concat(i.toString(16).toUpperCase())}function u(t,v){var i=t.findIndex(function(f){return f!=null});return i===-1?v:t[i]}},13769:function(r,a,e){var n=e(48541);function c(o,s){if(o==null)return{};var l=n(o,s),u,t;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(o);for(t=0;t<v.length;t++)u=v[t],!(s.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(o,u)&&(l[u]=o[u])}return l}r.exports=c,r.exports.__esModule=!0,r.exports.default=r.exports},48541:function(r){function a(e,n){if(e==null)return{};var c={},o=Object.keys(e),s,l;for(l=0;l<o.length;l++)s=o[l],!(n.indexOf(s)>=0)&&(c[s]=e[s]);return c}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},19492:function(r,a,e){"use strict";e.d(a,{j:function(){return s}});var n=e(86010);const c=l=>typeof l=="boolean"?"".concat(l):l===0?"0":l,o=n.Z,s=(l,u)=>t=>{var v;if((u==null?void 0:u.variants)==null)return o(l,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:f}=u,p=Object.keys(i).map(b=>{const d=t==null?void 0:t[b],x=f==null?void 0:f[b];if(d===null)return null;const h=c(d)||c(x);return i[b][h]}),g=t&&Object.entries(t).reduce((b,d)=>{let[x,h]=d;return h===void 0||(b[x]=h),b},{}),O=u==null||(v=u.compoundVariants)===null||v===void 0?void 0:v.reduce((b,d)=>{let P=d,{class:x,className:h}=P,A=H(P,["class","className"]);return Object.entries(A).every(M=>{let[E,m]=M;return Array.isArray(m)?m.includes(y(y({},f),g)[E]):y(y({},f),g)[E]===m})?[...b,x,h]:b},[]);return o(l,p,O,t==null?void 0:t.class,t==null?void 0:t.className)}}}]);
}());