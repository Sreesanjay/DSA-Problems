/**
 * function to find the factorial of a number
 * @param {number} x 
 * @returns {number}
 */
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
