/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of
 * the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde". A common subsequence of two strings is a subsequence that is common to both strings.
 */

// Solution using DP

const longestCommonSubsequence = (text1, text2) => {
  let m = text1.length;
  let n = text2.length;
  let dp = [];

  // fill up the dp table with 0's
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] !== text2[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
};

/**
 * TIME COMPLEXITY: - O(mn)
 * SPACE COMPLEXITY: - O(mn)
 */
