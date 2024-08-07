var buttons = document.getElementsByClassName("button");
var reset = document.getElementById("reset-button");
var playerType = document.getElementById("player-type");
var gameConclusion = document.getElementById("game-conclusion");
var winner = document.getElementById("winner");
var colorSchemeSelect = document.getElementById('color-scheme-select');
var backgroundColors = {
    'classic': '#ffffff', 'after-hours': '#000000', 'pac-man': '#030303', 'ice-pop': '#ffffff', 'vice-city': '#040000', 'star-wars': '#000000', 'barbie': '#f086b9', 'ferrari': '#EF1A2D', 'mercedes': '#000000', 'red-bull': '#352e3d', 'mocha': '#594235'
};
colorSchemeSelect.addEventListener('change', function () {
    var _a;
    var selectedColorScheme = colorSchemeSelect.value;
    (_a = document.body.classList).remove.apply(_a, Object.keys(backgroundColors));
    document.body.classList.add(selectedColorScheme);
    document.body.style.backgroundColor = backgroundColors[selectedColorScheme];
});
var playerNumber = 1;
var filledGrid = [];
var filledCells = 0;
for (var i = 0; i < 6; i++) {
    var arr = Array(7).fill(-1);
    filledGrid.push(arr);
}
reset.addEventListener("click", resetBoard);
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonNo = this.classList[1];
        makeMove(this, buttonNo.slice(4));
    });
}
function resetBoard() {
    gameConclusion.classList.add("hide");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].classList.remove("button-player-1");
        buttons[i].classList.remove("button-player-2");
    }
    playerNumber = 1;
    playerType.textContent = "Player - 1";
    filledCells = 0;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            filledGrid[i][j] = -1;
        }
    }
}
function displayWinner(player) {
    winner.textContent = player;
    gameConclusion.classList.remove("hide");
}
function makeMove(button, buttonNo) {
    var index = parseInt(buttonNo);
    var row = index % 7 === 0 ? Math.floor(index / 7) - 1 : Math.floor(index / 7);
    var column = index % 7 === 0 ? 6 : (index % 7) - 1;
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
    }
    else {
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
function playerWon(row, column, player) {
    var count = 0;
    for (var i = 0; i < 7; i++) {
        if (filledGrid[row][i] === player) {
            count++;
            if (count === 4)
                return true;
        }
        else {
            count = 0;
        }
    }
    count = 0;
    for (var i = 0; i < 6; i++) {
        if (filledGrid[i][column] === player) {
            count++;
            if (count === 4)
                return true;
        }
        else {
            count = 0;
        }
    }
    count = 0;
    if (row >= column) {
        var i = row - column;
        var j = 0;
        for (; i <= 5; i++, j++) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4)
                    return true;
            }
            else {
                count = 0;
            }
        }
    }
    else {
        var i = 0;
        var j = column - row;
        for (; j <= 6; i++, j++) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4)
                    return true;
            }
            else {
                count = 0;
            }
        }
    }
    count = 0;
    if (row + column <= 5) {
        var i = row + column;
        var j = 0;
        for (; i >= 0 && j <= row + column; i--, j++) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4)
                    return true;
            }
            else {
                count = 0;
            }
        }
    }
    else {
        var i = 5;
        var j = row + column - 5;
        for (; j <= 6; j++, i--) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4)
                    return true;
            }
            else {
                count = 0;
            }
        }
    }
    return false;
}
