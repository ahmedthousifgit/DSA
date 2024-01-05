//Power of n
function power(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {  
      return false;
    }
    n = n / 2;   //O(logn)
  }
  return true;
}
console.log(power(1));
console.log(power(2));
console.log(power(5));