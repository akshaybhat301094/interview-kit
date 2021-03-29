class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary trees - each node has a max of 2 children
// BST - left child always smaller than root, right child always greater than root

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value < node.value go left
      if (value < node.value) {
        // if no child append new node
        if (!node.left) {
          node.left = newNode;
        } else {
          // if child on left look left again
          searchTree(node.left);
        }
      }
      // if value > node.value go right
      else if (value > node.value) {
        // if no child append new node
        if (!node.right) {
          node.right = newNode;
        } else {
          // if child on right look right again
          searchTree(node.right);
        }
      }
    };
    // pass in the root node to initialize
    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value == currentNode.value) {
        return true;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  // depth first search - looking branch by branch

  // in-order
  // left, root, right
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exists go left again
      if (node.left) traverse(node.left);

      // capture root node value
      result.push(node.value);

      // if right child exists go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // pre-order
  // root, left, right
  dfsPreOrder() {
    let result = [];

    let traverse = (node) => {
      // capture root node
      result.push(node.value);

      // check if left child exists go left
      if (node.left) traverse(node.left);

      // check if right child exists go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  // post-order
  // left, right, root
  dfsPostOrder() {
    let result = [];

    let traverse = (node) => {
      // check if left node go left
      if (node.left) traverse(node.left);

      //check if right node go right
      if (node.right) traverse(node.right);

      // capture root node
      result.push(node.value);
    };
    traverse(this.root);

    return result;
  }

  // breadth first search - looking level by level
  // use a queue
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

let bst = new BST(10);
bst.insert(20);
bst.insert(5);
bst.insert(null);
bst.insert(22);
bst.insert(2);

console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.bfs());
