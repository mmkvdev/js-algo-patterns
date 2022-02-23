/*
* @function fibonacciSequence
* @parameter num
* @returns adds up all the numbers from 0 to num
* example - [ 1, 4, 5 ] -> 20
*/

function fibonacciSequence(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
}

console.log(fibonacciSequence(3));
console.log(fibonacciSequence(4));
console.log(fibonacciSequence(5));
console.log(fibonacciSequence(7));