// Gameboard objects
const theGame = (() => {

    // An empty array of length 9 to start each game
    const board = Array(9).fill(null);

    // Variable to end the game after a player has won
    let gameOver = false;

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

    // Function to determine if a player has won
    function declareWinner(currentPlayer) {
        // If a player has won, exit the function
        if (gameOver) return;

        // Set the current state of winner
        let winner = false;

        // Array index sequences that will result in a win
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // Loop through the gameboard array
        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];

            // Check to see if a player has marked three boxes in a row vertically, horizontally, or diagonally
            // If they have, set the winner variable to true and break out of the loop
            if (board[a] === currentPlayer.move
                && board[b] === currentPlayer.move
                && board[c] === currentPlayer.move) {
                winner = true;
                break;
            } 
        }

        // If winner, return currentPlayer object. Otherwise, return false
        return winner ? currentPlayer : false;
    }

    // Function to initiate the game
    function gameBoard() {
        // If a player has won, exit the function
        if (gameOver) return;

        document.addEventListener('DOMContentLoaded', function () {

            // Reference to gameboard box divs
            const boxes = document.querySelectorAll('.boxes');

            // Display array elements 
            boxes.forEach((box, index) => {
                box.addEventListener('click', () => {
                    // If a player has won, exit the function
                    if (gameOver) return;

                    // If box already has text, exit current iteration of the loop
                    if (board[index] !== null) return;

                    // Upon click, assign current player's move to the board array
                    board[index] = currentPlayer.move;
                    // Fill the box with the current player's move: X or O
                    box.innerHTML = currentPlayer.move;

                    // declareWinner function call for when a player object is returned, indicating there is a winner
                    let isWinner = declareWinner(currentPlayer);
                    // Reference to results div
                    const results = document.querySelector('.results'); 

                    // If players wins, display winner message and exit loop
                    if (isWinner) {
                        let winMessage = document.createElement('div');
                        winMessage.classList.add('winMessage');
                        winMessage.innerHTML = `${currentPlayer.name} wins!`;
                        winMessage.style.color = 'rgb(5,190,17)';
                        results.innerHTML = '';
                        results.appendChild(winMessage);
                        gameOver = true;
                        return;
                    }

                    // If no player wins, declare the current game a draw
                    if (board.every(box => box !== null) && !isWinner) {
                        let drawMessage = document.createElement('div');
                        drawMessage.classList.add('drawMessage');
                        drawMessage.innerHTML = `It's a draw.`;
                        drawMessage.style.color = 'rgb(233,7,15)';
                        results.innerHTML = '';
                        results.appendChild(drawMessage);
                        gameOver = true;
                        return;
                    }

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
