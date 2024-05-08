"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[3513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(a),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,c(c({ref:t},d),{},{components:a})):n.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Create governance actions",title:"Governance actions",sidebar_position:9,slug:"/tutorials/actions"},c=void 0,i={unversionedId:"tutorials/actions",id:"tutorials/actions",title:"Governance actions",description:"Common aspects of all types of governance actions",source:"@site/docs/tutorials/actions.mdx",sourceDirName:"tutorials",slug:"/tutorials/actions",permalink:"/tutorials/actions",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/actions.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Create governance actions",title:"Governance actions",sidebar_position:9,slug:"/tutorials/actions"},sidebar:"docsSidebar",previous:{title:"Generate committee keys",permalink:"/tutorials/committee"},next:{title:"Voting on actions",permalink:"/tutorials/vote-action"}},s={},l=[{value:"Common aspects of all types of governance actions",id:"common-aspects-of-all-types-of-governance-actions",level:2},{value:"Update committee actions",id:"update-committee-actions",level:2},{value:"Update committee to <em>add</em> a new CC member:",id:"update-committee-to-add-a-new-cc-member",level:4},{value:"Update committee to <em>remove</em> an existing CC member:",id:"update-committee-to-remove-an-existing-cc-member",level:4},{value:"Update committee to only change the <em>threshold</em>:",id:"update-committee-to-only-change-the-threshold",level:4},{value:"Updating the constitution",id:"updating-the-constitution",level:2},{value:"Create the proposal to update the constitution:",id:"create-the-proposal-to-update-the-constitution",level:4},{value:"Motion of no confidence",id:"motion-of-no-confidence",level:2},{value:"Create a no-confidence governance action:",id:"create-a-no-confidence-governance-action",level:4},{value:"Treasury withdrawal",id:"treasury-withdrawal",level:2},{value:"Create the treasury withdrawal proposal:",id:"create-the-treasury-withdrawal-proposal",level:4},{value:"Info",id:"info",level:2},{value:"Create the &#39;info&#39; governance action:",id:"create-the-info-governance-action",level:4},{value:"Update protocol parameters to change the <code>--key-reg-deposit-amt</code>",id:"update-protocol-parameters-to-change-the---key-reg-deposit-amt",level:2},{value:"Submitting the <code>*.action</code> action file in a transaction",id:"submitting-the-action-action-file-in-a-transaction",level:2},{value:"Finding the governance action ID of your proposal",id:"finding-the-governance-action-id-of-your-proposal",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"common-aspects-of-all-types-of-governance-actions"},"Common aspects of all types of governance actions"),(0,o.kt)("p",null,"A proposal is the process of putting together all the information required to submit a governance action to the chain. A proposal consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A deposit"),(0,o.kt)("li",{parentName:"ul"},"The reward account that will receive the deposit return"),(0,o.kt)("li",{parentName:"ul"},"The governance action"),(0,o.kt)("li",{parentName:"ul"},"An anchor")),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," to create a governance action, you will notice that it creates a proposal."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Deposit and stake credentials")),(0,o.kt)("p",null,"Any ada holder can submit a governance action to the chain. They must provide a deposit, which will be returned when the action is finalized (whether it is ratified or has expired).\nTo facilitate this process, the proposer must specify the stake credential that will receive the refunded deposit."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Previous governance action ID")),(0,o.kt)("p",null,"To prevent unintended conflicts between governance actions of the same type, some governance actions must include the governance action ID of\nthe most recently enacted action of its respective type. Notably, this requirement does not apply to ",(0,o.kt)("strong",{parentName:"p"},"treasury withdrawal")," and ",(0,o.kt)("strong",{parentName:"p"},"info")," governance actions."),(0,o.kt)("p",null,"You can get the last enacted governance action IDs with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r .nextRatifyState.nextEnactState.prevGovActionIds\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Committee": {\n    "govActionIx": 0,\n    "txId": "fe2c99fe6bc75a9666427163d51ae7dbf5a60df40135361b7bfd53ac6c7912ec"\n  },\n  "Constitution": {\n    "govActionIx": 0,\n    "txId": "2bcf2a93cb840d72e6fbbad4d52419fa69a3971dee2e32fab414e32a44ecbaf7"\n  },\n  "HardFork": null,\n  "PParamUpdate": null\n}\n')),(0,o.kt)("p",null,"Please note that both the ",(0,o.kt)("strong",{parentName:"p"},"update committee")," and ",(0,o.kt)("strong",{parentName:"p"},"motion of no confidence")," actions share the same space, referred to as 'pgaCommittee,' within the\ngovernance state. Consequently, the governance state stores a single value to represent both of these actions. The system also verifies either of these\nactions against this single stored value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Anchors")),(0,o.kt)("p",null,"When proposing a governance action, the proposer may employ an ",(0,o.kt)("em",{parentName:"p"},"anchor"),", which comprises a ",(0,o.kt)("em",{parentName:"p"},"URL")," hosting a document that outlines the rationale\nfor the proposed changes, along with the document's ",(0,o.kt)("em",{parentName:"p"},"hash"),"."),(0,o.kt)("p",null,"The document at the URL can be of a free form. It's important that it should communicate to ada holders the ",(0,o.kt)("em",{parentName:"p"},"what")," and the ",(0,o.kt)("em",{parentName:"p"},"why")," of the proposal. This tutorial mostly uses '",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld'"},"https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld'")," as an example, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ryun1/CIPs/blob/governance-metadata-actions/CIP-0108/test-vector.md"},"here")," for more details."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0100"},"CIP-100 | Governance Metadata")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/pull/632"},"CIP-0108? | Governance Metadata - Governance Actions")," for standard.\nFollowing CIP-100, we canonize the metadata anchor first, via ",(0,o.kt)("a",{parentName:"p",href:"https://json-ld.org/playground/"},"JSON-LD playground"),", which we then hash."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," to get the hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance hash anchor-data --file-text treasury-withdrawal.canonical\n931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5\n")),(0,o.kt)("p",null,"Alternatively, utilize b2sum to hash the document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"b2sum -l 256 treasury-withdrawal.canonical\n931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5  treasury-withdrawal.canonical\n")),(0,o.kt)("p",null,"You will need to supply the hash of the document when creating a governance action."),(0,o.kt)("h2",{id:"update-committee-actions"},"Update committee actions"),(0,o.kt)("h4",{id:"update-committee-to-add-a-new-cc-member"},"Update committee to ",(0,o.kt)("em",{parentName:"h4"},"add")," a new CC member:"),(0,o.kt)("p",null,"Assume you want to add three CC members, who have generated cold keys and have provided their key hashes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ea8738081fca0726f4e781f5e55fda05f8745432a5f8a8d09eb0b34b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"7f6721067362d4ae9ca73469fe983ce5572dad9028386100104b0da0"))),(0,o.kt)("p",null,"You can create a proposal to add them as new CC members with an expiration epoch (",(0,o.kt)("inlineCode",{parentName:"p"},"--epoch"),") for each of them. This is a good time to review the quorum. Let\u2019s assume that 2/3 of the committee needs to accept the proposal:"),(0,o.kt)("p",null,"Create the governance action proposal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance action update-committee \\\n  --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.currentPParams.govActionDeposit') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld \\\n  --anchor-data-hash 931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5 \\\n  --add-cc-cold-verification-key-hash 89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de \\\n  --epoch 100 \\\n  --add-cc-cold-verification-key-hash ea8738081fca0726f4e781f5e55fda05f8745432a5f8a8d09eb0b34b \\\n  --epoch 95 \\\n  --add-cc-cold-verification-key-hash 7f6721067362d4ae9ca73469fe983ce5572dad9028386100104b0da0 \\\n  --epoch 90 \\\n  --threshold 2/3 \\\n  --out-file update-committee.action\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note: If there is a ",(0,o.kt)("strong",{parentName:"li"},"previously enacted")," governance action to update the committee, the proposal must also include ",(0,o.kt)("inlineCode",{parentName:"li"},"--prev-governance-action-tx-id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--prev-governance-action-index"),".")),(0,o.kt)("h4",{id:"update-committee-to-remove-an-existing-cc-member"},"Update committee to ",(0,o.kt)("em",{parentName:"h4"},"remove")," an existing CC member:"),(0,o.kt)("p",null,"Assume that you want to remove the CC member with the key hash ",(0,o.kt)("inlineCode",{parentName:"p"},"89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de"),". You can do this with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance action update-committee \\\n  --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.currentPParams.govActionDeposit') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld \\\n  --anchor-data-hash 931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5 \\\n  --remove-cc-cold-verification-key-hash 89181f26b47c3d3b6b127df163b15b74b45bba7c3b7a1d185c05c2de \\\n  --threshold 1/2 \\\n  --prev-governance-action-tx-id fe2c99fe6bc75a9666427163d51ae7dbf5a60df40135361b7bfd53ac6c7912ec \\\n  --prev-governance-action-index 0 \\\n  --out-file update-committee.action\n")),(0,o.kt)("h4",{id:"update-committee-to-only-change-the-threshold"},"Update committee to only change the ",(0,o.kt)("em",{parentName:"h4"},"threshold"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance action update-committee \\\n  --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.currentPParams.govActionDeposit') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld \\\n  --anchor-data-hash 931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5 \\\n  --threshold 60/100 \\\n  --prev-governance-action-tx-id fe2c99fe6bc75a9666427163d51ae7dbf5a60df40135361b7bfd53ac6c7912ec \\\n  --prev-governance-action-index 0 \\\n  --out-file update-committee.action\n")),(0,o.kt)("h2",{id:"updating-the-constitution"},"Updating the constitution"),(0,o.kt)("p",null,"Should you decide to propose an update to the SanchoNet constitution, please note that all rules and principles outlined for SanchoNet should be fictional and unrelated to the actual rules on the Cardano blockchain. Quotes directly from Don Quixote\nare encouraged, as well as rules in a similar spirit that aren't directly extracted from the book. SanchoNet is not the space for serious discussions about the future governance of Cardano. For substantial conversations, please visit\nthe dedicated forum to explore the weighty matters of Cardano's constitution with the depth they deserve. ",(0,o.kt)("a",{parentName:"p",href:"https://forum.cardano.org/c/governance/constitution/212"},"Cardano Forum")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find the last enacted governance action of this type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.nextRatifyState.nextEnactState.prevGovActionIds.Constitution'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "govActionIx": 0,\n  "txId": "00caeb6c2db4575acc43be3e8f87b881dccb86283daf16aa2707275cbe7f3451"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write a constitution update and save it to ",(0,o.kt)("inlineCode",{parentName:"li"},"constitution.txt")),(0,o.kt)("li",{parentName:"ul"},"Upload the ",(0,o.kt)("inlineCode",{parentName:"li"},"constitution.txt")," file to a URL so that everyone can read it, for example, ",(0,o.kt)("a",{parentName:"li",href:"https://tinyurl.com/mr3ferf9"},"https://tinyurl.com/mr3ferf9")),(0,o.kt)("li",{parentName:"ul"},"Check the hash of the ",(0,o.kt)("inlineCode",{parentName:"li"},"constitution.txt")," file using ",(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/b2sum.1.html"},"b2sum"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://tinyurl.com/mr3ferf9 -O constitution.txt\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance hash anchor-data --file-text constitution.txt\n5d372dca1a4cc90d7d16d966c48270e33e3aa0abcb0e78f0d5ca7ff330d2245d\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"b2sum -l 256 constitution.txt\n5d372dca1a4cc90d7d16d966c48270e33e3aa0abcb0e78f0d5ca7ff330d2245d  constitution.txt\n")),(0,o.kt)("h4",{id:"create-the-proposal-to-update-the-constitution"},"Create the proposal to update the constitution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cardano-cli conway governance action create-constitution \\\n  --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r \'.currentPParams.govActionDeposit\') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld \\\n  --anchor-data-hash "931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5" \\\n  --constitution-url https://tinyurl.com/mr3ferf9  \\\n  --constitution-hash "5d372dca1a4cc90d7d16d966c48270e33e3aa0abcb0e78f0d5ca7ff330d2245d" \\\n  --prev-governance-action-tx-id "00caeb6c2db4575acc43be3e8f87b881dccb86283daf16aa2707275cbe7f3451" \\\n  --prev-governance-action-index 0 \\\n  --out-file constitution.action\n')),(0,o.kt)("h2",{id:"motion-of-no-confidence"},"Motion of no confidence"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find the last governance action enacted of this type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.nextRatifyState.nextEnactState.prevGovActionIds.Committee'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "govActionIx": 0,\n  "txId": "fe2c99fe6bc75a9666427163d51ae7dbf5a60df40135361b7bfd53ac6c7912ec"\n}\n')),(0,o.kt)("h4",{id:"create-a-no-confidence-governance-action"},"Create a no-confidence governance action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance action create-no-confidence \\\n  --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.currentPParams.govActionDeposit') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld \\\n  --anchor-data-hash 931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5 \\\n  --prev-governance-action-tx-id fe2c99fe6bc75a9666427163d51ae7dbf5a60df40135361b7bfd53ac6c7912ec \\\n  --prev-governance-action-index 0 \\\n  --out-file no-confidence.action\n")),(0,o.kt)("h2",{id:"treasury-withdrawal"},"Treasury withdrawal"),(0,o.kt)("p",null,"In addition to the stake credential required to obtain a deposit refund, the proposer must also furnish stake credentials for receiving funds from the treasury in the\nevent that the governance action is approved."),(0,o.kt)("h4",{id:"create-the-treasury-withdrawal-proposal"},"Create the treasury withdrawal proposal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance action create-treasury-withdrawal \\\n  --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.currentPParams.govActionDeposit') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld \\\n  --anchor-data-hash 931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5 \\\n  --funds-receiving-stake-verification-key-file stake.vkey \\\n  --transfer 50000000000 \\\n  --out-file treasury.action\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note that you do not need to provide any previous governance action ID on treasury withdrawals.")),(0,o.kt)("h2",{id:"info"},"Info"),(0,o.kt)("h4",{id:"create-the-info-governance-action"},"Create the 'info' governance action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance action create-info --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.currentPParams.govActionDeposit') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url  https://tinyurl.com/yc74fxx4 \\\n  --anchor-data-hash 931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5 \\\n  --out-file info.action\n")),(0,o.kt)("h2",{id:"update-protocol-parameters-to-change-the---key-reg-deposit-amt"},"Update protocol parameters to change the ",(0,o.kt)("inlineCode",{parentName:"h2"},"--key-reg-deposit-amt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway governance action create-protocol-parameters-update \\\n  --testnet \\\n  --governance-action-deposit $(cardano-cli conway query gov-state --testnet-magic 4 | jq -r '.currentPParams.govActionDeposit') \\\n  --deposit-return-stake-verification-key-file stake.vkey \\\n  --anchor-url https://raw.githubusercontent.com/Ryun1/metadata/main/cip108/treasury-withdrawal.jsonld \\\n  --anchor-data-hash 931f1d8cdfdc82050bd2baadfe384df8bf99b00e36cb12bfb8795beab3ac7fe5 \\\n  --key-reg-deposit-amt 1000000 \\\n  --out-file pp-update.action\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note: If there is a ",(0,o.kt)("strong",{parentName:"li"},"previously enacted")," governance action to update the protocol parameters, the proposal must also include ",(0,o.kt)("inlineCode",{parentName:"li"},"--prev-governance-action-tx-id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--prev-governance-action-index"),".")),(0,o.kt)("h2",{id:"submitting-the-action-action-file-in-a-transaction"},"Submitting the ",(0,o.kt)("inlineCode",{parentName:"h2"},"*.action")," action file in a transaction"),(0,o.kt)("p",null,"Submitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.action")," file to the blockchain is the essential step in bringing your proposal to life and making it accessible for the community to participate in the\nvoting process. This process essentially transforms your proposal from a conceptual idea into an actionable item. Once submitted, it becomes part of the public ledger,\nwhile also allowing members of the governance bodies to review, discuss, and ultimately cast their votes on its approval or rejection."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note that you can also use ",(0,o.kt)("inlineCode",{parentName:"li"},"build-raw")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"calculate-min-fee")," to build transactions in an off-line settting. The example below uses the convenient ",(0,o.kt)("inlineCode",{parentName:"li"},"build"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cardano-cli conway transaction build \\\n  --testnet-magic 4 \\\n  --tx-in "$(cardano-cli query utxo --address "$(cat payment.addr)" --testnet-magic 4 --out-file /dev/stdout | jq -r \'keys[0]\')" \\\n  --change-address $(cat payment.addr) \\\n  --proposal-file info.action \\\n  --out-file tx.raw\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway transaction sign \\\n  --testnet-magic 4 \\\n  --tx-body-file tx.raw \\\n  --signing-key-file payment.skey \\\n  --out-file tx.signed\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway transaction submit \\\n  --testnet-magic 4 \\\n  --tx-file tx.signed\n")),(0,o.kt)("h2",{id:"finding-the-governance-action-id-of-your-proposal"},"Finding the governance action ID of your proposal"),(0,o.kt)("p",null,"You may want to find your governance action ID to share it with others on Discord1 and seek their support. The transaction ID and the index of the transaction that submitted the\nproposal serve as the action ID. An effective way to find your governance action ID is by querying the governance state and filtering by (the proposer) stake key hash."),(0,o.kt)("p",null,"First, find your key hash with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway stake-address key-hash --stake-verification-key-file stake.vkey\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"8e0debc9fdc6c616ac40d98bf3950b436895eea9cccf0396a6e5e12b")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," to filter the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov-state")," output by the stake key hash. The output contains all the relevant information about your governance actions, including ",(0,o.kt)("inlineCode",{parentName:"p"},"actionId"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli conway query gov-state --testnet-magic 4 \\\n| jq -r --arg keyHash \"8e0debc9fdc6c616ac40d98bf3950b436895eea9cccf0396a6e5e12b\" '.proposals | to_entries[] | select(.value.returnAddr.credential.keyHash | contains($keyHash)) | .value'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": {\n    "contents": [\n      [\n        {\n          "credential": {\n            "keyHash": "7249a71391f08399f06b492eae7892a33191699625cff50b7dee55c6"\n          },\n          "network": "Testnet"\n        },\n        20388738581\n      ]\n    ],\n    "tag": "TreasuryWithdrawals"\n  },\n  "actionId": {\n    "govActionIx": 0,\n    "txId": "4fcd92abf2ce3d6796c5fae51ea83d563ca8611359c9624fd1cecd7fa1ce71cc"\n  },\n  "committeeVotes": {\n    "keyHash-23e05ad2b71317a6348ce4b68dae37aa1c0e545cdea740b23c21742e": "VoteNo",\n    "keyHash-540bedcd4bdcbf523e899c3ef43f2b96ecec4f6303af58d15a413ed1": "VoteYes",\n    "keyHash-6c1d098a366f2274651943a7f778b3b5459c129f0407a0db2902253a": "VoteYes"\n  },\n  "dRepVotes": {\n    "keyHash-13797df5308dfebf2348fa58b312a177cf97939f5f7d21168e1a54db": "VoteYes",\n    "keyHash-9853551d8b99884f51608822e012bbf0d444eb7bea2807ee664f1241": "Abstain",\n    "keyHash-cf09b59e134fa14e48da39b552c02299a054d7c8b895b3d827453672": "VoteNo"\n  },\n  "deposit": 1000000000,\n  "expiresAfter": 34,\n  "proposedIn": 33,\n  "returnAddr": {\n    "credential": {\n      "keyHash": "8e0debc9fdc6c616ac40d98bf3950b436895eea9cccf0396a6e5e12b"\n    },\n    "network": "Testnet"\n  },\n  "stakePoolVotes": {}\n}\n')))}u.isMDXComponent=!0}}]);