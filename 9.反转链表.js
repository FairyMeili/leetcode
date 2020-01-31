var reverseList = function (head) {
    if (!head || !head.next) {
        return head
    }
    let prev = head.next;
    let revHead = reverseList(prev);
    head.next = null;
    prev.next = head;
    return revHead
}