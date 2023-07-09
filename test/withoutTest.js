const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");
describe("#without", () => {
  it("returns correct result", () => {
    // Test case:
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assertArraysEqual(words, ["hello", "world", "lighthouse"]);
    assertArraysEqual(words, without(words, ["lighthouse"]));
  });
});
