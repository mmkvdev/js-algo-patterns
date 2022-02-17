setTimeout(() => {
  console.log('1 data');
}, 0);

setTimeout(() => {
  console.log('2 data hopefully');
}, 10);

Promise.resolve('2').then((data) => console.log('2 data from Promises', data));

console.log('3 data');
