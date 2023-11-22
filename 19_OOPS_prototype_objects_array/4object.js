//https://chat.openai.com/share/df816029-f65b-4ef7-bb76-091c3648f67a


//? In js , ARRAY is a custom object , where `key=>index` and the value is the given value to the corresponding index.

let arr = [2, 3, 4, 2];

let obj0 = {
  x: 23,
  y: 34,
};

//NOTE: const object doesn't constant object : because const points to object , not its value , therefore we can't change object but can change value.

//1. can't update old one or add new
Object.freeze(obj0);
console.log(`obj:` , obj0);

//2. can update old one but can't add new
let obj1 = {
  x: 12,
  y: 34,
};

Object.seal(obj1);
obj1.x=25;
obj1.z=32;
console.log(`obj1 :` , obj1);
//
let obj2 = {
  x: 23 , y: 34, 
}

//3. to get all the keys of the object in form of arrays
console.log(Object.keys(obj2)); 

//4. to get all the values of the object in form of arrays.
console.log(Object.values(obj2));
//5. to get all the entries
console.log(Object.entries(obj2));


//

let obj = {
  x: 23, 
  y: 34,
}

let another = obj; // it's going to point in the same `obj` in memory

let newObj = Object.create(obj); // create new obj 

another.x=11;
newObj.y=43;


console.log(obj , another , newObj );


