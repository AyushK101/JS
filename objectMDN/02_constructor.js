// A constructor is just a function called using the `new` keyword.
// it does following:-
// 1. create a new object
// 2. bind this to the new object, so you can refer to this in your constructor code.
// 3. run the code in the constructor
// 4. return the new object.


//try to visualize  a empty object and adding properties to it while executing the constructor
function Product(name) {
    this.name=name; 
    this.introduceYourself = function fun() {
        console.log(`hello ${this.name}`);
    } 
}

//> you have been using objects all along like JS builtin browser API or javascript object.
//ex: myString.split(",");
//> you were using a method available on `String` object.
//> Everytime you create a string , that string is automatically created as an instance of `String`
// therefore has several common methods and properties available to it.

//? Instance : in oops It represents a unique copy of the object, with its own set of attribute values.
//ex: for each webpage loaded , an instance of `Document` is created , called document which represents the entire webpage structure , content and other features.


//objects are very useful as structures for storing related data and functionality .



