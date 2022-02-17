// this

// new binding -  this will point to the object that is instantiated from this function using the new keyword.
function Person (name, age) {
  this.name = name;
  this.age = age;
}

const Person1 = new Person('MMK', 25);
Person1;


// implicit binding - this will point to the internal state of the object.
const person = {
  name: 'MMK',
  age: 25,
  cool () {
    return 'hi' + this.name;
  }
}

// explicit binding - telling what the value of this should be
const explicitPerson = {
  name: 'explicitly',
  age: 39,
  cool: function () {
    console.log('hi' + this.name);
  }.bind(person)
}

explicitPerson.cool();

// arrow functions
const arrowPerson = {
  name: 'arrow functions',
  age: 42,
  hi: function () {
    var inner = () => {
      console.log('hi ' + this.name);
    }

    return inner();
  }
}

arrowPerson.hi();

