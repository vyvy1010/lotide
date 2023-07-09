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



module.exports = countLetters;