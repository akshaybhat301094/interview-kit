/**
 *  doubly linked list implementation
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add a node at the end
  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  // remove a node from the end
  pop() {
    if (!this.head) return null;
    let poppedNode = this.tail;
    if (this.size == 1) {
      this.head = this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.size--;
    return this;
  }

  // remove a node from the beginning
  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.size--;
    return oldHead;
  }

  // add a node at the starting
  unshift(data) {
    if (!head) this.push(data);
    let newNode = new Node(data);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  // get the node at a particular index
  get(idx) {
    if (!this.head || idx < 0 || idx >= this.size) return null;
    let count, currentHead;

    if (idx <= this.size / 2) {
      count = 0;
      currentHead = this.head;
      while (count != idx) {
        currentHead = currentHead.next;
        count++;
      }
    } else {
      count = this.size - 1;
      currentHead = this.tail;
      while (count != idx) {
        currentHead = currentHead.prev;
        count--;
      }
    }

    return currentHead;
  }

  // change the value at a particular index
  set(idx, data) {
    let foundNode = this.get(idx);
    if (foundNode != null) {
      foundNode.val = data;
      return true;
    }
    return false;
  }

  // insert a node at a particular index
  insert(idx, data) {
    if (idx < 0 || idx > this.size) return false;
    if (idx == 0) !!this.unshift(data);
    if (idx == this.size) !!this.push(data);
    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next;
    let newNode = new Node(data);
    if (prevNode != null) {
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
    }
    this.size++;
    return true;
  }

  // remove a node from a particular index
  remove(idx) {
    if (idx < 0 || idx >= this.size) return false;
    if (idx === 0) !!this.shift();
    if (idx === this.size) !!this.pop();

    let removedNode = this.get(idx);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = removedNode.prev = null;
    this.size--;
    return removedNode;
  }
}
