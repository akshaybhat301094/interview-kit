/**
 *                                  QUICK SORT
 * To quick sort an array we take a pivot as reference and scan the whole array,
 * all the items which are less than the pivot are placed on it's left side and
 * all the items which are greater than the pivot are placed on it's right side
 *              Now we know that the pivot is sorted.
 *
 * We keep performing the same operation on pivot's left and right recursively,
 * untill we are left with a sorted array.
 *
 * eg:-     [5,2,6,3,1,6] -> we take 5 as the initial pivot and scan all the elements on right
 *           |
 *
 *          [5,2,3,1,6,6] -> now we scan the right and swap the smaller elements next to pivot
 *           |     |      -> added a second pointer to specify where we want to move the pivot
 *
 *          [2,3,1,5,6,6] -> pivot is not sorted and at it's correct position
 *           |     *      -> now performing the same steps to left and right array's and changed the pivot
 */

// helper functions

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// helper function for creating partition function

function partition(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  let pivotIdx = partition(arr, left, right);

  // operate on left recursively
  quickSort(arr, left, pivotIdx - 1);

  // operate on right recursively
  quickSort(arr, pivotIdx + 1, right);

  return arr;
}

console.log(quickSort([3, 4, 1, 6, 2]));

/**
 * TIME COMPLEXITY
 * Best - O(n log n)
 * Average - O(n log n)
 * Worst - O(n2) - in case of already sorted array
 */
