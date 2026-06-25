const Container = document.getElementById("container")
const body = document.querySelector("body")
Container.addEventListener('click',(e)=>{
  body.bgColor = `${e.target.id}`;
})