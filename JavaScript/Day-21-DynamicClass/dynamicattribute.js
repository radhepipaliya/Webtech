console.log("Adding Dynamic Attributes");

//! Adding Dynamic Attributes:

//? 1. By using Direct Way:
// .className
// .id

let allParas=document.querySelectorAll("p");
console.log(allParas);

allParas.forEach((pEle, index) => {
    pEle.className = "para";
    if(index === 1){
        pEle.id = "secondPara";
    }
});

//? By using inbuilt methods:
// getAttribute("attribute-name");
// getAttribute("attribute-name","attribute-value");

let image = document.querySelector("img");
console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));

// setAttribute():
let link = document.querySelector("a");
// link.setAttribute("href","https://www.google.com/");
// link.setAttribute("target", "_blank");

link.herf = "https://www.google.com/";
link.target = "_blank";