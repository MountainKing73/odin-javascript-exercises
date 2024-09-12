const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }

  let from = num1;
  let to = num2;
  if (num1 > num2) {
    from = num2;
    to = num1;
  }
  let total = 0;
  for (let i = from; i <= to; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
