## Submit and vote on hard fork

### Test Steps
1. A regular wallet builds a transaction with a hard-fork proposal, incrementing the protocol version

<details closed>
  <summary>plutus script checks</summary>

-----
`ScriptPurpose` is `Proposing`

`txInfoProposalProcedures` contains correct:
  * `GovernanceAction` for a `HardForkInitiation` (verify `ProtocolVersion`)
  * deposit `Value`
  * return address `Credential`
  * `Anchor`

`txInfoVotingProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct Value in treasury

`txInfoTreasuryDonation` maybe contains correct Value being donated to treasury

-----

</details>

2. Before action expires, votes of all kinds (Yes, No, Abstain) are cast from committee members, SPOs and DReps

<details closed>
  <summary>plutus script checks</summary>

-----

`ScriptPurpose` is `Voting`:
  * For script associated with an committee member vote the `Voter` is `CommitteeVoter` with correct `HotCommitteeCredential`
  * For script associated with an SPO vote the `Voter` is `StakePoolVoter` with correct SPO `PubKeyHash`
  * For a script associated with a DRep vote the `Voter` is `DRepVoter` with correct SPO `DRepCredential`
  * `GovernanceActionId` is the transaction hash that created the proposal and the index that points to the governance action

`txInfoVotingProcedures` contains correct maps of `Voter`, `GovernanceActionId` and `VotingProcedure` for all types of `Vote` and maybe with `Anchor`

`txInfoProposalProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct `Value` in treasury

`txInfoTreasuryDonation` maybe contains correct `Value` being donated to treasury

-----

</details>

3. Depending on the voting results:
    - With a majority in favour, the hard-fork commences on the following epoch boundary
    - Without a majority in favour, no hard-fork will occur

### Additional tests

- Hard-fork proposal without SPO input
- Hard-fork proposal skipping major version number instead of incrementing
