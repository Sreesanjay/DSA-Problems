/**
 * queue using array
 * methods
 * enqueue() - insert element to the queue
 * dequeue() - remove element from the queue
 * peek() - Acquires the data element available at the front node of the queue without deleting it.
 * rear() – This operation returns the element at the rear end without removing it.
 * size(): This operation returns the size of the queue i.e. the total number of elements it contains.  
 */

class Queue{
    constructor(){
        this.element = [];
    }

    /**
     * @returns {boolean} true if the queue is empty
    */

    isEmpty(){
        return this.element.length === 0
    }
    /**
     * add elements to the queue
     * @param {any} data 
     */
    enqueue(data){
        this.element.push(data);
    }
    dequeue(){
        if(this.isEmpty()) return "queue is empty"
        return this.element.shift();
    }
    peek(){
        if(this.isEmpty()) return "queue is empty"
        return this.element[0]
    }
    rear(){
        if(this.isEmpty()) return "queue is empty"
        return this.element[this.element.length-1]
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.peek ())