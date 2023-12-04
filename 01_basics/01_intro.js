//Functions are objects also ; they can have properties and methods !
//! https://chat.openai.com/share/df816029-f65b-4ef7-bb76-091c3648f67a


/** JS IS PROTOTYPE-BASED PROGRAMMING
 * when classes are not explicitly defined but classes are made adding properties & methods `to 
 * instances of another class{structure} OR adding to a empty object{not-widely}`.
 */

/** JS : https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * 
 * 1. interpreted {justInTime compiled}
 * 2. firstClassFunction -> functions treated as variables.
 * 3. prototype-based
 * 4. dynamically-typed -> interpreter assigns variable a type at runtime based variables
 *    value at that time.
 * 5. multi-paradigm -> object-o , functional ...
 */

/** core client-side JS : 
 * store values , operation on piece of text , running code in response to some request {event}
 */

/** Functionality built on top of JS
 ** 1.APIs are 'ready-made' sets of code which perform some function(s).
 * 2. Browser api's : set of code provided by browser itself , which ofcourse let developers to 
 * access browser's functionalities and perform task like access browser , modify content , 
 * event-handling.
 */

/** Lightweight Interpreted programming language
 * Browser receives receives js code in original text form and run it.
 ** JUST IN TIME COMPILING : get's compiled into faster binary format while script is being used
 ** to improve performance. 
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
 *    Declaring the variable anywhere is equivalent to declare at top.
 *    Means variable can appear to be used before it's declared. {hoisting}.
 * ! NOTE: only declaration is hoisted not initialization.
 */

/** Primitive vs non-primitives
 ** .1 primitives are immutable: means a variable's particular value's memory address
 ** won't be assigned to other updated value weather it's of same type or not.
 * 
 * 
 */






// numbers
console.log(45.345);
console.log(0);
console.log(-0); 
//in js we have both 0 and -0 . ex: game physics ,coming in negative direction

// string 
// js don't distinguish b/w string and character.
console.log("adf");
console.log('adf');
console.log(`adf`); //backticks

// boolean
console.log(true);
console.log(false);

// undefined,null
console.log(undefined);
console.log(null);

// objects : store key-value pair
console.log({"ayush": 123});

// symbol
console.log(Symbol('hello'));

//operators : tools that can be applied on different values to get desired values .

// better comments : 
/**
 * 
 * 
 * 
 * 
 */

let num = Number("abc");
console.log(num);

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;

console.log(goodQuotes1 , "&" ,goodQuotes2)                 ;