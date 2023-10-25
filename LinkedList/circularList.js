/**
 * Implementation of circular linked list and its operations
 */

 class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
 }

 class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //function to append values to the list
    append(value){
        const node = new Node(value);
        if(this.size === 0) {
            this.head = node;
            node.next = node;
        }else{
            let current = this.head;
            for(let i =1; i<this.size; i++){ 
                current  = current.next;
            }
            current.next = node;
            node.next = this.head;
        }
        this.size++;
    }

    // preppending a node in the list 
    preppend(data){
        console.log("------------")
        const node = new Node(data);
        if(this.size === 0){
            this.head = node;
            node.next = node;
        }else{
            let current = this.head;
            for(let i = 1; i < this.size; i++){
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // function to display list
    display(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
 }

 const list = new LinkedList();
 list.append(10);
 list.append(20)
 list.preppend(30);
 list.preppend(40)
 list.display()