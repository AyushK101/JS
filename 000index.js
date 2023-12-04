/** 01_basics: 
 * 01_intro : info , program-flow , 
 * 
 */



typeof return us the string which contains the type description of the value .

let str="hero";
let str2 = `this is global document object `;

str.length;

//2.accessing character
console.log();
console.log(str2[4],"space");
console.log(str.charAt(3));

//3.concatenation
console.log(str+str2);
let newString = str.concat(str2); 

//4. comparing strings
str >> str2; // > , < , == , === etc 
//NOTE: strings are compared case-sensitively


//* String primitive and string objects
console.log(String(2));
console.log(new String(34));

//todo> extracting substring
str.substring(0,2);
str.slice(2);


//6. searching with string 
console.log(str.indexOf('is')); // Output: 11
console.log(str.includes('amazing')); // Output: true
console.log(str.startsWith('Java')); // Output: true
console.log(str.endsWith('!')); // Output: true

//7. changing case
console.log(str.toUpperCase()); // Output: 'HELLO, WORLD!'
console.log(str.toLowerCase()); // Output: 'hello, world!'
//todo> str.replace( "s" , "dd");

 str.split(','); //!returns array
 str.join(','); // joins elements of array into a string

// repeat string
str.repeat(3);

// converting other types to string 
str.toString(23424);

// STRING CONVERSION    
parseInt(str);
parseFloat(str);