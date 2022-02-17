/**
 * currying basic example
 */


function multiply(a,b) {
  return a*b;
}

const example = multiply.bind(this, 5,10);
example();
example();
example();

