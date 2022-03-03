// object는 key값이 string Map은 다 될 수 있음

/*
구현할 메소드
set
get
delete
clear
*/

class myMap{
    arrays = new Array();
    constructor(array=[]) { 
        for ( let i in array){
            let mapElement = {
                key: array[i][0],
                value: array[i][1]
            }
            arrays.push(array[i])
        }
    }

    print(){
        let result="{\n"
        for(let i = 0; i < this.arrays.length ; i++){
            result+= this.arrays[i]["key"]+" : "+ this.arrays[i]["value"];
            if(i != this.arrays.length-1){
                result+=",";
            }
        }
        result+="\n}"
        return result
    }

    set(mkey,mvalue){
        let mapElement = {
            key: mkey,
            value: mvalue
        }
        this.arrays.push(mapElement);
    }

    get(key){
        for(let i in this.arrays){
            if(key==this.arrays[i].key){
                return this.arrays[i].value
            }
        }
        return undefined
    }

    has(key){
        for(let i in this.arrays){
            if(key==this.arrays[i].key){
                return true
            }
        }
        return false
    }

    clear(){
        this.arrays=[]
    }
}

