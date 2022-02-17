
// your code here
// var count = 0;

function count() {
  return ++count.counter;
};

count.counter = 0;
count.reset = function () {
  return count.counter = 0;
}

console.log(count());
console.log(count());
console.log(count());

count.reset();

console.log(count());
console.log(count());
console.log(count());