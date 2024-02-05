class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  bstvalidation() {
    return this.isValid(this.root, -Infinity, Infinity);
  }
  isValid(node,min, max){
    if(!node){
        return true
    }
    if(node.value <min || node.value>max){
        return false
    }
    return (this.isValid(node.left,min,node.value) && this.isValid(node.right,node.value,max))
  }

  levelOrder() {
    let que = [];
    que.push(this.root);
    while (que.length) {
      let curr = que.shift();
      console.log(curr.value);
      if (curr.left) {
        que.push(curr.left);
      }
      if (curr.right) {
        que.push(curr.right);
      }
    }
  }
}

const tree = new binarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(4);
console.log(tree.bstvalidation());
tree.levelOrder();
