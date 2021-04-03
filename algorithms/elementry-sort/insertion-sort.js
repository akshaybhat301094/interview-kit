/**
 *                      Insertion Sort
 * For insertion sort we start the loop from the first index,
 * Then we compare that element with all the items on the left and
 * insert that element in the appropriate position.
 *
 * eg:- [4,3,1,5,2,6]  -- start the loop from 1st index and store it in a variable
 *         |
 *
 *      [4,4,1,5,2,6] -- we then check towards the left and 4 is greater than 3 - replace 3
 *
 *      [3,4,1,5,2,6] -- as 3 was stored in a var swap it with the first element
 *
 *      [3,4,1,5,2,6] -- now we will point at 1 and compare it with 3 and 4 and swap
 *           |
 */

function insertionSort(arr) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let current = arr[i];
    let j = i - 1; // pointer to the items before the current to iterate in next pass

    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    // after first pass j will be eq to -1 so arr[j+1] is equivalent to arr[0]
    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort([4, 3, 1, 5, 2, 6]));
