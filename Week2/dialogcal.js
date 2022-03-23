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
        const calArray=Array.from(cal)
        let num="";

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
                            this.pushStackB();
                            break;
                        
                        case ')':
                            this.pushtoopen();
                    }
                }
            }
        );
        this.stackA.push(num);

        this.stackA=[...this.stackA,...this.stackB]
    }   

    pushStackB(){
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
    }

    pushtoopen(){
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

//모듈 내보내기
exports.calculateDia = calculateDia
