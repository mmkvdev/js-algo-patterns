/**
 * Polyfill for call method
 */

const name = {
  firstName: 'mmk',
  lastName: 'varma'
};

Function.prototype.myCall = function (obj,...args) {
  obj.printNameNew = this;
  obj.printNameNew(...args);
}

printName.myCall(name, 'tree', 'binary search tree');