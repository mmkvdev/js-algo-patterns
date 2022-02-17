// Capitalize 1st character of all words having at least K characters

const capitalizeFirstCharacter = (str, k) => {
  if (!str) {
    return false;
  }

  let ptr = 0; 
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      ptr = i + 1;
    }
    console.log(str[i], ptr, i);
    if (i - ptr + 1 >= k) {
      str[ptr] = str[ptr].toUpperCase();

    } 
  }

  return str.join('');
}

capitalizeFirstCharacter('geeksforgeeks is the best', 0);