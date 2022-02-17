// IDEMPOTENCE

function notAGoodFunction (num) {
  return Math.random(num);
}

function goodFunction (num) {
  console.log(num);
}


function idempotent(num) {
  return Math.abs(num);
}

// notAGoodFunction(5);
// goodFunction(5);
idempotent(idempotent(idempotent(-5)));