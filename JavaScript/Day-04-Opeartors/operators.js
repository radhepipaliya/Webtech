console.log("Operators in JS");

//! What is Operators?
//* 

//! Q. What is the differnce between == and === ?

let num1 = 10;
let num2 = "10";

//* Here, == will only check the value not the datatypes.

console.log(num1 == num2); // true

//* Here, === will check both value as well as dataypes.

console.log(num1===num2); // false

//! String Concatenation Operators: (+)
let firstName = "Baburao";
let middleName = "Ganapatrao";
let lastName = "Apate";

let fullName = firstName + " " + middleName + " " + lastName;

console.log(fullName);

let value = 10;
value += 20;
console.log(value);

//! Ternary Operator:
let statusCode = 200;

let result = statusCode === 200 ? "ok":"Not Ok";
console.log(result);

//! Nullish Coalescing Operator:
//* The Nullish Coalescing Operator is used to provide a default value only when the value is null or undefined.
//* It is represented by the ??
//* If the value is valid value then default value will not be executed.

let age =0;
let str ="";
let status = false;
let userAge = age ?? "User value is false";
console.log(userAge);

function greetUser(userName){
    let greeting = userName ?? "Hello Guest!";
    console.log(`Hello  from ${greeting}`);
}

greetUser("John");