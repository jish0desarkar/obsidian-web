### Links
- Gaurav Sen - https://www.youtube.com/watch?v=zaRkONvyGr8
- ByteByteGo - https://www.youtube.com/watch?v=UF9Iqmg94tk&t=421s

### Consistent Hashing
#### Need for Consistent Hashing
##### Problem
- In regular hashed load balancing we hash the _request_id_ and then mod it with the number of servers - **hash(request_id) % num_of_servers**. This way the _request_id_ gets mapped to a server exactly.
- The problem occurs when we add or remove a server from the list of servers. This will change the **num_of_servers** variable and almost all the request will change it's destination. 
- Think about it from a data storing POV. Suppose users **1-100 are stored in s1, 101-200 are stored in s2 and 2001-300 are in s3**. We can find where a user is stored using the abover hash but if a server is added then the **mod** will change and all the **users will have to relocate** according to the new hash function.
##### Solution
- Consistent Hashing solves the addition and removal of servers problem.
- Construct a *hash ring* of *size m* and hash the server ids (can use IP or any other ID associated to the servers) and place them in the ring. 
- When a request comes in we hash the _request_id_ but **instead of modding with number of server we mod with m value** - **hash(request_id) % m**
- Wherever the request is placed go **clockwise** and find the *immediate* server, this will server or store/retrieve the data.
- In case of addition or removal of the server only a small set of servers would be impacted, i.e. only a **small amount of data need to be relocated**. 
- **Virtual nodes** can also be placed in the ring to further reduc**e load being skewed to one particular set of servers**. This can be done by assigning *multiple ids* to the server. (server_id, server_id + x, server_id + y)
- ![[FZPxjppUsAIoVod.jpg]]