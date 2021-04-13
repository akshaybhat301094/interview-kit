/**
 *              LINKED LIST - javascript implementation
 */

class Node {
  constructor(data, next = null) {
    this.val = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    this.size++;
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  pop() {
    if (!this.head) throw 'List is empty';
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next != this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.size--;
    return this;
  }

  shift() {
    if (!this.head) throw 'List is empty';
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }

  get(idx) {
    if (!idx || idx < 0 || idx >= this.size) return null;
    let currentNode = this.head;
    let counter = 0;
    while (counter != idx) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // to update the node value at a particular index
  set(idx, val) {
    let nodeInList = this.get(idx);
    if (nodeInList) {
      nodeInList.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.size) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.size) return !!this.push(val);
    let previousNode = this.get(idx - 1);

    let newNode = new Node(val);
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.size++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.size) return false;
    if (idx == this.size - 1) return !!this.pop();
    if (idx == 0) return !!this.shift();

    let previousNode = this.get(idx - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.size--;
    return true;
  }

  reverse() {
    if (this.size === 1) return this;
    if (!this.head) return false;

    let currentNode = this.head;
    let prev = null;
    let next;
    this.head = this.tail;
    this.tail = currentNode;

    for (let i = 0; i < this.size; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }

    return this;
  }
}

let linkedList = new SinglyLinkedList();
linkedList.push(10);
linkedList.push(20);
