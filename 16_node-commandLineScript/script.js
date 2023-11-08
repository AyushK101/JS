#!/usr/bin/node
// #! => shebang => special kind of comment which the system uses to determine what interpreter 
// to use to execute the file. #=>she & !=> bang.

console.log("hello world");

// COMMAND LINE ARGUMENTS
console.log(process.argv);

console.log(process.argv[2].split("=")[1]);
