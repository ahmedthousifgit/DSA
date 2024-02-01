// class Stack {
//   constructor() {
//     this.item = [];
//   }
//   isEmpty() {
//     return this.item.length === 0;
//   }
//   getSize() {
//     return this.item.length;
//   }
//   push(element) {
//     this.item.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.item.pop();
//     }
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.isEmpty() ? null : this.item[this.item.length - 1];
//     }
//   }

//   middle() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let slow = 0;
//       let fast = 0;
//       while (fast < this.item.length && fast + 1 < this.item.length) {
//         slow++;
//         fast += 2;
//       }
//       return this.item[slow];
//     }
//   }

//   secondlast() {
//     if (this.getSize() < 2) {
//       return false;
//     } else {
//       let popped = this.pop();
//       let secondlastel = this.peek();
//       this.push(popped);
//       return secondlastel;
//     }
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("empty");
//     } else {
//       console.log(this.item);
//     }
//   }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// // console.log(stack.middle());
// // console.log(stack.pop());
// // console.log(stack.peek());
// console.log(stack.secondlast());
// stack.print();

//remove mid
//remove mid

class Stack {
  constructor() {
    this.item = [];
  }

  size() {
    return this.item.length;
  }

  push(element) {
    this.item.push(element);
  }

  pop() {
    return this.item.pop();
  }

  middle() {
    let slow = 0;
    let fast = 0;
    while (fast < this.item.length && fast + 1 < this.item.length) {
      slow++;
      fast += 2;
    }
    return this.item[slow];
  }
  removeMid() {
    let stack = [];
    let mid = Math.floor(this.size() / 2);
    while (this.size() > mid + 1) {
      stack.push(this.item.pop());
    }
    this.item.pop();
    while (stack.length) {
      this.item.push(stack.pop());
    }
  }
  peek() {
    return this.item.length === 0 ? null : this.item[0];
  }

  print() {
    console.log(this.item);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.middle());
// stack.removeMid();
stack.print();
