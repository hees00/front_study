// Hashtable은 key에 null을 허용하지 않지만, HashMap은 key에 null을 허용

class myHashtable{
    table = new Array(1000)
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
        this.table[this.hashing[key]] = null

        for(let i in this.totalkey){
            
            if(this.totalkey[i]== key){
                this.totalkey.splice(i,1);
                break
            }
        }

    }

    hashing(key){
        return key.charCodeAt()*3%1000
    }

}
