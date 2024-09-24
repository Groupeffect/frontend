import{p as _,m as F,k as ie,l as x,q as le,t as p,c as m,a as de,B as D,D as c,ab as he,T as Se,ac as be,ad as et,P as z,s as $,O as K,ae as k,U as pe,y as L,v as ee,b as we,g as tt,N as nt,af as at,Y as j,j as U,x as it,a0 as ke,ag as lt,ah as G,Z as Ce,w as st,$ as Ae,ai as rt,aj as ot,F as ve,E as te,S as ut,A as ct,ak as dt,al as N,am as vt}from"./index-DxDfUHgj.js";import{n as Ie,g as ne,M as ft,C as yt,m as Pe,h as Ve,a as Le,b as _e,s as gt,i as xe,R as mt,y as ht,u as Be,z as St,j as Oe,d as Te,e as Me,A as bt,D as fe,B as ye,c as pt}from"./position-Dig3_yZU.js";const wt=_({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...F(),...ie()},"VDivider"),kt=x()({name:"VDivider",props:wt(),setup(e,r){let{attrs:t,slots:n}=r;const{themeClasses:l}=le(e),{textColorClasses:a,textColorStyles:i}=Ie(p(e,"color")),s=m(()=>{const d={};return e.length&&(d[e.vertical?"height":"width"]=de(e.length)),e.thickness&&(d[e.vertical?"borderRightWidth":"borderTopWidth"]=de(e.thickness)),d});return D(()=>{const d=c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,a.value,e.class],style:[s.value,i.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return n.default?c("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[d,c("div",{class:"v-divider__content"},[n.default()]),d]):d}),{}}}),Ct=_({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function A(e,r,t){return x()({name:e,props:Ct({mode:t,origin:r}),setup(n,l){let{slots:a}=l;const i={onBeforeEnter(s){n.origin&&(s.style.transformOrigin=n.origin)},onLeave(s){if(n.leaveAbsolute){const{offsetTop:d,offsetLeft:v,offsetWidth:g,offsetHeight:y}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${d}px`,s.style.left=`${v}px`,s.style.width=`${g}px`,s.style.height=`${y}px`}n.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(n.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:d,top:v,left:g,width:y,height:b}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=d||"",s.style.top=v||"",s.style.left=g||"",s.style.width=y||"",s.style.height=b||""}}};return()=>{const s=n.group?he:Se;return be(s,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:i},a.default)}}})}function je(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return x()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(n,l){let{slots:a}=l;const i=n.group?he:Se;return()=>be(i,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:r},a.default)}})}function Fe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=et(`offset-${t}`);return{onBeforeEnter(i){i._parent=i.parentNode,i._initialStyle={transition:i.style.transition,overflow:i.style.overflow,[t]:i.style[t]}},onEnter(i){const s=i._initialStyle;i.style.setProperty("transition","none","important"),i.style.overflow="hidden";const d=`${i[n]}px`;i.style[t]="0",i.offsetHeight,i.style.transition=s.transition,e&&i._parent&&i._parent.classList.add(e),requestAnimationFrame(()=>{i.style[t]=d})},onAfterEnter:a,onEnterCancelled:a,onLeave(i){i._initialStyle={transition:"",overflow:i.style.overflow,[t]:i.style[t]},i.style.overflow="hidden",i.style[t]=`${i[n]}px`,i.offsetHeight,requestAnimationFrame(()=>i.style[t]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(i){e&&i._parent&&i._parent.classList.remove(e),a(i)}function a(i){const s=i._initialStyle[t];i.style.overflow=i._initialStyle.overflow,s!=null&&(i.style[t]=s),delete i._initialStyle}}A("fab-transition","center center","out-in");A("dialog-bottom-transition");A("dialog-top-transition");A("fade-transition");A("scale-transition");A("scroll-x-transition");A("scroll-x-reverse-transition");A("scroll-y-transition");A("scroll-y-reverse-transition");A("slide-x-transition");A("slide-x-reverse-transition");A("slide-y-transition");A("slide-y-reverse-transition");const At=je("expand-transition",Fe());je("expand-x-transition",Fe("",!0));const ae=Symbol.for("vuetify:list");function De(){const e=z(ae,{hasPrepend:$(!1),updateHasPrepend:()=>null}),r={hasPrepend:$(!1),updateHasPrepend:t=>{t&&(r.hasPrepend.value=t)}};return K(ae,r),e}function Ee(){return z(ae,null)}const se=e=>{const r={activate:t=>{let{id:n,value:l,activated:a}=t;return n=k(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const i of pe(t))a=r.activate({id:i,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return r},Ne=e=>{const r=se(e);return{activate:n=>{let{activated:l,id:a,...i}=n;a=k(a);const s=l.has(a)?new Set([a]):new Set;return r.activate({...i,id:a,activated:s})},in:(n,l,a)=>{let i=new Set;if(n!=null){const s=pe(n);s.length&&(i=r.in(s.slice(0,1),l,a))}return i},out:(n,l,a)=>r.out(n,l,a)}},It=e=>{const r=se(e);return{activate:n=>{let{id:l,activated:a,children:i,...s}=n;return l=k(l),i.has(l)?a:r.activate({id:l,activated:a,children:i,...s})},in:r.in,out:r.out}},Pt=e=>{const r=Ne(e);return{activate:n=>{let{id:l,activated:a,children:i,...s}=n;return l=k(l),i.has(l)?a:r.activate({id:l,activated:a,children:i,...s})},in:r.in,out:r.out}},Vt={open:e=>{let{id:r,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(r);let i=l.get(r);for(;i!=null;)a.add(i),i=l.get(i);return a}else return n.delete(r),n},select:()=>null},Ge={open:e=>{let{id:r,value:t,opened:n,parents:l}=e;if(t){let a=l.get(r);for(n.add(r);a!=null&&a!==r;)n.add(a),a=l.get(a);return n}else n.delete(r);return n},select:()=>null},Lt={open:Ge.open,select:e=>{let{id:r,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let i=l.get(r);for(;i!=null;)a.push(i),i=l.get(i);return new Set(a)}},re=e=>{const r={select:t=>{let{id:n,value:l,selected:a}=t;if(n=k(n),e&&!l){const i=Array.from(a.entries()).reduce((s,d)=>{let[v,g]=d;return g==="on"&&s.push(v),s},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=r.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return r},$e=e=>{const r=re(e);return{select:n=>{let{selected:l,id:a,...i}=n;a=k(a);const s=l.has(a)?new Map([[a,l.get(a)]]):new Map;return r.select({...i,id:a,selected:s})},in:(n,l,a)=>{let i=new Map;return n!=null&&n.length&&(i=r.in(n.slice(0,1),l,a)),i},out:(n,l,a)=>r.out(n,l,a)}},_t=e=>{const r=re(e);return{select:n=>{let{id:l,selected:a,children:i,...s}=n;return l=k(l),i.has(l)?a:r.select({id:l,selected:a,children:i,...s})},in:r.in,out:r.out}},xt=e=>{const r=$e(e);return{select:n=>{let{id:l,selected:a,children:i,...s}=n;return l=k(l),i.has(l)?a:r.select({id:l,selected:a,children:i,...s})},in:r.in,out:r.out}},Bt=e=>{const r={select:t=>{let{id:n,value:l,selected:a,children:i,parents:s}=t;n=k(n);const d=new Map(a),v=[n];for(;v.length;){const y=v.shift();a.set(k(y),l?"on":"off"),i.has(y)&&v.push(...i.get(y))}let g=k(s.get(n));for(;g;){const y=i.get(g),b=y.every(o=>a.get(k(o))==="on"),S=y.every(o=>!a.has(k(o))||a.get(k(o))==="off");a.set(g,b?"on":S?"off":"indeterminate"),g=k(s.get(g))}return e&&!l&&Array.from(a.entries()).reduce((b,S)=>{let[o,u]=S;return u==="on"&&b.push(o),b},[]).length===0?d:a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=r.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&l.push(a);return l}};return r},R=Symbol.for("vuetify:nested"),Re={id:$(),root:{register:()=>null,unregister:()=>null,parents:L(new Map),children:L(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:L(!1),selectable:L(!1),opened:L(new Set),activated:L(new Set),selected:L(new Map),selectedValues:L([]),getPath:()=>[]}},Ot=_({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Tt=e=>{let r=!1;const t=L(new Map),n=L(new Map),l=ee(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=m(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return It(e.mandatory);case"single-leaf":return Pt(e.mandatory);case"independent":return se(e.mandatory);case"single-independent":default:return Ne(e.mandatory)}}),i=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return xt(e.mandatory);case"leaf":return _t(e.mandatory);case"independent":return re(e.mandatory);case"single-independent":return $e(e.mandatory);case"classic":default:return Bt(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Lt;case"single":return Vt;case"multiple":default:return Ge}}),d=ee(e,"activated",e.activated,o=>a.value.in(o,t.value,n.value),o=>a.value.out(o,t.value,n.value)),v=ee(e,"selected",e.selected,o=>i.value.in(o,t.value,n.value),o=>i.value.out(o,t.value,n.value));we(()=>{r=!0});function g(o){const u=[];let f=o;for(;f!=null;)u.unshift(f),f=n.value.get(f);return u}const y=tt("nested"),b=new Set,S={id:$(),root:{opened:l,activatable:p(e,"activatable"),selectable:p(e,"selectable"),activated:d,selected:v,selectedValues:m(()=>{const o=[];for(const[u,f]of v.value.entries())f==="on"&&o.push(u);return o}),register:(o,u,f)=>{if(b.has(o)){g(o).join(" -> "),g(u).concat(o).join(" -> ");return}else b.add(o);u&&o!==u&&n.value.set(o,u),f&&t.value.set(o,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],o])},unregister:o=>{if(r)return;b.delete(o),t.value.delete(o);const u=n.value.get(o);if(u){const f=t.value.get(u)??[];t.value.set(u,f.filter(w=>w!==o))}n.value.delete(o)},open:(o,u,f)=>{y.emit("click:open",{id:o,value:u,path:g(o),event:f});const w=s.value.open({id:o,value:u,opened:new Set(l.value),children:t.value,parents:n.value,event:f});w&&(l.value=w)},openOnSelect:(o,u,f)=>{const w=s.value.select({id:o,value:u,selected:new Map(v.value),opened:new Set(l.value),children:t.value,parents:n.value,event:f});w&&(l.value=w)},select:(o,u,f)=>{y.emit("click:select",{id:o,value:u,path:g(o),event:f});const w=i.value.select({id:o,value:u,selected:new Map(v.value),children:t.value,parents:n.value,event:f});w&&(v.value=w),S.root.openOnSelect(o,u,f)},activate:(o,u,f)=>{if(!e.activatable)return S.root.select(o,!0,f);y.emit("click:activate",{id:o,value:u,path:g(o),event:f});const w=a.value.activate({id:o,value:u,activated:new Set(d.value),children:t.value,parents:n.value,event:f});w&&(d.value=w)},children:t,parents:n,getPath:g}};return K(R,S),S.root},Ue=(e,r)=>{const t=z(R,Re),n=Symbol(nt()),l=m(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(i,s)=>t.root.open(l.value,i,s),openOnSelect:(i,s)=>t.root.openOnSelect(l.value,i,s),isOpen:m(()=>t.root.opened.value.has(l.value)),parent:m(()=>t.root.parents.value.get(l.value)),activate:(i,s)=>t.root.activate(l.value,i,s),isActivated:m(()=>t.root.activated.value.has(k(l.value))),select:(i,s)=>t.root.select(l.value,i,s),isSelected:m(()=>t.root.selected.value.get(k(l.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,r),we(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),r&&K(R,a),a},Mt=()=>{const e=z(R,Re);K(R,{...e,isGroupActivator:!0})},jt=at({name:"VListGroupActivator",setup(e,r){let{slots:t}=r;return Mt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ft=_({activeColor:String,baseColor:String,color:String,collapseIcon:{type:j,default:"$collapse"},expandIcon:{type:j,default:"$expand"},prependIcon:j,appendIcon:j,fluid:Boolean,subgroup:Boolean,title:String,value:null,...F(),...U()},"VListGroup"),ge=x()({name:"VListGroup",props:Ft(),setup(e,r){let{slots:t}=r;const{isOpen:n,open:l,id:a}=Ue(p(e,"value"),!0),i=m(()=>`v-list-group--id-${String(a.value)}`),s=Ee(),{isBooted:d}=it();function v(S){S.stopPropagation(),l(!n.value,S)}const g=m(()=>({onClick:v,class:"v-list-group__header",id:i.value})),y=m(()=>n.value?e.collapseIcon:e.expandIcon),b=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return D(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&c(ne,{defaults:b.value},{default:()=>[c(jt,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),c(ft,{transition:{component:At},disabled:!d.value},{default:()=>{var S;return[ke(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(S=t.default)==null?void 0:S.call(t)]),[[lt,n.value]])]}})]})),{isOpen:n}}}),Dt=_({opacity:[Number,String],...F(),...U()},"VListItemSubtitle"),Et=x()({name:"VListItemSubtitle",props:Dt(),setup(e,r){let{slots:t}=r;return D(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Nt=yt("v-list-item-title"),Gt=_({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:j,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:G(),onClickOnce:G(),...Pe(),...F(),...Ve(),...Ce(),...Le(),..._e(),...gt(),...U(),...ie(),...xe({variant:"text"})},"VListItem"),me=x()({name:"VListItem",directives:{Ripple:mt},props:Gt(),emits:{click:e=>!0},setup(e,r){let{attrs:t,slots:n,emit:l}=r;const a=ht(e,t),i=m(()=>e.value===void 0?a.href.value:e.value),{activate:s,isActivated:d,select:v,isOpen:g,isSelected:y,isIndeterminate:b,isGroupActivator:S,root:o,parent:u,openOnSelect:f,id:w}=Ue(i,!1),I=Ee(),B=m(()=>{var h;return e.active!==!1&&(e.active||((h=a.isActive)==null?void 0:h.value)||(o.activatable.value?d.value:y.value))}),E=m(()=>e.link!==!1&&a.isLink.value),P=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!I&&(o.selectable.value||o.activatable.value||e.value!=null))),T=m(()=>e.rounded||e.nav),q=m(()=>e.color??e.activeColor),W=m(()=>({color:B.value?q.value??e.baseColor:e.baseColor,variant:e.variant}));st(()=>{var h;return(h=a.isActive)==null?void 0:h.value},h=>{h&&u.value!=null&&o.open(u.value,!0),h&&f(h)},{immediate:!0});const{themeClasses:J}=le(e),{borderClasses:X}=Be(e),{colorClasses:Y,colorStyles:O,variantClasses:C}=St(W),{densityClasses:M}=Oe(e),{dimensionStyles:Ke}=Ae(e),{elevationClasses:qe}=Te(e),{roundedClasses:We}=Me(T),Je=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Z=m(()=>({isActive:B.value,select:v,isOpen:g.value,isSelected:y.value,isIndeterminate:b.value}));function Xe(h){var H;l("click",h),P.value&&((H=a.navigate)==null||H.call(a,h),!S&&(o.activatable.value?s(!d.value,h):(o.selectable.value||e.value!=null)&&v(!y.value,h)))}function Ye(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),h.target.dispatchEvent(new MouseEvent("click",h)))}return D(()=>{const h=E.value?"a":e.tag,H=n.title||e.title!=null,Ze=n.subtitle||e.subtitle!=null,oe=!!(e.appendAvatar||e.appendIcon),Qe=!!(oe||n.append),ue=!!(e.prependAvatar||e.prependIcon),Q=!!(ue||n.prepend);return I==null||I.updateHasPrepend(Q),e.activeColor&&rt("active-color",["color","base-color"]),ke(c(h,te({class:["v-list-item",{"v-list-item--active":B.value,"v-list-item--disabled":e.disabled,"v-list-item--link":P.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Q&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&B.value},J.value,X.value,Y.value,M.value,qe.value,Je.value,We.value,C.value,e.class],style:[O.value,Ke.value,e.style],tabindex:P.value?I?-2:0:void 0,onClick:Xe,onKeydown:P.value&&!E.value&&Ye},a.linkProps),{default:()=>{var ce;return[bt(P.value||B.value,"v-list-item"),Q&&c("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?c(ne,{key:"prepend-defaults",disabled:!ue,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=n.prepend)==null?void 0:V.call(n,Z.value)]}}):c(ve,null,[e.prependAvatar&&c(fe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(ye,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[H&&c(Nt,{key:"title"},{default:()=>{var V;return[((V=n.title)==null?void 0:V.call(n,{title:e.title}))??e.title]}}),Ze&&c(Et,{key:"subtitle"},{default:()=>{var V;return[((V=n.subtitle)==null?void 0:V.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ce=n.default)==null?void 0:ce.call(n,Z.value)]),Qe&&c("div",{key:"append",class:"v-list-item__append"},[n.append?c(ne,{key:"append-defaults",disabled:!oe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=n.append)==null?void 0:V.call(n,Z.value)]}}):c(ve,null,[e.appendIcon&&c(ye,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(fe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[ot("ripple"),P.value&&e.ripple]])}),{activate:s,isActivated:d,isGroupActivator:S,isSelected:y,list:I,select:v,root:o,id:w}}}),$t=_({color:String,inset:Boolean,sticky:Boolean,title:String,...F(),...U()},"VListSubheader"),Rt=x()({name:"VListSubheader",props:$t(),setup(e,r){let{slots:t}=r;const{textColorClasses:n,textColorStyles:l}=Ie(p(e,"color"));return D(()=>{const a=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var i;return[a&&c("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Ut=_({items:Array,returnObject:Boolean},"VListChildren"),He=x()({name:"VListChildren",props:Ut(),setup(e,r){let{slots:t}=r;return De(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var b,S;let{children:i,props:s,type:d,raw:v}=a;if(d==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:s}))??c(kt,s,null);if(d==="subheader")return((S=t.subheader)==null?void 0:S.call(t,{props:s}))??c(Rt,s,null);const g={subtitle:t.subtitle?o=>{var u;return(u=t.subtitle)==null?void 0:u.call(t,{...o,item:v})}:void 0,prepend:t.prepend?o=>{var u;return(u=t.prepend)==null?void 0:u.call(t,{...o,item:v})}:void 0,append:t.append?o=>{var u;return(u=t.append)==null?void 0:u.call(t,{...o,item:v})}:void 0,title:t.title?o=>{var u;return(u=t.title)==null?void 0:u.call(t,{...o,item:v})}:void 0},y=ge.filterProps(s);return i?c(ge,te({value:s==null?void 0:s.value},y),{activator:o=>{let{props:u}=o;const f={...s,...u,value:e.returnObject?v:s.value};return t.header?t.header({props:f}):c(me,f,g)},default:()=>c(He,{items:i,returnObject:e.returnObject},t)}):t.item?t.item({props:s}):c(me,te(s,{value:e.returnObject?v:s.value}),g)}))}}}),Ht=_({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ut}},"list-items");function zt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Kt(e,r){const t=N(r,e.itemType,"item"),n=zt(r)?r:N(r,e.itemTitle),l=N(r,e.itemValue,void 0),a=N(r,e.itemChildren),i=e.itemProps===!0?vt(r,["children"]):N(r,e.itemProps),s={title:n,value:l,...i};return{type:t,title:s.title,value:s.value,props:s,children:t==="item"&&a?ze(e,a):void 0,raw:r}}function ze(e,r){const t=[];for(const n of r)t.push(Kt(e,n));return t}function qt(e){return{items:m(()=>ze(e,e.items))}}const Wt=_({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":G(),"onClick:select":G(),"onUpdate:opened":G(),...Ot({selectStrategy:"single-leaf",openStrategy:"list"}),...Pe(),...F(),...Ve(),...Ce(),...Le(),itemType:{type:String,default:"type"},...Ht(),..._e(),...U(),...ie(),...xe({variant:"text"})},"VList"),Yt=x()({name:"VList",props:Wt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,r){let{slots:t}=r;const{items:n}=qt(e),{themeClasses:l}=le(e),{backgroundColorClasses:a,backgroundColorStyles:i}=pt(p(e,"bgColor")),{borderClasses:s}=Be(e),{densityClasses:d}=Oe(e),{dimensionStyles:v}=Ae(e),{elevationClasses:g}=Te(e),{roundedClasses:y}=Me(e),{children:b,open:S,parents:o,select:u,getPath:f}=Tt(e),w=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=p(e,"activeColor"),B=p(e,"baseColor"),E=p(e,"color");De(),ct({VListGroup:{activeColor:I,baseColor:B,color:E,expandIcon:p(e,"expandIcon"),collapseIcon:p(e,"collapseIcon")},VListItem:{activeClass:p(e,"activeClass"),activeColor:I,baseColor:B,color:E,density:p(e,"density"),disabled:p(e,"disabled"),lines:p(e,"lines"),nav:p(e,"nav"),slim:p(e,"slim"),variant:p(e,"variant")}});const P=$(!1),T=L();function q(C){P.value=!0}function W(C){P.value=!1}function J(C){var M;!P.value&&!(C.relatedTarget&&((M=T.value)!=null&&M.contains(C.relatedTarget)))&&O()}function X(C){const M=C.target;if(!(!T.value||["INPUT","TEXTAREA"].includes(M.tagName))){if(C.key==="ArrowDown")O("next");else if(C.key==="ArrowUp")O("prev");else if(C.key==="Home")O("first");else if(C.key==="End")O("last");else return;C.preventDefault()}}function Y(C){P.value=!0}function O(C){if(T.value)return dt(T.value,C)}return D(()=>c(e.tag,{ref:T,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,s.value,d.value,g.value,w.value,y.value,e.class],style:[i.value,v.value,e.style],tabindex:e.disabled||P.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:q,onFocusout:W,onFocus:J,onKeydown:X,onMousedown:Y},{default:()=>[c(He,{items:n.value,returnObject:e.returnObject},t)]})),{open:S,select:u,focus:O,children:b,parents:o,getPath:f}}});export{Yt as V,me as a,kt as b,At as c};
