// Memoization

function addTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('caching');
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memoizedAddTo80 = addTo80();
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(6));
console.log(memoizedAddTo80(7));