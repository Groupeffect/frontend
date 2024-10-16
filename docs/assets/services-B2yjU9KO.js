import{_ as v,H as n,I as o,D as e,K as t,a3 as l,a4 as m,a2 as f,F as _,L as k,aa as g}from"./index-DdX4zqw7.js";import{a as S,b as I,c as B,V as D}from"./VCard-BBJo4oHS.js";import{V as b,a as d,_ as w,b as W}from"./PageBanner-DPBLzVFl.js";import{V as L,a as h}from"./VList-0o34aX90.js";import{V as $}from"./VImg-BMaX0a9O.js";import{_ as y}from"./CodingIcon-CgYk8hDU.js";import"./position-Bvc5KH5V.js";const N={name:"CardBasic",props:["item"]},T={key:0},M={key:1};function j(s,r,a,C,P,p){return n(),o("div",null,[e(D,{elevation:"0",style:{"background-color":"transparent"},class:"center maxWidth"},{default:t(()=>[e(S,null,{default:t(()=>[l(m(a.item.title),1)]),_:1}),e(I,null,{default:t(()=>[l(m(a.item.description),1)]),_:1}),a.item.links?(n(),f(B,{key:0},{default:t(()=>[e(b,null,{default:t(()=>[e(d,null,{default:t(()=>[e(L,{style:{"background-color":"transparent"}},{default:t(()=>[(n(!0),o(_,null,k(a.item.links,(i,c)=>(n(),o("div",{key:c},[i&&i.external?(n(),o("div",T,[e(h,{"prepend-icon":i.icon,title:i.title,href:i.link,target:"_blank"},null,8,["prepend-icon","title","href"])])):(n(),o("div",M,[e(h,{onClick:u=>s.$router.push(i.url),"prepend-icon":i.icon,title:i.title},null,8,["onClick","prepend-icon","title"])]))]))),128))]),_:1})]),_:1}),a.item&&a.item.picture?(n(),f(d,{key:0,cols:s.$vuetify.display.mobile&&12,align:"center"},{default:t(()=>[e($,{src:s.$getPicture(a.item.picture),"max-width":s.$vuetify.display.mobile?250:400},null,8,["src","max-width"])]),_:1},8,["cols"])):g("",!0)]),_:1})]),_:1})):g("",!0)]),_:1})])}const x=v(N,[["render",j]]),F=[{id:"landingpage",filter:"text",category:"static",component:"index",content:[{title:"Programming",description:"Code as a service",links:[{title:"",link:"",icon:""}]}]},{id:"web",filter:"text",category:"static",component:"services",content:[{title:"Progressive Web Apps",picture:"pwa",description:"A progressive web app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app. Like a website, a PWA can run on multiple platforms and devices from a single codebase. Like a platform-specific app, it can be installed on the device, can operate while offline and in the background, and can integrate with the device and with other installed apps.",links:[{title:"Wikipedia: PWA",link:"https://en.wikipedia.org/wiki/Progressive_web_app",icon:"mdi-information",external:!0},{title:"MDN: PWA",link:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",icon:"mdi-information",external:!0}]},{title:"Single Page Apps",picture:"browsers",description:"A single page application (SPA) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown. This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.",links:[{title:"Wikipedia: SPA",link:"https://en.wikipedia.org/wiki/Single-page_application",icon:"mdi-information",external:!0},{title:"MDN: SPA",link:"https://developer.mozilla.org/en-US/docs/Glossary/SPA",icon:"mdi-information",external:!0}]},{title:"Backend",description:"Most large-scale websites use server-side code to dynamically display different data when needed, generally pulled out of a database stored on a server and sent to the client to be displayed via some code (e.g. HTML and JavaScript). Perhaps the most significant benefit of server-side code is that it allows you to tailor website content for individual users. Dynamic sites can highlight content that is more relevant based on user preferences and habits. It can also make sites easier to use by storing personal preferences and information — for example reusing stored credit card details to streamline subsequent payments. It can even allow interaction with users of the site, sending notifications and updates via email or through other channels. All of these capabilities enable much deeper engagement with users.",picture:"backend",links:[{title:"MDN: Backend",link:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction",icon:"mdi-information",external:!0},{title:"Django: Backend",link:"https://www.djangoproject.com/",icon:"mdi-information",external:!0}]},{title:"Cluster & Microservices",description:"Kubernetes is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications. The open source project is hosted by the Cloud Native Computing Foundation. Application definitions, configurations, and environments should be declarative and version controlled. Application deployment and lifecycle management should be automated, auditable, and easy to understand. Using Kubernetes and ArgoCD with the Cloud Provider of your choice to leverage GitOps patterns.",picture:"cloud",links:[{title:"Kubernetes: Documentation",link:"https://kubernetes.io/docs/home/",icon:"mdi-information",external:!0},{title:"Argocd: GitOps",link:"https://argo-cd.readthedocs.io/en/stable/",icon:"mdi-information",external:!0}]}]},{id:"packages",filter:"text",category:"static",component:"services",content:[{title:"Packages",description:"Code as a service",links:[{title:"",link:"",icon:""}]}]},{id:"pipelines",filter:"text",category:"static",component:"services",content:[{title:"Pipelines",description:"Code as a service",links:[{title:"",link:"",icon:""}]}]},{id:"infrastructure",filter:"text",category:"static",component:"services",content:[{title:"Infrastructure",description:"Code as a service",links:[{title:"",link:"",icon:""}]}]}],z={name:"services",components:{CardBasic:x,CodingIcon:y,PageBanner:w},computed:{serviceItems(){return F.filter(s=>s.component=="services")[0].content}}};function K(s,r,a,C,P,p){const i=y,c=w,u=x;return n(),o("div",null,[e(c,{setIcon:"1"},{icon:t(()=>[e(i)]),text:t(()=>r[0]||(r[0]=[l(" Services ")])),_:1}),e(W,{class:"center"},{default:t(()=>[e(b,{justify:"center"},{default:t(()=>[(n(!0),o(_,null,k(p.serviceItems,(A,V)=>(n(),o("div",{key:V},[e(d,null,{default:t(()=>[e(u,{item:A,class:"card"},null,8,["item"])]),_:2},1024)]))),128))]),_:1})]),_:1})])}const R=v(z,[["render",K],["__scopeId","data-v-5447e49a"]]);export{R as default};
