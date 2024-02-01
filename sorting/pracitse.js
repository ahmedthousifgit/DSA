

// mid element in stack

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

  peek() {
    return this.item[0];
  }

  popMid() {
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

  print() {
    console.log(this.item);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

stack.print();

stack.popMid();
console.log(stack.peek());
stack.print();
