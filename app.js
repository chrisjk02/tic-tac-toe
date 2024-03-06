// STORE ARRAY INSIDE GAMEBOARD OBJECT
const Gameboard = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    return {
        getCellValue(row, col) {
            return board[row][col];
        },

        setCellValue(row, col, value) {
            board[row][col] = value;
        }

    };
})();