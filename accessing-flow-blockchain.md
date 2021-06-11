# Accessing Flow Blockchain

With the [Flow JS SDK](https://docs.onflow.org/flow-js-sdk/), a developer can:

* Query the Flow Blockchain
* Send transactions \(e.g. initializing resources, sending assets, purchasing, etc.\)
* Sign transactions through wallet integration, avoiding key management

This ability to interact with Flow via a frontend application can be coupled with your API to create a powerful UI/UX. Typically want to be querying your API as you’ll be better able to get aggregated views, do things like sorting, filtering, etc. However, you might want to query the chain directory from the FE to get very specific things, such as your fungible token balance or other things that wouldn’t necessarily be represented in the backend API

