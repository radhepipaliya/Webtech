console.log("");

//! Example of Callback Function:
//? 1st way to create a callback function:
//~ We will create a callback another function and pass it as reference to the main funtion.

function sir(studentName, callback) {
    console.log("sir, is checking papers!");

    setTimeout(() => {
        console.log("Paper Checked");
        console.log(`Result for ${studentName}:`);
        callback();
    }, 3000);
}

//~ Callback function
function result() {
    console.log("Pass");
}

// sir("john", result);

//? 2nd Way: Directly mention the callback function inside the main fucntion.

//! Here orderFood() is Higher Order function
function orderFood(callback) {
    console.log("Food is ordered!");
    callback();
}

orderFood(() => {
    console.log("Madan is your delivery boy!");
});

orderFood(
    function () {
        console.log("Suresh is your delivery boy!");
    }
);

//! 7. HOF:
//* A HOF stands for Higher-order function.
//* A fucntion which will accept another function as a argument or it will return function is called as Higher-order Function.

//! Example of HOF:
function calculate(num1,num2,operation){
    return operation(num1,num2);
}

function add(num1,num2){
    return num1+num2;
}

function sub(num1, num2){
    return num2 -num1;
}

// console.log(calculate(10,20,add));
// console.log(calculate(10,20,sub));

//! 8. Nested Fucntion:
//* THe function is present inside another function is known as nested function.

function outer(){
    console.log("This is outer fun!");

    function inner(){
        console.log("THis is inner fun!");
    }

    inner();
}

outer();

//! 9. Clouser Function:
//* IF you are trying to access the outer function variable or data inside the inner function that it will create the closure by the outer function.

//? Here, Closure means remembering the value of outer function inside the inner function.

//! 10. Generator Function:

//* THe Generator function is a special type of function which will pause and resume it's Exectuiton.

//? yield -> pause the excution and store the value.
//? .next() -> resume the excution and again paused it.

//? Syntax: function* identifiers(){}

function* netflixSeries(){
    yield "Episode-1";
    yield "Episode-2";
    yield "Episode-3";
    yield "Episode-4";
}

let episode = netflixSeries();
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());
