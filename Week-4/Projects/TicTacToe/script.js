const board = document.getElementById("board")
const arr = ["","","","","","","","",""]
let turn = "X"
const h2 = document.querySelector("h2")
let totalInsert = 0
function checkwinner(turn){
  if(arr[0]==turn && arr[1]==turn && arr[2]==turn) return true
  else if(arr[3]==turn && arr[4]==turn && arr[5]==turn) return true
  else if(arr[6]==turn && arr[7]==turn && arr[8]==turn) return true
  else if(arr[0]==turn && arr[4]==turn && arr[8]==turn) return true
  else if(arr[2]==turn && arr[4]==turn && arr[6]==turn) return true
  else if(arr[0]==turn && arr[3]==turn && arr[6]==turn) return true
  else if(arr[1]==turn && arr[4]==turn && arr[7]==turn) return true
  else if(arr[2]==turn && arr[5]==turn && arr[8]==turn) return true
  else return false
}
board.addEventListener('click',(e)=>{
  if(arr[e.target.id]!="" || checkwinner(turn) || totalInsert==9 ) return
  const box = e.target
  arr[box.id] = turn
  box.textContent = turn
  totalInsert++
  if(checkwinner(turn)) {
    h2.textContent=`Player ${turn} won`
    return
  }
  if(totalInsert==9){
    h2.textContent = `Match tied`
    return
  }
  if(turn == "X") turn = "O"
  else turn = "X"
  h2.textContent = `Player ${turn}'s turn`
})
const reset = document.getElementById("reset")
reset.addEventListener('click',()=>{
  totalInsert=0
  turn = 'X'
  h2.textContent = `Player X's turn`
  for(let i = 0;i<9;i++){
    document.getElementById(i).textContent = ""
    arr[i] = ""
  }
})