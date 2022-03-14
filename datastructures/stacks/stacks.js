/*
 * Stack Implementation
 * operations: push, pop, peek, isEmpty, size
*/


const stack = function () {
  this.key = 0;
  this.stackStorage = {};

  this.push = function (element) {
    this.stackStorage[this.key] = element;
    this.key++;
  }

  this.pop = function () {
    if (this.key === 0) {
      return undefined;
    }

    this.key--;
    let elementToBePopped = this.stackStorage[this.key];
    delete this.stackStorage[this.key];
    return elementToBePopped;
  }

  this.peek = function () {
    return this.stackStorage[this.key - 1];
  }

  this.isEmpty = function () {
    return this.key === 0;
  }

  this.size = function () {
    return this.key;
  }
}

let stackExample = new stack();
stackExample.push(4);
stackExample.push(3);
stackExample.push(14);
stackExample.push(13);
console.log(stackExample.peek());
console.log(stackExample.isEmpty());
stackExample.pop();
stackExample.pop();
stackExample.pop();
stackExample.pop();
console.log(stackExample.isEmpty());