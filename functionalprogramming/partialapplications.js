// Partial Applications

const multiply = (a,b,c) => a*b*c;

// partial 
const partialMultiply = multiply.bind(null, 5);
partialMultiply(4,3);