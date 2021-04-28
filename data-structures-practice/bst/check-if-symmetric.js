/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e.,
 * symmetric around its center).
 */

function checkIfSymmetric(root) {
  return (function helper(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      helper(left.left, right.right) &&
      helper(left.right, right.left)
    );
  })(root, root);
}
