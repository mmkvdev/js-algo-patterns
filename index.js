/*
* @function capitalizeFirst
* @parameter Array<String>
* @returns an array where strings are capitalized
*/

const capitalizeWords = (arr) => {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(['calm', 'down', 'red hat']));