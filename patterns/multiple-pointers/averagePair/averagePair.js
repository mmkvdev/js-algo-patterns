
// Average Pair
// Time Complexity: O(n)
// Space Complexity: O(1)

function averagePair(arr, avg){
  if (!arr || arr.length < 2) {
      return false;
  }

  let i = 0, j = arr.length - 1, median;
  while (i < j) {
    median = (arr[i] + arr[j]) / 2;
    if (median === avg) {
      return true;
    } else if (median < avg) {
      i++;
    } else if (median > avg) {
      j--;
    }
  }

  return false;
}


console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));