import{R as i,a0 as n,j as s,B as d,A as r}from"./index-a63961a1.js";import{P as p}from"./Playlist-c32a1be0.js";import{P as y,A as c}from"./AddToPlaylistCard-921afd0b.js";import"./PaginationList-ce24f282.js";import"./Banner-c927dc47.js";import"./ConfirmationCard-795851f9.js";const g=()=>{const[a,t]=i.useState({name:null,payload:null}),{addTrack:l}=n();return s.jsxs(d,{sx:{width:"100%"},children:[s.jsx(y,{avatar:`${r}img/likes.png`,playlist:{title:"Liked Songs"},type:"playlist"}),s.jsx(p,{stickyHeader:!0,playlist:{title:"Liked Songs"},url:"api/likes",actions:["Add to playlist","Add to queue"],onAction:(e,o)=>m(e,o,t,l)}),s.jsx(c,{open:a.name=="Add to playlist",track:a.payload,onClose:()=>t({name:null,payload:null})})]})},m=(a,t,l,e)=>{switch(a){case"Add to playlist":l({name:a,payload:t});break;case"Add to queue":e(t);break}};export{g as default};
