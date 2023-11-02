class Stack{
    constructor(){
        this.arr =[]
    }
    push(data){
        this.arr.push(data)
    }
    pop(){
       return this.arr.pop();
    }
}
class Queue{
    constructor(){
        this.s1= new Stack();
        this.s2= new Stack();
    }
    enqueue(data){
        while(this.s1.arr.length !== 0){
            this.s2.push(this.s1.pop())
        }
        this.s1.push(data);
        while(this.s2.arr.length!==0){
            this.s1.push(this.s2.pop())
        }
    }
    dequeue(){
        if(this.s1.arr.length === 0)  return 'queue is empty'
        return this.s1.pop();
    }
}

const queue =  new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.s1.arr);
queue.dequeue();
console.log(queue.s1.arr);