/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of every node differ in height by
 * no more than 1.
 */

function balancedTree(root) {
  return (function traverse(node) {
    if (!node) return true;

    let left = traverse(node.left);
    let right = traverse(node.right);

    if (!left || !right || Math.abs(left - right) > 1) return false;

    return Math.max(left, right) + 1;
  })(root);
}
