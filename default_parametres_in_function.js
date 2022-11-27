const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// exercise:
//from this 
const increment = (number, value) => number + value;
const increment = (number,  value =1) => number + value;

console.log(increment(5, 2));
console.log(increment(5));
