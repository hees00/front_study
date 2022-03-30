const Piece = require("./Piece.js");
const chess = require("./chess.js");
let board = chess.board;

class Queen extends Piece {
    constructor(color) {
        const position = color ? "D1" : "D8";
        const pieceNumber = 1;
        super(color, position, pieceNumber)
        const posNum = this.getPos(this.position)
        console.log(posNum)
        // chess.setBoard(posNum.x,posNum.y,this)
        board[posNum.y][posNum.x] = this
    }

    moverule(to) {
        //원하는 만큼 좌우,대각선
        super.moverule();
        const now = getPos(this.position);
        const go = getPos(to);
        if (now.y == go.y || now.x == go.x) {
            return true;
        } else if (now.y - go.y == now.x - go.x) {
            return true;
        } else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }
}

module.exports=Queen;