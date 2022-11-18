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
    if (playerTime == 0) {
      winnerMessage.style.display = "flex";
      winnerMessageTxt.innerHTML = `<p class="winnnerMessageTxt">O Jogador &#x2B55; Foi o Vencedor</p>`;
    } else {
      winnerMessage.style.display = "flex";
      winnerMessageTxt.innerHTML = `<p class="winnnerMessageTxt">O Jogador &#x274C; Foi o Vencedor</p>`;
    }
  };

  updateSquare(position);
  draw();
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  // let soundHit = new Audio();
  // soundHit.src = "./sound/hit.wav"

  // soundHit.play();
  square.innerHTML = `<div class='${symbol}'></div>`
}

function draw() {
  let drawStates = board.every(checkDraw);

  if (drawStates == true) {
    winnerMessage.style.display = "flex";
    winnerMessageTxt.innerHTML = `<p class="winnnerMessageTxt">Deu Empate!</p>`;
  }
}

function checkDraw(square) {
  return square != '';
}

function restart() {
  location.reload();
}

function updateScore() {
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

      let squares = document.querySelectorAll(".square");

      squares[pos1].style.backgroundColor = 'yellow';
      squares[pos2].style.backgroundColor = 'yellow';
      squares[pos3].style.backgroundColor = 'yellow';
    }
  }
}

function resetScoreboard() {
  localStorage.clear();
  location.reload();
}