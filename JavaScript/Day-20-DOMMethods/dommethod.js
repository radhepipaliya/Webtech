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
//* The document.getElementsByTagName() method is used is used to access the multiple HTML elements by their specific tag name.
//& Return type: HTMLCollection
let allparas = document.getElementsByTagName("P");
console.log(allParas);


//? 4. document.getElementsByName():
//* The document.getElementByName() Method is used to access the HTML elements by their specific name value.
//? Syntax: document.getElementByName("name-value");
//& Return Type: NodeList []

//! What is NodeList?
//* THe NodeList is a collection different types of node such as text node, element node, attribute node, comment node, etc.
//~ By default NodeList supports the forEach() method but doesn't support the map() method.

let genders = document.getElementsByName("gender");
console.log(genders);
console.log(Array.isArray(genders)); //false

genders.forEach((gender,index)=> {
    if(index === 0){
        gender.style.accentColor = "red";
        gender.checked = true;
    }
});

//? 5. document.querySelector():
//* The document.querySelector() method is used to access the first matching elemnt by their specific css selector.
//? Syntax: document.querySelector("css-selector")
//& Return Type: First Matching Css - Element

let classPara = document.querySelector(".para");
console.log(classPara);

//? 6. document.querySelectorAll():
//* The document.querySelectorAll() method is used to access the all matching element by their specific css selector.
//? Syntax:document.querySelectorAll("Css-Selector")
//& Return Type: NodeList[]

let allPArasEle = document.querySelectorAll(".para");
console.log(allParasEle);

//~ Final Summary:
//? 1. HTML Collection -> getElementsByClassName() & getElementsByTagName()
//? 2. Node List -> getElementByName() & querySelectorAll()