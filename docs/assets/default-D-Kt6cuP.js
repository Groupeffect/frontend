import{s as M,c as m,a as X,o as ne,w as p,b as J,C as ot,u as j,d as me,e as st,p as H,f as it,g as fe,m as U,h as ut,i as He,j as q,k as K,l as D,n as Ee,q as Q,t as N,r as rt,v as ge,x as Me,y as oe,z as Ne,A as he,B as A,D as r,E as W,T as ct,F as $e,G as pe,_ as ye,H as z,I as O,J as G,K as $,L as dt,M as vt,N as mt,O as De,P as ft,Q as gt,R as ht,S as yt,U as bt,V as St,W as kt,X as wt,Y as Ce,Z as Ae,$ as Re,a0 as Vt,a1 as ze,a2 as Oe,a3 as Be,a4 as Ct,a5 as Bt,a6 as xt,a7 as It,a8 as _t,a9 as Tt}from"./index-D_PYGiyH.js";import{V as xe,a as ae,b as Pt,c as Lt}from"./VList-BNVJU46w.js";import{m as se,a as ie,b as ue,u as re,c as ve,d as ce,e as de,f as Ht,t as Et,V as Ge,g as Y,h as Ye,i as We,j as Ue,k as Fe,l as Xe,n as Ie,o as Mt,p as Nt,q as $t,r as pt,s as Dt,v as At,w as Rt,x as zt,y as Ot,z as Gt,R as Yt,A as Wt,B as le}from"./position-D_1Mq36X.js";function Ut(e){let{rootEl:o,isSticky:a,layoutItemStyles:n}=e;const t=M(!1),l=M(0),s=m(()=>{const S=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[S]:X(l.value)}:{top:n.value.top}]});ne(()=>{p(a,S=>{S?window.addEventListener("scroll",f,{passive:!0}):window.removeEventListener("scroll",f)},{immediate:!0})}),J(()=>{window.removeEventListener("scroll",f)});let v=0;function f(){const S=v>window.scrollY?"up":"down",g=o.value.getBoundingClientRect(),h=parseFloat(n.value.top??0),u=window.scrollY-Math.max(0,l.value-h),d=g.height+Math.max(l.value,h)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;g.height<window.innerHeight-h?(t.value="top",l.value=h):S==="up"&&t.value==="bottom"||S==="down"&&t.value==="top"?(l.value=window.scrollY+g.top-c,t.value=!0):S==="down"&&d<=0?(l.value=0,t.value="bottom"):S==="up"&&u<=0&&(c?t.value!=="top"&&(l.value=-u+c+h,t.value="top"):(l.value=g.top+u,t.value="top")),v=window.scrollY}return{isStuck:t,stickyStyles:s}}const Ft=100,Xt=20;function _e(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Te(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const n=_e(o),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);o+=(t-n)*Math.abs(t),a===e.length-1&&(o*=.5)}return _e(o)*1e3}function qt(){const e={};function o(t){Array.from(t.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new ot(Xt))).push([t.timeStamp,l])})}function a(t){Array.from(t.changedTouches).forEach(l=>{delete e[l.identifier]})}function n(t){var S;const l=(S=e[t])==null?void 0:S.values().reverse();if(!l)throw new Error(`No samples for touch id ${t}`);const s=l[0],v=[],f=[];for(const g of l){if(s[0]-g[0]>Ft)break;v.push({t:g[0],d:g[1].clientX}),f.push({t:g[0],d:g[1].clientY})}return{x:Te(v),y:Te(f),get direction(){const{x:g,y:h}=this,[u,d]=[Math.abs(g),Math.abs(h)];return u>d&&g>=0?"right":u>d&&g<=0?"left":d>u&&h>=0?"down":d>u&&h<=0?"up":Zt()}}}return{addMovement:o,endTouch:a,getVelocity:n}}function Zt(){throw new Error}function jt(e){let{el:o,isActive:a,isTemporary:n,width:t,touchless:l,position:s}=e;ne(()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",T,{passive:!0})}),J(()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",T)});const v=m(()=>["left","right"].includes(s.value)),{addMovement:f,endTouch:S,getVelocity:g}=qt();let h=!1;const u=M(!1),d=M(0),c=M(0);let i;function y(k,w){return(s.value==="left"?k:s.value==="right"?document.documentElement.clientWidth-k:s.value==="top"?k:s.value==="bottom"?document.documentElement.clientHeight-k:F())-(w?t.value:0)}function C(k){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const B=s.value==="left"?(k-c.value)/t.value:s.value==="right"?(document.documentElement.clientWidth-k-c.value)/t.value:s.value==="top"?(k-c.value)/t.value:s.value==="bottom"?(document.documentElement.clientHeight-k-c.value)/t.value:F();return w?Math.max(0,Math.min(1,B)):B}function b(k){if(l.value)return;const w=k.changedTouches[0].clientX,B=k.changedTouches[0].clientY,x=25,_=s.value==="left"?w<x:s.value==="right"?w>document.documentElement.clientWidth-x:s.value==="top"?B<x:s.value==="bottom"?B>document.documentElement.clientHeight-x:F(),V=a.value&&(s.value==="left"?w<t.value:s.value==="right"?w>document.documentElement.clientWidth-t.value:s.value==="top"?B<t.value:s.value==="bottom"?B>document.documentElement.clientHeight-t.value:F());(_||V||a.value&&n.value)&&(i=[w,B],c.value=y(v.value?w:B,a.value),d.value=C(v.value?w:B),h=c.value>-20&&c.value<80,S(k),f(k))}function I(k){const w=k.changedTouches[0].clientX,B=k.changedTouches[0].clientY;if(h){if(!k.cancelable){h=!1;return}const _=Math.abs(w-i[0]),V=Math.abs(B-i[1]);(v.value?_>V&&_>3:V>_&&V>3)?(u.value=!0,h=!1):(v.value?V:_)>3&&(h=!1)}if(!u.value)return;k.preventDefault(),f(k);const x=C(v.value?w:B,!1);d.value=Math.max(0,Math.min(1,x)),x>1?c.value=y(v.value?w:B,!0):x<0&&(c.value=y(v.value?w:B,!1))}function T(k){if(h=!1,!u.value)return;f(k),u.value=!1;const w=g(k.changedTouches[0].identifier),B=Math.abs(w.x),x=Math.abs(w.y);(v.value?B>x&&B>400:x>B&&x>3)?a.value=w.direction===({left:"right",right:"left",top:"down",bottom:"up"}[s.value]||F()):a.value=d.value>.5}const E=m(()=>u.value?{transform:s.value==="left"?`translateX(calc(-100% + ${d.value*t.value}px))`:s.value==="right"?`translateX(calc(100% - ${d.value*t.value}px))`:s.value==="top"?`translateY(calc(-100% + ${d.value*t.value}px))`:s.value==="bottom"?`translateY(calc(100% - ${d.value*t.value}px))`:F(),transition:"none"}:void 0);return j(u,()=>{var B,x;const k=((B=o.value)==null?void 0:B.style.transform)??null,w=((x=o.value)==null?void 0:x.style.transition)??null;me(()=>{var _,V,P,R;(V=o.value)==null||V.style.setProperty("transform",((_=E.value)==null?void 0:_.transform)||"none"),(R=o.value)==null||R.style.setProperty("transition",((P=E.value)==null?void 0:P.transition)||null)}),st(()=>{var _,V;(_=o.value)==null||_.style.setProperty("transform",k),(V=o.value)==null||V.style.setProperty("transition",w)})}),{isDragging:u,dragProgress:d,dragStyles:E}}function F(){throw new Error}const Jt=H({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Kt(e,o){let a=()=>{};function n(s){a==null||a();const v=Number(s?e.openDelay:e.closeDelay);return new Promise(f=>{a=it(v,()=>{o==null||o(s),f(s)})})}function t(){return n(!0)}function l(){return n(!1)}return{clearDelay:a,runOpenDelay:t,runCloseDelay:l}}function Qt(){const o=fe("useScopeId").vnode.scopeId;return{scopeId:o?{[o]:""}:void 0}}const ea=["start","end","left","right","top","bottom"],ta=H({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ea.includes(e)},sticky:Boolean,...se(),...U(),...Jt(),...ut({mobile:null}),...ie(),...He(),...ue(),...q({tag:"nav"}),...K()},"VNavigationDrawer"),aa=D()({name:"VNavigationDrawer",props:ta(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:a,emit:n,slots:t}=o;const{isRtl:l}=Ee(),{themeClasses:s}=Q(e),{borderClasses:v}=re(e),{backgroundColorClasses:f,backgroundColorStyles:S}=ve(N(e,"color")),{elevationClasses:g}=ce(e),{displayClasses:h,mobile:u}=rt(e),{roundedClasses:d}=de(e),c=Ht(),i=ge(e,"modelValue",null,L=>!!L),{ssrBootStyles:y}=Me(),{scopeId:C}=Qt(),b=oe(),I=M(!1),{runOpenDelay:T,runCloseDelay:E}=Kt(e,L=>{I.value=L}),k=m(()=>e.rail&&e.expandOnHover&&I.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),w=m(()=>Et(e.location,l.value)),B=m(()=>e.persistent),x=m(()=>!e.permanent&&(u.value||e.temporary)),_=m(()=>e.sticky&&!x.value&&w.value!=="bottom");j(()=>e.expandOnHover&&e.rail!=null,()=>{p(I,L=>n("update:rail",!L))}),j(()=>!e.disableResizeWatcher,()=>{p(x,L=>!e.permanent&&pe(()=>i.value=!L))}),j(()=>!e.disableRouteWatcher&&!!c,()=>{p(c.currentRoute,()=>x.value&&(i.value=!1))}),p(()=>e.permanent,L=>{L&&(i.value=!0)}),e.modelValue==null&&!x.value&&(i.value=e.permanent||!u.value);const{isDragging:V,dragProgress:P}=jt({el:b,isActive:i,isTemporary:x,width:k,touchless:N(e,"touchless"),position:w}),R=m(()=>{const L=x.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):k.value;return V.value?L*P.value:L}),ee=m(()=>["top","bottom"].includes(e.location)?0:k.value),{layoutItemStyles:Z,layoutItemScrimStyles:te}=Ne({id:e.name,order:m(()=>parseInt(e.order,10)),position:w,layoutSize:R,elementSize:ee,active:m(()=>i.value||V.value),disableTransitions:m(()=>V.value),absolute:m(()=>e.absolute||_.value&&typeof be.value!="string")}),{isStuck:be,stickyStyles:lt}=Ut({rootEl:b,isSticky:_,layoutItemStyles:Z}),Se=ve(m(()=>typeof e.scrim=="string"?e.scrim:null)),nt=m(()=>({...V.value?{opacity:P.value*.2,transition:"none"}:void 0,...te.value}));return he({VList:{bgColor:"transparent"}}),A(()=>{const L=t.image||e.image;return r($e,null,[r(e.tag,W({ref:b,onMouseenter:T,onMouseleave:E,class:["v-navigation-drawer",`v-navigation-drawer--${w.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":I.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":x.value,"v-navigation-drawer--persistent":B.value,"v-navigation-drawer--active":i.value,"v-navigation-drawer--sticky":_.value},s.value,f.value,v.value,h.value,g.value,d.value,e.class],style:[S.value,Z.value,y.value,lt.value,e.style,["top","bottom"].includes(w.value)?{height:"auto"}:{}]},C,a),{default:()=>{var ke,we,Ve;return[L&&r("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?r(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):r(Ge,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&r("div",{class:"v-navigation-drawer__prepend"},[(ke=t.prepend)==null?void 0:ke.call(t)]),r("div",{class:"v-navigation-drawer__content"},[(we=t.default)==null?void 0:we.call(t)]),t.append&&r("div",{class:"v-navigation-drawer__append"},[(Ve=t.append)==null?void 0:Ve.call(t)])]}}),r(ct,{name:"fade-transition"},{default:()=>[x.value&&(V.value||i.value)&&!!e.scrim&&r("div",W({class:["v-navigation-drawer__scrim",Se.backgroundColorClasses.value],style:[nt.value,Se.backgroundColorStyles.value],onClick:()=>{B.value||(i.value=!1)}},C),null)]})])}),{isStuck:be}}}),la={name:"SideBar",data:()=>({rail:!0}),computed:{navItems(){return[{title:"Services",icon:"mdi-star",link:"/services"},{title:"Contact",icon:"mdi-face-agent",link:"contact"},{title:"About",icon:"mdi-information",link:"/about"}]}},methods:{listener(e){this.$toggleSideBar()}}},na={role:"presentation",viewBox:"0 0 24 24",style:{height:"1.6rem",width:"1.6rem"}},oa={role:"presentation",viewBox:"0 0 24 24",style:{height:"1.6rem",width:"1.6rem"}},sa=["title"],ia={title:"GitHub"},ua={title:"Theme setting"};function ra(e,o,a,n,t,l){return z(),O("div",null,[G("div",null,[r(aa,{"model-value":e.$sideBarToggle,"onUpdate:modelValue":l.listener,rail:e.rail,class:"side-bar","aria-label":"Side Bar","aria-controls":"menu"},{default:$(()=>[r(xe,null,{default:$(()=>[r(ae,null,{default:$(()=>[e.rail?(z(),O("div",{key:1,onClick:o[1]||(o[1]=s=>e.rail=!e.rail),"aria-label":"Close Sidebar"},[(z(),O("svg",oa,o[3]||(o[3]=[G("title",null,"menu-close",-1),G("path",{d:"M3 6H13V8H3V6M3 16H13V18H3V16M3 11H15V13H3V11M16 7L14.58 8.39L18.14 12L14.58 15.61L16 17L21 12L16 7Z",style:{fill:"currentcolor"}},null,-1)])))])):(z(),O("div",{key:0,onClick:o[0]||(o[0]=s=>e.rail=!e.rail),"aria-label":"Open Sidebar"},[(z(),O("svg",na,o[2]||(o[2]=[G("title",null,"menu-open",-1),G("path",{d:"M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z",style:{fill:"currentcolor"}},null,-1)])))]))]),_:1})]),_:1}),r(Pt),r(xe,{density:"compact",nav:""},{default:$(()=>[(z(!0),O($e,null,dt(l.navItems,(s,v)=>(z(),O("div",{key:v,title:s.title},[r(ae,{"prepend-icon":s.icon,title:s.title,"aria-label":s.title,onClick:f=>e.$router.push({path:s.link})},null,8,["prepend-icon","title","aria-label","onClick"])],8,sa))),128)),G("div",ia,[r(ae,{href:"https://github.com/Groupeffect","prepend-icon":"mdi-github",target:"_blank",value:"GitHub"})]),G("div",ua,[r(ae,{onClick:e.$toggleDarkMode,"prepend-icon":"mdi-weather-sunny",title:e.$darkMode?"Light on":"Dark on",value:"theme"},null,8,["onClick","title"])])]),_:1})]),_:1},8,["model-value","onUpdate:modelValue","rail"])])])}const qe=ye(la,[["render",ra],["__scopeId","data-v-ce3b8a28"]]),Ze=H({text:String,...U(),...q()},"VToolbarTitle"),je=D()({name:"VToolbarTitle",props:Ze(),setup(e,o){let{slots:a}=o;return A(()=>{const n=!!(a.default||a.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[n&&r("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]}})}),{}}}),ca=[null,"prominent","default","comfortable","compact"],Je=H({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ca.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...se(),...U(),...ie(),...ue(),...q({tag:"header"}),...K()},"VToolbar"),Pe=D()({name:"VToolbar",props:Je(),setup(e,o){var d;let{slots:a}=o;const{backgroundColorClasses:n,backgroundColorStyles:t}=ve(N(e,"color")),{borderClasses:l}=re(e),{elevationClasses:s}=ce(e),{roundedClasses:v}=de(e),{themeClasses:f}=Q(e),{rtlClasses:S}=Ee(),g=M(!!(e.extended||(d=a.extension)!=null&&d.call(a))),h=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=m(()=>g.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return he({VBtn:{variant:"text"}}),A(()=>{var C;const c=!!(e.title||a.title),i=!!(a.image||e.image),y=(C=a.extension)==null?void 0:C.call(a);return g.value=!!(e.extended||y),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,l.value,s.value,v.value,f.value,S.value,e.class],style:[t.value,e.style]},{default:()=>[i&&r("div",{key:"image",class:"v-toolbar__image"},[a.image?r(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):r(Ge,{key:"image-img",cover:!0,src:e.image},null)]),r(Y,{defaults:{VTabs:{height:X(h.value)}}},{default:()=>{var b,I,T;return[r("div",{class:"v-toolbar__content",style:{height:X(h.value)}},[a.prepend&&r("div",{class:"v-toolbar__prepend"},[(b=a.prepend)==null?void 0:b.call(a)]),c&&r(je,{key:"title",text:e.title},{text:a.title}),(I=a.default)==null?void 0:I.call(a),a.append&&r("div",{class:"v-toolbar__append"},[(T=a.append)==null?void 0:T.call(a)])])]}}),r(Y,{defaults:{VTabs:{height:X(u.value)}}},{default:()=>[r(Lt,null,{default:()=>[g.value&&r("div",{class:"v-toolbar__extension",style:{height:X(u.value)}},[y])]})]})]})}),{contentHeight:h,extensionHeight:u}}}),da=H({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function va(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=o;let n=0,t=0;const l=oe(null),s=M(0),v=M(0),f=M(0),S=M(!1),g=M(!1),h=m(()=>Number(e.scrollThreshold)),u=m(()=>vt((h.value-s.value)/h.value||0)),d=()=>{const c=l.value;if(!c||a&&!a.value)return;n=s.value,s.value="window"in c?c.pageYOffset:c.scrollTop;const i=c instanceof Window?document.documentElement.scrollHeight:c.scrollHeight;if(t!==i){t=i;return}g.value=s.value<n,f.value=Math.abs(s.value-h.value)};return p(g,()=>{v.value=v.value||s.value}),p(S,()=>{v.value=0}),ne(()=>{p(()=>e.scrollTarget,c=>{var y;const i=c?document.querySelector(c):window;i&&i!==l.value&&((y=l.value)==null||y.removeEventListener("scroll",d),l.value=i,l.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),J(()=>{var c;(c=l.value)==null||c.removeEventListener("scroll",d)}),a&&p(a,d,{immediate:!0}),{scrollThreshold:h,currentScroll:s,currentThreshold:f,isScrollActive:S,scrollRatio:u,isScrollingUp:g,savedScroll:v}}const ma=H({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Je(),...He(),...da(),height:{type:[Number,String],default:64}},"VAppBar"),fa=D()({name:"VAppBar",props:ma(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const n=oe(),t=ge(e,"modelValue"),l=m(()=>{var I;const b=new Set(((I=e.scrollBehavior)==null?void 0:I.split(" "))??[]);return{hide:b.has("hide"),fullyHide:b.has("fully-hide"),inverted:b.has("inverted"),collapse:b.has("collapse"),elevate:b.has("elevate"),fadeImage:b.has("fade-image")}}),s=m(()=>{const b=l.value;return b.hide||b.fullyHide||b.inverted||b.collapse||b.elevate||b.fadeImage||!t.value}),{currentScroll:v,scrollThreshold:f,isScrollingUp:S,scrollRatio:g}=va(e,{canScroll:s}),h=m(()=>l.value.hide||l.value.fullyHide),u=m(()=>e.collapse||l.value.collapse&&(l.value.inverted?g.value>0:g.value===0)),d=m(()=>e.flat||l.value.fullyHide&&!t.value||l.value.elevate&&(l.value.inverted?v.value>0:v.value===0)),c=m(()=>l.value.fadeImage?l.value.inverted?1-g.value:g.value:void 0),i=m(()=>{var T,E;if(l.value.hide&&l.value.inverted)return 0;const b=((T=n.value)==null?void 0:T.contentHeight)??0,I=((E=n.value)==null?void 0:E.extensionHeight)??0;return h.value?v.value<f.value||l.value.fullyHide?b+I:b:b+I});j(m(()=>!!e.scrollBehavior),()=>{me(()=>{h.value?l.value.inverted?t.value=v.value>f.value:t.value=S.value||v.value<f.value:t.value=!0})});const{ssrBootStyles:y}=Me(),{layoutItemStyles:C}=Ne({id:e.name,order:m(()=>parseInt(e.order,10)),position:N(e,"location"),layoutSize:i,elementSize:M(void 0),active:t,absolute:N(e,"absolute")});return A(()=>{const b=Pe.filterProps(e);return r(Pe,W({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":c.value,height:void 0,...y.value},e.style]},b,{collapse:u.value,flat:d.value}),a)}),{}}}),Ke=H({baseColor:String,divided:Boolean,...se(),...U(),...Ye(),...ie(),...ue(),...q(),...K(),...We()},"VBtnGroup"),Le=D()({name:"VBtnGroup",props:Ke(),setup(e,o){let{slots:a}=o;const{themeClasses:n}=Q(e),{densityClasses:t}=Ue(e),{borderClasses:l}=re(e),{elevationClasses:s}=ce(e),{roundedClasses:v}=de(e);he({VBtn:{height:"auto",baseColor:N(e,"baseColor"),color:N(e,"color"),density:N(e,"density"),flat:!0,variant:N(e,"variant")}}),A(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,t.value,s.value,v.value,e.class],style:e.style},a))}}),ga=H({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ha=H({value:null,disabled:Boolean,selectedClass:String},"group-item");function ya(e,o){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=fe("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=mt();De(Symbol.for(`${o.description}:id`),t);const l=ft(o,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${o.description}`)}const s=N(e,"value"),v=m(()=>!!(l.disabled.value||e.disabled));l.register({id:t,value:s,disabled:v},n),J(()=>{l.unregister(t)});const f=m(()=>l.isSelected(t)),S=m(()=>l.items.value[0].id===t),g=m(()=>l.items.value[l.items.value.length-1].id===t),h=m(()=>f.value&&[l.selectedClass.value,e.selectedClass]);return p(f,u=>{n.emit("group:selected",{value:u})},{flush:"sync"}),{id:t,isSelected:f,isFirst:S,isLast:g,toggle:()=>l.select(t,!f.value),select:u=>l.select(t,u),selectedClass:h,value:s,disabled:v,group:l}}function ba(e,o){let a=!1;const n=gt([]),t=ge(e,"modelValue",[],u=>u==null?[]:Qe(n,bt(u)),u=>{const d=ka(n,u);return e.multiple?d:d[0]}),l=fe("useGroup");function s(u,d){const c=u,i=Symbol.for(`${o.description}:id`),C=St(i,l==null?void 0:l.vnode).indexOf(d);kt(c.value)==null&&(c.value=C,c.useIndexAsValue=!0),C>-1?n.splice(C,0,c):n.push(c)}function v(u){if(a)return;f();const d=n.findIndex(c=>c.id===u);n.splice(d,1)}function f(){const u=n.find(d=>!d.disabled);u&&e.mandatory==="force"&&!t.value.length&&(t.value=[u.id])}ne(()=>{f()}),J(()=>{a=!0}),ht(()=>{for(let u=0;u<n.length;u++)n[u].useIndexAsValue&&(n[u].value=u)});function S(u,d){const c=n.find(i=>i.id===u);if(!(d&&(c!=null&&c.disabled)))if(e.multiple){const i=t.value.slice(),y=i.findIndex(b=>b===u),C=~y;if(d=d??!C,C&&e.mandatory&&i.length<=1||!C&&e.max!=null&&i.length+1>e.max)return;y<0&&d?i.push(u):y>=0&&!d&&i.splice(y,1),t.value=i}else{const i=t.value.includes(u);if(e.mandatory&&i)return;t.value=d??!i?[u]:[]}}function g(u){if(e.multiple,t.value.length){const d=t.value[0],c=n.findIndex(C=>C.id===d);let i=(c+u)%n.length,y=n[i];for(;y.disabled&&i!==c;)i=(i+u)%n.length,y=n[i];if(y.disabled)return;t.value=[n[i].id]}else{const d=n.find(c=>!c.disabled);d&&(t.value=[d.id])}}const h={register:s,unregister:v,selected:t,select:S,disabled:N(e,"disabled"),prev:()=>g(n.length-1),next:()=>g(1),isSelected:u=>t.value.includes(u),selectedClass:m(()=>e.selectedClass),items:m(()=>n),getItemIndex:u=>Sa(n,u)};return De(o,h),h}function Sa(e,o){const a=Qe(e,[o]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Qe(e,o){const a=[];return o.forEach(n=>{const t=e.find(s=>yt(n,s.value)),l=e[n];(t==null?void 0:t.value)!=null?a.push(t.id):l!=null&&a.push(l.id)}),a}function ka(e,o){const a=[];return o.forEach(n=>{const t=e.findIndex(l=>l.id===n);if(~t){const l=e[t];a.push(l.value!=null?l.value:t)}}),a}const et=Symbol.for("vuetify:v-btn-toggle"),wa=H({...Ke(),...ga()},"VBtnToggle");D()({name:"VBtnToggle",props:wa(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const{isSelected:n,next:t,prev:l,select:s,selected:v}=ba(e,et);return A(()=>{const f=Le.filterProps(e);return r(Le,W({class:["v-btn-toggle",e.class]},f,{style:e.style}),{default:()=>{var S;return[(S=a.default)==null?void 0:S.call(a,{isSelected:n,next:t,prev:l,select:s,selected:v})]}})}),{next:t,prev:l,select:s}}});const Va=H({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...U(),...Fe(),...q({tag:"div"}),...K()},"VProgressCircular"),Ca=D()({name:"VProgressCircular",props:Va(),setup(e,o){let{slots:a}=o;const n=20,t=2*Math.PI*n,l=oe(),{themeClasses:s}=Q(e),{sizeClasses:v,sizeStyles:f}=Xe(e),{textColorClasses:S,textColorStyles:g}=Ie(N(e,"color")),{textColorClasses:h,textColorStyles:u}=Ie(N(e,"bgColor")),{intersectionRef:d,isIntersecting:c}=Mt(),{resizeRef:i,contentRect:y}=wt(),C=m(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),b=m(()=>Number(e.width)),I=m(()=>f.value?Number(e.size):y.value?y.value.width:Math.max(b.value,32)),T=m(()=>n/(1-b.value/I.value)*2),E=m(()=>b.value/I.value*T.value),k=m(()=>X((100-C.value)/100*t));return me(()=>{d.value=l.value,i.value=l.value}),A(()=>r(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":c.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},s.value,v.value,S.value,e.class],style:[f.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[r("circle",{class:["v-progress-circular__underlay",h.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":E.value,"stroke-dasharray":t,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":E.value,"stroke-dasharray":t,"stroke-dashoffset":k.value},null)]),a.default&&r("div",{class:"v-progress-circular__content"},[a.default({value:C.value})])]})),{}}});function Ba(e,o){p(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&o&&pe(()=>{o(!0)})},{immediate:!0})}const tt=H({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:et},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ce,appendIcon:Ce,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...se(),...U(),...Ye(),...Ae(),...ie(),...ha(),...Nt(),...$t(),...pt(),...ue(),...Dt(),...Fe(),...q({tag:"button"}),...K(),...We({variant:"elevated"})},"VBtn"),xa=D()({name:"VBtn",props:tt(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:a,slots:n}=o;const{themeClasses:t}=Q(e),{borderClasses:l}=re(e),{densityClasses:s}=Ue(e),{dimensionStyles:v}=Re(e),{elevationClasses:f}=ce(e),{loaderClasses:S}=At(e),{locationStyles:g}=Rt(e),{positionClasses:h}=zt(e),{roundedClasses:u}=de(e),{sizeClasses:d,sizeStyles:c}=Xe(e),i=ya(e,e.symbol,!1),y=Ot(e,a),C=m(()=>{var V;return e.active!==void 0?e.active:y.isLink.value?(V=y.isActive)==null?void 0:V.value:i==null?void 0:i.isSelected.value}),b=m(()=>C.value?e.activeColor??e.color:e.color),I=m(()=>{var P,R;return{color:(i==null?void 0:i.isSelected.value)&&(!y.isLink.value||((P=y.isActive)==null?void 0:P.value))||!i||((R=y.isActive)==null?void 0:R.value)?b.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:T,colorStyles:E,variantClasses:k}=Gt(I),w=m(()=>(i==null?void 0:i.disabled.value)||e.disabled),B=m(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),x=m(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function _(V){var P;w.value||y.isLink.value&&(V.metaKey||V.ctrlKey||V.shiftKey||V.button!==0||a.target==="_blank")||((P=y.navigate)==null||P.call(y,V),i==null||i.toggle())}return Ba(y,i==null?void 0:i.select),A(()=>{const V=y.isLink.value?"a":e.tag,P=!!(e.prependIcon||n.prepend),R=!!(e.appendIcon||n.append),ee=!!(e.icon&&e.icon!==!0);return Vt(r(V,W({type:V==="a"?void 0:"button",class:["v-btn",i==null?void 0:i.selectedClass.value,{"v-btn--active":C.value,"v-btn--block":e.block,"v-btn--disabled":w.value,"v-btn--elevated":B.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},t.value,l.value,T.value,s.value,f.value,S.value,h.value,u.value,d.value,k.value,e.class],style:[E.value,v.value,g.value,c.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:w.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:_,value:x.value},y.linkProps),{default:()=>{var Z;return[Wt(!0,"v-btn"),!e.icon&&P&&r("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?r(Y,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):r(le,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&ee?r(le,{key:"content-icon",icon:e.icon},null):r(Y,{key:"content-defaults",disabled:!ee,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var te;return[((te=n.default)==null?void 0:te.call(n))??e.text]}})]),!e.icon&&R&&r("span",{key:"append",class:"v-btn__append"},[n.append?r(Y,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):r(le,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((Z=n.loader)==null?void 0:Z.call(n))??r(Ca,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Yt,!w.value&&e.ripple,"",{center:!!e.icon}]])}),{group:i}}}),Ia=H({...tt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),_a=D()({name:"VAppBarNavIcon",props:Ia(),setup(e,o){let{slots:a}=o;return A(()=>r(xa,W(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),Ta=D()({name:"VAppBarTitle",props:Ze(),setup(e,o){let{slots:a}=o;return A(()=>r(je,W(e,{class:"v-app-bar-title"}),a)),{}}}),Pa={name:"TopBar"};function La(e,o,a,n,t,l){const s=ze("router-link");return z(),Oe(fa,{elevation:1,fixed:"",dense:""},{prepend:$(()=>[r(_a,{onClick:e.$toggleSideBar},null,8,["onClick"])]),default:$(()=>[r(Ta,null,{default:$(()=>[r(s,{class:"pt-4",to:"/"},{default:$(()=>[r(le,{size:"small",class:"mr-8 pb-1"},{default:$(()=>o[0]||(o[0]=[Be("mdi-home")])),_:1}),Be(" "+Ct(e.$appTitle)+"  ",1)]),_:1})]),_:1})]),_:1})}const at=ye(Pa,[["render",La]]),Ha=H({...U(),...Ae(),...Bt()},"VLayout"),Ea=D()({name:"VLayout",props:Ha(),setup(e,o){let{slots:a}=o;const{layoutClasses:n,layoutStyles:t,getLayoutItem:l,items:s,layoutRef:v}=xt(e),{dimensionStyles:f}=Re(e);return A(()=>{var S;return r("div",{ref:v,class:[n.value,e.class],style:[f.value,t.value,e.style]},[(S=a.default)==null?void 0:S.call(a)])}),{getLayoutItem:l,items:s}}}),Ma={name:"Default",components:{TopBar:at,SideBar:qe}};function Na(e,o,a,n,t,l){const s=at,v=qe,f=ze("router-view");return z(),Oe(_t,{theme:e.$mainTheme,style:It(e.$mainCss)},{default:$(()=>[r(Ea,null,{default:$(()=>[r(s),r(v),r(Tt,null,{default:$(()=>[r(f)]),_:1})]),_:1})]),_:1},8,["theme","style"])}const Aa=ye(Ma,[["render",Na]]);export{Aa as default};