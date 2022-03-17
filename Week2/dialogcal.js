//대화형 계산기 
//스택,후위 연산식

class calculateDia{

    stackA=[]
    stackB=[]
    ss=[]


    caculate(cal=""){
        if(cal=="end"){
            return false
        }
        this.changeback(cal);
        this.stackA= this.deletenull(this.stackA)
        // console.log("공백 없애버리기"+this.stackA)

        while(this.stackA.length != 1){
            for(let i in this.stackA){
                let re = isNaN(this.stackA[i]) ? this.operate(this.stackA[i-2],this.stackA[i-1],this.stackA[i]) : false 
                    if(re !== false){
                        this.stackA[i]=null
                        this.stackA[i-1]=null
                        this.stackA[i-2]= re
                        this.stackA= this.deletenull(this.stackA)
                        break;
                    }
            }
        }

        console.log("결과 : "+ this.stackA[0])
        

    }

    deletenull(array){
        const result = array.filter(item => {
            return  item !== undefined && item !== null && item !== "";
        })
        return result;
    }

    checkCorrect(check=""){
        if(check=='+'||check=='-'){
            return 3;
        }
        else if(check=="*"||check=="/"){
            return 2;
        }
        else if(check==")"||check=='('){
            return 1;
        }
        else{
            return 1000;
        }
    }

    operate(num1,num2,op){
        num1 = Number(num1)
        num2 = Number(num2)
        switch(op){
            case '+':
                return num1+num2;

            case '-':
                return num1-num2;
            
            case '*':
                return num1*num2;

            case '/':
                return num1/num2;
        }
    }

    changeback(cal){
        let calArray=Array.from(cal)
        let num="";
        // console.log(calArray)
        calArray.forEach(  
            i=>{
                if( '0'<= i && i <= '9' ){
                    num+=i
                }
                else{
                    this.stackA.push(num)
                    num=""
                    switch(i){
                        case '(' :
                            this.stackB.push(i);
                            break;

                        case '+' : case '-' : case '*' : case '/' :
                            while(true){
                                if(this.stackB[this.stackB.length-1] == null){
                                    this.stackB.push(i)
                                    break
                                }
            
                                if(this.checkCorrect(i) <= this.checkCorrect(this.stackB[this.stackB.length-1])){
                                    this.stackB.push(i)
                                    break
                                }
                                if(this.stackB[this.stackB.length-1] == '('){
                                    this.stackB.push(i)
                                    break
                                }
                                this.stackA.push(this.stackB.pop())
                            }

                            break;
                        
                        case ')':
                            while(true){
                                if(this.stackB[this.stackB.length-1] == '(' || this.stackB[this.stackB.length-1] == null ){
                                    this.stackB.pop()
                                    break
                                }
                                else{
                                    this.stackA.push(this.stackB.pop())
                                }
                            }
                    }
                }
            }
        );
        this.stackA.push(num);

        for(let i in this.stackB){
            this.stackA.push(this.stackB[this.stackB.length-i])
        }
        // this.stackB.forEach(
        //     i => {
        //         // let p = this.stackB.pop()
        //         this.stackA.push(i)
        //     }
        // )
        //왜지
        this.stackA.push(this.stackB[0])
    }   
}

// const test = new calculateDia()
// test.caculate("6/2+3+3+3*5")

//모듈 내보내기
exports.calculateDia = calculateDia
