/**
 * Common Elements In Three Sorted Arrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @timecomplexity - O(n)
 * @spacecomplexity - O(n)
*/

function constructObj(obj) {
  let res = {};
  for (let i of obj) {
      res[i] = ++res[i] || 1;
  }
  return res;
}

function commonElements(arr1, arr2, arr3){
        //code here
        let res1 = constructObj(arr1), res2 = constructObj(arr2), res3 = constructObj(arr3), common = [];  
        for (let a in res1) {
            if (a in res2 && a in res3) {
                common.push(a);
            }
        }
        return common.sort((a, b) => a - b);
}

console.log(commonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]));
console.log(commonElements([1, 5, 10, 40], [6, 7,100], [3, 4, 15,30, 70, 120]));
console.log(commonElements([1,2,3], [4,5,6], [7,8,9]));