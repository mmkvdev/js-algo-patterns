/**
 * Binary Search - Recursive Approach
 */

const binarySearch = function (arr, low, high, searchValue) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === searchValue) {
      return mid;
    }

    if (arr[mid] > searchValue) {
      return binarySearch(arr, low, mid-1, searchValue);
    }

    return binarySearch(arr, mid+1, high, searchValue);
  }

  return -1;
}

const a = [3,4,5,6];
console.log(binarySearch(a, 0, a.length - 1, 6));