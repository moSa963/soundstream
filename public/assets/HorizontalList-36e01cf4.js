import{R as l,j as d,S as h}from"./index-a63961a1.js";const x=({children:a,noWrap:r,spacing:c,end:f})=>{const e=l.useRef();return l.useEffect(()=>{var s;const n=t=>{if(!e.current||t.deltaX!=0)return;const{scrollLeft:o,scrollWidth:u,offsetWidth:i}=t.currentTarget;(o<u-i&&t.deltaY>0||o!=0&&t.deltaY<0)&&t.preventDefault(),t.currentTarget.scrollBy({left:t.deltaY<0?-40:40})};return(s=e.current)==null||s.addEventListener("wheel",n),()=>{var t;return(t=e.current)==null?void 0:t.removeEventListener("wheel",n)}},[e.current]),d.jsx(h,{ref:e,flexWrap:r?"nowrap":"wrap",direction:"row",spacing:c,justifyContent:r?f?"end":"start":"center",sx:{overflowX:r?"auto":"hidden"},children:a})};export{x as H};