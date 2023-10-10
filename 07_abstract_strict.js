// https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison  
// here (!) don't mean logical not . 
// https://262.ecma-international.org/10.0/#sec-strict-equality-comparison

//
console.log(NaN == NaN); //false 
console.log(NaN === NaN); //false
// in JS NaN is the only primitive value not equal to itself.

//strict equality 
console.log(NaN === 234);
console.log(NaN === NaN);
console.log(22 === 22); 
console.log(23 === 334);
console.log( 0 === -0);
console.log( -0 === 0 );    
console.log( "ayush"==="ayush");
// console.log({} === {}); // two objects being created on two different objects.
//always returns false as JS compares objects by reference , not by value.
let x = {};
console.log(x === x);

// x = { "a": 23} and y = { "a ": 23} in objects 


//abstract equality
console.log(null == undefined);    //true 
console.log(10 == "10"); // ToNumber("10") => 10
console.log("55"==55);
console.log(false == 0); 
console.log(true == 13); //false 
console.log(10 == { valueOf() {return 10}}); // ToPrimitive . hint => number // will convert to "10" , then toString will convert to 10 , 10 == 10 .

// there can be cases where two same decimal values may or may not be equal , because decimal values are stored with precision

