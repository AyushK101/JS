//from documentation 
// https://262.ecma-international.org/10.0/#sec-tostring


// undefined => "undefined"
// null => "null"
// boolean => true : "true" and false : "false" 
// string => as it is 
// symbol => error
// number => calls NumberToString() function
 // https://262.ecma-international.org/10.0/#sec-tostring-applied-to-the-number-type
 // 0 and -0 => 0
 

 // [] => ""
 // [1,2,3] => 1 , 2 , 3
 // [null , undefined] => ","
 // [[],[],[]] => ",,,"
 // [,,,] => ",,,"




console.log("ayush"+ "kumar"); // both string , so ToPrimitive conversion will be string 

console.log(undefined + "node"); // 
// undefined => "undefined" 

console.log("5"+ null ); // one of them is already a string 
// null => "null"

console.log("ayush" + true);
// 

