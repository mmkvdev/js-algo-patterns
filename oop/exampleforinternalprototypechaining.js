// JS wraps variable `b` to Number, so that it has access to other variables and methods from the prototypal inheritance
var a = new Number(5);
console.log(typeof a);

var b = 5;
console.log(b);


a == b;