import assert from "node:assert";
import Percentage from "../libs/Percentage.js";
describe("Pourcentage", () => {
  describe("#Evolution", () => {
    it("It should give an evolution of 100", () => {
      assert.equal(Percentage.evolution(100, 100), 100, "Devrait renvoyer 100");
    });
    it("It should give an evolution of 50", () => {
      assert.equal(Percentage.evolution(100, 150), 50, "Devrait renvoyer 50");
    });
    it("It should give an evolution of -50", () => {
      assert.equal(Percentage.evolution(100, 50), -50, "Devrait renvoyer -50");
    });
  });
});
