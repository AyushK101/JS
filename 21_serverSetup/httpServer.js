// using http module (inbuilt given by node) to setup a basic server(request+processing+response)
const http = require('node:http');
let PORT = 3000;
/**
 * http module contains a function => createServer 
 * -this createServer function takes a callback as input.
 * -createServer function returns us the server object.
 * -now inside callback , we get 2 arguments
 * -1. request => this argument contains all the details about the incoming request.
 * -2. response => this argument contains functions using which we can prepare the responses.
 *  
 * 
 */ 

//creating a http sever instance {object} 
const server = http.createServer(function exec(request , response) {
    console.log(request.statusMessage);
    if (request.url == "/ayush-kumar") {
        response.end("hi user , you are in `ayush-kumar` dir");
    } else {
        response.end("another dir");  
    }
});

//starting server on given port  
server.listen(PORT , function process() {    // once the server started then this callback is going to be executed (like database connection)
   
    console.log("server started on given port" , PORT); 
});

