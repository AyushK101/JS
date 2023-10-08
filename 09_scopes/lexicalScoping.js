//phase 1 : parsing

//assume a entity scope manager , which helps js to manage scopes .
var teacher = "ayush "; // global scope 
function fun( ) {  // global scope 
    var teacher = "pulkit";  // inside the scope fun , scope manager will say inside the scope of fun i have never heard about teacher . so teacher will get scope of function fun. 
    console.log(teacher);  
}
console.log(teacher);
fun(); //source{avoid}

// phase 2 : execution

var teacher = "ayush ";  // hey scope manager , do you know about a variable teacher , scope manager  says : yes  , teacher = "ayush"
function fun( ) {   
    var teacher = "pulkit";   //in scope of fun : hey scope manager do you know about the variable teacher , scope manager says : yes with scope fun
 // execution : do you have teacher variable in the scope of fun ; yes 
    console.log(teacher);  //source : hey scope manager , in the scope fun , do you have variable teacher , s.m. : yes , therefore : print(pulkit)
}
console.log(teacher);// we are in the global scope , so scope manager w.r.t. the global scope do you know a global variable teacher ; s.m. : yes ; so here i will print ayush
fun(); // hey scope manager , do you know about a variable fun in global scope , scope manager says : yes

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
    console.log(teacher); 
    console.log(teachingAssistant); // in scope of fun , i don't know about teaching assistant ; go one scope outside  ; yes 
}

fun();// hey , scope manager , here i am using a variable as a source , do you know about a variable fun in the global scope ; yes 
console.log(teacher);   
console.log(teachingAssistant); 


//####################################################################


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