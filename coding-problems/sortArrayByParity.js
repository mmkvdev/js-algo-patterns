/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        j++;
    }
    
    return nums;
};