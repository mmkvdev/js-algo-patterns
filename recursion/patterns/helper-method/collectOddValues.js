// helper method recursion

const collectOddValues = (arr) => {
  let res = [];
  const helper = (input) => {
    if (input.length === 0) {
      return ;
    }
    if (input[0] % 2 !== 0) {
      res.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);
  return res;
}

console.log(collectOddValues([1,3,5,6,8]));