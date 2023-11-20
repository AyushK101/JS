const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true})) //read the body
app.use(bodyParser.json()); //parse the body



//mimic db using an array of blogs 
let blogList = [];

function logger(req , res , next) {
    console.log(req.url);
    console.log(req.body);
    let condition = false;
    if(condition) {
        res.status(404).json({
            error : `error as  condition ${condition} is not fulfilled`,
            
        })
    }
    next();
}

function isAuthenticated(req , res , next) {    
    console.log("yes User is authenticated");  
    next();
}

app.use(logger);



app.get('/blogs' , logger , isAuthenticated , (req , res) => { 
    console.log("hitting controller");
    return res.status(200).json({
        data : blogList,
        success : true,
    })
});

app.post('/blogs' , (req , res) => {
    blogList.push({
        title: req.body.title,
        content: req.body.content,
        id : Math.floor(Math.random()*1000),
    });
    return res.status(201).json({
        success: true,
    });
});

app.get('/blogs/:id' , (req,res) => {
    const result = blogList.filter( (blog) => blog.id == req.params.id);
    return res.status(200).json({
        data : result,
        success: true
    })
})

app.delete('/blogs/:id' , (req,res) => {
    const blogIdToDelete = req.params.id;
    const indexToDelete = blogList.findIndex(blog => blog.id == blogIdToDelete);

    if (indexToDelete !== -1) {
        const deletedBlog = blogList.splice(indexToDelete, 1)[0];
        return res.status(200).json({
            deleted: deletedBlog,
            updatedList: blogList
        });
    } else {
        return res.status(404).json({ message: 'Blog not found' });
    }
    
})


app.listen(PORT , () => {
    console.log("server started on port" , PORT);
})
