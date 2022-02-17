/*
* Sliding Window Pattern
*/

// maxSubArraySum
// Optimsed Approach
// Time Complexity - O(n^2)
// Space Complexity - O(1)

const maxSubArraySum = (arr, num) => {
  if (!arr || !num || num > arr.length) {
    return null;
  }

  let maxSum = 0, tempSum;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j-num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}


console.log(maxSubArraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3));