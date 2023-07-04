/*! For license information please see 4ff21e43.0f9bea52.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[3528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905)),a=r(640);const l={description:"Browse your org data and datamodel",keywords:["salesforce","search"]},i="Query Builder",c={unversionedId:"Query/index",id:"Query/index",title:"Query Builder",description:"Browse your org data and datamodel",source:"@site/docs/Query/index.md",sourceDirName:"Query",slug:"/Query/",permalink:"/documentation/docs/Query/",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/Query/index.md",tags:[],version:"current",frontMatter:{description:"Browse your org data and datamodel",keywords:["salesforce","search"]},sidebar:"tutorialSidebar",previous:{title:"Flexipage Explorer",permalink:"/documentation/docs/Flexipage/"}},u={},s=[{value:"Introduction",id:"introduction",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query-builder"},"Query Builder"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"SF Explorer allows you to browse your org model with queries with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"autocompletion "),(0,o.kt)("li",{parentName:"ul"},"shared templates"),(0,o.kt)("li",{parentName:"ul"},"ability to chain queries"),(0,o.kt)("li",{parentName:"ul"},"ability to run accross multiple orgs")),(0,o.kt)("p",null,"The query results can be compared"),(0,o.kt)(a.Z,{id:"Yz6EHxIq35s",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"View and compare flexipages",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"}))}d.isMDXComponent=!0},640:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e){var t=n.useState(!1),r=t[0],a=t[1],l=n.useState(!1),i=l[0],c=l[1],u=encodeURIComponent(e.id),s="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,d=e.poster||"hqdefault",m="&"+e.params||0,y=e.muted?"&mute=1":"",f=e.announce||"Watch",b=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",h=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+g+"/"+s+"/"+d+"."+b:"https://i.ytimg.com/"+g+"/"+u+"/"+d+"."+b),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?w+"/embed/videoseries?autoplay=1"+y+"&list="+u+m:w+"/embed/"+u+"?autoplay=1&state=1"+y+m,k=e.activatedClass||"lyt-activated",O=e.adNetwork||!1,E=e.aspectHeight||9,x=e.aspectWidth||16,j=e.iframeClass||"",C=e.playerClass||"lty-playbtn",P=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},T=e.rel?"prefetch":"preload";return n.useEffect((function(){i&&N()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:T,href:h,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:w}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),O&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||a(!0)},onClick:function(){i||c(!0)},className:P+" "+(i?k:""),"data-title":p,style:o({backgroundImage:"url("+h+")"},{"--aspect-ratio":E/x*100+"%"})},n.createElement("button",{type:"button",className:C,"aria-label":f+" "+p}),i&&n.createElement("iframe",{className:j,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}}}]);