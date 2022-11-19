//an example of article object:
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article[author];
const articleLink = article[link];

const value = "title";
const valueLookup = article[value];

//articleAuthor is the string Kaashan Hussain, articleLink is the string https:
//www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, 
//and valueLookup is the string How to create objects in JavaScript.

//Convert the switch statement into an object called lookup. 
// Use it to look up val and assign the associated string to the result variable:

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

//the solution:

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
var lookup = {
"alpha": "Adams",
"bravo": "Boston",
"charlie": "Chicago",
"delta": "Denver",
"echo": "Easy",
"foxtrot": "Frank",
"": undefined
};
  result = lookup[val];

  // Only change code above this line
  return result; 
  }

phoneticLookup("charlie");
