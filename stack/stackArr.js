// stack in array

class Stack {
  constructor() {
    this.item = [];
  }
  isEmpty() {
    this.item.length === 0;
  }
  getSize() {
    return this.item.length;
  }
  push(value) {
    this.item.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return "underflow";
    } else {
      return this.item.pop();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.item[this.item.length - 1];
    }
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      console.log(this.item);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(39);
stack.print();

stack.pop();
console.log(stack.peek());
stack.print();
