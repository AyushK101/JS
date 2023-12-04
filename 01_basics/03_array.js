 //! ARRAY
//NOTE: JS requires properties beginning with digits to be access with `bracket
// notation` instead of `dot notation`.

//NOTE: several array methods take use of array's length property into account.

// increasing & decreasing length property add empty & delete existing elements in array.

// older method skips empty elements while newer methods give undefined.

/** STATIC METHODS
 * 1. Array.from(arrayLike , callback , thisarg) : converts non array to array like strings , nodeList , HTMLcollection.
 * 2. Array.of( arg1, arg2, ... argN); => ["arg1" , arg2 , ... "argN"]
 */

/** INSTANCE PROPERTIES
 * 1. length 
 */

/** INSTANCE METHODS 
 * 1. concat(val1, val2, ... val3) , include() , idexOf()
 * 2. find : find(): returns first element that satisfy the test
 *  , findLast(): returns last element ...
 *  , findIndex(): returns index of first element that satisfy the test
 *  , findLast(): returns last index ...
 * 3. join(): join all element of array into string with `,`.

 * 4. pop()-> remove last element from array.
 * 5. push(val1, val2, ... valN) -> add 1 or more element in end of array ; can also merge array 
 * 6. reverse() 
 **7. slice(start , end); => subarray
 
 *!8. splice(index , deleteCount , addItem1 , addItem2 , ...); 
 *!->  delete "deleteCount" from "idex" and add "addItem1" ,"addItem2" .... from "index"

 **9. sort(callBck(a , b)); => defines sort order with the help of callback
*/

//?1. .forEach(callback, thisArg) => executes callback for every function  : //don't return anything

//?2. .filter( callback , thisarg) => returns" elements that pass the given callback test.

//?3. .map(callback , thisArg) => returns a new array populated with result of callback for every element.

//?4. .reduce(callback(accumulator , currentValue) , initialValue) => executes user-provides 'reducer' 
//?    function on each element and pass return value to accumulator & pass end value as final "return".

//! forEach() don't return anything while map() return new array with.

/** for...of vs for...in
 * 1. for...of(let <variable> of <array/object>) { //code } => returns value of element and store in <variable>.
 * 
 * 2. for...in(let <variable> )
 */