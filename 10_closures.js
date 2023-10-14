//microsoft's devops work is done by accenture .
//closures 
function todo(task) {
    console.log("start of todo");
    setTimeout(function fun() {
        console.log("completed ",task);
    }, 5000);
    console.log("end of todo");
}

console.log("starting");
todo("assignments");
console.log("ending");
// at the time instance when function fun will be called , the todo function is already over.
// if fun is called after the completion of todo , and todo has ended , how fun is able to access task variable ??
// this happens due to closures !
// closure :  every  function "remembers" its lexical scope even when the function is executed outside the lexical scoping .
// closure is the property of remembering the variable rather than the value of the variable .


//###########
function a(name) {
    return function b() {
        console.log(name);
    }
}

let x = a("ayush");
console.log(x);
x();

//##################
function fun(){
    let name = "harshit";
    function callback( ){

        console.log(college);   
        console.log(name);
    }
    return callback;
}

let g = fun();
g();
var college = "iit delhi";
x();

// if todo is completed it will be removed from callback how actually the variables still persist ? where are they ? 
// there is a garbage collector in js like java , which give 2nd chance to unused variables and if they are not yet used , then sweep them through `mark and sweep algorithm.


//##################### case 
function test() {
    for(var i = 0; i<3; i++) { //function scope is of test for var i 
        setTimeout(function exec() {  // timer => 0sec , 1sec , 2sec : don't execute till loop is over : till then value of i become 3.
            console.log(`i : ${i}`);
        }, i*1000);
    }
}

test();

// 

function test() {
    for(let i = 0; i<3; i++) {  // let is block scope  : that means it  is only available in one block : i is not present in the scope of exec
        setTimeout(function exec() {  // i=0 => timer=0s , i=1 => timer=1s , i=2 => timer=2s : bcz for loop creates another block again and again .
            console.log(`i : ${i}`);
        }, i*1000);
    }
}

test();




// #############################
const add = (function exec( )  {
    let counter = 0;
    return function process() {
        counter +=1; 
        console.log(counter)
        return counter 
    }
})();

console.log(add); //has what is returned i.e. function process
add();
add();
add();








