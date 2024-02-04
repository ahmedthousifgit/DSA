// valid paranthesis using stack

function isValid(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let currVal = s[i];
    if (currVal === "(" || currVal === "{" || currVal === "[") {
      stack.push(currVal);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const topElement = stack.pop();
      if (
        currVal === "]" ||
        topElement === "[" ||
        currVal === "}" ||
        topElement === "{" ||
        currVal === ")" ||
        topElement === "("
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const s = "[{()}]";
if (isValid(s)) {
  console.log(true);
} else {
  console.log(false);
}
