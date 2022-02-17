// ES6 Class
class Character {
  constructor (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  
  attack () {
    return `attack with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor (name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }

  attack (cry) {
    return `attack with ${cry}`;
  }
};

/* console.log(Character.isPrototypeOf(Elf)); */
class Ogre extends Character {
  constructor (name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  attack () {
    return 'arhhhh';
  }

  makeFort() {
    return 'strongest fort in the world made';
  }
}

const peter = new Elf('Peter', 'fire', 'house');
peter.attack('bow and arrows');
const ogre = new Ogre('Shrek', 'club', 'green');
ogre.attack()

// tests
/* ogre.__proto__; */

/* console.log(Ogre.prototype.isPrototypeOf(ogre));
console.log(Character.isPrototypeOf(Ogre));
console.log(Character.prototype.isPrototypeOf(Ogre)); */

// peter instanceof Elf;