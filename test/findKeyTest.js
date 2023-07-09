const findKey = require("../findKey");
const assertEqual = require("../assertEqual");

describe("#findKey", () => {
  it("find correct key", () => {
    // TEST CODE
    const exampleObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    // Test code
    assertEqual(findKey(exampleObject, x => x.stars === 2), "noma");
  });

});
