 <!--! an API essentially allows different software systems to communicate and interact with each other, enabling developers to access specific functionalities or data from external sources without needing to understand how those sources work internally. -->

# rest (representational state transfer)
- `its the transfer of representation of state of the resource/noun.`
```ex:
- products/milk

{
    "id" : "1",
    "name" : "milk", 
    cost : "$5" // its like the state of resource `products/milk`
}
```

# the need of rest
1. separate client(using ex: angular , react...) and server (using ex: node , php...) ; both can evolve separately.
2. independent of platform and language.
3. server don't store client side data.
4. not constraint to return one format (can return xml , json etc.)
5. built on top of http , therefore can use http cache.
6. easy to use and discoverability.

# disadvantage
- HATEOS : hyper media as the application of the engine state (related links)

> `SOAP`: simple object access protocol

# understanding rest
- REST is an architectural style
- restful referred to web services that implement rest.
- it is simply a program that returns data according to request.
- it is based on HTTP , it retrieves data through standard HTTP methods.

# rest constraints
- there are 6 different architectural constraints that are defined.=> client server, stateless , cache , uniform interface , layered system , code on demand.

# serialization
- converting object to string. ex: xml , json etc.
- because when we send data to client , it understands only 0 and 1 , so we need to convert object to string.

# deserialization
- string to object.

# richardson maturity model 
- grades api on their restful maturity .
- lvl 0 , 1 , 2 , 3 , 4.

# designing rest url's
1. represent hierarchial relationship by "/".
2. use plural nouns when require.
3. design to improve readability lik `top-gun` , don't use file extension.
4. for filtering , always use `query parameters`.
5. don't use crud operations within urls.
 
# controller and actions 
- controller are classes that inherits from APIController class.
- actions are methods.
- 
























# CRUD (create , read , update , delete)
- CRUD api standalone is not sufficient but its the bare minimum.

## CRUD API
### write a api to create a blog app in rest conventions 
- technically creating a resource(=blog).
1. url => `/blogs` ex: wwww.medium.com/blogs `NOTE: URL should be plural`
2. method => `post`
3. data inside body params = {
    title : "name",
    author : "ayush",
    description :
    ...
}

### write api to read all blogs 
1. url => `/blogs`
2. method => `get`

### api to read a specific blog  (using blog ID)
1. url => `/blogs/:id` `NOTE: ":" means variable value`
2. method => `get`


### api to delete a blog
1. url => `/blogs/:id`
2. method => `delete`

### api to update a blog 
1. url => `/blogs/:id`
2. method => `put/patch`
3. body params = {
    title : "NAME",
    ...
}
  

## middleware 
- layer before api
- 