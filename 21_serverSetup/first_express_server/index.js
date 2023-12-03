const express = require('express');
const app = express(); //returns an instance of the Express application, which is essentially an object.
//! creates a http server under the hood (upper line).
const PORT = 3000;

app.get('/' , function(req , res) {
    res.send("hello world");
})

app.post("/home" ,function(req , res) {
    res.send("welcome to home");
} )

app.patch("/home" ,function(req,res) {
    res.json({
        message : "this is a patch request",
        author : "ayush-kumar",
        success : true,
        
    });
})

app.listen(PORT , function exec() {
    console.log("server starting on port" , PORT);
})





