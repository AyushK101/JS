#!/usr/bin/node
// #! => shebang => special kind of comment which the system uses to determine what interpreter 
// to use to execute the file. #=>she & !=> bang.

console.log("hello world");

// COMMAND LINE ARGUMENTS : strings of text used to pass additional information 
// to a program , when a program is `run through the CLI` of an OS.


//ex: The process.argv property is an inbuilt api of the process module
// which is `used to get the arguments passed` to the node.js process when 
// run in the command line.

console.log(process.argv);
// in cli : run ./1script.js --name=ayush --age=20 --class=1sem

console.log(process.argv[2].split("=")[1]);

