/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp = s.split(''), res = [];
    
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '{' || temp[i] === '[' || temp[i] === '(') {
            res.push(temp[i]);
        } else if (temp[i] === '}') {
            if (res[res.length - 1] === '{') {
                res.pop();
            } else {
                return false;
            }
        } else if (temp[i] === ']') {
            if (res[res.length - 1] === '[') {
                res.pop();
            } else {
                return false;
            }
        } else {
            if (res[res.length - 1] === '(') {
                res.pop();
            } else {
                return false;
            }
        }
    }
    
    return res.length === 0 ? true : false;
};