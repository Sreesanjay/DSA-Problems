class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = null;
        this.size = 0;
    }
    append(data){
        const node = new Node(data);
        if(this.size === 0){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    display(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
const arr = [1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    list.append(arr[i]);
}
list.display()
