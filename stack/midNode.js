class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      let popped = this.head;
      this.head = this.head.next;
      this.size--;
      return popped.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.isEmpty() ? null : this.head.value;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  middle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }

  secondLast() {
    if (this.size < 2) {
      return false;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    return curr.value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

// console.log(stack.middle());
console.log(stack.pop());
// console.log(stack.secondLast());
// console.log(stack.peek());
stack.print();
