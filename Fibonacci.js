const fib = (n) =>  { 
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n + 1);
};

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

//at console log 50 we have your program running for too long one possible solution is:
console.log(fib(5));

//a solution is to implement memoization:
// we need to use a js obj the keys will be the arguments of the function and than the value will be the return value 
//so i will assign memo to be an empty object:

const fib = (n, memo = {}  ) =>  {  //if i ware to call the fib funcion and not giving an argument it will create this object memo
  //this memo has to store n as key and number as the return number of the fuction
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n + 1, memo);
  return memo[n];
};

{}
