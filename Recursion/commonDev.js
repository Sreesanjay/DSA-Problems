/**
 * return the greatest common deviser of two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
let gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};