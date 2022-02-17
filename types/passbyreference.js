/* let a = {
  'a': 1,
  'b': 2,
  'c': 3
}; */

// deeply nested objects
let a = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': {
    'e': 7
  }
};

let b = Object.assign({},a);

// Spread Operator
let c = {...a};

// Deep Cloning
let superClone = JSON.parse(JSON.stringify(a));

a['c'] = 5;
a['d']['e'] = 17;

console.log(a);
console.log(b);
console.log(c);
console.log(superClone);