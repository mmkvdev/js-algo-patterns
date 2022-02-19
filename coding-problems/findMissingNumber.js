/**
 * @param {number[]} nums
 * @return {number}
 * @timecomplexity - O(1)
 * @spacecomplexity - O(1)
 */
var missingNumber = function(nums) {
    if (!nums) {
        return null;
    }
    let sum = ((nums.length) * (nums.length + 1)) / 2;
    let numSum = nums.reduce((prev, curr) => curr + prev);
    return sum - numSum;
};