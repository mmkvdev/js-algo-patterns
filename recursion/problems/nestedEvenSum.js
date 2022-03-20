/*
	obj = {
  	'a': 2,
		'b': {
    	'c': 4,
      'd': {
      	'e': 9
      }
    }
  }
  
  nestedEvenSum(obj); // 6
*/

const nestedEvenSum = (obj, evenSum = 0) => {
	for (let i in obj) {
  	if (typeof obj[i] === 'object') {
    	evenSum = nestedEvenSum(obj[i], evenSum);
    } else if (typeof obj[i] === 'number' && obj[i] % 2 === 0) {
    	evenSum += obj[i];
    }
  }
  
  return evenSum;
}

let obj = {
  	'a': 2,
		'b': {
    	'c': 4,
      'd': {
      	'e': 9
      }
    }
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}


var obj2 = {
  a: 2,
  b: { 
			b: 2, 
			bb: 
			{ 
				b: 3, 
				bb: {
						b: 2
				}
      }
   },
  c: { 
			c: 
				{	
					c: 2
				}, 
				cc: 'ball', 
				ccc: 5
		},
  d: 1,
  e: {
			e: { 
						e: 2
				 }, 
				 ee: 'car'
 }
};

console.log(nestedEvenSum(obj)); // 6
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10