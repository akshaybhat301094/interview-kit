// remove duplicate from a sorted linked list

var deleteDuplicates = function (head) {
  let currentNode = head;
  while (currentNode != null && currentNode.next != null) {
    if (currentNode.val == currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};

// remove duplicate from unsorted linked list

function deleteDuplicates(head) {
  let ptr1 = head;
  let ptr2 = null;
  while (ptr1 != null && ptr1.next !== null) {
    ptr2 = ptr1;

    while (ptr2 != null && ptr2.next != null) {
      if (ptr1.val === ptr2.next.val) {
        ptr2.next = ptr2.next.next;
      } else {
        ptr2 = ptr2.next;
      }
    }

    ptr1 = ptr1.next;
  }
  return head;
}
