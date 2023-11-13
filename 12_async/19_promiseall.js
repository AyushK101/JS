// another/better way of async-await => Promise.all()
/**
 * The Promise.all() static method takes an iterable(array) of promises as input and returns a single Promise. 
 * This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an `array of the fulfillment values`. 
 * It rejects when any of the input's promises rejects, with this first rejection reason.
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

};function writeFile(data) {
    let x = new Promise( function (resolve , reject ) {
        console.log("stared writing" , data , "in a file");
        setTimeout(function processwriting() {
            let filename = "file.txt";
            console.log("file writing completed");
            resolve(filename);
        } , 4000);
    })
    return x;

}; function uploadData(filename , newurl) {
    return new Promise( function processupload(resolve , reject ) {
        console.log("started uploading " , filename , "to " , newurl );
        setTimeout( function () {
            let result = "SUCCESS";
            console.log("uploading complete to ",  newurl );
            resolve(result);
        } , 3000); 
    })
};

// let  downloadedData = fetchData("drive.google.com");
// let  writingFile = writeFile("dummy data");
// let  uploadingFile = uploadData("file.txt" , "drive2.google.com");

// Promise.all([downloadedData , writingFile , uploadingFile ]).then(function (value) {
//     console.log(value);
    
// })

// All the promise's functions started execution parallel-y. 
// Therefore no chaining happening.

//######################################################

// we can group a logic-set in async functions so that they don't hinder each other flow. 

async function process1 ( ) {
    let  downloadedData1 = fetchData("drive.google.com");
    let  writingFile1 = writeFile("dummy data3");
    let  uploadingFile1 = uploadData("file1.txt" , "drive1.google.com");
    return uploadingFile1;
}

async function process2 ( ) {
    let  downloadedData2 = fetchData("drive.google.com");
    let  writingFile2 = writeFile("dummy data2");
    let  uploadingFile2 = uploadData("file2.txt" , "drive2.google.com");
    return uploadingFile2;
}

async function process3 ( ) {
    let  downloadedData3 = fetchData("drive.google.com");
    let  writingFile3 = writeFile("dummy data1");
    let  uploadingFile3 = uploadData("file3.txt" , "drive3.google.com");
    return uploadingFile3;
}

Promise.all([ process1() , process2() , process3() ]).then(function (value) {
    console.log(`value is ${value}`);
});



//Promise.any() waits for any one of all promise to fulfill while 
//promise.all only fulfills after all of its promise fulfills {fulfill promise executes function in .then}

