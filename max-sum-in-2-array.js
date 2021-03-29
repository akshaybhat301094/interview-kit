let arr1 = [2, 3, 7, 10, 12];
let arr2 = [1, 5, 7, 8];

function maxSumInTwoArray(arr1, arr2) {
  let l1 = arr1.length;
  let l2 = arr2.length;

  let i = 0,
    j = 0;

  let sum1 = 0,
    sum2 = 0;

  let result = 0;

  while (i < l1 && j < l2) {
    if (arr1[i] < arr2[j]) {
      sum1 += arr1[i++];
    } else if (arr1[i] > arr2[j]) {
      sum2 += arr2[j++];
    } else {
      // when common number found
      result += Math.max(sum1, sum2);

      sum1 = 0;
      sum2 = 0;

      let temp = i;

      while (i < l1 && arr1[i] == arr2[j]) {
        sum1 += arr1[i++];
      }

      while (j < l2 && arr1[temp] == arr2[j]) {
        sum2 += arr2[j++];
      }

      result += Math.max(sum1, sum2);

      sum1 = 0;
      sum2 = 0;
    }
  }

  while (i < l1) {
    sum1 += arr1[i++];
  }

  while (j < l2) {
    sum2 += arr2[j++];
  }

  result += Math.max(sum1, sum2);
  return result;
}

maxSumInTwoArray(arr1, arr2);
