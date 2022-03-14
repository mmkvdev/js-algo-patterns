/*
 * LinkedList Implementation
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.size = 0;
  }

  insertAtStart (item) {
    let node = new Node(item);
    if (!this.head) {
      this.head = node;
    } else {
      this.head = new Node(item, this.head);
    }
    this.size++;
  }

  insertAtIndex (item, pos) {
    let node = new Node(item);
    let count = 0;
    let previous;

    if (pos == 0) {
      this.head = new Node(item, this.head);
      return;
    } else {
      let current = this.head;
      while (count < pos) {
        previous = current;
        count++;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.size++;
  }

  insertAtEnd (item) {
    let node = new Node(item);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getItem (pos) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === pos) {
        return current.data;
      }
      count++;
      current = current.next;
    }

    return null;
  }

  removeElementAtPosition (pos) {
    let current = this.head;
    let previous;
    let count = 0;

    if (pos === 0) {
      this.head = current.next;
    } else {
         while (count < pos) {
            previous = current;
            count++;
            current = current.next;
      }
      previous.next = current.next;
    } 
    this.size--;
  }

  clearList () {
    this.head = null;
    this.size = 0;
  }

  printListData () {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const listExample = new LinkedList();
listExample.insertAtStart(100);
listExample.insertAtEnd(200);
listExample.insertAtEnd(300);
console.log(listExample.getItem(1));
listExample.removeElementAtPosition(0);
listExample.printListData();
console.log('------------test-2---------------------');
listExample.insertAtStart(400);
listExample.printListData();
console.log('----------------------------test-3-------------------------');
listExample.insertAtIndex(600,1);
listExample.printListData();
listExample.insertAtIndex(700,0);
listExample.printListData();