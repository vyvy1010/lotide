const assertEqual = require('./assertEqual'); 

// findKeyByValue FUNCTION
const findKeyByValue = function(bestTVShowsByGenre, TVShow) {
  for (const Genre of Object.keys(bestTVShowsByGenre)) {
    if (bestTVShowsByGenre[Genre] === TVShow) {
      return Genre;
    }
  }
};



module.exports = findKeyByValue;