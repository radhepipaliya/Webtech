console.log("DOM In JS ->> Document Object Model");

//! What is DOM?
//* DOM stands for document Object Model.
//* DOM is an Application Programming Interface (API) which will allows us to access the HTML elements inside the JS to Provide functonalities.
//* THe hirerarchical representation of an HTML strucutre in the form nodes.
//? OR
//* THe inversted tree-liked structure of a HTML document is called as DOM.

//! Why do you need DOM?
//? 1. DOM is a bridege between the HTML document and JS logic.
//? 2. Without DOM we cannot manipultate (create, modify or remove) the HTML Structure.


//! How to create a DOM?

//? When a browser load HTML document :
//* 1. IT reads a HTML strucutre.
//* 2. It will convert the HTML elements into the tree-like strucutre.
//* 3. This tree is called as DOM.
//? that means JavaScript can't talk directly to the HTML strucutre instead of it will talk to the DOM.

//! Types of DOM
//? 1. Core DOM -> All types of documents
//? 2. HTML DOM -> only for HTML document
//? 3. XML DOM -> Only for XML document
//? 4. React DOM - virtual DOM

//! What is Node?
//* A node is a basic building block in JS.
//* OR A node is a piece of item in JS which will represent different types of items is called as Node.

//? Types of Node:
//* 1. document node -> top-most node
//* 2. element node -> h1, p, div, img, ul, etc -> Attributes.
//* 3. attribute node -> id, class, src, href, etc -> Attributes
//* 4. comment Node -> Comment inside HTMl.
//* 5. leaf Node -> The  node present at the end of the hirerarchy is called as Leaf node.
//* 6. text move -> Text node represent the context or text inside the HTML elements.
//* 7. DocumentFragements= node

//! What is document?
//? THe Document is global object provided by the browser.
//? Here document represents the HTML structure.

//! document properties : (Direct Access Properties)
//? Syntax: document.propertyName

//? 1. document.tile
console.log(document.title);
document.title = "Upadted My Documents";
console.log(document.title);

//? 2. document.head
console.log(document.head);

//? 3. document.body
console.log(document.body);

//? 4. document.url
console.log(document.URL);

//? 5. document.all
console.log(document.all); //HTMLCollection

//! Indirect Access of HTML elements:
//* Indirect access means accessing the html elements by taking references of an another element.

let list = document.getElementById("list");
console.log(list); // 1st li

//! 1. parentElemet:
console.log(list.parentElement);
console.log(list.parentNode);
console.log(list.parentElement.parentElement);

//! 2. nextElementSibling:
console.log(list.nextElementSibling);

//! 3. childNodes:
//* The childNodes returns all types of nodes(elements, text, comment, whitespace, considered as text node, etc)
let box = document.getElementById("bbx");
console.log(box.childNodes); // NodeList(7) [text, h1, text, p, text, span, text]


//! 4. children:
//* The children returns only html nodes (HTML elements only).
//* It ignores the text, attribute, and comment node.
console.log(box.children); // HTMLColletion() [h1, p, span]