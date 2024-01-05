"use strict";(self.webpackChunk_bfe_moly=self.webpackChunk_bfe_moly||[]).push([[137],{55738:function(j,d,n){n.r(d);var o=n(5574),m=n.n(o),l=n(97167),v=n(21256),r=n(67294),e=n(85893),t=function(){var i=(0,r.useState)("light"),c=m()(i,2),s=c[0],f=c[1],h=(0,v.OI)(),b=m()(h,1),_=b[0];return(0,r.useEffect)(function(){f(_==="dark"?"dark":"light")},[_]),(0,e.jsxs)("div",{className:"",children:["Left",(0,e.jsx)("br",{}),(0,e.jsx)(l.Z,{theme:s,orientation:"start",children:"Sample"}),(0,e.jsx)("br",{}),"Center",(0,e.jsx)("br",{}),(0,e.jsx)(l.Z,{theme:s,orientation:"center",children:"Sample"}),(0,e.jsx)("br",{}),"Right",(0,e.jsx)(l.Z,{theme:s,orientation:"end",children:"Sample"}),(0,e.jsx)("br",{}),"Normal",(0,e.jsx)("br",{}),(0,e.jsx)(l.Z,{theme:s}),"vertical",(0,e.jsx)("br",{}),(0,e.jsx)(l.Z,{type:"vertical",theme:s,style:{height:200},children:"Sample"}),"Dashed",(0,e.jsx)(l.Z,{line:"dashed",theme:s,style:{height:200},children:"Dashed"})]})};d.default=t},97167:function(j,d,n){var o=n(32538);d.Z=o.Z},32538:function(j,d,n){n.d(d,{Z:function(){return S}});var o={};n.r(o),n.d(o,{center:function(){return R},darkTheme:function(){return O},dashed:function(){return L},divider:function(){return E},dividerContent:function(){return g},end:function(){return K},horizontal:function(){return A},lightTheme:function(){return y},solid:function(){return U},start:function(){return B},vertical:function(){return I}});var m=n(36493),l=n(67294),v=n(68400),r=n.n(v),e=n(93985),t,a,i,c,s,f,h,b,_,x,p,y=(0,e.iv)(t||(t=r()([`
  --line-color: var(--bds-gray-ele-borde, #e9edf2);
  --color: var(--bds-gray-t3, #71757a);
`]))),O=(0,e.iv)(a||(a=r()([`
  --line-color: var(--bds-gray-ele-border, #404347);
  --color: var(--bds-gray-t3, #71757a);
`]))),E=(0,e.iv)(i||(i=r()([`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  font-family: 'IBM Plex Sans';
  color: var(--color);

  &::before {
    content: '';
    flex: 1;
    min-width: 10px;
    border-bottom: 1px var(--border-style) var(--line-color);
  }
  &::after {
    content: '';
    flex: 1;
    min-width: 10px;
    border-bottom: 1px var(--border-style) var(--line-color);
  }
`]))),A=(0,e.iv)(c||(c=r()([`
  flex-direction: row;
`]))),I=(0,e.iv)(s||(s=r()([`
  flex-direction: column;

  &::before,
  &::after {
    border-bottom: none;
    border-left: 1px var(--border-style) var(--line-color);
  }
`]))),L=(0,e.iv)(f||(f=r()([`
  --border-style: dashed;
`]))),U=(0,e.iv)(h||(h=r()([`
  --border-style: solid;
`]))),g=(0,e.iv)(b||(b=r()([`
  white-space: nowrap;
  margin-left: 0.5em;
  margin-right: 0.5em;
`]))),B=(0,e.iv)(_||(_=r()([`
  justify-content: flex-start;
  &:before {
    flex: 0;
  }
`]))),K=(0,e.iv)(x||(x=r()([`
  justify-content: flex-end;
  &:after {
    flex: 0;
  }
`]))),R=(0,e.iv)(p||(p=r()([`
  justify-content: center;
`]))),D=n(85893),W=function(u){var Z=u.className,N=u.style,P=u.children,M=u.type,$=M===void 0?"horizontal":M,C=u.orientation,z=C===void 0?"center":C,T=u.line,F=T===void 0?"solid":T,H=u.theme;return(0,D.jsx)("div",{style:N,className:(0,m.cn)(Z,E,o[$],o[F],o[z],H==="dark"?O:y),children:P?(0,D.jsx)("span",{className:g,children:P}):null})},S=W},36493:function(j,d,n){n.d(d,{KX:function(){return e},K_:function(){return v},cn:function(){return l},ey:function(){return r}});var o=n(86010),m=n(57851);function l(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(0,m.m)((0,o.W)(a))}function v(t){return t?/^#[0-9A-F]{6}$/i.test(t):!1}function r(t,a){if(!v(t))return t;var i=Math.round(a*255);return"".concat(t).concat(i.toString(16).toUpperCase())}function e(t,a){var i=t.findIndex(function(c){return c!=null});return i===-1?a:t[i]}}}]);
