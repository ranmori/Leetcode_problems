

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function detectLoop(head) {
  
    // fast and slow pointers
    // initially points to the head
    let slow = head, fast = head;

    // Loop that runs while fast and slow pointer are not
    // null and not equal
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // If fast and slow pointer points to the same node,
        // then the cycle is detected
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

// Driver Code
let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);

head.next.next.next = head.next;

if (detectLoop(head))
	console.log("true");
else
	console.log("false");
