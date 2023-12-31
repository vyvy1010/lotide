// letterPositions FUNCTION
// for...loop
//  create array before push any element
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (! results[sentence[i]]) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;