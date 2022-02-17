// arrays

const strings = ['a','b','c','d'];

// string access - O(1)
strings[2];


// string methods

// push - O(1)
strings.push('e');

// pop - O(1)
strings.pop();
strings.pop();

console.log(strings);

// unshift - O(n)
strings.unshift('1');

// shift - O(n)
strings.shift();

// indexOf - O(n)
console.log(strings.indexOf('a'));

console.log(strings);

// splice - O(n)
strings.splice(2, 0, 'f', 'a');

// copy
let shallowCopy = [...strings];
console.log(strings);
console.log(shallowCopy);

// slice
let slicedArray = strings.slice(1,2);


// Array.from
let newArray = Array.from(strings);
console.log(newArray);

// Array.isArray()
console.log(Array.isArray(strings));

// Array.of()
console.log(Array.of(7));

// Array.length
console.log(strings.length);

// Array.at()
// console.log(strings.at(3));


// Array.values()
console.log(strings.values().next().value);
console.log(strings.values().next().value);
console.log(strings.values().next().value);


// sort()
strings.sort();
console.log(strings);


// some()
console.log(strings.some((str) => str === 'a'));

// reverse()
strings.reverse();
console.log(strings);
