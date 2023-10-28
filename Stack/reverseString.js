/**
 * function to reverse a string using stack 
 * input => hello
 * output =>olleh
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    /**
     * push item into stack
     * @param {any} value 
     */
    push(value) {
        const node = new Node(value);
        if (!this.top) this.top = node;
        else {
            node.next = this.top
            this.top = node;
        }
    }
    /**
     * pop item from stack
     * @returns {string} 
     */
    pop() {
        if (!this.top) return 'stack underflow!';
        const popData = this.top.data;
        this.top = this.top.next;
        return popData
    }
}

/**
 * function to reverse the string
 * @param {String} str 
 * @returns {String} returns reversed string
 */

const reverse = (str) => {
    const stack = new Stack();
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
    return arr.join('')
}

let string = 'hellow world';
console.log(reverse(string))