const fibonacci = function (num) {
  num = Number(num);
  if (num < 0) {
    return "OOPS";
  }

  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let num1 = 0;
  let num2 = 1;
  let fib = 0;

  for (let i = 2; i <= num; i++) {
    fib = num1 + num2;
    num1 = num2;
    num2 = fib;
  }

  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
