//CONSUMING A PROMISE ! 
/** 
 * 
 * Whenever we call a function , returning a promise , we will get a promise object which is like any other JS object that we can store in a variable .
 * 
 * QUES: will js wait for promise to be resolved if it involves any async piece of code ?
 * *ans: if creation of promise involves sync piece of code it will wait , otherwise not.
 * 
 * *After completely resolving the promise , we can perform function on it which can be registered in `onfulfillment`through `.then` . 
 * 
 * *we can use `.then` function to consume a promise. WHEN THE STATE OF PROMISE CHANGES FROM PENDING TO (RESOLVE,REJECT) , THEN WE CALL `.THEN`
 * 
 * *`.then` function takes function as an argument that we want to execute after promise state changes , and that argument function takes `value` as an argument. 
 * 
 * NOTE: .then only registers your function inside onfulfillment array 
 * 
 * ******NOTE: on pending promises .then function registers its function in onfulfillment array .
 */

/** writing the callback hell question's  solution in promise . */
function fetchdata(url) {
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

function writefile(data) {
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

function uploaddata(filename , newurl) {
    return new Promise( function processupload(resolve , reject ) {
        console.log("uploading " , filename , "to " , newurl );
        setTimeout( function () {
            let result = "SUCCESS";
            console.log("uploading complete to ",  newurl );
            resolve(result);
        } , 3000); 
    })
};


/** 
* let data = fetchdata("www.google.com");
* let filename = writefile(data);
* let response = uploaddata(filename , "www.drive.google.com");
*/
//*this code won't work properly 

//another method (but with promise hell)
let downloadPromise = fetchdata("www.google.com");
console.log(`type of downloadPromise is ${typeof downloadPromise}`)

downloadPromise.then(function (value) {
    console.log("download promise fulfilled");
    console.log(value);
    //*now we have `value` access here 
    
    let writePromise = writefile(value); //*using value from downloadPromise.
    writePromise.then(function (value) {
        console.log("write promise fulfilled");
        console.log(value);
        
        let uploadPromise = uploaddata(value , "www.bing.com");
        uploadPromise.then(function (value) {
            console.log("upload promise fulfilled");    
            console.log(value);
        })

    })
    
})
// PROMISE HELL :(
// above piece of code solves inversion of control but still gets promise hell

