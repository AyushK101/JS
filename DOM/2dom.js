// child relationship
const rootNode = document.getRootNode();
console.dir(rootNode);

console.dir(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[1];


console.dir(htmlElementNode.childNodes);

const headElementNode = htmlElementNode.childNodes[0];

console.dir(headElementNode);

const textNode1 = headElementNode.childNodes;
console.dir(textNode1[0]);


// parent relationship
console.dir(headElementNode.parentNode);

// sibling relationship 
console.dir(headElementNode.nextElementSibling);


// classList 

const h1 = document.querySelector("h1");

h1.parentNode.parentElement.style.backgroundColor = "black";
h1.parentElement.style.color = "white";


console.dir(h1.parentNode);

const head = document.head ;


const title = head.querySelector("title");
console.dir(head.childNodes);
console.dir(title);

const classlistDiv = document.querySelector("div");

console.dir(classlistDiv.classList);



