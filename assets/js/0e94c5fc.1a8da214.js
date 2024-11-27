/*! For license information please see 0e94c5fc.1a8da214.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[9576],{65638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(74848),c=n(28453),a=n(13852);const r={description:"OpenAPI Generation",keywords:["flexipage","salesforce","compare"]},i="OpenAPI Generation",s={id:"Develop/OpenAPI/index",title:"OpenAPI Generation",description:"OpenAPI Generation",source:"@site/docs/4. Develop/OpenAPI/index.md",sourceDirName:"4. Develop/OpenAPI",slug:"/Develop/OpenAPI/",permalink:"/docs/Develop/OpenAPI/",draft:!1,unlisted:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/4. Develop/OpenAPI/index.md",tags:[],version:"current",frontMatter:{description:"OpenAPI Generation",keywords:["flexipage","salesforce","compare"]},sidebar:"defaultSidebar",previous:{title:"Flexipage Explorer",permalink:"/docs/Develop/Flexipage/"},next:{title:"Custom Metadata",permalink:"/docs/Develop/customMedata"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"RestApex",id:"restapex",level:2},{value:"Specific objects",id:"specific-objects",level:2},{value:"Demonstration",id:"demonstration",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"openapi-generation",children:"OpenAPI Generation"})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://learn.openapis.org/introduction.html",children:"OpenAPI Specification (OAS)"})," allows the description of a remote API accessible through HTTP or HTTP-like protocols. This description, which may be stored as one or more documents (such as local files or HTTP-accessible network resources), is called an OpenAPI Description (OAD)"]}),"\n",(0,o.jsx)(t.p,{children:"SF Explorer Generate your org specific OpenAPI endpoints:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Generate specific object endpoints"}),"\n",(0,o.jsx)(t.li,{children:"Add custom apex"}),"\n",(0,o.jsx)(t.li,{children:"Add custom and standard actions exposed (invocables)"}),"\n",(0,o.jsx)(t.li,{children:"Try out mode available => run against your org"}),"\n",(0,o.jsx)(t.li,{children:"Download spec"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"restapex",children:"RestApex"}),"\n",(0,o.jsx)(t.p,{children:"Using the following Apex:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"/**\n  * APIs to retrieve or update clients\n  */\n@RestResource(urlMapping='/client/*')\nglobal with sharing class SFIDirectDatapackAPI {\n    \n    @HttpPost\n    global static void UpdateClient(string payload, string dpStep, string status)\n    {\n    }\n    \n    @HttpGet\n    global static void GetClient(){}\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Will result into the following spec:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"RestApex",src:n(92287).A+"",width:"2732",height:"1778"})}),"\n",(0,o.jsx)(t.h2,{id:"specific-objects",children:"Specific objects"}),"\n",(0,o.jsx)(t.p,{children:"Supported features:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Accurate examples generated from your org data"}),"\n",(0,o.jsx)(t.li,{children:"Record types supported"}),"\n",(0,o.jsx)(t.li,{children:"Upsert endpoints for all external ids"}),"\n",(0,o.jsx)(t.li,{children:"Example provided with the composite API"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Objects",src:n(86633).A+"",width:"2686",height:"1906"})}),"\n",(0,o.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,o.jsx)(a.A,{id:"OwdJAhcXNyo",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"Demo OpenAPI",poster:"maxresdefault",webp:!0})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},13852:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(96540),c=function(){return c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},c.apply(this,arguments)};var a=o.forwardRef((function(e,t){var n=o.useState(!1),a=n[0],r=n[1],i=o.useState(!1),s=i[0],l=i[1],p=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,h=e.poster||"hqdefault",m="&".concat(e.params)||0,f=e.muted?"&mute=1":"",x=e.announce||"Watch",g=e.webp?"webp":"jpg",j=e.webp?"vi_webp":"vi",v=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(j,"/").concat(d,"/").concat(h,".").concat(g):"https://i.ytimg.com/".concat(j,"/").concat(p,"/").concat(h,".").concat(g)),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var w=e.playlist?"".concat(b,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(p).concat(m):"".concat(b,"/embed/").concat(p,"?autoplay=1&state=1").concat(f).concat(m),y=e.activatedClass||"lyt-activated",A=e.adNetwork||!1,I=e.aspectHeight||9,P=e.aspectWidth||16,k=e.iframeClass||"",O=e.playerClass||"lty-playbtn",C=e.wrapperClass||"yt-lite",E=e.onIframeAdded||function(){},D=e.rel?"prefetch":"preload",R=e.containerElement||"article";return o.useEffect((function(){s&&E()}),[s]),o.createElement(o.Fragment,null,o.createElement("link",{rel:D,href:v,as:"image"}),o.createElement(o.Fragment,null,a&&o.createElement(o.Fragment,null,o.createElement("link",{rel:"preconnect",href:b}),o.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),A&&o.createElement(o.Fragment,null,o.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),o.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),o.createElement(R,{onPointerOver:function(){a||r(!0)},onClick:function(){s||l(!0)},className:"".concat(C," ").concat(s?y:""),"data-title":u,style:c({backgroundImage:"url(".concat(v,")")},{"--aspect-ratio":"".concat(I/P*100,"%")})},o.createElement("button",{type:"button",className:O,"aria-label":"".concat(x," ").concat(u)}),s&&o.createElement("iframe",{ref:t,className:k,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:w})))}))},86633:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/objects-51fc80ad20d6967d7d5ce23486a3c226.png"},92287:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/restapex-4ac9c7d8fc17b7bc665820f77d917535.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const c={},a=o.createContext(c);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);