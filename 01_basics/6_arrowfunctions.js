// // (parameters ) => expression
// const  add = ( x , y ) =>  x + y;
// console.log(add(3,4));


// //1
// let sum = (x , y) => x+y;
// console.log(sum(1,2));  

// //2
// let arr = [1,2,3,4,1];
// let sqr = (arr) => arr.map( (Number) => Number*Number);
// console.log(sqr(arr));

//3
function file( array , fun ) {
    console.log(array);
    fun(array);

}
let newArray = [];
file( [2,3,4,5] , (array) => {
   let newArray = array.map( (number) => number*number);
   console.log(newArray);
} );

