const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😃 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual}!=== ${expected}`);
  }
};
// Test case:
const words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, word => word[0]));
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
const emptyArrays = [];
assertArraysEqual(map(emptyArrays, emptyArray => emptyArray[0]), []);
const names = ['Annie', 'Anna', 'Andrew'];
assertArraysEqual(map(names, name => name[0]), ['A', 'A', 'A']);
assertArraysEqual(map(names, name => name[0]), ['a', 'a', 'a']);
