/*
 * Factorial of a number
 * Time Complexity - O(n)
 * Space Complexity - O(1)
*/
const factorial = (num) => {
  let res = 1;
  while (num) {
    res *= num;
    num--;
  }
  return res;
}

console.log(factorial(7));
console.log(factorial(17));