import{R as h,a as w,u as E,c as C,j as t,G as P,F as g,S as j,T as d,b as m,D as S,d as u,L as I,a3 as A,A as B,B as D,E as $,I as b,a4 as L}from"./index-a63961a1.js";import{B as p}from"./Banner-c927dc47.js";import{S as y,C as O}from"./ConfirmationCard-795851f9.js";const W=({playlist:e,onChange:r,open:o,setOpen:s})=>{const[i,c]=h.useState(!1),[a,l]=h.useState(),{setPlaylists:f}=w(),v=E(),{setError:n,setInfo:k}=C();h.useEffect(()=>{l({title:e.title,description:e.description,private:!!e.private})},[e]);const T=()=>{R(e,a,r,n,k),s(!1)};return t.jsxs(P,{open:o,setOpen:s,children:[t.jsx(g,{fullWidth:!0,placeholder:"Title...",value:(a==null?void 0:a.title)||"",onChange:x=>l({...a,title:x.target.value}),label:"Title"}),t.jsx(g,{fullWidth:!0,placeholder:"Description...",value:(a==null?void 0:a.description)||"",onChange:x=>l({...a,description:x.target.value}),label:"Description"}),t.jsxs(j,{direction:"row",spacing:2,width:"100%",alignItems:"center",children:[t.jsx(d,{children:"Private"}),t.jsx(y,{checked:(a==null?void 0:a.private)||!1,onClick:()=>l({...a,private:!(a!=null&&a.private)})})]}),t.jsxs(j,{direction:"row",spacing:2,children:[t.jsx(m,{onClick:T,children:"Save"}),t.jsx(m,{color:"error",onClick:x=>s(!1),children:"Cancel"})]}),t.jsx(S,{flexItem:!0}),t.jsx(m,{color:"error",fullWidth:!0,onClick:()=>c(!0),children:"Delete"}),t.jsx(O,{onClose:()=>c(!1),onConfirmed:()=>F(e,f,v,n),open:i,message:"Are you sure you want to delete this playlist?"})]})},R=async(e,r,o,s,i)=>{try{const c={};r!=null&&r.title&&(c.title=r==null?void 0:r.title),r!=null&&r.description&&(c.description=r==null?void 0:r.description),(r==null?void 0:r.private)!=null&&(c.private=r!=null&&r.private?1:0);const l=await(await u(`api/playlists/${e.id}`,"POST",c)).json();o&&o(l.data),i("The playlist has been updated successfully")}catch(c){s(c)}},F=async(e,r,o,s)=>{try{await u(`api/playlists/${e.id}`,"DELETE"),r(i=>i.filter(c=>c.id!=e.id)),o("/playlist")}catch(i){s(i)}},K=({user:e,trackCount:r,isPrivate:o})=>t.jsxs(j,{direction:"row",spacing:1,flexWrap:"wrap",children:[e&&t.jsx(I,{to:`/user/${e.username}`,children:t.jsxs(j,{direction:"row",spacing:.5,sx:{cursor:"pointer",color:s=>s.palette.text.secondary,":hover":{color:s=>s.palette.text.primary}},children:[t.jsx(A,{sx:{width:25,height:25},src:`${B}api/account/${e.username}/profile/photo`}),t.jsx(d,{noWrap:!0,children:e.username})]})}),t.jsx(d,{children:"•"}),t.jsx(d,{children:o?"Private":"Public"}),r!=null&&t.jsxs(d,{children:[r," ",r>1?"tracks":"track"]})]}),G=({playlist:e,enableEdit:r,type:o,avatar:s,onAvatarChange:i,onChange:c})=>{const[a,l]=h.useState(!1);return t.jsxs(D,{sx:{width:"100%"},children:[t.jsx(p,{title:e.title,description:e.description,type:o,onEdit:r&&(()=>l(!0)),onAvatarChange:i,avatar:s,children:t.jsx(K,{user:e==null?void 0:e.user,trackCount:e==null?void 0:e.tracks_count,isPrivate:e.private})}),t.jsx(W,{playlist:e,onChange:c,open:a,setOpen:l})]})},N=({track:e,open:r,onClose:o})=>{const{playlists:s}=w(),[i,c]=h.useState(""),{user:a}=$(),{setError:l,setInfo:f}=C(),v=n=>{M(n,e,l,f),o()};return t.jsxs(P,{open:r,setOpen:o,children:[t.jsx(b,{value:i,onChange:n=>c(n.currentTarget.value),placeholder:"Search...",sx:{width:"100%",px:1,fontSize:20}}),t.jsx(S,{flexItem:!0}),s==null?void 0:s.filter(n=>U(n,i,a)).map(n=>t.jsx(L,{title:n==null?void 0:n.title,small:!0,onClick:()=>v(n)},n.id))]})},M=async(e,r,o,s)=>{try{await u(`api/playlists/${e.id}/tracks/${r.id}`,"POST"),s(`The track has been added to ${e.title} successfully.`)}catch(i){o(i)}},U=(e,r,o)=>!e.album&&e.user.username==o.username&&e.title.toLowerCase().startsWith(r.toLowerCase());export{N as A,G as P};
