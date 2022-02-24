/*
* @function isPalindrome
* @parameter string
* @returns check whether the given string is a palindrome or not
* example - 'atta' -> 'atta'
*/


function isPalindrome(str) {
  if (str.length == 1) {
    return true;
  }

  if (str.length == 2) {
    return str[0] == str[1];
  }

  if (str[0] == str.slice(-1)) {
    return isPalindrome(str.slice(1,-1));
  }

  return false;
}

console.log(isPalindrome('atta'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('flower'));