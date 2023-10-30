//function to implement buble sort.

/**
 * function to swap two position
 * @param {number[]} arr 
 * @param {number} a index 1
 * @param {number} b index 2
 */

let swap = (arr, a, b) => {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}

/**
 * function for sorting an array using buble sort
 * @param {number[]} arr 
 * @returns {number[]} 
 */

let bubleSort = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
    }
    return arr
}

console.log(bubleSort([4, 1, 5, 3, 6, 8, 3])) //output => [1,3,3,4,5,6,8]