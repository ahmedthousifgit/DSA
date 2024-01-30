// que in array

class Que {
  constructor() {
    this.item = [];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  getSize() {
    return this.item.length;
  }
  enque(value) {
    this.item.push(value);
  }

  deque() {
    return this.item.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.item[0];
    } else {
      return null;
    }
  }

  print() {
    console.log(this.item);
  }
}

const que = new Que();
que.enque(10);
que.enque(20);
que.enque(30);
que.deque();
console.log(que.peek());
que.print();
