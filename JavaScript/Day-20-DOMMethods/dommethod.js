//! DOM Direct Access Properties:
console.log("DOM Methods")

//? 1. document.images
console.log(document.images);
//? 2. document.forms
console.log(document.forms);
//? 3. document.links
console.log(document.links);
//? 4. document.stylesheets
console.log(document.styleSheets);
//? 5. document.scripts
console.log(document.scripts);

//! DOM Access Methods:
//? 1. document.getElementById():
//* The document.getElementById() methods is used to access the HTML element by their specific id.
//~ Syntax: document.getElementsById("id");
//& Return Type: HTML Element or null
let heading = document.getElementById("head");
console.log(heading);

//! style attribute:
heading.style.color="red";
heading.style.backgroundColor="Yellow";

//? 2. document.getElementsByClassName():
//* The document.getElementsByClassName() method is used to access the multiple HTML elements by their specific class Name.
//? Syntax: document.getElementsByClassName("class-name"):
//& Return type: HTMLCollection

//! HTMLCollection:
//* The collection or group of HTML elements only is called as HTMl Collection.
//* It will look like an array but it is not an actual or true array.

let paras = document.getElementsByClassName("Paras");
console.log(paras); // HTML Collection(3) [p.para, p.para, p.para]

//paras.style.border = "2px solid blue";
console.log(Array.isArray(paras)); // false

//! Converting the HTMLCollection into an Array:
//! 1. Array.form():
let convertHTMLCollection = Array.form(paras);
console.log(convertHTMLCollection);
console.log(Array.isArray(convertHTMLCollection)); // true

convertHTMLCollection.forEach((paras, index) => {
    if(index == 1){
        paras.style.border = "2px solid blue";
    }
    paras.style.border =" 2px solid blue";
});

//! 2. By using Spread Operation: ...varName
let htmlToArrayBySpread = [...paras];
console.log(htmlToArrayBySpread);

htmlToArrayBySpread.forEach((paras) =>{
    paras.style.color ="teal";
});
//? 3. document.getElementsByTagName():

//? 4. document.getElementsByName():