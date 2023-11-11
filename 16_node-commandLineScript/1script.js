#!/usr/bin/node
// #! => shebang => special kind of comment which the system uses to determine what interpreter 
// to use to execute the file. #=>she & !=> bang.

console.log("hello world");

// COMMAND LINE ARGUMENTS : strings of text used to pass additional information 
// to a program when a application is runt through the CLI of an OS.


//ex: The process.argv property is an inbuilt application programming interface of the process module
//  which is `used to get the arguments passed` to the node.js process when run in the command line.

console.log(process.argv);

console.log(process.argv[2].split("=")[1]);

// The process.stdout property is an inbuilt application programming interface of the process module which is used to send data out of our program. 
//A Writable Stream to stdout. It implements a write() method.

process.stdout.write("hi guys");
process.stdout.write(" how are you?");