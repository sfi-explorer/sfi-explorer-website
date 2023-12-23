/*! For license information please see 234ccbbe.0fd05a92.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[9412],{99290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=r(87462),o=(r(67294),r(3905)),l=r(40640);const n={description:"Browse your org data and datamodel with SOQL",keywords:["salesforce","search"]},i="SOQL",s={unversionedId:"Query/SOQL",id:"Query/SOQL",title:"SOQL",description:"Browse your org data and datamodel with SOQL",source:"@site/docs/2. Query/1. SOQL.md",sourceDirName:"2. Query",slug:"/Query/SOQL",permalink:"/docs/Query/SOQL",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/2. Query/1. SOQL.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Browse your org data and datamodel with SOQL",keywords:["salesforce","search"]},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/docs/Query/"},next:{title:"Apex",permalink:"/docs/Query/Apex"}},c={},u=[{value:"Features",id:"features",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"soql"},"SOQL"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"SF Explorer allows you to browse your org model with SOQL queries with the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ability to ",(0,o.kt)("strong",{parentName:"li"},"chain queries")),(0,o.kt)("li",{parentName:"ul"},"autocompletion "),(0,o.kt)("li",{parentName:"ul"},"sorting"),(0,o.kt)("li",{parentName:"ul"},"pivoting"),(0,o.kt)("li",{parentName:"ul"},"ability to run accross ",(0,o.kt)("strong",{parentName:"li"},"multiple orgs")),(0,o.kt)("li",{parentName:"ul"},"compare results")),(0,o.kt)("p",null,"Here is a quick demo:"),(0,o.kt)(l.Z,{id:"Yz6EHxIq35s",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"View and compare flexipages",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"}))}m.isMDXComponent=!0},40640:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function l(e){var t=a.useState(!1),r=t[0],l=t[1],n=a.useState(!1),i=n[0],s=n[1],c=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,m=e.poster||"hqdefault",d="&"+e.params||0,y=e.muted?"&mute=1":"",h=e.announce||"Watch",f=e.webp?"webp":"jpg",k=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+k+"/"+u+"/"+m+"."+f:"https://i.ytimg.com/"+k+"/"+c+"/"+m+"."+f),g=e.noCookie;g=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var b=e.playlist?g+"/embed/videoseries?autoplay=1"+y+"&list="+c+d:g+"/embed/"+c+"?autoplay=1&state=1"+y+d,Q=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,S=e.aspectHeight||9,O=e.aspectWidth||16,E=e.iframeClass||"",L=e.playerClass||"lty-playbtn",C=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},x=e.rel?"prefetch":"preload";return a.useEffect((function(){i&&N()}),[i]),a.createElement(a.Fragment,null,a.createElement("link",{rel:x,href:w,as:"image"}),a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:g}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){r||l(!0)},onClick:function(){i||s(!0)},className:C+" "+(i?Q:""),"data-title":p,style:o({backgroundImage:"url("+w+")"},{"--aspect-ratio":S/O*100+"%"})},a.createElement("button",{type:"button",className:L,"aria-label":h+" "+p}),i&&a.createElement("iframe",{className:E,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:b})))}}}]);