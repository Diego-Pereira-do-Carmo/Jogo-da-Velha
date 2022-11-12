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

    setTimeout(() => {
      let playAgain = confirm("O jogo Acabou \nO Jogador " + (playerTime + 1) + " Foi o Vencedor \n\n\n Novo Jogo?");
      if (playAgain == true) {
        location.reload();
      } else {
        gameFinished();

      }
    }, 10);

  };

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`
}


function gameFinished() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = `<div class = gameFinished></div>`
    
  })
}

// square.innerHTML = `<div class='${symbols[playerTime]}'></div>`