const findKeyByValue = require("../findKeyByValue");
const assertEqual = require("../assertEqual");

describe("#findKeyByValue", () => {
  it("returns correct result", () => {

    // TEST CODE
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
