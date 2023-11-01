// FUNCTIONS EXPRESSION 

/**  if line starts with something other than "function" and includes function , then it is a function expression.
*  biggest problem in js codebase is anonymous functions 
*/

/** 
* 1.  function definition : when you start with function keyword . 
* function <name> (arg.) {
* input
* }
*/


/**  function expression : when you don't start with a function keyword . (kind of like evaluation because assignment is happening when assigned that's why expression )
* var f = function (args.) {
*     input
* }
*
*  0R 
* (function () { })
*/


// *in js we can pass functions as an argument to another function* .
function fun() {
    console.log("fun called");
}

function gun(fun) {
    console.log("inside gun");
    fun();
    console.log("leaving gun"); 

}

gun(function () {    
    console.log("new function passed");
    console.trace();
}); 

gun(fun);

//function expressions are of two type ;
// 1. anonymous : ex: var x = function () { } ;  or  gun(function () { }); : 
// anonymous functions are hard to debug , because it has no name . 
// temporary solution : arguments.callee 


// 2. Named  

gun(fun);

gun(fun);

gun(fun);

gun(function logger() {    
    console.log("new function passed");
    console.trace();
}); 


//scope of a function expression 

// x is global scope but function gun is inside the scope of x .
// var x = function gun()   {

// }

var x = function gun() {
    console.log("gun"); 
}


x();
console.log(x);
console.log(gun);// error 
// console.log(gun()); // immediate calling 







