/**
 * Given the head of a linked list, rotate the list to the right by k places.
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 */

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  let cur = head;
  let length = 1;

  while (cur.next) {
    length++;
    cur = cur.next;
  }

  let count = k % length;

  if (count === 0) return head;

  let ptr = length - count;

  let newHead = head;

  while (--ptr) {
    newHead = newHead.next;
  }

  let tempHead = newHead.next;
  cur.next = head;
  newHead.next = null;
  return tempHead;
}
