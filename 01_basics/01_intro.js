//Functions are objects also ; they can have properties and methods !

//! https://chat.openai.com/share/df816029-f65b-4ef7-bb76-091c3648f67a

/** JS IS PROTOTYPE-BASED PROGRAMMING
* when classes are not explicitly defined but classes are made adding properties & methods `to
* instances of another class{structure} OR adding to a empty object{not-widely}`.
*/

/** JS : https://developer.mozilla.org/en-US/docs/Web/JavaScript
*

/** core client-side JS :
* store values , operation on piece of text , running code in response to some request {event}
*/

/** Functionality built on top of JS
** 1.APIs are 'ready-made' sets of code which perform some function(s).
* 2. Browser api's : set of code provided by browser itself , which ofcourse let developers to
* access browser's functionalities and perform task like access browser , modify content ,
* event-handling
*/


/** client vs server side's code
* 1. client-side-code(csc) : runs on user's computer , downloaded when page is viewed.
* 2. server-side-code(ssc) : runs on server , it's result is downloaded and displayed.
*/

/** dynamic vs static code
* 1. dynamic : ability to update display of webpage.
* ex: ssc generate dynamic content by pulling data from DB & csc generate new table&fill with it.
* 2. static : webpage with no dynamic updating is static.
*/

/** including js
* In head with attribute `defer` , which tells the browser to continue downloading the HTML
* content once <script> tag element has been reached.
*/

//----------------------------------

// variables
/** VAR HOISTING : {not correct but for mind map only}
* .1 var declarations are processed before any code within the script.
* Declaring the variable anywhere is equivalent to declare at top.
* Means variable can appear to be used before it's declared. {hoisting}.
* ! NOTE: only declaration is hoisted not initialization.
*/

/** Primitive vs non-primitives
** .1 primitives are immutable: means a variable's particular value's memory address
** won't be assigned to other updated value weather it's of same type or not.
*/

// numbers
console.log(45.345);
console.log(0);
console.log(-0);
//in js we have both 0 and -0 . ex: game physics ,coming in negative direction


///////
//PARADIGM : an approach and mindset of structuring code,which will direct your coding style 
// and technique.


/**
 * 1. high-level { abstraction over low level languages}
 * 2. garbage-collected
 * 3. interpreted or just in time complied
 * 4. multi-paradigm { procedural , object-oriented , functional}
 * 5. Prototype-based object-oriented { almost everything in js is an object except primitives }
 * 6. Fist-class functions { treated as variables}
 * 7. Dynamic { don't assign datatypes manually }
 * 8. Single-threaded 
 * 9. Non-blocking event loop
 * 
 */

/** 
 * CONCURRENCY MODEL : js runs on single thread , so it can do one thing at a time.
 * >> thread is like a set of instructions executed in the computer's CPU. 
 * >> event loop takes long running tasks, execute them in the background , and put them back in main thread once finished.
 */

/**
 * JS ENGINE : program that executes js code { &more things}
 * JS ENGINE :-
 * 1. call-stack: where code is executed .
 * 2. heap : where objects are stored .
 * >> js used to be a interpreted lang.
 * >> modern browsers uses JUST IN TIME(JIT) compilation : entire code is converted into machine code at once , then executed immediately.
 * 
 * >> JS First parse/read the code , code is parsed into a data structure called AST {abstract syntax tree} , which checks syntax error,  read and store meaningful code. 
 * >> NEXT compilation : takes AST and generate machine code and executed immediately.
 */

/** 
 * JS RUNTIME : imagine a big container , include everything that we need to use JS.
 *  include like : 
 * 1. browser : heap , callstack ...
 * 2. web api's : dom , timers , fetch api , ...
 * 3. callback queue : a data structure that contain all callback functions that are ready to be executed.
 * 4. event loop : takes callback from callback queue and puts them into callstack.
 * 
 */


/** 
 * in node js , we don't have web api's ,
 * we have c++ bindings & thread pool.
 */

/** 
 * global execution context: environment in which a piece of js code is executed.
 * 
 */

/** 
 * SCOPING : how program's variables are organized.
 * LEXICAL SCOPING : scoping is controlled by placement of functions and block in the code.
 * GLOBAL SCOPE , FUNCTION SCOPE , BLOCK SCOPE{ES6}
 */

/**
 * THIS keyword : special variable that is created for every execution context{every function} , 
 * takes the value of 
 * `this` is not static , depends on how function is called, its value is only assigned when function is called.
 */




/**
 * >> 4 DIFFERENT WAYS FUNCTIONS CAN BE CALLED : 
 * 1. AS A METHOD : `this` = points to object that is calling the method.
 * 2. SIMPLE FUNCTION CALL : `this` = undefined {in strict mode}
 * 3. ARROW FUNCTIONS : `this` = `this` of surrounding function { lexical `this`}
 * 4. EVENT LISTENER : `this` = DOM element that the handler is attached to.
 */




/** 
 * primitive are passed by value : if we pass primitive to new variable it will store in new address.
 * non-primitive are passed by reference : if we assign a object to other object , then new object 
 * also point to same address in memory .
 * //! see img
 * */ 

/**
 * function are objects too , therefore they also can have methods like call , apply , bind
 * 1. call: we call the `call` method which well call the calling site function with the `this` of passed site/function.
 * 2. apply: just like call but takes a array of arguments but it is a old way and not used.
 * 3. bind: 
 */




























