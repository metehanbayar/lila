(()=>{var e={};e.id=856,e.ids=[856],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79748:e=>{"use strict";e.exports=require("fs/promises")},33873:e=>{"use strict";e.exports=require("path")},63050:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>N,routeModule:()=>k,serverHooks:()=>q,workAsyncStorage:()=>v,workUnitAsyncStorage:()=>R});var s={};t.r(s),t.d(s,{DELETE:()=>w,PUT:()=>g,dynamic:()=>l,preferredRegion:()=>m,revalidate:()=>x,runtime:()=>h});var n=t(42706),a=t(28203),o=t(45994),i=t(39187),u=t(79748),p=t.n(u),c=t(33873),d=t.n(c);let l="force-dynamic",x=0,h="nodejs",m="auto",f=d().join(process.cwd(),"data","products.json");async function y(){try{let e=await p().readFile(f,"utf-8");return JSON.parse(e)}catch(e){return console.error("\xdcr\xfcnleri okuma hatası:",e),[]}}async function j(e){try{await p().writeFile(f,JSON.stringify(e,null,2))}catch(e){throw console.error("\xdcr\xfcnleri kaydetme hatası:",e),e}}async function w(e){try{let r=e.nextUrl.pathname.split("/").pop(),t=await y(),s=t.findIndex(e=>e.id===r);if(-1===s)return i.NextResponse.json({error:"\xdcr\xfcn bulunamadı"},{status:404});return t.splice(s,1),await j(t),i.NextResponse.json({success:!0})}catch(e){return console.error("\xdcr\xfcn silme hatası:",e),i.NextResponse.json({error:"\xdcr\xfcn silinirken bir hata oluştu"},{status:500})}}async function g(e){try{let r=e.nextUrl.pathname.split("/").pop(),t=await e.json(),s=await y(),n=s.findIndex(e=>e.id===r);if(-1===n)return i.NextResponse.json({error:"\xdcr\xfcn bulunamadı"},{status:404});return s[n]={...s[n],...t},await j(s),i.NextResponse.json(s[n])}catch(e){return console.error("\xdcr\xfcn g\xfcncelleme hatası:",e),i.NextResponse.json({error:"\xdcr\xfcn g\xfcncellenirken bir hata oluştu"},{status:500})}}let k=new n.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/products/[id]/route",pathname:"/api/products/[id]",filename:"route",bundlePath:"app/api/products/[id]/route"},resolvedPagePath:"C:\\Users\\PC\\Desktop\\qr men\xfc son hali\\lila\\src\\app\\api\\products\\[id]\\route.ts",nextConfigOutput:"standalone",userland:s}),{workAsyncStorage:v,workUnitAsyncStorage:R,serverHooks:q}=k;function N(){return(0,o.patchFetch)({workAsyncStorage:v,workUnitAsyncStorage:R})}},96487:()=>{},78335:()=>{}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[994,452],()=>t(63050));module.exports=s})();