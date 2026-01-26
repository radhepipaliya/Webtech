console.log("Call,Apply,bind method in JS");

//! Why do we need call(), apply(), bind() method in Js?
//* Basically call(), apply() and bind() method is used to borrow the logic of external function.
//* It is used to manipluate the behaviour of 'this' keyword in js.


//! 1. Call():
//* The Call() method is used to borrow the logic of function and pass the dynamic object.
//* The Call() method is immediately invoked or call the function with respective object.
//? Syntax: methodName.call(thisArd)
//? ANd Here thisArg -> Replace with Actual object

let person1 = {
    username: "Sita",
};

let person2 = {
    username: "Gita",
}

function printName(){
    console.log(`Hello , ${this.username}!`);
}

printName.call(person1)
printName.call(person2)
printName(); // Hello, undefined

//! 2. apply() method:
//* The Apply() method is works same like as call() method, but it will accept the multiple arguments in the form of Array.

//? Syntax: methodName.apply(thisArg, [arg1, arg2, ......argsN])


let user1 = {
    username: "Chintu",
};

let user2 = {
    username: "Montu",
};

function printDetails(city, country){
    console.log(
        `User Details: ${this.username}! City ${city} Country ${country}`,
    );
}

// printDetails("Ahmedabad","India")
printDetails.apply(user1 , ["Ahmedabad", "India"]);
printDetails.apply(user2,["Junagadh" , " India"]);

//! 3. bind() method:

//* The bind() method is used to handle the 'this' Keyword behaviour but it will not not invoked or called immediately isntead of it will rerturn the function.
//? Syntax: methodName, bind(thisArgs);

let userInfo = printDetails.bind(user1);
console.log(userInfo);

userInfo("Ahm","In");