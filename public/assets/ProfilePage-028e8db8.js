import{E as l,c as i,j as e,B as t,A as c,S as d,F as o,b as n,D as u,d as p}from"./index-a63961a1.js";import{B as h}from"./Banner-c927dc47.js";const f=()=>{const{user:a}=l(),{setError:r}=i();return e.jsxs(t,{sx:{width:"100%"},children:[e.jsx(h,{avatar:`${c}api/account/${a.username}/profile/photo`,title:a.name,description:`@${a.username}`,onAvatarChange:s=>m(s,r),type:"profile"}),e.jsx(t,{sx:{p:3},children:e.jsxs(d,{spacing:2,sx:{width:"100%",alignItems:"end"},children:[e.jsx(o,{fullWidth:!0,size:"small",placeholder:"Name...",value:a.name,onChange:s=>{},label:"Name"}),e.jsx(o,{fullWidth:!0,size:"small",placeholder:"Username...",value:a.username,onChange:s=>{},label:"Username"}),e.jsx(n,{onClick:()=>{},children:"Update"}),e.jsx(u,{flexItem:!0}),e.jsx(n,{color:"error",children:"LOGOUT"})]})})]})},m=async(a,r)=>{try{await p("api/account/profile/photo","POST",{photo:a}),window.location.reload()}catch(s){r(s)}};export{f as default};