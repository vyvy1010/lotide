
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌ Assertion failed: ${actual}!=== ${expected}`);

  }

};
const head = function(array) {
  return array[0];
    
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), 42); // Test for an array with only one element
assertEqual(head([]), undefined); // Test for an empty array