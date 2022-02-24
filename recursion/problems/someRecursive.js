/*
* @function someRecursive
* @parameter arr []
* @parameter callback () => {} 
* @returns atmost one element in the arr should return true else return false
*/

const someRecursive = (arr, callback) => {
  if (arr.length == 0) {
    return false;
  }
  if (callback(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), callback);
}

const isOdd = val => val %2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd))