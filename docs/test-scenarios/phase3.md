## Submit and vote on info governance action

### Test Steps

1. Produce text file and hash digest of some arbitrary data as the proposed 'info'
2. A regular wallet builds a transaction including an ada deposit, return address and the proposed 'info' to be inscribed on-chain

<details closed>
  <summary>plutus script checks</summary>

-----
`ScriptPurpose` is `Proposing`

`txInfoProposalProcedures` contains correct:
  * `GovernanceAction` for a `InfoAction`
  * deposit `Value`
  * return address `Credential`
  * `Anchor`

`txInfoVotingProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct Value in treasury

`txInfoTreasuryDonation` maybe contains correct Value being donated to treasury

-----

</details>

3. Before action expires, votes of all kinds (Yes, No, Abstain) are cast from SPOs and DReps (constitution committee members are not available in phase 3)

<details closed>
  <summary>plutus script checks</summary>

-----

`ScriptPurpose` is `Voting`:
  * `Voter` is `StakePoolVoter` with correct SPO `PubKeyHash`
  * `GovernanceActionId` is the transaction hash that created the proposal and the index that points to the governance action

`txInfoVotingProcedures` contains correct maps of `Voter`, `GovernanceActionId` and `VotingProcedure` for all types of `Vote` and maybe with `Anchor`

`txInfoProposalProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct `Value` in treasury

`txInfoTreasuryDonation` maybe contains correct `Value` being donated to treasury

-----

</details>

4. Depending on the voting results:
    - With a majority in favour, the 'info' is inscribed on-chain at the end of current epoch
    - Without a majority in favour, the 'info' is not recorded


### Additional tests

- Vote as `CommitteeVoter` once it is possible to appoint a committee
- Multiple enacted 'info' proposals don't interfere with each other, they should all be inscribed at the same epoch end.