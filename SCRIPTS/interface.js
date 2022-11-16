let winnerMessage = document.querySelector(".winnerMessage");
let winnerMessageTxt = document.querySelector(".winnerMessageTxt");



document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll(".square")

  squares.forEach((square) => {
    square.addEventListener('click', handleClick)
  })

  let scoreX = document.querySelector(".scoreX");
  let scoreO = document.querySelector(".scoreO");

  scoreO.innerHTML = `<p>${scoreBoard.player1}</p>`;
  scoreX.innerHTML = `<p>${scoreBoard.player2}</p>`;

  let winnerMessage = document.querySelector(".winnerMessage");
  let winnerMessageTxt = document.querySelector(".winnerMessageTxt");

})

let choseX = document.querySelector(".choseX");
let choseO = document.querySelector(".choseO");

console.log(choseX);
console.log(choseO);



function choosePlayer(choosePlayer) {



}


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

function checkDraw(element) {
  return element != '';
}

function restart() {
  location.reload();
}

function updateScore(playerTime) {
  let scoreX = document.querySelector(".scoreX");
  let scoreO = document.querySelector(".scoreO");

  if (playerTime == 0) {
    scoreO.innerHTML = `<p>${scoreBoard.player1}</p>`;
  } else {
    scoreX.innerHTML = `<p>${scoreBoard.player2}</p>`;
  }

}