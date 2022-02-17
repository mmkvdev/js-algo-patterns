function sum (a,b,c) {
  return a + b + c;
}

const curry = function (sumFunc) {
  return function innerFunc(...args) {
    console.log(args, args.length);
    if (args.length >= sumFunc.length) {
      return sumFunc.apply(this, args);
    } else {
      return function (...args2) {
        return innerFunc.apply(this, [...args,...args2]);
      }
    }
  }
}

const result = curry(sum);
// console.log(result(1,2,3));
console.log(result(1,8)(2,3,9));

// sum(1, 2, 3); 
// sum(1)(2,3); 
// sum(1)(2)(3);