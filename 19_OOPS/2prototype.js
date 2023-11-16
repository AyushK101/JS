
//################################################### day-2

// PROTOTYPES

/**
 * In other languages , objects are based on classes.
 * Whereas , In JS we don't have any mental model of copy.
 * 
 * * The objects are going to be linked to their prototypes somehow.
 *   
 */

/** WHAT IS PROTOTYPES ?
 * - prototype is an property which is an object itself.
 * *It is a mechanism using which JS objects inherits features from one another.
 * 
 * *every object will be by default having a property named as "prototype" .
 * our object  has a prototype which is linked to an object which is having its own prototype(named "dunder prototype") which is linked to an object that is having prototype:null(no prototype) and can be soon before null.
 * 
 * */

// whenever you make changes to this prototype , it will make changes reflect to its objects also.
// property attached to class after the creation of object but object can still access it.
 
/**
 * IN INTERNAL JS:- 
 * > there is a very important entity which is "Object" , which is a function itself (function)
 * > another entity which don't have a name but very important js object. (a object).
 * > on this "Object" function you have a key "prototype" which points to the unnamed object.
 * > on this unnamed object you have a key "constructor" which points to the "Object" function.
 * 
 * IN WORKING ENV OF JS -
 * > let's say we created a function "product"
 *? >the moment you write that function , one more entity get created => another unnamed object.
 * 
 *? there is a hidden relationship between our unnamed object and internal unnamed object.
 * > so when i did product.prototype.display={//code} => i added display property(key) with value {//code} in another unnamed object.
 * 
 *? in new keyword step:2 => the brand new object get linked to this unnamed object of working env.
 *
 *? now , if you try to access x.prototype , it will initiate the "prototype chaining".
 * 
 * everything is same in array because , arrays are object only in JS.
 *  
 * NOTE: `<brandNewObject>.__proto__` gives <function/class>.prototype
 * NOTE: `<brandNewObject>.__proto__.__proto__` gives Object.prototype
 * 
 *? `__proto__` =>  

 */

