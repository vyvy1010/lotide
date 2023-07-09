const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");

describe("#map", () => {
  it("returns correct result", () => {

    // Test case:
    const words = ["ground", "control", "to", "major", "tom"];
    console.log(map(words, word => word[0]));
    assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
    const emptyArrays = [];
    assertArraysEqual(map(emptyArrays, emptyArray => emptyArray[0]), []);
    const names = ['Annie', 'Anna', 'Andrew'];
    assertArraysEqual(map(names, name => name[0]), ['A', 'A', 'A']);
    assertArraysEqual(map(names, name => name[0]), ['a', 'a', 'a']);

  });
});
