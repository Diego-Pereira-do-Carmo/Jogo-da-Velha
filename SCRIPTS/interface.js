let winnerMessage = document.querySelector(".winnerMessage");
let winnerMessageTxt = document.querySelector(".winnerMessageTxt");
let head = document.querySelector(".head");
let main = document.querySelector(".main");
let choses = document.querySelectorAll(".btnOption");
let option = document.querySelector(".option");

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
      winnerMessageTxt.innerHTML = `<p class="winnerMessageTxt">O Jogador &#x2B55; Foi o Vencedor</p>`;
    } else {
      winnerMessage.style.display = "flex";
      winnerMessageTxt.innerHTML = `<p class="winnerMessageTxt">O Jogador &#x274C; Foi o Vencedor</p>`;
    }
  };

  draw();
  ShowPlayerTime();
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];

  let soundClick = new Audio();
  soundClick.src = "./sound/click.mp3"
  soundClick.play();

  square.innerHTML = `<div class='${symbol}'></div>`
}

function draw() {
  let drawStates = board.every(checkDraw);
  let soundDraw = new Audio();
  soundDraw.src = "./sound/draw.wav";

  if (drawStates == true) {
    winnerMessage.style.display = "flex";
    winnerMessageTxt.innerHTML = `<p class="winnnerMessageTxt">Deu Empate!</p>`;
    setTimeout(() => {
      soundDraw.play();
    }, 300);
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
  let soundWinner = new Audio();
  soundWinner.src = "./sound/winner.wav";

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
  setTimeout(() => {
    soundWinner.play();
  }, 100);
}

function resetScoreboard() {
  localStorage.clear();
  location.reload();
}


function ShowPlayerTime() {

  let scoreX = document.querySelector(".scoreX");
  let scoreO = document.querySelector(".scoreO");

  if (playerTime == 0) {
    scoreO.style.backgroundColor = 'yellow';
    scoreX.style.backgroundColor = 'rgb(190, 190, 190)';

  } else {
    scoreX.style.backgroundColor = 'yellow';
    scoreO.style.backgroundColor = 'rgb(190, 190, 190)';
  }
}

function chosePlayer(event) {
  let choose = event.target;

  if (choose.id == "choseO") {
    playerTime = 0;
  } else {
    playerTime = 1;
  }
  console.log(playerTime);
  option.style.display = "none";
  main.style.display = "block";
  ShowPlayerTime();
}