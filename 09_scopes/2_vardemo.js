//
{
    console.log(x); // why we get undefined ? => lexical scoping 
    var x = 10;
    console.log(x);
}

console.log(x);
//

//
function fun() {
    var z = 12;
    console.log(z);
}
console.log(z);
//

//
if(false) {
    var a = 12;
}

console.log(a);
//


