//
{
    let x = 12;
    console.log(x);
}
console.log(x);
//
function fun() {
    console.log(y);  // error ; hence let's block scope don't turn into function scope.
    let y = 2;
    console.log(y);
}
fun();
//
var g = 2;
var g = 3;

// let f = 2;  cannot redeclare
// let f = 3;
//


//
console.log(z);   //cannot access before initialization because not complete global scope
let z = 2;
//
