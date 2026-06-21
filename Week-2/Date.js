// const now = new Date()
// console.log(now.toString())

// const time = Date.now()
// const date = new Date(time)
// console.log(date.toDateString())

// const date =  new Date(2026,5,21,9,14,56,44)
// console.log(date)

// const now = new Date(); // Let's pretend it's Sep 4, 2025, a Thursday

// console.log(now.getFullYear()); // 2025 (The full 4-digit year)
// console.log(now.getMonth());    // 8 (Remember, 0-indexed, so 8 is September)
// console.log(now.getDate());     // 4 (The day of the month, 1-31)
// console.log(now.getDay());      // 4 (The day of the week: 0=Sunday, 1=Monday, ..., 4=Thursday)
// console.log(now.getHours());    // e.g., 6 (The hour, 0-23)
// console.log(now.getMinutes());  // e.g., 20 (The minute, 0-59)

// function greet(name){
//   console.log(`Hello ${name}`)
// }

// greet("Leon")
// console.log(greet("Leon"))
// console.log(greet)

// function add(a,b){
//   return a+b
// }
// const ans = add(3,5)
// console.log(ans)

// const add = function(a,b){
//   return a+b
// }
// const ans = add(3,5)
// console.log(ans)

// const add = (a,b)=>a+b
// console.log(add(3,5))

// const square = a=>a*a
// console.log(square(5))

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

// greet("Alice"); // Hello, Alice!
// greet();        // Hello, Guest!

// const obj = (n,a) =>({name: n,age:a})
// console.log(obj("Alex",21))

// function add(num1,num2){return num1+num2}
// const mul = (num1,num2)=>num1*num2
// const div = (num1,num2)=>num1/num2
// const sub = (num1,num2)=>num1-num2

// const calculator = (num1,num2,callback)=>{
//   console.log(callback(num1,num2))
// }

// calculator(5,4,add)
// calculator(5,4,sub)
// calculator(5,4,mul)
// calculator(5,4,div)


Array.prototype.Sorter = function(callback=(a,b)=>a>b){
  for(let i = 0;i<this.length-1;i++){
    for(let j = 0;j<this.length-i-1;j++){
      if(callback(this[j],this[j+1])){
        let swap = this[j]
        this[j]=this[j+1]
        this[j+1]=swap
      }
    }
  }
  return this
}

const arr = [5,6,7,3,4,5,9,10]
// arr.Sorter()
arr.Sorter((a, b) => a < b)
console.log(arr)