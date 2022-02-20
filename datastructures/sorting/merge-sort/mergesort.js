/**
 * Merge Sort
 * time complexity - O(n logn)
 * space complexity - O(n)
 */

const merge = function (list1, list2) {
  let result = [], i = 0, j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] > list2[j]) {
      result.push(list2[j++]);
    } else {
      result.push(list1[i++]);
    }
  }

  return result.concat(list1.slice(i),list2.slice(j));
}

const mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0,mid);
  let secondHalf = arr.slice(mid, arr.length);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([11,6,4,65,35]));