// Gameboard objects
function gameBoard() {

    document.addEventListener('DOMContentLoaded', function () {
        const allBoxes = document.querySelectorAll('.boxes');
        const board = [];

        allBoxes.forEach(box => {
            let currentPlayer;
            let firstPlayer = 'X';
            let secondPlayer = 'O';
            const [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth] = board;

            box.addEventListener('click', () => {
                for (let i = 1; i < 10; i++) {
                    if (i % 2 !== 0) {
                        box.textContent += firstPlayer;
                    } else {
                        box.textContent += secondPlayer;
                    }
                }
            });
        });

        return { board };
    });
}