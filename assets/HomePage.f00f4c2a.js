import{h as $,d as N,o as a,a as h,b as t,t as b,j as c,R as D,x as w,e as d,w as C,I as H,i as R,B as y,S as T,F as V,r as A,g as L,C as S,n as F,U as P,s as B}from"./app.482c2f46.js";import{_ as z}from"./Common.80d27249.js";import{_ as j}from"./Pager.c4a0f5b8.js";const E={class:"post-item"},q=["src"],O={class:"else"},U={key:0,class:"post-item__date"},G={key:0},J=["innerHTML"],K=$({props:{item:{type:Object,required:!0}},setup(r){const u=e=>e.replaceAll("<RouterLink to","<a href").replaceAll("</RouterLink>","</a>");return(e,i)=>{const _=N("RouterLink");return a(),h("div",E,[t("div",{class:"post-item__img",onClick:i[0]||(i[0]=g=>e.$router.push(r.item.path))},[t("img",{src:e.$withBase(r.item.frontmatter.headerImage)},null,8,q)]),t("div",O,[r.item.frontmatter.date?(a(),h("p",U,b(c(D)(r.item.frontmatter.date)),1)):w("",!0),d(_,{to:r.item.path,class:"post-item__title"},{default:C(()=>[t("h2",null,b(r.item.frontmatter.title),1),r.item.frontmatter.subtitle?(a(),h("h3",G,b(r.item.frontmatter.subtitle),1)):w("",!0)]),_:1},8,["to"]),t("div",{class:"post-item__content",innerHTML:u(r.item.excerpt)},null,8,J)])])}}}),Q={class:"postlist-wrapper"},W=$({setup(r){const u=H(),e=R(),i=y(()=>{const o=decodeURI(u.currentRoute.value.path.replace(/\/page/g,"").replace(/\//g,""));return o===""?1:Number(o)}),{slicedPosts:_,pagerLink:g}=T(i),m=y(()=>{const o=g.value,n=o&&o.next?{text:e.value.homeNext,link:o.next}:null,l=o&&o.prev?{text:e.value.homePrev,link:o.prev}:null;return{next:n,prev:l}});return(o,n)=>(a(),h("div",Q,[(a(!0),h(V,null,A(c(_),l=>(a(),L(K,{key:l.path,item:l},null,8,["item"]))),128)),c(m).next||c(m).prev?(a(),L(j,{key:0,data:c(m)},null,8,["data"])):w("",!0)]))}});const X={class:"sns-wrapper"},Y=["href"],Z=$({props:{large:{type:Boolean,default:!0}},setup(r){var o;const u={github:{icon:"fa-github-alt",preLink:"https://github.com/"},linkedin:{icon:"fa-linkedin-in",preLink:"https://www.linkedin.com/in/"},facebook:{icon:"fa-facebook-f",preLink:"https://www.facebook.com/"},twitter:{icon:"fa-twitter",preLink:"https://www.twitter.com/"},zhihu:{icon:"ri-zhihu-line",preLink:"https://www.zhihu.com/people/"},weibo:{icon:"ri-weibo-fill",preLink:"http://weibo.com/u/"},email:{icon:"fa-envelope",preLink:"mailto:"},rss:{icon:"ri-rss-fill",preLink:"",iconScale:.9}},i=(o=R().value.personalInfo)==null?void 0:o.sns,_=(n,l)=>typeof n=="string"?u[l].preLink+n:n.link,g=(n,l)=>typeof n=="string"?u[l].icon:n.icon,m=(n,l)=>(typeof n=="string"?u[l].iconScale:n.iconScale)||1;return(n,l)=>{const v=N("VIcon");return a(),h("div",X,[(a(!0),h(V,null,A(c(i),(k,f)=>(a(),h("a",{key:`${f}-${k}`,href:_(k,f),target:"_blank",rel:"noopener noreferrer"},[d(v,{class:"icon-stack"},{default:C(()=>[r.large?(a(),L(v,{key:0,name:"fa-circle",scale:"2.3",class:"icon-circle"})):w("",!0),d(v,{name:g(k,f),scale:m(k,f),class:"icon-sns",inverse:""},null,8,["name","scale"])]),_:2},1024)],8,Y))),128))])}}}),ee={class:"home-blog"},te=["src"],oe={key:0,class:"hero-bubble"},ne={class:"hero-bubble__body"},se=t("div",{class:"hero-bubble__tile"},null,-1),ae={class:"hero-info"},re={class:"description"},ie=$({setup(r){const u=R(),e=u.value.homeHeaderImages,i=S(-1),_=S(1),g=()=>{window.scrollTo({top:document.querySelector(".hero").clientHeight,behavior:"smooth"})},m=u.value.hitokoto,o=S("\u6B63\u5728\u52A0\u8F7D\u4E00\u8A00...");let n=!1;const l=()=>{if(!m||n)return;n=!0;let p=m;p=typeof p=="string"?p:"https://v1.hitokoto.cn",fetch(p).then(s=>s.json()).then(s=>o.value=s.hitokoto).catch(s=>{console.log(`Get ${p} error: `,s)})};F(()=>{e&&e.length>0&&(i.value=Math.floor(Math.random()*e.length))});const v=p=>{if(!(e&&e.length>0))return;const s=e.length;i.value=(i.value+p+s)%s},k=y(()=>e&&e.length>0&&i.value!==-1?`url(${P(e[i.value].path)})`:"none"),f=y(()=>e&&e.length>0&&i.value!==-1?e[i.value].mask:null),I=u.value.personalInfo;return(p,s)=>{const x=N("VIcon");return a(),h("main",ee,[t("div",{class:"hero",style:B({"background-image":c(k)})},[c(f)?(a(),h("div",{key:0,class:"hero-mask",style:B({background:c(f)})},null,4)):w("",!0),t("div",{class:"hero-content",style:B({opacity:_.value})},[t("img",{class:"hero-avatar hide-on-mobile",src:p.$withBase(c(I).avatar),alt:"hero",onMouseover:l},null,40,te),c(m)?(a(),h("div",oe,[t("div",ne,[t("p",null,b(o.value),1)]),se])):w("",!0),t("div",ae,[t("h1",null,b(c(I).name),1),t("p",re,b(c(I).description),1)]),d(Z,{class:"hide-on-mobile",large:""}),t("button",{class:"hero-img-prev hide-on-mobile",onClick:s[0]||(s[0]=M=>v(-1))},[d(x,{name:"fa-chevron-left"})]),t("button",{class:"hero-img-next hide-on-mobile",onClick:s[1]||(s[1]=M=>v(1))},[d(x,{name:"fa-chevron-right"})]),t("span",{class:"hero-arrow-down hide-on-mobile",onClick:s[2]||(s[2]=M=>g())},[d(x,{name:"fa-chevron-down",animation:"float"})])],4)],4),d(W)])}}}),he=$({setup(r){return(u,e)=>(a(),L(z,null,{page:C(()=>[d(ie)]),_:1}))}});export{he as default};