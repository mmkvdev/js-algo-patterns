/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = {};
    for (let i of nums) {
        res[i] = ++res[i] || 1;
    }
    
    let majority = Math.floor(nums.length / 2);
    
    for (let j in res) {
        if (res[j] > majority) {
            return j;
        }
    }
};