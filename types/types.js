typeof 5;
typeof true;
typeof 'string';
typeof undefined;
typeof null;
typeof {};
typeof Symbol('js')
typeof [];
typeof function(){};


// functions are objects
function hi() {
  return 'hi';
}

hi.greet = 'world';

console.log(hi);