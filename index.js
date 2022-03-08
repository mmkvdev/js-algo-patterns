const binarySearch = (arr, x, low, high) => {
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low+high)/2);
  if (arr[mid] === x) {
    return true;
  } else if (arr[mid] > x) {
    return binarySearch(arr, x, low, mid - 1);
  } else if (arr[mid] < x) {
    return binarySearch(arr, x, mid + 1, high);
  }

  return -1;
}

let arr1 = [9, 14, 18, 21, 30];
let arr2 = [-9, -1, 0, 1, 2, 4];
console.log(binarySearch(arr1, 30, 0, arr1.length - 1));
console.log(binarySearch(arr2, 30, 0, arr2.length - 1));