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

function getWinnerSequence() {

  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != '') {

      let squares = document.querySelectorAll(".square")


      console.log("posição 1: " + pos1);
      console.log("posição 2: " + pos2);
      console.log("posição 3: " + pos3);
      
      squares[pos1].style.backgroundColor = 'yellow';
      squares[pos2].style.backgroundColor = 'yellow';
      squares[pos3].style.backgroundColor = 'yellow';
    }
  }
}