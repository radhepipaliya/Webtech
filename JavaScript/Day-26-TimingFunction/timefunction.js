console.log("Timing Funcitons");

//! Timing Functions:
//~ 1. setTimeout()
//~ 2. setInteravl()
//~ 3. clearTimeout()
//~ 4. clearInterval() 


//! 1. setTimeout()
//* The setTimeout method is used to deelay the task by certain period of time.
//* setTimeout() will execute only once.
//? Syntax: setTimeout(() => {}, timeout(ms))

console.log("Start");

let task = setTimeout(() => {
    alert("Paused");
},5000);

console.log("END");

document.getElementById("btn").addEventListener("click", () => {
    clearTimeout(task);
});

//! 2. setInterval():
//* The setInterval() is used to repeat a task after particular given of time.
//* setInterval() will execute again and again.

let count = 10;
let timer = setInterval(()=>{
    console.log("Count:", count--);
    if(count == 0){
        clearInterval(timer);
        console.log("Boom bahgo 💣💥💥💥💥💥💥💥💥💥💥💥💥");
    }
},1000);