/**
 * leetcode 1381 increase values in the stack within a range from bottom
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = []
    this.max = maxSize;
    this.top = 0;
 };
 
 /** 
  * @param {number} x
  * @return {void}
  */
 CustomStack.prototype.push = function(x) {
     if(this.top === this.max) return
     this.stack.push(x);
     console.log(this.stack)
     this.top++;
     
 };
 
 /**
  * @return {number}
  */
 CustomStack.prototype.pop = function() {
     if(this.top === 0) return -1;
     let topVal = this.stack[this.top-1]
     this.stack.pop();
     this.top--;
     return topVal
 };
 
 /** 
  * @param {number} k 
  * @param {number} val
  * @return {void}
  */
 CustomStack.prototype.increment = function(k, val) {
     if(k > this.top) k = this.top
     for(let i = 0; i < k ; i++){
         this.stack[i] += val
     }
 };
 
 /** 
  * Your CustomStack object will be instantiated and called as such:
  * var obj = new CustomStack(maxSize)
  * obj.push(x)
  * var param_2 = obj.pop()
  * obj.increment(k,val)
  */