// Constructor Functions

// functions always start with a capital letter
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

// console.log(Elf.prototype);
Elf.prototype.attack = function () {
  return `attack with ${this.weapon}`;
}

Elf.prototype.build = function () {
  const self = this;
  function building () {
    return `building house with ${self.name}`;
  }
  return building();
  // return building.bind(this);
}
// console.log(Elf.prototype);

const peter = new Elf('Peter', 'stones');
console.log(peter.attack());
// peter.name;
const sam = new Elf('Sam', 'fire');
console.log(sam.attack());


// Function Constructor
const constructorFunctionEngine = new Function('name', 'weapon', `this.name = name;this.weapon = weapon;`);

const Elf1 = new constructorFunctionEngine('San', 'Fireworks');
Elf1;