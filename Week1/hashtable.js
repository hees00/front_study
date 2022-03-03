// Hashtable은 key에 null을 허용하지 않지만, HashMap은 key에 null을 허용

class myHashtable{
    table = new Array(1000)  //얘를 메모리로 생각
    totalkey=[]

    constructor(array=[]) { 
        for ( let i in array){
            this.set(array[i])
        }
    }

    print(){

    }

    set(array){
        let key=array[0];
        let value=array[1];

        this.table[this.hashing(key)] = value;
        console.log("set ->"+this.table[this.hashing(key)])

        this.totalkey.push(key);
    }

    get(key){
        return this.table[this.hashing(key)]
    }

    delete(key){ 
        this.table[this.hashing(key)] = null

        for(let i in this.totalkey){
            if(this.totalkey[i]== key){
                this.totalkey.splice(i,1);
                break
            }
        }

    }

    hashing(key){

        if(typeof(key)=="string"){
            return key.charCodeAt()*3%1000    
        }
        else if(typeof(key)=="number"){
            return 1000 % key
        }
        else{
            alert("key값는 문자열과 숫자만 가능합니다")
        }
    }

    size(){
        return this.totalkey.length
    }

}
