/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @timecomplexity - O(n)
 * @spacecomplexity - O(n)
*/

function commonElements(arr1, arr2, arr3){
  let n1 = arr1.length;
  let n2 = arr2.length;
  let n3 = arr3.length;
  let i = 0, j = 0, k = 0, common = [];
  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      common.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return common.sort((a,b) => a - b);
}

console.log(commonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]));
console.log(commonElements([1, 5, 10, 40], [6, 7,100], [3, 4, 15,30, 70, 120]));
console.log(commonElements([1,2,3], [4,5,6], [7,8,9]));
console.log(commonElements([1,-2,3], [-4,-5,6], [7,-8,9]));