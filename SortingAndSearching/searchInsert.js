/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number}
 * input => [1,3,5,6] , 5
 * output => 2
 */
let searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target || nums[i]>target){
            return i;
        }
        else if(nums[i+1]==undefined){
            return ++i
        }
        else if(nums[i+1]!=target && nums[i]>=target){
           return i;
        }
    }
};