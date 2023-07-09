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

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;