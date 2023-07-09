const assertEqual = require('./assertEqual');

const findKey = function(inputObject, callback) {
  for (const key of Object.keys(inputObject)) {
    if (callback(inputObject[key])) {
      return key;
    }
  }
  return undefined;
};



module.exports = findKey;