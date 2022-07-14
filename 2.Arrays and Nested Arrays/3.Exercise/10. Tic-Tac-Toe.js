function ticTacToe(turns) {
    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = '';

    function announceWinner() {
        console.log(`Player ${player} wins!`);
        for (const row of board) {
            console.log(row.join('\t'));
        }
    }

    function checkWinConditions(squares) {
        return squares.every(square => square === player)
    }

    let count = 1;

    for (const turn of turns) {
        let [x, y] = turn.split(' ');
        x = Number(x);
        y = Number(y);

        if (board[x][y]) { // check if square is "false"
            console.log('This place is already taken. Please choose another!');
        } else {
            if (count % 2 === 0) {
                player = 'O';
            } else {
                player = 'X'
            }
            board[x][y] = player;
            count++;
        }

        // check for matching rows

        for (const row of board) {
            const victory = checkWinConditions(row)
            if (victory) {
                announceWinner();
                return;
            }
        }

        // check for matching columns

        for (let i = 0; i < 3; i++) {
            const cols = [board[0][i], board[1][i], board[2][i]];
            const victory = checkWinConditions(cols);
            if (victory) {
                announceWinner();
                return;
            }
        }

        // check for matching diagonals

        const d1 = [board[0][0], board[1][1], board[2][2]];
        const d2 = [board[0][2], board[1][1], board[2][0]];

        const victory = checkWinConditions(d1) || checkWinConditions(d2);

        if (victory) {
            announceWinner();
            return;
        }

        const draw = board.every(row => !row.includes(false));
        if (draw) {
            console.log('The game ended! Nobody wins :(');
            for (const row of board) {
                console.log(row.join('\t'));
            }
            return;
        }
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
)
