/**
 *      RADIX SORT
 *  This is a special type of sorting that we can only use on integers.
 *  In this we make 10 different buckets for storing the numbers according to the position index
 *  eg- [12, 44, 533, 123123]
 *
 *      [] [] [] [] [] [] [] [] [] []
 *      0  1  2  3  4  5  6  7  8  9
 *
 *      [] [] [12] [533, 123123] [44] [] [] [] [] [] []
 *      -> numbers stored in buckets based on the digits place value
 *
 *     12, 533, 123123, 44
 *      -> numbers are sorted again based on the buckets
 *      -> Now we will place the numbers again in the bucked based on position 1
 *
 *  keep repeating this untill we have a sorted array
 */

// helper functions

// function to get the digit based on position provided
function getDigit(num, idx) {
  let strNum = Math.abs(num).toString();
  return +strNum[strNum.length - 1 - idx] || 0;
}

// function to check the length of a provided number
function digitCount(num) {
  return Math.abs(num).toString().length;
}

// function to check the max number's length - no of iterations are based on the max length
function mostDigits(arr) {
  let maxLength = 0;
  for (let num of arr) {
    maxLength = Math.max(maxLength, num);
  }
  return maxLength;
}

function radixSort(arr) {
  let max = mostDigits(arr);
  for (let i = 0; i < max; i++) {
    let numBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      numBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...numBuckets);
  }
  return arr;
}

console.log(radixSort([14, 1, 541, 222]));
