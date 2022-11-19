const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

//solution:

function checkObj(obj, checkProp) {
  //we check if the the obj has the property checkprop
if (obj.hasOwnProperty(checkProp)) { 
  return obj[checkProp];
} else { // we write a else statement to check if there is nothing

return "Not Found";
}

  
}
