var duplicateCheck = {
  name: 'js'
};

var duplicationDemo = {
  name: duplicateCheck.name
};

console.log(duplicateCheck);
console.log(duplicationDemo);
duplicationDemo.name = 'mmk';
duplicateCheck.name = 'nodejs';
console.log(duplicateCheck);
console.log(duplicationDemo);