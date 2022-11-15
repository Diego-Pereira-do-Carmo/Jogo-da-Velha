let winnerMessage = document.querySelector(".winnerMessage");
let winnerMessageTxt = document.querySelector(".winnerMessageTxt");


document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener('click', handleClick)
  })
})


function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    winnerMessage.style.display = "flex";
    winnerMessageTxt.innerHTML = `<p class="winnnerMessageTxt">O Jogador ${(playerTime + 1)} Foi o Vencedor</p>`;
  };

  updateSquare(position);
  draw();
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`
}

function draw() {
  let drawStates = board.every(checkDraw);

  if (drawStates == true) {
    winnerMessage.style.display = "flex";
    winnerMessageTxt.innerHTML = `<p class="winnnerMessageTxt">Deu Empate!</p>`;
  }
}

function checkDraw(element){
  return element != '';
}

function restart(){
  location.reload();
}