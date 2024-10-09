#!/usr/bin/env node

import LinkedList from './linkedList.js';

const linkedList = new LinkedList();

linkedList.prepend("dog");
linkedList.append("cat");
linkedList.append("parrot");
linkedList.append("hamster");
linkedList.append("snake");
linkedList.append("turtle");

console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(1));
console.log(linkedList.pop());
console.log(linkedList.contains("hamster"));
console.log(linkedList.find("snake"));
console.log(linkedList.toString());
