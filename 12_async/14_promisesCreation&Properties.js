/** PROMISES : 
 * promises are special JS objects that are also considered as readability enhancers.
 * They get immediately returned from the function setup to return a promise .
 * They act as placeholder(temp. value) for the data we hope to get back from some future task .
 * We also attach the functionality we want to differ until the future task is done.
 * And promise object automatically handles the execution of this functionality.
 * So promises do two things :
 * 1) it sings up the process request to run in the runtime and give a placeholder in JS , which has value property .
 * NOTE : promises will halt the code flow because they are defined in JS i.e. sync.
 ** (if promise contains async code , js won't stop at that)
 * 
 */

/** how promises work behind the scenes ?
 * the promise object that we create has 4 major properties 
 ** 1. status / state 
 ** 2. value 
 ** 3. onfulfillment 
 ** 4. onreject 
 * 
 */

/** 1. status(state) :
 * status shows current promise status . 
 * any promise can have 3 states : 
 ** pending states : some processing is going on ,and promise is yet to be completed.
 ** fulfilled state : whatever processing promise was involved in ,now that processing is successfully completed (success state) 
 ** rejected state : if processing get some error (error state) 
 */

/** 2. value :
 * when the status of promise is pending , then this value property is undefined .
 ** The moment promise is resolved(status => fulfilled ) , the value property is updated from undefined to the new value(actual value of process) .
 ** {this value can also be considered as returned value OR resolved value} 
 * so the value property acts like placeholder till the promise is finished . 
 * {we will see why this property being a placeholder is useful for us} 
 * {we will first understand promise with respect to success , then we will also discus errors}
 */

/** 3. onfulfillment : 
 * *This is an array , which contains functions that we attach to our promise object .
 * 
 * *(to a promise object we can attach some functions using `.then` method)
 * *when the value property is updated from (undefined=>new value) , JS will gives chance 
 * *to these functions one by one with the value property as their argument.
 * *(if there is no piece of code in the call-stack and global code left) 
 */

// how can we write a function to mimic the download data from a url without using callbacks , 
// instead use PROMISES ?


/** HOW WE CAN CREATE A PROMISE (only creation)  ?
 * 1. call the promise constructor 
 * 2. the promise constructor takes a callback as an a argument .
 * *3. the callback passed inside constructor expects two arguments , resolve and reject . 
 * NOTE: resolve can be assumed "returning a value for success" reject can be assumed "trowing error(..);"
 * 4. then inside the callback write your logic.
 * *5. if you want to return something on success, 
 * then call resolve function (actually resolve and reject are functions) 
 * with whatever value you want to return .
 * 
 * NOTE : how this promise object is implemented is already given in JS , 
 * so JS has already defined resolve ,reject functions , .then etc .
 * 
 *  https://tc39.es/ecma262/#sec-promise-objects
 * 
 * 
 */
 
function fetch(url) {
    return new Promise(function (resolve , reject ) {
        console.log("starting downloading from url ", url);
        setTimeout(function process() {
            let data = "dummy data";
            console.log("completed fetching the data "); 
            //somehow we need to return this data ? - TODO    
            resolve(data);// return some data on success , like `return x;`
        },4000);
    })
}

//##############################################

function fetch2() {
    new Promise(function loop(resolve , reject ) {
       
        for(let i=0; i<1000 ; i++ ) {
        }
        console.log("hello"); 
        resolve("for ran successfully ");
    });
}

//########################################

function demo1() {
    new Promise(function (resolve , reject ) {
        setTimeout(function process() {
            console.log("hi");
            console.log("task done");
        }, 3000);
        resolve("students are the best");
        console.log("by");
    });
}


//#########################################

function demo2(val) {
    new Promise(function(resolve ,reject ) {
        console.log("start");
        if(val%2== 0 ) {
            //even
            resolve("even");
        } else {
            //odd 
            reject("odd");
        }
        console.log("end");
    })
}

//##########################################

function fetchData(url) {
    return new Promise(function process(resolve , reject ) {
        console.log("going to start the download");
        setTimeout(function set() {
            let data = "dummy data";
            console.log("download completed");
            resolve(data);
        } , 10000);
        console.log("timer to mimic download started ");
    })
}

console.log("starting the program ");
console.log("we are expecting to mimic a download ");
x = fetchData("www.google.com");
console.log("new promise object created successfully , but downloading still going-on");
/**execution:
 * >starting the program 
 * >we are expecting to mimic a download.
 * :fetchData enters in callstack.
 * *:creation of promise object is sync.
 * : to completely create a promise , it should call callback function , here process().
 * :process() enters callstack .
 * >going to start the download
 * : setTimeout will be given to runtime 
 *  >timer to mimic download started .
 * : process() brought back from the stack frame.
 * : fetchData is going to return promise object to the x because promise is successfully created as process() is finished 
 * > new promise object created successfully , but downloading still going-on
 * : set() enters callback.
 * : create data 
 * > download completed.
 * *:we do resolve(data) means state:pending ==> state:fulfilled & value:undefined ==> value:data
 */

/** WHEN DO WE CONSIDER A PROMISE FULFILLED ?
 * if we call resolve(); , we consider it fulfilled .
 * we consider it rejected , if we call reject();
 * NOTE: creation of a promise object is synchronous . 
 */

//#########################################################

