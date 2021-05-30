/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from
 * left to right, then right to left for the next level and alternate between).
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 *
 */

function zigZagTree(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let counter = 1;

  while (queue.length) {
    let currentList = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);

      if (counter & 1) {
        // is even
        currentList.push(current.val);
      } else {
        currentList.unshift(current.val);
      }
    }

    result.push(currentList);
    counter++;
  }

  return result;
}
