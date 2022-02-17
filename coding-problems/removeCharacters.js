/* function removeChars(input) {
  const charInput = input.split('');
  charInput.forEach((ele) => {
    if (ele === 'b') {
      charInput.splice(charInput.indexOf(ele), 1);
    } else if (ele === 'a') {
      const getIndexofEle = charInput.indexOf(ele);
      if (getIndexofEle+1 < charInput.length) {
        if (charInput[getIndexofEle+1] === 'c') {
          charInput.splice(charInput.indexOf(ele),2);
        } 
      }
    }
  });
  if (charInput.includes('b') || charInput.includes('c')) {
    charInput.forEach((ele) => {
    if (ele === 'b') {
      charInput.splice(charInput.indexOf(ele), 1);
    } else if (ele === 'a') {
      const getIndexofEle = charInput.indexOf(ele);
      if (getIndexofEle+1 < charInput.length) {
        if (charInput[getIndexofEle+1] === 'c') {
          charInput.splice(charInput.indexOf(ele),2);
        } 
      }
    }
  });
  }

  return charInput.join('');
} */


function removeChars(input) {
  let stack = [], i = 0;

  while(i < input.length) {
    const charData = input[i];
    if (stack.length && charData === 'c' && stack[stack.length-1] === 'a') {
      stack.pop();
    } else if (charData !== 'b') {
      stack.push(charData);
    }
    i++;
  }
  return stack.join('');
}
removeChars('cabbaabcca');