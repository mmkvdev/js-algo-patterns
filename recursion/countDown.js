const countDown = (num) => {
  if (num <= 0) {
    return 'Execution is Done!!!'
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(5));