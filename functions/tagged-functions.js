// tagged functions
const logPerson = (msg, name, title) => {
  console.log(msg[0] + name + msg[1] + title);
}

const person = {
  name: 'WebMD',
  title: 'org'
};

logPerson`This is the team of ${person.name} and I'm a developer ${person.title}`;