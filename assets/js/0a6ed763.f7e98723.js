"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[4685],{65276:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(37253);const o=function(e){return a.createElement(r.yB,e)}},14197:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(91262);const o=e=>a.createElement(r.Z,{fallback:a.createElement("div",null,"Loading...")},(()=>{const t=n(65276).Z;return a.createElement(t,e)}));var i=n(90558),l=n(74981);n(90252),n(24203),n(89899);const s=async e=>{const t=await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e),credentials:"same-origin"});return t.json().catch((()=>t.text()))};function c(e){let{}=e;const[t,n]=(0,a.useState)("select Id, Name, (select Name from Opportunities) \n    from Account \n        where Name like ':criteria' \n        order by CreationDate\n        limit 3"),[r,c]=(0,a.useState)('{\n    "criteria":"String=\\"%\\""\n}'),[u,m]=(0,a.useState)(void 0);return(0,a.useEffect)((()=>{try{const e=JSON.parse(r);m((0,i.Z)(t,e))}catch(e){console.error(e),m(e.message||JSON.stringify(e))}}),[t,r]),a.createElement(a.Fragment,null,a.createElement("h4",null,"Variables"),a.createElement(l.ZP,{mode:"json",theme:"github",value:r,width:"100%",onChange:e=>c(e),height:"70px",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,useWorker:!1}}),a.createElement("h4",null,"Query"),a.createElement(l.ZP,{mode:"sql",theme:"github",value:t,width:"100%",onChange:e=>n(e),height:"100px",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,useWorker:!1}}),a.createElement("div",{style:{height:"700px"}},a.createElement(o,{query:u,fetcher:s,variables:r})))}}}]);