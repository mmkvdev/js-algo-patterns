// Array methods and their time complexities
const a = ['test', {}, [], 'time complexity'];

// push - O(1)
a.push(1);

// pop - O(1)
a.pop();

// shift - O(N)
a.shift();

// unshift - O(N)
a.unshift(2);


// concat - O(N)
a.concat([2]);

// slice - O(N)
a.slice(3);

// splice - O(N)
a.splice(1,0,'code');

// sort - O(N*logN)
a.sort();

// forEach | map | filter | reduce .... - O(N)

console.log(a);
