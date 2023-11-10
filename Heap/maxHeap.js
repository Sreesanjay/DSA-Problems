class MaxHeap{
    constructor(){
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

    add(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }
    remove(){
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown(0);
    }
    removeValue(value){
        let index = this.heap.indexOf(value);
        if(index === -1)return;
        this.heap[index] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown(index);
        this.heapifyUp(index)
    }
    heapifyDown(index){
        while(this.hasLeftChild(index)){
            let largest = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.heap[largest] < this.heap[this.getRightChildIndex(index)]){
                largest = this.getRightChildIndex(index);
            }
            if(this.heap[index] > this.heap[largest]){
                break;
            }else{
                this.swap(index,largest);
            }
            index = largest;
        }
    }
    heapifyUp(index){
        let value = this.heap[index];
        let i = index;
        while(i > 0){
            let current = i;
            i = (i - 1 )/ 2;
            if(this.heap[i] < value){
                let temp = this.heap[i];
                this.heap[i] = this.heap[current];
                this.heap[current] = temp;
            }else{
                break;
            }
            current = i;
        }
    }
}
const maxheap = new MaxHeap();
maxheap.add(30);
maxheap.add(20);
maxheap.add(25);
maxheap.add(10);
maxheap.add(15);
maxheap.add(22);
maxheap.add(8);
console.log(maxheap.heap);
maxheap.removeValue(25);
console.log(maxheap.heap);
