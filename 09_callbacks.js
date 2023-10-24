// ###########################################################################


// CALLBACKS : a callback is a function passed to another function ,
// ex: f(g(x)) => g(x) is kind of like a callback in maths 
// to pass a callback we can use function expression .

function fun(x , fn ) {  //consuming the callback 
    /**
     * x : number
     * fn : callback function
     */
    //some logic
    for(let i = 0 ; i < x ; i++) {
    console.log(i);
    }
    fn();//calling the callback passed function
    //some more logic
}

fun(10 , function log() {     //callback function 
    console.log("custom logger"); 
}); 



// callbacks applications ##########################################################
let Arr=[1,2,3,4,5];
let z = rr.map(function process(v , i) {  //expects a callback function : map function : for all the elements of the given array , it passes the elements as an argument to the callback.
    /** //map returns an array , and the values of array are whatever you return in every process call.
     * v : value 
     * i : index 
    */
    console.log(v , i);
    return  v*v ;
}); 

console.log(x);



// custom map function ################################################################

function mapper(arr, fn) { // creating an "result " array and finally returning the result array . Going to every element of array and for every element of array it is calling fn which we passed as an argument  
    /**
     * arr => is going to be an array of elements 
     * fn => callback function which expects two arguments ,value and index
     */
    let result = [];
    for (let i = 0; i < arr.length; i++) { 
       /** i => index , arr[i] => value
       * therefore we have access to both value and index in this loop 
       */   
        let res = fn(arr[i], i); //callback function | when you call the callback , then you pass the arguments !
        result.push(res);
    }
    return result;
}

let arr = [1,2,3,4,5];
let x = mapper(arr, function cuber( v , i ) { //when you pass the callback , you are declaring the function expression
    console.log(v , v*v*v , i );
    return v*v*v; // will be returned to callback and will be stored in res.
});

let g = function process()   {
    console.log("inside g ");
    // 1. return function() {console.log("returned function")};
}
console.log(x);           
// console.log(x()); // immediately calling the function before going inside it . then it will return the return type of g will be set here => undefined 
// but if we type 1. , then it will return what is given in return .



//##############################################
// SetTimeout // SetInterval 
// these two functions are not by default given to us by js.
// then how are we able to use it ?

// SetTimeout : it is a function that helps to execute some task once after a certain timer. it returns a unique id .
// clearTimeout: removes given added setTimeout 
// SetInterval : it is a function that helps us to execute some task again and again after a given interval . it returns a unique id also.


console.log("start");   
setTimeout(function execute(){
    //some task 
    console.log("task 1 ");
} , 4000);
console.log("end");

//################
let id1 = setTimeout(function execute(){
    //some task 
    console.log("task completed ");
} , 6000);

let id2 = setTimeout(function execute(){
    //some task 
    console.log("task 2 ");
    clearTimeout(id1);
} , 3000);

//###################
setInterval(function() {
    console.log("task done again");
}, 3000);

