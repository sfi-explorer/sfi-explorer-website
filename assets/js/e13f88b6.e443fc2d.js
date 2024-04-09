"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[6177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(f,o(o({ref:t},l),{},{components:a})):r.createElement(f,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"DataRaptor",description:"Find dependencies and compare DataRaptor accross multiple orgs"},o=void 0,s={unversionedId:"Industries/DataRaptor/index",id:"Industries/DataRaptor/index",title:"DataRaptor",description:"Find dependencies and compare DataRaptor accross multiple orgs",source:"@site/docs/4. Industries/DataRaptor/index.md",sourceDirName:"4. Industries/DataRaptor",slug:"/Industries/DataRaptor/",permalink:"/docs/Industries/DataRaptor/",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/4. Industries/DataRaptor/index.md",tags:[],version:"current",frontMatter:{title:"DataRaptor",description:"Find dependencies and compare DataRaptor accross multiple orgs"},sidebar:"defaultSidebar",previous:{title:"Flexcard",permalink:"/docs/Industries/Flexcard"},next:{title:"FSC",permalink:"/docs/Industries/FSC"}},d={},c=[{value:"Accesssing DataRaptor List",id:"accesssing-dataraptor-list",level:2},{value:"Finding Dependencies",id:"finding-dependencies",level:2},{value:"Finding where my Dataraptor is used",id:"finding-where-my-dataraptor-is-used",level:3},{value:"Finding what Dataraptor access/modify a given field",id:"finding-what-dataraptor-accessmodify-a-given-field",level:3},{value:"Comparing DataRaptors",id:"comparing-dataraptors",level:2},{value:"Testing DataRaptors",id:"testing-dataraptors",level:2}],l={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"accesssing-dataraptor-list"},"Accesssing DataRaptor List"),(0,n.kt)("p",null,"The Dataraptors can be accessed from:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Dataraptors")," menu under Industries entry point"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Object Manager"),": this natively lets you explore the DataRaptors associated with a given object."),(0,n.kt)("li",{parentName:"ul"},"You can also use the ",(0,n.kt)("strong",{parentName:"li"},"Search")," option and write your own query again the ",(0,n.kt)("inlineCode",{parentName:"li"},"OmnidataTransform")," object")),(0,n.kt)("h2",{id:"finding-dependencies"},"Finding Dependencies"),(0,n.kt)("h3",{id:"finding-where-my-dataraptor-is-used"},"Finding where my Dataraptor is used"),(0,n.kt)("p",null,"To find the dependencies you can refer to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Used by")," column. It will brind all Omniscripts/Integration Procedures/flexcards that reference your DataRaptor.\n",(0,n.kt)("img",{alt:"dataraptor",src:a(19380).Z,width:"3524",height:"1754"}),"\nIf you click on the number you will be able to navigate to the given dependency:\n",(0,n.kt)("img",{alt:"dataraptor",src:a(11035).Z,width:"1836",height:"1004"})),(0,n.kt)("h3",{id:"finding-what-dataraptor-accessmodify-a-given-field"},"Finding what Dataraptor access/modify a given field"),(0,n.kt)("p",null,"From the Object Manager if you click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Calculate usage for all fields")," you will be able to find dataraptor dependencies at field level.\n",(0,n.kt)("img",{alt:"dataraptor",src:a(18058).Z,width:"3392",height:"1658"})),(0,n.kt)("h2",{id:"comparing-dataraptors"},"Comparing DataRaptors"),(0,n.kt)("p",null,"Select multiple Dataraptors and click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Compare Selected Items")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dataraptor",src:a(55610).Z,width:"3524",height:"1166"})),(0,n.kt)("p",null,"You can leave comments on each row that will be saved in your browser."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dataraptor",src:a(44089).Z,width:"3524",height:"1754"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Any record can be compared this way")),(0,n.kt)("h2",{id:"testing-dataraptors"},"Testing DataRaptors"),(0,n.kt)("p",null,"You can test your Dataraptors from here as well (only on Extract for now)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dataraptor",src:a(40257).Z,width:"3242",height:"1342"})))}p.isMDXComponent=!0},55610:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/compare1-37f69e966658ed223e1e99871c385502.png"},44089:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/compare2-764d6adafca46f59f8e01cdb93ff9e64.png"},18058:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fieldUsage-568b281b51095b5f1ef932f526f60790.png"},40257:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/testing-48b85f30f27b5716da12358ea699d741.png"},19380:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/whereUsed1-d2a827428cf22170b60d9991f531b30b.png"},11035:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/whereUsed2-4149a513b9e6becc6052108499acbcdc.png"}}]);