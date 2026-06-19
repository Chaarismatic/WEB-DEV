// let arr = [10,20,40,"Brijesh"]
// arr.push(40)
// arr.push(60)
// arr.pop()
// arr.shift()
// arr.unshift(1)
// console.log(arr)


// let arr = [10,20,"Brijesh","Hello"]
// for(let x of arr) console.log(x)

// let arr = [10,20,"Brijesh","Hello","new","guy","not","so","good"]
// let num = arr.slice(2,4)
// let num2 = arr.splice(2,4,30,40)
// console.log(num)
// console.log(num2)
// console.log(arr)


// let arr = [10,20,"Brijesh","Hello"]
// let arr2 = [11,21]
// let arr3 = arr.concat(arr2)
// console.log(arr3)



// let arr = [10,20,"Brijesh","Hello"]
// let arr1 = [10,20,"Brijesh","Hello"]
// let arr2 = [10,20,"Brijesh","Hello"]
// let arr3 = [...arr, ...arr1 ,...arr2]
// console.log(arr3)


// let arr = [10,20,"Brijesh","Hello"]
// let [start,next] = arr
// console.log(start)
// console.log(next)


// let arr = [10,20,"Brijesh","Hello"]
// let [start,next,...other] = arr
// console.log(start)
// console.log(next)
// console.log(other)



let arr = [10,20,"Brijesh","Hello"]
let arr1 = [11,21,"Brijesh2","Hello2"]
console.log(arr.join("_"))
let arr2 = [13,45,67,"dijk"]
let arr3 = arr.concat(arr1,arr2)
console.log(arr3)

// let arr = [10,20,"Brijesh","Hello"]
// console.log(arr.includes("Brijesh"))


// let arr = [10,20,"Brijesh","Hello",10]
// console.log(arr.lastIndexOf(10))


// let arr = [10,20,"Brijesh","Hello",70,30,40]
// arr.sort()
// console.log(arr)