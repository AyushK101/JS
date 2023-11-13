/** QUERY : WILL CONSOLE.LOG GO INTO EVENT/CALLBACK QUEUE ?
 * (RITESfunction which is used to display text on screen like `console.log`)
 * ANS:- may be sync or async depending upon the OS , runtime environment , 
 * even the version of environment .Therefore we can't say anything about console.log . 
 * 
 * QUERY : will console.log go into event queue ? 
 * ANS :- we can't say , therefore we consider `IT DOESN'T` .
 * *NOTE: in production level code , we won't use console.log , therefore no worry !)
 */
// 

// 

/** disadvantages of callbacks ? WHY WE NEED PROMISES !
** 1. callback hell : code readability hampers 
** 2. inversion of control : when you give your function to other function , 
* then you give control of it to that function , now it depends on it weather it will 
* call it or not (but you want to) , call it twice or multiple times (but you wanted only once ) .
* OR 
* *if there is some part of code whose control we are passing to someone else and we don't know 
* *how that part will be executed .
* 
*/

/** TASKS: CALLBACK HELL 
 * 1) write a function to download data from url
 * 2) write a function to save the download in a file and return the filename.
 * 3) write a function to upload the file to a new url.
 */

//we are using callback because there is no way to return the value from fetchCustom as it gets ended .
//Pass the response in the callback and access that response in the callback function .

// download some data from url
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

// write that data in some file 
function writeFile(data , fn) {
    console.log("write started data " , data );
    setTimeout( function process() {
        console.log("writing started");
        let filename = "filename";
        fn(filename);
        console.log("writing ending ");
    } , 4000); 
}

// upload some  file to some newurl 
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


