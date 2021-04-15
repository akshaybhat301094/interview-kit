/**
 * Sorting a singly linked list using merge sort
 */

// Implementation 1 with inbuilt functions

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

// Implementation 2 with node only

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function merge(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let result = ListNode(-1); // -> will append all the merged values in this
  let node = result; // just a pointer so that we do not modify result directly

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }

    node = node.next;
  }

  node.next = l1 || l2; // -> if one of the list is shorter append the remaining nodes

  return result.next; // -> as first node in this was dummy returning the ones after;
}

function mergeSort(head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head;
  let temp = head;

  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  temp.next = null; // -> get the nodes preceeding the mid point

  let left = mergeSort(head);
  let right = mergeSort(slow);
  return merge(left, right);
}
