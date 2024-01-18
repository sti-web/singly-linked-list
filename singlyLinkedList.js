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

  /**
   * add a node at the end
   * @param {*} value
   * @returns
   */
  push(value) {
    const newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return this;
  }

  /**
   * add a node to the beginning
   * @param {*} value
   * @returns
   */
  unshift(value) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  /**
   * should remove a node at the beginning
   * @returns
   */
  shift() {
    // check
    if (this.length < 2) {
      console.warn('Nothing to remove');
      return this.head;
    }
    const currHead = this.head;
    const newHead = this.head.next;
    newHead.next = this.head.next.next;
    this.head = newHead;
    this.length--;

    return currHead;
  }

  /**
   * should remove a node at the end
   * @returns
   */
  pop() {
    // check
    if (this.length < 2) {
      console.warn('Nothing to remove');
      return this.head;
    }

    const removed = this.tail;
    this.remove(this.length - 1);
    return removed;
  }

  /**
   * Remove a node by given index
   * @param {Number} index
   * @returns
   */
  remove(index) {
    // check params
    const leader = this._get(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  /**
   * Reverse all of the nodes
   * @returns
   */
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  /**
   * Find a node at given index
   * @param {Number} index
   * @returns
   */
  _get(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  /**
   * Insert a node at given index with given value
   * @param {Number} index
   * @param {*} value
   */
  _insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.push(value);
    }

    if (index === 0) {
      return this.unshift(value);
    }

    const newNode = new Node(value);
    const leader = this._get(index - 1);
    const holdingPoiner = leader.next;
    leader.next = newNode;
    newNode.next = holdingPoiner;
    this.length++;
    return this;
  }
}
