/**   in case of arrow function , this keyword will be resolved lexically 
 * in  this is not defined inside arrow function , therefore we will go one scope outside.
 * ? which will be global scope because having set of curly brace in an object won't create a scope in an object.
 * 
 */

// in obj1, `this` will directly points to calling site (no lexical resolution)
var obj1 = {
    name: " ayush", 
    company : "micro",
    display : function()  {
        console.log(this.name , `works in` , this.company); 
    } 
}

//here, `this` will get resolved lexically and will go in global scope directly as object's {} won't create any scope and here it won't find any definition of `this`.
var obj2 = {
    name: "ayush",
    company : "micro",
    display : () =>  {
        console.log(this.name , `works in` , this.company); 
    } 
}

//here, will go one scope outside which is fun's scope and inside display's scope we have this variable defined which is pointing to obj3.   
var obj3 = {
    name: "sarthak",
    company : "phonepe",
    display : function fun() {
        console.log(this); // in normal function fun , this will point to calling site => this=obj3
        setTimeout(() => {
        console.log(this.name , `works in` , this.company); 
        }, 3000);
    } 
}
 
// settimeout scope => `()=>` scope => global scope
var obj4 = {
    name: " ayush",
    company : "micro",
    display : () => {
        setTimeout(() => {
        console.log(this.name , `works in` , this.company); 
        }, 3000);
    } 
}


obj4.display();  

