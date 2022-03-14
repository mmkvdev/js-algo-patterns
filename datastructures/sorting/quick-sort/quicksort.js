/**
 * Quick Sort
 * @timecomplexity { O(n logn) (best case) }
 * @spacecomplexity { O(log(n)) }
 */

function pivot (arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    return [array[i], array[j]] = [array[j], array[i]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx; 
}

function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
     let pivotIndex = pivot(arr, left, right);
     quickSort(arr, left, pivotIndex - 1);
     quickSort(arr, pivotIndex + 1, right); 
  }
  return arr;
}

let arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(arr));
console.log(quickSort([17, 11, 12, 18, 4]));
console.log(quickSort([-3, -12, -11, 0, 1]));