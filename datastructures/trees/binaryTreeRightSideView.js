/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    
    let res = [];
    const validateRightView = (node, height) => {
        if (!node) {
            return null;
        }
        res[height] = node.val;
        validateRightView(node.left, height+1);
        validateRightView(node.right, height+1);
    }
    
    validateRightView(root, 0);
    return res;
    
};