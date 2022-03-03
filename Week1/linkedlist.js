//linked list
//삽입,삭제는 빠르나 검색이 느림
//array는 메모리에 순서대로 저장된다면 얘는 군데군데 있음

/*
구현해야할 method
add()
set()
remove()
size()
clear()
get()
contains()
indexOf()
*/

class LinkedList{ 

    constructor(array=[]) { 
        this.size = 0
        this.head = {}
        if( array.length != 0){
            for(let i in array){
            this.add(array[i])
            }
        }
    }

    //전체 리스트 출력
    print(){
        let arr=[]
        let nn= this.head
        while(true){
            arr.push(nn.getValue())
            if(nn.isLast){
                return console.log(arr);                
            }
            nn=nn.next
        }
    }

    size(){
        return this.size
    }

    //List에 추가하기
    add(value,index){    //인자 순서 애매모호

        if(index == undefined){   //index를 안 지정해줬을 때
            let node = new Node(value)
            this.size++;

            if(this.size == 1){
                this.head = node;
            }
            else{
                let nn = new Node();
                for(let i=0;i<this.size;i++){
                    if (i==0){
                        nn = this.head;
                    }
                    else{
                        if(nn.isLast == true){
                            nn.next=node;
                            nn.isLast=false;
                            break;
                        }
                        else{
                            nn=nn.getNext();
                        }
                    }
                }
            }
        }

        else{
        
            let save=this.get(index-1).next;
            let node = new Node(value,save);
            this.get(index-1).next=node;
            if(index==this.size){
                this.get(index).isLast=true;
            }
            this.size++;
            return this.print()    

        }
    }

    //삭제하기
    
    remove(index=0){
        if(index>this.size){
            alert("똑바로 입력해라")
            return
        }
        this.size--
        let pre = this.get(index-1)
        if( this.get(index).isLast){
            pre.isLast = true;
            pre.next = null;
        }
        else{
            pre.next = this.get(index+1);
            if(index==0){
                this.head = this.get(index+1);
            }
        }
        this.print();
    }

    removeFirst(){
        this.head = this.get(1);
        this.size--;
        this.print();
    }
    removeLast(){
        let pre = this.get(this.size-2)
        pre.isLast = true;
        pre.next = null;

        this.size--;
    }

    clear(){
        this.head = null
    }

    //index에 위치하는 값 가져오기
    get(index){
        let nn= this.head
        for(let i=0;i<index;i++){
            nn=nn.next
        }
        return nn;
    }

    //존재하는 지 여부
    contains(value){}

    //위치
    indexOf(value){}

}

class Node{

    //생성자 함수
    constructor(value,next) { 
        this.value = value; 
        if(next==undefined){
            this.isLast= true;
        }
        else{
            this.next = next;
            this.isLast= false;
        }
    }
    
    setNext(next){
        this.next = next
        this.isLast= false;  
    }

    getValue(){
        return this.value;
    }

    getNext(){
        return this.next;
    }
    setValue(next){
        this.next=next;
    }

}



