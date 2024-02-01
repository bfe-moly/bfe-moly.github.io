!(function(){var dt=Object.defineProperty;var Se=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var ze=(a,l,t)=>l in a?dt(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,de=(a,l)=>{for(var t in l||(l={}))Ye.call(l,t)&&ze(a,t,l[t]);if(Se)for(var t of Se(l))Ge.call(l,t)&&ze(a,t,l[t]);return a};var G=(a,l)=>{var t={};for(var o in a)Ye.call(a,o)&&l.indexOf(o)<0&&(t[o]=a[o]);if(a!=null&&Se)for(var o of Se(a))l.indexOf(o)<0&&Ge.call(a,o)&&(t[o]=a[o]);return t};(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[1161],{96446:function(a,l,t){var o=t(37923);function e(W){if(Array.isArray(W))return o(W)}a.exports=e,a.exports.__esModule=!0,a.exports.default=a.exports},96936:function(a){function l(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},88619:function(a){function l(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},19632:function(a,l,t){var o=t(96446),e=t(96936),W=t(96263),C=t(88619);function N(m){return o(m)||e(m)||W(m)||C()}a.exports=N,a.exports.__esModule=!0,a.exports.default=a.exports},65936:function(a,l,t){"use strict";t.d(l,{B:function(){return N}});var o=t(67294),e=t(25360),W=t(28771),C=t(88426);function N(m){const E=m+"CollectionProvider",[H,x]=(0,e.b)(E),[f,b]=H(E,{collectionRef:{current:null},itemMap:new Map}),h=R=>{const{scope:D,children:z}=R,I=o.useRef(null),p=o.useRef(new Map).current;return o.createElement(f,{scope:D,itemMap:p,collectionRef:I},z)},M=m+"CollectionSlot",O=o.forwardRef((R,D)=>{const{scope:z,children:I}=R,p=b(M,z),u=(0,W.e)(D,p.collectionRef);return o.createElement(C.g7,{ref:u},I)}),X=m+"CollectionItemSlot",K="data-radix-collection-item",S=o.forwardRef((R,D)=>{const T=R,{scope:z,children:I}=T,p=G(T,["scope","children"]),u=o.useRef(null),P=(0,W.e)(D,u),$=b(X,z);return o.useEffect(()=>($.itemMap.set(u,de({ref:u},p)),()=>void $.itemMap.delete(u))),o.createElement(C.g7,{[K]:"",ref:P},I)});function g(R){const D=b(m+"CollectionConsumer",R);return o.useCallback(()=>{const I=D.collectionRef.current;if(!I)return[];const p=Array.from(I.querySelectorAll(`[${K}]`));return Array.from(D.itemMap.values()).sort(($,T)=>p.indexOf($.ref.current)-p.indexOf(T.ref.current))},[D.collectionRef,D.itemMap])}return[{Provider:h,Slot:O,ItemSlot:S},g,x]}},46063:function(a,l,t){"use strict";t.d(l,{I0:function(){return I},XB:function(){return O},fC:function(){return z}});var o=t(87462),e=t(67294),W=t(36206),C=t(75320),N=t(28771),m=t(79698);function E(p,u=globalThis==null?void 0:globalThis.document){const P=(0,m.W)(p);(0,e.useEffect)(()=>{const $=T=>{T.key==="Escape"&&P(T)};return u.addEventListener("keydown",$),()=>u.removeEventListener("keydown",$)},[P,u])}const H="DismissableLayer",x="dismissableLayer.update",f="dismissableLayer.pointerDownOutside",b="dismissableLayer.focusOutside";let h;const M=(0,e.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),O=(0,e.forwardRef)((p,u)=>{var P;const we=p,{disableOutsidePointerEvents:$=!1,onEscapeKeyDown:T,onPointerDownOutside:V,onFocusOutside:re,onInteractOutside:J,onDismiss:ee}=we,ve=G(we,["disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss"]),B=(0,e.useContext)(M),[U,Le]=(0,e.useState)(null),ae=(P=U==null?void 0:U.ownerDocument)!==null&&P!==void 0?P:globalThis==null?void 0:globalThis.document,[,Fe]=(0,e.useState)({}),We=(0,N.e)(u,L=>Le(L)),Te=Array.from(B.layers),[Ke]=[...B.layersWithOutsidePointerEventsDisabled].slice(-1),Ue=Te.indexOf(Ke),ye=U?Te.indexOf(U):-1,Ve=B.layersWithOutsidePointerEventsDisabled.size>0,Oe=ye>=Ue,ge=S(L=>{const le=L.target,xe=[...B.branches].some(be=>be.contains(le));!Oe||xe||(V==null||V(L),J==null||J(L),L.defaultPrevented||ee==null||ee())},ae),Re=g(L=>{const le=L.target;[...B.branches].some(be=>be.contains(le))||(re==null||re(L),J==null||J(L),L.defaultPrevented||ee==null||ee())},ae);return E(L=>{ye===B.layers.size-1&&(T==null||T(L),!L.defaultPrevented&&ee&&(L.preventDefault(),ee()))},ae),(0,e.useEffect)(()=>{if(U)return $&&(B.layersWithOutsidePointerEventsDisabled.size===0&&(h=ae.body.style.pointerEvents,ae.body.style.pointerEvents="none"),B.layersWithOutsidePointerEventsDisabled.add(U)),B.layers.add(U),R(),()=>{$&&B.layersWithOutsidePointerEventsDisabled.size===1&&(ae.body.style.pointerEvents=h)}},[U,ae,$,B]),(0,e.useEffect)(()=>()=>{U&&(B.layers.delete(U),B.layersWithOutsidePointerEventsDisabled.delete(U),R())},[U,B]),(0,e.useEffect)(()=>{const L=()=>Fe({});return document.addEventListener(x,L),()=>document.removeEventListener(x,L)},[]),(0,e.createElement)(C.WV.div,(0,o.Z)({},ve,{ref:We,style:de({pointerEvents:Ve?Oe?"auto":"none":void 0},p.style),onFocusCapture:(0,W.M)(p.onFocusCapture,Re.onFocusCapture),onBlurCapture:(0,W.M)(p.onBlurCapture,Re.onBlurCapture),onPointerDownCapture:(0,W.M)(p.onPointerDownCapture,ge.onPointerDownCapture)}))}),X="DismissableLayerBranch",K=(0,e.forwardRef)((p,u)=>{const P=(0,e.useContext)(M),$=(0,e.useRef)(null),T=(0,N.e)(u,$);return(0,e.useEffect)(()=>{const V=$.current;if(V)return P.branches.add(V),()=>{P.branches.delete(V)}},[P.branches]),(0,e.createElement)(C.WV.div,(0,o.Z)({},p,{ref:T}))});function S(p,u=globalThis==null?void 0:globalThis.document){const P=(0,m.W)(p),$=(0,e.useRef)(!1),T=(0,e.useRef)(()=>{});return(0,e.useEffect)(()=>{const V=J=>{if(J.target&&!$.current){let ve=function(){D(f,P,ee,{discrete:!0})};const ee={originalEvent:J};J.pointerType==="touch"?(u.removeEventListener("click",T.current),T.current=ve,u.addEventListener("click",T.current,{once:!0})):ve()}$.current=!1},re=window.setTimeout(()=>{u.addEventListener("pointerdown",V)},0);return()=>{window.clearTimeout(re),u.removeEventListener("pointerdown",V),u.removeEventListener("click",T.current)}},[u,P]),{onPointerDownCapture:()=>$.current=!0}}function g(p,u=globalThis==null?void 0:globalThis.document){const P=(0,m.W)(p),$=(0,e.useRef)(!1);return(0,e.useEffect)(()=>{const T=V=>{V.target&&!$.current&&D(b,P,{originalEvent:V},{discrete:!1})};return u.addEventListener("focusin",T),()=>u.removeEventListener("focusin",T)},[u,P]),{onFocusCapture:()=>$.current=!0,onBlurCapture:()=>$.current=!1}}function R(){const p=new CustomEvent(x);document.dispatchEvent(p)}function D(p,u,P,{discrete:$}){const T=P.originalEvent.target,V=new CustomEvent(p,{bubbles:!1,cancelable:!0,detail:P});u&&T.addEventListener(p,u,{once:!0}),$?(0,C.jH)(T,V):T.dispatchEvent(V)}const z=O,I=K},42651:function(a,l,t){"use strict";t.d(l,{h:function(){return m}});var o=t(87462),e=t(67294),W=t(73935),C=t(75320);const N="Portal",m=(0,e.forwardRef)((H,x)=>{var f;const M=H,{container:b=globalThis==null||(f=globalThis.document)===null||f===void 0?void 0:f.body}=M,h=G(M,["container"]);return b?W.createPortal((0,e.createElement)(C.WV.div,(0,o.Z)({},h,{ref:x})),b):null}),E=null},29115:function(a,l,t){"use strict";t.d(l,{z:function(){return m}});var o=t(67294),e=t(73935),W=t(28771),C=t(9981);function N(x,f){return(0,o.useReducer)((b,h)=>{const M=f[b][h];return M!=null?M:b},x)}const m=x=>{const{present:f,children:b}=x,h=E(f),M=typeof b=="function"?b({present:h.isPresent}):o.Children.only(b),O=(0,W.e)(h.ref,M.ref);return typeof b=="function"||h.isPresent?(0,o.cloneElement)(M,{ref:O}):null};m.displayName="Presence";function E(x){const[f,b]=(0,o.useState)(),h=(0,o.useRef)({}),M=(0,o.useRef)(x),O=(0,o.useRef)("none"),X=x?"mounted":"unmounted",[K,S]=N(X,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,o.useEffect)(()=>{const g=H(h.current);O.current=K==="mounted"?g:"none"},[K]),(0,C.b)(()=>{const g=h.current,R=M.current;if(R!==x){const z=O.current,I=H(g);x?S("MOUNT"):I==="none"||(g==null?void 0:g.display)==="none"?S("UNMOUNT"):S(R&&z!==I?"ANIMATION_OUT":"UNMOUNT"),M.current=x}},[x,S]),(0,C.b)(()=>{if(f){const g=D=>{const I=H(h.current).includes(D.animationName);D.target===f&&I&&(0,e.flushSync)(()=>S("ANIMATION_END"))},R=D=>{D.target===f&&(O.current=H(h.current))};return f.addEventListener("animationstart",R),f.addEventListener("animationcancel",g),f.addEventListener("animationend",g),()=>{f.removeEventListener("animationstart",R),f.removeEventListener("animationcancel",g),f.removeEventListener("animationend",g)}}else S("ANIMATION_END")},[f,S]),{isPresent:["mounted","unmountSuspended"].includes(K),ref:(0,o.useCallback)(g=>{g&&(h.current=getComputedStyle(g)),b(g)},[])}}function H(x){return(x==null?void 0:x.animationName)||"none"}},77310:function(a,l,t){"use strict";t.d(l,{aU:function(){return st},x8:function(){return at},dk:function(){return rt},zt:function(){return et},fC:function(){return nt},Dx:function(){return ot},l_:function(){return tt}});var o=t(87462),e=t(67294),W=t(73935),C=t(36206),N=t(28771),m=t(65936),E=t(25360),H=t(46063),x=t(42651),f=t(29115),b=t(75320),h=t(79698),M=t(77342),O=t(9981);const X="VisuallyHidden",K=(0,e.forwardRef)((n,s)=>(0,e.createElement)(b.WV.span,(0,o.Z)({},n,{ref:s,style:de({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"},n.style)}))),S=null,g="ToastProvider",[R,D,z]=(0,m.B)("Toast"),[I,p]=(0,E.b)("Toast",[z]),[u,P]=I(g),$=n=>{const{__scopeToast:s,label:i="Notification",duration:r=5e3,swipeDirection:d="right",swipeThreshold:_=50,children:F}=n,[Z,k]=(0,e.useState)(null),[j,v]=(0,e.useState)(0),te=(0,e.useRef)(!1),ie=(0,e.useRef)(!1);return(0,e.createElement)(R.Provider,{scope:s},(0,e.createElement)(u,{scope:s,label:i,duration:r,swipeDirection:d,swipeThreshold:_,toastCount:j,viewport:Z,onViewportChange:k,onToastAdd:(0,e.useCallback)(()=>v(pe=>pe+1),[]),onToastRemove:(0,e.useCallback)(()=>v(pe=>pe-1),[]),isFocusedToastEscapeKeyDownRef:te,isClosePausedRef:ie},F))};$.propTypes={label(n){if(n.label&&typeof n.label=="string"&&!n.label.trim()){const s=`Invalid prop \`label\` supplied to \`${g}\`. Expected non-empty \`string\`.`;return new Error(s)}return null}};const T="ToastViewport",V=["F8"],re="toast.viewportPause",J="toast.viewportResume",ee=(0,e.forwardRef)((n,s)=>{const ce=n,{__scopeToast:i,hotkey:r=V,label:d="Notifications ({hotkey})"}=ce,_=G(ce,["__scopeToast","hotkey","label"]),F=P(T,i),Z=D(i),k=(0,e.useRef)(null),j=(0,e.useRef)(null),v=(0,e.useRef)(null),te=(0,e.useRef)(null),ie=(0,N.e)(s,te,F.onViewportChange),pe=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),me=F.toastCount>0;(0,e.useEffect)(()=>{const y=ne=>{var w;r.every(Q=>ne[Q]||ne.code===Q)&&((w=te.current)===null||w===void 0||w.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r]),(0,e.useEffect)(()=>{const y=k.current,ne=te.current;if(me&&y&&ne){const w=()=>{if(!F.isClosePausedRef.current){const q=new CustomEvent(re);ne.dispatchEvent(q),F.isClosePausedRef.current=!0}},Y=()=>{if(F.isClosePausedRef.current){const q=new CustomEvent(J);ne.dispatchEvent(q),F.isClosePausedRef.current=!1}},Q=q=>{!y.contains(q.relatedTarget)&&Y()},oe=()=>{y.contains(document.activeElement)||Y()};return y.addEventListener("focusin",w),y.addEventListener("focusout",Q),y.addEventListener("pointermove",w),y.addEventListener("pointerleave",oe),window.addEventListener("blur",w),window.addEventListener("focus",Y),()=>{y.removeEventListener("focusin",w),y.removeEventListener("focusout",Q),y.removeEventListener("pointermove",w),y.removeEventListener("pointerleave",oe),window.removeEventListener("blur",w),window.removeEventListener("focus",Y)}}},[me,F.isClosePausedRef]);const A=(0,e.useCallback)(({tabbingDirection:y})=>{const w=Z().map(Y=>{const Q=Y.ref.current,oe=[Q,...qe(Q)];return y==="forwards"?oe:oe.reverse()});return(y==="forwards"?w.reverse():w).flat()},[Z]);return(0,e.useEffect)(()=>{const y=te.current;if(y){const ne=w=>{const Y=w.altKey||w.ctrlKey||w.metaKey;if(w.key==="Tab"&&!Y){const Ae=document.activeElement,Ee=w.shiftKey;if(w.target===y&&Ee){var oe;(oe=j.current)===null||oe===void 0||oe.focus();return}const Pe=A({tabbingDirection:Ee?"backwards":"forwards"}),Me=Pe.findIndex(c=>c===Ae);if(Be(Pe.slice(Me+1)))w.preventDefault();else{var q,ue;Ee?(q=j.current)===null||q===void 0||q.focus():(ue=v.current)===null||ue===void 0||ue.focus()}}};return y.addEventListener("keydown",ne),()=>y.removeEventListener("keydown",ne)}},[Z,A]),(0,e.createElement)(H.I0,{ref:k,role:"region","aria-label":d.replace("{hotkey}",pe),tabIndex:-1,style:{pointerEvents:me?void 0:"none"}},me&&(0,e.createElement)(B,{ref:j,onFocusFromOutsideViewport:()=>{const y=A({tabbingDirection:"forwards"});Be(y)}}),(0,e.createElement)(R.Slot,{scope:i},(0,e.createElement)(b.WV.ol,(0,o.Z)({tabIndex:-1},_,{ref:ie}))),me&&(0,e.createElement)(B,{ref:v,onFocusFromOutsideViewport:()=>{const y=A({tabbingDirection:"backwards"});Be(y)}}))}),ve="ToastFocusProxy",B=(0,e.forwardRef)((n,s)=>{const F=n,{__scopeToast:i,onFocusFromOutsideViewport:r}=F,d=G(F,["__scopeToast","onFocusFromOutsideViewport"]),_=P(ve,i);return(0,e.createElement)(K,(0,o.Z)({"aria-hidden":!0,tabIndex:0},d,{ref:s,style:{position:"fixed"},onFocus:Z=>{var k;const j=Z.relatedTarget;!((k=_.viewport)!==null&&k!==void 0&&k.contains(j))&&r()}}))}),U="Toast",Le="toast.swipeStart",ae="toast.swipeMove",Fe="toast.swipeCancel",We="toast.swipeEnd",Te=(0,e.forwardRef)((n,s)=>{const j=n,{forceMount:i,open:r,defaultOpen:d,onOpenChange:_}=j,F=G(j,["forceMount","open","defaultOpen","onOpenChange"]),[Z=!0,k]=(0,M.T)({prop:r,defaultProp:d,onChange:_});return(0,e.createElement)(f.z,{present:i||Z},(0,e.createElement)(ye,(0,o.Z)({open:Z},F,{ref:s,onClose:()=>k(!1),onPause:(0,h.W)(n.onPause),onResume:(0,h.W)(n.onResume),onSwipeStart:(0,C.M)(n.onSwipeStart,v=>{v.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,C.M)(n.onSwipeMove,v=>{const{x:te,y:ie}=v.detail.delta;v.currentTarget.setAttribute("data-swipe","move"),v.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${te}px`),v.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${ie}px`)}),onSwipeCancel:(0,C.M)(n.onSwipeCancel,v=>{v.currentTarget.setAttribute("data-swipe","cancel"),v.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),v.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),v.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),v.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,C.M)(n.onSwipeEnd,v=>{const{x:te,y:ie}=v.detail.delta;v.currentTarget.setAttribute("data-swipe","end"),v.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),v.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),v.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${te}px`),v.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${ie}px`),k(!1)})})))}),[Ke,Ue]=I(U,{onClose(){}}),ye=(0,e.forwardRef)((n,s)=>{const Me=n,{__scopeToast:i,type:r="foreground",duration:d,open:_,onClose:F,onEscapeKeyDown:Z,onPause:k,onResume:j,onSwipeStart:v,onSwipeMove:te,onSwipeCancel:ie,onSwipeEnd:pe}=Me,me=G(Me,["__scopeToast","type","duration","open","onClose","onEscapeKeyDown","onPause","onResume","onSwipeStart","onSwipeMove","onSwipeCancel","onSwipeEnd"]),A=P(U,i),[ce,y]=(0,e.useState)(null),ne=(0,N.e)(s,c=>y(c)),w=(0,e.useRef)(null),Y=(0,e.useRef)(null),Q=d||A.duration,oe=(0,e.useRef)(0),q=(0,e.useRef)(Q),ue=(0,e.useRef)(0),{onToastAdd:Ae,onToastRemove:Ee}=A,$e=(0,h.W)(()=>{var c;(ce==null?void 0:ce.contains(document.activeElement))&&((c=A.viewport)===null||c===void 0||c.focus()),F()}),he=(0,e.useCallback)(c=>{!c||c===1/0||(window.clearTimeout(ue.current),oe.current=new Date().getTime(),ue.current=window.setTimeout($e,c))},[$e]);(0,e.useEffect)(()=>{const c=A.viewport;if(c){const se=()=>{he(q.current),j==null||j()},fe=()=>{const _e=new Date().getTime()-oe.current;q.current=q.current-_e,window.clearTimeout(ue.current),k==null||k()};return c.addEventListener(re,fe),c.addEventListener(J,se),()=>{c.removeEventListener(re,fe),c.removeEventListener(J,se)}}},[A.viewport,Q,k,j,he]),(0,e.useEffect)(()=>{_&&!A.isClosePausedRef.current&&he(Q)},[_,Q,A.isClosePausedRef,he]),(0,e.useEffect)(()=>(Ae(),()=>Ee()),[Ae,Ee]);const Pe=(0,e.useMemo)(()=>ce?He(ce):null,[ce]);return A.viewport?(0,e.createElement)(e.Fragment,null,Pe&&(0,e.createElement)(Ve,{__scopeToast:i,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0},Pe),(0,e.createElement)(Ke,{scope:i,onClose:$e},(0,W.createPortal)((0,e.createElement)(R.ItemSlot,{scope:i},(0,e.createElement)(H.fC,{asChild:!0,onEscapeKeyDown:(0,C.M)(Z,()=>{A.isFocusedToastEscapeKeyDownRef.current||$e(),A.isFocusedToastEscapeKeyDownRef.current=!1})},(0,e.createElement)(b.WV.li,(0,o.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":_?"open":"closed","data-swipe-direction":A.swipeDirection},me,{ref:ne,style:de({userSelect:"none",touchAction:"none"},n.style),onKeyDown:(0,C.M)(n.onKeyDown,c=>{c.key==="Escape"&&(Z==null||Z(c.nativeEvent),c.nativeEvent.defaultPrevented||(A.isFocusedToastEscapeKeyDownRef.current=!0,$e()))}),onPointerDown:(0,C.M)(n.onPointerDown,c=>{c.button===0&&(w.current={x:c.clientX,y:c.clientY})}),onPointerMove:(0,C.M)(n.onPointerMove,c=>{if(!w.current)return;const se=c.clientX-w.current.x,fe=c.clientY-w.current.y,_e=!!Y.current,Ce=["left","right"].includes(A.swipeDirection),Ie=["left","up"].includes(A.swipeDirection)?Math.min:Math.max,it=Ce?Ie(0,se):0,ct=Ce?0:Ie(0,fe),ke=c.pointerType==="touch"?10:2,Ne={x:it,y:ct},Xe={originalEvent:c,delta:Ne};_e?(Y.current=Ne,De(ae,te,Xe,{discrete:!1})):Ze(Ne,A.swipeDirection,ke)?(Y.current=Ne,De(Le,v,Xe,{discrete:!1}),c.target.setPointerCapture(c.pointerId)):(Math.abs(se)>ke||Math.abs(fe)>ke)&&(w.current=null)}),onPointerUp:(0,C.M)(n.onPointerUp,c=>{const se=Y.current,fe=c.target;if(fe.hasPointerCapture(c.pointerId)&&fe.releasePointerCapture(c.pointerId),Y.current=null,w.current=null,se){const _e=c.currentTarget,Ce={originalEvent:c,delta:se};Ze(se,A.swipeDirection,A.swipeThreshold)?De(We,pe,Ce,{discrete:!0}):De(Fe,ie,Ce,{discrete:!0}),_e.addEventListener("click",Ie=>Ie.preventDefault(),{once:!0})}})})))),A.viewport))):null});ye.propTypes={type(n){if(n.type&&!["foreground","background"].includes(n.type)){const s=`Invalid prop \`type\` supplied to \`${U}\`. Expected \`foreground | background\`.`;return new Error(s)}return null}};const Ve=n=>{const j=n,{__scopeToast:s,children:i}=j,r=G(j,["__scopeToast","children"]),d=P(U,s),[_,F]=(0,e.useState)(!1),[Z,k]=(0,e.useState)(!1);return Je(()=>F(!0)),(0,e.useEffect)(()=>{const v=window.setTimeout(()=>k(!0),1e3);return()=>window.clearTimeout(v)},[]),Z?null:(0,e.createElement)(x.h,{asChild:!0},(0,e.createElement)(K,r,_&&(0,e.createElement)(e.Fragment,null,d.label," ",i)))},Oe="ToastTitle",ge=(0,e.forwardRef)((n,s)=>{const d=n,{__scopeToast:i}=d,r=G(d,["__scopeToast"]);return(0,e.createElement)(b.WV.div,(0,o.Z)({},r,{ref:s}))}),Re="ToastDescription",we=(0,e.forwardRef)((n,s)=>{const d=n,{__scopeToast:i}=d,r=G(d,["__scopeToast"]);return(0,e.createElement)(b.WV.div,(0,o.Z)({},r,{ref:s}))}),L="ToastAction",le=(0,e.forwardRef)((n,s)=>{const d=n,{altText:i}=d,r=G(d,["altText"]);return i?(0,e.createElement)(je,{altText:i,asChild:!0},(0,e.createElement)(be,(0,o.Z)({},r,{ref:s}))):null});le.propTypes={altText(n){return n.altText?null:new Error(`Missing prop \`altText\` expected on \`${L}\``)}};const xe="ToastClose",be=(0,e.forwardRef)((n,s)=>{const _=n,{__scopeToast:i}=_,r=G(_,["__scopeToast"]),d=Ue(xe,i);return(0,e.createElement)(je,{asChild:!0},(0,e.createElement)(b.WV.button,(0,o.Z)({type:"button"},r,{ref:s,onClick:(0,C.M)(n.onClick,d.onClose)})))}),je=(0,e.forwardRef)((n,s)=>{const _=n,{__scopeToast:i,altText:r}=_,d=G(_,["__scopeToast","altText"]);return(0,e.createElement)(b.WV.div,(0,o.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},d,{ref:s}))});function He(n){const s=[];return Array.from(n.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&s.push(r.textContent),Qe(r)){const d=r.ariaHidden||r.hidden||r.style.display==="none",_=r.dataset.radixToastAnnounceExclude==="";if(!d)if(_){const F=r.dataset.radixToastAnnounceAlt;F&&s.push(F)}else s.push(...He(r))}}),s}function De(n,s,i,{discrete:r}){const d=i.originalEvent.currentTarget,_=new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:i});s&&d.addEventListener(n,s,{once:!0}),r?(0,b.jH)(d,_):d.dispatchEvent(_)}const Ze=(n,s,i=0)=>{const r=Math.abs(n.x),d=Math.abs(n.y),_=r>d;return s==="left"||s==="right"?_&&r>i:!_&&d>i};function Je(n=()=>{}){const s=(0,h.W)(n);(0,O.b)(()=>{let i=0,r=0;return i=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(s)),()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(r)}},[s])}function Qe(n){return n.nodeType===n.ELEMENT_NODE}function qe(n){const s=[],i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const d=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||d?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)s.push(i.currentNode);return s}function Be(n){const s=document.activeElement;return n.some(i=>i===s?!0:(i.focus(),document.activeElement!==s))}const et=$,tt=ee,nt=Te,ot=ge,rt=we,st=le,at=be},19492:function(a,l,t){"use strict";t.d(l,{j:function(){return C}});var o=t(86010);const e=N=>typeof N=="boolean"?"".concat(N):N===0?"0":N,W=o.Z,C=(N,m)=>E=>{var H;if((m==null?void 0:m.variants)==null)return W(N,E==null?void 0:E.class,E==null?void 0:E.className);const{variants:x,defaultVariants:f}=m,b=Object.keys(x).map(O=>{const X=E==null?void 0:E[O],K=f==null?void 0:f[O];if(X===null)return null;const S=e(X)||e(K);return x[O][S]}),h=E&&Object.entries(E).reduce((O,X)=>{let[K,S]=X;return S===void 0||(O[K]=S),O},{}),M=m==null||(H=m.compoundVariants)===null||H===void 0?void 0:H.reduce((O,X)=>{let R=X,{class:K,className:S}=R,g=G(R,["class","className"]);return Object.entries(g).every(D=>{let[z,I]=D;return Array.isArray(I)?I.includes(de(de({},f),h)[z]):de(de({},f),h)[z]===I})?[...O,K,S]:O},[]);return W(N,b,M,E==null?void 0:E.class,E==null?void 0:E.className)}}}]);
}());