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
}

let linkedList = new SinglyLinkedList();
linkedList.push(10);
linkedList.push(20);
