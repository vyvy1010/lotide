const eqArrays = require('./eqArrays')
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😃 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);

module.exports = assertObjectsEqual;
