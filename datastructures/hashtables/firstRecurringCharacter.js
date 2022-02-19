/* first recurring character
* Time Complexity - O(n)
* Space Complexity - O(n)
*/


const firstRecurringCharacter = (arr) => {
  if (!arr || arr.length < 1) {
    return null;
  }
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in res) {
      return arr[i];
    }
    res[arr[i]] = ++res[arr[i]] || 1;
  }

  return undefined;
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([-1, 1, 3, -70, -89, -70]));
console.log(firstRecurringCharacter([]));
console.log(firstRecurringCharacter([1,2,3,4]));