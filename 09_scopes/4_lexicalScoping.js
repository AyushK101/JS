/**
 *  execution context is the environment where a specific portion of the code executes. (useful lexical scope for that code )
 * 
 *  mechanism of allocating memory for variables and initializing with the value undefined at the execution context's creation phase is called Variable Hoisting.
 * 
 * 
 * 
 *  Lexical refers to the definition of things.
 *  Lexical scope is the definition area of an expression.
 *  In other words, an item's lexical scope is the place in which the item got created.
 *  *an item's definition space is its lexical scope.*
 *  *code within an item's lexical scope can access the item*
 */




//phase 1 : parsing

//assume a entity scope manager , which helps js to manage scopes .
var teacher = "ayush "; // global scope  (bcz it is not know to scope manager yet , it is not inside any function and its var)
function fun( ) {  // hey scope manager , do you already know about variable fun ? : nah : (is fun inside any function ?: no :  is fun inside a block ? : no : that means global scope )
    var teacher = "pulkit";  //hey s.m , do you know about variable teacher inside the scope of fun? : no : formal declaration , var : therefore , teacher will get scope of fun 
    console.log(teacher);  // no formal declaration , instead a variable is used as a source 
}
console.log(teacher);
fun(); // using the variable , not assigning value (source)

//after the parsing phase every variable has its scope 


// phase 2 : execution

var teacher = "ayush ";  //1. hey scope manager , do you know about a variable teacher  : yes : therefore assign , teacher = "ayush"
function fun( ) {   //we won't go through it until we call the function 
    var teacher = "pulkit";   //3. because we are inside the fun , we will consider the scope of fin scope of fun : hey scope manager do you know about the variable teacher , scope manager says : yes with scope fun
 // execution : do you have teacher variable in the scope of fun ; yes 
    console.log(teacher);  //source : hey scope manager , in the scope fun , do you have variable teacher , s.m. : yes , therefore : print(pulkit)
}
console.log(teacher);// we are in the global scope , so scope manager w.r.t. the global scope do you know a global variable teacher ; s.m. : yes ; so here i will print ayush
fun(); //2. hey scope manager , do you know about a variable fun in global scope ? : yes

console.log(teacher) ; // ayush : as global


//##############################################################

var Teacher = "ayush" ; 
function fun()  {
    var Teacher = "pulkit"; // teacher : pulkit (scope of function)
    teachingAssistant = "vaibhav";  // parsing : no formal declaration : leave it
    // once inside a scope , we don't know about scope of a variable we check the outer scopes one by one .
    // hey , s.m. do you know about variable teachingassistant in global scope ; no 
    // case1: not declared outside : auto-global (automatically makes global scope)
    // case2 : declared outside  
    console.log(Teacher); 
    console.log(teachingAssistant); // in scope of fun , i don't know about teaching assistant ; go one scope outside  ; yes 
}

fun();// hey , scope manager , here i am using a variable as a source , do you know about a variable fun in the global scope ; yes 
console.log(Teacher);   
console.log(teachingAssistant); 


// ####################################################################


var Teacher = "ayush" ; 
function fun()  {
    var Teacher = "pulkit"; 
    teachingAssistant = "vaibhav";   
    console.log(teacher); 
    console.log(teachingAssistant);
}


console.log(teachingAssistant); // auto-global works only on target reference.therefore throw error , because fun function has not been executed yet.
fun();
console.log(teacher);  