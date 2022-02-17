/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */

function integerToRoman(num) {
  // your code here
  const literals = ['M','CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX','V', 'IV', 'I'];
  const romanLiterals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const res = [];
    for (let i = 0; i < romanLiterals.length;i++) {
      while (num >= romanLiterals[i]) {
        res.push(literals[i]);
        num -= romanLiterals[i];
      }
    }
    return res.join('');
}

romanToInteger(123);