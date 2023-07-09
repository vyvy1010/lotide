const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');

// eqObjects FUNCITON COMPARES 2 OBJECTS
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key of Object.keys(object1)) {
      if (!object2.hasOwnProperty(key)) {
        return false;
      } else if (Array.isArray(object1.key) && Array.isArray(object2.key)) {
        if (!eqArrays(object1.key, object2.key)) {
          return false;
        }
      } else if (object1.key !== object2.key) {
        return false;
      }
    }
    return true;
  }
};


module.exports = eqObjects;