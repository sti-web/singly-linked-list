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

  push(value) {
    const newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return this;
  }

  pop(value) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }
}
