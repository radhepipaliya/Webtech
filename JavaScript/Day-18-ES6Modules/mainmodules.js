import demo from "./add.js"; // Default Import
import { userName, age } from "./add.js";//Named Import
console.log("Main Modules");

//! What is Modules?
//* A mdoule is a separate file.
//* Modules are allows us to divide the javaScript code into separate files for easy readability and organized code.

//! Type is Modules?
//* A modules is a seprate file.
//* Modules are allows us to divide the javascript code into separate files for easy readability and oraganized code.

//! Types of Modules:
//? There are two types of modules:
//* 1. ES6 Modules -> import/export -> React.js
//* 2. Common JS Modules -> requires() and module.export() -> node.js

//! Use the logic in a main file
console.log(demo(10, 20));
console.log(userName);
console.log(age);