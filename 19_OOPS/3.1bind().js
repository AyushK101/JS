//! In JavaScript, when you log an object to the console,
//!  the console may display the object's constructor function as part of its representation. 
//This is a way to show the type or class of the object.

// call() , apply() , bind() 
//! If your function is not having the context of `this` , you can use the bind ,
//! call or apply function to manually set the this for your object.


//bind()
const player1 = {
    firstName: "virat",
    lastName : "kohli",
    noToBat: "no.3",
    canBowl : false ,
    getDetails : function () {
        console.log(this.firstName , this.lastName , "comes at" , this.noToBat );
    }
}

const obj = function (x , y) {
    console.log(x+y);
    console.log(this.getDetails()); // as this=obj and getDetails is not defined inside obj.
 
}

let x = obj.bind( player1 , 2 , 3 ); //now this is going to point to player1 instead of obj(calling site)
// this obj.bind(player1) is going to return a new function x() now inside x's `this` is going to point at player1.


x();





