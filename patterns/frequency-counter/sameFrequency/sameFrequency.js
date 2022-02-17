// sameFrequency

// Time Complexity - O(n)
// Space Complexity - O(n)


const constructObj = (n) => {
  let res = {}, temp;

  while (n) {
    temp = n % 10;
    res[temp] = ++res[temp] || 1;
    n = parseInt(n / 10);
  }

  return res;
}

const sameFrequency = (n1, n2) => {
  let n1Res = constructObj(n1);
  let n2Res = constructObj(n2);

  if (Object.keys(n1Res).length > Object.keys(n2Res).length || Object.keys(n1Res).length < Object.keys(n2Res).length) {
    return false;
  }
  for (let i in n1Res) {
    if (!(i in n2Res)) {
      return false;
    } else if(n2Res[i] !== n1Res[i]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(18,281));
console.log(sameFrequency(991,199));