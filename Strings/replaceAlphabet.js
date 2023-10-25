/**
 * Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.
 * @param {string} str - The input string to be transformed.
 * @param {number} pos - The number by which to shift each character in the string.
 * @returns {string} - The modified string with characters shifted by 'pos'.
 */
const replace = (str, pos) => {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        let chCode = str[i].charCodeAt(0);
        str[i] = String.fromCharCode(chCode + pos);
    }
    return str.join('');
}

console.log(replace('hello', 2)); // Output: "jgnnq"
