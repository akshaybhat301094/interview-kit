/**
 * Merge two sorted linked lists
 */

function mergeList(head1, head2) {
  if (!head1 && !head2) return head1;
  if (!head1 && head2) return head2;
  if (!head2 && head1) return head1;

  let current = new Node(-1);
  let result = current;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  if (head1) {
    current.next = head1;
  }
  if (head2) {
    current.next = head2;
  }

  return result.next;
}
