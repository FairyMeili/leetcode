/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let pointIndex = 0
    while (head) {
        if (head.pointIndex >= 0) {
            return head
        }
        head.pointIndex = pointIndex + 1;
        head = head.next;
    }
    return null
};