class MinHeap {
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
    add(data) {
        this.heap.push(data);
        return this.heapifyUp(this.heap.length - 1)
    }
    remove() {
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0)
    }
    removeValue(value) {
        let index = this.heap.indexOf(value);
        if(index === -1) return 
        this.heap[index] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyUp(index);
        this.heapifyDown(index)
    }
    heapifyUp(index) {
        const value = this.heap[index]
        let i = index;
        while (i > 0) {
            let current = i;
            i = this.getParentIndex(i)
            if (this.heap[i] > value) {
                this.swap(current, i);
                current = i;
            } else {
                return;
            }
        }

    }
    heapifyDown(index) {
        while(this.hasLeftChild(index)){
            let smallest = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.heap[smallest] > this.heap[this.getRightChildIndex(index)]){
                smallest = this.getRightChildIndex(index);
            }
            if(this.heap[index] < this.heap[smallest]){
                 break;
            }else{
                this.swap(index, smallest);
            }
            index = smallest;
        }
    }

}

const minheap = new MinHeap()
minheap.add(5);
minheap.add(10);
minheap.add(20);
minheap.add(15);
minheap.add(20);
minheap.add(25);
minheap.add(30);
console.log(minheap.heap)
minheap.removeValue(20);
console.log(minheap.heap)