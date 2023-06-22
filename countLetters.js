// assertArrayEqual FUNCTION
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
// countLetters FUNCTION
// skip, don't count space --> remove all space
// for...loop each letter in a string
//  add new letter into returned object
//   count letter
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

// TEST CODE
console.log(countLetters("lighthouse in the house"));
assertArraysEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
