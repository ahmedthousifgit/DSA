// que in stack

class QueueUsingStack {
    constructor() {
      this.stack1 = []; // For push operation
      this.stack2 = []; // For pop operation
    }
  
    // push operation
    push(element) {
      // Move all elements from stack2 to stack1
      while (this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
      }
  
      // Push the new element onto stack1
      this.stack1.push(element);
    }
  
    // pop operation
    pop() {
      // Move all elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
  
      // Pop the front element from stack2 (simulating pop)
      return this.stack2.pop();
    }
  
    // Peek at the front element without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
  
      // If stack2 is not empty, peek from stack2; otherwise, peek from stack1
      return this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : this.stack1[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
  
  // Example usage:
  const queue = new QueueUsingStack();
  queue.push(10);
  queue.push(20);
  queue.push(30);
  
  console.log("Front element is:", queue.peek())    ; // Output: 10
  console.log("Queue size is:", queue.size()); // Output: 3
  
  console.log(queue.pop()); // Output: 10
  console.log(queue.pop()); // Output: 20
  console.log(queue.pop()); // Output: 30
  console.log(queue.pop()); // Output: null (Underflow)
  
console.log(que.pop());
