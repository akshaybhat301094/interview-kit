/**
 * This function is used to check if the linked list is circular or not.
 * We will use 2 pointers fast and slow. If both the pointers interstect that means,
 * the linked list is circular
 * @param sll represents singly list
 */
function detectLoop(sll) {
  let fast = sll.head;
  let slow = sll.head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
}

/**
 * The same logic above can be modified to find the start of the loop
 */
function findLoopStart(sll) {
  let fast = sll.head;
  let slow = sll.head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast == slow) {
      // this means it is a loop but in this case we have to return the starting node
      slow = sll.head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return false;
}
