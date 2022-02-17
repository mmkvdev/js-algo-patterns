//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
new Date('1988-10-10').lastYear()
//'1899'


//#Bonus
// Modify .map() to print '🗺' at the end of each item.

Array.prototype.map = function () {
  let array = [];
  for (let i = 0; i < this.length;i++) {
    array.push((this[i] + '🗺'));
  }
 
  return array;
}

console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺