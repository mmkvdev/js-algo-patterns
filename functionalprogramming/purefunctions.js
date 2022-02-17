// Pure Functions

// No Side Effects

// input --> output

const array = [1,2,3];

function removeLastItemFromanArray(arr) {
  const newArrayItem = [].concat(array);
  newArrayItem.pop();
  return newArrayItem;
}

function addItemToanArray(arr) {
  return arr.map(item => item*2);
}

const array2 = removeLastItemFromanArray(array);
const array3 = addItemToanArray(array);
console.log(array, array2, array3);