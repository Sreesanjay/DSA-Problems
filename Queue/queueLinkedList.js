/**
 * queue using linked list
 */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class QueueList{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(data){
        const node = new Node(data)
        if(this.rear==null){
            this.front= node;
        }else{
            this.rear.next = node;
        }
        this.rear = node;
    }

    dequeue(){
        if(!this.front) return 'empty queue'
        const frontNode = this.front;
        this.front = this.front.next;
        if(!this.front) this.rear = null;
        return frontNode.data;
    }
    peek(){
        if(!this.front) return 'empty queue'
        return this.front.data;
    }

}

const queue = new QueueList();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.peek())
console.log(queue.dequeue())