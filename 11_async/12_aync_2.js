/**
 * WRITES (function which is used to display text on screen like `console.log`) may be sync or async
 * depending upon the OS , runtime environment , even the version of environment .
 * Therefore we can't say anything about console.log 
 * will console.log go into event queue ? 
 * we can't say , therefore we consider IT DOESN'T .
 * NOTE: in production level code , we won't use console.log , therefore no worry !)
 */
// 
// 
// 


//disadvantages of callbacks ?
// 1. callback hell : code readability hampers 
// 2. inversion of control : when you give your function to other function , 
//then you give control of it to that function , now it depends on it weather it will 
// call it or not (but you want to) , call it twice or multiple times (but you wanted only once ) .
/** OR if there is some part of code whose control we are passing to someone else and we don't know 
 * how that part will be executed .
 * 
 */

/** PROMISES : promises are special JS objects that are also considered as readability enhancers.
 * They get immediately returned from the function setup to return a promise .
 * They act as placeholder(temp. value) for the data we hope to get back from some future task .
 * We also attach the functionality we want to differ until the future task is done.
 * And promise object automatically handles the execution of this functionality.
 * So promises do two things :
 * 1) it sings up the process request to run in the runtime and give a placeholder in JS , which has value property .
 * 
 */


/** TASKS:
 * 1) write a function to download data from url
 * 2) write a function to save the download in a file and return the filename.
 * 3) write a function to upload the file to a new url .
 */


function fetchCustom(url , fn) {
    // download content from the url
    // this download can take some time 
    // we will download the content from url , and then whatever is the result , we will pass to callback 
    console.log("starting the download");   
    setTimeout(function process() {
        console.log("download complete");
        let response = "dummy data";
        fn(response); // when the process is executed , it will remember its lexical scope , therefore it will remember the callback 
        console.log("ending the function");
    } , 3000);
}

function writeFile(data , fn) {
    console.log("write started data " , data );
    setTimeout( function process() {
        console.log("writing started");
        let filename = "filename";
        fn(filename);
        console.log("writing ending ");
    } , 4000); 
}

function uploadFile(filename , newurl , fn ) {
    setTimeout(function process() {    console.log("started upload");

        console.log("file" , filename , "uploaded successfully on" , newurl);
        fn(filename);
        let uploadresponse = "SUCCESS";
        console.log("upload completed");
        
    })
}

fetchCustom( "www.google.com" , function downloadcallback(response) { // downloadcallback  is `fn` function 
    console.log("downloaded data" , response);
    writeFile("file data " , function writecallback(filename) {
        console.log("new file written is " , filename);
        uploadFile(filename , "www.google.com" , function uploadcallback(uploadresponse) {
            console.log(filename , "uploaded status :" , uploadresponse);
        })
    });
} );