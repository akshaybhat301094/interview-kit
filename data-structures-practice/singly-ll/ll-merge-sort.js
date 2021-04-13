/**
 * Sorting a singly linked list using merge sort
 */

function merge(ll1, ll2) {
  let result = new SinglyLinkedList();
  let left = ll1.head;
  let right = ll2.head;

  while (left != null && right != null) {
    if (left.val <= right.val) {
      result.push(left.val);
      left = left.next;
    } else {
      result.push(right.val);
      right = right.next;
    }
  }

  while (left != null) {
    result.push(left.val);
    left = left.next;
  }

  while (right != null) {
    result.push(right.val);
    right = right.next;
  }

  return result;
}

function mergeSort(ll) {
  if (ll.size <= 1) return ll;
  let mid = ~~(ll.size / 2);
  let node = ll.head;
  let left = new SinglyLinkedList();
  let right = new SinglyLinkedList();
  let index = 1;

  while (node != null) {
    if (index <= mid) {
      left.push(node.val);
    } else {
      right.push(node.val);
    }
    index++;
    node = node.next;
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}
