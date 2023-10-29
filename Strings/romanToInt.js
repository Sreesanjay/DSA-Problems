/**
 * leetcode 13 Roman number to integer convertor
 * @param {string} s 
 * @returns {number}
 */

var romanToInt = function(s) {
    let value = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let num = 0;
    for(let i = s.length-1 ; i >= 0; i--){
        if(value[s[i]] < value[s[i+1]]){
            num = num - value[s[i]];
        }
        else{
            num = value[s[i]] + num;
        }
    }
    return num
};