// trie
// class TrieNode {
//   constructor() {
//     this.children = {};
//     this.isEndOfWord = false;
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }
//   insert(word) {
//     let currentNode = this.root;
//     for (let i = 0; i < word.length; i++) {
//         let char = word[i]
//       if (!currentNode.children[char]) {
//         currentNode.children[char] = new TrieNode();
//       }
//       currentNode = currentNode.children[char];
//     }
//     currentNode.isEndOfWord = true;
//   }
//   search(word) {
//     let currentNode = this.root;
//     for (let i = 0; i < word.length; i++) {
//       let char = word[i];
//       if (!currentNode.children[char]) {
//         return false;
//       }
//       currentNode = currentNode.children[char];
//     }
//     return currentNode.isEndOfWord;
//   }
//   startsWith(prefix) {
//     let currentNode = this.root;
//     for (let i = 0; i < prefix.length; i++) {
//       let char = prefix[i];
//       if (!currentNode.children[char]) {
//         return false;
//       }
//       currentNode = currentNode.children[char];
//     }
//     return true;
//   }
// }

// const trie = new Trie();
// trie.insert("app");
// trie.insert("apply");
// trie.insert("apples");
// console.log(trie.search("apple"));
// console.log(trie.startsWith("app"));

// graph
// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }
//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = new Set();
//     }
//   }
//   addEdge(vertex1, vertex2) {
//     if (!this.adjacencyList[vertex1]) {
//       this.addVertex(vertex1);
//     }
//     if (!this.adjacencyList[vertex2]) {
//       this.addVertex(vertex2);
//     }
//     this.adjacencyList[vertex1].add(vertex2) &&
//       this.adjacencyList[vertex2].add(vertex1);
//   }
//   hasEdge(vertex1, vertex2) {
//     return (
//       this.adjacencyList[vertex1].has(vertex2) &&
//       this.adjacencyList[vertex2].has(vertex1)
//     );
//   }
//   countEdge() {
//     let edgeCount = 0;
//     for (let vertex in this.adjacencyList) {
//       edgeCount += this.adjacencyList[vertex].size;
//     }
//     return edgeCount / 2;
//   }
//   removeEdge(vertex1, vertex2) {
//     this.adjacencyList[vertex1].delete(vertex2) &&
//       this.adjacencyList[vertex2].delete(vertex1);
//   }
//   removeVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       return;
//     }
//     for (let adjacentVertex of this.adjacencyList[vertex]) {
//       this.removeEdge(vertex, adjacentVertex);
//     }
//     delete this.adjacencyList[vertex];
//   }
//   bfs(startIndex){
//     let que =[startIndex]
//     let visited = {[startIndex]:true}
//     while(que.length>0){
//       let curr = que.shift()
//       console.log(curr);
//       for(let neighbor of this.adjacencyList[curr]){
//         if(!visited[neighbor]){
//           visited[neighbor]=true
//           que.push(neighbor)
//         }
//       }
//     }
//   }
//   dfs(startIndex,visited={}){
//     if(!this.adjacencyList[startIndex]) return
//     console.log(startIndex);
//     visited[startIndex]=true
//     for(let neigbour of this.adjacencyList[startIndex]){
//       if(!visited[neigbour]){
//         this.dfs(neigbour,visited)
//       }
//     }
//   }
//   display() {
//     for (let vertex in this.adjacencyList) {
//       console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
//     }
//   }
// }

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// // graph.removeVertex("A");
// // console.log(graph.hasEdge("A", "B"));
// console.log(graph.countEdge());
// graph.display();
// console.log("bfs");
// graph.bfs("A");
// console.log("dfs");
// graph.dfs("A");

// binary search tree
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class binarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return false;
//     }
//     if (root.value === value) {
//       return true;
//     }
//     if (value < root.value) {
//       return this.search(root.left, value);
//     } else if (value > root.value) {
//       return this.search(root.right, value);
//     }
//   }

//   height(node) {
//     if (!node) {
//       return 0;
//     }
//     let leftHeight = this.height(node.left);
//     let rightHeight = this.height(node.right);
//     return Math.floor(leftHeight, rightHeight) + 1;
//   }

//   levelOrder() {
//     let que = [];
//     que.push(this.root);
//     while (que.length) {
//       let curr = que.shift();
//       console.log(curr.value);
//       if (curr.left) {
//         que.push(curr.left);
//       }
//       if (curr.right) {
//         que.push(curr.right);
//       }
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }
//   deleteNode(root, value) {
//     if (root === null) {
//       return root;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       } else if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }
//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }

//   bstValidation() {
//     return this.isValid(this.root, -Infinity, Infinity);
//   }
//   isValid(node, min, max) {
//     if (!node) {
//       return true;
//     }
//     if (node.value < min || node.value > max) {
//       return false;
//     }
//     return (
//       this.isValid(node.left, min, node.value) &&
//       this.isValid(node.right, node.value, max)
//     );
//   }
// }

// const tree = new binarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(6);
// tree.delete(6);
// console.log("height:", tree.height(tree.root));
// console.log(tree.search(tree.root, 6));
// // console.log(tree.min(tree.root));
// console.log("validation:",tree.bstValidation());
// console.log("bfs");
// tree.levelOrder();
// console.log("dfs");
// tree.preOrder(tree.root);



// heap
class maxHeap{
    constructor(){
        this.heap={}
    }
}
