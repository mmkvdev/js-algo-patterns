/*
* @function recursiveRange
* @parameter num
* @returns adds up all the numbers from 0 to num
* example - [ 1, 4, 5 ] -> 20
*/


function recursiveRange (num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(7));
console.log(recursiveRange(5));
console.log(recursiveRange(17));
console.log(recursiveRange(15));
console.log(recursiveRange(0));