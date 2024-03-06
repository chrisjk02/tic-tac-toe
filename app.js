// STORE ARRAY INSIDE GAMEBOARD OBJECT
function createGameboard() {
    return {
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],

        getCellValue(row, col) {
            return this.board[row][col];
        },

        setCellValue(row, col, value) {
            this.board[row][col] = value;
        }

    };
}