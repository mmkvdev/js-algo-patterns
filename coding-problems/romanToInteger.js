
/**
 * @param {string} str - roman numeral string
 * @returns {number} integer
 * https://bigfrontend.dev/problem/roman-numerals-to-integer
 */
function romanToInteger(str) {
  // your code here
  const romanLiterals = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  let res = 0;
  for (let i = str.length-1; i >= 0; i--) {
    let num = romanLiterals[str[i]];
    if (4 * num < res) {
      res -= num;
    } else {
      res += num;
    }
  }
  return res;
}