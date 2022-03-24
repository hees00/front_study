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
        let po = splitInput(line);
        chess.move(po[0],po[1],color);
        color = color? 0:1;
    }
});
    
rl.on('close',()=>{
    process.exit();
});

function splitInput(ip){
    return ip.split(" ")
}
