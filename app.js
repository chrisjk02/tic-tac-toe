// STORE ARRAY INSIDE GAMEBOARD OBJECT
function createGameboard() {
    return {
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],

        getCellValue: function (row, col) {
            return this.board[row][col];
        },

        setCellValue: function (row, col, value) {
            this.board[row][col] = value;
        }

    };
}