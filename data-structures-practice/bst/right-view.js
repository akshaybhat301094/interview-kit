/**
 * given a binary tree print the right view of the tree
 */

// solution using level order traversal
function rightView(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let currentArr = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
      currentArr.push(currentNode.val);
    }
    result.push(currentArr[currentArr.length - 1]);
  }
  return result;
}
