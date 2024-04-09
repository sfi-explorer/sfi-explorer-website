/*! For license information please see a2edc178.ea94a8a1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[2635,4685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65276:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(37253);const o=function(e){return a.createElement(n.yB,e)}},14197:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294),n=r(91262);const o=e=>a.createElement(n.Z,{fallback:a.createElement("div",null,"Loading...")},(()=>{const t=r(65276).Z;return a.createElement(t,e)}));var l=r(90558),i=r(74981);r(90252),r(24203),r(89899);const p=async e=>{const t=await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e),credentials:"same-origin"});return t.json().catch((()=>t.text()))};function s(e){let{}=e;const[t,r]=(0,a.useState)("SELECT Id, Name, (select Name from Opportunities) \n    from Account \n        where Name like :criteria \n        order by CreationDate\n        limit 3"),[n,s]=(0,a.useState)('{\n    "criteria":"String!=\\"%\\""\n}'),[c,u]=(0,a.useState)(void 0);return(0,a.useEffect)((()=>{try{const e=JSON.parse(n);u((0,l.Z)(t,e))}catch(e){console.error(e),u(e.message||JSON.stringify(e))}}),[t,n]),a.createElement(a.Fragment,null,a.createElement("h4",null,"Variables"),a.createElement("p",null,"TLDR: Refer the variables with traditional SOQL Apex Binding ie ",a.createElement("code",null,":varname")),a.createElement(i.ZP,{mode:"json",theme:"github",value:n,width:"100%",onChange:e=>s(e),height:"70px",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,useWorker:!1}}),a.createElement("h4",null,"Query"),a.createElement(i.ZP,{mode:"sql",theme:"github",value:t,width:"100%",onChange:e=>r(e),height:"100px",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,useWorker:!1}}),a.createElement("div",{style:{height:"700px"}},a.createElement(o,{query:c,fetcher:p,variables:n})))}},95424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(40640),l=r(14197);const i={description:"Explore graphQL winter'24 API with builtin examples",title:"GraphQL",hide_table_of_contents:!0,keywords:["GraphQL","Documentation","Salesforce"]},p="GraphQL",s={unversionedId:"Query/GraphQL/index",id:"Query/GraphQL/index",title:"GraphQL",description:"Explore graphQL winter'24 API with builtin examples",source:"@site/docs/2. Query/GraphQL/index.md",sourceDirName:"2. Query/GraphQL",slug:"/Query/GraphQL/",permalink:"/docs/Query/GraphQL/",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/2. Query/GraphQL/index.md",tags:[],version:"current",frontMatter:{description:"Explore graphQL winter'24 API with builtin examples",title:"GraphQL",hide_table_of_contents:!0,keywords:["GraphQL","Documentation","Salesforce"]},sidebar:"defaultSidebar",previous:{title:"Record operation",permalink:"/docs/Query/Record/"},next:{title:"Insurance Products",permalink:"/docs/Industries/Insurance Product"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Usage with SF Explorer",id:"usage-with-sf-explorer",level:2},{value:"SOQL transition tool",id:"soql-transition-tool",level:2},{value:"Playground",id:"playground",level:3},{value:"Provided examples",id:"provided-examples",level:2}],m={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"graphql"},"GraphQL"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"What is GraphQL:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Specification for API Server + Query Language - Facebook 2015"),(0,n.kt)("li",{parentName:"ul"},"Single endpoint for all the resources, that can be aggregated"),(0,n.kt)("li",{parentName:"ul"},"Requests only the necessary data"),(0,n.kt)("li",{parentName:"ul"},"Schema-driven, enabling introspection - metadata friendly"),(0,n.kt)("li",{parentName:"ul"},"Widely adopted through a fast growing community")),(0,n.kt)("p",null,"Useful resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL Foundation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://landscape.graphql.org/"},"Landscape")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.salesforce.com/docs/platform/graphql/overview"},"Salesforce doc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nicolas-despres/soql-to-graphql/blob/main/Readme.md"},"soql-to-graphql")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.howtographql.com/"},"Full stack Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trailhead.salesforce.com/fr/trailblazer-community/groups/0F94S000000kRExSAM"},"SF Community group")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://2022.stateofgraphql.com/"},"annual survey results"))),(0,n.kt)("h2",{id:"usage-with-sf-explorer"},"Usage with SF Explorer"),(0,n.kt)("p",null,"GraphQL offers very interesting use cases for salesforce. A number of tools are available in the community and ",(0,n.kt)("strong",{parentName:"p"},"SF Explorer")," ships with a built in version of ",(0,n.kt)("strong",{parentName:"p"},"GraphiQL")," with the following advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No need to authenticate")," - as easy as it should be"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SOQL")," transition tool"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sample queries")," to get you started  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LWC")," Generation with the graphql ",(0,n.kt)("inlineCode",{parentName:"li"},"wire")," adapter")),(0,n.kt)("p",null,"To give it a try navigate to ",(0,n.kt)("strong",{parentName:"p"},"Code")," and then select ",(0,n.kt)("strong",{parentName:"p"},"GraphQL"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"example",src:r(52439).Z,width:"2714",height:"1306"})," "),(0,n.kt)("h2",{id:"soql-transition-tool"},"SOQL transition tool"),(0,n.kt)("p",null,"If you are not familiar with graphQL but you are a ",(0,n.kt)("strong",{parentName:"p"},"SOQL ninja")," \ud83e\udd77\ud83c\udfff, you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nicolas-despres/soql-to-graphql/blob/main/Readme.md"},"SOQL transition tool"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Write your query with ",(0,n.kt)("strong",{parentName:"li"},"auto completion")," and the syntax you know"),(0,n.kt)("li",{parentName:"ul"},"Generate the graphQL equivalent")),(0,n.kt)("h3",{id:"playground"},"Playground"),(0,n.kt)(l.default,{mdxType:"GraphQL"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Beware that graphQL is case sensitive compared to SOQL")),(0,n.kt)("h2",{id:"provided-examples"},"Provided examples"),(0,n.kt)("p",null,"If you open the history button you will find a number of queries to help you get started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search Accounts and their opportunities"),(0,n.kt)("li",{parentName:"ul"},"QueryAccountsWithCriteria"),(0,n.kt)("li",{parentName:"ul"},"QueryCasesWithCriteria"),(0,n.kt)("li",{parentName:"ul"},"Object info for Account and Case")),(0,n.kt)(o.Z,{id:"8kOW8amHmPI",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"Security",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"}))}d.isMDXComponent=!0},40640:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=function(){return n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};function o(e){var t=a.useState(!1),r=t[0],o=t[1],l=a.useState(!1),i=l[0],p=l[1],s=encodeURIComponent(e.id),c="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,m=e.poster||"hqdefault",d="&"+e.params||0,h=e.muted?"&mute=1":"",f=e.announce||"Watch",g=e.webp?"webp":"jpg",y=e.webp?"vi_webp":"vi",k=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+y+"/"+c+"/"+m+"."+g:"https://i.ytimg.com/"+y+"/"+s+"/"+m+"."+g),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?b+"/embed/videoseries?autoplay=1"+h+"&list="+s+d:b+"/embed/"+s+"?autoplay=1&state=1"+h+d,w=e.activatedClass||"lyt-activated",N=e.adNetwork||!1,E=e.aspectHeight||9,O=e.aspectWidth||16,Q=e.iframeClass||"",S=e.playerClass||"lty-playbtn",L=e.wrapperClass||"yt-lite",x=e.onIframeAdded||function(){},P=e.rel?"prefetch":"preload";return a.useEffect((function(){i&&x()}),[i]),a.createElement(a.Fragment,null,a.createElement("link",{rel:P,href:k,as:"image"}),a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:b}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),N&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){i||p(!0)},className:L+" "+(i?w:""),"data-title":u,style:n({backgroundImage:"url("+k+")"},{"--aspect-ratio":E/O*100+"%"})},a.createElement("button",{type:"button",className:S,"aria-label":f+" "+u}),i&&a.createElement("iframe",{className:Q,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}},52439:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/soqlTransition-1f6e03bee641e4a8f84f307098d831a7.png"}}]);