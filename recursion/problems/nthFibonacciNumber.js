/*
* @function fibonacciSequence
* @parameter num
* @returns nth fibonacci number
* example - [ 1, 4, 5 ] -> 20
*/

function fibonacciSequence(num) {
  if (num <= 2) {
    return 1;
  }
  return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
}

console.log(fibonacciSequence(3));
console.log(fibonacciSequence(4));
console.log(fibonacciSequence(5));
console.log(fibonacciSequence(7));