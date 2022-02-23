/*
* @function recursiveRange
* @parameter num
* @returns sum of range from 0 to num
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