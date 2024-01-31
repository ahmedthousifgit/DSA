// que in stack

class queInStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(element) {
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(element);
  }

  pop() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }

  peek() {
    return this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : this.stack1[0];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
  getSize() {
    return this.stack1.length + this.stack2.length;
  }
}

const que = new queInStack();
que.push(10);
que.push(20);
que.push(30);
console.log(que.peek());    

console.log(que.pop());
