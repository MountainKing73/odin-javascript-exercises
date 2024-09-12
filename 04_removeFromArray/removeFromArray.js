const removeFromArray = function (origArray) {
  const args = Array.from(arguments);
  return origArray.filter((element) => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
