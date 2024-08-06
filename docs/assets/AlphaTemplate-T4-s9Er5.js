import{_ as T,o as e,b as c,w as a,a as n,k as V,i as l,V as F,t as o,h as k,d as x,c as i,F as _,e as m,l as P,m as C,f as w,j as b,r as L}from"./index-BUCsFCei.js";import{V as $,b as q,a as v}from"./VRow-CvPwFQFU.js";const j={name:"AlphaCard",props:{width:{type:Number,required:!1},card:{type:Object,required:!1}}},N={style:{"background-color":"rgba(0,0,0,0.9)"}},A=l("br",null,null,-1);function B(r,u,t,g,y,h){return e(),c(w,{align:"left",justify:"center","max-width":"500","min-width":"200",style:{"border-radius":"0% 20%"}},{default:a(()=>[n(V,{src:t.card.picture&&t.card.picture.picture},{default:a(()=>[l("div",N,[n(F,{class:"bgColour"},{default:a(()=>[l("b",null,o(t.card.title),1)]),_:1}),A,n(k,{class:"text-subtitle-1"},{default:a(()=>[x(o(t.card.text),1)]),_:1}),(e(!0),i(_,null,m(t.card.texts,(s,d)=>(e(),c(k,{class:"text-subtitle-1",key:d},{default:a(()=>[x(o(s.text),1)]),_:2},1024))),128))])]),_:1},8,["src"]),n(P,null,{default:a(()=>[(e(!0),i(_,null,m(t.card.links,(s,d)=>(e(),i("div",{key:d,style:{width:"100%","text-align":"right"}},[s&&s.router?(e(),c(C,{key:0,"prepend-icon":s.icon,onClick:p=>r.$router.push({name:s.link})},{default:a(()=>[x(o(s.title),1)]),_:2},1032,["prepend-icon","onClick"])):(e(),c(C,{key:1,"prepend-icon":s.icon,href:s.link,target:"_blank"},{default:a(()=>[x(o(s.title),1)]),_:2},1032,["prepend-icon","href"]))]))),128))]),_:1})]),_:1})}const I=T(j,[["render",B]]),M={name:"MosaikLoader",props:{width:{type:Number,required:!1},pictures:{required:!0}}};function S(r,u,t,g,y,h){return t.pictures?(e(),c(v,{key:0,align:"center",justify:"center",class:"imageContainer"},{default:a(()=>[(e(!0),i(_,null,m(t.pictures,(s,d)=>(e(),c($,{key:d,class:"mosaikImg text-center"},{default:a(()=>[n(q,{align:"center",justify:"center"},{default:a(()=>[n(w,{style:{"border-radius":"0% 50% 50%"},width:t.width||100},{default:a(()=>[n(V,{src:s.picture},null,8,["src"])]),_:2},1032,["width"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):b("",!0)}const W=T(M,[["render",S],["__scopeId","data-v-afa892ac"]]),D={components:{MosaikLoader:W,AlphaCard:I},name:"AlphaTemplate",props:{mosaikWidth:{required:!1,InstanceType:Number},textFilterTags:{required:!0},pictureFilterTags:{required:!1},bannerTextListPreset:{required:!1},cardFilterTags:{required:!1}},data:()=>({pictures:null,bannerTextList:null,currentText:0,cards:null}),computed:{bannerStyle(){return{"background-color":this.$bgColor,color:"white"}},bannnerText(){return this.currentText||null},computedPictures(){return this.pictures}},methods:{animateText(r){this.currentText+=1}},created(){this.bannerTextList=this.bannerTextListPreset,this.$getText(this.textFilterTags).then(r=>{r.data.length>0?this.bannerTextList=r.data.map(u=>u.text):this.bannerTextList=this.bannerTextListPreset,this.bannerTextList.map((u,t)=>{this.animateText(t)})}).catch(r=>{console.error(r),this.bannerTextList=this.bannerTextListPreset,this.bannerTextList.map((u,t)=>{this.animateText(t)})}),this.$getPictures(this.pictureFilterTags).then(r=>{this.pictures=r.data}),this.$getCards(this.cardFilterTags).then(r=>{this.cards=r.data})}},E={key:0,class:"animate__animated animate__backInLeft"},O={class:"text-left d-flex"},R={class:"pl-4 pr-4 pt-4 bgColour"},z=l("br",null,null,-1),G=l("br",null,null,-1);function H(r,u,t,g,y,h){const s=L("alpha-card"),d=L("mosaik-loader");return e(),i("div",null,[(e(!0),i(_,null,m(r.bannerTextList,(p,f)=>(e(),i("div",{key:f},[h.bannnerText>=f+1?(e(),i("div",E,[l("div",O,[l("h2",R,[l("i",null,o(p),1)])])])):b("",!0)]))),128)),z,n(q,{align:"center",justify:"center"},{default:a(()=>[n(v,{dense:"",align:"center",justify:"center"},{default:a(()=>[(e(!0),i(_,null,m(r.cards,(p,f)=>(e(),c($,{key:f,lg:"3",md:"12",sm:"12",xs:"12",xxs:"12",style:{"text-align":"center"}},{default:a(()=>[n(s,{card:p},null,8,["card"])]),_:2},1024))),128))]),_:1}),G,h.computedPictures?(e(),c(d,{key:0,width:t.mosaikWidth,pictures:h.computedPictures},null,8,["width","pictures"])):b("",!0)]),_:1})])}const Q=T(D,[["render",H]]);export{Q as A};