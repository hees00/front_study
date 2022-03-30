const Piece = require("./Piece.js");
const chess = require("./chess.js");
let board = chess.board;


class Pawn extends Piece {
    constructor(color, position) {
        const pieceNumber = 5;;
        super(color, position, pieceNumber);
        const posNum = super.getPos(this.position);
        board[posNum.y][posNum.x] = this;
        this.first = true
    }

    moverule(to) {
        //앞으로 한칸씩만 가능, 먹을 때는 대각선, 처음 출발할 때만 두칸 가능
        super.moverule();
        const now = super.getPos(this.position);
        const go = super.getPos(to);

        //전진만 가능하기 때문에 부호 바꿔주려고 만듦
        const posub = this.color ? (now.y - go.y) : (go.y - now.y)


        if (posub == 2 && go.x == now.x) {
            if (this.first) {
                this.first = false
                return true;
            }
            else {
                console.log("이동할 수 없는 위치입니다.")
                return false;
            }
        }
        else if (posub == 1 && go.x == now.x) {
            if (board[go.y][go.x] != 0) {
                console.log("대각선으로만 먹을 수 있습니다")
                return false
            }
            return true;
        } else if (posub == 1 && Math.abs((go.x - now.x)) == 1) {
            if (board[go.y][go.x] != 0) {
                return true
            }
            else {
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

module.exports=Pawn;