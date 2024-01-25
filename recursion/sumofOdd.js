// summ of odd numbers using recursion  O(n)
function odd(n) { 
  if (n <= 0) {
    return 0;
  }
  return (n % 2 !== 0 ? n : 0) + odd(n - 1);
}
console.log(odd(5));
