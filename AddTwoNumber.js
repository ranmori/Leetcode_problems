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
    let dummy= new ListNode(0)
    let current =dummy
    let carry=0
    
    while(l1 !== null || l2 !== null || carry!==0 ) {
        let result=carry
      if(l1!==null){
        result+=l1.val
        l1=l1.next
      }
       if(l2!==null){
        result+=l2.val
        l2=l2.next
      }
  
     carry= Math.floor(result / 10);
     current.next= new ListNode(result % 10)
     current=current.next
       

    }
   
    
    return dummy.next;
    
};
