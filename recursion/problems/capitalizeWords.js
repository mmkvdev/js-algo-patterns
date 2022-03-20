// ['js', 'react', 'dsa'] -> ['JS', 'REACT', 'DSA']

const capitalizeWords = (arr) => {
	if (arr.length === 1) {
  	return arr[0].toUpperCase();
  }
  
  let newArr = [];
  
  for (let i of arr) {
  	newArr = newArr.concat(capitalizeWords([i]));
  }
  
  return newArr;
}

console.log(capitalizeWords(['js', 'react', 'dsa']));


