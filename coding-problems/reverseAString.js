// Hi My Name is MMK - KMM si emaN yM iH

const reverseString = (str) => {
  if (!str) {
    return null;
  }

  let res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    res.push(str[i]);
  }

  return res.join('');
}

console.log(reverseString('Hi My Name is MMK'));