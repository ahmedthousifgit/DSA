const set = new Set([1, 2, 3, 4, 5]);

set.add(6);
console.log(set.size);

for (const item of set) {
  console.log(item);
}
