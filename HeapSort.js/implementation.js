class Heap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    getLeftChildIndex(i) {
        return i * 2 + 1
    }
    getRightChildIndex(i) {
        return i * 2 + 2
    }
    hasLeftChild(i) {
        return i * 2 + 1 < this.heap.length;
    }
    hasRightChild(i) {
        return i * 2 + 2 < this.heap.length;
    }
    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    insert(data) {
        this.heap.push(data);
        this.heapifyUp(this.heap.length - 1);
    }
    remove(){
        const item = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop()
        this.heapifyDown(0)
        return item;
    }
    heapifyDown(index){
        while(this.hasLeftChild(index)){
            let smallest = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.heap[smallest] > this.heap[this.getRightChildIndex(index)]){
                smallest = this.getRightChildIndex(index)
            }
            if(this.heap[index] < this.heap[smallest]){
                break;
            }
            else{
                this.swap(index,smallest);
                index = smallest;
            }
        }
    }
    heapifyUp(index) {
        let value = this.heap[index];
        let i = index;
        while (i > 0) {
            let current = i;
            i = (i - 1 )/ 2;
            if (this.heap[i] > value) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[current];
                this.heap[current] = temp;
            } else {
                return;
            }
        }
    }
}
const heap = new Heap();
heap.insert(5)
heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(20);
heap.insert(25);
heap.insert(30);
console.log(heap.heap);
let arr = [];
let length = heap.heap.length;
for(i = 0; i< length; i++){
    arr.push(heap.remove()); 
}
console.log(arr);