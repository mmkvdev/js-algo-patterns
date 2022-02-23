/*
* @function productArray
* @parameter arr
* @returns product of all the elements in an array
* example - [ 1, 4, 5 ] -> 20
*/

const productArray = (arr) => {
  if (arr.length == 0) {
    return 1;
  }
  return arr[0] * productArray(arr.slice(1));
}

console.log(productArray([6,4,5]));