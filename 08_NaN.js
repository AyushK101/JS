//NaN

//isNa

let a = "19";
let b = "abc";
let c = "ayush";
let d = 10 - c ;

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));
//ths isNaN function coerces(coercion) the argument before checking for NaN . 
// Now string is not NaN , right ? but when we convert string like "abc" to
// a number it becomes NaN & hence 'isNaN' returns true.


//Number.isNaN() function 
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc"));
//this function don't do coercion 


