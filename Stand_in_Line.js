function nextInLine(arr, item) {
  // Only change code below this line
var queue = arr.push(item);

var removeitem = arr.shift();

return removeitem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//                                                          Here I just follow what they ask

//                                    Instructions


// 1. Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// 2. Add the number to the end of the array.
// 3. Then remove the first element of array. The nextInLine function should then return the element that was removed.



//                                    SOLUTION        
// 1. Add number at the end of the array. So I use .push()
// 2. Remove the first element. .shift()
// 3. Return the element was removed. return removeItem After I setup the var with the .shift() method.
