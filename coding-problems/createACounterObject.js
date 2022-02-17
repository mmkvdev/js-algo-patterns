

/**
 * @returns { {count: number}}
 */

function createCounter() {
  // your code here
  let count = 0;
  const countObj = {};
  Object.defineProperty(countObj, 'count', {
    get: () => {
      return count++;
    }
  });
  return countObj;
}

const counter = createCounter();
console.log(counter.count);
console.log(counter.count);
console.log(counter.count);
console.log(counter.count);
console.log(counter.count);
console.log(counter.count);
counter.count = 100;
console.log('after counter increment');
console.log(counter.count);
console.log(counter.count);


