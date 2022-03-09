/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let res = {}, count = 0;
    
    for (let i of s) {
        res[i] = ++res[i] || 1;
    }
    
    for (let j of t) {
        if (res[j]) {
            res[j]--;
        }
        else count++;
    }
    
    return count;
};