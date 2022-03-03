//중복 안됨

/*
add(value)
deleted(value)
has(value)
clear()
size
*/

class mySet{
    array=[]

    constructor(array=[]) { 
        for ( let i in array){
            let isSame=false
            for(let j in this.array){
                if(array[i] == this.array[j]){
                    isSame=true
                    break;
                }
            }
            if(!isSame){
                this.array.push(array[i])
            }
        }
        this.size = this.array.length
    }

    print(){
        return this.array
    }

    add(value){

        if(this.has(value)){
            return this.print()
        }
        else{
            this.array.push(value)
            this.size = this.array.length
            return this.print()
        }
    }

    has(value){
        for(let j in this.array){
            if(value==this.array[j]){
                return true
            }
        }
        return false
    }

    delete(value){
        for(let i in this.array){
            if(value==this.array[i]){
                this.array.splice(i,1)
                this.size = this.array.length
                return true;
            }
        }
        return false;
    }

    clear(){
        this.array=[];
        this.size = this.array.length
    }


}