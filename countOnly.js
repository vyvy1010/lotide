const assertEqual = require('./assertEqual');

// countOnly FUNCTION from instruction of @LHL
// inside the loop,
//  if item in itemsToCount
//   increment the counter for each item:
//    set a property with that string key to:
//     the value that was already there (or zero if nothing there) with 1 added to it.
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item] += 1;
      }
    }
  }
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;