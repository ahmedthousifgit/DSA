// validate bst
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
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  // isBst() {
  //   return this.isValid(this.root, -Infinity, Infinity);
  // }
  // isValid(node, min, max) {
  //   if (!node) {
  //     return true;
  //   }
  //   if (node.value <= min || node.value >= max) {
  //     return false;
  //   }
  //   return (
  //     this.isValid(node.left, min, node.value) &&
  //     this.isValid(node.right, node.value, max)
  //   );
  // }

  isBST(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
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

  delete(value) {
    return this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  height(root) {
    if (!root) {
      return 0;
    } else {
      const leftHeight = this.height(root.left);
      const rightHeight = this.height(root.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

const tree = new binarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);

// tree.delete(tree.root, 10);
// console.log(tree.search(tree.root, 10));
// console.log(tree.isBST());
// console.log(tree.max(tree.root));
console.log(tree.height(tree.root));
