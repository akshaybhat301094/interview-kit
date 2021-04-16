/**
 * given a linked list sort the odd items at front and event items after that.
 *
 * eg -> 1->2->3->4->5
 *
 * result -> 1->3->5->2->4
 */

function oddEven(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next; // start the even pointer at even index
  let evenHead = even; // pointer that stores the original order

  while (even && even.next) {
    odd.next = even.next; // pointer after even will be odd
    odd = odd.next;

    even.next = odd.next; // pointer after odd will be even
    even = even.next;
  }

  odd.next = evenHead; // merge the even list after the odd list

  return head;
}
