// calculate fibonacci using memoization dynamic programming

function fibonacci(n, map = {}) {
  if (map[n]) return map[n];
  if (n <= 1) return 1;

  map[n] = fibonacci(n - 1, map) + fibonacci(n - 2, map);
  return map[n];
}
