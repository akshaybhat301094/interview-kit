/**
 *                          Binary search
 * The basic requirement for this is that the array should be sorted.
 *  1. We first define a mid point of the array -
 *  2. We then check if the mid point is greater or less than the provided value.
 *  3. If less - then discard the left half of the array including the mid point
 *  4. If more - then discard the right half of the array including the mid point
 *  5. Find the mid point again
 *
 *  6. Continue doing this till the mid element is equal to the val else return -1
 *
 */

(function (global) {
  'use strict';

  function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let mid = ~~((start + end) / 2);

    if (val > arr[end] || val < arr[start]) {
      return -1;
    }

    while (arr[mid] !== val) {
      if (val < arr[mid]) end = mid - 1;
      else start = mid + 1;

      mid = ~~((start + end) / 2);
    }

    return mid;
  }

  global.binarySearch = binarySearch;
})(typeof window === 'undefined' ? module.exports : window);
