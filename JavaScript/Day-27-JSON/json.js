console.log("JSON in JS");

//! JSON:
//* JSON stands for JavaScript Object Notation.
//* It is a light-weight format for structuring the data.

//* Whenever you want send the data from browser (client/app) to server, data must be in string format.

//! JSON will provide two method:
//? 1. JSON.parse():
//* The JSON.parse() will convert the JSON string into the JS object.

//? 2. JSON.stingify():
//* The JSON.stringify() will convert the JS object into the JSON string.
//? Syntax: JSON.stringify(jsObject)

let employee ={
    eName:"John",
    eSalary: 30000,
    eAge: 20,
};

console.log(JSON.stringify(employee));

//! What is collection?
//* A collection is a group of multiple documents.
//*It is represent by -[]

//! what is document?
//* A document is collection of key-value pair/field.
//* It is represented by -{}    