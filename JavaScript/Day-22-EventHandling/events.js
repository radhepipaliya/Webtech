console.log("Events in JS");

//! Event:
//* Event is an object in JS.
//* The change in a stage of an object is called as Event.
//* Whenever event will trigger, one function will be invoked or called.

// function notify(){
//     alert("Button is clicked!");
// }

//! what is addEventListerner()?
//* The addEventListener() method is used to add or attaches the event in javascript.

//? Syntax: addEventListner(event_type, callback_function)

let btn = document.getElementById("btn-1");
console.log(btn);

//! 1st Way:
btn.addEventListener("click", function(){
    alert("Hello how are you?");
});

//! 2nd way:
// btn.addEventListener("click",() =>{
//     alert("Hello How are you?");
// })

//! 3rd way:
function greet(){
    alert("Hello How are you?");
}

btn.addEventListener("click", greet);

//! what is e?
//* e stands for event in callback function.
//* e consists of properties of an event triggered by the user.

let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // console.log(e);
        console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);
    } );
});


//! 2. Form Events:
//? Hwo to access the value from an input field?

let loginForm = document.getElementById("login-form");
console.log(loginForm);

//! e.preventDefault():
//* The e.preventDefault() method prevents the default behaviour of an html element such as reloading page at time of form submission, scrolling page, at the time navigating page reloading, etc.

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(e);
    let username = document.getElementById("username");
    console.log(username.value);
});