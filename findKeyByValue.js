const assertEqual = require('./assertEqual'); 

// findKeyByValue FUNCTION
const findKeyByValue = function(bestTVShowsByGenre, TVShow) {
  for (const Genre of Object.keys(bestTVShowsByGenre)) {
    if (bestTVShowsByGenre[Genre] === TVShow) {
      return Genre;
    }
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

module.exports = findKeyByValue;