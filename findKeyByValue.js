// findKeyByValue FUNCTION
const findKeyByValue = function(bestTVShowsByGenre, TVShow) {
  for (const Genre of Object.keys(bestTVShowsByGenre)) {
    if (bestTVShowsByGenre[Genre] === TVShow) {
      return Genre;
    }
  }
};

// assertEqual FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual}!=== ${expected}`);
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);