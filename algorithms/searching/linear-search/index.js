// Linear Search

/*
 * @input { array of numbers }
 * @input { target }
 * @returns { index of the element that we're searching for }
 * @timecomplexity { O(n) }
 * @spacecomplexity { O(1) }
*/


const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const data = [2, 3, 1, 5, 7, 6];
console.log(linearSearch(data, 7));

const statesData = ['arizona', 'bunker', 'chicago', 'dallas', 'pennsylavania'];
console.log(linearSearch(statesData, 'chicago'));
console.log(linearSearch(statesData, 'new york'));


// Note: 
// JavaScript inbuilt methods like 
// { indexOf, includes, find and findIndex } 
// are inherently using linear search to perform searches