/*! For license information please see 0e384e19.f5ced9f8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[671],{1025:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,u){function o(e){try{l(r.next(e))}catch(t){u(t)}}function i(e){try{l(r.throw(e))}catch(t){u(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,a,u,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(i){u=[6,i],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(n(7294));t.default=function(e){var t=this,n=e.id,r=e.points,a=e.description,u=e.choices,c=e.response,s=e.colSize,d=e.onSubmitted,f=e.userChoice,p=l.useState(null),m=p[0],v=p[1],b=l.useState(null),h=b[0],y=b[1],g=l.useState(null),w=g[0],E=g[1],O=l.useState(void 0),z=O[0],k=O[1],_=function(e){return o(t,void 0,void 0,(function(){return i(this,(function(t){return d(u?{answer:e}:{answer:z}),[2]}))}))};return null==f||null==f?l.default.createElement("div",{className:"card margin-bottom--xs"},l.default.createElement("div",{className:"card__header"},l.default.createElement("div",{style:{display:"flex"}},l.default.createElement("div",{style:{flexGrow:1}},a),r&&l.default.createElement("div",null,l.default.createElement("span",{className:"badge badge--secondary"},r," pts"),l.default.createElement("div",null)))),l.default.createElement("div",{className:"card__body"},l.default.createElement("div",{className:"row"},u&&u.map((function(e,r){var a=e.label||e;return l.default.createElement("div",{key:r,onClick:function(e){return o(t,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return e.preventDefault(),v(r),y(null),null!=c&&m!=c?[3,2]:[4,_(r)];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},className:"col col--"+(s||3),style:{color:r==m?"var(--ifm-color-primary-lighter)":"",cursor:"pointer"}},l.default.createElement("input",{type:"radio",checked:r==m,readOnly:!0,id:n+"_"+r}),l.default.createElement("label",{htmlFor:n+"_"+r},a))})),!u&&l.default.createElement("textarea",{placeholder:"Add your response here - markdown is supported",value:z,onChange:function(e){return k(e.target.value)},rows:3,className:"margin-left--md margin-right--md",style:{flexGrow:1,width:"100%",resize:"vertical"}})),h&&l.default.createElement("div",{className:"alert alert--warning margin-top--xs",role:"alert"},l.default.createElement("button",{"aria-label":"Close",className:"clean-btn close",type:"button",onClick:function(){return y(null)}},l.default.createElement("span",{"aria-hidden":"true"},"\xd7")),h),w&&l.default.createElement("div",{className:"alert alert--success margin-top--xs",role:"alert"},l.default.createElement("button",{"aria-label":"Close",className:"clean-btn close",type:"button",onClick:function(){return E(null)}},l.default.createElement("span",{"aria-hidden":"true"},"\xd7")),w)),(null!=m||z)&&l.default.createElement("div",{className:"card__footer"},l.default.createElement("button",{className:"button button--secondary",onClick:function(){return o(t,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return null!=c&&m!=c?[3,2]:[4,_()];case 1:return e.sent(),[3,3];case 2:y("Wrong value, try again"),e.label=3;case 3:return v(null),[2]}}))}))}},"Submit"))):l.default.createElement(l.default.Fragment,null,a,l.default.createElement("div",{className:"alert alert--secondary",role:"alert"},l.default.createElement("button",{"aria-label":"Close",className:"clean-btn close",type:"button",title:"Remove answer",onClick:function(){return o(t,void 0,void 0,(function(){return i(this,(function(e){return v(null),[2,d({answer:null})]}))}))}},l.default.createElement("span",{"aria-hidden":"true"},"\xd7")),u&&"number"==typeof f&&u[f]?"=> "+u[f]+" \u2714\ufe0f":JSON.stringify(f)))}},646:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Quizz=void 0;var a=r(n(1025));t.Quizz=a.default},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||u;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2802:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7462),a=n(7294),u=n(646),o=n(5321);var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=function(e){return{loading:null==e,value:e}},c=function(e){var t=e?e():void 0,n=(0,a.useReducer)((function(e,t){switch(t.type){case"error":return i(i({},e),{error:t.error,loading:!1,value:void 0});case"reset":return l(t.defaultValue);case"value":return i(i({},e),{error:void 0,loading:!1,value:t.value});default:return e}}),l(t)),r=n[0],u=n[1],o=function(){var t=e?e():void 0;u({type:"reset",defaultValue:t})},c=function(e){u({type:"error",error:e})},s=function(e){u({type:"value",value:e})};return(0,a.useMemo)((function(){return{error:r.error,loading:r.loading,reset:o,setError:c,setValue:s,value:r.value}}),[r.error,r.loading,o,c,s,r.value])},s=function(e,t,n){var r=(0,a.useRef)(e);return(0,a.useEffect)((function(){t(e,r.current)||(r.current=e,n&&n())})),r},d=function(e,t){var n=!e&&!t,r=!!e&&!!t&&(0,o.Eo)(e,t);return n||r},f=function(e,t){return s(e,d,t)},p=function(e,t){var n=null==t?void 0:t.snapshotOptions,r=function(e,t){var n=c(),r=n.error,u=n.loading,i=n.reset,l=n.setError,s=n.setValue,d=n.value,p=f(e,i);(0,a.useEffect)((function(){if(p.current){var e=(null==t?void 0:t.snapshotListenOptions)?(0,o.cf)(p.current,t.snapshotListenOptions,s,l):(0,o.cf)(p.current,s,l);return function(){e()}}s(void 0)}),[p.current]);var m=[d,u,r];return(0,a.useMemo)((function(){return m}),m)}(e,t),u=r[0],i=r[1],l=r[2],s=[(0,a.useMemo)((function(){return null==u?void 0:u.data(n)}),[u,n]),i,l,u];return(0,a.useMemo)((function(){return s}),s)},m=n(3349),v=n(1422),b=n(3633);var h=function(e){var t=e.id,n=(0,o.ad)(),i=(0,b.v0)(),l=(0,v.ts)(),c=(0,m.F_)(i)[0],s=p((0,o.JU)(n,"users",(null==c?void 0:c.uid)||"anonymous"))[0],d=null!=s&&s.answers[t]?null==s?void 0:s.answers[t].answer:void 0;return c?a.createElement(u.Quizz,(0,r.Z)({},e,{userChoice:d,onSubmitted:function(e){return function(e){l.setSubjectStatus(t,e)}(e)}})):a.createElement(a.Fragment,null,"Log in to answer quizz")}},8374:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return p}});var r=n(7462),a=n(3366),u=n(7294),o=n(3905),i=n(1262),l=function(e){return u.createElement(i.Z,{fallback:u.createElement("div",null,"Loading...")},(function(){var t=n(2802).Z;return u.createElement(t,e)}))},c=["components"],s={sidebar_position:1},d="Tutorial Intro",f={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docusaurus-lms/docs/intro",editUrl:"https://github.com/learn-map/docusaurus-lms/tree/master/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/docusaurus-lms/docs/tutorial-basics/create-a-page"}},p=[{value:"Add an open quizz",id:"add-an-open-quizz",children:[],level:2},{value:"Add a multi choice quizz",id:"add-a-multi-choice-quizz",children:[],level:2}],m={toc:p};function v(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,o.kt)("p",null,"Import the quizz component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import Quizz from '@site/src/components/firebase/Quizz';\n")),(0,o.kt)("h2",{id:"add-an-open-quizz"},"Add an open quizz"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Quizz id="managerEmail"\n  points={50}\n  description="What is your manager email?"\n/>\n')),(0,o.kt)(l,{id:"managerEmail",points:50,description:"What is your manager email?",mdxType:"Quizz"}),(0,o.kt)("h2",{id:"add-a-multi-choice-quizz"},"Add a multi choice quizz"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Quizz id="location"\n  points={50}\n  choices={["USA", "France", "Poland", "India", "Other"]}\n  description="Where are you currently located?"\n/>\n')))}v.isMDXComponent=!0}}]);