class Stack {
  constructor() {
    this.item = [];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  getSize() {
    return this.item.length;
  }
  push(value) {
    this.item.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.item.pop();
    }
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
    let mid = Math.floor(this.getSize() / 2);
    while (this.getSize() > mid + 1) {
      stack.push(this.item.pop());
    }
    this.item.pop();
    while (stack.length) {
      this.item.push(stack.pop());
    }
  }
  secondlast() {
    let last = this.item.pop();
    let secondLast = this.item.pop();

    this.item.push(secondLast);
    this.item.push(last);
    return secondLast;
  }

  reverse() {
    if (this.size < 2) {
      return false;
    } else {
      let auxStack = new Stack();
      while (!this.isEmpty()) {
        auxStack.push(this.pop());
      }
      console.log("reversed stack:", auxStack.item);
      while (!auxStack.isEmpty()) {
        this.push(auxStack.pop());
      }
    }
  }

  peek() {
    return this.isEmpty() ? null : this.item[0];
  }

  print() {
    console.log(this.item);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(39);
stack.push(40);
stack.print();
// console.log(stack.middle());
// stack.removeMid();
// console.log(stack.secondlast());
// stack.pop();
// console.log(stack.peek());
stack.reverse();
stack.print();
