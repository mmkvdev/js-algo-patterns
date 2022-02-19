/**
 * @param {number[]} nums
 * @return {number[]}
 * @timecomplexity - O(n)
 * @spacecomplexity - O(1) - no extra auxiliary space consumed
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        nums[index] = Math.abs(nums[index]) * -1;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    
    return res;
};