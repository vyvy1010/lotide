const findKey = function(inputObject, callback) {
  for (const key of Object.keys(inputObject)) {
    if (callback(inputObject[key])) {
      return key;
    }
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual}!=== ${expected}`);
  }
};
// TEST CODE
const exampleObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
// Test code
console.log(findKey(exampleObject, x => x.stars === 2));
assertEqual(findKey(exampleObject, x => x.stars === 2),"noma");