/** 
 * QUESTION:- Can there be a way that the new variable can be added to the function 
 * itself so as it is accessible to all the objects created using the function?
 * ANS:- The answer to this question is the use of a prototype.
 ** A prototype is an invisible inbuilt object which exists with all the functions by default.
 *  The variables and methods available in the prototype object can be accessible, modifiable, 
 *  and even can create new variables and functions.
 ** SYNTAX:- ClassName.prototype.variableName = value;
 *  
 * 
*/





function Product(n , p , c) {
    this.name=n;
    this.price=p;
    category.call(this , c);
}

function category(c) {
    this.CategoryName=c;
    this.megastar=c;
    
}

category.prototype.getCategoryName = function() {
    console.log(this.CategoryName);
}

Product.prototype = Object.create(category.prototype);  //making Product objects inherit properties and methods from category's prototype.

let P = new Product("iphone" , 100000 , "electronics");
P.getCategoryName();
console.log(P.megastar);

// class based SYNTAX #########################################

class category {
    constructor(c) {
        this.CategoryName= c;

    }
    getCategoryName() {
        console.log("category is" , this.CategoryName);       
    }
}

class Product extends category  {  //Product class inherits from the category class. 
    constructor(n , p , c) {
        super(c);                  //In a subclass constructor that extends another class (category in this case), you must call super() before accessing this.
        this.name=n;
        this.price=p;
    }
    display() {
        console.log("details of product are");
        console.log("name" , this.name);
        console.log("price",this.price);
        this.getCategoryName();
    }
}

let p = new Product("ayush", 100000 , "electronics" );

p.display();



