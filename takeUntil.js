const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    } else results.push(item);
  }
  return results;
};

module.exports = takeUntil;