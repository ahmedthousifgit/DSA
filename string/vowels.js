function vowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}
const removedVowels = vowels("hello world");
console.log(removedVowels);
