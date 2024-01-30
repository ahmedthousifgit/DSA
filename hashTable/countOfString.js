// count of string

const s = "geeksforgeeks";

const arr = Array(26).fill(0);

for (let i = 0; i < s.length; i++) {
  arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
}
const ch = "e";
const count = arr[ch.charCodeAt(0) - "a".charCodeAt(0)];
console.log(count);
