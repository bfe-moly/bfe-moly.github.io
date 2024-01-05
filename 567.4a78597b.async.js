!(function(){"use strict";var te=Object.defineProperty,ne=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var Q=(i,r,e)=>r in i?te(i,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[r]=e,V=(i,r)=>{for(var e in r||(r={}))q.call(r,e)&&Q(i,e,r[e]);if(Y)for(var e of Y(r))ee.call(r,e)&&Q(i,e,r[e]);return i},J=(i,r)=>ne(i,oe(r));var S=(i,r)=>{var e={};for(var n in i)q.call(i,n)&&r.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&Y)for(var n of Y(i))r.indexOf(n)<0&&ee.call(i,n)&&(e[n]=i[n]);return e};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[567],{46069:function(i,r,e){e.d(r,{fC:function(){return p}});var n=e(87462),t=e(67294),h=e(28771),_=e(25360),E=e(36206),m=e(77342),a=e(57898),B=e(7546),L=e(29115),C=e(75320);const R="Checkbox",[U,H]=(0,_.b)(R),[x,W]=U(R),I=(0,t.forwardRef)((c,y)=>{const Z=c,{__scopeCheckbox:b,name:O,checked:K,defaultChecked:P,required:o,disabled:d,value:$="on",onCheckedChange:s}=Z,v=S(Z,["__scopeCheckbox","name","checked","defaultChecked","required","disabled","value","onCheckedChange"]),[l,u]=(0,t.useState)(null),M=(0,h.e)(y,N=>u(N)),k=(0,t.useRef)(!1),j=l?!!l.closest("form"):!0,[f=!1,D]=(0,m.T)({prop:K,defaultProp:P,onChange:s}),T=(0,t.useRef)(f);return(0,t.useEffect)(()=>{const N=l==null?void 0:l.form;if(N){const X=()=>D(T.current);return N.addEventListener("reset",X),()=>N.removeEventListener("reset",X)}},[l,D]),(0,t.createElement)(x,{scope:b,state:f,disabled:d},(0,t.createElement)(C.WV.button,(0,n.Z)({type:"button",role:"checkbox","aria-checked":g(f)?"mixed":f,"aria-required":o,"data-state":z(f),"data-disabled":d?"":void 0,disabled:d,value:$},v,{ref:M,onKeyDown:(0,E.M)(c.onKeyDown,N=>{N.key==="Enter"&&N.preventDefault()}),onClick:(0,E.M)(c.onClick,N=>{D(X=>g(X)?!0:!X),j&&(k.current=N.isPropagationStopped(),k.current||N.stopPropagation())})})),j&&(0,t.createElement)(w,{control:l,bubbles:!k.current,name:O,value:$,checked:f,required:o,disabled:d,style:{transform:"translateX(-100%)"}}))}),A="CheckboxIndicator",G=(0,t.forwardRef)((c,y)=>{const o=c,{__scopeCheckbox:b,forceMount:O}=o,K=S(o,["__scopeCheckbox","forceMount"]),P=W(A,b);return(0,t.createElement)(L.z,{present:O||g(P.state)||P.state===!0},(0,t.createElement)(C.WV.span,(0,n.Z)({"data-state":z(P.state),"data-disabled":P.disabled?"":void 0},K,{ref:y,style:V({pointerEvents:"none"},c.style)})))}),w=c=>{const $=c,{control:y,checked:b,bubbles:O=!0}=$,K=S($,["control","checked","bubbles"]),P=(0,t.useRef)(null),o=(0,a.D)(b),d=(0,B.t)(y);return(0,t.useEffect)(()=>{const s=P.current,v=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(v,"checked").set;if(o!==b&&u){const M=new Event("click",{bubbles:O});s.indeterminate=g(b),u.call(s,g(b)?!1:b),s.dispatchEvent(M)}},[o,b,O]),(0,t.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:g(b)?!1:b},K,{tabIndex:-1,ref:P,style:J(V(V({},c.style),d),{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))};function g(c){return c==="indeterminate"}function z(c){return g(c)?"indeterminate":c?"checked":"unchecked"}const p=I,F=null},60761:function(i,r,e){e.d(r,{bU:function(){return z},fC:function(){return g}});var n=e(87462),t=e(67294),h=e(36206),_=e(28771),E=e(25360),m=e(77342),a=e(57898),B=e(7546),L=e(75320);const C="Switch",[R,U]=(0,E.b)(C),[H,x]=R(C),W=(0,t.forwardRef)((p,F)=>{const f=p,{__scopeSwitch:c,name:y,checked:b,defaultChecked:O,required:K,disabled:P,value:o="on",onCheckedChange:d}=f,$=S(f,["__scopeSwitch","name","checked","defaultChecked","required","disabled","value","onCheckedChange"]),[s,v]=(0,t.useState)(null),l=(0,_.e)(F,D=>v(D)),u=(0,t.useRef)(!1),M=s?!!s.closest("form"):!0,[k=!1,j]=(0,m.T)({prop:b,defaultProp:O,onChange:d});return(0,t.createElement)(H,{scope:c,checked:k,disabled:P},(0,t.createElement)(L.WV.button,(0,n.Z)({type:"button",role:"switch","aria-checked":k,"aria-required":K,"data-state":w(k),"data-disabled":P?"":void 0,disabled:P,value:o},$,{ref:l,onClick:(0,h.M)(p.onClick,D=>{j(T=>!T),M&&(u.current=D.isPropagationStopped(),u.current||D.stopPropagation())})})),M&&(0,t.createElement)(G,{control:s,bubbles:!u.current,name:y,value:o,checked:k,required:K,disabled:P,style:{transform:"translateX(-100%)"}}))}),I="SwitchThumb",A=(0,t.forwardRef)((p,F)=>{const O=p,{__scopeSwitch:c}=O,y=S(O,["__scopeSwitch"]),b=x(I,c);return(0,t.createElement)(L.WV.span,(0,n.Z)({"data-state":w(b.checked),"data-disabled":b.disabled?"":void 0},y,{ref:F}))}),G=p=>{const o=p,{control:F,checked:c,bubbles:y=!0}=o,b=S(o,["control","checked","bubbles"]),O=(0,t.useRef)(null),K=(0,a.D)(c),P=(0,B.t)(F);return(0,t.useEffect)(()=>{const d=O.current,$=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor($,"checked").set;if(K!==c&&v){const l=new Event("click",{bubbles:y});v.call(d,c),d.dispatchEvent(l)}},[K,c,y]),(0,t.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:c},b,{tabIndex:-1,ref:O,style:J(V(V({},p.style),P),{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))};function w(p){return p?"checked":"unchecked"}const g=W,z=A},60434:function(i,r,e){e.d(r,{VY:function(){return P},aV:function(){return O},fC:function(){return b},xz:function(){return K}});var n=e(87462),t=e(67294),h=e(36206),_=e(25360),E=e(66681),m=e(29115),a=e(75320),B=e(78990),L=e(77342),C=e(91276);const R="Tabs",[U,H]=(0,_.b)(R,[E.Pc]),x=(0,E.Pc)(),[W,I]=U(R),A=(0,t.forwardRef)((o,d)=>{const Z=o,{__scopeTabs:$,value:s,onValueChange:v,defaultValue:l,orientation:u="horizontal",dir:M,activationMode:k="automatic"}=Z,j=S(Z,["__scopeTabs","value","onValueChange","defaultValue","orientation","dir","activationMode"]),f=(0,B.gm)(M),[D,T]=(0,L.T)({prop:s,onChange:v,defaultProp:l});return(0,t.createElement)(W,{scope:$,baseId:(0,C.M)(),value:D,onValueChange:T,orientation:u,dir:f,activationMode:k},(0,t.createElement)(a.WV.div,(0,n.Z)({dir:f,"data-orientation":u},j,{ref:d})))}),G="TabsList",w=(0,t.forwardRef)((o,d)=>{const M=o,{__scopeTabs:$,loop:s=!0}=M,v=S(M,["__scopeTabs","loop"]),l=I(G,$),u=x($);return(0,t.createElement)(E.fC,(0,n.Z)({asChild:!0},u,{orientation:l.orientation,dir:l.dir,loop:s}),(0,t.createElement)(a.WV.div,(0,n.Z)({role:"tablist","aria-orientation":l.orientation},v,{ref:d})))}),g="TabsTrigger",z=(0,t.forwardRef)((o,d)=>{const D=o,{__scopeTabs:$,value:s,disabled:v=!1}=D,l=S(D,["__scopeTabs","value","disabled"]),u=I(g,$),M=x($),k=c(u.baseId,s),j=y(u.baseId,s),f=s===u.value;return(0,t.createElement)(E.ck,(0,n.Z)({asChild:!0},M,{focusable:!v,active:f}),(0,t.createElement)(a.WV.button,(0,n.Z)({type:"button",role:"tab","aria-selected":f,"aria-controls":j,"data-state":f?"active":"inactive","data-disabled":v?"":void 0,disabled:v,id:k},l,{ref:d,onMouseDown:(0,h.M)(o.onMouseDown,T=>{!v&&T.button===0&&T.ctrlKey===!1?u.onValueChange(s):T.preventDefault()}),onKeyDown:(0,h.M)(o.onKeyDown,T=>{[" ","Enter"].includes(T.key)&&u.onValueChange(s)}),onFocus:(0,h.M)(o.onFocus,()=>{const T=u.activationMode!=="manual";!f&&!v&&T&&u.onValueChange(s)})})))}),p="TabsContent",F=(0,t.forwardRef)((o,d)=>{const T=o,{__scopeTabs:$,value:s,forceMount:v,children:l}=T,u=S(T,["__scopeTabs","value","forceMount","children"]),M=I(p,$),k=c(M.baseId,s),j=y(M.baseId,s),f=s===M.value,D=(0,t.useRef)(f);return(0,t.useEffect)(()=>{const Z=requestAnimationFrame(()=>D.current=!1);return()=>cancelAnimationFrame(Z)},[]),(0,t.createElement)(m.z,{present:v||f},({present:Z})=>(0,t.createElement)(a.WV.div,(0,n.Z)({"data-state":f?"active":"inactive","data-orientation":M.orientation,role:"tabpanel","aria-labelledby":k,hidden:!Z,id:j,tabIndex:0},u,{ref:d,style:J(V({},o.style),{animationDuration:D.current?"0s":void 0})}),Z&&l))});function c(o,d){return`${o}-trigger-${d}`}function y(o,d){return`${o}-content-${d}`}const b=A,O=w,K=z,P=F},57898:function(i,r,e){e.d(r,{D:function(){return t}});var n=e(67294);function t(h){const _=(0,n.useRef)({value:h,previous:h});return(0,n.useMemo)(()=>(_.current.value!==h&&(_.current.previous=_.current.value,_.current.value=h),_.current.previous),[h])}},7546:function(i,r,e){e.d(r,{t:function(){return h}});var n=e(67294),t=e(9981);function h(_){const[E,m]=(0,n.useState)(void 0);return(0,t.b)(()=>{if(_){m({width:_.offsetWidth,height:_.offsetHeight});const a=new ResizeObserver(B=>{if(!Array.isArray(B)||!B.length)return;const L=B[0];let C,R;if("borderBoxSize"in L){const U=L.borderBoxSize,H=Array.isArray(U)?U[0]:U;C=H.inlineSize,R=H.blockSize}else C=_.offsetWidth,R=_.offsetHeight;m({width:C,height:R})});return a.observe(_,{box:"border-box"}),()=>a.unobserve(_)}else m(void 0)},[_]),E}},19492:function(i,r,e){e.d(r,{j:function(){return _}});var n=e(86010);const t=E=>typeof E=="boolean"?"".concat(E):E===0?"0":E,h=n.Z,_=(E,m)=>a=>{var B;if((m==null?void 0:m.variants)==null)return h(E,a==null?void 0:a.class,a==null?void 0:a.className);const{variants:L,defaultVariants:C}=m,R=Object.keys(L).map(x=>{const W=a==null?void 0:a[x],I=C==null?void 0:C[x];if(W===null)return null;const A=t(W)||t(I);return L[x][A]}),U=a&&Object.entries(a).reduce((x,W)=>{let[I,A]=W;return A===void 0||(x[I]=A),x},{}),H=m==null||(B=m.compoundVariants)===null||B===void 0?void 0:B.reduce((x,W)=>{let w=W,{class:I,className:A}=w,G=S(w,["class","className"]);return Object.entries(G).every(g=>{let[z,p]=g;return Array.isArray(p)?p.includes(V(V({},C),U)[z]):V(V({},C),U)[z]===p})?[...x,I,A]:x},[]);return h(E,R,H,a==null?void 0:a.class,a==null?void 0:a.className)}}}]);
}());