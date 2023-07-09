const countLetters = require("../countLetters");
const assertArraysEqual = require('../assertArraysEqual');

describe("#countLetters", () => {
  it("returns correct result", () => {
    // TEST CODE
    console.log(countLetters("lighthouse in the house"));
    assertArraysEqual(countLetters("lighthouse in the house"), {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
});

