import{h as g,i as h,H as k,B as v,o as t,g as B,w as $,e as w,j as c,b as e,a as o,r as _,F as u,t as i}from"./app.482c2f46.js";import{_ as x}from"./Common.80d27249.js";import{_ as y}from"./PageHeader.480045cc.js";const F={class:"links-wrapper"},L={class:"link-group"},b={class:"content"},C=["href"],D=["src"],N={class:"sitename"},T={class:"desc"},I=g({setup(V){const a=h(),p=k(),d=v(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),B(x,null,{page:$(()=>[w(y,{"page-info":c(d)},null,8,["page-info"]),e("div",F,[(t(!0),o(u,null,_(c(p).links,(l,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",L,[(t(!0),o(u,null,_(l.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",b,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,D),e("span",N,i(n.sitename),1),e("div",T,i(n.desc),1)],8,C)])]))),128))])]))),128))])]),_:1}))}});export{I as default};
