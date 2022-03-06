/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0);
    let current = node;
    let carry = 0, sum, a1, a2;
    
    while (l1 || l2) {
        a1 = l1 && l1.val;
        a2 = l2 && l2.val;
        
        sum = a1 + a2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        
        if (l1) {
            l1 = l1.next;
        } 
        
        if (l2) {
            l2 = l2.next;
        }
        
        current = current.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return node.next;
};