
### Links
- YouTube - <https://www.youtube.com/watch?v=qij5qpHcbBk>


### What is NAT?
- NAT is the way a router **maps** a device's private IP address to a public IP address (the router's public IP address provided by the ISP) that can be used by the internet.
- **For every device connected to the same router will have the same public IP address which is the router's public IP address**. The *port* number will determine which device the request should be routed to.
- While translating the *port* is crucial as it can tell the router which application or browser tab the data coming from the internet should be forwarded to.
- Most commonly used NAT is the **Overload** or **Poor Address Translation** where the router maintains a table to map a device's private IP to the public IP
	![[Screenshot 2023-05-10 at 12.42.39 PM.png]]

### What are the available private IP addresses?
- There are 3 blocks of IP addresses that can be used as private addresses
	- ![[Screenshot 2023-05-10 at 12.46.25 PM.png]]