/**
 * Selection Sort
 */

const selectionSort = function (arr) {
  const items = [...arr];
  for (let i = 0; i < items.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[min] > items[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [items[i], items[min]] = [items[min], items[i]];
    }
  }
  return items;
}

console.log(selectionSort([64, 25, 12, 22, 11]));