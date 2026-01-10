console.log("Function in Javascript")

//! TYpes of Functions:
//? 


//! 1. Named Function:
//* The FUnction  which is defined with identifires is called as Named FUnction.
//* In simple words, the function which has a name is called Named Function.

function faltuKaGhyan() {
    console.log("Work like a madness and achieve like a greatness!");
}

faltuKaGhyan();

//! 2. Anonymous Function:
//* The function which don't have any name is called as Anonymous Function.

//! 3. Function as an Expression:
//* THe Function which is assigned to a variable as a expression is called as function as an Expression.

//! 1st way:
//? Store the anonymous function insode a variable and call that variable with empty().

let mrHashmi = function () {
    console.log("Mr. x");
}

console.log(mrHashmi);
mrHashmi();


//! 2nd Way to call Anonoymous Function:
//? Warp the entire anonymous function inside the empty () and call the empty() insisde the outer () or just after the function block.

(function () {
    console.log("This is anonymous function");
}());


//! arguments object:
//* The arguments object object is used to store all the values which is passed inside the FCS as a actucal values.

function getNumbers() {
    console.log(arguments);

    let argumentsObject = arguments;
    console.log(Array.isArray(argumentsObject)); // false
    console.log(arguments[0]);

    console.log(typeof arguments);
}

getNumbers(10, 20, 30);

//! 4. IIFE:
//* The IIFE stands for Immediate Invoking function Expression.
//* THe IIFE function executes only once.

// (function () {
//     alert("Hello!");
// })();


//! 5. Arrow Function:
//* THe arrow function is shorthand syntax to create function in JS.

//* Arrow function is introducted in ES6 concepts which was realsed in 2015.

//? Syntax: () => {}

    let add = (num1,num2) =>{
        console.log(num1+num2);
        return num1+num2;
    }

    console.log(add);
    add(10,20);
    console.log(add(30,50)); // 80, 80