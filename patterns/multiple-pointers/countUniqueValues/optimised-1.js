/**
 * countUniqueValues
 * sorted array
 * count the unique values
 * can also negative values
 */

/**
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
const countUniqueValues = (arr) => {
  let res = {};

  for (let i of arr) {
    res[i] = ++res[i] || 1;
  }

  return Object.keys(res).length;
}

console.log(countUniqueValues([1,2,1,1]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-1,-2,1,1]));