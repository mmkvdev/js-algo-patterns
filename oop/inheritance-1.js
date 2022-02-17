// ES6 Class
class Elf {
  constructor (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  
  attack () {
    return `attack with ${this.weapon}`;
  }
}

console.log(typeof Elf);
const peter = new Elf('Peter', 'fire');
peter.attack();

console.log(peter instanceof Elf)
const ogre = {...peter}; // cloning
console.log(ogre === peter);
console.log(ogre.__proto__, peter.__proto__);
Elf.__proto__