/**
 * Given the head of a singly linked list, return true if it is a palindrome.
 */

const isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // by the end of this while loop slow will be around the mid of the list
  slow.next = reverseList(slow.next); // reversing the entire list after this
  slow = slow.next;

  // at this point we will compare the reversed list with the start of the initial list
  while (slow) {
    if (head.val !== slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

// function for reversing a linked list
const reverseList = (node) => {
  let prev = null;
  let current = node;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
