/*
* Sliding Window Pattern
*/

// maxSubArraySum
// Naive Approach
// Time Complexity - O(n^2)
// Space Complexity - O(1)

const maxSubArraySum = (arr, n) => {
  if (!arr || !n) {
    return null;
  }

  let sum = 0, temp;
  for (let i = 0 ; i < arr.length - n + 1; i++) {
    temp = 0;
    for (let j =0 ; j < n ; j++) {
      temp += arr[i+j];
    }

    if (sum < temp) {
      sum = temp;
    }
  }

  return sum;
}


console.log(maxSubArraySum([1,2,5,2,8,1,5], 4));