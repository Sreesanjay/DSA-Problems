/**
 * push()
 * @param {any} item item to push onto the stack
 * 
 * pop()
 * @return {any} poped data
 * 
 * peak()
 * @return {any} stack top data
 */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    push(item){
        const node = new Node(item);
        if(!this.top){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }
    pull(){
        if(!this.top) return "stack underflow";
        let stackTop = this.top.data;
        this.top = this.top.next;
        this.size--;
        return stackTop;

    }
    peak(){
        if(!this.top) return "stack underflow";
        return this.top.data;
    }
    display(){
        let current = this.top;
        while(current){
            console.log(current.data)
            current = current.next;
        }

    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.pull()); // output => 40
console.log(stack.peak())  // output => 30