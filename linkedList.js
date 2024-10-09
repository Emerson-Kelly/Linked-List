import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  prepend(value) {
    const newNode = new Node(value, this.listHead);
    this.listHead = newNode;
    console.log(value);
  }

  append(value) {
    const newNode = new Node(value, null);
    if (!this.listHead) {
      this.listHead = newNode;
    } else {
      let current = this.listHead;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
      console.log(value);
    }
  }

  size(listHead) {
    let count = 0;
    let current = this.listHead;
    while (current != null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let current = this.listHead;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0) {
      return null;
    }
    let current = this.listHead;
    let count = 0;
    while (current !== null) {
      if (count == index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
  }

  pop() {
    let current = this.listHead;
    let previous = null;
    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    return this.listHead;
  }

  contains(value) {
    let current = this.listHead;
    while (current !== null) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.listHead;
    let index = 0;
    while (current !== null) {
      if (value == current.value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.listHead;
    let linkedListResult = "";
    while (current !== null) {
      linkedListResult += `(${current.value}) -> `;
      current = current.nextNode;
    }
    linkedListResult += "null";
    return linkedListResult;
  }
}
