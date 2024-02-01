// stack using ques
// class stackQue {
//   constructor() {
//     this.que1 = [];
//     this.que2 = [];
//   }

//   push(element) {
//     while (this.que1.length > 0) {
//       this.que2.push(this.que1.shift());
//     }
//     this.que1.push(element);

//     while (this.que2.length > 0) {
//       this.que1.push(this.que2.shift());
//     }
//   }

//   pop() {
//     if (this.que1.length === 0) {
//       return null;
//     } else {
//       return this.que1.shift();
//     }
//   }

//   peek() {
//     if (this.que1.length === 0) {
//       return null;
//     } else {
//       return this.que1.length === 0 ? null : this.que1[0];
//     }
//   }
// }

// const stack = new stackQue()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.pop());
// console.log(stack.peek());

// que using stack
// class queInStack {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }
//   push(element) {
//     while (this.stack2.length > 0) {
//       this.stack1.push(this.stack2.pop());
//     }
//     this.stack1.push(element);
//   }
//   pop() {
//     while (this.stack1.length > 0) {
//       this.stack2.push(this.stack1.pop());
//     }
//     return this.stack2.pop();
//   }
//   peek() {
//     return this.stack2.length > 0
//       ? this.stack2[this.stack2.length - 1]
//       : this.stack1[0];
//   }

//   isEmpty() {
//     return this.stack1.length === 0 && this.stack2.length === 0;
//   }
//   getSize() {
//     return this.stack1.length && this.stack2.length;
//   }
// }

// const que = new queInStack();
// que.push(10);
// que.push(20);
// que.push(30);

// console.log(que.pop());
// console.log(que.peek);

// valid

function isValid(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let currVal = s[i];
    if (currVal === "[" || currVal === "{" || currVal === "(") {
      stack.push(currVal);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack.pop();
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

const s = "(]";
if (isValid(s)) {
  console.log(true);
} else {
  console.log(false);
}
