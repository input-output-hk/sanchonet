"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[8512],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),b=r,f=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_label:"Start a SanchoNet node",title:"Start a SanchoNet node",sidebar_position:1,slug:"/tutorials/start-node"},i=void 0,l={unversionedId:"tutorials/start-a-node",id:"tutorials/start-a-node",title:"Start a SanchoNet node",description:"Download or build cardano-node and cardano-cli binaries:",source:"@site/docs/tutorials/start-a-node.mdx",sourceDirName:"tutorials",slug:"/tutorials/start-node",permalink:"/tutorials/start-node",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/start-a-node.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Start a SanchoNet node",title:"Start a SanchoNet node",sidebar_position:1,slug:"/tutorials/start-node"},sidebar:"docsSidebar",previous:{title:"Faucet",permalink:"/faucet"},next:{title:"File naming convention",permalink:"/tutorials/file-naming-convention"}},s={},d=[{value:"Download or build cardano-node and cardano-cli binaries:",id:"download-or-build-cardano-node-and-cardano-cli-binaries",level:3},{value:"Get configuration files",id:"get-configuration-files",level:3},{value:"Run the node",id:"run-the-node",level:3},{value:"Need help?",id:"need-help",level:3}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"download-or-build-cardano-node-and-cardano-cli-binaries"},"Download or build cardano-node and cardano-cli binaries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The latest version for SanchoNet is ",(0,r.kt)("strong",{parentName:"li"},"9.1.0"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/IntersectMBO/cardano-node/releases"},"See releases"),".")),(0,r.kt)("h3",{id:"get-configuration-files"},"Get configuration files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://book.world.dev.cardano.org/environments/sanchonet/config.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/topology.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/conway-genesis.json\n")),(0,r.kt)("h3",{id:"run-the-node"},"Run the node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-node run --topology topology.json \\\n--database-path db \\\n--socket-path node.socket \\\n--port 3001 \\\n--config config.json\n")),(0,r.kt)("h3",{id:"need-help"},"Need help?"),(0,r.kt)("p",null,"For a step-by-step tutorial on how to build and run a node please visit  ",(0,r.kt)("a",{parentName:"p",href:"https://cardano-course.gitbook.io/cardano-course/handbook/module-1-build-and-run-the-node/building-the-node"},"Cardano node course | Building and running the node"),"."))}p.isMDXComponent=!0}}]);