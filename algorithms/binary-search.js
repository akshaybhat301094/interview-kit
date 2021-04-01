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
