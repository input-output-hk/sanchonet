"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[3584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Voting as Multisignature DRep",title:"Voting on governance actions as a multisignature DRep",sidebar_position:10.1,slug:"/tutorials/vote-multisig-drep"},i=void 0,s={unversionedId:"tutorials/vote-actions-multisig-drep",id:"tutorials/vote-actions-multisig-drep",title:"Voting on governance actions as a multisignature DRep",description:"Pre-requisites",source:"@site/docs/tutorials/vote-actions-multisig-drep.mdx",sourceDirName:"tutorials",slug:"/tutorials/vote-multisig-drep",permalink:"/tutorials/vote-multisig-drep",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/vote-actions-multisig-drep.mdx",tags:[],version:"current",sidebarPosition:10.1,frontMatter:{sidebar_label:"Voting as Multisignature DRep",title:"Voting on governance actions as a multisignature DRep",sidebar_position:10.1,slug:"/tutorials/vote-multisig-drep"},sidebar:"docsSidebar",previous:{title:"Voting on actions",permalink:"/tutorials/vote-action"},next:{title:"Useful jq filters",permalink:"/tutorials/jq-filters"}},l={},c=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Verify the content of the governance action",id:"verify-the-content-of-the-governance-action",level:3},{value:"Create the vote file",id:"create-the-vote-file",level:3},{value:"Include the vote in a transaction",id:"include-the-vote-in-a-transaction",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Payment key pair"),(0,r.kt)("li",{parentName:"ul"},"Address with funds"),(0,r.kt)("li",{parentName:"ul"},"Multisignature DRep. See ",(0,r.kt)("a",{parentName:"li",href:"/tutorials/multisig-drep-registration"},"Register multisig DRep")),(0,r.kt)("li",{parentName:"ul"},"A SanchoNet node")),(0,r.kt)("p",null,"To vote on governance actions, follow this process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtain the action ID of an ongoing governance action from Discord or query the governance state."),(0,r.kt)("li",{parentName:"ol"},"Determine your voting stance; engage in discussion if required"),(0,r.kt)("li",{parentName:"ol"},"Construct your vote file through the Cardano CLI. The example below demonstrates voting ",(0,r.kt)("inlineCode",{parentName:"li"},"--yes"),", although options for ",(0,r.kt)("inlineCode",{parentName:"li"},"--no")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--abstain")," are also available.")),(0,r.kt)("h3",{id:"verify-the-content-of-the-governance-action"},"Verify the content of the governance action"),(0,r.kt)("p",null,"Assume that we have been given the action ID ",(0,r.kt)("inlineCode",{parentName:"p"},"df58f714c0765f3489afb6909384a16c31d600695be7e86ff9c59cf2e8a48c79#0")," for a new constitution proposal."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtain the URL and hash of the new constitution proposal from the governance state:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 | \\\njq -r --arg govActionId \"df58f714c0765f3489afb6909384a16c31d600695be7e86ff9c59cf2e8a48c79\" '.proposals | to_entries[] | select(.value.actionId.txId | contains($govActionId)) | .value'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "action": {\n    "contents": [\n      null,\n      {\n        "anchor": {\n          "dataHash": "5d372dca1a4cc90d7d16d966c48270e33e3aa0abcb0e78f0d5ca7ff330d2245d",\n          "url": "https://tinyurl.com/mr3ferf9"\n        }\n      }\n    ],\n    "tag": "NewConstitution"\n  },\n  "actionId": {\n    "govActionIx": 0,\n    "txId": "df58f714c0765f3489afb6909384a16c31d600695be7e86ff9c59cf2e8a48c79"\n  },\n  "committeeVotes": {\n    "keyHash-c8ac605b25d6084c2ceb28043c8f01b62629966d038a249c7847d66d": "VoteYes",\n    "keyHash-d13507f7e7fb8ac3ce2094187c9d99d4601021e9ef5a5f310567765d": "VoteYes"\n  },\n  "dRepVotes": {\n    "keyHash-16faaf6daa2635bbf53bbbaf38b3a6040adf7ced2f7f08952592cf5b": "VoteYes",\n    "keyHash-57cb90cfb635e76af648abf1b6a91519218a5919b3cba2527e3725d1": "VoteYes",\n    "keyHash-7d84808d563f0f258ad7e4337c2c4bd13010930ebdf7b86c3bfd9ef8": "VoteYes"\n  },\n  "deposit": 0,\n  "expiresAfter": 80,\n  "proposedIn": 78,\n  "returnAddr": {\n    "credential": {\n      "keyHash": "f925cbd4eb78aad49ec7bf9b4ddfa4cc4486c967e392699d143c81aa"\n    },\n    "network": "Testnet"\n  },\n  "stakePoolVotes": {}\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Download the file from the URL registered on the ledger state:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://tinyurl.com/mr3ferf9 -O constitution.txt\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Verify that the hash of the file matches the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataHash"),"from the ledger state:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"b2sum -l 256 constitution.txt\n5d372dca1a4cc90d7d16d966c48270e33e3aa0abcb0e78f0d5ca7ff330d2245d  constitution.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Everything is in order; the text at the URL matches the dataHash, confirming that the text at the URL is precisely what we are voting for.")),(0,r.kt)("p",null,"In the future, voting apps, explorers, wallets, and other tools could perform the filtering, ensuring that they only display actions whose URL content has been verified against the hash on the ledger state."),(0,r.kt)("h3",{id:"create-the-vote-file"},"Create the vote file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Vote with DRep keys:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cardano-cli conway governance vote create \\\n  --yes --governance-action-tx-id "df58f714c0765f3489afb6909384a16c31d600695be7e86ff9c59cf2e8a48c79" \\\n  --governance-action-index "0" \\\n  --drep-script-hash $(cat multisig.hash) \\\n  --out-file df58f714c0765f3489afb6909384a16c31d600695be7e86ff9c59cf2e8a48c79-constitution.vote \n')),(0,r.kt)("h3",{id:"include-the-vote-in-a-transaction"},"Include the vote in a transaction"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Build the transaction:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli conway transaction build --testnet-magic 4 \\\n    --tx-in \"$(cardano-cli query utxo --address $(cat payment.addr) --testnet-magic 4 --output-json | jq -r 'keys[0]')\" \\\n    --change-address $(cat payment.addr) \\\n    --vote-file df58f714c0765f3489afb6909384a16c31d600695be7e86ff9c59cf2e8a48c79-constitution.vote \\\n    --witness-override 2 \\\n    --out-file vote-tx.raw\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Every member of the DRep witnesses the transaction with their respective signing keys. Additionally, we need to witness the transaction with the\npayment signing key:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli conway transaction witness \\\n  --tx-body-file vote-tx.raw \\\n  --signing-key-file drep1.skey \\\n  --out-file drep1.witness\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli conway transaction witness \\\n  --tx-body-file vote-tx.raw \\\n  --signing-key-file drep2.skey \\\n  --out-file drep2.witness\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli conway transaction witness \\\n  --tx-body-file vote-tx.raw \\\n  --signing-key-file drep3.skey \\\n  --out-file drep3.witness\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli conway transaction witness \\\n  --tx-body-file vote-tx.raw \\\n  --signing-key-file payment.skey \\\n  --out-file payment.witness\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Assemble the transaction:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli transaction assemble \\\n  --tx-body-file vote-tx.raw \\\n  --witness-file  payment.witness \\\n  --witness-file  drep1.witness \\\n  --witness-file  drep2.witness \\\n  --witness-file  drep3.witness \\\n  --out-file tx.signed\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Submit the transaction:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cardano-cli transaction submit --testnet-magic 4 --tx-file vote-tx.signed\n")))}u.isMDXComponent=!0}}]);