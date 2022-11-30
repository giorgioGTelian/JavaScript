const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// olde:

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

//new stuff:

const { today } = HIGH_TEMPERATURES.today;
const { tomorrow } = HIGH_TEMPERATURES.tomorrow;

