//The call() method of Function instances calls `this` function with a given `this` value and 
//arguments provided individually.

const player1 = {
    firstName: "virat",
    lastName : "kohli",
    noToBat: "no.3",
    canBowl : false ,
    getDetails : function () {
        console.log(this.firstName , this.lastName , "comes at" , this.noToBat );
    }
}

const obj = function() {
    this.getDetails();
    
}

obj.call(player1); // here we are calling obj by giving this=player1 inside obj.
// equivalent to => player1.obj

//###########################################

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price); //* here we are calling Product with given this and the value of this inside this function is Food (which is calling site)
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  



