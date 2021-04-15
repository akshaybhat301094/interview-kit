// method 1 using 2 pointers
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// method 2 using 2 loops
function findMiddle(head) {
  let counter = 1;
  let currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
    counter++;
  }
  let mid = ~~(counter / 2);
  while (mid--) {
    head = head.next;
  }
  return head;
}
