// Prototypal Inheritance

let human = {
  mortal: true,
};

let socrates = Object.create(human);
socrates.age = 45;
console.log(socrates);

// prototype check
human.isPrototypeOf(socrates);
