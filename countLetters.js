const assertArraysEqual = require('./assertArraysEqual');

const countLetters = function(inputString) {
  let outputObject = {};
  let noSpaceString = inputString.split(' ').join('');
  for (const letter of noSpaceString) {
    if (outputObject[letter]) {
      outputObject[letter] += 1;
    } else {
      outputObject[letter] = 1;
    }
  }
  return outputObject;
};

// TEST CODE
console.log(countLetters("lighthouse in the house"));
assertArraysEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});

module.exports = countLetters;