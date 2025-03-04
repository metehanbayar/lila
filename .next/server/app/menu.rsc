1:"$Sreact.fragment"
2:I[5037,["37","static/chunks/37-e7242401347746a7.js","177","static/chunks/app/layout-31728371a4103d1b.js"],"Toaster"]
3:I[5230,["37","static/chunks/37-e7242401347746a7.js","177","static/chunks/app/layout-31728371a4103d1b.js"],"default"]
4:I[5244,[],""]
5:I[3866,[],""]
6:I[3704,["37","static/chunks/37-e7242401347746a7.js","177","static/chunks/app/layout-31728371a4103d1b.js"],""]
8:I[7033,[],"ClientPageRoot"]
9:I[2597,["904","static/chunks/app/menu/page-b354fcdfd2255a57.js"],"default"]
c:I[6213,[],"OutletBoundary"]
e:I[6213,[],"MetadataBoundary"]
10:I[6213,[],"ViewportBoundary"]
12:I[4835,[],""]
:HL["/_next/static/css/da42dad5ad6d372a.css","style"]
7:T504,
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

            // Sayfa yüklendiğinde ve kullanıcı etkileşiminde tam ekranı dene
            window.addEventListener('load', () => {
              document.addEventListener('click', enterFullScreen, { once: true });
              document.addEventListener('touchstart', enterFullScreen, { once: true });
            });
          0:{"P":null,"b":"PiUePKtWeJ3ioGZ31WgGX","p":"","c":["","menu"],"i":false,"f":[[["",{"children":["menu",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/da42dad5ad6d372a.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"tr","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","href":"/logo.png"}],["$","meta",null,{"name":"application-name","content":"QR Menu"}],["$","meta",null,{"name":"apple-mobile-web-app-capable","content":"yes"}],["$","meta",null,{"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"}],["$","meta",null,{"name":"apple-mobile-web-app-title","content":"QR Menu"}],["$","meta",null,{"name":"mobile-web-app-capable","content":"yes"}],["$","meta",null,{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content"}],["$","meta",null,{"name":"theme-color","content":"#000000","media":"(prefers-color-scheme: light)"}],["$","meta",null,{"name":"theme-color","content":"#000000","media":"(prefers-color-scheme: dark)"}],["$","meta",null,{"name":"full-screen","content":"yes"}],["$","meta",null,{"name":"browsermode","content":"application"}],["$","meta",null,{"name":"screen-orientation","content":"portrait"}],["$","meta",null,{"name":"x5-fullscreen","content":"true"}],["$","meta",null,{"name":"x5-page-mode","content":"app"}],["$","meta",null,{"name":"msapplication-navbutton-color","content":"#000000"}],["$","meta",null,{"name":"msapplication-starturl","content":"/"}],["$","meta",null,{"name":"mobile-agent","content":"format=html5"}],["$","link",null,{"rel":"apple-touch-icon","href":"/icons/icon-192x192.png"}]]}],["$","body",null,{"className":"__className_d65c78","children":[["$","$L2",null,{"position":"top-center"}],["$","$L3",null,{}],["$","main",null,{"className":"min-h-screen bg-gradient-to-br from-pink-50 via-white to-gray-50","children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[],[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$L6",null,{"id":"register-sw","strategy":"afterInteractive","children":"$7"}]]}]]}]]}],{"children":["menu",["$","$1","c",{"children":[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","menu","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","$L8",null,{"Component":"$9","searchParams":{},"params":{},"promises":["$@a","$@b"]}],null,["$","$Lc",null,{"children":"$Ld"}]]}],{},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,["$","$1","rComifLoia1F8Y7m-wjco",{"children":[["$","$Le",null,{"children":"$Lf"}],["$","$L10",null,{"children":"$L11"}],null]}]]}],false]],"m":"$undefined","G":["$12","$undefined"],"s":false,"S":true}
a:{}
b:{}
11:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"}]]
f:[["$","meta","0",{"charSet":"utf-8"}],["$","title","1",{"children":"Menü - Lila Coffee & Bistro"}],["$","meta","2",{"name":"description","content":"Lila Coffee & Bistro menü sayfası"}],["$","link","3",{"rel":"manifest","href":"/manifest.json","crossOrigin":"$undefined"}],["$","meta","4",{"name":"mobile-web-app-capable","content":"yes"}],["$","meta","5",{"name":"apple-mobile-web-app-capable","content":"yes"}],["$","meta","6",{"name":"application-name","content":"QR Menu"}],["$","meta","7",{"name":"apple-mobile-web-app-title","content":"QR Menu"}],["$","meta","8",{"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"}],["$","meta","9",{"name":"msapplication-starturl","content":"/"}],["$","meta","10",{"name":"msapplication-navbutton-color","content":"#000000"}],["$","link","11",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}]]
d:null
