function max(a, b) {
  return a > b ? a : b;
}
function knapsack(c, w, v, n, i = 0) {
  if (c == 0) {
    return 0;
  }
  if (w[i] > c) {
    return knapsack(w, v, c, n, i + i);
  }
  if (i >= n) {
    return 0;
  }
  return max(
    v[i] + knapsack(w, v, c - w[i], n - 1, i++),
    knapsack(w, v, c, n - 1, i + 1)
  );
}

var v = [4, 5, 10, 11, 13];
var w = [3, 4, 7, 8, 9];
var c = 16;
var n = 5;
console.log(knapsack(v, w, c, n));
