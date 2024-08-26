"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[7173],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||o;return a?n.createElement(u,i(i({ref:e},s),{},{components:a})):n.createElement(u,i({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[m]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3379:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Overview",title:"SanchoNet governance actions",sidebar_position:1,slug:"/actions"},i=void 0,l={unversionedId:"governance-actions/actions",id:"governance-actions/actions",title:"SanchoNet governance actions",description:"CIP-1694 describes seven types of governance actions.",source:"@site/docs/governance-actions/actions.mdx",sourceDirName:"governance-actions",slug:"/actions",permalink:"/actions",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/governance-actions/actions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",title:"SanchoNet governance actions",sidebar_position:1,slug:"/actions"},sidebar:"docsSidebar",previous:{title:"Developers",permalink:"/roles/dev"},next:{title:"Faucet",permalink:"/faucet"}},c={},p=[{value:"Governance Action Enactment Process",id:"governance-action-enactment-process",level:2}],s={toc:p},m="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(m,(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cips.cardano.org/cips/cip1694/"},"CIP-1694")," describes seven types of governance actions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1. Motion of no-confidence"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A motion to create a ",(0,r.kt)("em",{parentName:"td"},"state of no-confidence")," in the current constitutional committee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2. New constitutional committee and/or threshold and/or term limits"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Modifications to the members of the constitutional committee, signature threshold, or term limits")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3. Updates to the constitution"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Modifications to the off-chain constitution, recorded as an on-chain hash of the text document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4. Hard fork initiation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A non-backward compatible upgrade of the network, which requires a prior software upgrade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5. Protocol parameter changes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any change to ",(0,r.kt)("strong",{parentName:"td"},"one or more")," updatable protocol parameters, excluding changes to major protocol versions ('hard forks')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6. Treasury withdrawals"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Treasury withdrawals are sub-categorized into small, medium, or large and are determined by the amount of lovelace to be withdrawn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7. Info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An action that doesn't have any on-chain impact except for being recorded on-chain.")))),(0,r.kt)("p",null,"Each type of governance action represents a distinct feature within cardano-node and cardano-cli. As such, they will be rolled out in phases, coinciding with the integration of each feature."),(0,r.kt)("h2",{id:"governance-action-enactment-process"},"Governance Action Enactment Process"),(0,r.kt)("p",null,"Any ada holder can submit a governance action. Once on chain, specific governance groups need to vote on the action depending on its type. The following\ntable details the ratification requirements for each governance action scenario. The columns represent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Governance action type"),(0,r.kt)("br",null),"\nThe type of governance action. Note that the protocol parameter updates are grouped into four categories.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Constitutional committee (abbrev. CC)"),(0,r.kt)("br",null),"\nA value of \u2713 indicates that the constitutional committee must approve this action.",(0,r.kt)("br",null),"\nA value of - means that constitutional committee votes do not apply.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DReps"),(0,r.kt)("br",null),"\nThe DRep vote threshold that must be met as a percentage of ",(0,r.kt)("em",{parentName:"p"},"active voting stake"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SPOs"),(0,r.kt)("br",null),"\nThe SPO vote threshold which must be met as a percentage of the stake held by all stake pools.",(0,r.kt)("br",null),"\nA value of - means that SPO votes do not apply."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Governance action type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"CC"),(0,r.kt)("th",{parentName:"tr",align:"left"},"DReps"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SPOs"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1. Motion of no-confidence"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_1$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$Q_1$")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2",(0,r.kt)("sub",null,"a"),". Update committee/threshold (",(0,r.kt)("em",{parentName:"td"},"normal state"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_{2a}$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$Q_{2a}$")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2",(0,r.kt)("sub",null,"b"),". Update committee/threshold (",(0,r.kt)("em",{parentName:"td"},"state of no-confidence"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_{2b}$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$Q_{2b}$")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3. New Constitution or Guardrails Script"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_3$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4. Hard-fork initiation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_4$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$Q_4$")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5",(0,r.kt)("sub",null,"a"),". Protocol parameter changes, network group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_{5a}$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5",(0,r.kt)("sub",null,"b"),". Protocol parameter changes, economic group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_{5b}$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5",(0,r.kt)("sub",null,"c"),". Protocol parameter changes, technical group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_{5c}$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5",(0,r.kt)("sub",null,"d"),". Protocol parameter changes, governance group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_{5d}$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6. Treasury withdrawal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$P_6$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("p",null,"| 7. Info "),(0,r.kt)("p",null,"Each of these thresholds is a governance parameter. There is one\nadditional threshold, ",(0,r.kt)("inlineCode",{parentName:"p"},"Q5"),", related to security relevant protocol\nparameters:"),(0,r.kt)("p",null,"The security relevant protocol parameters are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxBlockBodySize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxTxSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxBlockHeaderSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxValueSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxBlockExecutionUnits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"txFeePerByte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"txFeeFixed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"utxoCostPerByte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"govActionDeposit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minFeeRefScriptCostPerByte"))),(0,r.kt)("p",null,"To get ",(0,r.kt)("em",{parentName:"p"},"ratified"),", a governance action needs to accumulate enough votes according to the specified thresholds. A governance action\n",(0,r.kt)("strong",{parentName:"p"},"expires")," if it does not receive enough votes during its governance action lifetime."),(0,r.kt)("p",null,"Ratified governance actions are automatically ",(0,r.kt)("strong",{parentName:"p"},"enacted")," at the epoch boundary following their ratification."),(0,r.kt)("p",null,'The only exception is when a "Motion of No Confidence" is enacted prior to the enactment of other actions. In that case, the ratified\nbut not yet enacted actions are not enacted. Instead, these actions are put back for voting for the remainder of their lifetime. If a new\ncommittee is elected before these actions expire, they can still be ratified, but the new committee must approve them.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Governance action lifecycle",src:a(6145).Z,width:"1703",height:"782"})),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/actions"},"Tutorials")," and ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/vote-action"},"Voting on governance actions")," to learn how to create and vote on governance actions."))}d.isMDXComponent=!0},6145:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/gov-act-lifecycle-e895376d69a7ec4bab6fa840df484dc0.png"}}]);