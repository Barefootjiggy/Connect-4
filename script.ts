const buttons = document.getElementsByClassName("button") as HTMLCollectionOf<HTMLButtonElement>;
const reset = document.getElementById("reset-button") as HTMLButtonElement;
const playerType = document.getElementById("player-type") as HTMLDivElement;
const gameConclusion = document.getElementById("game-conclusion") as HTMLDivElement;
const winner = document.getElementById("winner") as HTMLDivElement;
const colorSchemeSelect = document.getElementById('color-scheme-select') as HTMLSelectElement;

const backgroundColors: { [key: string]: string } = {
  'classic': '#ffffff', 'after-hours': '#000000', 'pac-man': '#030303', 'ice-pop': '#ffffff', 'vice-city': '#040000', 'star-wars': '#000000', 'barbie': '#f086b9', 'ferrari': '#EF1A2D', 'mercedes': '#000000', 'red-bull': '#352e3d', 'mocha': '#594235'
};

colorSchemeSelect.addEventListener('change', function() {
  const selectedColorScheme = colorSchemeSelect.value;
  document.body.classList.remove(...Object.keys(backgroundColors));
  document.body.classList.add(selectedColorScheme);
  document.body.style.backgroundColor = backgroundColors[selectedColorScheme];
});

let playerNumber = 1;
let filledGrid: number[][] = [];
let filledCells = 0;

for (let i = 0; i < 6; i++) {
  let arr = Array(7).fill(-1);
  filledGrid.push(arr);
}

reset.addEventListener("click", resetBoard);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(this: HTMLButtonElement) {
    let buttonNo = this.classList[1];
    makeMove(this, buttonNo.slice(4));
  });
}

function resetBoard() {
  gameConclusion.classList.add("hide");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove("button-player-1");
    buttons[i].classList.remove("button-player-2");
  }

  playerNumber = 1;
  playerType.textContent = "Player - 1";
  filledCells = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      filledGrid[i][j] = -1;
    }
  }
}

function displayWinner(player: string) {
  winner.textContent = player;
  gameConclusion.classList.remove("hide");
}

function makeMove(button: HTMLButtonElement, buttonNo: string) {
  const index = parseInt(buttonNo);
  let row = index % 7 === 0 ? Math.floor(index / 7) - 1 : Math.floor(index / 7);
  let column = index % 7 === 0 ? 6 : (index % 7) - 1;

  if (playerNumber === 1) {
    button.classList.add("button-player-1");
    filledGrid[row][column] = 1;
    filledCells++;

    if (playerWon(row, column, 1)) {
      displayWinner("Player 1");
      resetBoard();
    }

    playerNumber = 2;
    playerType.textContent = "Player - 2";
  } else {
    button.classList.add("button-player-2");
    filledGrid[row][column] = 2;
    filledCells++;

    if (playerWon(row, column, 2)) {
      displayWinner("Player 2");
      resetBoard();
    }

    playerNumber = 1;
    playerType.textContent = "Player - 1";
  }

  if (filledCells === 42) {
    displayWinner("Connect 4");
    resetBoard();
  }
}

function playerWon(row: number, column: number, player: number): boolean {
  let count = 0;

  for (let i = 0; i < 7; i++) {
    if (filledGrid[row][i] === player) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }

  count = 0;

  for (let i = 0; i < 6; i++) {
    if (filledGrid[i][column] === player) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }

  count = 0;

  if (row >= column) {
    let i = row - column;
    let j = 0;

    for (; i <= 5; i++, j++) {
      if (filledGrid[i][j] === player) {
        count++;
        if (count === 4) return true;
      } else {
        count = 0;
      }
    }
  } else {
    let i = 0;
    let j = column - row;

    for (; j <= 6; i++, j++) {
      if (filledGrid[i][j] === player) {
        count++;
        if (count === 4) return true;
      } else {
        count = 0;
      }
    }
  }

  count = 0;

  if (row + column <= 5) {
    let i = row + column;
    let j = 0;

    for (; i >= 0 && j <= row + column; i--, j++) {
      if (filledGrid[i][j] === player) {
        count++;
        if (count === 4) return true;
      } else {
        count = 0;
      }
    }
  } else {
    let i = 5;
    let j = row + column - 5;

    for (; j <= 6; j++, i--) {
      if (filledGrid[i][j] === player) {
        count++;
        if (count === 4) return true;
      } else {
        count = 0;
      }
    }
  }

  return false;
}
