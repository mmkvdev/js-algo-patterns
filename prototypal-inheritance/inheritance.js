// Prototypal Inheritance

let dragon = {
  name: 'goku',
  fire: true,
  fight () {
    return 5;
  },
  sing () {
    if (this.fire) {
      return `I am ${this.name} and I can emit fire with power ${this.fight()}`;
    }
  }
}


let lizard = {
  name: 'lizard',
  fight() {
    return 1;
  }
}

lizard.__proto__ = dragon;

lizard.fight();

// prototype check
dragon.isPrototypeOf(lizard);

for (let i in lizard) {
  if (lizard.hasOwnProperty(i)) {
    console.log(i);
  }
}

// dragon.fight();