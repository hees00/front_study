const readline = require("readline");
const chess = require("./chess.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


chess.startGame();
let color = 1

rl.on("line",(line)=>{
    if(line == 'end'){
        rl.close();
    }
    else if(line == 'board'){
        chess.showBoard();
    }
    else{
        let inputLine = splitInput(line);
        chess.move(inputLine[0],inputLine[1],color);
        color = color? 0:1;
    }
});
    
rl.on('close',()=>{
    process.exit();
});

const splitInput = (ip) => ip.split(" ");
