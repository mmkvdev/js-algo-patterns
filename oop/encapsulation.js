const elf = {
  name: 'Orwell',
  weapon: 'bow',
  attack() {
    return `attack with ${this.weapon}`
  }
}

const elf2 = {
  name: 'Sandra',
  weapon: 'knife',
  attack() {
    return `attack with ${this.weapon}`
  }
}

elf.attack();
elf2.attack();