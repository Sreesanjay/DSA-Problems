// function to implement insertion sort
/**
 * 
 * @param {number[]} arr 
 * @param {number} a 
 * @param {number} b 
 */
const swap = (arr, a, b) => {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}

/**
 * 
 * @param {number[]} arr  
 * @returns {number[]}
 */
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
console.log(insertionSort([5, 4, 2, 6, 10, 2]))