"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[9518],{28559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(74848),o=r(28453),s=(r(96540),r(78478));const a=e=>(0,n.jsx)(s.A,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:()=>{const t=r(24447).A;return(0,n.jsx)(t,{...e})}}),i={sidebar_position:1},c="Roadmap",d={id:"Roadmap",title:"Roadmap",description:"You can comment or add your feature request directly on github.",source:"@site/docs/02. Roadmap.md",sourceDirName:".",slug:"/Roadmap",permalink:"/docs/Roadmap",draft:!1,unlisted:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/02. Roadmap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Architecture",permalink:"/docs/Architecture"},next:{title:"Explore",permalink:"/docs/Explore/"}},u={},l=[{value:"Scheduled items",id:"scheduled-items",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"roadmap",children:"Roadmap"})}),"\n",(0,n.jsxs)(t.p,{children:["You can comment or add your feature request directly on ",(0,n.jsx)(t.a,{href:"https://github.com/sf-explorer/documentation/issues",children:"github"}),".\nIf you find an issue you can also log it there."]}),"\n",(0,n.jsx)(t.h2,{id:"scheduled-items",children:"Scheduled items"}),"\n",(0,n.jsx)(a,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},24447:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),o=r(74848);const s=e=>{let[t,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch("https://api.github.com/repos/sf-explorer/documentation/issues?q=is%3Aopen+is%3Aissue").then((e=>{if(e.ok)return e.json()})).then((e=>{e&&Array.isArray(e)&&r(e)})).catch((e=>console.error(e)))}),[]),(0,o.jsx)("ul",{children:t?.filter((e=>"MEMBER"===e.author_association)).map((e=>(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:e.html_url,target:"_blank",children:e.title})," ",e.reactions?.total_count?(0,o.jsxs)(o.Fragment,{children:["(",e.reactions?.total_count," reaction(s))"]}):(0,o.jsx)(o.Fragment,{})]})))})}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);