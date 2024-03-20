// Connect 4 game logic
/*----------------------------- Event Listeners -----------------------------*/

  /*------------------------ Cached Element References ------------------------*/

  /*---------------------------- Variables (state) ----------------------------*/

   /*-------------------------------- Constants --------------------------------*/

     /*-------------------------------- Functions --------------------------------*/


// Initialize the game board

// constants for cells, player display, play again button, announcer

//variables for board, current player, active game

// Establish and check for winning conditions after each move

// Function to handle player variants of player moves

// Display the winner or a tie message when the game ends, also a display potentially for when player wins a set

// Display for game point

// Implement a reset function to start a new game

// Add event listeners to handle player interactions, things that the players will be allowed to click on and have an action from

// Update the game board and check for winning conditions accordingly

// Update the display to show whose turn it is and the game outcome

// Implement styling and animations to enhance the user experience

// Deployment

// DOM Variables

// DOM Variables

var buttons = document.getElementsByClassName("button");
var reset = document.getElementById("reset-button");
var playerType = document.getElementById("player-type");



// Game Flow Variables

var playerNumber = 1; // Initially player - 1 gets to start his/her turn

var filledGrid = []; // Player board

var filledCells = 0; // No. of cells that has been filled

for(var i = 0; i < 6; i++) {

  var arr = [-1 , -1 , -1 , -1 , -1 , -1 , -1]; // Board is initialised with -1
  filledGrid.push(arr);

}
// Event Listener for Buttons

reset.addEventListener("click" , function() {

  resetBoard();

});

for(var i = 0; i < buttons.length; i++) {

  // Handing the Event when button was clicked

  buttons[i].addEventListener("click" , function() {

    // Make move and disable the button to avoid further clicking it again

    var buttonNo = this.classList[1];
    makeMove(this , buttonNo.slice(4));

  });
}

// Function to display winner message
function displayWinner(player) {
  const gameConclusion = document.getElementById("game-conclusion");
  const winner = document.getElementById("winner");
  winner.textContent = player;
  winnerMessage.classList.remove("hide");
}

// Function to reset the board and hide the winner message
function resetBoard() {
  // Reset the board logic here
  const gameConclusion = document.getElementById("game-conclusion");
  winnerMessage.classList.add("hide");
}

// Function to Make Move on the passed button and disable it
function makeMove(button , buttonNo) {

  var row = buttonNo % 7 === 0 ? Math.floor(buttonNo / 7) - 1 : Math.floor(buttonNo / 7);
  var column = buttonNo % 7 === 0 ? 6: (buttonNo % 7) - 1;

  if(playerNumber === 1) {

    button.classList.add("button-player-1");


    filledGrid[row][column] = 1;
    filledCells++;


    if (playerWon(row, column, 1)) {
      displayWinner("Player 1");
      resetBoard();
    }

    // Update the player
    playerNumber = 2;
    playerType.textContent = "Player - 2";

  } else {

    button.classList.add("button-player-2");


    filledGrid[row][column] = 2;
    filledCells++;

    if (playerWon(row, column, 1)) {
      displayWinner("Player 2");
      resetBoard();
    }

    // Update the player
    playerNumber = 1;
    playerType.textContent = "Player - 1";

  }

  // If all the cells has been filled

  if(filledCells === 42) {
    displayWinner("Tie");
      resetBoard();
  }

  // Disable the button is the move is made
  setTimeout(function () {
    button.disabled = true;
  },10);

}

function playerWon(row , column , player) {

  var count = 0;

  // Check for columns

  for(var i = 0; i < 7; i++) {
    if(filledGrid[row][i] === player) {
      count++;
      if(count === 4) return true;
    } else {
      count = 0;
    }

  }

  count = 0;

  // Check for Rows

  for(var i = 0; i < 6; i++) {
    if(filledGrid[i][column] === player) {
      count++;
      if(count === 4) return true;
    } else {
      count = 0;
    }
  }


  count = 0;

  // Check for primary diagonal

  if(row >= column) {

    var i = row - column;
    var j = 0;

    for(; i <= 5; i++ , j++) {
      if(filledGrid[i][j] === player) {
        count++;
        if(count == 4) return true;
      } else {
        count = 0;
      }
    }
  } else {

    var i = 0;
    var j = column - row;

    for(; j <= 6; i++ , j++) {
      if(filledGrid[i][j] === player) {
        count++;
        if(count == 4) return true;
      } else {
        count = 0;
      }
    }

  }

  count = 0;

  // Check for secondary diagonal

  if(row + column <= 5) {

    var i = row + column;
    var j = 0;

    for(; i >= 0 && j <= row + column; i-- , j++) {
      if(filledGrid[i][j] === player) {
        count++;
        if(count == 4) return true;
      } else {
        count = 0;
      }
    }

  } else {

    var i = 5;
    var j = row + column - 5;

    for(; j <= 6; j++ , i--) {
      if(filledGrid[i][j] === player) {
        count++;
        if(count == 4) return true;
      } else {
        count = 0;
      }
    }

  }
  return false;

}

// Function to reset the Board completely
function resetBoard() {

  // Remove all the disabled buttons and the styles

  for(var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove("button-player-1");
    buttons[i].classList.remove("button-player-2");
  }


  // Player Number is changed to 1

  playerNumber = 1;
  playerType.textContent = "Player - 1";


  // Filled Cells is changed to 0

  filledCells = 0;


  // Filling the Board with -1

  for(var i = 0; i < 6; i++) {
    for(var j = 0; j < 7; j++) {
      filledGrid[i][j] = -1;
    }
  }

}
