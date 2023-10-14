"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,y=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Generate committee keys",title:"Generate committee member keys and certificates",sidebar_position:8,slug:"/tutorials/committee"},o=void 0,c={unversionedId:"tutorials/committee",id:"tutorials/committee",title:"Generate committee member keys and certificates",description:"Committee member cold keys",source:"@site/docs/tutorials/committee.mdx",sourceDirName:"tutorials",slug:"/tutorials/committee",permalink:"/tutorials/committee",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/committee.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Generate committee keys",title:"Generate committee member keys and certificates",sidebar_position:8,slug:"/tutorials/committee"},sidebar:"docsSidebar",previous:{title:"Delegate votes to a DRep",permalink:"/tutorials/delegate-to-drep"},next:{title:"Create governance actions",permalink:"/tutorials/actions"}},l={},s=[{value:"Committee member cold keys",id:"committee-member-cold-keys",level:2},{value:"Generate the cold verification key hash:",id:"generate-the-cold-verification-key-hash",level:3},{value:"Hot key pair and authorization certificate",id:"hot-key-pair-and-authorization-certificate",level:2}],m={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"committee-member-cold-keys"},"Committee member cold keys"),(0,i.kt)("p",null,"Individuals who are to be nominated as committee members are required to generate a ",(0,i.kt)("em",{parentName:"p"},"cold")," key pair. This requirement stems from the necessity to include the cold verification key (or its hash) in the governance action supporting their proposal. The term 'cold key pair' is used to emphasize its intentional storage in a secure, offline environment, which may include safeguarded USB drives, isolated computing machines, or similar devices deliberately disconnected from the internet for enhanced security."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cardano-cli conway governance committee key-gen-cold \\\n    --cold-verification-key-file cc-cold.vkey \\\n    --cold-signing-key-file cc-cold.skey\n")),(0,i.kt)("h3",{id:"generate-the-cold-verification-key-hash"},"Generate the cold verification key hash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cardano-cli conway governance committee key-hash \\\n    --verification-key-file cc-cold.vkey > cc-key.hash\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat cc-key.hash\n89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de\n")),(0,i.kt)("p",null,"The key hash would be typically used in the ",(0,i.kt)("strong",{parentName:"p"},"update committee")," governance action that attempts to add or remove CC members."),(0,i.kt)("h2",{id:"hot-key-pair-and-authorization-certificate"},"Hot key pair and authorization certificate"),(0,i.kt)("p",null,"After new committee members have been ratified by a governance action, the new committee members are required to generate a ",(0,i.kt)("em",{parentName:"p"},"hot key pair")," and issue\na ",(0,i.kt)("em",{parentName:"p"},"hot key authorization certificate"),". This enables them to cast votes by signing their transactions with their ",(0,i.kt)("em",{parentName:"p"},"hot")," signing key while keeping their cold\nkeys securely stored in cold storage. In the event that the ",(0,i.kt)("em",{parentName:"p"},"hot")," keys are compromised at any point, the committee member must generate a new hot key pair and issue\na new hot key authorization certificate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cardano-cli conway governance committee key-gen-hot \\\n    --verification-key-file cc-hot.vkey \\\n    --signing-key-file cc-hot.skey\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"conway governance committee create-hot-key-authorization-certificate \\\n    --cold-verification-key-file cc-cold.vkey \\\n    --hot-key-file cc-hot.vkey \\\n    --out-file cc-hot-key-authorization.cert\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Submit the authorization certificate in a transaction:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cardano-cli conway transaction build \\\n  --testnet-magic 4 \\\n  --tx-in "$(cardano-cli query utxo --address "$(cat payment.addr)" --testnet-magic 4 --out-file /dev/stdout | jq -r \'keys[0]\')" \\\n  --change-address payment.addr \\\n  --certificate-file cc-hot-key-authorization.cert \\\n  --witness-override 2 \\\n  --out-file tx.raw\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cardano-cli conway transaction sign \\\n  --testnet-magic 4 \\\n  --tx-body-file tx.raw \\\n  --signing-key-file payment.skey \\\n  --signing-key-file cc-cold.skey \\\n  --out-file tx.signed\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cardano-cli conway transaction submit \\\n  --testnet-magic 4 \\\n  --tx-file tx.signed\n")))}p.isMDXComponent=!0}}]);