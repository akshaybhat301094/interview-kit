function getHeight(root) {
  let leftHeight = 0;
  let rightHeght = 0;

  if (root.left) {
    leftHeight = getHeight(root.left) + 1;
  }

  if (root.right) {
    rightHeght = getHeight(root.right) + 1;
  }

  return Math.max(leftHeight, rightHeght);
}
