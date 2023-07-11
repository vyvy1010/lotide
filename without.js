
const without = function(source, itemsToRemove) {
  let withoutRemovedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.length !== 0) {
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] !== itemsToRemove[j]) {
          withoutRemovedItems.push(source[i]);
        }
      }
    } else withoutRemovedItems.push(source[i]);
  }
  return withoutRemovedItems;
};

module.exports = without;
