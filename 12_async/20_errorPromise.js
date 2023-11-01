
/**
 * we can use `throw` keyword mimic-ing error condition of promise.
 * .then takes two functions => 1. success callback and 2. error callback 
 * 
 */

/** CATCH METHOD OF PROMISE 
 * The catch() method of Promise instances schedules a function to be called when the promise is rejected. 
 * It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
 */


function fetchData(url) {
    return new Promise( function (resolve , reject ) {
        console.log("started downloading from" , url ) 
        setTimeout( function processdownloading() {
            let data = "dummy data";
            console.log("download completed");
            reject(data);
        } , 3 * 1000);
    });
};

let x = fetchData("www.gog.con");
x.then(function res(value) {
    console.log("value is ", value);
} , function rej(err) {
    console.log("error is " , err);
})
.then(function (v) {
    console.log("value again is ", v ); 
    throw {error : "error in 2nd .then"}
})
.catch(function errorHandling(err) { // if we have called rejected callback in .then before .catch , then .catch won't be executed. 
    console.log("error is " , err);
})
//finally
.finally(function Finally() {
    console.log("finally expression");
})

  
//#########################################
//error handling in async-await 
//The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. 
//The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. 
//The code in the finally block will always be executed before control flow exits the entire construct.

async function proccess1 () {
    try {
        let  downloadedData1 = fetchData("drive.google.com");
        let  writingFile1 = writeFile("dummy data");
        let  uploadingFile1 = uploadData("file.txt" , "drive2.google.com");
        return uploadingFile1;
    } catch (err) { 
        console.log(err);
    } finally  {
        console.log(value);
    }
}

