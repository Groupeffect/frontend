import{_ as x,H as u,I as d,J as a,a7 as I,D as e,K as n,a3 as s,a4 as k}from"./index-toTXZ9VF.js";import{_ as C,V as g,a as p,b as i,c as h,d as r,e as _}from"./VCard-PK7CtyuB.js";import{_ as v}from"./CodingIcon-C3heeWKX.js";import{V as f}from"./position-Co5Z4SiG.js";const S={name:"WaveSvg",props:["parameter","height"],methods:{waver(l){const t=Math.random()*l+1;return`M0,0  L100,0C${t*10+5}, ${t*10+100} ${t*10+15}, 0 0,  10z`}}},M=["height"],y=["d"];function D(l,t,o,w,b,c){return u(),d("div",null,[a("div",{class:"wave",style:I({backgroundColor:l.$mainCss.backgroundColor})},[(u(),d("svg",{width:"100%",height:o.height||30,viewBox:"0 0 100 100",preserveAspectRatio:"none"},[a("path",{d:c.waver(o.parameter),fill:"white"},null,8,y)],8,M))],4)])}const T=x(S,[["render",D],["__scopeId","data-v-293ae2b0"]]),P={name:"index",components:{CodingIcon:v,WaveSvg:T,PageBanner:C},data:()=>({codingText:"Coding",codingItems:["Cloud","SQL","Linux","Javascript","Python","Bash","Django","Vue","React","Nodejs","Kubernetes","Docker","Github","Graph","Ontology","Data","Debugging","NPM","PIP","Registry","Packages","Management","GIS","Maps","HTML","CSS","Godot","Qgis","Blender","Computing","Configuration","Cluster","Workflows","Automation","CD/CI","Coding"]}),methods:{writeText(){const l=this.codingText.split("");this.codingText="",l.map((t,o)=>{setTimeout(()=>{this.codingText+=t},o*100+Math.random()*10)})},setText(){this.codingItems.map((l,t)=>{setTimeout(()=>{this.codingText=l,this.writeText()},6e3*(t+1))})}},created(){this.setText(),setInterval(()=>{this.setText()},24e4)}};function B(l,t,o,w,b,c){const V=v,$=C,m=T;return u(),d("div",null,[e($,{setIcon:"1",class:"main-banner"},{icon:n(()=>[e(V)]),text:n(()=>[s(k(l.codingText),1)]),_:1}),e(m,{height:"80",parameter:l.codingText.length*Math.random()+1,class:"wave-bottom"},null,8,["parameter"]),e(m,{height:"30",class:"clean",parameter:l.codingText.length*Math.random()+1},null,8,["parameter"]),e(_,{class:"center clean"},{default:n(()=>[e(g,{elevation:"0",style:{"background-color":"transparent"},class:"center maxWidth"},{default:n(()=>[e(p,{align:"center"},{default:n(()=>[e(i,null,{default:n(()=>[e(f,{class:"center",src:l.$getPicture("programming"),"min-width":"250","max-width":"400"},null,8,["src"])]),_:1}),e(i,null,{default:n(()=>[e(h,null,{default:n(()=>t[0]||(t[0]=[s(" Get the job done! ")])),_:1}),e(r,null,{default:n(()=>t[1]||(t[1]=[s(" We take advantage of existing technologies to utiliize their special powers and realize ideas step by step: ")])),_:1}),e(r,{class:"ml-4"},{default:n(()=>t[2]||(t[2]=[a("ul",null,[a("li",null,"Consulting"),a("li",null,"Conception"),a("li",null,"Requirements"),a("li",null,"Software Solution"),a("li",null,"Hardware Configuration")],-1)])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{class:"center"},{default:n(()=>[e(g,{elevation:"0",style:{"background-color":"transparent"},class:"center maxWidth"},{default:n(()=>[e(p,{align:"center"},{default:n(()=>[e(i,null,{default:n(()=>[e(h,null,{default:n(()=>t[3]||(t[3]=[s(" Thinking in tool context ")])),_:1}),e(r,null,{default:n(()=>t[4]||(t[4]=[s(" Our answer to complex requirements are optimized data structures combined with the right tools. Tools for special usecaes: ")])),_:1}),e(r,{class:"ml-4"},{default:n(()=>t[5]||(t[5]=[a("ul",null,[a("li",null,"Testing"),a("li",null,"Opertion"),a("li",null,"Development"),a("li",null,"Administration"),a("li",null,"Maintainance"),a("li",null,"Data management")],-1)])),_:1})]),_:1}),e(i,null,{default:n(()=>[e(f,{class:"center",src:l.$getPicture("graph"),"min-width":"250","max-width":"400"},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1})])}const R=x(P,[["render",B]]);export{R as default};
