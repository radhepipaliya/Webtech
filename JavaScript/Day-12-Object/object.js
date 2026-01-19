console.log("Object in JS");

//! What is Object?
//* An object is a programmatical representtation of an real-world entity.
//OR
//* The object is a collection of multiple different key-value pair.

//* If you print (console) the object, object may not appear in a same order that you have mentioned in the code or program.

//! Property -> A property is a collection of key-value pair.
//? property = key + value

//! How to create an object?
//* There are two ways to create an object:

//?  1. By using Object constructor
//?  Syntax: new Object();
let obj = new Object();
console.log(obj);

//! How to add the properties insidde the empty object:
obj.name  = "Radhe";
obj.isSleeping = true;

console.log(obj);

//! 2. By using Object Literal:

//? Syntax:
let obj_ref_var={
    Key1: value1,
    key2: value2,
    keyN: valueN,
};

let employee = {
    eName: "Om",
    eAge: 22,
    eAlive: "no more",

};

console.log(employee);


//! How to access the object properties (Key):

cosnole.log(employee.eName);
cosnole.log(employee.eAlive);
cosnole.log(employee.status); // undefined


//! How to add the extra properties in existing object:
//? Syntax: obj_ref_newKeyName = value;

employee.eISCommitted = true;

delete employee.eISCommitted;
cosnole.log(employee);