// Objects are variables too. But objects can contain many values.
// object properties : name:value

// two methods of creating objects 
// 1. sigleton => const tinderUser = new object( )
// 2. object literals

// symbol declaration
const sym = Symbol("king");

const jsUser = {
    name : "ayush", //js by default take propertyName as string , i.e. "name" , "age" etc.
    age : 19 ,
    location : "gaziabad",
    email : "ayush@google.com" ,
    isLogedIn : false ,
    LoginHistory : ["mon" , "wed" , "thr"],
    //special case 
    "full name":"ayush kumar",
    // using symbol as a key
    [sym]: "myking",
}

// accessing object properties
// 1. objectName.propertyName 
console.log(jsUser.name)
// 2. objectName["propertyName"]
console.log(jsUser["name"]);
//special case only accessed by string accessing 
console.log(jsUser["full name"]);
//symbol
console.log(jsUser[sym]);

// value changing
jsUser.email = "ayush@chatgpt.com";

//freezing value
Object.freeze(jsUser);
jsUser.email = "ayush@hero.com";
console.log(jsUser);


//2
const tinderUser = {

}
tinderUser.id = 122 ;
tinderUser.name = "max";

//nested object
const a = {
    name: "ad",
    b: {
        c: {
         fullName: "ayushKumar",
         fullPlace: "gaziabad",
        }
    }
}
console.log(a.b.c.fullName);

// combining objects
const obj1 = { 1: "a" , 2: "b" , };
const obj2 = { 3: "c" , 4: "d" , };
// const obj3 = Object.assign({} , obj1 , obj2); //{}target : for many objects and other are source .  
const obj3 = {...obj1 , ...obj2}; 
console.log(obj3);

// ex: data from user : database 
const users = [
    {
        id : 1,
        email : "ayush@mail.com",

    },
    {
        id : 2,
        email : "tom@mail.com",
        
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns array therefore we can apply ex: loop etc 
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 
console.log(tinderUser.hasOwnProperty('isLogged')); 
// object methods
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.

//3
const course = {
    courseName: "js",
    coursePrice : 999,
    courseInstructor : "hitesh",
}

// using values 
// course.courseInstructor => not clean if used multiple time

// object-destructing {array-destructing also possible }
const {courseInstructor : inst} = course ;
console.log(inst);

//JSON  
// json is a object 
// JSON is a text format for storing and transporting data

// {
//     "name": "ayush",
//     "age" : "19",
//     "location" : "23"

// } 
//OR 
// {
//     {},
//     {},
//     {}
// }