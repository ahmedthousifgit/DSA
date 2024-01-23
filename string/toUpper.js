// changing to uppercase without using imbuilt function

function upperCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= "a" && char <= "z") {
      let upperChar = String.fromCharCode(char.charCodeAt(0) - 32);
      result += upperChar;
    } else {
      result += char;
    }
  }
  return result;
}

const string = upperCase("heLLo");
console.log(string);
