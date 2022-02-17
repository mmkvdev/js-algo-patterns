// Compose and Pipe

// multiply by 3 and make it positive

const compose = (f,g) => (data) => f(g(data));
const pipe = (f,g) => (data) => g(f(data));
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);

const multiplyBy3AndMakePositive = compose(multiplyBy3, makePositive);
const multiplyBy3AndMakePositiveWithPipe = pipe(multiplyBy3, makePositive);
multiplyBy3AndMakePositive(-50);
multiplyBy3AndMakePositiveWithPipe(-50);