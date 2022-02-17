// exercise 1

let view;
function setView () {
  let called = 0;
  console.log('view called');
  return function () {
    if (called > 0 ) {
      return;
    } else {
      view = '//\/';
      called++;
      return view;
    }
  }
}

const callingView = setView();
callingView();
callingView();
callingView();
callingView();
callingView();
callingView();
callingView();
callingView();
callingView();
console.log(view);