const first = document.getElementById("first")
const second = document.getElementById("second")
const h3 = document.querySelector("h3")
const form = document.querySelector("form")
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const num1 = Number(first.value)
  const num2 = Number(second.value)
  const sum = num1+num2
  h3.textContent = `Result : ${sum}`
})