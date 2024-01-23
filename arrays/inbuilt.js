// Map method

const num = [1, 2, 3, 4, 5];

// Map
const sum = num.map((item, index, array) => {
  return item + 5;
});
console.log(sum);

// filter
const newNum = num.filter((item, i, arr) => {
  return item > 3;
});
console.log(newNum);

// reduce
const total = num.reduce((acc, curr, i, arr) => {
  return acc + curr;
});
console.log(total);

// some
const any = num.some((item, i, arr) => {
  return item > 8;
});
console.log(any);

// every
const all = num.every((item, i, arr) => {
  return item < 8;
});
console.log(all);

// find
const get = num.find((item, i, arr) => {
  return item < 4;
});
console.log(get);

// spread
const num2 = [12, 13, 14, 15];
const final = [...num, ...num2];
console.log(final);

// rest
function totalSum(...numbers) {
  return numbers;
}
console.log(totalSum(num2, num, "hello"));

// concat
const concated = num.concat(num2);
console.log(concated);

// slice
const slicedNum = num.slice(0, 3);
console.log(slicedNum);

// splice
console.log("-----splice---");

const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 2, "orange");
console.log(fruits);

// fill

const dumm = [1, 2, 3, 4, 4, 5];
dumm.fill(0, 3);
console.log(dumm);

// flat
const irritatedArr = [1, 2, [12, 3], [[3, 4, 5]], 7, 9];
const flattenedArr = irritatedArr.flat(2);
console.log(flattenedArr);


