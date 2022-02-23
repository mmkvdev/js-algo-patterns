/*
* @function productArray
* @parameter arr
* @returns product of all the elements in an array
* example - [ 1, 4, 5 ] -> 20
*/

const productArray = (arr) => {
  let pro = 1;

  const inner = (input) => {
    if (input.length == 0) {
      return;
    }
    pro *= input[0];
    inner(input.slice(1));
  }
  inner(arr);
  return pro;
}

console.log(productArray([6,4,5]));