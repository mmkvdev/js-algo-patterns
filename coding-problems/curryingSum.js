
const sum = (...args) => (...restArgs) => restArgs.length > 0 ? sum ([...args,...restArgs].reduce((a,b) => a + b)) : args.reduce((c,d) => c + d);

console.log(sum(1,2,9)(3,4,9,8)(5,6,7,1)(4,5,6)(7,2,1,1,1,1,1,1,1)());