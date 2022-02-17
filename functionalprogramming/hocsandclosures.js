// Higher Order Functions

const hof = (fn) => fn(5);
hof(function a(x) { return x; });

// Closures
const closure = function () {
  let count = 55;
  console.log('being called');
  return function increment () {
    return count;
  }
}

const getCounter = closure();
console.log(getCounter());
console.log(getCounter());
console.log(getCounter());