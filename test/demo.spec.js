import assert from "node:assert";
describe("Test something", () => {
  it("Should do something", () => {
    const a = 2;
    assert.equal(a * 2, 5, "La multiplication n'a pas fonctionner");
  });
});
