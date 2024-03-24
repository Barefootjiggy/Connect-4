# Connect4
Title/Description of game:

Connect 4

A game where each player gets a finite amount of pieces that together equal the amount of cells in the game board, winner is determined by the first person to get 4 pieces in a row, vertically or diagonally and players alternate turns. I chose this game because I used to play connect 4 a lot and it'll be cool to have my own version of it and update it as I go a long.

Technologies Used:

HTML, CSS. JavaScript, ChatGpt

Getting Started: https://connect-jp.netlify.app/

Screenshots:

Landing
Photo by Joshua Pierre from Pexels: https://www.pexels.com/photo/20757164/

Result
Photo by Joshua Pierre from Pexels: https://www.pexels.com/photo/20757167/

Photo by Joshua Pierre from Pexels: https://www.pexels.com/photo/20757169/


Timeline:
| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Monday     |   | Create. present proposal, html     |          |                 |
| Tuesday    |   | Create css, js                     |          |                 |
| Wednesday  |   | Finalize MVP                       |          |                 |
| Thursday   |   | Add functionality                  |          |                 |
| Friday     |   | Add styling                        |          |                 |
| Saturday   |   | Work on strech goals               |          |                 |
| Sunday     |   |                                    |          |                 |
| Monday     |   | Present                            |          |                 |

# Monday

- [x]  Proposal Prompt
- [x]  Create HTML

# Tuesday

- [x]  Create CSS
- [x]  Create JS…
- [x]  Initialize the game board
- [x]  Constants for cells, player display, play again button, announcer
- [x]  Variables for board, current player, active game
- [x]  Establish and check for winning conditions after each move
- [x]  Function to handle player variants of player moves

# Wednesday

- [x]  Implement a reset function to start a new game (reset function took some time for me to figure out how to reset the board and get the event listener for when the game ends declaring who wins to reset when the play again button was hit)
- [x]  Add event listeners to handle player interactions, things that the players will be allowed to click on and have an action from
- [x]  Update the game board and check for winning conditions accordingly
- [x]  Update the display to show whose turn it is and the game outcome
- [x]  Deployment

# Thursday

- [x]  Display the winner or a tie message when the game ends
- [ ]  Display for game point
- [x]  Implement styling and animations to enhance the user experience (This was the most satisfying making different themes and figuring out the hex codes to match up with the real life brands)

# Friday

- [x]  Add styling
- [x]  What’s gonna be used for pieces?
- [x]  Color of table and player pieces

# Saturday

- [ ]  Animations
- [ ]  Sounds
- [x]  Backgrounds
- [ ]  Game Point
- [ ]  Determine who goes first based on rock, paper, scissors or flipping coin
- [ ]  Tracking sets of 3,5,7
- [ ]  Computer option for easy, medium, hard

Future enhancements:

I tihnk it would be interesting to determine who gets to go first based on rock paper scissors kinda how my friends and I would sometimes because usually whoever goes first is most likely to win, or maybe do a coin toss. I'd love to do sound effects for pieces going in and animations for wins, loses, and ties. I'd also want to track a game of 3, 5 or 7, as well as a computer player with easy medium hard option.

# Connect Four

## Description
Connect Four is a classic two-player connection game in which players choose a color and then take turns dropping colored discs into a grid. The objective is to be the first to form a horizontal, vertical, or diagonal line of four discs of your color.

## Features
- Player vs Player mode
- Color scheme selection
- Reset button to start a new game

## Usage
1. Choose a color scheme from the dropdown menu.
2. Click on the buttons in the grid to drop your colored discs.
3. The game will alternate between Player 1 and Player 2.
4. The first player to connect four discs of their color wins the game.
5. Click the "Play Again" button to reset the game and start over.

## Color Schemes
The game offers various color schemes to customize the appearance:
- Classic
- After Hours
- Pac Man
- Ice Pop
- Vice City
- Star Wars
- Barbie
- Ferrari
- Mercedes
- Red Bull
- Mocha

"Classic"

## CSS Styles

### Classic Color Scheme

```css
.classic {
       
    /* Game Title */
    
    #game-title {
        color: #ffffff;
        font-family: "Londrina Solid", sans-serif;
        letter-spacing: 5px;
        text-align: center;
        text-transform: uppercase;
    }
       
    /* Main Container */
    
    #main-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
    }
    
    /* Add these styles to style the announcement */
    #game-conclusion {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #0271b8;
        color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        font-family: "Londrina Solid", sans-serif;
        font-size: 24px;
        z-index: 9999;
    }
    
    .hide {
        display: none;
    }
    
    
    /* Player Details */
    
    #player {
        background-color: #0271b8;
        border: 4px solid #ffffff;
        box-shadow: 2px 3px 5px 7px #EEEEEE;
        border-radius: 10px;
        margin-top: 50px;
        padding: 20px;
        width: 350px;
    }
    
    #player-type {
        color: #ffffff;
        font-family: "Londrina Solid", sans-serif;
        letter-spacing: 5px;
        text-align: center;
        text-transform: uppercase;
    }
    
    /* Grid */
    
    #grid {
        background-color: #fbde0c;
        border: 3.5px #fbde0c;
        border-radius: 4px;
        box-shadow: 2px 3px 5px 7px #0271b8;
        margin-top: 50px;
        max-width: 600px;
        padding: 7px;
    }
    
    /* Grid Row */
    
    .row {
        display: flex;
    }
    
    /* Grid Column */
    
    .column {
        align-items: center;
        background-color: #fbde0c;
        border: 1px solid  #ce970c;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        height: 75px;
        margin: 5px;
        width:  75px;
    }
    
    /* Buttons */
    
    .button {
        background-color: #ffffff;
        border: none;
        height: 100%;
        padding: 0;
        width: 100%;
    }
    
    .button:hover {
        background-color: #fbde0c;
        color: #ce970c;
        cursor: pointer;
        transition: 1.5s;
    }
    
    #reset-button {
        background-color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 5px;
        color: #0271b8;
        font-family: "Londrina Solid", sans-serif;
        font-size: 1.5rem;
        margin: 50px 0;
        padding: 10px 40px;
        text-transform: uppercase;
        transition: 1.5s;
    }
    
    #reset-button:hover {
        background-color: #0271b8;
        color: #ffffff;
        cursor: pointer;
        transition: 1.5s;
    }
    
    /* Player - 1 Buttons */
    
    .button-player-1 {
        background-color: #000000;
        border: 2px solid #1c1d1e;
        border-radius: 50%;
        color: #000000;
        height:  50px;
        width: 50px;
    }
    
    /* Player - 2 Buttons */
    
    .button-player-2 {
        background-color: #fa4846;
        border: 2px solid #fa4846;
        border-radius: 50%;
        color: #EEEEEE;
        height:  50px;
        width: 50px;
    }
}

## JavaScript

### Game Logic

```javascript
// Connect 4 game logic

// Constants for DOM elements
const buttons = document.getElementsByClassName("button");
const reset = document.getElementById("reset-button");
const playerType = document.getElementById("player-type");
const gameConclusion = document.getElementById("game-conclusion");
const winner = document.getElementById("winner");
const colorSchemeSelect = document.getElementById('color-scheme-select');

// Define an object to map color schemes to background colors
const backgroundColors = {
  'classic': '#ffffff', 'after-hours': '#000000', 'pac-man': '#030303', 'ice-pop': '#ffffff', 'vice-city': '#040000', 'star-wars': '#000000', 'barbie': '#f086b9', 'ferrari': '#EF1A2D', 'mercedes': '#000000', 'red-bull': '#352e3d', 'mocha': '#594235'
}

// Add event listener to handle color scheme change
colorSchemeSelect.addEventListener('change', function() {
  // Get the selected color scheme value
  const selectedColorScheme = colorSchemeSelect.value;
  
  // Remove existing color scheme classes from body
  document.body.classList.remove('classic', 'after-hours', 'pac-man', 'ice-pop', 'vice-city', 'star-wars', 'barbie', 'ferrari', 'mercedes', 'red-bull', 'mocha' );
  
  // Add the selected color scheme class to body
  document.body.classList.add(selectedColorScheme);

  // Set the background color based on the selected color scheme
  document.body.style.backgroundColor = backgroundColors[selectedColorScheme];
});

// Game Flow Variables
let playerNumber = 1; // Initially player - 1 gets to start his/her turn
let filledGrid = []; // Player board
let filledCells = 0; // No. of cells that have been filled

// Initialize the game board
for(let i = 0; i < 6; i++) {
  let arr = [-1 , -1 , -1 , -1 , -1 , -1 , -1]; // Board is initialized with -1
  filledGrid.push(arr);
}

// Event Listener for Reset Button
reset.addEventListener("click" , function() {
  resetBoard();
});

// Event Listeners for Game Buttons
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click" , function() {
    let buttonNo = this.classList[1];
    makeMove(this , buttonNo.slice(4));
  });
}

// Function to reset the board and hide the winner message
function resetBoard() {
 gameConclusion.classList.add("hide");
}

// Function to display winner message
function displayWinner(player) {
  winner.textContent = player;
  gameConclusion.classList.remove("hide");
}

// Function to Make Move on the passed button and disable it
function makeMove(button, buttonNo) {
  // Code for making a move
}

// Function to check if a player has won the game
function playerWon(row , column , player) {
  // Code for checking winning conditions
}


## Technologies Used
- HTML
- CSS
- JavaScript
- ChatGpt

## Credits
This Connect Four game was created by [Jpmaster23] as a project for [General Assembly]




