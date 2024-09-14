const findTheOldest = function (people) {
  const sorted = people.sort((a, b) => {
    let aAge = a.yearOfDeath - a.yearOfBirth;
    if (a.yearOfDeath === undefined) {
      aAge = new Date().getFullYear() - a.yearOfBirth;
    }

    let bAge = b.yearOfDeath - b.yearOfBirth;
    if (b.yearOfDeath === undefined) {
      bAge = new Date().getFullYear() - b.yearOfBirth;
    }

    return bAge - aAge;
  });

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
