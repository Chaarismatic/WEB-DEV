const lc = document.getElementById("letterCount")
const wc = document.getElementById("wordCount")

const msg = document.getElementById("msg")

msg.addEventListener('input',(e)=>{
  const cmt = msg.value
  const total = cmt.trim()
  lc.textContent = `Letter Count : ${total.length}`
  const arr = total.split(" ")
  if(total==="")wc.textContent = `Word Count : 0`
  else wc.textContent = `Word Count : ${arr.length}`
})