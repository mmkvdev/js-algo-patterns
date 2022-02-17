// ES6 Class

// Class Declaration
class Elf {
  constructor (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  
  attack () {
    return `attack with ${this.weapon}`;
  }
}

const peter = new Elf('Peter', 'fire');
peter.attack();

console.log(peter instanceof Elf);



// Class Expressions

// Named Class Expression
let classExpression = class example {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
} 

// accessing a named class expression
console.log(classExpression.name); // example


// Unnamed Class Expression
let unNamedClassExpression = class {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

// accessing an unnamed class expression
console.log(unNamedClassExpression.name); // unNamedClassExpression