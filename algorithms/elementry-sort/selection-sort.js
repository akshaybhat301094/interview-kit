/* In selection sort we initially mark the first item in array as lowest and then 
    iterate through the whole array and find min and update and then swap it so that
    the smallest element comes first.

    first pass we mark the smallest 
    [3,4,5,1,7,6]
           |

    [1,4,5,3,7,6]
    now start from the second index as 1st is the smallest
*/

function selectionSort(arr) {
  let swap = (arr, item1, item2) => {
    [arr[item1], arr[item2]] = [arr[item2], arr[item1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}
