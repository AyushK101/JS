console.log(!0);
//0 => falsy value , 
// ToBoolean(0) => false ;  hence !0 => true 

console.log(!(-4)); //-4 => is truthy value 
// ToBoolean(-4) => true ; hence !(-4) => false

console.log(!{}); // object => truthy value 
// ToBoolean(object ) => true ; !object => false 

console.log(!console.log(0)); // console.log() prints 0 but returns undefined.
