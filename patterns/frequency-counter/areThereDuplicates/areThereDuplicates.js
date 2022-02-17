// areThereDuplicates


/*
 * Time Complexity: O(n) 
 * Space Complexity: O(n)
*/
const areThereDuplicates = function (...arr) {
  if (!arr || arr.length < 1) {
    return null;
  }
  let res = {};
  for (let i of arr) {
    res[i] = ++res[i] || 1;
    if (res[i] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates('a','b','c','a'));
console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));