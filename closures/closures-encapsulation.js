// Closures support Encapsulation

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction -= 1;
    return 'boom';
  }
  setInterval(passTime, 1000);

  return {
    totalPeaceTime: totalPeaceTime
  }
}

const explosiveParameter = makeNuclearButton();


explosiveParameter.totalPeaceTime();
explosiveParameter.totalPeaceTime();
explosiveParameter.totalPeaceTime();