import{d,i as _,a as p,u,b as h,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as k,m as N,p as w,q as P,_ as C}from"./index-d3ff60a9.js";import{N as H}from"./NoteDisplay-fc58a4ee.js";const S={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const l=f(()=>y.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(r(),n("div",{id:"page-root",style:x(a(P))},[t("div",S,[t("div",V,[t("h1",j,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,s(e==null?void 0:e.no)+"/"+s(a(b)),1),k(" "+s(e==null?void 0:e.title)+" ",1),z])]),N(H,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),R=C(M,[["__file","/home/runner/work/Huffman-Coding/Huffman-Coding/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};