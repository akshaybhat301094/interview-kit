/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree
 * has a root-to-leaf path such that adding up all the values along the path equals
 * targetSum.
 *
 * A leaf is a node with no children.
 *
 * return true if found or return false
 *
 *                      1   -> head
 *                     / \
 *                   2    3
 *
 *      targetSum = 4
 *
 *      will return true as 1+3 - 4
 */

// will be using in order dfs recursively to calculate the sum of all the paths

function hasPathSum(root, targetSum) {
  if (!root) return false;

  let foundNode = false;

  (function traverse(node, sum) {
    if (!node) return;

    // traverse left
    node.left && traverse(node.left, sum + node.left.val);
    // check if leaf node and if sum is correct

    if (!root.left && !root.right && sum === targetSum) foundNode = true;

    // traverse right
    node.right && traverse(node.right, sum + node.right.val);
  })(root, root.val);

  return foundNode;
}
