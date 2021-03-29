class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    if (!this.size) {
      this.insertFirst(data);
      return;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size && currentNode.next) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.next = new Node(data, null);
    this.size++;
  }

  insertAtIndex(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    if (index > this.size) {
      this.insertLast(data);
      return;
    }

    let currentNode = this.head;
    let counter = 0;

    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    let nextNode = currentNode.next;
    currentNode.next = new Node(data, nextNode);

    this.size++;
  }

  // reverse the list
  reverse() {
    if (!this.size) throw 'cannot reverse list as it is empty';
    if (this.size == 1) return this.head;

    let currentNode = this.head;
    let prev = null;
    while (currentNode != null) {
      let next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head = prev;
  }

  //get at index
  getAtIndex(index) {
    if (index == undefined || index > this.size - 1) throw 'index not valid';
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.data;
  }

  //remove at index
  removeAtIndex(index) {
    if (index == undefined || index > this.size - 1) throw 'index not valid';
    if (index == 0) {
      let nextNode = this.head.next;
      this.head = nextNode;
      this.size--;
      return;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    let nextNode = currentNode.next.next;
    currentNode.next = nextNode;
    this.size--;
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list
  printListAsArr() {
    let count = 0;
    let arr = [];
    let currentNode = this.head;
    while (count < this.size) {
      if (currentNode !== null) {
        arr.push(currentNode.data);
        currentNode = currentNode.next;
      }
      count++;
    }
    return arr;
  }
}

let ll = new LinkedList();
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(300);
ll.reverse();

console.log(ll.printListAsArr());
