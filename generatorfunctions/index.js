// Generator Functions

function* anotherGenerator(i) {
  yield i+1;
  yield i+2;
  yield i+3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i+10;

  return 1;
}

const gen = generator(10);

console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());