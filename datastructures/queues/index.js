/*
 * Queue Implementation
 * Add To the End and Remove from the beginning
 * Insertion at the end and removal from the beginning - O(1)
 * Access and Search is O(n) 
*/

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  enqueue (val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue () {
    if (!this.first) {
      return null;
    } else {
      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
  }

  printQueue () {
    let current = this.first;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const queueExample = new Queue();
queueExample.enqueue(1);
queueExample.enqueue(2);
queueExample.enqueue(3);
console.log('------enqueue test-------------');
console.log(queueExample.printQueue());

console.log('--------------------dequeue test-----------------');
console.log(queueExample.dequeue());
console.log(queueExample.dequeue());
console.log(queueExample.printQueue());