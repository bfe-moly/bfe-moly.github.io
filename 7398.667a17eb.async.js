!(function(){"use strict";var Ge=Object.defineProperty;var V=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var $e=(b,u,s)=>u in b?Ge(b,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):b[u]=s,Y=(b,u)=>{for(var s in u||(u={}))me.call(u,s)&&$e(b,s,u[s]);if(V)for(var s of V(u))ve.call(u,s)&&$e(b,s,u[s]);return b};var v=(b,u)=>{var s={};for(var l in b)me.call(b,l)&&u.indexOf(l)<0&&(s[l]=b[l]);if(b!=null&&V)for(var l of V(b))u.indexOf(l)<0&&ve.call(b,l)&&(s[l]=b[l]);return s};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[7398],{47398:function(b,u,s){s.d(u,{VY:function(){return We},h4:function(){return je},ck:function(){return ke},fC:function(){return Ze},xz:function(){return Le}});var l=s(87462),e=s(67294),J=s(25360),ge=s(65936),Q=s(28771),X=s(36206),M=s(77342),P=s(75320),Ce=s(9981),Ae=s(29115),q=s(91276);const T="Collapsible",[xe,ee]=(0,J.b)(T),[Ee,D]=xe(T),te=(0,e.forwardRef)((t,i)=>{const C=t,{__scopeCollapsible:n,open:r,defaultOpen:c,disabled:o,onOpenChange:a}=C,d=v(C,["__scopeCollapsible","open","defaultOpen","disabled","onOpenChange"]),[f=!1,p]=(0,M.T)({prop:r,defaultProp:c,onChange:a});return(0,e.createElement)(Ee,{scope:n,disabled:o,contentId:(0,q.M)(),open:f,onOpenToggle:(0,e.useCallback)(()=>p($=>!$),[p])},(0,e.createElement)(P.WV.div,(0,l.Z)({"data-state":Z(f),"data-disabled":o?"":void 0},d,{ref:i})))}),oe="CollapsibleTrigger",ne=(0,e.forwardRef)((t,i)=>{const o=t,{__scopeCollapsible:n}=o,r=v(o,["__scopeCollapsible"]),c=D(oe,n);return(0,e.createElement)(P.WV.button,(0,l.Z)({type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":Z(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled},r,{ref:i,onClick:(0,X.M)(t.onClick,c.onOpenToggle)}))}),S="CollapsibleContent",re=(0,e.forwardRef)((t,i)=>{const o=t,{forceMount:n}=o,r=v(o,["forceMount"]),c=D(S,t.__scopeCollapsible);return(0,e.createElement)(Ae.z,{present:n||c.open},({present:a})=>(0,e.createElement)(he,(0,l.Z)({},r,{ref:i,present:a})))}),he=(0,e.forwardRef)((t,i)=>{const R=t,{__scopeCollapsible:n,present:r,children:c}=R,o=v(R,["__scopeCollapsible","present","children"]),a=D(S,n),[d,f]=(0,e.useState)(r),p=(0,e.useRef)(null),C=(0,Q.e)(i,p),$=(0,e.useRef)(0),A=$.current,h=(0,e.useRef)(0),y=h.current,I=a.open||d,O=(0,e.useRef)(I),E=(0,e.useRef)();return(0,e.useEffect)(()=>{const m=requestAnimationFrame(()=>O.current=!1);return()=>cancelAnimationFrame(m)},[]),(0,Ce.b)(()=>{const m=p.current;if(m){E.current=E.current||{transitionDuration:m.style.transitionDuration,animationName:m.style.animationName},m.style.transitionDuration="0s",m.style.animationName="none";const g=m.getBoundingClientRect();$.current=g.height,h.current=g.width,O.current||(m.style.transitionDuration=E.current.transitionDuration,m.style.animationName=E.current.animationName),f(r)}},[a.open,r]),(0,e.createElement)(P.WV.div,(0,l.Z)({"data-state":Z(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!I},o,{ref:C,style:Y({["--radix-collapsible-content-height"]:A?`${A}px`:void 0,["--radix-collapsible-content-width"]:y?`${y}px`:void 0},t.style)}),I&&c)});function Z(t){return t?"open":"closed"}const ye=te,Ie=ne,Re=re;var Pe=s(78990);const x="Accordion",_e=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[k,we,Ne]=(0,ge.B)(x),[_,He]=(0,J.b)(x,[Ne,ee]),j=ee(),L=e.forwardRef((t,i)=>{const a=t,{type:n}=a,r=v(a,["type"]),c=r,o=r;return e.createElement(k.Provider,{scope:t.__scopeAccordion},n==="multiple"?e.createElement(Te,(0,l.Z)({},o,{ref:i})):e.createElement(Me,(0,l.Z)({},c,{ref:i})))});L.propTypes={type(t){const i=t.value||t.defaultValue;return t.type&&!["single","multiple"].includes(t.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):t.type==="multiple"&&typeof i=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):t.type==="single"&&Array.isArray(i)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[ce,Oe]=_(x),[ae,Ve]=_(x,{collapsible:!1}),Me=e.forwardRef((t,i)=>{const p=t,{value:n,defaultValue:r,onValueChange:c=()=>{},collapsible:o=!1}=p,a=v(p,["value","defaultValue","onValueChange","collapsible"]),[d,f]=(0,M.T)({prop:n,defaultProp:r,onChange:c});return e.createElement(ce,{scope:t.__scopeAccordion,value:d?[d]:[],onItemOpen:f,onItemClose:e.useCallback(()=>o&&f(""),[o,f])},e.createElement(ae,{scope:t.__scopeAccordion,collapsible:o},e.createElement(se,(0,l.Z)({},a,{ref:i}))))}),Te=e.forwardRef((t,i)=>{const C=t,{value:n,defaultValue:r,onValueChange:c=()=>{}}=C,o=v(C,["value","defaultValue","onValueChange"]),[a=[],d]=(0,M.T)({prop:n,defaultProp:r,onChange:c}),f=e.useCallback($=>d((A=[])=>[...A,$]),[d]),p=e.useCallback($=>d((A=[])=>A.filter(h=>h!==$)),[d]);return e.createElement(ce,{scope:t.__scopeAccordion,value:a,onItemOpen:f,onItemClose:p},e.createElement(ae,{scope:t.__scopeAccordion,collapsible:!0},e.createElement(se,(0,l.Z)({},o,{ref:i}))))}),[De,w]=_(x),se=e.forwardRef((t,i)=>{const h=t,{__scopeAccordion:n,disabled:r,dir:c,orientation:o="vertical"}=h,a=v(h,["__scopeAccordion","disabled","dir","orientation"]),d=e.useRef(null),f=(0,Q.e)(d,i),p=we(n),$=(0,Pe.gm)(c)==="ltr",A=(0,X.M)(t.onKeyDown,y=>{var I;if(!_e.includes(y.key))return;const O=y.target,E=p().filter(F=>{var U;return!((U=F.ref.current)!==null&&U!==void 0&&U.disabled)}),R=E.findIndex(F=>F.ref.current===O),m=E.length;if(R===-1)return;y.preventDefault();let g=R;const G=0,H=m-1,K=()=>{g=R+1,g>H&&(g=G)},B=()=>{g=R-1,g<G&&(g=H)};switch(y.key){case"Home":g=G;break;case"End":g=H;break;case"ArrowRight":o==="horizontal"&&($?K():B());break;case"ArrowDown":o==="vertical"&&K();break;case"ArrowLeft":o==="horizontal"&&($?B():K());break;case"ArrowUp":o==="vertical"&&B();break}const ze=g%m;(I=E[ze].ref.current)===null||I===void 0||I.focus()});return e.createElement(De,{scope:n,disabled:r,direction:c,orientation:o},e.createElement(k.Slot,{scope:n},e.createElement(P.WV.div,(0,l.Z)({},a,{"data-orientation":o,ref:f,onKeyDown:r?void 0:A}))))}),N="AccordionItem",[Se,W]=_(N),ie=e.forwardRef((t,i)=>{const $=t,{__scopeAccordion:n,value:r}=$,c=v($,["__scopeAccordion","value"]),o=w(N,n),a=Oe(N,n),d=j(n),f=(0,q.M)(),p=r&&a.value.includes(r)||!1,C=o.disabled||t.disabled;return e.createElement(Se,{scope:n,open:p,disabled:C,triggerId:f},e.createElement(ye,(0,l.Z)({"data-orientation":o.orientation,"data-state":ue(p)},d,c,{ref:i,disabled:C,open:p,onOpenChange:A=>{A?a.onItemOpen(r):a.onItemClose(r)}})))}),le="AccordionHeader",de=e.forwardRef((t,i)=>{const a=t,{__scopeAccordion:n}=a,r=v(a,["__scopeAccordion"]),c=w(x,n),o=W(le,n);return e.createElement(P.WV.h3,(0,l.Z)({"data-orientation":c.orientation,"data-state":ue(o.open),"data-disabled":o.disabled?"":void 0},r,{ref:i}))}),z="AccordionTrigger",fe=e.forwardRef((t,i)=>{const f=t,{__scopeAccordion:n}=f,r=v(f,["__scopeAccordion"]),c=w(x,n),o=W(z,n),a=Ve(z,n),d=j(n);return e.createElement(k.ItemSlot,{scope:n},e.createElement(Ie,(0,l.Z)({"aria-disabled":o.open&&!a.collapsible||void 0,"data-orientation":c.orientation,id:o.triggerId},d,r,{ref:i})))}),be="AccordionContent",pe=e.forwardRef((t,i)=>{const d=t,{__scopeAccordion:n}=d,r=v(d,["__scopeAccordion"]),c=w(x,n),o=W(be,n),a=j(n);return e.createElement(Re,(0,l.Z)({role:"region","aria-labelledby":o.triggerId,"data-orientation":c.orientation},a,r,{ref:i,style:Y({["--radix-accordion-content-height"]:"var(--radix-collapsible-content-height)",["--radix-accordion-content-width"]:"var(--radix-collapsible-content-width)"},t.style)}))});function ue(t){return t?"open":"closed"}const Ze=L,ke=ie,je=de,Le=fe,We=pe}}]);
}());