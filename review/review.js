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
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2) &&
      this.adjacencyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  countEdge() {
    let edgeCount = 0;
    for (let vertex in this.adjacencyList) {
      edgeCount += this.adjacencyList[vertex].size;
    }
    return edgeCount / 2;
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2) &&
      this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  bfs(startVertex) {
    let que = [startVertex];
    let visited = { [startVertex]: true };
    while (que.length > 0) {
      let curr = que.shift();
      console.log(curr);
      for (let neighbor of this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          que.push(neighbor);
        }
      }
    }
  }

  dfs(startVertex, visited = {}) {
    if (!this.adjacencyList[startVertex]) return;
    console.log(startVertex);
    visited[startVertex] = true;
    for (const neighbor of this.adjacencyList[startVertex]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited);
      }
    }
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
// graph.removeVertex("A");
// console.log(graph.hasEdge("A", "B"));
console.log(graph.countEdge());
graph.display();
console.log("bfs");
graph.bfs("A");
console.log("dfs");
graph.dfs("A");
