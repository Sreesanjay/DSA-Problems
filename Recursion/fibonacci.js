/**
 * 
 */

const fib =(number) => {
    if(number == 1) return [0,1];
    let arr = fib(--number);
    arr.push(arr[arr.length - 2]+arr[arr.length - 1]);
    return arr;
}
console.log(fib(5))