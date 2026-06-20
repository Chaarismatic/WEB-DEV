// let obj = {
//   name:"Zoro",
//   age:21,
//   NetWorth:"200K $",
//   greet: function(){
//     console.log("USER IS HERE : ",this.name)
//   }
// }
// console.log(obj)

// console.log(obj.NetWorth)
// console.log(obj["name"])
// let userAge = "age"
// // console.log(obj[userAge])

// obj.userID = "abc@gmail.com"
// obj.age = 22
// delete obj[userAge]
// console.log(obj)

// console.log(obj.greet)
// obj.greet()

// for(let keys in obj){
//   console.log(keys,obj[keys])
// }
// const arr = Object.keys(obj)
// for(let elm of arr){
//   console.log(elm)
// }

// for(let keys of Object.keys(obj)){
//   console.log(keys)
// }


// for(let [keys,values] of Object.entries(obj)){
//   console.log(keys,values)
// }


// const obj2 = {...obj}
// console.log(obj==obj2)

// const obj2 = {
//   name:"Gojo",
//   age:24,
//   greet() {console.log("Hello There")}
// }
// obj2.greet()

// const originalUser = {
//   name: "Alice",
//   age: 30,
//   joined: new Date("2023-01-15"), // A Date object
//   address: { // A nested object
//     city: "New York"
//   },
//   roles: ["editor", "viewer"] // An array
// };

// let obj = {...originalUser}
// obj.address.city = "Haldwani"
// obj.roles[1] = "chapri"

// console.log(originalUser)

// const originalUser = {
//   name: "Alice",
//   age: 30,
//   joined: new Date("2023-01-15"), // A Date object
//   address: { // A nested object
//     city: "New York"
//   },
//   roles: ["editor", "viewer"] // An array
// };

// let obj = structuredClone(originalUser)
// obj.address.city = "Haldwani"
// obj.roles[1] = "chapri"
// console.log(originalUser)
// console.log(obj)


// You would first need to install lodash: npm install lodash
// import _ from 'lodash';

// const original = {
//   name: "Alice",
//   sayHi: function() { console.log("Hi"); }
// };

// const lodashClone = _.cloneDeep(original);

// // It even clones the function!
// lodashClone.sayHi(); // "Hi"
// console.log(original.sayHi === lodashClone.sayHi); // false (it's a new function reference)



// const user = {
//   id: 123,
//   name: "Alice",
//   email: "alice@example.com",
//   profile: {
//     isAdmin: true
//   }
// };

// // --- Basic Destructuring ---
// // Old way:
// // const name = user.name;
// // const age = user.age;

// // New way with destructuring:
// const { name, age } = user; // Create variables 'name' and 'age' from user object.
// console.log(name); // "Alice"
// console.log(age);  // undefined (because 'age' doesn't exist on the object)


// // --- Renaming Variables ---
// // What if you already have a variable named 'name'? You can rename it.
// const { name: userName, email } = user;
// console.log(userName); // "Alice"

// // --- Setting Default Values ---
// // What if a property might not exist? You can provide a default.
// const { name: personName, role = "User" } = user;
// console.log(personName); // "Alice"
// console.log(role);       // "User" (because 'role' didn't exist on the object)

// // --- Nested Destructuring ---
// // You can even pull from nested objects.
// const { profile: { isAdmin } } = user;
// console.log(isAdmin); // true


const user = {
  name: "Alice"
};

// Let's create a "secret" ID for this user.
const secretId = Symbol("userId");

// Add the property using the symbol as the key
user[secretId] = "xyz-987-abc";

console.log(user); // { name: "Alice", [Symbol(userId)]: "xyz-987-abc" }

// To access it, you must use the original symbol variable
console.log(user[secretId]); // "xyz-987-abc"

// You CANNOT access it with a string
console.log(user["secretId"]); // undefined