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
  let temp = -Infinity, count = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== temp) {
      temp = arr[i];
      count++;
    }
  }

  return count;
}

console.log(countUniqueValues([1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-1,-2,1,1]));