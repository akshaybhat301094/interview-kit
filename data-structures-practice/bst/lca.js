/**
 *  Find the lowest common ancestor of a binary tree, we are provided with root node and 2 nodes p and q
 */

function lca(root, p, q) {
  // check if root is one of the nodes then return root
  if (!root || root == p || root == q) return root;

  // traverse the left sub tree
  let left = lca(root.left, p, q);

  // traverse the right sub tree
  let right = lca(root.right, p, q);

  // check if we found both nodes if yes return the root or else return the found node

  return right && left ? root : left || right;
}
