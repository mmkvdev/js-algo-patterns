/**
 * Quick Sort
 * @timecomplexity { O(n logn) (best case) }
 * @spacecomplexity { O(log(n)) }
 */

const swap = (arr, left, right) => {
  return [arr[left], arr[right]] = [arr[right], arr[left]];
}
const partition = (arr, left, right) => {
  let pivot = arr[(left / right) / 2];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

const quickSort = (arr, left, right) => {
  let index = partition(arr, left, right);
  if (left < index - 1) {
    quickSort(arr,left, index-1);
  }
  if (index < right) {
    quickSort(arr,index,right);
  }
}

console.log(quickSort([8,9,1,-3]));