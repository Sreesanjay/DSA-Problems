// function to implement selection sort

/**
 * funcrion to swap two positions
 * @param {number[]} array 
 * @param {number} a
 * @param {number} b
 */
let swap = (arr, a, b) => {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}

/**
 * function to implement selection sort
 * @param {number[]} arr 
 * @returns {number[]}
 */

let selectionSort = (arr) => {
    let minIndex = 0;
    for(let i = 0; i < arr.length -1; i++) {
        minIndex = i;
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) minIndex = j;
        }
        swap(arr, i, minIndex);
    }
    return arr;
}
console.log(selectionSort([2,1,4,7,4,3])) // output => [1,2,3,4,4,7]