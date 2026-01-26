console.log("Date Object");

//! Date Object:
//* Date Object is a inbuilt object in JS.
//* Date is used to handle and manipulate the data in JS.

//? Syntax:
let todayDate = new Date();
console.log(todayDate);

//! Date Methods: (To Access the Date)
//? 1. getFullyear():
console.log(todayDate.getFullYear); // 2026

//? 2. getDay():
console.log(todayDate.getDay()); // 6 -> Saturday

//? 3. getDate():
console.log(todayDate.getDate()); // 24

//? 4. getHours():
console.log(todayDate.getHours()); // 15

//? 5.getMinutes();
console.log(todayDate.getMinutes()); // 0

//? 6.getSecond():
console.log(todayDate.getSeconds()); // update for every seconds

//? 7. getMilliseconds():
console.log(todayDate.getMilliseconds()); // update for every milliseconds

//! formatting the Date

let currentDate = new Date();
console.log(currentDate);

let Date = currentDate.getDate();
let month = String(currentDate.getMonth+1).padStart(2, "0");

//console.log(typeof month);

let year = currentDate.getFullYear();

let formattedDate = `${date}-${month}-${year}`;

console.log(formattedDate);


//! Date set Methods:

let myDate = new Date();

//? setting the year
myDate.setFullYear("2027");

myDate.setDate("9");
myDate.setMonth("3");

console.log(myDate);

//! shortcut:

let demoDate = new Date("2027","5","3","12","32","24","789");
console.log(demoDate);