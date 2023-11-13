/** OOPS
 *
 * ex: e-commerce(flipkart) -> thousands of products -> every product has :-
 * common properties (name , images , description , price , discount , review .....) , common behaviors ( buy , add to cart , add review ....)
 * Can't make a new file for thousands of products , therefore make a template(blueprint)
 *
 ** blueprints => CLASSES  ex: product
 ** real instances/entities => OBJECTS  ex: iphone , rolex , asus vivo 14 etc
 *
 */

/** CLASSES:-
 * In JS , we have a `class` keyword , using which we can prepare a class.
 * Inside the class =>
 ** 1. properties (DATA MEMBERS)
 ** 2. behavior/actions (MEMBER FUNCTIONS)
 *
 * To define member functions , we can just write normal functions in the class.
 *
 * NOTE: we need a very special function as well which doesn't qualify as a member function
 * called CONSTRUCTOR.
 *  New objects can be created by calling the constructor function.
 *
 *
 * To define data members , we need to initialize them inside the constructor function.
 * We use the "this" keyword to initialize data members.
 *
 */


/**
 * hwo do you create real life object ?
 * let iphone = new Product("ayush" , 100000);
 */

class product {
    discount = 12;


    constructor(n, p) {

    //constructor function to create new real life instances called object.
    //when we create a object , this constructor is the first function that gets called.

    console.log("calling constructor");
    this.name = n; //data members 
    this.price = p;
    }

    // member functions
    displayProduct() {
        console.log(this.name , this.price);
    }

    buyProduct() {

    }
}
            //new product == constructor();
let iphone = new product("iphone", 1000); //calls the constructor function internally with passed parameters.
let asus = new product("asus", 500);

console.log(iphone, asus); // JS object(key-value pair) getting printed

iphone.displayProduct();


/** THIS keyword:-
 * Behavior of this in JS is different than c++ or java.(in c++ or java this refers to the same object)
 * *In JS this keyword refers to the calling site , i.e, from where the function or class has been called. 
 */

/** NEW keyword:-
 * It look like new keyword only calls constructor function , but it does more than that.
 * * NEW keyword is not only associated with classes , but it can be used with functions also (that's how classes were used before classes came i.e, through functions)
 * 
 */

/** w.r.t a function what does NEW keyword do ?
 *  
 */

function Product(n , p)   {  //CONSTRUCTOR FUNCTION
    this.name=n;
    this.price=p;
    // if you don't write return statement , it assumes => return this;       where , this={name:"n" , price:"p"}
    // or if you return a object yourself it will return that , like below 
    //  return {name:"bob" , price:1999};

}

let p1 = new Product("p1" , 100000);
console.log(p1);

let p2 = new Product("p2" , 100000);
console.log(p2);
/**
 * the new keyword actually  executes a 4 step process:-
 * 1. It creates a brand new  empty JS object.
 * 2. It does a process of linking.
 * 3. Calls the function with the this property assigned to the empty object it created before.
 * *  , i.e , this = {}
 * 4. The function execution starts and we know "this" keyword belongs/refers to the calling site.
 * *  ,.i.e , if this.name="ayush"; , just like a object , it will add/modify the name="ayush" key-value pair in the this = {} object.
 * 
 **   At last , if function doesn't "return" any specific object , then it automatically "return `this`;" (this={ //key-value })
 *    otherwise it returns the object(only object) returned by you.
 *   
 * 
 */ 

/** Then why classes ?
 * 1. making JS syntactically consistent with the other languages.
 * 2. you can't call a class based syntax without the new keyword , 
 *    if you call a function without NEW keyword , it will behave like a normal function and ask for return statement.
 *  
 */


//################################################### day-2

// PROTOTYPES

/**
 * In other languages , objects are based on classes.
 * Whereas , In JS we don't have any mental model of copy.
 * 
 * * The objects are going to be linked to their prototypes somehow.
 *   
 */

/** WHAT IS PROTOTYPES ?
 * *It is a mechanism using which JS objects inherits features from one another.
 * 
 * *every object will be by default having a property named as "prototype" .
 * our object  has a prototype which is linked to an object which is having its own prototype(named "dunno protoype") which is linked to an object that is having prototype:null(no prototype) and can be soon before null.
 * 
 *  
 * 
 * */

// whenever you make changes to this prototype , it will make changes reflect to its objects also.
// property attached to class after the creation of object but object can still access it.

