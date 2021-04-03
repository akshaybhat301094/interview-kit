/**
 * In bubble sort we have to find the largest element and push it to the end of the arr;
 * We compare each element with its next and if the next is smaller we swap
 * Also after each pass as we know the largest item will be at the end we check till one less than end
 *
 *      [5,2,6,8,3,1]
 *      [2,5,6,8,3,1]
 *      [2,5,6,3,8,1]
 *      [2,5,6,3,1,8] --- first pass completed
 *
 *
 */

function bubbleSort(arr) {
  let noSwaps;
  let swap = (arr, item1, item2) => {
    [arr[item1], arr[item2]] = [arr[item2], arr[item1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
