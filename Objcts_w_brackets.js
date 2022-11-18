// example of setting brackets notation to see what the obj is about

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

//
// exercise:
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line

//
// solution instead of declaring a constant we use brackets:
// 

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// you still have to declare the constant to change the value in the other constant
const entreeValue = testObj["an entree"];   // Change this line

const drinkValue = testObj["the drink"];    // Change this line
