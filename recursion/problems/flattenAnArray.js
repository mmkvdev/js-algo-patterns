/*
* @function flattten
* @parameter arr
* @returns a new array what's completely flatten
*/

const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, [2,3], 4,5]));
console.log(flatten([1, [2, [3,4], [[5]]]]));