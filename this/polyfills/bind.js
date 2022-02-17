/**
 * Polyfill for Function.prototype.bind method
 */
const name = {
  firstName: 'mmk',
  lastName: 'varma'
};


let printName = function (hometown, state, country,world) {
  console.log('first name:', this.firstName, 'last name:', this.lastName, 'hometown: ', hometown, 'state: ', state, 'country: \n', country, 'world: ', world);
};

// implementing bind method
Function.prototype.myBind = function (...args) {
  let obj = this, params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params,...args2]);
  }
}
const printMyName = printName.myBind(name, 'hyderabad', 'telangana');
printMyName('India', 'World');