//                             the following 


if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}


//                            could be replaced by 


switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

// so this exercise 

function chainToSwitch(val) {
  let answer = "";


  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

 
  return answer;
}

chainToSwitch(7);


// will be in swicth statements:

function chainToSwitch(val) {
  let answer = "";

switch (val) {
  case bob: 
    answer = "Marley";
    break;
  case 42: 
    answer = "The Answer";
    break;
  case 1: 
    answer = "There is no #1";
    break;
  case 99: 
    answer = "Missed me by this much!";
    break;
  case 7: 
    answer = "Ate Nine";
    break;
  case "John": 
    answer = "";
    break;
  case 156: 
    answer = "";
    break;
  }


  return answer;
}
