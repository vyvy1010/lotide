const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(nestedArray) {
  let flattenArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (!Array.isArray(nestedArray[i])) {
      flattenArray.push(nestedArray[i]);
    } else {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flattenArray.push(nestedArray[i][j]);
      }
    }
  }
  return flattenArray;
};


module.exports = flatten;