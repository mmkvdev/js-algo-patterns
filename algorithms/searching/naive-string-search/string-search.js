/*
 * Naive String Search
 * input 1 { string }
 * input 2 { substring that we have to count it's occurrences in input 1 string }
 * returns { the count of occurrences of string2 in string1 }
*/


const stringSearch = (str1, str2) => {
  let k = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i+j] !== str2[j]) {
        break;
      }
      if (j === str2.length - 1) {
        k++;
      }
    }
  }
  return k;
}

console.log(stringSearch('abcabcda', 'abc'));
console.log(stringSearch('abcabcdaa', 'a'));
console.log(stringSearch('abcabcdaa', 'e'));