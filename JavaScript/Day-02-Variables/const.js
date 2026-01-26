console.log("const variable in JS");

//! 3. const:
//* Here, const stands for constant value.
//* The const variable is introduced in ES6 concepts which was released in 2015.
//* The const varibale has a default scope is block.

//? 1. Declaration (D): Not-Possible❌
// const num;
// Error: 'const' declarations must be initialized.

//? 2. Initialization (I): Not-Possible❌

//? 3. D + I: Possible✅
const num = 10;
console.log(num);

//? 4. R-D: Not-Possible❌
// const num;
// Error: 'const' declarations must be initialized.
// Cannot redeclare block-scoped variable 'num'.

//? 5. R-I: Possible✅
num = 20;
console.log(num); // Assignment to constant variable.
