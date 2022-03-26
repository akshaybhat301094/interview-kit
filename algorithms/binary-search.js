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
  "use strict";

  function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    if (target > arr[end] || target < arr[start]) {
      return -1;
    }

    while (start <= end) {
      let mid = ~~((start + end) / 2);
      if (arr[mid] === target) return mid;
      if (target < arr[mid]) end = mid - 1;
      else start = mid + 1;
    }

    return -1;
  }

  global.binarySearch = binarySearch;
})(typeof window === "undefined" ? module.exports : window);
