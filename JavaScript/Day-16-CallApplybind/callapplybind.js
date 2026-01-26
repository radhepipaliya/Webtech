console.log("Call,Apply,bind method in JS");

//! Why do we need call(), apply(), bind() method in Js?
//* Basically call(), apply() and bind() method is used to borrow the logic of external function.
//* It is used to manipluate the behaviour of 'this' keyword in js.


//! 1. Call():
//* The Call() method is used to borrow the logic of function and pass the dynamic object.
//? Syntax: methodName.call(thisArd)
//? ANd Here thisArg -> Replace with Actual object

let person1 = {
    username: "Sita",
};

let perosn2 = {
    username: "Gita",
}

function printName(){
    console.log(`Hello , ${this.username}!`);
}

//printName.call(person1)
//printName.call(person2)
//printName(); // Hello, undefined