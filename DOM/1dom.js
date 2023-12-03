// //select element

// const mainHeading = document.getElementById("main-heading");

// const queryHeading = document.querySelector("#main-heading");

// console.dir(mainHeading); //dir for object representation

// mainHeading.textContent = "using textContent property";

// console.log(mainHeading.textContent);

// //change style of elements

// const divH2 = document.querySelector("div.headline h2");

// divH2.style.backgroundColor = "black";

// console.dir(divH2);

// // get and set attribute 

// const link = document.querySelector("a");

// link.style.fontStyle = "italic";
// console.dir(link.getAttribute("href"));
// console.dir(link);

 
// const input = document.querySelector(".form-todo input");

// console.log(input.getAttribute("type"));
// input.setAttribute("type" , "image");
// console.dir(input.getAttribute("type"));

// //set
// console.dir()
// link.setAttribute("href" , "http://www.google.com");

// console.dir(link.getAttribute("href"));


// const myObject = { name: 'John', age: 30, hobbies: ['reading', 'gaming'] };
// console.dir(myObject);

// //! array-like object = can use indexing , length property 

// // get elements by className() ang querySelectorAll()
// const navItems = document.getElementsByClassName("nav-item");
// console.log( 'navItems',navItems); // array-like object : HTMLcollection

// const navItems1 = document.querySelectorAll(".nav-item");
// console.log('navItems1 ', navItems1 ); // array-like object : nodeList

// for( let i=0; i<navItems.length ; i++) {
//    navItems[i].style.backgroundColor = `black`;  
//    navItems[i].style.color = `green`; // can't use as 
//    console.log(navItems[i]);
// }


// / innerHTML /

// const headline = document.querySelector(".headline h2");
// headline.innerHTML = "<span> change using innerHTML </span>";

// console.log(headline);


// / classlist /

// const headerH1 = document.querySelector("header").querySelector('h1');

// headerH1.classList.add("addingClassList");
// headerH1.classList.remove("addingClassList");
// headerH1.classList.toggle("addingClassList");
// console.dir(headerH1.classList);

// / createElement in DOM : append , perpend , remove /

// const todoList = document.querySelector(".todo-list");

// for(let i=3 ; i<9; i++) {
//    todoList.innerHTML += ` <li> todo ${i} </li>` ;  
// }

// // todoList.TEXT_NODE = "this is a text node";

// // const todoItem = todoList.createTextNode("this is text node");

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("this is text node by createTextNode");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// console.dir(newTodoItem); 

// // or more better way
// newTodoItem2 = document.createElement("li");
// newTodoItem2.textContent="this is 2nd method by textContent";
// todoList.append(newTodoItem2);

// //! removing 
// const todo1 = todoList.querySelector("li");
// todo1.remove();


// //! adding : prepend and before
// const newTodoItem3 = document.createElement("li");
// newTodoItem3.textContent="this is prepend-adding example";

// todoList.prepend(newTodoItem3);

// //before

// const newTodoItem4 = document.createElement("li");
// newTodoItem4.textContent="this is before-adding example";

// todoList.before(newTodoItem4);


// //! insertAdjacentHTML method to create element in dom

// let insertingElement = divH2;

// // todoList.insertAdjacentElement("afterbegin" , insertingElement);
// console.log(todoList);


// //! clone node : as 1 node can only be used once


// const toClone = document.createElement("li"); // can only be used once without cloning 
// toClone.textContent= "clone li example 1";
// todoList.append(toClone);

// const isClone = toClone.cloneNode(true); 
// todoList.prepend(isClone); 

// console.log(toClone);


//! static list vs live list 

//1. querySelectorAll will use static list

const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "this is static vs live list";

const todoList = document.querySelector(".todo-list");
todoList.append(sixthLi);

console.log(listItems); 

//2. gettingElement(s) will give us live list 

const lis = todoList.getElementsByTagName("li");

const seventhLi = document.createElement("li");
seventhLi.textContent= "todo 7";

todoList.append(seventhLi);

console.dir(lis);

//! how to get the dimension of the element 

//height
const sectionTodo = document.querySelector(".todo-list");

console.log(sectionTodo.getBoundingClientRect());
sectionTodo.get














