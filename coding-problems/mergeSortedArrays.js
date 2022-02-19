/*
  * Merge Sorted Arrays
  * Time Complexity - O(n)
  * Space Complexity - O(n)
*/

const mergeSortedArrays = (arr1, arr2) => {
  if (!arr1 || !arr2) {
     return false;
  }
  let i = 0, j = 0, res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      res.push(arr2[j]);
      i++;
      j++;
    }
  }

  if (i < arr1.length) {
    res.push(...arr1.slice(i));
  } else if (j < arr2.length) {
    res.push(...arr2.slice(j));
  }

  return res;
}

console.log(mergeSortedArrays([0,3,6,9], [2,7,9,11,14]));
console.log(mergeSortedArrays([-70,-1,0,1,4], [-90, -7, 1, 2, 3]));