console.log("DataType")

//! What are Datatypes?
//* The datatypes means type or kind of data we can store inside the variable.
//* There are mainly two types of DataTypes
//? 1. Primitive DT
//? 2. Non Primitive DT

//! 1. Primitive DT:
//* Primitive datatypes are the inbuilt datatypes which is provided by the language itself.
//* It can capable to store only Single Value or data.

//? There are 7 types of primitie dt in JS:
//~ 1. number
//~ 2. string
//~ 3. boolean
//~ 4. null 
//~ 5. undefined
//~ 6. bigint
//~ 7. symbol()

//! 1. number:
//* the number includes everything like integers, decimal values, floating values, etc.

let num = 10;
console.log(num);

//! typeof operator:
//* The typeof operator is used to check the which type of data stored inside the given variable.
//? Syntax: typeof(variable) or typeof variable
console.log(typeof(num))
console.log(typeof num)

//! 2. String:
//* The String the a colletion of Characters:
//? Characters: a-z, A-Z, 0-9, Special CHaracters(!,$,%,^,_), whitespace character.

//* There are 3 ways to creat the string in JS:
//? 1. BY Using qotes(" ")
let str ="Hello World";
console.log(str);
console.log(typeof str);

//? 2. BY Using qotes(' ')
let str2 ="Hello World";
console.log(str2);
console.log(typeof str2);

//? 3. By using String Templete Literal (backTricks) ('')
let hero ="Allu Arjun";
console.log(hero, `is also known as Rebel Star!`);

//! 2nd Advantage:
let multiLineString = `This is the first line
This is the second
THis is the third line`;
console.log(multiLineString);

//! 3. boolean:
//* Boolean will Represent the true or false
//? true->1->yes
//? false->0->no

let bool = true;
console.log(bool);
console.log(typeof bool);

//! 4. null:
//* THe null means nothing or empty but not equals to zero.

let nullValue =null;
console.log(nullValue);
console.log(typeof null);

//! 5. undefined:
//* THe variable has been declared but not yet assigned the value to the varaible.

let underfinedVAr;
console.log(underfinedVAr); 

//! 6. bigint:
//* The value is which is greater than 2^53-1 is cosnidered as a big value.(Beyond safe limit)

let bigValue = Symbol("hello");
console.log(bigValue);

//! 7. SYmbol():
//* The symbol() is a primitive value which is used to create the unique value.

//? Syntax: Symbol(value);

let value1 = Symbol("Hello");
let value2 = Symbol("Hello");

console.log(value1 == value2);
console.log(value1);
console.log(value1.description);
console.log(typeof(value1.description));