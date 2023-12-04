
/** PROTOTYPES :-
 * prototype is a fundamental concept that is used to implement object-oriented programming. 
 * Every object in JavaScript is associated with a prototype object, which is an object that 
 * serves as a blueprint for the properties and methods that the object can have. 
 * These prototypes are used to create a chain of inheritance,
 *  allowing objects to inherit properties and methods from their prototypes.
 */



function fun() {
    return new Promise( (res , rej) => {
        setTimeout(() => {
            rej("SUCCESS");
        }, 2000);
    })
}

let z = 23;
let x = fun();
console.log(x);

x
.then( (result) => {
    console.log(result);
    console.log("successfully returned");
    console.log(x);
})
.catch( (error) => {
    console.log(`${error} is not returned and z's value is , ${z}` );
    console.log(x);
    let alpha = (error) => `${error}`
    console.log(alpha(error));
})

//#################################################]

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 500);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 3 rejected");
    }, 1500);
  });
  
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log("First promise to settle:", result);
    })
    .catch((error) => {
      console.log("First promise to reject:", error);
    });
  