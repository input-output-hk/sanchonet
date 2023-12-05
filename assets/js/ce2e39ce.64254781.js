"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[702],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={description:'Tools and resources"',title:"Tools and resources",sidebar_position:1},i=void 0,l={unversionedId:"tools-resources/resources",id:"tools-resources/resources",title:"Tools and resources",description:'Tools and resources"',source:"@site/docs/tools-resources/resources.mdx",sourceDirName:"tools-resources",slug:"/tools-resources/resources",permalink:"/tools-resources/resources",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tools-resources/resources.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:'Tools and resources"',title:"Tools and resources",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"CLI queries",permalink:"/tutorials/cli queries"},next:{title:"Conway ledger era FAQs",permalink:"/tools-resources/faq"}},s={},c=[{value:"Node",id:"node",level:3},{value:"Ledger",id:"ledger",level:3},{value:"DB-Sync",id:"db-sync",level:3},{value:"Wallets/CIP-95",id:"walletscip-95",level:3},{value:"Cardano Serialization Library (Conway Alpha) - Emurgo",id:"cardano-serialization-library-conway-alpha---emurgo",level:3},{value:"Built by the community",id:"built-by-the-community",level:2},{value:"Tools from the community:",id:"tools-from-the-community",level:3},{value:"Guides from the community:",id:"guides-from-the-community",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Last update: 2023-12-01")),(0,n.kt)("h3",{id:"node"},"Node"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/releases"},"Latest node releases"))),(0,n.kt)("h3",{id:"ledger"},"Ledger"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/blob/master/CIP-1694/README.md"},"CIP-1694 | A first step towards on-chain decentralized governance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/blob/master/eras/conway/impl/cddl-files/conway.cddl"},"Draft Conway design CDDL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/issues?q=is%3Aissue+is%3Aopen+label%3Aconway"},"Conway ledger backlog"))),(0,n.kt)("h3",{id:"db-sync"},"DB-Sync"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/releases/tag/sancho-2-3-0-docker"},"Sancho-2-3-0-docker build")," (contains sancho-2-3-0 Docker image fix)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/kderme/33174fdb2cba360ff6b5da72bd961bd8#200"},"Sancho-2-X-X ChangeLog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/blob/sancho-2-3-0/doc/schema.md"},"Sancho-2-3-0 schema docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/tree/sancho-2-3-0/schema"},"Sancho-2-3-0 Postgres migrations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/kderme/2ab2f79fcdc159be3465bae9b7df78e7"},"Note on naming scheme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/blob/blog/blog/blog.pdf"},"Blog post on speeding up DB-Sync"))),(0,n.kt)("h3",{id:"walletscip-95"},"Wallets/CIP-95"),(0,n.kt)("p",null,"CIP-95 is the governance extension to the CIP-30 wallet-DApp bridge."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md"},"CIP-0095 | Web-wallet bridge \u2013 governance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ryun1.github.io/cip95-cardano-wallet-connector/"},"Demos CIP-95 test DApp hosted")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Ryun1/cip95-cardano-wallet-connector"},"Demos DApp source code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Ryun1/cip95-demos-wallet"},"Demos CIP-95 prototype wallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/berry-pool/nami/pull/852"},"WIP Nami CIP-95 PR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/blob/master/CIP-0105/README.md"},"CIP-0105 | Conway era key chains for HD wallets"))),(0,n.kt)("h3",{id:"cardano-serialization-library-conway-alpha---emurgo"},"Cardano Serialization Library (Conway Alpha) - Emurgo"),(0,n.kt)("p",null,"This is an Alpha build and the team are keen to hear feedback via ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Emurgo/cardano-serialization-lib/issues"},"Github Issues"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-browser/v/12.0.0-alpha.13"},"https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-browser/v/12.0.0-alpha.13")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-nodejs/v/12.0.0-alpha.13"},"https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-nodejs/v/12.0.0-alpha.13")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-asmjs/v/12.0.0-alpha.13"},"https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-asmjs/v/12.0.0-alpha.13")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/cardano-serialization-lib/12.0.0-alpha.13"},"https://crates.io/crates/cardano-serialization-lib/12.0.0-alpha.13"))),(0,n.kt)("h2",{id:"built-by-the-community"},"Built by the community"),(0,n.kt)("p",null,"Disclaimer: These tools and guides are created by the community and are not supported directly. Please refer any issues to the author."),(0,n.kt)("h3",{id:"tools-from-the-community"},"Tools from the community:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blockfrost.io"},"Blockfrost.io"),": the leading Cardano API-as-a-Service, which also provides access to the SanchoNet testing network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nufi-official/nufi#cardano-sanchonet-build"},"NuFi Wallet CIP-95/ SanchoNet Compatible Build"),": the first community CIP-95 wallet build."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CardanoSolutions/ogmios/releases/tag/v6.0.0-rc4"},"Ogmios Conway Release Candidate"),": is a lightweight bridge interface for cardano-node. It provides an HTTP / WebSocket API that enables applications to interact with a local cardano-node via JSON+RPC-2.0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gitmachtl/cardano-signer"},"Cardano-Signer"),": Open-Source multifunction tool, which can sign&verify data. Can also be used for Key-Generation, like dRep-Keys with Mnemonic-Support."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://adanordic.com"},"Adanordic.com"),": A work-in-progress rudimentary governance related explorer.")),(0,n.kt)("h3",{id:"guides-from-the-community"},"Guides from the community:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Eysteinh (NBX)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=9CR8c9ZIVEE"},"Sancho Panza: Navigating Cardano's Testnet Frontier")),(0,n.kt)("td",{parentName:"tr",align:null},"2023-08-14")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mike Hornan (ABLE)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.youtube.com/playlist?list=PLWYf5eQbRdbWa5n21tyy8xWpTS6zjm3Mj"},"Sancho Testnet Guides and Command Line Interface")),(0,n.kt)("td",{parentName:"tr",align:null},"2023-10-02")))))}m.isMDXComponent=!0}}]);