/** ASYNC FUNCTIONS
 * We can declare a function async.
 * If you declare a function async , it does the following :
 * 1. It allows the use of `await` keyword {you can't use await keyword outside async function}
 * 2. If you declare a function async , it allows consumption of promise using await.
 * 3. An async function always converts your return value to a promise.
 * 
 * NOTE: async function returns a fulfilled promise after whole code execution, or it will return
 *       pending promise and comes out of function call to move ahead(JS DON'T WAIT !)
 * NOTE: inside async function , things look synchronous but overall its async .
* 
* *NOTE: once you hit await it throws you outside async function weather it is even fulfilled already. 
* But await halts you on that promise and don't take you ahead in that async function.
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
    let downloadedData = await fetchData("www.google.com"); //halt the piece of code here and waiting for the downloaded data//*await actually returns you the resolved promise's value .
    
    let file = await writeFile(downloadedData);
    let uploadResponse  = uploadData(file , "www.google.com");
    console.log("completed response with" , uploadResponse);
    
    return true;
}


console.log("start");
processing();// processing is an async function which returns promise. 
console.log("end");

//########################################
// ASYNC-AWAIT HELL => (so many awaits : hard to understand )
 
// async function processing() {
//     let downloadedData = await fetchData("www.google.com");    
//     let file = await writeFile(downloadedData);
//     let uploadResponse  = await uploadData(file , "www.google.com");
//     let uploadRespons1  = await uploadData(file , "www.google.com");
//     let uploadRespon11  = await uploadData(file , "www.google.com");
//     let uploadRespo111  = await uploadData(file , "www.google.com");
//     let uploadResp1111  = await uploadData(file , "www.google.com");
//     let uploadRes11111  = await uploadData(file , "www.google.com");
    
//     return true;
// }
