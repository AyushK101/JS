//?On its own, a class doesn't do anything: it's a kind of template for creating concrete objects of that type

//?Each concrete object we create is called an instance of the Professor class.

//?The process of creating an instance is performed by a special function called a constructor.

//Programming languages often use the keyword new to signal that a constructor is being called.


// class Professor
//     properties
//         name
//         teaches
//     constructor
//         Professor(name, teaches)
//     methods
//         grade(paper)
//         introduceSelf()



//! INHERITANCE:- 
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming#inheritance

//a student's class be like:-

// class Student
//     properties
//         name
//         year
//     constructor
//         Student(name, year)
//     methods
//         introduceSelf()


//NOW , both share some properties and methods and some different. THEN , we can define a new 
//      class Person where we define all common properties and methods & THEN , professor and 
//      student can both derive from Person , adding their extra properties and methods:-


// class Person
//     properties
//         name
//     constructor
//         Person(name)
//     methods
//         introduceSelf()
//
// class Professor : extends Person
//     properties
//         teaches
//     constructor
//         Professor(name, teaches)
//     methods
//         grade(paper)
//         introduceSelf()
//
// class Student : extends Person
//     properties
//         year
//     constructor
//         Student(name, year)
//     methods
//         introduceSelf()


// here , Person is parent class and Professor & student is child class.
// NOTE: we defined introducedSelf() in all three classes because the way introduction will be different.

//?thisFeature:-when a method has the same name but a different implementation in different classes - is called polymorphism.


//! Encapsulation:-
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming#encapsulation


//######################################################
// you can create class using a `class` keyword.

//?Omitting Constructor:-
// you can omit constructor , a default constructor will be generated for you.

class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();
spot.sleep(); // 'zzzzzzz'


//?Inheritance:-
// we can use the `extends` keyword to say that this class inherits from other class.
// the first thing Professor's constructor does is to call superClass constructor using super() , which sets the name.
// After that it sets the teaches property.
// Also overrides the introduceSelf method and new method grade.

class Professor extends Person {
    teaches; // just listing properties to make more readable.
  
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(
        `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
      );
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  }

const walsh = new Professor("Walsh", "Psychology");

//!Encapsulation :-

// Private properties and methods get created by using a hash # prefix and cannot be legally referenced outside of the class.

class Student extends Person {
    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }
  }

  