console.log("Promise in JS");

//! What is promise?
//* A promise is an object in JS.
//* A promsise is an eventual Completionor failure of an asynchronous operation and it result the output.

//! States of Promise:
//? 1. pending -> Initial State -> Neither fulfilled nor rejected
//? 2. resloved -> fulfilled -> Success -> data -> use the data
//? 3. rejected -> rejection -> error -> handle the error
//? 4. settled -> Either resovled or rejected

//! How to create the promise?
// let myPromise = new Promise((reslove,reject)=>{
//     let network = Math.floor(Math.random()* 100);
//     console.log(network);
//     if(network > 80){
//         //resolved("Network aa gaya hai niche aa jao");
//         reslove([10,20,30,40,50]);
//     }else{
//         reject("Thoda aur ghumao, thik se try karo network nhi aa rha hai😡");
//     }
// });

// console.log(myPromise);

//! How to handle promise:
//? We can handle the promise in two ways:
//? 1. By using .then() and .catch() function
//? 2. By using async and await keyword

// myPromise
//         .then((data)=>{
//             console.log(data);
//         })
//         .catch((error)=>{
//             console.log("Error while network fixing:",error);
//         });


//! What is callback hell?
//* Callback hell happens when you have multiple asynchronous operation that depend on each other and you nest callbacks inside callbacks inside callbacks.

function getUser(id,callback){
    setTimeout(()=>{
        let user = {id:id, name:"John",role:"user"};
        callback(user);
    },1000);
}

function addToCart(user,callback){
    setTimeout(()=>{
        let orders =["Order-1","order-2"];
        callback(orders);
    },2000);
}

function orderDetails(order,callback){
    setTimeout(() => {
        let orderInfo = {product:order,price:500};
        callback(orderInfo);
    },3000);
}

// let data = getUser(1,function(user){
//     console.log("User:",user);
//     addToCart(user,function(orders){
//         console.log("orders:", orders);
//         orderDetails(orders[0],function(){
//             console.log("orders[0]:", orders[0]);
//             console.log("Order Completed");
//         });
//     });
// });

//! Promise Chaining:
let fun = getUser(1);
console.log(fun);
fun
  .then((user) => {
    console.log(user);
    return addToCart(user);
  })
  .then((orders) => {
    console.log(orders);
    return orderDetails(orders[0]);
  })
  .then((orderInfo) => {
    console.log(orderInfo);
    console.log("order Completed");
  })
  .catch((error) => {
    console.log("Something went wrong:", error);
  });