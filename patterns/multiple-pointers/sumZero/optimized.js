/**
 * Implement a function which accepts a sorted array of integers and we need to find the first pair that sums to zero or undefined if it's not possible.
 */


/**
 * Optimised Solution 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const sumZero = function (arr) {
  let first = 0;
  let last = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[first] + arr[last] === 0) {
      return [arr[first], arr[last]];
    } else if (arr[first] + arr[last] < 0) {
      first += 1;
    } else {
      last -= 1;
    }
  }
  return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([1,2,3,4]));
console.log(sumZero([-4,-3,-1,0,2,10]));


/**
 * the below algorithm checks for zero-fail-safe - the time and space Complexity is the same as the above approach
 */
const sumZeroII = function (arr) {
  let first = 0;
  let last = arr.length - 1;
  let sum = 0;
  while (first < last) {
    sum = arr[first] + arr[last];
    if (sum == 0) {
      return [arr[first],arr[last]]
    } else if (sum > 0) {
      last--;
    } else {
      first++;
    }
  }
}

console.log('much more optimized approach');
console.log(sumZeroII([-3,-2,-1,0,1,2,3]));
console.log(sumZeroII([1,2,3,4]));
console.log(sumZeroII([-4,-3,-1,0,2,10]));