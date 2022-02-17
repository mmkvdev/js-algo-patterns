// regular invocation

function index() {
  return 1;
}

index(); // this -> window


// method invocation
let methodInvokeObj = {
  name() {
    return 'js'; // this -> object that's invoking this method.
  }
}

methodInvokeObj.name();

// indirect invocation
function one() {
  return 1;
}

one.call(); // this is explicitly set here


// constructor function invocation
const a = new Function('num', 'return num');
a(4)