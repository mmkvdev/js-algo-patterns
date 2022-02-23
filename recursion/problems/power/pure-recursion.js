/*
* @function power
* @parameter base
* @parameter exponent
* @returns base ^ exponent
* example - base 2 | exponent 3 -> 8
*/

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base,exponent - 1);
}

console.log(power(3,3));