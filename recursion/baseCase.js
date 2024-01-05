//sum of integers from n to 1
function sumWithBaseCase(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumWithBaseCase(n - 1);
  }
}
console.log(sumWithBaseCase(6));
