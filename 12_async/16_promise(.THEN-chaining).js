/**`.THEN` CHAINING:-
** NOTE : .then function itself returns a new promise object. 
** OR `.then` function internally creates a promise and when the code is executes , it is resolved.
* We can store .then expression in a new variable.
* WE CAN USE .THEN CHAINING TO AVOID PROMISE HELL.
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


let downloadPromise = fetchData("www.google.com");

x = downloadPromise
.then(function processDownload(value) {
    console.log("downloaded data" , value);
    return value;
})
.then(function processWrite(value) { //upper .then will return a promise which we will catch here in this `.then`
    console.log("hu");
    return writeFile(value); // writeFile return a promise => it get resolved== this .then promise for next .then get resolved .
})
.then(function uploadProcess(value) {
    return uploadData(value);
})

//#####################################################

//multiple functions in onfulfillment array
x.then(function a(value) {
    //code
});

x.then(function b(value) { 
    //code 
})
//JS registers a function in microtask then b function .

//##################################################
//example

function dummypromise() {
    return new Promise(function (resolve , reject) {
        setTimeout(function () {
            console.log("resolve's timer");
        } , 0);
    });
}

console.log("start of file");

setTimeout(function Timer1() {
    console.log("timer1 done");
    let y = dummypromise();
    y.then(function promiseY(value) {
        console.log("whose's promise's" , value);
    });
},0);

let x = Promise.resolve("sanket's promise ");
x.then(function processPromise(value) {
    console.log("who's promise ?",value);
})

setTimeout(function timer2() {
    console.log("timer2 done");
},0);

console.log("end of file");
