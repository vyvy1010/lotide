const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("asserts correct result", () => {
    assertEqual("Bootcamp", "Bootcamp");
    assertEqual("Lighthouse Labs", "Bootcamp");
    assertEqual(1, 1);
    assertEqual(1, 2);
  });
});

