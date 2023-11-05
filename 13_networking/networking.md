- `computer networks` : it is a group of interconnected computer systems.
- `internet` : it is a network of interconnected computer networks.

- `domain name server (DNS)` : mapping from url to its ip address.DNS resolves url into ip address.
- `IP address` : an address using which you can `uniquely identify` a network or a computer system.
- Over the internet every device has an IP address.

```
- what kind of information is expected to be extracted out when we type `URL` , is somewhere written on some computer machines.We don't know where these computer machines residing on the internet.They must have a IP address.  

how do we know what is the IP address ?

- DNS lookup : in dns lookup , we query that , `for this URL , can we get some IP address ?`
- where this lookup happens ? 
- 1. local DNS( maintained by OS of visited sites)
- 2. ISP (internet service provider) , they also maintain a DNS.
- now we know the location of computer system , which is going to serve the information.
```
```
- now using the ip address we try to communicate with them.
- how communication happens ? client-server architecture !
> earlier ISP used to maintain a host.txt file which had all URL => ip address mapping.
- these ip address internally mapped to servers of ex: bookmyshow.
- server can be hardware or software , that can help you to server some information i.e, based on some i/p it can give you a o/p.
> keeping one very high potential server is vertical scaling.
> keeping a number of mediocre potential servers is horizontal scaling.
- layer of load balancer : 

```
-content delivering network (cdn)   