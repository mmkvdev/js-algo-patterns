
// isSubsequence
// Time Complexity: O(n)
// Space Complexity: O(1) (Auxiliary)

const engine = (s1, s2) => {
  let i = 0, j = 0;

  while (j < s2.length) {
    if (s2[j] === s1[i]) {
      i++;
    }

    if (i === s1.length) {
      return true;
    }
    j++;
  }
  return false;
}

const isSubsequence = (str1, str2) => {
  if (!str1 || !str2) {
    return null;
  }
  if (str1.length === str2.length) {
    return engine(str1, str2);
  }
  return str1.length > str2.length ? engine(str2, str1) : engine (str1, str2);
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));