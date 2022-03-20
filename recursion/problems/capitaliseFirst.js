// given an array of strings, capitalise the first character of each string in the array

// ['js', 'react', 'dsa'] -> ['Js', 'React', 'Dsa']

const capitaliseFirst = (arr) => {
	if (arr.length === 1) {
  	return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  }
  
  let newArr = [];
  
  for (let i = 0;  i < arr.length; i++) {
  	newArr = newArr.concat(capitaliseFirst([arr[i]]));
  }
  
  return newArr;
}

console.log(capitaliseFirst(['js', 'react','dsa']));
console.log(capitaliseFirst(['j', 'react','dsa']));