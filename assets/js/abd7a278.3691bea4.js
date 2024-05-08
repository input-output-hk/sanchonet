"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[3152],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>v});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),h=r,v=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(v,i(i({ref:t},u),{},{components:o})):n.createElement(v,i({ref:t},u))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9662:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_label:"Useful jq filters",title:"Useful jq filters",sidebar_position:11,slug:"/tutorials/jq-filters"},i=void 0,s={unversionedId:"tutorials/jq-filters",id:"tutorials/jq-filters",title:"Useful jq filters",description:"'_jq is like sed for JSON data - you can use it to slice, filter, map, and transform",source:"@site/docs/tutorials/jq-filters.mdx",sourceDirName:"tutorials",slug:"/tutorials/jq-filters",permalink:"/tutorials/jq-filters",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/jq-filters.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"Useful jq filters",title:"Useful jq filters",sidebar_position:11,slug:"/tutorials/jq-filters"},sidebar:"docsSidebar",previous:{title:"Voting on actions",permalink:"/tutorials/vote-action"},next:{title:"CLI queries",permalink:"/tutorials/cli queries"}},c={},l=[{value:"Show governance actions that will expire at the end of the current epoch:",id:"show-governance-actions-that-will-expire-at-the-end-of-the-current-epoch",level:3},{value:"Show governance actions that were proposed in the current epoch:",id:"show-governance-actions-that-were-proposed-in-the-current-epoch",level:3},{value:"Sort governance actions by the number of DRep votes:",id:"sort-governance-actions-by-the-number-of-drep-votes",level:3},{value:"Sort by the number of SPO votes:",id:"sort-by-the-number-of-spo-votes",level:3},{value:"Sort by the number of CC votes:",id:"sort-by-the-number-of-cc-votes",level:3},{value:"Filter actions that expire within the current and the next two epochs, including information about all roles&#39; votes, sorted by expiration epoch:",id:"filter-actions-that-expire-within-the-current-and-the-next-two-epochs-including-information-about-all-roles-votes-sorted-by-expiration-epoch",level:3},{value:"Show actions for which a specific DRep key has voted, indicating the DRep&#39;s vote and the total number of votes received for this action:",id:"show-actions-for-which-a-specific-drep-key-has-voted-indicating-the-dreps-vote-and-the-total-number-of-votes-received-for-this-action",level:3},{value:"Show actions where the given DRep key has not voted yet:",id:"show-actions-where-the-given-drep-key-has-not-voted-yet",level:3},{value:"Show the total number of &#39;yes&#39;, &#39;no&#39;, and &#39;abstain&#39; votes for a given governance action ID:",id:"show-the-total-number-of-yes-no-and-abstain-votes-for-a-given-governance-action-id",level:3},{value:"Show the active <code>treasury withdrawal</code> governance actions and their current vote count:",id:"show-the-active-treasury-withdrawal-governance-actions-and-their-current-vote-count",level:3},{value:"Show the active <code>update committee</code> governance actions and their current vote count:",id:"show-the-active-update-committee-governance-actions-and-their-current-vote-count",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"'",(0,r.kt)("em",{parentName:"p"},"jq is like sed for JSON data - you can use it to slice, filter, map, and transform\nstructured data with the same ease that sed, awk, grep and friends let you play with text."),"'"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jqlang.github.io/jq/download/"},"Install jq"),"."),(0,r.kt)("p",null,"Below you will find some useful jq filters to parse the governance state."),(0,r.kt)("h3",{id:"show-governance-actions-that-will-expire-at-the-end-of-the-current-epoch"},"Show governance actions that will expire at the end of the current epoch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"current_epoch=$(cardano-cli query tip --testnet-magic 4 | jq .epoch)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 \\\n    | jq --argjson epoch \"$current_epoch\" '.proposals\n    | to_entries[]\n    | select(.value.expiresAfter == $epoch)'\n\n")),(0,r.kt)("h3",{id:"show-governance-actions-that-were-proposed-in-the-current-epoch"},"Show governance actions that were proposed in the current epoch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"current_epoch=$(cardano-cli query tip --testnet-magic 4 | jq .epoch)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 \\\n    | jq -r --argjson epoch \"$current_epoch\" '.proposals\n    | to_entries[]\n    | select(.value.proposedIn == $epoch)'\n")),(0,r.kt)("h3",{id:"sort-governance-actions-by-the-number-of-drep-votes"},"Sort governance actions by the number of DRep votes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r '\n  .proposals\n  | to_entries[]\n  | {govActionId: .value.actionId, type: .value.proposalProcedure.govAction.tag, drepVoteCount: (.value.dRepVotes | keys | length)}\n  ' | jq -s 'sort_by(.voteCount) | reverse[]'\n\n")),(0,r.kt)("h3",{id:"sort-by-the-number-of-spo-votes"},"Sort by the number of SPO votes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r '\n  .proposals\n  | to_entries[]\n  | {govActionId: .value.actionId, type: .value.proposalProcedure.govAction.tag, spoVoteCount: (.value.stakePoolVotes | keys | length)}\n  ' | jq -s 'sort_by(.voteCount) | reverse[]'\n")),(0,r.kt)("h3",{id:"sort-by-the-number-of-cc-votes"},"Sort by the number of CC votes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r '\n  .proposals\n  | to_entries[]\n  | {govActionId: .value.actionId, type: .value.proposalProcedure.govAction.tag, ccVoteCount: (.value.committeeVotes | keys | length)}\n  ' | jq -s 'sort_by(.voteCount) | reverse[]'\n")),(0,r.kt)("h3",{id:"filter-actions-that-expire-within-the-current-and-the-next-two-epochs-including-information-about-all-roles-votes-sorted-by-expiration-epoch"},"Filter actions that expire within the current and the next two epochs, including information about all roles' votes, sorted by expiration epoch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"current_epoch=$(cardano-cli query tip --testnet-magic 4 | jq .epoch)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r --argjson current_epoch \"$current_epoch\" '\n  .proposals\n  | to_entries[]\n  | select(.value.expiresAfter >= ($current_epoch | tonumber) and .value.expiresAfter <= ($current_epoch + 2))\n  | {\n      govActionId: .value.actionId,\n      type: .value.proposalProcedure.govAction.tag,\n      expiresAfter: .value.expiresAfter,\n      committeeVotesCount: (.value.committeeVotes | length),\n      dRepVotesCount: (.value.dRepVotes | length),\n      stakePoolVotesCount: (.value.stakePoolVotes | length)\n    }\n  ' | jq -s 'sort_by(.expiresAfter)'\n\n")),(0,r.kt)("h3",{id:"show-actions-for-which-a-specific-drep-key-has-voted-indicating-the-dreps-vote-and-the-total-number-of-votes-received-for-this-action"},"Show actions for which a specific DRep key has voted, indicating the DRep's vote and the total number of votes received for this action:"),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"keyHash-0e7d17c8a917eaee361924d6471331128b3e0de5323f54d70dd0c8c9")," with the hex DRep ID of your interest, if it is a script based DRRep, make sure\nto use ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptHash")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"keyHash")," prefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r --arg dRepKey \"keyHash-0e7d17c8a917eaee361924d6471331128b3e0de5323f54d70dd0c8c9\" '\n  .proposals\n  | to_entries[]\n  | select(.value.dRepVotes[$dRepKey] != null)\n  | {\n      govActionId: .value.actionId,\n      type: .value.proposalProcedure.govAction.tag,\n      dRepVote: .value.dRepVotes[$dRepKey],\n      expiresAfter: .value.expiresAfter,\n      committeeVotesCount: (.value.committeeVotes | length),\n      dRepVotesCount: (.value.dRepVotes | length),\n      stakePoolVotesCount: (.value.stakePoolVotes | length)\n    }\n  '\n")),(0,r.kt)("h3",{id:"show-actions-where-the-given-drep-key-has-not-voted-yet"},"Show actions where the given DRep key has not voted yet:"),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"058b60ead63f667c0ff5b40e269dd1f05ce3a804256735ad4eddce20")," with the hex DRep ID of your interest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-cli conway query gov-state --testnet-magic 4 | jq -r --arg dRepKey \"keyHash-0e7d17c8a917eaee361924d6471331128b3e0de5323f54d70dd0c8c9\" '\n  .proposals\n  | to_entries[]\n  | select(.value.dRepVotes[$dRepKey] == null)\n  | {\n      govActionId: .value.actionId,\n      type: .value.proposalProcedure.govAction.tag,\n      expiresAfter: .value.expiresAfter,\n      committeeVotesCount: (.value.committeeVotes | length),\n      dRepVotesCount: (.value.dRepVotes | length),\n      stakePoolVotesCount: (.value.stakePoolVotes | length)\n    }\n  '\n")),(0,r.kt)("h3",{id:"show-the-total-number-of-yes-no-and-abstain-votes-for-a-given-governance-action-id"},"Show the total number of 'yes', 'no', and 'abstain' votes for a given governance action ID:"),(0,r.kt)("p",null,'Replace "1e08794a48b71ec7e48d3190c7c30455f9538d0e54f4087915ff201167334bc7" and "0" and  with the governance action ID and index of your interest.'),(0,r.kt)("p",null,"and .value.actionId.govActionIx == $actionIndex"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cardano-cli conway query gov-state --testnet-magic 4 \\\n  | jq -r --arg actionTxId "1e08794a48b71ec7e48d3190c7c30455f9538d0e54f4087915ff201167334bc7" --arg actionIndex "0" \' .proposals\n  | to_entries[]\n  | select(.value.actionId.txId == $actionTxId and .value.actionId.govActionIx == ($actionIndex | tonumber))\n  | {\n      govActionId: .value.actionId,\n      dRepVoteYesCount: (.value.dRepVotes | with_entries(select(.value == "VoteYes")) | length),\n      dRepVoteNoCount: (.value.dRepVotes | with_entries(select(.value == "VoteNo")) | length),\n      dRepAbstainCount: (.value.dRepVotes | with_entries(select(.value == "Abstain")) | length),\n      stakePoolVoteYesCount: (.value.stakePoolVotes | with_entries(select(.value == "VoteYes")) | length),\n      stakePoolVoteNoCount: (.value.stakePoolVotes | with_entries(select(.value == "VoteNo")) | length),\n      stakePoolAbstainCount: (.value.stakePoolVotes | with_entries(select(.value == "Abstain")) | length),\n      committeeVoteYesCount: (.value.committeeVotes | with_entries(select(.value == "VoteYes")) | length),\n      committeeVoteNoCount: (.value.committeeVotes | with_entries(select(.value == "VoteNo")) | length),\n      committeeAbstainCount: (.value.committeeVotes | with_entries(select(.value == "Abstain")) | length)\n    }\n\'\n')),(0,r.kt)("h3",{id:"show-the-active-treasury-withdrawal-governance-actions-and-their-current-vote-count"},"Show the active ",(0,r.kt)("inlineCode",{parentName:"h3"},"treasury withdrawal")," governance actions and their current vote count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'current_epoch=$(cardano-cli query tip --testnet-magic 4 | jq .epoch)\n\ncardano-cli conway query gov-state --testnet-magic 4 | jq -r --arg currentEpoch "$current_epoch" \'\n  .proposals\n  | to_entries[]\n  | select(.value.expiresAfter > ($currentEpoch | tonumber) and .value.proposalProcedure.govAction.tag == "TreasuryWithdrawals")\n  | { type: .value.proposalProcedure.govAction.tag, \n      govActionId: .value.actionId,\n      expiresAfter: .value.expiresAfter,\n      dRepVoteYesCount: (.value.dRepVotes | with_entries(select(.value == "VoteYes")) | length),\n      dRepVoteNoCount: (.value.dRepVotes | with_entries(select(.value == "VoteNo")) | length),\n      dRepAbstainCount: (.value.dRepVotes | with_entries(select(.value == "Abstain")) | length),\n      committeeVoteYesCount: (.value.committeeVotes | with_entries(select(.value == "VoteYes")) | length),\n      committeeVoteNoCount: (.value.committeeVotes | with_entries(select(.value == "VoteNo")) | length),\n      committeeAbstainCount: (.value.committeeVotes | with_entries(select(.value == "Abstain")) | length)\n    }\n\' | jq -s \'sort_by(.expiresAfter)\'\n\n')),(0,r.kt)("h3",{id:"show-the-active-update-committee-governance-actions-and-their-current-vote-count"},"Show the active ",(0,r.kt)("inlineCode",{parentName:"h3"},"update committee")," governance actions and their current vote count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'current_epoch=$(cardano-cli query tip --testnet-magic 4 | jq .epoch)\n\ncardano-cli conway query gov-state --testnet-magic 4 | jq -r --arg currentEpoch "$current_epoch" \'\n  .proposals\n  | to_entries[]\n  | select(.value.expiresAfter > ($currentEpoch | tonumber) and.value.proposalProcedure.govAction.tag == "UpdateCommittee")\n  | { type: .value.proposalProcedure.govAction.tag,\n      govActionId: .value.actionId,\n      expiresAfter: .value.expiresAfter,\n      dRepVoteYesCount: (.value.dRepVotes | with_entries(select(.value == "VoteYes")) | length),\n      dRepVoteNoCount: (.value.dRepVotes | with_entries(select(.value == "VoteNo")) | length),\n      dRepAbstainCount: (.value.dRepVotes | with_entries(select(.value == "Abstain")) | length),\n      stakePoolVoteYesCount: (.value.stakePoolVotes | with_entries(select(.value == "VoteYes")) | length),\n      stakePoolVoteNoCount: (.value.stakePoolVotes | with_entries(select(.value == "VoteNo")) | length),\n      stakePoolAbstainCount: (.value.stakePoolVotes | with_entries(select(.value == "Abstain")) | length)\n    }\n\' | jq -s \'sort_by(.expiresAfter)\'\n')))}d.isMDXComponent=!0}}]);