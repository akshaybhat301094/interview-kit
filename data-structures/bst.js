/**
 *  Trees are non-linear data structures that contain a root and child nodes
 *
 *  Binary trees can have values of any type but at most 2 children for each parent
 *
 *  In BST every node to left of the parent is less than it's value and every node to
 *  the right is greater
 *
 * Implementaton of BST without recursion
 *
 *      TIME COMPLEXITY
 *  Insertion - O(log n)
 *  Searching - O(log n)
 *
 *
 * This file also contains tree traversal methods which can be used with any tree
 * BFS - Breadth first search
 * DFS - Depth first search
 *      - DFS in order -> left, root, right
 *      - DFS pre order -> root, left, right
 *      - DFS post order -> left, right, root
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

  /**
   *  Tree traversal methods start from here
   *  can be used for any tree with some minor tweaks the base logic remains the same
   */

  // BFS- space complexity might be more based on structure of the tree
  bfs() {
    let result = [],
      queue = [],
      node = null;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  // traverse root first, then left, then right;
  // can be used to "export" a tree structure so that it is easily reconstructed/copied
  dfsPreOrder() {
    let result = [];
    function traverse(node, arr) {
      arr.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root, result);
    return result;
  }

  // traverse first to left then to right then root - more like bottom up, the root     element is added at last
  dfsPostOrder() {
    let result = [];

    function traverse(node, arr) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node);
    }
    traverse(this.root, result);
    return result;
  }

  // traverse all left first then node then right
  // for bst we can use this to check if the result is in order it always returns sorted data
  dfsInOrder() {
    let result = [];

    function traverse(node, arr) {
      if (node.left) traverse(node.left);
      arr.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(this.root, result);
    return result;
  }
}
