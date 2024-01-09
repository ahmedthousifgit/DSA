function mergeTwoList(l1, l2) {
  // Create a sentinel/dummy node to start
  let returnNode = new Node(-infinity);
  // Create a copy of this node to iterate while solving the problem
  let headNode = returnNode;
   // Traverse till one of the lists reaches the end
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      return (Node.next = l1);
      l1 = l1.next;
    } else {
      return (Node.next = l2);
      l2 = l2.next;
    }
    returnNode = returnNode.next;
  }

  // Append the remaining list
  if (l1 === null) {
    returnNode.next = l2;
  } else if (l2 === null) {
    returnNode.next = l1;
  }

  // Return the next node to the sentinel node
  return headNode.next;
}
