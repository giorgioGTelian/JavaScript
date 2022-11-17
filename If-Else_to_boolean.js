//first example

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// Since === returns true or false, we can simply return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}


//second example

function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
isLess(10, 15);

// this is equal to the second exemple


function isLess(a, b) {
   return a < b;
}


isLess(10, 15);
