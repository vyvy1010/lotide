const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let withoutRemovedItems = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        withoutRemovedItems.push(source[i]);
      }
    }
  }
  return withoutRemovedItems;
};
// Test case:
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, without(words, ["lighthouse"]));

module.exports = without;
