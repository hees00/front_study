class Piece {
    constructor(color, position, pieceNumber) {
        this.position = position;
        this.pieceNumber = pieceNumber;
        //Queen:1 Rook:2 Bishop:3 Knight:4 Pawn:5
        this.color = color;
        //white:1 black:0
    }

    move(to) {
        this.position = to
    }

    checkIfMovabale() {

    }
}

module.exports = Piece