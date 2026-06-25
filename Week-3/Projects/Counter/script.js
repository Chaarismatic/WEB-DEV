const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
const h3 = document.querySelector("h3")

let count = 0
inc.addEventListener('click',()=>{
  count++
  h3.textContent = `Counter : ${count}`
})

dec.addEventListener('click',()=>{
  count--
  h3.textContent = `Counter : ${count}`
})