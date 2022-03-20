function collectStrings (obj) {
	let newArr = [];
  
  for (let i in obj) {
  	if (typeof obj[i] === 'string') {
    	newArr.push(obj[i]);
    } else {
    	newArr = newArr.concat(collectStrings(obj[i]));
    }
  }
  
  return newArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])