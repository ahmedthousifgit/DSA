// implement stack using two ques
class StackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  // Push element onto the stack
  push(element) {
    // Move all elements from queue1 to queue2
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }

    // Enqueue the new element into queue1
    this.queue1.push(element);

    // Move all elements back from queue2 to queue1
    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue1.shift();
  }

  // Peek at the top element without removing it
  peek() {
    return this.isEmpty() ? null : this.queue1[0];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.queue1.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.queue1.length;
  }
}

// Example usage:
const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element is:", stack.peek()); // Output: 30
console.log("Stack size is:", stack.size()); // Output: 3

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.pop()); // Output: null (Underflow)
