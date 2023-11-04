"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Create governance actions",title:"Governance actions",sidebar_position:9,slug:"/tutorials/actions"},r=void 0,c={unversionedId:"tutorials/actions",id:"tutorials/actions",title:"Governance actions",description:"Common aspects of all types of governance actions",source:"@site/docs/tutorials/actions.mdx",sourceDirName:"tutorials",slug:"/tutorials/actions",permalink:"/tutorials/actions",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/actions.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Create governance actions",title:"Governance actions",sidebar_position:9,slug:"/tutorials/actions"},sidebar:"docsSidebar",previous:{title:"Generate committee keys",permalink:"/tutorials/committee"},next:{title:"Voting on actions",permalink:"/tutorials/vote-action"}},s={},l=[{value:"Common aspects of all types of governance actions",id:"common-aspects-of-all-types-of-governance-actions",level:2},{value:"Update committee actions",id:"update-committee-actions",level:2},{value:"Update committe to <em>add</em> a new CC member:",id:"update-committe-to-add-a-new-cc-member",level:4},{value:"Update committee to <em>remove</em> an existing CC member:",id:"update-committee-to-remove-an-existing-cc-member",level:4},{value:"Update committee to change the <em>quorum</em>:",id:"update-committee-to-change-the-quorum",level:4},{value:"Updating the constitution",id:"updating-the-constitution",level:2},{value:"Create the proposal to update the constitution:",id:"create-the-proposal-to-update-the-constitution",level:4},{value:"Motion of no confidence",id:"motion-of-no-confidence",level:2},{value:"Create a no-confidence governance action:",id:"create-a-no-confidence-governance-action",level:4},{value:"Treasury withdrawal",id:"treasury-withdrawal",level:2},{value:"Create the treasury withdrawal proposal:",id:"create-the-treasury-withdrawal-proposal",level:4},{value:"Info",id:"info",level:2},{value:"Create the &#39;info&#39; governance action:",id:"create-the-info-governance-action",level:4},{value:"Submitting the <code>*.action</code> action file in a transaction",id:"submitting-the-action-action-file-in-a-transaction",level:2},{value:"Finding the governance action ID of your proposal",id:"finding-the-governance-action-id-of-your-proposal",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"common-aspects-of-all-types-of-governance-actions"},"Common aspects of all types of governance actions"),(0,o.kt)("p",null,"A proposal is the process of putting together all the information required to submit a governance action to the chain. A proposal consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A deposit"),(0,o.kt)("li",{parentName:"ul"},"The reward account that will receive the deposit return"),(0,o.kt)("li",{parentName:"ul"},"The governance action "),(0,o.kt)("li",{parentName:"ul"},"An optional anchor.")),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," to create a governance action, you will notice that it creates a proposal. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Deposit and stake credentials")),(0,o.kt)("p",null,"Any ada holder can submit a governance action to the chain. They must provide a deposit, which will be returned when the action is finalized (whether it is ratified or has expired).\nTo facilitate this process, the proposer must specify the stake credential that will receive the refunded deposit."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Previous governance action ID")),(0,o.kt)("p",null,"To prevent unintended conflicts between governance actions of the same type, it is essential that each governance action includes the governance action ID of\nthe most recently enacted action of its respective type. Notably, this requirement does not apply to ",(0,o.kt)("strong",{parentName:"p"},"treasury withdrawal")," and ",(0,o.kt)("strong",{parentName:"p"},"info")," governance actions. "),(0,o.kt)("p",null,"You can get the last enacted governance action IDs with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cardano-cli conway governance query gov-state --testnet-magic 4 | jq .ratify.prevGovActionIds\n\n{\n  "pgaCommittee": {\n    "govActionIx": 0,\n    "txId": "93afe9f59ffdf7e9af98d582ebef5143691941a5236f3ec8464e601c9395bf66"\n  },\n  "pgaConstitution": {\n    "govActionIx": 0,\n    "txId": "00caeb6c2db4575acc43be3e8f87b881dccb86283daf16aa2707275cbe7f3451"\n  },\n  "pgaHardFork": null,\n  "pgaPParamUpdate": null\n}\n')),(0,o.kt)("p",null,"Please note that both the ",(0,o.kt)("strong",{parentName:"p"},"update committee")," and ",(0,o.kt)("strong",{parentName:"p"},"motion of no confidence")," actions share the same space, referred to as 'pgaCommittee,' within the\ngovernance state. Consequently, the governance state stores a single value to represent both of these actions. The system also verifies either of these\nactions against this single stored value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Anchors")),(0,o.kt)("p",null,"When proposing a governance action, the proposer may employ an ",(0,o.kt)("em",{parentName:"p"},"anchor"),", which comprises a ",(0,o.kt)("em",{parentName:"p"},"URL")," hosting a document that outlines the rationale\nfor the proposed changes, along with the document's ",(0,o.kt)("em",{parentName:"p"},"hash"),"."),(0,o.kt)("p",null,"The document at the URL can be of a free form. It's important that it should communicate to ada holders the ",(0,o.kt)("em",{parentName:"p"},"what")," and the ",(0,o.kt)("em",{parentName:"p"},"why")," of the proposal. This tutorial mostly uses '",(0,o.kt)("a",{parentName:"p",href:"https://tinyurl.com/3wrwb2as'"},"https://tinyurl.com/3wrwb2as'")," as an example. "),(0,o.kt)("p",null,"Utilize the BLAKE2b hashing algorithm to hash the document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"b2sum -l 256 rationale.txt \nee3b0232e4fd0d3e7e8626bea8eab6f611c608ec1dcfeed4c2db69560a9f2286  rationale.txt\n")),(0,o.kt)("p",null,"Alternatively, users have the option to submit either the 'text' or the 'file' instead of providing its hash when creating the proposal. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli"),"\nautomatically computes the hash and incorporates it into the governance action file."),(0,o.kt)("h2",{id:"update-committee-actions"},"Update committee actions"),(0,o.kt)("h4",{id:"update-committe-to-add-a-new-cc-member"},"Update committe to ",(0,o.kt)("em",{parentName:"h4"},"add")," a new CC member:"),(0,o.kt)("p",null,"Assume that the individual or entity that you want to add as a CC member has generated cold keys and has provided the key hash ",(0,o.kt)("inlineCode",{parentName:"p"},"89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de"),". You can then create the proposal with: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway governance action create-new-committee \\\n  --testnet \\\n  --governance-action-deposit 0 \\\n  --stake-verification-key-file stake.vkey \\\n  --proposal-url https://tinyurl.com/3wrwb2as \\\n  --proposal-file rationale.txt \\\n  --add-cc-cold-verification-key-hash 89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de \\\n  --epoch 100 \\\n  --quorum 51/100 \\\n  --governance-action-tx-id 93afe9f59ffdf7e9af98d582ebef5143691941a5236f3ec8464e601c9395bf66 \\\n  --governance-action-index 0 \\\n  --out-file update-committee.action\n")),(0,o.kt)("h4",{id:"update-committee-to-remove-an-existing-cc-member"},"Update committee to ",(0,o.kt)("em",{parentName:"h4"},"remove")," an existing CC member:"),(0,o.kt)("p",null,"Assume that you want to remove the CC member with the key hash ",(0,o.kt)("inlineCode",{parentName:"p"},"89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de"),". You can do this with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway governance action create-new-committee \\\n  --testnet \\\n  --governance-action-deposit 0 \\\n  --stake-verification-key-file utxo-keys/stake1.vkey \\\n  --proposal-url https://tinyurl.com/3wrwb2as \\\n  --proposal-file rationale.txt \\\n  --remove-cc-cold-verification-key-hash 89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de \\\n  --quorum 51/100 \\\n  --governance-action-tx-id 93afe9f59ffdf7e9af98d582ebef5143691941a5236f3ec8464e601c9395bf66 \\\n  --governance-action-index 0 \\\n  --out-file update-committee.action\n")),(0,o.kt)("h4",{id:"update-committee-to-change-the-quorum"},"Update committee to change the ",(0,o.kt)("em",{parentName:"h4"},"quorum"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway governance action create-new-committee \\\n  --testnet \\\n  --governance-action-deposit 0 \\\n  --stake-verification-key-file utxo-keys/stake1.vkey \\\n  --proposal-url https://tinyurl.com/3wrwb2as \\\n  --proposal-file rationale.txt \\\n  --quorum 60/100 \\\n  --governance-action-tx-id 93afe9f59ffdf7e9af98d582ebef5143691941a5236f3ec8464e601c9395bf66 \\\n  --governance-action-index 0 \\\n  --out-file update-committee.action\n")),(0,o.kt)("h2",{id:"updating-the-constitution"},"Updating the constitution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find the last enacted governance action of this type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cardano-cli conway governance query gov-state --testnet-magic 4 | jq .ratify.prevGovActionIds.pgaConstitution\n{\n  "govActionIx": 0,\n  "txId": "00caeb6c2db4575acc43be3e8f87b881dccb86283daf16aa2707275cbe7f3451"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write a constitution update and save it to ",(0,o.kt)("inlineCode",{parentName:"li"},"constitution.txt")),(0,o.kt)("li",{parentName:"ul"},"Upload the ",(0,o.kt)("inlineCode",{parentName:"li"},"constitution.txt")," file to a URL so that everyone can read it, for example, ",(0,o.kt)("a",{parentName:"li",href:"https://tinyurl.com/mr3ferf9"},"https://tinyurl.com/mr3ferf9")),(0,o.kt)("li",{parentName:"ul"},"Check the hash of the ",(0,o.kt)("inlineCode",{parentName:"li"},"constitution.txt")," file using ",(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/b2sum.1.html"},"b2sum"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://tinyurl.com/mr3ferf9 -O constitution.txt\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"b2sum -l 256 constitution.txt                        \n5d372dca1a4cc90d7d16d966c48270e33e3aa0abcb0e78f0d5ca7ff330d2245d  constitution.txt\n")),(0,o.kt)("h4",{id:"create-the-proposal-to-update-the-constitution"},"Create the proposal to update the constitution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cardano-cli conway governance action create-constitution \\\n  --testnet \\\n  --governance-action-deposit 0 \\\n  --stake-verification-key-file stake.vkey \\\n  --proposal-url https://tinyurl.com/3wrwb2as \\\n  --proposal-hash "52e69500a92d80f2126c836a4903dc582006709f004cf7a28ed648f732dff8d2" \\\n  --constitution-url https://tinyurl.com/mr3ferf9  \\\n  --constitution "$(cat constitution.txt)" \\\n  --governance-action-tx-id 00caeb6c2db4575acc43be3e8f87b881dccb86283daf16aa2707275cbe7f3451 \\\n  --governance-action-index 0 \\\n  --out-file constitution.action\n')),(0,o.kt)("h2",{id:"motion-of-no-confidence"},"Motion of no confidence"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find the last governance action enacted of this type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cardano-cli conway governance query gov-state --testnet-magic 4 | jq .ratify.prevGovActionIds.pgaCommittee\n{\n  "govActionIx": 0,\n  "txId": "93afe9f59ffdf7e9af98d582ebef5143691941a5236f3ec8464e601c9395bf66"\n}\n')),(0,o.kt)("h4",{id:"create-a-no-confidence-governance-action"},"Create a no-confidence governance action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway governance action create-no-confidence \\\n--testnet \\\n--governance-action-deposit 0 \\\n--stake-verification-key-file stake.vkey \\\n--proposal-url https://tinyurl.com/3wrwb2as \\\n--proposal-file rationale.txt \\\n--governance-action-tx-id 93afe9f59ffdf7e9af98d582ebef5143691941a5236f3ec8464e601c9395bf66 \\\n--governance-action-index 0 \\\n--out-file no-confidence.action\n")),(0,o.kt)("h2",{id:"treasury-withdrawal"},"Treasury withdrawal"),(0,o.kt)("p",null,"In addition to the stake credential required to obtain a deposit refund, the proposer must also furnish stake credentials for receiving funds from the treasury in the\nevent that the governance action is approved. The sequence in which these credentials are provided holds significance. The initial credential is used for securing\nthe deposit refund, while the second credential is necessary for the disbursement of funds from the treasury."),(0,o.kt)("h4",{id:"create-the-treasury-withdrawal-proposal"},"Create the treasury withdrawal proposal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway governance action create-treasury-withdrawal \\\n  --testnet \\\n  --governance-action-deposit 0 \\\n  --stake-verification-key-file deposit-stake.vkey \\\n  --proposal-url https://tinyurl.com/3wrwb2as \\\n  --proposal-file  rationale.txt \\\n  --stake-verification-key-file treasury-funds-stake.vkey \\\n  --transfer 50000000000 \\\n  --out-file treasury.action\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note that you do not need to provide any previous governance action ID on treasury withdrawals.")),(0,o.kt)("h2",{id:"info"},"Info"),(0,o.kt)("p",null,"While it's technically optional to include an anchor in proposals, a compelling case can be made for the inclusion of an anchor in 'info' governance actions. This argument\nis rooted in the inherent nature of 'info' actions, which lack on-chain consequences and essentially function like polls. In this context, the importance of an anchor becomes\nclear because the content it houses is the very essence of the proposal."),(0,o.kt)("h4",{id:"create-the-info-governance-action"},"Create the 'info' governance action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conway governance action create-info --testnet \\\n  --governance-action-deposit 0 \\\n  --stake-verification-key-file stake.vkey \\\n  --proposal-url https://tinyurl.com/yc74fxx4 \\\n  --proposal-file rationale.txt \\\n  --out-file info.action\n")),(0,o.kt)("h2",{id:"submitting-the-action-action-file-in-a-transaction"},"Submitting the ",(0,o.kt)("inlineCode",{parentName:"h2"},"*.action")," action file in a transaction"),(0,o.kt)("p",null,"Submitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.action")," file to the blockchain is the essential step in bringing your proposal to life and making it accessible for the community to participate in the\nvoting process. This process essentially transforms your proposal from a conceptual idea into an actionable item. Once submitted, it becomes part of the public ledger,\nwhile also allowing members of the governance bodies to review, discuss, and ultimately cast their votes on its approval or rejection. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cardano-cli conway transaction build \\\n  --testnet-magic 4 \\\n  --tx-in "$(cardano-cli query utxo --address "$(cat payment.addr)" --testnet-magic 4 --out-file /dev/stdout | jq -r \'keys[0]\')" \\\n  --change-address "$(cat payment.addr)" \\\n  --proposal-file info.action \\\n  --witness-override 2 \\\n  --out-file tx.raw\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway transaction sign \\\n  --testnet-magic 4 \\\n  --tx-body-file tx.raw \\\n  --signing-key-file payment.skey \\\n  --signing-key-file stake.skey \\\n  --out-file tx.signed\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway transaction submit \\\n  --testnet-magic 4 \\\n  --tx-file tx.signed\n")),(0,o.kt)("h2",{id:"finding-the-governance-action-id-of-your-proposal"},"Finding the governance action ID of your proposal"),(0,o.kt)("p",null,"You may want to find your governance action ID to share it with others on Discord and seek their support. The transaction ID and the index of the transaction that submitted the\nproposal serve as the action ID. An effective way to find your governance action ID is by querying the governance state and filtering by (the proposer) stake key hash. "),(0,o.kt)("p",null,"First, find your key hash with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-cli conway stake-address key-hash --stake-verification-key-file stake1.vkey\nf925cbd4eb78aad49ec7bf9b4ddfa4cc4486c967e392699d143c81aa\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," to filter the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov-state")," output by the stake key hash. The output contains all the relevant information about your governance actions, including ",(0,o.kt)("inlineCode",{parentName:"p"},"actionId"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cardano-cli conway governance query gov-state --testnet-magic 4 \\\n| jq -r --arg keyHash "f925cbd4eb78aad49ec7bf9b4ddfa4cc4486c967e392699d143c81aa" \'.gov.curGovSnapshots.psGovActionStates | to_entries[] | select(.value.returnAddr.credential.keyHash | contains($keyHash)) | .value\'     \n\n{\n  "action": {\n    "contents": [\n      null,\n      {\n        "anchor": {\n          "dataHash": "5d372dca1a4cc90d7d16d966c48270e33e3aa0abcb0e78f0d5ca7ff330d2245d",\n          "url": "hhttps://tinyurl.com/mr3ferf9"\n        }\n      }\n    ],\n    "tag": "NewConstitution"\n  },\n  "actionId": {\n    "govActionIx": 0,\n    "txId": "132d0f1642b2a6364693575cebab32c6357cdf69cad3560ff0b47d463d27a8c8"\n  },\n  "committeeVotes": {\n    "keyHash-c8ac605b25d6084c2ceb28043c8f01b62629966d038a249c7847d66d": "VoteYes",\n    "keyHash-d13507f7e7fb8ac3ce2094187c9d99d4601021e9ef5a5f310567765d": "VoteYes"\n  },\n  "dRepVotes": {\n    "keyHash-16faaf6daa2635bbf53bbbaf38b3a6040adf7ced2f7f08952592cf5b": "VoteYes",\n    "keyHash-57cb90cfb635e76af648abf1b6a91519218a5919b3cba2527e3725d1": "VoteYes",\n    "keyHash-7d84808d563f0f258ad7e4337c2c4bd13010930ebdf7b86c3bfd9ef8": "VoteYes"\n  },\n  "deposit": 0,\n  "expiresAfter": 16,\n  "proposedIn": 14,\n  "returnAddr": {\n    "credential": {\n      "keyHash": "f925cbd4eb78aad49ec7bf9b4ddfa4cc4486c967e392699d143c81aa"\n    },\n    "network": "Testnet"\n  },\n  "stakePoolVotes": {}\n}\n')))}u.isMDXComponent=!0}}]);