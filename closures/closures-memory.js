// Closures are Memory Efficient
function heavyDuty (index) {
  const bigArray = new Array(100).fill(':)');
  console.log('called');
  return bigArray[index];
} 


heavyDuty(1);
heavyDuty(1);
heavyDuty(1);
heavyDuty(1);


function heavyDutyOptimised () {
  const bigArray = new Array(100).fill(':)');
  console.log('called optimised');
  return function (index) {
    return bigArray[index];
  };
}

const opt = heavyDutyOptimised();

opt(13);
opt(13);
opt(13);