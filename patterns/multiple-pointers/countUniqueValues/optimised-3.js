/**
 * countUniqueValues
 * sorted array
 * count the unique values
 * can also negative values
 */


/**
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
const countUniqueValues = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
      } else if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
  }
  /* while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  } */

  return arr.slice(0,i+1).length;
  
}

console.log(countUniqueValues([0,1,2,3])); // 4
console.log(countUniqueValues([1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-1,-2,1,1])); // 3