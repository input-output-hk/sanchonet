## Submit and vote on formation of new constitutional committee, state of no-confidence, and propose new threshold/term limits

### Test Steps for formation of a new constitutional committee

1. Produce a list of VKey hashes for existing committee members to be removed
2. Produce a list of VKey hashes for new committee members
3. A regular wallet builds a transaction including an ada deposit, return address and the proposed removed/added committee members

<details closed>
  <summary>plutus script checks</summary>

-----
`ScriptPurpose` is `Proposing`

`txInfoProposalProcedures` contains correct:
  * `GovernanceAction` for a `NewCommittee` (verify old and new committee)
  * deposit `Value`
  * return address `Credential`
  * `Anchor`

`txInfoVotingProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct Value in treasury

`txInfoTreasuryDonation` maybe contains correct Value being donated to treasury

-----

</details>

4. Before action expires, votes of all kinds (Yes, No, Abstain) are cast from SPOs and DReps

<details closed>
  <summary>plutus script checks</summary>

-----

`ScriptPurpose` is `Voting`:
  * For script associated with an SPO vote the `Voter` is `StakePoolVoter` with correct SPO `PubKeyHash`
  * For a script associated with a DRep vote the `Voter` is `DRepVoter` with correct SPO `DRepCredential`
  * `GovernanceActionId` is the transaction hash that created the proposal and the index that points to the governance action

`txInfoVotingProcedures` contains correct maps of `Voter`, `GovernanceActionId` and `VotingProcedure` for all types of `Vote` and maybe with `Anchor`

`txInfoProposalProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct `Value` in treasury

`txInfoTreasuryDonation` maybe contains correct `Value` being donated to treasury

-----

</details>

5. Depending on the voting results:
    - With a majority in favour, the old committee no longer exists and the new committee is appointed at epoch boundary
    - Without a majority in favour, the old committee remain relevant

### Test Steps for submitting motion of no-confidence

1. With an ongoing governance action of type that requires the committee, it can be in the voting phase or already ratified.
2. A regular wallet builds a transaction to propose a motion of no-confidence

<details closed>
  <summary>plutus script checks</summary>

-----
`ScriptPurpose` is `Proposing`

`txInfoProposalProcedures` contains correct:
  * `GovernanceAction` for a `NoConfidence`
  * deposit `Value`
  * return address `Credential`
  * `Anchor`

`txInfoVotingProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct Value in treasury

`txInfoTreasuryDonation` maybe contains correct Value being donated to treasury

-----

</details>

3. Before action expires, votes of all kinds (Yes, No, Abstain) are cast from SPOs and DReps

<details closed>
  <summary>plutus script checks</summary>

-----

`ScriptPurpose` is `Voting`:
  * For script associated with an SPO vote the `Voter` is `StakePoolVoter` with correct SPO `PubKeyHash`
  * For a script associated with a DRep vote the `Voter` is `DRepVoter` with correct SPO `DRepCredential`
  * `GovernanceActionId` is the transaction hash that created the proposal and the index that points to the governance action

`txInfoVotingProcedures` contains correct maps of `Voter`, `GovernanceActionId` and `VotingProcedure` for all types of `Vote` and maybe with `Anchor`

`txInfoProposalProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct `Value` in treasury

`txInfoTreasuryDonation` maybe contains correct `Value` being donated to treasury

-----

</details>

4. Depending on the voting results:
    - With a majority in favour, we enter a state of no-confidence where the current committee is no longer able to participate in governance actions and must be replaced before any governance actions can be ratified.
    - Without a majority in favour, the ongoing governance actions can proceed to be ratified and enacted

### Test Steps for new threshold/term limits

TODO


### Additional tests

- Must be able to form a new committee when there are no existing members to remove
- Propose to only add committee members
- Propose to only remove committee members
- Plutus sees correct txInfo when regular wallet delegates to Abstain (`DRepAlwaysAbstain`)
- Plutus sees correct txInfo when regular wallet delegates to No Confidence (`DRepAlwaysNoConfidence`)
- Delegating to No Confidence considers stake as a "No" vote for every action execept for No Confidence
- Delegating to No Confidence considers stake as a "Yes" vote for No Confidence action
- Motion of no-confidence after ratification but before enactment
- Majority abstain also causes motion of no-confidence
- Funds are always immediately returned when entering a state of no-confidence and all not yet enacted governance actions are dropped
