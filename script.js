// Gameboard objects
const theGame = (() => {

    function gameBoard() {

        document.addEventListener('DOMContentLoaded', function () {
            const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
            const boxes = document.querySelectorAll('.boxes');

            // Display array elements inside div boxes
            board.forEach((box, index) => {
                boxes[index].innerText = box;
            });
        });

        // Object containing board array
        return { board };
    }


    function players() {
        const gamePlayers = ['Player One', 'Player Two'];
        // Object containing gamePlayers array
        return { gamePlayers };
    }

    // Destructure function return values
    const { board } = gameBoard();
    const { gamePlayers } = players();

    // Return game objects
    return { board, gamePlayers };

})(); // IIFE call

console.log(theGame.board);
console.log(theGame.gamePlayers);

