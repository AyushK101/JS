/** 
 * !ASYNC FUNCTIONS
 * ASYNC-AWAIT IS SYNTACTICAL SUGAR FOR .THEN
 * We can declare a function async.
 * If you declare a function async , it does the following :
 * 1. It allows the use of `await` keyword {you can't use await keyword outside async function except global scope of module}
 *!2.If you declare a function async , it allows consumption of promise using await.
 * 3. An async function always converts your return value to a promise.
 * 
 * NOTE:-
 * Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, 
 * or rejected with an exception uncaught within the async function.
 * 
 * NOTE:-
 * Async functions can contain zero or more await expressions. 
 * *Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.
 * *The resolved value of the promise is treated as the return value of the await expression. 
 * Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.
*/


function fetchData(url) {
    return new Promise( function (resolve , reject ) {
        console.log("started downloading from" , url ) 
        setTimeout( function processdownloading() {
            let data = "dummy data";
            console.log("download completed");
            resolve(data);
            // resolve("bob"); //*these lines will not be executed as promise is already fulfilled . 
            // resolve("sd"); //* problem of inversion of control is solved , because if promise neither calls resolve or reject that means they haven't called it yet.
            console.log("code after resolve");  //*will print because resolve is like return , but not return , it sends signal to change values of status , `value` and
            // *then moves forward for remaining piece of code .
            
        } , 7 * 1000);
    });
};

function writeFile(data) {
    let x = new Promise( function (resolve , reject ) {
        console.log("stared writing" , data , "in a file");
        setTimeout(function processwriting() {
            let filename = "file.txt";
            console.log("file writing completed");
            resolve(filename);
        } , 4000);
    })
    return x;
};

function uploadData(filename , newurl) {
    return new Promise( function processupload(resolve , reject ) {
        console.log("uploading " , filename , "to " , newurl );
        setTimeout( function () {
            let result = "SUCCESS";
            console.log("uploading complete to ",  newurl );
            resolve(result);
        } , 3000); 
    })
};

//this kind of syntax you use in production
// ASYNC-AWAIT IS SAME AS .THEN JUST WITH BETTER READABILITY !
async function processing() {
    let downloadedData = await fetchData("www.google.com"); 
    // as soon as hit async code in fetchData , it returns pending promise to await and await only moves forward when promise=>fulfilled/rejected.
    // therefore control moves outside of async function.
    let file = await writeFile(downloadedData);
    let uploadResponse  = await uploadData(file , "www.google.com");
    console.log("completed response with" , uploadResponse);
    
    return true;
}



console.log("start");
processing();        // processing is an async function which returns promise. 
console.log("end");

//########################################

// ASYNC-AWAIT HELL => (so many awaits : hard to understand )
 
async function processing() {
    let downloadedData = await fetchData("www.google.com");    
    let file = await writeFile(downloadedData);
    let uploadResponse  = await uploadData(file , "www.google.com");
    let uploadRespons1  = await uploadData(file , "www.google.com");
    let uploadRespon11  = await uploadData(file , "www.google.com");
    let uploadRespo111  = await uploadData(file , "www.google.com");
    let uploadResp1111  = await uploadData(file , "www.google.com");
    let uploadRes11111  = await uploadData(file , "www.google.com");
    
    return true;
}
