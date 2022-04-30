// compose(square, addTen)(20)

/* 
const square = (data) => {
  console.log('at square: ',data);
  return data**2;
}

const addTen = (data) => {
  console.log('at ten: ', data);
  return data + 10;
}

const addThirty = (data1,data2) => {
  console.log('at thirty: ',data1, data2);
  return data1 + data2 + 30;
} */




// (...args) => square(addTen(...args)) -> f (addThirty(...args))

/* const compose = (...funcs) => (data) =>  {
  // console.log(funcs);
  let res = data;
  for (let i = funcs.length-1; i >= 0;i--) {
    res = funcs[i](res);
  }
  return res;
} */

/* const composer = function (f,g) {
  console.log('functions: ', f, g);
  return function (...args) {
    console.log('arguments: ', args);
    return f(g(...args));
  };
} */

/* const piper = (f,g) => (...args) => g(f(...args));
const compose = (...funcs) => funcs.reduce(composer);
const pipe = (...funcs) => funcs.reduce(piper);

let data = 20;
console.log(compose(square, addTen, addThirty)(data,400)); */ // square(addTen(addThirty(20)))




/* 
const state = {
  person: {
    age: 45,
    name: {
      firstName: 'Tekion',
      lastName: 'Corp'
    }
  }
};


this.setState({
  lastName: e.target.value
}); */




const summation = (a,b) => {
    return a+b;
  }
  
  
  
  
  
  
  
  const sum = (data) => (...args) => args.length > 0 ? sum(data + args.reduce((a,b) => a+b), 0).valueOf = () => data : data;
  // const sum = (...args) => 
  
  const sum1 = sum(1);
  console.log(sum1(2) == 3) // true
  console.log(sum1(3) == 4) // true
  console.log(sum(1)(2)(3) == 6) // true
  console.log(sum(5)(-1)(2) == 6) // true
  
  
  
  /* 
  const sum = function (num) {
    const func = function (...args) {
      console.log('args: ', args);
      if (args.length > 0) {
        return sum(num + args.reduce((sumValue,currentValue) => sumValue + currentValue, 0));
      } else {
        return num;
      }
    }
    func.valueOf = () => num;
    return func;
  }
  
  const sum1 = sum(1);
  sum1(2);
  sum1(3);
  sum(1)(2)(3);
  sum1(5)(-1)(2); */