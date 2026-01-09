console.log("Function in JS");

//! Functions:
//* The Function is a block of code which is used to perform some specific task.

//? Syntax: function identifier () { // code }
// Here identifier -> function_name

//! Non-parameterized function:

function greetUser(){
    console.log("Hello, User!");
}

greetUser(); // Function Call Statement (FCS)

//~ The Function call statement is responsible to call or invoke the function execution.
//~ In simple world FCS is Combination of function name and empty ().

//! Paramterized Function:

//! What is parameters?
//* The parameter is temporary variable which is declared inside the function defination.

//! what is arguments?
//* The arguments are the actaul values which is passed inside the function call element.
function greetPerson(name,name2) {
    console.log(`Greeting from the ${name} and ${name2}`);
}

greetPerson("abx" ,"aby");

