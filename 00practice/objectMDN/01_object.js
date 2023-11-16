

// object has two things 
//1. data items OR object's properties
//2. object's function OR object's methods
// dot notation : access objects properties and methods

//1. object literals

let obj = {
    a : "b",
    c : [1,2,3,3],
    bio : function() {
        console.log("helloq");  
    },
    //another way of writing function/methods-
    kilo() {
        console.log("hello");
    },

    //object inside object
    king : {
       o : 'd'
    }


}


function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }


//another way of accessing-
console.log(obj["king"]["o"]);

//creating and updating new members of object form outside
obj.a = "x";
obj.Data = "value";


// setting a data member as a variable value pointing to a name
const dataName = "name";
const dataValue = "ayush";
obj[dataName] = dataValue;
console.log(obj.name);  

// `this` keyword
//? The this keyword refers to the current object the code is being written inside.
//  useful when more than one object.

