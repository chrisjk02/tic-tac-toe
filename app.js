// STORE ARRAY INSIDE GAMEBOARD OBJECT
const Gameboard = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getCellValue = (row, col) => { return board[row][col]; };

    const setCellValue = (row, col, value) => { board[row][col] = value; };

    return { getCellValue, setCellValue }
})();

function newPlayer(marker) {
    let playerMarker = marker;
    const makeMove = (row, col) => { Gameboard.setCellValue(row, col, playerMarker) };

    return { makeMove }
}

const displayController = (function () {
    const p1 = newPlayer('X');
    const p2 = newPlayer('O');

    const resetGame = () => {
        // RESET GAMEBOARD
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                Gameboard.setCellValue(row, col, '');
            }
        }
    }

    return { resetGame }
})();