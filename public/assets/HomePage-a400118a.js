import{u as e,a as n,j as a,B as m}from"./index-a63961a1.js";import{C as l}from"./Card-b9222e5f.js";import{P as r}from"./PlaylistCard-a0c0e60e.js";import{P as c}from"./PaginationList-ce24f282.js";import{C as d}from"./CardsSectionSkeleton-072fedf3.js";import{T as u}from"./TrackCard-f974bf33.js";import"./HorizontalList-36e01cf4.js";const A=()=>{const s=e(),{playlists:o}=n();return a.jsxs(m,{sx:{width:"100%"},children:[a.jsx(l,{title:"Your Playlists",onAction:()=>s("/library/playlists"),actionTitle:"ShowAll",Card:r,data:o.filter((t,i)=>!t.album).filter((t,i)=>i<6)}),a.jsx(c,{url:"api/likes?count=6",Skeleton:d,loader:({list:t})=>a.jsx(l,{title:"Liked Tracks",onAction:()=>s("/likes"),actionTitle:"ShowAll",Card:u,data:t})}),a.jsx(l,{title:"Albums",onAction:()=>s("/library/albums"),actionTitle:"ShowAll",Card:r,data:o.filter(t=>t.album).filter((t,i)=>i<4)})]})};export{A as default};
