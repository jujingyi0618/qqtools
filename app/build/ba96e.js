!function(e){function t(t){for(var a,r,o=t[0],i=t[1],s=t[2],u=0,d=[];u<o.length;u++)r=o[u],l[r]&&d.push(l[r][0]),l[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(m&&m(t);d.length;)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==l[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={4:0},l={4:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{0:1,1:1,3:1,6:1,7:1,8:1,9:1,10:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var a={0:"8d4d5",1:"3944e",2:"ce61a",3:"20f47",6:"09449",7:"a134b",8:"fe867",9:"3de87",10:"a262d"}[e]+".css",l=o.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=(m=c[i]).getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(s===a||s===l))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){var m;if((s=(m=u[i]).getAttribute("data-href"))===a||s===l)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||l,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=l,document.getElementsByTagName("head")[0].appendChild(d)}).then(function(){r[e]=0}));var n=l[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=l[e]=[t,a]});t.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+""+{0:"8d4d5",1:"3944e",2:"ce61a",3:"20f47",6:"09449",7:"a134b",8:"fe867",9:"3de87",10:"a262d"}[e]+".js"}(e),c=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=l[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}l[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:i})},12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var m=s;c.push([189,5]),n()}({110:function(e,t,n){"use strict";t.a={indexeddb:{name:"qqtools",version:10,objectStore:[{name:"option",key:"name",data:[{name:"time",index:"time"}]},{name:"memberId",key:"memberId",data:[{name:"memberName",index:"memberName"}]},{name:"loginInformation",key:"key"}]}}},150:function(e,t,n){e.exports={loading:"_2ntQ2"}},156:function(e){e.exports={name:"qqtools2",version:"3.0.0-beta.8",description:"QQ群工具，配合酷Q使用。",license:"GNU General Public License v3.0",scripts:{dll:"milktea dll",start:"npm run clean:build && cross-env NODE_ENV=development milktea start",build:"npm run clean:build && cross-env NODE_ENV=production milktea build","clean:build":"rimraf ./build","npm:i":"npm install --production","yarn:i":"yarn install --production=true --pure-lockfile",clean:'node-modules-clean --ext ".opts|.map|.ts|.yml|.png|.dot|.jpg" --file "test.js"',eslint:"eslint ./src --fix","case-check":'case-check --dir="./src" --css',update:"milktea update"},main:"./build/index.html",nodejs:!0,window:{title:"QQ群工具-酷Q（v3.0.0-beta.8）",position:"center",toolbar:!0,frame:!0,width:1200,height:600,fullscreen:!1,show_in_taskbar:!0,icon:"./titleBarIcon.png"},author:{name:"段昊辰",email:"duanhaochen@126.com",url:"https://github.com/duan602728596"},dependencies:{"md5.js":"^1.3.5",mysql:"^2.17.1","node-schedule":"^1.3.2",request:"^2.88.0"},devDependencies:{"@48/time-string-parse":"github:duan602728596/time-string-parse","@sweet/milktea":"github:duan602728596/sweet#build-milktea","@sweet/milktea-cli":"github:duan602728596/sweet#build-milktea-cli","@sweet/util-tools":"github:duan602728596/sweet#build-util-tools",antd:"^3.16.3","babel-eslint":"^10.0.1","babel-plugin-import":"^1.11.0",classnames:"^2.2.6",commitizen:"^3.1.1","core-js":"^3.0.1","cross-env":"^5.2.0","cz-conventional-changelog":"^2.1.0","es-module-path-case-check":"^1.4.0",eslint:"^5.16.0","eslint-plugin-react":"^7.12.4",husky:"^1.3.1",immutable:"^4.0.0-rc.12","indexeddb-tools":"^3.0.0","indexeddb-tools-redux":"^3.0.0",jquery:"^3.4.0","lint-staged":"^8.1.5","lodash-es":"^4.17.11",moment:"^2.24.0","pre-commit":"^1.2.2","prop-types":"^15.7.2",react:"^16.8.6","react-dom":"^16.8.6","react-redux":"^7.0.2","react-router-dom":"^5.0.0",redux:"^4.0.1","redux-actions":"^2.6.5","redux-immutable":"^4.0.0","redux-thunk":"^2.3.0",reselect:"^4.0.0",rimraf:"^2.6.3","worker-loader":"^2.0.0"},peerDependencies:{"node-modules-clean":"^0.1.1"},husky:{hooks:{"pre-commit":"lint-staged"}},config:{commitizen:{path:"./app/node_modules/cz-conventional-changelog"}}}},167:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(20),r=n.n(a),l=n(151),c=n.n(l),o=n(110);const{indexeddb:i}=o.a;r()(i.name,i.version,{success(e){this.close()},upgradeneeded(e){const t=i.objectStore;for(let n=0,a=t.length;n<a;n++){const{name:e,key:a,data:r}=t[n];this.hasObjectStore(e)||this.createObjectStore(e,a,r)}this.close()}});const s=new c.a(i.name,i.version)},189:function(e,t,n){e.exports=n(297)},253:function(e,t,n){e.exports=n.p+"c55ea.webp"},254:function(e,t,n){e.exports=n.p+"308c3.webp"},255:function(e,t,n){e.exports=n.p+"7fd39.webp"},256:function(e,t,n){e.exports=n.p+"e55fd.webp"},291:function(e,t,n){"use strict";(function(e){n(292);var t=n(157),a=n(156);const r=e.require("request"),{version:l}=a,c="https://raw.githubusercontent.com/duan602728596/qqtools/master/app/package.json",o=localStorage.getItem("upgradeReminder");"true"!==o&&o||r({uri:c},function(e,n,a){const r=JSON.parse(a);l!==r.version&&t.a.warning({message:"软件版本已更新",description:`软件版本已更新，请及时下载。📌当前版本：${l}。📡最新版本：${r.version}。`,duration:5})})}).call(this,n(27))},297:function(e,t,n){"use strict";n.r(t);n(190);var a=n(159),r=n(0),l=n.n(r),c=n(13),o=n(7),i=n(102),s=n(32),u=n(65),m=(n(181),n(128)),d=n(150),p=n.n(d);var f=function(e){return l.a.createElement("div",{className:p.a.loading},l.a.createElement(m.a,{size:"large",tip:"Loading..."}))};const h=l.a.createElement(f,null);var b=function(e){const t=Object(r.lazy)(e);return()=>l.a.createElement(r.Suspense,{fallback:h},l.a.createElement(t,{injectReducers:u.b}))},g=(n(222),n(154)),E=n(52),v=n.n(E),y=(n(229),n(19)),x=n(4),k=n.n(x),w=(n(167),n(31)),N=(n(176),n(121)),j=(n(177),n(48));var _=function(e){return l.a.createElement(N.a,{type:"flex",align:"top",justify:"start"},l.a.createElement(j.a,{xl:4,lg:4,md:6,sm:8,xs:12},l.a.createElement("dl",{className:k.a.linkGroup},l.a.createElement("dt",{className:k.a.bTest},l.a.createElement(o.b,{to:"/Login",title:"QQ登录"},l.a.createElement("img",{src:n(253),alt:"QQ登录"}))),l.a.createElement("dd",null,l.a.createElement(o.b,{to:"/Login"},"QQ登录")))),l.a.createElement(j.a,{xl:4,lg:4,md:6,sm:8,xs:12},l.a.createElement("dl",{className:k.a.linkGroup},l.a.createElement("dt",{className:k.a.bTest},l.a.createElement(o.b,{to:"/Option",title:"群功能配置"},l.a.createElement("img",{src:n(254),alt:"群功能配置"}))),l.a.createElement("dd",null,l.a.createElement(o.b,{to:"/Option"},"群功能配置")))),l.a.createElement(j.a,{xl:4,lg:4,md:6,sm:8,xs:12},l.a.createElement("dl",{className:k.a.linkGroup},l.a.createElement("dt",{className:k.a.bTest},l.a.createElement(o.b,{to:"/KouDai48",title:"口袋48登录和房间ID查询"},l.a.createElement("img",{src:n(255),alt:"口袋48登录和房间ID查询"}))),l.a.createElement("dd",null,l.a.createElement(o.b,{to:"/KouDai48"},"口袋48登录和房间ID查询")))),l.a.createElement(j.a,{xl:4,lg:4,md:6,sm:8,xs:12},l.a.createElement("dl",{className:k.a.linkGroup},l.a.createElement("dt",{className:k.a.bTest},l.a.createElement(o.b,{to:"/Help",title:"帮助"},l.a.createElement("img",{src:n(256),alt:"帮助"}))),l.a.createElement("dd",null,l.a.createElement(o.b,{to:"/Help"},"帮助")))))};var q=function(e){const t=localStorage.getItem("upgradeReminder"),[n,a]=Object(r.useState)("true"===t||!t);return l.a.createElement("div",{className:k.a.body},l.a.createElement("h1",{className:k.a.title},"QQ群工具"),l.a.createElement("p",{className:k.a.text},"本软件遵循",l.a.createElement("b",null,"GNU General Public License v3.0"),"许可证，非商用，如有问题请发送到邮箱duanhaochen@126.com。"),l.a.createElement("p",{className:k.a.text},"源代码托管地址：",l.a.createElement(y.a,{type:"github",theme:"filled"}),l.a.createElement("a",{className:k.a.url,onClick:v()(w.b).call(w.b,this,"https://github.com/duan602728596/qqtools")},"https://github.com/duan602728596/qqtools"),"。"),l.a.createElement("p",{className:k.a.text},"酷Q下载地址：",l.a.createElement(y.a,{type:"qq",theme:"outlined"}),l.a.createElement("a",{className:k.a.url,onClick:v()(w.b).call(w.b,this,"https://cqp.cc/")},"https://cqp.cc/"),"。"),l.a.createElement("p",{className:k.a.text},"coolq-http-api：",l.a.createElement(y.a,{type:"build",theme:"filled"}),l.a.createElement("a",{className:k.a.url,onClick:v()(w.b).call(w.b,this,"https://github.com/richardchien/coolq-http-api/releases")},"https://github.com/richardchien/coolq-http-api/releases"),"。"),l.a.createElement("div",{className:k.a.update},l.a.createElement(g.a,{checked:n,onChange:function(e){localStorage.setItem("upgradeReminder",String(!n)),a(!n)}}),l.a.createElement("label",{className:k.a.updateLabel},"软件升级提醒")),l.a.createElement(_,null))};var O=class extends r.Component{render(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",component:q,exact:!0}))}};const S=b(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,631))),D=b(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(9),n.e(7)]).then(n.bind(null,633))),Q=b(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(8)]).then(n.bind(null,634))),P=b(()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,636)));var I=class extends r.Component{render(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",component:O,exact:!0}),l.a.createElement(s.a,{path:"/Login",component:S}),l.a.createElement(s.a,{path:"/Option",component:D}),l.a.createElement(s.a,{path:"/KouDai48",component:Q}),l.a.createElement(s.a,{path:"/Help",component:P}))}},T=n(158),L=n.n(T);n(291);Object(c.render)(l.a.createElement(i.a,{store:Object(u.c)(window.__INITIAL_STATE__||{})},l.a.createElement(a.a,{locale:L.a},l.a.createElement(o.a,null,l.a.createElement(I,null)))),document.getElementById("app"))},298:function(e,t){e.exports=window.jQuery},31:function(e,t,n){"use strict";(function(e,a){n.d(t,"f",function(){return u}),n.d(t,"e",function(){return m}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return h});var r=n(119),l=n.n(r),c=n(71),o=n.n(c);const i=e.require("nw.gui");function s(e){return e<10?`0${e}`:`${e}`}function u(e,t){const n=t?new Date(t):new Date,a=n.getFullYear(),r=n.getMonth()+1,l=n.getDate(),c=n.getHours(),o=n.getMinutes(),i=n.getSeconds();return e.replace(/Y{2}/,`${a}`).replace(/M{2}/,s(r)).replace(/D{2}/,s(l)).replace(/h{2}/,s(c)).replace(/m{2}/,s(o)).replace(/s{2}/,s(i))}function m(e,t){return e.replace(/{{\s*[a-zA-Z0-9_]+\s*}}/g,e=>{const n=e.match(/[a-zA-Z0-9_]+/g);return n&&n[0]in t?t[n[0]]:""})}function d(e){const t=e.replace(/\s+/g,"").split(/\s*[,，]\s*/g);for(let n=t.length-1;n>=0;n--)(""===t[n]||/^[0-9]+$/.test(t[n]))&&o()(t).call(t,n,1);return 0===t.length?null:new RegExp(`(${t.join("|")})`)}function p(e){const t=e.replace(/\s+/g,"").split(/\s*[,，]\s*/g),n=[];for(let a=t.length-1;a>=0;a--)/^[0-9]+$/.test(t[a])&&n.push(Number(t[a]));return n}function f(e,t){t.preventDefault(),i.Shell.openExternal(e)}function h(t){const n=e.require.resolve(t);var r,c;a.parent&&o()(r=a.parent.children).call(r,l()(c=a.parent.children).call(c,t),1);e.require.cache[n]=null}}).call(this,n(27),n(124)(e))},4:function(e,t,n){e.exports={body:"_2yP2b",title:"_2xuyS",text:"_37xzN",url:"_RgWKd",linkGroup:"_3Fno8",bTest:"_2XszL",update:"_2MUK5",updateLabel:"_2yqBv"}},65:function(e,t,n){"use strict";var a=n(125),r=n.n(a),l=n(34),c=n(148),o=n(43),i=n(149);const s={};function u(e){return Object(i.combineReducers)({...s,...e})}n.d(t,"c",function(){return f}),n.d(t,"b",function(){return h});const m=u({}),d=Object(l.a)(c.a),p={asyncReducers:{}};function f(e={}){const t=Object(o.fromJS)(e),n=Object(o.Map)(t);return r()(p,Object(l.d)(m,n,Object(l.c)(d))),p}t.a=p;function h(e){for(const t in e){const n=e[t];t in p.asyncReducers||(p.asyncReducers[t]=n)}p.replaceReducer(u(p.asyncReducers))}}});