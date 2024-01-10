// sum , fibonacci, factorial, reverse , range

//reverse
// function reverse(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }
// console.log(reverse("hello"));

// fibonacci
// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));

//factoria
// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// range
// function range(start, end) {
//   if (end < start) {
//     return [];
//   } else {
//     let numbers = range(start, end - 1);
//     numbers.push(end);
//     return numbers;
//   }
// }
// console.log(range(0, 6));
