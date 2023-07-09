const flatten = require("../flatten");
const assertArraysEqual = require("../assertArraysEqual");

describe("#flatten", () => {
  it("returns correct result", () => {

    // Test case:
    console.log(flatten([1, 2, [3, 4], 5, [6]]));
    console.log(flatten([1, 2, [], 5, [6]]));
    console.log(flatten(['hello', ['my', 'friend'], ['how', 'are', 'you']]));
    assertArraysEqual(flatten([1, [2], [], 5, [6, 7]]), [1, 2, 5, 6, 7]);
    assertArraysEqual(flatten([1, [2], [], [6, 7]]), [1, 2, 5, 6, 7]);
  });
});
