import{R as l,c as d,j as e,b as c,G as h,F as x,S as j,d as C}from"./index-a63961a1.js";const f=({onAlbumAdded:r})=>{const[n,t]=l.useState(!1),[s,a]=l.useState(""),{setError:i,setInfo:u}=d();return e.jsxs(l.Fragment,{children:[e.jsx(c,{fullWidth:!0,onClick:()=>t(!0),variant:"text",children:"Create New Album"}),e.jsxs(h,{open:n,setOpen:t,children:[e.jsx(x,{fullWidth:!0,placeholder:"Name...",value:s,onChange:o=>a(o.target.value)}),e.jsxs(j,{direction:"row",spacing:2,children:[e.jsx(c,{onClick:()=>{m(s,r,i,u),t(!1)},children:"Create"}),e.jsx(c,{color:"error",onClick:o=>t(!1),children:"Cancel"})]})]})]})},m=async(r,n,t,s)=>{try{const a=await(await C("api/albums","POST",{title:r})).json();n(a.data),s("A new album has been created.")}catch(a){t(a)}};export{f as C};