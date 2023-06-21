// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  let middleArray = [];
  const l = array.length;
  if (l <= 2) {
    middleArray = [];
  } else {
    if (l % 2 !== 0) {
      middleArray.push(array[(l - 1) / 2]);
    } else {
      middleArray.push(array[l / 2 - 1]);
      middleArray.push(array[l / 2]);
    }
  }
  return middleArray;
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);