// flatten an object


const data = {
  'a': 3,
  'b': 4,
  'c': {
    'd': 5,
    'e': 6,
    'f': {
      'g': 7
    }
  },
  'h': 8
}

// { 'a': 3, 'b': 4, 'c'.'d': 5, 'c'.'e': 6, 'c'.'f'.'g': 7, 'h': 8 }
const flatten = (obj, rootProp, res = {}) => {
  for (let i in obj) {
    let propName = rootProp ? rootProp + '.' + i : i;
    if (typeof obj[i] === 'object') {
      flatten(obj[i], propName, res);
    } else {
      res[propName] = obj[i];
    }
  }

  return res;
}

console.log(flatten(data));