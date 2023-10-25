/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * @param {String} s
 * @returns {String} 
 * input => hai
 * output =>iah
 */

var reverseString = function(s) {
    s=s.split('')
    for(let i = 0; i < s.length/2; i++){
        let temp = s[s.length-1 - i];
        s[s.length-1-i] = s[i];
        s[i]=temp;
    }
    return s.join('');
};

console.log(reverseString('hai'))