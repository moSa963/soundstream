import{Z as i,j as t,B as a}from"./index-a63961a1.js";import"./Card-b9222e5f.js";import{P as e}from"./PaginationList-ce24f282.js";import{P as m}from"./PlaylistsList-189b0368.js";import{C as l}from"./CardsSectionSkeleton-072fedf3.js";import"./HorizontalList-36e01cf4.js";import"./PlaylistCard-a0c0e60e.js";import"./Playlist-c32a1be0.js";const c=()=>{const{user:s}=i();return t.jsx(a,{sx:{width:"100%"},children:t.jsx(e,{url:`api/users/${s==null?void 0:s.username}/albums`,Skeleton:l,loader:({list:o,setList:r})=>t.jsx(m,{playlists:o,setPlaylists:r})})})};export{c as default};