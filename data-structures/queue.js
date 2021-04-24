/**
 * Queue data structure using linked list - FIFO
 * As we know in queue we use first in first out
 *
 *  TIME COMPLEXITY
 * Insertion - O(1)
 * Deletion - O(1)
 * Searching - O(N)
 * Access - O(N)
 */

class Node {
  constructor(val) {
    this.val = val || null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
