function range(start, end) {
  if (end < start) {
    return [];
  } else {
    let numbers = range(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}
console.log(range(0, 5));
