//>Prototypes are the mechanism by which JavaScript objects inherit features from one another.

//>Every object in JavaScript has a built-in property, which is called its prototype.The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

//? the prototype of a <object> is => <object>.__proto__ OR Object.getPrototypeOf(<object>);

//>When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.


// NOTE: when we call a object , runtime first looks in that object than in prototype , this is called SHADOWING.


// Setting a prototype

//1. using Object.create();
//here creating a new object=>carl , whose prototype is `personPrototype`.
const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);

  carl.greet(); // hello!

//2. using a constructor
//In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).
const PersonPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, PersonPrototype);
  // or
  // Person.prototype.greet = personPrototype.greet;


//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#using_a_constructor


//It's common to see this pattern, in which methods are defined on the prototype, but data properties are defined in the constructor.


//Properties that are defined directly in the object, like name here, are called own properties, and you can check whether a property is an own property using the static Object.hasOwn() method:

