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

module.exports = middle;
