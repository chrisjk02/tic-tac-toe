// STORE ARRAY INSIDE GAMEBOARD OBJECT
const Gameboard = (function () {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getCellValue = (row, col) => { return board[row][col]; };

    const setCellValue = (row, col, value) => { board[row][col] = value; };

    return { board, getCellValue, setCellValue }
})();

function newPlayer(marker) {
    let playerMarker = marker;
    const askRow = () => {
        return parseInt(prompt('Enter row:'));
    }

    const askColumn = () => {
        return parseInt(prompt('Enter column:'));
    }

    const makeMove = (row, col) => { Gameboard.setCellValue(row, col, playerMarker) };

    return { askRow, askColumn, makeMove }
}

const displayController = (function () {
    const p1 = newPlayer('X');
    const p2 = newPlayer('O');
    let winner = null;

    const playGame = () => {
        resetGame();

        while (winner === null) {
            console.table(Gameboard.board);
            console.log("Player 1's Turn");
            p1.makeMove(p1.askRow(), p1.askColumn());
            console.table(Gameboard.board);

            winner = checkWinner(Gameboard.board);
            if (winner !== null) { break; }

            console.log("Player 2's Turn");
            p2.makeMove(p2.askRow(), p2.askColumn());
            console.table(Gameboard.board);

            winner = checkWinner(Gameboard.board);
            if (winner !== null) { break; }
        }

        if (winner === 'X') { console.log('Player 1 Wins!'); }
        else if (winner === 'O') { console.log('Player 2 Wins!'); }
        else { console.log('Tie!'); }
    }

    const resetGame = () => {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                Gameboard.setCellValue(row, col, '');
            }
        }

        winner = null;
    }

    return { playGame, resetGame }
})();

function checkWinner(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
    }

    // Check diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }

    // No winner
    return null;
}