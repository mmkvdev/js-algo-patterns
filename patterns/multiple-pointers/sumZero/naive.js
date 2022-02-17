/**
 * Implement a function which accepts a sorted array of integers and we need to find the first pair that sums to zero or undefined if it's not possible.
 */


/**
 * Naive Solution 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const sumZero = function (arr) {
  for (let i = 0; i < arr.length;i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));