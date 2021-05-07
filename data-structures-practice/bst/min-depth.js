/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node
 * down to the nearest leaf node.
 */

function minDepth(root) {
  if (!root) return 0;
  let leftHeight = minDepth(root.left);
  let rightHeight = minDepth(root.right);

  return (
    (root.left && root.right
      ? Math.min(leftHeight, rightHeight)
      : Math.max(leftHeight, rightHeight)) + 1
  );
}

var minDepth = function (root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
