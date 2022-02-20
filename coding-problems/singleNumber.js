/**
 * @param {number[]} nums
 * @return {number}
 * @timecomplexity { O(n) }
 * @spacecomplexity { O(1) }
 */
var singleNumber = function(nums) {
    let res = 0;
    for (let i of nums) {
        res ^= i;
    }
    
    return res;
};