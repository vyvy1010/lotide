const assertObjectsEqual = require("../assertObjectsEqual");

describe("#assertObjectsEqual", () => {
  it("asserts correct result", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assertObjectsEqual(shirtObject, anotherShirtObject);

    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assertObjectsEqual(shirtObject, longSleeveShirtObject);

    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
  });
});

