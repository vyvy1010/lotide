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
// Test case:
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [], 5, [6]]));
console.log(flatten(['hello', ['my', 'friend'], ['how', 'are', 'you']]));
assertArraysEqual(flatten([1, [2], [], 5, [6, 7]]), [1, 2, 5, 6, 7]);
assertArraysEqual(flatten([1, [2], [], [6, 7]]), [1, 2, 5, 6, 7]);