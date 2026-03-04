// Gameboard objects
const theGame = (() => {

    function gameBoard() {
        const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
        // Object containing board array
        return { board };
    }

    function players() {
        const gamePlayers = ['Player One', 'Player Two'];
        // Object containing gamePlayers array
        return { gamePlayers };
    }

    // Destructure the function return values
    const { board } = gameBoard();
    const { gamePlayers } = players();

    // Return object that includes the game board and the game players
    return { board, gamePlayers };
})();

console.log(theGame.board);
console.log(theGame.gamePlayers);
