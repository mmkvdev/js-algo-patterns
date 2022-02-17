// exercise 2

const array = [1,2,3,4];


// solution 1
setTimeout(function () {
  for (var i = 0; i < array.length; i++) {
    console.log('I am at index: ' + i);
  }
}, 3000);



// solution 2
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index: ' + array[i]);
    }, 3000);
}

// solution 3
for (var i = 0; i < array.length; i++){
  (function (closureI) {
      setTimeout(function () {
        console.log('I am at index: ' + closureI);
      }, 3000);
  })(i);
}