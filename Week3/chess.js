const Piece = require('./Piece.js');

const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

let turn = 1;

function showBoard() {
    board.forEach(i => {
        console.log(showPieces(i[0]) + showPieces(i[1]) + showPieces(i[2]) + showPieces(i[3]) + showPieces(i[4]) + showPieces(i[5]) + showPieces(i[6]) + showPieces(i[7]))
    })
}


function showPieces(piece) {
    if (piece == 0) {
        return "× "
    }
    else if (piece.pieceNumber == 1) {
        return piece.color ? "♕ " : "♛ "
    }
    else if (piece.pieceNumber == 2) {
        return piece.color ? "♖ " : "♜ "
    }
    else if (piece.pieceNumber == 3) {
        return piece.color ? "♗ " : "♝ "
    }
    else if (piece.pieceNumber == 4) {
        return piece.color ? "♘ " : "♞ "
    }
    else if (piece.pieceNumber == 5) {
        return piece.color ? "♙ " : "♟ "
    }
}

function move(from, to) {
    const posFrom = getPos(from)
    const posTo = getPos(to)
    const pi = board[posFrom.y][posFrom.x]
    
    if (pi == 0) {
        console.log("해당 위치에 말이 존재하지 않습니다")
        return
    }
    else if (pi.color !== turn) {
        console.log("순서대로 해!")
        return
    }

    if (pi.moverule(to)) {
        if (checkIfMovabale(posTo, posFrom)) {
            board[posFrom.y][posFrom.x] = 0;
            board[posTo.y][posTo.x] = pi;
            pi.moving(to);
            turn = turn ? 0 : 1;
        }
    }
}

function checkIfMovabale(pos, posfrom) {
    if (board[pos.y][pos.x] == 0) {
        console.log("이동")
        return true
    } else if (board[pos.y][pos.x].color != board[posfrom.y][posfrom.x].color) {
        console.log("냠냠")
        board[pos.y][pos.x] = 0
        return true
    } 
    console.log("이미 본인 말이 위치해있습니다")
    return false
}

function getPos(pos) {
    let x;
    switch (pos[0]) {
        case 'A':
            x = 0;
            break;
        case 'B':
            x = 1;
            break;
        case 'C':
            x = 2;
            break;
        case 'D':
            x = 3;
            break;
        case 'E':
            x = 4;
            break;
        case 'F':
            x = 5;
            break;
        case 'G':
            x = 6;
            break;
        case 'H':
            x = 7;
            break;
        default:
    }
    return {
        y : (8 - pos[1]),
        x : x
        }
}



exports.showBoard = showBoard;
exports.move = move;
exports.board = board;











