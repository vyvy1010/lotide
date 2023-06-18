
const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return `❌ Assertion failed: ${actual}!=== ${expected}`;
      }

    }
    return `😃 Assertion passed: ${actual} === ${expected}`;
  }
  else {
    return `❌ Assertion failed: ${actual}!=== ${expected}`;

  }
};
const tail = function(array) {
  return array.slice(1);
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

// Test case 3: An array with only one element should yield an empty array for its tail
const oneElement = tail(["Hello"]);
console.log(oneElement);
console.log(assertEqual(oneElement.length, 0)); // ensure we get back two elements

// Test case 4: An empty array should yield an empty array for its tail
const empty = tail([]);
console.log(empty);
console.log(assertEqual(empty.length, 0)); // ensure we get back two elements