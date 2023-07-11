const middle = function(array) {
  let middleArray = [];
  const l = array.length;
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (l <= 2) {
    middleArray = [];
  } else {
    if (l % 2 !== 0) {
      middleArray.push(array[(l - 1) / 2]); // For arrays with odd number of elements, an array containing a single middle element should be returned.
    } else {
      middleArray.push(array[l / 2 - 1]); // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
      middleArray.push(array[l / 2]);
    }
  }
  return middleArray;
};

module.exports = middle;
