import{R as c,a0 as y,c as p,j as n,Y as m,E as h,a as P,B as A,A as x,d as f}from"./index-a63961a1.js";import{A as j,P as E}from"./AddToPlaylistCard-921afd0b.js";import{P as $}from"./Playlist-c32a1be0.js";import"./Banner-c927dc47.js";import"./ConfirmationCard-795851f9.js";import"./PaginationList-ce24f282.js";const g=({playlist:a,setPlaylist:t})=>{const[s,e]=c.useState({name:null,payload:null}),{addTrack:r}=y(),{setInfo:l,setError:o}=p();return n.jsxs(c.Fragment,{children:[n.jsx($,{stickyHeader:!0,url:`api/playlists/${a.id}/tracks`,playlist:a,setPlaylist:t,actions:["Remove from this playlist","Add to playlist","Add to queue"],onAction:(i,d,u)=>b(a,i,d,o,l,e,k,u,r)}),n.jsx(j,{open:s.name=="Add to playlist",track:s.payload,onClose:()=>e({name:null,payload:null})})]})},k=async(a,t,s,e,r)=>{try{await request(`api/playlists/${a.id}/tracks/${t.id}`,"DELETE"),s(l=>l.filter(o=>o.id!=t.id)),e("a track has been removed successfully")}catch(l){r(l)}},b=(a,t,s,e,r,l,o,i,d)=>{switch(t){case"Add to playlist":l({name:t,payload:s});break;case"Remove from this playlist":o(a,s,i,r,e);break;case"Add to queue":d(s);break}},B=()=>{const{data:a}=m(),[t,s]=c.useState({}),{user:e}=h(),{setPlaylists:r}=P(),{setError:l}=p();return n.jsxs(A,{sx:{width:"100%"},children:[n.jsx(E,{type:"playlist",playlist:{...a,...t},avatar:`${x}api/playlists/${a.id}/photo/${a.image}`,enableEdit:a.user.username==e.username,onAvatarChange:o=>v(a,o,l),onChange:o=>r(i=>(i[i.findIndex(d=>d.id==a.id)]=o,s(o),[...i]))}),n.jsx(g,{playlist:{...a,...t},setPlaylist:s})]})},v=async(a,t,s)=>{try{await f(`api/playlists/${a.id}/photo`,"POST",{photo:t}),window.location.reload()}catch(e){s(e)}};export{B as default};