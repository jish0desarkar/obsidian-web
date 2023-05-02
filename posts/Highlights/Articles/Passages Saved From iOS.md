# Passages Saved From iOS

## Metadata
- Author: 
- Full Title: Passages Saved From iOS
- Category: #articles

## Highlights
- This is how it works: each node in the system is randomly assigned an integer in a range of [0, L]. This range is called ring (for example, [0, 360]). Then, the system uses a record with an attribute value s as a partitioning key to locating the node after the point hash(s) mod L in the ring.
  As a result, when a new node enters the ring, it receives data only from the next node in the ring. The other nodes don’t need to exchange any more data. Similarly, when a node leaves the ring, its data transfer to the next node in the ring.
- Pessimistic replication
  Pessimistic replication tries to guarantee from the beginning that all the replicas are identical to each other—as if there was only one copy of the data all along.
  Optimistic replication
  Optimistic replication, or lazy replication, allows the different replicas to diverge. This guarantees that they will converge again if the system does not receive any updates, or enters a quiesced state, for a period of time.
