// import assert from "node:assert";
import {
  assert
} from "chai";
describe("Test something", () => {
  it("Should do something", () => {
    const a = 2;
    assert.equal(
      a * 2,
      4,
      "La multiplication n'a pas fonctionner",
      "Verification de l'evolution a echouer"
    );
  });
});