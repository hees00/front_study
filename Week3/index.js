const readline = require("readline");
const chess = require("./chess.js");
const Pawn = require("./Pawn.js");
const Knight = require("./Knight.js");
const Rook = require("./Rook.js");
const Bishop = require("./Bishop.js");
const Queen = require("./Queen.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


startGame();


rl.on("line",(line)=>{
    if(line == 'end'){
        rl.close();
    }
    else if(line == 'board'){
        chess.showBoard();
    }
    else{
        let po = splitInput(line);
        chess.move(po[0],po[1])
    }
});
    
rl.on('close',()=>{
    process.exit();
});

function splitInput(ip) {
    return ip.split(" ")
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

    chess.showBoard();
}

