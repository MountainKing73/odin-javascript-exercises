const palindromes = function (word) {
  let front = 0;
  let back = word.length - 1;

  while (back > front) {
    if (word[front] === word[back]) {
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
