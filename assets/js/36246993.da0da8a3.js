"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[595],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={description:'Conway ledger era FAQs"',sidebar_position:2},o="Conway ledger era FAQs",l={unversionedId:"tools-resources/faq",id:"tools-resources/faq",title:"Conway ledger era FAQs",description:'Conway ledger era FAQs"',source:"@site/docs/tools-resources/faq.mdx",sourceDirName:"tools-resources",slug:"/tools-resources/faq",permalink:"/tools-resources/faq",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tools-resources/faq.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:'Conway ledger era FAQs"',sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Tools and resources",permalink:"/tools-resources/resources"},next:{title:"Meetups",permalink:"/meetups"}},s={},d=[{value:"1. What are the new Conway certificates?",id:"1-what-are-the-new-conway-certificates",level:3},{value:"2. Why are there two ways to register/unregister stake credentials now?",id:"2-why-are-there-two-ways-to-registerunregister-stake-credentials-now",level:3},{value:"3. Why do new certificates have a <code>coin</code> field?",id:"3-why-do-new-certificates-have-a-coin-field",level:3},{value:"4. Certificate and transaction field witnesses and deposits",id:"4-certificate-and-transaction-field-witnesses-and-deposits",level:3},{value:"5. Why isn&#39;t the script directly included in a new constitution proposal for the proposal policy?",id:"5-why-isnt-the-script-directly-included-in-a-new-constitution-proposal-for-the-proposal-policy",level:3},{value:"6. Regarding the proposal policy for a new CC constitution action: How does the proposal policy script impact the script integrity hash in the transaction body? Do I need to consider the cost model of the provided script?",id:"6-regarding-the-proposal-policy-for-a-new-cc-constitution-action-how-does-the-proposal-policy-script-impact-the-script-integrity-hash-in-the-transaction-body-do-i-need-to-consider-the-cost-model-of-the-provided-script",level:3},{value:"7. If a voting proposal requires a script and a redeemer, which redeemer tag should I use?",id:"7-if-a-voting-proposal-requires-a-script-and-a-redeemer-which-redeemer-tag-should-i-use",level:3},{value:"8. What will be the maximum number of protocol parameter changes that can be executed in a single governance action?",id:"8-what-will-be-the-maximum-number-of-protocol-parameter-changes-that-can-be-executed-in-a-single-governance-action",level:3},{value:"9. Can one delegate to DReps that do not exist?",id:"9-can-one-delegate-to-dreps-that-do-not-exist",level:3},{value:"10. Is it possible to stake a DRep deposit when it is locked?",id:"10-is-it-possible-to-stake-a-drep-deposit-when-it-is-locked",level:3},{value:"11. What happens with DRep deposits when no stake credential is provided, and where is the deposit returned?",id:"11-what-happens-with-drep-deposits-when-no-stake-credential-is-provided-and-where-is-the-deposit-returned",level:3},{value:"13. Does the new donation field function similarly to implicit outputs?",id:"13-does-the-new-donation-field-function-similarly-to-implicit-outputs",level:3},{value:"14. How does the &#39;current treasury value&#39; function, and what happens if I set it to an incorrect value?",id:"14-how-does-the-current-treasury-value-function-and-what-happens-if-i-set-it-to-an-incorrect-value",level:3},{value:"15. How does the process of CC resignation (resign_committee_cold_cert) work, and what happens if all CC members resign? Does this impact the quorum?",id:"15-how-does-the-process-of-cc-resignation-resign_committee_cold_cert-work-and-what-happens-if-all-cc-members-resign-does-this-impact-the-quorum",level:3},{value:"16. For <code>parameter_change_action</code> and <code>treasury_withdrawals_action</code> does the optionally supplied <code>policy_hash</code> require a witness from the script?",id:"16-for-parameter_change_action-and-treasury_withdrawals_action-does-the-optionally-supplied-policy_hash-require-a-witness-from-the-script",level:3},{value:"17. Are the governance voting threshold Parameters set to be fixed at 2 decimal places?",id:"17-are-the-governance-voting-threshold-parameters-set-to-be-fixed-at-2-decimal-places",level:3},{value:"18. Do unwithdrawn staking rewards count towards one&#39;s voting power/ is counted in active/inactive voting stake amounts?",id:"18-do-unwithdrawn-staking-rewards-count-towards-ones-voting-power-is-counted-in-activeinactive-voting-stake-amounts",level:3},{value:"19. Do any locked deposits count towards voting stake?",id:"19-do-any-locked-deposits-count-towards-voting-stake",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"conway-ledger-era-faqs"},"Conway ledger era FAQs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Please note that due to ongoing development, some answers may change over time."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Last update: 2024-02-17")),(0,r.kt)("p",null,"Based on ledger design cddl: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntersectMBO/cardano-ledger/blob/cardano-ledger-conway-1.12.0.0/eras/conway/impl/cddl-files/conway.cddl"},"node 8.8.0-pre")),(0,r.kt)("h3",{id:"1-what-are-the-new-conway-certificates"},"1. What are the new Conway certificates?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Certificate in CDDL"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reg_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers stake credentials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unreg_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Unregisters stake credentials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vote_deleg_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegates votes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stake_vote_deleg_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Delegates to a stake pool and a DRep from the same certificate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stake_reg_deleg_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers stake credentials and delegates to a stake pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vote_reg_deleg_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers stake credentials and delegates to a DRep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stake_vote_reg_deleg_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers stake credentials, delegates to a pool, and to a DRep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auth_committee_hot_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Authorizes the constitutional committee hot credential")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resign_committee_cold_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Resigns the constitutional committee cold credential")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reg_drep_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers DRep's credentials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unreg_drep_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Unregisters (retires) DRep's credentials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"update_drep_cert")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates DRep's metadata anchor")))),(0,r.kt)("h3",{id:"2-why-are-there-two-ways-to-registerunregister-stake-credentials-now"},"2. Why are there two ways to register/unregister stake credentials now?"),(0,r.kt)("p",null,"\u26a0 There are currently two ways to register/unregister stake credentials because the old ",(0,r.kt)("inlineCode",{parentName:"p"},"stake_registration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stake_deregistration")," will be deprecated in the era following the Conway era. \u26a0 "),(0,r.kt)("p",null,"The new version allows the ledger to check deposit amounts and return them instantly (rather than on epoch boundary), matching the other new certificates containing deposits."),(0,r.kt)("h3",{id:"3-why-do-new-certificates-have-a-coin-field"},"3. Why do new certificates have a ",(0,r.kt)("inlineCode",{parentName:"h3"},"coin")," field?"),(0,r.kt)("p",null,"This change has been made to enable the checking of deposit amounts at the ledger level. It also proves to be more useful in Voltaire, given that protocol parameters are likely to change more frequently than in past eras."),(0,r.kt)("h3",{id:"4-certificate-and-transaction-field-witnesses-and-deposits"},"4. Certificate and transaction field witnesses and deposits"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Certificate"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Required witnesses"),(0,r.kt)("th",{parentName:"tr",align:null},"Deposit/refund"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stake_registration"),(0,r.kt)("td",{parentName:"tr",align:null},"(0, stake_credential)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stake_deregistration"),(0,r.kt)("td",{parentName:"tr",align:null},"(1, stake_credential)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stake_delegation"),(0,r.kt)("td",{parentName:"tr",align:null},"(2, stake_credential, pool_keyhash)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool_registration"),(0,r.kt)("td",{parentName:"tr",align:null},"(3, pool_params)"),(0,r.kt)("td",{parentName:"tr",align:null},"pool_key"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool_retirement"),(0,r.kt)("td",{parentName:"tr",align:null},"(4, pool_keyhash, epoch)"),(0,r.kt)("td",{parentName:"tr",align:null},"pool_key"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reg_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(7, stake_credential, coin)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"stake_credential")),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit ",(0,r.kt)("inlineCode",{parentName:"td"},"coin")," of amount ",(0,r.kt)("inlineCode",{parentName:"td"},"keyDeposit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unreg_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(8, stake_credential, coin)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"Refund ",(0,r.kt)("inlineCode",{parentName:"td"},"keyDeposit")," of amount ",(0,r.kt)("inlineCode",{parentName:"td"},"coin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vote_deleg_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(9, stake_credential, drep)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stake_vote_deleg_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(10, stake_credential, pool_keyhash, drep)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stake_reg_deleg_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(11, stake_credential, pool_keyhash, coin)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit ",(0,r.kt)("inlineCode",{parentName:"td"},"coin")," of amount ",(0,r.kt)("inlineCode",{parentName:"td"},"keyDeposit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vote_reg_deleg_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(12, stake_credential, drep, coin)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit ",(0,r.kt)("inlineCode",{parentName:"td"},"coin")," of amount ",(0,r.kt)("inlineCode",{parentName:"td"},"keyDeposit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stake_vote_reg_deleg_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(13, stake_credential, pool_keyhash, drep, coin)"),(0,r.kt)("td",{parentName:"tr",align:null},"stake_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit ",(0,r.kt)("inlineCode",{parentName:"td"},"coin")," of amount ",(0,r.kt)("inlineCode",{parentName:"td"},"keyDeposit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth_committee_hot_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(14, committee_cold_credential, committee_hot_credential)"),(0,r.kt)("td",{parentName:"tr",align:null},"committee_cold_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resign_committee_cold_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(15, committee_cold_credential, anchor / null)"),(0,r.kt)("td",{parentName:"tr",align:null},"committee_cold_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reg_drep_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(16, drep_credential, coin, anchor / null)"),(0,r.kt)("td",{parentName:"tr",align:null},"drep_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"drepDeposit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unreg_drep_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(17, drep_credential, coin)"),(0,r.kt)("td",{parentName:"tr",align:null},"drep_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"Refund drepDeposit of amount coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update_drep_cert"),(0,r.kt)("td",{parentName:"tr",align:null},"(18, drep_credential, anchor / null)"),(0,r.kt)("td",{parentName:"tr",align:null},"drep_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"voting_procedure (in Tx body)"),(0,r.kt)("td",{parentName:"tr",align:null},"voting_procedures = { + voter => { + gov_action_id => voting_procedure } }"),(0,r.kt)("td",{parentName:"tr",align:null},"drep_credential OR committee_hot_credential OR stake_pool_keyHash"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal_procedure (in Tx body)"),(0,r.kt)("td",{parentName:"tr",align:null},"proposal_procedure = ","[ deposit : coin, reward_account, gov_action, anchor]"),(0,r.kt)("td",{parentName:"tr",align:null},"coin"),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit is returned at the epoch boundary to the ",(0,r.kt)("inlineCode",{parentName:"td"},"reward_account")," that is specified in the proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current treasury value (in Tx body)"),(0,r.kt)("td",{parentName:"tr",align:null},"coin"),(0,r.kt)("td",{parentName:"tr",align:null},"payment_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Treasury donation (in Tx body)"),(0,r.kt)("td",{parentName:"tr",align:null},"positive_coin"),(0,r.kt)("td",{parentName:"tr",align:null},"payment_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h3",{id:"5-why-isnt-the-script-directly-included-in-a-new-constitution-proposal-for-the-proposal-policy"},"5. Why isn't the script directly included in a new constitution proposal for the proposal policy?"),(0,r.kt)("p",null,"The decision to provide only the script hash, rather than the entire script, within a new constitution proposal serves the purpose of reusing the mechanisms previously implemented in Babbage. For instance, it allows individuals to use reference scripts to provide the actual script for the proposal policy when proposing various governance actions. Creating another source for scripts would entail more work."),(0,r.kt)("h3",{id:"6-regarding-the-proposal-policy-for-a-new-cc-constitution-action-how-does-the-proposal-policy-script-impact-the-script-integrity-hash-in-the-transaction-body-do-i-need-to-consider-the-cost-model-of-the-provided-script"},"6. Regarding the proposal policy for a new CC constitution action: How does the proposal policy script impact the script integrity hash in the transaction body? Do I need to consider the cost model of the provided script?"),(0,r.kt)("p",null,"The new constitution proposal contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptHash"),", also known as the proposal policy. There is nothing special that needs to be done during the proposal stage because the policy is simply being suggested. The significance comes into play when a new constitution with a script hash (proposal policy) is enacted. At that point, the constitution will require scripts and redeemers for every governance proposal, except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"new_constitution")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"no_confidence")," proposals. In these cases, it will function in a manner similar to other scripts."),(0,r.kt)("h3",{id:"7-if-a-voting-proposal-requires-a-script-and-a-redeemer-which-redeemer-tag-should-i-use"},"7. If a voting proposal requires a script and a redeemer, which redeemer tag should I use?"),(0,r.kt)("p",null,"This tag is yet to be implemented. The designated tag for such instances will be 5, with the index in the redeemer corresponding to the proposal procedure. Additionally, there will be tag 4 \u2013 specifically for voting procedures."),(0,r.kt)("h3",{id:"8-what-will-be-the-maximum-number-of-protocol-parameter-changes-that-can-be-executed-in-a-single-governance-action"},"8. What will be the maximum number of protocol parameter changes that can be executed in a single governance action?"),(0,r.kt)("p",null,"With numerous Plutus versions having distinct cost models, accommodating all of them may become impractical. Nevertheless, it's highly unlikely to exceed the maximum transaction size in the near future."),(0,r.kt)("h3",{id:"9-can-one-delegate-to-dreps-that-do-not-exist"},"9. Can one delegate to DReps that do not exist?"),(0,r.kt)("p",null,"There are no checks for this at the ledger level, neither for SPOs nor for DReps. At any point, the DRep and the SPO to whom you delegated can unregister, so there is no need to enforce their existence when delegating."),(0,r.kt)("h3",{id:"10-is-it-possible-to-stake-a-drep-deposit-when-it-is-locked"},"10. Is it possible to stake a DRep deposit when it is locked?"),(0,r.kt)("p",null,"No, there is no mechanism to facilitate that action. The purpose of the deposit is to restrict the use of those funds."),(0,r.kt)("h3",{id:"11-what-happens-with-drep-deposits-when-no-stake-credential-is-provided-and-where-is-the-deposit-returned"},"11. What happens with DRep deposits when no stake credential is provided, and where is the deposit returned?"),(0,r.kt)("p",null,"DRep deposits function similarly to stake credential deposits. They are refunded in the transaction that unregisters the DRep. Stake pool and proposal procedures are retired or expired on the epoch boundary, which is why their deposits are refunded into a reward account. However, DReps and stake credentials are unregistered immediately."),(0,r.kt)("h3",{id:"13-does-the-new-donation-field-function-similarly-to-implicit-outputs"},"13. Does the new donation field function similarly to implicit outputs?"),(0,r.kt)("p",null,"Donations function more like fees. They are collected in a pool and then transferred at the epoch boundary."),(0,r.kt)("h3",{id:"14-how-does-the-current-treasury-value-function-and-what-happens-if-i-set-it-to-an-incorrect-value"},"14. How does the 'current treasury value' function, and what happens if I set it to an incorrect value?"),(0,r.kt)("p",null,"The 'current treasury value' is used for conveying the current treasury amount to Plutus scripts. If the treasury field is set incorrectly, the transaction will be rejected."),(0,r.kt)("h3",{id:"15-how-does-the-process-of-cc-resignation-resign_committee_cold_cert-work-and-what-happens-if-all-cc-members-resign-does-this-impact-the-quorum"},"15. How does the process of CC resignation (resign_committee_cold_cert) work, and what happens if all CC members resign? Does this impact the quorum?"),(0,r.kt)("p",null,"Resigned and expired constitutional committee members are automatically counted as if they have voted 'Abstain'."),(0,r.kt)("p",null,"Another crucial point to note is that whenever the number of active committee members (those who are neither expired nor resigned) falls below the ",(0,r.kt)("inlineCode",{parentName:"p"},"committeeMinSize")," protocol parameter, the system enters a mode in which it is as though all committee members have cast a 'No' vote."),(0,r.kt)("h3",{id:"16-for-parameter_change_action-and-treasury_withdrawals_action-does-the-optionally-supplied-policy_hash-require-a-witness-from-the-script"},"16. For ",(0,r.kt)("inlineCode",{parentName:"h3"},"parameter_change_action")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"treasury_withdrawals_action")," does the optionally supplied ",(0,r.kt)("inlineCode",{parentName:"h3"},"policy_hash")," require a witness from the script?"),(0,r.kt)("p",null,"Yes. It is only optional, when there is no governance policy. When there is a governance policy we require that ",(0,r.kt)("inlineCode",{parentName:"p"},"policy_hash")," to be present and equal to the one in the elected constitution."),(0,r.kt)("h3",{id:"17-are-the-governance-voting-threshold-parameters-set-to-be-fixed-at-2-decimal-places"},"17. Are the governance voting threshold Parameters set to be fixed at 2 decimal places?"),(0,r.kt)("p",null,"No, they are rational numbers on the unit interval where both numerator and denominator are specified by 64bit unsigned integers. So, those thresholds can be very precise."),(0,r.kt)("h3",{id:"18-do-unwithdrawn-staking-rewards-count-towards-ones-voting-power-is-counted-in-activeinactive-voting-stake-amounts"},"18. Do unwithdrawn staking rewards count towards one's voting power/ is counted in active/inactive voting stake amounts?"),(0,r.kt)("p",null,"Yes, the amount in the reward account is counted towards active stake, which means it will also participate in the voting.\nThis decision was to prevent people from constantly withdrawing rewards just so they can get rewards on that amount."),(0,r.kt)("h3",{id:"19-do-any-locked-deposits-count-towards-voting-stake"},"19. Do any locked deposits count towards voting stake?"),(0,r.kt)("p",null,"The only deposits which count toward voting stake thresholds are deposits locked for governance actions."))}u.isMDXComponent=!0}}]);