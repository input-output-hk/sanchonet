## Submit and Vote on Constituion

### Test Steps

1. Produce text file and hash disgest of the proposed constituion
2. A regular wallet builds a transaction with an ada deposit, return addres including the anchor of proposed constitution

<details closed>
  <summary>plutus script checks</summary>

-----
`ScriptPurpose` is `Proposing`

`txInfoProposalProcedures` contains correct:
  * `GovernanceAction` for a `NewConstitution` containing correct `constitutionHash` and `constitutionScript`
  * deposit `Value`
  * return address `Credential`
  * `Anchor`

`txInfoVotingProcedures` is empty map

`txInfoCurrentTreasuryAmount` maybe contains correct Value in treasury

`txInfoTreasuryDonation` maybe contains correct Value being donated to treasury

-----

</details>

3. Before action expires, votes of all kinds (Yes, No, Abstain) are cast from SPOs (constituion committee and DReps are not available in phase 1)

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
    - With a supermajority in favour of a new constitution it is considered ratified and replaces the old constituion at the end of current epoch
    - Without the supermajority, the proposed constituion is dropped and the old constitution remains valid at the end of current epoch


### Additional tests

- Vote as `CommitteeVoter` and `DRepVoter` once it is possible to appoint a committee or register as DRep
- Minimum required deposit amount
- More than one TxIn required to satisfy deposit
- Ledger prevents:
    - Vote too late on a new constitution that has already been accepted
    - Vote on constitution amendment that has already been ejected by the majority
    - TxIn holds less than expected deposit amount
    - TxIn for deposit has non-ada value

