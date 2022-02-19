// minSubArrayLen
// Time Complexity - O(n)
// Space Complexity - O(1)
const minSubArrayLen = (arr, n) => {
  if (!arr) {
    return null;
  }

  let total = 0;
  let minLen = Infinity;
  let end = 0;
  let start = 0;

  while (start < arr.length) {
    if (total < n && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= n) {
      minLen = Math.min(minLen, end-start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // [4,3]
console.log(minSubArrayLen([2,1,6,5,4], 9)); // [4,5]
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // [62]