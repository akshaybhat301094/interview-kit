/**
 * given a 2d array start from the top left node and
 * print out the result in the spiral order
 *
 *     eg-           1  2  3  4
 *                   5  6  7  8
 *                   9 10 11 12
 *                  13 14 15 16
 *
 *  result:- [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
 */

var spiralOrder = function (arr) {
  let result = [];

  (function traverse(matrix) {
    if (!matrix.length) return;
    matrix = matrix.filter((item) => item.length !== 0);

    // iterate right -> [1,2,3,4]
    matrix.length && (result = [...result, ...matrix.shift()]);

    // iterate down -> [8,12,16]
    matrix.forEach((item) => item.length && result.push(item.pop()));

    // iterate bottom row -> [15,14,13]{}
    matrix.length && (result = [...result, ...matrix.pop().reverse()]);
    // iterate up -> [9, 5]

    let temp = [];
    matrix.forEach((item) => item.length && temp.push(item.shift()));
    matrix.length && (result = [...result, ...temp.reverse()]);
    // start recursion
    traverse(matrix);
  })(arr);

  return result;
};

let input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

spiral(input);
