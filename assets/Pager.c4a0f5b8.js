import{h as i,d as u,o as e,a as o,g as d,w as l,f as c,t as a,x as n,b as r}from"./app.482c2f46.js";const x={class:"pager"},k=r("br",null,null,-1),m={key:0},h=r("br",null,null,-1),v={key:0},B=i({props:{data:{type:Object,required:!0}},setup(t){return(f,y)=>{const s=u("RouterLink");return e(),o("div",x,[t.data.next?(e(),d(s,{key:0,class:"next",to:t.data.next.link},{default:l(()=>[c(a(t.data.next.text),1),k,t.data.next.title?(e(),o("span",m,a(t.data.next.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0),t.data.prev?(e(),d(s,{key:1,class:"previous",to:t.data.prev.link},{default:l(()=>[c(a(t.data.prev.text),1),h,t.data.prev.title?(e(),o("span",v,a(t.data.prev.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0)])}}});export{B as _};