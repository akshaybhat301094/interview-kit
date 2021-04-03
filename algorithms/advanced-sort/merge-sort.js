/**
 *                                          MERGE SORT
 *  The basic logic for merge sort is to divide the array in smallest possible parts i.e 0 or 1 length
 *  and then merge them together while sorting them on the fly.
 *
 * For the ease of logic we will first make a merging logic which will take care of merging the 2 arrays
 * Then we will call merge sort recursively by dividing the provided array in 2 halves until we get the
 * smallest possible unit and when the length of the array's is 0 or 1 we will merge them together.
 *
 *  eg:-        [6,5,4,3,2,1]  -- divide in middle
 *                   |
 *
 *          [6,5,4]     [3,2,1]
 *             |           |
 *
 *         [6, 5] [4]   [3,2] [1]
 *
 *        [6] [5] [4]   [3] [2] [1]
 *
 *        [5,6] [4]     [2,3] [1]
 *
 *         [4,5,6]      [1,2,3]
 *
 *             [1,2,3,4,5,6]
 */

// create the merging logic first
function merge(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = ~~(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([9, 3, 4, 10, 1]));
