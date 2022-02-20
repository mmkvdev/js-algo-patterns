/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * @timecomplexity { O(n) }
 * @spacecomplexity { O(n) }
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    
    if (m*n !== r*c) {
        return mat;
    }
    
    let res = [];
    
    for (let i = 0; i < m*n; i++) {
        let row = Math.floor(i / c);
        if (!res[row]) {
            res.push([]);
        }
        res[row].push(mat[Math.floor(i / n)][i % n]);
    }
    
    return res;
};