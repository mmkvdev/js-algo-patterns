function a() {
  const grandpa = 'grandpa';
  return function b() {
    const father = 'father';
    return function c () {
      const son = 'son';
      return `${grandpa} > ${father} > ${son}`;
    }
  }
}

a()()();