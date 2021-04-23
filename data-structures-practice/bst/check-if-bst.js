/**
 * This function is used to check if the provided tree is a bst or not
 * there are a few ways to go about this but in this we will be using
 * in order traversal as in case of in order we should get a sorted list
 * if the list is not sorted that means it is not a bst
 */

/**
 *
 * @param {the root node of bst} root
 * a bst consists of a root node, left and right
 */
function isBst(root) {
  let arr = [];

  function helper(root, arr) {
    if (!root) return;
    helper(root.left, arr);
    arr.push(root.val);
    helper(root.right, arr);
  }

  helper(root, arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

/**
 *  using depth first search
 */

function isBst(root) {
  if (!root) return false;
  // can use -Infinity and Infinity as well
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function dfs(root, min, max) {
  if (!root) return true;

  if (root.left <= min || root.right >= max) return false;
  // for root.left max value is the root val, for root.right min value is root.val
  return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
}
