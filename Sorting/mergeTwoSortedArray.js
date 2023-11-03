/**
 * merge two sorted arrays one array is sorted in ascending order and the other is sorted in descending order
 * @param {number[]} arr1 sorted in ascending order
 * @param {number[]} arr2 sorted in descending order
 * @returns {number[]}
 */

const mergeSortedArrays = (arr1, arr2) =>{
    let result = [];
    let leftIndex = 0;
    let rightIndex = arr2.length-1; 
    while(leftIndex < arr1.length || rightIndex >= 0){
         if(arr1[leftIndex] < arr2[rightIndex]){
             result.push(arr1[leftIndex])
             leftIndex++;
         }else if(leftIndex >= arr1.length && rightIndex >=0){
             result.push(arr2[rightIndex])
             rightIndex--;
         }
         else if(leftIndex < arr1.length && rightIndex < 0){
             result.push(arr1[leftIndex])
             leftIndex++;
         }
         else {
             result.push(arr2[rightIndex]);
             rightIndex--;
         }
    }
    return result
 }
 console.log(mergeSortedArrays([10,20,30,40],[50,35,20,10]))