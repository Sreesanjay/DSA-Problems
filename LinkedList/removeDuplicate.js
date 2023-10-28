class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node

        } else {
            let current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
        return
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

    removeDuplicates() {
        let current = this.head;
        let value = current.data
        let prev = null;
        while(current) {
            prev=current;
            current = current.next;
            
        }
    }
}

const list = new LinkedList();
list.append(10);
list.append(10);
list.append(20);
list.append(30);
list.append(30);
list.display()
