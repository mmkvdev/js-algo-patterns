/**
 * Bucket Sort
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 * @timecomplexity { O(n + k) }
 * @spacecomplexity { O(n) }
 */


const bucketSort = (arr) => {
  let n = arr.length;
  if (n <= 0) {
    return null;
  }

  // create n empty buckets
  let buckets = new Array(n);

  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  // for every arr[i] insert it into buckers[n*arr[i]]
  for (let i = 0; i < n; i++) {
    let idx = n * arr[i];
    buckets[Math.floor(idx)].push(arr[i]);
  }

  // sort individual buckets using insertion sort
  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  let index = 0;

  // concatenate all sorted buckets
  for(let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
}

let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
bucketSort(arr);
console.log(arr);