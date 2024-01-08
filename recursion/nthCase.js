//n th num in fibonacci sequence
function recursivefib(n) {
  if (n < 2) {  //base case for terminating recursion
    return n;
  }
  return recursivefib-(n - 1) + recursivefib(n - 2);
}
console.log(recursivefib(5));
