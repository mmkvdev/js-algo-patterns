// objects and complexity of methods

let test = {
  firstName: 'time complexity',
  lastName: 'Efficiency',
  time: '30 days',
}

// Object.keys() - O(N)
console.log(Object.keys(test));

// Object.values() - O(N)
console.log(Object.values(test));

// Object.entries() - O(N)
console.log(Object.entries(test));

// hasOwnProperty() - accessing - O(1)
console.log(test.hasOwnProperty('firstName'));