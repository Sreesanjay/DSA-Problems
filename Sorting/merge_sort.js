//implement merge sort
/**
 * recursive function to slice the array into half .
 * @param {number[]} arr 
 * @returns {number[]}
 */

const mergeSort =(arr) =>{
    if(arr.length == 1) return  arr;
    const middle = parseInt(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    const leftSort = mergeSort(left);
    const rightSort = mergeSort(right);
    return merge(leftSort,rightSort);
}
/**
 * 
 * @param {number[]} left 
 * @param {number[]} right 
 * @returns {number[]}
 */
const merge = (left,right) =>{
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex) , right.slice(rightIndex));
}
console.log(mergeSort([1,5,2,3,6])) // outputt => [1,2,3,5,6]