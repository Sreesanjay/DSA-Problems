/**
 * function to delete value from an array
 * @param {Array} array 
 * @param {any} value - value to delete 
 * @return {Array} array - deleted array
 * input => [1,2,3,4,5] , 3
 * output => [1,2,4,5]
 */

let deleteValue = (array, value)=> {
    for(let i=0; i<array.length;i++) {
        if(array[i] === value){
            for(let j=i; j<array.length-1; j++){
                array[j] = array[j+1];
            }
            array.pop();
        }
    }
    return array;
}
console.log(deleteValue([1,2,3,4,5],3));
