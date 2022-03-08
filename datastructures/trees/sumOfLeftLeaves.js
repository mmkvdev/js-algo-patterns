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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return null;
    }
    
    let sum = 0;
    const checkSum = (node) => {
        if (!node) {
            return 0;
        }
        if (!node.left && !node.right) {
            return node.val;
        }
        
        let leftChild = checkSum(node.left);
        if (leftChild) {
            sum += leftChild;
        }
        
        checkSum(node.right);
    }
    
    checkSum(root);
    return sum;
};