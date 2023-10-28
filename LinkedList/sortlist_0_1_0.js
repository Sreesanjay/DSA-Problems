//linked list have 0s,1s and 2s . sort the list

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(item){
        const node = new Node(item);
        if(this.size === 0){
            this.head = node
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
            console.log(current.data)
            current = current.next;
        }
        console.log('-------------------')
    }
    sort(){
        let arr=[0,0,0];
        let current = this.head;
        while(current){
            arr[current.data] ++;
            current = current.next;
        }
        let i = 0;
        current = this.head;
        while(current){
            if(arr[i]>0){
                current.data = i;
                arr[i]--;
                current = current.next;
            }else{
                i++;
            }
        }
    }
}
const list = new List();
list.append(1)
list.append(0)
list.append(2)
list.append(1)
list.append(0)
list.append(1)
list.append(2)
list.display();
list.sort();
list.display();
