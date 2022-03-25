const board = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
let turn =1 ;

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

//좌표로 변환
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
    return [(8 - pos[1]), x]
}

function move(from, to) {
    const posFrom = getPos(from)
    const posTo = getPos(to)
    const pi = board[posFrom[0]][posFrom[1]]
    if (pi == 0) {
        console.log("해당 위치에 말이 존재하지 않습니다")
        return
    }
    else if(pi.color !== turn){
        console.log("순서대로 해!")
        return
    }

    if (pi.moverule(to)) {
        if (checkIfMovabale(posTo, posFrom)) {
            board[posFrom[0]][posFrom[1]] = 0;
            board[posTo[0]][posTo[1]] = pi;
            pi.moving(to);
            turn = turn ? 0:1;
        }
    }
}

function checkIfMovabale(pos, posfrom) {
    if (board[pos[0]][pos[1]] == 0) {
        console.log("이동")
        return true
    } else if (board[pos[0]][pos[1]].color != board[posfrom[0]][posfrom[1]].color) {
        console.log("냠냠")
        board[pos[0]][pos[1]] = 0
        return true
    } else {
        console.log("이미 본인 말이 위치해있습니다")
        return false
    }
}


class User{
    constructor(color) {
        color = color
    }
}

class Piece {
    constructor(color, position, pieceNumber) {
        this.position = position;
        this.pieceNumber = pieceNumber;
        //Queen:1 Rook:2 Bishop:3 Knight:4 Pawn:5
        this.color = color;
        //white:1 black:0
    }

    moving(to) {
        this.position = to
    }

    moverule() {
    }

}

class Queen extends Piece {
    constructor(color) {
        const position = color ? "D1" : "D8";
        const pieceNumber = 1;
        super(color, position, pieceNumber)
        const posNum = getPos(this.position)
        board[posNum[0]][posNum[1]] = this
    }

    moverule(to) {
        //원하는 만큼 좌우,대각선
        super.moverule();
        const now = getPos(this.position);
        const go = getPos(to);
        if (now[0] == go[0] || now[1] == go[1]) {
            return true;
        } else if (now[0] - go[0] == now[1] - go[1]) {
            return true;
        } else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }
}
class Rook extends Piece {
    constructor(color, position) {
        const pieceNumber = 2;
        super(color, position, pieceNumber)
        const posNum = getPos(this.position)
        board[posNum[0]][posNum[1]] = this
    }

    moverule(to) {
        //원하는 만큼 좌우로만
        super.moverule();
        const now = getPos(this.position);
        const go = getPos(to);
        if (now[0] == go[0] || now[1] == go[1]) {
            return true;
        } else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }
}
class Bishop extends Piece {
    constructor(color, position) {
        const pieceNumber = 3;
        super(color, position, pieceNumber)
        const posNum = getPos(this.position)
        board[posNum[0]][posNum[1]] = this
    }

    moverule(to) {
        //원하는 만큼 대각선
        super.moverule();
        const now = getPos(this.position);
        const go = getPos(to);
        if (now[0] - go[0] == now[1] - go[1]) {
            return true;
        } else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }
}

class Knight extends Piece {
    constructor(color, position) {
        const pieceNumber = 4;
        super(color, position, pieceNumber)
        const posNum = getPos(this.position)
        board[posNum[0]][posNum[1]] = this
    }

    moverule(to) {
        //L로 이동가능
        super.moverule();
        const now = getPos(this.position);
        const go = getPos(to);
        if ((now[0] - go[0]) * (now[1] - go[1]) == 2 || (now[0] - go[0]) * (now[1] - go[1]) == -2) {
            return true;
        } else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }

}

class Pawn extends Piece {
    constructor(color, position) {
        const pieceNumber = 5;;
        super(color, position, pieceNumber);
        const posNum = getPos(this.position);
        board[posNum[0]][posNum[1]] = this;
        this.first = true
    }

    moverule(to) {
        //앞으로 한칸씩만 가능, 먹을 때는 대각선, 처음 출발할 때만 두칸 가능
        super.moverule();
        const now = getPos(this.position);
        const go = getPos(to);
        
        //전진만 가능하기 때문에 부호 바꿔주려고 만듦
        const posub = this.color? (now[0] - go[0]): (go[0] - now[0])
        

        if (posub == 2 && go[1]==now[1]) {
            if (this.first) {
                this.first = false
                return true;
            }
            else {
                console.log("이동할 수 없는 위치입니다.")
                return false;
            }
        }
        else if (posub == 1 && go[1]==now[1]) {
            if(board[go[0]][go[1]] !=0){
                console.log("대각선으로만 먹을 수 있습니다")
                return false
            }
            return true;
        } else if (posub == 1 && Math.abs((go[1] - now[1])) == 1) {
            if (board[go[0]][go[1]] != 0) {
                return true
            }
            else{
                console.log("이동할 수 없는 위치입니다.")
                return false;
            }
        }
        else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }
}


function startGame() {
    wq = new Queen(1);
    bq = new Queen(0);

    wr1 = new Rook(1, "A1")
    wr2 = new Rook(1, "H1")
    br1 = new Rook(0, "A8")
    br2 = new Rook(0, "H8")

    wb1 = new Bishop(1, "C1")
    wb2 = new Bishop(1, "F1")
    bb1 = new Bishop(0, "C8")
    bb2 = new Bishop(0, "F8")

    wn1 = new Knight(1, "B1")
    wn2 = new Knight(1, "G1")
    bn1 = new Knight(0, "B8")
    bn2 = new Knight(0, "G8")

    wp1 = new Pawn(1, "A2")
    wp2 = new Pawn(1, "B2")
    wp3 = new Pawn(1, "C2")
    wp4 = new Pawn(1, "D2")
    wp5 = new Pawn(1, "E2")
    wp6 = new Pawn(1, "F2")
    wp7 = new Pawn(1, "G2")
    wp8 = new Pawn(1, "H2")

    bp1 = new Pawn(0, "A7")
    bp2 = new Pawn(0, "B7")
    bp3 = new Pawn(0, "C7")
    bp4 = new Pawn(0, "D7")
    bp5 = new Pawn(0, "E7")
    bp6 = new Pawn(0, "F7")
    bp7 = new Pawn(0, "G7")
    bp8 = new Pawn(0, "H7")

    showBoard();
}

exports.showBoard=showBoard;
exports.move=move;
exports.startGame=startGame;
exports.User =User;










