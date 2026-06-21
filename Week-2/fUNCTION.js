// Array.prototype.forLoop = function(callback){
//   for(let index = 0;index<this.length;index++){
//     callback(this[index],index,this)
//   }
// }

const { set } = require("lodash");

// Array.prototype.CustomMap = function(callback){
//   let arr = []
//   for(let index = 0;index<this.length;index++){
//     arr.push(callback(this[index]))
//   }
//   return arr
// }


// Array.prototype.Myfilter = function(callback){
//   let arr = []
//   for(let i =  0;i<this.length;i++){
//     if(callback(this[i],i,this))  arr.push(this[i])
//   }
//   return arr
// }


// Array.prototype.Myreduce = function(callback,init){
//   let acc = init
//   for(let i = 0;i<this.length;i++){
//     acc=callback(acc,this[i],i,this)
//   }
//   return acc
// }

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
//   { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
//   { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
// ];

// products.forLoop((product,index,products)=>{console.log(product,index,products)})
// products.forLoop((product)=>console.log(product.name))
// products.forEach((product)=>console.log(product.name))
// products.forEach((product,index,products)=>{console.log(product,index,products)})

// const arr = products.map((product)=>product.name)
// const arr = products.CustomMap((product)=>product.id*5)
// console.log(arr)

// const arr = products.filter((product)=>product.inStock)
// console.log(arr)
// const arr = products.Myfilter((product)=>product.inStock)
// console.log(arr)

// const sum = products.reduce((acc,curr)=>{return acc+curr.price},0)
// console.log(sum)
// const sum = products.Myreduce((acc,curr)=>{return acc+curr.price},0)
// console.log(sum)

// const mySet = new Set();

// // Create a Set from an array (duplicates are ignored)
// const numbersArray = [1, 2, 3, 3, 4, 2, 5];
// const numbersSet = new Set(numbersArray);

// console.log(numbersSet); // Set(5) { 1, 2, 3, 4, 5 }



// const userRoles = new Set();

// // Add elements (chaining)
// userRoles.add("editor").add("viewer");
// console.log(userRoles); // Set(2) { "editor", "viewer" }

// // Add a duplicate - nothing happens
// userRoles.add("editor");
// console.log(userRoles); // Still Set(2) { "editor", "viewer" }

// // Check for an element
// console.log(userRoles.has("admin")); // false
// console.log(userRoles.has("editor")); // true

// // Delete an element
// userRoles.delete("viewer");
// console.log(userRoles.has("viewer")); // false

// // Clear the entire Set
// userRoles.clear();
// console.log(userRoles); // Set(0) {}

// const Myset = new Set()
// Myset.add(2)
// Myset.add(3)
// Myset.add(4)
// Myset.add(5)
// Myset.add(6)
// for(let i of Myset) console.log(i)


// const duplicateEmails = ["a@a.com", "b@b.com", "a@a.com"];

// // Convert to a Set to remove duplicates, then spread it back into a new array.
// const uniqueEmails = [...new Set(duplicateEmails)];

// console.log(uniqueEmails); // ["a@a.com", "b@b.com"]



// Create an empty Map
// const myMap = new Map();

// // Create a Map with initial values
// const userMap = new Map([
//   ["name", "Alice"],
//   [true, "is verified"],
//   [100, "points"]
// ]);


const metadata = new Map();
let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

// Set values using objects as keys
metadata.set(user1, { lastLogin: "2023-10-27" });
metadata.set(user2, { lastLogin: "2023-10-26" });

// Get a value using the exact same object reference
console.log(metadata.get(user1)); // { lastLogin: "2023-10-27" }

console.log(metadata.has(user2)); // true