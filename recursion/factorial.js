//recursive factorial
function recursiveFactorial(n) {
  if (n === 0) {
    return 1; //base case to terminate recursion
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));

// time complexity is - O(n)
