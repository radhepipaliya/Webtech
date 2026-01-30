import getAllProducts from "./product.js";
import { getProductById } from "./product.js";

console.log(getAllProducts());

//! Accessing the product by their 
let product =getProductById(6);
console.log(product);