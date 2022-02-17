// asynchronous javascript

// Promise Chaining

let promiseChain = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });

promiseChain.then((result) => {
  console.log(result);
  return result * 2;
}).then((result) => {
  console.log(result);
  return result * 5;
})