// Gameboard objects
const theGame = (() => {

    function gameBoard() {
        const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
        return { board };
    }
    return gameBoard();

})();

console.log(theGame.board);
