if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>l(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutPage-BGBA78qZ.js",revision:null},{url:"assets/AlphaTemplate-8UrH9svN.css",revision:null},{url:"assets/AlphaTemplate-CKVslp4u.js",revision:null},{url:"assets/ContactPage-DJ8PkSMy.js",revision:null},{url:"assets/ContactPage-DxjQ6BuB.css",revision:null},{url:"assets/DefaultLayout-CAbaqxdC.js",revision:null},{url:"assets/DefaultLayout-DLh8z6lf.css",revision:null},{url:"assets/favicon-CeOiUhVB.ico",revision:null},{url:"assets/index-D9fUokjk.css",revision:null},{url:"assets/index-mXeJp6dH.js",revision:null},{url:"assets/LandingPage-BXndWAAc.js",revision:null},{url:"assets/LoggingPage-Bthq5VWy.js",revision:null},{url:"assets/LoggingPage-C7aKOSI4.css",revision:null},{url:"assets/navigation-drawer-bg-VTzAq5zY.png",revision:null},{url:"assets/ServicePage-7ib-1hWK.js",revision:null},{url:"assets/VRow-BuHvGLEG.css",revision:null},{url:"assets/VRow-BzenQjkB.js",revision:null},{url:"assets/webfontloader-DybGbmHg.js",revision:null},{url:"index.html",revision:"49023cbcda634746bdd3d26d6350d671"},{url:"registerSW.js",revision:"c59f69a97e2e064aad24de3ebfc9ea47"},{url:"manifest.webmanifest",revision:"cbb089fcc5ac252cdfa1b60cdf4af867"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
