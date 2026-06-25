const h1 = document.querySelector("h1");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let sec = 0;
let min = 0;
let timer;

start.addEventListener("click", () => {
  if (timer) return; 

  timer = setInterval(() => {
    sec++;

    if (sec === 60) {
      sec = 0;
      min++;
    }

    h1.textContent = `${min} : ${sec}`;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  min = 0;
  sec = 0;
  h1.textContent = `${min} : ${sec}`;
});