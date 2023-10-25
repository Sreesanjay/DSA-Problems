/**
 * You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
 * @param {number[]} nums
 * @returns {number} 
 * input => [1,2,3,4,2,3]
 * output => 5
 */

let sumOfUnique = function(nums) {
    let set = new Set(nums);
    let sum=0;
    for(let i = 0; i<nums.length;i++){
        if(set.has(nums[i])){
            sum+=nums[i];
            set.delete(nums[i])
        }else{
            let check = set.has(-nums[i])
            if(check==false){
                 sum -= nums[i];
                 set.add(-nums[i])
            }
           
        }
    }
    return sum
};
