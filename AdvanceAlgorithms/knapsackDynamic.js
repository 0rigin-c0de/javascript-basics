function knapsack(w, v, c, n, i = 0) {
  if (c == 0) {
    return dp[c][i];
  }
  if (w[i] > c) {
    return dp[c][i];
  }
  if (i >= n) {
    return dp[c][i];
  }
  let res = Math.max(
    v[i] + knapsack(w, v, c - w[i], n - 1, i + 1),
    knapsack(w, v, c, n - 1, i + 1)
  );
  dp[c][i] = res;
  return dp[c][i];
}

var v = [4, 5, 10, 11, 13];
var w = [3, 4, 7, 8, 9];
var c = 16;
var n = 5;
let dp = Array(c + 1)
  .fill()
  .map(() => Array(n + 1).fill(0));
console.log(knapsack(v, w, c, n));
