/*! For license information please see e4e865d5.cd337bdc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[7769],{10656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(74848),c=n(28453),o=n(13852);const r={title:"Use cases",description:"SF Explorer offers a native integration with chatGPT",keywords:["openAI","chatGPT"]},s="Implemented use cases",l={id:"OpenAI/useCases",title:"Use cases",description:"SF Explorer offers a native integration with chatGPT",source:"@site/docs/4. OpenAI/useCases.md",sourceDirName:"4. OpenAI",slug:"/OpenAI/useCases",permalink:"/docs/OpenAI/useCases",draft:!1,unlisted:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/4. OpenAI/useCases.md",tags:[],version:"current",frontMatter:{title:"Use cases",description:"SF Explorer offers a native integration with chatGPT",keywords:["openAI","chatGPT"]},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/docs/OpenAI/installation"},next:{title:"Security",permalink:"/docs/Security/"}},i={},u=[];function p(e){const t={code:"code",h1:"h1",li:"li",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"implemented-use-cases",children:"Implemented use cases"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Generate a query using natural language: ",(0,a.jsx)(t.code,{children:"Give me a salesforce SOQL query to find users with their profiles who logged today"})]}),"\n",(0,a.jsx)(t.li,{children:"Find a product description"}),"\n",(0,a.jsxs)(t.li,{children:["Explain an ",(0,a.jsx)(t.code,{children:"apex"})," class"]}),"\n"]}),"\n",(0,a.jsx)(o.A,{id:"RXUgbL10K1g",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"3min",poster:"maxresdefault",webp:!0})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},13852:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},c.apply(this,arguments)};var o=a.forwardRef((function(e,t){var n=a.useState(!1),o=n[0],r=n[1],s=a.useState(!1),l=s[0],i=s[1],u=encodeURIComponent(e.id),p="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,m=e.poster||"hqdefault",h="&".concat(e.params)||0,f=e.muted?"&mute=1":"",g=e.announce||"Watch",y=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",b=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(w,"/").concat(p,"/").concat(m,".").concat(y):"https://i.ytimg.com/".concat(w,"/").concat(u,"/").concat(m,".").concat(y)),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var x=e.playlist?"".concat(v,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(u).concat(h):"".concat(v,"/embed/").concat(u,"?autoplay=1&state=1").concat(f).concat(h),k=e.activatedClass||"lyt-activated",C=e.adNetwork||!1,E=e.aspectHeight||9,I=e.aspectWidth||16,j=e.iframeClass||"",A=e.playerClass||"lty-playbtn",O=e.wrapperClass||"yt-lite",F=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload",P=e.containerElement||"article";return a.useEffect((function(){l&&F()}),[l]),a.createElement(a.Fragment,null,a.createElement("link",{rel:S,href:b,as:"image"}),a.createElement(a.Fragment,null,o&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:v}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),C&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(P,{onPointerOver:function(){o||r(!0)},onClick:function(){l||i(!0)},className:"".concat(O," ").concat(l?k:""),"data-title":d,style:c({backgroundImage:"url(".concat(b,")")},{"--aspect-ratio":"".concat(E/I*100,"%")})},a.createElement("button",{type:"button",className:A,"aria-label":"".concat(g," ").concat(d)}),l&&a.createElement("iframe",{ref:t,className:j,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:x})))}))},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(96540);const c={},o=a.createContext(c);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);