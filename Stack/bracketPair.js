/**
 * Check for Balanced Brackets in an expression (well-formedness)
 * input => "[()]{}{[()()]()}”
 * output => balanced
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
 * function to check the brackets are balanced or not
 * @param {String} brackets 
 * @returns {String} balanced/unbalanced
 */
const isBalanced =(brackets) => {
    let array = brackets.split('');
    let stack = new Stack();
    let pair = {
        '{':'}',
        '[':']', 
        '(':')'
    }
    for(let bracket of array) {
        if(bracket === '{' || bracket === '(' || bracket === '['){
            stack.push(bracket);
            continue;
        }else{
            if(!stack.top) return 'unbalanced'
            let opening = stack.pop();
            if(pair[opening] != bracket) return'unbalanced'
        }
    }
    return 'balanced'
}
console.log(isBalanced('[()]{}{[{}()()]()}'))