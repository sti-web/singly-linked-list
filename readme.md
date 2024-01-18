# Singly Linked List

Covered with unit tests

Given the following classes:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(initValue) {
    this.head = {
      value: initValue,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}
```

Implement the following on the `SinglyLinkedList` class

### push

This function should add a node to the end of the SinglyLinkedList. It should return the list so that the method can be chained.

### pop

This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.

### unshift

This function should add a node to the beginning of the SinglyLinkedList. It should return the list so that the method can be chained.

### shift

This function should remove a node at the beginning of the SinglyLinkedList. It should return the node removed.

### set

This function should update the value of a node at a given index of the SinglyLinkedList. It should return true if the node is updated successfully, or false if an invalid index is passed in.

### \_get

This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

### \_insert

This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return the new length of the SinglyLinkedList.

### remove

This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node.

### reverse

This function should reverse all of the nodes in a SinglyLinkedList. It should return the reversed SinglyLinkedList.
