## Submit and vote on protocol parameter change and treasury withdrawal governance actions

### Test Steps for protocol parameter change

1. Produce a protocol parameter json file with some amendments to the parameters currently in use
2. A regular wallet builds a transaction including an ada deposit, return address and the proposed network protocol parameters

<details closed>
  <summary>plutus script checks</summary>

-----
`ScriptPurpose` is `Proposing`

`txInfoProposalProcedures` contains correct:
  * `GovernanceAction` for a `ParameterChange` (PParams won’t initially be exposed to plutus)
  * deposit `Value`
  * return address `Credential`
  * `Anchor`

`txInfoVotingProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct Value in treasury

`txInfoTreasuryDonation` maybe contains correct Value being donated to treasury

-----

</details>

3. Before action expires, votes of all kinds (Yes, No, Abstain) are cast from SPOs and DReps (constitution committee are not available in phase 4)

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
    - With a majority in favour, the protocol parameters update is applied a the end of the next epoch
    - Without a majority in favour, the protocol parameters update is not applied

### Test Steps for treasury withdrawal

1. Produce a protocol parameter json file with some amendments to the parameters currently in use
2. A regular wallet builds a transaction including an ada deposit, return address and the proposed network protocol parameters

<details closed>
  <summary>plutus script checks</summary>

-----
`ScriptPurpose` is `Proposing`

`txInfoProposalProcedures` contains correct:
  * `GovernanceAction` for a `TreasuryWithdrawals` (verify credentials and values)
  * deposit `Value`
  * return address `Credential`
  * `Anchor`

`txInfoVotingProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct Value in treasury

`txInfoTreasuryDonation` maybe contains correct Value being donated to treasury

-----

</details>

3. Before action expires, votes of all kinds (Yes, No, Abstain) are cast from SPOs and DReps (constitution committee are not available in phase 4)

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
    - With a majority in favour, the exact amount is withdrawn to credential's rewards account at the epoch boundary
    - Without a majority in favour, no amount is withdrawn


### Additional tests

- Vote as `CommitteeVoter` once it is possible to appoint a committee
- Multiple protocol parameter updates in the same epoch is restricted so that only one can be enacted. Each governance action must include the governance action ID for the most recently enacted action of its given type.
- Multiple enacted withdrawals to same credential don't interfere with each other, they should sum to total.
- Multiple enacted withdrawals to different credentials don't interfere with each other.
