const sum = function (num) {
  const func = function (...args) {
    if (args.length > 0) {
      return sum(num + args.reduce((sumValue,currentValue) => sumValue + currentValue, 0));
    } else {
      return num;
    }
  }
  func.valueOf = () => num;
  return func;
}

console.log(sum(1)(2,8)(3,4)(7).valueOf());