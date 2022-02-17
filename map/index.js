const mapDemo = new Map();

mapDemo.set('a', 1);
mapDemo.set('b', 2);
mapDemo.set('c', 3);

console.log(mapDemo.get('c'));
console.log(mapDemo.has('a'));
// mapDemo.delete('a');
console.log(mapDemo.has('d'));


const iterateMap = mapDemo.keys();
console.log(iterateMap.next().value);

for (let [key, value] of mapDemo) {
  console.log(key, value);
}

const iterateMapOfValues = mapDemo.values();
console.log(iterateMapOfValues.next().value);
console.log(iterateMapOfValues.next().value);
console.log(iterateMapOfValues.next().value);
console.log(iterateMapOfValues.next().value);


// entries
const iterateMapEntries = mapDemo.entries();
console.log(iterateMapEntries.next().value);


const obj = {
  'a': 1,
  'b': 2
}
// forEach
mapDemo.forEach((key, value) => {
  console.log(key, value);
}, obj);

// for..of

for (let i of mapDemo.keys()) {
  console.log(i);
}

for (let i of mapDemo.values()) {
  console.log(i);
}

for (let [i,j] of mapDemo.entries()) {
  console.log(i,j);
}



// relation with arrays
const demoArray = [['a', 1], ['b', 1]];

const newMap = new Map(demoArray);
console.log(newMap);

console.log(Array.from(newMap));
console.log([...newMap]);
console.log(Array.from(newMap.entries()));


// cloning map objects
const mapOriginal = [['d', 4],['f', 5]];
const mapClone = new Map(mapOriginal);
console.log(mapClone.get('d'), mapClone === mapOriginal);
mapClone.set('d',7);
console.log(mapClone, mapOriginal);


// merging map objects
const mapPart1 = new Map([['a',1], ['b',2]]);
console.log(mapPart1);
const mapPart2 = new Map([['b',3], ['c',4]]);
console.log(mapPart2);
const mapPart3 = new Map([...mapPart1,...mapPart2]);
console.log(mapPart3);