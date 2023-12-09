

//to be “called back” at a //*later time .

// *to pass a callback we can use function expression .


// Why use Callback functions?
//Most of the time we are creating programs and applications that operate in a synchronous manner. 
//In other words, some of our operations are started only after the preceding ones have completed. 
//Often when we request data from other sources, such as an external API, we don’t always know when our data will be served back. 
//In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched.
// These situations are where callback functions come in handy.


// A callback's primary purpose is to execute code in response to an event.
// These events might be user-initiated, such as mouse clicks or typing. 
// With a callback, you may instruct your application to "execute this code every time the user clicks a key on the keyboard."

// ex:
// const button = document.getElementById('button');
// function callback(){
// console.log("Hello world");
// }
// button.addEventListener('click',callback);


//
function fun(x , fn ) {  //*consuming the callback 
    /**
     * x : number
     * fn : callback function
     */
    //some logic
    for(let i = 0 ; i < x ; i++) {
    console.log(i);
    }
    fn();//*calling the callback passed function
    //some more logic
}

fun(10 , function log() {     //*callback function 
    console.log("custom logger"); 
}); 



// callbacks applications ##########################################################
let Arr=[1,2,3,4,5];
let z = Arr.map(function process(v , i) {  //expects a callback function ; map function : for all the elements of the given array , it passes the elements as an argument to the callback.
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



//*##############################################
// *SetTimeout // SetInterval 
// these two functions are not by default given to us by js.
// then how are we able to use it ?

// *SetTimeout : it is a function that helps to execute some task once after a certain timer. it returns a unique id .
// *it require a function and a time in millisecond .
// *clearTimeout: removes given added setTimeout .


// *SetInterval : it is a function that helps us to execute some task again and again after a given interval . it returns a unique id also.
// *clearInterval

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

