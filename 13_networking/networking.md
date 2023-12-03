-  `Networks` : it is a group or system of `interconnected` people or items.

- `Computer Networks` : computers connected with each other through wires or wireless-ly is known as C.N. 

-  `internet` : internet is a NETWORK of COMPUTER NETWORKS. OR complex web of interconnected C.N.

### history of internet :
- 1957 => soviet => sputnik(satellite) => USA => ARPA(advance research project agenda)   

- 1960's - 1970 => communication system ARPA's computer to talk => 1969- ARPANET => 1980's TCP/IP-`internet` 

- 1990's CERN-hyperlink based documents 

- 1990 -tim bernerly- introduced a network by the name `world wide web` to store these hyperlink based documents(HTML).

- later browsers came which supported www like mosac , netscape.

### protocols 
> just how you need a set of rules to travel.

> you are using networks in your country and someone using other networks in other country , so there should a set of rules and regulations so that people can share data easily.

- `Network Protocols` : are a set of rules and regulations setup to communicate and share information over a network .
ex: http , tcp , smtp , udp etc.


### packets
- we can't send large data on networks(everyone has limits). We divide the data to be sent into smaller chunks , these small chunks are called `packets`.

- if a packet is lost you can easily generate them(small).

### address
- sending data over the network requires destination details. This detail uniquely identify the end system , is called `address`. In modern world , we have `ip address`. (devices location)

### ports
> there can be many family member present on given address , how to identify whom the packet/data belongs to ?

>  The packet you are getting on the network is of which network application ?

- `Port` helps you get the packets to specific process on the host (`port number`)    
- `ip address` + `port` = `web socket`.
- every application has a 16 bit port number , {0 - 2^16}= 65535.

-`0 to 1023` => port numbers is know as `well know ports`.These ports are reserved for specific applications. ex: port 443 belongs to https.

- `1024 to 49152` => registered ports : they are used by specific potentially propriety apps/process that are know but not system defined. ex: sql server uses `1433` , mongo: `27017`

- `49152 to 65535` => dynamic ports .

### access networks
- these are media(devices) using which end systems(user device) connect to internet.

### network interface adapter (NIC)
- it enables computer to attach to a network , as there are different type of networks it acts as a single suit to connect to any network.

### DSL (digital subscriber line)
-  DSL uses the existing telephone groundwork lines for internet. Generally is provided by same company which supplies telephone line.

### ISP (internet  service provider)
- it is a company that provide end-users internet. ex: AT&T.



# network protocol stack -
- A protocol stack, often referred to as a network protocol stack, is a set of standardized networking protocols and software that work together to enable communication and data exchange between devices or systems in a computer network. These protocols are organized in layers, each responsible for specific functions in the process of transmitting and receiving data.
- two major network stack models are :-
1. `osi model` : 7 layers =>
    1. application (end user) : http , ftp , smtp , pop3 , imap , dns , telnet etc.
    2. presentation : ssl , jpeg , ascii , gif , mpeg , bmp etc.
    3. session : netBIOS , PPTP 
    4. transport :  tcp , udp , sctp , icmp etc.
    5. network : IP , ICMP , OSPF , RIP etc.
    6. data link : wi-fi , ppp , hdlc , mac etc.
    7. physical : ethernet , usb , fiber channel , hdmi , dsl etc.

2. `tcp/ip` : 5 layers =>
    1. application
    2. transport
    3. network layer
    4. data link 
    5. physical layer


### application layer -
- provides network services directly to end-users.
### presentation layer - 
- presentation of data(to rest of layers) , encryption , compression etc.
### session layer - 
- user session management 

> all these three layers combines in the application layer in TCP/IP.

### transport layer -
- divides big chunk of data coming from above to small chunks and manage these chunks.
### network layer -
- how routing of packets will be done on the network.
### data link layer - 
- layer is responsible for addressing, framing, and error detection on the network. It ensures data integrity at the link level.
### physical layer -
- wires , Stellite etc.

#

# application layer -
> roles :
1. writing/providing data off to the network. 
2. reading the data from the user (writing from receiver's perspective)
3. contains application that helps users to interact.
4. error handling and recovery can also be done.

> where it exits ? it exits on end system only!  
 ex:: instant messaging , www , voip , email , social media etc.


- `client-server architecture`: it is a 2 lvl architecture.
> client server architecture  states that whenever you want to communicate between two machines , one needs to be a server and one need to be a client.
> in real world this server are big aws machines and clients are mobile app , browser desktop app etc.

> `SERVERS` : this process controls access to a centralized resource or service such as a website or webapp.  
> `client` : the main screen (frontend).
- `P2P architecture` (peer to peer) : many end users , no concept of servers . ex: torrent.
- `hybrid architecture`: p2p + c/s


## http - `hyper text transfer protocol ` - a protocol in application layer 
> http is a `request-response protocol`.
- it defines the whole procedure oh how the client & server will interact.
- if you want to send a data like hypertext , then all the rules and regulations are written inside http.
- `object`: web pages are the main object that contains other objects. Some other objects can be mp3 , jpg etc.
Every object has a url.

## URL - `uniform resource locator` 
- url : protocol + hostname + location of file/object + extra arguments 
ex: `http :  //flipkart.com  /image/23.jpg   ?q=45`

1. the first message : `http request`
2. the second message : `http response`

> http is also categorized in request-response protocols
> http is `stateless` protocol : the servers don't store any information about the client.

- so , a lot of application layer protocols depends on lower level protocols of transport layer.
- in transport layer , there are two main protocol :
1. tcp 
2. udp

- http depends on tcp => in order to establish http connection , you have to first setup a tcp connection 
 
- there are two type of http connection :-
1. persistent http : ex. web sockets 
2. non-persistent http : ex.

## ` http request and response messages` -
- any http message are plain ASCII text.

## `http req message `: host , method , status code , reff. policy , version etc.

## `header` : 
- header is like some extra piece of information that you want to send with the request so that we don't pollute the request. 

## `http method` - tells what's the server might be doing with request.
- there are multiple http methods :-
1. get : request some data
2. post : put some data on the server 
3. put : complete object update of data
4. patch : partial update of data
5. delete  : delete an object at a given url

### user agent -
- it specifies the client , useful when server has different webpages that exits for different queries.
### accept-language -
- it specifies the preferred language.
### connection -
- close/open {tells if http is persistent or non-persistent}    


## http status code - indicates weather a http req is successfully completed -
1. informational responses (100-199)
2. successful responses (200-299)
3. redirection responses (300-399)
4. client error responses (400-499)
5. server error responses (500-599)


## cookies -
- these are mainly concerned towards cookies.
- http is a stateless protocol , a lot of times user session is required.
> how cookies work ?
- cookies are unique identifier strings and these are set by the servers through http headers.
- as soon as a cookie is stored , it is sent along with subsequent http request to the same server.
- this allows server to know how is contacting it and hence serve the content accordingly.
### set-cookie header - 
- when a server wants to set a cookie it includes "`set-cookies : value`" in the http response.
- this value is stored in the cookie file of the browser.


## email-SMTP -
- for executing the functionality of email , SMTP(simple mail transfer) is used.
- one more protocol named `POP3` is used in combination with smtp. 
- one is used to send emails that are stored in the user's inbox and other is use to retrieve emails to a user.
> `a lot of application layer protocols uses below layer protocols`
- smtp also uses TCP protocol like http from transport layer.
- connection for smtp is setup on `port 25`. 
- mail clients gives the actual UI for end users to sent and receive mail like gmail , outlook etc

### how smtp works ?
1. when a email is sent, it is sent to the sender's smtp server using smtp protocol. 
>also the smtp server is configured in the mail clients.
2. then smtp server places the mail on a message queue.
3. then smtp server initiates a connection with receivers smtp server and conducts an initial smtp handshake.
4. then finally it sends the email to the recipient smtp server.
5. the email is downloaded from receiver smtp server and then the client shows the mail.
> smtp => push protocol(sending)
> POP3/IMAP => pull protocols(downloading)


## POP-
- `pop3` (post office protocol)(version-3) : it download emails in 4 phases :-
1. connect
2. authorize
3. transaction
4. update
> there are two modes of pop :-
1. download and keep 
2. download and delete

## IMAP (internet message access protocol) -
- emails are kept on the server and not deleted .
- local copies of the emails are cached on each device 
- if an email is deleted by user manually , only then it get deleted from server.

```
## bit torrent -
> key points 
1. protocol for peer to peer file sharing. A bit torrent file is an application that uses this protocol.
2. follows a hybrid architecture instead of p2p.
3. data is downloaded and uploaded directly to and by peers.
4. allows easy exchange of files.
5. a bit-torrent client requests file from multiple clients in parallel.
6. big file is divided into small chunks of data called as `pieces`.
7. if a client downloads a piece successfully , then bit-torrent tells other clients that OK , this client has this piece of data downloaded. So they can download it too.
8. these collection of collaborating clients that are working together are called `swarms`.

### torrent file -
- client joins a swarm by downloading a (.torrent) file that tells the following info :-
1. gives info about sizes of the pieces , how it starts interacting with the clients.
2. gives details about `tracker` (server that tracks who is participating in the swarm).
3. when a client joins swarm , it request a list of clients from tracker , and starts communication with these clients with TCP(initially as a leacher).
4. when the size of swarm increases , we can use something like tracker-less torrents DHT (distributed hash table).
i) it's a distributed coordination mechanism.
ii) information on swarm across many nodes.

# what exactly bit torrents does ?
1. (it breaks up file into pieces)
- for throughput pieces are large : 256kb - 1mb 
- for latency , one single piece can be subdivided in sub-pieces.
- this is to insure that stream transferring the file is long lived enough that its congestion window grow to reasonable size.

2. pieces also insures integrity
- a torrent contains SHA-1(cryptographic hash function) hashes of every piece.

## TFT(tit for tat) policy -
- you send data to peers , who send you data.
- the peers who contribute can download faster , this creates an incentive to send pieces to the peers.
# bit tyrant
```


#

# transport layer -
- the key responsibility is to extend network layer to application layer.
- transport layer and it's protocol resides on the end system only.
> responsibilities of transport layer :-
1. `segments data` : (network layer understands data in manageable packets) transport layer divides the data into manageable pieces called `SEGMENTS`(tcp) or `DATAGRAMS`(udp).
2. `can allow multiple conversations` : tracks each application to application connection or `conversation` separately,
which can allow multiple conversations at once.
3. `multiplexing of data` : gathering data from multiple application processes of sender , enveloping that data with headers and sending them as a whole to the intended receiver. It allows message to be sent to more than one destination host via single medium.
4. `de-multiplexing of data` : delivering received segments at receiver side to the correct application process is called de-multiplexing.
5. `reliable data transfer` : there are a lot of network layer imperfection that transport layer is supposed to deal with :-
- segments can be corrupted
- segments can be lost 
- segments can be re-ordered or duplicated
## reliable data transfer - some workarounds for network layer imperfections
1. `checksums` : (segments may be corrupted by transmission errors) checksum is an error detection mechanism. checksums(arithmetic sum) can be attached with the segment , which is verified by the receiver.
2. `retransmission timers` : (segments may be lost). The value of retransmission time should be greater than the `roundtrip-times(sender-to-receiver time of data + delta(acknowledgement time of completion))`{segment by segment}
> if retransmission timer timeout , then we just resend that segment.
> `limitation of retransmission timer` :-
3. `sequence number`:-(if segment received by receiver but failed receiver failed to send acknowledgement) this is an identification number attached with each segment to identify duplicates.
> due to the fact that, sequence numbers are consecutive numbers , we will also be able to handle the reordering issue.

### sliding window - (sender don't want to wait for every acknowledgement)
- it is used to avoid overload on the receiver. There are set of consecutive numbers that sender uses in transmitting to insure wait-less data transfer. At the beginning of session , sender and receiver agrees on the window size.


## TCP (transmission control protocol) ( a transport layer protocol)- tcp insures reliable delivery 
>what tcp does ?
1. send data : (at appropriate transmission rate)
2. segment data : 
3. congestion control
4. identify and retransmission message 
> TCP is an acknowledge based protocol ,i.e., it gives you the message that the delivery of the corresponding data packet was successful or not.

### applications of tcp -
1. ftp : ftp is built on layer of tcp. `port 20 and 21`
2. ssh protocol : is a protocol that allows a secure connection to a remote host over a unsecure network.
3. email 
4. web browsing : http/https ; whenever is sender is sending a packet to a receiver via  http protocol , it can't directly send it , both of them should first prepare a TCP connection, and being a reliable connection over this connection only we will be able to send the corresponding http packet.

#### key features of TCP -
1. `connection oriented` : it creates a long term connection between the hosts and the connection remains until a certain termination is followed.
2. `full duplex` : both parties can send their messages simultaneously over tcp.
3. `point to point transmission` : exactly two endpoints.
4. `error controls` : tcp can detect errors in the packets and it will allow you to resend or make correction.
5. congestion control

### segment header -
|--------------------------------------------------| 
| source port(2 bytes) | destination port(2 bytes) |
|--------------------------------------------------|
|              sequence number (4 bytes)           |
|--------------------------------------------------|
|           acknowledgement number (4 bytes)       |
|--------------------------------------------------|
| heder  | reserved  |  8 flags  |  window size    |
| length | (4bits)   |  (8 bits) |  (2 bytes)      |
|(4 bits)|           |           |                 |
|--------------------------------------------------|
| checksum(2 bytes)     | urgent pointer (2 bytes) |
|--------------------------------------------------|
|                                                  |
|           options and padding (40 bytes)         | 
|                                                  |
|--------------------------------------------------|

> in order to stablish tcp connection between two hosts we use `3 way handshake`.

## UDP (user datagram protocol) - (a transport layer protocol)
1. used by apps that don't need guaranteed service of tcp.
2. either because the application handles it on it's own or it just don't need reliable delivery.
3. much simpler to implement than tcp.
4. it gets the data(from application layer) , converts it into datagram , and send it to network layer.
(no sequences done)

### UDP header - header => 8 bytes  & data => 2^16-8 bytes  &  max size of header => 2^16 bytes and 
|--------------------------------------------|
|source port        | destination port       |
|number (2 bytes)   |  number (2 bytes)      |
|--------------------------------------------|
|length (2 bytes)   | checksum (2 bytes)     | 
|--------------------------------------------|
|                                            |
|                 DATA                       |
|                                            |
|--------------------------------------------|

### why UDP ?
1. faster 
2. reliability can be built separately
3. small header size gives an edge in terms of reducing transmission overhead and quicker transmission overhead.

### application of udp
- x box 
- name translation of DNS 

#  

# network layer -

## Internet Protocol :
- IP is the network layer protocol 

## IPV4 

## design was based on following assumptions -
1. ip should provide a unreliable connection-less service.
2. must have fixed 32 bit size address. ex: `x.y.z.w` { 8*4= 32 bits}
3. ip host should be able to exchange variable length packets.

## address assignment
- appropriate network layer address allocation is the key to efficiency and scalability of internet.

- NOTE: a naive allocation scheme will be to provide an IPV4 to each host when the host is attached to internet as `first come , first served`.With this solution a host in india can have 2.3.4.5 and a host in belgium can have 2.3.4.6
- this would force all routers to maintain a specific route towards all~1 billion hosts on internet , which is not scalable.

## subnetting - 
- one solution is that routers should only maintain routes towards "`blocks of address`" & not towards individual hosts.
- for this blocks of ip address are assigned to ISP's
- the ISP's assign the sub block of the assigned address space in a hierarchial manner. These blocks are called `subnet`.
- a typical subnet groups all the hosts that are part of the same enterprise block is usually assigned to LAN.


### ip address has two parts - 
ex: 1101 1010 1011 + 1010 1111  
-   subnetwork ID + host ID

 

## address classes -
- when a router need to send the packet , it must know the `subnet of the destination address` to be able to consult it's routing table to forward the packet.
- subnet address => higher order bits & host address => lower order bits

### we have 5 classes -

1. `class A` => first bit is always zero (50%)
- therefore in classA , we will have 2^31 bits as 1 bit is fixed.
- in classA , first octet(first 8 bit) represents network ID and rest of bits represents host.
- therefore , no. of network id's in classA is 2^7.
- therefore , for each network id we will have 2^24 hosts.
- `default mask of classA` => 255.0.0.0 helps us detect the network address for classA by doing bitwise mask .
> every network id has two special ip addresses ;
- 2^24-2 = unique hosts in classA (x.0.0.0=net id & x.255.255.255=broadcast id)

2. `class B` => first two bits are always set as 1 and 0.
- total ip address => 2^30
- first two octet tells about network ID and rest tells about host ID.
- total network ip address = 2^14
- total hosts ip address for each network = 2^16 
- therefore , unique hosts in classB => `2^16-2`
- `default mask of classB` => 255.255.0.0 

3. `class C` => first three bits are 1 and 1 and 0.
- therefore , total hosts are => `2^29`
- first three octet are fixed for network ID.
- therefore number of network ID's => `2^21`
- for each network total no. of hosts => `2^8`
- therefore total hosts  id's for each network => `2^8-2`
 
4. `class D` => first bits are always fixed 1,1,1,0
- range - `224 - 239`
- total unique ip address => `2^28`
- these are specially used for multicasting

5. `class E` => first four bits are 1,1,1,1
- range => `240 - 255`


# disadvantages of classful IP addressing -
1. wastage of ip address
2. maintenance and time consuming 
3. more prone to error 



# classless addressing - 
- no classes , but blocks 
- notation => `x.y.z.w/n` , where n is mask or the  no. of bits to represents the block
- ex: `200.10.20.40/28` : the first 28 bits are set in the mask and the rest are zero. 
therefore , 2^4 ip address that can represent hosts.
## rules -
1. address should be continuous
2. no. of address in a block must be equal to the power of two.
3. first address/network address should be divisible by the size of block.

## subnetting in classful addressing -
1. dividing a network in small network 
2. no effect should be done on network ID.


# IPV6 -

> goals of internet protocol address (v4)
- stitch many networks together 
- 32 bit address
- so total IP address available => 2^32

## address structure -
- 128 bit address => 2^128 {21 ip addresses/in^2 of world's surface}
- separated into 2 parts => `subnet prefix` and `host suffix`.
- user 8 octets and can be represented using hexadecimal as 8 blocks of 16 bits each.
- can omit single block which only contains zero with `::`.
- use brackets in url 
ex: `http://[2001.470.806d.1::9]:80` 
["INFO" - 11:33:10] Extension Name: esbenp.prettier-vscode.
["INFO" - 11:33:10] Extension Version: 10.1.0.

## address assignment -
- similar to that of IPV4 and depends on RIP ( reginal internet registry)
- ex: IPV6/n => n-bits to be used for suffix part.

> we can auto generate IPv6 address from subnet/64 and ethernet address.
- ethernet has 48 bit address , initial 24 bits denote manufacture and later 24 bit as devices.
- convert 48 bit ethernet address to 68 bit host ID by sticking `0xfffe`(15 1's and one 0) in the middle.




--------------------------------------------------------------------------------------------------






- `domain name server (DNS)` : mapping from url to its ip address.DNS resolves url into ip address.
- `IP address` : an address using which you can `uniquely identify` a network or a computer system.
- Over the internet every device has an IP address.


- what kind of information is expected to be extracted out when we type `URL` , is somewhere written on some computer machines.We don't know where these computer machines residing on the internet.They must have a IP address.  

how do we know what is the IP address ?

- DNS lookup : in dns lookup , we query that , `for this URL , can we get some IP address ?`
- where this lookup happens ? 
- 1. local DNS( maintained by OS of visited sites)
- 2. ISP (internet service provider) , they also maintain a DNS.
- now we know the location of computer system , which is going to serve the information.

- now using the ip address we try to communicate with them.
- how communication happens ? client-server architecture !
> earlier ISP used to maintain a host.txt file which had all URL => ip address mapping.
- these ip address internally mapped to servers of ex: bookmyshow.
- server can be hardware or software , that can help you to server some information i.e, based on some i/p it can give you a o/p.
> keeping one very high potential server is vertical scaling.
> keeping a number of mediocre potential servers is horizontal scaling.
- layer of load balancer : 


-content delivering network (cdn)   