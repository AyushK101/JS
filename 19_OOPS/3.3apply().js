// The apply() method of Function instances calls this function with a given this value, 
//and arguments provided as an array (or an array-like object).

//NOTE: it's same like call() , just arguments are provided in array form.

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.apply(this, [name , 5]); //* here we are calling Product with given this and the value of this inside this function is Food (which is calling site)
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  
