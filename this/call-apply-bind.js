const wizard = {
  name: 'Varma',
  health: 100,
  heal: (nums1,nums2) => {
    return this.health += 30 + nums1 + nums2;
  }
}

const player1 = {
  name: 'Madhu',
  health: 30,
}

console.log('1', player1);

// call
wizard.heal.call(player1, 12, 14);

// apply 
// wizard.heal.apply(player1, [12, 14]);

//bind
// const a = wizard.heal.bind(player1, 12, 14);

console.log('2', player1);