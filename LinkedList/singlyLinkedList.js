/**
 * Singly linked list and its various operations
 * preppend()
 * @param {any} data - data to be preppended in to the node
 * 
 * append()
 * @param {any} data - data to be appended in to the node
 * 
 * display() 
 * 
 * insert()
 * @param {any} data - data to be insert in the node
 * @param {number} index - position to crate node
 * 
 * insertAfter() - insert a node after a particular value
 * @param {any} data - data to be inserted in the node
 * @param {any} value - value of the node to check
 * 
 * remove()
 * @param {number} index - position of the node to be removed
 * 
 * removevalue()
 * @param {any} value - value to be removed
 * 
 * deleteprevious() - delete all the previous nodes of the value
 * @param {number} value - value to be search
 * 
 * search()
 * @param {any} key - value to search
 * 
 * reverse()
 *
 * 
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }

    //prepend
    preppend(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            node.next = null;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
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
        }
        node.next = null;
        this.size++
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
        console.log("--------------------------")
    }

    //inset into position
    insert(data, index) {
        if (index < 0 || index >= this.size) {
            return 'null'
        }
        if (index === 0) {
            this.preppend(data);
        } else {
            const node = new Node(data);
            let prev = this.head;
            for (let i = 1; i < index; i++) {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    //insert afet index
    insertAfter(data, value) {
        const node = new Node(data);
        let current = this.head;
        while (current) {
            if (current.data == value) {
                node.next = current.next;
                current.next = node;
                this.size++;
                break;
            }
            current = current.next;
        }
    }

    //remove index
    remove(index) {
        if (index < 0 || index >= this.size) {
            return 'null'
        }
        if (index == 0) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 1; i < index; i++) {
                prev = prev.next;
            }
            prev.next = prev.next.next;
        }
        this.size--
    }

    //remove value
    removevalue(value) {
        if (this.isEmpty()) {
            console.log('empty list');
            return
        }
        let prev = this.head;
        while (prev) {
            if (this.head.data == value) {
                this.head = this.head.next;
                this.size--;
            }
            else if (prev.next?.data == value) {
                prev.next = prev.next.next
                this.size--;
            } else {
                prev = prev.next;
            }
        }
    }

    //delete previous
    deleteprevious(value) {
        let current = this.head;
        while (current) {
            if (this.head.value) {
                console.log('no previous node')
            }
            if (this.head.next.data == value) {
                this.head = current.next
                this.size--;
            }
            else if (current.next?.next?.data === value) {
                current.next = current.next.next;
                this.size--;
            }
            current = current.next;

        }
    }
    //searching
    search(key) {
        if (this.isEmpty()) {
            console.log('empty list');
            return
        }
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            if (current.data == key) {
                return 'value  find at index ' + i
            }
            current = current.next;
        }
        return 'no such value'
    }

    //reverse space - O(1) , time - O(n)
    reverse() {
        if (this.isEmpty()) {
            console.log('empty list');
            return
        }
        let current = this.head;
        let prev = null
        while (current) {
            let next = current.next
            current.next = prev
            prev = current;
            current = next
        }
        this.head = prev;
    }
}


let list = new LinkedList();
list.append(10)
list.append(20)
list.append(20)
list.append(40)
list.append(20)
// list.insertAfter(50, 40)
// list.deleteprevious(20)
// list.insert(50,1)
// list.remove(0)
// list.removevalue(20)
// list.reverse();
// list.display()
// console.log(list.search(20))

