/*
* @function power
* @parameter base
* @parameter exponent
* @returns base ^ exponent
* example - base 2 | exponent 3 -> 8
*/

const power = (base, exponent) => {
  let pro = 1;
  const innerPower = (a, b) => {
    if (b === 0) {
      return;
    }
    pro *= a;
    b--;
    innerPower(a, b);
  }
  innerPower(base, exponent);
  return pro;
}

console.log(power(3,3));