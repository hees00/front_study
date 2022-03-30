const Piece = require("./Piece.js");
const chess = require("./chess.js");
let board = chess.board;

class Knight extends Piece {
    constructor(color, position) {
        const pieceNumber = 4;
        super(color, position, pieceNumber)
        const posNum = super.getPos(this.position)
        board[posNum.y][posNum.x] = this
    }

    moverule(to) {
        //L로 이동가능
        super.moverule();
        const now = this.getPos(this.position);
        const go = this.getPos(to);
        if ((now.y - go.y) * (now.x - go.x) == 2 || (now.y - go.y) * (now.x - go.x) == -2) {
            return true;
        } else {
            console.log("이동할 수 없는 위치입니다.")
            return false;
        }
    }

}

module.exports=Knight;