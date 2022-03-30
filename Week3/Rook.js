const Piece = require("./Piece.js");
const chess = require("./chess.js");
let board = chess.board;

class Rook extends Piece {
    constructor(color, position) {
        const pieceNumber = 2;
        super(color, position, pieceNumber)
        const posNum = this.getPos(this.position)
        board[posNum.y][posNum.x] = this
    }

    moverule(to) {
        //원하는 만큼 좌우로만
        super.moverule();
        const now = this.getPos(this.position);
        const go = this.getPos(to);
        if (now.y == go.y || now.x == go.x) {
            return true;
        } else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }
}

module.exports=Rook