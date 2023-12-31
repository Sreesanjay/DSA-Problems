/**
 * function to implement quick sort
 * @param {number[]} arr 
 * @returns {number[]}
 */
const quickSort = (arr) =>{
    if(arr.length <= 1) return arr; 
    let left = [];
    let right = [];
    const pivot = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat(pivot,quickSort(right))
}

console.log(quickSort([1,4,2,6,2])) // output => [1,2,2,4,6]