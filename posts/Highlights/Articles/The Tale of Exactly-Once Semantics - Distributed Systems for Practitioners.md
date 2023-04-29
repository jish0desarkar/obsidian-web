# The Tale of Exactly-Once Semantics - Distributed Systems for Practitioners

## Metadata
- Author: [[for free]]
- Full Title: The Tale of Exactly-Once Semantics - Distributed Systems for Practitioners
- Category: #articles
- URL: https://www.educative.io/courses/distributed-systems-practitioners/gkoZmDoMPZY

## Highlights
- De-duplication approach# In the de-duplication approach, we give every message a unique identifier, and every retried message contains the same identifier as the original. In this way, the recipient can remember the set of identifiers it received and executed already. It will also avoid executing operations that are executed. It is important to note that in order to do this, we must have control on both sides of the system: sender and receiver. This is because the ID generation occurs on the sender side, but the de-duplication process occurs on the receiver side.
