(()=>{var e={};e.id=797,e.ids=[797],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},53349:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c});var n=r(70260),s=r(28203),a=r(25155),i=r.n(a),o=r(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["admin",{children:["prices",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7902)),"C:\\Users\\PC\\Desktop\\qr men\xfc son hali\\lila\\src\\app\\admin\\prices\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,35689)),"C:\\Users\\PC\\Desktop\\qr men\xfc son hali\\lila\\src\\app\\admin\\prices\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"C:\\Users\\PC\\Desktop\\qr men\xfc son hali\\lila\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\PC\\Desktop\\qr men\xfc son hali\\lila\\src\\app\\admin\\prices\\page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/admin/prices/page",pathname:"/admin/prices",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},45116:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},3260:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},842:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,16638,23)),Promise.resolve().then(r.bind(r,30998)),Promise.resolve().then(r.bind(r,12058))},40594:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,37882,23)),Promise.resolve().then(r.bind(r,22403)),Promise.resolve().then(r.bind(r,15974))},85906:(e,t,r)=>{Promise.resolve().then(r.bind(r,7902))},32762:(e,t,r)=>{Promise.resolve().then(r.bind(r,65434))},96487:()=>{},78335:()=>{},65434:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(45512),s=r(58009),a=r(22403);function i(){let[e,t]=(0,s.useState)(!1),r=async()=>{t(!0);try{let e=await fetch("/api/prices/update",{method:"POST"});if(!e.ok)throw Error("Fiyat g\xfcncelleme işlemi başarısız oldu");await e.json(),a.oR.success("Fiyatlar başarıyla g\xfcncellendi")}catch(e){console.error("Fiyat g\xfcncelleme hatası:",e),a.oR.error("Fiyat g\xfcncelleme işlemi sırasında bir hata oluştu")}finally{t(!1)}};return(0,n.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,n.jsx)("header",{className:"bg-white shadow",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:(0,n.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Fiyat G\xfcncelleme"})})}),(0,n.jsx)("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,n.jsxs)("div",{className:"bg-white shadow rounded-lg p-6",children:[(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-2",children:"MSSQL Fiyat G\xfcncelleme"}),(0,n.jsx)("p",{className:"text-gray-600",children:"Bu işlem, MSSQL veritabanından en g\xfcncel fiyatları \xe7ekecek ve men\xfcdeki \xfcr\xfcnlerin fiyatlarını g\xfcncelleyecektir."})]}),(0,n.jsx)("button",{onClick:r,disabled:e,className:`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${e?"opacity-50 cursor-not-allowed":""}`,children:e?"G\xfcncelleniyor...":"Fiyatları G\xfcncelle"})]})})]})}},15974:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(45512),s=r(58009);let a=()=>{let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{let e=localStorage.getItem("pwaPromptShown"),r=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://");a(r),e||r||setTimeout(()=>{t(!0)},2e3)},[]),!e||r)?null:(0,n.jsx)("div",{className:"fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200",children:(0,n.jsxs)("div",{className:"flex items-start justify-between",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:"Daha İyi Deneyim İ\xe7in"}),(0,n.jsx)("p",{className:"text-gray-600 text-sm mb-3",children:"Bu siteyi ana ekranınıza ekleyerek tam ekran deneyimi yaşayabilirsiniz"}),(0,n.jsxs)("div",{className:"space-y-2 text-sm text-gray-500",children:[(0,n.jsx)("p",{children:"Nasıl eklenir:"}),(0,n.jsx)("p",{children:'1. Tarayıcı men\xfcs\xfcnden (⋮) "Ana Ekrana Ekle"yi se\xe7in'}),(0,n.jsx)("p",{children:'2. A\xe7ılan pencerede "Ekle"ye dokunun'})]})]}),(0,n.jsx)("button",{onClick:()=>{t(!1),localStorage.setItem("pwaPromptShown","true")},className:"ml-4 text-gray-400 hover:text-gray-500",children:(0,n.jsx)("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})}},35689:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>n});let n={title:"Fiyat G\xfcncelleme - Lila Coffee & Bistro",description:"Lila Coffee & Bistro fiyat g\xfcncelleme sayfası"};function s({children:e}){return e}},7902:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Desktop\\\\qr men\xfc son hali\\\\lila\\\\src\\\\app\\\\admin\\\\prices\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Desktop\\qr men\xfc son hali\\lila\\src\\app\\admin\\prices\\page.tsx","default")},71354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>d,viewport:()=>c});var n=r(62740),s=r(85041),a=r.n(s);r(61135);var i=r(30998),o=r(79847),l=r(12058);let c={width:"device-width",initialScale:1,maximumScale:1,userScalable:!1,viewportFit:"cover"},d={title:"Lila QR Menu",description:"QR Menu Uygulaması",manifest:"/manifest.json",themeColor:"#000000",viewport:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content",other:{"mobile-web-app-capable":"yes","apple-mobile-web-app-capable":"yes","application-name":"QR Menu","apple-mobile-web-app-title":"QR Menu","apple-mobile-web-app-status-bar-style":"black-translucent","msapplication-starturl":"/","msapplication-navbutton-color":"#000000"}};function m({children:e}){return(0,n.jsxs)("html",{lang:"tr",children:[(0,n.jsxs)("head",{children:[(0,n.jsx)("link",{rel:"icon",href:"/logo.png"}),(0,n.jsx)("meta",{name:"application-name",content:"QR Menu"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-title",content:"QR Menu"}),(0,n.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000000",media:"(prefers-color-scheme: light)"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000000",media:"(prefers-color-scheme: dark)"}),(0,n.jsx)("meta",{name:"full-screen",content:"yes"}),(0,n.jsx)("meta",{name:"browsermode",content:"application"}),(0,n.jsx)("meta",{name:"screen-orientation",content:"portrait"}),(0,n.jsx)("meta",{name:"x5-fullscreen",content:"true"}),(0,n.jsx)("meta",{name:"x5-page-mode",content:"app"}),(0,n.jsx)("meta",{name:"msapplication-navbutton-color",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-starturl",content:"/"}),(0,n.jsx)("meta",{name:"mobile-agent",content:"format=html5"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"/icons/icon-192x192.png"})]}),(0,n.jsxs)("body",{className:a().className,children:[(0,n.jsx)(i.Toaster,{position:"top-center"}),(0,n.jsx)(l.default,{}),(0,n.jsx)("main",{className:"min-h-screen bg-gradient-to-br from-pink-50 via-white to-gray-50",children:e}),(0,n.jsx)(o.default,{id:"register-sw",strategy:"afterInteractive",children:`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js', {
                  scope: '/'
                }).then(registration => {
                  console.log('SW registered:', registration);
                }).catch(error => {
                  console.log('SW registration failed:', error);
                });
              });
            }

            // Tam ekran modunu zorla
            function enterFullScreen() {
              const doc = window.document;
              const docEl = doc.documentElement;

              const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
              
              if (requestFullScreen && !doc.fullscreenElement) {
                requestFullScreen.call(docEl);
              }
            }

            // Sayfa y\xfcklendiğinde ve kullanıcı etkileşiminde tam ekranı dene
            window.addEventListener('load', () => {
              document.addEventListener('click', enterFullScreen, { once: true });
              document.addEventListener('touchstart', enterFullScreen, { once: true });
            });
          `})]})]})}},12058:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Desktop\\\\qr men\xfc son hali\\\\lila\\\\src\\\\components\\\\AddToHomeScreen.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Desktop\\qr men\xfc son hali\\lila\\src\\components\\AddToHomeScreen.tsx","default")},70440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(88077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},61135:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[994,941,77],()=>r(53349));module.exports=n})();