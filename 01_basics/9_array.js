let arr = [ "dsd" , 33 ,43 , "s" , null , undefined , NaN];
let arr1 = [ 3, "sdsd" ,4,  , ];
let numArr = [ 2, 3, 4, 5 ];

arr.length;

arr.concat(arr1);

//! FILTER method
// creates a `shallow copy` which include elements which pass the test in the callback passed.

let x = numArr.filter( (element) => element < 77); //return the values for which callback `returns` truthy values.

console.log(x);

//! calling filter on non-array type objects
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "a", // ignored by filter() since length is 3
  }
  console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
  // [ 'a', 'b' ]

//! affecting array (modifying , deleting , appending)
let words = [ "ds" , "sdds" , "dss " , " sds" , " dsfgf"];

let modifying = words.filter( (word , index , words ) => {
    words[index+1] += "hehe";
    return index > 1;
})

let appending = words.filter( (word , index , words ) => {
    arr.push('nothehe');
    return index > 1;
})

let deleting = words.filter( (word , index , words ) => {
    arr.pop();
    return index > 1;
})

//! MAP method 
// returns modified value of the callback on 
let mapModify = numArr.map( (element , index , numArr) => {
   return element*2;
})
console.log(mapModify);

//! REDUCE method
// reduces all the elements of all the values into single value
let REDUCE = numArr.reduce( (accumulator , currentElement  ) => {
   return accumulator+currentElement;
}, 0);

console.log(REDUCE)

// slice , join , keys , values , find ....


//! pop() , push();
