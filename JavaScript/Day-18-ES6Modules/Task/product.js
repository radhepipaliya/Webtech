const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "LogiTech",
        inStock: true,
        rating: 4.5
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        price: 59.99,
        category: "Electronics",
        brand: "Sony",
        inStock: true,
        rating: 4.7
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 89.99,
        category: "Footwear",
        brand: "Nike",
        inStock: false,
        rating: 4.6
    },
    {
        id:4 ,
        name: "Coffee Maker",
        price: 120.0,
        category: "Home Appliances",
        brand: "Philips",
        inStock: true,
        rating: 4.3
    },
    {
        id: 5,
        name: "Notebook",
        price: 3.5,
        category: "Stationery",
        brand: "Classmate",
        inStock: true,
        rating: 4.2
    },
    {
        id: 6,
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung",
        inStock: true,
        rating: 4.8
    },
    {
        id: 6,
        name: "Backpack",
        price: 45.0,
        category: "Accessories",
        brand: "American Tourister",
        inStock: false,
        rating: 4.4
    },
    {
        id: 7,
        name: "Water Bottle",
        price: 15.99,
        category: "Lifestyle",
        brand: "Milton",
        inStock: true,
        rating: 4.1
    },
    {
        id: 8,
        name: "Office Chair",
        price: 180.0,
        category: "Furniture",
        brand: "IKEA",
        inStock: true,
        rating: 4.6
    },
    {
        id: 9,
        name: "Wrist Watch",
        price: 150.0,
        category: "Accessories",
        brand: "Fossil",
        inStock: true,
        rating: 4.5
    }
];



//! Creating the function which will return all the function
function getAllProducts() {
    return products;
}

//! Function which will return the productInfo
export function getProductById(id) {
    let productInfo =  products.find((product, index) =>{
        return product.id === id;
    })

    if(productInfo === undefined){
        console.log("")
    }

    return productInfo;
}

export default getAllProducts;