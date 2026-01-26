console.log("var variable in JS");

//! What is variable?
//* The variable is nothing but just a container or a memory where we can store the data.
//* There are 3 ways to declare a variable:

//? 1. var
//? 2. let
//? 3. const

//* Syntax: varaibale_type identifier = value;
//? for ex: let num = 10; (D+I)

//! 1. var:
//* The var variable is the first variable introduced in JS.

//? 1. Declaration (D): Possible✅
//* variable_type identifier;
var num;
console.log(num); // undefined

//? 2. Initialization (I): Possible✅
num = 10;
console.log(num); // 10

//? 3. D + I: Possible✅
var num2 = 20;
console.log(num2);

//? 4. R-D: Possible ✅
//* The r-d means same variable type and identifier.
var num;
console.log(num);

//? 5. R-I: Possible✅
//* The r-i means re-assigning the value.
num2 = 50;
console.log(num2);

//! Drawback: variable pollution
