// Gameboard objects
const theGame = (() => {

    // An empty array of length 9 to start each game
    const board = Array(9).fill(null);

    // Player name/move object
    function player(name, move) {
        return { name, move };
    }

    // Create player instances
    const playerOne = player('Player 1', 'X');
    const playerTwo = player('Player 2', 'O');

    // Players object
    const players = { playerOne, playerTwo };

    // Set current player to player one at the start of each game
    let currentPlayer = players.playerOne;

    function gameBoard() {
        document.addEventListener('DOMContentLoaded', function () {

            // Reference to gameboard box divs
            const boxes = document.querySelectorAll('.boxes');

            // Display array elements 
            boxes.forEach((box, index) => {
                box.addEventListener('click', () => {
                    // If box already has text, exit current iteration of the loop
                    if (board[index] !== null) return;

                    // Upon click, assign current player's move to the board array
                    board[index] = currentPlayer.move;
                    // Fill the box with the current player's move: X or O
                    box.innerHTML = currentPlayer.move;

                    // Switch current player after their turn is taken
                    if (currentPlayer === players.playerOne) {
                        currentPlayer = players.playerTwo;
                    } else {
                        currentPlayer = players.playerOne;
                    }
                });
            });
        });
    }

    // Call gameBoard function to initiate event listeners
    gameBoard();

    // Return game/player objects
    return { board, players };


})(); // IIFE call


console.log(theGame.board);