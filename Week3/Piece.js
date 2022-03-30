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

    //좌표로 변환
    getPos(pos) {
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
}

module.exports = Piece;