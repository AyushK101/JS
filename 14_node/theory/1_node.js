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
// 1. process:The process object provides information about, and control over, the current Node.js process.
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

// GLOBALS  
// these are objects which are predefined/ implemented by js,access everywhere in the JS code.
// EX: runtime give access of features to JS , one of them is accessing the html,
// how to you access ? browser environment give global `document`.

//similarly node.js also provides you globals. 
//1. process : the process object provides information about, and control over, the current Node.js process.
console.log(process);
var process = 3; //can change like a normal object

//2. __dirname : The directory name of the current module. 
//(this global is not always accessible)
console.log(__dirname);

//* nodejs introduced a new pattern of programming/of structuring your code called `module pattern`.
// 2 ways of module pattern-
// I. common JS modules (CMJ) {old}
// II. ES modules 
//NOTE: by default CJSM is enabled.
// to enable ES modules

// 1. put `.mjs` extension on the file of consumption.
// .mjs tells node environment that this file is compatible for ES module-ling.
// NOTE : before exporting , the file will be executed first.
// 2. packages => it is a folder which contains `package.json` file.
// JSON => javascript object notation.
// => prepare a package.json with { "type" : "module" }.
//

//3. module : 
// It is a object , which has a lot of properties.
console.log(module);
// module global has a property called exports which is a JS object , so we can use it .


//4. require : helps you to consume some module 

