console.log("ES6 Concepts");

//! ES6 Concepts:
//* Es Stand for ECMA Scripts which was released in the year 2015.
//* ES6 was major update in JavaScript History.
//* They have introducted some important feature such as:

//? 1. let and const variable 
//? 2. Arrow Function (Fat-Arrow Function)
//? 3. Symbol() -> Prmitive Datatype 
//? 4. Function with default Parameter
//? 5. Destructuring
//? 6. Spread Operator & Rest Parameter
//? 7. Modules
//? 8. Promise
//? 9. asnyc and await
//? 10. class
//? 11. String Template Literal (Backticks) (` `)

//! 4. Function with default Parameter:
//* The parameter which is passed inside the function definiton with default value is called a function with default parameter.

function greet(name = "Guest") {
    console.log(`Hello ${name}, How are you?`);
}

greet("Dhruv"); // Hello Dhruv, How are you?
greet(); // Hello Guest, How are you?


//! 5. Destructuring:
//* Destructuring means divide or breaking down big-structure into small values (variables) for easy use or access.
//* We can perform destructuring for Array and Object.

//? 1. Array Destructuring:

let mixedArray = [
    10,
    "John",
    true, 
    null,
    {name:'unknown',age:'immortal'}, 
    function () {
    console.log("This is function inside the array");
},
    [30,40,50],
];

//! Traditional way to access the array element:
console.log(mixedArray[0]);

//! Destructing of an array:
let [a, b, c,d,e,f,g]=mixedArray;

console.log(a);
console.log(b);
console.log(g);

//! Again we are destructuring:
let[x,y,z] = g;
console.log(x);

//console.log(f);
f();

console.log(e); //{name:'unknown',age:'immortal'}
console.log(e.name);
console.log(e.age);

//? 2. Object Destructuring :
//~ Important Note: When you are destructuring the object, you must use the same keyName of an object inside the destructuring.
let employee ={ 
    eName:"Radhe Pipaliya",
    eAge:23,
    ePackage:"3LPA",
    eGender:"Male",
    eSkills:["SQL","Web Tech","Python","Soft Skills"],
    eAddress:{
        eCity:"Ahmedabad",
        ePincode: 380009,
        eState:"Gujarat",
        eCountry:"India",
    },
    eCompanyDetails:{
        eDesg:"Data Migration Engineer",
        eShift:"2 to 11",
    },
    eManagerDetails:{
        eName:"Mr .X",
    },
};

//!  Destructuring the employee object

let{
    eName,
    eAge,
    ePackage,
    eGender,
    eSkills,
    eAddress,
    eCompanyDetails,
    eManagerDetails,
} = employee;


console.log(eName);
console.log(ePackage);
console.log(eSkills);
let [p,q,r,s]= eSkills;
console.log(r);
console.log(eCompanyDetails);

//! Again we are destructuring :
let { eDesg, eShift}= eCompanyDetails;
console.log(eDesg);
console.log(eShift);

//! Aliasing the key which is already present in the object:
let {eName: eManagerName}= eManagerDetails;
console.log(eManagerName);