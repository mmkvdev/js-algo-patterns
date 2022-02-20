/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 * @timecomplexity { O(n) }
 * @spacecomplexity { O(n) }
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m*n) {
        return [];
    }
    let temp = [], res = [];
    for (let i = 0; i < original.length; i++) {
        temp.push(original[i]);
        if (temp.length === n) {
            res.push(temp);
            temp = [];
        }
    }
    return res;
};