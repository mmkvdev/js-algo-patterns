// valid anagrams

const constructObj = (obj) => {
  let res = {};
  for (let i of obj) {
    res[i] = ++res[i] || 1;
  }
  return res;
}

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  // str1 and str2 should have same frequency of words
  let res1 = constructObj(str1);
  let res2 = constructObj(str2);

  console.log(res1, res2);

  for (let k in res1) {
    if (!(k in res2)) {
      return false;
    }

    if (res2[k] !== res1[k]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('aaz', 'aza'));
console.log(validAnagram('', ''));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('geazy', 'ygeaz'));
console.log(validAnagram('1', '1'));