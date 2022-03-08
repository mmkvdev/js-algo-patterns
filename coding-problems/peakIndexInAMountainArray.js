/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let low = 0, high = arr.length - 1, mid;
    
    while (low < high) {
        mid = Math.floor((low+high) / 2);
        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return low;
};