var removeElements = function(head, val) {
    let dummy = new ListNode(0, head);
    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next; // FIXED
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};
