/*
* @function reverseAString
* @parameter string
* @returns reverse of the input string
* example - 'string' -> 'gnirts'
*/

function reverseAString (str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseAString(str.slice(1)) + str[0];
}

console.log(reverseAString('string'));
console.log(reverseAString('google'));