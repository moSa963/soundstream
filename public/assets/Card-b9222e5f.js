import{j as t,S as x,T as h,a2 as m,s as c,a3 as j,L as l,P as p,B as w}from"./index-a63961a1.js";import{H as u}from"./HorizontalList-36e01cf4.js";const S=({title:a,onAction:r,actionTitle:i,data:s,Card:d,noWrap:n})=>t.jsxs(x,{spacing:2,sx:{width:"100%",p:2},children:[t.jsx(h,{variant:"h4",fontFamily:"cursive",children:a}),t.jsx(u,{noWrap:n,children:s==null?void 0:s.map(o=>t.jsx(d,{data:o},o.id))}),r&&t.jsx(m,{onClick:r,title:i,justifyEnd:!0})]}),v=c(j)(()=>({width:"100%",height:"100%",overflow:"hidden",objectFit:"cover"})),g=({src:a,onClick:r,children:i,to:s})=>s?t.jsx(l,{to:s,children:t.jsx(e,{onClick:r,src:a,children:i})}):t.jsx(e,{onClick:r,src:a,children:i}),e=({src:a,onClick:r,children:i})=>t.jsxs(p,{elevation:3,onClick:r,sx:{position:"relative",width:"100%",maxWidth:{xs:130,sm:160,md:180},minWidth:{xs:130,sm:160,md:180},height:{xs:200,sm:255,md:255},p:{xs:.5,md:1},overflow:"hidden",cursor:"pointer",m:.5,boxShadow:s=>s.shadows[2],":hover":{boxShadow:s=>s.shadows[6],filter:"contrast(90%)"}},children:[t.jsx(w,{sx:{width:"100%",aspectRatio:"1",my:{xs:.5,md:1},boxShadow:s=>s.shadows[1]},children:t.jsx(v,{src:a,variant:"square"})}),i]});export{S as C,g as a};