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