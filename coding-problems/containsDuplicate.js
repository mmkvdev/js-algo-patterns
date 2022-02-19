/**
 * @param {number[]} nums
 * @return {boolean}
 * @timecomplexity - O(n)
 * @spacecomplexity - O(1)
 */
var containsDuplicate = function(nums) {
    if (!nums || nums.length < 1) {
        return null;
    }
    let i = 0, j = 1;
    while (i < j && j < nums.length) {
        if (nums[i] === nums[j]) {
            return true;
        } else if (j === nums.length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return false;
};