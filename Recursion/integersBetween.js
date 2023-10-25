/**
 * function to return all the integers between the range
 * @param {number} start 
 * @param {number} end 
 * @returns {number[]}
 */

const print = (start, end) => {
    if(end - start === 2){
        return [start+1]
    }
    let list = print(start,end-1);
    list.push(end-1);
    return list

}
console.log(print(1,9));