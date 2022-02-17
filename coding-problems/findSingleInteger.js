

/**
 * @param {number[]} arr
 * @returns number
 * 
 * Given an array of integers, all integers appear twice except one integer,      could you quickly target it ? 

    const arr = [10, 2, 2 , 1, 0, 0, 10]
    findSingle(arr) // 1

    What is time & space cost of your approach ? Could you do better ?
 */

function findSingle(arr) {
  // your code here
  let res = {};
  arr.forEach((num) => {
    res[num] = !(num in res) ? 1 : res[num] + 1;
  });

  return Number(Object.keys(res).find((ele) => res[ele] === 1));
}

const arrayData = [1,5,6,7,0];
// findSingle(arrayData);
console.log(findSingle(arrayData));

