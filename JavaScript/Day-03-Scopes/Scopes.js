//! What is Scopes in JS?
//* The scopes is a accessiblity or visiblity of the variable.

//? Types of Scopes:
//~ 1. Global Scopes
//~ 2. Block Scope 
//~ 3. Loacl or Function Scope
//~ 4. Script Scope
//~ 5. Module scope

//! 1. Global Scopes
    //* We can access the variable anywhere in the program.




// Degugger is a keyword in java Script.
// Degubber automatically enable the JavaSCript code.
// degugger; 


var num =10;
console.log("num:",num);


//! 2. Block Scope
//* The Variable whic is decalred with let and const has always block scope.
//* That means we can access only inside the block itself.

// BLock
{
    var nums3 =50;
    let num1 = 20;
    const nums2 =30;
    console.log = 30;
    console.log("nums:",nums1);
    console.log("nums2:", nums2);
    console.log("nums3",nums3);
}
//! 3. Loacl or Function Scope
//* The variable which is declared with var, let and const are always local to the function.

function localFunc(){
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("a:",a);
    console.log("b:", b);
    console.log("c:",c);
}

localFunc();
//!4. Script Scope

let x=100;
let y =200;
console.log("x",x);
console.log("y",y);

//!5. Module scope

//* Sir will explain when the Module Topic will run.
//* For future refernce go to Module Folder..