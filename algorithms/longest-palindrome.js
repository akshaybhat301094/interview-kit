/**
 * Find the longest palindrome in a given string
 *
 * eg:- s = "adabad" -> dabad is the longest substring in this
 */

function longestCommonPalindrome(s) {
  let longestStr = '';

  // function starts iterating from middle and expands outwards to check if palindrome
  function expandSearch(str, i, j) {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    return str.slice(i + 1, j);
  }

  for (let i = 0; i < s.length; i++) {
    let firstStr = expandSearch(s, i, i); // in case the string length is odd - mid will be same
    let secondStr = expandSearch(s, i, i + 1); // in case the string length is even - mid will be two points
    let longestSubstr =
      firstStr.length > secondStr.length ? firstStr : secondStr;
    if (longestSubstr.length > longestStr.length) {
      longestStr = longestSubstr;
    }
  }

  return longestStr;
}
