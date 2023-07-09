const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");


describe("#letterPositions", () => {
  it("returns correct result", () => {

    // TEST CODE
    assertArraysEqual(letterPositions('hello').e, [1]);
  });
});
