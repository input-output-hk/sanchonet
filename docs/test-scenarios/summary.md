## Test Scenarios for each phase of the intial rollout

These high-level test scenarios cover new governance functionality throughout the 6-phase feature implementation plan. They serve as guidance for newcomers, testers, and engineers developing integration and end-to-end test cases.

### Prerequisites to running these test scenarios
- Each phase will require updated software supporting new functionality.
  - The correct `cardano-node` version is being used to run the network
  - The correct `cardano-api` and `cardano-cli` are used locally to query the ledger and and build transactions
- The network environment is running with registered SPOs and has funds distributed to some user wallets

### Plutus
Integration for Plutus script context (see issue [#5448](https://github.com/input-output-hk/plutus/issues/5448)) will commence after completeing all 6 phases of ledger functionality implementation. While plutus-related checks are outlined in these test steps, they cannot be tested during the initial 6-phase rollout. There checks will be automated and executed once the funcitonality becomes accessible.

### Extra tests:
- Overriding votes are never double counted