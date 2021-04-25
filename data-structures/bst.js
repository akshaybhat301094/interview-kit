/**
 *  Implementaton of BST without recursion
 *
 *      TIME COMPLEXITY
 *  Insertion - O(log n)
 *  Searching - O(log n)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * function used to insert a value in tree
   * @param {the value we want to insert} val
   * @returns the inserted node
   */
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        // if user is adding same return undefined
        if (val === currentNode.val) return undefined;
        // if value is less than root traverse left
        if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
          // if value is greater than root traverse right
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  /**
   * function used to check if the particular value exists in the tree
   * @param {the value we are searching for} val
   * @returns tree node
   */
  find(val) {
    if (!this.root) return undefined;
    if (val === this.root.val) return this.root;
    else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        // traverse left
        if (val < current.val) {
          current = current.left;
          // traverse right
        } else if (value > current.val) {
          current = current.right;
          // value is equal node found
        } else {
          found = true;
        }
      }
      // if value not found return undefined
      if (!found) return undefined;
      return current;
    }
  }
}
