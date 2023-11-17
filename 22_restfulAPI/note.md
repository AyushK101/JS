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