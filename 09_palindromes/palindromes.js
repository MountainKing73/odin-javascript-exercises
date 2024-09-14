const palindromes = function (word) {
  let front = 0;
  let back = word.length - 1;

  word = word.toLowerCase();

  while (back > front) {
    let frontLetter = word[front];
    let backLetter = word[back];

    if (
      (frontLetter < "a" || frontLetter > "z") &&
      !(frontLetter >= "0" && frontLetter <= "9")
    ) {
      front++;
      continue;
    }

    if (
      (backLetter < "a" || backLetter > "z") &&
      !(backLetter >= "0" && backLetter <= "9")
    ) {
      back--;
      continue;
    }

    if (frontLetter === backLetter) {
      front++;
      back--;
    } else {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
