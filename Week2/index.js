const cal = require("./dialogcal.js");
const readline = require("readline");



// const caltest= new cal.calculateDia()

// caltest.caculate(line)
// test('test', () => {
//     expect( caltest.caculate(1+(3-1)*2)).toBe(5);
// });

let ip = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



  // rl.question("계산식: ", (input) => {
  //   const test= new cal.calculateDia()
  //   test.caculate(input)
  //   ip=input
  //   rl.close();	//close()를 호출하지 않으면 무한 반복
  // });

  rl.on("line",(line)=>{
    if(line == 'end'){
      rl.close();
    }
    const test= new cal.calculateDia()
    test.caculate(line)
  });

rl.on('close',()=>{
  process.exit();
});
