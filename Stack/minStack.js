/**
 * leetcode 155 return the minimum value in the stack
 */
const MinStack = function() {
    this.stack  = []; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.top == 0) return null
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0];
    for(let i = 1; i< this.stack.length; i++){
        if(this.stack[i] < min) min = this.stack[i];
    }
    return min;
};