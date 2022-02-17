/**
 * Binary Search - Iterative Approach
 */

const binarySearch = function (arr, searchValue) {
  let low = 0, high = arr.length - 1, mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === searchValue) {
      return mid;
    }
    if (arr[mid] > searchValue) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4], 4));