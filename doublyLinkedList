
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    //append 
    append(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        this.size++;

    }

    //prepend
    prepend(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let current = this.head;
            current.prev = node;
            node.next = current;
            this.head = node;
        }
        this.size++;
    }

    //display
    display() {
        if (this.isEmpty()) {
            console.log("empty list");
            return
        }
        let current = this.head;
        while (current) {
            if (current.prev) {
                console.log(current.data);
            }
            current = current.next;
        }
        return
    }
}

const list = new LinkedList();
