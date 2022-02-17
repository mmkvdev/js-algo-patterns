/**
 * Polyfill for apply method
 */

const name = {
  firstName: 'mmk',
  lastName: 'varma'
};

let printName = function () {
  console.log('first name: ', this.firstName, 'second name: ', this.lastName);
}

printName.apply(name);

Function.prototype.myApply = function (obj, args) {
  obj.printNameNew = this;
  obj.printNameNew(...args);
}

printName.myApply(name, ['tree', 'binary search tree']);