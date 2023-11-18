import{g as j,e as m,s as F,f as _,$,h as d,_ as l,k as w,l as P,m as T,j as i,n as x,o as I,r as M,i as N,a0 as V,u as W,A,T as h,B}from"./index-a63961a1.js";import{a as U}from"./Card-b9222e5f.js";function L(o){return m("MuiFab",o)}const q=j("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),f=q,D=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],E=o=>{const{color:s,variant:a,classes:r,size:t}=o,e={root:["root",a,`size${d(t)}`,s==="inherit"?"colorInherit":s]},n=I(e,L,r);return l({},r,n)},O=F(_,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>$(o)||o==="classes",overridesResolver:(o,s)=>{const{ownerState:a}=o;return[s.root,s[a.variant],s[`size${d(a.size)}`],a.color==="inherit"&&s.colorInherit,s[d(a.size)],s[a.color]]}})(({theme:o,ownerState:s})=>{var a,r;return l({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(a=(r=o.palette).getContrastText)==null?void 0:a.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${f.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]}},s.size==="small"&&{width:40,height:40},s.size==="medium"&&{width:48,height:48},s.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},s.variant==="extended"&&s.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},s.variant==="extended"&&s.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},s.color==="inherit"&&{color:"inherit"})},({theme:o,ownerState:s})=>l({},s.color!=="inherit"&&s.color!=="default"&&(o.vars||o).palette[s.color]!=null&&{color:(o.vars||o).palette[s.color].contrastText,backgroundColor:(o.vars||o).palette[s.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[s.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[s.color].main}}}),({theme:o})=>({[`&.${f.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}})),H=w.forwardRef(function(s,a){const r=P({props:s,name:"MuiFab"}),{children:t,className:e,color:n="default",component:p="button",disabled:b=!1,disableFocusRipple:g=!1,focusVisibleClassName:y,size:k="large",variant:z="circular"}=r,R=T(r,D),v=l({},r,{color:n,component:p,disabled:b,disableFocusRipple:g,size:k,variant:z}),c=E(v);return i.jsx(O,l({className:x(c.root,e),component:p,disabled:b,focusRipple:!g,focusVisibleClassName:x(c.focusVisible,y),ownerState:v,ref:a},R,{classes:c,children:t}))}),G=H;var u={},J=N;Object.defineProperty(u,"__esModule",{value:!0});var C=u.default=void 0,K=J(M()),Q=i,X=(0,K.default)((0,Q.jsx)("path",{d:"M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"}),"PlayArrowOutlined");C=u.default=X;const S=({data:o})=>{const{addTrack:s,playTrack:a}=V(),r=W(),t=e=>{e.stopPropagation(),s(o),a(o)};return i.jsxs(U,{src:`${A}api/tracks/${o.id}/photo`,onClick:()=>r(`/track/${o.id}`),children:[i.jsx(h,{noWrap:!0,children:o==null?void 0:o.title}),i.jsxs(h,{variant:"caption",color:"gray",fontFamily:"serif",children:["@",o==null?void 0:o.user.username]}),i.jsx(B,{sx:{position:"absolute",inset:"0 0 0 0",display:"flex",justifyContent:"end",alignItems:"end",opacity:0,p:3,transition:"500ms",background:e=>`linear-gradient(174deg, rgba(0,0,0,0) 10%, ${e.palette.background.paper} 100%)`,":hover":{opacity:1}},children:i.jsx(G,{color:"primary",size:"large",onClick:t,children:i.jsx(C,{sx:{width:"100%",height:"100%"}})})})]})};export{S as T};
