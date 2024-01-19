
function recursivefib(n) {
  if (n < 2) {
  
    return n;
  }
  return recursivefib(n - 1) + recursivefib(n - 2);
}
console.log(recursivefib(5));
