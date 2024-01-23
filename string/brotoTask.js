// Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.

function replaceAlphabets(str, n) {
  if (typeof str !== "string" || typeof n !== "number" || n < 1 || n > 26) {
    return "invalid input";
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const transformedStr = str.toLowerCase();

  let result = "";

  for (let i = 0; i < transformedStr.length; i++) {
    let char = transformedStr[i];
    if (alphabet.includes(char)) {
      orginalIndex = alphabet.indexOf(char);
      newIndex = (orginalIndex + n) % 26;

      newChar = alphabet[newIndex];
      result += str[i] === char ? newChar : newChar.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}
const normalString = replaceAlphabets("ahmed", 3);
console.log(normalString);
