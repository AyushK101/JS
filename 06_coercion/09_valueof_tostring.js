let a = {"english" : 90 , "maths" : 100};
console.log(a.toString());
console.log(a.valueOf());

let x = [1,2,3];
console.log(x.toString());  
console.log(x.valueOf());  

console.log("ayush" + { "a" : 190});
//"ayush" : already primitive but  { "a" : 190} is not primitive , so we call ToPrimitive without a hint.
// means hint => number 
// we first call valueOf on {"a" : 190 } and then it returns same object.
// we call toString => tostring will return '[object object]' which is a string .
// "ayush" + '[object object]' => "ayush[object object]" 
// 

console.log(10 - {"a" : 34});
// 10 already a number 
// {"a" : 34 } is going to get converted ToNumber , and this is an object , 
// for object we call ToPrimitive with hint Number.
// valueOf => it returns the same object => {"a " : 34}
// then we call toString => it returns a string of '[object object]'  which is primitive 
// So call ToNumber on '[object object]' string again which gives NaN 
// 10 - NaN => NaN 

let z = {"b": 90  , valueof() {return 2;}};
console.log(z - 10 );   
//  z is an object we need to pass it to ToPrimitive with hint Number
// we call valueof => it returns 2 ; which is primitive 
// so z becomes 2 ; 10 is already a number 
// 2 - 10 = -8 

console.log(2*"abd");

console.log("ayush" + { "a ": 90 , valueof() {return {}} , toString() {return {}}});
//end result will be {}  , that is non-primitive , therefore throw error.

