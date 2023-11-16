/** framework vs libraries
 * framework : for making food , ingredients , vegs etc are req.
 *  but they are so common in use they are already developed by someone else , we don't have to make them 
 * from scratch . and the shop from where we get these already made things (which are very repetitive) is 
 * know as framework.
 * In development ex. are like login auth. etc is very common , so people prepared a set of code that does
 * this task , we just have to config it in our project.
 * YOU DON'T HAVE TO REINVENT THE WHEEL !
 * NOTE: library is intended to do one very simple task  for you , and multiple libraries together can 
 * form a framework.
 *   1. process:The process object provides information about, and control over, the current Node.js process.
 * 
 * 
 * 
 *  The key difference between a library and a framework is "Inversion of Control". 
 * When calling a method from a library, the developer is in control. 
 *  With a framework, the control is inverted: the framework calls the developer's code.
 *
 */
//node.js globals are :

/** NODE
 * Node is neither a framework nor language.
 * Node is an runtime environment for JS.(runtime provides a lot of features for JS to execute).
 * It's good to compare node with browser than langs /framework.
 * Asynchronous nature of JS comes due to runtime.
 * 
 * In 2009 , ryan dahl , made node and took JS's with good(req. (like dom don't req. outside browser)) 
 * features and add it to node.
 * After node , we can run JS in our system , not browser , due to which we get some OS based features like 
 * accessing file system , processes , streams.
 * Now JS can run like other languages like java , python etc , we can make desktop applications using JS 
 * with electron(framework) , it has OS based features therefore , you can make mobile apps with ionic , 
 * react native.  
 * *Now you are able to access OS , prior to node with used to write server with ruby on rails , but now 
 * *do it with JS with frameworks like express , sails etc.
 * we can provide command line arguments to JS running outside browser/js running inside node.
 */

// GLOBALS :-
// *these are objects which are predefined/ implemented by js,access everywhere in the JS code.
//! in node's env , node's global = browser's window

// EX: runtime give access of features to JS , one of them is accessing the html,
// how to you access ? browser environment give global `document`.

// similarly node.js also provides you globals:-

//*1. `process GLOBAL`:  The process object provides information and control over the current Node.js process. You can access environment variables, command line arguments, and interact with the process itself through properties and methods of this object.

console.log(process);
var process = 3; //can change like a normal object

// *  `2. __dirname GLOBAL` : The directory name of the current module. 
//(this global is not always accessible)
console.log(__dirname);

/** MODULE PATTERN:-
 * 
 * nodejs introduced a new pattern of programming/of structuring your code called MODULES.
 * *a module is nothing more than a js file that exports its code. 
 * 
 * There are two types of modules in js:-
 * *1. commonJS modules (cjs) ( module.exports or exports & require )
 * *2. ECMAScript Module (ESM) (export and import)
 * NOTE:- by default cjs is enabled.
 * 
 */

/** TO ENABLE ES MODULES : two ways-
 * * 1. set `.mjs` extensions on the files of export and import to make them ES/JS modules.
 * { .mjs tells node environment that this file is compatible for ES module-ling}
 *  
 * *2. PACKAGE METHOD
 * NOTE: package => it is a folder which contains `package.json` file.
 * prepare a package.json with `{ "type" : "module"}
 * 
 */


//* 3. module GLOBAL:-
// It is a object , which has a lot of properties.
console.log(module);
// module global has a property called exports which is a JS object , which can be used to
// export code from that module to other module.

//* 4. require GLOBAL: helps you to consume some module 
 
