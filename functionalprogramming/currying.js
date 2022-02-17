// Currying

const multiply = (a,b) => a*b;

// with currying
const currMultiply = (a) => (b) => a*b;

multiply(4,3);

// can be used as a utility function
const currMultiplyBy5 = currMultiply(5);
currMultiplyBy5(4);