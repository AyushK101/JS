//from documentation
// empty string : "" => 0
// "0" => 0 
// "-0" => -0
// "  009  " => 9
// "3.143" =>  3.143
// "0." => 0
// ".0" => 0
// "."  => NaN
// char : "$"  => NaN
// hexadecimal , octal : "0xaf" =>175  //valid hexadecimal number , so js can parse it.
console.log("0x78" - 2);
console.log("0o11"-23); // 0o11 is valid octal number,
// "ab23"  => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

//array
//[""] => 0 array of length 1 of empty string
//["0"] => 0
//["-0"] => -0
//[null] => 0
//[undefined] => 0
//[1,2,3] => NaN
//[[[]]] => 0  nested array object 
// [] =>










console.log(12-3); // both of them already a number , so we just subtract.

console.log(undefined - 3); // undefined is not a valid number , so we make it undergo ToNumber abstract operation
// ToNumber(undefined) => NaN 
// NaN - 2 => and for any number when you do any operation with NaN it results NaN.

console.log(null - 5); // null not a valid number , so make it undergo ToNumber abstract operation 
// ToNumber(null) => +0 
// +0 - 5 => -5

console.log("123" - 10); // "123" is a  string so we make it go under ToNumber abstract operation
// ToNumber("123") => 123
// 123 - 10 => 113

console.log("12fd" - 20 ); //  "123" is a  string so we make it go under ToNumber abstract operation
// ToNumber("12fd") => NaN bcz this string cannot be parsed a number.
// NaN - 20 => NaN

// console.log(Symbol("123") - 30 ); // gives type error

console.log(4 - true ); // true is a boolean , so we make it undergo ToNumber abstract operations 
// ToNumber(true) => 1
// 4 - 1 => 3
